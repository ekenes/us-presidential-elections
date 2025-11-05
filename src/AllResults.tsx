import "./App.css";

import "@esri/calcite-components/dist/components/calcite-block";
import "@esri/calcite-components/dist/components/calcite-tab";
import "@esri/calcite-components/dist/components/calcite-tab-nav";
import "@esri/calcite-components/dist/components/calcite-tabs";
import "@esri/calcite-components/dist/components/calcite-tab-title";

import "@arcgis/map-components/dist/components/arcgis-features";
import { createPopupTemplate } from "./trendUtils/popupUtils";
import { usaGraphic } from "./config";

function AllResults() {
  const graphic = usaGraphic;
  graphic.popupTemplate = createPopupTemplate({
    level: "country",
    year: 2024,
  });
  return (
    <>
      <calcite-block heading="Election results" collapsible>
        <arcgis-features
          features={[graphic]}
          hideActionBar
          hideCloseButton
          hideFeatureMenuHeading
          hideFeatureNavigation
          hideHeading
        ></arcgis-features>
      </calcite-block>
    </>
  );
}

export default AllResults;
