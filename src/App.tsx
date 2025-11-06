/// <reference types="@arcgis/map-components/types/react" />
/// <reference types="@esri/calcite-components/types/react" />

/* eslint-disable @typescript-eslint/no-explicit-any */
import "./App.css";

import "@arcgis/map-components/dist/components/arcgis-map";

import "@esri/calcite-components/dist/components/calcite-shell";

import esriConfig from "@arcgis/core/config";
import Popup from "@arcgis/core/widgets/Popup";

import { useRef } from "react";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

import WebMap from "@arcgis/core/WebMap";
import TimeExtent from "@arcgis/core/time/TimeExtent";

import { createChangeConfig } from "./changeUtils/createChangeConfig";
import { createTrendConfig } from "./trendUtils/createTrendConfig";
import UIPanel from "./UIPanel";
import {
  akExtent,
  akWebmapId,
  appTitle,
  hiExtent,
  hiWebmapId,
  validYears,
  webmapId,
} from "./config";

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
  const akMapRef = useRef<HTMLArcgisMapElement | null>(null);
  const hiMapRef = useRef<HTMLArcgisMapElement | null>(null);

  const webmap = new WebMap({
    portalItem: {
      id: webmapId,
    },
  });

  const akWebmap = new WebMap({
    portalItem: {
      id: akWebmapId,
    },
  });

  const hiWebmap = new WebMap({
    portalItem: {
      id: hiWebmapId,
    },
  });

  const updateRendererFromYear = async ({
    year,
    mapElement,
  }: {
    year: validYears | validYears[];
    mapElement: HTMLArcgisMapElement;
  }) => {
    if (!mapElement) return;

    await (mapElement.map as WebMap)!.load();

    let start, end;
    if (Array.isArray(year)) {
      start = Math.min(...year);
      end = Math.max(...year);
    } else {
      start = end = year;
    }

    mapElement.timeExtent = new TimeExtent({
      start: new Date(start, 0, 1),
      end: new Date(end, 0, 1),
    });

    const changeGroupLayer = mapElement.map!.allLayers.find(
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

      const winnerGroupLayer = mapElement.map!.allLayers.find(
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

      const winnerLeanGroupLayer = mapElement.map!.allLayers.find(
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

      const swingGroupLayer = mapElement.map!.allLayers.find(
        (layer) => layer.title === "Swing"
      ) as __esri.GroupLayer;

      const swingStateLayer = swingGroupLayer.layers.find(
        (layer) => layer.title === "States"
      ) as FeatureLayer;
      const swingCountyLayer = swingGroupLayer.layers.find(
        (layer) => layer.title === "Counties"
      ) as FeatureLayer;
      swingCountyLayer.popupTemplate = countyChangeConfig.popupTemplate;
      swingStateLayer.popupTemplate = stateChangeConfig.popupTemplate;
    }

    const trendGroupLayer = mapElement.map!.allLayers.find(
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

  const initialize = async (mapElement: HTMLArcgisMapElement) => {
    if (!mapElement) return;

    await (mapElement.map as WebMap)!.load();
    const year = 2024;

    await updateRendererFromYear({ year, mapElement });

    view = mapElement?.view;
    view.constraints = {
      snapToZoom: false,
    };

    if (mapElement.id === "map") {
      view.watch("scale", () => {
        if (!akMapRef.current || !hiMapRef.current) return;

        if (view.scale < 5710191) {
          akMapRef.current!.hidden = true;
          hiMapRef.current!.hidden = true;
        } else {
          akMapRef.current!.hidden = false;
          hiMapRef.current!.hidden = false;
        }
      });
    }

    view.popup = new Popup();
    view.popup.dockEnabled = true;
    view.popup.dockOptions = {
      buttonEnabled: false,
      breakpoint: false,
      position: "top-right",
    };

    if (
      (mapElement?.map as WebMap)?.portalItem?.title ===
      "U.S. Presidential Election Trends"
    ) {
      mapElement.padding = {
        left: 468,
      };
      mapElement.style.setProperty(
        "--arcgis-layout-overlay-space-left",
        "468px"
      );
    }

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
          if (
            (mapElement?.map as WebMap)?.portalItem?.title ===
            "U.S. Presidential Election Trends"
          ) {
            if (actionBarExpanded) {
              mapElement.padding = {
                left: 554,
              };
              mapElement.style.setProperty(
                "--arcgis-layout-overlay-space-left",
                "554px"
              );
            } else {
              mapElement.padding = {
                left: 468,
              };
              mapElement.style.setProperty(
                "--arcgis-layout-overlay-space-left",
                "468px"
              );
            }
          }

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
          if (
            (mapElement?.map as WebMap)?.portalItem?.title ===
            "U.S. Presidential Election Trends"
          ) {
            if (actionBarExpanded) {
              mapElement.padding = {
                left: 135,
              };
              mapElement.style.setProperty(
                "--arcgis-layout-overlay-space-left",
                "135px"
              );
            } else {
              mapElement.padding = {
                left: 49,
              };
              mapElement.style.setProperty(
                "--arcgis-layout-overlay-space-left",
                "49px"
              );
            }
          }
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
        if (
          (mapElement?.map as WebMap)?.portalItem?.title ===
          "U.S. Presidential Election Trends"
        ) {
          if (actionBarExpanded) {
            mapElement.padding = {
              left: 135,
            };
            mapElement.style.setProperty(
              "--arcgis-layout-overlay-space-left",
              "135px"
            );
          } else {
            mapElement.padding = {
              left: 49,
            };
            mapElement.style.setProperty(
              "--arcgis-layout-overlay-space-left",
              "49px"
            );
          }
        }
      });
    });
  };

  return (
    <>
      <calcite-shell contentBehind={true}>
        <h2 id="header-title" slot="header">
          {appTitle}
        </h2>
        <UIPanel
          onYearInput={(year) => {
            updateRendererFromYear({
              year: year as validYears | validYears[],
              mapElement: mapRef.current!,
            });
            updateRendererFromYear({
              year: year as validYears | validYears[],
              mapElement: akMapRef.current!,
            });
            updateRendererFromYear({
              year: year as validYears | validYears[],
              mapElement: hiMapRef.current!,
            });
          }}
          onRendererTypeChange={(rendererType) => {
            const maps = [
              mapRef.current!,
              akMapRef.current!,
              hiMapRef.current!,
            ];
            maps.forEach((mapElement) => {
              if (!mapElement) return;
              const activeLayer = (
                mapElement.map!.layers.find(
                  (layer) => layer.title === "Election Visualizations"
                ) as __esri.GroupLayer
              ).layers.find(
                (layer) =>
                  layer.title === rendererTypesLayerTitles[rendererType]
              )!;
              activeLayer.visible = true;
            });
          }}
        />
        <arcgis-map
          id="map"
          map={webmap}
          ref={mapRef}
          onarcgisViewReadyChange={() => {
            initialize(mapRef.current!);
          }}
        >
          {/* <div id="ak-view" slot="bottom-left">
            I'm testing to see if this works
          </div> */}
          <arcgis-map
            id="ak-view"
            className="inset-views"
            map={akWebmap}
            ref={akMapRef}
            extent={akExtent}
            onarcgisViewReadyChange={() => {
              initialize(akMapRef.current!);
              akMapRef.current!.view!.watch("center", () => {
                console.log(view.scale);
                console.log(JSON.stringify(view.center));
              });
            }}
            onBlur={() => {
              const akElement = akMapRef.current!;
              if (!akElement) return;
              akElement
                .goTo(
                  {
                    center: akExtent.center,
                    scale: 38000000,
                  },
                  {
                    animate: true,
                    duration: 1000,
                    easing: "ease-in",
                  }
                )
                .catch((error) => {
                  console.error("Error going to AK center:", error);
                });
            }}
            slot="bottom-left"
          ></arcgis-map>
          <arcgis-map
            id="hi-view"
            className="inset-views"
            map={hiWebmap}
            ref={hiMapRef}
            extent={hiExtent}
            onarcgisViewReadyChange={() => {
              initialize(hiMapRef.current!);
            }}
            onBlur={() => {
              const hiElement = hiMapRef.current!;
              if (!hiElement) return;
              hiElement
                .goTo(
                  {
                    center: hiExtent.center,
                    scale: 10833054,
                  },
                  {
                    animate: true,
                    duration: 1000,
                    easing: "ease-in",
                  }
                )
                .catch((error) => {
                  console.error("Error going to HI center:", error);
                });
            }}
            slot="bottom-left"
          ></arcgis-map>
        </arcgis-map>
      </calcite-shell>
    </>
  );
}

export default App;
