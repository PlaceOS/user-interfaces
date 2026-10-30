// libs/common/src/lib/timezones.ts
var FIXED_OFFSET_ZONES = [
  ...Array.from({ length: 12 }, (_, i) => `Etc/GMT+${i + 1}`),
  ...Array.from({ length: 14 }, (_, i) => `Etc/GMT-${i + 1}`)
];
function supportedTimezones() {
  const list = Intl.supportedValuesOf?.("timeZone") || [
    Intl.DateTimeFormat().resolvedOptions().timeZone
  ];
  return [
    .../* @__PURE__ */ new Set(["UTC", ...list.filter(Boolean), ...FIXED_OFFSET_ZONES])
  ].sort();
}
var TIMEZONES_IANA = supportedTimezones();

export {
  TIMEZONES_IANA
};
//# debugId=489dd109-70a7-54a9-bae9-0261e2b29f4c
//# sourceMappingURL=chunk-RDAV7Z33.js.map
