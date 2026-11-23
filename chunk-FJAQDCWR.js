import {
  Booking,
  CallFailed,
  CateringItem,
  GuestUser,
  LocaleService,
  User,
  VERSION,
  addDays,
  addMinutes,
  appDetails,
  array,
  boolean,
  call,
  checkRequest,
  cleanObject,
  currentUser,
  flatten,
  getUnixTime,
  integer,
  json,
  literal,
  nullable,
  object,
  operation,
  orThrow,
  orThrowPage,
  parameters,
  placeFetchJson,
  readAttendeeFlags,
  record,
  string,
  toQueryString,
  union,
  unique
} from "./chunk-3GW6SX46.js";
import {
  LiveAnnouncer
} from "./chunk-ZMX7GYSU.js";
import {
  DestroyRef,
  Directive,
  ElementRef,
  Injector,
  afterNextRender,
  inject,
  setClassMetadata,
  ɵɵdefineDirective
} from "./chunk-SQTB4YLR.js";
import {
  __export,
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// node_modules/date-fns/subDays.js
function subDays(date, amount, options) {
  return addDays(date, -amount, options);
}

// libs/components/src/lib/announce.directive.ts
var AnnounceDirective = class _AnnounceDirective {
  constructor() {
    const el = inject(ElementRef).nativeElement;
    const announcer = inject(LiveAnnouncer);
    const locale = inject(LocaleService);
    const injector = inject(Injector);
    const destroy_ref = inject(DestroyRef);
    let last_text = "";
    const announceText = () => {
      const text = el.textContent?.trim() ?? "";
      if (!text || text === last_text)
        return;
      last_text = text;
      announcer.announce(text, "polite");
    };
    afterNextRender(async () => {
      await locale.loaded();
      if (destroy_ref.destroyed)
        return;
      afterNextRender(announceText, { injector });
      const observer = new MutationObserver(announceText);
      observer.observe(el, {
        characterData: true,
        childList: true,
        subtree: true
      });
      destroy_ref.onDestroy(() => observer.disconnect());
    });
  }
  static {
    this.\u0275fac = function AnnounceDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AnnounceDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _AnnounceDirective, selectors: [["", "announce", ""]] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnnounceDirective, [{
    type: Directive,
    args: [{ selector: "[announce]" }]
  }], () => [], null);
})();

// libs/users/src/lib/guests.fn.ts
var GUEST_ENDPOINT = "/api/staff/v1/guests";
var get = (path) => placeFetchJson(path);
var patch = (path, body) => placeFetchJson(path, { method: "PATCH", body: JSON.stringify(body) });
async function searchGuests(q) {
  const query5 = toQueryString({ q });
  const list = await get(`${GUEST_ENDPOINT}${q ? "?" + query5 : ""}`);
  return list.map((item) => new GuestUser(item));
}
async function showGuest(id) {
  return new GuestUser(await get(`${GUEST_ENDPOINT}/${encodeURIComponent(id)}`));
}
async function getGuestCateringItem(email, booking_id = "") {
  const path = `${GUEST_ENDPOINT}/${encodeURIComponent(email)}/catering`;
  const query5 = booking_id ? `?booking_id=${encodeURIComponent(booking_id)}` : "";
  const item = await get(`${path}${query5}`);
  return item ? new CateringItem(item) : null;
}
async function setGuestCateringItem(email, catering_item, booking_id = "") {
  const path = `${GUEST_ENDPOINT}/${encodeURIComponent(email)}/catering`;
  const query5 = booking_id ? `?booking_id=${encodeURIComponent(booking_id)}` : "";
  const item = await patch(`${path}${query5}`, catering_item);
  return item ? new CateringItem(item) : null;
}

// node_modules/@placeos/ts-client/dist/generated/staff/schemas.js
var ControlSystemSchema = /* @__PURE__ */ object({
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  description: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  features: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  email: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  bookable: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  public: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  display_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  code: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  type: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  capacity: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  map_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  approval: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  images: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  security_groups: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  timezone: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  support_url: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  timetable_url: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  camera_snapshot_urls: /* @__PURE__ */ nullable(
    /* @__PURE__ */ array(/* @__PURE__ */ string())
  ),
  camera_url: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  room_booking_url: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  version: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  installed_ui_devices: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  zones: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  modules: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  orientation: /* @__PURE__ */ nullable(
    /* @__PURE__ */ literal(["unspecified", "landscape", "portrait", "square"])
  ),
  sign_height: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  sign_width: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  playlists: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  signage: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  /** Unix time in seconds. */
  signage_last_seen: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  playlist_item_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  space_config: /* @__PURE__ */ nullable(/* @__PURE__ */ record(/* @__PURE__ */ json())),
  remove_zones: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  add_zones: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  update_triggers: /* @__PURE__ */ boolean()
}, ["update_triggers"]);
var ControlSystem = ControlSystemSchema;
var EventMetadataPermissionSchema = /* @__PURE__ */ literal(["private", "open", "public"]);
var EventMetadataPermission = EventMetadataPermissionSchema;
var PlaceCalendarAttachmentSchema = /* @__PURE__ */ object({
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  name: /* @__PURE__ */ string(),
  content_type: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  content_bytes: /* @__PURE__ */ string(),
  size: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32"))
}, ["name", "content_bytes"]);
var PlaceCalendarAttachment = PlaceCalendarAttachmentSchema;
var PlaceCalendarEventAttendeeSchema = /* @__PURE__ */ object({
  name: /* @__PURE__ */ string(),
  email: /* @__PURE__ */ string(),
  response_status: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  resource: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  organizer: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  checked_in: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  visit_expected: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  extension_data: /* @__PURE__ */ nullable(/* @__PURE__ */ json()),
  preferred_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  phone: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  organisation: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  photo: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  notes: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  banned: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  dangerous: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean())
}, ["name", "email"]);
var PlaceCalendarEventAttendee = PlaceCalendarEventAttendeeSchema;
var PlaceCalendarEventSystemSchema = /* @__PURE__ */ object({
  id: /* @__PURE__ */ string()
}, ["id"]);
var PlaceCalendarEventSystem = PlaceCalendarEventSystemSchema;
var PlaceCalendarEventVisibilitySchema = /* @__PURE__ */ literal([
  "normal",
  "personal",
  "public",
  "private",
  "confidential"
]);
var PlaceCalendarEventVisibility = PlaceCalendarEventVisibilitySchema;
var PlaceCalendarRecurrenceSchema = /* @__PURE__ */ object({
  range_start: /* @__PURE__ */ integer(),
  range_end: /* @__PURE__ */ integer(),
  interval: /* @__PURE__ */ integer("Int32"),
  pattern: /* @__PURE__ */ string(),
  days_of_week: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string()))
}, ["range_start", "range_end", "interval", "pattern"]);
var PlaceCalendarRecurrence = PlaceCalendarRecurrenceSchema;
var PlaceCalendarEventSchema = /* @__PURE__ */ object({
  event_start: /* @__PURE__ */ integer(),
  /** Unix time in seconds. */
  event_end: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  recurring_event_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  host: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  title: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  body: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  attendees: /* @__PURE__ */ array(PlaceCalendarEventAttendee),
  hide_attendees: /* @__PURE__ */ boolean(),
  location: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  private: /* @__PURE__ */ boolean(),
  all_day: /* @__PURE__ */ boolean(),
  timezone: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  recurring: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  created: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  updated: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  attachments: /* @__PURE__ */ array(PlaceCalendarAttachment),
  recurrence: /* @__PURE__ */ nullable(PlaceCalendarRecurrence),
  status: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  creator: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  ical_uid: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  online_meeting_provider: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  online_meeting_phones: /* @__PURE__ */ nullable(
    /* @__PURE__ */ array(/* @__PURE__ */ string())
  ),
  online_meeting_url: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  online_meeting_sip: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  online_meeting_pin: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  online_meeting_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  extended_properties: /* @__PURE__ */ nullable(
    /* @__PURE__ */ record(/* @__PURE__ */ nullable(/* @__PURE__ */ string()))
  ),
  visibility: /* @__PURE__ */ nullable(PlaceCalendarEventVisibility),
  mailbox: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  calendar: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  system_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  system: /* @__PURE__ */ nullable(
    /* @__PURE__ */ union([PlaceCalendarEventSystem, ControlSystem])
  ),
  extension_data: /* @__PURE__ */ nullable(/* @__PURE__ */ json()),
  recurring_master_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  /** A list of `Booking`, as JSON, because the client schemas cannot refer to themselves. */
  linked_bookings: /* @__PURE__ */ json(),
  setup_time: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  breakdown_time: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  setup_event_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  breakdown_event_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  permission: /* @__PURE__ */ nullable(EventMetadataPermission)
}, ["event_start", "attendees", "hide_attendees", "private", "all_day", "attachments"]);
var PlaceCalendarEvent = PlaceCalendarEventSchema;
var AttendeeSchema = /* @__PURE__ */ object({
  checked_in: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  visit_expected: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  guest_id: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  tenant_id: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  event_id: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  booking_id: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  email: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  preferred_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  phone: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  organisation: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  notes: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  photo: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  event: /* @__PURE__ */ nullable(PlaceCalendarEvent),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer())
});
var Attendee = AttendeeSchema;
var BookingStateSchema = /* @__PURE__ */ literal([
  "reserved",
  "checked_in",
  "checked_out",
  "no_show",
  "rejected",
  "cancelled",
  "ended",
  "unknown"
]);
var BookingState = BookingStateSchema;
var BookingHistorySchema = /* @__PURE__ */ object({
  state: BookingState,
  time: /* @__PURE__ */ integer(),
  source: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
}, ["state", "time"]);
var BookingHistory = BookingHistorySchema;
var EventMetadataSchema = /* @__PURE__ */ object({
  system_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  event_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  recurring_master_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  ical_uid: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  resource_master_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  host_email: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  resource_calendar: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  event_start: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  event_end: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  cancelled: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  ext_data: /* @__PURE__ */ nullable(/* @__PURE__ */ json()),
  setup_time: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  breakdown_time: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  setup_event_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  breakdown_event_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  /**
   * The permission level for the event. Defaults to private. If set to private, attendees must be
   * invited.If set to open, users in the same tenant can join. If set to public, the event is
   * open for everyone to join.
   */
  permission: /* @__PURE__ */ nullable(/* @__PURE__ */ literal(["private", "open", "public"])),
  tenant_id: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** A list of `Booking`, as JSON, because the client schemas cannot refer to themselves. */
  linked_bookings: /* @__PURE__ */ json(),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer())
});
var EventMetadata = EventMetadataSchema;
var GuestSchema = /* @__PURE__ */ object({
  email: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  preferred_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  phone: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  organisation: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  notes: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  photo: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  banned: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  dangerous: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  searchable: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  extension_data: /* @__PURE__ */ nullable(/* @__PURE__ */ json()),
  checked_in: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  visit_expected: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  /** A `Booking`, as JSON, because the client schemas cannot refer to themselves. */
  booking: /* @__PURE__ */ json(),
  event: /* @__PURE__ */ nullable(PlaceCalendarEvent),
  event_metadata: /* @__PURE__ */ nullable(/* @__PURE__ */ json()),
  tenant_id: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer())
});
var Guest = GuestSchema;
var BookingSchema = /* @__PURE__ */ object({
  booking_type: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  booking_start: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  booking_end: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  timezone: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  asset_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  user_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  user_email: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  user_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  zones: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  process_state: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  last_changed: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  approved: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  approved_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  rejected: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  rejected_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  approver_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  approver_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  approver_email: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  department: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  title: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  checked_in: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  checked_in_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  checked_out_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  description: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  deleted: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  deleted_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  booked_by_email: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  booked_by_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  booked_from: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  extension_data: /* @__PURE__ */ nullable(/* @__PURE__ */ json()),
  history: /* @__PURE__ */ nullable(/* @__PURE__ */ array(BookingHistory)),
  email_digest: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  booked_by_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  booked_by_email_digest: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  created: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  parent_id: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** provided if this booking is associated with a calendar event */
  event_id: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** provided when this booking is an instance of recurring booking */
  instance: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  linked_event: /* @__PURE__ */ nullable(EventMetadata),
  /** A list of `Booking`, as JSON, because the client schemas cannot refer to themselves. */
  linked_bookings: /* @__PURE__ */ json(),
  /** A `Booking`, as JSON, because the client schemas cannot refer to themselves. */
  linked_parent_booking: /* @__PURE__ */ json(),
  attendees: /* @__PURE__ */ union([
    /* @__PURE__ */ nullable(/* @__PURE__ */ array(PlaceCalendarEventAttendee)),
    /* @__PURE__ */ nullable(/* @__PURE__ */ array(Attendee))
  ]),
  current_state: /* @__PURE__ */ nullable(BookingState),
  asset_ids: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  images: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  /** The induction status of the booking. Defaults to TENTATIVE. */
  induction: /* @__PURE__ */ nullable(
    /* @__PURE__ */ literal(["tentative", "accepted", "declined"])
  ),
  /**
   * The permission level for the booking. Defaults to private. If set to private, attendees must
   * be invited.If set to open, users in the same tenant can join. If set to public, the booking
   * is open for everyone to join.
   */
  permission: /* @__PURE__ */ nullable(/* @__PURE__ */ literal(["private", "open", "public"])),
  /** Is this a recurring booking. This field defines the type of recurrence */
  recurrence_type: /* @__PURE__ */ nullable(
    /* @__PURE__ */ literal(["none", "daily", "weekly", "monthly"])
  ),
  /**
   * a bitmap of valid days of the week for booking recurrences to land on, defaults to all days
   * of the week
   */
  recurrence_days: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  /**
   * which day index should a monthly recurrence land on. 1st Monday, 2nd Monday (used in
   * conjunction with the days bitmap). -1 == last Monday, -2 Second last Monday etc
   */
  recurrence_nth_of_month: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  /** 1 == every occurrence, 2 == every second occurrence, etc */
  recurrence_interval: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
  /** an optional end date for booking recurrences */
  recurrence_end: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  all_day: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  tenant_id: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  guests: /* @__PURE__ */ nullable(/* @__PURE__ */ array(Guest)),
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
  /** Unix time in seconds. */
  updated_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer())
});
var Booking2 = BookingSchema;
var BookingInductionSchema = /* @__PURE__ */ literal(["tentative", "accepted", "declined"]);
var BookingInduction = BookingInductionSchema;
var PlaceCalendarAvailabilityStatusSchema = /* @__PURE__ */ literal(["busy", "free"]);
var PlaceCalendarAvailabilityStatus = PlaceCalendarAvailabilityStatusSchema;
var PlaceCalendarAvailabilitySchema = /* @__PURE__ */ object({
  status: PlaceCalendarAvailabilityStatus,
  starts_at: /* @__PURE__ */ integer(),
  ends_at: /* @__PURE__ */ integer(),
  timezone: /* @__PURE__ */ string()
}, ["status", "starts_at", "ends_at", "timezone"]);
var PlaceCalendarAvailability = PlaceCalendarAvailabilitySchema;
var CalendarsAvailabilitySchema = /* @__PURE__ */ object({
  id: /* @__PURE__ */ string(),
  system: /* @__PURE__ */ nullable(ControlSystem),
  availability: /* @__PURE__ */ nullable(/* @__PURE__ */ array(PlaceCalendarAvailability))
}, ["id"]);
var CalendarsAvailability = CalendarsAvailabilitySchema;
var EventsChangeTypeSchema = /* @__PURE__ */ literal(["created", "updated", "deleted"]);
var EventsChangeType = EventsChangeTypeSchema;
var EventsStrictSchema = /* @__PURE__ */ literal(["notify", "limit", "all"]);
var EventsStrict = EventsStrictSchema;
var HistorySchema = /* @__PURE__ */ object({
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  resource_type: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  resource_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  correlation_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  action: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  changed_fields: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
  diff: /* @__PURE__ */ nullable(/* @__PURE__ */ json()),
  snapshot: /* @__PURE__ */ nullable(/* @__PURE__ */ json()),
  user_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  user_email: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  context: /* @__PURE__ */ nullable(/* @__PURE__ */ json()),
  /** Unix time in seconds. */
  created_at: /* @__PURE__ */ nullable(/* @__PURE__ */ integer())
});
var History = HistorySchema;
var PlaceCalendarCalendarSchema = /* @__PURE__ */ object({
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  ref: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  summary: /* @__PURE__ */ string(),
  primary: /* @__PURE__ */ boolean(),
  can_edit: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean())
}, ["summary", "primary"]);
var PlaceCalendarCalendar = PlaceCalendarCalendarSchema;
var PlaceCalendarGroupSchema = /* @__PURE__ */ object({
  id: /* @__PURE__ */ string(),
  name: /* @__PURE__ */ string(),
  email: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  description: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
}, ["id", "name"]);
var PlaceCalendarGroup = PlaceCalendarGroupSchema;
var PlaceCalendarUserSchema = /* @__PURE__ */ object({
  id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  email: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  phone: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  department: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  title: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  photo: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  username: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  office_location: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
  suspended: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
  unmapped: /* @__PURE__ */ nullable(/* @__PURE__ */ record(/* @__PURE__ */ json()))
});
var PlaceCalendarUser = PlaceCalendarUserSchema;
var StaffBusySchema = /* @__PURE__ */ object({
  email: /* @__PURE__ */ string(),
  busy: /* @__PURE__ */ array(
    /* @__PURE__ */ object({
      start: /* @__PURE__ */ integer(),
      end: /* @__PURE__ */ integer()
    }, ["start", "end"])
  )
}, ["email", "busy"]);
var StaffBusy = StaffBusySchema;

