import "@arcgis/map-components/dist/components/arcgis-legend";
import { ArcgisLegend } from "@arcgis/map-components-react";
import "./App.css";

import TrendLegend from "./legendComponents/TrendLegend";
import TrendExamples from "./legendComponents/TrendExamples";
import ChangeLegend from "./legendComponents/ChangeLegend";
import ChangeExamples from "./legendComponents/ChangeExamples";

import "@esri/calcite-components/dist/components/calcite-label";
import "@esri/calcite-components/dist/components/calcite-slider";
import { CalciteLabel, CalciteSlider } from "@esri/calcite-components-react";

export interface LegendsProps {
  rendererType: "winner" | "winner-lean" | "swing" | "trend" | "change";
  onYearInput: (year: number) => void;
}

function Legends(props: LegendsProps) {
  const { rendererType, onYearInput } = props;

  let legendContent;
  switch (rendererType) {
    case "winner":
      legendContent = <ArcgisLegend />;
      break;
    case "winner-lean":
      legendContent = <ArcgisLegend />;
      break;
    case "swing":
      legendContent = <ArcgisLegend />;
      break;
    case "trend":
      legendContent = (
        <>
          <TrendLegend />
          <TrendExamples />
        </>
      );
      break;
    case "change":
      legendContent = (
        <>
          <CalciteLabel layout="inline">Select an election year</CalciteLabel>
          <div className="slider-container">
            <CalciteSlider
              min={2000}
              max={2024}
              labelHandles
              labelTicks
              maxLabel="2024"
              minLabel="2000"
              ticks={4}
              step={4}
              value={2024}
              onCalciteSliderInput={(event) => {
                const year = event.target.value as number;
                onYearInput(year);
              }}
              snap
            ></CalciteSlider>
          </div>
          <ChangeLegend />
          <ChangeExamples />
        </>
      );
      break;
    default:
      legendContent = <ArcgisLegend />;
      break;
  }

  return <>{legendContent}</>;
}

export default Legends;
