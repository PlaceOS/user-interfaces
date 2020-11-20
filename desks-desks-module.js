(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["desks-desks-module"],{

/***/ "0Gjq":
/*!**************************************************!*\
  !*** ./src/app/desks/desk-map-view.component.ts ***!
  \**************************************************/
/*! exports provided: DeskMapViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeskMapViewComponent", function() { return DeskMapViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _user_interfaces_explore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @user-interfaces/explore */ "aAMe");
/* harmony import */ var _desks_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./desks-state.service */ "4NfX");
/* harmony import */ var _workplace_src_app_bookings_desk_flow_desk_flow_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../workplace/src/app/bookings/desk-flow/desk-flow-state.service */ "pAWK");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _libs_components_src_lib_interactive_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/interactive-map.component */ "lYMz");
/* harmony import */ var _libs_explore_src_lib_explore_zoom_control_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/explore/src/lib/explore-zoom-control.component */ "gGs/");
/* harmony import */ var _libs_components_src_lib_user_search_field_user_search_field_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/user-search-field/user-search-field.component */ "lfZe");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "csyo");















function DeskMapViewComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-spinner", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 48);
} }
class DeskMapViewComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["BaseClass"] {
    constructor(_state, _desk, _flow) {
        super();
        this._state = _state;
        this._desk = _desk;
        this._flow = _flow;
        /** Observable for the active map */
        this.url = this._state.map_url;
        /** Observable for the active map */
        this.styles = this._state.map_styles;
        /** Observable for the active map */
        this.positions = this._state.map_positions;
        /** Observable for the active map */
        this.actions = this._state.map_actions;
        /** Observable for the active map */
        this.loading = this._flow.loading;
        /** Observable for the active map */
        this.options = this._flow.options;
        this.setHost = (u) => this._flow.setHost(u);
    }
    ngOnInit() {
        this.subscription('date', this._desk.filters.subscribe((opts) => this._flow.setOptions({ date: opts.date, zones: opts.zones })));
    }
}
DeskMapViewComponent.ɵfac = function DeskMapViewComponent_Factory(t) { return new (t || DeskMapViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_interfaces_explore__WEBPACK_IMPORTED_MODULE_1__["ExploreStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_desks_state_service__WEBPACK_IMPORTED_MODULE_2__["DesksStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_workplace_src_app_bookings_desk_flow_desk_flow_state_service__WEBPACK_IMPORTED_MODULE_3__["DeskFlowStateService"])); };
DeskMapViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeskMapViewComponent, selectors: [["desk-map-view"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 14, vars: 19, consts: [["map", "", 1, "h-full", "w-full", "relative"], [3, "src", "zoom", "center", "styles", "actions"], [1, "absolute", "bottom-0", "right-0"], [1, "absolute", "top-0", "left-0", "p-2", "text-black"], ["placeholder", "User for bookings...", 3, "ngModel", "ngModelChange"], ["info", "", 1, "absolute", "bottom-0", "rounded", "p-2", "m-2", "bg-white", "shadow", "text-center"], [4, "ngIf"], ["load-state", "", 1, "absolute", "inset-0", "flex", "flex-col", "justify-center", "items-center"], [3, "diameter"]], template: function DeskMapViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i-map", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "explore-zoom-controls", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a-user-search-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeskMapViewComponent_Template_a_user_search_field_ngModelChange_9_listener($event) { return ctx.setHost($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Click/Tap an available desk to book it. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DeskMapViewComponent_ng_container_12_Template, 3, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 7, ctx.url))("zoom", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 9, ctx.positions).zoom)("center", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 11, ctx.positions).center)("styles", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 13, ctx.styles))("actions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 15, ctx.actions));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 17, ctx.loading));
    } }, directives: [_libs_components_src_lib_interactive_map_component__WEBPACK_IMPORTED_MODULE_5__["InteractiveMapComponent"], _libs_explore_src_lib_explore_zoom_control_component__WEBPACK_IMPORTED_MODULE_6__["ExploreZoomControlComponent"], _libs_components_src_lib_user_search_field_user_search_field_component__WEBPACK_IMPORTED_MODULE_7__["UserSearchFieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                position: relative;\n                height: 100%;\n                width: 100%;\n            }\n\n            [info][_ngcontent-%COMP%] {\n                left: 50%;\n                transform: translateX(-50%);\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeskMapViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'desk-map-view',
                template: `
        <div map class="h-full w-full relative">
            <i-map
                [src]="url | async"
                [zoom]="(positions | async).zoom"
                [center]="(positions | async).center"
                [styles]="styles | async"
                [actions]="actions | async"
            ></i-map>
            <explore-zoom-controls
                class="absolute bottom-0 right-0"
            ></explore-zoom-controls>
            <div class="absolute top-0 left-0 p-2 text-black">
                <a-user-search-field [ngModel]="null" (ngModelChange)="setHost($event)" placeholder="User for bookings..."></a-user-search-field>
            </div>
            <div
                info
                class="absolute bottom-0 rounded p-2 m-2 bg-white shadow text-center"
            >
                Click/Tap an available desk to book it.
            </div>
            <ng-container *ngIf="loading | async">
                <div
                    load-state
                    class="absolute inset-0 flex flex-col justify-center items-center"
                >
                    <mat-spinner [diameter]="48"></mat-spinner>
                </div>
            </ng-container>
        </div>
    `,
                styles: [
                    `
            :host {
                display: flex;
                flex-direction: column;
                position: relative;
                height: 100%;
                width: 100%;
            }

            [info] {
                left: 50%;
                transform: translateX(-50%);
            }
        `,
                ],
            }]
    }], function () { return [{ type: _user_interfaces_explore__WEBPACK_IMPORTED_MODULE_1__["ExploreStateService"] }, { type: _desks_state_service__WEBPACK_IMPORTED_MODULE_2__["DesksStateService"] }, { type: _workplace_src_app_bookings_desk_flow_desk_flow_state_service__WEBPACK_IMPORTED_MODULE_3__["DeskFlowStateService"] }]; }, null); })();


/***/ }),

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
        this.filters = this._filters.asObservable();
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
            const success = yield this._bookings.checkIn(desk, true).catch(_ => 'failed');
            success === 'failed'
                ? Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_6__["notifyError"])('Error checking in desk booking')
                : Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_6__["notifySuccess"])(`Checked in ${desk.user_name}.`);
        });
    }
    approveDesk(desk) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const success = yield this._bookings.approve(desk.id).catch(_ => 'failed');
            success === 'failed'
                ? Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_6__["notifyError"])('Error approving in desk booking')
                : Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_6__["notifySuccess"])(`Approved desk booking for ${desk.user_name}.`);
        });
    }
    rejectDesk(desk) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const success = yield this._bookings.reject(desk.id).catch(_ => 'failed');
            success === 'failed'
                ? Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_6__["notifyError"])('Error rejecting in desk booking')
                : Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_6__["notifySuccess"])(`Rejected desk booking for ${desk.user_name}.`);
        });
    }
    rejectAllDesks() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const list = this._desk_bookings || [];
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

/***/ "5MZz":
/*!************************************************************************************!*\
  !*** ../workplace/src/app/bookings/desk-flow/desk-flow-confirm-modal.component.ts ***!
  \************************************************************************************/
/*! exports provided: DeskFlowConfirmModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeskFlowConfirmModalComponent", function() { return DeskFlowConfirmModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../libs/components/src/lib/icon/icon.component */ "ukpX");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "csyo");








function DeskFlowConfirmModalComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DeskFlowConfirmModalComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Reason");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "footer", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeskFlowConfirmModalComponent_ng_container_5_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.confirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 4, ctx_r1.date, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.reason || "~No set reason~");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Your desk will be ", ctx_r1.desk == null ? null : ctx_r1.desk.name, " on ", (ctx_r1.level == null ? null : ctx_r1.level.display_name) || (ctx_r1.level == null ? null : ctx_r1.level.name), " ");
} }
function DeskFlowConfirmModalComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.loading);
} }
class DeskFlowConfirmModalComponent {
    constructor(_data) {
        this._data = _data;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.desk = this._data.desk;
        this.date = this._data.date;
        this.reason = this._data.reason;
        this.level = this._data.level;
    }
    confirm() {
        this.loading = 'Requesting desk booking...';
        this.event.emit({ reason: 'done' });
    }
}
DeskFlowConfirmModalComponent.ɵfac = function DeskFlowConfirmModalComponent_Factory(t) { return new (t || DeskFlowConfirmModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
DeskFlowConfirmModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeskFlowConfirmModalComponent, selectors: [["desk-flow-confirm-modal-component"]], outputs: { event: "event" }, decls: 8, vars: 3, consts: [[1, "flex-1"], ["mat-icon-button", "", "mat-dialog-close", "", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["load_state", ""], ["mat-icon-button", "", "mat-dialog-close", ""], ["className", "material-icons"], [1, "p-4"], [1, "mb-4"], [1, "flex", "items-center", "justify-center", "p-2"], ["mat-button", "", 3, "click"], [1, "flex", "flex-col", "p-12", "items-center", "justify-center"], [1, "mb-4", 3, "diameter"]], template: function DeskFlowConfirmModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Confirm Booking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DeskFlowConfirmModalComponent_button_4_Template, 3, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DeskFlowConfirmModalComponent_ng_container_5_Template, 18, 7, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DeskFlowConfirmModalComponent_ng_template_6_Template, 4, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__["IconComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["main[_ngcontent-%COMP%] {\n                width: 24rem;\n                max-width: calc(100vw - 4.5rem);\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeskFlowConfirmModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'desk-flow-confirm-modal-component',
                template: `
        <header>
            <h2>Confirm Booking</h2>
            <div class="flex-1"></div>
            <button mat-icon-button mat-dialog-close *ngIf="!loading">
                <app-icon className="material-icons">close</app-icon>
            </button>
        </header>
        <ng-container *ngIf="!loading; else load_state">
            <main class="p-4">
                <div class="mb-4">
                    <label>Date</label>
                    <div>{{ date | date: 'mediumDate' }}</div>
                </div>
                <div class="mb-4">
                    <label>Reason</label>
                    <div>{{ reason || '~No set reason~' }}</div>
                </div>
                <p>
                    Your desk will be {{ desk?.name }} on
                    {{ level?.display_name || level?.name }}
                </p>
            </main>
            <footer class="flex items-center justify-center p-2">
                <button mat-button (click)="confirm()">Confirm</button>
            </footer>
        </ng-container>
        <ng-template #load_state>
            <main class="flex flex-col p-12 items-center justify-center">
                <mat-spinner [diameter]="48" class="mb-4"></mat-spinner>
                <p>{{ loading }}</p>
            </main>
        </ng-template>
    `,
                styles: [
                    `
            main {
                width: 24rem;
                max-width: calc(100vw - 4.5rem);
            }
        `,
                ],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, { event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


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
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/radio */ "F1o0");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/ui.module */ "oRDy");
/* harmony import */ var _desks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./desks.component */ "Su0S");
/* harmony import */ var _desk_listings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./desk-listings.component */ "zeno");
/* harmony import */ var _desk_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./desk-details.component */ "aWu5");
/* harmony import */ var _desks_topbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./desks-topbar.component */ "D2au");
/* harmony import */ var _desk_list_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./desk-list-modal.component */ "i0G+");
/* harmony import */ var _desk_map_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./desk-map-view.component */ "0Gjq");
/* harmony import */ var _user_interfaces_explore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @user-interfaces/explore */ "aAMe");
/* harmony import */ var apps_workplace_src_app_bookings_desk_flow_desk_flow_confirm_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! apps/workplace/src/app/bookings/desk-flow/desk-flow-confirm-modal.component */ "5MZz");
/* harmony import */ var apps_workplace_src_app_bookings_desk_flow_desk_flow_questions_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! apps/workplace/src/app/bookings/desk-flow/desk-flow-questions-modal.component */ "ltfU");

















