import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
import UniqueValueRenderer from "@arcgis/core/renderers/UniqueValueRenderer";
import CIMSymbol from "@arcgis/core/symbols/CIMSymbol";
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import { dColor, rColor, dColorCIM, oColorCIM, rColorCIM } from "../config";

import { createCircleSymbolLayer } from "./symbolUtils";
import {
  sizeExpressionBase,
  sizeTotalChangeExpressionBase,
} from "./expressionUtils";

////////////////////////////////////////////////////
//
// SWING STATES
//
///////////////////////////////////////////////////

export function swingStateRenderer(year: number) {
  const currentYear = year;
  const previousYear = year - 4;

  return new UniqueValueRenderer({
    valueExpression: `
      var demPrevious = $feature.SUM_dem_${previousYear};
      var repPrevious = $feature.SUM_rep_${previousYear};
      var othPrevious = $feature.SUM_oth_${previousYear};

      var winnerPrevious = Decode( Max([demPrevious, repPrevious, othPrevious]),
        demPrevious, 'Democrat ${previousYear}',
        repPrevious, 'Republican ${previousYear}',
        othPrevious, 'Other ${previousYear}',
      'n/a' );

      var demNext = $feature.SUM_dem_${currentYear};
      var repNext = $feature.SUM_rep_${currentYear};
      var othNext = $feature.SUM_oth_${currentYear};

      var winnerNext = Decode( Max([demNext, repNext, othNext]),
      demNext, 'Democrat ${currentYear}',
      repNext, 'Republican ${currentYear}',
      othNext, 'Other ${currentYear}',
      'n/a' );

      return Concatenate([winnerPrevious, winnerNext], ", ");
    `,
    defaultSymbol: undefined,
    uniqueValueInfos: [
      {
        value: `Democrat ${previousYear}, Republican ${currentYear}`,
        label: `Flipped Republican in ${currentYear}`,
        symbol: new SimpleFillSymbol({
          color: rColor,
          outline: undefined,
        }),
      },
      {
        value: `Republican ${previousYear}, Democrat ${currentYear}`,
        label: `Flipped Democrat in ${currentYear}`,
        symbol: new SimpleFillSymbol({
          color: dColor,
          outline: undefined,
        }),
      },
    ],
  });
}

////////////////////////////////////////////////////
//
// STATE CHANGE
//
///////////////////////////////////////////////////

