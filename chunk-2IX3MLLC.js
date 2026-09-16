// apps/concierge/src/app/ui/zone-persistence.ts
var PREFIX = "PLACEOS.concierge.zones";
function loadPersistedZones(view, scope_id) {
  if (!scope_id)
    return [];
  try {
    const raw = localStorage.getItem(`${PREFIX}.${view}.${scope_id}`);
    const value = JSON.parse(raw || "[]");
    return Array.isArray(value) ? value.filter((_) => typeof _ === "string") : [];
  } catch {
    return [];
  }
}
function persistZones(view, scope_id, zones = []) {
  if (!scope_id)
    return;
  try {
    localStorage.setItem(`${PREFIX}.${view}.${scope_id}`, JSON.stringify(zones));
  } catch {
  }
}

export {
  loadPersistedZones,
  persistZones
};
//# debugId=95162cb6-764e-5e7d-8ba5-f140077ee8c8
//# sourceMappingURL=chunk-2IX3MLLC.js.map
