import React, { useState } from "react";
import { SegmentControl, ReportPage } from "@seasketch/geoprocessing/client-ui";
import { GeographyPage } from "../components/Geography";
import { PhysicalPage } from "../components/Physical";
import { BiologicalPage } from "../components/Biological";
import { HumanUsesPage } from "../components/HumanUses";

const TabReport = () => {
  const tabs = ["Geography", "Physical", "Biological", "Human Use"];
  const [tab, setTab] = useState<string>(tabs[0]);

  return (
    <>
      <div style={{ marginTop: 5 }}>
        <SegmentControl
          value={tab}
          onClick={(segment) => setTab(segment)}
          segments={tabs.map((tab) => {
            return {
              id: tab,
              label: tab,
            };
          }) as { id: string, label: string }[]}
        />
      </div>
      <ReportPage hidden={tab !== "Geography"}>
        <GeographyPage />
      </ReportPage>
      <ReportPage hidden={tab !== "Physical"}>
        <PhysicalPage />
      </ReportPage>
      <ReportPage hidden={tab !== "Biological"}>
        <BiologicalPage />
      </ReportPage>
      <ReportPage hidden={tab !== "Human Use"}>
        <HumanUsesPage />
      </ReportPage>
    </>
  );
};

export default function () {
  // Translator must be in parent FunctionComponent to have access to useTranslate hook
  return (
    <TabReport />
  );
}
