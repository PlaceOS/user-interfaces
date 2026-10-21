import {
  CalendarEvent,
  User
} from "./chunk-6LLBH4AH.js";
import {
  computed
} from "./chunk-EOGESHX7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/events/src/lib/utilities.ts
function multipleSpacesEnabled(settings) {
  return settings.get("app.events.multiple_spaces") === true || settings.get("app.events.allow_multiple_spaces") === true;
}
function multipleSpacesSignal(settings) {
  const current = settings.signal("events.multiple_spaces", false);
  const legacy = settings.signal("events.allow_multiple_spaces", false);
  return computed(() => current() || legacy());
}
function organiserTimezone(user) {
  const details = user?.extension_data;
  const timezone = details?.timezone || details?.time_zone;
  return typeof timezone === "string" ? timezone : "";
}
function newCalendarEventFromBooking(booking) {
  let attendees = [
    {
      id: booking.user_id,
      name: booking.user_name,
      email: booking.user_email,
      organizer: true
    }
  ];
  if (booking.booking_type === "visitor") {
    attendees.push(new User({
      name: booking.asset_name || booking.description,
      email: booking.asset_id,
      checked_in: booking.checked_in
    }));
  }
  attendees = attendees.concat(booking.attendees);
  return new CalendarEvent(__spreadProps(__spreadValues(__spreadValues({}, booking), booking.extension_data), {
    attendees,
    id: booking.id || booking.extension_data.id,
    host: booking.user_email,
    from_bookings: true
  }));
}

export {
  multipleSpacesEnabled,
  multipleSpacesSignal,
  organiserTimezone,
  newCalendarEventFromBooking
};
//# debugId=3139e981-14b7-55b4-b7af-bebe2bbe582c
//# sourceMappingURL=chunk-FY2MAOBW.js.map
