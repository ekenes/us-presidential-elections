import { createPopupTemplate } from "./popupUtils";
import { createRenderer } from "./changeRenderer";
import { createLabelingInfo } from "./labelingUtils";

interface ChangeConfigParams {
  level: "county" | "state";
  year: number;
}

export const createChangeConfig = (params: ChangeConfigParams) => {
  return {
    popupTemplate: createPopupTemplate(params),
    renderer: createRenderer(params),
    labelingInfo: createLabelingInfo(params),
  };
};
