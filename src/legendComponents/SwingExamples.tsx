import "../App.css";

import "@esri/calcite-components/dist/components/calcite-block";
import "@esri/calcite-components/dist/components/calcite-carousel";
import "@esri/calcite-components/dist/components/calcite-carousel-item";

import {
  CalciteBlock,
  CalciteCarousel,
  CalciteCarouselItem,
} from "@esri/calcite-components-react";

function SwingExamples() {
  return (
    <>
      <CalciteBlock heading="Examples" collapsible>
        <CalciteCarousel label="Examples">
          <CalciteCarouselItem label="Slight Democratic swing">
            <div className="custom-content">
              <img
                className="examples"
                src="./swing-slight-dem.png"
                alt="Slight Democratic swing"
                style={{ width: "400px" }}
              />
              <span>
                <b>Slight Democratic swing</b>. In 2020, many counties in
                Michigan shifted slightly toward the Democratic candidate
                compared to 2016. The aggregation of these small shifts resulted
                in flipping the state from Republican to Democratic in 2020.
              </span>
            </div>
          </CalciteCarouselItem>
          <CalciteCarouselItem label="Dramatic Republican swing">
            <div className="custom-content">
              <img
                className="examples"
                src="./swing-strong-r.png"
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
          <CalciteCarouselItem label="Dramatic third party swing">
            <div className="custom-content">
              <img
                className="examples"
                src="./swing-strong-other.png"
                alt="Dramatic third party swing"
                style={{ width: "400px" }}
              />
              <span>
                <b>Dramatic third party swing</b>. In rare cases, third party
                candidates have performed very well in certain areas, resulting
                in lackluster support for one or both major parties. In 2016,
                many rural counties in the west dramatically favored third party
                candidates over Democrats.
              </span>
            </div>
          </CalciteCarouselItem>
          <CalciteCarouselItem label="Dramatic swings both directions">
            <div className="custom-content">
              <img
                className="examples"
                src="./swing-both.png"
                alt="Dramatic swings both directions"
                style={{ width: "400px" }}
              />
              <span>
                <b>Dramatic swings both directions</b>. For the most part,
                counties tend to support the same party from one election to the
                next. In elections that come after an election with a strong
                third party candidate, or weak voter turnout, rural counties can
                show dramatic swings of support back to their traditional
                alliances.
              </span>
            </div>
          </CalciteCarouselItem>
        </CalciteCarousel>
      </CalciteBlock>
    </>
  );
}

export default SwingExamples;
