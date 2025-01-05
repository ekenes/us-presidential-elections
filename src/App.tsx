import "./App.css";

import { setAssetPath } from "@esri/calcite-components/dist/components";
// CDN hosted assets
setAssetPath("https://js.arcgis.com/calcite-components/2.13.2/assets");

import "@arcgis/map-components/dist/components/arcgis-map";
import { ArcgisMap } from "@arcgis/map-components-react";

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
  CalciteLabel,
  CalcitePanel,
  CalciteShell,
  CalciteShellPanel,
  CalciteSlider,
} from "@esri/calcite-components-react";

import esriConfig from "@arcgis/core/config";
import Popup from "@arcgis/core/widgets/Popup";
import { SimpleRenderer } from "@arcgis/core/renderers";
import { SimpleFillSymbol, SimpleLineSymbol } from "@arcgis/core/symbols";

import { useEffect, useRef, useState } from "react";
import Examples from "./Examples";
import AllResults from "./AllResults";
import Legends from "./Legends";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { countiesLayerPortalItem, scaleThreshold, statesLayerPortalItem } from "./config";
import { createRenderer as createTrendRenderer } from "./trendUtils/trendRenderer";
import { countyChangeRenderer, stateChangeRenderer } from "./changeUtils/changeRenderer";
import { createPopupTemplate } from "./trendUtils/popupUtils";
import { countyChangeLabelingInfo, stateChangeLabelingInfo } from "./changeUtils/labelingUtils";
import { countyPopupTemplate, statePopupTemplate } from "./changeUtils/popupUtils";

esriConfig.applicationName = "U.S. Presidential Election Results (2000-2024)";

function App() {
  const mapRef = useRef<HTMLArcgisMapElement | null>(null);

  const webmapId = "1c2dfdb8c339473ab7b0ab11cb561e47";
  const [year, setYear] = useState(2024);
  const [stateLayer, setStateLayer] = useState<FeatureLayer | null>(new FeatureLayer({
    title: "state-layer",
    portalItem: {
      id: statesLayerPortalItem,
    },
    renderer: stateChangeRenderer(year),
    popupTemplate: createPopupTemplate({
      level: "state",
    }),
    labelingInfo: stateChangeLabelingInfo(year),
    maxScale: scaleThreshold,
    opacity: 1,
    effect: "drop-shadow(2px, 2px, 2px, lightgray)",
  }));

  const [countyLayer, setCountyLayer] = useState<FeatureLayer | null>(new FeatureLayer({
    portalItem: {
      id: countiesLayerPortalItem,
    },
    renderer: createTrendRenderer({
      level: "county",
    }),
    popupTemplate: createPopupTemplate({
      level: "county",
    }),
    minScale: scaleThreshold,
    opacity: 1,
    effect: "drop-shadow(2px, 2px, 2px, lightgray)",
  }));

  const countyBoundaryLayer = new FeatureLayer({
    portalItem: {
      id: "14c5450526a8430298b2fa74da12c2f4",
    },
    minScale: scaleThreshold,
    popupEnabled: false,
    renderer: new SimpleRenderer({
      symbol: new SimpleFillSymbol({
        style: "none",
        outline: new SimpleLineSymbol({
          color: [175, 175, 175, 0.35],
          width: 0.5,
        }),
      }),
    }),
  });

  const initialize = async () => {
    const mapElement = mapRef.current;

    if (!mapElement) return;

    mapElement.map?.addMany([stateLayer, countyLayer, countyBoundaryLayer]);

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

  useEffect(() => {
    console.log("year changed", year);
    stateLayer!.renderer = stateChangeRenderer(year);
    stateLayer!.labelingInfo = stateChangeLabelingInfo(year);
    countyLayer!.renderer = countyChangeRenderer(year);
    countyLayer!.labelingInfo = countyChangeLabelingInfo(year);
    stateLayer!.popupTemplate = statePopupTemplate(year);
    countyLayer!.popupTemplate = countyPopupTemplate(year);
  }, [countyLayer, stateLayer, year]);

  return (
    <>
      <CalciteShell contentBehind={true}>
        <h2 id="header-title" slot="header"></h2>
        <CalciteShellPanel
          slot="panel-start"
          displayMode="dock"
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
                  setYear(event.target.value as number);
                }}
                snap
              ></CalciteSlider>
            </div>
            <Legends />
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
        ></ArcgisMap>
      </CalciteShell>
    </>
  );
}

export default App;
