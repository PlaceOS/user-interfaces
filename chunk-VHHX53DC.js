import {
  toVisitorInternalOrExternal
} from "./chunk-KTADYPHH.js";

// libs/bookings/src/lib/recent-visitors.ts
function cleanValue(value) {
  if (!value || value === "null" || value === "undefined")
    return "";
  return `${value}`.trim();
}
function normaliseVisitorEmail(value) {
  return cleanValue(value).replace(/^mailto:/i, "").replace(/[<>"']/g, "").toLowerCase();
}
function parseRecentVisitors(history) {
  const list = Array.isArray(history) ? history : [];
  const visitors = /* @__PURE__ */ new Map();
  for (let index = list.length - 1; index >= 0; index--) {
    const item = list[index];
    if (typeof item !== "string")
      continue;
    const [email, name, company, flag, phone, visitor_internal_or_external] = item.split("|");
    const key = normaliseVisitorEmail(email);
    if (!key || visitors.has(key))
      continue;
    const is_flag = !flag || flag === "0" || flag === "1";
    visitors.set(key, {
      email: key,
      name: cleanValue(name),
      company: cleanValue(company),
      phone: cleanValue(is_flag ? phone : flag),
      international: flag === "1",
      visitor_internal_or_external: toVisitorInternalOrExternal(visitor_internal_or_external)
    });
  }
  return [...visitors.values()];
}
function recentVisitorEntry(visitor) {
  return [
    visitor.email || "",
    visitor.name || "",
    visitor.company || "",
    visitor.international ? "1" : "0",
    visitor.phone || "",
    toVisitorInternalOrExternal(visitor.visitor_internal_or_external)
  ].join("|");
}

export {
  normaliseVisitorEmail,
  parseRecentVisitors,
  recentVisitorEntry
};
//# debugId=bb366494-addb-5e0c-99bb-a0d31f1bf1e5
//# sourceMappingURL=chunk-VHHX53DC.js.map
