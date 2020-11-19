(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["staff-staff-module"],{

/***/ "BpF0":
/*!**********************************************!*\
  !*** ./src/app/staff/staff-state.service.ts ***!
  \**********************************************/
/*! exports provided: StaffStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffStateService", function() { return StaffStateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _user_interfaces_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @user-interfaces/users */ "mjT4");
/* harmony import */ var _user_interfaces_bookings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interfaces/bookings */ "05Mk");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "w8Fe");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @user-interfaces/organisation */ "dJst");













class StaffStateService extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_7__["BaseClass"] {
    constructor(_staff, _bookings, _org) {
        super();
        this._staff = _staff;
        this._bookings = _bookings;
        this._org = _org;
        this._onsite = {};
        this._events = {};
        this._filters = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this._search = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this._users = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.loading = this._loading.asObservable();
        this.filters = this._filters.asObservable();
        this.users = this._filters.asObservable();
        this.filtered_users = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([
            this._search,
            this._users,
            this._filters,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((details) => {
            const [filter, users, options] = details;
            return users.filter((i) => (!filter ||
                i.name.toLowerCase().includes(filter) ||
                i.email.toLowerCase().includes(filter)) &&
                (!options.only_onsite || this._onsite[i.email]));
        }));
        this.user_events = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this._filters]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((_) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this._loading.next(true);
            const bookings = yield this._bookings.query({
                period_start: Math.floor(Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["startOfDay"])(new Date()).valueOf() / 1000),
                period_end: Math.floor(Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["endOfDay"])(new Date()).valueOf() / 1000),
                type: 'staff',
            });
            const checkin_map = {};
            const now = new Date().valueOf();
            for (const bkn of bookings) {
                if (Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_7__["timePeriodsIntersect"])(now, now, bkn.date, bkn.date + bkn.duration * 60 * 1000)) {
                    checkin_map[bkn.asset_id] = true;
                    this._events[bkn.asset_id] = bkn;
                }
            }
            this._onsite = checkin_map;
            this._loading.next(false);
            return checkin_map;
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])());
        this.loadUsers();
    }
    setFilters(filters) {
        this._filters.next(Object.assign(Object.assign({}, this._filters.getValue()), filters));
    }
    setSearchString(search) {
        this._search.next(search);
    }
    startPolling(delay = 30 * 1000) {
        this.setFilters(this._filters.getValue());
        this.interval('poll', () => this.setFilters(this._filters.getValue()), delay);
    }
    stopPolling() {
        this.clearInterval('poll');
    }
    checkin(user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield this._bookings.add({
                booking_start: Math.floor(Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["startOfDay"])(new Date).valueOf() / 1000),
                booking_end: Math.floor(Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["endOfDay"])(new Date()).valueOf() / 1000),
                asset_id: user.email,
                title: 'Checked-in Onsite',
                description: this._org.building.display_name || this._org.building.name,
                zones: [this._org.building.id],
                booking_type: 'staff',
            });
            this._events[user.email] = result;
            this._onsite[user.email] = true;
        });
    }
    checkout(user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const event = this._events[user.email];
            if (event) {
                const result = yield this._bookings.update(event.id, Object.assign(Object.assign({}, event.toJSON()), { booking_end: Math.floor(new Date().valueOf() / 1000) }));
                this._events[user.email] = result;
                this._onsite[user.email] = false;
            }
        });
    }
    loadUsers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user_list = yield this._staff.query();
            user_list.sort((a, b) => a.name.localeCompare(b.name));
            this._users.next(user_list);
        });
    }
}
StaffStateService.ɵfac = function StaffStateService_Factory(t) { return new (t || StaffStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_interfaces_users__WEBPACK_IMPORTED_MODULE_3__["StaffService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_interfaces_bookings__WEBPACK_IMPORTED_MODULE_4__["BookingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_8__["OrganisationService"])); };
StaffStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: StaffStateService, factory: StaffStateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StaffStateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _user_interfaces_users__WEBPACK_IMPORTED_MODULE_3__["StaffService"] }, { type: _user_interfaces_bookings__WEBPACK_IMPORTED_MODULE_4__["BookingsService"] }, { type: _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_8__["OrganisationService"] }]; }, null); })();


