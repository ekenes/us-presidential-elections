import { createPopupTemplate } from "./popupUtils";
import { createRenderer } from "./changeRenderer";
import { createChangeLabelingInfo } from "./labelingUtils";

interface ChangeConfigParams {
  level: "county" | "state";
  year: number;
}

export const createChangeConfig = (params: ChangeConfigParams) => {
  return {
    popupTemplate: createPopupTemplate(params),
    renderer: createRenderer(params),
    labelingInfo: createChangeLabelingInfo(params),
  };
};
