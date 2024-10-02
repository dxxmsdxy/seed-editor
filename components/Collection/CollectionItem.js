import { useRef } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import PreviewGenerator from "@/components/Artwork/PreviewGenerator";
import CollectionItemModal from "./CollectionItemModal";
import { getArtworkPlaceholderDataURL } from "@/lib/utils/artwork/helpers";

const CollectionItem = ({ seed, index }) => {
  const displaySvg = false;
  // const displaySvg = true;

  const cardRef = useRef(null);
  const imgRef = useRef(null);

  const cardMovement = (e, cardRef, imgRef) => {
    const card = cardRef.current;
    const img = imgRef.current;

    if (card) {
      const coordBox = card.getBoundingClientRect();
      const centerPointX = coordBox.x + coordBox.width / 2;
      const centerPointY = coordBox.y + coordBox.height / 2;

      const maxRotation = 20;

      // Y rotation
      const rotationFactorY = maxRotation / (coordBox.width / 2);
      const yRotation = Math.ceil((e.clientX - centerPointX) * rotationFactorY);

      // X rotation
      const rotationFactorX = maxRotation / (coordBox.height / 2);
      const xRotation =
        -1 * Math.ceil((e.clientY - centerPointY) * rotationFactorX);

      const ROTATE_MULTIPLIER = 4;

      card.style.setProperty(
        "transform",
        `rotateY(${yRotation / ROTATE_MULTIPLIER}deg) rotateX(${
          xRotation / ROTATE_MULTIPLIER
        }deg)`
      );
      img.style.setProperty(
        "transform",
        `rotateY(${yRotation / ROTATE_MULTIPLIER}deg) rotateX(${
          xRotation / ROTATE_MULTIPLIER
        }deg)`
      );
    }
  };

  const cardMovementStop = (e, cardRef, imgRef) => {
    const card = cardRef.current;
    const img = imgRef.current;

    if (card) {
      card.style.setProperty("transform", `rotateY(0deg) rotateX(0deg)`);
    }
    if (img) {
      img.style.setProperty("transform", `rotateY(0deg) rotateX(0deg)`);
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div
          key={seed.id}
          className="z-layout-cell collection-image-wrapper"
          style={{ position: "relative" }}
          // onMouseMove={(e) => cardMovement(e, cardRef, imgRef)}
          // onMouseOut={(e) => cardMovementStop(e, cardRef, imgRef)}
          ref={cardRef}
        >
          {displaySvg ? (
            <PreviewGenerator seed={seed.seedNumber} index={index} />
          ) : (
            <Image
              fill
              ref={imgRef}
              placeholder="blur"
              blurDataURL={getArtworkPlaceholderDataURL(seed.seedNumber)}
              src={seed.pngUrl}
              alt={seed.seedNumber}
              className="collection-image"
            />
          )}
          {/*
           */}
          {seed.status === "unconfirmed" && (
            <div
              style={{
                position: "absolute",
                right: 10,
                // transform: "translateX(-50%)",
                top: 10,
                background: "white",
                color: "black",
                fontSize: 12,
              }}
            >
              unconfirmed
            </div>
          )}
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <CollectionItemModal seed={seed} />
        </Dialog.Content>
        <Dialog.Close asChild>
          <button
            style={{
              position: "fixed",
              top: 40,
              right: 60,
              color: "white",
              cursor: "pointer",
              zIndex: 1000,
            }}
          >
            Close
          </button>
        </Dialog.Close>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CollectionItem;
