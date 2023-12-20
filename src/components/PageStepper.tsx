import React from "react";


function ArrowLeft() {
  return <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7.5C1 7.66148 1.07798 7.81301 1.20938 7.90687L8.20938 12.9069C8.36179 13.0157 8.56226 13.0303 8.72879 12.9446C8.89533 12.8589 9 12.6873 9 12.5L9 10L11.5 10C11.7761 10 12 9.77614 12 9.5L12 5.5C12 5.22386 11.7761 5 11.5 5L9 5L9 2.5C9 2.31271 8.89533 2.14112 8.72879 2.05542C8.56226 1.96972 8.36179 1.98427 8.20938 2.09313L1.20938 7.09314C1.07798 7.18699 1 7.33853 1 7.5ZM8 3.4716L8 5.5C8 5.77614 8.22386 6 8.5 6L11 6L11 9L8.5 9C8.22386 9 8 9.22386 8 9.5L8 11.5284L2.36023 7.5L8 3.4716Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>;
}

function ArrowRight() {
  return <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 7.5C14 7.66148 13.922 7.81301 13.7906 7.90687L6.79062 12.9069C6.63821 13.0157 6.43774 13.0303 6.27121 12.9446C6.10467 12.8589 6 12.6873 6 12.5L6 10L3.5 10C3.22386 10 3 9.77614 3 9.5L3 5.5C3 5.22386 3.22386 5 3.5 5L6 5L6 2.5C6 2.31271 6.10467 2.14112 6.27121 2.05542C6.43774 1.96972 6.63821 1.98427 6.79062 2.09313L13.7906 7.09314C13.922 7.18699 14 7.33853 14 7.5ZM7 3.4716L7 5.5C7 5.77614 6.77614 6 6.5 6L4 6L4 9L6.5 9C6.77614 9 7 9.22386 7 9.5L7 11.5284L12.6398 7.5L7 3.4716Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
}

export function PageStepper(props: { recordCount: number, pages: number, currentPage: number, setPage: (page: number) => void }) {
  return <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
    <button style={{display: "flex", alignItems: "center"}} onClick={() => props.setPage(props.currentPage - 1)} disabled={
      props.currentPage === 0
    }><ArrowLeft /></button>
    <button style={{display: "flex", alignItems: "center"}} onClick={() => props.setPage(props.currentPage + 1)} disabled={
      props.currentPage === props.pages - 1
    }>
      <ArrowRight />
    </button>
    <span>Page {props.currentPage + 1} of {props.pages}</span>
    <span style={{flex: 1, textAlign: "right"}}>{props.recordCount} items</span>
  </div>
}

export function useStepper(recordCount: number, maxRecords: number, initialPage: number = 0) {
  const [currentPage, setPage] = React.useState(initialPage);
  return { currentPage, setPage, sliceRecords: (records: any[]) => records.slice(currentPage * maxRecords, currentPage * maxRecords + maxRecords), numPages: Math.ceil(recordCount / maxRecords) };
}