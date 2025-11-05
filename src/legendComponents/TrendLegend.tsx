import "../App.css";

import "@esri/calcite-components/dist/components/calcite-block";

function TrendLegend() {
  return (
    <>
      <calcite-block heading="Legend" collapsible expanded>
        <p>
          This map shows the results of each of the previous 5 U.S. presidential
          elections from 2000 to 2024. Each square represents the election
          winner for the given area in one year. The most recent election (2024)
          is represented as the right-most square. Each square's color
          represents the winner of the election; its size is proportional to the
          margin of victory for the winner. Smaller squares indicate a closer
          election. Larger squares indicate a larger margin of victory.
        </p>
        <img
          src="./trend-legend-horizontal.png"
          className="legend"
          alt="Legend"
        />
      </calcite-block>
    </>
  );
}

export default TrendLegend;
