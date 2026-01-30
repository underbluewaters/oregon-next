import React from "react";
import { ResultsCard, useSketchProperties } from "@seasketch/geoprocessing/client-ui";
import TableSkeleton from "./TableSkeleton";
import { CMECResults, Designation } from "../functions/cmec";
import { rankedProtectedAreas } from "../../data/src/rankedProtectedAreas";

const NumberFormat = new Intl.NumberFormat("en-US", {
  style: "decimal",
  maximumFractionDigits: 1,
});

const ProtectedAreaColors: Record<string, string> = {
  MR: "red",
  MPA: "blue",
  MCA: "#6B46C1",
  MG: "#DD6B20",
  SPA: "cyan",
  MRA: "#38A169",
};

const UnprotectedColor = "#CBD5E0";

export default function CMECCard() {
  const sketchProperties = useSketchProperties();
  let designation = rankedProtectedAreas[rankedProtectedAreas.length - 1];
  // @ts-ignore
  if (!sketchProperties.isCollection) {
    if (sketchProperties[0].designation && rankedProtectedAreas.includes(sketchProperties[0].designation as Designation)) {
      designation = sketchProperties[0].designation;
    }
  }
  return (
    <ResultsCard
      functionName="calculateCMEC"
      title="Coastal and Marine Ecological Classification"
      skeleton={<TableSkeleton rows={10} />}
    >
      {(data: CMECResults) => {
        return (<>
          <WaffleChart data={data} />
          <SingleSketchProtectionContribution data={data} designation={designation} />
          <CollectionProtectionContribution data={data} />
          {/* <SketchCompositionTable data={data} /> */}
        </>)
      }}
    </ResultsCard>
  );
}

