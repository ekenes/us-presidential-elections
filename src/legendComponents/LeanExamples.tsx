import "../App.css";

import "@esri/calcite-components/dist/components/calcite-block";
import "@esri/calcite-components/dist/components/calcite-carousel";
import "@esri/calcite-components/dist/components/calcite-carousel-item";

import {
  CalciteBlock,
  CalciteCarousel,
  CalciteCarouselItem,
} from "@esri/calcite-components-react";

function LeanExamples() {
  return (
    <>
      <CalciteBlock heading="Examples" collapsible>
        <CalciteCarousel label="Examples">
          <CalciteCarouselItem label="Slight Democratic swing">
            <div className="custom-content">
              <img
                className="examples"
                src="../swing-slight-dem.png"
                alt="Slight Democratic swing"
                style={{ width: "400px" }}
              />
              <span>
                <b>Slight lean</b>. In 2020, many counties in Michigan shifted
                slightly toward the Democratic candidate compared to 2016. The
                aggregation of these small shifts resulted in flipping the state
                from Republican to Democratic in 2020.
              </span>
            </div>
          </CalciteCarouselItem>
          <CalciteCarouselItem label="Dramatic Republican swing">
            <div className="custom-content">
              <img
                className="examples"
                src="../swing-strong-r.png"
                alt="Dramatic Republican swing"
                style={{ width: "400px" }}
              />
              <span>
                <b>Dramatic Republican swing</b>. Many rural counties in the
                midwest tend to have dramatic swings toward Republican support
                when an incumbent Democratic president (who performed well in
                those same counties) is running for re-election.
              </span>
            </div>
          </CalciteCarouselItem>
          <CalciteCarouselItem label="Dramatic Republican swing">
            <div className="custom-content">
              <img
                className="examples"
                src="../swing-strong-r.png"
                alt="Dramatic Republican swing"
                style={{ width: "400px" }}
              />
              <span>
                <b>Dramatic Republican swing</b>. Many rural counties in the
                midwest tend to have dramatic swings toward Republican support
                when an incumbent Democratic president (who performed well in
                those same counties) is running for re-election.
              </span>
            </div>
          </CalciteCarouselItem>
        </CalciteCarousel>
      </CalciteBlock>
    </>
  );
}

export default LeanExamples;
