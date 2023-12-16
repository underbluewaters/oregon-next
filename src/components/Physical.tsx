import React from "react";
import { ResultsCard, Skeleton } from "@seasketch/geoprocessing/client-ui";
import { RocksAndIslandsResults } from "../functions/rocksAndIslands";
import { IntertidalAreaResults } from "../functions/intertidalArea";

const NumberFormat = new Intl.NumberFormat("en-US", {
  style: "decimal",
  maximumFractionDigits: 1,
});

export const PhysicalPage = () => {
  return (
    <>
      <ResultsCard title="Islands and Rocks" functionName="rocksAndIslands" skeleton={<>
        <div style={{ marginTop: 20, marginBottom: 20 }}>
          <Skeleton style={{ width: "90%", display: "block" }} />
          <Skeleton style={{ width: "95%", display: "block" }} />
        </div>
      </>}>
        {(data: RocksAndIslandsResults) => {
          return <>
            <p>This zone includes <b>{NumberFormat.format(Math.round(data.area * 0.000247105))} acres</b> of offshore islands.</p>
            <p>There are <b>{data.count}</b> islands included within this zone.</p>
          </>
        }}
      </ResultsCard>
      <ResultsCard title="Intertidal Area" functionName="intertidalArea" skeleton={<>
        <div style={{ marginTop: 20, marginBottom: 20 }}>
          <Skeleton style={{ width: "100%", display: "block" }} />
          <Skeleton style={{ width: "20%", display: "block" }} />
        </div>
      </>}>
        {(data: IntertidalAreaResults) => {
          return <>
            <p>This zone includes <b>{NumberFormat.format(Math.round(data.area * 0.000247105))} acres</b> of intertidal area in the 0m Sea Level Rise scenario.</p>
          </>
        }}
      </ResultsCard>
      
    </>
  );
};
