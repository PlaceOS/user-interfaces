(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["explore-explore-module"],{

/***/ "05Mk":
/*!************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/index.ts ***!
  \************************************************************************************/
/*! exports provided: Booking, BOOKING_MUTABLE_FIELDS, setMockBookingStartDatetime, generateMockBooking, getFreeBookingSlots, getNextFreeBookingSlot, storeBookingFormData, retrieveBookingFormData, clearBookingFormData, storeDeskBookingFormData, retrieveDeskBookingFormData, clearDeskBookingFormData, filterSpacesRules, rulesForSpace, getMinLength, durationGreaterThanOrEqual, stringToMinutes, statusFromBookings, SharedBookingsModule, BookingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_bookings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/bookings */ "RB0m");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Booking", function() { return _lib_bookings__WEBPACK_IMPORTED_MODULE_0__["Booking"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BOOKING_MUTABLE_FIELDS", function() { return _lib_bookings__WEBPACK_IMPORTED_MODULE_0__["BOOKING_MUTABLE_FIELDS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setMockBookingStartDatetime", function() { return _lib_bookings__WEBPACK_IMPORTED_MODULE_0__["setMockBookingStartDatetime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateMockBooking", function() { return _lib_bookings__WEBPACK_IMPORTED_MODULE_0__["generateMockBooking"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFreeBookingSlots", function() { return _lib_bookings__WEBPACK_IMPORTED_MODULE_0__["getFreeBookingSlots"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNextFreeBookingSlot", function() { return _lib_bookings__WEBPACK_IMPORTED_MODULE_0__["getNextFreeBookingSlot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "storeBookingFormData", function() { return _lib_bookings__WEBPACK_IMPORTED_MODULE_0__["storeBookingFormData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "retrieveBookingFormData", function() { return _lib_bookings__WEBPACK_IMPORTED_MODULE_0__["retrieveBookingFormData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearBookingFormData", function() { return _lib_bookings__WEBPACK_IMPORTED_MODULE_0__["clearBookingFormData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "storeDeskBookingFormData", function() { return _lib_bookings__WEBPACK_IMPORTED_MODULE_0__["storeDeskBookingFormData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "retrieveDeskBookingFormData", function() { return _lib_bookings__WEBPACK_IMPORTED_MODULE_0__["retrieveDeskBookingFormData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearDeskBookingFormData", function() { return _lib_bookings__WEBPACK_IMPORTED_MODULE_0__["clearDeskBookingFormData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterSpacesRules", function() { return _lib_bookings__WEBPACK_IMPORTED_MODULE_0__["filterSpacesRules"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rulesForSpace", function() { return _lib_bookings__WEBPACK_IMPORTED_MODULE_0__["rulesForSpace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMinLength", function() { return _lib_bookings__WEBPACK_IMPORTED_MODULE_0__["getMinLength"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "durationGreaterThanOrEqual", function() { return _lib_bookings__WEBPACK_IMPORTED_MODULE_0__["durationGreaterThanOrEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringToMinutes", function() { return _lib_bookings__WEBPACK_IMPORTED_MODULE_0__["stringToMinutes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "statusFromBookings", function() { return _lib_bookings__WEBPACK_IMPORTED_MODULE_0__["statusFromBookings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedBookingsModule", function() { return _lib_bookings__WEBPACK_IMPORTED_MODULE_0__["SharedBookingsModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BookingsService", function() { return _lib_bookings__WEBPACK_IMPORTED_MODULE_0__["BookingsService"]; });




/***/ }),

/***/ "B+D8":
/*!****************************************************!*\
  !*** ./src/app/explore/search/search.component.ts ***!
  \****************************************************/
/*! exports provided: ExploreSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreSearchComponent", function() { return ExploreSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @user-interfaces/spaces */ "6CBO");
/* harmony import */ var _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @user-interfaces/organisation */ "dJst");
/* harmony import */ var _user_interfaces_users__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @user-interfaces/users */ "mjT4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "ulve");
/* harmony import */ var _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../libs/components/src/lib/icon/icon.component */ "ukpX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "csyo");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "mFH5");



















const _c0 = ["input"];
function ExploreSearchComponent_div_0_mat_spinner_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 12);
} }
const _c1 = function () { return { type: "icon", class: "material-icons", content: "search" }; };
function ExploreSearchComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function ExploreSearchComponent_div_0_Template_div_focus_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.focusField(); })("click", function ExploreSearchComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.focusField(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExploreSearchComponent_div_0_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.search_str = $event; })("focus", function ExploreSearchComponent_div_0_Template_input_focus_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.search_str = ""; })("ngModelChange", function ExploreSearchComponent_div_0_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.search$.next($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExploreSearchComponent_div_0_mat_spinner_7_Template, 1, 0, "mat-spinner", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.search_str)("matAutocomplete", _r1)("placeholder", ctx_r0.placeholder || "Search...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loading);
} }
function ExploreSearchComponent_mat_option_3_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r11.phone);
} }
function ExploreSearchComponent_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExploreSearchComponent_mat_option_3_div_7_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r11 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.option_details[option_r11.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", option_r11.phone);
} }
// TODO: Add handling for role users. e.g. Fire Wardens, First Aiders
// TODO: Add handling for searching for features
// TODO: Add handling for searching for desks
class ExploreSearchComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["BaseClass"] {
    constructor(_org, _people, _spaces, _route, _router) {
        super();
        this._org = _org;
        this._people = _people;
        this._spaces = _spaces;
        this._route = _route;
        this._router = _router;
        this.options = [];
        /** Post search and filtering list of items */
        this.results = [];
        /** Subject holding the value of the search */
        this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    get option_details() {
        const details = {};
        for (const item of this.results) {
            details[item.id] = item instanceof _user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_5__["Space"] ? this.spaceDetails(item) : item.email;
        }
        return details;
    }
    spaceDetails(space) {
        const building = this._org.buildings.find(bld => bld.id === space.level.parent_id);
        return building ? `${building.name}, ${space.level.name}` : space.level.name;
    }
    get building() {
        const level = this._org.levelWithID([this.zone]);
        if (!level) {
            return null;
        }
        return this._org.buildings.find(bld => bld.id === level.parent_id);
    }
    ngOnInit() {
        // Listen for input changes
        this.search_results$ = this.search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(query => {
            this.loading = true;
            if (this.options && this.options.length) {
                return Promise.resolve(this.options);
            }
            if ((this.type !== 'user' && this.type !== 'any') || query.length < 3) {
                return Promise.resolve([]);
            }
            const q = (typeof query === 'string' ? query || '' : '');
            const ppl = this._people.query({ q });
            return ppl;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            console.error(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((users) => {
            const spaces = this._spaces.space_list.filter(space => !this.zone ? true : space.zones.indexOf(this.building.id) >= 0);
            const search = (this.search_str || '').toLowerCase();
            const filter = item => (item.name || '').toLowerCase().indexOf(search) >= 0 ||
                (item.email || '').toLowerCase().indexOf(search) >= 0;
            let result_list = [];
            if (this.type === 'space') {
                result_list = spaces;
            }
            else if (this.type === 'user') {
                result_list = users;
            }
            else {
                result_list = spaces.concat(users);
            }
            this.loading = false;
            return result_list.filter(filter);
        }));
        // Process API results
        this.subscription('search_results', this.search_results$.subscribe(list => {
            this.results = list;
        }));
    }
    ngOnChanges(changes) {
        if (changes.autofocus && this.autofocus) {
            this.focusField();
        }
        if (changes.options) {
            this.search_str = '';
            this.search$.next(`${this.search_str}`);
            this.results = this.options;
            this.focusField();
        }
        if (changes.clear) {
            this.timeout('clear', () => {
                this.search_str = '';
                this.search$.next(`${this.search_str}`);
                this.results = [];
            }, 50);
        }
    }
    focusField() {
        if (this.input_field && this.input_field.nativeElement) {
            this.input_field.nativeElement.focus();
        }
    }
    /**
     * Update the selected item to display the location for on the map
     * @param item Space or User to display location for
     */
    selectOption(item) {
        if (item instanceof _user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_5__["Space"]) {
            this._router.navigate([], {
                relativeTo: this._route,
                queryParams: { space: item.id, level: item.level.id },
                queryParamsHandling: 'merge'
            });
        }
        else {
            this._router.navigate([], {
                relativeTo: this._route,
                queryParams: { user: item.email },
                queryParamsHandling: 'merge'
            });
        }
        this.search_str = item.name;
    }
}
ExploreSearchComponent.ɵfac = function ExploreSearchComponent_Factory(t) { return new (t || ExploreSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_6__["OrganisationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_interfaces_users__WEBPACK_IMPORTED_MODULE_7__["PeopleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_5__["SpacesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ExploreSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExploreSearchComponent, selectors: [["explore-search"]], viewQuery: function ExploreSearchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input_field = _t.first);
    } }, inputs: { options: "options", type: "type", autofocus: "autofocus", zone: "zone", placeholder: "placeholder", clear: "clear" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 2, consts: [["class", "searchbar", "tabindex", "0", 3, "focus", "click", 4, "ngIf"], [3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["tabindex", "0", 1, "searchbar", 3, "focus", "click"], [1, "prefix"], [3, "icon"], [1, "input"], ["type", "text", 3, "ngModel", "matAutocomplete", "placeholder", "ngModelChange", "focus"], ["input", ""], [1, "suffix"], ["diameter", "32", 4, "ngIf"], ["diameter", "32"], [3, "value"], [1, "content"], [1, "details"], [1, "name"], [1, "email"], ["class", "phone", 4, "ngIf"], [1, "phone"]], template: function ExploreSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExploreSearchComponent_div_0_Template, 8, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-autocomplete", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function ExploreSearchComponent_Template_mat_autocomplete_optionSelected_1_listener($event) { return ctx.selectOption($event.option.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExploreSearchComponent_mat_option_3_Template, 8, 4, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.results);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_10__["IconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatSpinner"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"]], styles: ["@keyframes wait {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.searchbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  max-width: calc(100% - 2em);\n  width: 800px;\n  margin: 1em auto;\n  background-color: #fff;\n  border-radius: 2em;\n  padding: 0 0.75em;\n  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .searchbar[_ngcontent-%COMP%] {\n    border-radius: 0;\n    box-shadow: none;\n    margin: 0;\n    width: 100%;\n    max-width: 100%;\n    padding: 0 0.5em;\n    border-bottom: 1px solid #ccc;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .searchbar[_ngcontent-%COMP%] {\n    border-radius: 0;\n    box-shadow: none;\n    margin: 0;\n    width: 100%;\n    max-width: 100%;\n    padding: 0 0.5em;\n    border-bottom: 1px solid #ccc;\n  }\n}\n.prefix[_ngcontent-%COMP%], .suffix[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  min-width: 32px;\n  min-height: 100%;\n}\n.input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 50%;\n}\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 1em;\n  border: none;\n  outline: none;\n  padding: 1em 0.5em;\n  background: none;\n}\n.name[_ngcontent-%COMP%] {\n  height: 1em;\n}\n.email[_ngcontent-%COMP%] {\n  font-size: 0.6em;\n  color: rgba(0, 0, 0, 0.65);\n}\n.details[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 50%;\n}\n.mat-option[_ngcontent-%COMP%]:nth-child(2n) {\n  background-color: #f8f8f8;\n}\n.mat-option[_ngcontent-%COMP%]:hover {\n  background-color: #eee;\n}\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.phone[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC1zdHlsZXMvdmFyaWFibGVzLnNjc3MiLCJzaGFyZWQtc3R5bGVzL21peGlucy5zY3NzIiwiYXBwcy92aXNpdG9yLWtpb3NrL3NyYy9hcHAvZXhwbG9yZS9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztxQkFBQTtBQWVBOzswQkFBQTtBQXdDQTs7Y0FBQTtBQWFBOztzQkFBQTtBQXBFQTs7cUJBQUE7QUFlQTs7MEJBQUE7QUF3Q0E7O2NBQUE7QUFhQTs7c0JBQUE7QUMvQ0E7RUFDSTtJQUFLLFVBQUE7RUNLUDtFREpFO0lBQU8sVUFBQTtFQ09UO0FBQ0Y7QURMQTtFQUNJO0lBQUssVUFBQTtFQ1FQO0VEUEU7SUFBTyxVQUFBO0VDVVQ7QUFDRjtBRFJBOztzQkFBQTtBQzNCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VERkUsaUhBQUE7QUMyQ0o7QURoQlE7RUNqQ1I7SUFXSSxnQkFBQTtJQUVBLGdCQUFBO0lBRUEsU0FBQTtJQUVBLFdBQUE7SUFFQSxlQUFBO0lBRUEsZ0JBQUE7SUFFQSw2QkFBQTtFQW9DRjtBQUNGO0FEeEJRO0VDcENSO0lBV0ksZ0JBQUE7SUFFQSxnQkFBQTtJQUVBLFNBQUE7SUFFQSxXQUFBO0lBRUEsZUFBQTtJQUVBLGdCQUFBO0lBRUEsNkJBQUE7RUErQ0Y7QUFDRjtBQTVDQTs7RUFFRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQStDRjtBQTVDQTtFQUNFLE9BQUE7RUFDQSxjQUFBO0FBK0NGO0FBNUNBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUErQ0Y7QUE1Q0E7RUFDRSxXQUFBO0FBK0NGO0FBNUNBO0VBQ0UsZ0JBQUE7RUFDQSwwQkFBQTtBQStDRjtBQTVDQTtFQUNFLE9BQUE7RUFDQSxjQUFBO0FBK0NGO0FBM0NFO0VBQ0UseUJBQUE7QUE4Q0o7QUE1Q0U7RUFDRSxzQkFBQTtBQThDSjtBQTFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQTZDRjtBQTFDQTtFQUNFLGdCQUFBO0FBNkNGIiwiZmlsZSI6ImFwcHMvdmlzaXRvci1raW9zay9zcmMvYXBwL2V4cGxvcmUvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qPT09PT09PT09PT09PT09PT09KlxcXG58fCBCcmFuZGluZyBDb2xvdXJzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT0qL1xuXG4kcHdjLW9yYW5nZTogI0QwNEEwMjtcbiRwd2Mtcm9zZTogI0Q5Mzk1NDtcbiRwd2MtcmVkOiAjRTAzMDFFO1xuJHB3Yy15ZWxsb3c6ICNGRkI2MDA7XG4kcHdjLXRhbmdlcmluZTogI0VCOEMwMDtcblxuJGxpZ2h0LWdyZXk6ICNkZGRkZGQ7XG5cbiRib3hTaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoIzAwMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgjMDAwLCAwLjE0KSxcbiAgICAwIDJweCAxcHggLTFweCByZ2JhKCMwMDAsIDAuMTIpO1xuXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzIxYTQ1MztcbiRzdWNjZXNzLWxpZ2h0OiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHBlbmRpbmc6ICNmZmJmMWY7XG4kcGVuZGluZy1saWdodDogbGlnaHRlbigkcGVuZGluZywgMTApO1xuJHBlbmRpbmctZGFyazogZGFya2VuKCRwZW5kaW5nLCAxMCk7XG5cbiRlcnJvcjogI2Y0NDMzNjtcbiRlcnJvci1saWdodDogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cbiRjb2xvci1wcmltYXJ5OiAjZDA0YTAyO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcbiRjb2xvci1wcmltYXJ5LWRhcms6IGRhcmtlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjZTAzMDFlO1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogbGlnaHRlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6IGRhcmtlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG5cbiRiZy1saWdodDogI2YwZjBmMDtcbiRiZy1kYXJrOiAjMjYzMjM4O1xuJGZvb3Rlci1iYWNrOiAjMjYzMjM4O1xuJGdyZXk6ICM5Njk2OTY7XG5cbiRjb2xvci10ZXJuYXJ5OiAjMGEwZDJlO1xuJGNvbG9yLWV4dGVybmFsOiAjMTUxYzZhO1xuXG4vLyBUeXBlIGNvbG9ycyBmb3IgYm9va2luZyBzdGF0dXNcbiRpbnRlcm5hbDogJGNvbG9yLXByaW1hcnk7XG4kZXh0ZXJuYWw6ICRjb2xvci1leHRlcm5hbDtcbiRjYW5jZWxsZWQ6ICRncmV5O1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQtc3RhY2s6ICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG5cbiRoZWFkaW5nLWZvbnQ6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4kZm9udDogJGZvbnQtc3RhY2s7XG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE2cHg7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcbiIsIlxuQGltcG9ydCAndmFyaWFibGVzJztcblxuQG1peGluIGhpZGUtdGV4dC1vdmVyZmxvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdygkY29sb3I6ICMwMDAsICRkZXB0aDogMSkge1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAxcHggKiAoJGRlcHRoIC0gMSkgcmdiYSgjMDAwLCAuMiksXG4gICAgICAgICAgICAgICAgMCAxcHggMXB4IDAgcmdiYSgjMDAwLCAuMTQpLFxuICAgICAgICAgICAgICAgIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwgLjEyKTtcbn1cblxuQG1peGluIGZhZGUtaW4oJHdhaXQpIHtcbiAgICBhbmltYXRpb246XG4gICAgICAgIHdhaXQgI3skd2FpdH0sXG4gICAgICAgIGZhZGUtaW4gNDAwbXMgI3skd2FpdH07XG59XG5cbkBrZXlmcmFtZXMgd2FpdCB7XG4gICAgMCUgeyBvcGFjaXR5OiAwOyB9XG4gICAgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbn1cblxuQGtleWZyYW1lcyBmYWRlLWluIHtcbiAgICAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgICAxMDAlIHsgb3BhY2l0eTogMTsgfVxufVxuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuQGltcG9ydCAnbWl4aW5zJztcblxuLnNlYXJjaGJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gMmVtKTtcbiAgd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDFlbSBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAyZW07XG4gIHBhZGRpbmc6IDAgLjc1ZW07XG4gIEBpbmNsdWRlIGJveC1zaGFkb3c7XG4gIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcblxuICAgIGJveC1zaGFkb3c6IG5vbmU7XG5cbiAgICBtYXJnaW46IDA7XG5cbiAgICB3aWR0aDogMTAwJTtcblxuICAgIG1heC13aWR0aDogMTAwJTtcblxuICAgIHBhZGRpbmc6IDAgLjVlbTtcblxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICB9XG59XG5cbi5wcmVmaXgsXG4uc3VmZml4IHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgbWluLXdpZHRoOiAzMnB4O1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4uaW5wdXQge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDUwJTtcbn1cblxuaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMWVtIC41ZW07XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5uYW1lIHtcbiAgaGVpZ2h0OiAxZW07XG59XG5cbi5lbWFpbCB7XG4gIGZvbnQtc2l6ZTogLjZlbTtcbiAgY29sb3I6IHJnYmEoIzAwMCwgLjY1KTtcbn1cblxuLmRldGFpbHMge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDUwJTtcbn1cblxuLm1hdC1vcHRpb24ge1xuICAmOm50aC1jaGlsZCgybikge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgfVxufVxuXG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5waG9uZSB7XG4gIGZvbnQtc2l6ZTogLjhlbTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExploreSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'explore-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.scss']
            }]
    }], function () { return [{ type: _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_6__["OrganisationService"] }, { type: _user_interfaces_users__WEBPACK_IMPORTED_MODULE_7__["PeopleService"] }, { type: _user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_5__["SpacesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], autofocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], zone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], clear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], input_field: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['input', { static: false }]
        }] }); })();


/***/ }),

/***/ "C28J":
/*!********************************************************!*\
  !*** ./src/app/explore/map-view/map-view.component.ts ***!
  \********************************************************/
/*! exports provided: MapOrientation, MapViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapOrientation", function() { return MapOrientation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapViewComponent", function() { return MapViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @user-interfaces/users */ "mjT4");
/* harmony import */ var _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @user-interfaces/organisation */ "dJst");
/* harmony import */ var _user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @user-interfaces/spaces */ "6CBO");
/* harmony import */ var _filters_filters_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../filters/filters.component */ "v/X9");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! dayjs */ "BQ33");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../search/search.component */ "B+D8");
/* harmony import */ var _status_managers_space_status_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../status-managers/space-status.component */ "Vgga");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _status_managers_zone_status_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../status-managers/zone-status.directive */ "Rz/H");
/* harmony import */ var _zoom_controls_zoom_controls_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../zoom-controls/zoom-controls.component */ "Cwrf");
/* harmony import */ var _footer_legend_footer_legend_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../footer-legend/footer-legend.component */ "Ef3g");
/* harmony import */ var _status_managers_desk_status_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../status-managers/desk-status.component */ "Y2F1");
/* harmony import */ var _ui_map_controls_map_controls_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../ui/map-controls/map-controls.component */ "sWXn");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ "csyo");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-bar */ "66mq");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../../libs/components/src/lib/icon/icon.component */ "ukpX");






























