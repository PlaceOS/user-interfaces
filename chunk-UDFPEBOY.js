import {
  setMinutes
} from "./chunk-57V4UMNL.js";
import {
  setHours
} from "./chunk-HSGD2UEF.js";
import {
  CalendarEvent,
  User,
  add
} from "./chunk-IRAOHI3N.js";
import {
  computed
} from "./chunk-WOMJJ4WU.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// libs/events/src/lib/utilities.ts
var BOOKING_DATE = add(setMinutes(setHours(/* @__PURE__ */ new Date(), 6), 0), { days: -1 });
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
//# debugId=fc373358-424b-51c6-953a-b04c4ec7449b
//# sourceMappingURL=chunk-UDFPEBOY.js.map