// node_modules/@placeos/ts-client/dist/generated/staff/operations/bookings.js
var bookings_exports = {};
__export(bookings_exports, {
  addAttendee: () => addAttendee,
  approve: () => approve,
  approveInstance: () => approveInstance,
  book: () => book,
  booked: () => booked,
  checkIn: () => checkIn,
  checkInInstance: () => checkInInstance,
  clashingAssets: () => clashingAssets,
  create: () => create,
  destroy: () => destroy,
  destroyAttendee: () => destroyAttendee,
  destroyInstance: () => destroyInstance,
  edit: () => edit,
  guestCheckin: () => guestCheckin,
  guestList: () => guestList,
  patchExtdata: () => patchExtdata,
  patchExtdataInstance: () => patchExtdataInstance,
  query: () => query,
  reject: () => reject,
  rejectInstance: () => rejectInstance,
  show: () => show,
  showInstance: () => showInstance,
  update: () => update,
  updateInduction: () => updateInduction,
  updateInductionInstance: () => updateInductionInstance,
  updateInstance: () => updateInstance,
  updateState: () => updateState,
  updateStateInstance: () => updateStateInstance
});
function addAttendee(input, options) {
  return call(ADD_ATTENDEE, input, options);
}
var ADD_ATTENDEE = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/staff/v1/bookings/{id}/attendee",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ integer(),
    /**
     * the occurrence of a recurring booking to act on, the instance id (the occurrence
     * start time
     * as a unix epoch in seconds) as returned in the booking `instance` field. Omit to act
     * on the
     * booking or whole series
     */
    instance: /* @__PURE__ */ nullable(/* @__PURE__ */ integer())
  }, ["id"]),
  body: PlaceCalendarEventAttendee,
  response: Attendee,
  name: "staff.bookings.addAttendee"
});
function approve(input, options) {
  return call(APPROVE, input, options);
}
var APPROVE = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/staff/v1/bookings/{id}/approve",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ integer(),
    /** the client or channel making the change, recorded for analytics */
    utm_source: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * the occurrence of a recurring booking to act on, the instance id (the occurrence
     * start time
     * as a unix epoch in seconds) as returned in the booking `instance` field. Omit to act
     * on the
     * booking or whole series
     */
    instance: /* @__PURE__ */ nullable(/* @__PURE__ */ integer())
  }, ["id"]),
  body: null,
  response: Booking2,
  name: "staff.bookings.approve"
});
function approveInstance(input, options) {
  return call(APPROVE_INSTANCE, input, options);
}
var APPROVE_INSTANCE = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/staff/v1/bookings/{id}/approve/{instance}",
  path_keys: ["id", "instance"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ integer(),
    /**
     * the occurrence of a recurring booking to act on, the instance id (the occurrence
     * start time
     * as a unix epoch in seconds) as returned in the booking `instance` field. Omit to act
     * on the
     * booking or whole series
     */
    instance: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
    /** the client or channel making the change, recorded for analytics */
    utm_source: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["id", "instance"]),
  body: null,
  response: Booking2,
  name: "staff.bookings.approveInstance"
});
function book(input, options) {
  return call(BOOK, input, options);
}
var BOOK = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/staff/v1/bookings/book",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** the asset id to book, i.e. a desk id from desks_index */
    asset_id: /* @__PURE__ */ string(),
    /**
     * start as a unix epoch in seconds, defaults to now; a start earlier today moves to now
     */
    booking_start: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
    /** end as a unix epoch in seconds, defaults to the end of the start's day */
    booking_end: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
    /** the kind of asset, such as desk, parking or locker */
    booking_type: /* @__PURE__ */ string(),
    /** a title for the booking, defaults to the asset's name */
    title: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** comma separated zone ids to file the booking under, added to the asset's zones */
    zones: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
    /** IANA timezone of the booking, defaults to the asset's level or building timezone */
    timezone: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["asset_id"]),
  body: null,
  response: Booking2,
  name: "staff.bookings.book"
});
function booked(input = {}, options) {
  return call(BOOKED, input, options);
}
var BOOKED = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/staff/v1/bookings/booked",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** start of the period to search, unix epoch in seconds. Defaults to now */
    period_start: /* @__PURE__ */ integer(),
    /** end of the period to search, unix epoch in seconds. Defaults to one hour from now */
    period_end: /* @__PURE__ */ integer(),
    /**
     * the booking type to search, such as desk, parking, locker, visitor or group-event.
     * Required
     * unless event_id or ical_uid is provided
     */
    type: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * only include bookings in any of these zones (e.g. a building or level), comma separated
     * zone
     * ids. When provided, bookings of all users in the zones are returned unless `user` or
     * `email`
     * is also set
     */
    zones: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * only include bookings owned by the user with this email. If none of `user`, `email` or
     * `zones` is set the signed in user's bookings are returned
     */
    email: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** only include bookings owned by this user id, use `current` for the signed in user */
    user: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * when `email` or `user` is set (or defaulted to the signed in user), also include bookings
     * that user made on behalf of others
     */
    include_booked_by: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
    /**
     * true only includes checked in bookings, false only includes bookings that have been
     * checked
     * out
     */
    checked_in: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
    /** only include bookings last changed before this time, unix epoch in seconds */
    created_before: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
    /** only include bookings last changed after this time, unix epoch in seconds */
    created_after: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
    /**
     * true only includes approved bookings, false only includes bookings that are not approved
     */
    approved: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
    /**
     * only include bookings whose extension data contains all of these key/value pairs, as a
     * JSON
     * object
     */
    extension_data: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** only include bookings in this process state, a user defined value (see update_state) */
    state: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** only include bookings belonging to this department, a user defined value */
    department: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * return the bookings linked to this calendar event id (e.g. an Office365 or Google event
     * id).
     * When set, `type` is optional and the period, zone and user filters are ignored
     */
    event_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * return the bookings linked to the calendar event with this iCal UID. When set, `type` is
     * optional and the period, zone and user filters are ignored
     */
    ical_uid: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** the maximum number of bookings to inspect, defaults to 100000 */
    limit: /* @__PURE__ */ integer("Int32"),
    /**
     * the number of bookings to skip, used for pagination (take the next value from the `Link`
     * header)
     */
    offset: /* @__PURE__ */ integer("Int32"),
    /**
     * only include bookings with this permission level: PRIVATE, OPEN or PUBLIC. Ignored for
     * unauthenticated requests, which only see PUBLIC bookings
     */
    permission: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }),
  body: null,
  response: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  name: "staff.bookings.booked"
});
function checkIn(input, options) {
  return call(CHECK_IN, input, options);
}
var CHECK_IN = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/staff/v1/bookings/{id}/check_in",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ integer(),
    /** true to check in, false to check out. Defaults to true */
    state: /* @__PURE__ */ boolean(),
    /** the client or channel making the change, recorded for analytics */
    utm_source: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * the occurrence of a recurring booking to act on, the instance id (the occurrence
     * start time
     * as a unix epoch in seconds) as returned in the booking `instance` field. Omit to act
     * on the
     * booking or whole series
     */
    instance: /* @__PURE__ */ nullable(/* @__PURE__ */ integer())
  }, ["id"]),
  body: null,
  response: Booking2,
  name: "staff.bookings.checkIn"
});
function checkInInstance(input, options) {
  return call(CHECK_IN_INSTANCE, input, options);
}
var CHECK_IN_INSTANCE = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/staff/v1/bookings/{id}/check_in/{instance}",
  path_keys: ["id", "instance"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ integer(),
    /**
     * the occurrence of a recurring booking to act on, the instance id (the occurrence
     * start time
     * as a unix epoch in seconds) as returned in the booking `instance` field. Omit to act
     * on the
     * booking or whole series
     */
    instance: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
    /** true to check in, false to check out. Defaults to true */
    state: /* @__PURE__ */ boolean(),
    /** the client or channel making the change, recorded for analytics */
    utm_source: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["id", "instance"]),
  body: null,
  response: Booking2,
  name: "staff.bookings.checkInInstance"
});
function clashingAssets(input, options) {
  return call(CLASHING_ASSETS, input, options);
}
var CLASHING_ASSETS = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/staff/v1/bookings/clashing-assets",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /**
     * when true, return the assets from the booking's asset_ids that are NOT booked, so
     * asset_ids
     * must contain every candidate asset
     */
    return_available: /* @__PURE__ */ boolean(),
    /**
     * when true, return objects with asset_id, booking_start and booking_end for each clash
     * rather
     * than plain asset ids. Cannot be combined with return_available
     */
    include_clash_time: /* @__PURE__ */ boolean()
  }),
  body: Booking2,
  response: /* @__PURE__ */ array(/* @__PURE__ */ json()),
  name: "staff.bookings.clashingAssets"
});
function create(input, options) {
  return call(CREATE, input, options);
}
var CREATE = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/staff/v1/bookings",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** the client or channel making the change, recorded for analytics */
    utm_source: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * the maximum number of concurrent bookings of this type the user may hold in the booking's
     * zones, used instead of the tenant's configured booking limit
     */
    limit_override: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
    /**
     * link the booking to this calendar event id (e.g. an Office365 or Google event id). The
     * event
     * must already have staff-api metadata, otherwise 422 is returned
     */
    event_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * link the booking to the calendar event with this iCal UID. The event must already have
     * staff-api metadata, otherwise 422 is returned
     */
    ical_uid: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }),
  body: Booking2,
  response: Booking2,
  name: "staff.bookings.create"
});
function destroy(input, options) {
  return call(DESTROY, input, options);
}
var DESTROY = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/staff/v1/bookings/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ integer(),
    /** the client or channel making the change, recorded for analytics */
    utm_source: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * the occurrence of a recurring booking to act on, the instance id (the occurrence
     * start time
     * as a unix epoch in seconds) as returned in the booking `instance` field. Omit to act
     * on the
     * booking or whole series
     */
    instance: /* @__PURE__ */ nullable(/* @__PURE__ */ integer())
  }, ["id"]),
  body: null,
  response: "text",
  name: "staff.bookings.destroy"
});
function destroyAttendee(input, options) {
  return call(DESTROY_ATTENDEE, input, options);
}
var DESTROY_ATTENDEE = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/staff/v1/bookings/{id}/attendee/{attendee_id}",
  path_keys: ["id", "attendee_id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ integer(),
    /** the email address of the attendee to remove */
    attendee_id: /* @__PURE__ */ string(),
    /**
     * the occurrence of a recurring booking to act on, the instance id (the occurrence
     * start time
     * as a unix epoch in seconds) as returned in the booking `instance` field. Omit to act
     * on the
     * booking or whole series
     */
    instance: /* @__PURE__ */ nullable(/* @__PURE__ */ integer())
  }, ["id", "attendee_id"]),
  body: null,
  response: "text",
  name: "staff.bookings.destroyAttendee"
});
function destroyInstance(input, options) {
  return call(DESTROY_INSTANCE, input, options);
}
var DESTROY_INSTANCE = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/staff/v1/bookings/{id}/instance/{instance}",
  path_keys: ["id", "instance"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ integer(),
    /**
     * the occurrence of a recurring booking to act on, the instance id (the occurrence
     * start time
     * as a unix epoch in seconds) as returned in the booking `instance` field. Omit to act
     * on the
     * booking or whole series
     */
    instance: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
    /** the client or channel making the change, recorded for analytics */
    utm_source: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["id", "instance"]),
  body: null,
  response: "text",
  name: "staff.bookings.destroyInstance"
});
function edit(input, options) {
  return call(EDIT, input, options);
}
var EDIT = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/staff/v1/bookings/{id}/edit",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ integer(),
    /** the new title */
    title: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** the new description */
    description: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** the new start as a unix epoch in seconds */
    booking_start: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
    /** the new end as a unix epoch in seconds */
    booking_end: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
    /**
     * the occurrence of a recurring booking to act on, the instance id (the occurrence
     * start time
     * as a unix epoch in seconds) as returned in the booking `instance` field. Omit to act
     * on the
     * booking or whole series
     */
    instance: /* @__PURE__ */ nullable(/* @__PURE__ */ integer())
  }, ["id"]),
  body: null,
  response: Booking2,
  name: "staff.bookings.edit"
});
function guestCheckin(input, options) {
  return call(GUEST_CHECKIN, input, options);
}
var GUEST_CHECKIN = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/staff/v1/bookings/{id}/guests/{guest_id}/check_in",
  path_keys: ["id", "guest_id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ integer(),
    /** the email address of the guest to check in or out */
    guest_id: /* @__PURE__ */ string(),
    /** true to check the guest in, false to check them out. Defaults to true */
    state: /* @__PURE__ */ boolean(),
    /**
     * the occurrence of a recurring booking to act on, the instance id (the occurrence
     * start time
     * as a unix epoch in seconds) as returned in the booking `instance` field. Omit to act
     * on the
     * booking or whole series
     */
    instance: /* @__PURE__ */ nullable(/* @__PURE__ */ integer())
  }, ["id", "guest_id"]),
  body: null,
  response: Guest,
  name: "staff.bookings.guestCheckin"
});
function guestList(input, options) {
  return call(GUEST_LIST, input, options);
}
var GUEST_LIST = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/staff/v1/bookings/{id}/guests",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ integer(),
    /**
     * when true and this is a parent booking, also include guests from its linked (child)
     * bookings.
     * Defaults to false
     */
    include_linked: /* @__PURE__ */ boolean(),
    /**
     * the occurrence of a recurring booking to act on, the instance id (the occurrence
     * start time
     * as a unix epoch in seconds) as returned in the booking `instance` field. Omit to act
     * on the
     * booking or whole series
     */
    instance: /* @__PURE__ */ nullable(/* @__PURE__ */ integer())
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ array(Guest),
  name: "staff.bookings.guestList"
});
function patchExtdata(input, options) {
  return call(PATCH_EXTDATA, input, options);
}
var PATCH_EXTDATA = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/staff/v1/bookings/{id}/ext_data",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ integer(),
    /**
     * when true, publish a `staff/booking/changed` signal (action extdata_changed) so other
     * services are notified, defaults to false
     */
    signal_changes: /* @__PURE__ */ boolean(),
    /**
     * the occurrence of a recurring booking to act on, the instance id (the occurrence
     * start time
     * as a unix epoch in seconds) as returned in the booking `instance` field. Omit to act
     * on the
     * booking or whole series
     */
    instance: /* @__PURE__ */ nullable(/* @__PURE__ */ integer())
  }, ["id"]),
  body: /* @__PURE__ */ record(/* @__PURE__ */ json()),
  response: Booking2,
  name: "staff.bookings.patchExtdata"
});
function patchExtdataInstance(input, options) {
  return call(PATCH_EXTDATA_INSTANCE, input, options);
}
var PATCH_EXTDATA_INSTANCE = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/staff/v1/bookings/{id}/ext_data/{instance}",
  path_keys: ["id", "instance"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ integer(),
    /**
     * the occurrence of a recurring booking to act on, the instance id (the occurrence
     * start time
     * as a unix epoch in seconds) as returned in the booking `instance` field. Omit to act
     * on the
     * booking or whole series
     */
    instance: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
    /**
     * when true, publish a `staff/booking/changed` signal (action extdata_changed) so other
     * services are notified, defaults to false
     */
    signal_changes: /* @__PURE__ */ boolean()
  }, ["id", "instance"]),
  body: /* @__PURE__ */ record(/* @__PURE__ */ json()),
  response: Booking2,
  name: "staff.bookings.patchExtdataInstance"
});
function query(input = {}, options) {
  return call(QUERY, input, options);
}
var QUERY = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/staff/v1/bookings",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** start of the period to search, unix epoch in seconds. Defaults to now */
    period_start: /* @__PURE__ */ integer(),
    /** end of the period to search, unix epoch in seconds. Defaults to one hour from now */
    period_end: /* @__PURE__ */ integer(),
    /**
     * the booking type to search, such as desk, parking, locker, visitor or group-event.
     * Required
     * unless event_id or ical_uid is provided
     */
    type: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** when true, deleted and non-deleted bookings are returned (overrides `deleted`) */
    include_deleted: /* @__PURE__ */ boolean(),
    /** when true, only deleted bookings are returned. Ignored if `include_deleted=true` */
    deleted: /* @__PURE__ */ boolean(),
    /**
     * when true, checked out and not checked out bookings are returned (overrides
     * `checked_out`)
     */
    include_checked_out: /* @__PURE__ */ boolean(),
    /**
     * when true, only checked out bookings are returned. Ignored if `include_checked_out=true`
     */
    checked_out: /* @__PURE__ */ boolean(),
    /**
     * only include bookings in any of these zones (e.g. a building or level), comma separated
     * zone
     * ids. When provided, bookings of all users in the zones are returned unless `user` or
     * `email`
     * is also set
     */
    zones: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * only include bookings owned by the user with this email. If none of `user`, `email` or
     * `zones` is set the signed in user's bookings are returned
     */
    email: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** only include bookings owned by this user id, use `current` for the signed in user */
    user: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * when `email` or `user` is set (or defaulted to the signed in user), also include bookings
     * that user made on behalf of others
     */
    include_booked_by: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
    /**
     * true only includes checked in bookings, false only includes bookings that have been
     * checked
     * out
     */
    checked_in: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
    /** only include bookings last changed before this time, unix epoch in seconds */
    created_before: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
    /** only include bookings last changed after this time, unix epoch in seconds */
    created_after: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
    /**
     * true only includes approved bookings, false only includes bookings that are not approved
     */
    approved: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
    /** true only includes rejected bookings, false excludes them. Defaults to including both */
    rejected: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean()),
    /**
     * only include bookings whose extension data contains all of these key/value pairs, as a
     * JSON
     * object
     */
    extension_data: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** only include bookings in this process state, a user defined value (see update_state) */
    state: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** only include bookings belonging to this department, a user defined value */
    department: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * return the bookings linked to this calendar event id (e.g. an Office365 or Google event
     * id).
     * When set, `type` is optional and the period, zone and user filters are ignored
     */
    event_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * return the bookings linked to the calendar event with this iCal UID. When set, `type` is
     * optional and the period, zone and user filters are ignored
     */
    ical_uid: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** the maximum number of bookings to return, defaults to 100 */
    limit: /* @__PURE__ */ integer("Int32"),
    /**
     * the number of bookings to skip, used for pagination (take the next value from the `Link`
     * header)
     */
    offset: /* @__PURE__ */ integer("Int32"),
    /**
     * position within the expanded recurring bookings, used for pagination (take the next value
     * from the `Link` header)
     */
    recurrence: /* @__PURE__ */ integer("Int32"),
    /**
     * only include bookings with this permission level: PRIVATE, OPEN or PUBLIC. Ignored for
     * unauthenticated requests, which only see PUBLIC bookings
     */
    permission: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** internal use, a path suffix appended to the pagination `Link` header URL */
    link_ext: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** when true, linked (child) bookings in the results include their parent booking */
    include_parent_bookings: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean())
  }),
  body: null,
  response: /* @__PURE__ */ array(Booking2),
  name: "staff.bookings.query"
});
function reject(input, options) {
  return call(REJECT, input, options);
}
var REJECT = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/staff/v1/bookings/{id}/reject",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ integer(),
    /** the client or channel making the change, recorded for analytics */
    utm_source: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * the occurrence of a recurring booking to act on, the instance id (the occurrence
     * start time
     * as a unix epoch in seconds) as returned in the booking `instance` field. Omit to act
     * on the
     * booking or whole series
     */
    instance: /* @__PURE__ */ nullable(/* @__PURE__ */ integer())
  }, ["id"]),
  body: null,
  response: Booking2,
  name: "staff.bookings.reject"
});
function rejectInstance(input, options) {
  return call(REJECT_INSTANCE, input, options);
}
var REJECT_INSTANCE = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/staff/v1/bookings/{id}/reject/{instance}",
  path_keys: ["id", "instance"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ integer(),
    /**
     * the occurrence of a recurring booking to act on, the instance id (the occurrence
     * start time
     * as a unix epoch in seconds) as returned in the booking `instance` field. Omit to act
     * on the
     * booking or whole series
     */
    instance: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
    /** the client or channel making the change, recorded for analytics */
    utm_source: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["id", "instance"]),
  body: null,
  response: Booking2,
  name: "staff.bookings.rejectInstance"
});
function show(input, options) {
  return call(SHOW, input, options);
}
var SHOW = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/staff/v1/bookings/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ integer(),
    /**
     * the occurrence of a recurring booking to act on, the instance id (the occurrence
     * start time
     * as a unix epoch in seconds) as returned in the booking `instance` field. Omit to act
     * on the
     * booking or whole series
     */
    instance: /* @__PURE__ */ nullable(/* @__PURE__ */ integer())
  }, ["id"]),
  body: null,
  response: Booking2,
  name: "staff.bookings.show"
});
function showInstance(input, options) {
  return call(SHOW_INSTANCE, input, options);
}
var SHOW_INSTANCE = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/staff/v1/bookings/{id}/instance/{instance}",
  path_keys: ["id", "instance"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ integer(),
    /**
     * the occurrence of a recurring booking to act on, the instance id (the occurrence
     * start time
     * as a unix epoch in seconds) as returned in the booking `instance` field. Omit to act
     * on the
     * booking or whole series
     */
    instance: /* @__PURE__ */ nullable(/* @__PURE__ */ integer())
  }, ["id", "instance"]),
  body: null,
  response: Booking2,
  name: "staff.bookings.showInstance"
});
function update(input, options) {
  return call(UPDATE, input, options);
}
var UPDATE = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/staff/v1/bookings/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ integer(),
    /**
     * the maximum number of concurrent bookings of this type the user may hold in the
     * booking's
     * zones, used instead of the tenant's configured booking limit
     */
    limit_override: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
    /**
     * the occurrence of a recurring booking to act on, the instance id (the occurrence
     * start time
     * as a unix epoch in seconds) as returned in the booking `instance` field. Omit to act
     * on the
     * booking or whole series
     */
    instance: /* @__PURE__ */ nullable(/* @__PURE__ */ integer())
  }, ["id"]),
  body: Booking2,
  response: Booking2,
  name: "staff.bookings.update"
});
function updateInduction(input, options) {
  return call(UPDATE_INDUCTION, input, options);
}
var UPDATE_INDUCTION = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/staff/v1/bookings/{id}/update_induction",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ integer(),
    /** the induction status: tentative, accepted or declined */
    induction: BookingInduction,
    /** the client or channel making the change, recorded for analytics */
    utm_source: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * the occurrence of a recurring booking to act on, the instance id (the occurrence
     * start time
     * as a unix epoch in seconds) as returned in the booking `instance` field. Omit to act
     * on the
     * booking or whole series
     */
    instance: /* @__PURE__ */ nullable(/* @__PURE__ */ integer())
  }, ["id", "induction"]),
  body: null,
  response: Booking2,
  name: "staff.bookings.updateInduction"
});
function updateInductionInstance(input, options) {
  return call(UPDATE_INDUCTION_INSTANCE, input, options);
}
var UPDATE_INDUCTION_INSTANCE = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/staff/v1/bookings/{id}/update_induction/{instance}",
  path_keys: ["id", "instance"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ integer(),
    /**
     * the occurrence of a recurring booking to act on, the instance id (the occurrence
     * start time
     * as a unix epoch in seconds) as returned in the booking `instance` field. Omit to act
     * on the
     * booking or whole series
     */
    instance: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
    /** the induction status: tentative, accepted or declined */
    induction: BookingInduction,
    /** the client or channel making the change, recorded for analytics */
    utm_source: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["id", "instance", "induction"]),
  body: null,
  response: Booking2,
  name: "staff.bookings.updateInductionInstance"
});
function updateInstance(input, options) {
  return call(UPDATE_INSTANCE, input, options);
}
var UPDATE_INSTANCE = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/staff/v1/bookings/{id}/instance/{instance}",
  path_keys: ["id", "instance"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ integer(),
    /**
     * the occurrence of a recurring booking to act on, the instance id (the occurrence
     * start time
     * as a unix epoch in seconds) as returned in the booking `instance` field. Omit to act
     * on the
     * booking or whole series
     */
    instance: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
    /**
     * the maximum number of concurrent bookings of this type the user may hold in the
     * booking's
     * zones, used instead of the tenant's configured booking limit
     */
    limit_override: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32"))
  }, ["id", "instance"]),
  body: Booking2,
  response: Booking2,
  name: "staff.bookings.updateInstance"
});
function updateState(input, options) {
  return call(UPDATE_STATE, input, options);
}
var UPDATE_STATE = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/staff/v1/bookings/{id}/update_state",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ integer(),
    /** the new user defined process state of the booking */
    state: /* @__PURE__ */ string(),
    /** the client or channel making the change, recorded for analytics */
    utm_source: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * the occurrence of a recurring booking to act on, the instance id (the occurrence
     * start time
     * as a unix epoch in seconds) as returned in the booking `instance` field. Omit to act
     * on the
     * booking or whole series
     */
    instance: /* @__PURE__ */ nullable(/* @__PURE__ */ integer())
  }, ["id", "state"]),
  body: null,
  response: Booking2,
  name: "staff.bookings.updateState"
});
function updateStateInstance(input, options) {
  return call(UPDATE_STATE_INSTANCE, input, options);
}
var UPDATE_STATE_INSTANCE = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/staff/v1/bookings/{id}/update_state/{instance}",
  path_keys: ["id", "instance"],
  params: /* @__PURE__ */ parameters({
    id: /* @__PURE__ */ integer(),
    /**
     * the occurrence of a recurring booking to act on, the instance id (the occurrence
     * start time
     * as a unix epoch in seconds) as returned in the booking `instance` field. Omit to act
     * on the
     * booking or whole series
     */
    instance: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
    /** the new user defined process state of the booking */
    state: /* @__PURE__ */ string(),
    /** the client or channel making the change, recorded for analytics */
    utm_source: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["id", "instance", "state"]),
  body: null,
  response: Booking2,
  name: "staff.bookings.updateStateInstance"
});

