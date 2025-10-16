import "./App.css";

import "@esri/calcite-components/dist/components/calcite-action";
import "@esri/calcite-components/dist/components/calcite-action-bar";
import "@esri/calcite-components/dist/components/calcite-label";
import "@esri/calcite-components/dist/components/calcite-option";
import "@esri/calcite-components/dist/components/calcite-select";
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-shell-panel";

import {
  CalciteAction,
  CalciteActionBar,
  CalciteLabel,
  CalciteOption,
  CalcitePanel,
  CalciteSelect,
  CalciteShellPanel,
} from "@esri/calcite-components-react";
import Legends from "./Legends";
import { useState } from "react";
import AllResults from "./AllResults";

export interface UIPanelProps {
  onYearInput: (year: number | number[]) => void;
  onRendererTypeChange: (rendererType: string) => void;
}

const rendererTypesLayerTitles: { [key: string]: string } = {
  winner: "Winner",
  "winner-lean": "Winner with lean",
  swing: "Swing",
  change: "Change - all parties",
  trend: "Trend",
};

function UIPanel(props: UIPanelProps) {
  const { onYearInput, onRendererTypeChange } = props;
  const [rendererType, setRendererType] = useState<
    "winner" | "winner-lean" | "swing" | "trend" | "change"
  >("winner");

  const [heading, setHeading] = useState<string>(
    rendererTypesLayerTitles[rendererType]
  );

  return (
    <>
      <CalciteShellPanel slot="panel-start" displayMode="dock" widthScale="m">
        <CalciteActionBar slot="action-bar">
          <CalciteAction
            data-action-id="information"
            icon="information"
            text="Information"
          ></CalciteAction>
        </CalciteActionBar>
        <CalcitePanel
          id="tools"
          scale="m"
          heading={heading}
          data-panel-id="information"
        >
          <CalciteLabel layout="inline">Select a variable</CalciteLabel>
          <div className="slider-container">
            <CalciteSelect
              onCalciteSelectChange={async (event) => {
                const value = event.target.value!;
                setRendererType(
                  value as
                    | "winner"
                    | "winner-lean"
                    | "swing"
                    | "trend"
                    | "change"
                );
                onRendererTypeChange(value);
                setHeading(rendererTypesLayerTitles[value]);
              }}
            >
              {Object.entries(rendererTypesLayerTitles).map(
                ([value, label]) => (
                  <CalciteOption
                    key={value}
                    label={label}
                    value={value}
                    selected={value === rendererType ? true : false}
                  ></CalciteOption>
                )
              )}
            </CalciteSelect>
          </div>
          <Legends rendererType={rendererType} onYearInput={onYearInput} />
          <AllResults />
        </CalcitePanel>
      </CalciteShellPanel>
    </>
  );
}

export default UIPanel;
