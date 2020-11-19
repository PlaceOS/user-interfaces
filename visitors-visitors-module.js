(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visitors-visitors-module"],{

/***/ "/snB":
/*!********************************************************!*\
  !*** ./src/app/visitors/visitor-listings.component.ts ***!
  \********************************************************/
/*! exports provided: VisitorListingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorListingsComponent", function() { return VisitorListingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _visitors_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visitors-state.service */ "zhgJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _visitor_event_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visitor-event.component */ "oDTm");






function VisitorListingsComponent_ng_container_15_visitor_event_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "visitor-event", 13);
} if (rf & 2) {
    const event_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", event_r4);
} }
function VisitorListingsComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VisitorListingsComponent_ng_container_15_visitor_event_1_Template, 1, 1, "visitor-event", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r0.bookings))("ngForTrackBy", ctx_r0.trackByFn);
} }
function VisitorListingsComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " There are no visitors for the currently selected date. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class VisitorListingsComponent {
    constructor(_state) {
        this._state = _state;
        this.bookings = this._state.filtered_events;
    }
    /* istanbul ignore next */
    trackByFn(index, event) {
        return event ? event.id : undefined;
    }
}
VisitorListingsComponent.ɵfac = function VisitorListingsComponent_Factory(t) { return new (t || VisitorListingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_visitors_state_service__WEBPACK_IMPORTED_MODULE_1__["VisitorsStateService"])); };
VisitorListingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VisitorListingsComponent, selectors: [["visitor-listings"]], decls: 19, vars: 4, consts: [[1, "w-full", "flex-1", "text-sm"], [1, "w-full", "flex", "items-center", "bg-white", "border-b", "border-gray-500", "p-2", "font-medium"], [1, "w-12", "p-2"], [1, "w-24", "p-2"], [1, "w-48", "p-2"], ["flex", "", 1, "p-2", "flex-1"], [1, "w-64", "p-2"], [1, "w-32", "p-2"], [1, "w-16", "p-2"], [1, "w-full", "flex-1", "overflow-auto"], [4, "ngIf", "ngIfElse"], ["empty_state", ""], [3, "event", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "event"], [1, "h-full", "w-full", "flex", "items-center", "justify-center"], [1, "p-8"]], template: function VisitorListingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Host");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, VisitorListingsComponent_ng_container_15_Template, 3, 4, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, VisitorListingsComponent_ng_template_17_Template, 3, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        var tmp_0_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 2, ctx.bookings)) == null ? null : tmp_0_0.length)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _visitor_event_component__WEBPACK_IMPORTED_MODULE_3__["VisitorEventComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisitorListingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'visitor-listings',
                template: `
        <div class="w-full flex-1 text-sm">
            <div
                class="w-full flex items-center bg-white border-b border-gray-500 p-2 font-medium"
            >
                <div class="w-12 p-2"></div>
                <div class="w-24 p-2">Time</div>
                <div class="w-48 p-2">Host</div>
                <div flex class="p-2 flex-1">Title</div>
                <div class="w-64 p-2">Location</div>
                <div class="w-32 p-2">Actions</div>
                <div class="w-16 p-2"></div>
            </div>
            <div class="w-full flex-1 overflow-auto">
                <ng-container
                    *ngIf="(bookings | async)?.length; else empty_state"
                >
                    <visitor-event
                        *ngFor="let event of bookings | async; trackBy: trackByFn"
                        [event]="event"
                    ></visitor-event>
                </ng-container>
            </div>
        </div>
        <ng-template #empty_state>
            <div class="h-full w-full flex items-center justify-center">
                <p class="p-8">
                    There are no visitors for the currently selected date.
                </p>
            </div>
        </ng-template>
    `,
                styles: [``],
            }]
    }], function () { return [{ type: _visitors_state_service__WEBPACK_IMPORTED_MODULE_1__["VisitorsStateService"] }]; }, null); })();


/***/ }),

/***/ "2sop":
/*!*********************************************!*\
  !*** ./src/app/visitors/visitors.module.ts ***!
  \*********************************************/
/*! exports provided: VisitorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorsModule", function() { return VisitorsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/ui.module */ "oRDy");
/* harmony import */ var _visitors_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visitors.component */ "ZRUe");
/* harmony import */ var _visitors_topbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visitors-topbar.component */ "G9On");
/* harmony import */ var _visitor_listings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./visitor-listings.component */ "/snB");
/* harmony import */ var _visitor_event_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./visitor-event.component */ "oDTm");
/* harmony import */ var _visitor_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./visitor-details.component */ "xH1y");












