import { createPopupTemplate } from "./popupUtils";
import { createRenderer } from "./trendRenderer";

interface TrendConfigParams {
  level: "county" | "state";
}

export const createTrendConfig = (params: TrendConfigParams) => {
  return {
    popupTemplate: createPopupTemplate(params),
    renderer: createRenderer(params),
  };
};
