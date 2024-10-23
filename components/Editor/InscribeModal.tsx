import { useState, useEffect } from "react";
import { useArtwork } from "@/context";
import Image from "next/image";
import { useAppDispatch } from '@/app/hooks';
import { setShowInscribeModal } from '@/store/slices/modalSlice';
import { QueueItem } from '@/store/slices/queueSlice';

interface InscribeModalProps {
  show: boolean;
  queueItems: QueueItem[];
}

const InscribeModal: React.FC<InscribeModalProps> = ({ show, queueItems }) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [loadingIndex, setLoadingIndex] = useState(0);
  const { getArtworkUrls } = useArtwork();
  const [itemsWithUrls, setItemsWithUrls] = useState<QueueItem[]>([]);
  
  const purchaseSeeds = () => {}

  useEffect(() => {
    const generateLocalUrls = async () => {
      const updatedItems = await Promise.all(
        queueItems.map(async (item) => {
          if (item.newValues.newSeed !== null && item.newValues.newSeed !== '0') {
            const url = await getArtworkUrls(item.newValues.newSeed);
            return { ...item, url };
          }
          return item;
        })
      );
      setItemsWithUrls(updatedItems);
    };
  
    if (show) {
      generateLocalUrls();
    }
  }, [show, queueItems, getArtworkUrls]);

  return (
    <section
      className={`modal mint-modal ${show ? "show" : ""}`}
      onClick={(e) => {
        if (e.currentTarget === e.target) {
          dispatch(setShowInscribeModal(false));
        }
      }}
    >
      <div className="modal-inner">
        <h3 className="mint-preview-item-name">
          {queueItems.length === 1
            ? `Seed: ${queueItems[0].newSeed}`
            : `${queueItems.length} seeds`}
        </h3>
        <div
          id="z-node-63ba5078"
          className="z-layout-layout quick-stack wf-layout-layout inscribe-preview"
        >
          <div
            id="z-node-63ba5078"
            className="z-layout-cell inscribe-preview-art"
            style={{ position: "relative" }}
          >
            {itemsWithUrls.map((item, index) => (
              <div
                className="mint-preview"
                key={item.newSeed}
                style={{
                  width: "143px",
                  opacity: 1,
                  transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                  transformStyle: "preserve-3d",
                  minHeight: "auto",
                  ...(index > 0 && {
                    position: "absolute",
                    top: 12 * index,
                  }),
                }}
              >
                <div
                  style={{
                    height: "190px",
                    maxHeight: "190px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                  className="svg-aspect-ratio"
                >
                  <div className="svg-container">
                    {item.url && (
                      <Image
                        width={143}
                        height={190}
                        src={item.url}
                        alt={`seed-${item.newSeed}`}
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div id="z-node-63ba5078" className="z-layout-cell cell inscribe-collection-info">
            <div className="mint-preview-item-collection">
              Seeds&nbsp;Collection
            </div>
            <div className="mint-preview-item-group">
              <div className="mint-item-metadata">
                <div className="mint-item-metadata-category">Collection:</div>
                <div className="mint-item-metadata-value">Seeds</div>
              </div>
              <div className="mint-item-metadata">
                <div className="mint-item-metadata-category">Chain:</div>
                <div className="mint-item-metadata-value">Bitcoin</div>
              </div>
            </div>
            <div className="mint-preview-item-price">
              Price: {0.001 * queueItems.length}&nbsp;BTC
            </div>
            <div className="mint-preview-item-fees">+ Network fees</div>
          </div>
        </div>
        <div
          className="wallet-approve-message"
          onClick={purchaseSeeds}
          style={{
            marginTop: (queueItems.length - 1) * 12,
          }}
        >
          <div className="text-block">
            {loading
              ? loadingIndex > 0
                ? `Inscribing seed ${queueItems[loadingIndex - 1].newSeed} (${loadingIndex}/${queueItems.length})...`
                : "Loading..."
              : "Purchase"}
          </div>
        </div>
        <a href="#" className="mint-finalize z-button">
          Mint <span className="mint-price">{0.001 * queueItems.length}</span>
        </a>
        <a
          className="close z-inline-block"
          onClick={() => dispatch(setShowInscribeModal(false))}
        >
          <div></div>
        </a>
      </div>
    </section>
  );
};

export default InscribeModal;
