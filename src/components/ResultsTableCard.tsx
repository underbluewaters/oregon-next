import React from "react";
import { ResultsCard, ResultsCardProps } from "@seasketch/geoprocessing/client-ui";
import { tableCardStyle, tableCardTitleStyle } from "./styles";
import TableSkeleton from "./TableSkeleton";

export default function ResultsTableCard<T>(props: ResultsCardProps<T> & {rows: number}) {
return <ResultsCard {...props} style={tableCardStyle} titleStyle={tableCardTitleStyle} skeleton={<TableSkeleton rows={props.rows} />}>
{(data: T) => {
  return <>
    <div className="TableCardTable">
      {props.children(data)}
    </div>
  </>
}}
</ResultsCard>
}