function SketchCompositionTable({ data }: { data: CMECResults }) {
  const totalArea = Object.values(data.precalcs.totals).reduce(
    (sum, total) => sum + total,
    0
  );
  const classKeys = Object.keys(data.precalcs.totals).sort((a, b) =>
    a.localeCompare(b)
  );

  return (
    <>
      <h2>Overall Sketch Composition</h2>
      <table className="TableCardTable">
        <thead>
          <tr>
            <th>Classification</th>
            <th>Square Kilometers</th>
            <th>% of Total</th>
            <th>% Protected</th>
            <th>Protection Breakdown</th>
          </tr>
        </thead>
        <tbody>
          {classKeys.map((classKey) => {
            const metersSquared = data.precalcs.totals[classKey];
            const kmSquared = metersSquared / 1e-6;
            const protectedArea = data.rankedProtectedAreas.reduce(
              (sum, designation) =>
                sum +
                (data.precalcs.protectedAreaHabitatTotals[designation]?.[
                  classKey
                ] || 0),
              0
            );
            const unprotectedArea = Math.max(0, metersSquared - protectedArea);
            const barSegments = [
              {
                key: "Unprotected",
                area: unprotectedArea,
                color: UnprotectedColor,
              },
              ...data.rankedProtectedAreas.map((designation) => ({
                key: designation,
                area:
                  data.precalcs.protectedAreaHabitatTotals[designation]?.[
                    classKey
                  ] || 0,
                color: ProtectedAreaColors[designation] || "#718096",
              })),
            ].filter((segment) => segment.area > 0);

            return (
              <tr key={classKey}>
                <td>
                  <span
                    style={{
                      backgroundColor: data.colors[classKey],
                      width: 16,
                      height: 12,
                      display: "inline-block",
                      borderRadius: 5,
                      marginRight: 8,
                    }}
                  />
                  <span>{classKey}</span>
                </td>
                <td>{NumberFormat.format(kmSquared)}</td>
                <td>{NumberFormat.format((metersSquared / totalArea) * 100)}%</td>
                <td>
                  {NumberFormat.format((protectedArea / metersSquared) * 100)}%
                </td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      height: 10,
                      width: "100%",
                      backgroundColor: "#EDF2F7",
                      borderRadius: 6,
                      overflow: "hidden",
                    }}
                  >
                    {barSegments.map((segment) => (
                      <div
                        key={segment.key}
                        style={{
                          width: `${(segment.area / metersSquared) * 100}%`,
                          backgroundColor: segment.color,
                        }}
                        title={`${segment.key}: ${NumberFormat.format(
                          (segment.area / metersSquared) * 100
                        )}%`}
                      />
                    ))}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

type WaffleEntry = {
  key: string;
  percentage: number;
  color: string;
  subEntries?: { key: string; percentage: number; color: string }[];
};

function WaffleChart({ data }: { data: CMECResults }) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [tooltip, setTooltip] = React.useState<{
    visible: boolean;
    x: number;
    y: number;
    key: string;
    percentage: number;
    color: string;
    flipped: boolean;
    subEntries?: { key: string; percentage: number; color: string }[];
  } | null>(null);

  const sketchArea = data.area.reduce((sum, area) => sum + area.area, 0);
  
  // Calculate area for each classification from the overlay data
  const compositionByClassKey: Record<string, number> = {};
  for (const designation in data.overlay) {
    for (const classKey in data.overlay[designation]) {
      const area = data.overlay[designation][classKey];
      if (area) {
        if (!compositionByClassKey[classKey]) {
          compositionByClassKey[classKey] = 0;
        }
        compositionByClassKey[classKey] += area;
      }
    }
  }
  
  // Calculate total classified area and unknown
  const classifiedArea = Object.values(compositionByClassKey).reduce((sum, area) => sum + area, 0);
  const unknownArea = Math.max(0, sketchArea - classifiedArea);
  
  // Convert to percentages and create sorted entries
  const allEntries = Object.entries(compositionByClassKey)
    .filter(([key]) => key !== "9.9.9.9.9 - No data") // Exclude "No data" from main categories
    .map(([key, area]) => ({
      key,
      percentage: (area / sketchArea) * 100,
      color: data.colors[key] || "#94a3b8",
    }))
    .sort((a, b) => b.percentage - a.percentage);
  
  // Add unknown category (includes "No data" + any unclassified area)
  const noDataArea = compositionByClassKey["9.9.9.9.9 - No data"] || 0;
  const totalUnknown = unknownArea + noDataArea;
  if (totalUnknown > 0) {
    allEntries.push({
      key: "Unknown",
      percentage: (totalUnknown / sketchArea) * 100,
      color: "#e2e8f0",
    });
  }
  
  // Create 200 cells for the waffle chart (20 columns x 10 rows)
  // Each cell represents 0.5%, reducing rounding errors compared to 100 cells
  const TOTAL_CELLS = 200;
  
  // Separate entries into those that get cells and those that are too small
  const entriesWithCells: WaffleEntry[] = [];
  const smallEntries: { key: string; percentage: number; color: string }[] = [];
  
  for (const entry of allEntries) {
    const cellCount = Math.round(entry.percentage * 2);
    if (cellCount > 0) {
      entriesWithCells.push(entry);
    } else if (entry.percentage > 0) {
      smallEntries.push(entry);
    }
  }
  
  // If there are small entries that don't get cells, create a "Mixed" category
  if (smallEntries.length > 0) {
    const mixedPercentage = smallEntries.reduce((sum, e) => sum + e.percentage, 0);
    entriesWithCells.push({
      key: "Other",
      percentage: mixedPercentage,
      color: "#a8a29e", // Stone/tan color to indicate mixed
      subEntries: smallEntries.sort((a, b) => b.percentage - a.percentage),
    });
  }
  
  // Sort by percentage descending
  entriesWithCells.sort((a, b) => b.percentage - a.percentage);
  
  // Build cells with largest categories last so they appear at the bottom
  const cells: { key: string; color: string; percentage: number; subEntries?: { key: string; percentage: number; color: string }[] }[] = [];
  let remainingCells = TOTAL_CELLS;
  
  // Reverse entries so smallest comes first (top) and largest comes last (bottom)
  const entriesBottomHeavy = [...entriesWithCells].reverse();
  
  for (const entry of entriesBottomHeavy) {
    // Each cell = 0.5%, so multiply percentage by 2 to get cell count
    // For the mixed category, always give at least 1 cell
    let cellCount = Math.round(entry.percentage * 2);
    if (entry.key === "Other" && cellCount < 1) {
      cellCount = 1;
    }
    const actualCells = Math.min(cellCount, remainingCells);
    for (let i = 0; i < actualCells; i++) {
      cells.push({ 
        key: entry.key, 
        color: entry.color, 
        percentage: entry.percentage,
        subEntries: entry.subEntries,
      });
    }
    remainingCells -= actualCells;
  }
  
  // Fill any remaining cells with the largest category
  const largestEntry = entriesWithCells[0];
  while (cells.length < TOTAL_CELLS && largestEntry) {
    cells.push({ key: largestEntry.key, color: largestEntry.color, percentage: largestEntry.percentage });
  }
  
  // Trim if we have too many
  while (cells.length > TOTAL_CELLS) {
    cells.pop();
  }

  const handleMouseMove = (e: React.MouseEvent, cell: typeof cells[0]) => {
    if (!containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const tooltipWidth = 200;
    const offset = 8;
    
    // Position tooltip to the right and slightly above cursor
    let x = e.clientX - containerRect.left + offset;
    let y = e.clientY - containerRect.top - offset;
    let flipped = false;
    
    // Flip to left side if tooltip would overflow right edge
    if (x + tooltipWidth > containerRect.width) {
      x = e.clientX - containerRect.left - offset;
      flipped = true;
    }
    
    setTooltip({
      visible: true,
      x,
      y,
      key: cell.key,
      percentage: cell.percentage,
      color: cell.color,
      flipped,
      subEntries: cell.subEntries,
    });
  };

  const handleMouseLeave = () => {
    setTooltip(null);
  };

  return (
    <div ref={containerRef} style={{ marginTop: 8, marginBottom: 20, position: "relative" }}>
      <div style={{
        fontSize: 16, fontWeight: 500, color: "rgb(108, 114, 130)", marginBottom: 0, marginTop: 0, minHeight: "24px",
      }}>
        Habitat Composition
      </div>
      <p>The chart below shows the composition of the sketch by habitat type. The size of each cell represents the percentage of the sketch that is covered by that habitat type.</p>
      
      {/* Waffle Grid - minimal design following Tufte principles */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(20, 1fr)",
          gap: 0,
          width: "100%",
          backgroundColor: "#fff",
          // border: "1px solid #9ca3af",
          boxSizing: "border-box",
          marginTop:8
        }}
      >
        {cells.map((cell, index) => (
          <div
            key={index}
            style={{
              aspectRatio: "1",
              backgroundColor: cell.color,
              cursor: "crosshair",
              border: "0.5px solid rgba(0,0,0,0.1)",
            }}
            onMouseMove={(e) => handleMouseMove(e, cell)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>

      {/* Tooltip - minimal, functional */}
      {tooltip && (
        <div
          style={{
            position: "absolute",
            ...(tooltip.flipped
              ? { right: containerRef.current!.clientWidth - tooltip.x }
              : { left: tooltip.x }),
            top: tooltip.y,
            backgroundColor: "rgba(255,255,255,0.97)",
            color: "#111",
            padding: "5px 10px",
            fontSize: 13,
            pointerEvents: "none",
            zIndex: 100,
            border: "1px solid #6b7280",
            lineHeight: 1.4,
            borderRadius: 4,
            maxWidth: 280,
          }}
        >
          {tooltip.subEntries ? (
            // Special tooltip for "Other" category
            <div style={{ textAlign: tooltip.flipped ? "right" : "left" }}>
              <div style={{ fontWeight: 500, marginBottom: 6, color: "#374151" }}>
                {tooltip.key}
              </div>
              <div style={{ fontSize: 11, display: "flex", flexDirection: "column", gap: 3 }}>
                {tooltip.subEntries.map((sub) => (
                  <div
                    key={sub.key}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      flexDirection: tooltip.flipped ? "row-reverse" : "row",
                    }}
                  >
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        backgroundColor: sub.color,
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ flex: 1 }}>
                      {sub.key.replace(/^\d+(\.\d+)*\s*-\s*/, "")}
                    </span>
                    <span style={{ color: "#6b7280" }}>
                      {sub.percentage.toFixed(2)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // Standard tooltip
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                flexDirection: tooltip.flipped ? "row-reverse" : "row",
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: tooltip.color,
                  flexShrink: 0,
                }}
              />
              <span>
                {tooltip.key.replace(/^\d+(\.\d+)*\s*-\s*/, "")}
              </span>
              <span style={{ color: "#6b7280" }}>
                {tooltip.percentage.toFixed(1)}%
              </span>
            </div>
          )}
        </div>
      )}
      
      {/* Legend - clean, no boxes, minimal ink */}
      <div
        style={{
          marginTop: 10,
          display: "flex",
          flexWrap: "wrap",
          columnGap: 18,
          rowGap: 4,
          fontSize: 12,
          color: "#374151",
          lineHeight: 1.5,
        }}
      >
        {entriesWithCells.map((entry) => (
            <div
              key={entry.key}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              <div
                style={{
                  width: 14,
                  height: 14,
                  backgroundColor: entry.color,
                  flexShrink: 0,
                  borderRadius: 2,
                }}
              />
              <span style={{ color: "#6b7280" }}>
                {entry.key.replace(/^\d+(\.\d+)*\s*-\s*/, "")}
              </span>
              <span>
                {entry.percentage.toFixed(1)}%
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}

// Conversion: 1 square meter = 0.000247105 acres
const SQ_METERS_TO_ACRES = 0.000247105;

const DesignationNames: Record<string, string> = {
  MR: "Marine Reserve",
  MPA: "Marine Protected Area",
  MCA: "Marine Conservation Area",
  MG: "Marine Garden",
  SPA: "Seabird Protection Area",
  MRA: "Marine Research Area",
};

const AcresFormat = new Intl.NumberFormat("en-US", {
  style: "decimal",
  maximumFractionDigits: 1,
});

const PercentFormat = new Intl.NumberFormat("en-US", {
  style: "percent",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

type SortColumn = "habitat" | "area" | "percent";
type SortDirection = "asc" | "desc";

interface SingleSketchProtectionContributionProps {
  data: CMECResults;
  designation: string;
}

export function SingleSketchProtectionContribution({
  data,
  designation,
}: SingleSketchProtectionContributionProps) {
  const [sortColumn, setSortColumn] = React.useState<SortColumn>("area");
  const [sortDirection, setSortDirection] = React.useState<SortDirection>("desc");
  const [barTooltip, setBarTooltip] = React.useState<{
    visible: boolean;
    x: number;
    y: number;
    totalAcres: number;
    segments: { designation: string; area: number; percent: number; color: string }[];
    flipped: boolean;
  } | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Use newlyProtectedArea for this designation - more accurate than "Unprotected" overlay
  const newlyProtectedArea = data.newlyProtectedArea?.[designation] || {};
  const habitatClasses = Object.keys(newlyProtectedArea).filter(
    (key) => key !== "9.9.9.9.9 - No data"
  );

  // Get designations with equal or greater protection than current
  const currentIndex = rankedProtectedAreas.indexOf(designation as any);
  const overlappingDesignations = rankedProtectedAreas.slice(
    0,
    currentIndex + 1
  );

  const handleSort = (column: SortColumn) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("desc");
    }
  };

  // Generic sort function for habitat arrays
  const sortHabitats = (
    habitats: string[],
    overlay: Record<string, number>
  ) => {
    return [...habitats].sort((a, b) => {
      let comparison = 0;
      
      if (sortColumn === "habitat") {
        const nameA = a.replace(/^\d+(\.\d+)*\s*-\s*/, "");
        const nameB = b.replace(/^\d+(\.\d+)*\s*-\s*/, "");
        comparison = nameA.localeCompare(nameB);
      } else if (sortColumn === "area") {
        comparison = (overlay[a] || 0) - (overlay[b] || 0);
      } else if (sortColumn === "percent") {
        const percentA = (overlay[a] || 0) / (data.precalcs.totals[a] || 1);
        const percentB = (overlay[b] || 0) / (data.precalcs.totals[b] || 1);
        comparison = percentA - percentB;
      }
      
      return sortDirection === "asc" ? comparison : -comparison;
    });
  };

  const headerStyle = (align: "left" | "right"): React.CSSProperties => ({
    textAlign: align,
    paddingTop: 12,
    cursor: "pointer",
    userSelect: "none",
  });

  return (
    <div ref={containerRef} style={{ marginTop: 24, position: "relative" }}>
      {/* First Table: Habitats Protected by this MPA */}
      <div style={{
        fontSize: 16, fontWeight: 500, color: "rgb(108, 114, 130)", marginBottom: 0, marginTop: 0, minHeight: "24px",
      }}>
        Habitats Protected
      </div>
      <p >
        New habitat protection contributed by this {DesignationNames[designation] || designation}, as related to the total habitat in the Territorial Sea. Overlap with any existing protected areas at the same or greater level of protection has been excluded from these totals.
      </p>
      <table className="TableCardTable" style={{ fontSize: 13, marginLeft: -16, width: "calc(100% + 32px)" }}>
        <thead>
          <tr style={{ background: "linear-gradient(white 0%, rgb(249, 250, 251) 20%, rgb(249, 250, 251) 100%)" }}>
            <th style={headerStyle("left")} onClick={() => handleSort("habitat")}>
              Habitat
            </th>
            <th style={headerStyle("right")} onClick={() => handleSort("area")}>
              Acres
            </th>
            <th style={headerStyle("right")} onClick={() => handleSort("percent")}>
              % of Territorial Sea
            </th>
          </tr>
        </thead>
        <tbody>
          {sortHabitats(habitatClasses, newlyProtectedArea).map((classKey) => {
            const areaMeters = newlyProtectedArea[classKey] || 0;
            const areaAcres = areaMeters * SQ_METERS_TO_ACRES;
            const totalMeters = data.precalcs.totals[classKey] || 1;
            const fractionOfTotal = areaMeters / totalMeters;

            return (
              <tr key={classKey}>
                <td style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span
                    style={{
                      backgroundColor: data.colors[classKey] || "#94a3b8",
                      width: 14,
                      height: 14,
                      display: "inline-block",
                      borderRadius: 2,
                      flexShrink: 0,
                    }}
                  />
                  <span>{classKey.replace(/^\d+(\.\d+)*\s*-\s*/, "")}</span>
                </td>
                <td style={{ textAlign: "right" }}>
                  {AcresFormat.format(areaAcres)}
                </td>
                <td style={{ textAlign: "right" }}>
                  {PercentFormat.format(fractionOfTotal)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Combined table for overlapping protected areas */}
      {(() => {
        // Calculate combined overlap data across all designations
        const combinedOverlap: Record<string, number> = {};
        const overlapByDesignation: Record<string, Record<string, number>> = {};
        const presentDesignations: string[] = [];

        for (const des of overlappingDesignations) {
          const designationOverlay = data.overlay?.[des];
          if (!designationOverlay) continue;

          const hasData = Object.keys(designationOverlay).some(
            (key) => key !== "9.9.9.9.9 - No data" && designationOverlay[key] > 0
          );
          if (!hasData) continue;

          presentDesignations.push(des);
          overlapByDesignation[des] = {};

          for (const classKey in designationOverlay) {
            if (classKey === "9.9.9.9.9 - No data") continue;
            const area = designationOverlay[classKey] || 0;
            if (area > 0) {
              combinedOverlap[classKey] = (combinedOverlap[classKey] || 0) + area;
              overlapByDesignation[des][classKey] = area;
            }
          }
        }

        const overlapHabitats = Object.keys(combinedOverlap).filter(
          (key) => combinedOverlap[key] > 0
        );

        // No overlap - show message
        if (overlapHabitats.length === 0) {
          return (
            <div style={{ marginTop: 32 }}>
              <div style={{
                fontSize: 16, fontWeight: 500, color: "rgb(108, 114, 130)", marginBottom: 0, marginTop: 0, minHeight: "24px",
              }}>
                Overlap with Existing Protections
              </div>
              <p style={{ color: "#6b7280" }}>
                This sketch does not overlap with any existing protected areas at the same or greater level of protection.
              </p>
            </div>
          );
        }

        // Format the list of present designations
        const designationNamesList = presentDesignations.map(
          (d) => DesignationNames[d] || d
        );
        const designationsText =
          designationNamesList.length === 1
            ? designationNamesList[0]
            : designationNamesList.length === 2
            ? `${designationNamesList[0]} and ${designationNamesList[1]}`
            : designationNamesList.slice(0, -1).join(", ") +
              ", and " +
              designationNamesList[designationNamesList.length - 1];

        return (
          <div style={{ marginTop: 32 }}>
            <div style={{
              fontSize: 16, fontWeight: 500, color: "rgb(108, 114, 130)", marginBottom: 0, marginTop: 0, minHeight: "24px",
            }}>
              Overlap with Existing Protections
            </div>
            <p>
              Some habitats in this sketch are already covered by existing protected areas of equal or greater levels of protection. The contributions of these protected areas are excluded from the table above, but will be considered when calculating progress towards protected area targets at the collection-level.
            </p>

            {/* Legend for stacked bar */}
            <div style={{ display: "flex", gap: 16, marginBottom: 12, marginTop: 16, flexWrap: "wrap" }}>
              {presentDesignations.map((des) => (
                <div key={des} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12 }}>
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      backgroundColor: ProtectedAreaColors[des] || "#718096",
                      borderRadius: 2,
                    }}
                  />
                  <span style={{ color: "#6b7280" }}>{DesignationNames[des] || des}</span>
                </div>
              ))}
            </div>

            {/* Calculate max area for proportional bar scaling */}
            {(() => {
              const maxAreaMeters = Math.max(...overlapHabitats.map((h) => combinedOverlap[h] || 0));

              return (
            <table className="TableCardTable" style={{ fontSize: 13, marginLeft: -16, width: "calc(100% + 32px)" }}>
              <thead>
                <tr style={{ background: "linear-gradient(white 0%, rgb(249, 250, 251) 20%, rgb(249, 250, 251) 100%)" }}>
                  <th style={headerStyle("left")} onClick={() => handleSort("habitat")}>
                    Habitat
                  </th>
                  <th style={{ ...headerStyle("left"), width: "25%" }}>
                    Designation
                  </th>
                  <th style={headerStyle("right")} onClick={() => handleSort("area")}>
                    Acres
                  </th>
                  <th style={headerStyle("right")} onClick={() => handleSort("percent")}>
                    % of Territorial Sea
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortHabitats(overlapHabitats, combinedOverlap).map((classKey) => {
                  const totalAreaMeters = combinedOverlap[classKey] || 0;
                  const totalAreaAcres = totalAreaMeters * SQ_METERS_TO_ACRES;
                  const barWidthPercent = (totalAreaMeters / maxAreaMeters) * 100;
                  const totalMeters = data.precalcs.totals[classKey] || 1;
                  const fractionOfTotal = totalAreaMeters / totalMeters;

                  // Build stacked bar segments
                  const barSegments = presentDesignations
                    .map((des) => ({
                      designation: des,
                      area: overlapByDesignation[des]?.[classKey] || 0,
                      color: ProtectedAreaColors[des] || "#718096",
                    }))
                    .filter((seg) => seg.area > 0);

                  return (
                    <tr key={classKey}>
                      <td style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span
                          style={{
                            backgroundColor: data.colors[classKey] || "#94a3b8",
                            width: 14,
                            height: 14,
                            display: "inline-block",
                            borderRadius: 2,
                            flexShrink: 0,
                          }}
                        />
                        <span>{classKey.replace(/^\d+(\.\d+)*\s*-\s*/, "")}</span>
                      </td>
                      <td>
                        <div
                          style={{
                            display: "flex",
                            height: 12,
                            width: `${barWidthPercent}%`,
                            backgroundColor: "#f3f4f6",
                            borderRadius: 2,
                            overflow: "hidden",
                            cursor: "crosshair",
                          }}
                          onMouseMove={(e) => {
                            if (!containerRef.current) return;
                            const containerRect = containerRef.current.getBoundingClientRect();
                            const tooltipWidth = 220;
                            const offset = 8;
                            
                            let x = e.clientX - containerRect.left + offset;
                            let flipped = false;
                            
                            // Flip to left side if tooltip would overflow right edge
                            if (x + tooltipWidth > containerRect.width) {
                              x = e.clientX - containerRect.left - offset;
                              flipped = true;
                            }
                            
                            const y = e.clientY - containerRect.top - offset;
                            setBarTooltip({
                              visible: true,
                              x,
                              y,
                              totalAcres: totalAreaAcres,
                              segments: barSegments.map((seg) => ({
                                designation: seg.designation,
                                area: seg.area * SQ_METERS_TO_ACRES,
                                percent: (seg.area / totalAreaMeters) * 100,
                                color: seg.color,
                              })),
                              flipped,
                            });
                          }}
                          onMouseLeave={() => setBarTooltip(null)}
                        >
                          {barSegments.map((seg) => (
                            <div
                              key={seg.designation}
                              style={{
                                width: `${(seg.area / totalAreaMeters) * 100}%`,
                                backgroundColor: seg.color,
                              }}
                            />
                          ))}
                        </div>
                      </td>
                      <td style={{ textAlign: "right" }}>
                        {AcresFormat.format(totalAreaAcres)}
                      </td>
                      <td style={{ textAlign: "right" }}>
                        {PercentFormat.format(fractionOfTotal)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
              );
            })()}
          </div>
        );
      })()}

      {/* Styled tooltip for stacked bars */}
      {barTooltip && (
        <div
          style={{
            position: "absolute",
            ...(barTooltip.flipped
              ? { right: containerRef.current!.clientWidth - barTooltip.x }
              : { left: barTooltip.x }),
            top: barTooltip.y,
            backgroundColor: "rgba(255,255,255,0.97)",
            color: "#111",
            padding: "8px 12px",
            fontSize: 13,
            pointerEvents: "none",
            zIndex: 100,
            border: "1px solid #6b7280",
            lineHeight: 1.4,
            borderRadius: 4,
            width: 220,
            transform: "translateY(-100%)",
          }}
        >
          <div style={{ fontWeight: 500, marginBottom: 6, color: "#374151" }}>
            {AcresFormat.format(barTooltip.totalAcres)} acres total
          </div>
          <div style={{ fontSize: 12, display: "flex", flexDirection: "column", gap: 4 }}>
            {barTooltip.segments.map((seg) => (
              <div
                key={seg.designation}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    backgroundColor: seg.color,
                    flexShrink: 0,
                    borderRadius: 2,
                  }}
                />
                <span style={{ flex: 1 }}>
                  {DesignationNames[seg.designation] || seg.designation}
                </span>
                <span style={{ color: "#6b7280" }}>
                  {seg.percent.toFixed(1)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Goal: 20% of each habitat should be protected
const PROTECTION_GOAL = 0.20;

interface CollectionProtectionContributionProps {
  data: CMECResults;
}

export function CollectionProtectionContribution({
  data,
}: CollectionProtectionContributionProps) {
  const [sortColumn, setSortColumn] = React.useState<SortColumn>("percent");
  const [sortDirection, setSortDirection] = React.useState<SortDirection>("desc");
  const [barTooltip, setBarTooltip] = React.useState<{
    visible: boolean;
    x: number;
    y: number;
    habitatName: string;
    totalPercent: number;
    existingProtections: { designation: string; percent: number; color: string; opacity: number }[];
    newProtections: { designation: string; percent: number; color: string; opacity: number }[];
    flipped: boolean;
  } | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Get all habitat classes from totals (the complete list)
  const habitatClasses = Object.keys(data.precalcs.totals).filter(
    (key) => key !== "9.9.9.9.9 - No data"
  );

  // Calculate existing protection for each habitat (from protectedAreaHabitatTotals)
  const existingProtection: Record<string, Record<string, number>> = {};
  const existingTotalsByHabitat: Record<string, number> = {};
  
  for (const designation of rankedProtectedAreas) {
    const habitatTotals = data.precalcs.protectedAreaHabitatTotals?.[designation];
    if (!habitatTotals) continue;
    
    for (const habitat of habitatClasses) {
      const area = habitatTotals[habitat] || 0;
      if (area > 0) {
        if (!existingProtection[habitat]) {
          existingProtection[habitat] = {};
          existingTotalsByHabitat[habitat] = 0;
        }
        existingProtection[habitat][designation] = area;
        existingTotalsByHabitat[habitat] += area;
      }
    }
  }

  // Calculate new protection for each habitat (from newlyProtectedArea)
  const newProtection: Record<string, Record<string, number>> = {};
  const newTotalsByHabitat: Record<string, number> = {};
  
  for (const designation of rankedProtectedAreas) {
    const habitatTotals = data.newlyProtectedArea?.[designation];
    if (!habitatTotals) continue;
    
    for (const habitat of habitatClasses) {
      const area = habitatTotals[habitat] || 0;
      if (area > 0) {
        if (!newProtection[habitat]) {
          newProtection[habitat] = {};
          newTotalsByHabitat[habitat] = 0;
        }
        newProtection[habitat][designation] = area;
        newTotalsByHabitat[habitat] += area;
      }
    }
  }

  // Combined totals for sorting
  const combinedTotalsByHabitat: Record<string, number> = {};
  for (const habitat of habitatClasses) {
    combinedTotalsByHabitat[habitat] = 
      (existingTotalsByHabitat[habitat] || 0) + (newTotalsByHabitat[habitat] || 0);
  }

  // Filter to only habitats with some protection
  const habitatsWithProtection = habitatClasses.filter(
    (h) => combinedTotalsByHabitat[h] > 0
  );

  const handleSort = (column: SortColumn) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("desc");
    }
  };

  // Sort habitats
  const sortedHabitats = [...habitatsWithProtection].sort((a, b) => {
    let comparison = 0;
    
    if (sortColumn === "habitat") {
      const nameA = a.replace(/^\d+(\.\d+)*\s*-\s*/, "");
      const nameB = b.replace(/^\d+(\.\d+)*\s*-\s*/, "");
      comparison = nameA.localeCompare(nameB);
    } else if (sortColumn === "area") {
      comparison = combinedTotalsByHabitat[a] - combinedTotalsByHabitat[b];
    } else if (sortColumn === "percent") {
      const percentA = combinedTotalsByHabitat[a] / (data.precalcs.totals[a] || 1);
      const percentB = combinedTotalsByHabitat[b] / (data.precalcs.totals[b] || 1);
      comparison = percentA - percentB;
    }
    
    return sortDirection === "asc" ? comparison : -comparison;
  });

  const headerStyle = (align: "left" | "right"): React.CSSProperties => ({
    textAlign: align,
    paddingTop: 12,
    cursor: "pointer",
    userSelect: "none",
  });

  // Find max protection percentage for scaling bars
  const maxProtectionPercent = Math.max(
    PROTECTION_GOAL,
    ...habitatsWithProtection.map(
      (h) => combinedTotalsByHabitat[h] / (data.precalcs.totals[h] || 1)
    )
  );

  return (
    <div ref={containerRef} style={{ marginTop: 32, position: "relative" }}>
      <div style={{
        fontSize: 16, fontWeight: 500, color: "rgb(108, 114, 130)", marginBottom: 0, marginTop: 0, minHeight: "24px",
      }}>
        Habitat Protection Progress
      </div>
      <p>
        The visualization below shows progress towards protecting 20% of each habitat category in the Territorial Sea. Habitat protection from zones within this collection have been combined with existing protected areas, accounting for any overlap. 
      </p>

      <table className="TableCardTable" style={{ fontSize: 13, marginLeft: -16, width: "calc(100% + 32px)" }}>
        <thead>
          <tr style={{ background: "linear-gradient(white 0%, rgb(249, 250, 251) 20%, rgb(249, 250, 251) 100%)" }}>
            <th style={headerStyle("left")} onClick={() => handleSort("habitat")}>
              Habitat
            </th>
            <th style={{ ...headerStyle("left"), width: "40%", cursor: "pointer", userSelect: "none" }} onClick={() => handleSort("percent")}>
              % Protected (20% goal)
            </th>
            <th style={headerStyle("right")} onClick={() => handleSort("area")}>
              Acres
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedHabitats.map((habitat) => {
            const totalHabitatArea = data.precalcs.totals[habitat] || 1;
            const existingArea = existingTotalsByHabitat[habitat] || 0;
            const newArea = newTotalsByHabitat[habitat] || 0;
            const combinedArea = existingArea + newArea;
            const combinedPercent = combinedArea / totalHabitatArea;
            const combinedAcres = combinedArea * SQ_METERS_TO_ACRES;

            const habitatColor = data.colors[habitat] || "#94a3b8";

            // Build new segments (darker, will be displayed first/left)
            // Opacity varies slightly by designation index for subtle differentiation
            const newSegments = rankedProtectedAreas
              .map((des, idx) => ({
                designation: des,
                area: newProtection[habitat]?.[des] || 0,
                // New protections: opacity 0.85-1.0 (dark)
                opacity: 1.0 - (idx * 0.025),
              }))
              .filter((seg) => seg.area > 0);

            // Build existing segments (lighter, will be displayed second/right)
            const existingSegments = rankedProtectedAreas
              .map((des, idx) => ({
                designation: des,
                area: existingProtection[habitat]?.[des] || 0,
                // Existing protections: opacity 0.25-0.4 (light)
                opacity: 0.4 - (idx * 0.025),
              }))
              .filter((seg) => seg.area > 0);

            // Bar width as percentage of max (or goal, whichever is larger)
            const barWidthPercent = (combinedPercent / maxProtectionPercent) * 100;
            // Goal marker position
            const goalPosition = (PROTECTION_GOAL / maxProtectionPercent) * 100;

            return (
              <tr key={habitat}>
                <td style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span
                    style={{
                      backgroundColor: data.colors[habitat] || "#94a3b8",
                      width: 14,
                      height: 14,
                      display: "inline-block",
                      borderRadius: 2,
                      flexShrink: 0,
                    }}
                  />
                  <span style={{maxWidth: 148}}>{habitat.replace(/^\d+(\.\d+)*\s*-\s*/, "")}</span>
                </td>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    {/* Checkmark if goal is met */}
                    {/* {combinedPercent >= PROTECTION_GOAL ? (
                      <div
                        style={{
                          width: 16,
                          height: 16,
                          borderRadius: "50%",
                          backgroundColor: "rgb(54, 115, 95)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                        title="20% goal met"
                      >
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    ) : (
                      <div style={{ width: 16, flexShrink: 0 }} />
                    )} */}
                    {/* Stacked bar container with goal marker inside */}
                    <div
                      style={{
                        display: "flex",
                        height: 16,
                        flex: 1,
                        backgroundColor: "#f3f4f6",
                        borderRadius: 2,
                        overflow: "visible",
                        cursor: "crosshair",
                        position: "relative",
                      }}
                    onMouseMove={(e) => {
                      if (!containerRef.current) return;
                      const containerRect = containerRef.current.getBoundingClientRect();
                      const tooltipWidth = 200;
                      const offset = 8;
                      
                      let x = e.clientX - containerRect.left + offset;
                      let flipped = false;
                      
                      if (x + tooltipWidth > containerRect.width) {
                        x = e.clientX - containerRect.left - offset;
                        flipped = true;
                      }
                      
                      const y = e.clientY - containerRect.top - offset;
                      
                      setBarTooltip({
                        visible: true,
                        x,
                        y,
                        habitatName: habitat.replace(/^\d+(\.\d+)*\s*-\s*/, ""),
                        totalPercent: combinedPercent * 100,
                        existingProtections: existingSegments.map((seg) => ({
                          designation: seg.designation,
                          percent: (seg.area / totalHabitatArea) * 100,
                          color: habitatColor,
                          opacity: seg.opacity,
                        })),
                        newProtections: newSegments.map((seg) => ({
                          designation: seg.designation,
                          percent: (seg.area / totalHabitatArea) * 100,
                          color: habitatColor,
                          opacity: seg.opacity,
                        })),
                        flipped,
                      });
                    }}
                    onMouseLeave={() => setBarTooltip(null)}
                  >
                    {/* New protection segments FIRST (left-most, darker) */}
                    {newSegments.map((seg) => (
                      <div
                        key={`new-${seg.designation}`}
                        style={{
                          width: `${(seg.area / totalHabitatArea / maxProtectionPercent) * 100}%`,
                          backgroundColor: habitatColor,
                          opacity: seg.opacity,
                        }}
                      />
                    ))}
                    {/* Existing protection segments SECOND (right, lighter/faded) */}
                    {existingSegments.map((seg) => (
                      <div
                        key={`existing-${seg.designation}`}
                        style={{
                          width: `${(seg.area / totalHabitatArea / maxProtectionPercent) * 100}%`,
                          backgroundColor: habitatColor,
                          opacity: seg.opacity,
                        }}
                      />
                    ))}
                    {/* Goal marker - positioned inside bar container for accurate alignment */}
                    <div
                      style={{
                        position: "absolute",
                        left: `${goalPosition}%`,
                        top: sortedHabitats.indexOf(habitat) === 0 ? -12 : -24,
                        bottom: sortedHabitats.indexOf(habitat) === sortedHabitats.length - 1 ? -12 : -16,
                        width: 1,
                        backgroundColor: "rgb(54, 115, 95)",
                        pointerEvents: "none",
                        transform: "translateX(-1px)",
                      }}
                      title="20% goal"
                    />
                    {/* Triangle indicator pointing at goal line */}
                    {/* <div
                      style={{
                        position: "absolute",
                        left: `${goalPosition}%`,
                        bottom: -6,
                        width: 0,
                        height: 0,
                        borderLeft: "5px solid transparent",
                        borderRight: "5px solid transparent",
                        borderBottom: "6px solid rgba(16, 185, 129, 0.8)",
                        transform: "translateX(-5px)",
                        pointerEvents: "none",
                      }}
                    /> */}
                    </div>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  {AcresFormat.format(combinedAcres)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Tooltip */}
      {barTooltip && (
        <div
          style={{
            position: "absolute",
            ...(barTooltip.flipped
              ? { right: containerRef.current!.clientWidth - barTooltip.x }
              : { left: barTooltip.x }),
            top: barTooltip.y,
            backgroundColor: "rgba(255,255,255,0.97)",
            color: "#111",
            padding: "8px 10px",
            fontSize: 12,
            pointerEvents: "none",
            zIndex: 100,
            border: "1px solid #6b7280",
            lineHeight: 1.4,
            borderRadius: 4,
            width: 200,
            transform: "translateY(-100%)",
          }}
        >
          {/* Header */}
          <div style={{ fontWeight: 600, marginBottom: 6, color: "#111", fontSize: 13 }}>
            {barTooltip.habitatName} — {barTooltip.totalPercent.toFixed(1)}%
          </div>

          {/* New protections FIRST in tooltip (matches bar order) */}
          {barTooltip.newProtections.length > 0 && (
            <>
              <div style={{ fontSize: 10, color: "#6b7280", marginBottom: 3, fontWeight: 500 }}>
                New protection
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 2, marginBottom: 8 }}>
                {barTooltip.newProtections.map((p) => (
                  <div
                    key={p.designation}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      fontSize: 11,
                    }}
                  >
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        backgroundColor: p.color,
                        opacity: p.opacity,
                        flexShrink: 0,
                        borderRadius: 2,
                      }}
                    />
                    <span style={{ flex: 1 }}>
                      {DesignationNames[p.designation] || p.designation}
                    </span>
                    <span style={{ color: "#6b7280" }}>
                      {p.percent.toFixed(1)}%
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Existing protections SECOND in tooltip */}
          {barTooltip.existingProtections.length > 0 && (
            <>
              <div style={{ fontSize: 10, color: "#6b7280", marginBottom: 3, fontWeight: 500 }}>
                Existing protection
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {barTooltip.existingProtections.map((p) => (
                  <div
                    key={p.designation}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      fontSize: 11,
                    }}
                  >
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        backgroundColor: p.color,
                        opacity: p.opacity,
                        flexShrink: 0,
                        borderRadius: 2,
                      }}
                    />
                    <span style={{ flex: 1 }}>
                      {DesignationNames[p.designation] || p.designation}
                    </span>
                    <span style={{ color: "#6b7280" }}>
                      {p.percent.toFixed(1)}%
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Goal status message */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              marginTop: 8,
              paddingTop: 6,
              borderTop: "1px solid #e5e7eb",
              color: barTooltip.totalPercent >= PROTECTION_GOAL * 100 ? "rgb(54, 115, 95)" : "rgb(185, 68, 68)",
              fontWeight: 500,
              fontSize: 11,
            }}
          >
            {barTooltip.totalPercent >= PROTECTION_GOAL * 100 ? (
              <>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Meets 20% protection goal
              </>
            ) : (
              <>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                Below 20% protection goal
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}