// node_modules/@placeos/ts-client/dist/generated/staff/operations/calendars.js
var calendars_exports = {};
__export(calendars_exports, {
  availability: () => availability,
  checkPermission: () => checkPermission,
  freeBusy: () => freeBusy,
  query: () => query2
});
function availability(input, options) {
  return call(AVAILABILITY, input, options);
}
var AVAILABILITY = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/staff/v1/calendars/availability",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** search period start as a unix epoch in seconds */
    period_start: /* @__PURE__ */ integer(),
    /** search period end as a unix epoch in seconds */
    period_end: /* @__PURE__ */ integer(),
    /**
     * a comma separated list of calendar ids (email addresses) to include; for room
     * resource
     * calendars prefer `system_ids`
     */
    calendars: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * a comma separated list of zone ids (buildings or levels); all rooms (systems with a
     * calendar
     * email) in any of these zones are checked
     */
    zone_ids: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** a comma separated list of room system ids to check */
    system_ids: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * a comma separated list of room features, rooms found via `zone_ids` must have all of
     * them
     */
    features: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    capacity: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
    /** only return bookable (true) or non-bookable (false) rooms found via `zone_ids` */
    bookable: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean())
  }, ["period_start", "period_end"]),
  body: null,
  response: /* @__PURE__ */ nullable(/* @__PURE__ */ array(CalendarsAvailability)),
  name: "staff.calendars.availability"
});
function checkPermission(input, options) {
  return call(CHECK_PERMISSION, input, options);
}
var CHECK_PERMISSION = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/staff/v1/calendars/{user_email}/permission",
  path_keys: ["user_email"],
  params: /* @__PURE__ */ parameters({
    /** email or UPN of the calendar owner */
    user_email: /* @__PURE__ */ string()
  }, ["user_email"]),
  body: null,
  response: /* @__PURE__ */ object({
    can_edit: /* @__PURE__ */ boolean()
  }, ["can_edit"]),
  name: "staff.calendars.checkPermission"
});
function freeBusy(input, options) {
  return call(FREE_BUSY, input, options);
}
var FREE_BUSY = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/staff/v1/calendars/free_busy",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** search period start as a unix epoch in seconds */
    period_start: /* @__PURE__ */ integer(),
    /**
     * search period end as a unix epoch in seconds, must be at least 5 minutes after
     * period_start
     */
    period_end: /* @__PURE__ */ integer(),
    /**
     * a comma separated list of calendar ids (email addresses) to include; for room
     * resource
     * calendars prefer `system_ids`
     */
    calendars: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * a comma separated list of zone ids (buildings or levels); all rooms (systems with a
     * calendar
     * email) in any of these zones are checked
     */
    zone_ids: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** a comma separated list of room system ids to check */
    system_ids: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * a comma separated list of room features, rooms found via `zone_ids` must have all of
     * them
     */
    features: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    capacity: /* @__PURE__ */ nullable(/* @__PURE__ */ integer("Int32")),
    /** only return bookable (true) or non-bookable (false) rooms found via `zone_ids` */
    bookable: /* @__PURE__ */ nullable(/* @__PURE__ */ boolean())
  }, ["period_start", "period_end"]),
  body: null,
  response: /* @__PURE__ */ array(CalendarsAvailability),
  name: "staff.calendars.freeBusy"
});
function query2(input = {}, options) {
  return call(QUERY2, input, options);
}
var QUERY2 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/staff/v1/calendars",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: null,
  response: /* @__PURE__ */ array(PlaceCalendarCalendar),
  name: "staff.calendars.query"
});