const ROUTES = [{ path: '', component: _visitors_component__WEBPACK_IMPORTED_MODULE_5__["VisitorsComponent"] }];
class VisitorsModule {
}
VisitorsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VisitorsModule });
VisitorsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VisitorsModule_Factory(t) { return new (t || VisitorsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ui_ui_module__WEBPACK_IMPORTED_MODULE_4__["UIModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(ROUTES),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VisitorsModule, { declarations: [_visitors_component__WEBPACK_IMPORTED_MODULE_5__["VisitorsComponent"],
        _visitors_topbar_component__WEBPACK_IMPORTED_MODULE_6__["VisitorsTopbarComponent"],
        _visitor_listings_component__WEBPACK_IMPORTED_MODULE_7__["VisitorListingsComponent"],
        _visitor_event_component__WEBPACK_IMPORTED_MODULE_8__["VisitorEventComponent"],
        _visitor_details_component__WEBPACK_IMPORTED_MODULE_9__["VisitorDetailsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ui_ui_module__WEBPACK_IMPORTED_MODULE_4__["UIModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisitorsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _visitors_component__WEBPACK_IMPORTED_MODULE_5__["VisitorsComponent"],
                    _visitors_topbar_component__WEBPACK_IMPORTED_MODULE_6__["VisitorsTopbarComponent"],
                    _visitor_listings_component__WEBPACK_IMPORTED_MODULE_7__["VisitorListingsComponent"],
                    _visitor_event_component__WEBPACK_IMPORTED_MODULE_8__["VisitorEventComponent"],
                    _visitor_details_component__WEBPACK_IMPORTED_MODULE_9__["VisitorDetailsComponent"]
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

/***/ "G9On":
/*!*******************************************************!*\
  !*** ./src/app/visitors/visitors-topbar.component.ts ***!
  \*******************************************************/
/*! exports provided: VisitorsTopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorsTopbarComponent", function() { return VisitorsTopbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @user-interfaces/organisation */ "dJst");
/* harmony import */ var _visitors_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visitors-state.service */ "zhgJ");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "R7+U");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slide-toggle */ "k8N0");
/* harmony import */ var _ui_searchbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ui/searchbar.component */ "wobF");
/* harmony import */ var _ui_date_options_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ui/date-options.component */ "wrRZ");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "mFH5");



















function VisitorsTopbarComponent_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const level_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", level_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", level_r1.display_name || level_r1.name, " ");
} }
class VisitorsTopbarComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["BaseClass"] {
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
VisitorsTopbarComponent.ɵfac = function VisitorsTopbarComponent_Factory(t) { return new (t || VisitorsTopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_visitors_state_service__WEBPACK_IMPORTED_MODULE_6__["VisitorsStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_5__["OrganisationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
VisitorsTopbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VisitorsTopbarComponent, selectors: [["visitors-topbar"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 15, vars: 10, consts: [["appearance", "outline"], ["multiple", "", "placeholder", "All Levels", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "m-2", 3, "ngModel", "ngModelChange"], [1, "text-xs"], [1, "flex-1", "w-2"], [1, "mr-2", 3, "modelChange"], [3, "dateChange"], [3, "value"]], template: function VisitorsTopbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VisitorsTopbarComponent_Template_mat_select_ngModelChange_1_listener($event) { return ctx.zones = $event; })("ngModelChange", function VisitorsTopbarComponent_Template_mat_select_ngModelChange_1_listener($event) { return ctx.updateZones($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VisitorsTopbarComponent_mat_option_2_Template, 2, 2, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-slide-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VisitorsTopbarComponent_Template_mat_slide_toggle_ngModelChange_4_listener($event) { return ctx.setFilters({ all_bookings: $event }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "All Bookings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-slide-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VisitorsTopbarComponent_Template_mat_slide_toggle_ngModelChange_8_listener($event) { return ctx.setFilters({ show_week: $event }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Show Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "searchbar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("modelChange", function VisitorsTopbarComponent_Template_searchbar_modelChange_13_listener($event) { return ctx.setSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "date-options", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dateChange", function VisitorsTopbarComponent_Template_date_options_dateChange_14_listener($event) { return ctx.setDate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_2_0 = null;
        var tmp_3_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.zones);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, ctx.levels));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 6, ctx.filters)) == null ? null : tmp_2_0.all_bookings);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 8, ctx.filters)) == null ? null : tmp_3_0.show_week);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggle"], _ui_searchbar_component__WEBPACK_IMPORTED_MODULE_12__["SearchbarComponent"], _ui_date_options_component__WEBPACK_IMPORTED_MODULE_13__["DateOptionsComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n                display: flex;\n                align-items: center;\n                background-color: #fff;\n                height: 5em;\n                padding: 0 2em;\n                border-bottom: 1px solid #ccc;\n            }\n\n            [_nghost-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n                margin-left: 0.5rem;\n            }\n\n            mat-form-field[_ngcontent-%COMP%] {\n                height: 3.25em;\n                width: 8em;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VisitorsTopbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'visitors-topbar',
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
            [ngModel]="(filters | async)?.all_bookings"
            (ngModelChange)="setFilters({ all_bookings: $event })"
            ><div class="text-xs">All Bookings</div></mat-slide-toggle
        >
        <mat-slide-toggle
            class="m-2"
            [ngModel]="(filters | async)?.show_week"
            (ngModelChange)="setFilters({ show_week: $event })"
            ><div class="text-xs">Show Week</div></mat-slide-toggle
        >
        <div class="flex-1 w-2"></div>
        <searchbar class="mr-2" (modelChange)="setSearch($event)"></searchbar>
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
    }], function () { return [{ type: _visitors_state_service__WEBPACK_IMPORTED_MODULE_6__["VisitorsStateService"] }, { type: _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_5__["OrganisationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "ZRUe":
/*!************************************************!*\
  !*** ./src/app/visitors/visitors.component.ts ***!
  \************************************************/
/*! exports provided: VisitorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorsComponent", function() { return VisitorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _visitors_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visitors-state.service */ "zhgJ");
/* harmony import */ var _ui_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/sidebar.component */ "UfDH");
/* harmony import */ var _visitors_topbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visitors-topbar.component */ "G9On");
/* harmony import */ var _visitor_listings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./visitor-listings.component */ "/snB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ "66mq");









function VisitorsComponent_mat_progress_bar_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 4);
} }
class VisitorsComponent {
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
VisitorsComponent.ɵfac = function VisitorsComponent_Factory(t) { return new (t || VisitorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_visitors_state_service__WEBPACK_IMPORTED_MODULE_1__["VisitorsStateService"])); };
VisitorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VisitorsComponent, selectors: [["app-visitors"]], decls: 6, vars: 3, consts: [[1, "relative", "overflow-hidden", "flex-1", "flex", "flex-col"], [1, "w-full"], [1, "w-full", "flex-1", "h-0"], ["class", "w-full", "mode", "indeterminate", 4, "ngIf"], ["mode", "indeterminate", 1, "w-full"]], template: function VisitorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "visitors-topbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "visitor-listings", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VisitorsComponent_mat_progress_bar_4_Template, 1, 0, "mat-progress-bar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, ctx.loading));
    } }, directives: [_ui_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _visitors_topbar_component__WEBPACK_IMPORTED_MODULE_3__["VisitorsTopbarComponent"], _visitor_listings_component__WEBPACK_IMPORTED_MODULE_4__["VisitorListingsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBar"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n                display: flex;\n                height: 100%;\n                width: 100%;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisitorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-visitors',
                template: `
        <sidebar></sidebar>
        <main class="relative overflow-hidden flex-1 flex flex-col">
            <visitors-topbar class="w-full"></visitors-topbar>
            <visitor-listings class="w-full flex-1 h-0"></visitor-listings>
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
        `
                ],
            }]
    }], function () { return [{ type: _visitors_state_service__WEBPACK_IMPORTED_MODULE_1__["VisitorsStateService"] }]; }, null); })();


