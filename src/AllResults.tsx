import "./App.css";

import "@esri/calcite-components/dist/components/calcite-block";
import "@esri/calcite-components/dist/components/calcite-tab";
import "@esri/calcite-components/dist/components/calcite-tab-nav";
import "@esri/calcite-components/dist/components/calcite-tabs";
import "@esri/calcite-components/dist/components/calcite-tab-title";

import { CalciteBlock } from "@esri/calcite-components-react";

import "@arcgis/map-components/dist/components/arcgis-features";
import { ArcgisFeatures } from "@arcgis/map-components-react";
import { createPopupTemplate } from "./trendUtils/popupUtils";
import { usaGraphic } from "./config";

function AllResults() {
  const graphic = usaGraphic;
  graphic.popupTemplate = createPopupTemplate({
    level: "country",
  });
  return (
    <>
      <CalciteBlock heading="Historical results" open collapsible>
        <ArcgisFeatures
          features={[graphic]}
          hideActionBar
          hideCloseButton
          hideFeatureMenuHeading
          hideFeatureNavigation
          hideHeading
        ></ArcgisFeatures>
      </CalciteBlock>
    </>
  );
}

export default AllResults;