/***/ }),

/***/ "C4M3":
/*!**************************************************!*\
  !*** ./src/app/staff/staff-details.component.ts ***!
  \**************************************************/
/*! exports provided: StaffDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffDetailsComponent", function() { return StaffDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @user-interfaces/users */ "mjT4");
/* harmony import */ var _staff_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./staff-state.service */ "BpF0");
/* harmony import */ var _libs_components_src_lib_user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/user-avatar/user-avatar.component */ "FGQ9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _libs_components_src_lib_action_icon_action_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/action-icon/action-icon.component */ "ZnXB");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "Y2X+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon/icon.component */ "ukpX");













function StaffDetailsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Onsite");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class StaffDetailsComponent {
    constructor(_state) {
        this._state = _state;
        this.checkin = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            yield this._state.checkin(this.user).catch(e => Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["notifyError"])('Error checking in Staff member'));
            this.loading = false;
        });
        this.checkout = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            yield this._state.checkout(this.user).catch(e => Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["notifyError"])('Error checking out Staff member'));
            this.loading = false;
        });
    }
}
StaffDetailsComponent.ɵfac = function StaffDetailsComponent_Factory(t) { return new (t || StaffDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_staff_state_service__WEBPACK_IMPORTED_MODULE_4__["StaffStateService"])); };
StaffDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StaffDetailsComponent, selectors: [["staff-details"]], inputs: { user: "user", onsite: "onsite" }, decls: 16, vars: 11, consts: [[1, "w-full", "flex", "items-center", "px-4", "py-2", "bg-white", "border-b", "border-gray-200"], [3, "user"], [1, "flex", "flex-col", "flex-1"], [1, "px-2"], [1, "px-2", "text-xs", "text-opacity-50"], ["class", "text-xs opacity-50 px-4", 4, "ngIf"], [1, "flex", "items-center"], ["className", "material-icons", 3, "matTooltip", "loading", "content", "click"], ["mat-icon-button", "", "matTooltip", "Email Staff", 3, "disabled", "href"], ["className", "material-icons"], ["mat-icon-button", "", "matTooltip", "Phone Staff", 3, "disabled", "href"], [1, "text-xs", "opacity-50", "px-4"]], template: function StaffDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "a-user-avatar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, StaffDetailsComponent_div_7_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "action-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StaffDetailsComponent_Template_action_icon_click_9_listener() { return ctx.onsite ? ctx.checkout() : ctx.checkin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "app-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "app-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "call");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("user", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.onsite);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx.onsite ? "Checkout Staff" : "Checkin Staff")("loading", ctx.loading)("content", ctx.onsite ? "event_busy" : "event_available");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !(ctx.user == null ? null : ctx.user.email))("href", "mailto:" + (ctx.user == null ? null : ctx.user.email), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !(ctx.user == null ? null : ctx.user.phone))("href", "tel:" + (ctx.user == null ? null : ctx.user.phone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, directives: [_libs_components_src_lib_user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_5__["UserAvatarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _libs_components_src_lib_action_icon_action_icon_component__WEBPACK_IMPORTED_MODULE_7__["ActionIconComponent"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltip"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatAnchor"], _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_10__["IconComponent"]], styles: ["[_nghost-%COMP%]    > div[_ngcontent-%COMP%]:hover {\n            background-color: #f0f0f0 !important;\n        }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StaffDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'staff-details',
                template: `
        <div class="w-full flex items-center px-4 py-2 bg-white border-b border-gray-200">
            <a-user-avatar [user]="user"></a-user-avatar>
            <div class="flex flex-col flex-1">
                <div class="px-2">{{ user?.name }}</div>
                <div class="px-2 text-xs text-opacity-50">{{ user?.email }}</div>
            </div>
            <div *ngIf="onsite" class="text-xs opacity-50 px-4">Onsite</div>
            <div class="flex items-center">
                <action-icon
                    [matTooltip]="onsite ? 'Checkout Staff' : 'Checkin Staff'"
                    [loading]="loading"
                    className="material-icons"
                    [content]="onsite ? 'event_busy' : 'event_available'"
                    (click)="onsite ? checkout() : checkin()"
                >
                </action-icon>
                <a mat-icon-button matTooltip="Email Staff" [disabled]="!user?.email" [href]="'mailto:' + user?.email">
                    <app-icon className="material-icons">email</app-icon>
                </a>
                <a mat-icon-button matTooltip="Phone Staff" [disabled]="!user?.phone" [href]="'tel:' + user?.phone">
                    <app-icon className="material-icons">call</app-icon>
                </a>
            </div>
        </div>
    `,
                styles: [`
        :host > div:hover {
            background-color: #f0f0f0 !important;
        }
    `]
            }]
    }], function () { return [{ type: _staff_state_service__WEBPACK_IMPORTED_MODULE_4__["StaffStateService"] }]; }, { user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], onsite: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "cxiF":
/*!*************************************************!*\
  !*** ./src/app/staff/staff-topbar.component.ts ***!
  \*************************************************/
/*! exports provided: StaffTopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffTopbarComponent", function() { return StaffTopbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @user-interfaces/organisation */ "dJst");
/* harmony import */ var _staff_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./staff-state.service */ "BpF0");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "R7+U");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slide-toggle */ "k8N0");
/* harmony import */ var _ui_searchbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ui/searchbar.component */ "wobF");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "mFH5");


