/***/ }),

/***/ "oDTm":
/*!*****************************************************!*\
  !*** ./src/app/visitors/visitor-event.component.ts ***!
  \*****************************************************/
/*! exports provided: VisitorEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorEventComponent", function() { return VisitorEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @user-interfaces/events */ "eZII");
/* harmony import */ var _visitors_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./visitors-state.service */ "zhgJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _libs_components_src_lib_action_icon_action_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/action-icon/action-icon.component */ "ZnXB");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ "Y2X+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon/icon.component */ "ukpX");
/* harmony import */ var _visitor_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./visitor-details.component */ "xH1y");













function VisitorEventComponent_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "event");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function VisitorEventComponent_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function VisitorEventComponent_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function VisitorEventComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "visitor-details", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("eventChange", function VisitorEventComponent_div_27_Template_visitor_details_eventChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.event = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visitor", user_r4)("event", ctx_r3.event);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", !ctx_r3.matches[user_r4.email]);
} }
class VisitorEventComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["BaseClass"] {
    constructor(_state) {
        super();
        this._state = _state;
        this.matches = {};
        this.filters = this._state.filters;
        this.checkinGuests = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = 'checkin';
            this.event = yield this._state
                .checkAllGuestsIn(this.event)
                .catch((e) => this.event);
            this.loading = '';
        });
        this.checkoutGuests = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = 'checkout';
            this.event = yield this._state
                .checkAllGuestsOut(this.event)
                .catch((e) => this.event);
            this.loading = '';
        });
    }
    get guestCount() {
        var _a;
        return ((_a = this.event) === null || _a === void 0 ? void 0 : _a.attendees.reduce((c, u) => c + (u.is_external && !u.organizer ? 1 : 0), 0)) || 0;
    }
    get has_search() {
        return this._state.search;
    }
    ngOnInit() {
        this.subscription('events', this._state.filtered_events.subscribe(() => this.updateMatches()));
    }
    updateMatches() {
        this.matches = {};
        const filter = (this._state.search || '').toLowerCase();
        for (const user of this.event.attendees) {
            this.matches[user.email] =
                !filter ||
                    user.email.toLowerCase().includes(filter) ||
                    user.name.toLowerCase().includes(filter);
        }
    }
}
VisitorEventComponent.ɵfac = function VisitorEventComponent_Factory(t) { return new (t || VisitorEventComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_visitors_state_service__WEBPACK_IMPORTED_MODULE_4__["VisitorsStateService"])); };
VisitorEventComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VisitorEventComponent, selectors: [["visitor-event"]], inputs: { event: "event" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 28, vars: 25, consts: [[1, "flex", "items-center", "px-2", "bg-gray-100"], [1, "w-12", "text-lg", "flex", "justify-center"], ["class", "p-2 rounded-full material-icons bg-gray-400", 4, "ngIf"], [1, "w-24", "p-2"], [1, "w-48", "p-2"], ["flex", "", 1, "p-2", "flex-1"], [1, "w-64", "p-2", "truncate"], [1, "w-32", "p-2", "flex", "items-center", "justify-end"], ["matTooltip", "Checkin All Guests", "className", "material-icons", "content", "event_available", 3, "loading", "disabled", "click"], ["matTooltip", "Checkout All Guests", "className", "material-icons", "content", "event_busy", 3, "loading", "disabled", "click"], ["mat-icon-button", "", "matTooltip", "Email Host", 3, "href"], ["className", "material-icons"], [1, "w-16", "p-2"], ["mat-icon-button", "", 3, "disabled", "matTooltip", "click"], ["attendees", "", 1, "w-full", "overflow-hidden", "relative", "border-b", "border-gray-300"], ["bar", "", 1, "absolute", "top-0", "bg-gray-400", "z-10"], ["visitor", "", "class", "relative w-full pl-12 bg-gray-200", 4, "ngFor", "ngForOf"], [1, "p-2", "rounded-full", "material-icons", "bg-gray-400"], ["visitor", "", 1, "relative", "w-full", "pl-12", "bg-gray-200"], ["l-bar", "", 1, "absolute", "bg-gray-400"], [3, "visitor", "event", "eventChange"]], template: function VisitorEventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VisitorEventComponent_i_2_Template, 2, 0, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, VisitorEventComponent_i_3_Template, 2, 0, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, VisitorEventComponent_i_4_Template, 2, 0, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "action-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitorEventComponent_Template_action_icon_click_16_listener() { return ctx.checkinGuests(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "action-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitorEventComponent_Template_action_icon_click_17_listener() { return ctx.checkoutGuests(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "app-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitorEventComponent_Template_button_click_22_listener() { return ctx.show_attendees = !ctx.show_attendees; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "app-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, VisitorEventComponent_div_27_Template, 3, 3, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_3_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.event == null ? null : ctx.event.status) !== "cancelled" && (ctx.event == null ? null : ctx.event.state) !== "done");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.event == null ? null : ctx.event.status) === "cancelled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.event == null ? null : ctx.event.state) === "done" && (ctx.event == null ? null : ctx.event.status) !== "cancelled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 20, ctx.event == null ? null : ctx.event.date, ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 23, ctx.filters)) == null ? null : tmp_3_0.show_week) ? "MMM d, h:mm a" : "shortTime"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx.event == null ? null : ctx.event.organiser == null ? null : ctx.event.organiser.name) || (ctx.event == null ? null : ctx.event.organiser == null ? null : ctx.event.organiser.email), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.event == null ? null : ctx.event.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.event == null ? null : ctx.event.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", ctx.loading === "checkin")("disabled", ctx.guestCount <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", ctx.loading === "checkout")("disabled", ctx.guestCount <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "mailto:" + (ctx.event == null ? null : ctx.event.organiser == null ? null : ctx.event.organiser.email), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !(ctx.event == null ? null : ctx.event.attendees == null ? null : ctx.event.attendees.length))("matTooltip", ctx.show_attendees || ctx.has_search ? "Hide Attendees" : "Show Attendees");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.show_attendees ? "keyboard_arrow_down" : "keyboard_arrow_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", !ctx.show_attendees && !ctx.has_search ? "0rem" : ctx.event.attendees.length * 3.5 + "rem");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", "calc(" + ((ctx.event.attendees.length - 1) * 3.5 + 1.75) + "rem + 1px)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.event.attendees);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _libs_components_src_lib_action_icon_action_icon_component__WEBPACK_IMPORTED_MODULE_6__["ActionIconComponent"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltip"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_9__["IconComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _visitor_details_component__WEBPACK_IMPORTED_MODULE_10__["VisitorDetailsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n                width: 100%;\n            }\n\n            visitor-details[_ngcontent-%COMP%] {\n                transition: opacity 200ms;\n            }\n\n            [attendees][_ngcontent-%COMP%] {\n                transition: height 200ms;\n            }\n\n            [visitor][_ngcontent-%COMP%] {\n                height: 3.5rem;\n            }\n\n            [bar][_ngcontent-%COMP%] {\n                width: 2px;\n                left: calc(2rem - 1px);\n            }\n\n            [l-bar][_ngcontent-%COMP%] {\n                height: 2px;\n                left: 2rem;\n                top: calc(50% - 1px);\n                width: 1rem;\n            }\n\n            [disabled=\"true\"][_ngcontent-%COMP%] {\n                opacity: 0.35;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VisitorEventComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'visitor-event',
                template: `
        <div class="flex items-center px-2 bg-gray-100">
            <div class="w-12 text-lg flex justify-center">
                <i class="p-2 rounded-full material-icons bg-gray-400" *ngIf="event?.status !== 'cancelled' && event?.state !== 'done'">event</i>
                <i class="p-2 rounded-full material-icons bg-gray-400" *ngIf="event?.status === 'cancelled'">close</i>
                <i class="p-2 rounded-full material-icons bg-gray-400" *ngIf="event?.state === 'done' && event?.status !== 'cancelled'">done</i>
            </div>
            <div class="w-24 p-2">{{ event?.date | date:(filters | async)?.show_week ? 'MMM d, h:mm a' : 'shortTime' }}</div>
            <div class="w-48 p-2">
                {{ event?.organiser?.name || event?.organiser?.email }}
            </div>
            <div flex class="p-2 flex-1">{{ event?.title }}</div>
            <div class="w-64 p-2 truncate">{{ event?.location }}</div>
            <div class="w-32 p-2 flex items-center justify-end">
                <action-icon
                    matTooltip="Checkin All Guests"
                    [loading]="loading === 'checkin'"
                    [disabled]="guestCount <= 0"
                    className="material-icons"
                    content="event_available"
                    (click)="checkinGuests()"
                >
                </action-icon>
                <action-icon
                    matTooltip="Checkout All Guests"
                    [loading]="loading === 'checkout'"
                    [disabled]="guestCount <= 0"
                    className="material-icons"
                    content="event_busy"
                    (click)="checkoutGuests()"
                >
                </action-icon>
                <a
                    mat-icon-button
                    [href]="'mailto:' + event?.organiser?.email"
                    matTooltip="Email Host"
                >
                    <app-icon className="material-icons">email</app-icon>
                </a>
            </div>
            <div class="w-16 p-2">
                <button
                    mat-icon-button
                    (click)="show_attendees = !show_attendees"
                    [disabled]="!event?.attendees?.length"
                    [matTooltip]="
                        show_attendees || has_search
                            ? 'Hide Attendees'
                            : 'Show Attendees'
                    "
                >
                    <app-icon className="material-icons">{{
                        show_attendees
                            ? 'keyboard_arrow_down'
                            : 'keyboard_arrow_right'
                    }}</app-icon>
                </button>
            </div>
        </div>
        <div
            attendees
            class="w-full overflow-hidden relative border-b border-gray-300"
            [style.height]="
                !show_attendees && !has_search
                    ? '0rem'
                    : event.attendees.length * 3.5 + 'rem'
            "
        >
            <div
                bar
                class="absolute top-0 bg-gray-400 z-10"
                [style.height]="
                    'calc(' +
                    ((event.attendees.length - 1) * 3.5 + 1.75) +
                    'rem + 1px)'
                "
            ></div>
            <div
                visitor
                class="relative w-full pl-12 bg-gray-200"
                *ngFor="let user of event.attendees"
            >
                <div l-bar class="absolute bg-gray-400"></div>
                <visitor-details
                    [attr.disabled]="!matches[user.email]"
                    [visitor]="user"
                    [(event)]="event"
                ></visitor-details>
            </div>
        </div>
    `,
                styles: [
                    `
            :host {
                width: 100%;
            }

            visitor-details {
                transition: opacity 200ms;
            }

            [attendees] {
                transition: height 200ms;
            }

            [visitor] {
                height: 3.5rem;
            }

            [bar] {
                width: 2px;
                left: calc(2rem - 1px);
            }

            [l-bar] {
                height: 2px;
                left: 2rem;
                top: calc(50% - 1px);
                width: 1rem;
            }

            [disabled="true"] {
                opacity: 0.35;
            }
        `,
                ],
            }]
    }], function () { return [{ type: _visitors_state_service__WEBPACK_IMPORTED_MODULE_4__["VisitorsStateService"] }]; }, { event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "xH1y":
/*!*******************************************************!*\
  !*** ./src/app/visitors/visitor-details.component.ts ***!
  \*******************************************************/
/*! exports provided: VisitorDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorDetailsComponent", function() { return VisitorDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @user-interfaces/events */ "eZII");
/* harmony import */ var _user_interfaces_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interfaces/users */ "mjT4");
/* harmony import */ var _visitors_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visitors-state.service */ "zhgJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _libs_components_src_lib_action_icon_action_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/action-icon/action-icon.component */ "ZnXB");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "Y2X+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon/icon.component */ "ukpX");














