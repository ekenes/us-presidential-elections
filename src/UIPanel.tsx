import "./App.css";

import "@esri/calcite-components/dist/components/calcite-option";
import "@esri/calcite-components/dist/components/calcite-select";

import { CalciteOption, CalciteSelect } from "@esri/calcite-components-react";
import Legends from "./Legends";
import { useState } from "react";
import AllResults from "./AllResults";

export interface UIPanelProps {
  mapReferenceElement?: string;
  onYearInput: (year: number | number[]) => void;
  onRendererTypeChange: (rendererType: string) => void;
}

const rendererTypesLayerTitles: { [key: string]: string } = {
  winner: "Winner",
  "winner-lean": "Winner with lean",
  swing: "Swing - dynamic rotation",
  change: "Change - all parties",
  trend: "20-year trend",
};

function UIPanel(props: UIPanelProps) {
  const { mapReferenceElement, onYearInput, onRendererTypeChange } = props;
  const [rendererType, setRendererType] = useState<
    "winner" | "winner-lean" | "swing" | "trend" | "change"
  >("winner");

  return (
    <>
      <CalciteSelect
        onCalciteSelectChange={async (event) => {
          const value = event.target.value!;
          setRendererType(
            value as "winner" | "winner-lean" | "swing" | "trend" | "change"
          );
          onRendererTypeChange(value);
        }}
      >
        {Object.entries(rendererTypesLayerTitles).map(([value, label]) => (
          <CalciteOption
            label={label}
            value={value}
            selected={value === rendererType ? true : false}
          ></CalciteOption>
        ))}
      </CalciteSelect>
      <Legends
        rendererType={rendererType}
        onYearInput={onYearInput}
        mapReferenceElement={mapReferenceElement || undefined}
      />
      <AllResults />
    </>
  );
}

export default UIPanel;
