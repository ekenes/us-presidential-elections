/* eslint-disable @typescript-eslint/no-explicit-any */
import "./App.css";

import { setAssetPath } from "@esri/calcite-components/dist/components";
// CDN hosted assets
setAssetPath("https://js.arcgis.com/calcite-components/3.2.1/assets");

import "@arcgis/map-components/dist/components/arcgis-map";
import { ArcgisMap } from "@arcgis/map-components-react";

import "@esri/calcite-components/dist/components/calcite-shell";

import { CalciteShell } from "@esri/calcite-components-react";

import esriConfig from "@arcgis/core/config";
import Popup from "@arcgis/core/widgets/Popup";

import { useRef } from "react";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

import WebMap from "@arcgis/core/WebMap";
import { createChangeConfig } from "./changeUtils/createChangeConfig";
import { createTrendConfig } from "./trendUtils/createTrendConfig";
import UIPanel from "./UIPanel";
import { appTitle, validYears, webmapId } from "./config";

esriConfig.applicationName = "U.S. Presidential Election Results (2000-2024)";

const rendererTypesLayerTitles: { [key: string]: string } = {
  winner: "Winner",
  "winner-lean": "Winner - with lean",
  swing: "Swing",
  change: "Change - all parties",
  trend: "Trend",
};

function App() {
  const mapRef = useRef<HTMLArcgisMapElement | null>(null);

  const webmap = new WebMap({
    portalItem: {
      id: webmapId,
    },
  });

  const updateRendererFromYear = async (year: validYears | validYears[]) => {
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

      const swingGroupLayer = webmap.allLayers.find(
        (layer) => layer.title === "Swing"
      ) as __esri.GroupLayer;
      const swingCountyLayer = swingGroupLayer.layers.find(
        (layer) => layer.title === "Counties"
      ) as FeatureLayer;
      swingCountyLayer.popupTemplate = countyChangeConfig.popupTemplate;
    }

    const trendGroupLayer = webmap.allLayers.find(
      (layer) => layer.title === "Trend"
    ) as __esri.GroupLayer;

    if (trendGroupLayer) {
      const countyTrendConfig = createTrendConfig({
        level: "county",
        year: year as validYears,
      });
      const stateTrendConfig = createTrendConfig({
        level: "state",
        year: year as validYears,
      });

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
    view.padding = {
      left: 49 + 419,
    };

    view.when(() => {
      let activeWidget: any = null;

      const handleActionBarClick = ({ target }: any) => {
        if (!document) {
          return;
        }
        if (target.tagName !== "CALCITE-ACTION") {
          return;
        }

        const calciteShellPanel = document.querySelector(
          "calcite-shell-panel"
        ) as any;

        if (activeWidget) {
          (document as any).querySelector(
            `[data-action-id=${activeWidget}]`
          ).active = false;
          (document as any).querySelector(
            `[data-panel-id=${activeWidget}]`
          ).closed = true;
        }

        const nextWidget = target.dataset.actionId;
        if (nextWidget !== activeWidget) {
          calciteShellPanel!.collapsed = false;
          view.padding = {
            left: actionBarExpanded ? 135 + 419 : 49 + 419,
          };
          (document as any).querySelector(
            `[data-action-id=${nextWidget}]`
          ).active = true;
          (document as any).querySelector(
            `[data-panel-id=${nextWidget}]`
          ).closed = false;
          activeWidget = nextWidget;
          (document as any)
            .querySelector(`[data-panel-id=${nextWidget}]`)
            .setFocus();
        } else {
          activeWidget = null;
          calciteShellPanel!.collapsed = true;
          view.padding = {
            left: actionBarExpanded ? 135 : 49,
          };
        }
      };

      let actionBarExpanded = false;

      // Panel interaction
      const panelEls = document.querySelectorAll("calcite-panel");
      for (let i = 0; i < panelEls.length; i++) {
        panelEls[i].addEventListener("calcitePanelClose", () => {
          const calciteShellPanel = document.querySelector(
            "calcite-shell-panel"
          ) as any;
          calciteShellPanel!.collapsed = true;

          (document as any).querySelector(
            `[data-action-id=${activeWidget}]`
          ).active = false;
          (document as any)
            .querySelector(`[data-action-id=${activeWidget}]`)
            .setFocus();
          activeWidget = null;
        });
      }

      (document as any)
        .querySelector("calcite-action-bar")
        .addEventListener("click", handleActionBarClick);

      document.addEventListener("calciteActionBarToggle", () => {
        actionBarExpanded = !actionBarExpanded;
        view.padding = {
          left: actionBarExpanded ? 135 : 49, // with panel 468
        };
      });
    });
  };

  return (
    <>
      <CalciteShell contentBehind={true}>
        <h2 id="header-title" slot="header">
          {appTitle}
        </h2>
        <UIPanel
          onYearInput={(year) => {
            updateRendererFromYear(year as validYears | validYears[]);
          }}
          onRendererTypeChange={(rendererType) => {
            const activeLayer = (
              webmap.layers.find(
                (layer) => layer.title === "Election Visualizations"
              ) as __esri.GroupLayer
            ).layers.find(
              (layer) => layer.title === rendererTypesLayerTitles[rendererType]
            )!;
            activeLayer.visible = true;
          }}
        />
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