// node_modules/@placeos/ts-client/dist/generated/staff/operations/events.js
var events_exports = {};
__export(events_exports, {
  addAttendee: () => addAttendee2,
  approve: () => approve2,
  approveAll: () => approveAll,
  book: () => book2,
  clashingAssets: () => clashingAssets2,
  create: () => create2,
  decline: () => decline,
  deleteAttendee: () => deleteAttendee,
  destroy: () => destroy2,
  edit: () => edit2,
  extensionMetadata: () => extensionMetadata,
  extensionMetadataWithoutSystemId: () => extensionMetadataWithoutSystemId,
  getMetadata: () => getMetadata,
  guestCheckin: () => guestCheckin2,
  guestList: () => guestList2,
  history: () => history,
  linkMasterMetadata: () => linkMasterMetadata,
  notifyChange: () => notifyChange,
  patchMetadata: () => patchMetadata,
  query: () => query3,
  reject: () => reject2,
  replaceMetadata: () => replaceMetadata,
  show: () => show2,
  update: () => update2
});
function addAttendee2(input, options) {
  return call(ADD_ATTENDEE2, input, options);
}
var ADD_ATTENDEE2 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/staff/v1/events/{id}/attendee",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the event id, as found on the calendar being searched */
    id: /* @__PURE__ */ string(),
    /**
     * the room (system) id the event is booked in, its resource calendar is searched when
     * `calendar` isn't provided
     */
    system_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** the calendar the event id belongs to */
    calendar: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * (office365 only) when true, existing attendees are also emailed about the change,
     * otherwise
     * only the new attendee is notified
     */
    notify_existing_attendees: /* @__PURE__ */ boolean()
  }, ["id"]),
  body: PlaceCalendarEventAttendee,
  response: /* @__PURE__ */ union([PlaceCalendarEventAttendee, Attendee]),
  name: "staff.events.addAttendee"
});
function approve2(input, options) {
  return call(APPROVE2, input, options);
}
var APPROVE2 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/staff/v1/events/{id}/approve",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the event id on the room's resource calendar */
    id: /* @__PURE__ */ string(),
    /** the room (system) accepting the meeting */
    system_id: /* @__PURE__ */ string()
  }, ["id", "system_id"]),
  body: null,
  response: /* @__PURE__ */ boolean(),
  name: "staff.events.approve"
});
function approveAll(input, options) {
  return call(APPROVE_ALL, input, options);
}
var APPROVE_ALL = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/staff/v1/events/approve_all",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** period start as a unix epoch in seconds */
    period_start: /* @__PURE__ */ integer(),
    /** period end as a unix epoch in seconds */
    period_end: /* @__PURE__ */ integer(),
    /**
     * comma separated resource calendar emails; only those resolving to a room (system) are
     * approved
     */
    calendars: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * comma separated list of zone ids, approves events for every room (system) in these
     * zones
     */
    zone_ids: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** comma separated list of room (system) ids to approve events for */
    system_ids: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** only approve the event with this ical uid */
    ical_uid: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["period_start", "period_end"]),
  body: null,
  response: /* @__PURE__ */ array(/* @__PURE__ */ string()),
  name: "staff.events.approveAll"
});
function book2(input, options) {
  return call(BOOK2, input, options);
}
var BOOK2 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/staff/v1/events/book",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** the meeting title */
    title: /* @__PURE__ */ string(),
    /** start as a unix epoch in seconds */
    event_start: /* @__PURE__ */ integer(),
    /** end as a unix epoch in seconds */
    event_end: /* @__PURE__ */ integer(),
    /** comma separated attendee emails, the user is added as the host */
    attendees: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string())),
    /** the room (system) id to book */
    system_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** the meeting's IANA timezone, defaults to the room's */
    timezone: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** the meeting description */
    body_text: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["title", "event_start", "event_end"]),
  body: null,
  response: PlaceCalendarEvent,
  name: "staff.events.book",
  wire_names: { body_text: "body" }
});
function clashingAssets2(input, options) {
  return call(CLASHING_ASSETS2, input, options);
}
var CLASHING_ASSETS2 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/staff/v1/events/clashing-assets",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /**
     * return the system if it is available instead of clashes, requires `system_id` on the
     * event,
     * defaults to false
     */
    return_available: /* @__PURE__ */ boolean(),
    /**
     * return the start and end time of each clash, can't be combined with `return_available`,
     * defaults to false
     */
    include_clash_time: /* @__PURE__ */ boolean()
  }),
  body: PlaceCalendarEvent,
  response: /* @__PURE__ */ array(/* @__PURE__ */ json()),
  name: "staff.events.clashingAssets"
});
function create2(input, options) {
  return call(CREATE2, input, options);
}
var CREATE2 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/staff/v1/events",
  path_keys: [],
  params: /* @__PURE__ */ parameters({}),
  body: PlaceCalendarEvent,
  response: PlaceCalendarEvent,
  name: "staff.events.create"
});
function decline(input, options) {
  return call(DECLINE, input, options);
}
var DECLINE = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/staff/v1/events/{id}/decline",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the event id, as found on the calendar being searched */
    id: /* @__PURE__ */ string(),
    /**
     * the room (system) id the event is booked in, its resource calendar is searched when
     * `calendar` isn't provided
     */
    system_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * calendar the event is on, defaults to the current user's calendar; the user needs
     * write
     * access to it
     */
    calendar: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** set to `false` to prevent attendees being notified, defaults to true */
    notify: /* @__PURE__ */ boolean()
  }, ["id"]),
  body: null,
  response: "text",
  name: "staff.events.decline"
});
function deleteAttendee(input, options) {
  return call(DELETE_ATTENDEE, input, options);
}
var DELETE_ATTENDEE = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/staff/v1/events/{id}/attendee/{email}",
  path_keys: ["id", "email"],
  params: /* @__PURE__ */ parameters({
    /** the event id, as found on the calendar being searched */
    id: /* @__PURE__ */ string(),
    /** the email of the attendee to delete */
    email: /* @__PURE__ */ string(),
    /**
     * the room (system) id the event is booked in, its resource calendar is searched when
     * `calendar` isn't provided
     */
    system_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** the calendar the event id belongs to */
    calendar: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["id", "email"]),
  body: null,
  response: "text",
  name: "staff.events.deleteAttendee"
});
function destroy2(input, options) {
  return call(DESTROY2, input, options);
}
var DESTROY2 = /* @__PURE__ */ operation({
  method: "DELETE",
  path: "/api/staff/v1/events/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the event id, as found on the calendar being searched */
    id: /* @__PURE__ */ string(),
    /**
     * the room (system) id the event is booked in, its resource calendar is searched when
     * `calendar` isn't provided
     */
    system_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * calendar the event is on, defaults to the current user's calendar; the user needs
     * write
     * access to it
     */
    calendar: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** set to `false` to prevent attendees being notified, defaults to true */
    notify: /* @__PURE__ */ boolean()
  }, ["id"]),
  body: null,
  response: "text",
  name: "staff.events.destroy"
});
function edit2(input, options) {
  return call(EDIT2, input, options);
}
var EDIT2 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/staff/v1/events/{id}/edit",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the event id, as found on the calendar being searched */
    id: /* @__PURE__ */ string(),
    /**
     * the room (system) id the event is booked in, its resource calendar is searched when
     * `calendar` isn't provided
     */
    system_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** calendar the event is on, defaults to the user's calendar */
    calendar: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** the new title */
    title: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** the new start as a unix epoch in seconds */
    event_start: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
    /** the new end as a unix epoch in seconds */
    event_end: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
    /** comma separated attendee emails, replaces the people invited (rooms are kept) */
    attendees: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string()))
  }, ["id"]),
  body: null,
  response: PlaceCalendarEvent,
  name: "staff.events.edit"
});
function extensionMetadata(input, options) {
  return call(EXTENSION_METADATA, input, options);
}
var EXTENSION_METADATA = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/staff/v1/events/extension_metadata/{system_id}",
  path_keys: ["system_id"],
  params: /* @__PURE__ */ parameters({
    /** only return metadata for this room (system) */
    system_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** the extension data field to match, used together with `value` */
    field_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** the value `field_name` must have */
    value: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** only events ending after this time, unix epoch in seconds */
    period_start: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
    /** only events starting before this time, unix epoch in seconds */
    period_end: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
    /** comma separated list of event ids, recurring master ids or ical uids to match */
    event_ref: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string()))
  }, ["system_id"]),
  body: null,
  response: /* @__PURE__ */ array(EventMetadata),
  name: "staff.events.extensionMetadata"
});
function extensionMetadataWithoutSystemId(input = {}, options) {
  return call(EXTENSION_METADATA_WITHOUT_SYSTEM_ID, input, options);
}
var EXTENSION_METADATA_WITHOUT_SYSTEM_ID = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/staff/v1/events/extension_metadata",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** only return metadata for this room (system) */
    system_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** the extension data field to match, used together with `value` */
    field_name: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** the value `field_name` must have */
    value: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** only events ending after this time, unix epoch in seconds */
    period_start: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
    /** only events starting before this time, unix epoch in seconds */
    period_end: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
    /** comma separated list of event ids, recurring master ids or ical uids to match */
    event_ref: /* @__PURE__ */ nullable(/* @__PURE__ */ array(/* @__PURE__ */ string()))
  }),
  body: null,
  response: /* @__PURE__ */ array(EventMetadata),
  name: "staff.events.extensionMetadataWithoutSystemId"
});
function getMetadata(input, options) {
  return call(GET_METADATA, input, options);
}
var GET_METADATA = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/staff/v1/events/{id}/metadata/{system_id}",
  path_keys: ["id", "system_id"],
  params: /* @__PURE__ */ parameters({
    /** the event id, on the host's or the room's calendar */
    id: /* @__PURE__ */ string(),
    /** the room (system) id the event is booked in */
    system_id: /* @__PURE__ */ string(),
    /** the event's ical uid, an alternative lookup for when the event id doesn't match */
    ical_uid: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["id", "system_id"]),
  body: null,
  response: /* @__PURE__ */ json(),
  name: "staff.events.getMetadata"
});
function guestCheckin2(input, options) {
  return call(GUEST_CHECKIN2, input, options);
}
var GUEST_CHECKIN2 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/staff/v1/events/{id}/guests/{guest_id}/check_in",
  path_keys: ["id", "guest_id"],
  params: /* @__PURE__ */ parameters({
    /** the event id, as found on the calendar being searched */
    id: /* @__PURE__ */ string(),
    /** the email (or numeric id) of the guest to check in */
    guest_id: /* @__PURE__ */ string(),
    /** the room (system) id the event is booked in, required except for guest tokens */
    system_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * calendar to look the event up on, defaults to the room's resource calendar; the user
     * needs
     * write access to it
     */
    calendar: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** `true` to check in (default), `false` to check out */
    state: /* @__PURE__ */ boolean()
  }, ["id", "guest_id"]),
  body: null,
  response: Guest,
  name: "staff.events.guestCheckin"
});
function guestList2(input, options) {
  return call(GUEST_LIST2, input, options);
}
var GUEST_LIST2 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/staff/v1/events/{id}/guests",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the event id on the room's resource calendar */
    id: /* @__PURE__ */ string(),
    /** the room (system) id the event is booked in */
    system_id: /* @__PURE__ */ string(),
    /**
     * the event's ical uid, when provided the metadata is found without querying the
     * calendar
     */
    ical_uid: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["id", "system_id"]),
  body: null,
  response: /* @__PURE__ */ array(Guest),
  name: "staff.events.guestList"
});
function history(input, options) {
  return call(HISTORY, input, options);
}
var HISTORY = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/staff/v1/events/history",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** period start as a unix epoch in seconds */
    period_start: /* @__PURE__ */ integer(),
    /** period end as a unix epoch in seconds */
    period_end: /* @__PURE__ */ integer(),
    /**
     * comma separated list of resource calendar ids (email addresses) to filter by, prefer
     * `system_ids`
     */
    calendars: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * comma separated list of zone ids, includes events for every room (system) in these
     * zones
     */
    zone_ids: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** comma separated list of room (system) ids to filter by */
    system_ids: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** only return history for the event with this ical uid */
    ical_uid: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["period_start", "period_end"]),
  body: null,
  response: /* @__PURE__ */ array(History),
  name: "staff.events.history"
});
function linkMasterMetadata(input, options) {
  return call(LINK_MASTER_METADATA, input, options);
}
var LINK_MASTER_METADATA = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/staff/v1/events/{id}/metadata/{system_id}/link/{ical_uid}",
  path_keys: ["id", "system_id", "ical_uid"],
  params: /* @__PURE__ */ parameters({
    /** the event id to link */
    id: /* @__PURE__ */ string(),
    /** the event space associated with this event */
    system_id: /* @__PURE__ */ string(),
    /** the ical_uid of the event */
    ical_uid: /* @__PURE__ */ string()
  }, ["id", "system_id", "ical_uid"]),
  body: null,
  response: "text",
  name: "staff.events.linkMasterMetadata"
});
function notifyChange(input, options) {
  return call(NOTIFY_CHANGE, input, options);
}
var NOTIFY_CHANGE = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/staff/v1/events/notify/{change}/{system_id}/{event_id}",
  path_keys: ["change", "system_id", "event_id"],
  params: /* @__PURE__ */ parameters({
    /** the type of change that has occured */
    change: EventsChangeType,
    /** the event space associated with this event */
    system_id: /* @__PURE__ */ string(),
    /** the event space associated with this event */
    event_id: /* @__PURE__ */ string()
  }, ["change", "system_id", "event_id"]),
  body: /* @__PURE__ */ nullable(PlaceCalendarEvent),
  response: "text",
  name: "staff.events.notifyChange"
});
function patchMetadata(input, options) {
  return call(PATCH_METADATA, input, options);
}
var PATCH_METADATA = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/staff/v1/events/{id}/metadata/{system_id}",
  path_keys: ["id", "system_id"],
  params: /* @__PURE__ */ parameters({
    /** the event id, on the host's or the room's calendar */
    id: /* @__PURE__ */ string(),
    /** the room (system) id the event is booked in */
    system_id: /* @__PURE__ */ string(),
    /**
     * calendar to look the event up on when metadata doesn't exist yet, defaults to the
     * room's
     * resource calendar
     */
    calendar: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** the event's ical uid, an alternative lookup for when the event id doesn't match */
    ical_uid: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** set the setup time stored against the event, before it starts */
    setup_time: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
    /** set the breakdown time stored against the event, after it ends */
    breakdown_time: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
    /** set the id of the calendar event blocking the room for setup */
    setup_event_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** set the id of the calendar event blocking the room for breakdown */
    breakdown_event_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["id", "system_id"]),
  body: /* @__PURE__ */ record(/* @__PURE__ */ json()),
  response: /* @__PURE__ */ json(),
  name: "staff.events.patchMetadata"
});
function query3(input, options) {
  return call(QUERY3, input, options);
}
var QUERY3 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/staff/v1/events",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /** period start as a unix epoch in seconds */
    period_start: /* @__PURE__ */ integer(),
    /** period end as a unix epoch in seconds */
    period_end: /* @__PURE__ */ integer(),
    /**
     * comma separated list of calendar ids (email addresses) to list events from, prefer
     * `system_ids` for room resource calendars
     */
    calendars: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * comma separated list of zone ids, events are listed for every room (system) in these
     * zones
     */
    zone_ids: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * comma separated list of room (system) ids, events are listed from each room's
     * resource
     * calendar
     */
    system_ids: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** include cancelled events, defaults to false */
    include_cancelled: /* @__PURE__ */ boolean(),
    /** only return events with this ical uid */
    ical_uid: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * optional advanced search filter in Microsoft Graph (Azure AD) OData filter syntax,
     * passed to
     * the calendar provider
     */
    filter: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * how to respond to calendar errors: `notify` (default) returns 206 with
     * X-Calendar-Errors
     * headers, `limit` returns 429 if any calendar was rate limited, `all` returns 500 on
     * any
     * calendar error
     */
    strict: EventsStrict
  }, ["period_start", "period_end"]),
  body: null,
  response: /* @__PURE__ */ array(PlaceCalendarEvent),
  name: "staff.events.query"
});
function reject2(input, options) {
  return call(REJECT2, input, options);
}
var REJECT2 = /* @__PURE__ */ operation({
  method: "POST",
  path: "/api/staff/v1/events/{id}/reject",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the event id on the room's resource calendar */
    id: /* @__PURE__ */ string(),
    /** the room (system) declining the meeting */
    system_id: /* @__PURE__ */ string()
  }, ["id", "system_id"]),
  body: null,
  response: /* @__PURE__ */ boolean(),
  name: "staff.events.reject"
});
function replaceMetadata(input, options) {
  return call(REPLACE_METADATA, input, options);
}
var REPLACE_METADATA = /* @__PURE__ */ operation({
  method: "PUT",
  path: "/api/staff/v1/events/{id}/metadata/{system_id}",
  path_keys: ["id", "system_id"],
  params: /* @__PURE__ */ parameters({
    /** the event id, on the host's or the room's calendar */
    id: /* @__PURE__ */ string(),
    /** the room (system) id the event is booked in */
    system_id: /* @__PURE__ */ string(),
    /**
     * calendar to look the event up on when metadata doesn't exist yet, defaults to the
     * room's
     * resource calendar
     */
    calendar: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** the event's ical uid, an alternative lookup for when the event id doesn't match */
    ical_uid: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** set the setup time stored against the event, before it starts */
    setup_time: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
    /** set the breakdown time stored against the event, after it ends */
    breakdown_time: /* @__PURE__ */ nullable(/* @__PURE__ */ integer()),
    /** set the id of the calendar event blocking the room for setup */
    setup_event_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** set the id of the calendar event blocking the room for breakdown */
    breakdown_event_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["id", "system_id"]),
  body: /* @__PURE__ */ record(/* @__PURE__ */ json()),
  response: /* @__PURE__ */ json(),
  name: "staff.events.replaceMetadata"
});
function show2(input, options) {
  return call(SHOW2, input, options);
}
var SHOW2 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/staff/v1/events/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the event id, as found on the calendar being searched */
    id: /* @__PURE__ */ string(),
    /** room (system) id, looks the event up on the room's resource calendar */
    system_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** calendar to look the event up on, defaults to the current user's calendar */
    calendar: /* @__PURE__ */ nullable(/* @__PURE__ */ string())
  }, ["id"]),
  body: null,
  response: PlaceCalendarEvent,
  name: "staff.events.show"
});
function update2(input, options) {
  return call(UPDATE2, input, options);
}
var UPDATE2 = /* @__PURE__ */ operation({
  method: "PATCH",
  path: "/api/staff/v1/events/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the event id, as found on the calendar being searched */
    id: /* @__PURE__ */ string(),
    /**
     * the room (system) id the event is currently booked in, its resource calendar is
     * searched when
     * `calendar` isn't provided and its metadata is updated
     */
    system_id: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * the calendar the event id belongs to, defaults to the current user's calendar; the
     * user needs
     * write access to it
     */
    calendar: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * (office365 only) set to false when the only change is adding attendees, so that
     * existing
     * attendees aren't notified by email. Warning: while false, only the attendee changes
     * are
     * propagated to the provider - any other edits in the request body are ignored
     */
    notify_existing_attendees: /* @__PURE__ */ boolean()
  }, ["id"]),
  body: PlaceCalendarEvent,
  response: PlaceCalendarEvent,
  name: "staff.events.update"
});

