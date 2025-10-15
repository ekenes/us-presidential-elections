import "../App.css";

import "@esri/calcite-components/dist/components/calcite-block";
import "@esri/calcite-components/dist/components/calcite-carousel";
import "@esri/calcite-components/dist/components/calcite-carousel-item";

import {
  CalciteBlock,
  CalciteCarousel,
  CalciteCarouselItem,
} from "@esri/calcite-components-react";

function ChangeExamples() {
  return (
    <>
      <CalciteBlock heading="Examples" collapsible>
        The following examples all represent change in presidential voting
        patterns from 2004 to 2024 in <b>Utah County, Utah</b>.
        <CalciteCarousel label="Examples">
          <CalciteCarouselItem label="Gradual change">
            <div className="custom-content">
              <img
                className="examples"
                src="./change-ut-2004.png"
                alt="Gradual change"
              />
              <span>
                <b>2004</b>. Strong increase in Republican support.
              </span>
            </div>
          </CalciteCarouselItem>
          <CalciteCarouselItem label="Bowtie">
            <div className="custom-content">
              <img
                className="examples"
                src="./change-ut-2008.png"
                alt="Bowtie"
              />
              <span>
                <b>2008</b>. Strong increase in Democratic support. Moderate
                increase for support for third party candidates.
              </span>
            </div>
          </CalciteCarouselItem>
          <CalciteCarouselItem label="No change">
            <div className="custom-content">
              <img
                className="examples"
                src="./change-ut-2012.png"
                alt="No change"
              />
              <span>
                <b>2012</b>. Strong increase in Republican support.
              </span>
            </div>
          </CalciteCarouselItem>
          <CalciteCarouselItem label="Inconsistent">
            <div className="custom-content">
              <img
                className="examples"
                src="./change-ut-2016.png"
                alt="Contested"
              />
              <span>
                <b>2016</b>. Strong increase in support for third party
                candidates. Moderate increase in Democratic support. Very strong
                decrease in Republican support.
              </span>
            </div>
          </CalciteCarouselItem>
          <CalciteCarouselItem label="Inconsistent">
            <div className="custom-content">
              <img
                className="examples"
                src="./change-ut-2020.png"
                alt="Contested"
              />
              <span>
                <b>2020</b>. Strong increase in support for both Republicans and
                Democrats.
              </span>
            </div>
          </CalciteCarouselItem>
          <CalciteCarouselItem label="Inconsistent">
            <div className="custom-content">
              <img
                className="examples"
                src="./change-ut-2024.png"
                alt="Contested"
              />
              <span>
                <b>2024</b>. Marginal increase in support for both Republicans
                and Democrats.
              </span>
            </div>
          </CalciteCarouselItem>
        </CalciteCarousel>
      </CalciteBlock>
    </>
  );
}

export default ChangeExamples;
