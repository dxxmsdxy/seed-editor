"use client";
import React, { createContext, useContext } from "react";

import { PREVIEW_RES_WIDTH, PREVIEW_RES_HEIGHT } from "@/constants";

import { updateSVGWithSeed } from "@/lib/utils/artwork/updateSVGWithSeed";
import { svgString } from "@/lib/utils/artwork/svgString";
import { styleString } from "@/lib/utils/artwork/styleString";
const ArtworkContext = createContext();

export const ArtworkProvider = ({ children }) => {
  const generateTempUrl = async ({ width, height, seed }) => {
    const range = document.createRange();
    const fragment = range.createContextualFragment(svgString);
    const tempSVG = fragment.children[0];

    updateSVGWithSeed(BigInt(seed.toString()), tempSVG, fragment, true);

    tempSVG.setAttribute("width", width.toString());
    tempSVG.setAttribute("height", height.toString());

    let svgStringg = new XMLSerializer().serializeToString(tempSVG);
    const svgWithStyles = svgStringg.replace("</svg>", `${styleString}</svg>`);

    const svgBlob = new Blob([svgWithStyles], { type: "image/svg+xml" });

    const pngDataUrl = await new Promise((resolve) => {
      const img = new Image();
      img.onload = function () {
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const context = canvas.getContext("2d");
        if (context) {
          context.drawImage(img, 0, 0);
        }

        const dataUrl = canvas.toDataURL("image/png");
        resolve(dataUrl);
      };

      img.src = URL.createObjectURL(svgBlob);
    });

    return pngDataUrl;
  };

  const getArtworkUrls = async (seed) => {
    try {
      // For local testing, use generateTempUrl instead of uploading to S3
      const pngUrl = await generateTempUrl({ width: PREVIEW_RES_WIDTH, height: PREVIEW_RES_HEIGHT, seed });
      return pngUrl;
    } catch (error) {
      console.error("Error generating artwork URL:", error);
      return null;
    }
  };

  return (
    <ArtworkContext.Provider
      value={{
        getArtworkUrls,
        generateTempUrl,
      }}
    >
      {children}
    </ArtworkContext.Provider>
  );
};

export const useArtwork = () => {
  const context = useContext(ArtworkContext);
  if (!context) {
    throw new Error("useArtworkProvider must be used within a ArtworkProvider");
  }

  return context;
};
