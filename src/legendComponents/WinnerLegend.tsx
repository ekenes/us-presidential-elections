import "../App.css";

import "@esri/calcite-components/dist/components/calcite-block";
import { CalciteBlock } from "@esri/calcite-components-react";

function WinnerLegend() {
  return (
    <>
      <CalciteBlock heading="Legend" collapsible expanded>
        <p>
          This map shows the winner of the election on the state and county
          level.
        </p>
        <div className="legendElement">
          <img src="../legend-winner.png" className="legend" alt="Legend" />
        </div>
      </CalciteBlock>
    </>
  );
}

export default WinnerLegend;
