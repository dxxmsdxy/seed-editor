"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import AllTab from "@/components/Collection/AllTab";
import MineTab from "@/components/Collection/MineTab";

export default function Collection() {
  const query = useSearchParams();
  const [tab, setTab] = useState(query.get("tab") === "mine" ? "mine" : "all");

  return (
    <section className="collection" style={{}}>
      <div
        data-current="Tab 1"
        data-easing="ease"
        data-duration-in={300}
        data-duration-out={100}
        className="z-tabs"
      >
        <div className="tabs-menu z-tab-menu" role="tablist">
          <a
            data-z-tab="Tab 1"
            className={`collection-tab z-inline-block z-tab-link ${
              tab === "all" ? "z--current" : ""
            }`}
            id="z-tabs-0-data-z-tab-0"
            role="tab"
            aria-controls="z-tabs-0-data-z-pane-0"
            aria-selected="true"
            onClick={() => setTab("all")}
          >
            <div>ALl</div>
          </a>
          <a
            data-z-tab="Tab 2"
            className={`collection-tab z-inline-block z-tab-link ${
              tab === "mine" ? "z--current" : ""
            }`}
            tabIndex={-1}
            id="z-tabs-0-data-z-tab-1"
            role="tab"
            aria-controls="z-tabs-0-data-z-pane-1"
            aria-selected="false"
            onClick={() => setTab("mine")}
          >
            <div>Mine</div>
          </a>
        </div>
        {tab === "all" && <AllTab />}
        {tab === "mine" && <MineTab />}
      </div>
    </section>
  );
}
