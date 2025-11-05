import "../App.css";

import "@esri/calcite-components/dist/components/calcite-block";

function WinnerLegend() {
  return (
    <>
      <calcite-block heading="Legend" collapsible expanded>
        <p>
          This map shows the winner of the election on the state and county
          level.
        </p>
        <div className="legendElement">
          <img src="./legend-winner.png" className="legend" alt="Legend" />
        </div>
      </calcite-block>
    </>
  );
}

export default WinnerLegend;
