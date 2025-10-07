import {
  BehaviorSubject,
  DeskConfirmModalComponent,
  DeskQuestionsModalComponent,
  GuestUser,
  MatDialog,
  OrganisationService,
  SpacePipe,
  addMinutes,
  checkinBooking,
  currentUser,
  endOfDay,
  first,
  generateGuestForm,
  getUnixTime,
  i18n,
  isSameDay,
  map,
  notifyError,
  notifySuccess,
  queryAllBookings,
  queryBookings,
  saveBooking,
  showBooking,
  showGuest,
  startOfDay,
  updateBookingInductionStatus,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-SJXBHYIO.js";
import {
  __async
} from "./chunk-4MWRP73S.js";

// libs/bookings/src/lib/desk.service.ts
var _DesksService = class _DesksService {
  constructor(_org, _dialog) {
    this._org = _org;
    this._dialog = _dialog;
    this.can_set_date = true;
    this.error_on_host = true;
  }
  bookDesk(_0) {
    return __async(this, arguments, function* ({ desks, host, reason, attendees, date }) {
      if (this.error_on_host && !host) {
        return notifyError("You need to select a host to book a desk.");
      } else {
        host = host || currentUser();
      }
      reason = reason || "";
      const level = this._org.levelWithID(desks[0].zone instanceof Array ? desks[0].zone : [desks[0].zone?.id]);
      let ref = this._dialog.open(DeskQuestionsModalComponent);
      let success = yield Promise.race([
        ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
        ref.afterClosed().pipe(map((_) => null)).toPromise()
      ]);
      if (!success)
        return;
      ref.close();
      ref = this._dialog.open(DeskConfirmModalComponent, {
        data: {
          host,
          desks,
          date: date ? new Date(date) : /* @__PURE__ */ new Date(),
          reason,
          level,
          can_set_date: this.can_set_date
        }
      });
      success = yield Promise.race([
        ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
        ref.afterClosed().pipe(map((_) => null)).toPromise()
      ]);
      if (!success)
        return;
      host = ref.componentInstance.host || host;
      date = ref.componentInstance.date || date;
      reason = ref.componentInstance.reason || reason;
      if (!host) {
        ref.close();
        return notifyError("You need to select a host to book a desk. ");
      }
      ref.componentInstance.loading = "Checking for existing desk bookings...";
      const bookings = yield queryBookings({
        type: "desk",
        period_start: getUnixTime(startOfDay(date || /* @__PURE__ */ new Date())),
        period_end: getUnixTime(endOfDay(date || /* @__PURE__ */ new Date()))
      }).toPromise();
      const desk_list = bookings.filter((d) => d.user_email.toLowerCase() === host.email.toLowerCase());
      if (desk_list?.length) {
        ref.close();
        return notifyError("You currently already have a desk booked for the selected date.");
      }
      ref.componentInstance.loading = "Booking desk...";
      const users = [host, ...attendees || []];
      yield Promise.all([
        desks.map((desk, idx) => this.makeDeskBooking(desk, host, date.valueOf() || (/* @__PURE__ */ new Date()).valueOf(), reason, users[idx]))
      ]);
      notifySuccess("Successfully booked desk");
      ref.close();
      return true;
    });
  }
  makeDeskBooking(desk, host, date, reason, for_user = null) {
    return __async(this, null, function* () {
      const location = `${desk.zone?.name}-${desk.id}`;
      const level = this._org.levelWithID(desk.zone instanceof Array ? desk.zone : [desk.zone?.id]);
      const zones = desk.zone?.id ? [desk.zone?.id, level?.parent_id] : [level?.parent_id];
      const booking_data = {
        booking_start: getUnixTime(startOfDay(date)),
        user_id: for_user?.id || host.id,
        user_name: for_user?.name || host.name,
        user_email: for_user?.email || host.email,
        booking_end: Math.floor(endOfDay(date).valueOf() / 1e3),
        asset_id: desk.id,
        asset_name: desk.name,
        title: reason,
        description: location,
        zones,
        booking_type: "desk",
        extension_data: {
          map_id: desk?.map_id || desk?.id,
          groups: desk.groups,
          for_user: for_user?.email
        }
      };
      return saveBooking(booking_data).toPromise();
    });
  }
};
_DesksService.\u0275fac = function DesksService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DesksService)(\u0275\u0275inject(OrganisationService), \u0275\u0275inject(MatDialog));
};
_DesksService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DesksService, factory: _DesksService.\u0275fac, providedIn: "root" });
var DesksService = _DesksService;

