import React from "react";
import { SizeCard } from "./SizeCard";
import { ResultsCard, Skeleton } from "@seasketch/geoprocessing/client-ui";
import { AreaResults } from "../functions/area";

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
    </>
  );
};
