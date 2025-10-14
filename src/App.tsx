import "./App.css";

import { setAssetPath } from "@esri/calcite-components/dist/components";
// CDN hosted assets
setAssetPath("https://js.arcgis.com/calcite-components/3.2.1/assets");

import "@arcgis/map-components/dist/components/arcgis-map";
import { ArcgisMap } from "@arcgis/map-components-react";

import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-shell-panel";

import {
  CalcitePanel,
  CalciteShell,
  CalciteShellPanel,
} from "@esri/calcite-components-react";

import esriConfig from "@arcgis/core/config";
import Popup from "@arcgis/core/widgets/Popup";

import { useRef } from "react";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

import WebMap from "@arcgis/core/WebMap";
import { createChangeConfig } from "./changeUtils/createChangeConfig";
import { createTrendConfig } from "./trendUtils/createTrendConfig";
import UIPanel from "./UIPanel";
import { appTitle, webmapId } from "./config";

esriConfig.applicationName = "U.S. Presidential Election Results (2000-2024)";

const rendererTypesLayerTitles: { [key: string]: string } = {
  winner: "Winner",
  "winner-lean": "Winner - with lean",
  swing: "Swing - dynamic rotation",
  change: "Change - all parties",
  trend: "20-year trend",
};

function App() {
  const mapRef = useRef<HTMLArcgisMapElement | null>(null);

  const webmap = new WebMap({
    portalItem: {
      id: webmapId,
    },
  });

  const updateRendererFromYear = async (year: number | number[]) => {
    const mapElement = mapRef.current;

    if (!mapElement || !webmap) return;

    await webmap.load();

    view = mapElement?.view;
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

      const winnerGroupLayer = webmap.allLayers.find(
        (layer) => layer.title === "Winner"
      ) as __esri.GroupLayer;
      const winnerStateLayer = winnerGroupLayer.layers.find(
        (layer) => layer.title === "States"
      ) as FeatureLayer;
      const winnerCountyLayer = winnerGroupLayer.layers.find(
        (layer) => layer.title === "Counties"
      ) as FeatureLayer;
      winnerCountyLayer.popupTemplate = countyChangeConfig.popupTemplate;
      winnerStateLayer.popupTemplate = stateChangeConfig.popupTemplate;

      const winnerLeanGroupLayer = webmap.allLayers.find(
        (layer) => layer.title === "Winner - with lean"
      ) as __esri.GroupLayer;
      const winnerLeanStateLayer = winnerLeanGroupLayer.layers.find(
        (layer) => layer.title === "States"
      ) as FeatureLayer;
      const winnerLeanCountyLayer = winnerLeanGroupLayer.layers.find(
        (layer) => layer.title === "Counties"
      ) as FeatureLayer;
      winnerLeanCountyLayer.popupTemplate = countyChangeConfig.popupTemplate;
      winnerLeanStateLayer.popupTemplate = stateChangeConfig.popupTemplate;

      const swingLayer = webmap.allLayers.find(
        (layer) => layer.title === "Swing - dynamic rotation"
      ) as FeatureLayer;
      swingLayer.popupTemplate = countyChangeConfig.popupTemplate;
    }

    const trendGroupLayer = webmap.allLayers.find(
      (layer) => layer.title === "20-year trend"
    ) as __esri.GroupLayer;

    if (trendGroupLayer) {
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

  let view: __esri.MapView;

  const initialize = async () => {
    const mapElement = mapRef.current;

    if (!mapElement || !webmap) return;

    await webmap.load();
    const year = 2024;

    await updateRendererFromYear(year);

    view = mapElement?.view;
    view.constraints = {
      snapToZoom: false,
    };

    view.popup = new Popup();
    view.popup.dockEnabled = true;
    view.popup.dockOptions = {
      buttonEnabled: false,
      breakpoint: false,
      position: "top-right",
    };
    view!.padding = {
      left: 300,
    };
  };

  return (
    <>
      <CalciteShell contentBehind={true}>
        <h2 id="header-title" slot="header">
          {appTitle}
        </h2>
        <CalciteShellPanel slot="panel-start" displayMode="dock" widthScale="m">
          <CalcitePanel id="tools" scale="m">
            <UIPanel
              onYearInput={(year) => {
                updateRendererFromYear(year);
              }}
              onRendererTypeChange={(rendererType) => {
                const activeLayer = (
                  webmap.layers.find(
                    (layer) => layer.title === "Election Visualizations"
                  ) as __esri.GroupLayer
                ).layers.find(
                  (layer) =>
                    layer.title === rendererTypesLayerTitles[rendererType]
                )!;
                activeLayer.visible = true;
              }}
              mapReferenceElement={mapRef.current?.id || undefined}
            />
          </CalcitePanel>
        </CalciteShellPanel>
        <ArcgisMap
          id="map"
          class="map-only"
          map={webmap}
          ref={mapRef}
          onArcgisViewReadyChange={initialize}
        ></ArcgisMap>
      </CalciteShell>
    </>
  );
}

export default App;
