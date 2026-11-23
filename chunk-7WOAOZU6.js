import {
  isJsonRecord,
  metadata_exports,
  orThrow
} from "./chunk-PGIU34W2.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// apps/concierge/src/app/metadata.ts
async function showMetadata(id, name) {
  const item = (await metadata_exports.show({ id, name }).then(orThrow))[name];
  return __spreadProps(__spreadValues({
    name,
    description: "",
    parent_id: id,
    schema_id: null,
    editors: [],
    modified_by_id: null,
    updated_at: 0,
    created_at: 0
  }, item), {
    details: item?.details ?? {}
  });
}
function jsonRecord(details) {
  if (!isJsonRecord(details))
    return {};
  const record = details;
  return __spreadValues({}, record);
}

export {
  showMetadata,
  jsonRecord
};
//# debugId=bcfd15ec-27c8-528e-9245-8cfe253815e1
//# sourceMappingURL=chunk-7WOAOZU6.js.map
