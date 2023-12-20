import { Skeleton } from "@seasketch/geoprocessing/client-ui";
import React from "react";

export default function TableSkeleton({rows, columns} : {rows: number, columns?: number}) {
  return <div>
    {Array(rows).fill(0).map((_, i) => <div style={{ borderTop: "1px solid #e6e6e6", padding: "8px 16px" }}><Skeleton style={{ width: getRandomPercent(50, 100) }} /></div>)}
  </div>
}

function getRandomPercent(min: number, max:number) {
  return `${Math.random() * (max - min) + min}%`;
}