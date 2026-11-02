// libs/common/src/lib/timezones.ts
var FIXED_OFFSET_ZONES = [
  ...Array.from({ length: 12 }, (_, i) => `Etc/GMT+${i + 1}`),
  ...Array.from({ length: 14 }, (_, i) => `Etc/GMT-${i + 1}`)
];
var LEGACY_ZONE_NAMES = {
  "Africa/Asmera": "Africa/Asmara",
  "America/Buenos_Aires": "America/Argentina/Buenos_Aires",
  "America/Catamarca": "America/Argentina/Catamarca",
  "America/Coral_Harbour": "America/Atikokan",
  "America/Cordoba": "America/Argentina/Cordoba",
  "America/Godthab": "America/Nuuk",
  "America/Indianapolis": "America/Indiana/Indianapolis",
  "America/Jujuy": "America/Argentina/Jujuy",
  "America/Louisville": "America/Kentucky/Louisville",
  "America/Mendoza": "America/Argentina/Mendoza",
  "Asia/Calcutta": "Asia/Kolkata",
  "Asia/Katmandu": "Asia/Kathmandu",
  "Asia/Rangoon": "Asia/Yangon",
  "Asia/Saigon": "Asia/Ho_Chi_Minh",
  "Atlantic/Faeroe": "Atlantic/Faroe",
  "Europe/Kiev": "Europe/Kyiv",
  "Pacific/Enderbury": "Pacific/Kanton",
  "Pacific/Ponape": "Pacific/Pohnpei",
  "Pacific/Truk": "Pacific/Chuuk"
};
function supportedTimezones() {
  const list = Intl.supportedValuesOf?.("timeZone") || [
    Intl.DateTimeFormat().resolvedOptions().timeZone
  ];
  return [
    .../* @__PURE__ */ new Set([
      "UTC",
      ...list.filter(Boolean).map((zone) => LEGACY_ZONE_NAMES[zone] ?? zone),
      ...FIXED_OFFSET_ZONES
    ])
  ].sort();
}
var TIMEZONES_IANA = supportedTimezones();

export {
  TIMEZONES_IANA
};
//# debugId=9b88bdf8-5538-5f20-96b1-f03f305a6f1c
//# sourceMappingURL=chunk-XW7WRNUP.js.map