function MapViewComponent_i_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("status", function MapViewComponent_i_6_Template_i_status_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r6.status_map.desks = $event; return ctx_r6.processStatuses(); })("features", function MapViewComponent_i_6_Template_i_features_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.available_desk_features = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("filters", ctx_r0.desk_filters)("zone", ctx_r0.active_level);
} }
function MapViewComponent_a_map_controls_8_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a-map-controls", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("levelChange", function MapViewComponent_a_map_controls_8_Template_a_map_controls_levelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.active_level = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("level", ctx_r1.active_level);
} }
function MapViewComponent_a_map_9_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a-map", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("zoomChange", function MapViewComponent_a_map_9_Template_a_map_zoomChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.zoom = $event; })("centerChange", function MapViewComponent_a_map_9_Template_a_map_centerChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.center = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("zoom", ctx_r2.zoom)("center", ctx_r2.center)("src", ctx_r2.map_url)("cssStyles", ctx_r2.style_map)("listeners", ctx_r2.listeners)("features", ctx_r2.features);
} }
function MapViewComponent_div_11_mat_progress_bar_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-progress-bar", 22);
} }
function MapViewComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MapViewComponent_div_11_mat_progress_bar_4_Template, 1, 0, "mat-progress-bar", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("no-user", ctx_r3.user_error);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.loading);
} }
function MapViewComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Or search for:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MapViewComponent_div_12_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.setRoleUsers("fire"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Fire Wardens ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MapViewComponent_div_12_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.setRoleUsers("aid"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " First Aiders ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("inverse", ctx_r4.user_role !== "fire");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("inverse", ctx_r4.user_role !== "aid");
} }
const _c0 = function () { return { class: "material-icons", content: "filter_list" }; };
function MapViewComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MapViewComponent_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.openDeskFilters(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r5.desk_filters && ctx_r5.desk_filters.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
} }
var MapOrientation;
(function (MapOrientation) {
    MapOrientation[MapOrientation["Landspace"] = 0] = "Landspace";
    MapOrientation[MapOrientation["Portrait"] = 1] = "Portrait";
    MapOrientation[MapOrientation["LandspaceReverse"] = 2] = "LandspaceReverse";
    MapOrientation[MapOrientation["PortraitReverse"] = 3] = "PortraitReverse";
})(MapOrientation || (MapOrientation = {}));
class MapViewComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_5__["BaseClass"] {
    constructor(_org, _settings, _spaces, _people, _route, _router, _dialog) {
        super();
        this._org = _org;
        this._settings = _settings;
        this._spaces = _spaces;
        this._people = _people;
        this._route = _route;
        this._router = _router;
        this._dialog = _dialog;
        /** Mapping of elements to CSS styles */
        this.style_map = {};
        /** Mapping of status lists to types */
        this.status_map = {};
        /** Mapping of listener lists to types */
        this.listener_map = {};
        /** Mapping of features lists to types */
        this.feature_map = {};
        /** List of active desk filters */
        this.desk_filters = [];
        /** List of role users to search */
        this.search_options = [];
        /** List of role users to search */
        this.role_users = {};
    }
    get time() {
        return dayjs__WEBPACK_IMPORTED_MODULE_10__().format('h:mm A');
    }
    /** URL of the active map */
    get map_url() {
        const level = this._org.levelWithID([this.active_level]) || { map_id: '' };
        if (localStorage) {
            const rotation = +localStorage.getItem('KIOSK.orientation');
            if (rotation) {
                switch (rotation) {
                    case MapOrientation.Portrait:
                        return level.map_id.replace('.svg', '_portrait.svg');
                    case MapOrientation.LandspaceReverse:
                        return level.map_id.replace('.svg', '_landscape_reverse.svg');
                    case MapOrientation.PortraitReverse:
                        return level.map_id.replace('.svg', '_portrait_reverse.svg');
                }
            }
        }
        return level.map_id || '';
    }
    get search_placeholder() {
        switch (this.type) {
            case 'space':
                return 'Search for spaces...';
            case 'user':
                return this.user_role
                    ? `Search for ${this.role_display}...`
                    : 'Search for people...';
        }
        return '';
    }
    get role_display() {
        switch (this.user_role) {
            case 'aid':
                return 'first aiders';
            case 'fire':
                return 'fire wardens';
        }
        return '';
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._org.initialised.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])((_) => _)).toPromise();
            if (!this.active_level) {
                const bld = this._org.building;
                if (bld && bld.levels.length) {
                    this.active_level = bld.levels[0].id;
                }
            }
            this.located = localStorage.getItem('KIOSK.location');
            this.subscription('reset', this._settings.listen('KIOSK.reset').subscribe(() => this.clearView()));
            this.subscription('route.params', this._route.paramMap.subscribe((params) => {
                if (params.has('search_type')) {
                    if (params.get('search_type') !== this.type) {
                        this.timeout('clear', () => this.clearView(), 50);
                    }
                    this.type = params.get('search_type');
                    if (params.get('search_type') === 'none') {
                        this.type = '';
                    }
                }
            }));
            this.subscription('route.query', this._route.queryParamMap.subscribe((params) => {
                if (params.has('space')) {
                    this.loadSpaceLocation(params.get('space'));
                }
                if (params.has('bootstrap') && params.has('level')) {
                    this.bootstrap(params.get('level'), +params.get('orientation'), params.get('location'));
                }
                if (params.has('user')) {
                    this.user_error = true;
                    this.loadUserLocation(params.get('user')).then((user) => {
                        this.loading = false;
                        this.message = this.focus
                            ? this.location(this.active_level)
                            : `Unable to locate ${user ? user.name : params.get('user')}`;
                        this.user_error = !this.focus;
                        this.processFeatures();
                    }, (err) => {
                        this.loading = false;
                        this.message = `Unable to locate user`;
                        this.user_error = true;
                        if (err && err.status !== 404) {
                            Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_5__["notifyError"])(`Error loading user location. ${err.message}`);
                        }
                    });
                }
                this.processStatuses();
                this.processFeatures();
            }));
            this.loadRoleUsers();
        });
    }
    /**
     * Process changes to statuses
     */
    processStatuses() {
        const styles = {};
        (this.status_map.spaces || []).forEach((space) => (styles[`#${space.id}`] = space.styles));
        (this.status_map.desks || []).forEach((desk) => (styles[`#${desk.id}`] = desk.styles));
        (this.status_map.zones || []).forEach((zone) => (styles[`#${zone.id}`] = zone.styles));
        this.style_map = styles;
    }
    /**
     * Process changes to statuses
     */
    processListeners() {
        let listeners = [];
        listeners = listeners.concat(this.listener_map.spaces || []);
        listeners = listeners.concat(this.listener_map.desks || []);
        listeners = listeners.concat(this.listener_map.zones || []);
        this.listeners = listeners;
    }
    /**
     * Process changes to statuses
     */
    processFeatures() {
        let features = [];
        if (this.focus && this.focus.content) {
            features.push(this.focus);
        }
        features = features.concat(this.feature_map.spaces || []);
        features = features.concat(this.feature_map.desks || []);
        features = features.concat(this.feature_map.zones || []);
        if (this.located) {
            features.push({
                location: this.located,
                content: null,
                data: {
                    text: 'You are here',
                },
            });
        }
        this.features = features;
    }
    setRoleUsers(role) {
        if (this.user_role === role) {
            this.user_role = null;
            this.search_options = [];
        }
        else {
            this.user_role = role;
            this.search_options = this.role_users[role] || [];
        }
    }
    /**
     * Open bottom sheet for selecting desk filters
     */
    openDeskFilters() {
        const filters = [];
        const level = this._org.levelWithID([this.active_level]);
        const building = this._org.buildings.find((bld) => bld.id === level.parent_id);
        const feature_list = this.available_desk_features || building.attributes || [];
        for (const feature of feature_list) {
            if (!filters.find((i) => i.id === feature) && feature) {
                filters.push({
                    id: feature,
                    name: feature,
                    active: !!this.desk_filters.find((filter) => filter.id === feature),
                });
            }
        }
        if (filters.length <= 0) {
            Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_5__["notifyWarn"])(`No desk filters for ${building.name}`);
            return;
        }
        const ref = this._dialog.open(_filters_filters_component__WEBPACK_IMPORTED_MODULE_9__["FiltersComponent"]);
        ref.componentInstance.filters = filters;
        ref.componentInstance.name = 'Desk';
        ref.afterClosed().subscribe(() => {
            this.desk_filters = ref.componentInstance.filters.filter((i) => i.active);
        });
    }
    /**
     * Load and store location details for the space
     * @param space_id Engine system ID of the space to locate
     */
    loadSpaceLocation(space_id) {
        const space = this._spaces.space_list.filter((space) => space.id === space_id)[0];
        if (space) {
            if (!space.level) {
                return this.timeout('locate_space', () => this.loadSpaceLocation(space_id));
            }
            this.message = `Loading location of ${space.name}`;
            this.loading = true;
            this.focus = {
                location: space.map_id,
                content: null,
                zoom: 100,
                data: {
                    text: space.name,
                },
            };
            this.loading = false;
            this.message = '';
        }
    }
    location(level_id) {
        const level = this._org.levelWithID([level_id]) || {
            name: 'Level X',
            parent_id: '',
        };
        const building = this._org.buildings.find((bld) => bld.id === level.parent_id) || {
            name: 'Building X',
        };
        return `${building.name}, ${level.name}`;
    }
    /**
     * Load and store the location for the user
     * @param user_email Email address of the selected user
     */
    loadUserLocation(user_email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.focus = null;
            this.loading = true;
            this.message = `Loading user details...`;
            const name = user_email.split('.')[0];
            const user = (yield this._people.query({ q: name })).find((a_user) => a_user.email === user_email);
            if (!user) {
                return user;
            }
            this.message = `Loading location for ${user.name}...`;
            // const location = await user.locate();
            // if (!location || !location.level) {
            //     return user;
            // }
            // this.active_level = location.level.id;
            // if (location.fixed) {
            //     this.focus = {
            //         id: location.id,
            //         content: MapPinComponent,
            //         zoom: 100,
            //         data: {
            //             text: `${user.name} is here`
            //         }
            //     };
            // } else {
            //     this.focus = {
            //         coordinates: {
            //             x: location.x,
            //             y: location.y
            //         },
            //         content: MapRangeComponent,
            //         zoom: 100,
            //         data: {
            //             text: `${user.name} is here`,
            //             diameter: 1000 || location.confidence || 5
            //         }
            //     };
            // }
            // this.loading = false;
            // this.message = '';
            return user;
        });
    }
    loadRoleUsers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const building_id = localStorage.getItem('KIOSK.building');
            const building = this._org.buildings.find((bld) => bld.id === building_id);
            if (building) {
                // this.role_users.aid = await this._service.Groups.show('FirstAid', {
                //     location: building.code
                // });
                // this.role_users.fire = await this._service.Groups.show('FireWarden', {
                //     location: building.code
                // });
            }
        });
    }
    clearView() {
        this.desk_filters = [];
        this.status_map.desks = [];
        this.status_map.zones = [];
        this.focus = null;
        this.clear_time = new Date().getTime();
        this.loading = false;
        this.user_role = null;
        this.message = '';
        this.user_error = false;
        this.processStatuses();
        this.processFeatures();
    }
    /**
     * Bootstrap application from URL params
     * @param level_id Level zone ID to bootstrap
     * @param orientation Map orientation to bootstrap
     */
    bootstrap(level_id, orientation, location) {
        if (localStorage) {
            const level = this._org.levelWithID([level_id]);
            if (!level) {
                return;
            }
            const building = this._org.buildings.find((bld) => bld.id === level.parent_id);
            if (!building) {
                return;
            }
            localStorage.setItem('KIOSK.level', level_id);
            localStorage.setItem('KIOSK.building', building.id);
            if (orientation) {
                localStorage.setItem('KIOSK.orientation', `${orientation}`);
            }
            if (location) {
                localStorage.setItem('KIOSK.location', `${location}`);
                this.located = location;
            }
            this._router.navigate([], {
                relativeTo: this._route,
                queryParams: { bootstrap: null },
                queryParamsHandling: 'merge',
            });
        }
    }
}
MapViewComponent.ɵfac = function MapViewComponent_Factory(t) { return new (t || MapViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_7__["OrganisationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_interfaces_common__WEBPACK_IMPORTED_MODULE_5__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_8__["SpacesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_interfaces_users__WEBPACK_IMPORTED_MODULE_6__["PeopleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
MapViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MapViewComponent, selectors: [["explore-map-view"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 17, vars: 18, consts: [[1, "map-view"], [1, "header"], [3, "options", "type", "zone", "clear", "placeholder"], [1, "body"], ["hidden", "", 1, "status-list"], ["space-status", "", 3, "zone", "status", "listeners", "features"], ["desk-status", "", 3, "filters", "zone", "status", "features", 4, "ngIf"], ["zone-status", "", 3, "zone", "status"], ["overlay", "", 3, "level", "levelChange", 4, "ngIf"], [3, "zoom", "center", "src", "cssStyles", "listeners", "features", "zoomChange", "centerChange", 4, "ngIf"], ["overlay", "", 3, "zoom", "position", "zoomChange", "positionChange"], ["class", "message", 3, "no-user", 4, "ngIf"], ["class", "select-role", 4, "ngIf"], ["mat-button", "", "class", "filters", 3, "active", "click", 4, "ngIf"], ["desk-status", "", 3, "filters", "zone", "status", "features"], ["overlay", "", 3, "level", "levelChange"], [3, "zoom", "center", "src", "cssStyles", "listeners", "features", "zoomChange", "centerChange"], ["diameter", "32"], [1, "message"], [1, "text"], [1, "loader"], ["mode", "indeterminate", 4, "ngIf"], ["mode", "indeterminate"], [1, "select-role"], [1, "info"], [1, "actions"], ["mat-button", "", 3, "click"], ["mat-button", "", 1, "filters", 3, "click"], [1, "content"], [3, "icon"]], template: function MapViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "explore-search", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("status", function MapViewComponent_Template_i_status_5_listener($event) { ctx.status_map.spaces = $event; return ctx.processStatuses(); })("listeners", function MapViewComponent_Template_i_listeners_5_listener($event) { ctx.listener_map.spaces = $event; return ctx.processListeners(); })("features", function MapViewComponent_Template_i_features_5_listener($event) { ctx.feature_map.spaces = $event; return ctx.processFeatures(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MapViewComponent_i_6_Template, 1, 2, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("status", function MapViewComponent_Template_i_status_7_listener($event) { ctx.status_map.zones = $event; return ctx.processStatuses(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MapViewComponent_a_map_controls_8_Template, 1, 1, "a-map-controls", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MapViewComponent_a_map_9_Template, 2, 6, "a-map", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a-zoom-controls", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("zoomChange", function MapViewComponent_Template_a_zoom_controls_zoomChange_10_listener($event) { return ctx.zoom = $event; })("positionChange", function MapViewComponent_Template_a_zoom_controls_positionChange_10_listener($event) { return ctx.center = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MapViewComponent_div_11_Template, 5, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, MapViewComponent_div_12_Template, 8, 4, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, MapViewComponent_button_13_Template, 5, 4, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "a-footer-legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.search_options)("type", ctx.type)("zone", ctx.active_level)("clear", ctx.clear_time)("placeholder", ctx.search_placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("zone", ctx.active_level);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.type === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("zone", ctx.active_level);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.type !== "user");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.user_error);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("zoom", ctx.zoom)("position", ctx.center);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.type === "user");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.type === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("time " + ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.time);
    } }, directives: [_search_search_component__WEBPACK_IMPORTED_MODULE_11__["ExploreSearchComponent"], _status_managers_space_status_component__WEBPACK_IMPORTED_MODULE_12__["ExploreSpaceStatusComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _status_managers_zone_status_directive__WEBPACK_IMPORTED_MODULE_14__["ExploreZoneStatusDirective"], _zoom_controls_zoom_controls_component__WEBPACK_IMPORTED_MODULE_15__["ZoomControlsComponent"], _footer_legend_footer_legend_component__WEBPACK_IMPORTED_MODULE_16__["FooterLegendComponent"], _status_managers_desk_status_component__WEBPACK_IMPORTED_MODULE_17__["ExploreDeskStatusComponent"], _ui_map_controls_map_controls_component__WEBPACK_IMPORTED_MODULE_18__["MapControlsComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatSpinner"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_22__["IconComponent"]], styles: ["@keyframes wait {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.map-view[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  z-index: 1;\n}\n.header[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #f8f8f8;\n}\nexplore-search[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n.body[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 50%;\n  flex: 1;\n  width: 100%;\n  background-color: #f8f8f8;\n  z-index: 1;\n}\na-map[_ngcontent-%COMP%] {\n  z-index: 0;\n}\n[overlay][_ngcontent-%COMP%] {\n  z-index: 10;\n}\na-map-controls[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5em;\n  left: 0.5em;\n}\na-zoom-controls[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 0.5em;\n}\na-map-legend[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5em;\n  right: 0.5em;\n}\n.time[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 1em 1.5em;\n  border-radius: 4px;\n  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  line-height: 1em;\n  z-index: 999;\n}\n.message[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  background-color: #fff;\n  border-radius: 4px;\n  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  max-width: 20rem;\n  z-index: 999;\n  font-size: 1.25em;\n}\n.message.no-user[_ngcontent-%COMP%] {\n  top: 5em;\n  left: 50%;\n  right: auto;\n  transform: translateX(-50%);\n}\n.message[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%] {\n  height: 4px;\n  width: 100%;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .message[_ngcontent-%COMP%] {\n    left: 0.5rem;\n    transform: none;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .message[_ngcontent-%COMP%] {\n    left: 0.5rem;\n    transform: none;\n  }\n}\n.message[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  padding: 0.5em;\n}\n.filters[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  padding: 0 1.5rem;\n  border-radius: 1.55em;\n  border: none;\n  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  z-index: 999;\n  font-size: 1em;\n  height: 3em;\n}\n.filters[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  margin-right: 0.5em;\n}\n.filters[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.filters.active[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  color: #d50000;\n}\n.select-role[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: #fff;\n  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  padding: 0.5em;\n  border-radius: 4px 4px;\n  z-index: 1;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 8em;\n  margin: 0.25em;\n  background-color: #D93954;\n  border-color: #D93954;\n}\n.actions[_ngcontent-%COMP%]   button.inverse[_ngcontent-%COMP%] {\n  background-color: #fff;\n  color: #D93954;\n}\n.time[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4em;\n  left: 0.5em;\n  padding: 0.5em 0.75em;\n  background-color: #fff;\n  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n}\n.time.space[_ngcontent-%COMP%], .time.user[_ngcontent-%COMP%] {\n  top: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC1zdHlsZXMvdmFyaWFibGVzLnNjc3MiLCJzaGFyZWQtc3R5bGVzL21peGlucy5zY3NzIiwiYXBwcy92aXNpdG9yLWtpb3NrL3NyYy9hcHAvZXhwbG9yZS9tYXAtdmlldy9tYXAtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7cUJBQUE7QUFlQTs7MEJBQUE7QUF3Q0E7O2NBQUE7QUFhQTs7c0JBQUE7QUFwRUE7O3FCQUFBO0FBZUE7OzBCQUFBO0FBd0NBOztjQUFBO0FBYUE7O3NCQUFBO0FDL0NBO0VBQ0k7SUFBSyxVQUFBO0VDS1A7RURKRTtJQUFPLFVBQUE7RUNPVDtBQUNGO0FETEE7RUFDSTtJQUFLLFVBQUE7RUNRUDtFRFBFO0lBQU8sVUFBQTtFQ1VUO0FBQ0Y7QURSQTs7c0JBQUE7QUMzQkE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQXdDRjtBQXJDQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQXdDRjtBQXJDQTtFQUNFLFVBQUE7QUF3Q0Y7QUFyQ0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQXdDRjtBQXJDQTtFQUNFLFVBQUE7QUF3Q0Y7QUFyQ0E7RUFDRSxXQUFBO0FBd0NGO0FBckNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQXdDRjtBQXJDQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FBd0NGO0FBckNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQXdDRjtBQXJDQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFRHZERSxpSEFBQTtFQ3lERixnQkFBQTtFQUNBLFlBQUE7QUF3Q0Y7QUFyQ0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VEbkVFLGlIQUFBO0VDcUVGLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBd0NGO0FBdkNFO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUF5Q0o7QUF2Q0U7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQXlDSjtBRDlGUTtFQ2tDUjtJQXNCSSxZQUFBO0lBRUEsZUFBQTtFQXlDRjtBQUNGO0FEakdRO0VDK0JSO0lBc0JJLFlBQUE7SUFFQSxlQUFBO0VBK0NGO0FBQ0Y7QUE5Q0U7RUFDRSxjQUFBO0FBZ0RKO0FBNUNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VEbEdFLGlIQUFBO0VDb0dGLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQStDRjtBQTlDRTtFQUNFLG1CQUFBO0FBZ0RKO0FBOUNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBZ0RKO0FBN0NJO0VBQ0UsY0FBQTtBQStDTjtBQTFDQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUQ3SEUsaUhBQUE7RUMrSEYsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQTZDRjtBQTFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQTZDRjtBQTVDRTtFQUNFLE9BQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHlCRmhKTztFRWlKUCxxQkZqSk87QUUrTFg7QUE3Q0k7RUFDRSxzQkFBQTtFQUNBLGNGcEpLO0FFbU1YO0FBMUNBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUR6SkUsaUhBQUE7QUN1TUo7QUE1Q0U7RUFFRSxVQUFBO0FBNkNKIiwiZmlsZSI6ImFwcHMvdmlzaXRvci1raW9zay9zcmMvYXBwL2V4cGxvcmUvbWFwLXZpZXcvbWFwLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKj09PT09PT09PT09PT09PT09PSpcXFxufHwgQnJhbmRpbmcgQ29sb3VycyB8fFxuXFwqPT09PT09PT09PT09PT09PT09Ki9cblxuJHB3Yy1vcmFuZ2U6ICNEMDRBMDI7XG4kcHdjLXJvc2U6ICNEOTM5NTQ7XG4kcHdjLXJlZDogI0UwMzAxRTtcbiRwd2MteWVsbG93OiAjRkZCNjAwO1xuJHB3Yy10YW5nZXJpbmU6ICNFQjhDMDA7XG5cbiRsaWdodC1ncmV5OiAjZGRkZGRkO1xuXG4kYm94U2hhZG93OiAwIDFweCAzcHggMCByZ2JhKCMwMDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoIzAwMCwgMC4xNCksXG4gICAgMCAycHggMXB4IC0xcHggcmdiYSgjMDAwLCAwLjEyKTtcblxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICMyMWE0NTM7XG4kc3VjY2Vzcy1saWdodDogbGlnaHRlbigkc3VjY2VzcywgMTApO1xuJHN1Y2Nlc3MtZGFyazogZGFya2VuKCRzdWNjZXNzLCAxMCk7XG5cbiRwZW5kaW5nOiAjZmZiZjFmO1xuJHBlbmRpbmctbGlnaHQ6IGxpZ2h0ZW4oJHBlbmRpbmcsIDEwKTtcbiRwZW5kaW5nLWRhcms6IGRhcmtlbigkcGVuZGluZywgMTApO1xuXG4kZXJyb3I6ICNmNDQzMzY7XG4kZXJyb3ItbGlnaHQ6IGxpZ2h0ZW4oJGVycm9yLCAxMCk7XG4kZXJyb3ItZGFyazogZGFya2VuKCRlcnJvciwgMTApO1xuXG4kY29sb3ItcHJpbWFyeTogI2QwNGEwMjtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcblxuJGNvbG9yLXNlY29uZGFyeTogI2UwMzAxZTtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuXG4kYmctbGlnaHQ6ICNmMGYwZjA7XG4kYmctZGFyazogIzI2MzIzODtcbiRmb290ZXItYmFjazogIzI2MzIzODtcbiRncmV5OiAjOTY5Njk2O1xuXG4kY29sb3ItdGVybmFyeTogIzBhMGQyZTtcbiRjb2xvci1leHRlcm5hbDogIzE1MWM2YTtcblxuLy8gVHlwZSBjb2xvcnMgZm9yIGJvb2tpbmcgc3RhdHVzXG4kaW50ZXJuYWw6ICRjb2xvci1wcmltYXJ5O1xuJGV4dGVybmFsOiAkY29sb3ItZXh0ZXJuYWw7XG4kY2FuY2VsbGVkOiAkZ3JleTtcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250LXN0YWNrOiAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuXG4kaGVhZGluZy1mb250OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuJGZvbnQ6ICRmb250LXN0YWNrO1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNnB4O1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG4iLCJcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbkBtaXhpbiBoaWRlLXRleHQtb3ZlcmZsb3cge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIGJveC1zaGFkb3coJGNvbG9yOiAjMDAwLCAkZGVwdGg6IDEpIHtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMXB4ICogKCRkZXB0aCAtIDEpIHJnYmEoIzAwMCwgLjIpLFxuICAgICAgICAgICAgICAgIDAgMXB4IDFweCAwIHJnYmEoIzAwMCwgLjE0KSxcbiAgICAgICAgICAgICAgICAwIDJweCAxcHggLTFweCByZ2JhKCMwMDAsIC4xMik7XG59XG5cbkBtaXhpbiBmYWRlLWluKCR3YWl0KSB7XG4gICAgYW5pbWF0aW9uOlxuICAgICAgICB3YWl0ICN7JHdhaXR9LFxuICAgICAgICBmYWRlLWluIDQwMG1zICN7JHdhaXR9O1xufVxuXG5Aa2V5ZnJhbWVzIHdhaXQge1xuICAgIDAlIHsgb3BhY2l0eTogMDsgfVxuICAgIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZS1pbiB7XG4gICAgMCUgeyBvcGFjaXR5OiAwOyB9XG4gICAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cbn1cblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbkBpbXBvcnQgJ21peGlucyc7XG5cbi5tYXAtdmlldyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAxO1xufVxuXG4uaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG59XG5cbmV4cGxvcmUtc2VhcmNoIHtcbiAgei1pbmRleDogMjtcbn1cblxuLmJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDUwJTtcbiAgZmxleDogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gIHotaW5kZXg6IDE7XG59XG5cbmEtbWFwIHtcbiAgei1pbmRleDogMDtcbn1cblxuW292ZXJsYXldIHtcbiAgei1pbmRleDogMTA7XG59XG5cbmEtbWFwLWNvbnRyb2xzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC41ZW07XG4gIGxlZnQ6IC41ZW07XG59XG5cbmEtem9vbS1jb250cm9scyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgbGVmdDogLjVlbTtcbn1cblxuYS1tYXAtbGVnZW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC41ZW07XG4gIHJpZ2h0OiAuNWVtO1xufVxuXG4udGltZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDFlbSAxLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBAaW5jbHVkZSBib3gtc2hhZG93O1xuICBsaW5lLWhlaWdodDogMWVtO1xuICB6LWluZGV4OiA5OTk7XG59XG5cbi5tZXNzYWdlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC41cmVtO1xuICByaWdodDogLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgQGluY2x1ZGUgYm94LXNoYWRvdztcbiAgbWF4LXdpZHRoOiAyMHJlbTtcbiAgei1pbmRleDogOTk5O1xuICBmb250LXNpemU6IDEuMjVlbTtcbiAgJi5uby11c2VyIHtcbiAgICB0b3A6IDVlbTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB9XG4gIC5sb2FkaW5nIHtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgIGxlZnQ6IC41cmVtO1xuXG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG4gIC50ZXh0IHtcbiAgICBwYWRkaW5nOiAuNWVtO1xuICB9XG59XG5cbi5maWx0ZXJzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC41cmVtO1xuICByaWdodDogLjVyZW07XG4gIHBhZGRpbmc6IDAgMS41cmVtO1xuICBib3JkZXItcmFkaXVzOiAxLjU1ZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgQGluY2x1ZGUgYm94LXNoYWRvdztcbiAgei1pbmRleDogOTk5O1xuICBmb250LXNpemU6IDFlbTtcbiAgaGVpZ2h0OiAzZW07XG4gIC50ZXh0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IC41ZW07XG4gIH1cbiAgLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAmLmFjdGl2ZSB7XG4gICAgYXBwLWljb24ge1xuICAgICAgY29sb3I6ICNkNTAwMDA7XG4gICAgfVxuICB9XG59XG5cbi5zZWxlY3Qtcm9sZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdG9wOiAwO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgQGluY2x1ZGUgYm94LXNoYWRvdztcbiAgcGFkZGluZzogLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweDtcbiAgei1pbmRleDogMTtcbn1cblxuLmFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBidXR0b24ge1xuICAgIGZsZXg6IDE7XG4gICAgbWluLXdpZHRoOiA4ZW07XG4gICAgbWFyZ2luOiAuMjVlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHdjLXJvc2U7XG4gICAgYm9yZGVyLWNvbG9yOiAkcHdjLXJvc2U7XG4gICAgJi5pbnZlcnNlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBjb2xvcjogJHB3Yy1yb3NlO1xuICAgIH1cbiAgfVxufVxuXG4udGltZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0ZW07XG4gIGxlZnQ6IC41ZW07XG4gIHBhZGRpbmc6IC41ZW0gLjc1ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIEBpbmNsdWRlIGJveC1zaGFkb3c7XG4gICYuc3BhY2UsXG4gICAgJi51c2VyIHtcbiAgICB0b3A6IDEuNWVtO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MapViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'explore-map-view',
                templateUrl: './map-view.component.html',
                styleUrls: ['./map-view.component.scss'],
            }]
    }], function () { return [{ type: _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_7__["OrganisationService"] }, { type: _user_interfaces_common__WEBPACK_IMPORTED_MODULE_5__["SettingsService"] }, { type: _user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_8__["SpacesService"] }, { type: _user_interfaces_users__WEBPACK_IMPORTED_MODULE_6__["PeopleService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "Cwrf":
/*!******************************************************************!*\
  !*** ./src/app/explore/zoom-controls/zoom-controls.component.ts ***!
  \******************************************************************/
/*! exports provided: ZoomControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomControlsComponent", function() { return ZoomControlsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../libs/components/src/lib/icon/icon.component */ "ukpX");




const _c0 = function () { return { type: "icon", class: "material-icons", content: "add" }; };
const _c1 = function () { return { type: "icon", class: "material-icons", content: "remove" }; };
const _c2 = function () { return { type: "icon", class: "material-icons", content: "replay" }; };
class ZoomControlsComponent {
    constructor() {
        /** Emitter for changes to the zoom value */
        this.zoomChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Emitter for changes to the position */
        this.positionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.min_zoom = 1;
        this.max_zoom = 10;
    }
    ngOnInit() {
    }
    zoomIn() {
        this.zoom = (this.zoom || this.min_zoom) * 1.2;
        if (this.zoom > this.max_zoom) {
            this.zoom = this.max_zoom;
        }
        this.zoomChange.emit(this.zoom);
    }
    zoomOut() {
        this.zoom = (this.zoom || this.min_zoom) * (1 / 1.2);
        if (this.zoom < this.min_zoom) {
            this.zoom = this.min_zoom;
        }
        this.zoomChange.emit(this.zoom);
    }
    reset() {
        this.zoom = this.min_zoom;
        this.position = { x: 0.5, y: 0.5 };
        this.zoomChange.emit(this.zoom);
        this.positionChange.emit(this.position);
    }
}
ZoomControlsComponent.ɵfac = function ZoomControlsComponent_Factory(t) { return new (t || ZoomControlsComponent)(); };
ZoomControlsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ZoomControlsComponent, selectors: [["a-zoom-controls"]], inputs: { zoom: "zoom", position: "position" }, outputs: { zoomChange: "zoomChange", positionChange: "positionChange" }, decls: 7, vars: 6, consts: [[1, "zoom-control"], ["mat-icon-button", "", "name", "zoom-in", 3, "click"], [3, "icon"], ["mat-icon-button", "", "name", "zoom-out", 3, "click"], ["mat-icon-button", "", "name", "reset", 3, "click"]], template: function ZoomControlsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ZoomControlsComponent_Template_button_click_1_listener() { return ctx.zoomIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ZoomControlsComponent_Template_button_click_3_listener() { return ctx.zoomOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ZoomControlsComponent_Template_button_click_5_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__["IconComponent"]], styles: ["@keyframes wait {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.zoom-control[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  background-color: #fff;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n}\nbutton[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0;\n  border-bottom: 1px solid #ccc;\n}\nbutton[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\napp-icon[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC1zdHlsZXMvdmFyaWFibGVzLnNjc3MiLCJzaGFyZWQtc3R5bGVzL21peGlucy5zY3NzIiwiYXBwcy92aXNpdG9yLWtpb3NrL3NyYy9hcHAvZXhwbG9yZS96b29tLWNvbnRyb2xzL3pvb20tY29udHJvbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O3FCQUFBO0FBZUE7OzBCQUFBO0FBd0NBOztjQUFBO0FBYUE7O3NCQUFBO0FDL0NBO0VBQ0k7SUFBSyxVQUFBO0VDUFA7RURRRTtJQUFPLFVBQUE7RUNMVDtBQUNGO0FET0E7RUFDSTtJQUFLLFVBQUE7RUNKUDtFREtFO0lBQU8sVUFBQTtFQ0ZUO0FBQ0Y7QURJQTs7c0JBQUE7QUM3QkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFREVFLGlIQUFBO0FDNkJKO0FBM0JBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FBOEJGO0FBN0JFO0VBQ0UsWUFBQTtBQStCSjtBQTNCQTtFQUNFLGdCQUFBO0FBOEJGIiwiZmlsZSI6ImFwcHMvdmlzaXRvci1raW9zay9zcmMvYXBwL2V4cGxvcmUvem9vbS1jb250cm9scy96b29tLWNvbnRyb2xzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyo9PT09PT09PT09PT09PT09PT0qXFxcbnx8IEJyYW5kaW5nIENvbG91cnMgfHxcblxcKj09PT09PT09PT09PT09PT09PSovXG5cbiRwd2Mtb3JhbmdlOiAjRDA0QTAyO1xuJHB3Yy1yb3NlOiAjRDkzOTU0O1xuJHB3Yy1yZWQ6ICNFMDMwMUU7XG4kcHdjLXllbGxvdzogI0ZGQjYwMDtcbiRwd2MtdGFuZ2VyaW5lOiAjRUI4QzAwO1xuXG4kbGlnaHQtZ3JleTogI2RkZGRkZDtcblxuJGJveFNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgjMDAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKCMwMDAsIDAuMTQpLFxuICAgIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwgMC4xMik7XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjMjFhNDUzO1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZzogI2ZmYmYxZjtcbiRwZW5kaW5nLWxpZ2h0OiBsaWdodGVuKCRwZW5kaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrOiBkYXJrZW4oJHBlbmRpbmcsIDEwKTtcblxuJGVycm9yOiAjZjQ0MzM2O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuJGNvbG9yLXByaW1hcnk6ICNkMDRhMDI7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICNlMDMwMWU7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJnLWxpZ2h0OiAjZjBmMGYwO1xuJGJnLWRhcms6ICMyNjMyMzg7XG4kZm9vdGVyLWJhY2s6ICMyNjMyMzg7XG4kZ3JleTogIzk2OTY5NjtcblxuJGNvbG9yLXRlcm5hcnk6ICMwYTBkMmU7XG4kY29sb3ItZXh0ZXJuYWw6ICMxNTFjNmE7XG5cbi8vIFR5cGUgY29sb3JzIGZvciBib29raW5nIHN0YXR1c1xuJGludGVybmFsOiAkY29sb3ItcHJpbWFyeTtcbiRleHRlcm5hbDogJGNvbG9yLWV4dGVybmFsO1xuJGNhbmNlbGxlZDogJGdyZXk7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udC1zdGFjazogJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcblxuJGhlYWRpbmctZm9udDogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiRmb250OiAkZm9udC1zdGFjaztcblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTZweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuIiwiXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AbWl4aW4gaGlkZS10ZXh0LW92ZXJmbG93IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93KCRjb2xvcjogIzAwMCwgJGRlcHRoOiAxKSB7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDFweCAqICgkZGVwdGggLSAxKSByZ2JhKCMwMDAsIC4yKSxcbiAgICAgICAgICAgICAgICAwIDFweCAxcHggMCByZ2JhKCMwMDAsIC4xNCksXG4gICAgICAgICAgICAgICAgMCAycHggMXB4IC0xcHggcmdiYSgjMDAwLCAuMTIpO1xufVxuXG5AbWl4aW4gZmFkZS1pbigkd2FpdCkge1xuICAgIGFuaW1hdGlvbjpcbiAgICAgICAgd2FpdCAjeyR3YWl0fSxcbiAgICAgICAgZmFkZS1pbiA0MDBtcyAjeyR3YWl0fTtcbn1cblxuQGtleWZyYW1lcyB3YWl0IHtcbiAgICAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgICAxMDAlIHsgb3BhY2l0eTogMDsgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xuICAgIDAlIHsgb3BhY2l0eTogMDsgfVxuICAgIDEwMCUgeyBvcGFjaXR5OiAxOyB9XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAaW1wb3J0ICdtaXhpbnMnO1xuXG4uem9vbS1jb250cm9sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBAaW5jbHVkZSBib3gtc2hhZG93O1xufVxuXG5idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICY6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG59XG5cbmFwcC1pY29uIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ZoomControlsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'a-zoom-controls',
                templateUrl: './zoom-controls.component.html',
                styleUrls: ['./zoom-controls.component.scss']
            }]
    }], function () { return []; }, { zoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], zoomChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], positionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "Ef3g":
/*!******************************************************************!*\
  !*** ./src/app/explore/footer-legend/footer-legend.component.ts ***!
  \******************************************************************/
/*! exports provided: FooterLegendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterLegendComponent", function() { return FooterLegendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../libs/components/src/lib/icon/icon.component */ "ukpX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "2kYt");





function FooterLegendComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", item_r2.colour);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dark", item_r2.dark);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2.name, " ");
} }
function FooterLegendComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", item_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.name);
} }
const _c0 = function () { return { class: "material-icons", content: "keyboard_arrow_up" }; };
class FooterLegendComponent {
    constructor() {
        /** List of colour legend items */
        this.colours = [
            { id: 'in-use', name: 'In Use', colour: '#C52A1A', dark: true },
            { id: 'available', name: 'Available', colour: '#22992E', dark: true },
            { id: 'not-bookable', name: 'Not Bookable', colour: '#7D7D7D', dark: true },
            { id: 'collab', name: 'Collaborative', colour: '#FED769' },
            { id: 'focus', name: 'Focus', colour: '#F5A478' }
        ];
        /** List of icon legend items */
        this.icon_list = [
            { id: '', name: 'Lifts Up/Down', icon: { type: 'img', src: 'assets/img/lift.svg' } },
            { id: '', name: 'Fire Extinguisher', icon: { type: 'img', src: 'assets/img/fireExt.svg' } },
            { id: '', name: 'First Aid & AED', icon: { type: 'img', src: 'assets/img/aid.svg' } },
            { id: '', name: 'Cafe/Service', icon: { type: 'img', src: 'assets/img/Cafe.svg' } },
            { id: '', name: 'Mail/Noticeboard', icon: { type: 'img', src: 'assets/img/mail.svg' } },
            { id: '', name: 'Restrooms M/F', icon: { type: 'img', src: 'assets/img/Restrooms.svg' } },
            { id: '', name: 'Map Kiosk', icon: { type: 'img', src: 'assets/img/kiosk.svg' } },
            { id: '', name: 'Screen', icon: { type: 'img', src: 'assets/img/Screen.svg' } },
            { id: '', name: 'Projector', icon: { type: 'img', src: 'assets/img/Projector.svg' } },
            { id: '', name: 'Showers', icon: { type: 'img', src: 'assets/img/shower.svg' } },
            { id: '', name: 'Chairs', icon: { type: 'img', src: 'assets/img/chair.svg' } },
            { id: '', name: 'Chairs', icon: { type: 'img', src: 'assets/img/chair2.svg' } },
            { id: '', name: 'Chairs/Couch', icon: { type: 'img', src: 'assets/img/couch.svg' } },
            { id: '', name: 'Chairs/Couch', icon: { type: 'img', src: 'assets/img/couch2.svg' } },
            { id: '', name: 'Tables', icon: { type: 'img', src: 'assets/img/Table1.svg' } },
            { id: '', name: 'Tables', icon: { type: 'img', src: 'assets/img/Table2.svg' } },
            { id: '', name: 'Tables', icon: { type: 'img', src: 'assets/img/Table3.svg' } },
            { id: '', name: 'Tables', icon: { type: 'img', src: 'assets/img/Table4.svg' } },
            { id: '', name: 'Tables', icon: { type: 'img', src: 'assets/img/Table5.svg' } },
            { id: '', name: 'Tables', icon: { type: 'img', src: 'assets/img/Table6.svg' } },
            { id: '', name: 'Tables', icon: { type: 'img', src: 'assets/img/Table7.svg' } },
            { id: '', name: 'Funzone Games', icon: { type: 'img', src: 'assets/img/Tennis.svg' } },
            { id: '', name: 'Concierge Pods', icon: { type: 'img', src: 'assets/img/Pod.svg' } },
            { id: '', name: 'Phone Booths', icon: { type: 'img', src: 'assets/img/booth.svg' } }
        ];
    }
}
FooterLegendComponent.ɵfac = function FooterLegendComponent_Factory(t) { return new (t || FooterLegendComponent)(); };
FooterLegendComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterLegendComponent, selectors: [["a-footer-legend"]], decls: 11, vars: 6, consts: [[1, "footer-legend"], [1, "tag", 3, "click"], ["mat-button", "", 1, "content"], [3, "icon"], [1, "header"], [1, "text"], [1, "colour-legend"], ["class", "colour", 3, "dark", "background-color", 4, "ngFor", "ngForOf"], [1, "icon-legend"], ["class", "icon", 4, "ngFor", "ngForOf"], [1, "colour"], [1, "icon"]], template: function FooterLegendComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterLegendComponent_Template_div_click_1_listener() { return ctx.show = !ctx.show; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Keys");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FooterLegendComponent_div_8_Template, 2, 5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FooterLegendComponent_div_10_Template, 4, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colours);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.icon_list);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["@keyframes wait {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n[_nghost-%COMP%] {\n  width: 100%;\n  z-index: 10;\n  font-size: 1.25em;\n}\n.footer-legend[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #fff;\n  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  width: 100%;\n}\n.tag[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translate(-50%, -100%);\n  overflow: hidden;\n  padding: 0.5em 0.5em 0;\n}\n.tag[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  border-radius: 4px 4px 0 0;\n  width: 8em;\n  height: 2em;\n  border: none;\n  color: rgba(0, 0, 0, 0.85);\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.25em 0.5em;\n  font-size: 1.25em;\n}\n.header[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  flex: 1;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n.time[_ngcontent-%COMP%] {\n  padding: 0.5em;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  font-size: 0.7em;\n}\n.colour-legend[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5em;\n  border: 1px solid #ccc;\n}\n.colour[_ngcontent-%COMP%] {\n  margin-right: 0.5em;\n  padding: 0.5em 1em;\n  border-radius: 4px;\n  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  flex: 1;\n  text-align: center;\n}\n.colour.dark[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.colour[_ngcontent-%COMP%]:last-child {\n  margin: 0;\n}\n.icon-legend[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  height: 0;\n  width: 100%;\n  border: 1px solid #ccc;\n  overflow: auto;\n  transition: height 200ms;\n  max-height: 25vh;\n}\n.icon-legend.show[_ngcontent-%COMP%] {\n  height: 37.5vw;\n}\n.icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  height: 12.4vw;\n  width: 12.4vw;\n  font-size: 2vw;\n  border: 1px solid #ccc;\n  flex-grow: 1;\n}\n.icon[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  font-size: 3em;\n}\n.icon[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 0.6em;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC1zdHlsZXMvdmFyaWFibGVzLnNjc3MiLCJzaGFyZWQtc3R5bGVzL21peGlucy5zY3NzIiwiYXBwcy92aXNpdG9yLWtpb3NrL3NyYy9hcHAvZXhwbG9yZS9mb290ZXItbGVnZW5kL2Zvb3Rlci1sZWdlbmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O3FCQUFBO0FBZUE7OzBCQUFBO0FBd0NBOztjQUFBO0FBYUE7O3NCQUFBO0FBcEVBOztxQkFBQTtBQWVBOzswQkFBQTtBQXdDQTs7Y0FBQTtBQWFBOztzQkFBQTtBQy9DQTtFQUNJO0lBQUssVUFBQTtFQ0tQO0VESkU7SUFBTyxVQUFBO0VDT1Q7QUFDRjtBRExBO0VBQ0k7SUFBSyxVQUFBO0VDUVA7RURQRTtJQUFPLFVBQUE7RUNVVDtBQUNGO0FEUkE7O3NCQUFBO0FDM0JBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQXdDRjtBQXJDQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RURGRSxpSEFBQTtFQ0lGLFdBQUE7QUF3Q0Y7QUFyQ0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBd0NGO0FBdkNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFRGxCQSxpSEFBQTtFQ29CQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FBeUNKO0FBckNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQXdDRjtBQXZDRTtFQUNFLE9BQUE7RUFDQSxxREZnQlc7QUV5QmY7QUFyQ0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBd0NGO0FBckNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUF3Q0Y7QUFyQ0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUR6REUsaUhBQUE7RUMyREYsT0FBQTtFQUNBLGtCQUFBO0FBd0NGO0FBdkNFO0VBQ0UsV0FBQTtBQXlDSjtBQXZDRTtFQUNFLFNBQUE7QUF5Q0o7QUFyQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FBd0NGO0FBdkNFO0VBQ0UsY0FBQTtBQXlDSjtBQXJDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUF3Q0Y7QUF2Q0U7RUFDRSxjQUFBO0FBeUNKO0FBdkNFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQXlDSiIsImZpbGUiOiJhcHBzL3Zpc2l0b3Ita2lvc2svc3JjL2FwcC9leHBsb3JlL2Zvb3Rlci1sZWdlbmQvZm9vdGVyLWxlZ2VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qPT09PT09PT09PT09PT09PT09KlxcXG58fCBCcmFuZGluZyBDb2xvdXJzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT0qL1xuXG4kcHdjLW9yYW5nZTogI0QwNEEwMjtcbiRwd2Mtcm9zZTogI0Q5Mzk1NDtcbiRwd2MtcmVkOiAjRTAzMDFFO1xuJHB3Yy15ZWxsb3c6ICNGRkI2MDA7XG4kcHdjLXRhbmdlcmluZTogI0VCOEMwMDtcblxuJGxpZ2h0LWdyZXk6ICNkZGRkZGQ7XG5cbiRib3hTaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoIzAwMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgjMDAwLCAwLjE0KSxcbiAgICAwIDJweCAxcHggLTFweCByZ2JhKCMwMDAsIDAuMTIpO1xuXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzIxYTQ1MztcbiRzdWNjZXNzLWxpZ2h0OiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHBlbmRpbmc6ICNmZmJmMWY7XG4kcGVuZGluZy1saWdodDogbGlnaHRlbigkcGVuZGluZywgMTApO1xuJHBlbmRpbmctZGFyazogZGFya2VuKCRwZW5kaW5nLCAxMCk7XG5cbiRlcnJvcjogI2Y0NDMzNjtcbiRlcnJvci1saWdodDogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cbiRjb2xvci1wcmltYXJ5OiAjZDA0YTAyO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcbiRjb2xvci1wcmltYXJ5LWRhcms6IGRhcmtlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjZTAzMDFlO1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogbGlnaHRlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6IGRhcmtlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG5cbiRiZy1saWdodDogI2YwZjBmMDtcbiRiZy1kYXJrOiAjMjYzMjM4O1xuJGZvb3Rlci1iYWNrOiAjMjYzMjM4O1xuJGdyZXk6ICM5Njk2OTY7XG5cbiRjb2xvci10ZXJuYXJ5OiAjMGEwZDJlO1xuJGNvbG9yLWV4dGVybmFsOiAjMTUxYzZhO1xuXG4vLyBUeXBlIGNvbG9ycyBmb3IgYm9va2luZyBzdGF0dXNcbiRpbnRlcm5hbDogJGNvbG9yLXByaW1hcnk7XG4kZXh0ZXJuYWw6ICRjb2xvci1leHRlcm5hbDtcbiRjYW5jZWxsZWQ6ICRncmV5O1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQtc3RhY2s6ICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG5cbiRoZWFkaW5nLWZvbnQ6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4kZm9udDogJGZvbnQtc3RhY2s7XG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE2cHg7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcbiIsIlxuQGltcG9ydCAndmFyaWFibGVzJztcblxuQG1peGluIGhpZGUtdGV4dC1vdmVyZmxvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdygkY29sb3I6ICMwMDAsICRkZXB0aDogMSkge1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAxcHggKiAoJGRlcHRoIC0gMSkgcmdiYSgjMDAwLCAuMiksXG4gICAgICAgICAgICAgICAgMCAxcHggMXB4IDAgcmdiYSgjMDAwLCAuMTQpLFxuICAgICAgICAgICAgICAgIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwgLjEyKTtcbn1cblxuQG1peGluIGZhZGUtaW4oJHdhaXQpIHtcbiAgICBhbmltYXRpb246XG4gICAgICAgIHdhaXQgI3skd2FpdH0sXG4gICAgICAgIGZhZGUtaW4gNDAwbXMgI3skd2FpdH07XG59XG5cbkBrZXlmcmFtZXMgd2FpdCB7XG4gICAgMCUgeyBvcGFjaXR5OiAwOyB9XG4gICAgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbn1cblxuQGtleWZyYW1lcyBmYWRlLWluIHtcbiAgICAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgICAxMDAlIHsgb3BhY2l0eTogMTsgfVxufVxuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuQGltcG9ydCAnbWl4aW5zJztcblxuOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTA7XG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xufVxuXG4uZm9vdGVyLWxlZ2VuZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgQGluY2x1ZGUgYm94LXNoYWRvdztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50YWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTAwJSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IC41ZW0gLjVlbSAwO1xuICAuY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdztcbiAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcbiAgICB3aWR0aDogOGVtO1xuICAgIGhlaWdodDogMmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogcmdiYSgjMDAwLCAuODUpO1xuICB9XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAuMjVlbSAuNWVtO1xuICBmb250LXNpemU6IDEuMjVlbTtcbiAgLnRleHQge1xuICAgIGZsZXg6IDE7XG4gICAgZm9udC1mYW1pbHk6ICRoZWFkaW5nLWZvbnQ7XG4gIH1cbn1cblxuLnRpbWUge1xuICBwYWRkaW5nOiAuNWVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGZvbnQtc2l6ZTogLjdlbTtcbn1cblxuLmNvbG91ci1sZWdlbmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogLjVlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxuLmNvbG91ciB7XG4gIG1hcmdpbi1yaWdodDogLjVlbTtcbiAgcGFkZGluZzogLjVlbSAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgQGluY2x1ZGUgYm94LXNoYWRvdztcbiAgZmxleDogMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAmLmRhcmsge1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gICY6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbi5pY29uLWxlZ2VuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMjAwbXM7XG4gIG1heC1oZWlnaHQ6IDI1dmg7XG4gICYuc2hvdyB7XG4gICAgaGVpZ2h0OiAzNy41dnc7XG4gIH1cbn1cblxuLmljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMi40dnc7XG4gIHdpZHRoOiAxMi40dnc7XG4gIGZvbnQtc2l6ZTogMnZ3O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBmbGV4LWdyb3c6IDE7XG4gIGFwcC1pY29uIHtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgfVxuICAudGV4dCB7XG4gICAgZm9udC1zaXplOiAuNmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterLegendComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'a-footer-legend',
                templateUrl: './footer-legend.component.html',
                styleUrls: ['./footer-legend.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "Eveq":
/*!************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/booking.class.ts ***!
  \************************************************************************************************/
/*! exports provided: Booking */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Booking", function() { return Booking; });
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "BQ33");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);


/** General purpose booking class */
class Booking extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_0__["BaseDataClass"] {
    constructor(data = {}) {
        super(data);
        this.asset_id = data.asset_id;
        this.zones = data.zones;
        this.booking_type = data.booking_type;
        this.type = data.type || 'booking';
        const time = data.booking_start * 1000 || data.date;
        const start = time
            ? dayjs__WEBPACK_IMPORTED_MODULE_1__(time).valueOf()
            : dayjs__WEBPACK_IMPORTED_MODULE_1__()
                .minute(Math.ceil(dayjs__WEBPACK_IMPORTED_MODULE_1__().minute() / 5) * 5)
                .startOf('m')
                .valueOf();
        this.date = start;
        this.duration = data.duration || dayjs__WEBPACK_IMPORTED_MODULE_1__(data.booking_end * 1000).diff(start, 'm') || 60;
        this.timezone = data.timezone;
        this.user_email = data.user_email;
        this.user_id = data.user_id;
        this.user_name = data.user_name;
        this.title = data.title || 'Desk booking';
        this.description = data.description;
        this.checked_in = data.checked_in;
        this.rejected = !!data.rejected;
        this.approved = !!data.approved;
        this.approver_id = data.approver_id;
        this.approver_email = data.approver_email;
        this.approver_name = data.approver_name;
        this.extension_data = data.extension_data;
        this.all_day = data.all_day || true;
        this.status = this.rejected ? 'declined' : this.approved ? 'approved' : 'tentative';
    }
    toJSON() {
        const data = super.toJSON();
        data.booking_start = dayjs__WEBPACK_IMPORTED_MODULE_1__(this.date).unix();
        if (this.all_day) {
            data.booking_end = dayjs__WEBPACK_IMPORTED_MODULE_1__(this.date).endOf('d').unix();
        }
        else {
            data.booking_end = dayjs__WEBPACK_IMPORTED_MODULE_1__(this.date).add(this.duration, 'm').unix();
        }
        if (!data.timezone) {
            data.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        }
        if (!this.id) {
            delete data.id;
        }
        delete data.date;
        delete data.duration;
        delete data.email;
        delete data.name;
        return data;
    }
    get location() {
        return this.description;
    }
    get is_today() {
        return dayjs__WEBPACK_IMPORTED_MODULE_1__(this.date).isSame(dayjs__WEBPACK_IMPORTED_MODULE_1__(), 'd');
    }
    /** Whether booking is done */
    get is_done() {
        const start = dayjs__WEBPACK_IMPORTED_MODULE_1__(this.date);
        const end = this.all_day ? dayjs__WEBPACK_IMPORTED_MODULE_1__(this.date).endOf('d') : start.add(this.duration, 'm');
        return start.isAfter(end, 'm');
    }
}


/***/ }),

/***/ "KnVQ":
/*!**************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/bookings.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: SharedBookingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedBookingsModule", function() { return SharedBookingsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");


class SharedBookingsModule {
}
SharedBookingsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedBookingsModule });
SharedBookingsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedBookingsModule_Factory(t) { return new (t || SharedBookingsModule)(); }, providers: [], imports: [[]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedBookingsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [],
                providers: [],
                exports: []
            }]
    }], null, null); })();


/***/ }),

