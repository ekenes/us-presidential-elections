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

const defaultMin = 2004;
const defaultMax = 2024;

function Legends(props: LegendsProps) {
  const { onYearInput, rendererType } = props;

  const [year, setYear] = useState<number>(defaultMax);
  const [sliderMin, setSliderMin] = useState<number>(defaultMin);
  const [sliderMax, setSliderMax] = useState<number>(defaultMax);

  useEffect(() => {
    onYearInput(year);
    if (rendererType === "winner" || rendererType === "winner-lean") {
      setSliderMin(defaultMin);
      setSliderMax(defaultMax);
      if (year < defaultMin) {
        setYear(defaultMin);
        onYearInput(defaultMin);
      } else if (year > defaultMax) {
        setYear(defaultMax);
        onYearInput(defaultMax);
      }
    } else if (rendererType === "swing" || rendererType === "change") {
      setSliderMin(defaultMin);
      setSliderMax(defaultMax);
      if (year < defaultMin) {
        setYear(defaultMin);
        onYearInput(defaultMin);
      } else if (year > defaultMax) {
        setYear(defaultMax);
        onYearInput(defaultMax);
      }
    } else if (rendererType === "trend") {
      setSliderMin(2016);
      setSliderMax(defaultMax);
      if (year < 2016) {
        setYear(2016);
        onYearInput(2016);
      } else if (year > defaultMax) {
        setYear(defaultMax);
        onYearInput(defaultMax);
      }
    }
  }, [rendererType, year, onYearInput, setYear]);

  let legendContent;
  switch (rendererType) {
    case "winner":
      legendContent = (
        <>
          <CalciteLabel layout="inline">Select an election year</CalciteLabel>
          <div className="slider-container">
            <CalciteSlider
              min={sliderMin}
              max={sliderMax}
              labelHandles
              labelTicks
              maxLabel={sliderMax.toString()}
              minLabel={sliderMin.toString()}
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
              min={sliderMin}
              max={sliderMax}
              labelHandles
              labelTicks
              maxLabel={sliderMax.toString()}
              minLabel={sliderMin.toString()}
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
              min={sliderMin}
              max={sliderMax}
              labelHandles
              labelTicks
              maxLabel={sliderMax.toString()}
              minLabel={sliderMin.toString()}
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
              min={sliderMin}
              max={sliderMax}
              labelHandles
              labelTicks
              maxLabel={sliderMax.toString()}
              minLabel={sliderMin.toString()}
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
              min={sliderMin}
              max={sliderMax}
              labelHandles
              labelTicks
              maxLabel={sliderMax.toString()}
              minLabel={sliderMin.toString()}
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
