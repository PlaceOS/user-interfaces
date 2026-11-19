import {
  AssetStateService,
  CalendarService,
  bookedResourceList,
  bookingLineItems,
  findBookingClashes,
  findNearbyFeature,
  generateCalendarFileLink,
  generateGoogleCalendarLink,
  generateMicrosoftCalendarLink,
  loadLockerResources,
  openRecurringClashModal,
  queryBookings,
  queryTypeAssetsForZones,
  queryTypeAssetsInZone,
  removeBooking,
  removeEventGuest,
  resolveHiddenAssetTypeId,
  saveBooking,
  updateBooking,
  validateAssetRequestsForResource
} from "./chunk-WRVRIU74.js";
import {
  FormField,
  disabled,
  email,
  form,
  required,
  validate
} from "./chunk-Y2N5AL7S.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule,
  PaymentsService,
  openConfirmModal
} from "./chunk-CRJM3UTT.js";
import {
  TranslatePipe
} from "./chunk-DWBIKYJO.js";
import {
  IconComponent,
  SafePipe
} from "./chunk-UVVPYG43.js";
import {
  Booking,
  Desk,
  OrganisationService,
  firstValueWhere,
  rulesForResource
} from "./chunk-XE3SORXG.js";
import {
  AsyncHandler,
  GuestUser,
  SETTING_KEYS,
  SettingsService,
  User,
  currentUser,
  currentUserCanApprove,
  currentUserIsLoaded,
  currentUserLoaded,
  current_user,
  getUnixTime,
  isAfter,
  isEmptyUser,
  settingSignal,
  toVisitorInternalOrExternal,
  user_group_names
} from "./chunk-SWM3L3HS.js";
import {
  Un,
  _c,
  addDays,
  addMinutes,
  bc,
  en,
  endOfDay,
  errorMessage,
  flatten,
  format,
  getAllDayTimeRange,
  getInvalidSignalFields,
  guardModelUndefinedWrites,
  i18n,
  isWithinBookableHours,
  li,
  notifyError,
  notifyWarn,
  onFieldChange,
  randomString,
  setupFormTimeSync,
  uh,
  unique
} from "./chunk-HJE2QSCA.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-AINIX4LN.js";
import {
  NavigationEnd,
  Router
} from "./chunk-GHY5Z5DH.js";
import {
  Component,
  EventEmitter,
  Injectable,
  Injector,
  Output,
  computed,
  debounced,
  effect,
  inject,
  resource,
  setClassMetadata,
  signal,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-D5QHX5EO.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/assets/src/lib/desk-assets.fn.ts
var DESK_CATEGORY_NAME = "_DESKS_";
var DESK_TYPE_NAME = "_DESKS_";
function resolveDeskTypeId() {
  return resolveHiddenAssetTypeId(DESK_CATEGORY_NAME, DESK_TYPE_NAME);
}
async function queryDeskAssets(zone_id) {
  return queryDeskAssetsForZones([zone_id]);
}
async function queryDeskAssetsForZones(zone_ids) {
  if (!zone_ids.length)
    return [];
  return queryTypeAssetsForZones(await resolveDeskTypeId(), zone_ids);
}
async function queryDeskAssetsInZone(zone_id) {
  if (!zone_id)
    return [];
  return queryTypeAssetsInZone(await resolveDeskTypeId(), zone_id);
}
function findDeskByLegacyId(desks, id) {
  if (!id)
    return void 0;
  return desks.find((desk) => desk.id === id) || desks.find((desk) => desk.place_id === id) || desks.find((desk) => desk.map_id === id);
}
async function queryDeskAssetByLegacyId(zone_id, id) {
  const assets = await queryDeskAssetsInZone(zone_id);
  const desks = assets.map((asset) => deskFromAsset(asset));
  return assets[desks.indexOf(findDeskByLegacyId(desks, id))];
}
function deskFromAsset(asset, zone) {
  const security = asset.security_system_groups?.[0] || "";
  return new Desk(__spreadProps(__spreadValues(__spreadValues(__spreadValues({}, asset.other_data || {}), asset.client_ids || {}), asset), {
    name: asset.identifier || asset.name,
    map_id: asset.map_id || asset.id,
    zone: new en(zone || { id: asset.zone_id }),
    groups: asset.place_groups,
    security
  }));
}

// libs/bookings/src/lib/booking-form.model.ts
function requiresLocker(secondary_resource) {
  return typeof secondary_resource === "string" && !!secondary_resource;
}
function bookingAttachments(booking = new Booking()) {
  booking = booking || new Booking();
  const extension_data = booking.extension_data || {};
  return [
    ...extension_data.attachments || [],
    ...extension_data.p2_document_names || []
  ].filter((item) => !!item);
}
function bookingHostUser(booking = new Booking()) {
  if (!booking?.user_email)
    return currentUser();
  return new User({
    id: booking.user_id || "",
    email: booking.user_email,
    name: booking.user_name || booking.user_email
  });
}
function bookingFormValue(booking = new Booking()) {
  const extension_data = booking.extension_data || {};
  const visitor_name = booking.booking_type === "visitor" ? extension_data.visitor_name || booking.asset_name || "" : booking.asset_name || booking.description;
  return {
    id: booking.id || "",
    parent_id: booking.parent_id || "",
    event_id: booking.event_id || "",
    ical_uid: extension_data.ical_uid || "",
    date: booking.date ?? 0,
    date_end: booking.date_end ?? 0,
    all_day: booking.all_day ?? false,
    name: extension_data.name || booking.asset_name || "",
    duration: booking.duration ?? 0,
    booking_type: booking.booking_type,
    zones: booking.zones || [],
    title: booking.title || "",
    description: booking.description || "",
    booking_asset: {},
    resources: [],
    company: extension_data.company || "",
    asset_id: booking.asset_id || "",
    asset_name: visitor_name || "",
    assets: extension_data.assets || [],
    attendees: booking.attendees || [],
    map_id: extension_data.map_id || "",
    featured: extension_data.featured || false,
    user: bookingHostUser(booking),
    user_id: booking.user_id || "",
    group: booking.group ?? {},
    user_email: booking.user_email || "",
    user_name: booking.user_name || "",
    timezone: booking.timezone || "",
    booked_by: currentUser(),
    booked_by_id: booking.booked_by_id || "",
    booked_by_email: booking.booked_by_email || "",
    // Empty when no secondary resource is requested.
    secondary_resource: extension_data.other_asset_type || extension_data.secondary_resource || "",
    location: extension_data.location || "",
    attendance_type: extension_data.attendance_type || "ANY",
    phone: extension_data.phone || "",
    permission: booking.permission || "PRIVATE",
    images: booking.images || [],
    tags: booking?.tags || [],
    plate_number: extension_data.plate_number || "",
    vehicle_type: extension_data.vehicle_type || "car",
    request_type: extension_data.request_type || "standard",
    requires_manual_approval: extension_data.requires_manual_approval ?? false,
    space_restrictions: extension_data.space_restrictions ?? false,
    extra_space_restrictions: extension_data.extra_space_restrictions ?? [],
    approver_group: extension_data.approver_group || "",
    prefer_booked_location_first: extension_data.prefer_booked_location_first ?? false,
    pass_number: extension_data.pass_number || "",
    international: extension_data.international ?? false,
    visitor_internal_or_external: toVisitorInternalOrExternal(extension_data.visitor_internal_or_external),
    recurrence_custom: extension_data.recurrence_custom ?? false,
    recurrence_type: booking.recurrence_type || "none",
    recurrence_days: booking.recurrence_days ?? 0,
    recurrence_nth_of_month: booking.recurrence_nth_of_month ?? 0,
    recurrence_interval: booking.recurrence_interval ?? 0,
    recurrence_end: booking.recurrence_end ?? 0,
    recurrence_instances: extension_data.recurrence_instances ?? 0,
    notes: extension_data.notes || "",
    attachments: bookingAttachments(booking),
    update_master: false,
    self_registered: false,
    is_assgined: false
  };
}
function setBookingAsset(model, resource2) {
  if (!resource2) {
    model.update((m) => __spreadProps(__spreadValues({}, m), { asset_id: "" }));
    return;
  }
  model.update((m) => __spreadProps(__spreadValues({}, m), {
    asset_id: resource2.id,
    asset_name: resource2.name,
    name: resource2.display_name || resource2.name || resource2.id,
    map_id: resource2.map_id || resource2.id,
    description: resource2.name,
    zones: resource2.zone ? [resource2.zone?.parent_id, resource2.zone?.id] : [],
    booking_asset: resource2
  }));
}
function generateBookingForm(booking = new Booking(), injector) {
  const started = booking.state === "started";
  const model = signal(
    bookingFormValue(booking),
    ...ngDevMode ? [{ debugName: "model" }] : (
      /* istanbul ignore next */
      []
    )
  );
  guardModelUndefinedWrites(model, bookingFormValue(new Booking()));
  const require_plate_number = settingSignal("parking.require_plate_number", false);
  const require_space_restriction = settingSignal("parking.require_space_restriction", false);
  const space_restriction_options = settingSignal("parking.request_space_restrictions", []);
  const space_restriction_required = computed(
    () => !!require_space_restriction() && (space_restriction_options() || []).some((_) => !!_?.id),
    ...ngDevMode ? [{ debugName: "space_restriction_required" }] : (
      /* istanbul ignore next */
      []
    )
  );
  const require_visitor_reason = settingSignal("visitors.reason_required", false);
  const lock_locker_times = settingSignal("lockers.disabled_date_select", false);
  const times_locked = computed(
    () => model().booking_type === "locker" && !!lock_locker_times(),
    ...ngDevMode ? [{ debugName: "times_locked" }] : (
      /* istanbul ignore next */
      []
    )
  );
  const booking_form = form(model, (p) => {
    required(p.date);
    required(p.asset_id);
    email(p.asset_id, {
      when: ({ valueOf }) => valueOf(p.booking_type) === "visitor"
    });
    required(p.plate_number, {
      when: ({ valueOf }) => valueOf(p.booking_type) === "parking" && require_plate_number()
    });
    validate(p.plate_number, ({ value, valueOf }) => valueOf(p.booking_type) === "parking" && require_plate_number() && !`${value() || ""}`.trim() ? { kind: "required" } : void 0);
    required(p.title, {
      when: ({ valueOf }) => valueOf(p.booking_type) === "visitor" && require_visitor_reason()
    });
    validate(p.title, ({ value, valueOf }) => valueOf(p.booking_type) === "visitor" && require_visitor_reason() && !`${value() || ""}`.trim() ? { kind: "required" } : void 0);
    validate(p.space_restrictions, ({ value, valueOf }) => valueOf(p.booking_type) === "parking" && space_restriction_required() && !value() ? { kind: "required" } : void 0);
    validate(p.duration, ({ value, valueOf }) => {
      const date = valueOf(p.date);
      if (value() <= 0)
        return { kind: "duration" };
      return date && isAfter(Date.now(), addMinutes(date, value())) ? { kind: "duration" } : void 0;
    });
    disabled(p.date, ({ value }) => {
      if (started || times_locked())
        return true;
      return value() < Date.now() && !!untracked(model).id;
    });
    disabled(p.duration, () => times_locked());
  }, { injector });
  onFieldChange(model, (v) => v.user, (user) => {
    if (!user)
      return;
    model.update((m) => __spreadProps(__spreadValues({}, m), {
      user,
      user_id: user?.id ?? "",
      user_email: user?.email ?? "",
      user_name: user?.name ?? ""
    }));
  }, injector);
  onFieldChange(model, (v) => v.resources, (resources) => {
    if (untracked(model).booking_type === "visitor")
      return;
    setBookingAsset(model, (resources || [])[0]);
  }, injector);
  current_user.subscribe((user) => {
    if (!user)
      return;
    model.update((m) => __spreadProps(__spreadValues({}, m), {
      booked_by: user,
      booked_by_id: user?.id,
      booked_by_email: user?.email
    }));
  });
  const time_sync = setupFormTimeSync(model, {}, injector);
  booking_form._time_sync = time_sync;
  model._time_sync = time_sync;
  return { model, form: booking_form, time_sync };
}

// libs/bookings/src/lib/booking-group.utilities.ts
function isGroupBooking(booking) {
  return !!booking?.parent_id || !!booking?.group || !!booking?.extension_data?.group_members?.length;
}
function groupName(existing) {
  return existing || `grp-${randomString(24)}`;
}
function visitorMemberPatch(member, base_form, opts) {
  const member_name = member.name || member.email;
  return __spreadProps(__spreadValues({}, base_form), {
    id: opts.id,
    parent_id: opts.parent_id,
    group: opts.group_name,
    asset_id: member.email,
    asset_name: member_name,
    international: member.international || !!member.extension_data?.international,
    visitor_internal_or_external: toVisitorInternalOrExternal(member.extension_data?.visitor_internal_or_external),
    company: member.company || member.organisation,
    phone: member.phone,
    zones: unique([
      ...opts.org_zones || [],
      ...base_form.zones?.length ? base_form.zones : opts.existing_zones?.length ? opts.existing_zones : opts.fallback_zones || []
    ].filter((_) => _)),
    assets: [],
    attendees: [
      new User({
        name: member_name,
        email: member.email,
        organisation: member.company || member.organisation,
        phone: member.phone
      })
    ]
  });
}
function mapGroupMembers(type, members = []) {
  const user_list = unique(type === "visitor" ? members || [] : [currentUser(), ...members || []], "email");
  return user_list.filter((member) => !!member?.email).map((member) => ({
    id: member.id || "",
    name: member.name || member.email,
    email: member.email,
    company: member.company || member.organisation || "",
    phone: member.phone || "",
    international: !!member.international || !!member.extension_data?.international,
    visitor_internal_or_external: toVisitorInternalOrExternal(member.extension_data?.visitor_internal_or_external)
  }));
}
function mapGroupMembersFromBookings(bookings = [], is_visitor = false) {
  return unique(bookings.map((booking) => {
    const group_member = (booking.extension_data?.group_members || []).find((member) => member?.email === booking.asset_id);
    return is_visitor ? new User({
      name: group_member?.name || booking.extension_data?.visitor_name || booking.asset_name || booking.asset_id,
      email: booking.asset_id,
      organisation: group_member?.company || booking.extension_data?.company,
      phone: group_member?.phone || booking.extension_data?.phone,
      extension_data: {
        international: !!(group_member?.international || booking.extension_data?.international),
        visitor_internal_or_external: group_member?.visitor_internal_or_external === "external" ? "external" : toVisitorInternalOrExternal(booking.extension_data?.visitor_internal_or_external)
      }
    }) : new User({
      id: booking.user_id,
      name: booking.user_name || booking.user_email,
      email: booking.user_email,
      organisation: booking.extension_data?.company,
      phone: booking.extension_data?.phone
    });
  }).filter((member) => !!member?.email), "email");
}
function mapGroupMembersFromExtension(members = [], is_visitor = false) {
  return unique((members || []).filter((member) => !!member?.email).map((member) => new User({
    id: member.id || "",
    name: member.name || member.email,
    email: member.email,
    organisation: member.company || member.organisation || "",
    phone: member.phone || "",
    extension_data: __spreadValues(__spreadProps(__spreadValues({}, member.extension_data || {}), {
      international: !!member.international
    }), is_visitor ? {
      visitor_internal_or_external: toVisitorInternalOrExternal(member.visitor_internal_or_external)
    } : {}),
    international: is_visitor ? !!member.international : false
  })), "email");
}
function matchGroupSiblings(existing_siblings, members, is_visitor) {
  const keyOf = (booking) => is_visitor ? booking.asset_id : booking.user_email;
  const sibling_map = {};
  for (const booking of existing_siblings) {
    const key = keyOf(booking);
    if (key)
      sibling_map[key] = booking;
  }
  const member_keys = new Set(members.map((m) => m.email));
  const to_delete = existing_siblings.filter((booking) => {
    const key = keyOf(booking);
    return key && !member_keys.has(key);
  });
  return { sibling_map, to_delete };
}
async function rollbackGroupBookings(booking_ids) {
  const rollback_errors = (await Promise.allSettled(booking_ids.map((id) => removeBooking(id)))).filter((_) => _.status === "rejected");
  if (rollback_errors.length) {
    console.error("Failed to rollback group bookings", rollback_errors);
  }
}

// libs/bookings/src/lib/booking-form.payload.ts
var BOOKING_MODEL_KEYS = new Set(Object.keys(new Booking()));
var BOOKING_FORM_KEYS = new Set(Object.keys(bookingFormValue(new Booking())));
var BOOKING_EXTENSION_FIELD_BLACKLIST = /* @__PURE__ */ new Set([
  "resources",
  "assets",
  "level"
]);
function formExtensionData(data = {}) {
  const extra = {};
  for (const key in data) {
    if (BOOKING_FORM_KEYS.has(key) && !BOOKING_MODEL_KEYS.has(key) && !BOOKING_EXTENSION_FIELD_BLACKLIST.has(key)) {
      extra[key] = data[key];
    }
  }
  return extra;
}
function formBookingData(value) {
  const data = {};
  for (const key in value) {
    if (key === "extension_data") {
      data.extension_data = formExtensionData(value.extension_data);
    } else if (
      // `asset_ids` is spread into the form model from the booking being
      // edited and never updated when `asset_id` changes, so sending it
      // back would overwrite the new resource with the old one. The
      // `Booking` constructor rebuilds it from `asset_id`.
      key !== "asset_ids" && !BOOKING_EXTENSION_FIELD_BLACKLIST.has(key) && (BOOKING_FORM_KEYS.has(key) || BOOKING_MODEL_KEYS.has(key))
    ) {
      data[key] = value[key];
    }
  }
  return data;
}
function buildBookingExtensionData(value, group_members) {
  const type = value.booking_type;
  return __spreadProps(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadProps(__spreadValues(__spreadValues({}, formExtensionData(value.extension_data)), value.extension_data?.payment_id ? { payment_id: value.extension_data.payment_id } : {}), {
    // `group` is a getter on `Booking`, so the constructor skips the
    // top-level form value — it has to be set into `extension_data` here.
    group: value.group,
    // `assets` is ignored by the constructor's auto-copy, so map it here.
    assets: value.assets.map((_) => _.toJSON())
  }), type === "desk" ? {
    assigned_asset_id: value.asset_id,
    assigned_asset_name: value.asset_name || value.asset_id
  } : {}), type === "visitor" ? {
    international: !!value.international,
    visitor_internal_or_external: toVisitorInternalOrExternal(value.visitor_internal_or_external),
    visitor_name: value.asset_name || value.asset_id || ""
  } : {}), type === "parking" ? {
    requires_manual_approval: !!value.requires_manual_approval,
    user_groups: [
      ...value.user && value.user.email?.toLowerCase() !== currentUser()?.email?.toLowerCase() ? value.user.groups || [] : currentUser()?.groups || []
    ]
  } : {}), group_members.length ? { group_members } : {}), {
    department: value.user?.department || currentUser()?.department
  });
}
function bookingSaveQuery(value, booking) {
  const { event_id, parent_id } = value;
  const q = event_id ? { ical_uid: value.ical_uid, event_id } : parent_id ? { booking_id: parent_id } : {};
  if (booking.instance && !value.update_master) {
    q.instance = true;
    q.start_time = booking.booking_start;
  }
  return q;
}

