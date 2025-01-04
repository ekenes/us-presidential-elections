import "./App.css";

import { setAssetPath } from "@esri/calcite-components/dist/components";
// CDN hosted assets
setAssetPath("https://js.arcgis.com/calcite-components/2.13.2/assets");

import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/dist/components/arcgis-legend";
import { ArcgisLegend, ArcgisMap } from "@arcgis/map-components-react";

import "@esri/calcite-components/dist/components/calcite-action";
import "@esri/calcite-components/dist/components/calcite-action-bar";
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-shell-panel";
import "@esri/calcite-components/dist/components/calcite-slider";
import "@esri/calcite-components/dist/components/calcite-block";

import {
  CalciteAction,
  CalciteActionBar,
  CalciteBlock,
  CalcitePanel,
  CalciteShell,
  CalciteShellPanel,
  CalciteSlider,
} from "@esri/calcite-components-react";

import esriConfig from "@arcgis/core/config";
import Popup from "@arcgis/core/widgets/Popup";

import { useRef } from "react";
import Examples from "./Examples";
import AllResults from "./AllResults";

esriConfig.applicationName = "U.S. Presidential Election Results (2000-2024)";

function App() {
  const mapRef = useRef<HTMLArcgisMapElement | null>(null);

  const webmapId = "1c2dfdb8c339473ab7b0ab11cb561e47";

  const initialize = async () => {
    const mapElement = mapRef.current;

    if (!mapElement) return;

    const view = mapElement?.view;
    view.popup = new Popup();
    view!.padding = {
      left: 49,
    };
    const webmap = view?.map as __esri.WebMap;

    const title = webmap?.portalItem
      ? webmap.portalItem.title
      : "Default Title";

    document.querySelector("#header-title")!.textContent = title;

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

    (
      document.querySelector("calcite-shell") as HTMLCalciteShellElement
    ).hidden = false;
    (
      document.querySelector("calcite-loader") as HTMLCalciteLoaderElement
    ).hidden = true;
  };

  return (
    <>
      <CalciteShell contentBehind={true}>
        <h2 id="header-title" slot="header"></h2>
        <CalciteShellPanel
          slot="panel-start"
          displayMode="float"
          widthScale="m"
        >
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
            Select an election year
            <CalciteSlider
              min={2000}
              max={2024}
              labelHandles
              labelTicks
              maxLabel="2024"
              minLabel="2000"
              ticks={4}
              step={4}
              snap
            ></CalciteSlider>
            <CalciteBlock heading="How to read this map" collapsible open>
              <p>
                This map shows the results of each of the previous 5 U.S.
                presidential elections from 2000 to 2024. Each square represents
                the election winner for the given area in one year. The most
                recent election (2024) is represented as the right-most square.
                Each square's color represents the winner of the election; its
                size is proportional to the margin of victory for the winner.
                Smaller squares indicate a closer election. Larger squares
                indicate a larger margin of victory.
              </p>
              <img
                src="./trend-legend-horizontal.png"
                className="legend"
                alt="Legend"
              />
            </CalciteBlock>
            <Examples />
            <AllResults />
          </CalcitePanel>
        </CalciteShellPanel>
        <ArcgisMap
          id="map"
          class="map-only"
          itemId={webmapId}
          ref={mapRef}
          onArcgisViewReadyChange={initialize}
        >
          <ArcgisLegend position="bottom-right" />
        </ArcgisMap>
      </CalciteShell>
    </>
  );
}

export default App;
