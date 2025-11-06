import "../App.css";

import "@esri/calcite-components/dist/components/calcite-block";

function LeanLegend() {
  return (
    <>
      <calcite-block heading="Legend" collapsible expanded>
        <p>
          This map shows the winner of the election. The shade of the state
          indicates the party that was awarded electoral votes in the given
          election. The orientation of the arrows represent how far right or
          left the state (or county) leaned in terms of the proportion of votes
          received by the winning party.
        </p>
        <div className="legendElement">
          <b>Lean</b>
          <img
            src="./legend-lean.png"
            className="legend"
            alt="Legend"
            style={{ width: "300px" }}
          />
        </div>
        <p>
          The size of each arrow corresponds to the margin of victory for the
          winning party.
        </p>
        <div className="legendElement">
          <b>Margin of victory</b>
          <img
            src="./legend-swing-arrow.png"
            className="legend"
            alt="Legend"
            style={{ width: "180px" }}
          />
        </div>
      </calcite-block>
    </>
  );
}

export default LeanLegend;
