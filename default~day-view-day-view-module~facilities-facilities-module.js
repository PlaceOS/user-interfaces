(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~day-view-day-view-module~facilities-facilities-module"],{

/***/ "+tfs":
/*!*****************************************************!*\
  !*** ./src/app/day-view/booking-modal.component.ts ***!
  \*****************************************************/
/*! exports provided: BookingModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingModalComponent", function() { return BookingModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _user_interfaces_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @user-interfaces/calendar */ "7JBE");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @user-interfaces/events */ "eZII");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon/icon.component */ "ukpX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _event_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./event-form.component */ "jRLG");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "csyo");















function BookingModalComponent_main_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "event-form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("form", ctx_r0.form);
} }
function BookingModalComponent_footer_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookingModalComponent_footer_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BookingModalComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("diameter", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.loading);
} }
class BookingModalComponent {
    constructor(_data, _calendar, _event, _dialog_ref) {
        this._data = _data;
        this._calendar = _calendar;
        this._event = _event;
        this._dialog_ref = _dialog_ref;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.form = Object(_user_interfaces_events__WEBPACK_IMPORTED_MODULE_5__["generateEventForm"])(new _user_interfaces_events__WEBPACK_IMPORTED_MODULE_5__["CalendarEvent"](this._data.event || {}));
        this.form.controls.host.setValue(null);
    }
    save() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.form.markAllAsTouched();
            if (this.form.controls.organiser.value && !this.form.controls.host.value) {
                this.form.controls.host.setValue(this.form.controls.organiser.value.email);
            }
            if (!this.form.valid || !((_a = this.form.value.resources) === null || _a === void 0 ? void 0 : _a.length)) {
                const list = [];
                for (const key in this.form.controls) {
                    if (this.form.controls[key].invalid) {
                        list.push(key);
                    }
                }
                return Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["notifyError"])(`Some form fields are not valid: [${list.join(', ')}]`);
            }
            const value = this.form.value;
            this.loading = 'Check space availability...';
            const spaces = yield this._calendar
                .availability({
                period_start: Math.floor(new Date(value.date).valueOf() / 1000),
                period_end: Math.floor(new Date(value.date).valueOf() / 1000) +
                    value.duration * 60,
                system_ids: value.resources.map((space) => space.id).join(','),
            })
                .catch((_) => []);
            if (spaces.length < value.resources.length) {
                this.loading = '';
                return Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["notifyError"])('Some of the selected spaces are not available for the selected time and duration');
            }
            this.loading = 'Creating calendar event...';
            value.system = value.resources[0];
            const booking = yield this._event
                .save(new _user_interfaces_events__WEBPACK_IMPORTED_MODULE_5__["CalendarEvent"](value).toJSON())
                .catch((_) => null);
            this.loading = '';
            if (!booking) {
                return Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["notifyError"])('Error creating booking.');
            }
            this.event.emit({ reason: 'done', metadata: booking });
            Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["notifySuccess"])('Successfully created booking.');
            this._dialog_ref.close();
        });
    }
}
BookingModalComponent.ɵfac = function BookingModalComponent_Factory(t) { return new (t || BookingModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_interfaces_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_interfaces_events__WEBPACK_IMPORTED_MODULE_5__["EventsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"])); };
BookingModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BookingModalComponent, selectors: [["booking-modal"]], outputs: { event: "event" }, decls: 11, vars: 3, consts: [[1, "flex-1", "w-0"], ["mat-icon-button", "", "mat-dialog-close", ""], ["className", "material-icons"], ["class", "overflow-auto p-4", 4, "ngIf", "ngIfElse"], ["class", "flex justify-center items-center p-2 border-t border-gray-200", 4, "ngIf"], ["load_state", ""], [1, "overflow-auto", "p-4"], [3, "form"], [1, "flex", "justify-center", "items-center", "p-2", "border-t", "border-gray-200"], ["mat-button", "", 3, "click"], [1, "h-64", "flex", "flex-col", "items-center", "justify-center"], [1, "mb-4", 3, "diameter"]], template: function BookingModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "New Booking");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "app-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, BookingModalComponent_main_7_Template, 2, 1, "main", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, BookingModalComponent_footer_8_Template, 3, 0, "footer", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, BookingModalComponent_ng_template_9_Template, 4, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _event_form_component__WEBPACK_IMPORTED_MODULE_9__["EventFormComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"]], styles: ["main[_ngcontent-%COMP%] {\n                width: 32rem;\n                max-height: 65vh;\n                max-width: calc(100vw - 4rem);\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BookingModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'booking-modal',
                template: `
        <header>
            <h2>New Booking</h2>
            <div class="flex-1 w-0"></div>
            <button mat-icon-button mat-dialog-close>
                <app-icon className="material-icons">close</app-icon>
            </button>
        </header>
        <main *ngIf="!loading; else load_state" class="overflow-auto p-4">
            <event-form [form]="form"></event-form>
        </main>
        <footer
            *ngIf="!loading"
            class="flex justify-center items-center p-2 border-t border-gray-200"
        >
            <button mat-button (click)="save()">Save</button>
        </footer>
        <ng-template #load_state>
            <main class="h-64 flex flex-col items-center justify-center">
                <mat-spinner [diameter]="48" class="mb-4"></mat-spinner>
                <p>{{ loading }}</p>
            </main>
        </ng-template>
    `,
                styles: [
                    `
            main {
                width: 32rem;
                max-height: 65vh;
                max-width: calc(100vw - 4rem);
            }
        `,
                ],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: _user_interfaces_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarService"] }, { type: _user_interfaces_events__WEBPACK_IMPORTED_MODULE_5__["EventsService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }]; }, { event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "HWRp":
/*!**************************************************!*\
  !*** ./src/app/day-view/events-state.service.ts ***!
  \**************************************************/
/*! exports provided: EventsStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsStateService", function() { return EventsStateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "w8Fe");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @user-interfaces/events */ "eZII");
/* harmony import */ var _user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @user-interfaces/spaces */ "6CBO");
/* harmony import */ var _booking_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./booking-modal.component */ "+tfs");
/* harmony import */ var _user_interfaces_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @user-interfaces/components */ "Rc+I");















