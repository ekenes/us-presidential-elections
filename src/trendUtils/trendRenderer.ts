import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
import CIMSymbol from "@arcgis/core/symbols/CIMSymbol";
import { createSquareSymbolLayer } from "./symbolUtils";
import {
  createColorPrimitiveOverride,
  createOffsetXPrimitiveOverride,
  createSizePrimitiveOverride,
} from "../trendUtils/expressionutils";
import { stateFieldPrefix, validYears } from "../config";
import { PopupTemplateParams } from "./popupUtils";

export function createRenderer(params: PopupTemplateParams): SimpleRenderer {
  const { level, year } = params;
  return new SimpleRenderer({
    symbol: createSymbol({ level, year }),
  });
}

function createSymbol(params: PopupTemplateParams) {
  const { level, year } = params;
  const fieldPrefix = level === "state" ? stateFieldPrefix : "";
  const years: validYears[] = [
    (year - 16) as validYears,
    (year - 12) as validYears,
    (year - 8) as validYears,
    (year - 4) as validYears,
    year as validYears,
  ];

  return new CIMSymbol({
    data: {
      type: `CIMSymbolReference`,
      symbol: {
        type: `CIMPointSymbol`,
        symbolLayers: [
          ...years.map((y) => {
            return createSquareSymbolLayer({
              primitiveName: `election-${y}`,
              offsetX: years.indexOf(y) - 2,
              color: [0, 0, 0, 255],
              donutEnabled: false,
              outline: {
                color: [255, 255, 255, 100],
              },
            });
          }),
        ],
      },
      primitiveOverrides: [
        ...years.map((y) => {
          return createColorPrimitiveOverride({
            primitiveName: `election-${y}`,
            year: y,
            fieldPrefix,
          });
        }),
        ...years.map((y) => {
          return createSizePrimitiveOverride({
            primitiveName: `election-${y}`,
            year: y,
            fieldPrefix,
            level,
          });
        }),
        ...years.map((y) => {
          return createOffsetXPrimitiveOverride({
            primitiveName: `election-${y}`,
            year: y,
            fieldPrefix,
            level,
          });
        }),
      ],
    },
  });
}
