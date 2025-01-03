import './App.css'

import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/dist/components/arcgis-legend";
import {
  ArcgisLegend,
  ArcgisMap,
} from "@arcgis/map-components-react";

import "@esri/calcite-components/dist/components/calcite-action";
import "@esri/calcite-components/dist/components/calcite-action-bar";
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-shell-panel";
import "@esri/calcite-components/dist/components/calcite-slider";

import {
  CalciteAction,
  CalciteActionBar,
  CalcitePanel,
  CalciteShell,
  CalciteShellPanel,
} from "@esri/calcite-components-react";

import esriConfig from "@arcgis/core/config";
import Popup from "@arcgis/core/widgets/Popup";

import { useRef } from 'react';

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

    const { title } = webmap.portalItem;

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
        <CalciteShellPanel slot="panel-start" displayMode="dock" widthScale='l'>
          <CalciteActionBar slot="action-bar">
            <CalciteAction
              data-action-id="layers"
              icon="layers"
              text="Layers"
            />
          </CalciteActionBar>
          <CalcitePanel
            heading="Layers"
            scale="l"
            data-panel-id="layers"
            hidden
          >
            <div>
              Can content go here?
              asdfasdf
              asdfasdfasdf

              asdfasdfasdf
              asdfasdf
            </div>
          </CalcitePanel>
        </CalciteShellPanel>
        <ArcgisMap
          id="map"
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