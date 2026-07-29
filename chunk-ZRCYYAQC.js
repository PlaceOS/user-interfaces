import {
  Booking,
  GuestUser,
  Injectable,
  SpacePipe,
  addMinutes,
  checkinBooking,
  getUnixTime,
  guardModelUndefinedWrites,
  i18n,
  isSameDay,
  notifyError,
  notifySuccess,
  queryAllBookings,
  setClassMetadata,
  showBooking,
  showGuest,
  signal,
  updateBooking,
  updateBookingInductionStatus,
  ɵɵdefineInjectable
} from "./chunk-PXLNDWGU.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/visitor-kiosk/src/app/checkin/checkin-state.service.ts
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
    this._space_pipe = new SpacePipe();
    this.photo = this._photo.asReadonly();
    this.event = this._booking.asReadonly();
    this.guest = this._guest.asReadonly();
    this.error = this._error.asReadonly();
    this.metadata = "";
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
  /** Load guest and event data */
  async loadGuestAndEvent(email, event_id) {
    const guest = await showGuest(email);
    if (!guest.booking && event_id) {
      const event = await showBooking(event_id);
      this._guest.set(guest);
      this._booking.set(event);
      this.form.set(guestDetailsForm(guest, event.user_email));
      return { guest, event };
    }
    if (guest.booking) {
      this._guest.set(guest);
      this._booking.set(guest.booking);
      this.form.set(guestDetailsForm(guest, guest.booking.user_email));
      return { guest, event: guest.booking };
    }
    let upcoming = await queryAllBookings({
      type: "visitor",
      period_start: getUnixTime(Date.now()),
      period_end: getUnixTime(addMinutes(Date.now(), 120))
    });
    upcoming = upcoming.filter((_) => _.user_email === email || _.asset_id === email);
    const today = /* @__PURE__ */ new Date();
    const todays_events = upcoming.filter((event) => isSameDay(new Date(event.date), today));
    todays_events.sort((a, b) => a.date - b.date);
    if (todays_events.length <= 0) {
      throw new Error(i18n("APP.VISITOR_KIOSK.NOT_FOUND", { email }));
    }
    this._guest.set(guest);
    this._booking.set(todays_events[0]);
    this.form.set(guestDetailsForm(guest, todays_events[0].user_email));
    return { guest, event: todays_events[0] };
  }
  async updateGuest(data) {
    const guest = this._guest();
    const form = this.form();
    if (!guest || !form)
      return;
    const booking = this._booking() || guest.extension_data.event;
    if (!booking || this.metadata)
      return;
    const updated_booking = await updateBooking(booking.id, new Booking(__spreadProps(__spreadValues({}, booking), {
      asset_id: form.email || booking.asset_id,
      asset_name: form.name || booking.asset_name,
      description: form.name || booking.description,
      extension_data: __spreadProps(__spreadValues({}, booking.extension_data), {
        pass_number: form.pass_number || booking.extension_data?.pass_number,
        organisation: form.organisation || booking.extension_data?.organisation,
        phone: form.phone || booking.extension_data?.phone
      })
    })).toJSON());
    this.setBooking(updated_booking);
  }
  async completeInduction() {
    const guest = this._guest();
    const event = this._booking() || guest.extension_data.event;
    if (!guest || !event)
      return;
    await updateBookingInductionStatus(event.id, "accepted");
  }
  async declineInduction() {
    const guest = this._guest();
    const event = this._booking() || guest.extension_data.event;
    if (!guest || !event)
      return;
    await updateBookingInductionStatus(event.id, "declined");
  }
  async checkinGuest(state = true) {
    const guest = this._guest();
    const event = this._booking() || guest.extension_data.event;
    if (!guest || !event)
      return;
    const checkin_fn = checkinBooking(event.id, state);
    const vars = {
      guest: guest.name,
      host: event.user_name || event.user_email
    };
    const result = await checkin_fn.catch(async (e) => {
      notifyError(e || i18n("APP.VISITOR_KIOSK.ERROR_CHECKIN", vars));
      throw e;
    });
    if (!result)
      return;
    notifySuccess(i18n("APP.VISITOR_KIOSK.SUCCESS_CHECKIN", vars));
    this.metadata = "";
  }
  printPass() {
    try {
      return new Promise((res) => setTimeout(() => res(""), 5e3));
    } catch (err) {
      notifyError(i18n("APP.VISITOR_KIOSK.ERROR_PRINT"));
    }
    return Promise.reject();
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
//# sourceMappingURL=chunk-ZRCYYAQC.js.map
