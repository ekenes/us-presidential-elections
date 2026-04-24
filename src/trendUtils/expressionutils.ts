import {
  countyTrendSizeStops,
  dColorCIM,
  oColorCIM,
  rColorCIM,
  trendReferenceScale,
  stateTrendSizeStops,
  stateFieldPrefix,
  stateReferenceScale,
  validYears,
  years,
} from "../config";

interface ColorPrimitiveOverrideParams {
  primitiveName: __esri.PrimitiveOverride["primitiveName"];
  year: validYears;
  fieldPrefix: string;
  level?: "state" | "county" | "country";
}

export function createColorPrimitiveOverride(
  params: ColorPrimitiveOverrideParams
): __esri.PrimitiveOverride {
  const { year, primitiveName, fieldPrefix } = params;

  return {
    type: `CIMPrimitiveOverride`,
    primitiveName,
    propertyName: `Color`,
    valueExpressionInfo: {
      type: `CIMExpressionInfo`,
      title: `Winner`,
      expression: `
        var rColor = ${JSON.stringify(rColorCIM)};
        var dColor = ${JSON.stringify(dColorCIM)};
        var oColor = ${JSON.stringify(oColorCIM)};

        var demVotes = $feature.${fieldPrefix}dem_${year};
        var repVotes = $feature.${fieldPrefix}rep_${year};
        var othVotes = $feature.${fieldPrefix}oth_${year};

        var allVotes = [demVotes, repVotes, othVotes];

        Decode(Max(allVotes),
          demVotes, dColor,
          repVotes, rColor,
          oColor
        );
      `,
      returnType: `Default`,
    },
  };
}

// states change layer renderer expressions

const scaleFactorStates = `
  var scaleFactorBase = ( ${stateReferenceScale} / $view.scale );
  var scaleFactor = When(
    scaleFactorBase >= 1, 1,
    scaleFactorBase >= 0.5, scaleFactorBase * 0.6,
    scaleFactorBase >= 0.25, scaleFactorBase * 0.45,
    scaleFactorBase >= 0.125, scaleFactorBase * 0.3125,
    scaleFactorBase * 0.1875
  );
`;

const sizeFactorStates = `
  var sizeFactor = When(
    value >= ${stateTrendSizeStops[4].value}, ${stateTrendSizeStops[4].size},
    value >= ${stateTrendSizeStops[3].value}, ${
  stateTrendSizeStops[3].size
} + (${interpolateBetweenStops(
  stateTrendSizeStops[3],
  stateTrendSizeStops[4]
)} * (value - ${stateTrendSizeStops[3].value})),
    value >= ${stateTrendSizeStops[2].value}, ${
  stateTrendSizeStops[2].size
} + (${interpolateBetweenStops(
  stateTrendSizeStops[2],
  stateTrendSizeStops[3]
)} * (value - ${stateTrendSizeStops[2].value})),
    value >= ${stateTrendSizeStops[1].value}, ${
  stateTrendSizeStops[1].size
} + (${interpolateBetweenStops(
  stateTrendSizeStops[1],
  stateTrendSizeStops[2]
)} * (value - ${stateTrendSizeStops[1].value})),
    value > ${stateTrendSizeStops[0].value}, ${
  stateTrendSizeStops[0].size
} + (${interpolateBetweenStops(
  stateTrendSizeStops[0],
  stateTrendSizeStops[1]
)} * value),
    0
  );
`;

export const sizeExpressionBaseStates = `
  ${sizeFactorStates}

  ${scaleFactorStates}
  var size = sizeFactor * scaleFactor;
`;

// counties layer expressions

const sizeFactorCounties = `
  var sizeFactor = When(
    value >= ${countyTrendSizeStops[4].value}, ${countyTrendSizeStops[4].size},
    value >= ${countyTrendSizeStops[3].value}, ${
  countyTrendSizeStops[3].size
} + (${interpolateBetweenStops(
  countyTrendSizeStops[3],
  countyTrendSizeStops[4]
)} * (value - ${countyTrendSizeStops[3].value})),
    value >= ${countyTrendSizeStops[2].value}, ${
  countyTrendSizeStops[2].size
} + (${interpolateBetweenStops(
  countyTrendSizeStops[2],
  countyTrendSizeStops[3]
)} * (value - ${countyTrendSizeStops[2].value})),
    value >= ${countyTrendSizeStops[1].value}, ${
  countyTrendSizeStops[1].size
} + (${interpolateBetweenStops(
  countyTrendSizeStops[1],
  countyTrendSizeStops[2]
)} * (value - ${countyTrendSizeStops[1].value})),
    value > ${countyTrendSizeStops[0].value}, ${
  countyTrendSizeStops[0].size
} + (${interpolateBetweenStops(
  countyTrendSizeStops[0],
  countyTrendSizeStops[1]
)} * value),
    0
  );
`;

