import "../App.css";

import "@esri/calcite-components/dist/components/calcite-block";
import "@esri/calcite-components/dist/components/calcite-carousel";
import "@esri/calcite-components/dist/components/calcite-carousel-item";

function LeanExamples() {
  return (
    <>
      <calcite-block heading="Examples" collapsible>
        <calcite-carousel label="Examples">
          <calcite-carousel-item label="Left Coast">
            <div className="custom-content">
              <img
                className="examples"
                src="./legend-lean-left.png"
                alt="Left Coast"
                style={{ width: "400px" }}
              />
              <span>
                <b>Left Coast</b>. Many counties on the west coast of the United
                States (Washington, Oregon, California), including those
                surrounding the San Francisco Bay Area, tend to show strong
                Democratic support in high population areas. While a state may
                have more counties that predominantly support Republicans, the
                fewer, more populous Democratic-leaning counties often drive the
                overall state result in presidential elections due to the
                significant size of their population. These areas are depicted
                on the map as large left-leaning blue arrows.
              </span>
            </div>
          </calcite-carousel-item>
          <calcite-carousel-item label="Conservative Heartland">
            <div className="custom-content">
              <img
                className="examples"
                src="./legend-lean-right.png"
                alt="Conservative Heartland"
                style={{ width: "400px" }}
              />
              <span>
                <b>Conservative Heartland</b>. Most rural counties in the
                Midwest tend to show strong Republican support in presidential
                elections. While the vast majority of these counties have a
                small population, the aggregation of them often results in a
                significant electoral impact for Republicans. These areas are
                depicted on the map as small red arrows pointing nearly all the
                way to the right.
              </span>
            </div>
          </calcite-carousel-item>
          <calcite-carousel-item label="Battleground areas">
            <div className="custom-content">
              <img
                className="examples"
                src="./legend-lean-middle.png"
                alt="Battleground areas"
                style={{ width: "400px" }}
              />
              <span>
                <b>Battleground areas</b>. Some counties in battleground states
                (such as Iowa in 2008 and 2012) tend to show fairly even support
                for both major parties, resulting in a slight lean toward one
                party or another. This often results in very narrow wins on the
                state level, which have dramatic impact on the overall electoral
                outcome. These areas are depicted on the map as small or large
                arrows pointing nearly straight up.
              </span>
            </div>
          </calcite-carousel-item>
        </calcite-carousel>
      </calcite-block>
    </>
  );
}

export default LeanExamples;
