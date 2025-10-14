import "./App.css";

import "@esri/calcite-components/dist/components/calcite-action";
import "@esri/calcite-components/dist/components/calcite-action-bar";
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-shell-panel";

import {
  CalciteAction,
  CalciteActionBar,
  CalcitePanel,
  CalciteShellPanel,
} from "@esri/calcite-components-react";
import Legends from "./Legends";
import { useState, useEffect } from "react";
import { createChangeConfig } from "./changeUtils/createChangeConfig";
import { createTrendConfig } from "./trendUtils/createTrendConfig";

import WebMap from "@arcgis/core/WebMap";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import AllResults from "./AllResults";

export interface MarginalComponentsProps {
  mapReferenceElement?: string;
  webmap: WebMap;
  view: __esri.MapView | null;
  onYearInput: (year: number | number[]) => void;
}

const rendererTypesLayerTitles: { [key: string]: string } = {
  winner: "Winner",
  "winner-lean": "Winner with lean",
  swing: "Swing - dynamic rotation",
  change: "Change - all parties",
  trend: "20-year trend",
};

function MarginalComponents(props: MarginalComponentsProps) {
  const { mapReferenceElement, webmap, view, onYearInput } = props;
  const [rendererType, setRendererType] = useState<
    "winner" | "winner-lean" | "swing" | "trend" | "change"
  >("winner");

  useEffect(() => {
    console.log("renderer type changed: ", rendererType);
  }, [rendererType]);

  const updateRendererFromYear = async (year: number | number[]) => {
    console.log("update renderer from year: ", year);
    // const mapElement = mapRef.current;

    await webmap.load();

    if (!view) return;

    let start, end;
    if (Array.isArray(year)) {
      start = Math.min(...year);
      end = Math.max(...year);
    } else {
      start = end = year;
    }

    view.timeExtent = {
      start: new Date(start, 0, 1),
      end: new Date(end, 0, 1),
    };

    const changeGroupLayer = webmap.allLayers.find(
      (layer) => layer.title === "Change - all parties"
    ) as __esri.GroupLayer;
    if (changeGroupLayer && !Array.isArray(year)) {
      console.log("change group layer found");
      console.log(changeGroupLayer);
      const countyChangeConfig = createChangeConfig({ level: "county", year });
      const stateChangeConfig = createChangeConfig({ level: "state", year });

      const changeCountyLayer = changeGroupLayer.layers.find(
        (layer) => layer.title === "Counties"
      ) as FeatureLayer;

      changeCountyLayer.renderer = countyChangeConfig.renderer;
      changeCountyLayer.popupTemplate = countyChangeConfig.popupTemplate;
      changeCountyLayer.labelingInfo = countyChangeConfig.labelingInfo;

      const changeStateLayer = changeGroupLayer.layers.find(
        (layer) => layer.title === "States"
      ) as FeatureLayer;
      changeStateLayer.renderer = stateChangeConfig.renderer;
      changeStateLayer.popupTemplate = stateChangeConfig.popupTemplate;
      changeStateLayer.labelingInfo = stateChangeConfig.labelingInfo;
    }

    const trendGroupLayer = webmap.allLayers.find(
      (layer) => layer.title === "20-year trend"
    ) as __esri.GroupLayer;

    if (trendGroupLayer) {
      console.log("trend group layer found");
      console.log(trendGroupLayer);
      const countyTrendConfig = createTrendConfig({ level: "county" });
      const stateTrendConfig = createTrendConfig({ level: "state" });

      const trendCountyLayer = trendGroupLayer.layers.find(
        (layer) => layer.title === "Counties"
      ) as FeatureLayer;
      trendCountyLayer.renderer = countyTrendConfig.renderer;
      trendCountyLayer.popupTemplate = countyTrendConfig.popupTemplate;

      const trendStateLayer = trendGroupLayer.layers.find(
        (layer) => layer.title === "States"
      ) as FeatureLayer;
      trendStateLayer.renderer = stateTrendConfig.renderer;
      trendStateLayer.popupTemplate = stateTrendConfig.popupTemplate;
    }
  };

  return (
    <>
      <CalciteShellPanel slot="panel-start" displayMode="dock" widthScale="m">
        <CalciteActionBar slot="action-bar">
          <CalciteAction id="winner" icon="layers" text="Layers" />
          <CalciteAction id="winner-lean" icon="layers" text="Layers" />

          <CalciteAction id="swing" icon="layers" text="Layers" />
          <CalciteAction id="change" icon="layers" text="Layers" />
          <CalciteAction id="trend" icon="layers" text="Layers" />
        </CalciteActionBar>
        <CalcitePanel
          heading="Layers"
          id="layers"
          data-panel-id="layers"
          scale="m"
        >
          <Legends
            rendererType={rendererType}
            onYearInput={(year) => {
              updateRendererFromYear(year);
            }}
            mapReferenceElement={mapReferenceElement || undefined}
            layerList={true}
          />
          <AllResults />
        </CalcitePanel>
      </CalciteShellPanel>
    </>
  );
}

export default MarginalComponents;