export function stateChangeRenderer(year: number) {
  const currentYear = year;
  const previousYear = year - 4;

  return new SimpleRenderer({
    symbol: new CIMSymbol({
      data: {
        type: `CIMSymbolReference`,
        symbol: {
          type: `CIMPointSymbol`,
          symbolLayers: [
            createCircleSymbolLayer({
              primitiveName: `democrat-positive-votes`,
              anchorPoint: { x: 0.5, y: 0 },
              color: dColorCIM,
              donutEnabled: false,
            }),
            createCircleSymbolLayer({
              primitiveName: `democrat-negative-votes`,
              anchorPoint: { x: 0.5, y: 0 },
              color: dColorCIM,
              donutEnabled: true,
            }),
            createCircleSymbolLayer({
              primitiveName: `republican-positive-votes`,
              anchorPoint: { x: -0.5, y: 0 },
              color: rColorCIM,
              donutEnabled: false,
            }),
            createCircleSymbolLayer({
              primitiveName: `republican-negative-votes`,
              anchorPoint: { x: -0.5, y: 0 },
              color: rColorCIM,
              donutEnabled: true,
            }),
            createCircleSymbolLayer({
              primitiveName: `other-positive-votes`,
              anchorPoint: { x: 0, y: -0.75 },
              color: oColorCIM,
              donutEnabled: false,
            }),
            createCircleSymbolLayer({
              primitiveName: `other-negative-votes`,
              anchorPoint: { x: 0, y: -0.75 },
              color: oColorCIM,
              donutEnabled: true,
            }),
          ],
        },
        primitiveOverrides: [
          {
            type: `CIMPrimitiveOverride`,
            primitiveName: `democrat-positive-votes`,
            propertyName: `Size`,
            valueExpressionInfo: {
              type: `CIMExpressionInfo`,
              title: `Increase in Democrat votes`,
              expression: `
                var votesNext = $feature.SUM_dem_${currentYear};
                var votesPrevious = $feature.SUM_dem_${previousYear};
                var change = votesNext - votesPrevious;
                var value = IIF( change > 0, change, 0);
                ${sizeTotalChangeExpressionBase}
              `,
              returnType: `Default`,
            },
          },
          {
            type: `CIMPrimitiveOverride`,
            primitiveName: `democrat-negative-votes`,
            propertyName: `Size`,
            valueExpressionInfo: {
              type: `CIMExpressionInfo`,
              title: `Decrease in Democrat votes`,
              expression: `
                var votesNext = $feature.SUM_dem_${currentYear};
                var votesPrevious = $feature.SUM_dem_${previousYear};
                var change = votesNext - votesPrevious;
                var value = IIF( change < 0, Abs(change), 0);
                ${sizeTotalChangeExpressionBase}
              `,
              returnType: `Default`,
            },
          },
          {
            type: `CIMPrimitiveOverride`,
            primitiveName: `republican-positive-votes`,
            propertyName: `Size`,
            valueExpressionInfo: {
              type: `CIMExpressionInfo`,
              title: `Increase in Republican votes`,
              expression: `
                var valueNext = $feature.SUM_rep_${currentYear};
                var valuePrevious = $feature.SUM_rep_${previousYear};
                var change = valueNext - valuePrevious;
                var value = IIF( change > 0, change, 0);
                ${sizeTotalChangeExpressionBase}
              `,
              returnType: `Default`,
            },
          },
          {
            type: `CIMPrimitiveOverride`,
            primitiveName: `republican-negative-votes`,
            propertyName: `Size`,
            valueExpressionInfo: {
              type: `CIMExpressionInfo`,
              title: `Decrease in Republican votes`,
              expression: `
                var valueNext = $feature.SUM_rep_${currentYear};
                var valuePrevious = $feature.SUM_rep_${previousYear};
                var change = valueNext - valuePrevious;
                var value = IIF( change < 0, Abs(change), 0);
                ${sizeTotalChangeExpressionBase}
              `,
              returnType: `Default`,
            },
          },
          {
            type: `CIMPrimitiveOverride`,
            primitiveName: `other-positive-votes`,
            propertyName: `Size`,
            valueExpressionInfo: {
              type: `CIMExpressionInfo`,
              title: `Increase in Other votes`,
              expression: `
                var valueNext = $feature.SUM_oth_${currentYear};
                var valuePrevious = $feature.SUM_oth_${previousYear};
                var change = valueNext - valuePrevious;
                var value = IIF( change > 0, change, 0);
                ${sizeTotalChangeExpressionBase}
              `,
              returnType: `Default`,
            },
          },
          {
            type: `CIMPrimitiveOverride`,
            primitiveName: `other-negative-votes`,
            propertyName: `Size`,
            valueExpressionInfo: {
              type: `CIMExpressionInfo`,
              title: `Decrease in Other votes`,
              expression: `
                var valueNext = $feature.SUM_oth_${currentYear};
                var valuePrevious = $feature.SUM_oth_${previousYear};
                var change = valueNext - valuePrevious;
                var value = IIF( change < 0, Abs(change), 0);
                ${sizeTotalChangeExpressionBase}
              `,
              returnType: `Default`,
            },
          },
        ],
      },
    }),
  });
}

////////////////////////////////////////////////////
//
// COUNTY CHANGE
//
///////////////////////////////////////////////////

