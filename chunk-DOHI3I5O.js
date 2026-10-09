import {
  Ds,
  br,
  vr
} from "./chunk-UY3BZCXJ.js";
import {
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// apps/signage-manager/src/app/signage-template-mapping.ts
var HydratedSignageTemplate = class extends br {
  constructor(data = {}) {
    super(data);
    this.background_media = data.background_media ? new Ds(data.background_media) : null;
  }
};
var HydratedSignageTemplateMapping = class extends vr {
  constructor(data = {}) {
    super(data);
    this.template_details = new HydratedSignageTemplate(__spreadValues({
      id: data.template_id
    }, data.template_details));
  }
};

export {
  HydratedSignageTemplate,
  HydratedSignageTemplateMapping
};
//# debugId=307e0865-460b-50f8-9c87-6522efa7cb50
//# sourceMappingURL=chunk-DOHI3I5O.js.map
