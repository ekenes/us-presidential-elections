import "../App.css";

import "@esri/calcite-components/dist/components/calcite-block";

function SwingLegend() {
  return (
    <>
      <calcite-block heading="Legend" collapsible expanded>
        <p>
          This map shows the party that experienced the largest swing in support
          from the previous election in each state and county.
        </p>
        <p>
          States are shaded based on whether their electoral votes swung from
          one party to another from the previous election.
        </p>
        <div className="legendElement">
          <b style={{ fontSize: "12pt" }}>Swing states</b>
          <img
            src="./change-states.png"
            className="legend"
            alt="Legend"
            style={{ width: "200px" }}
          />
        </div>
        <p>Arrows indicate the direction and magnitude of the swing.</p>

        <div className="legendElement">
          <img
            src="./legend-swing.png"
            className="legend"
            alt="Legend"
            style={{ width: "300px" }}
          />
        </div>
        <ul>
          <li>
            Arrow <b>color</b> represents the party that experienced the largest
            swing in support.
          </li>
          <li>
            Arrow <b>orientation</b> indicates the magnitude of the swing.
          </li>
          <li>
            Arrow <b>size</b> corresponds to the change in votes in favor of the
            party with the most change.
          </li>
        </ul>

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