// node_modules/@placeos/ts-client/dist/generated/staff/operations/staff.js
var staff_exports = {};
__export(staff_exports, {
  calendars: () => calendars,
  freeBusy: () => freeBusy2,
  groups: () => groups,
  manager: () => manager,
  photo: () => photo,
  query: () => query4,
  show: () => show3
});
function calendars(input, options) {
  return call(CALENDARS, input, options);
}
var CALENDARS = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/staff/v1/people/{id}/calendars",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the user's email address */
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ array(PlaceCalendarCalendar),
  name: "staff.staff.calendars"
});
function freeBusy2(input, options) {
  return call(FREE_BUSY2, input, options);
}
var FREE_BUSY2 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/staff/v1/people/{id}/free_busy",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** the person's email address */
    id: /* @__PURE__ */ string(),
    /** period start as a unix epoch in seconds */
    period_start: /* @__PURE__ */ integer(),
    /** period end as a unix epoch in seconds, at most a week after the start */
    period_end: /* @__PURE__ */ integer()
  }, ["id", "period_start", "period_end"]),
  body: null,
  response: /* @__PURE__ */ array(StaffBusy),
  name: "staff.staff.freeBusy"
});
function groups(input, options) {
  return call(GROUPS, input, options);
}
var GROUPS = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/staff/v1/people/{id}/groups",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** a user id OR user email address */
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: /* @__PURE__ */ array(PlaceCalendarGroup),
  name: "staff.staff.groups"
});
function manager(input, options) {
  return call(MANAGER, input, options);
}
var MANAGER = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/staff/v1/people/{id}/manager",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** a user id OR user email address */
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: PlaceCalendarUser,
  name: "staff.staff.manager"
});
function photo(input, options) {
  return call(PHOTO, input, options);
}
var PHOTO = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/staff/v1/people/{id}/photo",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** a user id OR user email address */
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: "bytes",
  name: "staff.staff.photo"
});
function query4(input = {}, options) {
  return call(QUERY4, input, options);
}
var QUERY4 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/staff/v1/people",
  path_keys: [],
  params: /* @__PURE__ */ parameters({
    /**
     * An optional search query to filter users by name or email. If both 'q' and 'filter'
     * parameters are provided, 'filter' takes precedence.
     */
    q: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * An optional advanced search filter using Azure AD filter syntax. Provides more control
     * over
     * the search criteria and takes precedence over the 'q' parameter. Supports both Azure AD
     * and
     * Google providers.
     */
    filter: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /**
     * the next page of results, a google page token or graph api URI. Normally taken from the
     * `Link` header of the previous response
     */
    next_page: /* @__PURE__ */ nullable(/* @__PURE__ */ string()),
    /** a comma separated list of additional user fields to return (Office365 only) */
    additional_fields: /* @__PURE__ */ nullable(
      /* @__PURE__ */ array(/* @__PURE__ */ string())
    )
  }),
  body: null,
  response: /* @__PURE__ */ array(PlaceCalendarUser),
  name: "staff.staff.query"
});
function show3(input, options) {
  return call(SHOW3, input, options);
}
var SHOW3 = /* @__PURE__ */ operation({
  method: "GET",
  path: "/api/staff/v1/people/{id}",
  path_keys: ["id"],
  params: /* @__PURE__ */ parameters({
    /** a user id OR user email address */
    id: /* @__PURE__ */ string()
  }, ["id"]),
  body: null,
  response: PlaceCalendarUser,
  name: "staff.staff.show"
});