/***/ "Pp7a":
/*!*****************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/booking.interfaces.ts ***!
  \*****************************************************************************************************/
/*! exports provided: BOOKING_MUTABLE_FIELDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOOKING_MUTABLE_FIELDS", function() { return BOOKING_MUTABLE_FIELDS; });
const BOOKING_MUTABLE_FIELDS = [
    'name',
    'email',
    'title',
    'date',
    'duration',
    'organiser',
    'body',
    'type',
    'has_catering',
    'recurrence',
    'space_list',
    'attendees',
    'configuration',
];


/***/ }),

/***/ "RB0m":
/*!*******************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/bookings.ts ***!
  \*******************************************************************************************/
/*! exports provided: Booking, BOOKING_MUTABLE_FIELDS, setMockBookingStartDatetime, generateMockBooking, getFreeBookingSlots, getNextFreeBookingSlot, storeBookingFormData, retrieveBookingFormData, clearBookingFormData, storeDeskBookingFormData, retrieveDeskBookingFormData, clearDeskBookingFormData, filterSpacesRules, rulesForSpace, getMinLength, durationGreaterThanOrEqual, stringToMinutes, statusFromBookings, SharedBookingsModule, BookingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _booking_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking.class */ "Eveq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Booking", function() { return _booking_class__WEBPACK_IMPORTED_MODULE_0__["Booking"]; });