class EventsStateService extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_6__["BaseClass"] {
    constructor(_events, _spaces, _dialog) {
        super();
        this._events = _events;
        this._spaces = _spaces;
        this._dialog = _dialog;
        /** List of bookings */
        this._poll = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        /** List of bookings */
        this._long_poll = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('');
        /** List of bookings */
        this._bookings = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        /** Filter details for bookings */
        this._filters = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({});
        /** Filter details for bookings */
        this._ui_options = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({});
        /** Currently active date */
        this._date = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](new Date().valueOf());
        /** Currently displayed zone */
        this._zones = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        /** Whether booking data is being loaded */
        this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        /** Observable for filter and booking list changes */
        this._state = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this._bookings, this._filters, this._date, this._zones);
        /** Event currently being viewed */
        this._event = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
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
        this.filtered = this._state.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(() => {
            const start = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["startOfDay"])(new Date(this._date.getValue()));
            const end = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["endOfDay"])(start);
            return this.filterEvents(start, end);
        }));
        /** Obsevable for filtered list of bookings of the active week */
        this.filtered_week = this._state.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(() => {
            const start = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["startOfWeek"])(new Date(this._date.getValue()));
            const end = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["endOfWeek"])(start);
            return this.filterEvents(start, end);
        }));
        /** Obsevable for filtered list of bookings for active month */
        this.filtered_month = this._state.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(() => {
            const start = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["startOfMonth"])(new Date(this._date.getValue()));
            const end = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["endOfMonth"])(start);
            return this.filterEvents(start, end);
        }));
        /** Generate observable for updating bookings */
        const search = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([
            this._poll,
            this._zones,
            this._date,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((i) => !!i[0]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => {
            const fzones = this._zones.getValue();
            if (!fzones || !fzones.length) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
            }
            this._loading.next(true);
            const start = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["startOfDay"])(new Date(this._date.getValue()));
            const end = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["endOfDay"])(start);
            return this._events.query({
                zone_ids: fzones.join(','),
                period_start: Math.floor(start.valueOf() / 1000),
                period_end: Math.floor(end.valueOf() / 1000),
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([])));
        /** Generate observable for updating bookings */
        const search_long = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([
            this._long_poll,
            this._zones,
            this._date,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((i) => !!i[0]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((props) => {
            const type = props[0];
            const fzones = props[1];
            if (!fzones || !fzones.length) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
            }
            this._loading.next(true);
            const start = (type === 'week' ? date_fns__WEBPACK_IMPORTED_MODULE_3__["startOfWeek"] : date_fns__WEBPACK_IMPORTED_MODULE_3__["startOfMonth"])(new Date(props[2]));
            const end = (type === 'week' ? date_fns__WEBPACK_IMPORTED_MODULE_3__["endOfWeek"] : date_fns__WEBPACK_IMPORTED_MODULE_3__["endOfMonth"])(start);
            return this._events.query({
                zone_ids: fzones.join(','),
                period_start: Math.floor(start.valueOf() / 1000),
                period_end: Math.floor(end.valueOf() / 1000),
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([])));
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
    newBooking(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ref = this._dialog.open(_booking_modal_component__WEBPACK_IMPORTED_MODULE_9__["BookingModalComponent"], {
                data: {
                    event,
                },
            });
            const booking = yield Promise.race([
                ref.componentInstance.event
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])((_) => _.reason === 'done'))
                    .toPromise(),
                ref.afterClosed().toPromise(),
            ]);
            if (booking instanceof _user_interfaces_events__WEBPACK_IMPORTED_MODULE_7__["CalendarEvent"]) {
                this.replace(booking);
            }
        });
    }
    removeBooking(event) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ref = this._dialog.open(_user_interfaces_components__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalComponent"], {
                data: {
                    title: 'Delete meeting?',
                    content: `Are you sure you want to delete the meeting at ${Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(new Date(event.date), 'dd MMM yyyy, h:mma')}<br> in ${event.location}?`,
                    icon: { class: 'material-icons', content: 'delete' },
                },
            });
            const done = yield Promise.race([
                ref.componentInstance.event
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])((_) => _.reason === 'done'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_) => true))
                    .toPromise(),
                ref.afterClosed().toPromise(),
            ]);
            if (done) {
                ref.componentInstance.loading = 'Deleting booking...';
                yield this._events.delete(event.id, { system_id: (_a = event.system) === null || _a === void 0 ? void 0 : _a.id });
                this.remove(event);
                ref.close();
            }
        });
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
        const new_bookings = bookings
            .filter((bkn) => bkn.id !== booking.id)
            .concat([booking]);
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
            ? date_fns__WEBPACK_IMPORTED_MODULE_3__["startOfMonth"]
            : period === 'week'
                ? date_fns__WEBPACK_IMPORTED_MODULE_3__["startOfWeek"]
                : date_fns__WEBPACK_IMPORTED_MODULE_3__["startOfDay"])(new Date(this._date.getValue()));
        const end = (period === 'month'
            ? date_fns__WEBPACK_IMPORTED_MODULE_3__["endOfMonth"]
            : period === 'week'
                ? date_fns__WEBPACK_IMPORTED_MODULE_3__["endOfWeek"]
                : date_fns__WEBPACK_IMPORTED_MODULE_3__["endOfDay"])(start);
        let bookings = this._bookings.getValue();
        const space_list = Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_6__["unique"])(Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_6__["flatten"])(events.map((event) => event.resources)), 'email');
        space_list.forEach((space) => {
            bookings = Object(_user_interfaces_events__WEBPACK_IMPORTED_MODULE_7__["replaceBookings"])(bookings, events
                .filter((bkn) => bkn.resources.find((s) => s.email === space.email))
                .map((bkn) => new _user_interfaces_events__WEBPACK_IMPORTED_MODULE_7__["CalendarEvent"](bkn)), {
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
            const intersects = Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_6__["timePeriodsIntersect"])(start.valueOf(), end.valueOf(), bkn.date, bkn.date + bkn.duration * 60 * 1000);
            const in_zone = !!bkn.resources
                .map((r) => this._spaces.find(r.id))
                .find((space) => fzones.find((z) => space.zones.includes(z)));
            const has_space = !((_a = filters.space_emails) === null || _a === void 0 ? void 0 : _a.length) ||
                !!bkn.resources.find((space) => filters.space_emails.includes(space.email));
            const in_zones = !((_b = filters.zone_ids) === null || _b === void 0 ? void 0 : _b.length) ||
                !!bkn.resources.find((space) => space.zones.find((zone) => filters.zone_ids.includes(zone)));
            const type = bkn.has_visitors
                ? 'external'
                : bkn.status === 'cancelled'
                    ? 'cancelled'
                    : 'internal';
            const show = !((_c = filters.hide_type) === null || _c === void 0 ? void 0 : _c.length) ||
                !filters.hide_type.includes(type);
            return intersects && has_space && in_zone && in_zones && show;
        });
    }
}
EventsStateService.ɵfac = function EventsStateService_Factory(t) { return new (t || EventsStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_interfaces_events__WEBPACK_IMPORTED_MODULE_7__["EventsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_8__["SpacesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
EventsStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EventsStateService, factory: EventsStateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EventsStateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _user_interfaces_events__WEBPACK_IMPORTED_MODULE_7__["EventsService"] }, { type: _user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_8__["SpacesService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "jRLG":
/*!**************************************************!*\
  !*** ./src/app/day-view/event-form.component.ts ***!
  \**************************************************/
/*! exports provided: EventFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventFormComponent", function() { return EventFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interfaces/spaces */ "6CBO");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _libs_components_src_lib_date_field_date_field_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/date-field/date-field.component */ "kD+q");
/* harmony import */ var _libs_components_src_lib_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/time-field/time-field.component */ "NhjZ");
/* harmony import */ var _libs_components_src_lib_duration_field_duration_field_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/duration-field/duration-field.component */ "gpkD");
/* harmony import */ var _libs_components_src_lib_user_search_field_user_search_field_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/user-search-field/user-search-field.component */ "lfZe");
/* harmony import */ var _libs_components_src_lib_user_list_field_user_list_field_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/user-list-field/user-list-field.component */ "mnsz");
/* harmony import */ var _libs_components_src_lib_action_field_action_field_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/action-field/action-field.component */ "7u5P");


















function EventFormComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "A valid title is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "a-date-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Start Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "a-time-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "a-duration-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Host");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "a-user-search-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Attendees");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "a-user-list-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Space");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "an-action-field", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onAction", function EventFormComponent_form_0_Template_an_action_field_onAction_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.selectSpace(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("time", ctx_r0.form.controls.date.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx_r0.spaces);
} }
class EventFormComponent {
    constructor(_dialog) {
        this._dialog = _dialog;
    }
    get spaces() {
        var _a, _b;
        return (((_b = (_a = this.form.controls.resources) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.map((i) => i.display_name || i.name).join(', ')) || 'Select a space');
    }
    selectSpace() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ref = this._dialog.open(_user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_4__["SpaceSelectModalComponent"], {
                data: {
                    spaces: this.form.controls.resources.value,
                    date: this.form.controls.date.value,
                    duration: this.form.controls.duration.value,
                },
            });
            const success = yield Promise.race([
                ref.componentInstance.event
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])((_) => _.reason === 'done'))
                    .toPromise(),
                ref
                    .afterClosed()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_) => null))
                    .toPromise(),
            ]);
            if (success) {
                this.form.controls.resources.setValue(success.metadata);
            }
            ref.close();
        });
    }
}
EventFormComponent.ɵfac = function EventFormComponent_Factory(t) { return new (t || EventFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
EventFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EventFormComponent, selectors: [["event-form"]], inputs: { form: "form" }, decls: 1, vars: 1, consts: [[3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "flex", "flex-col"], ["for", "title"], ["appearance", "outline"], ["matInput", "", "name", "title", "formControlName", "title", "placeholder", "Meeting Title"], ["for", "date"], ["name", "date", "formControlName", "date"], [1, "flex", "space-x-2"], [1, "flex", "flex-col", "flex-1"], ["for", "start-time"], ["name", "start-time", "formControlName", "date", 2, "margin-top", ".3rem"], ["for", "duration"], ["name", "duration", "formControlName", "duration", 3, "time"], ["for", "organiser"], ["name", "organiser", "formControlName", "organiser"], ["for", "attendees"], ["name", "attendees", "formControlName", "attendees"], ["for", "space"], ["name", "space", 3, "placeholder", "onAction"]], template: function EventFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, EventFormComponent_form_0_Template, 54, 3, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"], _libs_components_src_lib_date_field_date_field_component__WEBPACK_IMPORTED_MODULE_9__["DateFieldComponent"], _libs_components_src_lib_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_10__["TimeFieldComponent"], _libs_components_src_lib_duration_field_duration_field_component__WEBPACK_IMPORTED_MODULE_11__["DurationFieldComponent"], _libs_components_src_lib_user_search_field_user_search_field_component__WEBPACK_IMPORTED_MODULE_12__["UserSearchFieldComponent"], _libs_components_src_lib_user_list_field_user_list_field_component__WEBPACK_IMPORTED_MODULE_13__["UserListFieldComponent"], _libs_components_src_lib_action_field_action_field_component__WEBPACK_IMPORTED_MODULE_14__["ActionFieldComponent"]], styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EventFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'event-form',
                template: `
        <form *ngIf="form" [formGroup]="form">
            <div class="flex flex-col">
                <label for="title">Title<span>*</span>:</label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="title"
                        formControlName="title"
                        placeholder="Meeting Title"
                    />
                    <mat-error>A valid title is required</mat-error>
                </mat-form-field>
            </div>
            <div class="flex flex-col">
                <label for="date">Date<span>*</span>:</label>
                <a-date-field name="date" formControlName="date"></a-date-field>
            </div>
            <div class="flex space-x-2">
                <div class="flex flex-col flex-1">
                    <label for="start-time">Start Time<span>*</span>:</label>
                    <a-time-field
                        name="start-time"
                        formControlName="date"
                        style="margin-top: .3rem"
                    ></a-time-field>
                </div>
                <div class="flex flex-col flex-1">
                    <label for="duration">Duration<span>*</span>:</label>
                    <a-duration-field
                        name="duration"
                        [time]="form.controls.date.value"
                        formControlName="duration"
                    ></a-duration-field>
                </div>
            </div>
            <div class="flex flex-col flex-1">
                <label for="organiser">Host<span>*</span>:</label>
                <a-user-search-field
                    name="organiser"
                    formControlName="organiser"
                ></a-user-search-field>
            </div>
            <div class="flex flex-col flex-1">
                <label for="attendees">Attendees<span>*</span>:</label>
                <a-user-list-field
                    name="attendees"
                    formControlName="attendees"
                ></a-user-list-field>
            </div>
            <div class="flex flex-col flex-1">
                <label for="space">Space<span>*</span>:</label>
                <an-action-field
                    name="space"
                    [placeholder]="spaces"
                    (onAction)="selectSpace()"
                ></an-action-field>
            </div>
        </form>
    `,
                styles: [``],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }]; }, { form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=default~day-view-day-view-module~facilities-facilities-module.js.map