"use client";
import { useState, useEffect, useCallback } from "react";
import CollectionItem from "./CollectionItem";

const AllTab = () => {
  const [seeds, setSeeds] = useState([]);
  const [loading, setLoading] = useState(true);

  // pagination
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalSeeds, setTotalSeeds] = useState(0);

  const getAllSeeds = useCallback(
    async (newPage) => {
      setLoading(true);

      const nextPage = Math.max(newPage, 1);

      await fetch(`/api/seeds?page=${nextPage}&pageSize=${pageSize}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
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
    getAllSeeds(1);
  }, [getAllSeeds]);

  return (
    <div className="tabs-content z-tab-content">
      <div
        data-z-tab="Tab 1"
        className="z-tab-pane z--tab-active"
        id="z-tabs-0-data-z-pane-0"
        role="tabpanel"
        aria-labelledby="z-tabs-0-data-z-tab-0"
      >
        {!loading ? (
          <>
            {seeds.length > 0 ? (
              <div className="collection-wrapper">
                <div
                  id="collection-wrapper"
                  className="z-layout-layout quick-stack-2 wf-layout-layout"
                >
                  {seeds.map((seed, index) => (
                    <CollectionItem index={index} key={seed.id} seed={seed} />
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
        {totalSeeds > 10 && !loading && (
          <div className="collection-pagination">
            <a
              className={`ui-button shrink z-button ${
                page === 1 ? "disabled " : ""
              }`}
              onClick={() => getAllSeeds(page - 1)}
            >
              Prev
            </a>
            <div>
              <div className="pagination-numbers">{`${
                (page - 1) * pageSize + 1
              } - ${page * pageSize}`}</div>
            </div>
            <a
              className={`ui-button shrink z-button ${
                page * pageSize >= totalSeeds ? "disabled " : ""
              }`}
              onClick={() => getAllSeeds(page + 1)}
            >
              Next
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

// {true && (

export default AllTab;
