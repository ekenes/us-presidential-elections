import "./App.css";

import "@esri/calcite-components/dist/components/calcite-action";
import "@esri/calcite-components/dist/components/calcite-action-bar";
import "@esri/calcite-components/dist/components/calcite-label";
import "@esri/calcite-components/dist/components/calcite-option";
import "@esri/calcite-components/dist/components/calcite-select";
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-shell-panel";

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
      <calcite-shell-panel slot="panel-start" displayMode="dock" widthScale="m">
        <calcite-action-bar slot="action-bar">
          <calcite-action
            data-action-id="information"
            icon="information"
            text="Information"
          ></calcite-action>
        </calcite-action-bar>
        <calcite-panel
          id="tools"
          scale="m"
          heading={heading}
          data-panel-id="information"
        >
          <calcite-label layout="inline">Select a variable</calcite-label>
          <div className="slider-container">
            <calcite-select
              label=""
              oncalciteSelectChange={async (event) => {
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
                  <calcite-option
                    key={value}
                    label={label}
                    value={value}
                    selected={value === rendererType ? true : false}
                  ></calcite-option>
                )
              )}
            </calcite-select>
          </div>
          <Legends rendererType={rendererType} onYearInput={onYearInput} />
          <AllResults />
        </calcite-panel>
      </calcite-shell-panel>
    </>
  );
}

export default UIPanel;
