(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~day-view-day-view-module~facilities-facilities-module"],{

/***/ "HWRp":
/*!**************************************************!*\
  !*** ./src/app/day-view/events-state.service.ts ***!
  \**************************************************/
/*! exports provided: EventsStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsStateService", function() { return EventsStateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "w8Fe");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @user-interfaces/events */ "eZII");
/* harmony import */ var _user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @user-interfaces/spaces */ "6CBO");










class EventsStateService extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["BaseClass"] {
    constructor(_events, _spaces) {
        super();
        this._events = _events;
        this._spaces = _spaces;
        /** List of bookings */
        this._poll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        /** List of bookings */
        this._long_poll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        /** List of bookings */
        this._bookings = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        /** Filter details for bookings */
        this._filters = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        /** Filter details for bookings */
        this._ui_options = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        /** Currently active date */
        this._date = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new Date().valueOf());
        /** Currently displayed zone */
        this._zones = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        /** Whether booking data is being loaded */
        this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        /** Observable for filter and booking list changes */
        this._state = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this._bookings, this._filters, this._date, this._zones);
        /** Event currently being viewed */
        this._event = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        /** Observable for list of bookings */
        this.bookings = this._bookings.asObservable();
        /** Observable for active date */
        this.date = this._date.asObservable();
        /** Observable for active zone */
        this.zones = this._zones.asObservable();
        /** Observable for UI display options */
        this.ui_options = this._ui_options.asObservable();
        /** Observable for loading state of bookings */
        this.loading = this._loading.asObservable();
        /** Observable for viewed event */
        this.event = this._event.asObservable();
        /** Obsevable for filtered list of bookings */
        this.filtered = this._state.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => {
            const start = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(new Date(this._date.getValue()));
            const end = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfDay"])(start);
            return this.filterEvents(start, end);
        }));
        /** Obsevable for filtered list of bookings of the active week */
        this.filtered_week = this._state.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => {
            const start = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfWeek"])(new Date(this._date.getValue()));
            const end = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfWeek"])(start);
            return this.filterEvents(start, end);
        }));
        /** Obsevable for filtered list of bookings for active month */
        this.filtered_month = this._state.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => {
            const start = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfMonth"])(new Date(this._date.getValue()));
            const end = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfMonth"])(start);
            return this.filterEvents(start, end);
        }));
        /** Generate observable for updating bookings */
        const search = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this._poll, this._zones, this._date]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((i) => !!i[0]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => {
            const fzones = this._zones.getValue();
            if (!fzones || !fzones.length) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
            }
            this._loading.next(true);
            const start = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(new Date(this._date.getValue()));
            const end = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfDay"])(start);
            return this._events.query({
                zone_ids: fzones.join(','),
                period_start: Math.floor(start.valueOf() / 1000),
                period_end: Math.floor(end.valueOf() / 1000),
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([])));
        /** Generate observable for updating bookings */
        const search_long = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this._long_poll, this._zones, this._date]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((i) => !!i[0]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((props) => {
            const type = props[0];
            const fzones = props[1];
            if (!fzones || !fzones.length) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
            }
            this._loading.next(true);
            const start = (type === 'week' ? date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfWeek"] : date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfMonth"])(new Date(props[2]));
            const end = (type === 'week' ? date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfWeek"] : date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfMonth"])(start);
            return this._events.query({
                zone_ids: fzones.join(','),
                period_start: Math.floor(start.valueOf() / 1000),
                period_end: Math.floor(end.valueOf() / 1000),
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([])));
        /** Subscribe to update observable */
        search.subscribe((events) => {
            this.processBookings(events);
            this._loading.next(false);
        });
        search_long.subscribe((events) => {
            this.processBookings(events, this._long_poll.getValue());
            this._loading.next(false);
        });
    }
    /** Active filters */
    get filters() {
        return this._filters.getValue();
    }
    /**
     * Update the booking filters
     * @param details
     */
    setFilters(details) {
        this._filters.next(details);
    }
    /**
     * Update the booking date
     * @param details
     */
    setDate(date) {
        this._date.next(date);
    }
    /**
     * Update the booking's zone
     * @param details
     */
    setZones(zones) {
        this._zones.next(zones);
    }
    /**
     * Update the booking's zone
     * @param details
     */
    setEvent(event) {
        this._event.next(event);
    }
    /**
     * Update the booking's zone
     * @param details
     */
    setUIOptions(options) {
        const old_options = this._ui_options.getValue();
        this._ui_options.next(Object.assign(Object.assign({}, old_options), options));
    }
    /**
     * Start polling to update bookings
     * @param delay Duration between polling events in milliseconds
     */
    startPolling(delay = 10 * 1000) {
        this._poll.next(true);
        this.interval('polling', () => this._poll.next(true), delay);
    }
    /**
     * Start polling to update bookings
     * @param delay Duration between polling events in milliseconds
     */
    startPollingWeek(delay = 30 * 1000) {
        this._long_poll.next('week');
        this.interval('polling_long', () => this._long_poll.next('week'), delay);
    }
    /**
     * Start polling to update bookings
     * @param delay Duration between polling events in milliseconds
     */
    startPollingMonth(delay = 5 * 60 * 1000) {
        this._long_poll.next('month');
        this.interval('polling_long', () => this._long_poll.next('month'), delay);
    }
    /**
     * Stop polling to update bookings;
     */
    stopPolling() {
        this._poll.next(false);
        this.clearInterval('polling');
        this._long_poll.next('');
        this.clearInterval('polling_long');
    }
    /**
     * Add booking to bookings listing
     * @param booking
     */
    add(booking) {
        const bookings = this._bookings.getValue();
        const new_bookings = bookings.concat([booking]);
        this._bookings.next(new_bookings);
    }
    /**
     * Update booking in the bookings list
     * @param booking
     */
    replace(booking) {
        const bookings = this._bookings.getValue();
        const new_bookings = bookings.filter((bkn) => bkn.id !== booking.id).concat([booking]);
        this._bookings.next(new_bookings);
    }
    /**
     * Remove booking in the bookings list
     * @param booking
     */
    remove(booking) {
        const bookings = this._bookings.getValue();
        const new_bookings = bookings.filter((bkn) => bkn.id !== booking.id);
        this._bookings.next(new_bookings);
    }
    processBookings(events, period = 'day') {
        const start = (period === 'month'
            ? date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfMonth"]
            : period === 'week'
                ? date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfWeek"]
                : date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(new Date(this._date.getValue()));
        const end = (period === 'month' ? date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfMonth"] : period === 'week' ? date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfWeek"] : date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfDay"])(start);
        let bookings = this._bookings.getValue();
        const space_list = Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["unique"])(Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["flatten"])(events.map((event) => event.resources)), 'email');
        space_list.forEach((space) => {
            bookings = Object(_user_interfaces_events__WEBPACK_IMPORTED_MODULE_5__["replaceBookings"])(bookings, events
                .filter((bkn) => bkn.resources.find((s) => s.email === space.email))
                .map((bkn) => new _user_interfaces_events__WEBPACK_IMPORTED_MODULE_5__["CalendarEvent"](bkn)), {
                space: space.email,
                from: start.valueOf(),
                to: end.valueOf(),
            });
        });
        this._bookings.next(bookings);
    }
    filterEvents(start, end) {
        const filters = this._filters.getValue();
        const bookings = this._bookings.getValue();
        const fzones = this._zones.getValue();
        return bookings.filter((bkn) => {
            var _a, _b, _c;
            const intersects = Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["timePeriodsIntersect"])(start.valueOf(), end.valueOf(), bkn.date, bkn.date + bkn.duration * 60 * 1000);
            const in_zone = !!bkn.resources
                .map((r) => this._spaces.find(r.id))
                .find((space) => fzones.find((z) => space.zones.includes(z)));
            const has_space = !((_a = filters.space_emails) === null || _a === void 0 ? void 0 : _a.length) ||
                !!bkn.resources.find((space) => filters.space_emails.includes(space.email));
            const in_zones = !((_b = filters.zone_ids) === null || _b === void 0 ? void 0 : _b.length) ||
                !!bkn.resources.find((space) => space.zones.find((zone) => filters.zone_ids.includes(zone)));
            const type = bkn.has_visitors ? 'external' : bkn.status === 'cancelled' ? 'cancelled' : 'internal';
            const show = !((_c = filters.hide_type) === null || _c === void 0 ? void 0 : _c.length) || !filters.hide_type.includes(type);
            return intersects && has_space && in_zone && in_zones && show;
        });
    }
}
EventsStateService.ɵfac = function EventsStateService_Factory(t) { return new (t || EventsStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_interfaces_events__WEBPACK_IMPORTED_MODULE_5__["EventsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_6__["SpacesService"])); };
EventsStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EventsStateService, factory: EventsStateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventsStateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _user_interfaces_events__WEBPACK_IMPORTED_MODULE_5__["EventsService"] }, { type: _user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_6__["SpacesService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~day-view-day-view-module~facilities-facilities-module.js.map