const scaleFactorCounties = `
  var scaleFactorBase = Round( ${trendReferenceScale} / $view.scale, 1 );
  var scaleFactor = When(
    scaleFactorBase >= 8, scaleFactorBase / 8,
    scaleFactorBase >= 4, scaleFactorBase / 6,
    scaleFactorBase >= 2, scaleFactorBase / 4,
    scaleFactorBase >= 1, scaleFactorBase * 0.6,
    scaleFactorBase >= 0.5, scaleFactorBase * 0.6,
    scaleFactorBase >= 0.25, scaleFactorBase * 0.45,
    scaleFactorBase >= 0.125, scaleFactorBase * 0.3125,
    scaleFactorBase
  );
`;

export const sizeExpressionBaseCounties = `
  ${sizeFactorCounties}

  ${scaleFactorCounties}
  var size = sizeFactor * scaleFactor;
`;

interface SizeStop {
  value: number;
  size: number;
}

function interpolateBetweenStops(firstStop: SizeStop, nextStop: SizeStop) {
  const sizeRange = nextStop.size - firstStop.size;
  const dataRange = nextStop.value - firstStop.value;

  return sizeRange / dataRange;
}

export function createSizePrimitiveOverride(
  params: ColorPrimitiveOverrideParams
): __esri.PrimitiveOverride {
  const { year, primitiveName, fieldPrefix } = params;

  return {
    type: `CIMPrimitiveOverride`,
    primitiveName,
    propertyName: `Size`,
    valueExpressionInfo: {
      type: `CIMExpressionInfo`,
      title: `Margin of Victory`,
      expression: `
        var demVotes = $feature.${fieldPrefix}dem_${year};
        var repVotes = $feature.${fieldPrefix}rep_${year};
        var othVotes = $feature.${fieldPrefix}oth_${year};

        var allVotes = Reverse(Sort([demVotes, repVotes, othVotes]));

        var value = allVotes[0] - allVotes[1];

        ${
          fieldPrefix === stateFieldPrefix
            ? sizeExpressionBaseStates
            : sizeExpressionBaseCounties
        }

        return size;
      `,
      returnType: `Default`,
    },
  };
}

export function createOffsetXPrimitiveOverride(
  params: ColorPrimitiveOverrideParams
): __esri.PrimitiveOverride {
  const { year, primitiveName, fieldPrefix } = params;

  return {
    type: `CIMPrimitiveOverride`,
    primitiveName,
    propertyName: `OffsetX`,
    valueExpressionInfo: {
      type: `CIMExpressionInfo`,
      title: `Margin of Victory`,
      expression: `

        function isEven(v){
          return v % 2 == 0;
        }
        var interval = 4;
        var years = [${years}];
        var selectedYear = ${year};

        var numItems = Count(years);
        var isEvenItems = isEven(numItems);
        var middleIndex = Floor(numItems / 2);

        if(isEvenItems){
          middleIndex -= 0.5;
        }

        var index = IndexOf(years, selectedYear);

        if(!isEvenItems && index == middleIndex){
          return 0;
        }

        var direction = iif(index < middleIndex, -1, 1);

        var yearStart = iif(direction < 0, selectedYear, years[middleIndex]);
        var yearEnd = iif(direction < 0, years[middleIndex], selectedYear);

        var sizes = [];

        var offsetX = 0;

        for (var year = yearStart; year <= yearEnd; year+=interval){
          var demVotes = $feature[\`${fieldPrefix}dem_\${year}\`];
          var repVotes = $feature[\`${fieldPrefix}rep_\${year}\`];
          var othVotes = $feature[\`${fieldPrefix}oth_\${year}\`];

          var allVotes = Reverse(Sort([demVotes, repVotes, othVotes]));

          var value = allVotes[0] - allVotes[1];

          ${
            fieldPrefix === stateFieldPrefix
              ? sizeExpressionBaseStates
              : sizeExpressionBaseCounties
          }

          var factor = iif(
            (year == yearStart) || (year == yearEnd)
          , 0.5, 1);

          offsetX += (size * factor);
        }

        return offsetX * direction;

      `,
      returnType: `Default`,
    },
  };
}
