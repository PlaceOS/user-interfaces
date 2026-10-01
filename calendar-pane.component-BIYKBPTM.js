import {
  SpaceMapComponent
} from "./chunk-MJWF4RQQ.js";
import {
  DeskMapComponent
} from "./chunk-HC3SJBDH.js";
import "./chunk-TPMBWVF3.js";
import "./chunk-A7AW5BMI.js";
import {
  BookingFormService
} from "./chunk-DGE4Y2DQ.js";
import "./chunk-MFHLTG6R.js";
import "./chunk-O4PM55VI.js";
import "./chunk-CAHKQ2BI.js";
import "./chunk-YP5P7EO6.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-JGRJPJYT.js";
import {
  EventFormService
} from "./chunk-MGIY3XE7.js";
import "./chunk-JXNOBWLH.js";
import "./chunk-5YX5OT5E.js";
import {
  AuthenticatedImageDirective
} from "./chunk-MGYNXDGT.js";
import "./chunk-K2G2GUV3.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-KIAFU4TF.js";
import {
  removeBooking,
  showBooking,
  showEvent,
  updateBooking
} from "./chunk-5B3VGMLQ.js";
import "./chunk-TNP6J4NA.js";
import "./chunk-6YMBCMGZ.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-FGHYEK7L.js";
import "./chunk-4RGQJM3B.js";
import "./chunk-OFT76UNU.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatPrefix
} from "./chunk-GZQBZ3HN.js";
import "./chunk-SAVA3BE7.js";
import "./chunk-SCYMU2U2.js";
import "./chunk-ICSJZ6TR.js";
import {
  AsyncHandler,
  DefaultValueAccessor,
  FormsModule,
  IconComponent,
  MatOption,
  MatRipple,
  MatRippleModule,
  NgControlStatus,
  NgModel,
  OrganisationService,
  SettingsService,
  currentUser,
  errorMessage,
  log,
  notifyError,
  settingSignal,
  unique
} from "./chunk-757SIKVF.js";
import {
  Component,
  Injectable,
  Input,
  NgTemplateOutlet,
  Output,
  ViewChild,
  computed,
  effect,
  forwardRef,
  inject,
  model,
  setClassMetadata,
  signal,
  untracked,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-BHT7MITS.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// apps/outlook-addin/src/app/calendar/outlook-event.ts
var DAY_MS = 24 * 60 * 60 * 1e3;
function windowError(reason) {
  return { window: null, reason };
}
function allDayCount({ start, end }) {
  return Math.max(1, Math.round((end - start) / DAY_MS));
}
function roomWindow(event) {
  const duration = Math.round((event.end - event.start) / 6e4);
  if (duration <= 0) {
    return windowError("The event end time is before the start time.");
  }
  return {
    window: { date: event.start, duration, all_day: false },
    reason: ""
  };
}
function deskWindow(event) {
  if (event.is_recurring) {
    return windowError("Desk booking for recurring events is not available yet. Book a desk for each occurrence from the workplace app.");
  }
  if (event.all_day && allDayCount(event) > 1) {
    return windowError("Desk booking for multi-day all-day events is not available yet. Book each day from the workplace app.");
  }
  const result = roomWindow(event);
  if (!result.window || !event.all_day)
    return result;
  return {
    window: { date: event.start, duration: 24 * 60, all_day: true },
    reason: ""
  };
}
function bookingMatchesWindow(booking, window2) {
  if (window2.all_day) {
    return booking.all_day && new Date(booking.date).toDateString() === new Date(window2.date).toDateString();
  }
  return !booking.all_day && booking.date === window2.date && booking.duration === window2.duration;
}
function roomStateFromResponse(response) {
  switch (response) {
    case "accepted":
      return "confirmed";
    case "declined":
      return "declined";
    case "tentative":
    case "needsAction":
      return "pending";
    default:
      return "selected";
  }
}
function formatEventPeriod(event, locale) {
  const day = new Intl.DateTimeFormat(locale, {
    weekday: "short",
    day: "numeric",
    month: "short"
  });
  const time = new Intl.DateTimeFormat(locale, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });
  if (event.all_day) {
    const last_day = event.end - 1;
    const first = day.format(event.start);
    const last = day.format(last_day);
    return `${first === last ? first : `${first} \u2013 ${last}`} \xB7 All day`;
  }
  const start_day = day.format(event.start);
  const end_day = day.format(event.end);
  return start_day === end_day ? `${start_day} \xB7 ${time.format(event.start)}\u2013${time.format(event.end)}` : `${start_day} ${time.format(event.start)} \u2013 ${end_day} ${time.format(event.end)}`;
}
function localTimezoneLabel() {
  const zone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
  return zone.split("/").pop()?.replace(/_/g, " ") || zone;
}

// apps/outlook-addin/src/app/calendar/outlook-item.adapter.ts
function officeCall(fn) {
  return new Promise((resolve, reject) => fn((result) => result.status === Office.AsyncResultStatus.Succeeded ? resolve(result.value) : reject(result.error)));
}
var OfficeItemAdapter = class {
  constructor() {
    this._properties = null;
  }
  get _item() {
    return Office.context.mailbox.item;
  }
  async read() {
    const item = this._item;
    const [subject, start, end, recurrence, locations, all_day] = await Promise.all([
      officeCall((cb) => item.subject.getAsync(cb)),
      officeCall((cb) => item.start.getAsync(cb)),
      officeCall((cb) => item.end.getAsync(cb)),
      item.recurrence ? officeCall((cb) => item.recurrence.getAsync(cb)).catch(() => null) : Promise.resolve(null),
      item.enhancedLocation ? officeCall((cb) => item.enhancedLocation.getAsync(cb)).catch(() => []) : Promise.resolve([]),
      item.isAllDayEvent ? officeCall((cb) => item.isAllDayEvent.getAsync(cb)).catch(() => null) : Promise.resolve(null)
    ]);
    return {
      subject: subject || "",
      start: start.valueOf(),
      end: end.valueOf(),
      all_day,
      is_recurring: !!recurrence?.recurrenceType,
      room_emails: locations.filter((_) => _.locationIdentifier?.type === Office.MailboxEnums.LocationType.Room && _.emailAddress).map((_) => _.emailAddress.toLowerCase())
    };
  }
  itemId() {
    return officeCall((cb) => this._item.getItemIdAsync(cb)).catch(() => "");
  }
  save() {
    return officeCall((cb) => this._item.saveAsync(cb));
  }
  restId(item_id) {
    return Office.context.mailbox.convertToRestId(item_id, Office.MailboxEnums.RestVersion.v2_0);
  }
  addRoom(email) {
    return officeCall((cb) => this._item.enhancedLocation.addAsync([{ id: email, type: Office.MailboxEnums.LocationType.Room }], cb));
  }
  removeRoom(email) {
    return officeCall((cb) => this._item.enhancedLocation.removeAsync([{ id: email, type: Office.MailboxEnums.LocationType.Room }], cb));
  }
  async getProperty(key) {
    const properties = await this._loadProperties();
    return `${properties.get(key) || ""}`;
  }
  async setProperty(key, value) {
    const properties = await this._loadProperties();
    value ? properties.set(key, value) : properties.remove(key);
    await officeCall((cb) => properties.saveAsync(cb));
  }
  onChange(handler) {
    const events = [
      Office.EventType.AppointmentTimeChanged,
      Office.EventType.RecurrenceChanged,
      Office.EventType.EnhancedLocationsChanged
    ];
    for (const type of events) {
      this._item.addHandlerAsync(type, handler, () => null);
    }
    Office.context.mailbox.addHandlerAsync?.(Office.EventType.ItemChanged, () => {
      this._properties = null;
      handler();
    }, () => null);
  }
  async _loadProperties() {
    if (!this._properties) {
      this._properties = await officeCall((cb) => this._item.loadCustomPropertiesAsync(cb));
    }
    return this._properties;
  }
};
var MemoryItemAdapter = class {
  constructor(details = sampleDetails(), item_id = "") {
    this.details = details;
    this.item_id = item_id;
    this._handlers = [];
    this._properties = {};
  }
  async read() {
    return __spreadProps(__spreadValues({}, this.details), { room_emails: [...this.details.room_emails] });
  }
  async itemId() {
    return this.item_id;
  }
  async save() {
    if (!this.item_id)
      this.item_id = `memory-${Date.now()}`;
    return this.item_id;
  }
  restId(item_id) {
    return item_id;
  }
  async addRoom(email) {
    const lower = email.toLowerCase();
    if (!this.details.room_emails.includes(lower)) {
      this.details.room_emails.push(lower);
    }
    this._emit();
  }
  async removeRoom(email) {
    const lower = email.toLowerCase();
    this.details.room_emails = this.details.room_emails.filter((_) => _ !== lower);
    this._emit();
  }
  async getProperty(key) {
    return this._properties[key] || "";
  }
  async setProperty(key, value) {
    if (value)
      this._properties[key] = value;
    else
      delete this._properties[key];
  }
  onChange(handler) {
    this._handlers.push(handler);
  }
  /** Change the in-memory event, as a user would in Outlook */
  update(details) {
    this.details = __spreadValues(__spreadValues({}, this.details), details);
    this._emit();
  }
  _emit() {
    this._handlers.forEach((handler) => handler());
  }
};
function sampleDetails() {
  const start = /* @__PURE__ */ new Date();
  start.setHours(start.getHours() + 1, 0, 0, 0);
  return {
    subject: "Quarterly review meeting",
    start: start.valueOf(),
    end: start.valueOf() + 30 * 6e4,
    all_day: false,
    is_recurring: false,
    room_emails: []
  };
}
function hasOfficeAppointment() {
  return typeof Office !== "undefined" && !!Office.context?.mailbox?.item?.itemType && Office.context.mailbox.item.itemType === Office.MailboxEnums.ItemType.Appointment;
}

