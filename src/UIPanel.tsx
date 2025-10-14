import "./App.css";

import "@esri/calcite-components/dist/components/calcite-option";
import "@esri/calcite-components/dist/components/calcite-select";

import { CalciteOption, CalciteSelect } from "@esri/calcite-components-react";
import Legends from "./Legends";
import { useState, useEffect } from "react";
import AllResults from "./AllResults";

export interface UIPanelProps {
  // rendererType: "winner" | "winner-lean" | "swing" | "trend" | "change";
  mapReferenceElement?: string;
  onYearInput: (year: number | number[]) => void;
  onRendererTypeChange: (rendererType: string) => void;
  // onLayerVisibilityChange: (rendererType: string) => void;
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

  // useEffect(() => {
  //   // console.log("renderer type changed: ", rendererType);
  // }, [rendererType]);

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
          >
            {/* {label} */}
          </CalciteOption>
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