// libs/bookings/src/lib/booking-link-modal.component.ts
var BookingLinkModalComponent = class _BookingLinkModalComponent {
  constructor() {
    this._event = inject(MAT_DIALOG_DATA);
    this.outlook_link = generateMicrosoftCalendarLink(this._event);
    this.google_link = generateGoogleCalendarLink(this._event);
    this.ical_link = generateCalendarFileLink(this._event);
  }
  static {
    this.\u0275fac = function BookingLinkModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookingLinkModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingLinkModalComponent, selectors: [["booking-link-modal"]], decls: 25, vars: 21, consts: [[1, "w-full", "p-4", "pb-2"], [1, "relative", "flex", "flex-col", "items-center", "space-y-4", "p-4"], ["btn", "", "matRipple", "", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded-sm", "p-2", "pr-4", 3, "href"], ["src", "assets/icons/outlook.svg", 1, "w-6"], ["src", "assets/icons/gcal.svg", 1, "w-6"], [1, "text-xl"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "absolute", "top-2", "right-0"]], template: function BookingLinkModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 1)(4, "a", 2);
        \u0275\u0275element(5, "img", 3);
        \u0275\u0275elementStart(6, "span");
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "a", 2);
        \u0275\u0275element(10, "img", 4);
        \u0275\u0275elementStart(11, "span");
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "a", 2);
        \u0275\u0275pipe(15, "safe");
        \u0275\u0275elementStart(16, "icon", 5);
        \u0275\u0275text(17, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span");
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "button", 6);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementStart(23, "icon");
        \u0275\u0275text(24, "close");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 8, "BOOKING.LINK_HEADER"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("href", ctx.outlook_link, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 10, "BOOKING.LINK_OUTLOOK"));
        \u0275\u0275advance(2);
        \u0275\u0275property("href", ctx.google_link, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 12, "BOOKING.LINK_GOOGLE"));
        \u0275\u0275advance(2);
        \u0275\u0275property("href", \u0275\u0275pipeBind2(15, 14, ctx.ical_link, "url"), \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 17, "BOOKING.LINK_ICAL"));
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(22, 19, "COMMON.CLOSE"));
      }
    }, dependencies: [
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      TranslatePipe,
      SafePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=booking-link-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookingLinkModalComponent, [{
    type: Component,
    args: [{ selector: "booking-link-modal", template: `
        <div class="w-full p-4 pb-2">
            {{ 'BOOKING.LINK_HEADER' | translate }}
        </div>
        <div class="relative flex flex-col items-center space-y-4 p-4">
            <a
                btn
                matRipple
                class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                [href]="outlook_link"
                target="_blank"
                rel="noopener noreferer"
            >
                <img src="assets/icons/outlook.svg" class="w-6" />
                <span>{{ 'BOOKING.LINK_OUTLOOK' | translate }}</span>
            </a>
            <a
                btn
                matRipple
                class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                [href]="google_link"
                target="_blank"
                rel="noopener noreferer"
            >
                <img src="assets/icons/gcal.svg" class="w-6" />
                <span>{{ 'BOOKING.LINK_GOOGLE' | translate }}</span>
            </a>
            <a
                btn
                matRipple
                class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                [href]="ical_link | safe: 'url'"
                target="_blank"
                rel="noopener noreferer"
            >
                <icon class="text-xl">download</icon>
                <span>{{ 'BOOKING.LINK_ICAL' | translate }}</span>
            </a>
        </div>
        <button
            [attr.aria-label]="'COMMON.CLOSE' | translate"
            icon
            matRipple
            mat-dialog-close
            class="absolute top-2 right-0"
        >
            <icon>close</icon>
        </button>
    `, imports: [
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatDialogModule,
      SafePipe
    ], styles: ["/* angular:styles/component:css;726748c2414197d0b1210ead97f5552a150ccdc9b0475e0053e8ed5e76b597ad;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/booking-link-modal.component.ts */\n:host {\n  position: relative;\n}\n/*# sourceMappingURL=booking-link-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingLinkModalComponent, { className: "BookingLinkModalComponent", filePath: "libs/bookings/src/lib/booking-link-modal.component.ts", lineNumber: 81 });
})();

// libs/assets/src/lib/parking-assets.fn.ts
var PARKING_CATEGORY_NAME = "_PARKING_";
var PARKING_TYPE_NAME = "_PARKING_SPACES_";
function resolveParkingTypeId() {
  return resolveHiddenAssetTypeId(PARKING_CATEGORY_NAME, PARKING_TYPE_NAME);
}
async function queryParkingSpacesForZones(zone_ids) {
  if (!zone_ids?.length)
    return [];
  return queryTypeAssetsForZones(await resolveParkingTypeId(), zone_ids);
}
var PARKING_USER_TYPE_NAME = "_PARKING_USERS_";
function resolveParkingUserTypeId() {
  return resolveHiddenAssetTypeId(PARKING_CATEGORY_NAME, PARKING_USER_TYPE_NAME);
}
function toParkingUser(asset) {
  const data = asset.other_data || {};
  return {
    id: asset.id,
    name: asset.identifier || "",
    email: data.email || "",
    car_model: data.car_model || "",
    car_colour: data.car_colour || "",
    plate_number: data.plate_number || "",
    phone: data.phone || "",
    notes: asset.notes || "",
    deny: String(data.deny) === "true",
    special_needs: String(data.special_needs) === "true"
  };
}
async function queryParkingUsers(zone_id) {
  const assets = await queryTypeAssetsForZones(await resolveParkingUserTypeId(), [zone_id]);
  return assets.map(toParkingUser);
}

// libs/bookings/src/lib/booking-resource.loaders.ts
var _in_flight = /* @__PURE__ */ new Map();
function shareInFlight(key, load) {
  const scoped_key = `${Un() ? "mock" : "live"}|${key}`;
  const existing = _in_flight.get(scoped_key);
  if (existing)
    return existing;
  const request = load().finally(() => _in_flight.delete(scoped_key));
  _in_flight.set(scoped_key, request);
  return request;
}
function childMetadata(zone_id, name) {
  return shareInFlight(`metadata|${zone_id}|${name}`, () => bc(zone_id, { name }));
}
function deskAssets(zone_id) {
  return shareInFlight(`desk-assets|${zone_id}`, () => queryDeskAssetsInZone(zone_id));
}
async function loadParkingResources(org, use_region) {
  const levels = (use_region ? org.levelsForRegion() : org.levelsForBuilding()).filter((_) => _.tags.includes("parking"));
  const spaces = await queryParkingSpacesForZones(levels.map((l) => l.id));
  return spaces.map((s) => __spreadProps(__spreadValues({}, s), {
    id: s.id || s.map_id,
    groups: s.place_groups,
    zone: org.levelWithID([s.zone_id])
  }));
}
async function loadDeskResources(org, use_region) {
  const zone_id = use_region ? org.building?.parent_id : org.building?.id;
  if (!zone_id)
    return [];
  const assets = await deskAssets(zone_id);
  return assets.map((asset) => deskFromAsset(asset, org.levelWithID([asset.zone_id])));
}
async function loadMetadataResources(org, type, use_region) {
  const map_metadata = (_) => (_?.metadata[type]?.details instanceof Array ? _.metadata[type].details : []).map((d) => __spreadProps(__spreadValues({}, d), {
    id: d.id || d.map_id,
    zone: _.zone
  }));
  const id = use_region ? org.building?.parent_id : org.building?.id;
  if (!id)
    return [];
  if (use_region) {
    const buildings = org.buildings.filter((_) => _.parent_id === id);
    const lists = await Promise.all(buildings.map((_) => childMetadata(_.id, type).then((data2) => flatten(data2.map(map_metadata)))));
    return flatten(lists);
  }
  const data = await childMetadata(id, type);
  return flatten(data.map(map_metadata));
}
function assignedDeskBuilding(org, user_email, use_assets) {
  const buildings = org.building_list() || [];
  const email2 = user_email?.toLowerCase();
  if (!buildings.length || !email2)
    return Promise.resolve(null);
  const building_ids = buildings.map((building) => building.id);
  const key = `assigned-desk|${use_assets}|${email2}|${building_ids.join(",")}`;
  return shareInFlight(key, async () => {
    if (use_assets) {
      const lists = await Promise.all(building_ids.map((id) => deskAssets(id).catch(() => [])));
      const index2 = lists.findIndex((desks) => desks.some((item) => item.assigned_to?.toLowerCase() === email2));
      return index2 >= 0 ? building_ids[index2] : null;
    }
    const map_metadata = (meta) => (meta?.metadata?.desks?.details instanceof Array ? meta.metadata.desks.details : []).map((desk) => new Desk(__spreadProps(__spreadValues({}, desk), { zone: meta.zone })));
    const desk_lists = await Promise.all(building_ids.map((id) => childMetadata(id, "desks").then((data) => flatten(data.map(map_metadata))).catch(() => [])));
    const index = desk_lists.findIndex((list) => list.some((desk) => desk.assigned_to?.toLowerCase() === email2));
    return index >= 0 ? building_ids[index] : null;
  });
}
async function hasAssignedDesk(org, user_email, use_assets) {
  return !!await assignedDeskBuilding(org, user_email, use_assets);
}

// libs/bookings/src/lib/booking-resource.utilities.ts
function resourceMatches(resource2, id) {
  if (!resource2 || !id)
    return false;
  return resource2.id === id || resource2.map_id === id;
}
function findResourceById(resources, id) {
  return (resources || []).find((_) => resourceMatches(_, id));
}
function resourceReserved(resource2, reserved_ids) {
  return !!(resource2 && (resource2.id && reserved_ids.has(resource2.id) || resource2.map_id && reserved_ids.has(resource2.map_id)));
}
function reserveResource(resource2, reserved_ids) {
  if (!resource2)
    return;
  if (resource2.id)
    reserved_ids.add(resource2.id);
  if (resource2.map_id)
    reserved_ids.add(resource2.map_id);
}
async function nearbyResources(map_url, id, resources, count, reserved_ids = /* @__PURE__ */ new Set()) {
  const nearby_resources = [];
  let asset_list = resources.filter((_) => !resourceReserved(_, reserved_ids) && !resourceMatches(_, id));
  for (let i = 0; i < count; i++) {
    const item = await findNearbyFeature(map_url, id, asset_list.map((_) => _.map_id || _.id));
    if (item) {
      const resource2 = resources.find((_) => resourceMatches(_, item));
      if (!resource2 || resourceReserved(resource2, reserved_ids)) {
        asset_list = asset_list.filter((_) => !resourceMatches(_, item));
        continue;
      }
      nearby_resources.push(resource2);
      reserveResource(resource2, reserved_ids);
      asset_list = asset_list.filter((_) => !resourceMatches(_, item));
    }
  }
  return nearby_resources;
}
function preferredAllocationPool(available, user_groups) {
  if (!user_groups.length)
    return available;
  const tagMatch = (asset) => !!asset.tags?.some((tag) => user_groups.includes(tag));
  const homebaseMatch = (asset) => !!asset.homebase && user_groups.includes(asset.homebase);
  const tag_matched = available.filter(tagMatch);
  const homebase_matched = available.filter(homebaseMatch);
  const both_matched = tag_matched.filter(homebaseMatch);
  if (both_matched.length)
    return both_matched;
  if (homebase_matched.length)
    return homebase_matched;
  if (tag_matched.length)
    return tag_matched;
  return available;
}
function pickAutoAllocatedResource(available) {
  const zone_map = {};
  for (const asset of available) {
    const zone_id = asset.zone?.id || "unknown";
    if (!zone_map[zone_id])
      zone_map[zone_id] = [];
    zone_map[zone_id].push(asset);
  }
  let best_zone_id = "";
  let best_count = 0;
  for (const zone_id in zone_map) {
    if (zone_map[zone_id].length > best_count) {
      best_count = zone_map[zone_id].length;
      best_zone_id = zone_id;
    }
  }
  const candidates = zone_map[best_zone_id];
  return candidates[Math.floor(Math.random() * candidates.length)];
}

// libs/bookings/src/lib/desk-questions-modal.component.ts
function DeskQuestionsModalComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "h2", 2);
    \u0275\u0275text(2, "COVID-19 Questionnaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "main", 3)(4, "div", 4)(5, "label");
    \u0275\u0275text(6, " Have you travelled overseas within the last 14 days?");
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-radio-group", 5)(10, "mat-radio-button", 6);
    \u0275\u0275text(11, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-radio-button", 6);
    \u0275\u0275text(13, "No");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 4)(15, "label");
    \u0275\u0275text(16, " Are you unwell or experiencing any cold or flu-like symptoms?");
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-radio-group", 5)(20, "mat-radio-button", 6);
    \u0275\u0275text(21, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "mat-radio-button", 6);
    \u0275\u0275text(23, "No");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 7)(25, "label");
    \u0275\u0275text(26, " Have you had contact with anyone with suspected COVID-19?");
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "mat-radio-group", 5)(30, "mat-radio-button", 6);
    \u0275\u0275text(31, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-radio-button", 6);
    \u0275\u0275text(33, "No");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "footer", 8)(35, "button", 9);
    \u0275\u0275listener("click", function DeskQuestionsModalComponent_Conditional_0_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275text(36, "Submit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "button", 10)(38, "icon");
    \u0275\u0275text(39, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("formField", ctx_r1.form.travelled);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("value", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", false);
    \u0275\u0275advance(7);
    \u0275\u0275property("formField", ctx_r1.form.unwell);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("value", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", false);
    \u0275\u0275advance(7);
    \u0275\u0275property("formField", ctx_r1.form.contact);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("value", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", false);
  }
}
function DeskQuestionsModalComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 1)(1, "p", 3);
    \u0275\u0275text(2, " Your request to work from the office has been rejected based on your response to the compulsory Covid-19 questions. Please feel free to submit a new request when circumstances change in a way that changes your answer to the questions. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 10)(4, "icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
}
var DeskQuestionsModalComponent = class _DeskQuestionsModalComponent {
  constructor() {
    this.event = new EventEmitter();
    this.model = signal(
      {
        travelled: false,
        unwell: false,
        contact: false
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model);
    this.failure = signal(
      false,
      ...ngDevMode ? [{ debugName: "failure" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  submit() {
    this.form().markAsTouched();
    if (Object.values(this.model()).find((value) => value === true || value === "true")) {
      this.failure.set(true);
      return;
    }
    this.event.emit({ reason: "done" });
  }
  static {
    this.\u0275fac = function DeskQuestionsModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskQuestionsModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskQuestionsModalComponent, selectors: [["desk-question-modal"]], outputs: { event: "event" }, decls: 2, vars: 1, consts: [[1, "relative"], ["failure", "", 1, "relative", "pt-8"], [1, "p-4", "text-xl"], [1, "p-4"], [1, "mb-4", "flex", "flex-col"], [1, "space-x-2", 3, "formField"], [3, "value"], [1, "flex", "flex-col"], [1, "flex", "items-center", "justify-center", "p-2"], ["btn", "", "matRipple", "", 3, "click"], ["aria-label", "Close", "close", "", "icon", "", "matRipple", "", "mat-dialog-close", ""]], template: function DeskQuestionsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, DeskQuestionsModalComponent_Conditional_0_Template, 40, 9, "div", 0)(1, DeskQuestionsModalComponent_Conditional_1_Template, 6, 0, "main", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx.failure() ? 0 : 1);
      }
    }, dependencies: [
      IconComponent,
      MatDialogModule,
      MatDialogClose,
      MatRippleModule,
      MatRipple,
      MatRadioModule,
      MatRadioGroup,
      MatRadioButton,
      FormField
    ], styles: ["\nmain[_ngcontent-%COMP%] {\n  width: 24rem;\n  max-width: calc(100vw - 4.5rem);\n}\n[close][_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n}\n/*# sourceMappingURL=desk-questions-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskQuestionsModalComponent, [{
    type: Component,
    args: [{ selector: "desk-question-modal", template: `
        @if (!failure()) {
            <div class="relative">
                <h2 class="p-4 text-xl">COVID-19 Questionnaire</h2>
                <main class="p-4">
                    <div class="mb-4 flex flex-col">
                        <label>
                            Have you travelled overseas within the last 14
                            days?<span>*</span>
                        </label>
                        <mat-radio-group
                            [formField]="form.travelled"
                            class="space-x-2"
                        >
                            <mat-radio-button [value]="true"
                                >Yes</mat-radio-button
                            >
                            <mat-radio-button [value]="false"
                                >No</mat-radio-button
                            >
                        </mat-radio-group>
                    </div>
                    <div class="mb-4 flex flex-col">
                        <label>
                            Are you unwell or experiencing any cold or flu-like
                            symptoms?<span>*</span>
                        </label>
                        <mat-radio-group
                            [formField]="form.unwell"
                            class="space-x-2"
                        >
                            <mat-radio-button [value]="true"
                                >Yes</mat-radio-button
                            >
                            <mat-radio-button [value]="false"
                                >No</mat-radio-button
                            >
                        </mat-radio-group>
                    </div>
                    <div class="flex flex-col">
                        <label>
                            Have you had contact with anyone with suspected
                            COVID-19?<span>*</span>
                        </label>
                        <mat-radio-group
                            [formField]="form.contact"
                            class="space-x-2"
                        >
                            <mat-radio-button [value]="true"
                                >Yes</mat-radio-button
                            >
                            <mat-radio-button [value]="false"
                                >No</mat-radio-button
                            >
                        </mat-radio-group>
                    </div>
                </main>
                <footer class="flex items-center justify-center p-2">
                    <button btn matRipple (click)="submit()">Submit</button>
                </footer>
                <button
                    aria-label="Close"
                    close
                    icon
                    matRipple
                    mat-dialog-close
                >
                    <icon>close</icon>
                </button>
            </div>
        } @else {
            <main failure class="relative pt-8">
                <p class="p-4">
                    Your request to work from the office has been rejected based
                    on your response to the compulsory Covid-19 questions.
                    Please feel free to submit a new request when circumstances
                    change in a way that changes your answer to the questions.
                </p>
                <button
                    aria-label="Close"
                    close
                    icon
                    matRipple
                    mat-dialog-close
                >
                    <icon>close</icon>
                </button>
            </main>
        }
    `, imports: [
      IconComponent,
      MatDialogModule,
      MatRippleModule,
      MatRadioModule,
      FormField
    ], styles: ["/* angular:styles/component:css;c7f37c1e60a5fae4a31dda6fbae0d3cc845b39f17b3f09824fe872f6bf4e7f79;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/desk-questions-modal.component.ts */\nmain {\n  width: 24rem;\n  max-width: calc(100vw - 4.5rem);\n}\n[close] {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n}\n/*# sourceMappingURL=desk-questions-modal.component.css.map */\n"] }]
  }], null, { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskQuestionsModalComponent, { className: "DeskQuestionsModalComponent", filePath: "libs/bookings/src/lib/desk-questions-modal.component.ts", lineNumber: 123 });
})();

// libs/bookings/src/lib/booking-form.service.ts
var BOOKING_TYPES = ["desk", "parking", "locker", "catering"];
var STORAGE_KEYS = {
  booking_form: "PLACEOS.booking_form",
  booking_form_options: "PLACEOS.booking_form_options",
  booking_form_filters: "PLACEOS.booking_form_filters",
  last_booked_booking: "PLACEOS.last_booked_booking",
  last_booked_count: "PLACEOS.last_booked_count",
  last_group_booking_ids: "PLACEOS.last_group_booking_ids",
  last_group_booking_errors: "PLACEOS.last_group_booking_errors"
};
function resourceSettled(ref) {
  const status = ref.status();
  return status === "resolved" || status === "local" || status === "error";
}
function bookingOptionsMatch(a, b) {
  const keys = Array.from(/* @__PURE__ */ new Set([
    ...Object.keys(a),
    ...Object.keys(b)
  ]));
  return keys.every((key) => a[key] === b[key]);
}
var AVAILABILITY_SELECTION_FIELDS = /* @__PURE__ */ new Set([
  "resources",
  "booking_asset",
  "asset_id",
  "asset_name",
  "map_id",
  "name",
  "description",
  "zones"
]);
function availabilityFormMatch(a, b) {
  if (!a || !b)
    return a === b;
  const keys = /* @__PURE__ */ new Set([...Object.keys(a), ...Object.keys(b)]);
  return [...keys].every((key) => AVAILABILITY_SELECTION_FIELDS.has(key) || Object.is(a[key], b[key]));
}
function assetDateValue(date) {
  const date_value = date instanceof Date ? date.valueOf() : Number(date);
  return Number.isFinite(date_value) ? date_value : null;
}
function assetDurationValue(duration) {
  const duration_value = Number(duration);
  return Number.isFinite(duration_value) ? duration_value : null;
}
function assetWindowKey(date, duration) {
  const date_value = assetDateValue(date);
  const duration_value = assetDurationValue(duration);
  return date_value && duration_value ? `${date_value}:${duration_value}` : "";
}
var DESK_ONLY_FIELDS = [
  "secondary_resource",
  "recurrence_type",
  "recurrence_days",
  "recurrence_nth_of_month",
  "recurrence_interval",
  "recurrence_end",
  "recurrence_instances",
  "recurrence_custom"
];
function knownBookingType(type) {
  return type && type !== " " ? type : void 0;
}
function isCrossTypeEdit(booking, type) {
  const booking_type = knownBookingType(booking?.booking_type);
  return !!booking?.id && !!booking_type && booking_type !== type;
}
var BookingFormService = class _BookingFormService extends AsyncHandler {
  get last_count() {
    return parseInt(sessionStorage.getItem(STORAGE_KEYS.last_booked_count) || "1", 10);
  }
  set last_count(value) {
    sessionStorage.setItem(STORAGE_KEYS.last_booked_count, String(value));
  }
  /** Apply a partial patch to the booking form model. */
  _patch(value, _opts) {
    this.model.update((m) => __spreadValues(__spreadValues({}, m), value));
  }
  /**
   * The fields the user has actually edited, with their current values.
   *
   * Reads the signal-forms dirty flags rather than diffing against a
   * default. Programmatic writes (`_patch`, `model.set`) do not mark a field
   * dirty, so this returns user input — which is what makes it safe to
   * replay over a freshly loaded booking. One exception: the recurrence
   * field adjusts a recurrence when the date changes, and that write goes
   * through `setUserValues`.
   */
  _userEditedValues() {
    const form2 = this.form;
    if (!form2)
      return {};
    const model = untracked(this.model);
    const edits = {};
    for (const key of Object.keys(model || {})) {
      const field = form2[key];
      if (typeof field !== "function")
        continue;
      try {
        if (field()?.dirty?.())
          edits[key] = model[key];
      } catch {
        continue;
      }
    }
    return edits;
  }
  /**
   * Stash the user's in-progress edits for the reset that is about to run.
   *
   * Merges rather than replaces. A flow resets twice in a row — `loadForm`
   * then `newForm` — and the first `form().reset()` clears the dirty flags
   * `_userEditedValues` reads, so a plain assignment would overwrite a real
   * capture with an empty one on the second call.
   */
  _captureUserEdits() {
    const pending = this._pending_user_edits;
    const values = __spreadValues(__spreadValues({}, pending?.values), this._userEditedValues());
    const { group, members } = this._options();
    const options = pending?.options ?? (group || members?.length ? { group, members } : {});
    const has_edits = Object.keys(values).length || Object.keys(options).length;
    this._pending_user_edits = has_edits ? { values, options } : null;
  }
  /**
   * The stashed edits that apply to a reset for the given booking type.
   *
   * A change from one booking flow to a different one does not reset the
   * form, so the stash can hold edits from the form of a different booking
   * type. A locker request, a recurrence, and a group selection apply only
   * to a desk form, because no other form shows them. All other edits
   * apply to each form.
   */
  _userEditsFor(type) {
    const edits = this._pending_user_edits;
    if (!edits || type === "desk")
      return edits;
    const values = __spreadValues({}, edits.values);
    for (const key of DESK_ONLY_FIELDS)
      delete values[key];
    return { values, options: {} };
  }
  /**
   * Re-apply the user's edits over the booking that a reset loaded.
   *
   * A replayed start time or duration moves the end time with it. If the
   * end time stays at the value of the loaded booking, the time sync
   * calculates the duration from it and discards the user's value.
   */
  _replayUserEdits(edits) {
    if (!edits)
      return;
    this._patch(edits.values);
    const { date, duration, all_day } = this.model();
    const window_changed = "date" in edits.values || "duration" in edits.values;
    if (all_day || !window_changed)
      return;
    this._patch({ date_end: addMinutes(date, duration).valueOf() });
  }
  /**
   * Apply a change the user made in a control that has no `[formField]`
   * binding.
   *
   * Marks each changed field dirty, as `[formField]` does, so
   * `_userEditedValues` keeps the change across a form reset.
   */
  setUserValues(value) {
    this._patch(value);
    for (const key of Object.keys(value)) {
      this.form[key]?.().markAsDirty();
    }
  }
  _syncAssetOptions() {
    const { date, duration } = untracked(this.model);
    const next_asset_window = assetWindowKey(date, duration);
    if (!next_asset_window || this._asset_window === next_asset_window) {
      return;
    }
    const date_value = assetDateValue(date);
    const duration_value = assetDurationValue(duration);
    if (!date_value || !duration_value)
      return;
    this._asset_window = next_asset_window;
    this._assets.setOptions({
      date: date_value,
      duration: duration_value
    });
  }
  _startNetwork() {
    this._network_requested = true;
    this._network_consumed.set(true);
  }
  /**
   * Stop the resource, rule and availability loads when the user leaves
   * the booking flows. Opening or loading a form starts them again. Calls
   * that wait for the loads keep them active until they resolve.
   */
  releaseNetwork() {
    this._network_consumed.set(false);
  }
  /** Keep the loads active while `work` runs */
  async _holdNetwork(work) {
    this._network_holds.update((count) => count + 1);
    try {
      return await work();
    } finally {
      this._network_holds.update((count) => count - 1);
    }
  }
  /** Load the resource list again after a failure */
  reloadResources() {
    this._resources_resource.reload();
  }
  get booking() {
    return this._booking();
  }
  /** Resolve with the resources for the current booking type once loaded */
  async listResources() {
    this._startNetwork();
    return this._holdNetwork(async () => {
      await firstValueWhere(computed(() => this._resourcesReady()), (ready) => ready, this._injector);
      return this.resources();
    });
  }
  /** Resolve with the available resources for the current selection */
  async listAvailableResources() {
    this._startNetwork();
    return this._holdNetwork(async () => {
      await firstValueWhere(computed(() => this._resourcesReady() && this._booking_rules_params_debounced.value() === this._booking_rules_params() && // Rules stay idle when there are no buildings to load.
      (!this._booking_rules_params() || resourceSettled(this._booking_rules_resource))), (ready) => ready, this._injector);
      return this._computeAvailableResources(this._options(), this.resources(), this.booking_rules(), this.model());
    });
  }
  /**
   * Whether the resource list matches the current building and type.
   *
   * Callers check this with the other conditions in one pass. An org reload
   * can make the requests unready after an earlier check passes, and that
   * resets the resources to an idle, empty state.
   */
  _resourcesReady() {
    return this._requests_ready() && this._resource_params_debounced.value() === this._resource_params() && resourceSettled(this._resources_resource);
  }
  /** Resolve once the given resource has finished loading */
  _whenSettled(ref) {
    return firstValueWhere(ref.isLoading, (loading) => !loading, this._injector);
  }
  /** Load the resource list for the given booking type */
  _loadResourcesForType(type) {
    switch (type) {
      case "desk":
        this._loading.set(i18n("BOOKINGS.DESKS_LOADING"));
        return this._finishResourceLoad(this.loadResourceList("desks"));
      case "parking":
        this._loading.set(i18n("BOOKINGS.PARKING_LOADING"));
        return this._finishResourceLoad(this.loadParkingResources());
      case "locker":
        this._loading.set(i18n("BOOKINGS.LOCKERS_LOADING"));
        return this._finishResourceLoad(this._loadLockerResources());
    }
    return Promise.resolve([]);
  }
  _finishResourceLoad(load) {
    return load.then((list) => {
      this._resources_failed.set(false);
      return list;
    }).catch(() => {
      this._resources_failed.set(true);
      return [];
    }).then((list) => {
      this._loading.set("");
      return list;
    });
  }
  _computeHasAssignedDesk(user_email = currentUser()?.email) {
    return hasAssignedDesk(this._org, user_email, this._settings.get("app.desks.use_assets"));
  }
  /**
   * Whether the given user has a resource of `type` reserved (assigned) to
   * them. Only desk/parking/locker support assignment; any other type resolves
   * to `false` so it is never blocked by the reserved-resource restriction.
   */
  async _computeHasAssignedResource(type, user_email = currentUser()?.email) {
    if (type === "desk")
      return this._computeHasAssignedDesk(user_email);
    const email2 = user_email?.toLowerCase();
    if (!email2)
      return false;
    const resources = await this._loadRawResourcesForType(type).catch(() => []);
    return resources.some((resource2) => resource2.assigned_to?.toLowerCase() === email2);
  }
  /**
   * Load the resource list for `type` without the loading-message side effects
   * of `_loadResourcesForType`, so it can be used for background checks (e.g.
   * detecting an assigned resource during submission).
   */
  _loadRawResourcesForType(type) {
    switch (type) {
      case "parking":
        return this.loadParkingResources();
      case "locker":
        return this._loadLockerResources();
    }
    return Promise.resolve([]);
  }
  async _computeAvailableResources(options, resources, restrictions, raw) {
    const { all_day, user } = raw;
    let { date, duration } = raw;
    if (all_day) {
      ({ date, duration } = this._allDayTimeRange(date));
    }
    const favourites = this._favourites[options.type]?.() || [];
    const default_zone = (this._settings.get("app.use_region") ? this._org.region?.id : this._org.building?.id) || this._org.organisation.id;
    const zones = options.zones?.length ? options.zones.join(",") : options.zone_id || default_zone;
    let booked_ids = [];
    if (!Un()) {
      booked_ids = await this._bookedResourceList({
        period_start: getUnixTime(date),
        period_end: getUnixTime(addMinutes(date, duration)),
        type: options.type,
        zones
      }, resources.length);
      if (options.type === "desk" && raw.recurrence_type && raw.recurrence_type !== "none") {
        const recurring_clashes = await this._recurringBookedResourceList(resources, zones, raw);
        booked_ids = unique([...booked_ids, ...recurring_clashes]);
      }
    }
    this._resource_use = {};
    for (const id of booked_ids) {
      this._resource_use[id] = " ";
    }
    return resources.filter((asset) => {
      const is_restricted = rulesForResource({
        date,
        duration,
        resource: asset,
        host: this._bookingRulesHost(user)
      }, restrictions[asset.zone?.id] || restrictions[asset.zone?.parent_id] || restrictions[this._org.building?.id] || []).hidden;
      const zone_filter = options.zones?.length ? options.zones.some((zone_id) => zone_id === asset.zone?.id || zone_id === asset.zone?.parent_id) : options.zone_id ? options.zone_id === asset.zone?.id || options.zone_id === asset.zone?.parent_id : true;
      return !is_restricted && (!options.show_fav || favourites.includes(asset.id)) && (!asset.groups?.length || asset.groups.some((grp) => currentUser().groups.includes(grp))) && asset.bookable !== false && (!options.features || options.features?.every((_) => asset.features.includes(_))) && zone_filter && !booked_ids.includes(asset.id);
    });
  }
  _bookedResourceList(query, resource_count) {
    const key = JSON.stringify(__spreadProps(__spreadValues({}, query), { resource_count }));
    const existing = this._booked_resource_requests.get(key);
    if (existing)
      return existing;
    const request = new Promise((resolve, reject) => {
      this._booked_resource_debounce.push({
        query,
        resource_count,
        resolve,
        reject
      });
      this.timeout("booked-resource", () => {
        const queue = this._booked_resource_debounce;
        this._booked_resource_debounce = [];
        const latest = queue[queue.length - 1];
        bookedResourceList(latest.query, latest.resource_count).then((result) => queue.forEach((item) => item.resolve(result)), (error) => queue.forEach((item) => item.reject(error)));
      });
    }).finally(() => this._booked_resource_requests.delete(key));
    this._booked_resource_requests.set(key, request);
    return request;
  }
  resourceUserName(id) {
    return this._resource_use[id];
  }
  get timezone() {
    const use_building_timezone = this.setting("use_building_timezone");
    return use_building_timezone ? this._org.building?.timezone || "" : "";
  }
  /**
   * Reset the form to `booking`, or to an empty booking of `type`.
   * A booking without an `id` takes the configured `default_duration`, so
   * set a different length on the model after this call.
   */
  newForm(type, booking = new Booking({})) {
    this._resetForm(type, booking, true);
  }
  /**
   * Reset the form to `booking`. Set `start_network` to start the resource,
   * rule and availability loads. When the user is not loaded, the reset
   * waits for the user and keeps the same choice.
   */
  _resetForm(type, booking, start_network) {
    if (!currentUserIsLoaded()) {
      currentUserLoaded().then(() => {
        this._captureUserEdits();
        this._resetForm(type, booking, start_network);
      });
      return;
    }
    const user_edits = this._userEditsFor(type);
    this._pending_user_edits = null;
    if (isCrossTypeEdit(booking, type))
      booking = new Booking({});
    if (start_network)
      this._startNetwork();
    this._calendar.loadCalendars();
    if (type !== this._options().type) {
      this._clearStoredForm();
    }
    this.setOptions({ type });
    this._asset_window = untracked(() => {
      const { date, duration } = this._assets.getOptions();
      return assetWindowKey(date, duration);
    });
    const initial_date = booking.date;
    const initial_duration = booking.duration;
    if (!booking.id) {
      booking.all_day = this.setting("all_day_default");
    }
    this.model.set(bookingFormValue(new Booking()));
    this.form().reset();
    this._patch(li(__spreadProps(__spreadValues(__spreadProps(__spreadValues({}, booking.extension_data), {
      attachments: bookingAttachments(booking)
    }), booking), {
      _in_progress: booking.state === "started" || booking.state === "in_progress",
      // `Booking` has no `user` object, only the flat `user_*`
      // fields, so the host has to be rebuilt from those. Without
      // it the form keeps the signed-in user and editing a
      // delegate booking reassigns the host on save.
      user: bookingHostUser(booking)
    }), [null, void 0, ""]), { emitEvent: false });
    const default_duration = Number(this.setting("default_duration"));
    if (!booking.id && default_duration > 0) {
      this._patch({
        duration: default_duration,
        date_end: addMinutes(this.model().date, default_duration).valueOf()
      });
    }
    this._replayUserEdits(user_edits);
    this._patch({ booking_type: this._formBookingType() });
    this.applyDurationSettings();
    this._syncAssetOptions();
    const form_change = effect(() => {
      this._form_value.set(this.model());
      this._syncAssetOptions();
      this.storeForm();
    }, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "form_change" } : (
      /* istanbul ignore next */
      {}
    )), { injector: this._injector }));
    this.subscription("form_change", {
      unsubscribe: () => form_change.destroy()
    });
    this._syncWindowIfUnchanged("date", initial_date, initial_duration, booking.date, booking.duration);
    this._booking.set(new Booking(booking));
    this._options.set(__spreadValues({
      type: this._options().type
    }, user_edits?.options));
    this.storeForm();
    this.timeout("set-resource", async () => {
      const resources = this.model().resources;
      if (!resources?.length)
        return;
      const item_list = await this.listResources();
      const new_list = resources.map((asset) => item_list.find((_) => _.id == asset.id) || asset);
      this._patch({ resources: new_list });
    });
  }
  constructor() {
    super();
    this._router = inject(Router);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._payments = inject(PaymentsService);
    this._assets = inject(AssetStateService);
    this._calendar = inject(CalendarService);
    this._injector = inject(Injector);
    this._options = signal(
      {
        type: "desk"
      },
      ...ngDevMode ? [{ debugName: "_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._booking = signal(
      null,
      ...ngDevMode ? [{ debugName: "_booking" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._resource_use = {};
    this._resources_failed = signal(
      false,
      ...ngDevMode ? [{ debugName: "_resources_failed" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._favourites = {
      " ": settingSignal("favorites", [], true),
      room: settingSignal(SETTING_KEYS.FAVORITE_ROOMS, [], true),
      group: signal([]),
      desk: settingSignal(SETTING_KEYS.FAVORITE_DESKS, [], true),
      locker: settingSignal(SETTING_KEYS.FAVORITE_LOCKERS, [], true),
      parking: settingSignal(SETTING_KEYS.FAVORITE_PARKING_SPACES, [], true),
      staff: settingSignal("favorites", [], true),
      visitor: settingSignal("favorites", [], true),
      "group-event": settingSignal("favorites", [], true),
      "asset-request": settingSignal("favorites", [], true),
      "catering-order": settingSignal("favorites", [], true)
    };
    this._network_requested = false;
    this._network_consumed = signal(
      false,
      ...ngDevMode ? [{ debugName: "_network_consumed" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._network_holds = signal(
      0,
      ...ngDevMode ? [{ debugName: "_network_holds" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._network_active = computed(
      () => this._network_consumed() || this._network_holds() > 0,
      ...ngDevMode ? [{ debugName: "_network_active" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._booked_resource_requests = /* @__PURE__ */ new Map();
    this._booked_resource_debounce = [];
    this._recurring_clash_requests = /* @__PURE__ */ new Map();
    this.last_success = new Booking(JSON.parse(sessionStorage.getItem(STORAGE_KEYS.last_booked_booking) || "{}"));
    this.loading = this._loading.asReadonly();
    this.options = this._options.asReadonly();
    this._form_ref = generateBookingForm(new Booking(), this._injector);
    this.form = this._form_ref.form;
    this.model = this._form_ref.model;
    this._asset_window = "";
    this.view = signal(
      "form",
      ...ngDevMode ? [{ debugName: "view" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._pending_user_edits = null;
    this._requests_ready = computed(
      () => {
        const region = this._org.active_region();
        const building = this._org.active_building();
        const overrides = this._settings.overrides();
        const required_overrides = (this._org.settings?.length || 0) + 2;
        return this._org.initialised() && (!this._org.regions.length || !!region?.id) && !!building?.id && // The override count can be satisfied by placeholder `{}` building
        // settings before `loadBuildingData` populates them, so also wait
        // for the active building's metadata to actually land. Otherwise
        // building/region-level settings (e.g. assigned_resource_booking)
        // read as their defaults during the load window.
        this._org.active_building_loaded() && overrides.length >= required_overrides;
      },
      ...ngDevMode ? [{ debugName: "_requests_ready" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._form_value = signal(
      null,
      ...ngDevMode ? [{ debugName: "_form_value" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._form_value_debounced = debounced(this._form_value, 500, {
      injector: this._injector,
      equal: availabilityFormMatch
    });
    this._resource_params = computed(
      () => {
        const building = this._org.active_building();
        if (!building?.id)
          return void 0;
        return { building: building.id, type: this._options().type };
      },
      ...ngDevMode ? [{ debugName: "_resource_params" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._resource_params_debounced = debounced(this._resource_params, 300, { injector: this._injector, equal: Object.is });
    this._resources_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_resources_resource" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._network_active() && this._requests_ready() ? this._resource_params_debounced.value() : void 0,
      loader: ({ params }) => this._loadResourcesForType(params.type)
    }));
    this.resources = computed(
      () => {
        return this._resources_resource.value() ?? [];
      },
      ...ngDevMode ? [{ debugName: "resources" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.features = computed(
      () => {
        const list = [];
        for (const { features } of this.resources()) {
          features instanceof Array ? features.forEach((_) => list.push(_)) : null;
        }
        return unique(list).sort((a, b) => a.localeCompare(b));
      },
      ...ngDevMode ? [{ debugName: "features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._booking_rules_params = computed(
      () => {
        const list = this._org.building_list();
        const { type } = this._options();
        return list.length ? { ids: list.map((bld) => bld.id), type } : void 0;
      },
      ...ngDevMode ? [{ debugName: "_booking_rules_params" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._booking_rules_params_debounced = debounced(this._booking_rules_params, 300, { injector: this._injector, equal: Object.is });
    this._booking_rules_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_booking_rules_resource" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._network_active() && this._requests_ready() ? this._booking_rules_params_debounced.value() : void 0,
      loader: ({ params }) => {
        const { ids, type } = params;
        return Promise.all(ids.map((id) => _c(id, `${type}_booking_rules`))).then((building_rules) => {
          const mapping = {};
          for (const rules of building_rules) {
            mapping[rules.id] = rules.details instanceof Array ? rules.details : [];
          }
          return mapping;
        }).catch(() => ({}));
      }
    }));
    this.booking_rules = computed(
      () => {
        return this._booking_rules_resource.value() ?? {};
      },
      ...ngDevMode ? [{ debugName: "booking_rules" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._has_assigned_desk_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_has_assigned_desk_resource" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => {
        if (!this._network_active() || !this._requests_ready()) {
          return void 0;
        }
        const buildings = this._org.building_list();
        const email2 = currentUser()?.email;
        return buildings.length && email2 ? { buildings, email: email2 } : void 0;
      },
      loader: () => this._computeHasAssignedDesk()
    }));
    this.has_assigned_desk = computed(
      () => {
        return this._has_assigned_desk_resource.value() ?? false;
      },
      ...ngDevMode ? [{ debugName: "has_assigned_desk" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._available_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_available_resource" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => {
        if (!this._network_active() || !this._requests_ready()) {
          return void 0;
        }
        if (this._resources_resource.isLoading() || this._booking_rules_resource.isLoading()) {
          return void 0;
        }
        return {
          options: this._options(),
          resources: this.resources(),
          rules: this.booking_rules(),
          // Rules and resource groups can depend on the user's groups
          groups: user_group_names(),
          form: this._form_value_debounced.value()
        };
      },
      loader: ({ params: { options, resources, rules, form: form2 } }) => {
        const raw = form2;
        if (!(raw?.date > 0 && raw?.duration > 0)) {
          return Promise.resolve([]);
        }
        if (!resources.length)
          return Promise.resolve([]);
        this._loading.set(i18n("BOOKINGS.LOADING_AVAILABILITY", { type: options.type }));
        return this._computeAvailableResources(options, resources, rules, raw).catch(() => []).then((available) => {
          this._loading.set("");
          return available;
        });
      }
    }));
    this.available_resources = computed(
      () => {
        return this._available_resource.value() ?? [];
      },
      ...ngDevMode ? [{ debugName: "available_resources" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.load_failed = this._resources_failed.asReadonly();
    this.subscription("router.bookings", this._router.events.subscribe((booking) => {
      const url = booking instanceof NavigationEnd ? booking.urlAfterRedirects || booking.url : "";
      if (booking instanceof NavigationEnd && !url.includes("book") && !BOOKING_TYPES.find((_) => url.includes(_))) {
        this.clearForm();
      }
    }));
    this._org.waitUntilInitialised().then(() => this.setOptions({}));
    this._form_value.set(this.model());
    effect(() => {
      const overrides = this._settings.overrides();
      if (overrides?.length)
        this.applyDurationSettings();
    });
  }
  /** Push the current building's duration and bookable-hours settings into the time sync. */
  applyDurationSettings() {
    const handle = this._form_ref.time_sync;
    const period = this.setting("all_day_period");
    handle?.updateOptions({
      min_duration: this.setting("min_duration") ?? 30,
      max_duration: this.setting("max_duration") ?? 0,
      default_duration: this.setting("default_duration") ?? 60,
      custom_duration_options: this.setting("custom_duration_options") ?? [],
      bookable_hours: this.setting("bookable_hours") ?? null,
      timezone: this.timezone,
      all_day_start: period?.start,
      all_day_end: period?.end
    });
  }
  /**
   * Start and end times (ms) of the booking window for a form value.
   * All-day values use the configured all-day period.
   */
  bookingWindow(value) {
    if (value.all_day) {
      const { date, date_end } = this._allDayTimeRange(value.date);
      return { start: date, end: date_end };
    }
    return {
      start: value.date,
      end: addMinutes(value.date, value.duration).valueOf()
    };
  }
  _allDayTimeRange(date) {
    const period = this.setting("all_day_period");
    return getAllDayTimeRange(date, this.timezone, period?.start, period?.end);
  }
  /**
   * Re-apply the supplied booking window after async form setup only if no
   * other consumer has already changed it.
   */
  _syncWindowIfUnchanged(timeout_name, initial_date, initial_duration, date, duration) {
    this.timeout(timeout_name, async () => {
      const window = this.model();
      if (window.date !== initial_date || window.duration !== initial_duration) {
        return;
      }
      this._patch({ date, duration });
    });
  }
  setView(value) {
    this.view.set(value);
  }
  setOptions(value) {
    const current = this._options();
    const next = __spreadValues(__spreadValues({}, current), value);
    if (bookingOptionsMatch(current, next))
      return;
    this._options.set(next);
  }
  setFeature(feature, enable) {
    if (!feature?.length)
      return;
    const features = this._options()?.features || [];
    if (enable && !features.includes(feature)) {
      this.setOptions({ features: [...features, feature] });
    }
    if (!enable && features.includes(feature)) {
      this.setOptions({
        features: features.filter((e) => e !== feature)
      });
    }
  }
  resetForm() {
    if (!currentUserIsLoaded()) {
      currentUserLoaded().then(() => this.resetForm());
      return;
    }
    if (!sessionStorage.getItem(STORAGE_KEYS.booking_form)) {
      return this.newForm(this._options().type);
    }
    const booking = this._booking();
    this.model.set(__spreadProps(__spreadValues({}, bookingFormValue(new Booking())), {
      user: currentUser(),
      booked_by: currentUser()
    }));
    this.form().reset();
    this._patch(li(__spreadProps(__spreadValues(__spreadValues({}, booking || {}), booking?.extension_data || {}), {
      attachments: bookingAttachments(booking),
      user: bookingHostUser(booking),
      _in_progress: booking?.state === "started"
    }), [null, void 0, ""]));
    this._options.set({ type: this._options().type });
  }
  /**
   * Reset the form and its stored state. This does not start the loads: a
   * flow can clear the form while the user leaves it.
   */
  clearForm() {
    this._clearStoredForm();
    this._resetForm(this._options().type, new Booking({}), false);
  }
  _clearStoredForm() {
    sessionStorage.removeItem(STORAGE_KEYS.booking_form);
    sessionStorage.removeItem(STORAGE_KEYS.booking_form_options);
    sessionStorage.removeItem(STORAGE_KEYS.booking_form_filters);
  }
  storeForm() {
    if (typeof sessionStorage === "undefined")
      return;
    sessionStorage.setItem(STORAGE_KEYS.booking_form, JSON.stringify(__spreadValues(__spreadValues({}, this._booking()), li(__spreadValues({}, this.model()), [null, void 0, ""]))));
    sessionStorage.setItem(STORAGE_KEYS.booking_form_filters, JSON.stringify(this._options() || {}));
  }
  loadForm(expected_type) {
    if (!currentUserIsLoaded()) {
      currentUserLoaded().then(() => this.loadForm(expected_type));
      return;
    }
    this._captureUserEdits();
    const user_edits = this._userEditsFor(expected_type);
    queueMicrotask(() => this._pending_user_edits = null);
    this._startNetwork();
    this._calendar.loadCalendars();
    const data = JSON.parse(sessionStorage.getItem(STORAGE_KEYS.booking_form) || "{}");
    const booking = new Booking(data);
    if (expected_type && isCrossTypeEdit(booking, expected_type)) {
      return this.newForm(expected_type);
    }
    const initial_date = booking.date;
    const initial_duration = booking.duration;
    this.setOptions(__spreadValues({}, JSON.parse(sessionStorage.getItem(STORAGE_KEYS.booking_form_filters) || "{}")));
    this._booking.set(booking);
    this.model.set(__spreadProps(__spreadValues({}, bookingFormValue(new Booking())), {
      user: currentUser(),
      booked_by: currentUser()
    }));
    this.form().reset();
    const booking_data = li(__spreadProps(__spreadValues(__spreadValues(__spreadValues({}, data), booking || {}), booking?.extension_data || {}), {
      attachments: bookingAttachments(booking),
      user: bookingHostUser(booking),
      _in_progress: booking?.state === "started"
    }), [null, void 0, ""]);
    this._patch(booking_data, { emitEvent: false });
    this._replayUserEdits(user_edits);
    if (expected_type) {
      this._patch({
        booking_type: knownBookingType(this.model().booking_type) || expected_type
      });
    }
    this.applyDurationSettings();
    this._form_value.set(this.model());
    this._syncAssetOptions();
    this.storeForm();
    this._syncWindowIfUnchanged("load-date", initial_date, initial_duration, booking.date, booking.duration);
    this.setOptions(__spreadValues({}, JSON.parse(sessionStorage.getItem(STORAGE_KEYS.booking_form_filters) || "{}")));
  }
  clearOldState() {
    sessionStorage.removeItem(STORAGE_KEYS.last_booked_booking);
    sessionStorage.removeItem(STORAGE_KEYS.last_booked_count);
    this._loading.set("");
    this.last_success = new Booking();
  }
  openBookingLinkModal(force = false) {
    this.form().markAsTouched();
    if (!this.form().valid() && !force)
      return;
    const event = new Booking(__spreadValues(__spreadValues({}, this.booking), this.model()));
    this._dialog.open(BookingLinkModalComponent, { data: event });
  }
  async confirmPost() {
    await this.checkQuestions();
    const options = this._options();
    const value = this.model();
    const content = i18n(options.group ? "BOOKINGS.CONFIRM_MSG_GROUP" : "BOOKINGS.CONFIRM_MSG", {
      type: options.type,
      date: format(value.date, "dd MMM yyyy") + (value.duration < 12 * 60 ? " at " + format(value.date, "h:mm a") : "")
    });
    const details = await openConfirmModal({
      title: i18n("BOOKINGS.CONFIRM_TITLE", { type: options.type }),
      content,
      icon: { content: "event_available" }
    }, this._dialog);
    if (details?.reason !== "done")
      throw "User cancelled";
    details.loading(i18n("BOOKINGS.CONFIRM_LOADING"));
    if (options.group) {
      await this.postFormForGroup().catch((_) => {
        notifyError(this._error_message(_));
        details.close();
        throw _;
      });
    } else
      await this.postForm().catch((_) => {
        notifyError(this._error_message(_));
        details.close();
        throw _;
      });
    details.close();
  }
  async postForm(ignore_check = false, reset_form = true) {
    if (!this.form)
      throw "No form for booking";
    this._prepareFormForPost();
    localStorage.removeItem(STORAGE_KEYS.last_group_booking_ids);
    const value = this.model();
    const effective_timezone = this.timezone || value.timezone;
    const booking = this._booking() || new Booking();
    const all_day_period = value.all_day ? this._allDayTimeRange(value.date) : {
      date: value.date,
      duration: value.duration,
      date_end: value.date_end
    };
    const bookable_hours = this.setting("bookable_hours");
    if (!isWithinBookableHours(value.date, bookable_hours, effective_timezone)) {
      throw i18n("FORM.BOOKABLE_HOURS_ERROR");
    }
    const host = value.user?.email || value.user_email || currentUser()?.email;
    await this._checkBookingAllowed(__spreadProps(__spreadValues(__spreadValues({}, booking), value), { user_email: host }), all_day_period, effective_timezone, ignore_check);
    const payment = await this._takePayment(value, booking, all_day_period);
    if (payment === false)
      return;
    const selected_zones = [
      ...value?.zones || [],
      ...value.booking_asset?.zones || []
    ].filter((_) => _);
    value.zones = unique(selected_zones.length ? selected_zones : [...this._booking()?.zones || []]);
    this._loading.set(i18n("COMMON.SAVING"));
    delete value.booking_asset;
    value.timezone = effective_timezone;
    if (value.all_day) {
      value.date = all_day_period.date;
      value.duration = all_day_period.duration;
      value.date_end = all_day_period.date_end;
    }
    delete value.booking_start;
    delete value.booking_end;
    const q = bookingSaveQuery(value, booking);
    delete value.event_id;
    const zones = unique([
      ...this._saveZones(value.resources || []),
      ...value.zones || []
    ]).filter((_) => _);
    this._clampRecurrenceEnd(value);
    const group_members = this._options().group && this._options().members?.length ? mapGroupMembers(value.booking_type, this._options().members) : [];
    const result = await saveBooking(new Booking(__spreadProps(__spreadValues({
      type: this._options().type
    }, formBookingData(value)), {
      description: value.booking_type === "visitor" ? value.description || value.title || value.asset_name : value.asset_name || value.description,
      user_id: value.user?.id ?? value.user_id,
      user_name: value.user?.name || value.user_name,
      user_email: value.user?.email || value.user_email,
      extension_data: buildBookingExtensionData(value, group_members),
      approved: this._settings.get("app.bookings.no_approval") === true && currentUserCanApprove(),
      zones
    })).toJSON(), q).catch(async (e) => {
      if (payment)
        await this._payments.cancel(payment).catch(() => null);
      return this._saveFailure(e);
    });
    if (value.assets?.length || booking.extension_data.assets?.length) {
      await this._saveAssetRequests(result, value, booking, zones).catch(async (e) => {
        if (payment) {
          await this._payments.cancel(payment).catch(() => null);
        }
        throw e;
      });
    }
    if (payment)
      await this._capturePayment(payment, result);
    this._loading.set("");
    const { booking_type } = value;
    if (reset_form) {
      this.clearForm();
      this._patch({ booking_type });
    }
    this.last_success = result;
    sessionStorage.setItem(STORAGE_KEYS.last_booked_booking, JSON.stringify(result));
    if (reset_form)
      this.setView("success");
    return result;
  }
  /**
   * Bring the form up to date for posting, then throw a list of the
   * invalid fields when the form is not valid.
   */
  _prepareFormForPost() {
    if (isEmptyUser(this.model().user)) {
      this._patch({ user: currentUser(), booked_by: currentUser() });
    }
    if (this.model().all_day && this.model().date) {
      const { date, duration, date_end } = this._allDayTimeRange(this.model().date);
      this._patch({ date, duration, date_end });
    }
    this._patch({ booking_type: this._formBookingType() });
    if (!this.form().valid()) {
      const invalid_fields = getInvalidSignalFields(this.form, this.model, this._invalid_field_mappings());
      throw i18n("FORM.INVALID_FIELDS", {
        field_list: invalid_fields.join(", ")
      });
    }
  }
  /**
   * Check that the booking can be saved: resource availability, booking
   * rules and recurring clashes. With `ignore_check` only the
   * assigned-resource restriction applies.
   */
  async _checkBookingAllowed(request, period, timezone, ignore_check) {
    const type = request.booking_type || this._options().type;
    if (ignore_check) {
      await this._checkAssignedResourceRestriction(request.user_email, type);
      return;
    }
    if (type !== "visitor") {
      await this._checkResourceAvailable(request, type);
    }
    await this._checkResourceRules(request.resources, period.date, period.duration, request.user_email);
    await this._checkRecurringClashes(__spreadProps(__spreadValues(__spreadValues({}, request), period), { timezone }), type);
  }
  /**
   * Ask the user to pay for a new booking when payments are enabled, and
   * store the payment ID on `value`. Resolves `false` when the user
   * cancels, and `null` when the booking has no price. Changes to saved
   * bookings and group bookings are not charged. A group booking saves one
   * booking for each member, and has no combined checkout yet.
   */
  async _takePayment(value, booking, period) {
    if (booking.id || this._options().group)
      return null;
    if (!this._payments.can_checkout)
      return null;
    const resources = value.resources?.length ? value.resources : [{ id: value.asset_id, name: value.asset_name }];
    const result = await this._payments.checkout({
      description: value.asset_name || value.title || "",
      items: bookingLineItems({
        type: value.booking_type || this._options().type,
        date: period.date,
        duration: period.duration,
        resources: resources.map((resource2) => ({
          id: resource2?.id,
          name: resource2?.name || resource2?.display_name,
          zone_id: resource2?.zone_id || resource2?.zone?.id
        }))
      })
    });
    if (result.status === "cancelled")
      return false;
    if (result.status === "free")
      return null;
    value.extension_data = __spreadProps(__spreadValues({}, value.extension_data), {
      payment_id: result.payment.id
    });
    return result.payment;
  }
  /** Take the authorized payment and link it to the saved booking */
  async _capturePayment(payment, booking) {
    await this._payments.capture(payment, { type: "booking", id: booking.id }).catch((e) => notifyError(i18n("PAYMENTS.CAPTURE_FAILED", {
      error: errorMessage(e) || e
    })));
  }
  /** Org, region, building and level zones of the first selected resource.
   * Uses the active building when the resource has no known level. */
  _saveZones(resources) {
    const zone = this._org.levelWithID(resources[0]?.zone_id) || resources[0]?.zone;
    return zone && zone instanceof Object ? unique([
      this._org.organisation?.id,
      this._org.region?.id,
      zone.parent_id,
      zone.id
    ]) : [
      this._org.organisation?.id,
      this._org.region?.id,
      this._org.building?.id
    ];
  }
  /** Limit the end of a recurring booking to the type's available period. */
  _clampRecurrenceEnd(value) {
    if (!value.recurrence_type || value.recurrence_type === "none")
      return;
    const type = value.booking_type;
    const available_days = this._settings.get(`app.${type}s.available_period`) || this._settings.get(`app.${type}.available_period`) || (type === "parking" ? 7 : 90);
    const available_period = getUnixTime(endOfDay(addDays(Date.now(), available_days)));
    if (!value.recurrence_end || value.recurrence_end > available_period) {
      value.recurrence_end = available_period;
    }
  }
  /** Convert a failed save into the error that `postForm` throws. A
   * permission failure also reverts the saved host change. */
  async _saveFailure(e) {
    this._loading.set("");
    let error = e?.error || e;
    if (error instanceof Response) {
      error = await error.clone().json().catch(() => null);
    }
    const failure = e?.status ? {
      message: this._error_message(error),
      status: e.status
    } : error;
    if (this._isPermissionError(failure))
      this._clearSavedHostChange();
    throw failure;
  }
  /**
   * Save the asset requests of a saved booking. The booking record exists
   * by this point, so a new booking is removed again when this fails.
   * Otherwise the user is told the booking failed while the record stays
   * visible in concierge.
   */
  async _saveAssetRequests(result, value, booking, zones) {
    const is_new_booking = !booking.id && !value.id;
    try {
      const requests = await validateAssetRequestsForResource(__spreadProps(__spreadValues({}, result), { from_booking: true }), {
        date: value.date,
        duration: value.duration,
        all_day: value.all_day,
        host: value.booked_by_email,
        zones
      }, value.assets);
      if (!requests)
        throw i18n("BOOKINGS.ASSETS_INVALID_ERROR");
      await requests();
    } catch (e) {
      console.error("Couldn't update asset requests", e);
      this._loading.set("");
      if (is_new_booking && result?.id) {
        await removeBooking(result.id).catch((err) => console.error("Failed to rollback booking", err));
      }
      throw e?.status === 409 ? i18n("BOOKINGS.ASSETS_CLASH_ERROR") : errorMessage(e?.error || e) || i18n("BOOKINGS.ASSETS_INVALID_ERROR");
    }
  }
  setting(key) {
    return this.settingForType(this._options().type, key);
  }
  /**
   * Resolve a setting for a specific booking type. Prefer this over `setting()`
   * when the relevant type is known (e.g. at submission), since this service is
   * a shared singleton and `setting()` resolves against whichever flow's
   * `_options().type` happens to be active.
   */
  settingForType(type, key) {
    return this._settings.get(`app.${type}.${key}`) ?? this._settings.get(`app.${type}s.${key}`) ?? this._settings.get(`app.bookings.${key}`);
  }
  /** Whether auto-allocation is enabled for the current booking type */
  get auto_allocation() {
    return !!this.setting("auto_allocation");
  }
  /**
   * Auto-allocate a desk from the active building.
   * Prefers desks with tags and homebase matching the user's groups, then
   * picks the level with the most available desks and selects one at random.
   */
  async autoAllocateDesk() {
    const available = await this.listAvailableResources();
    if (!available?.length) {
      throw i18n("BOOKINGS.DESK_AVAILABLE_ERROR");
    }
    const selected = pickAutoAllocatedResource(preferredAllocationPool(available, currentUser()?.groups || []));
    this._patch({
      resources: [selected],
      asset_id: selected.id,
      asset_name: selected.name || selected.id,
      map_id: selected.map_id || selected.id,
      booking_asset: selected,
      zones: this._assetZones(selected.zone)
    });
  }
  async postFormForGroup() {
    const { members, group, type } = this._options();
    if (!group)
      throw i18n("BOOKINGS.GROUP_NOT_SET");
    const rollback_on_group_error = this.setting("rollback_group_bookings") === true;
    localStorage.removeItem(STORAGE_KEYS.last_group_booking_errors);
    const member_list = members || [];
    const extra_members = member_list.filter((_) => _.email !== currentUser().email);
    if (extra_members.length <= 0)
      throw i18n("BOOKINGS.GROUP_NO_MEMBERS");
    const form2 = this.model();
    const group_members = unique([currentUser(), ...extra_members], "email");
    const resources = await this._resolveDeskGroupResources(group_members, form2);
    const unavailable_errors = [];
    const booking_failures = [];
    const available = await Promise.all(group_members.map(async (member, idx) => {
      const resource2 = resources[idx];
      if (!resource2) {
        const message = i18n("BOOKINGS.GROUP_MEMBER_NO_RESOURCE");
        unavailable_errors.push(`${member.name || member.email}: ${message}`);
        booking_failures.push({
          email: member.email,
          name: member.name || member.email,
          error: message
        });
        return false;
      }
      try {
        return await this._checkResourceAvailable(__spreadProps(__spreadValues({}, form2), {
          asset_id: resource2.id,
          user_email: member.email
        }), type);
      } catch (error) {
        const message = this._error_message(error);
        unavailable_errors.push(`${member.name || member.email}: ${message}`);
        booking_failures.push({
          email: member.email,
          name: member.name || member.email,
          asset_id: resource2.id,
          asset_name: resource2.name || resource2.id,
          error: message
        });
        return false;
      }
    }));
    const unavailable = group_members.filter((_, idx) => !available[idx]);
    const group_name = groupName();
    const group_error = i18n("BOOKINGS.GROUP_SOME_HAVE_BOOKINGS", {
      members: unavailable.map((_) => _.name || _.email)?.join(", ")
    });
    let user_booking = null;
    const booking_ids = [];
    const booking_errors = [];
    let parent_id = "";
    try {
      if (available.some((_) => _)) {
        const group_booking = await this.createGroupContainerBooking(form2, group_name, group_members, type);
        parent_id = group_booking.id;
        if (parent_id)
          booking_ids.push(parent_id);
      }
      for (let i = 0; i < group_members.length; i++) {
        if (!available[i])
          continue;
        const user = group_members[i];
        const asset = resources[i];
        const assets = user.email == currentUser().email ? form2.assets : [];
        const zones = unique([
          this._org.organisation?.id,
          this._org.region?.id,
          asset?.zone?.parent_id,
          asset?.zone?.id,
          ...form2.zones
        ].filter((_) => _));
        this._patch(__spreadProps(__spreadValues(__spreadProps(__spreadValues({}, form2), {
          assets,
          parent_id,
          user,
          user_email: user.email,
          user_id: user.id
        }), this._resourceFormData(asset)), {
          group: group_name,
          zones
        }));
        const bkn = await this.postForm(true, false).catch((error) => {
          const message = this._error_message(error);
          const error_message = `${user.name || user.email}: ${message}`;
          if (rollback_on_group_error)
            throw error_message;
          booking_errors.push(error_message);
          booking_failures.push({
            email: user.email,
            name: user.name || user.email,
            asset_id: asset.id,
            asset_name: asset.name || asset.id,
            error: message
          });
          return null;
        });
        if (bkn?.id)
          booking_ids.push(bkn.id);
        if (bkn?.user_email?.toLowerCase() === currentUser().email?.toLowerCase())
          user_booking = bkn;
      }
      if (unavailable.length) {
        const unavailable_error = unavailable_errors.length ? unavailable_errors.join("\n") : group_error;
        if (rollback_on_group_error) {
          await rollbackGroupBookings(booking_ids);
          throw unavailable_error;
        }
        notifyWarn(unavailable_error);
      }
      if (booking_errors.length) {
        notifyWarn(booking_errors.join("\n"));
      }
    } catch (error) {
      if (rollback_on_group_error && booking_ids.length) {
        await rollbackGroupBookings(booking_ids);
      }
      throw this._error_message(error);
    }
    if (user_booking) {
      this.last_success = user_booking;
      sessionStorage.setItem(STORAGE_KEYS.last_booked_booking, JSON.stringify(user_booking));
    }
    if (booking_ids.length > 1) {
      localStorage.setItem(STORAGE_KEYS.last_group_booking_ids, JSON.stringify(booking_ids));
    }
    if (booking_failures.length) {
      localStorage.setItem(STORAGE_KEYS.last_group_booking_errors, JSON.stringify(booking_failures));
    }
    this._finishGroupFlow(type);
    return user_booking;
  }
  async postFormForVisitorGroup() {
    const { members, group } = this._options();
    if (!group)
      throw i18n("BOOKINGS.GROUP_NOT_SET");
    if (!members?.length)
      throw i18n("BOOKINGS.GROUP_NO_MEMBERS");
    const rollback_on_group_error = this.setting("rollback_group_bookings") === true;
    const form2 = this.model();
    const group_name = groupName();
    const booking_ids = [];
    const invited = [];
    let parent_id = "";
    let first_booking = null;
    try {
      const group_booking = await this.createGroupContainerBooking(form2, group_name, members, "visitor");
      parent_id = group_booking.id;
      if (parent_id)
        booking_ids.push(parent_id);
      for (const visitor of members) {
        if (!visitor.email)
          continue;
        this._patch(visitorMemberPatch(visitor, form2, {
          id: "",
          parent_id,
          group_name,
          fallback_zones: this._booking()?.zones,
          org_zones: [
            this._org.organisation?.id,
            this._org.region?.id
          ]
        }));
        const bkn = await this.postForm(true, false).catch((error) => {
          throw `${visitor.name || visitor.email}: ${this._error_message(error)}`;
        });
        if (bkn?.id)
          booking_ids.push(bkn.id);
        if (bkn?.id)
          invited.push(visitor);
        if (bkn?.id && !first_booking)
          first_booking = bkn;
      }
    } catch (error) {
      const rolled_back = rollback_on_group_error && booking_ids.length;
      if (rolled_back)
        await rollbackGroupBookings(booking_ids);
      const remaining = rolled_back ? members : members.filter((_) => !invited.includes(_));
      this._patch({ assets: remaining });
      this.setOptions({ members: remaining });
      if (!rolled_back && invited.length) {
        throw i18n("BOOKINGS.VISITOR_GROUP_PARTIAL", {
          names: invited.map((_) => _.name || _.email).join(", "),
          error: this._error_message(error)
        });
      }
      throw this._error_message(error);
    }
    this._finishGroupFlow("visitor");
    return first_booking;
  }
  async loadGroupSiblings(booking) {
    if (!booking?.id)
      return [];
    const stored_booking = this._booking();
    const lookup_booking = stored_booking?.id === booking.id ? stored_booking : booking;
    const parent_id = lookup_booking.parent_id || lookup_booking.id;
    const group_ref = `${lookup_booking.group || ""}`.trim();
    const legacy_group = `${lookup_booking.description || ""}`.startsWith("grp-") ? lookup_booking.description : "";
    const { type } = this._options();
    const list = await queryBookings({
      period_start: getUnixTime(lookup_booking.date),
      period_end: getUnixTime(addMinutes(lookup_booking.date, lookup_booking.duration)),
      type,
      include_booked_by: true
    });
    return list.filter((b) => b.status !== "cancelled" && (b.id === parent_id || b.parent_id === parent_id || !!group_ref && `${b.group || ""}`.trim() === group_ref || !!legacy_group && b.description === legacy_group));
  }
  async loadGroupMembersForBooking(booking) {
    if (!booking?.id)
      return [];
    const type = this._options().type || booking.booking_type || "desk";
    const is_visitor = type === "visitor";
    const sibling_list = await this.loadGroupSiblings(booking);
    if (sibling_list.length) {
      return mapGroupMembersFromBookings(sibling_list, is_visitor);
    }
    return mapGroupMembersFromExtension(booking.extension_data?.group_members || [], is_visitor);
  }
  /**
   * Set the `group` and `members` options when the user edits a group
   * booking. Does nothing for other bookings. The members are empty when
   * they fail to load, so the save fails. It does not save the booking of
   * the organiser only. Pass `isCancelled` to skip the update when the
   * caller has gone.
   */
  async restoreGroupMembers(booking, isCancelled = () => false) {
    if (!booking?.id || !isGroupBooking(booking))
      return;
    const members = await this.loadGroupMembersForBooking(booking).catch(() => []);
    if (isCancelled())
      return;
    this.setOptions({ group: true, members });
  }
  async editFormForGroup(existing_siblings) {
    const { members, type } = this._options();
    if (!members?.length)
      throw i18n("BOOKINGS.GROUP_NO_MEMBERS");
    const form2 = this.model();
    const base_form = __spreadProps(__spreadValues({}, form2), { id: "" });
    let parent_id = form2.parent_id || form2.id;
    const group_name = groupName(form2.group);
    const is_visitor = type === "visitor";
    const needs_group_container_parent = is_visitor && !form2.parent_id;
    const has_group_container_parent = !!form2.parent_id && !existing_siblings.some((s) => s.id === form2.parent_id);
    const { sibling_map, to_delete } = matchGroupSiblings(existing_siblings, members, is_visitor);
    await this._removeGroupSiblings(to_delete, is_visitor);
    const desk_resources = !is_visitor && type === "desk" ? await this._resolveDeskGroupResources(members, form2, [
      ...existing_siblings.filter((s) => !to_delete.find((item) => item.id === s.id))
    ]) : [];
    let first_result = null;
    try {
      if (needs_group_container_parent) {
        const group_booking = await this.createGroupContainerBooking(form2, group_name, members, type);
        parent_id = group_booking.id;
      } else if (has_group_container_parent) {
        await this.saveGroupContainerBooking(form2, group_name, members, type, parent_id);
      }
      for (let index = 0; index < members.length; index++) {
        const member = members[index];
        if (!member.email)
          continue;
        const existing = sibling_map[member.email];
        const booking_id = existing?.id || "";
        if (is_visitor) {
          this._patch(visitorMemberPatch(member, base_form, {
            id: booking_id,
            parent_id: booking_id === parent_id ? "" : parent_id,
            group_name,
            existing_zones: existing?.zones,
            fallback_zones: this._booking()?.zones,
            org_zones: [
              this._org.organisation?.id,
              this._org.region?.id
            ]
          }));
        } else {
          const asset = desk_resources[index];
          this._patch(__spreadValues(__spreadProps(__spreadValues({}, base_form), {
            id: booking_id,
            parent_id: booking_id === parent_id ? "" : parent_id,
            group: group_name,
            user: member,
            user_email: member.email,
            user_id: member.id
          }), asset ? this._resourceFormData(asset) : {}));
        }
        const bkn = await this.postForm(true, false);
        if (!first_result)
          first_result = bkn;
      }
    } catch (error) {
      throw this._error_message(error);
    }
    this._finishGroupFlow(type);
    return first_result;
  }
  /**
   * Remove bookings of members dropped from a group. Removed visitors are
   * also removed from the linked event and marked `removed_from_group`.
   */
  async _removeGroupSiblings(to_delete, is_visitor) {
    for (const booking of to_delete) {
      const event = booking.linked_event;
      const event_id = event?.event_id || event?.id;
      if (is_visitor && event_id) {
        await removeEventGuest(event_id, new GuestUser({ email: booking.asset_id }), {
          system_id: event.system_id,
          calendar: event.resource_calendar
        });
      }
      if (is_visitor) {
        await updateBooking(booking.id, {
          extension_data: __spreadProps(__spreadValues({}, booking.extension_data), {
            removed_from_group: true
          })
        });
      }
      try {
        await removeBooking(booking.id);
      } catch (error) {
        if (is_visitor) {
          await updateBooking(booking.id, {
            extension_data: {
              removed_from_group: booking.extension_data?.removed_from_group ?? false
            }
          });
        }
        throw error;
      }
    }
  }
  /** Shared success tail for every group flow: reset, retag, show success. */
  _finishGroupFlow(booking_type) {
    this.clearForm();
    this._patch({ booking_type });
    this.setView("success");
  }
  _resourceFormData(asset) {
    return {
      resources: asset ? [asset] : [],
      booking_asset: asset || null,
      asset_id: asset?.id,
      asset_name: asset?.name || asset?.id,
      name: asset?.display_name || asset?.name || asset?.id,
      description: asset?.name || asset?.id,
      map_id: asset?.map_id || asset?.id,
      zones: this._assetZones(asset?.zone)
    };
  }
  /** Org, region, building and level zones of a resource on `zone`. */
  _assetZones(zone) {
    return (zone ? unique([
      this._org.organisation.id,
      this._org.region?.id,
      zone.parent_id,
      zone.id
    ]) : [this._org.organisation.id, this._org.region?.id]).filter((_) => _);
  }
  async createGroupContainerBooking(form2, group_name, members, resource_type) {
    return this.saveGroupContainerBooking(form2, group_name, members, resource_type);
  }
  async saveGroupContainerBooking(form2, group_name, members, resource_type, id = "") {
    const group_members = mapGroupMembers(resource_type, members);
    const _a = form2, { group_members: _stale_group_members } = _a, form_data = __objRest(_a, ["group_members"]);
    const zones = unique([
      ...form2.zones || [],
      this._org.organisation.id,
      this._org.region?.id
    ].filter((_) => _));
    return saveBooking(new Booking(__spreadProps(__spreadValues(__spreadProps(__spreadValues({}, formBookingData(form_data)), {
      id,
      parent_id: "",
      asset_id: group_name,
      asset_name: "Group Booking"
    }), resource_type === "visitor" ? { attendees: members } : {}), {
      booking_type: "group",
      type: "group",
      description: form2.title || "Group Booking",
      title: form2.title || "Group Booking",
      user_name: form2.user?.name || form2.user_name,
      user_email: form2.user?.email || form2.user_email,
      user_id: form2.user?.id || form2.user_id,
      approved: this._settings.get("app.bookings.no_approval") === true && currentUserCanApprove(),
      zones,
      extension_data: __spreadProps(__spreadValues({}, formExtensionData(form2.extension_data)), {
        group: group_name,
        group_members,
        group_resource_type: resource_type
      })
    })).toJSON()).catch((error) => {
      this._loading.set("");
      throw error;
    });
  }
  _error_message(error) {
    return errorMessage(error) || i18n("BOOKINGS.ERROR_GENERIC");
  }
  _isPermissionError(error) {
    const status = error?.status || error?.error?.status;
    if (status === 403)
      return true;
    const message = this._error_message(error).toLowerCase();
    return /forbidden|permission|authori[sz]ed|not permitted/.test(message);
  }
  _clearSavedHostChange() {
    const user = currentUser();
    if (!user)
      return;
    const host_data = {
      user,
      user_id: user.id,
      user_email: user.email,
      user_name: user.name
    };
    this._patch(host_data, { emitEvent: false });
    const saved_form = JSON.parse(sessionStorage.getItem(STORAGE_KEYS.booking_form) || "{}");
    sessionStorage.setItem(STORAGE_KEYS.booking_form, JSON.stringify(__spreadValues(__spreadValues({}, saved_form), host_data)));
  }
  _invalid_field_mappings() {
    const resource_label = this._resource_type_label();
    return {
      date: "Start Time",
      duration: "Duration",
      asset_id: resource_label
    };
  }
  /** The form's booking type, or the flow type when the form has none. */
  _formBookingType() {
    return knownBookingType(this.model().booking_type) || this._options().type;
  }
  _resource_type_label() {
    switch (this._formBookingType()) {
      case "desk":
        return "Desk";
      case "parking":
        return "Parking Space";
      case "locker":
        return "Locker";
      case "room":
      case "group-event":
        return "Room";
      case "visitor":
        return "Visitor";
      default:
        return "Resource";
    }
  }
  async checkQuestions() {
    if (this._settings.get("app.desks.ignore_questions") !== false)
      return;
    const ref = this._dialog.open(DeskQuestionsModalComponent);
    const result = await new Promise((resolve) => {
      const subs = [];
      const finish = (value) => {
        subs.forEach((s) => s.unsubscribe());
        resolve(value);
      };
      subs.push(ref.componentInstance.event.subscribe((event) => {
        if (event?.reason === "done")
          finish(event);
      }));
      subs.push(ref.afterClosed().subscribe((event) => finish(event)));
    });
    if (result?.reason !== "done")
      throw "User cancelled";
    const form2 = ref.componentInstance.model();
    for (const key in form2) {
      if (form2[key])
        throw "User failed questionaire";
    }
    ref.close();
  }
  assignedResourceBooking(type) {
    const setting = this.settingForType(type, "assigned_resource_booking");
    return setting === "allow" || setting === "deny" || setting === "other_only" ? setting : "other_only";
  }
  /**
   * Enforce the assigned-resource restriction for any assignable resource type
   * (desk/parking/locker).
   *
   * `other_only` is evaluated here at submission so the form remains available
   * for booking on behalf of others. `deny` blanket-blocks the form in the UI.
   */
  async _checkAssignedResourceRestriction(user_email, type) {
    const is_self = !user_email || user_email.toLowerCase() === currentUser()?.email?.toLowerCase();
    const setting = this.assignedResourceBooking(type);
    if (setting === "allow")
      return true;
    if (setting === "deny" && !is_self && await this._computeHasAssignedResource(type)) {
      throw `You have an assigned ${type} and cannot book another ${type}.`;
    }
    if (await this._computeHasAssignedResource(type, user_email)) {
      throw `${is_self ? "You have" : "This user has"} an assigned ${type} and cannot book another ${type}.`;
    }
    return true;
  }
  /** Check if the given resource is available for the selected user to book */
  async _checkResourceAvailable({ id, asset_id, date, duration, all_day, user_email }, type) {
    if (!user_email)
      throw i18n("BOOKINGS.NO_USER");
    if (type === "group-event")
      return true;
    await this._checkAssignedResourceRestriction(user_email, type);
    const period = all_day ? this._allDayTimeRange(date) : { date, date_end: date + duration * 60 * 1e3 };
    const bookings = await queryBookings({
      period_start: getUnixTime(period.date),
      period_end: getUnixTime(period.date_end),
      type,
      email: user_email,
      limit: 1e3
    });
    const active_bookings = bookings.filter((_) => _.status !== "declined" && _.status !== "cancelled" && _.status !== "ended" && !_.rejected);
    if (active_bookings.find((_) => _.asset_id === asset_id && id !== _.id)) {
      throw i18n(asset_id.includes("@") ? "BOOKINGS.VISITOR_BOOKED" : "BOOKINGS.RESOURCE_BOOKED", { name: asset_id });
    }
    const is_self = user_email.toLowerCase() === currentUser()?.email?.toLowerCase();
    if (this.assignedResourceBooking(type) !== "allow" && active_bookings.some((_) => _.id !== id && _.extension_data?.is_assigned)) {
      throw `${is_self ? "You have" : "This user has"} an assigned ${type} and cannot book another ${type}.`;
    }
    const allowed_bookings = this._settings.get(`app.bookings.allowed_daily_${type}_count`) ?? 1;
    if (allowed_bookings > 0 && active_bookings.filter((_) => _.user_email.toLowerCase() === (user_email || currentUser()?.email || "").toLowerCase() && _.id !== id).length >= allowed_bookings) {
      const current = user_email === currentUser()?.email;
      throw i18n(current ? "BOOKINGS.CLASH_CURRENT_USER" : "BOOKINGS.CLASH_OTHER_USER", { name: user_email });
    }
    return true;
  }
  async _checkResourceRules(assets, date, duration, host) {
    const user = await this._loadBookingRulesHost(host);
    if (!assets?.length)
      return true;
    const rules = await this._holdNetwork(async () => {
      await this._whenSettled(this._booking_rules_resource);
      return this.booking_rules();
    });
    const resource_rules = assets?.filter((s) => s?.zone)?.map((space) => {
      const bld = this._org.buildings.find((b) => space.zone?.parent_id === b.id);
      return rulesForResource({
        date,
        duration,
        host: new User(user),
        resource: space
      }, rules[bld?.id] || []);
    });
    if (!resource_rules.every((_) => !_.hidden)) {
      throw i18n("BOOKINGS.RULES_HIDDEN", { type: this._options().type || "resource" }, assets.length);
    }
    return true;
  }
  _useCurrentUserForBookingRules() {
    return this._settings.get("app.bookings.force_current_user_for_booking_rules") === true || this._settings.get("app.basic_user_search") === false;
  }
  _bookingRulesHost(user) {
    const current_user2 = currentUser();
    if (this._useCurrentUserForBookingRules() || !user || user.email === current_user2.email) {
      return current_user2;
    }
    return user;
  }
  async _loadBookingRulesHost(host) {
    const current_user2 = currentUser();
    if (this._useCurrentUserForBookingRules() || current_user2.email === host) {
      return current_user2;
    }
    return uh(host).catch(() => ({ email: host }));
  }
  /**
   * Check for clashing bookings in a recurring booking series
   * @param booking The booking to check for clashes
   * @param type The booking type
   * @returns true if no clashes or user confirmed to continue
   * @throws Error if first instance clashes or clashes not allowed
   */
  async _checkRecurringClashes(booking, type) {
    if (!booking.recurrence_type || booking.recurrence_type === "none") {
      return true;
    }
    const temp_booking = new Booking(__spreadProps(__spreadValues({}, booking), {
      booking_type: type
    }));
    const clashes = await findBookingClashes(temp_booking, {
      include_clash_time: true
    });
    if (!clashes?.length) {
      return true;
    }
    const sorted_clashes = [...clashes].sort((a, b) => a.booking_start - b.booking_start);
    const booking_start_unix = Math.floor(booking.date / 1e3);
    const first_clash = sorted_clashes[0];
    const is_first_instance_clash = first_clash.booking_start === booking_start_unix;
    if (is_first_instance_clash) {
      throw i18n("BOOKINGS.FIRST_INSTANCE_CLASH");
    }
    const allow_clashes = this.setting("allow_recurring_instance_clashes") ?? true;
    if (!allow_clashes) {
      throw i18n("BOOKINGS.RECURRING_CLASHES_NOT_ALLOWED", {
        count: clashes.length
      });
    }
    const result = await openRecurringClashModal({ clashes: sorted_clashes }, this._dialog);
    if (result?.reason !== "done") {
      throw "User cancelled";
    }
    return true;
  }
  async _recurringBookedResourceList(resources, zones, value) {
    const effective_timezone = this.timezone || value.timezone;
    const booking = new Booking(__spreadProps(__spreadValues({}, value), {
      booking_type: "desk",
      zones: [zones],
      asset_ids: resources.map((_) => _.id),
      timezone: effective_timezone
    }));
    const key = JSON.stringify({
      date: booking.date,
      duration: booking.duration,
      timezone: effective_timezone,
      recurrence_type: booking.recurrence_type,
      recurrence_end: booking.recurrence_end,
      zones,
      asset_ids: resources.map((_) => _.id)
    });
    const existing = this._recurring_clash_requests.get(key);
    if (existing)
      return existing;
    const request = findBookingClashes(booking).then((ids) => ids).catch(() => []).finally(() => this._recurring_clash_requests.delete(key));
    this._recurring_clash_requests.set(key, request);
    return request;
  }
  /** Load the locker resources for the active building or region */
  _loadLockerResources() {
    const use_region = this._settings.get("app.use_region");
    const scope_id = use_region ? this._org.region?.id : this._org.building?.id;
    return loadLockerResources(this._org, scope_id);
  }
  /** Load parking spaces for the active building or region. */
  loadParkingResources() {
    return loadParkingResources(this._org, this._settings.get("app.use_region"));
  }
  /** Load desk resources from the assets API for the active scope. */
  async loadDeskResources() {
    const desks = await loadDeskResources(this._org, this._settings.get("app.use_region"));
    this._migrateFavouriteDesks(desks);
    return desks;
  }
  /**
   * Favourites saved before desks moved to assets reference the old desk id,
   * which migrated desk assets keep as their `place_id` or map id. Point
   * them at the asset.
   */
  _migrateFavouriteDesks(desks) {
    const favourites = this._settings.get(SETTING_KEYS.FAVORITE_DESKS) || [];
    if (!favourites.length)
      return;
    const updated = unique(favourites.map((id) => findDeskByLegacyId(desks, id)?.id || id));
    if (updated.join() === favourites.join())
      return;
    this._settings.saveUserSetting(SETTING_KEYS.FAVORITE_DESKS, updated);
  }
  /** Load the resources of the given metadata `type`, e.g. `desks`. */
  async loadResourceList(type) {
    if (type === "desks" && this._settings.get("app.desks.use_assets")) {
      return this.loadDeskResources();
    }
    return loadMetadataResources(this._org, type, this._settings.get("app.use_region"));
  }
  /** Find resources near the map element `id`. Kept on the service so tests
   * can stub map lookups. */
  _getNearbyResources(map_url, id, resources, count, reserved_ids = /* @__PURE__ */ new Set()) {
    return nearbyResources(map_url, id, resources, count, reserved_ids);
  }
  async _resolveDeskGroupResources(group_members, form2, existing_siblings = []) {
    const available_resources = await this.listAvailableResources();
    const all_resources = await this.listResources();
    const preferred_id = `${form2.map_id || form2.asset_id || ""}`;
    const existing_map = {};
    for (const booking of existing_siblings) {
      if (booking.user_email)
        existing_map[booking.user_email] = booking;
    }
    const selected_resource = findResourceById(available_resources, preferred_id);
    const preferred_resource = selected_resource || (existing_siblings.length ? findResourceById(all_resources, preferred_id) : null);
    if (!selected_resource && !existing_siblings.length) {
      throw i18n("BOOKINGS.DESK_AVAILABLE_ERROR");
    }
    const anchor_resource = preferred_resource || findResourceById(all_resources, existing_siblings[0]?.asset_id || "");
    const level = this._org.levelWithID([anchor_resource?.zone?.id]);
    if (!level?.map_id) {
      throw i18n("BOOKINGS.GROUP_MAP_UNAVAILABLE");
    }
    const reserved_ids = /* @__PURE__ */ new Set();
    const resolved = group_members.map((member) => {
      const booking = existing_map[member.email];
      const resource_id = member.email === currentUser().email ? preferred_id : booking?.asset_id || "";
      const resource2 = findResourceById(all_resources, resource_id) || findResourceById(available_resources, resource_id);
      if (!resource2 || resourceReserved(resource2, reserved_ids)) {
        return null;
      }
      reserveResource(resource2, reserved_ids);
      return resource2;
    });
    const missing_count = resolved.filter((_) => !_).length;
    const nearby_resources = missing_count ? await this._getNearbyResources(level.map_id, anchor_resource?.map_id || anchor_resource?.id || preferred_id, available_resources, missing_count, reserved_ids) : [];
    let available = resolved.filter((_) => !!_).length;
    let nearby_index = 0;
    const final_resources = resolved.map((resource2) => {
      if (resource2)
        return resource2;
      const next_resource = nearby_resources[nearby_index++];
      if (next_resource)
        available++;
      return next_resource || null;
    });
    if (final_resources.some((_) => !_)) {
      throw i18n("BOOKINGS.GROUP_INSUFFICIENT_RESOURCES", {
        available,
        members: group_members.length
      }, available);
    }
    return final_resources;
  }
  static {
    this.\u0275fac = function BookingFormService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookingFormService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BookingFormService, factory: _BookingFormService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookingFormService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  queryParkingSpacesForZones,
  queryParkingUsers,
  queryDeskAssets,
  queryDeskAssetsInZone,
  findDeskByLegacyId,
  queryDeskAssetByLegacyId,
  deskFromAsset,
  assignedDeskBuilding,
  requiresLocker,
  bookingHostUser,
  isGroupBooking,
  mapGroupMembersFromBookings,
  mapGroupMembersFromExtension,
  BookingFormService
};
//# debugId=1d7ac094-fba1-553c-a4c6-ea014a02294a
//# sourceMappingURL=chunk-JO56BYQ2.js.map
