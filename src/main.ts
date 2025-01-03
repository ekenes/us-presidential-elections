import WebMap from "@arcgis/core/WebMap";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Features from "@arcgis/core/widgets/Features";
import Collection from "@arcgis/core/core/Collection";

import { createRenderer } from "./rendererUtils";
import { createPopupTemplate } from "./popupUtils";
import {
  lower48BasePortalItem,
  countiesLayerPortalItem,
  scaleThreshold,
  statesLayerPortalItem,
  usaGraphic,
} from "./config";
import { SimpleRenderer } from "@arcgis/core/renderers";
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";
import Extent from "@arcgis/core/geometry/Extent";
import Popup from "@arcgis/core/widgets/Popup";

const lower48MapElement = document.getElementById(
  "lower48map"
) as HTMLArcgisMapElement;

const loadMap = async () => {
  lower48MapElement.itemId = lower48BasePortalItem;

  const lower48Map = lower48MapElement.map as WebMap;

  const stateLayer = new FeatureLayer({
    portalItem: {
      id: statesLayerPortalItem,
    },
    renderer: createRenderer({
      level: "state",
    }),
    popupTemplate: createPopupTemplate({
      level: "state",
    }),
    maxScale: scaleThreshold,
    opacity: 1,
    effect: "drop-shadow(2px, 2px, 2px, lightgray)",
  });

  const countyLayer = new FeatureLayer({
    portalItem: {
      id: countiesLayerPortalItem,
    },
    renderer: createRenderer({
      level: "county",
    }),
    popupTemplate: createPopupTemplate({
      level: "county",
    }),
    minScale: scaleThreshold,
    opacity: 1,
    effect: "drop-shadow(2px, 2px, 2px, lightgray)",
  });

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

  usaGraphic.popupTemplate = createPopupTemplate({
    level: "country",
  });

  lower48Map.layers = new Collection([stateLayer, countyLayer, countyBoundaryLayer]);
  lower48MapElement.popup = new Popup({
    dockEnabled: true,
    dockOptions: {
      breakpoint: false,
      position: "top-right",
    },
  });
  lower48MapElement.constraints = {
    snapToZoom: false,
    minScale: 15595144 * 2,
    geometry: new Extent({
      spatialReference: { wkid: 5070 },
      xmin: -3035186.0631622137,
      ymin: -732037.6766778326,
      xmax: 2225748.801600614,
      ymax: 4149284.633137403,
    }),
  };

  new Features({
    features: [usaGraphic],
    visible: true,
    container: document.getElementById("legendDiv")!,
    visibleElements: {
      closeButton: false,
      actionBar: false,
    },
  });
};

if (lower48MapElement!.ready) {
  loadMap();
  console.log("ready");
} else {
  console.log("not ready");
  lower48MapElement!.addEventListener("arcgisViewReadyChange", loadMap);
}