const ROUTES = [{ path: '', component: _desks_component__WEBPACK_IMPORTED_MODULE_6__["DesksComponent"] }];
class DesksModule {
}
DesksModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DesksModule });
DesksModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DesksModule_Factory(t) { return new (t || DesksModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__["UIModule"],
            _user_interfaces_explore__WEBPACK_IMPORTED_MODULE_12__["SharedExploreModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(ROUTES),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DesksModule, { declarations: [_desks_component__WEBPACK_IMPORTED_MODULE_6__["DesksComponent"],
        _desk_listings_component__WEBPACK_IMPORTED_MODULE_7__["DeskListingsComponent"],
        _desk_details_component__WEBPACK_IMPORTED_MODULE_8__["DeskDetailsComponent"],
        _desks_topbar_component__WEBPACK_IMPORTED_MODULE_9__["DesksTopbarComponent"],
        _desk_list_modal_component__WEBPACK_IMPORTED_MODULE_10__["DeskListModalComponent"],
        _desk_map_view_component__WEBPACK_IMPORTED_MODULE_11__["DeskMapViewComponent"],
        apps_workplace_src_app_bookings_desk_flow_desk_flow_confirm_modal_component__WEBPACK_IMPORTED_MODULE_13__["DeskFlowConfirmModalComponent"],
        apps_workplace_src_app_bookings_desk_flow_desk_flow_questions_modal_component__WEBPACK_IMPORTED_MODULE_14__["DeskFlowQuestionsModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__["UIModule"],
        _user_interfaces_explore__WEBPACK_IMPORTED_MODULE_12__["SharedExploreModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DesksModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _desks_component__WEBPACK_IMPORTED_MODULE_6__["DesksComponent"],
                    _desk_listings_component__WEBPACK_IMPORTED_MODULE_7__["DeskListingsComponent"],
                    _desk_details_component__WEBPACK_IMPORTED_MODULE_8__["DeskDetailsComponent"],
                    _desks_topbar_component__WEBPACK_IMPORTED_MODULE_9__["DesksTopbarComponent"],
                    _desk_list_modal_component__WEBPACK_IMPORTED_MODULE_10__["DeskListModalComponent"],
                    _desk_map_view_component__WEBPACK_IMPORTED_MODULE_11__["DeskMapViewComponent"],
                    apps_workplace_src_app_bookings_desk_flow_desk_flow_confirm_modal_component__WEBPACK_IMPORTED_MODULE_13__["DeskFlowConfirmModalComponent"],
                    apps_workplace_src_app_bookings_desk_flow_desk_flow_questions_modal_component__WEBPACK_IMPORTED_MODULE_14__["DeskFlowQuestionsModalComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__["UIModule"],
                    _user_interfaces_explore__WEBPACK_IMPORTED_MODULE_12__["SharedExploreModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
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
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _ui_date_options_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ui/date-options.component */ "wrRZ");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "mFH5");


















function DesksTopbarComponent_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const level_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", level_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", level_r1.display_name || level_r1.name, " ");
} }
const _c0 = function () { return ["/desks"]; };
const _c1 = function (a0) { return { show_map: a0 }; };
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
        /** List of levels for the active building */
        this.filters = this._desks.filters;
        /** Set filtered date */
        this.toggleMapShow = () => {
            this._desks.setFilters({ show_map: !this.show_map });
            this.show_map = !this.show_map;
        };
        /** Set filtered date */
        this.setDate = (date) => this._desks.setFilters({ date });
        /** Update active zones for desks */
        this.updateZones = (zones) => {
            this._router.navigate([], {
                relativeTo: this._route,
                queryParams: { zone_ids: zones.join(',') },
                queryParamsHandling: 'merge'
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
                this.show_map =
                    params.has('show_map') && params.get('show_map') === 'true';
                this._desks.setFilters({ show_map: this.show_map });
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
DesksTopbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DesksTopbarComponent, selectors: [["desks-topbar"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 14, consts: [["appearance", "outline"], ["placeholder", "All Levels", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["button", "", "mat-button", "", "queryParamsHandling", "merge", 3, "routerLink", "queryParams", "click"], [1, "flex-1", "w-2"], [3, "dateChange"], [3, "value"]], template: function DesksTopbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DesksTopbarComponent_Template_mat_select_ngModelChange_1_listener($event) { ctx.updateZones([$event]); return ctx.zones = [$event]; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DesksTopbarComponent_mat_option_2_Template, 2, 2, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DesksTopbarComponent_Template_a_click_4_listener() { return ctx.toggleMapShow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "date-options", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dateChange", function DesksTopbarComponent_Template_date_options_dateChange_9_listener($event) { return ctx.setDate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_3_0 = null;
        let tmp_4_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.zones[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, ctx.levels));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c1, !((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 7, ctx.filters)) == null ? null : tmp_3_0.show_map)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 9, ctx.filters)) == null ? null : tmp_4_0.show_map) ? "Show List View" : "Show Map View", " ");
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _ui_date_options_component__WEBPACK_IMPORTED_MODULE_12__["DateOptionsComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n                display: flex;\n                align-items: center;\n                background-color: #fff;\n                height: 5em;\n                padding: 0 1em;\n                border-bottom: 1px solid #ccc;\n            }\n\n            [_nghost-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n                margin-left: 0.5rem;\n            }\n\n            mat-form-field[_ngcontent-%COMP%] {\n                height: 3.25em;\n                width: 8em;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DesksTopbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'desks-topbar',
                template: `
        <mat-form-field appearance="outline">
            <mat-select
                [ngModel]="zones[0]"
                (ngModelChange)="updateZones([$event]); zones = [$event]"
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
        <a
            button
            mat-button
            [routerLink]="['/desks']"
            [queryParams]="{ show_map: !(filters | async)?.show_map }"
            queryParamsHandling="merge"
            (click)="toggleMapShow()"
        >
            {{
                (filters | async)?.show_map ? 'Show List View' : 'Show Map View'
            }}
        </a>
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
    }], function () { return [{ type: _desks_state_service__WEBPACK_IMPORTED_MODULE_6__["DesksStateService"] }, { type: _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_5__["OrganisationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "F1o0":
/*!***********************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js ***!
  \***********************************************************************************************************************/
/*! exports provided: MAT_RADIO_DEFAULT_OPTIONS, MAT_RADIO_DEFAULT_OPTIONS_FACTORY, MAT_RADIO_GROUP, MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, MatRadioButton, MatRadioChange, MatRadioGroup, MatRadioModule, _MatRadioButtonBase, _MatRadioGroupBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_RADIO_DEFAULT_OPTIONS", function() { return MAT_RADIO_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_RADIO_DEFAULT_OPTIONS_FACTORY", function() { return MAT_RADIO_DEFAULT_OPTIONS_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_RADIO_GROUP", function() { return MAT_RADIO_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR", function() { return MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRadioButton", function() { return MatRadioButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRadioChange", function() { return MatRadioChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRadioGroup", function() { return MatRadioGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRadioModule", function() { return MatRadioModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatRadioButtonBase", function() { return _MatRadioButtonBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatRadioGroupBase", function() { return _MatRadioGroupBase; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ "mFH5");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "sg/T");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "5XID");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ "cqs0");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "5lCh");








/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */





const _c0 = ["input"];
const _c1 = function () { return { enterDuration: 150 }; };
const _c2 = ["*"];
const MAT_RADIO_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-radio-default-options', {
    providedIn: 'root',
    factory: MAT_RADIO_DEFAULT_OPTIONS_FACTORY
});
function MAT_RADIO_DEFAULT_OPTIONS_FACTORY() {
    return {
        color: 'accent'
    };
}
// Increasing integer for generating unique ids for radio components.
let nextUniqueId = 0;
/**
 * Provider Expression that allows mat-radio-group to register as a ControlValueAccessor. This
 * allows it to support [(ngModel)] and ngControl.
 * @docs-private
 */
const MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => MatRadioGroup),
    multi: true
};
/** Change event object emitted by MatRadio and MatRadioGroup. */
class MatRadioChange {
    constructor(
    /** The MatRadioButton that emits the change event. */
    source, 
    /** The value of the MatRadioButton. */
    value) {
        this.source = source;
        this.value = value;
    }
}
/**
 * Injection token that can be used to inject instances of `MatRadioGroup`. It serves as
 * alternative token to the actual `MatRadioGroup` class which could cause unnecessary
 * retention of the class and its component metadata.
 */
const MAT_RADIO_GROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MatRadioGroup');
/**
 * Base class with all of the `MatRadioGroup` functionality.
 * @docs-private
 */
class _MatRadioGroupBase {
    constructor(_changeDetector) {
        this._changeDetector = _changeDetector;
        /** Selected value for the radio group. */
        this._value = null;
        /** The HTML name attribute applied to radio buttons in this group. */
        this._name = `mat-radio-group-${nextUniqueId++}`;
        /** The currently selected radio button. Should match value. */
        this._selected = null;
        /** Whether the `value` has been set to its initial value. */
        this._isInitialized = false;
        /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */
        this._labelPosition = 'after';
        /** Whether the radio group is disabled. */
        this._disabled = false;
        /** Whether the radio group is required. */
        this._required = false;
        /** The method to be called in order to update ngModel */
        this._controlValueAccessorChangeFn = () => { };
        /**
         * onTouch function registered via registerOnTouch (ControlValueAccessor).
         * @docs-private
         */
        this.onTouched = () => { };
        /**
         * Event emitted when the group value changes.
         * Change events are only emitted when the value changes due to user interaction with
         * a radio button (the same behavior as `<input type-"radio">`).
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /** Name of the radio button group. All radio buttons inside this group will use this name. */
    get name() { return this._name; }
    set name(value) {
        this._name = value;
        this._updateRadioButtonNames();
    }
    /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */
    get labelPosition() {
        return this._labelPosition;
    }
    set labelPosition(v) {
        this._labelPosition = v === 'before' ? 'before' : 'after';
        this._markRadiosForCheck();
    }
    /**
     * Value for the radio-group. Should equal the value of the selected radio button if there is
     * a corresponding radio button with a matching value. If there is not such a corresponding
     * radio button, this value persists to be applied in case a new radio button is added with a
     * matching value.
     */
    get value() { return this._value; }
    set value(newValue) {
        if (this._value !== newValue) {
            // Set this before proceeding to ensure no circular loop occurs with selection.
            this._value = newValue;
            this._updateSelectedRadioFromValue();
            this._checkSelectedRadioButton();
        }
    }
    _checkSelectedRadioButton() {
        if (this._selected && !this._selected.checked) {
            this._selected.checked = true;
        }
    }
    /**
     * The currently selected radio button. If set to a new radio button, the radio group value
     * will be updated to match the new selected button.
     */
    get selected() { return this._selected; }
    set selected(selected) {
        this._selected = selected;
        this.value = selected ? selected.value : null;
        this._checkSelectedRadioButton();
    }
    /** Whether the radio group is disabled */
    get disabled() { return this._disabled; }
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        this._markRadiosForCheck();
    }
    /** Whether the radio group is required */
    get required() { return this._required; }
    set required(value) {
        this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        this._markRadiosForCheck();
    }
    /**
     * Initialize properties once content children are available.
     * This allows us to propagate relevant attributes to associated buttons.
     */
    ngAfterContentInit() {
        // Mark this component as initialized in AfterContentInit because the initial value can
        // possibly be set by NgModel on MatRadioGroup, and it is possible that the OnInit of the
        // NgModel occurs *after* the OnInit of the MatRadioGroup.
        this._isInitialized = true;
    }
    /**
     * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
     * radio buttons upon their blur.
     */
    _touch() {
        if (this.onTouched) {
            this.onTouched();
        }
    }
    _updateRadioButtonNames() {
        if (this._radios) {
            this._radios.forEach(radio => {
                radio.name = this.name;
                radio._markForCheck();
            });
        }
    }
    /** Updates the `selected` radio button from the internal _value state. */
    _updateSelectedRadioFromValue() {
        // If the value already matches the selected radio, do nothing.
        const isAlreadySelected = this._selected !== null && this._selected.value === this._value;
        if (this._radios && !isAlreadySelected) {
            this._selected = null;
            this._radios.forEach(radio => {
                radio.checked = this.value === radio.value;
                if (radio.checked) {
                    this._selected = radio;
                }
            });
        }
    }
    /** Dispatch change event with current selection and group value. */
    _emitChangeEvent() {
        if (this._isInitialized) {
            this.change.emit(new MatRadioChange(this._selected, this._value));
        }
    }
    _markRadiosForCheck() {
        if (this._radios) {
            this._radios.forEach(radio => radio._markForCheck());
        }
    }
    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param value
     */
    writeValue(value) {
        this.value = value;
        this._changeDetector.markForCheck();
    }
    /**
     * Registers a callback to be triggered when the model value changes.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */
    registerOnChange(fn) {
        this._controlValueAccessorChangeFn = fn;
    }
    /**
     * Registers a callback to be triggered when the control is touched.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
     * @param isDisabled Whether the control should be disabled.
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this._changeDetector.markForCheck();
    }
}
_MatRadioGroupBase.ɵfac = function _MatRadioGroupBase_Factory(t) { return new (t || _MatRadioGroupBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
_MatRadioGroupBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: _MatRadioGroupBase, inputs: { name: "name", labelPosition: "labelPosition", value: "value", selected: "selected", disabled: "disabled", required: "required", color: "color" }, outputs: { change: "change" } });
_MatRadioGroupBase.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
_MatRadioGroupBase.propDecorators = {
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    labelPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatRadioGroupBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], labelPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
/**
 * A group of radio buttons. May contain one or more `<mat-radio-button>` elements.
 */
class MatRadioGroup extends _MatRadioGroupBase {
}
MatRadioGroup.ɵfac = function MatRadioGroup_Factory(t) { return ɵMatRadioGroup_BaseFactory(t || MatRadioGroup); };
MatRadioGroup.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatRadioGroup, selectors: [["mat-radio-group"]], contentQueries: function MatRadioGroup_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatRadioButton, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._radios = _t);
    } }, hostAttrs: ["role", "radiogroup", 1, "mat-radio-group"], exportAs: ["matRadioGroup"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR,
            { provide: MAT_RADIO_GROUP, useExisting: MatRadioGroup },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
MatRadioGroup.propDecorators = {
    _radios: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => MatRadioButton), { descendants: true },] }]
};
const ɵMatRadioGroup_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatRadioGroup);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRadioGroup, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'mat-radio-group',
                exportAs: 'matRadioGroup',
                providers: [
                    MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR,
                    { provide: MAT_RADIO_GROUP, useExisting: MatRadioGroup },
                ],
                host: {
                    'role': 'radiogroup',
                    'class': 'mat-radio-group'
                }
            }]
    }], null, { _radios: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => MatRadioButton), { descendants: true }]
        }] }); })();
// Boilerplate for applying mixins to MatRadioButton.
/** @docs-private */
class MatRadioButtonBase {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
// As per Material design specifications the selection control radio should use the accent color
// palette by default. https://material.io/guidelines/components/selection-controls.html
const _MatRadioButtonMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinTabIndex"])(MatRadioButtonBase));
/**
 * Base class with all of the `MatRadioButton` functionality.
 * @docs-private
 */
class _MatRadioButtonBase extends _MatRadioButtonMixinBase {
    constructor(radioGroup, elementRef, _changeDetector, _focusMonitor, _radioDispatcher, _animationMode, _providerOverride, tabIndex) {
        super(elementRef);
        this._changeDetector = _changeDetector;
        this._focusMonitor = _focusMonitor;
        this._radioDispatcher = _radioDispatcher;
        this._animationMode = _animationMode;
        this._providerOverride = _providerOverride;
        this._uniqueId = `mat-radio-${++nextUniqueId}`;
        /** The unique ID for the radio button. */
        this.id = this._uniqueId;
        /**
         * Event emitted when the checked state of this radio button changes.
         * Change events are only emitted when the value changes due to user interaction with
         * the radio button (the same behavior as `<input type-"radio">`).
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Whether this radio is checked. */
        this._checked = false;
        /** Value assigned to this radio. */
        this._value = null;
        /** Unregister function for _radioDispatcher */
        this._removeUniqueSelectionListener = () => { };
        // Assertions. Ideally these should be stripped out by the compiler.
        // TODO(jelbourn): Assert that there's no name binding AND a parent radio group.
        this.radioGroup = radioGroup;
        if (tabIndex) {
            this.tabIndex = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(tabIndex, 0);
        }
        this._removeUniqueSelectionListener =
            _radioDispatcher.listen((id, name) => {
                if (id !== this.id && name === this.name) {
                    this.checked = false;
                }
            });
    }
    /** Whether this radio button is checked. */
    get checked() { return this._checked; }
    set checked(value) {
        const newCheckedState = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        if (this._checked !== newCheckedState) {
            this._checked = newCheckedState;
            if (newCheckedState && this.radioGroup && this.radioGroup.value !== this.value) {
                this.radioGroup.selected = this;
            }
            else if (!newCheckedState && this.radioGroup && this.radioGroup.value === this.value) {
                // When unchecking the selected radio button, update the selected radio
                // property on the group.
                this.radioGroup.selected = null;
            }
            if (newCheckedState) {
                // Notify all radio buttons with the same name to un-check.
                this._radioDispatcher.notify(this.id, this.name);
            }
            this._changeDetector.markForCheck();
        }
    }
    /** The value of this radio button. */
    get value() { return this._value; }
    set value(value) {
        if (this._value !== value) {
            this._value = value;
            if (this.radioGroup !== null) {
                if (!this.checked) {
                    // Update checked when the value changed to match the radio group's value
                    this.checked = this.radioGroup.value === value;
                }
                if (this.checked) {
                    this.radioGroup.selected = this;
                }
            }
        }
    }
    /** Whether the label should appear after or before the radio button. Defaults to 'after' */
    get labelPosition() {
        return this._labelPosition || (this.radioGroup && this.radioGroup.labelPosition) || 'after';
    }
    set labelPosition(value) {
        this._labelPosition = value;
    }
    /** Whether the radio button is disabled. */
    get disabled() {
        return this._disabled || (this.radioGroup !== null && this.radioGroup.disabled);
    }
    set disabled(value) {
        this._setDisabled(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value));
    }
    /** Whether the radio button is required. */
    get required() {
        return this._required || (this.radioGroup && this.radioGroup.required);
    }
    set required(value) {
        this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
    }
    /** Theme color of the radio button. */
    get color() {
        return this._color ||
            (this.radioGroup && this.radioGroup.color) ||
            this._providerOverride && this._providerOverride.color || 'accent';
    }
    set color(newValue) { this._color = newValue; }
    /** ID of the native input element inside `<mat-radio-button>` */
    get inputId() { return `${this.id || this._uniqueId}-input`; }
    /** Focuses the radio button. */
    focus(options) {
        this._focusMonitor.focusVia(this._inputElement, 'keyboard', options);
    }
    /**
     * Marks the radio button as needing checking for change detection.
     * This method is exposed because the parent radio group will directly
     * update bound properties of the radio button.
     */
    _markForCheck() {
        // When group value changes, the button will not be notified. Use `markForCheck` to explicit
        // update radio button's status
        this._changeDetector.markForCheck();
    }
    ngOnInit() {
        if (this.radioGroup) {
            // If the radio is inside a radio group, determine if it should be checked
            this.checked = this.radioGroup.value === this._value;
            // Copy name from parent radio group
            this.name = this.radioGroup.name;
        }
    }
    ngAfterViewInit() {
        this._focusMonitor
            .monitor(this._elementRef, true)
            .subscribe(focusOrigin => {
            if (!focusOrigin && this.radioGroup) {
                this.radioGroup._touch();
            }
        });
    }
    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef);
        this._removeUniqueSelectionListener();
    }
    /** Dispatch change event with current value. */
    _emitChangeEvent() {
        this.change.emit(new MatRadioChange(this, this._value));
    }
    _isRippleDisabled() {
        return this.disableRipple || this.disabled;
    }
    _onInputClick(event) {
        // We have to stop propagation for click events on the visual hidden input element.
        // By default, when a user clicks on a label element, a generated click event will be
        // dispatched on the associated input element. Since we are using a label element as our
        // root container, the click event on the `radio-button` will be executed twice.
        // The real click event will bubble up, and the generated click event also tries to bubble up.
        // This will lead to multiple click events.
        // Preventing bubbling for the second event will solve that issue.
        event.stopPropagation();
    }
    /**
     * Triggered when the radio button received a click or the input recognized any change.
     * Clicking on a label element, will trigger a change event on the associated input.
     */
    _onInputChange(event) {
        // We always have to stop propagation on the change event.
        // Otherwise the change event, from the input element, will bubble up and
        // emit its event object to the `change` output.
        event.stopPropagation();
        const groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
        this.checked = true;
        this._emitChangeEvent();
        if (this.radioGroup) {
            this.radioGroup._controlValueAccessorChangeFn(this.value);
            if (groupValueChanged) {
                this.radioGroup._emitChangeEvent();
            }
        }
    }
    /** Sets the disabled state and marks for check if a change occurred. */
    _setDisabled(value) {
        if (this._disabled !== value) {
            this._disabled = value;
            this._changeDetector.markForCheck();
        }
    }
}
_MatRadioButtonBase.ɵfac = function _MatRadioButtonBase_Factory(t) { return new (t || _MatRadioButtonBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MatRadioGroupBase), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["UniqueSelectionDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](String), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](String)); };
_MatRadioButtonBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: _MatRadioButtonBase, viewQuery: function _MatRadioButtonBase_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
    } }, inputs: { id: "id", checked: "checked", value: "value", labelPosition: "labelPosition", disabled: "disabled", required: "required", color: "color", name: "name", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], ariaDescribedby: ["aria-describedby", "ariaDescribedby"] }, outputs: { change: "change" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
_MatRadioButtonBase.ctorParameters = () => [
    { type: _MatRadioGroupBase },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"] },
    { type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["UniqueSelectionDispatcher"] },
    { type: String },
    { type: undefined },
    { type: String }
];
_MatRadioButtonBase.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['aria-label',] }],
    ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['aria-labelledby',] }],
    ariaDescribedby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['aria-describedby',] }],
    checked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    labelPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    _inputElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['input',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatRadioButtonBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
    }], function () { return [{ type: _MatRadioGroupBase }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"] }, { type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["UniqueSelectionDispatcher"] }, { type: String }, { type: undefined }, { type: String }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], checked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], labelPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['aria-label']
        }], ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['aria-labelledby']
        }], ariaDescribedby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['aria-describedby']
        }], _inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['input']
        }] }); })();
/**
 * A Material design radio-button. Typically placed inside of `<mat-radio-group>` elements.
 */
class MatRadioButton extends _MatRadioButtonBase {
    constructor(radioGroup, elementRef, changeDetector, focusMonitor, radioDispatcher, animationMode, providerOverride, tabIndex) {
        super(radioGroup, elementRef, changeDetector, focusMonitor, radioDispatcher, animationMode, providerOverride, tabIndex);
    }
}
MatRadioButton.ɵfac = function MatRadioButton_Factory(t) { return new (t || MatRadioButton)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_RADIO_GROUP, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["UniqueSelectionDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_RADIO_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex')); };
MatRadioButton.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatRadioButton, selectors: [["mat-radio-button"]], hostAttrs: [1, "mat-radio-button"], hostVars: 17, hostBindings: function MatRadioButton_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MatRadioButton_focus_HostBindingHandler() { return ctx._inputElement.nativeElement.focus(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", -1)("id", ctx.id)("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-radio-checked", ctx.checked)("mat-radio-disabled", ctx.disabled)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-primary", ctx.color === "primary")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn");
    } }, inputs: { disableRipple: "disableRipple", tabIndex: "tabIndex" }, exportAs: ["matRadioButton"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c2, decls: 13, vars: 19, consts: [[1, "mat-radio-label"], ["label", ""], [1, "mat-radio-container"], [1, "mat-radio-outer-circle"], [1, "mat-radio-inner-circle"], ["type", "radio", 1, "mat-radio-input", "cdk-visually-hidden", 3, "id", "checked", "disabled", "tabIndex", "required", "change", "click"], ["input", ""], ["mat-ripple", "", 1, "mat-radio-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered", "matRippleRadius", "matRippleAnimation"], [1, "mat-ripple-element", "mat-radio-persistent-ripple"], [1, "mat-radio-label-content"], [2, "display", "none"]], template: function MatRadioButton_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MatRadioButton_Template_input_change_5_listener($event) { return ctx._onInputChange($event); })("click", function MatRadioButton_Template_input_click_5_listener($event) { return ctx._onInputClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx.inputId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.inputId)("checked", ctx.checked)("disabled", ctx.disabled)("tabIndex", ctx.tabIndex)("required", ctx.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("name", ctx.name)("value", ctx.value)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", true)("matRippleRadius", 20)("matRippleAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-radio-label-before", ctx.labelPosition == "before");
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"]], styles: [".mat-radio-button{display:inline-block;-webkit-tap-highlight-color:transparent;outline:0}.mat-radio-label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;vertical-align:middle;width:100%}.mat-radio-container{box-sizing:border-box;display:inline-block;position:relative;width:20px;height:20px;flex-shrink:0}.mat-radio-outer-circle{box-sizing:border-box;height:20px;left:0;position:absolute;top:0;transition:border-color ease 280ms;width:20px;border-width:2px;border-style:solid;border-radius:50%}._mat-animation-noopable .mat-radio-outer-circle{transition:none}.mat-radio-inner-circle{border-radius:50%;box-sizing:border-box;height:20px;left:0;position:absolute;top:0;transition:transform ease 280ms,background-color ease 280ms;width:20px;transform:scale(0.001)}._mat-animation-noopable .mat-radio-inner-circle{transition:none}.mat-radio-checked .mat-radio-inner-circle{transform:scale(0.5)}.cdk-high-contrast-active .mat-radio-checked .mat-radio-inner-circle{border:solid 10px}.mat-radio-label-content{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto;display:inline-block;order:0;line-height:inherit;padding-left:8px;padding-right:0}[dir=rtl] .mat-radio-label-content{padding-right:8px;padding-left:0}.mat-radio-label-content.mat-radio-label-before{order:-1;padding-left:0;padding-right:8px}[dir=rtl] .mat-radio-label-content.mat-radio-label-before{padding-right:0;padding-left:8px}.mat-radio-disabled,.mat-radio-disabled .mat-radio-label{cursor:default}.mat-radio-button .mat-radio-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-radio-button .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple){opacity:.16}.mat-radio-persistent-ripple{width:100%;height:100%;transform:none}.mat-radio-container:hover .mat-radio-persistent-ripple{opacity:.04}.mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-persistent-ripple,.mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-persistent-ripple{opacity:.12}.mat-radio-persistent-ripple,.mat-radio-disabled .mat-radio-container:hover .mat-radio-persistent-ripple{opacity:0}@media(hover: none){.mat-radio-container:hover .mat-radio-persistent-ripple{display:none}}.mat-radio-input{bottom:0;left:50%}.cdk-high-contrast-active .mat-radio-disabled{opacity:.5}\n"], encapsulation: 2, changeDetection: 0 });
MatRadioButton.ctorParameters = () => [
    { type: MatRadioGroup, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_RADIO_GROUP,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"] },
    { type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["UniqueSelectionDispatcher"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_RADIO_DEFAULT_OPTIONS,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"], args: ['tabindex',] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRadioButton, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-radio-button',
                template: "<!-- TODO(jelbourn): render the radio on either side of the content -->\n<!-- TODO(mtlin): Evaluate trade-offs of using native radio vs. cost of additional bindings. -->\n<label [attr.for]=\"inputId\" class=\"mat-radio-label\" #label>\n  <!-- The actual 'radio' part of the control. -->\n  <div class=\"mat-radio-container\">\n    <div class=\"mat-radio-outer-circle\"></div>\n    <div class=\"mat-radio-inner-circle\"></div>\n    <input #input class=\"mat-radio-input cdk-visually-hidden\" type=\"radio\"\n        [id]=\"inputId\"\n        [checked]=\"checked\"\n        [disabled]=\"disabled\"\n        [tabIndex]=\"tabIndex\"\n        [attr.name]=\"name\"\n        [attr.value]=\"value\"\n        [required]=\"required\"\n        [attr.aria-label]=\"ariaLabel\"\n        [attr.aria-labelledby]=\"ariaLabelledby\"\n        [attr.aria-describedby]=\"ariaDescribedby\"\n        (change)=\"_onInputChange($event)\"\n        (click)=\"_onInputClick($event)\">\n\n    <!-- The ripple comes after the input so that we can target it with a CSS\n         sibling selector when the input is focused. -->\n    <div mat-ripple class=\"mat-radio-ripple mat-focus-indicator\"\n         [matRippleTrigger]=\"label\"\n         [matRippleDisabled]=\"_isRippleDisabled()\"\n         [matRippleCentered]=\"true\"\n         [matRippleRadius]=\"20\"\n         [matRippleAnimation]=\"{enterDuration: 150}\">\n\n      <div class=\"mat-ripple-element mat-radio-persistent-ripple\"></div>\n    </div>\n  </div>\n\n  <!-- The label content for radio control. -->\n  <div class=\"mat-radio-label-content\" [class.mat-radio-label-before]=\"labelPosition == 'before'\">\n    <!-- Add an invisible span so JAWS can read the label -->\n    <span style=\"display:none\">&nbsp;</span>\n    <ng-content></ng-content>\n  </div>\n</label>\n",
                inputs: ['disableRipple', 'tabIndex'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                exportAs: 'matRadioButton',
                host: {
                    'class': 'mat-radio-button',
                    '[class.mat-radio-checked]': 'checked',
                    '[class.mat-radio-disabled]': 'disabled',
                    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
                    '[class.mat-primary]': 'color === "primary"',
                    '[class.mat-accent]': 'color === "accent"',
                    '[class.mat-warn]': 'color === "warn"',
                    // Needs to be -1 so the `focus` event still fires.
                    '[attr.tabindex]': '-1',
                    '[attr.id]': 'id',
                    '[attr.aria-label]': 'null',
                    '[attr.aria-labelledby]': 'null',
                    '[attr.aria-describedby]': 'null',
                    // Note: under normal conditions focus shouldn't land on this element, however it may be
                    // programmatically set, for example inside of a focus trap, in this case we want to forward
                    // the focus to the native element.
                    '(focus)': '_inputElement.nativeElement.focus()'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styles: [".mat-radio-button{display:inline-block;-webkit-tap-highlight-color:transparent;outline:0}.mat-radio-label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;vertical-align:middle;width:100%}.mat-radio-container{box-sizing:border-box;display:inline-block;position:relative;width:20px;height:20px;flex-shrink:0}.mat-radio-outer-circle{box-sizing:border-box;height:20px;left:0;position:absolute;top:0;transition:border-color ease 280ms;width:20px;border-width:2px;border-style:solid;border-radius:50%}._mat-animation-noopable .mat-radio-outer-circle{transition:none}.mat-radio-inner-circle{border-radius:50%;box-sizing:border-box;height:20px;left:0;position:absolute;top:0;transition:transform ease 280ms,background-color ease 280ms;width:20px;transform:scale(0.001)}._mat-animation-noopable .mat-radio-inner-circle{transition:none}.mat-radio-checked .mat-radio-inner-circle{transform:scale(0.5)}.cdk-high-contrast-active .mat-radio-checked .mat-radio-inner-circle{border:solid 10px}.mat-radio-label-content{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto;display:inline-block;order:0;line-height:inherit;padding-left:8px;padding-right:0}[dir=rtl] .mat-radio-label-content{padding-right:8px;padding-left:0}.mat-radio-label-content.mat-radio-label-before{order:-1;padding-left:0;padding-right:8px}[dir=rtl] .mat-radio-label-content.mat-radio-label-before{padding-right:0;padding-left:8px}.mat-radio-disabled,.mat-radio-disabled .mat-radio-label{cursor:default}.mat-radio-button .mat-radio-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-radio-button .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple){opacity:.16}.mat-radio-persistent-ripple{width:100%;height:100%;transform:none}.mat-radio-container:hover .mat-radio-persistent-ripple{opacity:.04}.mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-persistent-ripple,.mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-persistent-ripple{opacity:.12}.mat-radio-persistent-ripple,.mat-radio-disabled .mat-radio-container:hover .mat-radio-persistent-ripple{opacity:0}@media(hover: none){.mat-radio-container:hover .mat-radio-persistent-ripple{display:none}}.mat-radio-input{bottom:0;left:50%}.cdk-high-contrast-active .mat-radio-disabled{opacity:.5}\n"]
            }]
    }], function () { return [{ type: MatRadioGroup, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [MAT_RADIO_GROUP]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"] }, { type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["UniqueSelectionDispatcher"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [MAT_RADIO_DEFAULT_OPTIONS]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
                args: ['tabindex']
            }] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatRadioModule {
}
MatRadioModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatRadioModule });
MatRadioModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MatRadioModule_Factory(t) { return new (t || MatRadioModule)(); }, imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatRadioModule, { declarations: function () { return [MatRadioGroup, MatRadioButton]; }, imports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]; }, exports: function () { return [MatRadioGroup, MatRadioButton, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRadioModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
                exports: [MatRadioGroup, MatRadioButton, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
                declarations: [MatRadioGroup, MatRadioButton]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=radio.js.map

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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-checkbox", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DeskListModalComponent_ng_container_8_div_22_Template_mat_checkbox_ngModelChange_6_listener($event) { const desk_r4 = ctx.$implicit; return desk_r4.bookable = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DeskListModalComponent_ng_container_8_div_22_Template_input_ngModelChange_8_listener($event) { const desk_r4 = ctx.$implicit; return desk_r4.group = $event; });
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
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "main", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "searchbar", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("modelChange", function DeskListModalComponent_ng_container_8_Template_searchbar_modelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.filter$.next($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Upload List ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DeskListModalComponent_ng_container_8_Template_input_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.upload($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeskListModalComponent_ng_container_8_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.download(); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeskListModalComponent_ng_container_8_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.save(); });
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

/***/ "ltfU":
/*!**************************************************************************************!*\
  !*** ../workplace/src/app/bookings/desk-flow/desk-flow-questions-modal.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DeskFlowQuestionsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeskFlowQuestionsModalComponent", function() { return DeskFlowQuestionsModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/radio */ "F1o0");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../libs/components/src/lib/icon/icon.component */ "ukpX");










function DeskFlowQuestionsModalComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "COVID-19 Questionnaire");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Have you travelled overseas within the last 14 days? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-radio-group", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-radio-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-radio-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Are you unwell or experiencing any cold or flu-like symptoms? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-radio-group", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-radio-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-radio-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Have you had contact with anyone with suspected COVID-19? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-radio-group", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-radio-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-radio-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "footer", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeskFlowQuestionsModalComponent_div_0_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "app-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", false);
} }
function DeskFlowQuestionsModalComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Your request to work from the office has been rejected based on your response to the compulsory Covid-19 questions. Please feel free to submit a new request when circumstances change in a way that changes your answer to the questions. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DeskFlowQuestionsModalComponent {
    constructor() {
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            travelled: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            unwell: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            contact: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    submit() {
        this.form.markAllAsTouched();
        if (!this.form.valid) {
            Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["notifyError"])('All the questions must be answered');
            return;
        }
        else if (Object.keys(this.form.value).find((key) => this.form.value[key] === true ||
            this.form.value[key] === 'true')) {
            this.failure = true;
            return;
        }
        this.event.emit({ reason: 'done' });
    }
}
DeskFlowQuestionsModalComponent.ɵfac = function DeskFlowQuestionsModalComponent_Factory(t) { return new (t || DeskFlowQuestionsModalComponent)(); };
DeskFlowQuestionsModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeskFlowQuestionsModalComponent, selectors: [["desk-flow-question"]], outputs: { event: "event" }, decls: 3, vars: 2, consts: [["class", "relative", 4, "ngIf", "ngIfElse"], ["fail_state", ""], [1, "relative"], [1, "p-4", "text-xl"], [1, "p-4", 3, "formGroup"], [1, "flex", "flex-col", "mb-4"], ["formControlName", "travelled", 1, "space-x-2"], [3, "value"], ["formControlName", "unwell", 1, "space-x-2"], [1, "flex", "flex-col"], ["formControlName", "contact", 1, "space-x-2"], [1, "flex", "justify-center", "items-center", "p-2"], ["mat-button", "", 3, "click"], ["close", "", "mat-icon-button", "", "mat-dialog-close", ""], ["className", "material-icons"], [1, "pt-8", "relative"], [1, "p-4"]], template: function DeskFlowQuestionsModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DeskFlowQuestionsModalComponent_div_0_Template, 34, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DeskFlowQuestionsModalComponent_ng_template_1_Template, 6, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.failure)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogClose"], _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__["IconComponent"]], styles: ["main[_ngcontent-%COMP%] {\n                width: 24rem;\n                max-width: calc(100vw - 4.5rem);\n            }\n\n            [close][_ngcontent-%COMP%] {\n                position: absolute;\n                top: 0.5rem;\n                right: 0.5rem;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeskFlowQuestionsModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'desk-flow-question',
                template: `
        <div *ngIf="!failure; else fail_state" class="relative">
            <h2 class="p-4 text-xl">COVID-19 Questionnaire</h2>
            <main class="p-4" [formGroup]="form">
                <div class="flex flex-col mb-4">
                    <label>
                        Have you travelled overseas within the last 14 days?
                    </label>
                    <mat-radio-group
                        formControlName="travelled"
                        class="space-x-2"
                    >
                        <mat-radio-button [value]="true">Yes</mat-radio-button>
                        <mat-radio-button [value]="false">No</mat-radio-button>
                    </mat-radio-group>
                </div>
                <div class="flex flex-col mb-4">
                    <label>
                        Are you unwell or experiencing any cold or flu-like
                        symptoms?
                    </label>
                    <mat-radio-group formControlName="unwell" class="space-x-2">
                        <mat-radio-button [value]="true">Yes</mat-radio-button>
                        <mat-radio-button [value]="false">No</mat-radio-button>
                    </mat-radio-group>
                </div>
                <div class="flex flex-col">
                    <label>
                        Have you had contact with anyone with suspected
                        COVID-19?
                    </label>
                    <mat-radio-group
                        formControlName="contact"
                        class="space-x-2"
                    >
                        <mat-radio-button [value]="true">Yes</mat-radio-button>
                        <mat-radio-button [value]="false">No</mat-radio-button>
                    </mat-radio-group>
                </div>
            </main>
            <footer class="flex justify-center items-center p-2">
                <button mat-button (click)="submit()">Submit</button>
            </footer>
            <button close mat-icon-button mat-dialog-close>
                <app-icon className="material-icons">close</app-icon>
            </button>
        </div>
        <ng-template #fail_state>
            <main class="pt-8 relative">
                <p class="p-4">
                    Your request to work from the office has been rejected based on
                    your response to the compulsory Covid-19 questions. Please feel
                    free to submit a new request when circumstances change in a way
                    that changes your answer to the questions.
                </p>
                <button close mat-icon-button mat-dialog-close>
                    <app-icon className="material-icons">close</app-icon>
                </button>
            </main>
        </ng-template>
    `,
                styles: [
                    `
            main {
                width: 24rem;
                max-width: calc(100vw - 4.5rem);
            }

            [close] {
                position: absolute;
                top: 0.5rem;
                right: 0.5rem;
            }
        `,
                ],
            }]
    }], null, { event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "pAWK":
/*!**************************************************************************!*\
  !*** ../workplace/src/app/bookings/desk-flow/desk-flow-state.service.ts ***!
  \**************************************************************************/
/*! exports provided: DeskFlowStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeskFlowStateService", function() { return DeskFlowStateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/ts-client */ "/It1");
/* harmony import */ var _user_interfaces_bookings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interfaces/bookings */ "05Mk");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_explore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @user-interfaces/explore */ "aAMe");
/* harmony import */ var _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @user-interfaces/organisation */ "dJst");
/* harmony import */ var _user_interfaces_users__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @user-interfaces/users */ "mjT4");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ "w8Fe");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _desk_flow_confirm_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./desk-flow-confirm-modal.component */ "5MZz");
/* harmony import */ var _desk_flow_questions_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./desk-flow-questions-modal.component */ "ltfU");





















class DeskFlowStateService extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_5__["BaseClass"] {
    constructor(_state, _bookings, _staff, _settings, _org, _dialog) {
        super();
        this._state = _state;
        this._bookings = _bookings;
        this._staff = _staff;
        this._settings = _settings;
        this._org = _org;
        this._dialog = _dialog;
        this._options = new rxjs__WEBPACK_IMPORTED_MODULE_10__["BehaviorSubject"]({
            date: new Date().valueOf(),
            zones: [],
        });
        this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_10__["BehaviorSubject"](false);
        this.options = this._options.asObservable();
        this.loading = this._loading.asObservable();
        this.desk_list = this._options.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])((opts) => {
            const { zones } = opts;
            if (zones.length) {
                const level = this._org.levelWithID(zones);
                if (level) {
                    return Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["showMetadata"])(level.id, { name: 'desks' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])((m) => m.details.map((i) => new _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_7__["Desk"](Object.assign(Object.assign({}, i), { zone: level })))));
                }
                return Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["listChildMetadata"])(zones[0], { name: 'desks' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])((d) => d.reduce((l, m) => l.concat(m.metadata.desks.details instanceof Array
                    ? m.metadata.desks.details.map((i) => new _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_7__["Desk"](Object.assign(Object.assign({}, i), { zone: m.zone })))
                    : []), [])));
            }
            return Promise.resolve([]);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["shareReplay"])());
        this.desk_availability = Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["combineLatest"])([
            this._options,
            this.desk_list,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])((details) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this._loading.next(true);
            const [options, desks] = details;
            const date = Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["startOfDay"])(options.date ? new Date(options.date) : new Date());
            return [
                desks,
                yield this._bookings
                    .query({
                    period_start: Math.floor(date.valueOf() / 1000),
                    period_end: Math.floor(Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["endOfDay"])(date).valueOf() / 1000),
                    type: 'desk',
                    zone: (options.zones || [])[0],
                })
                    .catch((_) => []),
            ];
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])((details) => {
            const [desks, bookings] = details;
            const active_bookings = bookings.filter((bkn) => bkn.status !== 'declined');
            const user_groups = this._staff.current.groups;
            const bookable_desks = desks.filter((i) => i.bookable
                && user_groups.includes((i.group || '').toLowerCase()));
            this._loading.next(false);
            return bookable_desks.filter((desk) => !active_bookings.find((bkn) => bkn.asset_id === desk.id));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["shareReplay"])());
        this.subscription('level', this._state.level.subscribe((lvl) => lvl ? this.setOptions({ zones: [lvl.id] }) : ''));
        this.subscription('availability', Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["combineLatest"])([this.desk_availability, this.desk_list])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["debounceTime"])(500))
            .subscribe((details) => this.handleDeskAvailability(details)));
    }
    setOptions(state) {
        this._options.next(Object.assign(Object.assign({}, this._options.getValue()), state));
    }
    setHost(host) {
        this._host = host;
    }
    bookDesk(desk, reason = '') {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this._host) {
                return Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_5__["notifyError"])('A host needs to be set before booking a desk.');
            }
            const level = this._org.levelWithID(desk.zone instanceof Array ? desk.zone : [(_a = desk.zone) === null || _a === void 0 ? void 0 : _a.id]);
            let ref = this._dialog.open(_desk_flow_questions_modal_component__WEBPACK_IMPORTED_MODULE_13__["DeskFlowQuestionsModalComponent"]);
            let success = yield Promise.race([
                ref.componentInstance.event
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["first"])((_) => _.reason === 'done'))
                    .toPromise(),
                ref
                    .afterClosed()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])((_) => null))
                    .toPromise(),
            ]);
            if (!success)
                return;
            ref.close();
            const options = this._options.getValue();
            ref = this._dialog.open(_desk_flow_confirm_modal_component__WEBPACK_IMPORTED_MODULE_12__["DeskFlowConfirmModalComponent"], {
                data: {
                    desk,
                    date: options.date || new Date().valueOf(),
                    reason,
                    level,
                },
            });
            success = yield Promise.race([
                ref.componentInstance.event
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["first"])((_) => _.reason === 'done'))
                    .toPromise(),
                ref
                    .afterClosed()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])((_) => null))
                    .toPromise(),
            ]);
            if (!success)
                return;
            yield this.makeDeskBooking(desk, options.date || new Date().valueOf(), reason);
            Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_5__["notifySuccess"])('Successfully booked desk');
            ref.close();
        });
    }
    makeDeskBooking(desk, date, reason) {
        var _a, _b, _c, _d;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const location = `${(_a = desk.zone) === null || _a === void 0 ? void 0 : _a.name}-${desk.id}`;
            const options = this._options.getValue();
            const level = this._org.levelWithID(desk.zone instanceof Array ? desk.zone : [(_b = desk.zone) === null || _b === void 0 ? void 0 : _b.id]);
            const zones = ((_c = desk.zone) === null || _c === void 0 ? void 0 : _c.id) ? [(_d = desk.zone) === null || _d === void 0 ? void 0 : _d.id, (level === null || level === void 0 ? void 0 : level.parent_id) || options.zones[0]]
                : [(level === null || level === void 0 ? void 0 : level.parent_id) || options.zones[0]];
            const booking_data = {
                booking_start: Math.floor(Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["startOfDay"])(options.date).valueOf() / 1000),
                user_id: this._host.id,
                user_name: this._host.name,
                user_email: this._host.email,
                booking_end: Math.floor(Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["endOfDay"])(options.date).valueOf() / 1000),
                asset_id: desk.id,
                title: reason,
                description: location,
                zones,
                booking_type: 'desk',
                extension_data: {
                    group: desk.group,
                },
            };
            return this._bookings.save(booking_data);
        });
    }
    handleDeskAvailability(details) {
        const [in_use, desks] = details;
        const style_map = {};
        const actions = [];
        const colours = this._settings.get('app.explore.colors') || {};
        for (const desk of desks) {
            const status = !desk.bookable
                ? 'not-bookable'
                : !in_use.find((d) => d.id === desk.id)
                    ? 'free'
                    : 'busy';
            style_map[`#${desk.id}`] = {
                fill: colours[`desk-${status}`] ||
                    colours[`${status}`] ||
                    _user_interfaces_explore__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_COLOURS"][`${status}`],
                opacity: 0.6,
            };
            if (status === 'free') {
                actions.push({
                    id: desk.id,
                    action: 'click',
                    callback: () => this.bookDesk(desk),
                });
                actions.push({
                    id: desk.id,
                    action: 'touchend',
                    callback: () => this.bookDesk(desk),
                });
            }
        }
        this._state.setStyles('desks', style_map);
        this._state.setActions('desks', actions);
        console.log('Actions:', actions);
    }
}
DeskFlowStateService.ɵfac = function DeskFlowStateService_Factory(t) { return new (t || DeskFlowStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_interfaces_explore__WEBPACK_IMPORTED_MODULE_6__["ExploreStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_interfaces_bookings__WEBPACK_IMPORTED_MODULE_4__["BookingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_interfaces_users__WEBPACK_IMPORTED_MODULE_8__["StaffService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_interfaces_common__WEBPACK_IMPORTED_MODULE_5__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_7__["OrganisationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
DeskFlowStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DeskFlowStateService, factory: DeskFlowStateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DeskFlowStateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _user_interfaces_explore__WEBPACK_IMPORTED_MODULE_6__["ExploreStateService"] }, { type: _user_interfaces_bookings__WEBPACK_IMPORTED_MODULE_4__["BookingsService"] }, { type: _user_interfaces_users__WEBPACK_IMPORTED_MODULE_8__["StaffService"] }, { type: _user_interfaces_common__WEBPACK_IMPORTED_MODULE_5__["SettingsService"] }, { type: _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_7__["OrganisationService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, null); })();


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ "Jb3d");
/* harmony import */ var _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon/icon.component */ "ukpX");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _desk_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./desk-details.component */ "aWu5");
/* harmony import */ var _desk_map_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./desk-map-view.component */ "0Gjq");










function DeskListingsComponent_ng_container_0_ng_container_31_desk_details_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "desk-details", 20);
} if (rf & 2) {
    const desk_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("desk", desk_r8);
} }
function DeskListingsComponent_ng_container_0_ng_container_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DeskListingsComponent_ng_container_0_ng_container_31_desk_details_1_Template, 1, 1, "desk-details", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r6.bookings));
} }
function DeskListingsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Person");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "LoS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Desk");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Approver");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Checked In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, DeskListingsComponent_ng_container_0_ng_container_31_Template, 3, 3, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    let tmp_0_0 = null;
    let tmp_1_0 = null;
    let tmp_3_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Requests: ", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, ctx_r0.bookings)) == null ? null : tmp_0_0.length) || "0", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Free Desks: ", (((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, ctx_r0.desks)) == null ? null : tmp_1_0.length) || 0) - (((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 9, ctx_r0.bookings)) == null ? null : tmp_1_0.length) || 0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 11, ctx_r0.bookings)) == null ? null : tmp_3_0.length)("ngIfElse", _r1);
} }
function DeskListingsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " There are no desks for the currently selected date. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DeskListingsComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "desk-map-view");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DeskListingsComponent {
    constructor(_state) {
        this._state = _state;
        this.filters = this._state.filters;
        this.desks = this._state.desks;
        this.bookings = this._state.bookings;
        this.rejectAll = () => this._state.rejectAllDesks();
        this.updateDesks = () => this._state.updateDesks();
    }
}
DeskListingsComponent.ɵfac = function DeskListingsComponent_Factory(t) { return new (t || DeskListingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_desks_state_service__WEBPACK_IMPORTED_MODULE_1__["DesksStateService"])); };
DeskListingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeskListingsComponent, selectors: [["desk-listings"]], decls: 20, vars: 4, consts: [[4, "ngIf", "ngIfElse"], ["empty_state", ""], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center"], ["className", "material-icons"], [1, "pl-2"], ["map_state", ""], ["details", "", 1, "w-full", "bg-gray-900", "text-white", "flex", "items-center", "px-2"], [1, "flex-1", "w-0"], [1, "p-2"], [1, "px-8"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [1, "w-full", "flex-1", "text-sm"], [1, "w-full", "flex", "items-center", "bg-white", "border-b", "border-gray-500", "p-2", "font-medium"], [1, "w-32", "p-2"], [1, "w-24", "p-2"], ["flex", "", 1, "p-2", "flex-1"], [1, "w-full", "flex-1", "overflow-auto"], [3, "desk", 4, "ngFor", "ngForOf"], [3, "desk"], [1, "h-full", "w-full", "flex", "items-center", "justify-center"], [1, "p-8"], [1, "absolute", "inset-0"]], template: function DeskListingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DeskListingsComponent_ng_container_0_Template, 33, 13, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DeskListingsComponent_ng_template_2_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeskListingsComponent_Template_button_click_6_listener() { return ctx.updateDesks(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Edit Desks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeskListingsComponent_Template_button_click_12_listener() { return ctx.rejectAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "event_busy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Reject All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DeskListingsComponent_ng_template_18_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        let tmp_0_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.filters)) == null ? null : tmp_0_0.show_map))("ngIfElse", _r4);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuItem"], _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__["IconComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _desk_details_component__WEBPACK_IMPORTED_MODULE_6__["DeskDetailsComponent"], _desk_map_view_component__WEBPACK_IMPORTED_MODULE_7__["DeskMapViewComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n                position: relative;\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n                overflow: hidden;\n            }\n\n            [details][_ngcontent-%COMP%] {\n                height: 3.5rem;\n            }\n\n            [flex][_ngcontent-%COMP%] {\n                min-width: 8rem;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeskListingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'desk-listings',
                template: `
        <ng-container *ngIf="!(filters | async)?.show_map; else map_state">
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
        </ng-container>
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
        <ng-template #map_state>
            <div  class="absolute inset-0"><desk-map-view></desk-map-view></div>
        </ng-template>
    `,
                styles: [
                    `
            :host {
                position: relative;
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