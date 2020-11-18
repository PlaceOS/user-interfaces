(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["desks-desks-module"],{

/***/ "4NfX":
/*!**********************************************!*\
  !*** ./src/app/desks/desks-state.service.ts ***!
  \**********************************************/
/*! exports provided: DesksStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesksStateService", function() { return DesksStateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "w8Fe");
/* harmony import */ var _user_interfaces_bookings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @user-interfaces/bookings */ "05Mk");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @placeos/ts-client */ "/It1");
/* harmony import */ var _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @user-interfaces/organisation */ "dJst");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _user_interfaces_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @user-interfaces/components */ "Rc+I");
/* harmony import */ var _desk_list_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./desk-list-modal.component */ "i0G+");
















class DesksStateService extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_6__["BaseClass"] {
    constructor(_bookings, _org, _dialog) {
        super();
        this._bookings = _bookings;
        this._org = _org;
        this._dialog = _dialog;
        this._filters = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this._desk_bookings = [];
        this._desks = [];
        this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.loading = this._loading.asObservable();
        this.desks = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this._filters]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((details) => {
            var _a;
            const [filters] = details;
            if (!((_a = filters.zones) === null || _a === void 0 ? void 0 : _a.length))
                return [];
            return Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_7__["showMetadata"])(filters.zones[0] || this._org.building.id, {
                name: 'desks',
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((m) => m.details));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(list => {
            if (!(list instanceof Array))
                list = [];
            list.sort((a, b) => a.name.localeCompare(b.name));
            this._desks = list.map(i => new _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_8__["Desk"](i));
            return list;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
        this.bookings = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this._filters]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((details) => {
            this._loading.next(true);
            const [filters] = details;
            const date = filters.date ? new Date(filters.date) : new Date();
            return this._bookings.query({
                period_start: Math.floor(Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["startOfDay"])(date).valueOf() / 1000),
                period_end: Math.floor(Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["endOfDay"])(date).valueOf() / 1000),
                type: 'desk',
                zones: (filters.zones || []).join(','),
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(list => {
            list.sort((a, b) => a.date - b.date);
            this._desk_bookings = list;
            this._loading.next(false);
            return list;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
    }
    setFilters(filters) {
        this._filters.next(Object.assign(Object.assign({}, this._filters.getValue()), filters));
    }
    startPolling(delay = 30 * 1000) {
        this.interval('poll', () => this.setFilters(this._filters.getValue()), delay);
    }
    stopPolling() {
        this.clearInterval('poll');
    }
    checkinDesk(desk) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('Checkin:', desk);
            const success = yield this._bookings.checkIn(desk, true).catch(_ => 'failed');
            success === 'failed'
                ? Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_6__["notifyError"])('Error checking in desk booking')
                : Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_6__["notifySuccess"])(`Checked in ${desk.user_name}.`);
        });
    }
    approveDesk(desk) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('Approve:', desk);
            const success = yield this._bookings.approve(desk.id).catch(_ => 'failed');
            success === 'failed'
                ? Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_6__["notifyError"])('Error approving in desk booking')
                : Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_6__["notifySuccess"])(`Approved desk booking for ${desk.user_name}.`);
        });
    }
    rejectDesk(desk) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('Reject:', desk);
            const success = yield this._bookings.reject(desk.id).catch(_ => 'failed');
            success === 'failed'
                ? Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_6__["notifyError"])('Error rejecting in desk booking')
                : Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_6__["notifySuccess"])(`Rejected desk booking for ${desk.user_name}.`);
        });
    }
    rejectAllDesks() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('Reject All Desks');
            const list = this._desk_bookings || [];
            console.log('Reject All:', list);
            if (list.length > 0) {
                const ref = this._dialog.open(_user_interfaces_components__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalComponent"], {
                    data: {
                        title: 'Cancel all desk bookings',
                        content: 'Are you sure you want to cancel all bookings for the selected date?',
                        icon: {
                            type: 'icon',
                            class: 'material-icons',
                            content: 'delete',
                        },
                    },
                });
                return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    let success = false;
                    ref.componentInstance.event.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(_ => _.reason === 'done')).subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        ref.componentInstance.loading = 'Rejecting all desks for selected date...';
                        success = true;
                        yield Promise.all(list.map(desk => this._bookings.reject(desk.id)));
                        resolve();
                        Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_6__["notifySuccess"])('Successfull rejected all desk bookings for selected date.');
                        ref.close();
                    }));
                    yield ref.afterClosed().toPromise();
                    if (!success) {
                        reject();
                    }
                }));
            }
            else {
                Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_6__["notifyInfo"])('No desks to reject for the selected date');
            }
        });
    }
    updateDesks() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ref = this._dialog.open(_desk_list_modal_component__WEBPACK_IMPORTED_MODULE_11__["DeskListModalComponent"], {
                data: {
                    level: this._org.levelWithID(this._filters.getValue().zones) || this._org.level_list[0],
                    building: this._org.building,
                    desks: this._desks
                },
            });
            yield ref.afterClosed().toPromise();
            this._desks = ref.componentInstance.desks$.getValue();
        });
    }
}
DesksStateService.ɵfac = function DesksStateService_Factory(t) { return new (t || DesksStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_interfaces_bookings__WEBPACK_IMPORTED_MODULE_5__["BookingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_8__["OrganisationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"])); };
DesksStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DesksStateService, factory: DesksStateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DesksStateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _user_interfaces_bookings__WEBPACK_IMPORTED_MODULE_5__["BookingsService"] }, { type: _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_8__["OrganisationService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "Co8E":
/*!***************************************!*\
  !*** ./src/app/desks/desks.module.ts ***!
  \***************************************/
/*! exports provided: DesksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesksModule", function() { return DesksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/ui.module */ "oRDy");
/* harmony import */ var _desks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./desks.component */ "Su0S");
/* harmony import */ var _desk_listings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./desk-listings.component */ "zeno");
/* harmony import */ var _desk_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./desk-details.component */ "aWu5");
/* harmony import */ var _desks_topbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./desks-topbar.component */ "D2au");
/* harmony import */ var _desk_list_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./desk-list-modal.component */ "i0G+");












