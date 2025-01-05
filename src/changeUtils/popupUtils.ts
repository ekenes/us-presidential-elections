import PopupTemplate from "@arcgis/core/PopupTemplate";
import ExpressionInfo from "@arcgis/core/popup/ExpressionInfo";

import { fieldInfos, dColor, rColor, oColor, results } from "../config";
import { colorDiffPopupBase, votesCountyNextBase, votesStateNextBase, diffTextBase, allCountyNextBase, shiftCountyTextBase, shareTextBase, shiftCounties, colorShiftPopupBase, shiftStatesTextBase, allStateNextBase, shiftStates } from "./expressionUtils";
import FieldInfo from "@arcgis/core/popup/FieldInfo";
import FieldInfoFormat from "@arcgis/core/popup/support/FieldInfoFormat";
import { TextContent } from "@arcgis/core/popup/content";

////////////////////////////////////////////////////
//
// STATE
//
///////////////////////////////////////////////////

export const statePopupTemplate = (year: number) => {
  const currentYear = year;
  const previousYear = year - 4;

  return new PopupTemplate({
    title: `${fieldInfos.title.state}`,
    fieldInfos: [
      new FieldInfo({
        fieldName: `SUM_dem_${previousYear}`,
        label: `${previousYear} Democrat votes`,
        format: new FieldInfoFormat({
          places: 0,
          digitSeparator: true
        })
      }),
      new FieldInfo({
        fieldName: `SUM_rep_${previousYear}`,
        label: `${previousYear} Republican votes`,
        format: new FieldInfoFormat({
          places: 0,
          digitSeparator: true
        })
      }),
      new FieldInfo({
        fieldName: `SUM_oth_${previousYear}`,
        label: `${previousYear} Other votes`,
        format: new FieldInfoFormat({
          places: 0,
          digitSeparator: true
        })
      }),
      new FieldInfo({
        fieldName: `SUM_dem_${currentYear}`,
        label: `${currentYear} Democrat votes`,
        format: new FieldInfoFormat({
          places: 0,
          digitSeparator: true
        })
      }),
      new FieldInfo({
        fieldName: `SUM_rep_${currentYear}`,
        label: `${currentYear} Republican votes`,
        format: new FieldInfoFormat({
          places: 0,
          digitSeparator: true
        })
      }),
      new FieldInfo({
        fieldName: `SUM_oth_${currentYear}`,
        label: `${currentYear} Other votes`,
        format: new FieldInfoFormat({
          places: 0,
          digitSeparator: true
        })
      })
    ],
    content: [
      new TextContent({
        text: `
          <span style='color: {expression/winner-color}; font-weight:bolder'>{expression/winner}</span>
          won ${fieldInfos.title.state}'s <strong>{ev_${currentYear}}</strong> electoral votes by a margin of <span style='color: {expression/winner-color}; font-weight:bolder'>{expression/winner-margin-votes}</span> votes (<span style='color: {expression/winner-color}; font-weight:bolder'>{expression/winner-margin}</span> points).
          The {expression/winner-votes} votes cast for {expression/winner} comprise
          {expression/winner-percent-state-votes} of the total votes cast in the state.
        `
      }),
      new TextContent({
        text: `
          <div class="table-container">
            Votes in ${currentYear} and the change from ${previousYear}
            <br/>
            <br/>
            <table class="esri-widget popup">
              <tr class="head"><td>Party</td><td>Votes</td><td>+/-</td><td>%</td><td>+/-</td><td>% Change</td></tr>

              <tr class="dem"><td><span style='color:${dColor}; font-weight:bolder'>${results[currentYear as keyof typeof results].democrat.candidate}</span></td><td class="num">{SUM_dem_${currentYear}}</td><td class="num"><span style='color: {expression/dem-change-color}'>{expression/dem${previousYear}diff${currentYear}}</span></td>

              <td class="num">{expression/demShare${currentYear}}</td>
              <td class="num"><span style='color: {expression/dem-shift-color}'>{expression/dem${previousYear}shift${currentYear}}</span></td>

              <td class="num"><span style='color: {expression/dem-change-color}'>{expression/dem${previousYear}change${currentYear}}</span></td></tr>


              <tr class="rep"><td><span style='color:${rColor}; font-weight:bolder'>${results[currentYear as keyof typeof results].republican.candidate}</span></td><td class="num">{SUM_rep_${currentYear}}</td><td class="num"><span style='color: {expression/rep-change-color}'>{expression/rep${previousYear}diff${currentYear}}</span></td>

              <td class="num">{expression/repShare${currentYear}}</td>
              <td class="num"><span style='color: {expression/rep-shift-color}'>{expression/rep${previousYear}shift${currentYear}}</span></td>

              <td class="num"><span style='color: {expression/rep-change-color}'>{expression/rep${previousYear}change${currentYear}}</span></td></tr>


              <tr class="oth"><td><span style='color:${oColor}; font-weight:bolder'>${results[currentYear as keyof typeof results].other.candidate}</span></td><td class="num">{SUM_oth_${currentYear}}</td><td class="num"><span style='color: {expression/oth-change-color}'>{expression/oth${previousYear}diff${currentYear}}</span></td>

              <td class="num">{expression/othShare${currentYear}}</td>
              <td class="num"><span style='color: {expression/oth-shift-color}'>{expression/oth${previousYear}shift${currentYear}}</span></td>

              <td class="num"><span style='color: {expression/oth-change-color}'>{expression/oth${previousYear}change${currentYear}}</span></td></tr>
            </table>
          </div>
        `
      })
    ],
    expressionInfos: [
      new ExpressionInfo({
        title: `winner % of state votes`,
        name: `winner-percent-state-votes`,
        expression: `
          ${votesStateNextBase(currentYear)}

          var winnerTotal = Max(all);
          return Text(winnerTotal/Sum(all), "#%");
        `
      }),
      new ExpressionInfo({
        title: `winner votes`,
        name: `winner-votes`,
        expression: `
          ${votesStateNextBase(currentYear)}

          return Text(Max(all), "#,###");
        `
      }),
      new ExpressionInfo({
        title: `winner-color`,
        name: `winner-color`,
        expression: `
          ${votesStateNextBase(currentYear)}

          Decode( Max(all),
            dem, "${dColor}",
            rep, "${rColor}",
            oth, "${oColor}",
          "#000000"
          );
        `
      }),
      new ExpressionInfo({
        title: `winner`,
        name: `winner`,
        expression: `
          ${votesStateNextBase(currentYear)}

          Decode( Max(all),
            dem, "${results[currentYear as keyof typeof results].democrat.candidate}",
            rep, "${results[currentYear as keyof typeof results].republican.candidate}",
            oth, "${results[currentYear as keyof typeof results].other.candidate}",
          "tie"
          );
        `
      }),
      new ExpressionInfo({
        title: `Democrat change from ${previousYear}`,
        name: `dem${previousYear}change${currentYear}`,
        expression: `
          var votesNext = $feature.SUM_dem_${currentYear};
          var votesPrevious = $feature.SUM_dem_${previousYear};
          ${diffTextBase}
          return changeText;
        `
      }),
      new ExpressionInfo({
        title: `Republican change from ${previousYear}`,
        name: `rep${previousYear}change${currentYear}`,
        expression: `
          var votesNext = $feature.SUM_rep_${currentYear}
          var votesPrevious = $feature.SUM_rep_${previousYear}
          ${diffTextBase}
          return changeText;
        `
      }),
      new ExpressionInfo({
        title: `Other change from ${previousYear}`,
        name: `oth${previousYear}change${currentYear}`,
        expression: `
          var votesNext = $feature.SUM_oth_${currentYear};
          var votesPrevious = $feature.SUM_oth_${previousYear};
          ${diffTextBase}
          return changeText;
        `
      }),
      new ExpressionInfo({
        title: `Democrat diff from ${previousYear}`,
        name: `dem${previousYear}diff${currentYear}`,
        expression: `
          var votesNext = $feature.SUM_dem_${currentYear};
          var votesPrevious = $feature.SUM_dem_${previousYear};
          ${diffTextBase}
          return diffText;
        `
      }),
      new ExpressionInfo({
        title: `Republican diff from ${previousYear}`,
        name: `rep${previousYear}diff${currentYear}`,
        expression: `
          var votesNext = $feature.SUM_rep_${currentYear}
          var votesPrevious = $feature.SUM_rep_${previousYear}
          ${diffTextBase}
          return diffText;
        `
      }),
      new ExpressionInfo({
        title: `Other diff from ${previousYear}`,
        name: `oth${previousYear}diff${currentYear}`,
        expression: `
          var votesNext = $feature.SUM_oth_${currentYear};
          var votesPrevious = $feature.SUM_oth_${previousYear};
          ${diffTextBase}
          return diffText;
        `
      }),
      new ExpressionInfo({
        title: `Republican shift from ${previousYear}`,
        name: `rep${previousYear}shift${currentYear}`,
        expression: `
          var votesNext = $feature.SUM_rep_${currentYear}
          var votesPrevious = $feature.SUM_rep_${previousYear}

          ${shiftStatesTextBase(currentYear)}
        `
      }),
      new ExpressionInfo({
        title: `Democrat shift from ${previousYear}`,
        name: `dem${previousYear}shift${currentYear}`,
        expression: `
          var votesNext = $feature.SUM_dem_${currentYear};
          var votesPrevious = $feature.SUM_dem_${previousYear};

          ${shiftStatesTextBase(currentYear)}
        `
      }),
      new ExpressionInfo({
        title: `Other shift from ${previousYear}`,
        name: `oth${previousYear}shift${currentYear}`,
        expression: `
          var votesNext = $feature.SUM_oth_${currentYear};
          var votesPrevious = $feature.SUM_oth_${previousYear};

          ${shiftStatesTextBase(currentYear)}
        `
      }),
      new ExpressionInfo({
        title: `Republican share ${currentYear}`,
        name: `repShare${currentYear}`,
        expression: `
          ${allStateNextBase(currentYear)}

          var votes = $feature.SUM_rep_${currentYear}

          ${shareTextBase}
        `
      }),
      new ExpressionInfo({
        title: `Democrat share ${currentYear}`,
        name: `demShare${currentYear}`,
        expression: `
          ${allStateNextBase(currentYear)}

          var votes = $feature.SUM_dem_${currentYear};

          ${shareTextBase}
        `
      }),
      new ExpressionInfo({
        title: `Other share ${currentYear}`,
        name: `othShare${currentYear}`,
        expression: `
          ${allStateNextBase(currentYear)}

          var votes = $feature.SUM_oth_${currentYear};

          ${shareTextBase}
        `
      }),
      new ExpressionInfo({
        title: `shift-color`,
        name: `dem-shift-color`,
        expression: `
          var votesNext = $feature.SUM_dem_${currentYear};
          var votesPrevious = $feature.SUM_dem_${previousYear};
          ${shiftStates(currentYear)}
          ${colorShiftPopupBase}
        `
      }),
      new ExpressionInfo({
        title: `shift-color`,
        name: `rep-shift-color`,
        expression: `
          var votesNext = $feature.SUM_rep_${currentYear}
          var votesPrevious = $feature.SUM_rep_${previousYear}
          ${shiftStates(currentYear)}
          ${colorShiftPopupBase}
        `
      }),
      new ExpressionInfo({
        title: `shift-color`,
        name: `oth-shift-color`,
        expression: `
          var votesNext = $feature.SUM_oth_${currentYear};
          var votesPrevious = $feature.SUM_oth_${previousYear};
          ${shiftStates(currentYear)}
          ${colorShiftPopupBase}
        `
      }),
      new ExpressionInfo({
        title: `change-color`,
        name: `dem-change-color`,
        expression: `
          var votesNext = $feature.SUM_dem_${currentYear};
          var votesPrevious = $feature.SUM_dem_${previousYear};
          ${colorDiffPopupBase}
        `
      }),
      new ExpressionInfo({
        title: `change-color`,
        name: `rep-change-color`,
        expression: `
          var votesNext = $feature.SUM_rep_${currentYear}
          var votesPrevious = $feature.SUM_rep_${previousYear}
          ${colorDiffPopupBase}
        `
      }),
      new ExpressionInfo({
        title: `change-color`,
        name: `oth-change-color`,
        expression: `
          var votesNext = $feature.SUM_oth_${currentYear};
          var votesPrevious = $feature.SUM_oth_${previousYear};
          ${colorDiffPopupBase}
        `
      }),
      new ExpressionInfo({
        title: `winner-margin`,
        name: `winner-margin`,
        expression: `
          var fields = [
            $feature.SUM_dem_${currentYear},
            $feature.SUM_rep_${currentYear},
            $feature.SUM_oth_${currentYear}
          ];

          var top2 = Top(Reverse(Sort(fields)), 2);
          var winner = First(top2);
          var secondPlace = top2[1];
          var total = Sum(fields);
          return Text( (winner - secondPlace) / total, "#.#%");
        `
      }),
      new ExpressionInfo({
        title: `winner-margin-votes`,
        name: `winner-margin-votes`,
        expression: `
          var fields = [
            $feature.SUM_dem_${currentYear},
            $feature.SUM_rep_${currentYear},
            $feature.SUM_oth_${currentYear}
          ];

          var top2 = Top(Reverse(Sort(fields)), 2);
          var winner = First(top2);
          var secondPlace = top2[1];
          return Text( (winner - secondPlace), "#,###");
        `
      })
    ]
  });
};



