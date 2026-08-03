import {
  setMinutes
} from "./chunk-6R6IE7JC.js";
import {
  setHours
} from "./chunk-PBGGB7FC.js";
import {
  CalendarEvent,
  LOCAL_TIMEZONE,
  User,
  add,
  addMinutes,
  currentUser,
  disabled,
  form,
  guardModelUndefinedWrites,
  isAfter,
  onFieldChange,
  required,
  setupFormTimeSync,
  signal,
  startOfDay,
  validate
} from "./chunk-6LESRWXV.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/events/src/lib/utilities.ts
var BOOKING_DATE = add(setMinutes(setHours(/* @__PURE__ */ new Date(), 6), 0), { days: -1 });
function eventFormValue(event = new CalendarEvent()) {
  return {
    id: event.id || "",
    ical_uid: event.ical_uid || "",
    host: event.host || event.organiser?.email || currentUser()?.email || "",
    organiser: event.organiser || { email: event.host || "" },
    creator: event.creator || currentUser()?.email || "",
    calendar: event.calendar || "",
    attendees: event.attendees || [],
    resources: event.resources || [],
    title: event.title || "",
    body: event.body || "",
    private: event.private ?? false,
    date: event.date ?? 0,
    duration: event.duration ?? 0,
    all_day: event.all_day ?? false,
    date_end: event.date_end ?? 0,
    recurring: event.recurring ?? false,
    recurrence: event.recurrence ?? null,
    recurring_event_id: event.recurring_event_id || "",
    master: event.master ?? null,
    attachments: event.attachments ?? null,
    catering: event.extension_data?.catering || [],
    catering_notes: event.extension_data?.catering?.[0]?.notes || "",
    catering_charge_code: event.extension_data?.catering?.[0]?.charge_code || "",
    setup_time: event.setup_time || 0,
    breakdown_time: event.breakdown_time || 0,
    assets: event.extension_data?.assets || [],
    visitor_type: event.extension_data?.visitor_type ?? null,
    location: event.location || "",
    visibility: event.visibility || "normal",
    needs_space: true,
    needs_parking: event.extension_data?.needs_parking || false,
    event_type: event.extension_data?.event_type || "",
    category: event.extension_data?.category || "",
    tags: event.extension_data?.tags || [],
    update_master: false,
    system: event.system ?? null,
    attendance_type: event.extension_data?.attendance_type || "ONSITE",
    timezone: event.timezone || LOCAL_TIMEZONE,
    shared_event: event.extension_data?.shared_event || false,
    view_access: event.extension_data?.view_access || "OPEN",
    images: event.extension_data?.images || [],
    featured: event.extension_data?.featured || false,
    meeting_provider: event.meeting_provider || null
  };
}
function generateEventForm(event = new CalendarEvent(), settings, injector) {
  if (!event)
    event = new CalendarEvent();
  const lock_start_time = signal(
    !!event.id && (event.state === "started" || event.state === "in_progress"),
    ...ngDevMode ? [{ debugName: "lock_start_time" }] : (
      /* istanbul ignore next */
      []
    )
  );
  const has_id = !!event.id;
  const notes_required = () => !!(settings?.get("app.events.catering_notes_required") || settings?.value("require_catering_notes"));
  const model = signal(
    eventFormValue(event),
    ...ngDevMode ? [{ debugName: "model" }] : (
      /* istanbul ignore next */
      []
    )
  );
  guardModelUndefinedWrites(model, eventFormValue(new CalendarEvent()));
  const event_form = form(model, (p) => {
    required(p.host);
    required(p.date);
    validate(p.duration, ({ value, valueOf }) => {
      const date = valueOf(p.date);
      return date && isAfter(Date.now(), addMinutes(date, value())) ? { kind: "duration" } : void 0;
    });
    required(p.catering_notes, {
      when: ({ valueOf }) => !!valueOf(p.catering)?.length && notes_required()
    });
    disabled(p.host, { when: () => has_id });
    disabled(p.organiser, { when: () => has_id });
    disabled(p.date, { when: () => lock_start_time() });
    disabled(p.assets, { when: ({ valueOf }) => !valueOf(p.resources)?.length });
    disabled(p.duration, { when: ({ valueOf }) => !!valueOf(p.all_day) });
  }, { injector });
  onFieldChange(model, (v) => v.organiser, (organiser) => (
    // Coalesce to '' so the `host` sub-field is never removed from the
    // FieldTree (an undefined value breaks its `required`/`[formField]`).
    model.update((m) => __spreadProps(__spreadValues({}, m), { host: organiser?.email ?? "" }))
  ), injector);
  onFieldChange(model, (v) => v.resources, (resources) => model.update((m) => __spreadProps(__spreadValues({}, m), {
    system: resources?.length ? resources[0] : null
  })), injector);
  onFieldChange(model, (v) => v.date, (date) => {
    const recurrence = model().recurrence;
    if (recurrence?._pattern !== "custom_display" && recurrence?._pattern !== "none") {
      model.update((m) => __spreadProps(__spreadValues({}, m), {
        recurrence: __spreadProps(__spreadValues({}, m.recurrence), {
          days_of_week: [new Date(date).getDay()]
        })
      }));
    }
  }, injector);
  const setCateringTime = () => {
    const value = model();
    if (!value.catering?.length || !value.date)
      return;
    const event2 = {
      date: value.all_day ? startOfDay(value.date) : value.date,
      duration: value.all_day ? 24 * 60 : value.duration
    };
    if (value.catering.every((order) => +order.event?.date === +event2.date && order.event?.duration === event2.duration))
      return;
    model.update((m) => __spreadProps(__spreadValues({}, m), {
      catering: (m.catering || []).map((order) => __spreadProps(__spreadValues({}, order), {
        event: event2
      }))
    }));
  };
  onFieldChange(model, (v) => v.catering, setCateringTime, injector);
  const time_sync = setupFormTimeSync(model, { on_time_change: setCateringTime }, injector);
  return { model, form: event_form, time_sync, lock_start_time };
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
  eventFormValue,
  generateEventForm,
  newCalendarEventFromBooking
};
//# sourceMappingURL=chunk-PCWQVEQ7.js.map
