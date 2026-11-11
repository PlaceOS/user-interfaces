import {
  byDisplayName,
  decodeEntityNames
} from "./chunk-2LNHNEQI.js";

// apps/signage-manager/src/app/signage-service.util.ts
var PAGE_SIZE = 200;
var SEARCH_FIELDS = [
  "id",
  "name",
  "display_name",
  "description",
  "tags"
].join(",");
function searchParam(search) {
  const term = search.trim();
  return term ? { q: term, fields: SEARCH_FIELDS } : {};
}
async function queryAll(query, max_pages = 50) {
  const items = [];
  let page = await query;
  for (let count = 1; ; count++) {
    const data = page.data || [];
    items.push(...data);
    const next = data.length && count < max_pages ? page.next?.() : null;
    if (!next)
      break;
    page = await next;
  }
  return items.map(decodeEntityNames);
}
function mergeItems(list, overrides) {
  return (list || []).map((item) => overrides[item.id] || item).sort(byDisplayName);
}
function dialogClosed(ref) {
  return new Promise((resolve) => {
    const subscription = ref.afterClosed().subscribe((value) => {
      subscription.unsubscribe();
      resolve(value);
    });
  });
}

export {
  PAGE_SIZE,
  searchParam,
  queryAll,
  mergeItems,
  dialogClosed
};
//# debugId=cce887bf-4e70-5d2a-8f24-9d162cce5d4b
//# sourceMappingURL=chunk-TWYNJBM2.js.map