function VisitorDetailsComponent_ng_container_1_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "face");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function VisitorDetailsComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VisitorDetailsComponent_ng_container_1_i_1_Template, 2, 0, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r0.visitor == null ? null : ctx_r0.visitor.checked_in))("ngIfElse", _r1);
} }
function VisitorDetailsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function VisitorDetailsComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "assignment_ind");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class VisitorDetailsComponent {
    constructor(_state, _events) {
        this._state = _state;
        this._events = _events;
        this.eventChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.checkin = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = 'checkin';
            this.event = yield this._state
                .checkGuestIn(this.event, this.visitor)
                .catch((e) => this.event);
            this.eventChange.emit(this.event);
            this.loading = '';
        });
        this.toggleRemote = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var _a;
            this.loading = 'remote';
            const remote_list = this.event.remote.filter(e => e !== this.visitor.email);
            if (!this.remote) {
                remote_list.push(this.visitor.email);
            }
            const new_item = new _user_interfaces_events__WEBPACK_IMPORTED_MODULE_3__["CalendarEvent"](Object.assign(Object.assign({}, (this.event.toJSON())), { remote: remote_list })).toJSON();
            console.log('Remote:', remote_list, new_item);
            this.event = yield this._events
                .update(this.event.id, new_item, { system_id: (_a = this.event.system) === null || _a === void 0 ? void 0 : _a.id }, 'patch')
                .catch((e) => {
                Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["notifyError"])(`Error setting visitor status. Error: ${e.statusText || e.message || e}`);
                return this.event;
            });
            this.eventChange.emit(this.event);
            this.loading = '';
        });
        this.checkout = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = 'checkout';
            this.event = yield this._state
                .checkGuestOut(this.event, this.visitor)
                .catch((e) => this.event);
            this.eventChange.emit(this.event);
            this.loading = '';
        });
    }
    get remote() {
        var _a;
        return !!((_a = this.event) === null || _a === void 0 ? void 0 : _a.remote.find(e => { var _a; return e === ((_a = this.visitor) === null || _a === void 0 ? void 0 : _a.email); }));
    }
}
VisitorDetailsComponent.ɵfac = function VisitorDetailsComponent_Factory(t) { return new (t || VisitorDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_visitors_state_service__WEBPACK_IMPORTED_MODULE_5__["VisitorsStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_interfaces_events__WEBPACK_IMPORTED_MODULE_3__["EventsService"])); };
VisitorDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VisitorDetailsComponent, selectors: [["visitor-details"]], inputs: { event: "event", visitor: "visitor" }, outputs: { eventChange: "eventChange" }, decls: 16, vars: 17, consts: [[1, "w-12", "text-lg", "flex", "justify-center"], [4, "ngIf", "ngIfElse"], ["checkin_state", ""], ["host_state", ""], ["flex", "", 1, "p-2", "flex-1"], [1, "w-40", "p-2", "flex", "items-center", "justify-end"], ["className", "material-icons", 3, "matTooltip", "loading", "content", "click"], ["matTooltip", "Checkin Guest", "className", "material-icons", "content", "event_available", 3, "loading", "state", "click"], ["matTooltip", "Checkout Guest", "className", "material-icons", "content", "event_busy", 3, "loading", "click"], ["mat-icon-button", "", 3, "href", "matTooltip"], ["className", "material-icons"], [1, "w-16", "p-2"], ["class", "p-2 rounded-full material-icons border-2 border-dotted border-gray-600", 4, "ngIf", "ngIfElse"], [1, "p-2", "rounded-full", "material-icons", "border-2", "border-dotted", "border-gray-600"], [1, "p-2", "rounded-full", "material-icons", "bg-green-600", "border-2", "border-green-600", "text-white"], [1, "p-2", "rounded-full", "material-icons", "bg-blue-600", "border-2", "border-blue-600", "text-white"]], template: function VisitorDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VisitorDetailsComponent_ng_container_1_Template, 2, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VisitorDetailsComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, VisitorDetailsComponent_ng_template_4_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "action-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitorDetailsComponent_Template_action_icon_click_9_listener() { return ctx.toggleRemote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "action-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitorDetailsComponent_Template_action_icon_click_10_listener() { return ctx.checkin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "action-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitorDetailsComponent_Template_action_icon_click_11_listener() { return ctx.checkout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "app-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 11);
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.visitor.organizer)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx.visitor == null ? null : ctx.visitor.name) || (ctx.visitor == null ? null : ctx.visitor.email));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("invisible", !(ctx.visitor == null ? null : ctx.visitor.is_external) || (ctx.visitor == null ? null : ctx.visitor.organizer));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx.remote ? "Set as In-Person Visitor" : "Set as Remote Visitior")("loading", ctx.loading === "remote")("content", ctx.remote ? "tap_and_play" : "business");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("invisible", !(ctx.visitor == null ? null : ctx.visitor.is_external) || (ctx.visitor == null ? null : ctx.visitor.organizer));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", ctx.loading === "checkin")("state", (ctx.visitor == null ? null : ctx.visitor.checked_in) ? "success" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("invisible", !(ctx.visitor == null ? null : ctx.visitor.is_external) || (ctx.visitor == null ? null : ctx.visitor.organizer));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", ctx.loading === "checkout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "mailto:" + (ctx.visitor == null ? null : ctx.visitor.email), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("matTooltip", (ctx.visitor == null ? null : ctx.visitor.organizer) ? "Email Host" : "Email Guest");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _libs_components_src_lib_action_icon_action_icon_component__WEBPACK_IMPORTED_MODULE_7__["ActionIconComponent"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltip"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatAnchor"], _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_10__["IconComponent"]], styles: ["[_nghost-%COMP%] {\n                display: flex;\n                align-items: center;\n                width: 100%;\n                padding: 0 0.5rem;\n            }\n\n            [_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n                display: flex;\n                align-items: center;\n                height: 100%;\n                border-bottom: 1px solid #ccc;\n                height: 3.5rem;\n            }\n\n            [_nghost-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n                border: none;\n            }\n\n            .invisible[_ngcontent-%COMP%] {\n                opacity: 0;\n                pointer-events: none;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VisitorDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'visitor-details',
                template: `
        <div class="w-12 text-lg flex justify-center">
            <ng-container *ngIf="!visitor.organizer; else host_state">
                <i
                    *ngIf="!visitor?.checked_in; else checkin_state"
                    class="p-2 rounded-full material-icons border-2 border-dotted border-gray-600"
                    >face</i
                >
            </ng-container>
            <ng-template #checkin_state>
                <i
                    class="p-2 rounded-full material-icons bg-green-600 border-2 border-green-600 text-white"
                    >done</i
                >
            </ng-template>
            <ng-template #host_state>
                <i
                    class="p-2 rounded-full material-icons bg-blue-600 border-2 border-blue-600 text-white"
                    >assignment_ind</i
                >
            </ng-template>
        </div>
        <div flex class="p-2 flex-1">{{ visitor?.name || visitor?.email }}</div>
        <div class="w-40 p-2 flex items-center justify-end">
            <action-icon
                [matTooltip]="remote ? 'Set as In-Person Visitor' : 'Set as Remote Visitior'"
                [loading]="loading === 'remote'"
                className="material-icons"
                [content]="remote ? 'tap_and_play' : 'business'"
                (click)="toggleRemote()"
                [class.invisible]="!visitor?.is_external || visitor?.organizer"
            >
            </action-icon>
            <action-icon
                matTooltip="Checkin Guest"
                [loading]="loading === 'checkin'"
                [state]="visitor?.checked_in ? 'success' : ''"
                className="material-icons"
                content="event_available"
                (click)="checkin()"
                [class.invisible]="!visitor?.is_external || visitor?.organizer"
            >
            </action-icon>
            <action-icon
                matTooltip="Checkout Guest"
                [loading]="loading === 'checkout'"
                className="material-icons"
                content="event_busy"
                (click)="checkout()"
                [class.invisible]="!visitor?.is_external || visitor?.organizer"
            >
            </action-icon>
            <a
                [href]="'mailto:' + visitor?.email"
                mat-icon-button
                [matTooltip]="visitor?.organizer ? 'Email Host' : 'Email Guest'"
            >
                <app-icon className="material-icons">email</app-icon>
            </a>
        </div>
        <div class="w-16 p-2"></div>
    `,
                styles: [
                    `
            :host {
                display: flex;
                align-items: center;
                width: 100%;
                padding: 0 0.5rem;
            }

            :host > div {
                display: flex;
                align-items: center;
                height: 100%;
                border-bottom: 1px solid #ccc;
                height: 3.5rem;
            }

            :host > div:first-child {
                border: none;
            }

            .invisible {
                opacity: 0;
                pointer-events: none;
            }
        `,
                ],
            }]
    }], function () { return [{ type: _visitors_state_service__WEBPACK_IMPORTED_MODULE_5__["VisitorsStateService"] }, { type: _user_interfaces_events__WEBPACK_IMPORTED_MODULE_3__["EventsService"] }]; }, { event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], visitor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], eventChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "zhgJ":
