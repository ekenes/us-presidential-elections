import { validYears } from "../config";
import { createPopupTemplate } from "./popupUtils";
import { createRenderer } from "./trendRenderer";

interface TrendConfigParams {
  level: "county" | "state";
  year: validYears;
}

export const createTrendConfig = (params: TrendConfigParams) => {
  return {
    popupTemplate: createPopupTemplate(params),
    renderer: createRenderer(params),
  };
};
