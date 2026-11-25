import {
  isJsonRecord
} from "./chunk-IUIJMQP6.js";
import {
  metadata_exports,
  orThrow
} from "./chunk-BSTBRHVR.js";
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
//# debugId=52a1a838-be2e-5701-995d-51b632a18e5e
//# sourceMappingURL=chunk-T5KXXOIR.js.map
