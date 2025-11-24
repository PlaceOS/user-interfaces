import {
  DeskConfirmModalComponent,
  DeskQuestionsModalComponent
} from "./chunk-JEBZF7PS.js";
import {
  MatDialog,
  OrganisationService,
  __async,
  currentUser,
  endOfDay,
  first,
  getUnixTime,
  map,
  notifyError,
  notifySuccess,
  queryBookings,
  saveBooking,
  startOfDay,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-L3HTKRSL.js";

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
//# sourceMappingURL=chunk-YPSQ4RC3.js.map