function StaffTopbarComponent_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const level_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", level_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", level_r1.display_name || level_r1.name, " ");
} }
class StaffTopbarComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["BaseClass"] {
    constructor(_state, _org, _route, _router) {
        super();
        this._state = _state;
        this._org = _org;
        this._route = _route;
        this._router = _router;
        /** List of selected levels */
        this.zones = [];
        /** List of levels for the active building */
        this.levels = this._org.active_levels;
        this.filters = this._state.filters;
        /** Set filtered date */
        this.setDate = (date) => this._state.setFilters({ date });
        /** Set filtered date */
        this.setFilters = (filters) => this._state.setFilters(filters);
        /** Set filter string */
        this.setSearch = (str) => this._state.setSearchString(str);
        /** Update active zones for desks */
        this.updateZones = (zones) => {
            this._router.navigate([], {
                relativeTo: this._route,
                queryParams: { zone_ids: zones.join(',') },
            });
            this._state.setFilters({ zones });
        };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._org.initialised.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])((_) => _)).toPromise();
            this.subscription('route.query', this._route.queryParamMap.subscribe((params) => {
                if (params.has('zone_ids')) {
                    const zones = params.get('zone_ids').split(',');
                    if (zones.length) {
                        const level = this._org.levelWithID(zones);
                        if (!level) {
                            return;
                        }
                        this._org.building = this._org.buildings.find((bld) => bld.id === level.parent_id);
                        this.zones = zones;
                    }
                }
            }));
            this.subscription('levels', this._org.active_levels.subscribe((levels) => {
                this.zones = this.zones.filter((zone) => levels.find((lvl) => lvl.id === zone));
                if (!this.zones.length && levels.length) {
                    this.zones.push(levels[0].id);
                }
                this.updateZones(this.zones);
            }));
            this.setSearch('');
        });
    }
}
StaffTopbarComponent.ɵfac = function StaffTopbarComponent_Factory(t) { return new (t || StaffTopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_staff_state_service__WEBPACK_IMPORTED_MODULE_6__["StaffStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_5__["OrganisationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
StaffTopbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StaffTopbarComponent, selectors: [["staff-topbar"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 7, consts: [["appearance", "outline"], ["multiple", "", "placeholder", "All Levels", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "m-2", 3, "ngModel", "ngModelChange"], [1, "text-xs"], [1, "flex-1", "w-2"], [1, "mr-2", 3, "modelChange"], [3, "value"]], template: function StaffTopbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function StaffTopbarComponent_Template_mat_select_ngModelChange_1_listener($event) { return ctx.zones = $event; })("ngModelChange", function StaffTopbarComponent_Template_mat_select_ngModelChange_1_listener($event) { return ctx.updateZones($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, StaffTopbarComponent_mat_option_2_Template, 2, 2, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-slide-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function StaffTopbarComponent_Template_mat_slide_toggle_ngModelChange_4_listener($event) { return ctx.setFilters({ only_onsite: $event }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Onsite Only");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "searchbar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("modelChange", function StaffTopbarComponent_Template_searchbar_modelChange_9_listener($event) { return ctx.setSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_2_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.zones);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, ctx.levels));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 5, ctx.filters)) == null ? null : tmp_2_0.only_onsite);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggle"], _ui_searchbar_component__WEBPACK_IMPORTED_MODULE_12__["SearchbarComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n                display: flex;\n                align-items: center;\n                background-color: #fff;\n                height: 5em;\n                padding: 0 1em;\n                border-bottom: 1px solid #ccc;\n            }\n\n            [_nghost-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n                margin-left: 0.5rem;\n            }\n\n            mat-form-field[_ngcontent-%COMP%] {\n                height: 3.25em;\n                width: 8em;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StaffTopbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'staff-topbar',
                template: `
        <mat-form-field appearance="outline">
            <mat-select
                multiple
                [(ngModel)]="zones"
                (ngModelChange)="updateZones($event)"
                placeholder="All Levels"
            >
                <mat-option
                    *ngFor="let level of levels | async"
                    [value]="level.id"
                >
                    {{ level.display_name || level.name }}
                </mat-option>
            </mat-select>
        </mat-form-field>
        <mat-slide-toggle
            class="m-2"
            [ngModel]="(filters | async)?.only_onsite"
            (ngModelChange)="setFilters({ only_onsite: $event })"
            ><div class="text-xs">Onsite Only</div></mat-slide-toggle
        >
        <div class="flex-1 w-2"></div>
        <searchbar class="mr-2" (modelChange)="setSearch($event)"></searchbar>
    `,
                styles: [
                    `
            :host {
                display: flex;
                align-items: center;
                background-color: #fff;
                height: 5em;
                padding: 0 1em;
                border-bottom: 1px solid #ccc;
            }

            :host > * + * {
                margin-left: 0.5rem;
            }

            mat-form-field {
                height: 3.25em;
                width: 8em;
            }
        `,
                ],
            }]
    }], function () { return [{ type: _staff_state_service__WEBPACK_IMPORTED_MODULE_6__["StaffStateService"] }, { type: _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_5__["OrganisationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "k8PI":
/*!******************************************!*\
  !*** ./src/app/staff/staff.component.ts ***!
  \******************************************/
/*! exports provided: StaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffComponent", function() { return StaffComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _staff_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staff-state.service */ "BpF0");
/* harmony import */ var _ui_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/sidebar.component */ "UfDH");
/* harmony import */ var _staff_topbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staff-topbar.component */ "cxiF");
/* harmony import */ var _staff_listing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./staff-listing.component */ "rvKw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ "66mq");









function StaffComponent_mat_progress_bar_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 4);
} }
class StaffComponent {
    constructor(_state) {
        this._state = _state;
        this.loading = this._state.loading;
    }
    ngOnInit() {
        this._state.startPolling();
    }
    ngOnDestroy() {
        this._state.stopPolling();
    }
}
StaffComponent.ɵfac = function StaffComponent_Factory(t) { return new (t || StaffComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_staff_state_service__WEBPACK_IMPORTED_MODULE_1__["StaffStateService"])); };
StaffComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StaffComponent, selectors: [["app-staff"]], decls: 6, vars: 3, consts: [[1, "relative", "overflow-hidden", "flex-1", "flex", "flex-col"], [1, "w-full"], [1, "w-full", "flex-1", "h-0"], ["class", "w-full", "mode", "indeterminate", 4, "ngIf"], ["mode", "indeterminate", 1, "w-full"]], template: function StaffComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "staff-topbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "staff-listings", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StaffComponent_mat_progress_bar_4_Template, 1, 0, "mat-progress-bar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, ctx.loading));
    } }, directives: [_ui_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _staff_topbar_component__WEBPACK_IMPORTED_MODULE_3__["StaffTopbarComponent"], _staff_listing_component__WEBPACK_IMPORTED_MODULE_4__["StaffListingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBar"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n                display: flex;\n                height: 100%;\n                width: 100%;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StaffComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-staff',
                template: `
        <sidebar></sidebar>
        <main class="relative overflow-hidden flex-1 flex flex-col">
            <staff-topbar class="w-full"></staff-topbar>
            <staff-listings class="w-full flex-1 h-0"></staff-listings>
            <mat-progress-bar
                class="w-full"
                *ngIf="loading | async"
                mode="indeterminate"
            ></mat-progress-bar>
        </main>
    `,
                styles: [
                    `
            :host {
                display: flex;
                height: 100%;
                width: 100%;
            }
        `,
                ],
            }]
    }], function () { return [{ type: _staff_state_service__WEBPACK_IMPORTED_MODULE_1__["StaffStateService"] }]; }, null); })();


