import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { getArtworkPlaceholderDataURL } from "@/lib/utils/global";

const CollectionItemModal = ({ seed }) => {
  const [isCheckingStatus, setIsChecking] = useState(false);
  const [inscriptionStatus, setInscriptionStatus] = useState(undefined);

  const checkStatus = async () => {
    setIsChecking(true);
    const status = await checkInscriptionStatus(seed.inscriptionId);

    setInscriptionStatus(status);
    setIsChecking(false);
  };

  return (
    <div className="collection-item-modal__wrapper">
      <div className="collection-item-modal__content">
        <div
          style={{
            minWidth: 600,
            width: 600,
            aspectRatio: "3/4",
            position: "relative",
          }}
          className="collection-item-modal__image-wrapper"
        >
          <Image
            fill
            placeholder="blur"
            blurDataURL={getArtworkPlaceholderDataURL(seed.seedNumber)}
            src={seed.pngUrl}
            alt={seed.seedNumber}
            className="collection-image"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <LabelValuePair>
            <Label>Seed</Label>
            <Value>{`${seed.seedNumber}`}</Value>
          </LabelValuePair>
          <LabelValuePair>
            <Label>Status</Label>
            <Value>{seed.status}</Value>
          </LabelValuePair>
          <LabelValuePair>
            <Label>Inscription ID</Label>
            <Value>{seed.inscriptionId}</Value>
          </LabelValuePair>
          <LabelValuePair>
            <Label>Owner</Label>
            <Value>{seed.wallet}</Value>
          </LabelValuePair>
          <button
            onClick={checkStatus}
            className="ui-button collection-item-modal__button"
          >
            {isCheckingStatus ? "Loading..." : "Check status"}
          </button>
          {inscriptionStatus && (
            <div style={{ marginTop: 20 }}>
              {JSON.stringify(inscriptionStatus)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const LabelValuePair = ({ children }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      marginBottom: 16,
    }}
  >
    {children}
  </div>
);

const Label = ({ children }) => (
  <span
    style={{
      opacity: 0.7,
      marginBottom: 2,
      //
    }}
  >
    {children}
  </span>
);

const Value = ({ children }) => (
  <span
    style={{
      fontWeight: 500,
      fontSize: 16,
      //
    }}
  >
    {children}
  </span>
);

export default CollectionItemModal;