/* harmony import */ var _booking_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booking.interfaces */ "Pp7a");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BOOKING_MUTABLE_FIELDS", function() { return _booking_interfaces__WEBPACK_IMPORTED_MODULE_1__["BOOKING_MUTABLE_FIELDS"]; });

/* harmony import */ var _booking_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booking.utilities */ "c1e6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setMockBookingStartDatetime", function() { return _booking_utilities__WEBPACK_IMPORTED_MODULE_2__["setMockBookingStartDatetime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateMockBooking", function() { return _booking_utilities__WEBPACK_IMPORTED_MODULE_2__["generateMockBooking"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFreeBookingSlots", function() { return _booking_utilities__WEBPACK_IMPORTED_MODULE_2__["getFreeBookingSlots"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNextFreeBookingSlot", function() { return _booking_utilities__WEBPACK_IMPORTED_MODULE_2__["getNextFreeBookingSlot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "storeBookingFormData", function() { return _booking_utilities__WEBPACK_IMPORTED_MODULE_2__["storeBookingFormData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "retrieveBookingFormData", function() { return _booking_utilities__WEBPACK_IMPORTED_MODULE_2__["retrieveBookingFormData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearBookingFormData", function() { return _booking_utilities__WEBPACK_IMPORTED_MODULE_2__["clearBookingFormData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "storeDeskBookingFormData", function() { return _booking_utilities__WEBPACK_IMPORTED_MODULE_2__["storeDeskBookingFormData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "retrieveDeskBookingFormData", function() { return _booking_utilities__WEBPACK_IMPORTED_MODULE_2__["retrieveDeskBookingFormData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearDeskBookingFormData", function() { return _booking_utilities__WEBPACK_IMPORTED_MODULE_2__["clearDeskBookingFormData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterSpacesRules", function() { return _booking_utilities__WEBPACK_IMPORTED_MODULE_2__["filterSpacesRules"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rulesForSpace", function() { return _booking_utilities__WEBPACK_IMPORTED_MODULE_2__["rulesForSpace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMinLength", function() { return _booking_utilities__WEBPACK_IMPORTED_MODULE_2__["getMinLength"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "durationGreaterThanOrEqual", function() { return _booking_utilities__WEBPACK_IMPORTED_MODULE_2__["durationGreaterThanOrEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringToMinutes", function() { return _booking_utilities__WEBPACK_IMPORTED_MODULE_2__["stringToMinutes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "statusFromBookings", function() { return _booking_utilities__WEBPACK_IMPORTED_MODULE_2__["statusFromBookings"]; });

/* harmony import */ var _bookings_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookings.module */ "KnVQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedBookingsModule", function() { return _bookings_module__WEBPACK_IMPORTED_MODULE_3__["SharedBookingsModule"]; });

/* harmony import */ var _bookings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bookings.service */ "czta");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BookingsService", function() { return _bookings_service__WEBPACK_IMPORTED_MODULE_4__["BookingsService"]; });








/***/ }),

/***/ "RFGy":
/*!**********************************************!*\
  !*** ./src/app/explore/explore.component.ts ***!
  \**********************************************/
/*! exports provided: ExploreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreComponent", function() { return ExploreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interfaces/organisation */ "dJst");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _map_view_map_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map-view/map-view.component */ "C28J");












const _c0 = function () { return ["/explore", "none"]; };
const _c1 = function () { return ["/explore", "space"]; };
const _c2 = function () { return ["/explore", "user"]; };
class ExploreComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["BaseClass"] {
    constructor(_org, _settings, _router, _dialog) {
        super();
        this._org = _org;
        this._settings = _settings;
        this._router = _router;
        this._dialog = _dialog;
    }
    ngOnInit() {
        this._settings.title = 'Explore';
        let level = '';
        if (localStorage) {
            level = localStorage.getItem('KIOSK.level');
        }
        if (!level) {
            this._router.navigate(['/bootstrap']);
        }
        this.timeout('refresh', () => this.refreshKiosk(), 2 * 60 * 1000);
    }
    get emergency_phone() {
        const level_id = localStorage.getItem('KIOSK.level');
        const level = this._org.levelWithID([level_id]);
        if (!level) {
            return;
        }
        const building = this._org.buildings.find(bld => bld.id === level.parent_id);
        if (!building) {
            return;
        }
        return building.phone_numbers.emergency || '';
    }
    /**
     * Reset the timeout for refreshing the kiosk view
     */
    resetRefresh() {
        this.timeout('refresh', () => this.refreshKiosk(), 2 * 60 * 1000);
    }
    /**
     * Refresh the kiosk view
     */
    refreshKiosk() {
        Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["log"])('EXPLORE', 'Refreshing kiosk...');
        this._dialog.closeAll();
        let level = '';
        if (localStorage) {
            level = localStorage.getItem('KIOSK.level');
        }
        if (!level) {
            this._router.navigate(['/bootstrap']);
        }
        else {
            this._router.navigate(['/explore', 'none'], { queryParams: { level } });
        }
        this._dialog.closeAll();
        this._settings.post('KIOSK.reset', new Date().getTime());
    }
}
ExploreComponent.ɵfac = function ExploreComponent_Factory(t) { return new (t || ExploreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_4__["OrganisationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
ExploreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExploreComponent, selectors: [["app-explore"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 13, vars: 7, consts: [[1, "explore", "page", 3, "mousedown", "touchstart"], [1, "header"], [1, "block"], [1, "nav"], ["mat-button", "", "routerLinkActive", "active", "queryParamsHandling", "preserve", 1, "first", 3, "routerLink"], ["mat-button", "", "routerLinkActive", "active", "queryParamsHandling", "preserve", 1, "second", 3, "routerLink"], ["mat-button", "", "routerLinkActive", "active", "queryParamsHandling", "preserve", 1, "third", 3, "routerLink"], [1, "body"]], template: function ExploreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ExploreComponent_Template_div_mousedown_0_listener() { return ctx.resetRefresh(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("touchstart", function ExploreComponent_Template_div_touchstart_0_listener() { return ctx.resetRefresh(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Workpoints ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Spaces ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " People ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "main", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "explore-map-view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" In an Emergency dial xtn 9 or ", ctx.emergency_phone, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _map_view_map_view_component__WEBPACK_IMPORTED_MODULE_6__["MapViewComponent"]], styles: ["@keyframes wait {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.page[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.page[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.body[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 50%;\n  flex: 1;\n}\nheader[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.block[_ngcontent-%COMP%] {\n  padding: 1.25em;\n  font-size: 2em;\n  text-align: center;\n  background-color: #E0301E;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n.nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[mat-button][_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 1em;\n  font-size: 2.5em;\n  border-radius: 0;\n  filter: brightness(50%);\n  transition: filter 200ms;\n  font-weight: 300;\n}\n[mat-button][_ngcontent-%COMP%]:hover {\n  filter: brightness(110%);\n}\n[mat-button].active[_ngcontent-%COMP%] {\n  filter: brightness(100%);\n}\n.first[_ngcontent-%COMP%] {\n  background-color: #EB8C00;\n  border-color: #EB8C00;\n}\n.second[_ngcontent-%COMP%] {\n  background-color: #FFB600;\n  border-color: #FFB600;\n}\n.third[_ngcontent-%COMP%] {\n  background-color: #D93954;\n  border-color: #D93954;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC1zdHlsZXMvdmFyaWFibGVzLnNjc3MiLCJzaGFyZWQtc3R5bGVzL21peGlucy5zY3NzIiwiYXBwcy92aXNpdG9yLWtpb3NrL3NyYy9hcHAvZXhwbG9yZS9leHBsb3JlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztxQkFBQTtBQWVBOzswQkFBQTtBQXdDQTs7Y0FBQTtBQWFBOztzQkFBQTtBQXBFQTs7cUJBQUE7QUFlQTs7MEJBQUE7QUF3Q0E7O2NBQUE7QUFhQTs7c0JBQUE7QUMvQ0E7RUFDSTtJQUFLLFVBQUE7RUNLUDtFREpFO0lBQU8sVUFBQTtFQ09UO0FBQ0Y7QURMQTtFQUNJO0lBQUssVUFBQTtFQ1FQO0VEUEU7SUFBTyxVQUFBO0VDVVQ7QUFDRjtBRFJBOztzQkFBQTtBQzNCQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBd0NGO0FBdkNFO0VBQ0UsV0FBQTtBQXlDSjtBQXJDQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLE9BQUE7QUF3Q0Y7QUFyQ0E7RUFDRSxXQUFBO0FBd0NGO0FBckNBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCRjFCUTtFRTJCUixxREY0QmE7QUVZZjtBQXJDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQXdDRjtBQXJDQTtFQUNFLE9BQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQXdDRjtBQXZDRTtFQUNFLHdCQUFBO0FBeUNKO0FBdkNFO0VBQ0Usd0JBQUE7QUF5Q0o7QUFyQ0E7RUFDRSx5QkZsRGM7RUVtRGQscUJGbkRjO0FFMkZoQjtBQXJDQTtFQUNFLHlCRnhEVztFRXlEWCxxQkZ6RFc7QUVpR2I7QUFyQ0E7RUFDRSx5QkYvRFM7RUVnRVQscUJGaEVTO0FFd0dYIiwiZmlsZSI6ImFwcHMvdmlzaXRvci1raW9zay9zcmMvYXBwL2V4cGxvcmUvZXhwbG9yZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qPT09PT09PT09PT09PT09PT09KlxcXG58fCBCcmFuZGluZyBDb2xvdXJzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT0qL1xuXG4kcHdjLW9yYW5nZTogI0QwNEEwMjtcbiRwd2Mtcm9zZTogI0Q5Mzk1NDtcbiRwd2MtcmVkOiAjRTAzMDFFO1xuJHB3Yy15ZWxsb3c6ICNGRkI2MDA7XG4kcHdjLXRhbmdlcmluZTogI0VCOEMwMDtcblxuJGxpZ2h0LWdyZXk6ICNkZGRkZGQ7XG5cbiRib3hTaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoIzAwMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgjMDAwLCAwLjE0KSxcbiAgICAwIDJweCAxcHggLTFweCByZ2JhKCMwMDAsIDAuMTIpO1xuXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzIxYTQ1MztcbiRzdWNjZXNzLWxpZ2h0OiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHBlbmRpbmc6ICNmZmJmMWY7XG4kcGVuZGluZy1saWdodDogbGlnaHRlbigkcGVuZGluZywgMTApO1xuJHBlbmRpbmctZGFyazogZGFya2VuKCRwZW5kaW5nLCAxMCk7XG5cbiRlcnJvcjogI2Y0NDMzNjtcbiRlcnJvci1saWdodDogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cbiRjb2xvci1wcmltYXJ5OiAjZDA0YTAyO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcbiRjb2xvci1wcmltYXJ5LWRhcms6IGRhcmtlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjZTAzMDFlO1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogbGlnaHRlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6IGRhcmtlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG5cbiRiZy1saWdodDogI2YwZjBmMDtcbiRiZy1kYXJrOiAjMjYzMjM4O1xuJGZvb3Rlci1iYWNrOiAjMjYzMjM4O1xuJGdyZXk6ICM5Njk2OTY7XG5cbiRjb2xvci10ZXJuYXJ5OiAjMGEwZDJlO1xuJGNvbG9yLWV4dGVybmFsOiAjMTUxYzZhO1xuXG4vLyBUeXBlIGNvbG9ycyBmb3IgYm9va2luZyBzdGF0dXNcbiRpbnRlcm5hbDogJGNvbG9yLXByaW1hcnk7XG4kZXh0ZXJuYWw6ICRjb2xvci1leHRlcm5hbDtcbiRjYW5jZWxsZWQ6ICRncmV5O1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQtc3RhY2s6ICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG5cbiRoZWFkaW5nLWZvbnQ6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4kZm9udDogJGZvbnQtc3RhY2s7XG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE2cHg7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcbiIsIlxuQGltcG9ydCAndmFyaWFibGVzJztcblxuQG1peGluIGhpZGUtdGV4dC1vdmVyZmxvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdygkY29sb3I6ICMwMDAsICRkZXB0aDogMSkge1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAxcHggKiAoJGRlcHRoIC0gMSkgcmdiYSgjMDAwLCAuMiksXG4gICAgICAgICAgICAgICAgMCAxcHggMXB4IDAgcmdiYSgjMDAwLCAuMTQpLFxuICAgICAgICAgICAgICAgIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwgLjEyKTtcbn1cblxuQG1peGluIGZhZGUtaW4oJHdhaXQpIHtcbiAgICBhbmltYXRpb246XG4gICAgICAgIHdhaXQgI3skd2FpdH0sXG4gICAgICAgIGZhZGUtaW4gNDAwbXMgI3skd2FpdH07XG59XG5cbkBrZXlmcmFtZXMgd2FpdCB7XG4gICAgMCUgeyBvcGFjaXR5OiAwOyB9XG4gICAgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbn1cblxuQGtleWZyYW1lcyBmYWRlLWluIHtcbiAgICAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgICAxMDAlIHsgb3BhY2l0eTogMTsgfVxufVxuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuQGltcG9ydCAnbWl4aW5zJztcblxuLnBhZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgPiAqIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiA1MCU7XG4gIGZsZXg6IDE7XG59XG5cbmhlYWRlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYmxvY2sge1xuICBwYWRkaW5nOiAxLjI1ZW07XG4gIGZvbnQtc2l6ZTogMmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwd2MtcmVkO1xuICBmb250LWZhbWlseTogJGhlYWRpbmctZm9udDtcbn1cblxuLm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblttYXQtYnV0dG9uXSB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDFlbTtcbiAgZm9udC1zaXplOiAyLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDUwJSk7XG4gIHRyYW5zaXRpb246IGZpbHRlciAyMDBtcztcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgJjpob3ZlciB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDExMCUpO1xuICB9XG4gICYuYWN0aXZlIHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTAwJSk7XG4gIH1cbn1cblxuLmZpcnN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHB3Yy10YW5nZXJpbmU7XG4gIGJvcmRlci1jb2xvcjogJHB3Yy10YW5nZXJpbmU7XG59XG5cbi5zZWNvbmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHdjLXllbGxvdztcbiAgYm9yZGVyLWNvbG9yOiAkcHdjLXllbGxvdztcbn1cblxuLnRoaXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHB3Yy1yb3NlO1xuICBib3JkZXItY29sb3I6ICRwd2Mtcm9zZTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExploreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-explore',
                templateUrl: './explore.component.html',
                styleUrls: ['./explore.component.scss']
            }]
    }], function () { return [{ type: _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_4__["OrganisationService"] }, { type: _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "RgYI":
/*!************************************************************!*\
  !*** ./src/app/explore/map-legend/map-legend.component.ts ***!
  \************************************************************/
/*! exports provided: ExploreMapLegendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreMapLegendComponent", function() { return ExploreMapLegendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../libs/components/src/lib/icon/icon.component */ "ukpX");






function ExploreMapLegendComponent_div_0_ng_container_8_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r2);
} }
function ExploreMapLegendComponent_div_0_ng_container_8_li_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", item_r6.icon);
} }
function ExploreMapLegendComponent_div_0_ng_container_8_li_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 16);
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", item_r6.color || ctx_r9.colours[item_r6.key]);
} }
function ExploreMapLegendComponent_div_0_ng_container_8_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExploreMapLegendComponent_div_0_ng_container_8_li_2_ng_container_2_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExploreMapLegendComponent_div_0_ng_container_8_li_2_ng_template_3_Template, 1, 2, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6.icon)("ngIfElse", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.name);
} }
function ExploreMapLegendComponent_div_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExploreMapLegendComponent_div_0_ng_container_8_li_1_Template, 5, 1, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExploreMapLegendComponent_div_0_ng_container_8_li_2_Template, 7, 3, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const group_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.show_group_names);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.legend_items[group_r2]);
} }
const _c0 = function (a1) { return { class: "material-icons", content: a1 }; };
function ExploreMapLegendComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExploreMapLegendComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.show_legend = !ctx_r12.show_legend; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExploreMapLegendComponent_div_0_ng_container_8_Template, 3, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r0.show_legend ? "arrow_drop_up" : "arrow_drop_down"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@show", ctx_r0.show_legend ? "show" : "hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.group_names);
} }
class ExploreMapLegendComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["BaseClass"] {
    constructor(_settings) {
        super();
        this._settings = _settings;
        /** Mapping of legend item groups */
        this.legend_items = {};
        /** Mapping of map colours */
        this.colours = {};
        /** Whether the legend items should be shown */
        this.show_legend = false;
    }
    /** List of group names for legend items */
    get group_names() {
        return Object.keys(this.legend_items || {});
    }
    ngOnInit() {
        const explore_settings = this._settings.get('app.explore') || {};
        this.legend_items = explore_settings.legend || {};
        this.colours = explore_settings.colors || {};
        this.show_group_names = !!explore_settings.show_legend_group_names;
    }
}
ExploreMapLegendComponent.ɵfac = function ExploreMapLegendComponent_Factory(t) { return new (t || ExploreMapLegendComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["SettingsService"])); };
ExploreMapLegendComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExploreMapLegendComponent, selectors: [["a-map-legend"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "map-legend", 3, "click", 4, "ngIf"], [1, "map-legend", 3, "click"], [1, "title"], [1, "icon"], [3, "icon"], [1, "contents"], [4, "ngFor", "ngForOf"], ["class", "group", 4, "ngIf"], ["class", "item", "name", "item.key", 4, "ngFor", "ngForOf"], [1, "group"], [1, "bar"], [1, "name"], ["name", "item.key", 1, "item"], [1, "ref"], [4, "ngIf", "ngIfElse"], ["colour_display", ""], [1, "colour"]], template: function ExploreMapLegendComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExploreMapLegendComponent_div_0_Template, 9, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.group_names && ctx.group_names.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["@keyframes wait {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.map-legend[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0.5em;\n  border-radius: 4px;\n  background-color: #fff;\n  margin-top: 0.4em;\n  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n}\nh4[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 0 0 0.25em;\n  font-weight: 300;\n}\n.title[_ngcontent-%COMP%] {\n  min-width: 50%;\n  flex: 1;\n  padding-left: 0.25em;\n}\n.contents[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 0.5em;\n  margin: 0.5em 0;\n  color: rgba(0, 0, 0, 0.65);\n}\n.group[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  margin: 0 0.5em;\n}\n.bar[_ngcontent-%COMP%] {\n  height: 1px;\n  min-width: 1px;\n  flex: 1;\n  background-color: rgba(0, 0, 0, 0.65);\n}\nul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\nli[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 0.65em;\n  border-radius: 4px;\n  padding: 0.5em 0.5em 0.5em 0;\n}\nli[_ngcontent-%COMP%]:nth-child(2n) {\n  background-color: rgba(0, 0, 0, 0.05);\n}\nli.group[_ngcontent-%COMP%] {\n  background: none;\n}\n.ref[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 0.5em;\n  height: 20px;\n  width: 20px;\n  border-radius: 100%;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n  overflow: hidden;\n  background-color: #fff;\n}\n.colour[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\napp-icon[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC1zdHlsZXMvdmFyaWFibGVzLnNjc3MiLCJzaGFyZWQtc3R5bGVzL21peGlucy5zY3NzIiwiYXBwcy92aXNpdG9yLWtpb3NrL3NyYy9hcHAvZXhwbG9yZS9tYXAtbGVnZW5kL21hcC1sZWdlbmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O3FCQUFBO0FBZUE7OzBCQUFBO0FBd0NBOztjQUFBO0FBYUE7O3NCQUFBO0FBcEVBOztxQkFBQTtBQWVBOzswQkFBQTtBQXdDQTs7Y0FBQTtBQWFBOztzQkFBQTtBQy9DQTtFQUNJO0lBQUssVUFBQTtFQ0tQO0VESkU7SUFBTyxVQUFBO0VDT1Q7QUFDRjtBRExBO0VBQ0k7SUFBSyxVQUFBO0VDUVA7RURQRTtJQUFPLFVBQUE7RUNVVDtBQUNGO0FEUkE7O3NCQUFBO0FDM0JBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VEQ0UsaUhBQUE7QUN3Q0o7QUFyQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBd0NGO0FBckNBO0VBQ0UsY0FBQTtFQUNBLE9BQUE7RUFDQSxvQkFBQTtBQXdDRjtBQXJDQTtFQUNFLGdCQUFBO0FBd0NGO0FBckNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUF3Q0Y7QUF2Q0U7RUFDRSxlQUFBO0FBeUNKO0FBckNBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxPQUFBO0VBQ0EscUNBQUE7QUF3Q0Y7QUFyQ0E7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBd0NGO0FBckNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0FBd0NGO0FBdkNFO0VBQ0UscUNBQUE7QUF5Q0o7QUF2Q0U7RUFDRSxnQkFBQTtBQXlDSjtBQXJDQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQXdDRjtBQXJDQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQXdDRjtBQXJDQTtFQUNFLGdCQUFBO0FBd0NGIiwiZmlsZSI6ImFwcHMvdmlzaXRvci1raW9zay9zcmMvYXBwL2V4cGxvcmUvbWFwLWxlZ2VuZC9tYXAtbGVnZW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyo9PT09PT09PT09PT09PT09PT0qXFxcbnx8IEJyYW5kaW5nIENvbG91cnMgfHxcblxcKj09PT09PT09PT09PT09PT09PSovXG5cbiRwd2Mtb3JhbmdlOiAjRDA0QTAyO1xuJHB3Yy1yb3NlOiAjRDkzOTU0O1xuJHB3Yy1yZWQ6ICNFMDMwMUU7XG4kcHdjLXllbGxvdzogI0ZGQjYwMDtcbiRwd2MtdGFuZ2VyaW5lOiAjRUI4QzAwO1xuXG4kbGlnaHQtZ3JleTogI2RkZGRkZDtcblxuJGJveFNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgjMDAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKCMwMDAsIDAuMTQpLFxuICAgIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwgMC4xMik7XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjMjFhNDUzO1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZzogI2ZmYmYxZjtcbiRwZW5kaW5nLWxpZ2h0OiBsaWdodGVuKCRwZW5kaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrOiBkYXJrZW4oJHBlbmRpbmcsIDEwKTtcblxuJGVycm9yOiAjZjQ0MzM2O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuJGNvbG9yLXByaW1hcnk6ICNkMDRhMDI7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICNlMDMwMWU7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJnLWxpZ2h0OiAjZjBmMGYwO1xuJGJnLWRhcms6ICMyNjMyMzg7XG4kZm9vdGVyLWJhY2s6ICMyNjMyMzg7XG4kZ3JleTogIzk2OTY5NjtcblxuJGNvbG9yLXRlcm5hcnk6ICMwYTBkMmU7XG4kY29sb3ItZXh0ZXJuYWw6ICMxNTFjNmE7XG5cbi8vIFR5cGUgY29sb3JzIGZvciBib29raW5nIHN0YXR1c1xuJGludGVybmFsOiAkY29sb3ItcHJpbWFyeTtcbiRleHRlcm5hbDogJGNvbG9yLWV4dGVybmFsO1xuJGNhbmNlbGxlZDogJGdyZXk7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udC1zdGFjazogJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcblxuJGhlYWRpbmctZm9udDogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiRmb250OiAkZm9udC1zdGFjaztcblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTZweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuIiwiXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AbWl4aW4gaGlkZS10ZXh0LW92ZXJmbG93IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93KCRjb2xvcjogIzAwMCwgJGRlcHRoOiAxKSB7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDFweCAqICgkZGVwdGggLSAxKSByZ2JhKCMwMDAsIC4yKSxcbiAgICAgICAgICAgICAgICAwIDFweCAxcHggMCByZ2JhKCMwMDAsIC4xNCksXG4gICAgICAgICAgICAgICAgMCAycHggMXB4IC0xcHggcmdiYSgjMDAwLCAuMTIpO1xufVxuXG5AbWl4aW4gZmFkZS1pbigkd2FpdCkge1xuICAgIGFuaW1hdGlvbjpcbiAgICAgICAgd2FpdCAjeyR3YWl0fSxcbiAgICAgICAgZmFkZS1pbiA0MDBtcyAjeyR3YWl0fTtcbn1cblxuQGtleWZyYW1lcyB3YWl0IHtcbiAgICAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgICAxMDAlIHsgb3BhY2l0eTogMDsgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xuICAgIDAlIHsgb3BhY2l0eTogMDsgfVxuICAgIDEwMCUgeyBvcGFjaXR5OiAxOyB9XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AaW1wb3J0ICdtaXhpbnMnO1xuXG4ubWFwLWxlZ2VuZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMC41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXRvcDogLjRlbTtcbiAgQGluY2x1ZGUgYm94LXNoYWRvdztcbn1cblxuaDQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDAgMCAwLjI1ZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi50aXRsZSB7XG4gIG1pbi13aWR0aDogNTAlO1xuICBmbGV4OiAxO1xuICBwYWRkaW5nLWxlZnQ6IC4yNWVtO1xufVxuXG4uY29udGVudHMge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDAuNWVtO1xuICBtYXJnaW46IC41ZW0gMDtcbiAgY29sb3I6IHJnYmEoIzAwMCwgMC42NSk7XG4gIC5uYW1lIHtcbiAgICBtYXJnaW46IDAgMC41ZW07XG4gIH1cbn1cblxuLmJhciB7XG4gIGhlaWdodDogMXB4O1xuICBtaW4td2lkdGg6IDFweDtcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMDAwLCAwLjY1KTtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbmxpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjY1ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMC41ZW0gMC41ZW0gMC41ZW0gMDtcbiAgJjpudGgtY2hpbGQoMm4pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMwMDAsIDAuMDUpO1xuICB9XG4gICYuZ3JvdXAge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gIH1cbn1cblxuLnJlZiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMCAwLjVlbTtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgjMDAwLCAwLjM1KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmNvbG91ciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xufVxuXG5hcHAtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG4iXX0= */"], data: { animation: [_user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_SHOW_CONTRACT_EXPAND"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExploreMapLegendComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'a-map-legend',
                templateUrl: './map-legend.component.html',
                styleUrls: ['./map-legend.component.scss'],
                animations: [_user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_SHOW_CONTRACT_EXPAND"]],
            }]
    }], function () { return [{ type: _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["SettingsService"] }]; }, null); })();