export function countyChangeRenderer(year: number) {
  const currentYear = year;
  const previousYear = year - 4;

  return new SimpleRenderer({
    symbol: new CIMSymbol({
      data: {
        type: `CIMSymbolReference`,
        symbol: {
          type: `CIMPointSymbol`,
          symbolLayers: [
            createCircleSymbolLayer({
              primitiveName: `democrat-positive-votes`,
              anchorPoint: { x: 0.5, y: 0 },
              color: dColorCIM,
              donutEnabled: false,
            }),
            createCircleSymbolLayer({
              primitiveName: `democrat-negative-votes`,
              anchorPoint: { x: 0.5, y: 0 },
              color: dColorCIM,
              donutEnabled: true,
            }),
            createCircleSymbolLayer({
              primitiveName: `republican-positive-votes`,
              anchorPoint: { x: -0.5, y: 0 },
              color: rColorCIM,
              donutEnabled: false,
            }),
            createCircleSymbolLayer({
              primitiveName: `republican-negative-votes`,
              anchorPoint: { x: -0.5, y: 0 },
              color: rColorCIM,
              donutEnabled: true,
            }),
            createCircleSymbolLayer({
              primitiveName: `other-positive-votes`,
              anchorPoint: { x: 0, y: -0.75 },
              color: oColorCIM,
              donutEnabled: false,
            }),
            createCircleSymbolLayer({
              primitiveName: `other-negative-votes`,
              anchorPoint: { x: 0, y: -0.75 },
              color: oColorCIM,
              donutEnabled: true,
            }),
          ],
        },
        primitiveOverrides: [
          {
            type: `CIMPrimitiveOverride`,
            primitiveName: `democrat-positive-votes`,
            propertyName: `Size`,
            valueExpressionInfo: {
              type: `CIMExpressionInfo`,
              title: `Increase in Democrat votes`,
              expression: `
                var votesNext = $feature.dem_${currentYear};
                var votesPrevious = $feature.dem_${previousYear};
                var change = votesNext - votesPrevious;
                var value = IIF( change > 0, change, 0);
                var percentStateVotes = ( value / $feature.TOTAL_STATE_VOTES_${currentYear} ) * $feature.ev_${currentYear};
                ${sizeExpressionBase}
              `,
              returnType: `Default`,
            },
          },
          {
            type: `CIMPrimitiveOverride`,
            primitiveName: `democrat-negative-votes`,
            propertyName: `Size`,
            valueExpressionInfo: {
              type: `CIMExpressionInfo`,
              title: `Decrease in Democrat votes`,
              expression: `
                var votesNext = $feature.dem_${currentYear};
                var votesPrevious = $feature.dem_${previousYear};
                var change = votesNext - votesPrevious;
                var value = IIF( change < 0, Abs(change), 0);
                var percentStateVotes = ( value / $feature.TOTAL_STATE_VOTES_${currentYear} ) * $feature.ev_${currentYear};
                ${sizeExpressionBase}
              `,
              returnType: `Default`,
            },
          },
          {
            type: `CIMPrimitiveOverride`,
            primitiveName: `republican-positive-votes`,
            propertyName: `Size`,
            valueExpressionInfo: {
              type: `CIMExpressionInfo`,
              title: `Increase in Republican votes`,
              expression: `
                var valueNext = $feature.rep_${currentYear};
                var valuePrevious = $feature.rep_${previousYear};
                var change = valueNext - valuePrevious;
                var value = IIF( change > 0, change, 0);
                var percentStateVotes = ( value / $feature.TOTAL_STATE_VOTES_${currentYear} ) * $feature.ev_${currentYear};
                ${sizeExpressionBase}
              `,
              returnType: `Default`,
            },
          },
          {
            type: `CIMPrimitiveOverride`,
            primitiveName: `republican-negative-votes`,
            propertyName: `Size`,
            valueExpressionInfo: {
              type: `CIMExpressionInfo`,
              title: `Decrease in Republican votes`,
              expression: `
                var valueNext = $feature.rep_${currentYear};
                var valuePrevious = $feature.rep_${previousYear};
                var change = valueNext - valuePrevious;
                var value = IIF( change < 0, Abs(change), 0);
                var percentStateVotes = ( value / $feature.TOTAL_STATE_VOTES_${currentYear} ) * $feature.ev_${currentYear};
                ${sizeExpressionBase}
              `,
              returnType: `Default`,
            },
          },
          {
            type: `CIMPrimitiveOverride`,
            primitiveName: `other-positive-votes`,
            propertyName: `Size`,
            valueExpressionInfo: {
              type: `CIMExpressionInfo`,
              title: `Increase in Other votes`,
              expression: `
                var valueNext = $feature.oth_${currentYear};
                var valuePrevious = $feature.oth_${previousYear};
                var change = valueNext - valuePrevious;
                var value = IIF( change > 0, change, 0);
                var percentStateVotes = ( value / $feature.TOTAL_STATE_VOTES_${currentYear} ) * $feature.ev_${currentYear};
                ${sizeExpressionBase}
              `,
              returnType: `Default`,
            },
          },
          {
            type: `CIMPrimitiveOverride`,
            primitiveName: `other-negative-votes`,
            propertyName: `Size`,
            valueExpressionInfo: {
              type: `CIMExpressionInfo`,
              title: `Decrease in Other votes`,
              expression: `
                var valueNext = $feature.oth_${currentYear};
                var valuePrevious = $feature.oth_${previousYear};
                var change = valueNext - valuePrevious;
                var value = IIF( change < 0, Abs(change), 0);
                var percentStateVotes = ( value / $feature.TOTAL_STATE_VOTES_${currentYear} ) * $feature.ev_${currentYear};
                ${sizeExpressionBase}
              `,
              returnType: `Default`,
            },
          },
        ],
      },
    }),
  });
}

export interface RendererParams {
  level: "county" | "state";
  year: number;
}

export const createRenderer = (params: RendererParams) => {
  const { level, year } = params;
  return level === "state"
    ? stateChangeRenderer(year)
    : countyChangeRenderer(year);
};
