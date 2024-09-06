"use client";
import React, { createContext, useContext } from "react";

import { DEF_RES_WIDTH, DEF_RES_HEIGHT } from "@/constants";

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
    // 1. get svg blob
    const range = document.createRange();
    const fragment = range.createContextualFragment(svgString);
    const tempSVG = fragment.children[0];

    updateSVGWithSeed(BigInt(seed.toString()), tempSVG, fragment, true);

    tempSVG.setAttribute("width", DEF_RES_WIDTH);
    tempSVG.setAttribute("height", DEF_RES_HEIGHT);

    let svgStringg = new XMLSerializer().serializeToString(tempSVG);
    const svgWithStyles = svgStringg.replace("</svg>", `${styleString}</svg>`);

    const svgBlob = new Blob([svgWithStyles], { type: "image/svg+xml" });
    let pngBlob;

    // 2. get png blob
    const img = new Image();
    return new Promise((resolve, reject) => {
      img.onload = function () {
        const canvas = document.createElement("canvas");
        canvas.width = DEF_RES_WIDTH;
        canvas.height = DEF_RES_HEIGHT;

        const context = canvas.getContext("2d");
        requestAnimationFrame(() => {
          // Allow the browser to render before drawing
          context.drawImage(img, 0, 0);

          canvas.toBlob(async (blob) => {
            const formData = new FormData();
            formData.append("file", blob);
            formData.append("seed", seed);

            try {
              const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
              });

              if (response.ok) {
                const data = await response.json();
                const pngUrl = data.pngUrl;
                resolve(pngUrl);
              } else {
                console.error("Upload failed:", response.statusText);
                reject(response.statusText);
              }
            } catch (error) {
              console.error("Error during upload:", error);
              reject(error);
            }
          }, "image/png");
        });
      };

      img.src = URL.createObjectURL(svgBlob);
    });

    // img.src = URL.createObjectURL(svgBlob);

    // 4. upload svg
    // const params = {
    //   Bucket: S3_BUCKET_NAME,
    //   Key: "seed" + seed + ".svg",
    //   Body: svgBlob,
    //   ContentType: "image/svg+xml",
    // };
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
