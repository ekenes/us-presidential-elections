import "./App.css";

import { setAssetPath } from "@esri/calcite-components/dist/components";
// CDN hosted assets
setAssetPath("https://js.arcgis.com/calcite-components/3.2.1/assets");

import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/dist/components/arcgis-layer-list";
import { ArcgisLayerList, ArcgisMap } from "@arcgis/map-components-react";

import "@esri/calcite-components/dist/components/calcite-action";
import "@esri/calcite-components/dist/components/calcite-action-bar";
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-shell-panel";
import "@esri/calcite-components/dist/components/calcite-slider";
import "@esri/calcite-components/dist/components/calcite-label";

import {
  CalciteAction,
  CalciteActionBar,
  CalcitePanel,
  CalciteShell,
  CalciteShellPanel,
} from "@esri/calcite-components-react";

import esriConfig from "@arcgis/core/config";
import Popup from "@arcgis/core/widgets/Popup";

import { useRef } from "react";
import AllResults from "./AllResults";
import Legends from "./Legends";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

import WebMap from "@arcgis/core/WebMap";
import { createChangeConfig } from "./changeUtils/createChangeConfig";
import { createTrendConfig } from "./trendUtils/createTrendConfig";

esriConfig.applicationName = "U.S. Presidential Election Results (2000-2024)";

function App() {
  const mapRef = useRef<HTMLArcgisMapElement | null>(null);

  // const webmapId = "6e7cf1cccdbd4711b9c79d568d8c108b";
  const webmap = new WebMap({
    portalItem: {
      id: "6e7cf1cccdbd4711b9c79d568d8c108b",
      // id: "1c2dfdb8c339473ab7b0ab11cb561e47"
    },
  });

  const updateRendererFromYear = async (year: number) => {
    console.log("update renderer from year: ", year);
    const mapElement = mapRef.current;

    if (!mapElement || !webmap) return;

    await webmap.load();

    const changeGroupLayer = webmap.allLayers.find(
      (layer) => layer.title === "Change - all parties"
    ) as __esri.GroupLayer;
    if (changeGroupLayer) {
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

  const initialize = async () => {
    const mapElement = mapRef.current;

    if (!mapElement || !webmap) return;

    await webmap.load();
    const year = 2024;

    const changeGroupLayer = webmap.allLayers.find(
      (layer) => layer.title === "Change - all parties"
    ) as __esri.GroupLayer;
    if (changeGroupLayer) {
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

    const view = mapElement?.view;
    view.timeExtent = {
      start: new Date(2020, 0, 1),
      end: new Date(2024, 0, 1),
    };
    console.log(view.timeExtent);
    view.popup = new Popup();
    view!.padding = {
      left: 49,
    };

    let activeWidget: string | null = null;

    const handleActionBarClick = (event: Event) => {
      const { target } = event;
      if ((target as HTMLCalciteActionElement)!.tagName !== "CALCITE-ACTION") {
        return;
      }

      if (activeWidget) {
        (document.querySelector(
          `[data-action-id=${activeWidget}]`
        ) as HTMLCalciteActionElement)!.active = false;
        (document.querySelector(
          `[data-panel-id=${activeWidget}]`
        ) as HTMLCalcitePanelElement)!.hidden = true;
      }

      const nextWidget: string | null = (target as HTMLCalciteActionElement)
        .dataset.actionId!;
      if (nextWidget !== activeWidget) {
        (document.querySelector(
          `[data-action-id=${nextWidget}]`
        ) as HTMLCalciteActionElement)!.active = true;
        (document.querySelector(
          `[data-panel-id=${nextWidget}]`
        ) as HTMLCalcitePanelElement)!.hidden = false;
        activeWidget = nextWidget;
      } else {
        activeWidget = null;
      }
    };

    const actionBar = document.querySelector("calcite-action-bar")!;

    actionBar.addEventListener("click", handleActionBarClick);

    let actionBarExpanded = true;
    actionBar.addEventListener("onCalciteActionBarToggle", () => {
      actionBarExpanded = !actionBarExpanded;
      view!.padding = {
        left: actionBarExpanded ? 135 : 49,
      };
    });
  };

  return (
    <>
      <CalciteShell contentBehind={true}>
        <h2 id="header-title" slot="header"></h2>
        <CalciteShellPanel slot="panel-start" displayMode="dock" widthScale="m">
          <CalciteActionBar slot="action-bar">
            <CalciteAction
              data-action-id="layers"
              icon="layers"
              text="Layers"
            />
          </CalciteActionBar>
          <CalcitePanel
            heading="Layers"
            id="layers"
            data-panel-id="layers"
            scale="m"
          >
            <Legends
              rendererType={"change"}
              onYearInput={(year) => {
                updateRendererFromYear(year);
              }}
            />
            <AllResults />
          </CalcitePanel>
        </CalciteShellPanel>
        <ArcgisMap
          id="map"
          class="map-only"
          // itemId={webmapId}
          map={webmap}
          ref={mapRef}
          onArcgisViewReadyChange={initialize}
        >
          <ArcgisLayerList position="top-right"></ArcgisLayerList>
        </ArcgisMap>
      </CalciteShell>
    </>
  );
}

export default App;
