import React from "react";
import { SizeCard } from "./SizeCard";
import { ResultsCard, Skeleton } from "@seasketch/geoprocessing/client-ui";
import { AreaResults } from "../functions/area";

const NumberFormat = new Intl.NumberFormat("en-US", {
  style: "decimal",
  maximumFractionDigits: 1,
});

export const GeographyPage = () => {
  return (
    <>
      <SizeCard />
      {/* <SketchAttributesCard autoHide /> */}
      <ResultsCard title="Nearest Cities" functionName="calculateArea" skeleton={<>
        <div style={{ marginTop: 15, paddingLeft: 30 }}>
          <Skeleton style={{ width: "50%", display: "block" }} />
          <Skeleton style={{ width: "40%", display: "block" }} />
          <Skeleton style={{ width: "55%", display: "block" }} />
        </div>
      </>}>
        {(data: AreaResults) => {
          if (!data.cities) {
            return <p>No cities found</p>;
          } else {
            return (
              <ul>
                {data.cities.map((city) => (
                  <li key={city}>
                    {city}
                  </li>
                ))}
              </ul>
            );
          }
        }}
      </ResultsCard>
      <ResultsCard title="Adjacent Counties" functionName="calculateArea" skeleton={<>
        <div style={{ marginTop: 15, paddingLeft: 30 }}>
          <Skeleton style={{ width: "50%", display: "block" }} />
          <Skeleton style={{ width: "40%", display: "block" }} />
          <Skeleton style={{ width: "55%", display: "block" }} />
        </div>
      </>}>
        {(data: AreaResults) => {
          if (!data.counties) {
            return <p>No nearby found</p>;
          } else {
            return (
              <ul>
                {data.counties.map((county) => (
                  <li key={county}>
                    {county}
                  </li>
                ))}
              </ul>
            );
          }
        }}
      </ResultsCard>
      <ResultsCard title="Shoreline" functionName="calculateArea" skeleton={<>Loading...</>}>
        {(data: AreaResults) => {
            return (
              <p>
                The selected designated area touches { NumberFormat.format(data.shorelineLength)} miles of shoreline.
              </p>
            );
        }}
        </ResultsCard>
    </>
  );
};