const ROUTES = [{ path: '', component: _desks_component__WEBPACK_IMPORTED_MODULE_5__["DesksComponent"] }];
class DesksModule {
}
DesksModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DesksModule });
DesksModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DesksModule_Factory(t) { return new (t || DesksModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ui_ui_module__WEBPACK_IMPORTED_MODULE_4__["UIModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(ROUTES),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DesksModule, { declarations: [_desks_component__WEBPACK_IMPORTED_MODULE_5__["DesksComponent"],
        _desk_listings_component__WEBPACK_IMPORTED_MODULE_6__["DeskListingsComponent"],
        _desk_details_component__WEBPACK_IMPORTED_MODULE_7__["DeskDetailsComponent"],
        _desks_topbar_component__WEBPACK_IMPORTED_MODULE_8__["DesksTopbarComponent"],
        _desk_list_modal_component__WEBPACK_IMPORTED_MODULE_9__["DeskListModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ui_ui_module__WEBPACK_IMPORTED_MODULE_4__["UIModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DesksModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _desks_component__WEBPACK_IMPORTED_MODULE_5__["DesksComponent"],
                    _desk_listings_component__WEBPACK_IMPORTED_MODULE_6__["DeskListingsComponent"],
                    _desk_details_component__WEBPACK_IMPORTED_MODULE_7__["DeskDetailsComponent"],
                    _desks_topbar_component__WEBPACK_IMPORTED_MODULE_8__["DesksTopbarComponent"],
                    _desk_list_modal_component__WEBPACK_IMPORTED_MODULE_9__["DeskListModalComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ui_ui_module__WEBPACK_IMPORTED_MODULE_4__["UIModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(ROUTES),
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "D2au":
/*!*************************************************!*\
  !*** ./src/app/desks/desks-topbar.component.ts ***!
  \*************************************************/
/*! exports provided: DesksTopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesksTopbarComponent", function() { return DesksTopbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @user-interfaces/organisation */ "dJst");
/* harmony import */ var _desks_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./desks-state.service */ "4NfX");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "R7+U");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _ui_date_options_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ui/date-options.component */ "wrRZ");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "mFH5");

















