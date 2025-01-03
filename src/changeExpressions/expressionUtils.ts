import { countySizeStops, fieldInfos, referenceScale, stateChangeSizeStops, stateReferenceScale, stateResultsSizeStops } from "../config";

export const votesStateNextBase = (year: number) => {
  return `
    var dem = $feature.${fieldInfos.democrat.state.next.name};
    var rep = $feature.${fieldInfos.republican.state.next.name};
    var oth = $feature.${fieldInfos.other.state.next.name};
    var all = [dem, rep, oth];
  `
};

export const votesCountyNextBase = (year: number) => {
  return `
    var dem = $feature.${fieldInfos.democrat.county.next.name};
    var rep = $feature.${fieldInfos.republican.county.next.name};
    var oth = $feature.${fieldInfos.other.county.next.name};
    var all = [dem, rep, oth];
  `
};

export const allCountyNextBase = (year: number) => {
  return `
    var demNext = $feature.${fieldInfos.democrat.county.next.name};
    var repNext = $feature.${fieldInfos.republican.county.next.name};
    var othNext = $feature.${fieldInfos.other.county.next.name};
    var allNext = Sum([demNext, repNext, othNext]);
  `
}

export const allCountyPreviousBase = (year: number) => {
  return `
    var demPrevious = $feature.${fieldInfos.democrat.county.previous.name};
    var repPrevious = $feature.${fieldInfos.republican.county.previous.name};
    var othPrevious = $feature.${fieldInfos.other.county.previous.name};
    var allPrevious = Sum([demPrevious, repPrevious, othPrevious]);
  `
}

export const shiftCounties = (year: number) => {
  return `
    var demNext = $feature.${fieldInfos.democrat.county.next.name};
    var repNext = $feature.${fieldInfos.republican.county.next.name};
    var othNext = $feature.${fieldInfos.other.county.next.name};
    var allNext = Sum([demNext, repNext, othNext]);

    var demPrevious = $feature.${fieldInfos.democrat.county.previous.name};
    var repPrevious = $feature.${fieldInfos.republican.county.previous.name};
    var othPrevious = $feature.${fieldInfos.other.county.previous.name};
    var allPrevious = Sum([demPrevious, repPrevious, othPrevious]);


    var percentNext = (votesNext / allNext) * 100;
    var percentPrevious = (votesPrevious / allPrevious) * 100;
    var shift = percentNext - percentPrevious;
  `;
}

export const shiftCountyTextBase = () => {
  return `
    ${shiftCounties()}

    var shiftText = IIF(shift > 0, Text(shift, '+#,###.0'), Text(shift, '#,###.0'));
    return shiftText + "%";
  `;
}


export const allStateNextBase = () => {
  return `
    var demNext = $feature.${fieldInfos.democrat.state.next.name};
    var repNext = $feature.${fieldInfos.republican.state.next.name};
    var othNext = $feature.${fieldInfos.other.state.next.name};
    var allNext = Sum([demNext, repNext, othNext]);
  `
}

export const allStatePreviousBase = () => {
  return `
    var demPrevious = $feature.${fieldInfos.democrat.state.previous.name};
    var repPrevious = $feature.${fieldInfos.republican.state.previous.name};
    var othPrevious = $feature.${fieldInfos.other.state.previous.name};
    var allPrevious = Sum([demPrevious, repPrevious, othPrevious]);
  `
}

export const shiftStates = () => {
  return `
    var demNext = $feature.${fieldInfos.democrat.state.next.name};
    var repNext = $feature.${fieldInfos.republican.state.next.name};
    var othNext = $feature.${fieldInfos.other.state.next.name};
    var allNext = Sum([demNext, repNext, othNext]);

    var demPrevious = $feature.${fieldInfos.democrat.state.previous.name};
    var repPrevious = $feature.${fieldInfos.republican.state.previous.name};
    var othPrevious = $feature.${fieldInfos.other.state.previous.name};
    var allPrevious = Sum([demPrevious, repPrevious, othPrevious]);


    var percentNext = (votesNext / allNext) * 100;
    var percentPrevious = (votesPrevious / allPrevious) * 100;
    var shift = percentNext - percentPrevious;
  `;
}

export const shiftStatesTextBase = () => {
  return `
    ${shiftStates()}

    var shiftText = IIF(shift > 0, Text(shift, '+#,###.0'), Text(shift, '#,###.0'));
    return shiftText + "%";
  `;
}

export const shareTextBase = `
  var share = (votes / allNext);
  return Text(share, '##.0%');
`;

export const diffTextBase = `
  var diff = votesNext - votesPrevious;
  var change = ( (votesNext - votesPrevious) / votesPrevious );
  var diffText = IIF(diff > 0, Text(diff, '+#,###'), Text(diff, '#,###'));
  var changeText = IIF(change > 0, Text(change, '↑#,###.#%'), Text(abs(change), '↓#,###.#%'));
`;

export const colorDiffPopupBase = `
  var diff = votesNext - votesPrevious;
  var change = ( (votesNext - votesPrevious) / votesPrevious );
  return IIF(diff > 0, "green", "red");
`;

export const colorShiftPopupBase = `
  return IIF(shift > 0, "green", "red");
`;

export const diffLabelText = `
  var change = valueNext - valuePrevious;
  IIF(change > 0, Text(change, '+#,###'), Text(change, '#,###'));
`;

// states change layer renderer expressions

