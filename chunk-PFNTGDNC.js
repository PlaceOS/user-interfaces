import {
  BehaviorSubject,
  Booking,
  GuestUser,
  Injectable,
  SpacePipe,
  __spreadProps,
  __spreadValues,
  addMinutes,
  checkinBooking,
  generateGuestForm,
  getUnixTime,
  i18n,
  isSameDay,
  lastValueFrom,
  notifyError,
  notifySuccess,
  queryAllBookings,
  setClassMetadata,
  showBooking,
  showGuest,
  updateBooking,
  updateBookingInductionStatus,
  ɵɵdefineInjectable
} from "./chunk-4LGXR4NE.js";

// apps/visitor-kiosk/src/app/checkin/checkin-state.service.ts
var _CheckinStateService = class _CheckinStateService {
  constructor() {
    this._booking = new BehaviorSubject(null);
    this._guest = new BehaviorSubject(null);
    this._photo = new BehaviorSubject("");
    this._error = new BehaviorSubject("");
    this._form = new BehaviorSubject(generateGuestForm());
    this._space_pipe = new SpacePipe();
    this.photo = this._photo.asObservable();
    this.event = this._booking.asObservable();
    this.guest = this._guest.asObservable();
    this.error = this._error.asObservable();
    this.form = this._form.asObservable();
    this.metadata = "";
  }
  clear() {
    this._guest.next(null);
    this._booking.next(null);
    this._photo.next(null);
  }
  setBooking(booking, metadata = "") {
    this._booking.next(booking);
    this._guest.next(new GuestUser({
      email: booking.asset_id,
      name: booking.asset_name,
      organisation: booking.extension_data?.organisation,
      phone: booking.extension_data?.phone
    }));
    this.metadata = metadata;
  }
  setPhoto(data) {
    this._photo.next(data);
  }
  setError(message) {
    this._error.next(message);
  }
  /** Load guest and event data */
  async loadGuestAndEvent(email, event_id) {
    const guest = await lastValueFrom(showGuest(email));
    if (event_id) {
      const event = await lastValueFrom(showBooking(event_id));
      this._guest.next(guest);
      this._booking.next(event);
      this._form.next(generateGuestForm(guest, event.user_email));
      return { guest, event };
    }
    if (guest.booking) {
      this._guest.next(guest);
      this._booking.next(guest.booking);
      this._form.next(generateGuestForm(guest, guest.booking.user_email));
      return { guest, event: guest.booking };
    }
    let upcoming = await lastValueFrom(queryAllBookings({
      type: "visitor",
      period_start: getUnixTime(Date.now()),
      period_end: getUnixTime(addMinutes(Date.now(), 120))
    }));
    upcoming = upcoming.filter((_) => _.user_email === email || _.asset_id === email);
    const today = /* @__PURE__ */ new Date();
    const todays_events = upcoming.filter((event) => isSameDay(new Date(event.date), today));
    todays_events.sort((a, b) => a.date - b.date);
    if (todays_events.length <= 0) {
      throw new Error(i18n("APP.VISITOR_KIOSK.NOT_FOUND", { email }));
    }
    this._guest.next(guest);
    this._booking.next(todays_events[0]);
    this._form.next(generateGuestForm(guest, todays_events[0].user_email));
    return { guest, event: todays_events[0] };
  }
  async updateGuest(data) {
    const guest = this._guest.getValue();
    const form = this._form.getValue();
    if (!guest || !form)
      return;
    const booking = this._booking.getValue() || guest.extension_data.event;
    if (!booking || this.metadata || !form.value)
      return;
    const updated_booking = await lastValueFrom(updateBooking(booking.id, new Booking(__spreadProps(__spreadValues({}, booking), {
      asset_id: form.value.email || booking.asset_id,
      asset_name: form.value.name || booking.asset_name,
      description: form.value.name || booking.description,
      extension_data: __spreadProps(__spreadValues({}, booking.extension_data), {
        pass_number: form.value.pass_number || booking.extension_data?.pass_number,
        organisation: form.value.organisation || booking.extension_data?.organisation,
        phone: form.value.phone || booking.extension_data?.phone
      })
    })).toJSON()));
    this.setBooking(updated_booking);
  }
  async completeInduction() {
    const guest = this._guest.getValue();
    const event = this._booking.getValue() || guest.extension_data.event;
    if (!guest || !event)
      return;
    await lastValueFrom(updateBookingInductionStatus(event.id, "accepted"));
  }
  async declineInduction() {
    const guest = this._guest.getValue();
    const event = this._booking.getValue() || guest.extension_data.event;
    if (!guest || !event)
      return;
    await lastValueFrom(updateBookingInductionStatus(event.id, "declined"));
  }
  async checkinGuest(state = true) {
    const guest = this._guest.getValue();
    const event = this._booking.getValue() || guest.extension_data.event;
    if (!guest || !event)
      return;
    const checkin_fn = lastValueFrom(checkinBooking(event.id, state));
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
};
_CheckinStateService.\u0275fac = function CheckinStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CheckinStateService)();
};
_CheckinStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CheckinStateService, factory: _CheckinStateService.\u0275fac, providedIn: "root" });
var CheckinStateService = _CheckinStateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckinStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  CheckinStateService
};
//# sourceMappingURL=chunk-PFNTGDNC.js.map