/***/ }),

/***/ "Rz/H":
/*!******************************************************************!*\
  !*** ./src/app/explore/status-managers/zone-status.directive.ts ***!
  \******************************************************************/
/*! exports provided: ExploreZoneStatusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreZoneStatusDirective", function() { return ExploreZoneStatusDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/ts-client */ "/It1");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @user-interfaces/organisation */ "dJst");









class ExploreZoneStatusDirective extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["BaseClass"] {
    constructor(_settings, _org) {
        super();
        this._settings = _settings;
        this._org = _org;
        /** Emitter for changes to the space status */
        this.status = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Mapping of zones IDs to their utilisation */
        this.zone_usage = {};
        /** Mapping of colours to statuses */
        this.colour_map = {};
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._settings.initialised.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(_ => _)).toPromise();
            this.colour_map = this._settings.get('app.explore.colors') || {};
        });
    }
    ngOnDestroy() {
        this.clearZones(this.zone);
    }
    calculateStatus() {
        const level = this._org.levelWithID([this.zone]);
        if (!level)
            return;
        const min_usage = level.settings.min_usage || 0;
        const status_list = [];
        for (const zone in this.zone_usage) {
            if (this.zone_usage[zone] && this.zone_usage.hasOwnProperty(zone)) {
                const usage = Math.max(min_usage, this.zone_usage[zone]);
                const status = usage < 40 ? 'low' : (usage < 75 ? 'medium' : 'high');
                status_list.push({
                    id: zone,
                    styles: {
                        fill: this.colour_map[`zone-${status}`] || '#ccc'
                    },
                    status_id: status
                });
            }
        }
        this.status.emit(status_list);
    }
    loadZones() {
        const level = this._org.levelWithID([this.zone]);
        if (!level)
            return;
        const building = this._org.buildings.find(bld => bld.id === level.parent_id);
        if (!building)
            return;
        const floor_management = building.systems.floor_management;
        if (!floor_management)
            return;
        this.system_id = floor_management;
        const mod = Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["getModule"])(this.system_id, 'FloorManagement');
        if (mod) {
            this.subscription(`zone-${this.zone}.binding`, mod.binding(this.zone).bind());
            this.subscription(`zone-${this.zone}.usage`, mod.binding(this.zone).listen().subscribe((usage => {
                this.zone_usage = usage;
                this.calculateStatus();
            })));
        }
    }
    clearZones(zone_id) {
        this.unsub(`zone-${zone_id}.binding`);
        this.unsub(`zone-${zone_id}.usage`);
        delete this.zone_usage;
        this.zone_usage = {};
    }
}
ExploreZoneStatusDirective.ɵfac = function ExploreZoneStatusDirective_Factory(t) { return new (t || ExploreZoneStatusDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_5__["OrganisationService"])); };
ExploreZoneStatusDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: ExploreZoneStatusDirective, selectors: [["", "zone-status", ""]], inputs: { zone: "zone", date: "date" }, outputs: { status: "status" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExploreZoneStatusDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[zone-status]'
            }]
    }], function () { return [{ type: _user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["SettingsService"] }, { type: _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_5__["OrganisationService"] }]; }, { zone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], date: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], status: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "Vgga":
