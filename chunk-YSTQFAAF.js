import {
  checkinBooking,
  queryAllBookings,
  showBooking,
  showGuest,
  updateBooking,
  updateBookingInductionStatus
} from "./chunk-5Q6KVQLJ.js";
import {
  Booking,
  GuestUser,
  OrganisationService,
  getUnixTime
} from "./chunk-4KFQL45D.js";
import {
  addMinutes,
  guardModelUndefinedWrites,
  i18n,
  isSameDay,
  notifyError,
  notifySuccess,
  withTimeout
} from "./chunk-PARB3GVO.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-CLFS24D3.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/visitor-kiosk/src/app/checkin/checkin-state.service.ts
var REQUEST_TIMEOUT_MS = 1e4;
var TIMEOUT_MESSAGE = "Request timed out. Please try again.";
function guestDetailsForm(guest = new GuestUser(), host = "") {
  return {
    host,
    name: guest.name || "",
    email: guest.email || "",
    phone: guest.phone || "",
    organisation: guest.organisation || "",
    pass_number: guest.extension_data?.pass_number || ""
  };
}
var CheckinStateService = class _CheckinStateService {
  constructor() {
    this._org = inject(OrganisationService);
    this._booking = signal(
      null,
      ...ngDevMode ? [{ debugName: "_booking" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._guest = signal(
      null,
      ...ngDevMode ? [{ debugName: "_guest" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._photo = signal(
      "",
      ...ngDevMode ? [{ debugName: "_photo" }] : (
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
    this.form = signal(
      guestDetailsForm(),
      ...ngDevMode ? [{ debugName: "form" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.photo = this._photo.asReadonly();
    this.event = this._booking.asReadonly();
    this.guest = this._guest.asReadonly();
    this.error = this._error.asReadonly();
    this.metadata = "";
    this._lookup_id = 0;
    guardModelUndefinedWrites(this.form, guestDetailsForm());
  }
  clear() {
    this._guest.set(null);
    this._booking.set(null);
    this._photo.set(null);
  }
  setBooking(booking, metadata = "") {
    const guest = new GuestUser({
      email: booking.asset_id,
      name: booking.asset_name,
      organisation: booking.extension_data?.organisation,
      phone: booking.extension_data?.phone,
      extension_data: booking.extension_data || {}
    });
    this._booking.set(booking);
    this._guest.set(guest);
    this.form.set(guestDetailsForm(guest, booking.user_email));
    this.metadata = metadata;
  }
  setPhoto(data) {
    this._photo.set(data);
  }
  setError(message) {
    this._error.set(message);
  }
  /**
   * Load guest and event data into the check-in state.
   * Rejects if the lookup takes longer than `REQUEST_TIMEOUT_MS`, or if a
   * newer lookup starts first.
   */
  async loadGuestAndEvent(email, event_id) {
    const id = ++this._lookup_id;
    const result = await withTimeout(this._findGuestAndEvent(email, event_id), REQUEST_TIMEOUT_MS, TIMEOUT_MESSAGE);
    if (id !== this._lookup_id)
      throw new Error("Lookup was replaced.");
    this._guest.set(result.guest);
    this._booking.set(result.event);
    this.form.set(guestDetailsForm(result.guest, result.event.user_email));
    return result;
  }
  /** Find the guest and their event. Does not change the check-in state. */
  async _findGuestAndEvent(email, event_id) {
    const guest = await showGuest(email);
    if (!guest.booking && event_id) {
      const event = await showBooking(event_id);
      return { guest, event };
    }
    if (guest.booking) {
      return { guest, event: guest.booking };
    }
    const building_id = this._org.building?.id;
    let upcoming = await queryAllBookings(__spreadValues({
      type: "visitor",
      period_start: getUnixTime(Date.now()),
      period_end: getUnixTime(addMinutes(Date.now(), 120))
    }, building_id ? { zones: building_id } : {}));
    upcoming = upcoming.filter((_) => _.user_email === email || _.asset_id === email);
    const today = /* @__PURE__ */ new Date();
    const todays_events = upcoming.filter((event) => isSameDay(new Date(event.date), today));
    todays_events.sort((a, b) => a.date - b.date);
    if (todays_events.length <= 0) {
      throw new Error(i18n("APP.VISITOR_KIOSK.NOT_FOUND", { email }));
    }
    return { guest, event: todays_events[0] };
  }
  /**
   * Save the form details and `data` to the current booking.
   * Rejects if the save fails or takes longer than `REQUEST_TIMEOUT_MS`.
   */
  async updateGuest(data) {
    const guest = this._guest();
    const form = this.form();
    if (!guest || !form)
      return;
    const booking = this._booking() || guest.extension_data.event;
    if (!booking || this.metadata)
      return;
    const save = updateBooking(booking.id, new Booking(__spreadProps(__spreadValues({}, booking), {
      asset_id: form.email || booking.asset_id,
      asset_name: form.name || booking.asset_name,
      description: form.name || booking.description,
      extension_data: __spreadProps(__spreadValues(__spreadValues({}, booking.extension_data), data || {}), {
        pass_number: form.pass_number || booking.extension_data?.pass_number,
        organisation: form.organisation || booking.extension_data?.organisation,
        phone: form.phone || booking.extension_data?.phone
      })
    })).toJSON());
    const updated_booking = await withTimeout(save, REQUEST_TIMEOUT_MS, TIMEOUT_MESSAGE);
    this.setBooking(updated_booking);
  }
  async completeInduction() {
    const guest = this._guest();
    const event = this._booking() || guest?.extension_data?.event;
    if (!guest || !event)
      return;
    const updated_booking = await updateBookingInductionStatus(event.id, "accepted");
    this._booking.set(updated_booking);
  }
  async declineInduction() {
    const guest = this._guest();
    const event = this._booking() || guest?.extension_data?.event;
    if (!guest || !event)
      return;
    await updateBookingInductionStatus(event.id, "declined");
  }
  /**
   * Set the check-in state of the current booking.
   * Shows an error and rejects if the request fails or takes longer than
   * `REQUEST_TIMEOUT_MS`.
   */
  async checkinGuest(state = true) {
    const guest = this._guest();
    const event = this._booking() || guest?.extension_data?.event;
    if (!guest || !event)
      return;
    const checkin_fn = withTimeout(checkinBooking(event.id, state), REQUEST_TIMEOUT_MS, TIMEOUT_MESSAGE);
    const vars = {
      guest: guest.name,
      host: event.user_name || event.user_email
    };
    const result = await checkin_fn.catch(async (e) => {
      console.error("Unable to update check-in state.", e);
      notifyError(state ? i18n("APP.VISITOR_KIOSK.ERROR_CHECKIN", vars) : i18n("APP.VISITOR_KIOSK.ERROR_CHECKOUT"));
      throw e;
    });
    if (!result)
      return;
    if (state) {
      notifySuccess(i18n("APP.VISITOR_KIOSK.SUCCESS_CHECKIN", vars));
    }
    this.metadata = "";
  }
  static {
    this.\u0275fac = function CheckinStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckinStateService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CheckinStateService, factory: _CheckinStateService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckinStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  CheckinStateService
};
//# debugId=408b8938-9be0-5f9b-b602-2c84d3db77e5
//# sourceMappingURL=chunk-YSTQFAAF.js.map
