import { useEffect } from "react";
import { updateSVGWithSeed } from "@/lib/utils/artwork/updateSVGWithSeed";
import {
  attunementNames,
  themeColors,
  updateThemeColor,
} from "@/lib/utils/artwork/helpers";

type Theme = keyof typeof themeColors;

export const useArtworkHotkeys = (seed: BigInt) => {
  useEffect(() => {
    const artwork = document.getElementById("seedsArtwork");
    const seedText = document.getElementById("seednumber");

    artwork?.classList.add("js");
    artwork?.classList.add("reveal");
    artwork?.classList.add("pauseColor");

    artwork?.setAttribute("width", "100%");
    artwork?.setAttribute("height", "100%");
    artwork?.setAttribute("tabIndex", "0");

    // SEED RENDERER
    updateSVGWithSeed(BigInt(seed.toString()), artwork as HTMLElement);

    let timeoutId: number | null = null;

    // ATTUNEMENT COLORWAYS
    let currentAttunementIndex = 0;

    const initialAttunement = parseInt(
      artwork?.getAttribute("data-attunement") || "0"
    );

    if (seedText) {
      seedText.innerHTML = initialAttunement.toString();
    }

    // Ensure attunement is a valid number between 1 and 10
    if (
      !isNaN(initialAttunement) &&
      initialAttunement >= 0 &&
      initialAttunement <= 9
    ) {
      currentAttunementIndex = initialAttunement;
    }

    function toggleAttunement() {
      attunementNames.forEach((className) => {
        artwork?.classList.remove(className);
      });
      const currentAttunement = attunementNames[currentAttunementIndex];
      if (currentAttunement) {
        artwork?.classList.add(currentAttunement);

        updateThemeColor(currentAttunement as Theme);
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        if (seedText) {
          seedText.innerHTML = currentAttunement;
          timeoutId = window.setTimeout(() => {
            seedText.innerHTML = seed.toString();
          }, 3000);
        }
      }
    }

    toggleAttunement();

    return () => {};
  }, [seed]);
};