/*!*******************************************************************!*\
  !*** ./src/app/explore/status-managers/space-status.component.ts ***!
  \*******************************************************************/
/*! exports provided: ExploreSpaceStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreSpaceStatusComponent", function() { return ExploreSpaceStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _overlays_space_info_space_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../overlays/space-info/space-info.component */ "w8y1");
/* harmony import */ var _overlays_explore_booking_modal_explore_booking_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../overlays/explore-booking-modal/explore-booking-modal.component */ "uCxk");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs */ "BQ33");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @user-interfaces/spaces */ "6CBO");
/* harmony import */ var _user_interfaces_events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @user-interfaces/events */ "eZII");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _libs_components_src_lib_binding_binding_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../libs/components/src/lib/binding/binding.directive */ "gV1Q");
















const _c0 = ["space-status", ""];
function ExploreSpaceStatusComponent_div_0_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("modelChange", function ExploreSpaceStatusComponent_div_0_i_1_Template_i_modelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const space_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r3.processSpaceBookings(space_r2, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const space_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("sys", space_r2.id);
} }
function ExploreSpaceStatusComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ExploreSpaceStatusComponent_div_0_i_1_Template, 1, 1, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.space_list);
} }
const _c1 = ["*"];
class ExploreSpaceStatusComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_7__["BaseClass"] {
    constructor(_settings, _dialog, _spaces) {
        super();
        this._settings = _settings;
        this._dialog = _dialog;
        this._spaces = _spaces;
        /** Emitter for changes to the space status */
        this.status = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Emitter for changes to the space status */
        this.listeners = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Emitter for changes to the space status */
        this.features = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** List of spaces to grab the statuses for */
        this.space_list = [];
        /** Mapping of spaces to active bookings */
        this.active_bookings = {};
        /** Mapping of colours to statuses */
        this.colour_map = {};
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._settings.initialised.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(_ => _)).toPromise();
            this.colour_map = this._settings.get('app.explore.colors') || {};
            this.subscription('spaces', this._spaces.list.subscribe(() => this.loadSpaces()));
            this.interval('update_status', () => this.calculateStatus(), 60 * 1000);
        });
    }
    ngOnChanges(changes) {
        if (changes.zone || changes.date) {
            this.loadSpaces();
        }
    }
    ngOnDestroy() {
        this.clearSpaces();
    }
    /**
     * Determine the availability statuses for all the spaces in the set zone
     */
    calculateStatus() {
        this.timeout('process_statuses', () => {
            const statuses = [];
            for (const space of this.space_list) {
                const status = this.getStatus(space, this.date);
                statuses.push({
                    id: `${space.map_id}-status`,
                    styles: {
                        fill: this.colour_map[`space-${status}`] || '#000',
                        opacity: 0.8
                    },
                    status_id: status
                });
            }
            this.status.emit(statuses);
        });
    }
    /**
     * Get the status of the space at the set time
     * @param space Space to get the status for
     */
    getStatus(space, datetime) {
        if (!space.bookable) {
            return 'not-bookable';
        }
        const bookings = this.active_bookings[space.id] || [];
        const date = dayjs__WEBPACK_IMPORTED_MODULE_6__(datetime)
            .startOf('m')
            .second(1);
        const current_booking = bookings.find(booking => {
            const start = dayjs__WEBPACK_IMPORTED_MODULE_6__(booking.date).startOf('m');
            const end = start.add(booking.duration, 'm');
            return date.isAfter(start, 's') && date.isBefore(end, 'm');
        });
        if (current_booking) {
            return 'unavailable';
        }
        return 'available';
    }
    /**
     * Process raw booking data for the given space
     * @param space Space associated with the bookings
     * @param data List of booking data
     */
    processSpaceBookings(space, data) {
        const bookings = (data || []).map(bkn_data => new _user_interfaces_events__WEBPACK_IMPORTED_MODULE_9__["CalendarEvent"](bkn_data));
        this.active_bookings[space.id] = bookings;
        this.calculateStatus();
    }
    /**
     * Load listeners for space data
     */
    loadSpaces() {
        this.clearSpaces();
        this.space_list = this._spaces.space_list.filter(space => space.zones.indexOf(this.zone) >= 0);
        const listeners = [];
        for (const space of this.space_list) {
            listeners.push({
                id: `${space.map_id}-status`,
                event: 'mouseenter',
                callback: () => this.features.emit([
                    {
                        location: space.map_id,
                        content: _overlays_space_info_space_info_component__WEBPACK_IMPORTED_MODULE_4__["ExploreSpaceInfoComponent"],
                        data: this.generateSpaceData(space)
                    }
                ])
            });
            listeners.push({
                id: `${space.map_id}-status`,
                event: 'mouseleave',
                callback: () => this.features.emit([])
            });
            // if (space.bookable) {
            //     listeners.push({
            //         id: `${space.map_id}-status`,
            //         event: 'click',
            //         callback: () => this.bookSpace(space)
            //     });
            // }
        }
        this.listeners.emit(listeners);
    }
    /**
     * Clear current space and booking data
     */
    clearSpaces() {
        delete this.active_bookings;
        this.active_bookings = {};
    }
    generateSpaceData(space) {
        const data = { space, bookings: this.active_bookings[space.id] };
        return data;
    }
    bookSpace(space) {
        const ref = this._dialog.open(_overlays_explore_booking_modal_explore_booking_modal_component__WEBPACK_IMPORTED_MODULE_5__["ExploreBookingModalComponent"], {
            maxHeight: 'none',
            maxWidth: '32em',
            height: 'auto',
            width: 'auto',
            data: {
                space
            }
        });
    }
}
ExploreSpaceStatusComponent.ɵfac = function ExploreSpaceStatusComponent_Factory(t) { return new (t || ExploreSpaceStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_interfaces_common__WEBPACK_IMPORTED_MODULE_7__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_8__["SpacesService"])); };
ExploreSpaceStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExploreSpaceStatusComponent, selectors: [["", "space-status", ""]], inputs: { zone: "zone", date: "date" }, outputs: { status: "status", listeners: "listeners", features: "features" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], attrs: _c0, ngContentSelectors: _c1, decls: 2, vars: 1, consts: [["class", "bindings", 4, "ngIf"], [1, "bindings"], ["binding", "", "mod", "Bookings", "bind", "today", 3, "sys", "modelChange", 4, "ngFor", "ngForOf"], ["binding", "", "mod", "Bookings", "bind", "today", 3, "sys", "modelChange"]], template: function ExploreSpaceStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ExploreSpaceStatusComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.space_list);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _libs_components_src_lib_binding_binding_directive__WEBPACK_IMPORTED_MODULE_11__["BindingDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExploreSpaceStatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: '[space-status]',
                template: `
        <div class="bindings" *ngIf="space_list">
            <i
                *ngFor="let space of space_list"
                binding
                [sys]="space.id"
                mod="Bookings"
                bind="today"
                (modelChange)="processSpaceBookings(space, $event)"
            ></i>
        </div>
        <ng-content></ng-content>
    `
            }]
    }], function () { return [{ type: _user_interfaces_common__WEBPACK_IMPORTED_MODULE_7__["SettingsService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: _user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_8__["SpacesService"] }]; }, { zone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], date: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], status: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], listeners: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], features: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "Y2F1":
/*!******************************************************************!*\
  !*** ./src/app/explore/status-managers/desk-status.component.ts ***!
  \******************************************************************/
/*! exports provided: ExploreDeskStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreDeskStatusComponent", function() { return ExploreDeskStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_bookings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @user-interfaces/bookings */ "05Mk");
/* harmony import */ var _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @user-interfaces/organisation */ "dJst");











const _c0 = ["desk-status", ""];
const _c1 = ["*"];
class ExploreDeskStatusComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["BaseClass"] {
    constructor(_settings, _org, _bookings) {
        super();
        this._settings = _settings;
        this._org = _org;
        this._bookings = _bookings;
        /** Emitter for changes to the desk status */
        this.status = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Emitter for available desk features */
        this.features = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Number of occupied desks on the active level */
        this.occupied = 0;
        /** Number of free desks on the active level */
        this.free = 0;
        /** Mapping of colours to statuses */
        this.colour_map = {};
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._settings.initialised.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])((_) => _)).toPromise();
            this.colour_map = this._settings.get('app.explore.colors') || {};
            this.initPolling();
        });
    }
    ngOnChanges(changes) {
        if (changes.zone) {
            this.initPolling();
            this.processDeskData(this.last_desks_list || []);
            this.calculateStatus();
        }
        if (changes.filters) {
            this.processDeskData(this.last_desks_list || []);
            this.calculateStatus();
        }
    }
    initPolling() {
        if (!this._org.levelWithID([this.zone])) {
            return this.timeout('init_polling', () => this.initPolling());
        }
        const level = this._org.levelWithID([this.zone]);
        this.subscription('poll', Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(15 * 1000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((_) => this._bookings.query({
            building: level.parent_id,
            level: this.zone,
        })))
            .subscribe((desk_list) => {
            this.processDeskData(desk_list);
            this.calculateStatus();
            this.last_desks_list = desk_list;
        }));
    }
    calculateStatus() {
        const desk_list = this.id_list || [];
        const status_list = [];
        for (const desk_id of desk_list) {
            const in_use = (this.in_use || []).find((id) => id === desk_id);
            const reserved = (this.reserved || []).find((id) => id === desk_id);
            const status = in_use ? 'unavailable' : reserved ? 'reserved' : 'available';
            status_list.push({
                id: desk_id,
                styles: {
                    fill: this.colour_map[`desk-${status}`],
                    stroke: this.colour_map[`desk-${status}-stroke`],
                },
                status_id: status,
            });
        }
        this.status.emit(status_list);
    }
    /**
     * Process API desk data
     * @param desk_list List of desk data from the API
     */
    processDeskData(desk_list) {
        if (!desk_list || !desk_list.length) {
            return;
        }
        const filtered_list = this.filters.length
            ? desk_list.filter((desk) => {
                const features = Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["unique"])(desk.attributes.split(','));
                let matches = 0;
                for (const feature of features) {
                    if (this.filters.find((filter) => filter.id === feature)) {
                        matches++;
                    }
                }
                return matches >= this.filters.length;
            })
            : desk_list;
        this.features.emit(Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["unique"])(desk_list.reduce((features, desk) => features.concat(desk.attributes.split(',')), [])));
        this.id_list = filtered_list.map((desk) => desk.id);
        this.in_use = filtered_list.reduce((list, desk) => {
            if (!desk.free) {
                list.push(desk.id);
            }
            return list;
        }, []);
    }
}
ExploreDeskStatusComponent.ɵfac = function ExploreDeskStatusComponent_Factory(t) { return new (t || ExploreDeskStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_6__["OrganisationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_interfaces_bookings__WEBPACK_IMPORTED_MODULE_5__["BookingsService"])); };
ExploreDeskStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExploreDeskStatusComponent, selectors: [["", "desk-status", ""]], inputs: { zone: "zone", filters: "filters", checkin: "checkin" }, outputs: { status: "status", features: "features" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], attrs: _c0, ngContentSelectors: _c1, decls: 1, vars: 0, template: function ExploreDeskStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExploreDeskStatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: '[desk-status]',
                template: ` <ng-content></ng-content> `,
            }]
    }], function () { return [{ type: _user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["SettingsService"] }, { type: _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_6__["OrganisationService"] }, { type: _user_interfaces_bookings__WEBPACK_IMPORTED_MODULE_5__["BookingsService"] }]; }, { zone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], filters: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], checkin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], status: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], features: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "czta":
