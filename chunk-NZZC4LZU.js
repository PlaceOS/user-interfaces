// apps/concierge/src/app/visitors/visitor-flags.ts
var FLAG_SETTINGS = {
  international: [
    "app.visitors.allow_international",
    "app.events.allow_international"
  ],
  visitor_internal_or_external: [
    "app.visitors.allow_visitor_internal_or_external",
    "app.events.allow_attendee_internal_or_external"
  ]
};
function showVisitorFlag(settings, bookings, flag) {
  if (FLAG_SETTINGS[flag].some((key) => !!settings.get(key)))
    return true;
  return (bookings || []).some((booking) => flag === "international" ? !!booking.extension_data?.international : booking.extension_data?.visitor_internal_or_external === "external");
}

export {
  showVisitorFlag
};
//# debugId=940517d4-914a-5e9b-bf3e-2cd558015c38
//# sourceMappingURL=chunk-NZZC4LZU.js.map