// apps/outlook-addin/src/app/calendar/outlook-event.service.ts
var OutlookEventService = class _OutlookEventService extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._adapter = hasOfficeAppointment() ? new OfficeItemAdapter() : new MemoryItemAdapter();
    this._listening = false;
    this._refresh_count = 0;
    this._event = signal(
      null,
      ...ngDevMode ? [{ debugName: "_event" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._saved_event = signal(
      null,
      ...ngDevMode ? [{ debugName: "_saved_event" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._error = signal(
      "",
      ...ngDevMode ? [{ debugName: "_error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.event = this._event.asReadonly();
    this.saved_event = this._saved_event.asReadonly();
    this.loading = this._loading.asReadonly();
    this.error = this._error.asReadonly();
    this.is_outlook = !(this._adapter instanceof MemoryItemAdapter);
    this.room_responses = computed(
      () => {
        const map = {};
        for (const space of this._saved_event()?.resources || []) {
          if (space.email)
            map[space.email.toLowerCase()] = space.response_status;
        }
        return map;
      },
      ...ngDevMode ? [{ debugName: "room_responses" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  /** Replace the item adapter. Used by tests. */
  useAdapter(adapter) {
    this._adapter = adapter;
    this._listening = false;
  }
  /** Start listening for Outlook changes and read the event */
  async init() {
    if (!this._listening) {
      this._listening = true;
      this._adapter.onChange(() => this.timeout("outlook-change", () => this.refresh(), 200));
      window.addEventListener("focus", () => this.timeout("outlook-focus", () => this.refresh(), 200));
    }
    await this.refresh();
  }
  /** Read the latest event details from Outlook */
  async refresh() {
    const count = ++this._refresh_count;
    this._loading.set(true);
    try {
      const [details, item_id] = await Promise.all([
        this._adapter.read(),
        this._adapter.itemId()
      ]);
      const saved = item_id ? await this._loadSaved(item_id) : null;
      if (count !== this._refresh_count)
        return this._event();
      const event = __spreadProps(__spreadValues({}, details), {
        item_id,
        all_day: details.all_day ?? savedAllDay(saved, details)
      });
      this._saved_event.set(saved);
      this._event.set(event);
      this._error.set("");
      return event;
    } catch (error) {
      log("Outlook", "Unable to read the Outlook event", error, "warn");
      this._error.set(errorMessage(error) || "Unable to read the Outlook event.");
      return this._event();
    } finally {
      if (count === this._refresh_count)
        this._loading.set(false);
    }
  }
  /**
   * Return the Exchange item ID. Saves a new event first. Outlook does not
   * send invitations when it saves a new appointment.
   */
  async ensureSaved() {
    const item_id = await this._adapter.itemId() || await this._adapter.save();
    await this.refresh();
    return item_id;
  }
  /** REST/Graph ID of the saved item */
  restId(item_id = this._event()?.item_id || "") {
    return item_id ? this._adapter.restId(item_id) : "";
  }
  async addRoom(email) {
    await this._adapter.addRoom(email);
    await this.refresh();
  }
  async removeRoom(email) {
    await this._adapter.removeRoom(email);
    await this.refresh();
  }
  getProperty(key) {
    return this._adapter.getProperty(key);
  }
  setProperty(key, value) {
    return this._adapter.setProperty(key, value);
  }
  /** Load the saved event from the user's calendar through PlaceOS */
  async _loadSaved(item_id) {
    const calendar = currentUser()?.email;
    if (!calendar)
      return null;
    return showEvent(this._adapter.restId(item_id), { calendar }).catch(() => null);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275OutlookEventService_BaseFactory;
      return function OutlookEventService_Factory(__ngFactoryType__) {
        return (\u0275OutlookEventService_BaseFactory || (\u0275OutlookEventService_BaseFactory = \u0275\u0275getInheritedFactory(_OutlookEventService)))(__ngFactoryType__ || _OutlookEventService);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OutlookEventService, factory: _OutlookEventService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OutlookEventService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();
function savedAllDay(saved, details) {
  if (!saved)
    return null;
  const saved_start = saved.event_start * 1e3;
  const saved_end = saved.event_end * 1e3;
  return saved_start === details.start && saved_end === details.end ? saved.all_day : null;
}

// apps/outlook-addin/src/app/calendar/desk-link.service.ts
var DESK_BOOKING_PROPERTY = "placeos_desk_booking_id";
var DeskLinkService = class _DeskLinkService {
  constructor() {
    this._outlook = inject(OutlookEventService);
    this._form = inject(BookingFormService);
    this._org = inject(OrganisationService);
    this._booking = signal(
      null,
      ...ngDevMode ? [{ debugName: "_booking" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._state = signal(
      "idle",
      ...ngDevMode ? [{ debugName: "_state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._error = signal(
      "",
      ...ngDevMode ? [{ debugName: "_error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.booking = this._booking.asReadonly();
    this.state = this._state.asReadonly();
    this.error = this._error.asReadonly();
    this.out_of_sync = computed(
      () => {
        const booking = this._booking();
        const event = this._outlook.event();
        if (!booking || !event)
          return false;
        const result = deskWindow(event);
        return !!result.window && !bookingMatchesWindow(booking, result.window);
      },
      ...ngDevMode ? [{ debugName: "out_of_sync" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  /** Load the booking linked to the current Outlook item */
  async load() {
    const id = await this._outlook.getProperty(DESK_BOOKING_PROPERTY);
    if (!id)
      return this._booking.set(null);
    const booking = await showBooking(id).catch(() => null);
    const active = booking && !booking.deleted && booking.status !== "cancelled";
    this._booking.set(active ? booking : null);
  }
  /** Reserve the desk for the Outlook event */
  async add(desk) {
    await this._run(async () => {
      const item_id = await this._outlook.ensureSaved();
      const booking = await this._post(desk);
      const saved = this._outlook.saved_event();
      const linked = await updateBooking(booking.id, {
        extension_data: __spreadValues(__spreadProps(__spreadValues({}, booking.extension_data), {
          outlook_item_id: this._outlook.restId(item_id)
        }), saved?.ical_uid ? { ical_uid: saved.ical_uid } : {})
      }).catch(() => booking);
      await this._outlook.setProperty(DESK_BOOKING_PROPERTY, linked.id);
      this._booking.set(linked);
    });
  }
  /** Move the linked booking to the current Outlook event time */
  async update() {
    const booking = this._booking();
    if (!booking)
      return;
    await this._run(async () => {
      const desk = this._deskFromBooking(booking);
      this._booking.set(await this._post(desk, booking));
    });
  }
  /** Cancel the linked booking and remove the link from the event */
  async remove() {
    const booking = this._booking();
    if (!booking)
      return;
    await this._run(async () => {
      await removeBooking(booking.id);
      await this._outlook.setProperty(DESK_BOOKING_PROPERTY, "");
      this._booking.set(null);
    });
  }
  /** Clear the last error */
  clearError() {
    this._error.set("");
    if (this._state() === "failed")
      this._state.set("idle");
  }
  /**
   * Save the booking with the booking form service so that site rules,
   * restrictions and approval settings apply as they do in the workplace
   * app.
   */
  async _post(desk, existing) {
    const event = await this._outlook.refresh();
    if (!event)
      throw "Unable to read the Outlook event.";
    const result = deskWindow(event);
    if (!result.window)
      throw result.reason;
    const { date, duration, all_day } = result.window;
    this._form.newForm("desk", existing);
    const zone = desk.zone;
    this._form.model.update((m) => __spreadProps(__spreadValues({}, m), {
      title: event.subject,
      date,
      duration,
      all_day,
      resources: [desk],
      asset_id: desk.id,
      asset_name: desk.name || desk.id,
      map_id: desk.map_id || desk.id,
      booking_asset: desk,
      // An existing booking keeps its zones when the desk has no zone.
      zones: zone ? unique([
        this._org.organisation.id,
        this._org.region?.id,
        zone.parent_id,
        zone.id
      ].filter((_) => !!_)) : m.zones
    }));
    return this._form.postForm(false, false);
  }
  _deskFromBooking(booking) {
    return {
      id: booking.asset_id,
      name: booking.asset_name || booking.asset_id,
      bookable: true,
      features: []
    };
  }
  async _run(action) {
    this._state.set("saving");
    this._error.set("");
    try {
      await action();
      this._state.set("idle");
    } catch (error) {
      this._error.set(errorMessage(error) || "Unable to save the desk.");
      this._state.set("failed");
    }
  }
  static {
    this.\u0275fac = function DeskLinkService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskLinkService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DeskLinkService, factory: _DeskLinkService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskLinkService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// apps/outlook-addin/src/app/calendar/view-toggle.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ViewToggleComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275listener("click", function ViewToggleComponent_For_2_Template_button_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.view.set(item_r2.id));
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-secondary", ctx_r2.view() === item_r2.id)("text-secondary-content", ctx_r2.view() === item_r2.id);
    \u0275\u0275attribute("aria-checked", ctx_r2.view() === item_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r2.name, " ");
  }
}
var VIEWS = [
  { id: "list", name: "List", icon: "list" },
  { id: "map", name: "Map", icon: "map" }
];
var ViewToggleComponent = class _ViewToggleComponent {
  constructor() {
    this.views = VIEWS;
    this.view = model(
      "list",
      ...ngDevMode ? [{ debugName: "view" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function ViewToggleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ViewToggleComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewToggleComponent, selectors: [["view-toggle"]], inputs: { view: [1, "view"] }, outputs: { view: "viewChange" }, decls: 3, vars: 0, consts: [["role", "radiogroup", "aria-label", "Result view", 1, "border-base-300", "flex", "rounded-lg", "border", "p-0.5"], ["role", "radio", "matRipple", "", 1, "flex", "items-center", "gap-1", "rounded-md", "px-2", "py-1", "text-sm", 3, "bg-secondary", "text-secondary-content"], ["role", "radio", "matRipple", "", 1, "flex", "items-center", "gap-1", "rounded-md", "px-2", "py-1", "text-sm", 3, "click"]], template: function ViewToggleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275repeaterCreate(1, ViewToggleComponent_For_2_Template, 4, 7, "button", 1, _forTrack0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.views);
      }
    }, dependencies: [MatRippleModule, MatRipple, IconComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewToggleComponent, [{
    type: Component,
    args: [{
      selector: "view-toggle",
      template: `
        <div
            role="radiogroup"
            aria-label="Result view"
            class="border-base-300 flex rounded-lg border p-0.5"
        >
            @for (item of views; track item.id) {
                <button
                    role="radio"
                    matRipple
                    class="flex items-center gap-1 rounded-md px-2 py-1 text-sm"
                    [class.bg-secondary]="view() === item.id"
                    [class.text-secondary-content]="view() === item.id"
                    [attr.aria-checked]="view() === item.id"
                    (click)="view.set(item.id)"
                >
                    <icon>{{ item.icon }}</icon>
                    {{ item.name }}
                </button>
            }
        </div>
    `,
      imports: [MatRippleModule, IconComponent]
    }]
  }], null, { view: [{ type: Input, args: [{ isSignal: true, alias: "view", required: false }] }, { type: Output, args: ["viewChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewToggleComponent, { className: "ViewToggleComponent", filePath: "apps/outlook-addin/src/app/calendar/view-toggle.component.ts", lineNumber: 39 });
})();

// apps/outlook-addin/src/app/calendar/desk-search.component.ts
var _c0 = (a0) => ({ $implicit: a0 });
var _forTrack02 = ($index, $item) => $item.id;
function DeskSearchComponent_Conditional_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "icon", 12);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 13);
    \u0275\u0275text(4, " The event time changed. The desk is still booked for the old time. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 14);
    \u0275\u0275listener("click", function DeskSearchComponent_Conditional_1_Conditional_11_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.link.update());
    });
    \u0275\u0275text(6, " Update ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.saving());
  }
}
function DeskSearchComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 2)(1, "div", 5)(2, "div", 6)(3, "div", 7);
    \u0275\u0275text(4, "On this event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 9);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 10);
    \u0275\u0275listener("click", function DeskSearchComponent_Conditional_1_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.link.remove());
    });
    \u0275\u0275text(10, " Remove ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, DeskSearchComponent_Conditional_1_Conditional_11_Template, 7, 1, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const booking_r4 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", booking_r4.asset_name || booking_r4.asset_id, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("text-success", booking_r4.approved)("text-warning", !booking_r4.approved);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", booking_r4.approved ? "Reserved" : "Reserved. Approval pending.", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.link.out_of_sync() ? 11 : -1);
  }
}
function DeskSearchComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "icon");
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 15);
    \u0275\u0275listener("click", function DeskSearchComponent_Conditional_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.link.clearError());
    });
    \u0275\u0275elementStart(6, "icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.link.error());
  }
}
function DeskSearchComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.window_error(), " ");
  }
}
function DeskSearchComponent_Conditional_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1, " This Outlook client does not report the All day setting. PlaceOS uses the event times shown above. ");
    \u0275\u0275elementEnd();
  }
}
function DeskSearchComponent_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" All-day desk bookings at this site are from ", ctx, ". ");
  }
}
function DeskSearchComponent_Conditional_4_Conditional_2_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lvl_r8 = ctx.$implicit;
    \u0275\u0275property("value", lvl_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", lvl_r8.display_name || lvl_r8.name, " ");
  }
}
function DeskSearchComponent_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 17);
    \u0275\u0275text(1, " Floor ");
    \u0275\u0275elementStart(2, "mat-form-field", 22)(3, "mat-select", 23);
    \u0275\u0275twoWayListener("valueChange", function DeskSearchComponent_Conditional_4_Conditional_2_Template_mat_select_valueChange_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.level_id, $event) || (ctx_r1.level_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "mat-option", 24);
    \u0275\u0275text(5, "Any floor");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, DeskSearchComponent_Conditional_4_Conditional_2_For_7_Template, 2, 2, "mat-option", 25, _forTrack02);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("value", ctx_r1.level_id);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.levels());
  }
}
function DeskSearchComponent_Conditional_4_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 27);
    \u0275\u0275listener("ngModelChange", function DeskSearchComponent_Conditional_4_Conditional_3_For_2_Template_mat_checkbox_ngModelChange_0_listener() {
      const feature_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleFeature(feature_r10));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const feature_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngModel", ctx_r1.selected_features().includes(feature_r10));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", feature_r10, " ");
  }
}
function DeskSearchComponent_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275repeaterCreate(1, DeskSearchComponent_Conditional_4_Conditional_3_For_2_Template, 2, 2, "mat-checkbox", 26, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.features());
  }
}
function DeskSearchComponent_Conditional_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Checking availability... ");
  }
}
function DeskSearchComponent_Conditional_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.desks().length, " available ", ctx_r1.desks().length === 1 ? "desk" : "desks", " ");
  }
}
function DeskSearchComponent_Conditional_4_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 29);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(3);
    const desk_card_r12 = \u0275\u0275reference(6);
    \u0275\u0275property("ngTemplateOutlet", desk_card_r12)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c0, ctx));
  }
}
function DeskSearchComponent_Conditional_4_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275text(1, " Select a desk on the map. ");
    \u0275\u0275elementEnd();
  }
}
function DeskSearchComponent_Conditional_4_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "desk-map", 28);
    \u0275\u0275listener("onSelect", function DeskSearchComponent_Conditional_4_Conditional_9_Template_desk_map_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selected_desk.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(1, DeskSearchComponent_Conditional_4_Conditional_9_Conditional_1_Template, 1, 4, "ng-container", 29)(2, DeskSearchComponent_Conditional_4_Conditional_9_Conditional_2_Template, 2, 0, "p", 30);
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("active", ctx_r1.selected_desk()?.id || ctx_r1.link.booking()?.asset_id)("available", ctx_r1.map_desks());
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_5_0 = ctx_r1.selected_desk()) ? 1 : 2, tmp_5_0);
  }
}
function DeskSearchComponent_Conditional_4_Conditional_10_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 29);
  }
  if (rf & 2) {
    const desk_r13 = ctx.$implicit;
    \u0275\u0275nextContext(3);
    const desk_card_r12 = \u0275\u0275reference(6);
    \u0275\u0275property("ngTemplateOutlet", desk_card_r12)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c0, desk_r13));
  }
}
function DeskSearchComponent_Conditional_4_Conditional_10_ForEmpty_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 31);
    \u0275\u0275text(1, " No desks match these filters for this time. ");
    \u0275\u0275elementEnd();
  }
}
function DeskSearchComponent_Conditional_4_Conditional_10_ForEmpty_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DeskSearchComponent_Conditional_4_Conditional_10_ForEmpty_2_Conditional_0_Template, 2, 0, "p", 31);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(!ctx_r1.loading() ? 0 : -1);
  }
}
function DeskSearchComponent_Conditional_4_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, DeskSearchComponent_Conditional_4_Conditional_10_For_1_Template, 1, 4, "ng-container", 29, _forTrack02, false, DeskSearchComponent_Conditional_4_Conditional_10_ForEmpty_2_Template, 1, 1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.desks());
  }
}
function DeskSearchComponent_Conditional_4_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1, " Adding a desk reserves it now and saves this event to your calendar. Outlook does not send invitations for a new event until you select Send. ");
    \u0275\u0275elementEnd();
  }
}
function DeskSearchComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, DeskSearchComponent_Conditional_4_Conditional_0_Template, 2, 0, "p", 16);
    \u0275\u0275conditionalCreate(1, DeskSearchComponent_Conditional_4_Conditional_1_Template, 2, 1, "p", 16);
    \u0275\u0275conditionalCreate(2, DeskSearchComponent_Conditional_4_Conditional_2_Template, 8, 1, "label", 17);
    \u0275\u0275conditionalCreate(3, DeskSearchComponent_Conditional_4_Conditional_3_Template, 3, 0, "div", 18);
    \u0275\u0275elementStart(4, "div", 19)(5, "h3", 20);
    \u0275\u0275conditionalCreate(6, DeskSearchComponent_Conditional_4_Conditional_6_Template, 1, 0)(7, DeskSearchComponent_Conditional_4_Conditional_7_Template, 1, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "view-toggle", 21);
    \u0275\u0275twoWayListener("viewChange", function DeskSearchComponent_Conditional_4_Template_view_toggle_viewChange_8_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.view, $event) || (ctx_r1.view = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, DeskSearchComponent_Conditional_4_Conditional_9_Template, 3, 3)(10, DeskSearchComponent_Conditional_4_Conditional_10_Template, 3, 1);
    \u0275\u0275conditionalCreate(11, DeskSearchComponent_Conditional_4_Conditional_11_Template, 2, 0, "p", 7);
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.all_day_unknown() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_3_0 = ctx_r1.all_day_policy()) ? 1 : -1, tmp_3_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.view() === "list" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.features().length ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.loading() ? 6 : 7);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("view", ctx_r1.view);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.view() === "map" ? 9 : 10);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.link.booking() ? 11 : -1);
  }
}
function DeskSearchComponent_ng_template_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const desk_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \xB7 ", desk_r15.features.join(" \xB7 "), " ");
  }
}
function DeskSearchComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 32)(1, "h4", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 33);
    \u0275\u0275text(4);
    \u0275\u0275conditionalCreate(5, DeskSearchComponent_ng_template_5_Conditional_5_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 34)(7, "span", 35)(8, "icon");
    \u0275\u0275text(9, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 10);
    \u0275\u0275listener("click", function DeskSearchComponent_ng_template_5_Template_button_click_11_listener() {
      const desk_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addDesk(desk_r15));
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const desk_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", desk_r15.display_name || desk_r15.name || desk_r15.id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", desk_r15.zone?.display_name || desk_r15.zone?.name || desk_r15.level?.display_name || desk_r15.level?.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(desk_r15.features?.length ? 5 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Available ", ctx_r1.period(), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.saving() || !!ctx_r1.link.booking());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving() && ctx_r1.adding() === desk_r15.id ? "Reserving..." : "Add to event", " ");
  }
}
function hourLabel(hour) {
  const whole = Math.floor(hour);
  const minutes = Math.round((hour - whole) * 60);
  return `${`${whole}`.padStart(2, "0")}:${`${minutes}`.padStart(2, "0")}`;
}
var DeskSearchComponent = class _DeskSearchComponent {
  constructor() {
    this._form = inject(BookingFormService);
    this._org = inject(OrganisationService);
    this._outlook = inject(OutlookEventService);
    this.link = inject(DeskLinkService);
    this.view = signal(
      "list",
      ...ngDevMode ? [{ debugName: "view" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_desk = signal(
      null,
      ...ngDevMode ? [{ debugName: "selected_desk" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.level_id = signal(
      "",
      ...ngDevMode ? [{ debugName: "level_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_features = signal(
      [],
      ...ngDevMode ? [{ debugName: "selected_features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.adding = signal(
      "",
      ...ngDevMode ? [{ debugName: "adding" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.levels = this._org.active_levels;
    this.features = this._form.features;
    this.map_desks = computed(
      () => {
        const features = this.selected_features();
        return this._form.available_resources().filter((desk) => features.every((_) => desk.features?.includes(_)));
      },
      ...ngDevMode ? [{ debugName: "map_desks" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.desks = computed(
      () => {
        const level_id = this.level_id();
        return this.map_desks().filter((desk) => !level_id || desk.zone?.id === level_id || desk.zone?.parent_id === level_id);
      },
      ...ngDevMode ? [{ debugName: "desks" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.saving = computed(
      () => this.link.state() === "saving",
      ...ngDevMode ? [{ debugName: "saving" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = computed(
      () => !!this._form.loading() || this._outlook.loading(),
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._window = computed(
      () => {
        const event = this._outlook.event();
        return event ? deskWindow(event) : null;
      },
      ...ngDevMode ? [{ debugName: "_window" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.window_error = computed(
      () => {
        const result = this._window();
        return result?.reason || "";
      },
      ...ngDevMode ? [{ debugName: "window_error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.all_day_unknown = computed(
      () => this._outlook.event()?.all_day === null,
      ...ngDevMode ? [{ debugName: "all_day_unknown" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.all_day_policy = computed(
      () => {
        if (!this._outlook.event()?.all_day)
          return "";
        const period = this._form.setting("all_day_period");
        return period && period.start != null && period.end != null ? `${hourLabel(period.start)} to ${hourLabel(period.end)}` : "";
      },
      ...ngDevMode ? [{ debugName: "all_day_policy" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.period = computed(
      () => {
        const event = this._outlook.event();
        if (!event)
          return "";
        return event.all_day ? "all day" : formatEventPeriod(event).split(" \xB7 ").pop();
      },
      ...ngDevMode ? [{ debugName: "period" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._sync_level = effect(
      () => {
        const zone_id = this._form.options().zone_id || "";
        untracked(() => {
          if (zone_id && zone_id !== this.level_id()) {
            this.level_id.set(zone_id);
          }
        });
      },
      ...ngDevMode ? [{ debugName: "_sync_level" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._form.newForm("desk");
    this.link.load();
    effect(() => {
      const result = this._window();
      this.link.state();
      if (!result?.window)
        return;
      const { date, duration, all_day } = result.window;
      untracked(() => {
        this._form.model.update((m) => __spreadProps(__spreadValues({}, m), {
          date,
          duration,
          all_day
        }));
        this._form.listAvailableResources();
      });
    });
    this._form.setOptions({ type: "desk", features: [] });
    effect(() => {
      const level_id = this.level_id();
      untracked(() => {
        const { zone_id } = this._form.options();
        if (zone_id && zone_id !== level_id) {
          this._form.setOptions({ zone_id: void 0 });
        }
      });
    });
  }
  toggleFeature(feature) {
    this.selected_features.update((list) => list.includes(feature) ? list.filter((_) => _ !== feature) : [...list, feature]);
  }
  async addDesk(desk) {
    this.adding.set(desk.id);
    await this.link.add(desk);
    this.adding.set("");
    if (this.link.booking())
      this.selected_desk.set(null);
  }
  static {
    this.\u0275fac = function DeskSearchComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskSearchComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskSearchComponent, selectors: [["desk-search"]], decls: 7, vars: 3, consts: [["desk_card", ""], [1, "flex", "flex-col", "gap-3", "p-3"], ["aria-label", "Desk on this event", 1, "border-base-300", "space-y-2", "rounded-lg", "border", "p-3"], ["role", "alert", 1, "text-error", "flex", "items-start", "gap-2", "text-sm"], [1, "bg-base-200", "rounded", "p-3", "text-sm"], [1, "flex", "items-start", "gap-2"], [1, "min-w-0", "flex-1"], [1, "text-xs", "opacity-60"], [1, "truncate", "font-medium"], [1, "text-sm"], ["btn", "", "matRipple", "", 1, "inverse", "h-9", "min-h-0", "text-sm", 3, "click", "disabled"], [1, "bg-warning-light", "flex", "items-center", "gap-2", "rounded", "p-2", "text-sm"], [1, "text-warning"], [1, "flex-1"], ["btn", "", "matRipple", "", 1, "h-8", "min-h-0", "text-sm", 3, "click", "disabled"], ["icon", "", "matRipple", "", "aria-label", "Close message", 3, "click"], [1, "bg-base-200", "rounded", "p-2", "text-xs"], [1, "flex", "flex-col", "text-sm"], ["aria-label", "Desk features", 1, "flex", "flex-wrap", "gap-x-3"], [1, "flex", "items-center", "justify-between", "gap-2"], [1, "font-medium"], [3, "viewChange", "view"], ["appearance", "outline", 1, "no-subscript"], [3, "valueChange", "value"], ["value", ""], [3, "value"], [3, "ngModel"], [3, "ngModelChange", "ngModel"], [1, "border-base-300", "h-[26rem]", "overflow-hidden", "rounded-lg", "border", 3, "onSelect", "active", "available"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "text-center", "text-sm", "opacity-60"], [1, "py-6", "text-center", "text-sm", "opacity-60"], [1, "border-base-300", "rounded-lg", "border", "p-3"], [1, "text-sm", "opacity-70"], [1, "mt-2", "flex", "items-center", "justify-between"], [1, "text-success", "flex", "items-center", "gap-1", "text-sm"]], template: function DeskSearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275conditionalCreate(1, DeskSearchComponent_Conditional_1_Template, 12, 8, "section", 2);
        \u0275\u0275conditionalCreate(2, DeskSearchComponent_Conditional_2_Template, 8, 1, "div", 3);
        \u0275\u0275conditionalCreate(3, DeskSearchComponent_Conditional_3_Template, 2, 1, "p", 4)(4, DeskSearchComponent_Conditional_4_Template, 12, 8);
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, DeskSearchComponent_ng_template_5_Template, 13, 6, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_1_0 = ctx.link.booking()) ? 1 : -1, tmp_1_0);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.link.error() ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.window_error() ? 3 : 4);
      }
    }, dependencies: [
      FormsModule,
      NgControlStatus,
      NgModel,
      MatCheckboxModule,
      MatCheckbox,
      MatFormFieldModule,
      MatFormField,
      MatRippleModule,
      MatRipple,
      MatSelectModule,
      MatSelect,
      MatOption,
      NgTemplateOutlet,
      IconComponent,
      DeskMapComponent,
      ViewToggleComponent
    ], styles: ["\n.no-subscript[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n/*# sourceMappingURL=desk-search.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskSearchComponent, [{
    type: Component,
    args: [{ selector: "desk-search", template: `
        <div class="flex flex-col gap-3 p-3">
            @if (link.booking(); as booking) {
                <section
                    class="border-base-300 space-y-2 rounded-lg border p-3"
                    aria-label="Desk on this event"
                >
                    <div class="flex items-start gap-2">
                        <div class="min-w-0 flex-1">
                            <div class="text-xs opacity-60">On this event</div>
                            <h3 class="truncate font-medium">
                                {{ booking.asset_name || booking.asset_id }}
                            </h3>
                            <div
                                class="text-sm"
                                [class.text-success]="booking.approved"
                                [class.text-warning]="!booking.approved"
                            >
                                {{
                                    booking.approved
                                        ? 'Reserved'
                                        : 'Reserved. Approval pending.'
                                }}
                            </div>
                        </div>
                        <button
                            btn
                            matRipple
                            class="inverse h-9 min-h-0 text-sm"
                            [disabled]="saving()"
                            (click)="link.remove()"
                        >
                            Remove
                        </button>
                    </div>
                    @if (link.out_of_sync()) {
                        <div
                            class="bg-warning-light flex items-center gap-2 rounded p-2 text-sm"
                        >
                            <icon class="text-warning">warning</icon>
                            <span class="flex-1">
                                The event time changed. The desk is still booked
                                for the old time.
                            </span>
                            <button
                                btn
                                matRipple
                                class="h-8 min-h-0 text-sm"
                                [disabled]="saving()"
                                (click)="link.update()"
                            >
                                Update
                            </button>
                        </div>
                    }
                </section>
            }
            @if (link.error()) {
                <div
                    role="alert"
                    class="text-error flex items-start gap-2 text-sm"
                >
                    <icon>error</icon>
                    <span class="flex-1">{{ link.error() }}</span>
                    <button
                        icon
                        matRipple
                        aria-label="Close message"
                        (click)="link.clearError()"
                    >
                        <icon>close</icon>
                    </button>
                </div>
            }
            @if (window_error()) {
                <p class="bg-base-200 rounded p-3 text-sm">
                    {{ window_error() }}
                </p>
            } @else {
                @if (all_day_unknown()) {
                    <p class="bg-base-200 rounded p-2 text-xs">
                        This Outlook client does not report the All day setting.
                        PlaceOS uses the event times shown above.
                    </p>
                }
                @if (all_day_policy(); as policy) {
                    <p class="bg-base-200 rounded p-2 text-xs">
                        All-day desk bookings at this site are from
                        {{ policy }}.
                    </p>
                }
                @if (view() === 'list') {
                    <label class="flex flex-col text-sm">
                        Floor
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript"
                        >
                            <mat-select [(value)]="level_id">
                                <mat-option value="">Any floor</mat-option>
                                @for (lvl of levels(); track lvl.id) {
                                    <mat-option [value]="lvl.id">
                                        {{ lvl.display_name || lvl.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </label>
                }
                @if (features().length) {
                    <div
                        class="flex flex-wrap gap-x-3"
                        aria-label="Desk features"
                    >
                        @for (feature of features(); track feature) {
                            <mat-checkbox
                                [ngModel]="
                                    selected_features().includes(feature)
                                "
                                (ngModelChange)="toggleFeature(feature)"
                            >
                                {{ feature }}
                            </mat-checkbox>
                        }
                    </div>
                }
                <div class="flex items-center justify-between gap-2">
                    <h3 class="font-medium">
                        @if (loading()) {
                            Checking availability...
                        } @else {
                            {{ desks().length }} available
                            {{ desks().length === 1 ? 'desk' : 'desks' }}
                        }
                    </h3>
                    <view-toggle [(view)]="view" />
                </div>
                @if (view() === 'map') {
                    <desk-map
                        class="border-base-300 h-[26rem] overflow-hidden rounded-lg border"
                        [active]="
                            selected_desk()?.id || link.booking()?.asset_id
                        "
                        [available]="map_desks()"
                        (onSelect)="selected_desk.set($event)"
                    />
                    @if (selected_desk(); as desk) {
                        <ng-container
                            [ngTemplateOutlet]="desk_card"
                            [ngTemplateOutletContext]="{ $implicit: desk }"
                        />
                    } @else {
                        <p class="text-center text-sm opacity-60">
                            Select a desk on the map.
                        </p>
                    }
                } @else {
                    @for (desk of desks(); track desk.id) {
                        <ng-container
                            [ngTemplateOutlet]="desk_card"
                            [ngTemplateOutletContext]="{ $implicit: desk }"
                        />
                    } @empty {
                        @if (!loading()) {
                            <p class="py-6 text-center text-sm opacity-60">
                                No desks match these filters for this time.
                            </p>
                        }
                    }
                }
                @if (!link.booking()) {
                    <p class="text-xs opacity-60">
                        Adding a desk reserves it now and saves this event to
                        your calendar. Outlook does not send invitations for a
                        new event until you select Send.
                    </p>
                }
            }
        </div>
        <ng-template #desk_card let-desk>
            <article class="border-base-300 rounded-lg border p-3">
                <h4 class="truncate font-medium">
                    {{ desk.display_name || desk.name || desk.id }}
                </h4>
                <p class="text-sm opacity-70">
                    {{
                        desk.zone?.display_name ||
                            desk.zone?.name ||
                            desk.level?.display_name ||
                            desk.level?.name
                    }}
                    @if (desk.features?.length) {
                        \xB7 {{ desk.features.join(' \xB7 ') }}
                    }
                </p>
                <div class="mt-2 flex items-center justify-between">
                    <span class="text-success flex items-center gap-1 text-sm">
                        <icon>check</icon> Available {{ period() }}
                    </span>
                    <button
                        btn
                        matRipple
                        class="inverse h-9 min-h-0 text-sm"
                        [disabled]="saving() || !!link.booking()"
                        (click)="addDesk(desk)"
                    >
                        {{
                            saving() && adding() === desk.id
                                ? 'Reserving...'
                                : 'Add to event'
                        }}
                    </button>
                </div>
            </article>
        </ng-template>
    `, imports: [
      FormsModule,
      MatCheckboxModule,
      MatFormFieldModule,
      MatRippleModule,
      MatSelectModule,
      NgTemplateOutlet,
      IconComponent,
      DeskMapComponent,
      ViewToggleComponent
    ], styles: ["/* angular:styles/component:css;a1a04deb007c7755909745173258e837cb81cab4ea2da9442648300ec9f61c69;/home/runner/work/user-interfaces/user-interfaces/apps/outlook-addin/src/app/calendar/desk-search.component.ts */\n.no-subscript ::ng-deep .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n/*# sourceMappingURL=desk-search.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskSearchComponent, { className: "DeskSearchComponent", filePath: "apps/outlook-addin/src/app/calendar/desk-search.component.ts", lineNumber: 276 });
})();

// apps/outlook-addin/src/app/calendar/room-search.component.ts
var _c02 = (a0) => ({ $implicit: a0 });
var _forTrack03 = ($index, $item) => $item.email;
var _forTrack1 = ($index, $item) => $item.id;
function RoomSearchComponent_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 21)(1, "div", 22)(2, "div", 23);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 24);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 25);
    \u0275\u0275listener("click", function RoomSearchComponent_Conditional_1_For_4_Template_button_click_6_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeRoom(item_r3.email));
    });
    \u0275\u0275text(7, " Remove ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r3.space?.display_name || item_r3.space?.name || item_r3.email, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("text-success", item_r3.state === "confirmed")("text-warning", item_r3.state === "pending")("text-error", item_r3.state === "declined");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.state_labels[item_r3.state], " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !!ctx_r3.busy());
  }
}
function RoomSearchComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2)(1, "h3", 20);
    \u0275\u0275text(2, "On this event");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, RoomSearchComponent_Conditional_1_For_4_Template, 8, 9, "article", 21, _forTrack03);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.event_rooms());
  }
}
function RoomSearchComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 3)(1, "icon", 26);
    \u0275\u0275text(2, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function RoomSearchComponent_Conditional_2_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.search, $event) || (ctx_r3.search = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.search);
    \u0275\u0275control();
  }
}
function RoomSearchComponent_Conditional_3_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r7 = ctx.$implicit;
    \u0275\u0275property("value", bld_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bld_r7.display_name || bld_r7.name, " ");
  }
}
function RoomSearchComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 4);
    \u0275\u0275text(1, " Building ");
    \u0275\u0275elementStart(2, "mat-form-field", 7)(3, "mat-select", 28);
    \u0275\u0275listener("selectionChange", function RoomSearchComponent_Conditional_3_Template_mat_select_selectionChange_3_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setBuilding($event.value));
    });
    \u0275\u0275repeaterCreate(4, RoomSearchComponent_Conditional_3_For_5_Template, 2, 2, "mat-option", 9, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r3.building());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.buildings());
  }
}
function RoomSearchComponent_Conditional_5_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lvl_r9 = ctx.$implicit;
    \u0275\u0275property("value", lvl_r9.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", lvl_r9.display_name || lvl_r9.name, " ");
  }
}
function RoomSearchComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 6);
    \u0275\u0275text(1, " Floor ");
    \u0275\u0275elementStart(2, "mat-form-field", 7)(3, "mat-select", 8);
    \u0275\u0275twoWayListener("valueChange", function RoomSearchComponent_Conditional_5_Template_mat_select_valueChange_3_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.level_id, $event) || (ctx_r3.level_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "mat-option", 29);
    \u0275\u0275text(5, "Any floor");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, RoomSearchComponent_Conditional_5_For_7_Template, 2, 2, "mat-option", 9, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("value", ctx_r3.level_id);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.levels());
  }
}
function RoomSearchComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const count_r10 = ctx.$implicit;
    \u0275\u0275property("value", count_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", count_r10 ? count_r10 + " people" : "Any", " ");
  }
}
function RoomSearchComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function RoomSearchComponent_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.show_features.set(!ctx_r3.show_features()));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-expanded", ctx_r3.show_features());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Facilities (", ctx_r3.selected_features().length, ") ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.show_features() ? "expand_less" : "expand_more");
  }
}
function RoomSearchComponent_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 11);
    \u0275\u0275listener("ngModelChange", function RoomSearchComponent_Conditional_16_For_2_Template_mat_checkbox_ngModelChange_0_listener() {
      const feature_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleFeature(feature_r13));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const feature_r13 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", ctx_r3.selected_features().includes(feature_r13));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", feature_r13, " ");
  }
}
function RoomSearchComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275repeaterCreate(1, RoomSearchComponent_Conditional_16_For_2_Template, 2, 2, "mat-checkbox", 31, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.features());
  }
}
function RoomSearchComponent_Conditional_17_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function RoomSearchComponent_Conditional_17_For_2_Template_button_click_0_listener() {
      const feature_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleFeature(feature_r15));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feature_r15 = ctx.$implicit;
    \u0275\u0275attribute("aria-label", "Remove filter " + feature_r15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", feature_r15, " ");
  }
}
function RoomSearchComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275repeaterCreate(1, RoomSearchComponent_Conditional_17_For_2_Template, 4, 2, "button", 32, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.selected_features());
  }
}
function RoomSearchComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Checking availability... ");
  }
}
function RoomSearchComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate2(" ", ctx_r3.results().length, " available ", ctx_r3.results().length === 1 ? "room" : "rooms", " ");
  }
}
function RoomSearchComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, " Smallest fit first ");
    \u0275\u0275elementEnd();
  }
}
function RoomSearchComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.window_error());
  }
}
function RoomSearchComponent_Conditional_26_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 35);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const room_card_r17 = \u0275\u0275reference(29);
    \u0275\u0275property("ngTemplateOutlet", room_card_r17)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c02, ctx));
  }
}
function RoomSearchComponent_Conditional_26_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 36);
    \u0275\u0275text(1, " Select a room on the map. ");
    \u0275\u0275elementEnd();
  }
}
function RoomSearchComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "space-map", 34);
    \u0275\u0275listener("onSelect", function RoomSearchComponent_Conditional_26_Template_space_map_onSelect_0_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selected_space.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(1, RoomSearchComponent_Conditional_26_Conditional_1_Template, 1, 4, "ng-container", 35)(2, RoomSearchComponent_Conditional_26_Conditional_2_Template, 2, 0, "p", 36);
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("active", ctx_r3.selected_space()?.id)("selected", ctx_r3.event_room_ids())("available", ctx_r3.map_spaces());
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_5_0 = ctx_r3.selected_space()) ? 1 : 2, tmp_5_0);
  }
}
function RoomSearchComponent_Conditional_27_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 35);
  }
  if (rf & 2) {
    const space_r18 = ctx.$implicit;
    \u0275\u0275nextContext(2);
    const room_card_r17 = \u0275\u0275reference(29);
    \u0275\u0275property("ngTemplateOutlet", room_card_r17)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c02, space_r18));
  }
}
function RoomSearchComponent_Conditional_27_ForEmpty_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 37);
    \u0275\u0275text(1, " No rooms match these filters for this time. ");
    \u0275\u0275elementEnd();
  }
}
function RoomSearchComponent_Conditional_27_ForEmpty_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RoomSearchComponent_Conditional_27_ForEmpty_2_Conditional_0_Template, 2, 0, "p", 37);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!ctx_r3.loading() && !ctx_r3.window_error() ? 0 : -1);
  }
}
function RoomSearchComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, RoomSearchComponent_Conditional_27_For_1_Template, 1, 4, "ng-container", 35, _forTrack1, false, RoomSearchComponent_Conditional_27_ForEmpty_2_Template, 1, 1);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r3.results());
  }
}
function RoomSearchComponent_ng_template_28_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 40);
  }
  if (rf & 2) {
    const space_r20 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", space_r20.images[0]);
  }
}
function RoomSearchComponent_ng_template_28_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r21 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", feature_r21, " ");
  }
}
function RoomSearchComponent_ng_template_28_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275repeaterCreate(1, RoomSearchComponent_ng_template_28_Conditional_11_For_2_Template, 2, 1, "span", 48, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const space_r20 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(space_r20.features);
  }
}
function RoomSearchComponent_ng_template_28_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1, "On this event");
    \u0275\u0275elementEnd();
  }
}
function RoomSearchComponent_ng_template_28_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function RoomSearchComponent_ng_template_28_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const space_r20 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addRoom(space_r20));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const space_r20 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", !!ctx_r3.busy());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.busy() === space_r20.email ? "Adding..." : "Add to meeting", " ");
  }
}
function RoomSearchComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 38)(1, "div", 39);
    \u0275\u0275conditionalCreate(2, RoomSearchComponent_ng_template_28_Conditional_2_Template, 1, 1, "img", 40);
    \u0275\u0275elementStart(3, "div", 22)(4, "h4", 23);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 41);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 42);
    \u0275\u0275listener("click", function RoomSearchComponent_ng_template_28_Template_button_click_8_listener() {
      const space_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleFavourite(space_r20));
    });
    \u0275\u0275elementStart(9, "icon");
    \u0275\u0275text(10, "favorite");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(11, RoomSearchComponent_ng_template_28_Conditional_11_Template, 3, 0, "div", 43);
    \u0275\u0275elementStart(12, "div", 44)(13, "span", 45)(14, "icon");
    \u0275\u0275text(15, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " Available ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, RoomSearchComponent_ng_template_28_Conditional_17_Template, 2, 0, "span", 46)(18, RoomSearchComponent_ng_template_28_Conditional_18_Template, 2, 2, "button", 47);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const space_r20 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.show_images() && space_r20.images?.length ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", space_r20.display_name || space_r20.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.roomDetails(space_r20), " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", (ctx_r3.favourites().includes(space_r20.id) ? "Remove from favourites " : "Add to favourites ") + (space_r20.display_name || space_r20.name));
    \u0275\u0275advance();
    \u0275\u0275classProp("text-error", ctx_r3.favourites().includes(space_r20.id))("opacity-40", !ctx_r3.favourites().includes(space_r20.id));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(space_r20.features?.length ? 11 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r3.isOnEvent(space_r20) ? 17 : 18);
  }
}
var CAPACITY_OPTIONS = [0, 2, 4, 6, 8, 10, 12, 20];
var ROOM_STATE_LABELS = {
  selected: "Added. Outlook requests the room when you send.",
  pending: "Request pending",
  confirmed: "Confirmed",
  declined: "Declined. Choose another room."
};
var RoomSearchComponent = class _RoomSearchComponent {
  constructor() {
    this._events = inject(EventFormService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._outlook = inject(OutlookEventService);
    this.capacity_options = CAPACITY_OPTIONS;
    this.state_labels = ROOM_STATE_LABELS;
    this._map = viewChild(
      SpaceMapComponent,
      ...ngDevMode ? [{ debugName: "_map" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.view = signal(
      "list",
      ...ngDevMode ? [{ debugName: "view" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_space = signal(
      null,
      ...ngDevMode ? [{ debugName: "selected_space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.search = signal(
      "",
      ...ngDevMode ? [{ debugName: "search" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.level_id = signal(
      "",
      ...ngDevMode ? [{ debugName: "level_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.capacity = signal(
      0,
      ...ngDevMode ? [{ debugName: "capacity" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_favourites = signal(
      false,
      ...ngDevMode ? [{ debugName: "show_favourites" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_features = signal(
      false,
      ...ngDevMode ? [{ debugName: "show_features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_features = signal(
      [],
      ...ngDevMode ? [{ debugName: "selected_features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.busy = signal(
      "",
      ...ngDevMode ? [{ debugName: "busy" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.buildings = this._org.building_list;
    this.building = this._org.active_building;
    this.levels = this._org.active_levels;
    this.features = this._events.features;
    this.show_images = settingSignal("space_display.show_images", false);
    this._favourites = settingSignal("favourite_spaces", [], true);
    this.favourites = computed(
      () => this._favourites() || [],
      ...ngDevMode ? [{ debugName: "favourites" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._window = computed(
      () => {
        const event = this._outlook.event();
        return event ? roomWindow(event) : null;
      },
      ...ngDevMode ? [{ debugName: "_window" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.window_error = computed(
      () => {
        const result = this._window();
        return result?.reason || "";
      },
      ...ngDevMode ? [{ debugName: "window_error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = computed(
      () => !!this._events.loading() || this._outlook.loading(),
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.event_rooms = computed(
      () => {
        const responses = this._outlook.room_responses();
        const spaces = this._events.spaces();
        return (this._outlook.event()?.room_emails || []).map((email) => ({
          email,
          space: spaces.find((_) => _.email?.toLowerCase() === email),
          state: roomStateFromResponse(responses[email])
        }));
      },
      ...ngDevMode ? [{ debugName: "event_rooms" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.event_room_ids = computed(
      () => this.event_rooms().map((_) => _.space?.id).filter((_) => !!_),
      ...ngDevMode ? [{ debugName: "event_room_ids" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.map_spaces = computed(
      () => {
        const capacity = this.capacity();
        const favourites = this.show_favourites() ? this.favourites() : null;
        const features = this.selected_features();
        return this._events.available_spaces().filter((space) => (!capacity || space.capacity < 0 || space.capacity >= capacity) && (!favourites || favourites.includes(space.id)) && features.every((_) => space.features.includes(_)));
      },
      ...ngDevMode ? [{ debugName: "map_spaces" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.results = computed(
      () => {
        const query = this.search().trim().toLowerCase();
        const on_event = this._outlook.event()?.room_emails || [];
        const level_id = this.level_id();
        return this.map_spaces().filter((space) => !on_event.includes(space.email?.toLowerCase()) && (!level_id || space.zones.includes(level_id)) && (!query || `${space.display_name} ${space.name}`.toLowerCase().includes(query))).sort((a, b) => a.capacity - b.capacity);
      },
      ...ngDevMode ? [{ debugName: "results" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._events.listAvailableSpaces();
    effect(() => {
      const result = this._window();
      const options = this._events.options();
      if (!result?.window)
        return;
      const { date, duration } = result.window;
      const zones = [];
      if (options.date !== date || options.duration !== duration || options.all_day || `${options.zones}` !== `${zones}`) {
        this._events.setOptions({
          date,
          duration,
          all_day: false,
          zones
        });
      }
    });
    this._events.setFilters({
      capacity: -1,
      show_fav: false,
      features: []
    });
    effect(() => {
      const map = this._map();
      const level_id = untracked(this.level_id);
      if (!map || !level_id)
        return;
      const level = this._org.levelWithID([level_id]);
      if (level)
        untracked(() => map.level.set(level));
    });
  }
  /** Floor and capacity of a room, for example `Level 2 · 8 people` */
  roomDetails(space) {
    const level = space.level?.id ? space.level : this._org.levelWithID(space.zones);
    const people = `${space.capacity} ${space.capacity === 1 ? "person" : "people"}`;
    return [level?.display_name || level?.name, people].filter((_) => !!_).join(" \xB7 ");
  }
  setBuilding(building) {
    this.level_id.set("");
    this._org.building = building;
  }
  toggleFeature(feature) {
    this.selected_features.update((list) => list.includes(feature) ? list.filter((_) => _ !== feature) : [...list, feature]);
  }
  toggleFavourite(space) {
    const list = this.favourites();
    const next = list.includes(space.id) ? list.filter((_) => _ !== space.id) : [...list, space.id];
    this._favourites.set(next);
    this._settings.saveUserSetting("favourite_spaces", next);
  }
  isOnEvent(space) {
    return (this._outlook.event()?.room_emails || []).includes(space.email?.toLowerCase());
  }
  async addRoom(space) {
    await this._roomAction(space.email, () => this._outlook.addRoom(space.email));
    if (this.isOnEvent(space))
      this.selected_space.set(null);
  }
  async removeRoom(email) {
    await this._roomAction(email, () => this._outlook.removeRoom(email));
  }
  async _roomAction(email, action) {
    this.busy.set(email);
    try {
      await action();
    } catch (error) {
      notifyError(errorMessage(error) || "Outlook could not update the room.");
    } finally {
      this.busy.set("");
    }
  }
  static {
    this.\u0275fac = function RoomSearchComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoomSearchComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomSearchComponent, selectors: [["room-search"]], viewQuery: function RoomSearchComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._map, SpaceMapComponent, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, decls: 30, vars: 14, consts: [["room_card", ""], [1, "flex", "flex-col", "gap-3", "p-3"], ["aria-label", "Rooms on this event", 1, "space-y-2"], ["appearance", "outline", 1, "no-subscript", "w-full"], [1, "flex", "flex-col", "text-sm"], [1, "flex", "gap-2"], [1, "flex", "min-w-0", "flex-1", "flex-col", "text-sm"], ["appearance", "outline", 1, "no-subscript"], [3, "valueChange", "value"], [3, "value"], [1, "flex", "items-center", "justify-between"], [3, "ngModelChange", "ngModel"], ["matRipple", "", 1, "text-secondary", "flex", "items-center", "text-sm"], [1, "bg-base-200", "flex", "flex-wrap", "gap-x-3", "rounded-lg", "p-2"], ["aria-label", "Selected facilities", 1, "flex", "flex-wrap", "gap-2"], [1, "flex", "items-center", "justify-between", "gap-2"], [1, "font-medium"], [1, "text-xs", "opacity-60"], [3, "viewChange", "view"], [1, "text-error", "text-sm"], [1, "text-sm", "font-medium"], [1, "border-base-300", "flex", "items-center", "gap-2", "rounded-lg", "border", "p-3"], [1, "min-w-0", "flex-1"], [1, "truncate", "font-medium"], [1, "text-sm"], ["btn", "", "matRipple", "", 1, "inverse", "h-9", "min-h-0", "text-sm", 3, "click", "disabled"], ["matPrefix", "", 1, "px-2"], ["matInput", "", "placeholder", "Search rooms", "aria-label", "Search rooms", 3, "ngModelChange", "ngModel"], [3, "selectionChange", "value"], ["value", ""], ["matRipple", "", 1, "text-secondary", "flex", "items-center", "text-sm", 3, "click"], [3, "ngModel"], ["matRipple", "", 1, "bg-base-200", "flex", "items-center", "gap-1", "rounded-full", "py-1", "pr-1", "pl-3", "text-sm"], ["matRipple", "", 1, "bg-base-200", "flex", "items-center", "gap-1", "rounded-full", "py-1", "pr-1", "pl-3", "text-sm", 3, "click"], [1, "border-base-300", "h-[26rem]", "overflow-hidden", "rounded-lg", "border", 3, "onSelect", "active", "selected", "available"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "text-center", "text-sm", "opacity-60"], [1, "py-6", "text-center", "text-sm", "opacity-60"], [1, "border-base-300", "rounded-lg", "border", "p-3"], [1, "flex", "items-start", "gap-2"], ["auth", "", "alt", "", 1, "h-14", "w-20", "rounded", "object-cover", 3, "source"], [1, "text-sm", "opacity-70"], ["icon", "", "matRipple", "", 3, "click"], [1, "mt-2", "flex", "flex-wrap", "gap-1"], [1, "mt-2", "flex", "items-center", "justify-between"], [1, "text-success", "flex", "items-center", "gap-1", "text-sm"], [1, "text-sm", "opacity-60"], ["btn", "", "matRipple", "", 1, "inverse", "h-9", "min-h-0", "text-sm", 3, "disabled"], [1, "bg-base-200", "rounded", "px-2", "py-0.5", "text-xs"]], template: function RoomSearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275conditionalCreate(1, RoomSearchComponent_Conditional_1_Template, 5, 0, "section", 2);
        \u0275\u0275conditionalCreate(2, RoomSearchComponent_Conditional_2_Template, 4, 1, "mat-form-field", 3);
        \u0275\u0275conditionalCreate(3, RoomSearchComponent_Conditional_3_Template, 6, 1, "label", 4);
        \u0275\u0275elementStart(4, "div", 5);
        \u0275\u0275conditionalCreate(5, RoomSearchComponent_Conditional_5_Template, 8, 1, "label", 6);
        \u0275\u0275elementStart(6, "label", 6);
        \u0275\u0275text(7, " Minimum capacity ");
        \u0275\u0275elementStart(8, "mat-form-field", 7)(9, "mat-select", 8);
        \u0275\u0275twoWayListener("valueChange", function RoomSearchComponent_Template_mat_select_valueChange_9_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.capacity, $event) || (ctx.capacity = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275repeaterCreate(10, RoomSearchComponent_For_11_Template, 2, 2, "mat-option", 9, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(12, "div", 10)(13, "mat-checkbox", 11);
        \u0275\u0275twoWayListener("ngModelChange", function RoomSearchComponent_Template_mat_checkbox_ngModelChange_13_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.show_favourites, $event) || (ctx.show_favourites = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275text(14, " Favourites only ");
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275conditionalCreate(15, RoomSearchComponent_Conditional_15_Template, 4, 3, "button", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(16, RoomSearchComponent_Conditional_16_Template, 3, 0, "div", 13);
        \u0275\u0275conditionalCreate(17, RoomSearchComponent_Conditional_17_Template, 3, 0, "div", 14);
        \u0275\u0275elementStart(18, "div", 15)(19, "div")(20, "h3", 16);
        \u0275\u0275conditionalCreate(21, RoomSearchComponent_Conditional_21_Template, 1, 0)(22, RoomSearchComponent_Conditional_22_Template, 1, 2);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(23, RoomSearchComponent_Conditional_23_Template, 2, 0, "span", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "view-toggle", 18);
        \u0275\u0275twoWayListener("viewChange", function RoomSearchComponent_Template_view_toggle_viewChange_24_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.view, $event) || (ctx.view = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(25, RoomSearchComponent_Conditional_25_Template, 2, 1, "p", 19);
        \u0275\u0275conditionalCreate(26, RoomSearchComponent_Conditional_26_Template, 3, 4)(27, RoomSearchComponent_Conditional_27_Template, 3, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275template(28, RoomSearchComponent_ng_template_28_Template, 19, 10, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.event_rooms().length ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.view() === "list" ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.buildings().length > 1 ? 3 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.view() === "list" ? 5 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("value", ctx.capacity);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.capacity_options);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.show_favourites);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.features().length ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.show_features() ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.selected_features().length ? 17 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.loading() ? 21 : 22);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.view() === "list" ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("view", ctx.view);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.window_error() ? 25 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.view() === "map" ? 26 : 27);
      }
    }, dependencies: [
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatCheckboxModule,
      MatCheckbox,
      MatFormFieldModule,
      MatFormField,
      MatPrefix,
      MatInputModule,
      MatInput,
      MatRippleModule,
      MatRipple,
      MatSelectModule,
      MatSelect,
      MatOption,
      NgTemplateOutlet,
      IconComponent,
      AuthenticatedImageDirective,
      SpaceMapComponent,
      ViewToggleComponent
    ], styles: ["\n.no-subscript[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n/*# sourceMappingURL=room-search.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoomSearchComponent, [{
    type: Component,
    args: [{ selector: "room-search", template: `
        <div class="flex flex-col gap-3 p-3">
            @if (event_rooms().length) {
                <section class="space-y-2" aria-label="Rooms on this event">
                    <h3 class="text-sm font-medium">On this event</h3>
                    @for (item of event_rooms(); track item.email) {
                        <article
                            class="border-base-300 flex items-center gap-2 rounded-lg border p-3"
                        >
                            <div class="min-w-0 flex-1">
                                <div class="truncate font-medium">
                                    {{
                                        item.space?.display_name ||
                                            item.space?.name ||
                                            item.email
                                    }}
                                </div>
                                <div
                                    class="text-sm"
                                    [class.text-success]="
                                        item.state === 'confirmed'
                                    "
                                    [class.text-warning]="
                                        item.state === 'pending'
                                    "
                                    [class.text-error]="
                                        item.state === 'declined'
                                    "
                                >
                                    {{ state_labels[item.state] }}
                                </div>
                            </div>
                            <button
                                btn
                                matRipple
                                class="inverse h-9 min-h-0 text-sm"
                                [disabled]="!!busy()"
                                (click)="removeRoom(item.email)"
                            >
                                Remove
                            </button>
                        </article>
                    }
                </section>
            }
            @if (view() === 'list') {
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <icon matPrefix class="px-2">search</icon>
                    <input
                        matInput
                        placeholder="Search rooms"
                        aria-label="Search rooms"
                        [(ngModel)]="search"
                    />
                </mat-form-field>
            }
            @if (buildings().length > 1) {
                <label class="flex flex-col text-sm">
                    Building
                    <mat-form-field appearance="outline" class="no-subscript">
                        <mat-select
                            [value]="building()"
                            (selectionChange)="setBuilding($event.value)"
                        >
                            @for (bld of buildings(); track bld.id) {
                                <mat-option [value]="bld">
                                    {{ bld.display_name || bld.name }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </label>
            }
            <div class="flex gap-2">
                @if (view() === 'list') {
                    <label class="flex min-w-0 flex-1 flex-col text-sm">
                        Floor
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript"
                        >
                            <mat-select [(value)]="level_id">
                                <mat-option value="">Any floor</mat-option>
                                @for (lvl of levels(); track lvl.id) {
                                    <mat-option [value]="lvl.id">
                                        {{ lvl.display_name || lvl.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </label>
                }
                <label class="flex min-w-0 flex-1 flex-col text-sm">
                    Minimum capacity
                    <mat-form-field appearance="outline" class="no-subscript">
                        <mat-select [(value)]="capacity">
                            @for (count of capacity_options; track count) {
                                <mat-option [value]="count">
                                    {{ count ? count + ' people' : 'Any' }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </label>
            </div>
            <div class="flex items-center justify-between">
                <mat-checkbox [(ngModel)]="show_favourites">
                    Favourites only
                </mat-checkbox>
                @if (features().length) {
                    <button
                        matRipple
                        class="text-secondary flex items-center text-sm"
                        [attr.aria-expanded]="show_features()"
                        (click)="show_features.set(!show_features())"
                    >
                        Facilities ({{ selected_features().length }})
                        <icon>{{
                            show_features() ? 'expand_less' : 'expand_more'
                        }}</icon>
                    </button>
                }
            </div>
            @if (show_features()) {
                <div class="bg-base-200 flex flex-wrap gap-x-3 rounded-lg p-2">
                    @for (feature of features(); track feature) {
                        <mat-checkbox
                            [ngModel]="selected_features().includes(feature)"
                            (ngModelChange)="toggleFeature(feature)"
                        >
                            {{ feature }}
                        </mat-checkbox>
                    }
                </div>
            }
            @if (selected_features().length) {
                <div
                    class="flex flex-wrap gap-2"
                    aria-label="Selected facilities"
                >
                    @for (feature of selected_features(); track feature) {
                        <button
                            matRipple
                            class="bg-base-200 flex items-center gap-1 rounded-full py-1 pr-1 pl-3 text-sm"
                            [attr.aria-label]="'Remove filter ' + feature"
                            (click)="toggleFeature(feature)"
                        >
                            {{ feature }}
                            <icon>close</icon>
                        </button>
                    }
                </div>
            }
            <div class="flex items-center justify-between gap-2">
                <div>
                    <h3 class="font-medium">
                        @if (loading()) {
                            Checking availability...
                        } @else {
                            {{ results().length }} available
                            {{ results().length === 1 ? 'room' : 'rooms' }}
                        }
                    </h3>
                    @if (view() === 'list') {
                        <span class="text-xs opacity-60">
                            Smallest fit first
                        </span>
                    }
                </div>
                <view-toggle [(view)]="view" />
            </div>
            @if (window_error()) {
                <p class="text-error text-sm">{{ window_error() }}</p>
            }
            @if (view() === 'map') {
                <space-map
                    class="border-base-300 h-[26rem] overflow-hidden rounded-lg border"
                    [active]="selected_space()?.id"
                    [selected]="event_room_ids()"
                    [available]="map_spaces()"
                    (onSelect)="selected_space.set($event)"
                />
                @if (selected_space(); as space) {
                    <ng-container
                        [ngTemplateOutlet]="room_card"
                        [ngTemplateOutletContext]="{ $implicit: space }"
                    />
                } @else {
                    <p class="text-center text-sm opacity-60">
                        Select a room on the map.
                    </p>
                }
            } @else {
                @for (space of results(); track space.id) {
                    <ng-container
                        [ngTemplateOutlet]="room_card"
                        [ngTemplateOutletContext]="{ $implicit: space }"
                    />
                } @empty {
                    @if (!loading() && !window_error()) {
                        <p class="py-6 text-center text-sm opacity-60">
                            No rooms match these filters for this time.
                        </p>
                    }
                }
            }
        </div>
        <ng-template #room_card let-space>
            <article class="border-base-300 rounded-lg border p-3">
                <div class="flex items-start gap-2">
                    @if (show_images() && space.images?.length) {
                        <img
                            auth
                            [source]="space.images[0]"
                            alt=""
                            class="h-14 w-20 rounded object-cover"
                        />
                    }
                    <div class="min-w-0 flex-1">
                        <h4 class="truncate font-medium">
                            {{ space.display_name || space.name }}
                        </h4>
                        <p class="text-sm opacity-70">
                            {{ roomDetails(space) }}
                        </p>
                    </div>
                    <button
                        icon
                        matRipple
                        [attr.aria-label]="
                            (favourites().includes(space.id)
                                ? 'Remove from favourites '
                                : 'Add to favourites ') +
                            (space.display_name || space.name)
                        "
                        (click)="toggleFavourite(space)"
                    >
                        <icon
                            [class.text-error]="favourites().includes(space.id)"
                            [class.opacity-40]="
                                !favourites().includes(space.id)
                            "
                            >favorite</icon
                        >
                    </button>
                </div>
                @if (space.features?.length) {
                    <div class="mt-2 flex flex-wrap gap-1">
                        @for (feature of space.features; track feature) {
                            <span
                                class="bg-base-200 rounded px-2 py-0.5 text-xs"
                            >
                                {{ feature }}
                            </span>
                        }
                    </div>
                }
                <div class="mt-2 flex items-center justify-between">
                    <span class="text-success flex items-center gap-1 text-sm">
                        <icon>check</icon> Available
                    </span>
                    @if (isOnEvent(space)) {
                        <span class="text-sm opacity-60">On this event</span>
                    } @else {
                        <button
                            btn
                            matRipple
                            class="inverse h-9 min-h-0 text-sm"
                            [disabled]="!!busy()"
                            (click)="addRoom(space)"
                        >
                            {{
                                busy() === space.email
                                    ? 'Adding...'
                                    : 'Add to meeting'
                            }}
                        </button>
                    }
                </div>
            </article>
        </ng-template>
    `, imports: [
      FormsModule,
      MatCheckboxModule,
      MatFormFieldModule,
      MatInputModule,
      MatRippleModule,
      MatSelectModule,
      NgTemplateOutlet,
      IconComponent,
      AuthenticatedImageDirective,
      SpaceMapComponent,
      ViewToggleComponent
    ], styles: ["/* angular:styles/component:css;a1a04deb007c7755909745173258e837cb81cab4ea2da9442648300ec9f61c69;/home/runner/work/user-interfaces/user-interfaces/apps/outlook-addin/src/app/calendar/room-search.component.ts */\n.no-subscript ::ng-deep .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n/*# sourceMappingURL=room-search.component.css.map */\n"] }]
  }], () => [], { _map: [{ type: ViewChild, args: [forwardRef(() => SpaceMapComponent), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomSearchComponent, { className: "RoomSearchComponent", filePath: "apps/outlook-addin/src/app/calendar/room-search.component.ts", lineNumber: 356 });
})();

// apps/outlook-addin/src/app/calendar/calendar-pane.component.ts
var _forTrack04 = ($index, $item) => $item.id;
function CalendarPaneComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function CalendarPaneComponent_For_4_Template_button_click_0_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.active_tab.set(tab_r2.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-secondary", ctx_r2.active_tab() === tab_r2.id)("text-secondary-content", ctx_r2.active_tab() === tab_r2.id);
    \u0275\u0275attribute("aria-selected", ctx_r2.active_tab() === tab_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r2.name, " ");
  }
}
function CalendarPaneComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.subject || "Untitled event", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.period());
  }
}
function CalendarPaneComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, "Reading the Outlook event...");
    \u0275\u0275elementEnd();
  }
}
function CalendarPaneComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.error());
  }
}
function CalendarPaneComponent_Conditional_16_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "room-search");
  }
}
function CalendarPaneComponent_Conditional_16_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "desk-search");
  }
}
function CalendarPaneComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CalendarPaneComponent_Conditional_16_Case_0_Template, 1, 0, "room-search")(1, CalendarPaneComponent_Conditional_16_Case_1_Template, 1, 0, "desk-search");
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = ctx_r2.active_tab()) === "rooms" ? 0 : tmp_1_0 === "desks" ? 1 : -1);
  }
}
var TABS = [
  { id: "rooms", name: "Rooms" },
  { id: "desks", name: "Desks" }
];
var CalendarPaneComponent = class _CalendarPaneComponent {
  constructor() {
    this._outlook = inject(OutlookEventService);
    this.tabs = TABS;
    this.active_tab = signal(
      "rooms",
      ...ngDevMode ? [{ debugName: "active_tab" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.event = this._outlook.event;
    this.loading = this._outlook.loading;
    this.error = this._outlook.error;
    this.is_outlook = this._outlook.is_outlook;
    this.period = computed(
      () => {
        const event = this.event();
        return event ? `${formatEventPeriod(event)} \xB7 ${localTimezoneLabel()}` : "";
      },
      ...ngDevMode ? [{ debugName: "period" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    this._outlook.init();
  }
  refresh() {
    this._outlook.refresh();
  }
  static {
    this.\u0275fac = function CalendarPaneComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CalendarPaneComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CalendarPaneComponent, selectors: [["calendar-pane"]], decls: 17, vars: 7, consts: [[1, "bg-base-100", "absolute", "inset-0", "flex", "flex-col", "overflow-hidden"], [1, "border-base-200", "flex", "flex-col", "gap-3", "border-b", "p-3"], ["role", "tablist", "aria-label", "Resource type", 1, "border-base-300", "flex", "rounded-lg", "border", "p-1"], ["role", "tab", "matRipple", "", 1, "flex-1", "rounded-md", "py-2", "text-sm", "font-medium", 3, "bg-secondary", "text-secondary-content"], ["aria-label", "Outlook event", 1, "bg-info-light", "flex", "items-start", "gap-2", "rounded-lg", "p-3"], [1, "min-w-0", "flex-1"], [1, "text-sm"], [1, "text-xs", "opacity-60"], ["icon", "", "matRipple", "", "aria-label", "Read the event details again", 3, "click", "disabled"], ["role", "alert", 1, "text-error", "text-sm"], ["role", "tabpanel", 1, "flex-1", "overflow-auto"], ["role", "tab", "matRipple", "", 1, "flex-1", "rounded-md", "py-2", "text-sm", "font-medium", 3, "click"], [1, "truncate", "font-medium"]], template: function CalendarPaneComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2);
        \u0275\u0275repeaterCreate(3, CalendarPaneComponent_For_4_Template, 2, 6, "button", 3, _forTrack04);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "section", 4)(6, "div", 5);
        \u0275\u0275conditionalCreate(7, CalendarPaneComponent_Conditional_7_Template, 4, 2)(8, CalendarPaneComponent_Conditional_8_Template, 2, 0, "p", 6);
        \u0275\u0275elementStart(9, "p", 7);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "button", 8);
        \u0275\u0275listener("click", function CalendarPaneComponent_Template_button_click_11_listener() {
          return ctx.refresh();
        });
        \u0275\u0275elementStart(12, "icon");
        \u0275\u0275text(13, "refresh");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(14, CalendarPaneComponent_Conditional_14_Template, 2, 1, "p", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "main", 10);
        \u0275\u0275conditionalCreate(16, CalendarPaneComponent_Conditional_16_Template, 2, 1);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.tabs);
        \u0275\u0275advance(4);
        \u0275\u0275conditional((tmp_1_0 = ctx.event()) ? 7 : 8, tmp_1_0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.is_outlook ? "From this Outlook event" : "Sample event. Open PlaceOS from an Outlook event to use its details.", " ");
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275classProp("animate-spin", ctx.loading());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.error() ? 14 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.event() ? 16 : -1);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      IconComponent,
      RoomSearchComponent,
      DeskSearchComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarPaneComponent, [{
    type: Component,
    args: [{
      selector: "calendar-pane",
      template: `
        <div class="bg-base-100 absolute inset-0 flex flex-col overflow-hidden">
            <header class="border-base-200 flex flex-col gap-3 border-b p-3">
                <div
                    role="tablist"
                    aria-label="Resource type"
                    class="border-base-300 flex rounded-lg border p-1"
                >
                    @for (tab of tabs; track tab.id) {
                        <button
                            role="tab"
                            matRipple
                            class="flex-1 rounded-md py-2 text-sm font-medium"
                            [class.bg-secondary]="active_tab() === tab.id"
                            [class.text-secondary-content]="
                                active_tab() === tab.id
                            "
                            [attr.aria-selected]="active_tab() === tab.id"
                            (click)="active_tab.set(tab.id)"
                        >
                            {{ tab.name }}
                        </button>
                    }
                </div>
                <section
                    class="bg-info-light flex items-start gap-2 rounded-lg p-3"
                    aria-label="Outlook event"
                >
                    <div class="min-w-0 flex-1">
                        @if (event(); as event) {
                            <h2 class="truncate font-medium">
                                {{ event.subject || 'Untitled event' }}
                            </h2>
                            <p class="text-sm">{{ period() }}</p>
                        } @else {
                            <p class="text-sm">Reading the Outlook event...</p>
                        }
                        <p class="text-xs opacity-60">
                            {{
                                is_outlook
                                    ? 'From this Outlook event'
                                    : 'Sample event. Open PlaceOS from an Outlook event to use its details.'
                            }}
                        </p>
                    </div>
                    <button
                        icon
                        matRipple
                        aria-label="Read the event details again"
                        [disabled]="loading()"
                        (click)="refresh()"
                    >
                        <icon [class.animate-spin]="loading()">refresh</icon>
                    </button>
                </section>
                @if (error()) {
                    <p role="alert" class="text-error text-sm">{{ error() }}</p>
                }
            </header>
            <main class="flex-1 overflow-auto" role="tabpanel">
                @if (event()) {
                    @switch (active_tab()) {
                        @case ('rooms') {
                            <room-search />
                        }
                        @case ('desks') {
                            <desk-search />
                        }
                    }
                }
            </main>
        </div>
    `,
      imports: [
        MatRippleModule,
        IconComponent,
        RoomSearchComponent,
        DeskSearchComponent
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CalendarPaneComponent, { className: "CalendarPaneComponent", filePath: "apps/outlook-addin/src/app/calendar/calendar-pane.component.ts", lineNumber: 102 });
})();
export {
  CalendarPaneComponent
};
//# debugId=9826905a-76ac-532a-a1f8-dcafd7722651
//# sourceMappingURL=calendar-pane.component-BIYKBPTM.js.map
