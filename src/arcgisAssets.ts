import { setAssetPath as setMapAssetPath } from "@arcgis/map-components";
import { setAssetPath as setCommonAssetPath } from "@arcgis/common-components";
import { setAssetPath as setCalciteAssetPath } from "@esri/calcite-components";

const assets = `${import.meta.env.BASE_URL}arcgis-assets`;

setMapAssetPath(`${assets}/map-components/`);
setCommonAssetPath(`${assets}/common-components/`);
setCalciteAssetPath(`${assets}/calcite-components/`);
