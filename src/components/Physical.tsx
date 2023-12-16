import React from "react";
import { ResultsCard, Skeleton } from "@seasketch/geoprocessing/client-ui";
import { RocksAndIslandsResults } from "../functions/rocksAndIslands";

const NumberFormat = new Intl.NumberFormat("en-US", {
  style: "decimal",
  maximumFractionDigits: 1,
});

export const PhysicalPage = () => {
  return (
    <>
      <ResultsCard title="Islands and Rocks" functionName="rocksAndIslands" skeleton={<>
        <div style={{ marginTop: 15, paddingLeft: 30 }}>
          <Skeleton style={{ width: "50%", display: "block" }} />
          <Skeleton style={{ width: "40%", display: "block" }} />
          <Skeleton style={{ width: "55%", display: "block" }} />
        </div>
      </>}>
        {(data: RocksAndIslandsResults) => {
          return <>
            <p>This zone includes <b>{NumberFormat.format(Math.round(data.area * 0.000247105))} acres</b> of offshore islands.</p>
            <p>There are <b>{data.count}</b> islands included within this zone.</p>
          </>
        }}
      </ResultsCard>
    </>
  );
};
