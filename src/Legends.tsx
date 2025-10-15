import "@arcgis/map-components/dist/components/arcgis-legend";
import { ArcgisLegend } from "@arcgis/map-components-react";
import "./App.css";

import TrendLegend from "./legendComponents/TrendLegend";
import TrendExamples from "./legendComponents/TrendExamples";
import ChangeLegend from "./legendComponents/ChangeLegend";

import "@esri/calcite-components/dist/components/calcite-label";
import "@esri/calcite-components/dist/components/calcite-slider";
import { CalciteLabel, CalciteSlider } from "@esri/calcite-components-react";
import { useEffect, useState } from "react";
import ChangeExamples from "./legendComponents/ChangeExamples";
import SwingExamples from "./legendComponents/SwingExamples";
import SwingLegend from "./legendComponents/SwingLegend";
import LeanLegend from "./legendComponents/LeanLegend";
import LeanExamples from "./legendComponents/LeanExamples";
import WinnerLegend from "./legendComponents/WinnerLegend";

export interface LegendsProps {
  rendererType: "winner" | "winner-lean" | "swing" | "trend" | "change";
  onYearInput: (year: number | number[]) => void;
}

function Legends(props: LegendsProps) {
  const { onYearInput, rendererType } = props;

  const [year, setYear] = useState<number>(2024);

  useEffect(() => {
    onYearInput(year);
  }, [rendererType, year, onYearInput]);

  let legendContent;
  switch (rendererType) {
    case "winner":
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
              value={year}
              onCalciteSliderInput={(event) => {
                const year = event.target.value as number;
                // onYearInput(year);
                setYear(year);
              }}
              snap
            ></CalciteSlider>
          </div>
          <WinnerLegend />
        </>
      );
      break;
    case "winner-lean":
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
              value={year}
              onCalciteSliderInput={(event) => {
                const year = event.target.value as number;
                // onYearInput(year);
                setYear(year);
              }}
              snap
            ></CalciteSlider>
          </div>
          <LeanLegend />
          <LeanExamples />
        </>
      );
      break;
    case "swing":
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
              value={[year - 4, year]}
              onCalciteSliderInput={(event) => {
                const years = event.target.value as number[];
                onYearInput(years);
                // setYear(years[years.length - 1]);
              }}
              snap
            ></CalciteSlider>
          </div>
          <SwingLegend />
          <SwingExamples />
        </>
      );
      break;
    case "trend":
      legendContent = (
        <>
          <CalciteLabel layout="inline">Select an election year</CalciteLabel>
          <div className="slider-container">
            <CalciteSlider
              min={2016}
              max={2024}
              labelHandles
              labelTicks
              maxLabel="2024"
              minLabel="2016"
              ticks={4}
              step={4}
              value={year}
              onCalciteSliderInput={(event) => {
                const year = event.target.value as number;
                // onYearInput(year);
                setYear(year);
              }}
              snap
            ></CalciteSlider>
          </div>
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
              min={2004}
              max={2024}
              labelHandles
              labelTicks
              maxLabel="2024"
              minLabel="2004"
              ticks={4}
              step={4}
              value={year}
              onCalciteSliderInput={(event) => {
                const years = event.target.value as number;
                // onYearInput(years);
                setYear(years);
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
      legendContent = (
        <>
          <ArcgisLegend />
        </>
      );
      break;
  }

  return <>{legendContent}</>;
}

export default Legends;
