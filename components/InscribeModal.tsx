"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSeed, useArtwork, useWallet } from "@/context";
import Image from "next/image";

const InscribeModal = () => {
  const [loading, setLoading] = useState(false);
  const [loadingIndex, setLoadingIndex] = useState(0);
  const { savedSeeds, setSavedSeeds, showInscribeModal, setShowInscribeModal } =
    useSeed();
  const { getArtworkUrls } = useArtwork();
  const { wallets, inscribe, checkInscriptionStatus, initWallet } = useWallet();
  const router = useRouter();

  const purchaseSeeds = async () => {
    setLoading(true);

    let wal = wallets;

    if (!wal) {
      wal = await initWallet();
    }

    const seeds = [];
    for (const { seed } of savedSeeds) {
      setLoadingIndex((ind) => ind + 1);

      const { commit_txid, reveal_txid, inscription_id } = await inscribe(
        seed,
        wal
      );

      const pngUrl = await getArtworkUrls(seed);
      const walletAddress = wal.info[0].address;

      const seedObj = {
        seedNumber: seed.toString(),
        pngUrl,
        wallet: walletAddress,
        inscriptionId: inscription_id,
        commitTxId: commit_txid,
        revealTxId: reveal_txid,
      };
      console.log(seedObj);

      seeds.push(seedObj);
    }

    await fetch("/api/seeds", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ seeds }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    setLoading(false);
    setLoadingIndex(0);
    setSavedSeeds([]);
    setShowInscribeModal(false);
    window.localStorage.setItem("savedSeeds", JSON.stringify([]));
    router.push("/collection?tab=mine");
  };

  return (
    <section
      className={`modal mint-modal ${showInscribeModal ? "show" : ""}`}
      onClick={(e) => {
        if (e.currentTarget === e.target) {
          setShowInscribeModal(false);
        }
      }}
    >
      <div className="modal-inner">
        <h3 className="mint-preview-item-name">
          {savedSeeds.length === 1
            ? `Seed: ${savedSeeds[0].seed.toString()}`
            : `${savedSeeds.length} seeds`}
        </h3>
        <div
          id="z-node-63ba5078"
          className="z-layout-layout quick-stack wf-layout-layout"
        >
          <div
            id="z-node-63ba5078"
            className="z-layout-cell"
            style={{ position: "relative" }}
          >
            {savedSeeds.map(({ seed, url }, index) => (
              <div
                className="mint-preview"
                key={seed.toString()}
                style={{
                  width: "143px",
                  // position: "relative",
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
                  className="svg-ratio-v2"
                >
                  <div className="svg-image-container-v2">
                    {url && (
                      <Image
                        // fill
                        width={143}
                        height={190}
                        src={url}
                        alt={`seed-${seed.toString()}`}
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div id="z-node-63ba5078" className="z-layout-cell cell">
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
              Price: {0.001 * savedSeeds.length}&nbsp;BTC
            </div>
            <div className="mint-preview-item-fees">+ Network fees</div>
          </div>
        </div>
        {/*
        <div className="mint-preview-item">
          <img
            src="/icons/seed-frame-2.svg"
            loading="lazy"
            alt=""
            className="mint-preview"
          />
          <div className="mint-details">
            <div className="mint-preview-item-collection">
              Seeds&nbsp;Genesis&nbsp;Collection
            </div>
            <div className="mint-item-metadata-category">Chain: Bitcoin</div>
            <div className="mint-preview-item-price">
              Price: {0.001 * savedSeeds.length}&nbsp;BTC
            </div>
          </div>
        </div>
        */}
        {false ? (
          <div
            className="wallet-approve-message"
            onClick={() => {
              initWallet();
            }}
            style={{
              marginTop: (savedSeeds.length - 1) * 12,
            }}
          >
            <div className="text-block">Connect wallet to inscribe</div>
          </div>
        ) : (
          <div
            className="wallet-approve-message"
            onClick={() => {
              purchaseSeeds();
            }}
            style={{
              marginTop: (savedSeeds.length - 1) * 12,
            }}
          >
            <div className="text-block">
              {loading
                ? loadingIndex > 0
                  ? `Inscribing seed ${savedSeeds[
                      loadingIndex - 1
                    ].seed.toString()} (${loadingIndex}/${
                      savedSeeds.length
                    })...`
                  : "Loading..."
                : "Purchase"}
            </div>
          </div>
        )}
        <a href="#" className="mint-finalize z-button">
          Mint <span className="mint-price">{0.001 * savedSeeds.length}</span>
        </a>
        <a
          className="close z-inline-block"
          onClick={() => setShowInscribeModal(false)}
        >
          <div></div>
        </a>
        {/*
        <button
          onClick={async () => {
            const wa = await initWallet();
          }}
        >
          Init wallet
        </button>
        <button
          onClick={() => {
            inscribe(savedSeeds[0].seed, wallets);
          }}
        >
          Inscribe
        </button>
        <button
          onClick={() => {
            // providing inscription id here
            checkInscriptionStatus(
              "6ccc545e44d98a6cc55b60738954006551f6bebb554765d03da128fa2b27fe60i0"
            );

            // checkTransaction(
            //   "7725ad5fa61c45e5631579d279b1416a602046c4271cc422c4f9b060800ca8d3i0"
            // );

            // checkTransaction(
            //   "7725ad5fa61c45e5631579d279b1416a602046c4271cc422c4f9b060800ca8d3"
            // );
            // checkTransaction(
            //   "dfb5fc2c9055b5ee1adc28c9ffe6695d90e81399faead9873405c3735d198b1d"
            // );
            // checkTransaction(
            //   "7725ad5fa61c45e5631579d279b1416a602046c4271cc422c4f9b060800ca8d3"
            // );

            // checkTransaction(
            //   "e1796288303a66950a3e591f21cb68cbb169a7be3a4139c7a9587f74c30b39aei0"
            // );

            // checkTransaction(
            //   "15e9554e078ddb4a66b537ab19575937edb2760ee3dee650025f71a594f10ceai0"
            // );
            // checkTransaction(
            //   "dfb5fc2c9055b5ee1adc28c9ffe6695d90e81399faead9873405c3735d198b1d"
            // );
            // checkTransaction(
            //   "d5997e52feeb206161acbbfc758a4ed4cffc0ec87bdc5ddc9044f1541cdec1d0"
            // );
            // checkTransaction(
            //   "6443cd9ca638862c77abe05308202423aa13beaf6057ee67dfa030c6bdc821a1"
            // );

            // checkTransaction(
            //   "3b87558e70515e3b52d05170e4ae13fd7a8eb120eec0fb476806fed1d0559857"
            // );
            // checkTransaction(
            //   "a48dd62d1fc9e01ec13c843be809e3009b208a0e80a97d0e5451bc6d87d5e73e"
            // );
          }}
        >
          Check
        </button>
         */}
      </div>
    </section>
  );
};

export default InscribeModal;