/*!***************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/bookings.service.ts ***!
  \***************************************************************************************************/
/*! exports provided: BookingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsService", function() { return BookingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _booking_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booking.class */ "Eveq");




class BookingsService extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["BaseAPIService"] {
    constructor() {
        super();
        this._name = 'Bookings';
        this._api_route = 'bookings';
    }
    checkIn(booking, state = true) {
        return this.task(booking.id, 'check_in', {}, 'post', { state });
    }
    approve(id, fields) {
        return this.task(id, 'approve', fields);
    }
    reject(id, fields) {
        return this.task(id, 'reject', fields);
    }
    process(raw_data) {
        return new _booking_class__WEBPACK_IMPORTED_MODULE_2__["Booking"](raw_data);
    }
}
BookingsService.ɵfac = function BookingsService_Factory(t) { return new (t || BookingsService)(); };
BookingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BookingsService, factory: BookingsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookingsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "v/X9":
/*!******************************************************!*\
  !*** ./src/app/explore/filters/filters.component.ts ***!
  \******************************************************/
/*! exports provided: FiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersComponent", function() { return FiltersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ "+Tre");







function FiltersComponent_mat_checkbox_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-checkbox", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FiltersComponent_mat_checkbox_2_Template_mat_checkbox_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; return item_r1.active = $event.checked; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", item_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.name, "\n");
} }
class FiltersComponent {
    constructor(_dialog_ref) {
        this._dialog_ref = _dialog_ref;
        /** List of available filter options */
        this.filters = [];
    }
    applyChanges() {
        this._dialog_ref.close();
    }
}
FiltersComponent.ɵfac = function FiltersComponent_Factory(t) { return new (t || FiltersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
FiltersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FiltersComponent, selectors: [["filter-list"]], decls: 5, vars: 2, consts: [[3, "checked", "change", 4, "ngFor", "ngForOf"], ["mat-button", "", 3, "click"], [3, "checked", "change"]], template: function FiltersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FiltersComponent_mat_checkbox_2_Template, 2, 2, "mat-checkbox", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FiltersComponent_Template_button_click_3_listener() { return ctx.applyChanges(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.name, " Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filters);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckbox"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 1em;\n  min-width: 24em;\n}\nmat-checkbox[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 1.25em;\n}\nbutton[_ngcontent-%COMP%] {\n  min-width: 8em;\n  margin-top: 1em;\n}\nheader[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  margin-bottom: 0.5em;\n  padding: 0.5em;\n  text-align: center;\n  width: 100%;\n  color: #fff;\n  background-color: #d04a02;\n  border-radius: 4px;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC1zdHlsZXMvdmFyaWFibGVzLnNjc3MiLCJhcHBzL3Zpc2l0b3Ita2lvc2svc3JjL2FwcC9leHBsb3JlL2ZpbHRlcnMvZmlsdGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7cUJBQUE7QUFlQTs7MEJBQUE7QUF3Q0E7O2NBQUE7QUFhQTs7c0JBQUE7QUNsRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBV0Y7QUFSQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQVdGO0FBUkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQVdGO0FBUkE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkRPYztFQ05kLGtCQUFBO0VBQ0EscUREZ0NhO0FDckJmIiwiZmlsZSI6ImFwcHMvdmlzaXRvci1raW9zay9zcmMvYXBwL2V4cGxvcmUvZmlsdGVycy9maWx0ZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyo9PT09PT09PT09PT09PT09PT0qXFxcbnx8IEJyYW5kaW5nIENvbG91cnMgfHxcblxcKj09PT09PT09PT09PT09PT09PSovXG5cbiRwd2Mtb3JhbmdlOiAjRDA0QTAyO1xuJHB3Yy1yb3NlOiAjRDkzOTU0O1xuJHB3Yy1yZWQ6ICNFMDMwMUU7XG4kcHdjLXllbGxvdzogI0ZGQjYwMDtcbiRwd2MtdGFuZ2VyaW5lOiAjRUI4QzAwO1xuXG4kbGlnaHQtZ3JleTogI2RkZGRkZDtcblxuJGJveFNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgjMDAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKCMwMDAsIDAuMTQpLFxuICAgIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwgMC4xMik7XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjMjFhNDUzO1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZzogI2ZmYmYxZjtcbiRwZW5kaW5nLWxpZ2h0OiBsaWdodGVuKCRwZW5kaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrOiBkYXJrZW4oJHBlbmRpbmcsIDEwKTtcblxuJGVycm9yOiAjZjQ0MzM2O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuJGNvbG9yLXByaW1hcnk6ICNkMDRhMDI7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICNlMDMwMWU7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJnLWxpZ2h0OiAjZjBmMGYwO1xuJGJnLWRhcms6ICMyNjMyMzg7XG4kZm9vdGVyLWJhY2s6ICMyNjMyMzg7XG4kZ3JleTogIzk2OTY5NjtcblxuJGNvbG9yLXRlcm5hcnk6ICMwYTBkMmU7XG4kY29sb3ItZXh0ZXJuYWw6ICMxNTFjNmE7XG5cbi8vIFR5cGUgY29sb3JzIGZvciBib29raW5nIHN0YXR1c1xuJGludGVybmFsOiAkY29sb3ItcHJpbWFyeTtcbiRleHRlcm5hbDogJGNvbG9yLWV4dGVybmFsO1xuJGNhbmNlbGxlZDogJGdyZXk7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udC1zdGFjazogJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcblxuJGhlYWRpbmctZm9udDogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiRmb250OiAkZm9udC1zdGFjaztcblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTZweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxZW07XG4gIG1pbi13aWR0aDogMjRlbTtcbn1cblxubWF0LWNoZWNrYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xufVxuXG5idXR0b24ge1xuICBtaW4td2lkdGg6IDhlbTtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG5oZWFkZXIge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBtYXJnaW4tYm90dG9tOiAuNWVtO1xuICBwYWRkaW5nOiAuNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1mYW1pbHk6ICRoZWFkaW5nLWZvbnQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FiltersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'filter-list',
                templateUrl: './filters.component.html',
                styleUrls: ['./filters.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "vwuq":
/*!*******************************************!*\
  !*** ./src/app/explore/explore.module.ts ***!
  \*******************************************/
/*! exports provided: ExploreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreModule", function() { return ExploreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _explore_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./explore.component */ "RFGy");
/* harmony import */ var _ui_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/shared.module */ "R3Ii");
/* harmony import */ var _map_view_map_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map-view/map-view.component */ "C28J");
/* harmony import */ var _status_managers_space_status_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./status-managers/space-status.component */ "Vgga");
/* harmony import */ var _status_managers_desk_status_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./status-managers/desk-status.component */ "Y2F1");
/* harmony import */ var _status_managers_zone_status_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./status-managers/zone-status.directive */ "Rz/H");
/* harmony import */ var _zoom_controls_zoom_controls_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./zoom-controls/zoom-controls.component */ "Cwrf");
/* harmony import */ var _overlays_space_info_space_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./overlays/space-info/space-info.component */ "w8y1");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./search/search.component */ "B+D8");
/* harmony import */ var _map_legend_map_legend_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./map-legend/map-legend.component */ "RgYI");
/* harmony import */ var _footer_legend_footer_legend_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer-legend/footer-legend.component */ "Ef3g");
/* harmony import */ var _filters_filters_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./filters/filters.component */ "v/X9");
/* harmony import */ var _user_interfaces_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @user-interfaces/components */ "Rc+I");



















