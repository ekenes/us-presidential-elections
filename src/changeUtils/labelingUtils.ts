import { dColor, rColor, oColor, haloColor, haloSize } from "../config";

import LabelClass from "@arcgis/core/layers/support/LabelClass";
import { TextSymbol, Font } from "@arcgis/core/symbols";
import Color from "@arcgis/core/Color";
import { diffLabelText } from "./expressionUtils";


////////////////////////////////////////////////////
//
// STATE CHANGE
//
///////////////////////////////////////////////////

export const stateChangeLabelingInfo = (year: number) => {
  const currentYear = year;
  const previousYear = year - 4;

  return [

    // DEMOCRAT label classes

    new LabelClass({
      minScale: 9244700,
      where: `ABS(SUM_dem_${currentYear} - SUM_dem_${previousYear}) >= 500000`,
      labelExpressionInfo: {
        expression: `
          var valueNext = $feature.SUM_dem_${currentYear};
          var valuePrevious = $feature.SUM_dem_${previousYear};
          ${diffLabelText}
        `
      },
      deconflictionStrategy: `none`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(dColor),
        xoffset: -50,
        yoffset: -25
      })
    }),
    new LabelClass({
      minScale: 9244700,
      where: `ABS(SUM_dem_${currentYear} - SUM_dem_${previousYear}) >= 100000 AND ABS(SUM_dem_${currentYear} - SUM_dem_${previousYear}) < 500000`,
      labelExpressionInfo: {
        expression: `
          var valueNext = $feature.SUM_dem_${currentYear};
          var valuePrevious = $feature.SUM_dem_${previousYear};
          ${diffLabelText}
        `
      },
      deconflictionStrategy: `none`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(dColor),
        xoffset: -40,
        yoffset: -20
      })
    }),
    new LabelClass({
      minScale: 9244700,
      where: `ABS(SUM_dem_${currentYear} - SUM_dem_${previousYear}) >= 50000 AND ABS(SUM_dem_${currentYear} - SUM_dem_${previousYear}) < 100000`,
      labelExpressionInfo: {
        expression: `
          var valueNext = $feature.SUM_dem_${currentYear};
          var valuePrevious = $feature.SUM_dem_${previousYear};
          ${diffLabelText}
        `
      },
      deconflictionStrategy: `none`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(dColor),
        xoffset: -40,
        yoffset: -10
      })
    }),
    new LabelClass({
      minScale: 9244700,
      where: `ABS(SUM_dem_${currentYear} - SUM_dem_${previousYear}) >= 10000 AND ABS(SUM_dem_${currentYear} - SUM_dem_${previousYear}) < 50000`,
      labelExpressionInfo: {
        expression: `
          var valueNext = $feature.SUM_dem_${currentYear};
          var valuePrevious = $feature.SUM_dem_${previousYear};
          ${diffLabelText}
        `
      },
      deconflictionStrategy: `none`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(dColor),
        xoffset: -30,
        yoffset: -10
      })
    }),
    new LabelClass({
      minScale: 9244700,
      where: `ABS(SUM_dem_${currentYear} - SUM_dem_${previousYear}) < 10000`,
      labelExpressionInfo: {
        expression: `
          var valueNext = $feature.SUM_dem_${currentYear};
          var valuePrevious = $feature.SUM_dem_${previousYear};
          ${diffLabelText}
        `
      },
      deconflictionStrategy: `none`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(dColor),
        xoffset: -20,
        yoffset: -10
      })
    }),


    // REPUBLICAN label classes

    new LabelClass({
      minScale: 9244700,
      where: `ABS(SUM_rep_${currentYear} - SUM_rep_${previousYear}) >= 500000`,
      labelExpressionInfo: {
        expression: `
          var valueNext = $feature.SUM_rep_${currentYear};
          var valuePrevious = $feature.SUM_rep_${previousYear};
          ${diffLabelText}
        `
      },
      deconflictionStrategy: `none`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(rColor),
        xoffset: 50,
        yoffset: -20
      })
    }),
    new LabelClass({
      minScale: 9244700,
      where: `ABS(SUM_rep_${currentYear} - SUM_rep_${previousYear}) >= 100000 AND ABS(SUM_rep_${currentYear} - SUM_rep_${previousYear}) < 500000`,
      labelExpressionInfo: {
        expression: `
          var valueNext = $feature.SUM_rep_${currentYear};
          var valuePrevious = $feature.SUM_rep_${previousYear};
          ${diffLabelText}
        `
      },
      deconflictionStrategy: `none`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(rColor),
        xoffset: 35,
        yoffset: -20
      })
    }),
    new LabelClass({
      minScale: 9244700,
      where: `ABS(SUM_rep_${currentYear} - SUM_rep_${previousYear}) >= 50000 AND ABS(SUM_rep_${currentYear} - SUM_rep_${previousYear}) < 100000`,
      labelExpressionInfo: {
        expression: `
          var valueNext = $feature.SUM_rep_${currentYear};
          var valuePrevious = $feature.SUM_rep_${previousYear};
          ${diffLabelText}
        `
      },
      deconflictionStrategy: `none`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(rColor),
        xoffset: 30,
        yoffset: -17
      })
    }),
    new LabelClass({
      minScale: 9244700,
      where: `ABS(SUM_rep_${currentYear} - SUM_rep_${previousYear}) >= 10000 AND ABS(SUM_rep_${currentYear} - SUM_rep_${previousYear}) < 50000`,
      labelExpressionInfo: {
        expression: `
          var valueNext = $feature.SUM_rep_${currentYear};
          var valuePrevious = $feature.SUM_rep_${previousYear};
          ${diffLabelText}
        `
      },
      deconflictionStrategy: `none`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(rColor),
        xoffset: 25,
        yoffset: -12
      })
    }),
    new LabelClass({
      minScale: 9244700,
      where: `ABS(SUM_rep_${currentYear} - SUM_rep_${previousYear}) < 10000`,
      labelExpressionInfo: {
        expression: `
          var valueNext = $feature.SUM_rep_${currentYear};
          var valuePrevious = $feature.SUM_rep_${previousYear};
          ${diffLabelText}
        `
      },
      deconflictionStrategy: `none`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(rColor),
        xoffset: 20,
        yoffset: -10
      })
    }),

    // OTHER label classes

    new LabelClass({
      minScale: 9244700,
      where: `ABS(SUM_oth_${currentYear} - SUM_oth_${previousYear}) >= 500000`,
      labelExpressionInfo: {
        expression: `
          var valueNext = $feature.SUM_oth_${currentYear};
          var valuePrevious = $feature.SUM_oth_${previousYear};
          ${diffLabelText}
        `
      },
      deconflictionStrategy: `none`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(oColor),
        xoffset: 20,
        yoffset: 30
      })
    }),
    new LabelClass({
      minScale: 9244700,
      where: `ABS(SUM_oth_${currentYear} - SUM_oth_${previousYear}) >= 100000 AND ABS(SUM_oth_${currentYear} - SUM_oth_${previousYear}) < 500000`,
      labelExpressionInfo: {
        expression: `
        var valueNext = $feature.SUM_oth_${currentYear};
        var valuePrevious = $feature.SUM_oth_${previousYear};
          ${diffLabelText}
        `
      },
      deconflictionStrategy: `none`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(oColor),
        xoffset: 20,
        yoffset: 30
      })
    }),
    new LabelClass({
      minScale: 9244700,
      where: `
        (ABS(SUM_oth_${currentYear} - SUM_oth_${previousYear}) >= 50000 AND ABS(SUM_oth_${currentYear} - SUM_oth_${previousYear}) < 100000)
      `,
      labelExpressionInfo: {
        expression: `
        var valueNext = $feature.SUM_oth_${currentYear};
        var valuePrevious = $feature.SUM_oth_${previousYear};
          ${diffLabelText}
        `
      },
      deconflictionStrategy: `none`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(oColor),
        xoffset: 20,
        yoffset: 20
      })
    }),

    new LabelClass({
      minScale: 9244700,
      where: `
        (ABS(SUM_oth_${currentYear} - SUM_oth_${previousYear}) >= 10000 AND ABS(SUM_oth_${currentYear} - SUM_oth_${previousYear}) < 50000)
      `,
      labelExpressionInfo: {
        expression: `
        var valueNext = $feature.SUM_oth_${currentYear};
        var valuePrevious = $feature.SUM_oth_${previousYear};
          ${diffLabelText}
        `
      },
      deconflictionStrategy: `none`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(oColor),
        xoffset: 20,
        yoffset: 15
      })
    }),
    new LabelClass({
      minScale: 9244700,
      where: `
        (ABS(SUM_oth_${currentYear} - SUM_oth_${previousYear}) < 10000)
      `,
      labelExpressionInfo: {
        expression: `
          var valueNext = $feature.SUM_oth_${currentYear};
          var valuePrevious = $feature.SUM_oth_${previousYear};
          ${diffLabelText}
        `
      },
      deconflictionStrategy: `none`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(oColor),
        xoffset: 10,
        yoffset: 10
      })
    })
  ];
};

