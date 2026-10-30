import {
  Fs,
  Sr,
  kr
} from "./chunk-MIKPTNJX.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/signage-template-mapping.ts
var HydratedSignageTemplate = class extends kr {
  constructor(data = {}) {
    super(data);
    this.background_media = data.background_media ? new Fs(data.background_media) : null;
  }
};
var HydratedSignageTemplateMapping = class extends Sr {
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
//# sourceMappingURL=chunk-5NU4ORNT.js.map