// libs/bookings/src/lib/request-body.ts
var DEPTH_MAX = 32;
var SKIP = /* @__PURE__ */ Symbol("skip");
function requestBody(schema, value) {
  const body = fit(schema.node, value, 0);
  return body === SKIP ? {} : body;
}
function fit(node, value, depth) {
  if (depth > DEPTH_MAX)
    throw new Error("Request schema is too deep");
  if (value === void 0)
    return SKIP;
  switch (node.kind) {
    case "nullable":
      return value === null ? null : fit(node.inner, value, depth + 1);
    case "json":
      return JSON.parse(JSON.stringify(value));
    case "integer":
      if (typeof value === "string" && /^-?\d+$/.test(value)) {
        return Number(value);
      }
      return value === null ? SKIP : value;
    case "literal":
      if (typeof value === "string" && !node.values.has(value)) {
        const lower = value.toLowerCase();
        if (node.values.has(lower))
          return lower;
      }
      return value === null ? SKIP : value;
    case "array":
      if (!Array.isArray(value))
        return value === null ? SKIP : value;
      return value.map((item) => fit(node.items, item, depth + 1)).filter((item) => item !== SKIP);
    case "record":
      if (!isRecord(value))
        return value === null ? SKIP : value;
      return fitEntries(Object.keys(value), value, () => node.values, depth);
    case "object":
      if (!isRecord(value))
        return value === null ? SKIP : value;
      return fitEntries(node.fields.map((_) => _.key), value, (key) => node.fields.find((_) => _.key === key).node, depth);
    case "union": {
      const fits = node.variants.some((variant) => checkRequest({ node: variant }, value).ok);
      if (fits)
        return value;
      const options = node.variants.map((variant) => fit(variant, value, depth + 1));
      const match = options.find((option, index) => option !== SKIP && checkRequest({ node: node.variants[index] }, option).ok);
      return match ?? options[0];
    }
    default:
      return value === null ? SKIP : value;
  }
}
function fitEntries(keys, value, nodeFor, depth) {
  const output = {};
  for (const key of keys) {
    if (!Object.hasOwn(value, key))
      continue;
    const item = fit(nodeFor(key), value[key], depth + 1);
    if (item !== SKIP)
      output[key] = item;
  }
  return output;
}
function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

