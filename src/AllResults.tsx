import "./App.css";

import "@esri/calcite-components/dist/components/calcite-block";
import "@esri/calcite-components/dist/components/calcite-tab";
import "@esri/calcite-components/dist/components/calcite-tab-nav";
import "@esri/calcite-components/dist/components/calcite-tabs";
import "@esri/calcite-components/dist/components/calcite-tab-title";

import {
  CalciteBlock,
  CalciteTab,
  CalciteTabNav,
  CalciteTabs,
  CalciteTabTitle,
} from "@esri/calcite-components-react";


function AllResults() {
  return (
    <>
      <CalciteBlock heading="Historical results" open collapsible>
       <CalciteTabs>
        <CalciteTabNav slot="title-group">
          <CalciteTabTitle selected>
            Electoral Votes
          </CalciteTabTitle>
          <CalciteTabTitle>
            Popular Votes
          </CalciteTabTitle>
        </CalciteTabNav>
        <CalciteTab selected>
          content here
        </CalciteTab>
        <CalciteTab>
          content here
        </CalciteTab>
       </CalciteTabs>
      </CalciteBlock>
    </>
  );
}

export default AllResults;
