import "../App.css";

import "@esri/calcite-components/dist/components/calcite-block";

function SwingLegend() {
  return (
    <>
      <calcite-block heading="Legend" collapsible expanded>
        <p>
          This map shows the swing in support from the selected election
          compared to the previous. The magnitude of the swing is represented by
          the degree and orientation of the arrow.
        </p>
        <div className="legendElement">
          <img
            src="./legend-swing.png"
            className="legend"
            alt="Legend"
            style={{ width: "300px" }}
          />
        </div>
        <div className="legendElement">
          <b style={{ fontSize: "12pt" }}>Swing states</b>
          <img
            src="./change-states.png"
            className="legend"
            alt="Legend"
            style={{ width: "200px" }}
          />
        </div>
        <p>
          The size of each arrow corresponds to the change in votes in favor of
          the party with the most change.
        </p>
        <div className="legendElement">
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

export default SwingLegend;
