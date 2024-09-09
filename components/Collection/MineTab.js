"use client";
import { useState, useEffect, useCallback } from "react";
import CollectionItem from "./CollectionItem";

const MineTab = () => {
  const [seeds, setSeeds] = useState([]);
  const [loading, setLoading] = useState(true);

  // pagination
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalSeeds, setTotalSeeds] = useState(0);

  useEffect(() => {
    let intervalId; // Declare intervalId outside the if block

    if (!wallets) {
      intervalId = setInterval(() => {
        if (window.bis) {
          initWallet().then((wal) => {
            if (wal) {
              clearInterval(intervalId);
            }
          });
        }
      }, 100);
    }

    return () => clearInterval(intervalId); // Ensure intervalId is accessible in the cleanup function
  }, [wallets, initWallet]); // Add dependencies to the dependency array

  const getMineSeeds = useCallback(
    async (newPage, wallets) => {
      setLoading(true);

      const nextPage = Math.max(newPage, 1);
      const walletAddress = wallets.info[0].address;

      await fetch(
        `/api/seeds?page=${nextPage}&pageSize=${pageSize}&wallet=${walletAddress}&mine=true`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setTotalSeeds(data.count);
          setSeeds(data.result);
          setPage(nextPage);
        })
        .catch((error) => {
          console.error("Error:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [pageSize]
  );

  useEffect(() => {
    if (wallets) {
      getMineSeeds(1, wallets);
    }
  }, [getMineSeeds, wallets]);

  console.log("here");

  return (
    <div className="tabs-content z-tab-content">
      <div
        data-z-tab="Tab 1"
        className="z-tab-pane z--tab-active"
        id="z-tabs-0-data-z-pane-0"
        role="tabpanel"
        aria-labelledby="z-tabs-0-data-z-tab-0"
      >
        {!loading && wallets ? (
          <>
            {seeds.length > 0 ? (
              <div className="collection-wrapper">
                <div
                  id="collection-wrapper"
                  className="z-layout-layout quick-stack-2 wf-layout-layout"
                >
                  {seeds.map((seed) => (
                    <CollectionItem key={seed.id} seed={seed} />
                  ))}
                </div>
              </div>
            ) : (
              <div>none</div>
            )}
          </>
        ) : (
          <div>loading...</div>
        )}
        {totalSeeds > 10 && (
          <div className="collection-pagination">
            <a
              className={`ui-button shrink z-button ${
                page === 1 ? "disabled " : ""
              }`}
              onClick={() => getMineSeeds(page - 1)}
            >
              Prev
            </a>
            <div>
              <div className="pagination-numbers">1 - 10</div>
            </div>
            <a
              className={`ui-button shrink z-button ${
                page * pageSize >= totalSeeds ? "disabled " : ""
              }`}
              onClick={() => getMineSeeds(page + 1)}
            >
              Next
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default MineTab;