const scaleFactorTotal = `
  var scaleFactorBase = ( ${stateReferenceScale} / $view.scale );
  var scaleFactor = When(
    scaleFactorBase >= 1, 1,  // 1
    scaleFactorBase >= 0.5, scaleFactorBase * 1,  // 0.6
    scaleFactorBase >= 0.25, scaleFactorBase * 1,  // 0.45
    scaleFactorBase >= 0.125, scaleFactorBase * 1,  // 0.3125
    scaleFactorBase * 1  // 0.1875
  );
`;

const sizeFactorChangeTotal = `
  var sizeFactor = When(
    value >= ${stateChangeSizeStops[4].value}, ${stateChangeSizeStops[4].size},
    value >= ${stateChangeSizeStops[3].value}, ${stateChangeSizeStops[3].size} + (${interpolateBetweenStops(stateChangeSizeStops[3], stateChangeSizeStops[4])} * (value - ${stateChangeSizeStops[3].value})),
    value >= ${stateChangeSizeStops[2].value}, ${stateChangeSizeStops[2].size} + (${interpolateBetweenStops(stateChangeSizeStops[2], stateChangeSizeStops[3])} * (value - ${stateChangeSizeStops[2].value})),
    value >= ${stateChangeSizeStops[1].value}, ${stateChangeSizeStops[1].size} + (${interpolateBetweenStops(stateChangeSizeStops[1], stateChangeSizeStops[2])} * (value - ${stateChangeSizeStops[1].value})),
    value > ${stateChangeSizeStops[0].value}, ${stateChangeSizeStops[0].size} + (${interpolateBetweenStops(stateChangeSizeStops[0], stateChangeSizeStops[1])} * value),
    0
  );
`;

export const sizeTotalChangeExpressionBase = `
  ${sizeFactorChangeTotal}

  ${scaleFactorTotal}
  return sizeFactor * scaleFactor;
`;

// State results layer renderer expressions

const sizeFactorTotalResults = `
  var sizeFactor = When(
    value >= ${stateResultsSizeStops[4].value}, ${stateResultsSizeStops[4].size},
    value >= ${stateResultsSizeStops[3].value}, ${stateResultsSizeStops[3].size} + (${interpolateBetweenStops(stateResultsSizeStops[3], stateResultsSizeStops[4])} * (value - ${stateResultsSizeStops[3].value})),
    value >= ${stateResultsSizeStops[2].value}, ${stateResultsSizeStops[2].size} + (${interpolateBetweenStops(stateResultsSizeStops[2], stateResultsSizeStops[3])} * (value - ${stateResultsSizeStops[2].value})),
    value >= ${stateResultsSizeStops[1].value}, ${stateResultsSizeStops[1].size} + (${interpolateBetweenStops(stateResultsSizeStops[1], stateResultsSizeStops[2])} * (value - ${stateResultsSizeStops[1].value})),
    value > ${stateResultsSizeStops[0].value}, ${stateResultsSizeStops[0].size} + (${interpolateBetweenStops(stateResultsSizeStops[0], stateResultsSizeStops[1])} * value),
    0
  );
`;

export const sizeTotalExpressionBase = `
  ${sizeFactorTotalResults}

  ${scaleFactorTotal}
  return sizeFactor * scaleFactor;
`;

// counties layer expressions

const sizeFactorCounties = `
  var sizeFactor = When(
    percentStateVotes >= ${countySizeStops[4].value}, ${countySizeStops[4].size},
    percentStateVotes >= ${countySizeStops[3].value}, ${countySizeStops[3].size} + (${interpolateBetweenStops(countySizeStops[3], countySizeStops[4])} * (percentStateVotes - ${countySizeStops[3].value})),
    percentStateVotes >= ${countySizeStops[2].value}, ${countySizeStops[2].size} + (${interpolateBetweenStops(countySizeStops[2], countySizeStops[3])} * (percentStateVotes - ${countySizeStops[2].value})),
    percentStateVotes >= ${countySizeStops[1].value}, ${countySizeStops[1].size} + (${interpolateBetweenStops(countySizeStops[1], countySizeStops[2])} * (percentStateVotes - ${countySizeStops[1].value})),
    percentStateVotes > ${countySizeStops[0].value}, ${countySizeStops[0].size} + (${interpolateBetweenStops(countySizeStops[0], countySizeStops[1])} * percentStateVotes),
    0
  );
`;

const scaleFactorCounties = `
  var scaleFactorBase = Round( ${referenceScale} / $view.scale, 1 );
  var scaleFactor = When(
    scaleFactorBase >= 8, scaleFactorBase / 6,
    scaleFactorBase >= 4, scaleFactorBase / 3,  // 1
    scaleFactorBase >= 2, scaleFactorBase / 1.7,
    scaleFactorBase >= 1, scaleFactorBase,  // 1
    scaleFactorBase >= 0.5, scaleFactorBase * 1.2,  // 0.6
    scaleFactorBase >= 0.25, scaleFactorBase * 1.2,  // 0.45
    scaleFactorBase >= 0.125, scaleFactorBase * 2.5,  // 0.3125
    scaleFactorBase * 3  // 0.1875
  );
`;

export const sizeExpressionBase = `
  ${sizeFactorCounties}

  ${scaleFactorCounties}
  return sizeFactor * scaleFactor;
`;

interface SizeStop {
  value: number,
  size: number
}

function interpolateBetweenStops(
  firstStop: SizeStop,
  nextStop: SizeStop
) {
  const sizeRange = nextStop.size - firstStop.size;
  const dataRange = nextStop.value - firstStop.value;

  return sizeRange / dataRange;
}