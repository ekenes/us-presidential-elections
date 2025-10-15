import "../App.css";

import "@esri/calcite-components/dist/components/calcite-block";
import { CalciteBlock } from "@esri/calcite-components-react";

function ChangeLegend() {
  return (
    <>
      <CalciteBlock heading="Legend" collapsible open>
        <p>
          This map shows the change in votes for each party compared to the
          previous presidential election. The symbol is composed of three parts:
          a red circle for Republican change, a blue circle for Democratic
          change, and a yellow circle for third party change.
        </p>
        <div className="legendElement">
          <img
            src="../legend-change-parties.png"
            className="legend"
            alt="Legend"
            style={{ width: "300px" }}
          />
        </div>
        <p>
          Solid circles indicate an increase in votes for that party compared to
          the previous election. Hollow circles indicate a decrease in votes for
          that party compared to the previous election. The size of each circle
          indicates the magnitude of change, with larger circles indicating a
          larger change in votes.
        </p>
        <div className="legendElement">
          <img
            src="../legend-change.png"
            className="legend"
            alt="Legend"
            style={{ width: "180px" }}
          />
        </div>
      </CalciteBlock>
    </>
  );
}

export default ChangeLegend;