function DesksTopbarComponent_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const level_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", level_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", level_r1.display_name || level_r1.name, " ");
} }
class DesksTopbarComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["BaseClass"] {
    constructor(_desks, _org, _route, _router) {
        super();
        this._desks = _desks;
        this._org = _org;
        this._route = _route;
        this._router = _router;
        /** List of selected levels */
        this.zones = [];
        /** List of levels for the active building */
        this.levels = this._org.active_levels;
        /** Set filtered date */
        this.setDate = (date) => this._desks.setFilters({ date });
        /** Update active zones for desks */
        this.updateZones = (zones) => {
            this._router.navigate([], {
                relativeTo: this._route,
                queryParams: { zone_ids: zones.join(',') },
            });
            this._desks.setFilters({ zones });
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
        });
    }
}
DesksTopbarComponent.ɵfac = function DesksTopbarComponent_Factory(t) { return new (t || DesksTopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_desks_state_service__WEBPACK_IMPORTED_MODULE_6__["DesksStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_5__["OrganisationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
DesksTopbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DesksTopbarComponent, selectors: [["desks-topbar"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 4, consts: [["appearance", "outline"], ["multiple", "", "placeholder", "All Levels", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "flex-1", "w-2"], [3, "dateChange"], [3, "value"]], template: function DesksTopbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DesksTopbarComponent_Template_mat_select_ngModelChange_1_listener($event) { return ctx.zones = $event; })("ngModelChange", function DesksTopbarComponent_Template_mat_select_ngModelChange_1_listener($event) { return ctx.updateZones($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DesksTopbarComponent_mat_option_2_Template, 2, 2, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "date-options", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dateChange", function DesksTopbarComponent_Template_date_options_dateChange_5_listener($event) { return ctx.setDate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.zones);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, ctx.levels));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _ui_date_options_component__WEBPACK_IMPORTED_MODULE_11__["DateOptionsComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n                display: flex;\n                align-items: center;\n                background-color: #fff;\n                height: 5em;\n                padding: 0 2em;\n                border-bottom: 1px solid #ccc;\n            }\n\n            [_nghost-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n                margin-left: 0.5rem;\n            }\n\n            mat-form-field[_ngcontent-%COMP%] {\n                height: 3.25em;\n                width: 8em;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DesksTopbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'desks-topbar',
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
        <div class="flex-1 w-2"></div>
        <!-- <searchbar class="mr-2"></searchbar> -->
        <date-options (dateChange)="setDate($event)"></date-options>
    `,
                styles: [
                    `
            :host {
                display: flex;
                align-items: center;
                background-color: #fff;
                height: 5em;
                padding: 0 2em;
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
    }], function () { return [{ type: _desks_state_service__WEBPACK_IMPORTED_MODULE_6__["DesksStateService"] }, { type: _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_5__["OrganisationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "Su0S":
/*!******************************************!*\
  !*** ./src/app/desks/desks.component.ts ***!
  \******************************************/
/*! exports provided: DesksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesksComponent", function() { return DesksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _desks_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./desks-state.service */ "4NfX");
/* harmony import */ var _ui_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/sidebar.component */ "UfDH");
/* harmony import */ var _desks_topbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desks-topbar.component */ "D2au");
/* harmony import */ var _desk_listings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./desk-listings.component */ "zeno");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ "66mq");









function DesksComponent_mat_progress_bar_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 4);
} }
class DesksComponent {
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
DesksComponent.ɵfac = function DesksComponent_Factory(t) { return new (t || DesksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_desks_state_service__WEBPACK_IMPORTED_MODULE_1__["DesksStateService"])); };
DesksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DesksComponent, selectors: [["app-desks"]], decls: 6, vars: 3, consts: [[1, "relative", "overflow-hidden", "flex-1", "flex", "flex-col"], [1, "w-full"], [1, "w-full", "flex-1", "h-0"], ["class", "w-full", "mode", "indeterminate", 4, "ngIf"], ["mode", "indeterminate", 1, "w-full"]], template: function DesksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "desks-topbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "desk-listings", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DesksComponent_mat_progress_bar_4_Template, 1, 0, "mat-progress-bar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, ctx.loading));
    } }, directives: [_ui_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _desks_topbar_component__WEBPACK_IMPORTED_MODULE_3__["DesksTopbarComponent"], _desk_listings_component__WEBPACK_IMPORTED_MODULE_4__["DeskListingsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBar"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n                display: flex;\n                height: 100%;\n                width: 100%;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DesksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-desks',
                template: `
        <sidebar></sidebar>
        <main class="relative overflow-hidden flex-1 flex flex-col">
            <desks-topbar class="w-full"></desks-topbar>
            <desk-listings class="w-full flex-1 h-0"></desk-listings>
            <mat-progress-bar class="w-full" *ngIf="loading | async" mode="indeterminate"></mat-progress-bar>
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
    }], function () { return [{ type: _desks_state_service__WEBPACK_IMPORTED_MODULE_1__["DesksStateService"] }]; }, null); })();


/***/ }),

/***/ "aWu5":
/*!*************************************************!*\
  !*** ./src/app/desks/desk-details.component.ts ***!
  \*************************************************/
/*! exports provided: DeskDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeskDetailsComponent", function() { return DeskDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _desks_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./desks-state.service */ "4NfX");
/* harmony import */ var _libs_components_src_lib_action_icon_action_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/action-icon/action-icon.component */ "ZnXB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "2kYt");







class DeskDetailsComponent {
    constructor(_state) {
        this._state = _state;
        this.checkin = () => this.runMethod('checkin', () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return this._state.checkinDesk(this.desk); }));
        this.approve = () => this.runMethod('approve', () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return this._state.approveDesk(this.desk); }));
        this.reject = () => this.runMethod('reject', () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return this._state.rejectDesk(this.desk); }));
    }
    runMethod(name, fn) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = name;
            yield fn().catch((i) => null);
            this.loading = '';
        });
    }
}
DeskDetailsComponent.ɵfac = function DeskDetailsComponent_Factory(t) { return new (t || DeskDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_desks_state_service__WEBPACK_IMPORTED_MODULE_2__["DesksStateService"])); };
DeskDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DeskDetailsComponent, selectors: [["desk-details"]], inputs: { desk: "desk" }, decls: 19, vars: 18, consts: [[1, "w-32", "p-2", "bg"], [1, "w-32", "p-2"], [1, "w-24", "p-2"], ["flex", "", 1, "p-2", "flex-1", "truncate"], [1, "w-32", "p-2", "flex", "items-center"], ["mat-icon-button", "", "className", "material-icons", "content", "how_to_reg", 3, "loading", "state", "click"], ["mat-icon-button", "", "className", "material-icons", "content", "event_available", 3, "loading", "state", "click"], ["mat-icon-button", "", "className", "material-icons", "content", "event_busy", 3, "loading", "state", "click"]], template: function DeskDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "action-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeskDetailsComponent_Template_action_icon_click_16_listener() { return ctx.checkin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "action-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeskDetailsComponent_Template_action_icon_click_17_listener() { return ctx.approve(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "action-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeskDetailsComponent_Template_action_icon_click_18_listener() { return ctx.reject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.desk == null ? null : ctx.desk.user_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.desk == null ? null : ctx.desk.los);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 15, ctx.desk.date, "shortTime"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.desk == null ? null : ctx.desk.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("w-24 p-2 capitalize text-red-600 " + (ctx.desk == null ? null : ctx.desk.status));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.desk == null ? null : ctx.desk.status, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.desk == null ? null : ctx.desk.approver_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx.desk == null ? null : ctx.desk.checked_in) ? "Yes" : "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", ctx.loading === "checkin")("state", (ctx.desk == null ? null : ctx.desk.checked_in) ? "success" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", ctx.loading === "approve")("state", (ctx.desk == null ? null : ctx.desk.approved) ? "success" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", ctx.loading === "reject")("state", (ctx.desk == null ? null : ctx.desk.status) === "declined" ? "success" : "");
    } }, directives: [_libs_components_src_lib_action_icon_action_icon_component__WEBPACK_IMPORTED_MODULE_3__["ActionIconComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["[_nghost-%COMP%] {\n                width: 100%;\n                display: flex;\n                align-items: center;\n                padding: 0 0.5rem;\n                background-color: #f8f8f8;\n                border-bottom: 1px solid #ccc;\n            }\n\n            [_nghost-%COMP%]:hover {\n                background-color: #f0f0f0;\n            }\n\n            .tentative[_ngcontent-%COMP%] {\n                color: #ffa000;\n            }\n\n            .approved[_ngcontent-%COMP%] {\n                color: #388e3c;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DeskDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'desk-details',
                template: `
        <div class="w-32 p-2 bg">{{ desk?.user_name }}</div>
        <div class="w-32 p-2">{{ desk?.los }}</div>
        <div class="w-24 p-2">{{ desk.date | date: 'shortTime' }}</div>
        <div flex class="p-2 flex-1 truncate">{{ desk?.description }}</div>
        <div [class]="'w-24 p-2 capitalize text-red-600 ' + desk?.status">
            {{ desk?.status }}
        </div>
        <div class="w-32 p-2">{{ desk?.approver_name }}</div>
        <div class="w-32 p-2">{{ desk?.checked_in ? 'Yes' : 'No' }}</div>
        <div class="w-32 p-2 flex items-center">
            <action-icon
                mat-icon-button
                className="material-icons"
                (click)="checkin()"
                [loading]="loading === 'checkin'"
                [state]="desk?.checked_in ? 'success' : ''"
                content="how_to_reg"
            ></action-icon>
            <action-icon
                mat-icon-button
                className="material-icons"
                (click)="approve()"
                [loading]="loading === 'approve'"
                [state]="desk?.approved ? 'success' : ''"
                content="event_available"
            ></action-icon>
            <action-icon
                mat-icon-button
                className="material-icons"
                (click)="reject()"
                [loading]="loading === 'reject'"
                [state]="desk?.status === 'declined' ? 'success' : ''"
                content="event_busy"
            ></action-icon>
        </div>
    `,
                styles: [
                    `
            :host {
                width: 100%;
                display: flex;
                align-items: center;
                padding: 0 0.5rem;
                background-color: #f8f8f8;
                border-bottom: 1px solid #ccc;
            }

            :host:hover {
                background-color: #f0f0f0;
            }

            .tentative {
                color: #ffa000;
            }

            .approved {
                color: #388e3c;
            }
        `,
                ],
            }]
    }], function () { return [{ type: _desks_state_service__WEBPACK_IMPORTED_MODULE_2__["DesksStateService"] }]; }, { desk: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "i0G+":
/*!****************************************************!*\
  !*** ./src/app/desks/desk-list-modal.component.ts ***!
  \****************************************************/
/*! exports provided: DeskListModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeskListModalComponent", function() { return DeskListModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/ts-client */ "/It1");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @user-interfaces/organisation */ "dJst");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon/icon.component */ "ukpX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _ui_searchbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ui/searchbar.component */ "wobF");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "+Tre");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ "csyo");

















function DeskListModalComponent_ng_container_8_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-checkbox", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DeskListModalComponent_ng_container_8_div_22_Template_mat_checkbox_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const desk_r4 = ctx.$implicit; return desk_r4.bookable = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DeskListModalComponent_ng_container_8_div_22_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const desk_r4 = ctx.$implicit; return desk_r4.group = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const desk_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", desk_r4.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](desk_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", desk_r4.bookable);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", desk_r4.group);
} }
function DeskListModalComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "main", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "searchbar", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("modelChange", function DeskListModalComponent_ng_container_8_Template_searchbar_modelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.filter$.next($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Upload List ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DeskListModalComponent_ng_container_8_Template_input_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.upload($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeskListModalComponent_ng_container_8_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.download(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Download List ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "LoS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, DeskListModalComponent_ng_container_8_div_22_Template, 9, 4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "footer", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeskListModalComponent_ng_container_8_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("model", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, ctx_r0.filter$));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 4, ctx_r0.desk_list));
} }
function DeskListModalComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("diameter", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.loading);
} }
class DeskListModalComponent {
    constructor(_data, _dialog_ref) {
        this._data = _data;
        this._dialog_ref = _dialog_ref;
        this.building = this._data.building;
        this.level = this._data.level;
        this.desks$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](this._data.desks);
        this.filter$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]('');
        this.desk_list = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])([this.filter$, this.desks$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((details) => {
            const [filter, desks] = details;
            return desks.filter((desk) => desk.name.toLowerCase().includes(filter.toLowerCase()) ||
                desk.id.toLowerCase().includes(filter.toLowerCase()));
        }));
    }
    /** Download Desks list */
    download() {
        const data = this.desks$.getValue().map((i) => i.format());
        const csv = Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["jsonToCsv"])(data);
        const name = this.level.display_name.split(' ').join('-').toLowerCase();
        Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["downloadFile"])(`desks_${name}.csv`, csv);
    }
    /** Upload Desks list from csv */
    upload(event) {
        if (event.target) {
            const file = event.target.files[0];
            if (file) {
                this.loading = 'Uploading...';
                const reader = new FileReader();
                reader.readAsText(file, 'UTF-8');
                reader.onload = () => {
                    this.processCSV(reader.result);
                    this.loading = '';
                };
                reader.onerror = (evt) => {
                    this.loading = '';
                    Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["notifyError"])('Error reading file.');
                };
            }
        }
    }
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = 'Saving changes to desks...';
            yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["updateMetadata"])(this.level.id, {
                name: 'desks',
                description: 'desks',
                details: this.desks$.getValue(),
            }).toPromise().catch(e => {
                this.loading = '';
                Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["notifyError"])(`Error saving desk data. Error: ${e.message || e}`);
                throw e;
            });
            Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["notifySuccess"])('Successfully updated desks');
            this.loading = '';
            this._dialog_ref.close();
        });
    }
    /** Process csv */
    processCSV(csv) {
        const data = Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["csvToJson"])(csv);
        this.desks$.next(data.map((i) => new _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_5__["Desk"](i)));
        Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["notifySuccess"])('Upload was sucessful. Click Save Button to save the changes');
    }
}
DeskListModalComponent.ɵfac = function DeskListModalComponent_Factory(t) { return new (t || DeskListModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"])); };
DeskListModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DeskListModalComponent, selectors: [["desk-list-modal"]], decls: 11, vars: 4, consts: [[1, "flex", "items-center"], [2, "margin-right", "1rem"], ["mat-icon-button", "", "mat-dialog-close", ""], ["className", "material-icons"], [4, "ngIf", "ngIfElse"], ["load_state", ""], [1, "flex", "flex-col"], [1, "flex", "items-center", "p-2", "space-x-2", "w-full", "border-b", "border-gray-300"], [3, "model", "modelChange"], [1, "flex-1", "w-0"], ["mat-button", "", 1, "relative"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"], ["mat-button", "", 3, "click"], [1, "flex", "flex-col", "flex-1", "w-full"], [1, "flex", "items-center", "p-2", "border-b", "border-gray-300", "font-medium"], ["flex", "", 1, "w-40", "p-1", "flex-1"], [1, "w-32", "p-1"], ["table", "", 1, "flex-1", "overflow-auto"], ["class", "flex item-center p-2 border-b border-gray-200", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-center", "space-x-2", "p-2", "border-t", "border-gray-300"], ["mat-button", "", 1, "w-32", 3, "click"], [1, "flex", "item-center", "p-2", "border-b", "border-gray-200"], [3, "ngModel", "ngModelChange"], [1, "w-32"], [1, "border-none", "bg-none", "w-full", "p-1", 3, "ngModel", "ngModelChange"], [1, "w-64", "h-48", "mx-auto", "flex", "flex-col", "items-center", "justify-center"], [1, "m-4", 3, "diameter"]], template: function DeskListModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "List of Desks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "app-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DeskListModalComponent_ng_container_8_Template, 27, 6, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, DeskListModalComponent_ng_template_9_Template, 4, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" - ", ctx.building.display_name || ctx.building.name, ", ", ctx.level.display_name || ctx.level.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r1);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_9__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _ui_searchbar_component__WEBPACK_IMPORTED_MODULE_11__["SearchbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: ["main[_ngcontent-%COMP%] {\n                max-height: 65vh;\n            }\n\n            [table][_ngcontent-%COMP%] {\n                height: 1px;\n                max-height: 50vh;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DeskListModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'desk-list-modal',
                template: `
        <header class="flex items-center">
            <h2 style="margin-right: 1rem;">
                <strong>List of Desks</strong> -
                {{ building.display_name || building.name }},
                {{ level.display_name || level.name }}
            </h2>
            <button mat-icon-button mat-dialog-close>
                <app-icon className="material-icons">close</app-icon>
            </button>
        </header>
        <ng-container *ngIf="!loading; else load_state">
            <main class="flex flex-col">
                <div
                    class="flex items-center p-2 space-x-2 w-full border-b border-gray-300"
                >
                    <searchbar [model]="filter$ | async" (modelChange)="filter$.next($event)"></searchbar>
                    <div class="flex-1 w-0"></div>
                    <button mat-button class="relative">
                        Upload List
                        <input
                            type="file"
                            class="absolute inset-0 opacity-0"
                            (change)="upload($event)"
                        />
                    </button>
                    <button mat-button (click)="download()">
                        Download List
                    </button>
                </div>
                <div class="flex flex-col flex-1 w-full">
                    <div
                        class="flex items-center p-2 border-b border-gray-300 font-medium"
                    >
                        <div class="w-40 p-1 flex-1" flex>ID</div>
                        <div class="w-32 p-1">Name</div>
                        <div class="w-32 p-1">Safe</div>
                        <div class="w-32 p-1">LoS</div>
                    </div>
                    <div table class="flex-1 overflow-auto">
                        <div
                            class="flex item-center p-2 border-b border-gray-200"
                            *ngFor="let desk of desk_list | async"
                        >
                            <div class="w-40 p-1 flex-1" flex>
                                {{ desk.id }}
                            </div>
                            <div class="w-32 p-1">{{ desk.name }}</div>
                            <div class="w-32 p-1">
                                <mat-checkbox
                                    [(ngModel)]="desk.bookable"
                                ></mat-checkbox>
                            </div>
                            <div class="w-32">
                                <input
                                    class="border-none bg-none w-full p-1"
                                    [(ngModel)]="desk.group"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer
                class="flex items-center justify-center space-x-2 p-2 border-t border-gray-300"
            >
                <button mat-button class="w-32" (click)="save()">Save</button>
            </footer>
        </ng-container>
        <ng-template #load_state>
            <main
                class="w-64 h-48 mx-auto flex flex-col items-center justify-center"
            >
                <mat-spinner class="m-4" [diameter]="48"></mat-spinner>
                <p>{{ loading }}</p>
            </main>
        </ng-template>
    `,
                styles: [
                    `
            main {
                max-height: 65vh;
            }

            [table] {
                height: 1px;
                max-height: 50vh;
            }
        `,
                ],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "zeno":
/*!**************************************************!*\
  !*** ./src/app/desks/desk-listings.component.ts ***!
  \**************************************************/
/*! exports provided: DeskListingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeskListingsComponent", function() { return DeskListingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _desks_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./desks-state.service */ "4NfX");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ "Jb3d");
/* harmony import */ var _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon/icon.component */ "ukpX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _desk_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./desk-details.component */ "aWu5");









function DeskListingsComponent_ng_container_30_desk_details_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "desk-details", 19);
} if (rf & 2) {
    const desk_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("desk", desk_r5);
} }
function DeskListingsComponent_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DeskListingsComponent_ng_container_30_desk_details_1_Template, 1, 1, "desk-details", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.bookings));
} }
function DeskListingsComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " There are no desks for the currently selected date. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DeskListingsComponent {
    constructor(_state) {
        this._state = _state;
        this.desks = this._state.desks;
        this.bookings = this._state.bookings;
        this.rejectAll = () => this._state.rejectAllDesks();
        this.updateDesks = () => this._state.updateDesks();
    }
}
DeskListingsComponent.ɵfac = function DeskListingsComponent_Factory(t) { return new (t || DeskListingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_desks_state_service__WEBPACK_IMPORTED_MODULE_1__["DesksStateService"])); };
DeskListingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeskListingsComponent, selectors: [["desk-listings"]], decls: 48, vars: 13, consts: [["details", "", 1, "w-full", "bg-gray-900", "text-white", "flex", "items-center", "px-2"], [1, "flex-1", "w-0"], [1, "p-2"], [1, "px-8"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["className", "material-icons"], [1, "w-full", "flex-1", "text-sm"], [1, "w-full", "flex", "items-center", "bg-white", "border-b", "border-gray-500", "p-2", "font-medium"], [1, "w-32", "p-2"], [1, "w-24", "p-2"], ["flex", "", 1, "p-2", "flex-1"], [1, "w-full", "flex-1", "overflow-auto"], [4, "ngIf", "ngIfElse"], ["empty_state", ""], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center"], [1, "pl-2"], [3, "desk", 4, "ngFor", "ngForOf"], [3, "desk"], [1, "h-full", "w-full", "flex", "items-center", "justify-center"], [1, "p-8"]], template: function DeskListingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "LoS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Desk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Approver");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Checked In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, DeskListingsComponent_ng_container_30_Template, 3, 3, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, DeskListingsComponent_ng_template_32_Template, 3, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-menu", null, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeskListingsComponent_Template_button_click_36_listener() { return ctx.updateDesks(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "app-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Edit Desks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeskListingsComponent_Template_button_click_42_listener() { return ctx.rejectAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "app-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "event_busy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Reject All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
        var tmp_0_0 = null;
        var tmp_1_0 = null;
        var tmp_3_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Requests: ", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, ctx.bookings)) == null ? null : tmp_0_0.length) || "0", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Free Desks: ", (((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, ctx.desks)) == null ? null : tmp_1_0.length) || 0) - (((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 9, ctx.bookings)) == null ? null : tmp_1_0.length) || 0), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 11, ctx.bookings)) == null ? null : tmp_3_0.length)("ngIfElse", _r1);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuItem"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _desk_details_component__WEBPACK_IMPORTED_MODULE_6__["DeskDetailsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n                overflow: hidden;\n            }\n\n            [details][_ngcontent-%COMP%] {\n                height: 3.5rem;\n            }\n\n            [flex][_ngcontent-%COMP%] {\n                min-width: 8rem;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeskListingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'desk-listings',
                template: `
        <div
            details
            class="w-full bg-gray-900 text-white flex items-center px-2"
        >
            <div class="flex-1 w-0"></div>
            <div class="p-2">
                Requests: {{ (bookings | async)?.length || '0' }}
            </div>
            <div class="px-8">
                Free Desks:
                {{
                    ((desks | async)?.length || 0) -
                        ((bookings | async)?.length || 0)
                }}
            </div>
            <button mat-icon-button [matMenuTriggerFor]="menu">
                <app-icon className="material-icons">more_vert</app-icon>
            </button>
        </div>
        <div class="w-full flex-1 text-sm">
            <div
                class="w-full flex items-center bg-white border-b border-gray-500 p-2 font-medium"
            >
                <div class="w-32 p-2">Person</div>
                <div class="w-32 p-2">LoS</div>
                <div class="w-24 p-2">Date</div>
                <div flex class="p-2 flex-1">Desk</div>
                <div class="w-24 p-2">Status</div>
                <div class="w-32 p-2">Approver</div>
                <div class="w-32 p-2">Checked In</div>
                <div class="w-32 p-2"></div>
            </div>
            <div class="w-full flex-1 overflow-auto">
                <ng-container
                    *ngIf="(bookings | async)?.length; else empty_state"
                >
                    <desk-details
                        *ngFor="let desk of bookings | async"
                        [desk]="desk"
                    ></desk-details>
                </ng-container>
            </div>
        </div>
        <ng-template #empty_state>
            <div class="h-full w-full flex items-center justify-center">
                <p class="p-8">
                    There are no desks for the currently selected date.
                </p>
            </div>
        </ng-template>
        <mat-menu #menu="matMenu">
            <button mat-menu-item (click)="updateDesks()">
                <div class="flex items-center">
                    <app-icon className="material-icons">edit</app-icon>
                    <span class="pl-2">Edit Desks</span>
                </div>
            </button>
            <button mat-menu-item (click)="rejectAll()">
                <div class="flex items-center">
                    <app-icon className="material-icons">event_busy</app-icon>
                    <span class="pl-2">Reject All</span>
                </div>
            </button>
        </mat-menu>
    `,
                styles: [
                    `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
                overflow: hidden;
            }

            [details] {
                height: 3.5rem;
            }

            [flex] {
                min-width: 8rem;
            }
        `,
                ],
            }]
    }], function () { return [{ type: _desks_state_service__WEBPACK_IMPORTED_MODULE_1__["DesksStateService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=desks-desks-module.js.map