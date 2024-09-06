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

    const layers = document.querySelectorAll(".art, .outline");

    artwork?.classList.add("js");
    artwork?.classList.add("reveal");
    artwork?.classList.add("pauseColor");

    artwork?.setAttribute("width", "100%");
    artwork?.setAttribute("height", "100%");
    artwork?.setAttribute("tabIndex", "0");

    // SEED RENDERER
    updateSVGWithSeed(BigInt(seed.toString()), artwork as HTMLElement);

    let holdThreshold = 2200;
    let isSpinning = false;
    let isRevealed = true;
    let isDeep = false;
    let holdTimer: number;
    let timeoutId: number | null = null;

    let touchendX: number;
    let touchendY: number;

    let touchstartX: number;
    let touchstartY: number;

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

    toggleAttunement();

    // ADJUST ANIMATION DURATIONS
    const originalDurations = new Map();
    const originalDelays = new Map();

    // METHODS
    function prevAttunement() {
      currentAttunementIndex =
        (currentAttunementIndex - 1 + attunementNames.length) %
        attunementNames.length;
      toggleAttunement();
    }

    function nextAttunement() {
      console.log("Before:", currentAttunementIndex);
      let incrementedIndex = currentAttunementIndex + 1;
      console.log("Incremented:", incrementedIndex);
      currentAttunementIndex = incrementedIndex % attunementNames.length;
      console.log("After Modulo:", currentAttunementIndex);
      toggleAttunement();
    }

    const onWheel = (e: WheelEvent) => {
      console.log(e.shiftKey);
      console.log(e);
      if (e.deltaY < 0 && e.shiftKey) {
        updateStrokeWidth(true, e);
      } // Shift+Scroll up
      else if (e.deltaY > 0 && e.shiftKey) {
        updateStrokeWidth(false, e);
      } // Shift+Scroll down
      else if (e.deltaY < 0) {
        increaseSpeed();
      } else if (e.deltaY > 0) {
        decreaseSpeed();
      }
    };

    const updateStrokeWidth = (increment: boolean, event: WheelEvent) => {
      console.log("upd");
      console.log(layers);
      layers.forEach((el: Element) => {
        let element = el as HTMLElement; // Type assertion here
        let strokeWidthStr =
          getComputedStyle(element).getPropertyValue("stroke-width");
        let strokeWidth = strokeWidthStr ? parseFloat(strokeWidthStr) : 0;

        if (increment) {
          strokeWidth += 1;
        } else if (!increment && strokeWidth > 1) {
          strokeWidth -= 1;
        } else if (strokeWidth === 1) {
          strokeWidth = 0;
          if (event) {
            event.preventDefault();
          }
        }

        element.style.strokeWidth = `${strokeWidth}px`; // Now this line is valid
      });
    };

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

    function adjustAnimationDurations(factor: number) {
      const elements = document.querySelectorAll(".on");
      // Helper function to store the original animation delay
      function storeOriginalDelay(elem: Element) {
        const currentDelay = window.getComputedStyle(elem).animationDelay;
        if (!originalDelays.has(elem)) {
          originalDelays.set(elem, parseFloat(currentDelay) || 0);
        }
      }
      if (isSpinning) {
        elements.forEach((element: Element) => {
          const htmlElement = element as HTMLElement;
          const currentDuration =
            window.getComputedStyle(htmlElement).animationDuration;
          const currentDurationNumber = parseFloat(currentDuration) || 0;
          const newDuration = Math.max(0, currentDurationNumber * factor);
          htmlElement.style.animationDuration = newDuration + "s";
        });
      }
      // Modify the animation duration for the artwork element
      if (isRevealed) {
        if (artwork) {
          const currentDuration =
            window.getComputedStyle(artwork).animationDuration;
          const currentDurationNumber = parseFloat(currentDuration) || 0;
          if (!originalDurations.has(artwork)) {
            originalDurations.set(artwork, currentDurationNumber);
            storeOriginalDelay(artwork);
          }
          const newArtworkDuration = Math.max(
            0,
            currentDurationNumber * (factor - (factor - 1) / 3)
          );
          (artwork as HTMLElement).style.animationDuration =
            newArtworkDuration + "s";
        }
      }
    }

    function increaseSpeed() {
      if (isRevealed || isSpinning) {
        adjustAnimationDurations(0.8);
      }
      if (isSpinning) {
        if (artwork) {
          const currentArtworkDelay =
            window.getComputedStyle(artwork).animationDelay;
          const currentArtworkDelayNumber =
            parseFloat(currentArtworkDelay) || 0;
          (artwork as HTMLElement).style.animationDelay =
            currentArtworkDelayNumber - 1 + "s";
        }
      }
    }

    function decreaseSpeed() {
      if (isRevealed || isSpinning) {
        adjustAnimationDurations(1.25);
      }
      if (isSpinning) {
        if (artwork) {
          const currentArtworkDelay =
            window.getComputedStyle(artwork).animationDelay;
          const currentArtworkDelayNumber =
            parseFloat(currentArtworkDelay) || 0;
          (artwork as HTMLElement).style.animationDelay =
            currentArtworkDelayNumber + 1 + "s";
        }
      }
    }

    function resetSpinDuration() {
      const elements = document.querySelectorAll(".on");
      elements.forEach((element: Element) => {
        const htmlElement = element as HTMLElement;
        const duration = originalDurations.get(htmlElement);
        if (duration !== undefined) {
          htmlElement.style.animationDuration = duration + "s";
        }
      });
    }

    function resetRevealDuration() {
      if (artwork) {
        const artworkDuration = originalDurations.get(artwork);
        if (artworkDuration !== undefined) {
          (artwork as HTMLElement).style.animationDuration =
            artworkDuration + "s";
        }
      }
      const elements = document.querySelectorAll(".on .fx");
      elements.forEach((element: Element) => {
        const htmlElement = element as HTMLElement;
        const duration = originalDurations.get(htmlElement);
        if (duration !== undefined) {
          htmlElement.style.animationDuration = duration + "s";
        }
      });
    }

    function resetAnimationDelay() {
      if (originalDelays.has(artwork)) {
        if (artwork) {
          const originalDelay = originalDelays.get(artwork);
          (artwork as HTMLElement).style.animationDelay = originalDelay + "s";
        }
      }
    }

    function handleGesture() {
      if (touchendX < touchstartX - 200) {
        nextAttunement();
      }
      if (touchendX > touchstartX + 200) {
        prevAttunement();
      }
      if (touchendY < touchstartY - 200) {
        artwork?.classList.toggle("ctrl");
        artwork?.classList.toggle("alt");
        artwork?.classList.toggle("shift");
      }
      if (touchendY > touchstartY + 200) {
        artwork?.classList.toggle("ctrl");
        artwork?.classList.toggle("alt");
        artwork?.classList.toggle("shift");
      }
      if (touchendY < touchstartY - 500) {
      }
      if (touchendY > touchstartY + 500) {
      }
      if (touchendY === touchstartY) {
      }
    }

    // SPIN ON CLICK + HOLD
    function toggleSpinOnHold() {
      holdTimer = window.setTimeout(function () {
        if (isSpinning) {
          artwork?.classList.remove("spin");
          isSpinning = false;
        } else {
          artwork?.classList.add("spin");
          isSpinning = true;
        }
        resetSpinDuration();
      }, holdThreshold);
    }

    // LISTENERS
    const keydownListener = function (event: KeyboardEvent) {
      if (event.key == " " || event.code == "Space" || event.keyCode == 32) {
        isSpinning = !isSpinning;
        isDeep = !isDeep;
        artwork?.classList.remove("flip");
        artwork?.classList.remove("invert");
        artwork?.classList.remove("spin");
        artwork?.classList.remove("depth");
        artwork?.classList.add("pauseColor");
        artwork?.classList.add("pauseDepth");
        artwork?.classList.remove("pauseSpin");
        artwork?.classList.toggle("colorRestart");
        resetSpinDuration();
        resetRevealDuration();
        resetAnimationDelay();
      } else if (
        event.key == "e" ||
        event.code == "KeyE" ||
        event.keyCode == 69
      ) {
        isRevealed = !isRevealed;
        artwork?.classList.toggle("reveal");
        artwork?.classList.toggle("colorRestart");
        artwork?.classList.add("pauseColor");
        resetRevealDuration();
      } else if (
        event.key == "f" ||
        event.code == "KeyF" ||
        event.keyCode == 70
      ) {
        artwork?.classList.toggle("colorRestart");
        artwork?.classList.toggle("pauseColor");
      } else if (
        event.key == "d" ||
        event.code == "KeyD" ||
        event.keyCode == 68
      ) {
        isDeep = !isDeep;
        artwork?.classList.toggle("depth");
        artwork?.classList.remove("pauseDepth");
        // resetDepthDuration();
      } else if (
        event.key == "s" ||
        event.code == "KeyS" ||
        event.keyCode == 83
      ) {
        isSpinning = !isSpinning;
        artwork?.classList.toggle("spin");
        resetSpinDuration();
        artwork?.classList.remove("pauseSpin");
      } else if (
        event.key == "c" ||
        event.code == "KeyC" ||
        event.keyCode == 67
      ) {
        if (event.ctrlKey) {
          return;
        }
        artwork?.classList.toggle("pauseColor");
      } else if (
        event.key == "x" ||
        event.code == "KeyX" ||
        event.keyCode == 88
      ) {
        artwork?.classList.toggle("pauseDepth");
      } else if (
        event.key == "z" ||
        event.code == "KeyZ" ||
        event.keyCode == 90
      ) {
        isSpinning = !isSpinning;
        artwork?.classList.toggle("pauseSpin");
      } else if (
        event.key == "i" ||
        event.code == "KeyI" ||
        event.keyCode == 73
      ) {
        artwork?.classList.toggle("invert");
      } else if (
        event.key == "o" ||
        event.code == "KeyO" ||
        event.keyCode == 79
      ) {
        artwork?.classList.toggle("flip");
      } else if (
        event.key == "ArrowUp" ||
        event.code == "ArrowUp" ||
        event.keyCode == 38
      ) {
        increaseSpeed();
      } else if (
        event.key == "ArrowDown" ||
        event.code == "ArrowDown" ||
        event.keyCode == 40
      ) {
        decreaseSpeed();
      } else if (event.key === "ArrowLeft") {
        prevAttunement();
      } else if (event.key === "ArrowRight") {
        nextAttunement();
      } else if (event.ctrlKey && event.altKey) {
        if (seedText) {
          seedText.innerHTML = attunementNames[currentAttunementIndex];
        }
        artwork?.classList.add("ctrl");
        artwork?.classList.add("alt");
      } else if (
        event.key == "Shift" ||
        event.code == "ShiftLeft" ||
        event.keyCode == 16
      ) {
        artwork?.classList.add("shift");
      } else if (
        event.key == "Alt" ||
        event.code == "AltLeft" ||
        event.keyCode == 18
      ) {
        artwork?.classList.add("alt");
      } else if (
        event.key == "Control" ||
        event.code == "ControlLeft" ||
        event.keyCode == 17
      ) {
        artwork?.classList.add("ctrl");
      }
    };
    const keyupListener = function (event: KeyboardEvent) {
      if (
        event.key == "Shift" ||
        event.code == "ShiftLeft" ||
        event.keyCode == 16
      ) {
        artwork?.classList.remove("shift");
      } else if (
        event.key == "Alt" ||
        event.code == "AltLeft" ||
        event.keyCode == 18
      ) {
        artwork?.classList.remove("alt");
        if (seedText) {
          seedText.innerHTML = seed.toString();
        }
      } else if (
        event.key == "Control" ||
        event.code == "ControlLeft" ||
        event.keyCode == 17
      ) {
        artwork?.classList.remove("ctrl");
        if (seedText) {
          seedText.innerHTML = seed.toString();
        }
      }
    };
    const dblclickListener = function () {
      isRevealed = !isRevealed;
      artwork?.classList.toggle("reveal");
      resetRevealDuration();
    };
    const mousedownListener = function () {
      toggleSpinOnHold();
    };
    const mouseupListener = function () {
      clearTimeout(holdTimer);
    };
    const touchstartListener = function (event: TouchEvent) {
      touchstartX = event.changedTouches[0].screenX;
      touchstartY = event.changedTouches[0].screenY;
      toggleSpinOnHold();
    };
    const touchendListener = function (event: TouchEvent) {
      touchendX = event.changedTouches[0].screenX;
      touchendY = event.changedTouches[0].screenY;
      handleGesture();
      clearTimeout(holdTimer);
    };
    const touchcancelListener = function (event: TouchEvent) {
      touchendX = event.changedTouches[0].screenX;
      touchendY = event.changedTouches[0].screenY;
      handleGesture();
      clearTimeout(holdTimer);
    };

    // EVENT LISTENER MANAGEMENT
    function removeConflictingEventListeners() {
      document.removeEventListener("touchstart", touchstartListener, false);
      document.removeEventListener("touchend", touchendListener, false);
      document.removeEventListener("touchcancel", touchendListener, false);
      document.removeEventListener("mousedown", mousedownListener);
      document.removeEventListener("mouseup", mouseupListener);
      document.removeEventListener("keydown", keydownListener);
      document.removeEventListener("keyup", keyupListener);
      document.removeEventListener("dblclick", dblclickListener);
      // seedText.removeEventListener("click", copyListener);
    }
    removeConflictingEventListeners();

    const supportsTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (supportsTouch) {
      document.addEventListener("touchstart", touchstartListener, false);
      document.addEventListener("touchend", touchendListener, false);
      document.addEventListener("touchcancel", touchcancelListener, false);
    } else {
      document.addEventListener("mousedown", mousedownListener, false);
      document.addEventListener("mouseup", mouseupListener, false);
    }

    document.addEventListener("keydown", keydownListener);
    document.addEventListener("keyup", keyupListener);
    document.addEventListener("dblclick", dblclickListener);

    window.addEventListener("wheel", onWheel);

    return () => {
      const supportsTouch =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;
      if (supportsTouch) {
        document.removeEventListener("touchstart", touchstartListener, false);
        document.removeEventListener("touchend", touchendListener, false);
        document.removeEventListener("touchcancel", touchcancelListener, false);
      } else {
        document.removeEventListener("mousedown", mousedownListener, false);
        document.removeEventListener("mouseup", mouseupListener, false);
      }

      document.removeEventListener("keydown", keydownListener);
      document.removeEventListener("keyup", keyupListener);
      document.removeEventListener("dblclick", dblclickListener);

      window.removeEventListener("wheel", onWheel);
    };
  }, [seed]);

  // Return any values or functions you want to expose
};
