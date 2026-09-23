import {
  gr,
  ws,
  yr
} from "./chunk-JL3PENQK.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/signage-template-mapping.ts
var HydratedSignageTemplate = class extends gr {
  constructor(data = {}) {
    super(data);
    this.background_media = data.background_media ? new ws(data.background_media) : null;
  }
};
var HydratedSignageTemplateMapping = class extends yr {
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
//# sourceMappingURL=chunk-HX6H4TOY.js.map
