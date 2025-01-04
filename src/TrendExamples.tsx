import "./App.css";

import "@esri/calcite-components/dist/components/calcite-block";
import "@esri/calcite-components/dist/components/calcite-carousel";
import "@esri/calcite-components/dist/components/calcite-carousel-item";

import {
  CalciteBlock,
  CalciteCarousel,
  CalciteCarouselItem,
} from "@esri/calcite-components-react";

function TrendExamples() {
  return (
    <>
      <CalciteBlock heading="Examples" open collapsible>
        <CalciteCarousel label="Examples">
          <CalciteCarouselItem label="Gradual change">
            <div className="custom-content">
              <img
                className="examples"
                src="./gradual-d.png"
                alt="Gradual change"
              />
              <span>
                <b>Gradual change</b>. This example from Douglas County, Georgia
                shows a gradual swing from Republican support to Democrats over
                the last 5 elections. Voters showed strong support for Bush (R)
                in 2004. In 2008, the county leaned Democrat, and gradually
                increased support for Democrats in 2012, 2016, and 2020.
              </span>
            </div>
          </CalciteCarouselItem>
          <CalciteCarouselItem label="Bowtie">
            <div className="custom-content">
              <img className="examples" src="./flip.png" alt="Bowtie" />
              <span>
                <b>Bowtie</b>. In rare scenarios, some counties underwent a
                dramatic shift in support from one party to another. Anne
                Arundel County, Maryland went from strong Republican support in
                2004 to strong Democrat support in 2020, creating a bowtie shape
                in the symbol.
              </span>
            </div>
          </CalciteCarouselItem>
          <CalciteCarouselItem label="No change">
            <div className="custom-content">
              <img className="examples" src="./solid-r.png" alt="No change" />
              <span>
                <b>No change.</b> The populations of many areas are consistent
                in their support for one party over another. Shelby County,
                Alabama is an example of a county that has shown strong
                Republican support in each of the last 5 elections, posting
                margins of victory exceeding 40% in each of the previous 5
                elections.
              </span>
            </div>
          </CalciteCarouselItem>
          <CalciteCarouselItem label="Inconsistent">
            <div className="custom-content">
              <img className="examples" src="./contested.png" alt="Contested" />
              <span>
                <b>Contested</b>. A few areas, especially in traditional swing
                states, have shown inconsistent support for either party over
                the last 5 elections. For example, Macomb County, Michigan
                showed strong support for Obama (D) in 2008 and 2012, but
                otherwise sided with Republicans in other elections.
              </span>
            </div>
          </CalciteCarouselItem>
        </CalciteCarousel>
      </CalciteBlock>
    </>
  );
}

export default TrendExamples;