////////////////////////////////////////////////////
//
// STATE RESULTS
//
///////////////////////////////////////////////////

export const stateResultsLabelingInfo = (year: number) => {
  const currentYear = year;
  return [

    // DEMOCRAT label classes

    new LabelClass({
      minScale: 9244700,
      where: `ABS(SUM_dem_${currentYear}) >= 5000000`,
      labelExpressionInfo: {
        expression: `
          Text($feature.SUM_dem_${currentYear}, '#,###');
        `
      },
      deconflictionStrategy: `none`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(dColor),
        xoffset: -50,
        yoffset: -25
      })
    }),
    new LabelClass({
      minScale: 9244700,
      where: `ABS(SUM_dem_${currentYear}) >= 1000000 AND ABS(SUM_dem_${currentYear}) < 5000000`,
      labelExpressionInfo: {
        expression: `
        Text($feature.SUM_dem_${currentYear}, '#,###');
        `
      },
      deconflictionStrategy: `none`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(dColor),
        xoffset: -40,
        yoffset: -20
      })
    }),
    new LabelClass({
      minScale: 9244700,
      where: `ABS(SUM_dem_${currentYear}) >= 500000 AND ABS(SUM_dem_${currentYear}) < 1000000`,
      labelExpressionInfo: {
        expression: `
        Text($feature.SUM_dem_${currentYear}, '#,###');
        `
      },
      deconflictionStrategy: `none`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(dColor),
        xoffset: -40,
        yoffset: -10
      })
    }),
    new LabelClass({
      minScale: 9244700,
      where: `ABS(SUM_dem_${currentYear}) >= 100000 AND ABS(SUM_dem_${currentYear}) < 500000`,
      labelExpressionInfo: {
        expression: `
        Text($feature.SUM_dem_${currentYear}, '#,###');
        `
      },
      deconflictionStrategy: `none`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(dColor),
        xoffset: -30,
        yoffset: -10
      })
    }),
    new LabelClass({
      minScale: 9244700,
      where: `ABS(SUM_dem_${currentYear}) < 100000`,
      labelExpressionInfo: {
        expression: `
        Text($feature.SUM_dem_${currentYear}, '#,###');
        `
      },
      deconflictionStrategy: `none`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(dColor),
        xoffset: -20,
        yoffset: -10
      })
    }),


    // REPUBLICAN label classes

    new LabelClass({
      minScale: 9244700,
      where: `ABS(SUM_rep_${currentYear}) >= 5000000`,
      labelExpressionInfo: {
        expression: `
          Text($feature.SUM_rep_${currentYear}, '#,###');
        `
      },
      deconflictionStrategy: `none`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(rColor),
        xoffset: 60,
        yoffset: -20
      })
    }),
    new LabelClass({
      minScale: 9244700,
      where: `ABS(SUM_rep_${currentYear}) >= 1000000 AND ABS(SUM_rep_${currentYear}) < 5000000`,
      labelExpressionInfo: {
        expression: `
        Text($feature.SUM_rep_${currentYear}, '#,###');
        `
      },
      deconflictionStrategy: `none`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(rColor),
        xoffset: 35,
        yoffset: -20
      })
    }),
    new LabelClass({
      minScale: 9244700,
      where: `ABS(SUM_rep_${currentYear}) >= 500000 AND ABS(SUM_rep_${currentYear}) < 1000000`,
      labelExpressionInfo: {
        expression: `
        Text($feature.SUM_rep_${currentYear}, '#,###');
        `
      },
      deconflictionStrategy: `none`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(rColor),
        xoffset: 30,
        yoffset: -20
      })
    }),
    new LabelClass({
      minScale: 9244700,
      where: `ABS(SUM_rep_${currentYear}) >= 100000 AND ABS(SUM_rep_${currentYear}) < 500000`,
      labelExpressionInfo: {
        expression: `
        Text($feature.SUM_rep_${currentYear}, '#,###');
        `
      },
      deconflictionStrategy: `none`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(rColor),
        xoffset: 25,
        yoffset: -10
      })
    }),
    new LabelClass({
      minScale: 9244700,
      where: `ABS(SUM_rep_${currentYear}) < 100000`,
      labelExpressionInfo: {
        expression: `
        Text($feature.SUM_rep_${currentYear}, '#,###');
        `
      },
      deconflictionStrategy: `none`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(rColor),
        xoffset: 20,
        yoffset: -10
      })
    }),

    // OTHER label classes

    new LabelClass({
      minScale: 9244700,
      where: `ABS(SUM_oth_${currentYear}) >= 5000000`,
      labelExpressionInfo: {
        expression: `
          Text($feature.SUM_oth_${currentYear}, '#,###');
        `
      },
      deconflictionStrategy: `none`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(oColor),
        xoffset: 20,
        yoffset: 35
      })
    }),
    new LabelClass({
      minScale: 9244700,
      where: `ABS(SUM_oth_${currentYear}) >= 1000000 AND ABS(SUM_oth_${currentYear}) < 5000000`,
      labelExpressionInfo: {
        expression: `
        Text($feature.SUM_oth_${currentYear}, '#,###');
        `
      },
      deconflictionStrategy: `none`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(oColor),
        xoffset: 30,
        yoffset: 30
      })
    }),
    new LabelClass({
      minScale: 9244700,
      where: `
        (ABS(SUM_oth_${currentYear}) >= 500000 AND ABS(SUM_oth_${currentYear}) < 1000000)
      `,
      labelExpressionInfo: {
        expression: `
        Text($feature.SUM_oth_${currentYear}, '#,###');
        `
      },
      deconflictionStrategy: `none`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(oColor),
        xoffset: 20,
        yoffset: 25
      })
    }),

    new LabelClass({
      minScale: 9244700,
      where: `
        (ABS(SUM_oth_${currentYear}) >= 100000 AND ABS(SUM_oth_${currentYear}) < 500000)
      `,
      labelExpressionInfo: {
        expression: `
        Text($feature.SUM_oth_${currentYear}, '#,###');
        `
      },
      deconflictionStrategy: `none`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(oColor),
        xoffset: 20,
        yoffset: 15
      })
    }),
    new LabelClass({
      minScale: 9244700,
      where: `
        (ABS(SUM_oth_${currentYear}) < 100000)
      `,
      labelExpressionInfo: {
        expression: `
        Text($feature.SUM_oth_${currentYear}, '#,###');
        `
      },
      deconflictionStrategy: `none`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(oColor),
        xoffset: 1,
        yoffset: 15
      })
    })
  ];
};


