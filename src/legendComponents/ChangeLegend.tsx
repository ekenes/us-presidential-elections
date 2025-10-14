import "../App.css";

import "@esri/calcite-components/dist/components/calcite-block";
import { CalciteBlock } from "@esri/calcite-components-react";

function ChangeLegend() {
  return (
    <>
      <CalciteBlock heading="How to read this map" collapsible open>
        <p>
          This map shows the results of each of the previous 5 U.S. presidential
          elections from 2000 to 2024. Each square represents the election
          winner for the given area in one year. The most recent election (2024)
          is represented as the right-most square. Each square's color
          represents the winner of the election; its size is proportional to the
          margin of victory for the winner. Smaller squares indicate a closer
          election. Larger squares indicate a larger margin of victory.
        </p>
        <img src="../change-legend-2.png" className="legend" alt="Legend" />
      </CalciteBlock>
    </>
  );
}

export default ChangeLegend;
