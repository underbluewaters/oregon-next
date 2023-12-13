import React from "react";
import { ResultsCard, Skeleton } from "@seasketch/geoprocessing/client-ui";
// Import the results type definition from your functions to type-check your
// component render functions
import { AreaResults } from "../functions/area";

const Number = new Intl.NumberFormat("en", { style: "decimal" });

/**
 * SizeCard component
 */
export const SizeCard = () => {
  return (
    <>
      <ResultsCard
        title={"Size"}
        functionName="calculateArea"
        skeleton={
          <Skeleton style={{ width: "80%", margin: "1rem 0", height: "1.5rem" }} />
        }
      >
        {(data: AreaResults) => (
          <p>
            📐
            This sketch has an area of{" "}
            <b>{Number.format(Math.round(data.area * 0.000247105))}</b>{" "}
            acres
          </p>
        )}
      </ResultsCard>
    </>
  );
};