////////////////////////////////////////////////////
//
// COUNTY RESULTS
//
///////////////////////////////////////////////////

export const countyResultsLabelingInfo = (year: number) => {
  const currentYear = year;
  return [

    // DEMOCRAT label classes

    new LabelClass({
      minScale: 577791,
      where: `ABS(((dem_${currentYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) >= 10`,
      labelExpressionInfo: {
        expression: `
          Text($feature.dem_${currentYear}, '#,###');
        `
      },
      deconflictionStrategy: `none`,
      labelPlacement: `center-center`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(dColor),
        xoffset: -50,
        yoffset: -25
      })
    }),
    new LabelClass({
      minScale: 577791,
      where: `ABS(((dem_${currentYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) >= 5 AND ABS(((dem_${currentYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) < 10`,
      labelExpressionInfo: {
        expression: `
          Text($feature.dem_${currentYear}, '#,###');
        `
      },
      deconflictionStrategy: `none`,
      labelPlacement: `center-center`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(dColor),
        xoffset: -40,
        yoffset: -20
      })
    }),
    new LabelClass({
      minScale: 577791,
      where: `ABS(((dem_${currentYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) >= 1 AND ABS(((dem_${currentYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) < 5`,
      labelExpressionInfo: {
        expression: `
          Text($feature.dem_${currentYear}, '#,###');
        `
      },
      deconflictionStrategy: `none`,
      labelPlacement: `center-center`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(dColor),
        xoffset: -40,
        yoffset: -20
      })
    }),
    new LabelClass({
      minScale: 577791,
      where: `ABS(((dem_${currentYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) >= 0.5 AND ABS(((dem_${currentYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) < 1`,
      labelExpressionInfo: {
        expression: `
          Text($feature.dem_${currentYear}, '#,###');
        `
      },
      deconflictionStrategy: `none`,
      labelPlacement: `center-center`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(dColor),
        xoffset: -30,
        yoffset: -20
      })
    }),
    new LabelClass({
      minScale: 577791,
      where: `ABS(((dem_${currentYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) < 0.5`,
      labelExpressionInfo: {
        expression: `
          Text($feature.dem_${currentYear}, '#,###');
        `
      },
      deconflictionStrategy: `none`,
      labelPlacement: `center-center`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(dColor),
        xoffset: -20,
        yoffset: -10
      })
    }),


    // REPUBLICAN label classes

    new LabelClass({
      minScale: 577791,
      where: `ABS(((rep_${currentYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) >= 10`,
      labelExpressionInfo: {
        expression: `
          Text($feature.rep_${currentYear}, '#,###');
        `
      },
      deconflictionStrategy: `none`,
      labelPlacement: `center-center`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(rColor),
        xoffset: 50,
        yoffset: -20
      })
    }),
    new LabelClass({
      minScale: 577791,
      where: `ABS(((rep_${currentYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) >= 5 AND ABS(((rep_${currentYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) < 10`,
      labelExpressionInfo: {
        expression: `
          Text($feature.rep_${currentYear}, '#,###');
        `
      },
      deconflictionStrategy: `none`,
      labelPlacement: `center-center`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(rColor),
        xoffset: 40,
        yoffset: -20
      })
    }),
    new LabelClass({
      minScale: 577791,
      where: `ABS(((rep_${currentYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) >= 1 AND ABS(((rep_${currentYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) < 5`,
      labelExpressionInfo: {
        expression: `
          Text($feature.rep_${currentYear}, '#,###');
        `
      },
      deconflictionStrategy: `none`,
      labelPlacement: `center-center`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(rColor),
        xoffset: 30,
        yoffset: -20
      })
    }),
    new LabelClass({
      minScale: 577791,
      where: `ABS(((rep_${currentYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) >= 0.5 AND ABS(((rep_${currentYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) < 1`,
      labelExpressionInfo: {
        expression: `
          Text($feature.rep_${currentYear}, '#,###');
        `
      },
      deconflictionStrategy: `none`,
      labelPlacement: `center-center`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(rColor),
        xoffset: 25,
        yoffset: -10
      })
    }),
    new LabelClass({
      minScale: 577791,
      where: `ABS(((rep_${currentYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) < 0.5`,
      labelExpressionInfo: {
        expression: `
          Text($feature.rep_${currentYear}, '#,###');
        `
      },
      deconflictionStrategy: `none`,
      labelPlacement: `center-center`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(rColor),
        xoffset: 20,
        yoffset: -10
      })
    }),

    // OTHER label classes

    new LabelClass({
      minScale: 577791,
      where: `ABS(((oth_${currentYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) >= 10`,
      labelExpressionInfo: {
        expression: `
          Text($feature.oth_${currentYear}, '#,###');
        `
      },
      deconflictionStrategy: `none`,
      labelPlacement: `center-center`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(oColor),
        xoffset: 30,
        yoffset: 40
      })
    }),
    new LabelClass({
      minScale: 577791,
      where: `ABS(((oth_${currentYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) >= 5 AND ABS(((oth_${currentYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) < 10`,
      labelExpressionInfo: {
        expression: `
          Text($feature.oth_${currentYear}, '#,###');
        `
      },
      deconflictionStrategy: `none`,
      labelPlacement: `center-center`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(oColor),
        xoffset: 30,
        yoffset: 40
      })
    }),
    new LabelClass({
      minScale: 577791,
      where: `
        (ABS(((oth_${currentYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) >= 1 AND ABS(((oth_${currentYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) < 5)
      `,
      labelExpressionInfo: {
        expression: `
          Text($feature.oth_${currentYear}, '#,###');
        `
      },
      deconflictionStrategy: `none`,
      labelPlacement: `center-center`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(oColor),
        xoffset: 30,
        yoffset: 35
      })
    }),

    new LabelClass({
      minScale: 577791,
      where: `
        (ABS(((oth_${currentYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) >= 0.5 AND ABS(((oth_${currentYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) < 1)
      `,
      labelExpressionInfo: {
        expression: `
          Text($feature.oth_${currentYear}, '#,###');
        `
      },
      deconflictionStrategy: `none`,
      labelPlacement: `center-center`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(oColor),
        xoffset: 20,
        yoffset: 30
      })
    }),
    new LabelClass({
      minScale: 577791,
      where: `
        (ABS(((oth_${currentYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) < 0.5)
      `,
      labelExpressionInfo: {
        expression: `
          Text($feature.oth_${currentYear}, '#,###');
        `
      },
      deconflictionStrategy: `none`,
      labelPlacement: `center-center`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(oColor),
        xoffset: 15,
        yoffset: 18
      })
    })

  ];
};