/***/ }),

/***/ "kanD":
/*!***************************************!*\
  !*** ./src/app/staff/staff.module.ts ***!
  \***************************************/
/*! exports provided: COMPONENTS, StaffModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS", function() { return COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffModule", function() { return StaffModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _staff_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./staff.component */ "k8PI");
/* harmony import */ var _staff_topbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./staff-topbar.component */ "cxiF");
/* harmony import */ var _staff_listing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./staff-listing.component */ "rvKw");
/* harmony import */ var _staff_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./staff-details.component */ "C4M3");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui/ui.module */ "oRDy");











const ROUTES = [{ path: '', component: _staff_component__WEBPACK_IMPORTED_MODULE_4__["StaffComponent"] }];
const COMPONENTS = [
    _staff_component__WEBPACK_IMPORTED_MODULE_4__["StaffComponent"],
    _staff_topbar_component__WEBPACK_IMPORTED_MODULE_5__["StaffTopbarComponent"],
    _staff_listing_component__WEBPACK_IMPORTED_MODULE_6__["StaffListingComponent"],
    _staff_details_component__WEBPACK_IMPORTED_MODULE_7__["StaffDetailsComponent"],
];
class StaffModule {
}
StaffModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: StaffModule });
StaffModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function StaffModule_Factory(t) { return new (t || StaffModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ui_ui_module__WEBPACK_IMPORTED_MODULE_8__["UIModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(ROUTES),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](StaffModule, { declarations: [_staff_component__WEBPACK_IMPORTED_MODULE_4__["StaffComponent"],
        _staff_topbar_component__WEBPACK_IMPORTED_MODULE_5__["StaffTopbarComponent"],
        _staff_listing_component__WEBPACK_IMPORTED_MODULE_6__["StaffListingComponent"],
        _staff_details_component__WEBPACK_IMPORTED_MODULE_7__["StaffDetailsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ui_ui_module__WEBPACK_IMPORTED_MODULE_8__["UIModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StaffModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [...COMPONENTS],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ui_ui_module__WEBPACK_IMPORTED_MODULE_8__["UIModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(ROUTES),
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "rvKw":
/*!**************************************************!*\
  !*** ./src/app/staff/staff-listing.component.ts ***!
  \**************************************************/
/*! exports provided: StaffListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffListingComponent", function() { return StaffListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _staff_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staff-state.service */ "BpF0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _staff_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./staff-details.component */ "C4M3");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ "66mq");









const _c0 = ["container"];
function StaffListingComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StaffListingComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const group_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.scrollTo(group_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 5, ctx_r0.user_list)[group_r6].length <= 0)("active", group_r6 === ctx_r0.active_group);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", group_r6, " ");
} }
function StaffListingComponent_ng_container_4_ng_container_1_ng_container_1_staff_details_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "staff-details", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
} if (rf & 2) {
    const user_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    const group_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "letter-" + group_r10 + "-" + i_r14)("user", user_r13)("onsite", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx_r12.events) ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, ctx_r12.events)[user_r13.email] : false);
} }
function StaffListingComponent_ng_container_4_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StaffListingComponent_ng_container_4_ng_container_1_ng_container_1_staff_details_3_Template, 3, 7, "staff-details", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const group_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "letter-" + (group_r10 === "#" ? "0" : group_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", group_r10, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, ctx_r11.user_list)[group_r10]);
} }
function StaffListingComponent_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StaffListingComponent_ng_container_4_ng_container_1_ng_container_1_Template, 5, 5, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const group_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r9.user_list)[group_r10].length);
} }
function StaffListingComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StaffListingComponent_ng_container_4_ng_container_1_Template, 3, 3, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.groups);
} }
function StaffListingComponent_mat_progress_bar_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 13);
} }
function StaffListingComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No matching staff members");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const CHARS = '#abcdefghijklmnopqrstuvwxyz'.split('');
class StaffListingComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["BaseClass"] {
    constructor(_state) {
        super();
        this._state = _state;
        this.active_group = '#';
        this.groups = CHARS;
        this.events = this._state.user_events;
        this.loading = this._state.loading;
        this.user_count = this._state.filtered_users.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((list) => list.length));
        this.user_list = this._state.filtered_users.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((list) => {
            const user_map = {};
            for (const char of CHARS) {
                user_map[char] = (list || []).filter((user) => user.name.toLowerCase()[0].startsWith(char) ||
                    (char === '#' &&
                        !CHARS.includes(user.name.toLowerCase()[0])));
            }
            this.timeout('scroll', () => this.onScroll({}), 30);
            return user_map;
        }));
    }
    onScroll(_) {
        const scroll_top = this._el.nativeElement.scrollTop;
        for (const group of CHARS) {
            const el = document.querySelector(`#letter-${group === '#' ? '0' : group}`);
            if (el) {
                if (el.offsetTop - scroll_top > 0) {
                    break;
                }
                this.active_group = group;
            }
        }
    }
    scrollTo(group) {
        const el = document.querySelector(`#letter-${group}-0`);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            this.active_group = group;
        }
    }
}
StaffListingComponent.ɵfac = function StaffListingComponent_Factory(t) { return new (t || StaffListingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_staff_state_service__WEBPACK_IMPORTED_MODULE_3__["StaffStateService"])); };
StaffListingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StaffListingComponent, selectors: [["staff-listings"]], viewQuery: function StaffListingComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._el = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 8, consts: [[1, "w-full", "p-2", "flex", "items-center", "justify-center"], ["letter", "", "class", "capitalize h-6 w-6 flex items-center justify-center text-xs cursor-pointer", 3, "disabled", "active", "click", 4, "ngFor", "ngForOf"], [1, "flex-1", "overflow-auto", "w-full", "relative", "bg-gray-100", 2, "height", "50%", 3, "scroll"], ["container", ""], [4, "ngIf", "ngIfElse"], ["mode", "indeterminate", 4, "ngIf"], ["empty_state", ""], ["letter", "", 1, "capitalize", "h-6", "w-6", "flex", "items-center", "justify-center", "text-xs", "cursor-pointer", 3, "click"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["group", "", 1, "capitalize", "bg-gray-300", "border-b", "text-sm", "font-medium", "sticky", "top-0", "z-10", 3, "id"], [3, "id", "user", "onsite", 4, "ngFor", "ngForOf"], [3, "id", "user", "onsite"], ["mode", "indeterminate"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center"]], template: function StaffListingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StaffListingComponent_div_1_Template, 3, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function StaffListingComponent_Template_div_scroll_2_listener($event) { return ctx.onScroll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StaffListingComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, StaffListingComponent_mat_progress_bar_6_Template, 1, 0, "mat-progress-bar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, StaffListingComponent_ng_template_8_Template, 3, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.groups);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, ctx.user_count))("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, ctx.loading));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _staff_details_component__WEBPACK_IMPORTED_MODULE_5__["StaffDetailsComponent"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBar"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                width: 100%;\n                height: 50%;\n            }\n\n            [letter][_ngcontent-%COMP%] {\n                transition: font-size 200ms, color 200ms;\n            }\n\n            [group][_ngcontent-%COMP%] {\n                border-color: #ccc;\n                padding: 0.5rem 1.65rem;\n            }\n\n            .disabled[_ngcontent-%COMP%] {\n                opacity: 0.2;\n                pointer-events: none;\n            }\n\n            .active[_ngcontent-%COMP%] {\n                font-size: 1.25rem;\n                opacity: 1;\n                color: #d81b60;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StaffListingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'staff-listings',
                template: `
        <div class="w-full p-2 flex items-center justify-center">
            <div
                letter
                *ngFor="let group of groups"
                class="capitalize h-6 w-6 flex items-center justify-center text-xs cursor-pointer"
                [class.disabled]="(user_list | async)[group].length <= 0"
                [class.active]="group === active_group"
                (click)="scrollTo(group)"
            >
                {{ group }}
            </div>
        </div>
        <div
            class="flex-1 overflow-auto w-full relative bg-gray-100"
            style="height: 50%"
            #container
            (scroll)="onScroll($event)"
        >
            <ng-container *ngIf="user_count | async; else empty_state">
                <ng-container *ngFor="let group of groups">
                    <ng-container *ngIf="(user_list | async)[group].length">
                        <div
                            group
                            [id]="'letter-' + (group === '#' ? '0' : group)"
                            class="capitalize bg-gray-300 border-b text-sm font-medium sticky top-0 z-10"
                        >
                            {{ group }}
                        </div>
                        <staff-details
                            *ngFor="
                                let user of (user_list | async)[group];
                                let i = index
                            "
                            [id]="'letter-' + group + '-' + i"
                            [user]="user"
                            [onsite]="(events | async) ? (events | async)[user.email]: false"
                        ></staff-details>
                    </ng-container>
                </ng-container>
            </ng-container>
        </div>
        <mat-progress-bar *ngIf="loading | async" mode="indeterminate"></mat-progress-bar>
        <ng-template #empty_state>
            <div class="absolute inset-0 flex flex-col items-center justify-center">
                <p>No matching staff members</p>
            </div>
        </ng-template>
    `,
                styles: [
                    `
            :host {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 50%;
            }

            [letter] {
                transition: font-size 200ms, color 200ms;
            }

            [group] {
                border-color: #ccc;
                padding: 0.5rem 1.65rem;
            }

            .disabled {
                opacity: 0.2;
                pointer-events: none;
            }

            .active {
                font-size: 1.25rem;
                opacity: 1;
                color: #d81b60;
            }
        `,
                ],
            }]
    }], function () { return [{ type: _staff_state_service__WEBPACK_IMPORTED_MODULE_3__["StaffStateService"] }]; }, { _el: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['container']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=staff-staff-module.js.map