// apps/visitor-kiosk/src/app/checkin/checkin-state.service.ts
var _CheckinStateService = class _CheckinStateService {
  constructor() {
    this._booking = new BehaviorSubject(null);
    this._guest = new BehaviorSubject(null);
    this._photo = new BehaviorSubject("");
    this._error = new BehaviorSubject("");
    this._form = new BehaviorSubject(generateGuestForm());
    this._space_pipe = new SpacePipe();
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
      organisation: booking.extension_data.organisation,
      phone: booking.extension_data.phone
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
  loadGuestAndEvent(email, event_id) {
    return __async(this, null, function* () {
      const guest = yield showGuest(email).toPromise();
      if (event_id) {
        const event = yield showBooking(event_id).toPromise();
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
      let upcoming = yield queryAllBookings({
        type: "visitor",
        period_start: getUnixTime(Date.now()),
        period_end: getUnixTime(addMinutes(Date.now(), 120))
      }).toPromise();
      upcoming = upcoming.filter((_) => _.user_email === email || _.asset_id === email);
      const today = /* @__PURE__ */ new Date();
      const todays_events = upcoming.filter((event) => isSameDay(new Date(event.date), today));
      todays_events.sort((a, b) => a.date - b.date);
      if (todays_events.length <= 0) {
        throw new Error(i18n("VISITOR_KIOSK.NOT_FOUND", { email }));
      }
      this._guest.next(guest);
      this._booking.next(todays_events[0]);
      this._form.next(generateGuestForm(guest, todays_events[0].user_email));
      return { guest, event: todays_events[0] };
    });
  }
  updateGuest(data) {
    return __async(this, null, function* () {
      const guest = this._guest.getValue();
      const form = this._form.getValue();
      if (!guest || !form)
        return;
    });
  }
  completeInduction() {
    return __async(this, null, function* () {
      const guest = this._guest.getValue();
      const event = this._booking.getValue() || guest.extension_data.event;
      if (!guest || !event)
        return;
      yield updateBookingInductionStatus(event.id, "accepted").toPromise();
    });
  }
  declineInduction() {
    return __async(this, null, function* () {
      const guest = this._guest.getValue();
      const event = this._booking.getValue() || guest.extension_data.event;
      if (!guest || !event)
        return;
      yield updateBookingInductionStatus(event.id, "declined").toPromise();
    });
  }
  checkinGuest() {
    return __async(this, null, function* () {
      const guest = this._guest.getValue();
      const event = this._booking.getValue() || guest.extension_data.event;
      if (!guest || !event)
        return;
      const checkin_fn = checkinBooking(event.id, true).toPromise();
      const vars = {
        guest: guest.name,
        host: event.user_name || event.user_email
      };
      const result = yield checkin_fn.catch((e) => __async(this, null, function* () {
        notifyError(e || i18n("VISITOR_KIOSK.ERROR_CHECKIN", vars));
      }));
      if (!result)
        return;
      notifySuccess(i18n("VISITOR_KIOSK.SUCCESS_CHECKIN", vars));
      this.metadata = "";
    });
  }
  printPass() {
    try {
      return new Promise((res) => setTimeout(() => res(""), 5e3));
    } catch (err) {
      notifyError(i18n("VISITOR_KIOSK.ERROR_PRINT"));
    }
    return Promise.reject();
  }
};
_CheckinStateService.\u0275fac = function CheckinStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CheckinStateService)();
};
_CheckinStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CheckinStateService, factory: _CheckinStateService.\u0275fac, providedIn: "root" });
var CheckinStateService = _CheckinStateService;

export {
  CheckinStateService
};
//# sourceMappingURL=chunk-S2DLWMLD.js.map