////////////////////////////////////////////////////
//
// COUNTY CHANGE
//
///////////////////////////////////////////////////

export const countyChangeLabelingInfo = (year: number) => {
  const currentYear = year;
  const previousYear = year - 4;
  return [

    // DEMOCRAT label classes

    new LabelClass({
      minScale: 577791,
      where: `ABS(((dem_${currentYear} - dem_${previousYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) >= 10`,
      labelExpressionInfo: {
        expression: `
          var valueNext = $feature.dem_${currentYear};
          var valuePrevious = $feature.dem_${previousYear};
          ${diffLabelText}
        `
      },
      deconflictionStrategy: `none`,
      labelPlacement: `center-center`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(dColor),
        xoffset: -50,
        yoffset: -25
      })
    }),
    new LabelClass({
      minScale: 577791,
      where: `ABS(((dem_${currentYear} - dem_${previousYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) >= 5 AND ABS(((dem_${currentYear} - dem_${previousYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) < 10`,
      labelExpressionInfo: {
        expression: `
          var valueNext = $feature.dem_${currentYear};
          var valuePrevious = $feature.dem_${previousYear};
          ${diffLabelText}
        `
      },
      deconflictionStrategy: `none`,
      labelPlacement: `center-center`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(dColor),
        xoffset: -40,
        yoffset: -20
      })
    }),
    new LabelClass({
      minScale: 577791,
      where: `ABS(((dem_${currentYear} - dem_${previousYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) >= 1 AND ABS(((dem_${currentYear} - dem_${previousYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) < 5`,
      labelExpressionInfo: {
        expression: `
          var valueNext = $feature.dem_${currentYear};
          var valuePrevious = $feature.dem_${previousYear};
          ${diffLabelText}
        `
      },
      deconflictionStrategy: `none`,
      labelPlacement: `center-center`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(dColor),
        xoffset: -40,
        yoffset: -10
      })
    }),
    new LabelClass({
      minScale: 577791,
      where: `ABS(((dem_${currentYear} - dem_${previousYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) >= 0.5 AND ABS(((dem_${currentYear} - dem_${previousYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) < 1`,
      labelExpressionInfo: {
        expression: `
          var valueNext = $feature.dem_${currentYear};
          var valuePrevious = $feature.dem_${previousYear};
          ${diffLabelText}
        `
      },
      deconflictionStrategy: `none`,
      labelPlacement: `center-center`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(dColor),
        xoffset: -30,
        yoffset: -10
      })
    }),
    new LabelClass({
      minScale: 577791,
      where: `ABS(((dem_${currentYear} - dem_${previousYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) < 0.5`,
      labelExpressionInfo: {
        expression: `
          var valueNext = $feature.dem_${currentYear};
          var valuePrevious = $feature.dem_${previousYear};
          ${diffLabelText}
        `
      },
      deconflictionStrategy: `none`,
      labelPlacement: `center-center`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(dColor),
        xoffset: -20,
        yoffset: -10
      })
    }),


    // REPUBLICAN label classes

    new LabelClass({
      minScale: 577791,
      where: `ABS(((rep_${currentYear} - rep_${previousYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) >= 10`,
      labelExpressionInfo: {
        expression: `
          var valueNext = $feature.rep_${currentYear};
          var valuePrevious = $feature.rep_${previousYear};
          ${diffLabelText}
        `
      },
      deconflictionStrategy: `none`,
      labelPlacement: `center-center`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(rColor),
        xoffset: 60,
        yoffset: -20
      })
    }),
    new LabelClass({
      minScale: 577791,
      where: `ABS(((rep_${currentYear} - rep_${previousYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) >= 5 AND ABS(((rep_${currentYear} - rep_${previousYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) < 10`,
      labelExpressionInfo: {
        expression: `
          var valueNext = $feature.rep_${currentYear};
          var valuePrevious = $feature.rep_${previousYear};
          ${diffLabelText}
        `
      },
      deconflictionStrategy: `none`,
      labelPlacement: `center-center`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(rColor),
        xoffset: 45,
        yoffset: -20
      })
    }),
    new LabelClass({
      minScale: 577791,
      where: `ABS(((rep_${currentYear} - rep_${previousYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) >= 1 AND ABS(((rep_${currentYear} - rep_${previousYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) < 5`,
      labelExpressionInfo: {
        expression: `
          var valueNext = $feature.rep_${currentYear};
          var valuePrevious = $feature.rep_${previousYear};
          ${diffLabelText}
        `
      },
      deconflictionStrategy: `none`,
      labelPlacement: `center-center`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(rColor),
        xoffset: 30,
        yoffset: -20
      })
    }),
    new LabelClass({
      minScale: 577791,
      where: `ABS(((rep_${currentYear} - rep_${previousYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) >= 0.5 AND ABS(((rep_${currentYear} - rep_${previousYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) < 1`,
      labelExpressionInfo: {
        expression: `
          var valueNext = $feature.rep_${currentYear};
          var valuePrevious = $feature.rep_${previousYear};
          ${diffLabelText}
        `
      },
      deconflictionStrategy: `none`,
      labelPlacement: `center-center`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(rColor),
        xoffset: 20,
        yoffset: -10
      })
    }),
    new LabelClass({
      minScale: 577791,
      where: `ABS(((rep_${currentYear} - rep_${previousYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) < 0.5`,
      labelExpressionInfo: {
        expression: `
          var valueNext = $feature.rep_${currentYear};
          var valuePrevious = $feature.rep_${previousYear};
          ${diffLabelText}
        `
      },
      deconflictionStrategy: `none`,
      labelPlacement: `center-center`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(rColor),
        xoffset: 20,
        yoffset: -10
      })
    }),

    // OTHER label classes

    new LabelClass({
      minScale: 577791,
      where: `ABS(((oth_${currentYear} - oth_${previousYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) >= 10`,
      labelExpressionInfo: {
        expression: `
          var valueNext = $feature.oth_${currentYear};
          var valuePrevious = $feature.oth_${previousYear};
          ${diffLabelText}
        `
      },
      deconflictionStrategy: `none`,
      labelPlacement: `center-center`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(oColor),
        xoffset: 30,
        yoffset: 40
      })
    }),
    new LabelClass({
      minScale: 577791,
      where: `ABS(((oth_${currentYear} - oth_${previousYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) >= 5 AND ABS(((oth_${currentYear} - oth_${previousYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) < 10`,
      labelExpressionInfo: {
        expression: `
        var valueNext = $feature.oth_${currentYear};
        var valuePrevious = $feature.oth_${previousYear};
          ${diffLabelText}
        `
      },
      deconflictionStrategy: `none`,
      labelPlacement: `center-center`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(oColor),
        xoffset: 30,
        yoffset: 40
      })
    }),
    new LabelClass({
      minScale: 577791,
      where: `
        (ABS(((oth_${currentYear} - oth_${previousYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) >= 1 AND ABS(((oth_${currentYear} - oth_${previousYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) < 5)
      `,
      labelExpressionInfo: {
        expression: `
        var valueNext = $feature.oth_${currentYear};
        var valuePrevious = $feature.oth_${previousYear};
          ${diffLabelText}
        `
      },
      deconflictionStrategy: `none`,
      labelPlacement: `center-center`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(oColor),
        xoffset: 30,
        yoffset: 35
      })
    }),

    new LabelClass({
      minScale: 577791,
      where: `
        (ABS(((oth_${currentYear} - oth_${previousYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) >= 0.5 AND ABS(((oth_${currentYear} - oth_${previousYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) < 1)
      `,
      labelExpressionInfo: {
        expression: `
        var valueNext = $feature.oth_${currentYear};
        var valuePrevious = $feature.oth_${previousYear};
          ${diffLabelText}
        `
      },
      deconflictionStrategy: `none`,
      labelPlacement: `center-center`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(oColor),
        xoffset: 20,
        yoffset: 30
      })
    }),
    new LabelClass({
      minScale: 577791,
      where: `
        (ABS(((oth_${currentYear} - oth_${previousYear}) / TOTAL_STATE_VOTES_${currentYear}) * 100) < 0.5)
      `,
      labelExpressionInfo: {
        expression: `
          var valueNext = $feature.oth_${currentYear};
          var valuePrevious = $feature.oth_${previousYear};
          ${diffLabelText}
        `
      },
      deconflictionStrategy: `none`,
      labelPlacement: `center-center`,
      symbol: new TextSymbol({
        font: new Font({
          weight: `bold`,
          family: `Noto Sans`,
          size: `10pt`
        }),
        haloColor: new Color(haloColor),
        haloSize,
        color: new Color(oColor),
        xoffset: 15,
        yoffset: 18
      })
    })

  ];
};