const ROUTES = [
    { path: '', component: _explore_component__WEBPACK_IMPORTED_MODULE_4__["ExploreComponent"] },
    { path: ':search_type', component: _explore_component__WEBPACK_IMPORTED_MODULE_4__["ExploreComponent"] }
];
class ExploreModule {
}
ExploreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ExploreModule });
ExploreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ExploreModule_Factory(t) { return new (t || ExploreModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES),
            _ui_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedContentModule"],
            _user_interfaces_components__WEBPACK_IMPORTED_MODULE_16__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExploreModule, { declarations: [_explore_component__WEBPACK_IMPORTED_MODULE_4__["ExploreComponent"],
        _map_view_map_view_component__WEBPACK_IMPORTED_MODULE_6__["MapViewComponent"],
        _status_managers_space_status_component__WEBPACK_IMPORTED_MODULE_7__["ExploreSpaceStatusComponent"],
        _status_managers_desk_status_component__WEBPACK_IMPORTED_MODULE_8__["ExploreDeskStatusComponent"],
        _status_managers_zone_status_directive__WEBPACK_IMPORTED_MODULE_9__["ExploreZoneStatusDirective"],
        _zoom_controls_zoom_controls_component__WEBPACK_IMPORTED_MODULE_10__["ZoomControlsComponent"],
        _overlays_space_info_space_info_component__WEBPACK_IMPORTED_MODULE_11__["ExploreSpaceInfoComponent"],
        _search_search_component__WEBPACK_IMPORTED_MODULE_12__["ExploreSearchComponent"],
        _map_legend_map_legend_component__WEBPACK_IMPORTED_MODULE_13__["ExploreMapLegendComponent"],
        _footer_legend_footer_legend_component__WEBPACK_IMPORTED_MODULE_14__["FooterLegendComponent"],
        _filters_filters_component__WEBPACK_IMPORTED_MODULE_15__["FiltersComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ui_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedContentModule"],
        _user_interfaces_components__WEBPACK_IMPORTED_MODULE_16__["ComponentsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExploreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _explore_component__WEBPACK_IMPORTED_MODULE_4__["ExploreComponent"],
                    _map_view_map_view_component__WEBPACK_IMPORTED_MODULE_6__["MapViewComponent"],
                    _status_managers_space_status_component__WEBPACK_IMPORTED_MODULE_7__["ExploreSpaceStatusComponent"],
                    _status_managers_desk_status_component__WEBPACK_IMPORTED_MODULE_8__["ExploreDeskStatusComponent"],
                    _status_managers_zone_status_directive__WEBPACK_IMPORTED_MODULE_9__["ExploreZoneStatusDirective"],
                    _zoom_controls_zoom_controls_component__WEBPACK_IMPORTED_MODULE_10__["ZoomControlsComponent"],
                    _overlays_space_info_space_info_component__WEBPACK_IMPORTED_MODULE_11__["ExploreSpaceInfoComponent"],
                    _search_search_component__WEBPACK_IMPORTED_MODULE_12__["ExploreSearchComponent"],
                    _map_legend_map_legend_component__WEBPACK_IMPORTED_MODULE_13__["ExploreMapLegendComponent"],
                    _footer_legend_footer_legend_component__WEBPACK_IMPORTED_MODULE_14__["FooterLegendComponent"],
                    _filters_filters_component__WEBPACK_IMPORTED_MODULE_15__["FiltersComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES),
                    _ui_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedContentModule"],
                    _user_interfaces_components__WEBPACK_IMPORTED_MODULE_16__["ComponentsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                ],
                entryComponents: [
                    _overlays_space_info_space_info_component__WEBPACK_IMPORTED_MODULE_11__["ExploreSpaceInfoComponent"],
                    _filters_filters_component__WEBPACK_IMPORTED_MODULE_15__["FiltersComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "w8y1":
/*!*********************************************************************!*\
  !*** ./src/app/explore/overlays/space-info/space-info.component.ts ***!
  \*********************************************************************/
/*! exports provided: ExploreSpaceInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreSpaceInfoComponent", function() { return ExploreSpaceInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "w8Fe");
/* harmony import */ var _user_interfaces_bookings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @user-interfaces/bookings */ "05Mk");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "BQ33");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "2kYt");







function ExploreSpaceInfoComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.available_until);
} }
function ExploreSpaceInfoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExploreSpaceInfoComponent_div_0_div_8_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("space-info " + ctx_r0.quadrant);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r0.space.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.space.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.status_class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.status_class !== "not-bookable");
} }
class ExploreSpaceInfoComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["BaseClass"] {
    constructor() {
        super();
        this.context = {};
    }
    /** Named position of the element location on the map */
    get quadrant() {
        if (!this.context || !this.context.position) {
            return 'top left';
        }
        const pos = this.context.position;
        return pos.x > 50 && pos.y > 50
            ? 'bottom right'
            : pos.x < 50 && pos.y > 50
                ? 'bottom left'
                : pos.y < 50
                    ? 'top right'
                    : 'top left';
    }
    /** CSS class for the current status of the space */
    get status_class() {
        return (this.status || '').toLowerCase().split(' ').join('-');
    }
    /** Space to display on the component */
    get space() {
        if (!this.context || !this.context.data) {
            return null;
        }
        return this.context.data.space;
    }
    /** List of bookings from the space for the currently displayed time */
    get bookings() {
        if (!this.context || !this.context.data) {
            return [];
        }
        return this.context.data.bookings || [];
    }
    ngOnInit() {
        this.processBookings();
        this.interval('update_bookings', () => this.processBookings(), 60 * 1000);
    }
    /**
     * Calculate availability of space based off given bookings
     */
    processBookings() {
        if (!this.space) {
            return;
        }
        const free_slots = Object(_user_interfaces_bookings__WEBPACK_IMPORTED_MODULE_2__["getFreeBookingSlots"])(this.bookings);
        const now = dayjs__WEBPACK_IMPORTED_MODULE_4__();
        const next_free_slot = free_slots.find(slot => {
            const start = dayjs__WEBPACK_IMPORTED_MODULE_4__(slot.start);
            const end = dayjs__WEBPACK_IMPORTED_MODULE_4__(slot.end);
            return start.isAfter(now) || (now.isAfter(start, 's') && now.isBefore(end, 'm'));
        });
        const start = dayjs__WEBPACK_IMPORTED_MODULE_4__(next_free_slot.start);
        const end = dayjs__WEBPACK_IMPORTED_MODULE_4__(next_free_slot.end);
        const currently_free = (now.isAfter(start, 's') && now.isBefore(end, 'm'));
        const time_until_next_block = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["formatDuration"])({ minutes: currently_free ? end.diff(now, 'm') : start.diff(now, 'm') });
        const free_tomorrow = !currently_free && !start.isSame(now, 'd');
        const free_today = currently_free && !end.isSame(now, 'd');
        this.status = !this.space.bookable ? 'Not Bookable' : currently_free ? 'Available' : 'Meeting in Progress';
        this.available_until = free_today
            ? 'No meetings today'
            : currently_free
                ? `Free until ${end.format('h:mm a')}(${time_until_next_block})`
                : free_tomorrow
                    ? 'Unavailable today'
                    : `Free at ${start.format('h:mm a')}(${time_until_next_block})`;
    }
}
ExploreSpaceInfoComponent.ɵfac = function ExploreSpaceInfoComponent_Factory(t) { return new (t || ExploreSpaceInfoComponent)(); };
ExploreSpaceInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExploreSpaceInfoComponent, selectors: [["a-space-info"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "id", "class", 4, "ngIf"], [3, "id"], [1, "arrow"], [1, "details"], [1, "name"], [1, "availability"], ["name", "status"], ["name", "available-until", 4, "ngIf"], ["name", "available-until"]], template: function ExploreSpaceInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExploreSpaceInfoComponent_div_0_Template, 9, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.space);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["@keyframes wait {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n[_nghost-%COMP%] {\n  pointer-events: none;\n}\n.space-info[_ngcontent-%COMP%] {\n  position: absolute;\n  min-width: 16em;\n  border-radius: 4px;\n  background-color: #fff;\n  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n}\n.space-info.top[_ngcontent-%COMP%] {\n  top: 0;\n}\n.space-info.top.left[_ngcontent-%COMP%] {\n  left: 0;\n  border-top-left-radius: 0;\n}\n.space-info.top.right[_ngcontent-%COMP%] {\n  right: 0;\n  border-top-right-radius: 0;\n}\n.space-info.bottom[_ngcontent-%COMP%] {\n  bottom: 0;\n}\n.space-info.bottom.left[_ngcontent-%COMP%] {\n  left: 0;\n  border-bottom-left-radius: 0;\n}\n.space-info.bottom.right[_ngcontent-%COMP%] {\n  right: 0;\n  border-bottom-right-radius: 0;\n}\n.top[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  top: 2px;\n}\n.top.left[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  left: 2px;\n  border-width: 8px 8px 0 0;\n  border-color: #d04a02 transparent transparent transparent;\n}\n.top.right[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  right: 2px;\n  border-width: 0 8px 8px 0;\n  border-color: transparent #d04a02 transparent transparent;\n}\n.bottom[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  bottom: 2px;\n}\n.bottom.left[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  left: 2px;\n  border-width: 8px 0 0 8px;\n  border-color: transparent transparent transparent #d04a02;\n}\n.bottom.right[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  right: 2px;\n  border-width: 0 0 8px 8px;\n  border-color: transparent transparent #d04a02 transparent;\n}\n.arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-style: solid;\n}\n.details[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n.name[_ngcontent-%COMP%] {\n  font-size: 1.25em;\n  padding: 0.2em 0.4em;\n}\n.availability[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  display: inline-block;\n}\n[name=status][_ngcontent-%COMP%] {\n  border-radius: 4px;\n  color: #fff;\n  font-size: 0.8em;\n  margin-right: auto;\n}\n[name=status].not-bookable[_ngcontent-%COMP%] {\n  background-color: #ccc;\n}\n[name=status].available[_ngcontent-%COMP%] {\n  background-color: #21a453;\n}\n[name=status].available-by-request[_ngcontent-%COMP%] {\n  background-color: #ffbf1f;\n}\n[name=status].meeting-in-progress[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC1zdHlsZXMvdmFyaWFibGVzLnNjc3MiLCJzaGFyZWQtc3R5bGVzL21peGlucy5zY3NzIiwiYXBwcy92aXNpdG9yLWtpb3NrL3NyYy9hcHAvZXhwbG9yZS9vdmVybGF5cy9zcGFjZS1pbmZvL3NwYWNlLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O3FCQUFBO0FBZUE7OzBCQUFBO0FBd0NBOztjQUFBO0FBYUE7O3NCQUFBO0FBcEVBOztxQkFBQTtBQWVBOzswQkFBQTtBQXdDQTs7Y0FBQTtBQWFBOztzQkFBQTtBQy9DQTtFQUNJO0lBQUssVUFBQTtFQ0tQO0VESkU7SUFBTyxVQUFBO0VDT1Q7QUFDRjtBRExBO0VBQ0k7SUFBSyxVQUFBO0VDUVA7RURQRTtJQUFPLFVBQUE7RUNVVDtBQUNGO0FEUkE7O3NCQUFBO0FDM0JBO0VBQ0Usb0JBQUE7QUF3Q0Y7QUFyQ0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VERkUsaUhBQUE7QUMyQ0o7QUF2Q0U7RUFDRSxNQUFBO0FBeUNKO0FBeENJO0VBQ0UsT0FBQTtFQUNBLHlCQUFBO0FBMENOO0FBeENJO0VBQ0UsUUFBQTtFQUNBLDBCQUFBO0FBMENOO0FBdkNFO0VBQ0UsU0FBQTtBQXlDSjtBQXhDSTtFQUNFLE9BQUE7RUFDQSw0QkFBQTtBQTBDTjtBQXhDSTtFQUNFLFFBQUE7RUFDQSw2QkFBQTtBQTBDTjtBQXBDRTtFQUNFLFFBQUE7QUF1Q0o7QUFwQ0k7RUFDRSxTQUFBO0VBQ0EseUJBQUE7RUFDQSx5REFBQTtBQXNDTjtBQWxDSTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtFQUNBLHlEQUFBO0FBb0NOO0FBOUJFO0VBQ0UsV0FBQTtBQWlDSjtBQTlCSTtFQUNFLFNBQUE7RUFDQSx5QkFBQTtFQUNBLHlEQUFBO0FBZ0NOO0FBNUJJO0VBQ0UsVUFBQTtFQUNBLHlCQUFBO0VBQ0EseURBQUE7QUE4Qk47QUF6QkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUE0QkY7QUF6QkE7RUFDRSxZQUFBO0FBNEJGO0FBekJBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQTRCRjtBQXhCRTtFQUNFLHVCQUFBO0VBQ0EscUJBQUE7QUEyQko7QUF2QkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBMEJGO0FBekJFO0VBQ0Usc0JBQUE7QUEyQko7QUF6QkU7RUFDRSx5QkZ4Rk07QUVtSFY7QUF6QkU7RUFDRSx5QkZ2Rk07QUVrSFY7QUF6QkU7RUFDRSx5QkZ0Rkk7QUVpSFIiLCJmaWxlIjoiYXBwcy92aXNpdG9yLWtpb3NrL3NyYy9hcHAvZXhwbG9yZS9vdmVybGF5cy9zcGFjZS1pbmZvL3NwYWNlLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKj09PT09PT09PT09PT09PT09PSpcXFxufHwgQnJhbmRpbmcgQ29sb3VycyB8fFxuXFwqPT09PT09PT09PT09PT09PT09Ki9cblxuJHB3Yy1vcmFuZ2U6ICNEMDRBMDI7XG4kcHdjLXJvc2U6ICNEOTM5NTQ7XG4kcHdjLXJlZDogI0UwMzAxRTtcbiRwd2MteWVsbG93OiAjRkZCNjAwO1xuJHB3Yy10YW5nZXJpbmU6ICNFQjhDMDA7XG5cbiRsaWdodC1ncmV5OiAjZGRkZGRkO1xuXG4kYm94U2hhZG93OiAwIDFweCAzcHggMCByZ2JhKCMwMDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoIzAwMCwgMC4xNCksXG4gICAgMCAycHggMXB4IC0xcHggcmdiYSgjMDAwLCAwLjEyKTtcblxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICMyMWE0NTM7XG4kc3VjY2Vzcy1saWdodDogbGlnaHRlbigkc3VjY2VzcywgMTApO1xuJHN1Y2Nlc3MtZGFyazogZGFya2VuKCRzdWNjZXNzLCAxMCk7XG5cbiRwZW5kaW5nOiAjZmZiZjFmO1xuJHBlbmRpbmctbGlnaHQ6IGxpZ2h0ZW4oJHBlbmRpbmcsIDEwKTtcbiRwZW5kaW5nLWRhcms6IGRhcmtlbigkcGVuZGluZywgMTApO1xuXG4kZXJyb3I6ICNmNDQzMzY7XG4kZXJyb3ItbGlnaHQ6IGxpZ2h0ZW4oJGVycm9yLCAxMCk7XG4kZXJyb3ItZGFyazogZGFya2VuKCRlcnJvciwgMTApO1xuXG4kY29sb3ItcHJpbWFyeTogI2QwNGEwMjtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcblxuJGNvbG9yLXNlY29uZGFyeTogI2UwMzAxZTtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuXG4kYmctbGlnaHQ6ICNmMGYwZjA7XG4kYmctZGFyazogIzI2MzIzODtcbiRmb290ZXItYmFjazogIzI2MzIzODtcbiRncmV5OiAjOTY5Njk2O1xuXG4kY29sb3ItdGVybmFyeTogIzBhMGQyZTtcbiRjb2xvci1leHRlcm5hbDogIzE1MWM2YTtcblxuLy8gVHlwZSBjb2xvcnMgZm9yIGJvb2tpbmcgc3RhdHVzXG4kaW50ZXJuYWw6ICRjb2xvci1wcmltYXJ5O1xuJGV4dGVybmFsOiAkY29sb3ItZXh0ZXJuYWw7XG4kY2FuY2VsbGVkOiAkZ3JleTtcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250LXN0YWNrOiAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuXG4kaGVhZGluZy1mb250OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuJGZvbnQ6ICRmb250LXN0YWNrO1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNnB4O1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG4iLCJcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbkBtaXhpbiBoaWRlLXRleHQtb3ZlcmZsb3cge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIGJveC1zaGFkb3coJGNvbG9yOiAjMDAwLCAkZGVwdGg6IDEpIHtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMXB4ICogKCRkZXB0aCAtIDEpIHJnYmEoIzAwMCwgLjIpLFxuICAgICAgICAgICAgICAgIDAgMXB4IDFweCAwIHJnYmEoIzAwMCwgLjE0KSxcbiAgICAgICAgICAgICAgICAwIDJweCAxcHggLTFweCByZ2JhKCMwMDAsIC4xMik7XG59XG5cbkBtaXhpbiBmYWRlLWluKCR3YWl0KSB7XG4gICAgYW5pbWF0aW9uOlxuICAgICAgICB3YWl0ICN7JHdhaXR9LFxuICAgICAgICBmYWRlLWluIDQwMG1zICN7JHdhaXR9O1xufVxuXG5Aa2V5ZnJhbWVzIHdhaXQge1xuICAgIDAlIHsgb3BhY2l0eTogMDsgfVxuICAgIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZS1pbiB7XG4gICAgMCUgeyBvcGFjaXR5OiAwOyB9XG4gICAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cbn1cblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbkBpbXBvcnQgJ21peGlucyc7XG5cbjpob3N0IHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5zcGFjZS1pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtaW4td2lkdGg6IDE2ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgQGluY2x1ZGUgYm94LXNoYWRvdztcbiAgJi50b3Age1xuICAgIHRvcDogMDtcbiAgICAmLmxlZnQge1xuICAgICAgbGVmdDogMDtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgfVxuICAgICYucmlnaHQge1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICB9XG4gIH1cbiAgJi5ib3R0b20ge1xuICAgIGJvdHRvbTogMDtcbiAgICAmLmxlZnQge1xuICAgICAgbGVmdDogMDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gICAgfVxuICAgICYucmlnaHQge1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgICB9XG4gIH1cbn1cblxuLnRvcCB7XG4gIC5hcnJvdyB7XG4gICAgdG9wOiAycHg7XG4gIH1cbiAgJi5sZWZ0IHtcbiAgICAuYXJyb3cge1xuICAgICAgbGVmdDogMnB4O1xuICAgICAgYm9yZGVyLXdpZHRoOiA4cHggOHB4IDAgMDtcbiAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLXByaW1hcnkgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gICAgfVxuICB9XG4gICYucmlnaHQge1xuICAgIC5hcnJvdyB7XG4gICAgICByaWdodDogMnB4O1xuICAgICAgYm9yZGVyLXdpZHRoOiAwIDhweCA4cHggMDtcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgJGNvbG9yLXByaW1hcnkgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gICAgfVxuICB9XG59XG5cbi5ib3R0b20ge1xuICAuYXJyb3cge1xuICAgIGJvdHRvbTogMnB4O1xuICB9XG4gICYubGVmdCB7XG4gICAgLmFycm93IHtcbiAgICAgIGxlZnQ6IDJweDtcbiAgICAgIGJvcmRlci13aWR0aDogOHB4IDAgMCA4cHg7XG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICRjb2xvci1wcmltYXJ5O1xuICAgIH1cbiAgfVxuICAmLnJpZ2h0IHtcbiAgICAuYXJyb3cge1xuICAgICAgcmlnaHQ6IDJweDtcbiAgICAgIGJvcmRlci13aWR0aDogMCAwIDhweCA4cHg7XG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICRjb2xvci1wcmltYXJ5IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgfVxufVxuXG4uYXJyb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG5cbi5kZXRhaWxzIHtcbiAgcGFkZGluZzogMWVtO1xufVxuXG4ubmFtZSB7XG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xuICBwYWRkaW5nOiAuMmVtIC40ZW07XG59XG5cbi5hdmFpbGFiaWxpdHkge1xuICA+ICoge1xuICAgIHBhZGRpbmc6IC4yNXJlbSAuNXJlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbn1cblxuW25hbWU9XCJzdGF0dXNcIl0ge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IC44ZW07XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgJi5ub3QtYm9va2FibGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIH1cbiAgJi5hdmFpbGFibGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzdWNjZXNzO1xuICB9XG4gICYuYXZhaWxhYmxlLWJ5LXJlcXVlc3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRwZW5kaW5nO1xuICB9XG4gICYubWVldGluZy1pbi1wcm9ncmVzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGVycm9yO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExploreSpaceInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'a-space-info',
                templateUrl: './space-info.component.html',
                styleUrls: ['./space-info.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=explore-explore-module.js.map