// libs/bookings/src/lib/bookings.fn.ts
function bookingQuery(q) {
  return {
    period_start: q.period_start,
    period_end: q.period_end,
    type: q.type,
    zones: q.zones,
    user: q.user,
    email: q.email,
    include_checked_out: q.include_checked_out,
    include_booked_by: q.include_booked_by,
    include_deleted: q.include_deleted,
    deleted: q.deleted,
    event_id: q.event_id,
    ical_uid: q.ical_uid,
    limit: q.limit,
    rejected: q.rejected
  };
}
function bookedQuery(q, limit) {
  return {
    period_start: q.period_start,
    period_end: q.period_end,
    type: q.type,
    zones: q.zones,
    user: q.user,
    email: q.email,
    include_booked_by: q.include_booked_by,
    event_id: q.event_id,
    ical_uid: q.ical_uid,
    limit
  };
}
function bookingId(id) {
  const value = Number(id);
  if (`${id}`.trim() === "" || !Number.isSafeInteger(value)) {
    throw new Error(`Booking id is not an integer: ${id}`);
  }
  return value;
}
function toBooking(data) {
  return new Booking(data);
}
function mapPage(page, fn) {
  const next = page.next;
  return {
    data: page.data.map(fn),
    total: page.total,
    next_offset: page.next_offset,
    next: next ? () => next()?.then((_) => mapPage(_, fn)) ?? null : null
  };
}
function bookingUtmSource() {
  return `${appDetails().app_name}_${VERSION.hash}_${currentUser().email || ""}`;
}
function withAppVersion(data) {
  const booking_data = __spreadValues({}, data instanceof Booking ? data.toJSON() : data);
  delete booking_data.created_at;
  return __spreadProps(__spreadValues({}, booking_data), {
    extension_data: __spreadValues(__spreadValues({}, booking_data.extension_data || {}), appDetails())
  });
}
function bookingBody(data) {
  return requestBody(Booking2, withAppVersion(data));
}
async function queryBookings(q) {
  return queryBookingsOrThrow(q).catch(() => []);
}
async function queryBookingsOrThrow(q) {
  const list = await bookings_exports.query(bookingQuery(q)).then(orThrow);
  return list.map(toBooking);
}
async function bookedResourceList(q, resource_count) {
  try {
    let page = await bookings_exports.booked(bookedQuery(q, Math.max(200, resource_count || 0))).then(orThrowPage);
    const list = [...page.data];
    let count = 1;
    while (page.next && (!page.total || list.length < page.total) && count <= MAX_PAGES) {
      const next = page.next();
      if (!next)
        break;
      page = await next;
      list.push(...page.data);
      count += 1;
    }
    return unique(list);
  } catch (_) {
    return [];
  }
}
function isJsonRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function toBookingClash(item) {
  if (!isJsonRecord(item))
    return null;
  const { asset_id, booking_start, booking_end } = item;
  if (typeof asset_id !== "string")
    return null;
  return {
    asset_id,
    booking_start: typeof booking_start === "number" ? booking_start : 0,
    booking_end: typeof booking_end === "number" ? booking_end : 0
  };
}
async function findBookingClashes(booking, q = {}) {
  try {
    const list = await bookings_exports.clashingAssets({
      return_available: q.return_available,
      include_clash_time: q.include_clash_time,
      body: requestBody(Booking2, booking.toJSON())
    }).then(orThrow);
    return q.include_clash_time ? list.map(toBookingClash).filter((_) => !!_) : list.filter((_) => typeof _ === "string");
  } catch (_) {
    return [];
  }
}
function queryPagedBookings(q) {
  return bookings_exports.query(bookingQuery(q)).then(orThrowPage).then((page) => mapPage(page, toBooking));
}
var MAX_PAGES = 50;
async function queryAllBookings(q, options = {}) {
  const { signal } = options;
  try {
    if (signal?.aborted)
      return [];
    let page = await queryPagedBookings(q);
    const list = [...page.data];
    let count = 1;
    while (page.next && count <= MAX_PAGES) {
      if (signal?.aborted)
        return [];
      const next = page.next();
      if (!next)
        break;
      page = await next;
      list.push(...page.data);
      count += 1;
    }
    return signal?.aborted ? [] : unique(list, "id");
  } catch (_) {
    return [];
  }
}
async function showBooking(id) {
  return toBooking(await bookings_exports.show({ id: bookingId(id) }).then(orThrow));
}
function parentBookingId(id) {
  if (!id)
    throw new Error("Missing parent booking id");
  const parent_id = Number(id);
  return Number.isSafeInteger(parent_id) ? parent_id : id;
}
async function createBooking(data, q) {
  const booking = await bookings_exports.create(__spreadProps(__spreadValues(__spreadValues({
    utm_source: bookingUtmSource()
  }, q?.event_id ? { event_id: q.event_id } : {}), q?.ical_uid ? { ical_uid: q.ical_uid } : {}), {
    body: bookingBody(data)
  })).then(orThrow);
  return toBooking(booking);
}
async function updateBooking(id, data, _method = "patch") {
  const booking = await bookings_exports.update({ id: bookingId(id), body: bookingBody(data) }).then(orThrow);
  return toBooking(booking);
}
async function updateBookingInductionStatus(id, status) {
  const booking = await bookings_exports.updateInduction({ id: bookingId(id), induction: status }).then(orThrow);
  return toBooking(booking);
}
async function updateBookingInstance(id, start_time, data, _method = "patch") {
  const booking = await bookings_exports.updateInstance({
    id: bookingId(id),
    instance: start_time,
    body: bookingBody(data)
  }).then(orThrow);
  return toBooking(booking);
}
var saveBooking = async (data, q) => {
  const id = data.id;
  delete data.id;
  const instance = q?.instance;
  if (q)
    delete q.instance;
  return id ? instance ? updateBookingInstance(id, data.instance || data.booking_start, data) : updateBooking(id, data) : createBooking(cleanObject(data, ["", null, void 0]) || {}, q);
};
async function removeBooking(id, q = {}) {
  if (q.instance) {
    return removeBookingInstance(id, q.start_time);
  }
  return bookings_exports.destroy({ id: bookingId(id), utm_source: bookingUtmSource() }).then(orThrow).then(() => void 0);
}
async function removeBookingInstance(id, start_time) {
  return bookings_exports.destroyInstance({
    id: bookingId(id),
    instance: start_time,
    utm_source: bookingUtmSource()
  }).then(orThrow).then(() => void 0);
}
function checkinError(error) {
  const body = error.kind === "http" ? error.body : null;
  const record2 = body !== null && isJsonRecord(body) ? body : {};
  throw record2["error"] || record2["message"] || body || new CallFailed(error);
}
async function checkinBooking(id, state) {
  const result = await bookings_exports.checkIn({
    id: bookingId(id),
    state,
    utm_source: bookingUtmSource()
  });
  if (result.ok === false)
    checkinError(result.error);
  return toBooking(result.value.data);
}
async function queryResourceAvailability(id_list, start, duration, ignore, type = "room") {
  const bookings = await queryBookings({
    type,
    period_start: getUnixTime(start),
    period_end: getUnixTime(addMinutes(start, duration))
  });
  return id_list.map((id) => !bookings.find((b) => (b.asset_id === id || b.asset_ids.includes(id)) && (!ignore || ignore !== `${b.id}`)));
}
async function linkedBookingsForEvent(event, type) {
  if (event.from_bookings) {
    return event.linked_bookings.filter((_) => _.booking_type === type).map((_) => new Booking(_));
  }
  const bookings = await queryBookingsOrThrow({
    type,
    event_id: event.id,
    period_start: getUnixTime(event.date),
    period_end: getUnixTime(addMinutes(event.date, event.duration)),
    limit: 500
  });
  return bookings.filter((_) => _.extension_data?.parent_id === event.id);
}
function replacedEventBookingIds(event, type) {
  if (event.from_bookings)
    return [];
  return (event.linked_bookings || []).filter((_) => {
    const parent_id = _.extension_data?.parent_id;
    return _.booking_type === type && !!parent_id && parent_id !== event.id;
  }).map((_) => _.id);
}
function bookingMatchesResource(booking, item) {
  if (item.id && booking.extension_data?.details?.id === item.id) {
    return true;
  }
  if (item.email && booking.attendees?.find((_) => _.email === item.email)) {
    return true;
  }
  return !!booking.asset_ids?.find((id) => item.items?.find((i) => i.item_ids?.includes(id)));
}
function detailsKey(details) {
  const data = JSON.parse(JSON.stringify(details ?? null));
  if (data && typeof data === "object")
    delete data.deliver_at_time;
  return JSON.stringify(data, (_, value) => value && typeof value === "object" && !Array.isArray(value) ? Object.fromEntries(Object.entries(value).sort(([a], [b]) => a < b ? -1 : 1)) : value);
}
function attendeeEmails(list = []) {
  return list.map((_) => _.email?.toLowerCase()).sort().join(",");
}
function linkedBookingChanges(booking, desired) {
  const changes = {};
  if (booking.booking_start !== desired.booking_start || booking.booking_end !== desired.booking_end) {
    changes.booking_start = desired.booking_start;
    changes.booking_end = desired.booking_end;
    changes.all_day = desired.all_day;
  }
  for (const key of ["title", "description", "asset_name"]) {
    if (booking[key] !== desired[key])
      changes[key] = desired[key];
  }
  if (booking.user_email.toLowerCase() !== desired.user_email.toLowerCase()) {
    changes.user_email = desired.user_email;
  }
  if (booking.asset_id !== desired.asset_id) {
    changes.asset_id = desired.asset_id;
    changes.asset_ids = desired.asset_ids;
  }
  if ([...booking.zones].sort().join() !== [...desired.zones].sort().join()) {
    changes.zones = desired.zones;
  }
  if (attendeeEmails(booking.attendees) !== attendeeEmails(desired.attendees)) {
    changes.attendees = desired.attendees;
  }
  const details_changed = detailsKey(booking.extension_data?.details) !== detailsKey(desired.extension_data?.details);
  if (!details_changed && !Object.keys(changes).length)
    return null;
  return __spreadProps(__spreadValues({}, changes), { extension_data: desired.extension_data });
}
function visitorFlagExtension(item) {
  return __spreadValues(__spreadValues({}, readAttendeeFlags(item)), readAttendeeFlags(item.extension_data || {}));
}
async function createBookingsForEvent(event, type, resources) {
  const existing = await linkedBookingsForEvent(event, type);
  const zones = event.system?.zones || unique(flatten(event.resources.map((_) => _.zones))) || [];
  const kept = /* @__PURE__ */ new Set();
  const created_bookings = [];
  try {
    for (const id of replacedEventBookingIds(event, type)) {
      await removeBooking(id);
    }
    for (const item of resources) {
      const booking = existing.find((_) => !kept.has(_.id) && bookingMatchesResource(_, item));
      const assigned_space = type === "catering-order" && item.system_id ? event.resources.find((_) => _.id === item.system_id || _.email === item.system_id) : void 0;
      const resource_id = assigned_space?.id || item.system_id || item.email || item.id;
      const resource_name = assigned_space?.display_name || assigned_space?.name || item.name;
      const desired = new Booking({
        type,
        booking_type: type,
        date: event.date,
        duration: event.duration,
        description: event.title || item.name,
        user_email: event.host,
        asset_id: resource_id,
        asset_name: resource_name,
        title: event.title,
        attendees: item.email ? [new User(item)] : [],
        extension_data: __spreadValues({
          parent_id: event.id,
          name: resource_name,
          location_id: assigned_space?.id || event.location,
          details: item
        }, type === "visitor" ? visitorFlagExtension(item) : {}),
        zones: assigned_space?.zones || zones
      });
      if (booking) {
        kept.add(booking.id);
        const changes = linkedBookingChanges(booking, desired);
        if (changes)
          await updateBooking(booking.id, changes);
        continue;
      }
      created_bookings.push(event.from_bookings ? await createBooking(__spreadProps(__spreadValues({}, desired.toJSON()), {
        parent_id: parentBookingId(event.id)
      })) : await createBooking(desired.toJSON(), {
        ical_uid: event.ical_uid,
        event_id: event.id
      }));
    }
    for (const booking of existing) {
      if (!kept.has(booking.id))
        await removeBooking(booking.id);
    }
  } catch (error) {
    await Promise.all(created_bookings.filter((booking) => !!booking.id).map((booking) => removeBooking(booking.id).catch(() => void 0)));
    throw error;
  }
}

export {
  subDays,
  AnnounceDirective,
  PlaceCalendarEvent,
  calendars_exports,
  events_exports,
  staff_exports,
  searchGuests,
  showGuest,
  getGuestCateringItem,
  setGuestCateringItem,
  requestBody,
  queryBookings,
  bookedResourceList,
  toBookingClash,
  findBookingClashes,
  queryAllBookings,
  showBooking,
  parentBookingId,
  createBooking,
  updateBooking,
  updateBookingInductionStatus,
  saveBooking,
  removeBooking,
  checkinBooking,
  queryResourceAvailability,
  createBookingsForEvent
};
//# debugId=122ce68e-af24-5313-8e3c-6c4f924b0154
//# sourceMappingURL=chunk-FJAQDCWR.js.map