/*!****************************************************!*\
  !*** ./src/app/visitors/visitors-state.service.ts ***!
  \****************************************************/
/*! exports provided: VisitorsStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorsStateService", function() { return VisitorsStateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @user-interfaces/events */ "eZII");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "w8Fe");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");









class VisitorsStateService extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["BaseClass"] {
    constructor(_events) {
        super();
        this._events = _events;
        this._filters = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]({});
        this._search = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]('');
        this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.loading = this._loading.asObservable();
        this.filters = this._filters.asObservable();
        this.events = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([this._filters]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((details) => {
            this._loading.next(true);
            const [filters] = details;
            const date = filters.date ? new Date(filters.date) : new Date();
            const start = (filters.show_week ? Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["startOfWeek"])(date) : Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["startOfDay"])(date)).valueOf();
            const end = (filters.show_week ? Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["endOfWeek"])(date) : Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["endOfDay"])(date)).valueOf();
            return this._events.query({
                period_start: Math.floor(start / 1000),
                period_end: Math.floor(end / 1000),
                zone_ids: (filters.zones || []).join(','),
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((list) => {
            this._loading.next(false);
            return this._filters.getValue().all_bookings ? list : list.filter((event) => event.has_visitors && event.attendees.length > 1);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["shareReplay"])());
        this.filtered_events = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([
            this._search,
            this.events,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((details) => {
            const [search, events] = details;
            const filter = search.toLowerCase();
            return events.filter((event) => event.attendees.find((user) => user.name.toLowerCase().includes(filter) ||
                user.email.toLowerCase().includes(filter)));
        }));
    }
    get search() {
        return this._search.getValue();
    }
    setFilters(filters) {
        this._filters.next(Object.assign(Object.assign({}, this._filters.getValue()), filters));
    }
    setSearchString(search) {
        this._search.next(search);
    }
    startPolling(delay = 30 * 1000) {
        this.interval('poll', () => this.setFilters(this._filters.getValue()), delay);
    }
    stopPolling() {
        this.clearInterval('poll');
    }
    checkGuestIn(event, user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const new_user = yield this._events
                .checkInGuest(event.id, user.id, {
                system_id: event.system.id,
                state: true,
            })
                .catch((e) => {
                Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["notifyError"])(`Error checking in ${user.name} for ${event.organiser.name}'s meeting`);
                throw e;
            });
            Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["notifySuccess"])(`Successfully checked in ${user.name} for ${event.organiser.name}'s meeting`);
            const new_attendees = Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["unique"])([new_user, ...event.attendees], 'email');
            new_attendees.sort((a, b) => a.organizer ? -1 : a.email.localeCompare(b.email));
            return new _user_interfaces_events__WEBPACK_IMPORTED_MODULE_3__["CalendarEvent"](Object.assign(Object.assign({}, event), { attendees: new_attendees }));
        });
    }
    checkGuestOut(event, user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const new_user = yield this._events
                .checkInGuest(event.id, user.id, {
                system_id: event.system.id,
                state: false,
            })
                .catch((e) => {
                Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["notifyError"])(`Error checking out ${user.name} from ${event.organiser.name}'s meeting`);
                throw e;
            });
            Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["notifySuccess"])(`Successfully checked out ${user.name} from ${event.organiser.name}'s meeting`);
            const new_attendees = Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["unique"])([new_user, ...event.attendees], 'email');
            new_attendees.sort((a, b) => a.organizer ? -1 : a.email.localeCompare(b.email));
            return new _user_interfaces_events__WEBPACK_IMPORTED_MODULE_3__["CalendarEvent"](Object.assign(Object.assign({}, event), { attendees: new_attendees }));
        });
    }
    checkAllGuestsIn(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const guests = event.attendees.filter((user) => user.is_external && !user.checked_in);
            if (guests.length <= 0)
                throw new Error('No Guests to checkin');
            const attendees = yield Promise.all(guests.map((user) => this._events.checkInGuest(event.id, user.id, {
                system_id: event.system.id,
                state: true,
            }))).catch((e) => {
                Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["notifyError"])(`Error checking in all guests for ${event.organiser.name}'s meeting`);
                throw e;
            });
            Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["notifySuccess"])(`Successfully checked in all guests for ${event.organiser.name}'s meeting`);
            const new_attendees = Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["unique"])([...attendees, ...event.attendees], 'email');
            new_attendees.sort((a, b) => a.organizer ? -1 : a.email.localeCompare(b.email));
            return new _user_interfaces_events__WEBPACK_IMPORTED_MODULE_3__["CalendarEvent"](Object.assign(Object.assign({}, event), { attendees: new_attendees }));
        });
    }
    checkAllGuestsOut(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const guests = event.attendees.filter((user) => user.is_external && user.checked_in && !user.organizer);
            if (guests.length <= 0)
                throw new Error('No Guests to checkout');
            const attendees = yield Promise.all(guests.map((user) => this._events.checkInGuest(event.id, user.id, {
                system_id: event.system.id,
                state: false,
            }))).catch((e) => {
                Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["notifyError"])(`Error checking out all guests from ${event.organiser.name}'s meeting`);
                throw e;
            });
            Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["notifySuccess"])(`Successfully checked out all guests from ${event.organiser.name}'s meeting`);
            const new_attendees = Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["unique"])([...attendees, ...event.attendees], 'email');
            new_attendees.sort((a, b) => a.organizer ? -1 : a.email.localeCompare(b.email));
            return new _user_interfaces_events__WEBPACK_IMPORTED_MODULE_3__["CalendarEvent"](Object.assign(Object.assign({}, event), { attendees: new_attendees }));
        });
    }
}
VisitorsStateService.ɵfac = function VisitorsStateService_Factory(t) { return new (t || VisitorsStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_interfaces_events__WEBPACK_IMPORTED_MODULE_3__["EventsService"])); };
VisitorsStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VisitorsStateService, factory: VisitorsStateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VisitorsStateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _user_interfaces_events__WEBPACK_IMPORTED_MODULE_3__["EventsService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=visitors-visitors-module.js.map