////////////////////////////////////////////////////
//
// COUNTY
//
///////////////////////////////////////////////////


export const countyPopupTemplate = (year: number ) => {
  const currentYear = year;
  const previousYear = year - 4;

  return new PopupTemplate({
    title: `${fieldInfos.title.county}`,
    fieldInfos: [
      new FieldInfo({
        fieldName: `dem_${previousYear}`,
        label: `${previousYear} Democrat votes`,
        format: new FieldInfoFormat({
          places: 0,
          digitSeparator: true
        })
      }),
      new FieldInfo({
        fieldName: `rep_${previousYear}`,
        label: `${previousYear} Republican votes`,
        format: new FieldInfoFormat({
          places: 0,
          digitSeparator: true
        })
      }),
      new FieldInfo({
        fieldName: `oth_${previousYear}`,
        label: `${previousYear} Other votes`,
        format: new FieldInfoFormat({
          places: 0,
          digitSeparator: true
        })
      }),
      new FieldInfo({
        fieldName: `dem_${currentYear}`,
        label: `${currentYear} Democrat votes`,
        format: new FieldInfoFormat({
          places: 0,
          digitSeparator: true
        })
      }),
      new FieldInfo({
        fieldName: `rep_${currentYear}`,
        label: `${currentYear} Republican votes`,
        format: new FieldInfoFormat({
          places: 0,
          digitSeparator: true
        })
      }),
      new FieldInfo({
        fieldName: `oth_${currentYear}`,
        label: `${currentYear} Other votes`,
        format: new FieldInfoFormat({
          places: 0,
          digitSeparator: true
        })
      })
    ],
    content: [
      new TextContent({
        text: `
          <span style='color: {expression/winner-color}; font-weight:bolder'>{expression/winner}</span>
          won ${fieldInfos.title.county} by a margin of
          <span style='color: {expression/winner-color}; font-weight:bolder'>{expression/winner-margin-votes}</span> votes (<span style='color: {expression/winner-color}; font-weight:bolder'>{expression/winner-margin}</span> points).
          The {expression/winner-votes} votes cast for {expression/winner} comprise
          {expression/winner-percent-state-votes} of the total votes cast in the state.
        `
      }),
      new TextContent({
        text: `
          <div class="table-container">
            Votes in ${currentYear} and the change from ${previousYear}
            <br/>
            <br/>
            <table class="esri-widget popup">
              <tr class="head"><td>Party</td><td>Votes</td><td>+/-</td><td>%</td><td>+/-</td><td>% Change</td></tr>

              <tr class="dem"><td><span style='color:${dColor}; font-weight:bolder'>${results[currentYear as keyof typeof results].democrat.candidate}</span></td><td class="num">{${`dem_${currentYear}`}}</td><td class="num"><span style='color: {expression/dem-change-color}'>{expression/dem${previousYear}diff${currentYear}}</span></td>

              <td class="num">{expression/demShare${currentYear}}</td>
              <td class="num"><span style='color: {expression/dem-shift-color}'>{expression/dem${previousYear}shift${currentYear}}</span></td>

              <td class="num"><span style='color: {expression/dem-change-color}'>{expression/dem${previousYear}change${currentYear}}</span></td></tr>


              <tr class="rep"><td><span style='color:${rColor}; font-weight:bolder'>${results[currentYear as keyof typeof results].republican.candidate}</span></td><td class="num">{${`rep_${currentYear}`}}</td><td class="num"><span style='color: {expression/rep-change-color}'>{expression/rep${previousYear}diff${currentYear}}</span></td>

              <td class="num">{expression/repShare${currentYear}}</td>
              <td class="num"><span style='color: {expression/rep-shift-color}'>{expression/rep${previousYear}shift${currentYear}}</span></td>

              <td class="num"><span style='color: {expression/rep-change-color}'>{expression/rep${previousYear}change${currentYear}}</span></td></tr>


              <tr class="oth"><td><span style='color:${oColor}; font-weight:bolder'>${results[currentYear as keyof typeof results].other.candidate}</span></td><td class="num">{${`oth_${currentYear}`}}</td><td class="num"><span style='color: {expression/oth-change-color}'>{expression/oth${previousYear}diff${currentYear}}</span></td>

              <td class="num">{expression/othShare${currentYear}}</td>
              <td class="num"><span style='color: {expression/oth-shift-color}'>{expression/oth${previousYear}shift${currentYear}}</span></td>

              <td class="num"><span style='color: {expression/oth-change-color}'>{expression/oth${previousYear}change${currentYear}}</span></td></tr>
            </table>
          </div>
        `
      })
    ],
    expressionInfos: [
      new ExpressionInfo({
        title: `winner % of state votes`,
        name: `winner-percent-state-votes`,
        expression: `
          var dem = $feature.${`dem_${currentYear}`};
          var rep = $feature.${`rep_${currentYear}`};
          var oth = $feature.${`oth_${currentYear}`};
          var all = [dem, rep, oth];

          var winnerTotal = Max(all);
          return Text(winnerTotal/$feature.TOTAL_STATE_VOTES_${currentYear}, "#%");
        `
      }),
      new ExpressionInfo({
        title: `winner votes`,
        name: `winner-votes`,
        expression: `
          ${votesCountyNextBase(currentYear)}

          return Text(Max(all), "#,###");
        `
      }),
      new ExpressionInfo({
        title: `winner-color`,
        name: `winner-color`,
        expression: `
          ${votesCountyNextBase(currentYear)}

          Decode( Max(all),
            dem, "${dColor}",
            rep, "${rColor}",
            oth, "${oColor}",
          "#000000"
          );
        `
      }),
      new ExpressionInfo({
        title: `winner`,
        name: `winner`,
        expression: `
          ${votesCountyNextBase(currentYear)}

          Decode( Max(all),
            dem, "${results[currentYear as keyof typeof results].democrat.candidate}",
            rep, "${results[currentYear as keyof typeof results].republican.candidate}",
            oth, "${results[currentYear as keyof typeof results].other.candidate}",
          "tie"
          );
        `
      }),
      new ExpressionInfo({
        title: `Democrat change from ${previousYear}`,
        name: `dem${previousYear}change${currentYear}`,
        expression: `
          var votesNext = $feature.${`dem_${currentYear}`};
          var votesPrevious = $feature.${`dem_${previousYear}`};
          ${diffTextBase}
          return changeText;
        `
      }),
      new ExpressionInfo({
        title: `Republican change from ${previousYear}`,
        name: `rep${previousYear}change${currentYear}`,
        expression: `
          var votesNext = $feature.${`rep_${currentYear}`};
          var votesPrevious = $feature.${`rep_${previousYear}`};
          ${diffTextBase}
          return changeText;
        `
      }),
      new ExpressionInfo({
        title: `Other change from ${previousYear}`,
        name: `oth${previousYear}change${currentYear}`,
        expression: `
          var votesNext = $feature.${`oth_${currentYear}`};
          var votesPrevious = $feature.${`oth_${previousYear}`};
          ${diffTextBase}
          return changeText;
        `
      }),
      new ExpressionInfo({
        title: `Democrat diff from ${previousYear}`,
        name: `dem${previousYear}diff${currentYear}`,
        expression: `
          var votesNext = $feature.${`dem_${currentYear}`};
          var votesPrevious = $feature.${`dem_${previousYear}`};
          ${diffTextBase}
          return diffText;
        `
      }),
      new ExpressionInfo({
        title: `Republican diff from ${previousYear}`,
        name: `rep${previousYear}diff${currentYear}`,
        expression: `
          var votesNext = $feature.${`rep_${currentYear}`};
          var votesPrevious = $feature.${`rep_${previousYear}`};
          ${diffTextBase}
          return diffText;
        `
      }),
      new ExpressionInfo({
        title: `Other diff from ${previousYear}`,
        name: `oth${previousYear}diff${currentYear}`,
        expression: `
          var votesNext = $feature.${`oth_${currentYear}`};
          var votesPrevious = $feature.${`oth_${previousYear}`};
          ${diffTextBase}
          return diffText;
        `
      }),
      new ExpressionInfo({
        title: `Republican shift from ${previousYear}`,
        name: `rep${previousYear}shift${currentYear}`,
        expression: `
          var votesNext = $feature.${`rep_${currentYear}`};
          var votesPrevious = $feature.${`rep_${previousYear}`};

          ${shiftCountyTextBase(currentYear)}
        `
      }),
      new ExpressionInfo({
        title: `Democrat shift from ${previousYear}`,
        name: `dem${previousYear}shift${currentYear}`,
        expression: `
          var votesNext = $feature.${`dem_${currentYear}`};
          var votesPrevious = $feature.${`dem_${previousYear}`};

          ${shiftCountyTextBase(currentYear)}
        `
      }),
      new ExpressionInfo({
        title: `Other shift from ${previousYear}`,
        name: `oth${previousYear}shift${currentYear}`,
        expression: `
          var votesNext = $feature.${`oth_${currentYear}`};
          var votesPrevious = $feature.${`oth_${previousYear}`};

          ${shiftCountyTextBase(currentYear)}
        `
      }),
      new ExpressionInfo({
        title: `Republican share ${currentYear}`,
        name: `repShare${currentYear}`,
        expression: `
          ${allCountyNextBase(currentYear)}

          var votes = $feature.${`rep_${currentYear}`};

          ${shareTextBase}
        `
      }),
      new ExpressionInfo({
        title: `Democrat share ${currentYear}`,
        name: `demShare${currentYear}`,
        expression: `
          ${allCountyNextBase(currentYear)}

          var votes = $feature.${`dem_${currentYear}`};

          ${shareTextBase}
        `
      }),
      new ExpressionInfo({
        title: `Other share ${currentYear}`,
        name: `othShare${currentYear}`,
        expression: `
          ${allCountyNextBase(currentYear)}

          var votes = $feature.${`oth_${currentYear}`};

          ${shareTextBase}
        `
      }),
      new ExpressionInfo({
        title: `shift-color`,
        name: `dem-shift-color`,
        expression: `
          var votesNext = $feature.${`dem_${currentYear}`};
          var votesPrevious = $feature.${`dem_${previousYear}`};
          ${shiftCounties(currentYear)}
          ${colorShiftPopupBase}
        `
      }),
      new ExpressionInfo({
        title: `shift-color`,
        name: `rep-shift-color`,
        expression: `
          var votesNext = $feature.${`rep_${currentYear}`};
          var votesPrevious = $feature.${`rep_${previousYear}`};
          ${shiftCounties(currentYear)}
          ${colorShiftPopupBase}
        `
      }),
      new ExpressionInfo({
        title: `shift-color`,
        name: `oth-shift-color`,
        expression: `
          var votesNext = $feature.${`oth_${currentYear}`};
          var votesPrevious = $feature.${`oth_${previousYear}`};
          ${shiftCounties(currentYear)}
          ${colorShiftPopupBase}
        `
      }),
      new ExpressionInfo({
        title: `change-color`,
        name: `dem-change-color`,
        expression: `
          var votesNext = $feature.${`dem_${currentYear}`};
          var votesPrevious = $feature.${`dem_${previousYear}`};
          ${colorDiffPopupBase}
        `
      }),
      new ExpressionInfo({
        title: `change-color`,
        name: `rep-change-color`,
        expression: `
          var votesNext = $feature.${`rep_${currentYear}`};
          var votesPrevious = $feature.${`rep_${previousYear}`};
          ${colorDiffPopupBase}
        `
      }),
      new ExpressionInfo({
        title: `change-color`,
        name: `oth-change-color`,
        expression: `
          var votesNext = $feature.${`oth_${currentYear}`};
          var votesPrevious = $feature.${`oth_${previousYear}`};
          ${colorDiffPopupBase}
        `
      }),
      new ExpressionInfo({
        title: `winner-margin`,
        name: `winner-margin`,
        expression: `
          var fields = [
            $feature.${`dem_${currentYear}`},
            $feature.${`rep_${currentYear}`},
            $feature.${`oth_${currentYear}`}
          ];

          var top2 = Top(Reverse(Sort(fields)), 2);
          var winner = First(top2);
          var secondPlace = top2[1];
          var total = Sum(fields);
          return Text( (winner - secondPlace) / total, "#.#%");
        `
      }),
      new ExpressionInfo({
        title: `winner-margin-votes`,
        name: `winner-margin-votes`,
        expression: `
          var fields = [
            $feature.${`dem_${currentYear}`},
            $feature.${`rep_${currentYear}`},
            $feature.${`oth_${currentYear}`}
          ];

          var top2 = Top(Reverse(Sort(fields)), 2);
          var winner = First(top2);
          var secondPlace = top2[1];
          return Text( (winner - secondPlace), "#,###");
        `
      })
    ]
  });
};