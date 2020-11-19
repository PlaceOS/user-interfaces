(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~bookings-bookings-module~explore-explore-module"],{

/***/ "+vRD":
/*!**********************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-search.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ExploreSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreSearchComponent", function() { return ExploreSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _explore_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./explore-search.service */ "Sq/l");
/* harmony import */ var _components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/src/lib/icon/icon.component */ "ukpX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ "ulve");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "csyo");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "mFH5");













const _c0 = ["input"];
function ExploreSearchComponent_mat_spinner_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 10);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 32);
} }
function ExploreSearchComponent_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r5.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r5.type, " ");
} }
class ExploreSearchComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["BaseClass"] {
    constructor(_search, _router, _route) {
        super();
        this._search = _search;
        this._router = _router;
        this._route = _route;
        this.show = false;
        this.search_str = '';
        this.results = this._search.search_results;
        this.loading = this._search.loading;
        this.setFilter = (s) => this._search.setFilter(s);
        this.setItem = (i) => (i instanceof Object ? this.select(i) : this.setFilter(i));
    }
    showSearch() {
        var _a;
        this.show = true;
        if ((_a = this._input_el) === null || _a === void 0 ? void 0 : _a.nativeElement) {
            this.timeout('focus', () => this._input_el.nativeElement.focus(), 200);
        }
    }
    closeSearch(e) {
        var _a;
        this.show = false;
        this.search_str = '';
        if ((_a = this._input_el) === null || _a === void 0 ? void 0 : _a.nativeElement) {
            this._input_el.nativeElement.focus();
            this._input_el.nativeElement.blur();
        }
    }
    select(item) {
        this.search_str = item.name;
        const query = {};
        query[item.type || 'space'] = item.id;
        this._router.navigate([], { relativeTo: this._route, queryParams: query });
    }
}
ExploreSearchComponent.ɵfac = function ExploreSearchComponent_Factory(t) { return new (t || ExploreSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_explore_search_service__WEBPACK_IMPORTED_MODULE_3__["ExploreSearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
ExploreSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExploreSearchComponent, selectors: [["explore-search"]], viewQuery: function ExploreSearchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._input_el = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 14, vars: 14, consts: [[1, "fixed", "inset-0", "z-0", 3, "click"], ["role", "search", "tabindex", "0", "matRipple", "", 1, "bg-white", "m-2", "flex", "items-center", "z-10", "relative", "overflow-hidden"], ["tabindex", "0", "className", "material-icons", 1, "text-2xl", 3, "click"], ["placeholder", "Search for...", 1, "flex-1", "text-base", 3, "ngModel", "matAutocomplete", "matAutocompleteConnectedTo", "ngModelChange", "blur"], ["input", ""], ["class", "mr-2", 3, "diameter", 4, "ngIf"], ["name", "anchor", "matAutocompleteOrigin", "", 1, "absolute", "bottom-0"], ["origin", "matAutocompleteOrigin"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [1, "mr-2", 3, "diameter"], [3, "value"], [1, "flex", "items-center", "leading-tight"], [1, "flex-1", "overflow-hidden"], [1, "truncate", "w-full"], [1, "text-xs"], [1, "text-xs", "font-bold", "p-2", "capitalize", "text-white", "bg-gray-500", "rounded"]], template: function ExploreSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExploreSearchComponent_Template_div_click_0_listener() { return ctx.show = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExploreSearchComponent_Template_app_icon_click_2_listener($event) { return ctx.show ? ctx.closeSearch($event) : ctx.showSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExploreSearchComponent_Template_input_ngModelChange_4_listener($event) { return ctx.search_str = $event; })("ngModelChange", function ExploreSearchComponent_Template_input_ngModelChange_4_listener($event) { return ctx.setItem($event); })("blur", function ExploreSearchComponent_Template_input_blur_4_listener() { return ctx.show = !!ctx.search_str; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExploreSearchComponent_mat_spinner_6_Template, 1, 1, "mat-spinner", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-autocomplete", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExploreSearchComponent_mat_option_12_Template, 9, 4, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", !ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.show || ctx.search_str);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.show || ctx.search_str ? "close" : "search", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search_str)("matAutocomplete", _r3)("matAutocompleteConnectedTo", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 10, ctx.loading));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 12, ctx.results));
    } }, directives: [_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__["IconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteOrigin"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatSpinner"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n                z-index: 99;\n            }\n\n            [role='search'][_ngcontent-%COMP%] {\n                height: 3.125rem;\n                width: 3.125rem;\n                border-radius: 1.5rem;\n                border: 1px solid #ccc;\n                outline: none;\n                transition: width 200ms;\n            }\n\n            app-icon[_ngcontent-%COMP%] {\n                outline: none;\n                margin: .55rem;\n            }\n\n            [role='search'].show[_ngcontent-%COMP%] {\n                width: 32rem;\n                max-width: calc(100vw - 1rem);\n                border-color: #1e88e5;\n            }\n\n            [name='anchor'][_ngcontent-%COMP%] {\n                left: 2rem;\n                right: 2rem;\n            }\n\n            input[_ngcontent-%COMP%] {\n                border: none;\n                outline: none;\n            }\n\n            .hide[_ngcontent-%COMP%] {\n                display: none;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExploreSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'explore-search',
                template: `
        <div class="fixed inset-0 z-0" [class.hide]="!show" (click)="show = false"></div>
        <div
            role="search"
            tabindex="0"
            matRipple
            class="bg-white m-2 flex items-center z-10 relative overflow-hidden"
            [class.show]="show || search_str"
        >
            <app-icon
                class="text-2xl"
                tabindex="0"
                (click)="show ? closeSearch($event) : showSearch()"
                className="material-icons"
            >
                {{ show || search_str ? 'close' : 'search' }}
            </app-icon>
            <input
                #input
                class="flex-1 text-base"
                [(ngModel)]="search_str"
                (ngModelChange)="setItem($event)"
                placeholder="Search for..."
                (blur)="show = !!search_str"
                [matAutocomplete]="auto"
                [matAutocompleteConnectedTo]="origin"
            />
            <mat-spinner *ngIf="loading | async" class="mr-2" [diameter]="32"></mat-spinner>
            <div
                name="anchor"
                class="absolute bottom-0"
                matAutocompleteOrigin
                #origin="matAutocompleteOrigin"
            ></div>
        </div>
        <mat-autocomplete #auto="matAutocomplete">
            <mat-option *ngFor="let option of results | async" [value]="option">
                <div class="flex items-center leading-tight">
                    <div class="flex-1 overflow-hidden">
                        <div class="truncate w-full">{{ option.name }}</div>
                        <div class="text-xs">{{ option.description }}</div>
                    </div>
                    <div class="text-xs font-bold p-2 capitalize text-white bg-gray-500 rounded">
                        {{ option.type }}
                    </div>
                </div>
            </mat-option>
        </mat-autocomplete>
    `,
                styles: [
                    `
            :host {
                z-index: 99;
            }

            [role='search'] {
                height: 3.125rem;
                width: 3.125rem;
                border-radius: 1.5rem;
                border: 1px solid #ccc;
                outline: none;
                transition: width 200ms;
            }

            app-icon {
                outline: none;
                margin: .55rem;
            }

            [role='search'].show {
                width: 32rem;
                max-width: calc(100vw - 1rem);
                border-color: #1e88e5;
            }

            [name='anchor'] {
                left: 2rem;
                right: 2rem;
            }

            input {
                border: none;
                outline: none;
            }

            .hide {
                display: none;
            }
        `,
                ],
            }]
    }], function () { return [{ type: _explore_search_service__WEBPACK_IMPORTED_MODULE_3__["ExploreSearchService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { _input_el: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['input']
        }] }); })();


/***/ }),

/***/ "3Bmc":
/*!*****************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-booking-modal.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: ExploreBookingModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreBookingModalComponent", function() { return ExploreBookingModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interfaces/events */ "eZII");
/* harmony import */ var _user_interfaces_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @user-interfaces/calendar */ "7JBE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/src/lib/icon/icon.component */ "ukpX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _components_src_lib_duration_field_duration_field_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/src/lib/duration-field/duration-field.component */ "gpkD");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "csyo");


















function ExploreBookingModalComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ExploreBookingModalComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "main", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Booking title is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Space:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Duration:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "a-duration-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "footer", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExploreBookingModalComponent_ng_container_5_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx_r1.form.controls.resources == null ? null : ctx_r1.form.controls.resources.value[0].display_name) || (ctx_r1.form.controls.resources == null ? null : ctx_r1.form.controls.resources.value[0].name));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](23, 3, ctx_r1.form.controls.date == null ? null : ctx_r1.form.controls.date.value, "medium"));
} }
function ExploreBookingModalComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner", 16);
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
class ExploreBookingModalComponent {
    constructor(_data, _calendars, _events, _dialog_ref) {
        this._data = _data;
        this._calendars = _calendars;
        this._events = _events;
        this._dialog_ref = _dialog_ref;
    }
    ngOnInit() {
        this.booking = new _user_interfaces_events__WEBPACK_IMPORTED_MODULE_4__["CalendarEvent"]({
            attendees: [Object.assign(Object.assign({}, this._data.space), { resource: true })],
        });
        this.form = Object(_user_interfaces_events__WEBPACK_IMPORTED_MODULE_4__["generateEventForm"])(this.booking);
    }
    save() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.form.markAllAsTouched();
            const on_error = (msg) => {
                this.loading = '';
                Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["notifyError"])(msg);
                this._dialog_ref.disableClose = false;
            };
            if (!this.form.valid) {
                const list = [];
                for (const key in this.form.controls) {
                    if (this.form.controls[key].invalid) {
                        list.push(key);
                    }
                }
                return Promise.reject(on_error(`Some form fields are not valid: [${list.join(', ')}]`));
            }
            this._dialog_ref.disableClose = true;
            this.loading = 'Checking space availability...';
            const spaces = yield this._calendars.availability({
                system_ids: (_a = this.form.controls.resources.value) === null || _a === void 0 ? void 0 : _a.map(s => s.id).join(','),
                period_start: Math.floor(this.form.value.date / 1000),
                period_end: Math.floor(this.form.value.date / 1000) + this.form.value.duration * 60,
            }).catch((e) => {
                on_error('Space is unavailble for the selected time and duration');
                throw e;
            });
            if (spaces.length <= 0) {
                return on_error('Space is unavailble for the selected time and duration');
            }
            this.loading = 'Creating booking...';
            yield this._events.save(new _user_interfaces_events__WEBPACK_IMPORTED_MODULE_4__["CalendarEvent"](this.form.value)).catch((e) => {
                on_error('Error creating booking.');
                throw e;
            });
            Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["notifySuccess"])(`Successfully created booking in ${this._data.space.display_name || this._data.space.name}`);
            this._dialog_ref.close();
        });
    }
}
ExploreBookingModalComponent.ɵfac = function ExploreBookingModalComponent_Factory(t) { return new (t || ExploreBookingModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_interfaces_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_interfaces_events__WEBPACK_IMPORTED_MODULE_4__["EventsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"])); };
ExploreBookingModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExploreBookingModalComponent, selectors: [["explore-booking-modal"]], decls: 8, vars: 3, consts: [[1, "flex-1"], ["mat-icon-button", "", "mat-dialog-close", "", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["load_state", ""], ["mat-icon-button", "", "mat-dialog-close", ""], ["className", "material-icons"], [1, "p-4", 3, "formGroup"], [1, "flex", "flex-col"], ["appearance", "outline"], ["matInput", "", "formControlName", "title", "placeholder", "Booking Title"], [1, "sm:mt-4", "mb-4"], [1, "flex", "sm:space-x-4", "flex-wrap"], ["formControlName", "duration"], [1, "flex", "justify-center", "p-2", "border-t", "border-gray-200"], ["mat-button", "", 3, "click"], [1, "w-full", "h-64", "flex", "flex-col", "items-center", "justify-center"], [1, "m-4", 3, "diameter"]], template: function ExploreBookingModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "New Booking");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ExploreBookingModalComponent_button_4_Template, 3, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ExploreBookingModalComponent_ng_container_5_Template, 31, 6, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ExploreBookingModalComponent_ng_template_6_Template, 4, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_8__["IconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"], _components_src_lib_duration_field_duration_field_component__WEBPACK_IMPORTED_MODULE_12__["DurationFieldComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: ["header[_ngcontent-%COMP%] {\n            max-width: calc(100vw + 100%);\n        }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExploreBookingModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'explore-booking-modal',
                template: `
        <header>
            <h2>New Booking</h2>
            <div class="flex-1"></div>
            <button *ngIf="!loading" mat-icon-button mat-dialog-close>
                <app-icon className="material-icons">close</app-icon>
            </button>
        </header>
        <ng-container *ngIf="!loading; else load_state">
            <main [formGroup]="form" class="p-4">
                <div class="flex flex-col">
                    <label>Title<span>*</span>:</label>
                    <mat-form-field appearance="outline">
                        <input matInput formControlName="title" placeholder="Booking Title" />
                        <mat-error>Booking title is required</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label>Space:</label>
                    <div class="sm:mt-4 mb-4">{{ form.controls.resources?.value[0].display_name || form.controls.resources?.value[0].name }}</div>
                </div>
                <div class="flex sm:space-x-4 flex-wrap">
                    <div class="flex flex-col">
                        <label>Date:</label>
                        <div class="sm:mt-4 mb-4">{{ form.controls.date?.value | date:'medium' }}</div>
                    </div>
                    <div class="flex flex-col">
                        <label>Duration:</label>
                        <a-duration-field formControlName="duration"></a-duration-field>
                    </div>
                </div>
            </main>
            <footer class="flex justify-center p-2 border-t border-gray-200">
                <button mat-button (click)="save()">Save</button>
            </footer>
        </ng-container>
        <ng-template #load_state>
            <div class="w-full h-64 flex flex-col items-center justify-center">
                <mat-spinner class="m-4" [diameter]="48"></mat-spinner>
                <p>{{ loading }}</p>
            </div>
        </ng-template>
    `,
                styles: [`
        header {
            max-width: calc(100vw + 100%);
        }
    `],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: _user_interfaces_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarService"] }, { type: _user_interfaces_events__WEBPACK_IMPORTED_MODULE_4__["EventsService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "6j8/":
/*!***************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-device-info.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ExploreDeviceInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreDeviceInfoComponent", function() { return ExploreDeviceInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _user_interfaces_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @user-interfaces/components */ "Rc+I");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "w8Fe");




class ExploreDeviceInfoComponent {
    constructor(_details, _element) {
        this._details = _details;
        this._element = _element;
        /** Mac Address of the device */
        this.mac = this._details.mac;
        /** Accuracy of the location data */
        this.variance = this._details.variance.toFixed(2);
        this.diameter = this._details.variance * 100;
    }
    /** Time of the last update */
    get last_seen() {
        return Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["formatDistanceToNow"])(new Date(this._details.last_seen * 1000), {
            addSuffix: true,
        });
    }
    ngOnInit(tries = 0) {
        if (tries > 10)
            return;
        setTimeout(() => {
            var _a;
            const parent = (_a = this._element.nativeElement.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
            if (!parent)
                return this.ngOnInit(++tries);
            const position = {
                y: parseInt(parent.style.top, 10) / 100,
                x: parseInt(parent.style.left, 10) / 100,
            };
            this.y_pos = position.y >= 0.5 ? 'bottom' : 'top';
            this.x_pos = position.x >= 0.5 ? 'right' : 'left';
        }, 200);
    }
}
ExploreDeviceInfoComponent.ɵfac = function ExploreDeviceInfoComponent_Factory(t) { return new (t || ExploreDeviceInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_interfaces_components__WEBPACK_IMPORTED_MODULE_1__["MAP_FEATURE_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ExploreDeviceInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExploreDeviceInfoComponent, selectors: [["explore-device-info"]], decls: 11, vars: 7, consts: [["name", "radius", 1, "radius", "absolute", "center", "bg-blue-600", "bg-opacity-25", "border-4", "border-dashed", "border-blue-600", "rounded-full"], ["name", "dot", 1, "h-2", "w-2", "absolute", "center", "rounded-full", "bg-blue-800", "pointer-events-auto"], ["name", "device-info"], [1, "arrow"], [1, "details"]], template: function ExploreDeviceInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"]("height: " + ctx.diameter + "%; width: " + ctx.diameter + "%;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("absolute rounded bg-white p-4 top-0 left-0 shadow pointer-events-none " + ctx.x_pos + " " + ctx.y_pos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("MAC: ", ctx.mac, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Variance: ", ctx.variance, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Last Seen: ", ctx.last_seen, "");
    } }, styles: ["[_nghost-%COMP%] {\n                pointer-events: auto;\n            }\n\n            [_nghost-%COMP%]    > [name='dot'][_ngcontent-%COMP%] {\n                box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.35);\n            }\n\n            [_nghost-%COMP%]:hover    > [name='device-info'][_ngcontent-%COMP%], [_nghost-%COMP%]:hover    > [name='radius'][_ngcontent-%COMP%] {\n                opacity: 1;\n            }\n\n            [name='radius'][_ngcontent-%COMP%] {\n                opacity: 0;\n                transition: opacity 200ms;\n                pointer-events: none;\n            }\n\n            [name='device-info'][_ngcontent-%COMP%] {\n                opacity: 0;\n                transition: opacity 200ms;\n                width: 16rem;\n                z-index: 999;\n                pointer-events: none;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExploreDeviceInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'explore-device-info',
                template: `
        <div
            name="radius"
            class="radius absolute center bg-blue-600 bg-opacity-25 border-4 border-dashed border-blue-600 rounded-full"
            [style]="'height: ' + diameter + '%; width: ' + diameter + '%;'"
        ></div>
        <div
            name="dot"
            class="h-2 w-2 absolute center rounded-full bg-blue-800 pointer-events-auto"
        ></div>
        <div
            name="device-info"
            [class]="
                'absolute rounded bg-white p-4 top-0 left-0 shadow pointer-events-none ' +
                x_pos +
                ' ' +
                y_pos
            "
        >
            <div class="arrow"></div>
            <div class="details">
                <p>MAC: {{ mac }}</p>
                <p>Variance: {{ variance }}</p>
                <p>Last Seen: {{ last_seen }}</p>
            </div>
        </div>
    `,
                styles: [
                    `
            :host {
                pointer-events: auto;
            }

            :host > [name='dot'] {
                box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.35);
            }

            :host:hover > [name='device-info'],
            :host:hover > [name='radius'] {
                opacity: 1;
            }

            [name='radius'] {
                opacity: 0;
                transition: opacity 200ms;
                pointer-events: none;
            }

            [name='device-info'] {
                opacity: 0;
                transition: opacity 200ms;
                width: 16rem;
                z-index: 999;
                pointer-events: none;
            }
        `,
                ],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_user_interfaces_components__WEBPACK_IMPORTED_MODULE_1__["MAP_FEATURE_DATA"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "AJYC":
/*!*****************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore.ts ***!
  \*****************************************************************************************/
/*! exports provided: ExploreDesksService, ExploreMapControlComponent, ExploreMapViewComponent, ExploreSearchComponent, ExploreSearchService, ExploreSpaceInfoComponent, DEFAULT_COLOURS, ExploreSpacesService, ExploreStateService, ExploreZonesService, ExploreZoomControlComponent, SharedExploreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _explore_desks_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore-desks.service */ "wWh8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExploreDesksService", function() { return _explore_desks_service__WEBPACK_IMPORTED_MODULE_0__["ExploreDesksService"]; });

/* harmony import */ var _explore_map_control_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explore-map-control.component */ "zPhw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExploreMapControlComponent", function() { return _explore_map_control_component__WEBPACK_IMPORTED_MODULE_1__["ExploreMapControlComponent"]; });

/* harmony import */ var _explore_map_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./explore-map-view.component */ "AQ+f");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExploreMapViewComponent", function() { return _explore_map_view_component__WEBPACK_IMPORTED_MODULE_2__["ExploreMapViewComponent"]; });

/* harmony import */ var _explore_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./explore-search.component */ "+vRD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExploreSearchComponent", function() { return _explore_search_component__WEBPACK_IMPORTED_MODULE_3__["ExploreSearchComponent"]; });

/* harmony import */ var _explore_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./explore-search.service */ "Sq/l");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExploreSearchService", function() { return _explore_search_service__WEBPACK_IMPORTED_MODULE_4__["ExploreSearchService"]; });

/* harmony import */ var _explore_space_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./explore-space-info.component */ "QNjw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExploreSpaceInfoComponent", function() { return _explore_space_info_component__WEBPACK_IMPORTED_MODULE_5__["ExploreSpaceInfoComponent"]; });

/* harmony import */ var _explore_spaces_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./explore-spaces.service */ "fljt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_COLOURS", function() { return _explore_spaces_service__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_COLOURS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExploreSpacesService", function() { return _explore_spaces_service__WEBPACK_IMPORTED_MODULE_6__["ExploreSpacesService"]; });

/* harmony import */ var _explore_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./explore-state.service */ "T50y");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExploreStateService", function() { return _explore_state_service__WEBPACK_IMPORTED_MODULE_7__["ExploreStateService"]; });

/* harmony import */ var _explore_zones_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./explore-zones.service */ "iQfU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExploreZonesService", function() { return _explore_zones_service__WEBPACK_IMPORTED_MODULE_8__["ExploreZonesService"]; });

/* harmony import */ var _explore_zoom_control_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./explore-zoom-control.component */ "gGs/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExploreZoomControlComponent", function() { return _explore_zoom_control_component__WEBPACK_IMPORTED_MODULE_9__["ExploreZoomControlComponent"]; });

/* harmony import */ var _explore_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./explore.module */ "FAxw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedExploreModule", function() { return _explore_module__WEBPACK_IMPORTED_MODULE_10__["SharedExploreModule"]; });














/***/ }),

/***/ "AQ+f":
/*!************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-map-view.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: ExploreMapViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreMapViewComponent", function() { return ExploreMapViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _explore_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./explore-state.service */ "T50y");
/* harmony import */ var _explore_spaces_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./explore-spaces.service */ "fljt");
/* harmony import */ var _explore_zones_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./explore-zones.service */ "iQfU");
/* harmony import */ var _explore_desks_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./explore-desks.service */ "wWh8");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @user-interfaces/spaces */ "6CBO");
/* harmony import */ var _user_interfaces_users__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @user-interfaces/users */ "mjT4");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _user_interfaces_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @user-interfaces/components */ "Rc+I");
/* harmony import */ var _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @user-interfaces/organisation */ "dJst");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @placeos/ts-client */ "/It1");
/* harmony import */ var _components_src_lib_interactive_map_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../components/src/lib/interactive-map.component */ "lYMz");
/* harmony import */ var _explore_zoom_control_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./explore-zoom-control.component */ "gGs/");
/* harmony import */ var _explore_map_control_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./explore-map-control.component */ "zPhw");
/* harmony import */ var _explore_search_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./explore-search.component */ "+vRD");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/slide-toggle */ "k8N0");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "2kYt");






























class ExploreMapViewComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_6__["BaseClass"] {
    constructor(_state, _s, _desks, _zones, _route, _spaces, _users, _org) {
        super();
        this._state = _state;
        this._s = _s;
        this._desks = _desks;
        this._zones = _zones;
        this._route = _route;
        this._spaces = _spaces;
        this._users = _users;
        this._org = _org;
        /** Observable for the active map */
        this.url = this._state.map_url;
        /** Observable for the active map */
        this.styles = this._state.map_styles;
        /** Observable for the active map */
        this.positions = this._state.map_positions;
        /** Observable for the active map */
        this.features = this._state.map_features;
        /** Observable for the active map */
        this.actions = this._state.map_actions;
        /** Observable for the labels map */
        this.labels = this._state.map_labels;
        /** Observable for the active map */
        this.options = this._state.options;
        this.setOptions = (o) => this._state.setOptions(o);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._spaces.initialised.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["first"])((_) => _)).toPromise();
            this.subscription('route.query', this._route.queryParamMap.subscribe((params) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (params.has('level')) {
                    this._state.setLevel(params.get('level'));
                }
                if (params.has('space')) {
                    const space = this._spaces.find(params.get('space'));
                    if (!space)
                        return;
                    this.locateSpace(space);
                }
                else if (params.has('user')) {
                    const user = yield this._users.show(params.get('user'));
                    if (!user)
                        return;
                    this.locateUser(user);
                }
                else {
                    this.timeout('update_location', () => {
                        this._state.setFeatures('_located', []);
                    });
                }
            })));
        });
    }
    locateSpace(space) {
        this._state.setLevel(this._org.levelWithID(space.zones).id);
        const feature = {
            location: space.map_id,
            content: _user_interfaces_components__WEBPACK_IMPORTED_MODULE_11__["MapPinComponent"],
            data: {
                message: `${space.display_name || space.name} is here`
            },
        };
        this.timeout('update_location', () => {
            this._state.setFeatures('_located', [feature]);
        });
    }
    locateUser(user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const locate_details = this._org.organisation.bindings
                .location_services;
            if (!locate_details)
                return;
            const mod = Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_13__["getModule"])(locate_details.system_id, locate_details.module);
            const locations = (yield mod.execute('locate_user', [user.email, user.id])).map((i) => new _user_interfaces_users__WEBPACK_IMPORTED_MODULE_9__["MapLocation"](i));
            locations.sort((a, b) => locate_details.priority.indexOf(a.type) -
                locate_details.priority.indexOf(b.type));
            this._state.setLevel(this._org.levelWithID([locations[0].level]).id);
            const feature = {
                location: locations[0].position,
                content: locations[0].type === 'wireless' ? _user_interfaces_components__WEBPACK_IMPORTED_MODULE_11__["MapRadiusComponent"] : _user_interfaces_components__WEBPACK_IMPORTED_MODULE_11__["MapPinComponent"],
                data: {
                    message: `${user.name} is here`,
                    radius: locations[0].variance
                },
            };
            this.timeout('update_location', () => {
                this._state.setFeatures('_located', [feature]);
            });
        });
    }
}
ExploreMapViewComponent.ɵfac = function ExploreMapViewComponent_Factory(t) { return new (t || ExploreMapViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_explore_state_service__WEBPACK_IMPORTED_MODULE_2__["ExploreStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_explore_spaces_service__WEBPACK_IMPORTED_MODULE_3__["ExploreSpacesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_explore_desks_service__WEBPACK_IMPORTED_MODULE_5__["ExploreDesksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_explore_zones_service__WEBPACK_IMPORTED_MODULE_4__["ExploreZonesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_8__["SpacesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_interfaces_users__WEBPACK_IMPORTED_MODULE_9__["StaffService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_12__["OrganisationService"])); };
ExploreMapViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExploreMapViewComponent, selectors: [["explore-map-view"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_explore_spaces_service__WEBPACK_IMPORTED_MODULE_3__["ExploreSpacesService"], _explore_desks_service__WEBPACK_IMPORTED_MODULE_5__["ExploreDesksService"], _explore_zones_service__WEBPACK_IMPORTED_MODULE_4__["ExploreZonesService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 15, vars: 24, consts: [[3, "src", "zoom", "center", "styles", "features", "actions", "labels"], [1, "absolute", "bottom-0", "right-0"], [1, "absolute", "top-0", "left-0"], [1, "absolute", "top-0", "right-0"], ["name", "zones", 1, "p-2", "bg-white", "border", "border-gray-400", "absolute", "left-0", "m-2", "rounded", "flex", "items-center"], [1, "ml-2", 3, "ngModel", "ngModelChange"]], template: function ExploreMapViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i-map", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "explore-zoom-controls", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "explore-map-controls", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "explore-search", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Zones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-slide-toggle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ExploreMapViewComponent_Template_mat_slide_toggle_ngModelChange_13_listener($event) { return ctx.setOptions({ show_zones: $event }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_7_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 8, ctx.url))("zoom", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 10, ctx.positions).zoom)("center", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 12, ctx.positions).center)("styles", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 14, ctx.styles))("features", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 16, ctx.features))("actions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 18, ctx.actions))("labels", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 20, ctx.labels));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", (tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 22, ctx.options)) == null ? null : tmp_7_0.show_zones);
    } }, directives: [_components_src_lib_interactive_map_component__WEBPACK_IMPORTED_MODULE_14__["InteractiveMapComponent"], _explore_zoom_control_component__WEBPACK_IMPORTED_MODULE_15__["ExploreZoomControlComponent"], _explore_map_control_component__WEBPACK_IMPORTED_MODULE_16__["ExploreMapControlComponent"], _explore_search_component__WEBPACK_IMPORTED_MODULE_17__["ExploreSearchComponent"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_20__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n                height: 100%;\n                width: 100%;\n            }\n\n            [name='zones'][_ngcontent-%COMP%] {\n                top: 3.5rem;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExploreMapViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'explore-map-view',
                template: `
        <i-map
            [src]="url | async"
            [zoom]="(positions | async).zoom"
            [center]="(positions | async).center"
            [styles]="styles | async"
            [features]="features | async"
            [actions]="actions | async"
            [labels]="labels | async"
        ></i-map>
        <explore-zoom-controls
            class="absolute bottom-0 right-0"
        ></explore-zoom-controls>
        <explore-map-controls
            class="absolute top-0 left-0"
        ></explore-map-controls>
        <explore-search class="absolute top-0 right-0"></explore-search>
        <div
            name="zones"
            class="p-2 bg-white border border-gray-400 absolute left-0 m-2 rounded flex items-center"
        >
            Zones
            <mat-slide-toggle
                class="ml-2"
                [ngModel]="(options | async)?.show_zones"
                (ngModelChange)="setOptions({ show_zones: $event })"
            ></mat-slide-toggle>
        </div>
    `,
                styles: [
                    `
            :host {
                height: 100%;
                width: 100%;
            }

            [name='zones'] {
                top: 3.5rem;
            }
        `,
                ],
                providers: [_explore_spaces_service__WEBPACK_IMPORTED_MODULE_3__["ExploreSpacesService"], _explore_desks_service__WEBPACK_IMPORTED_MODULE_5__["ExploreDesksService"], _explore_zones_service__WEBPACK_IMPORTED_MODULE_4__["ExploreZonesService"]],
            }]
    }], function () { return [{ type: _explore_state_service__WEBPACK_IMPORTED_MODULE_2__["ExploreStateService"] }, { type: _explore_spaces_service__WEBPACK_IMPORTED_MODULE_3__["ExploreSpacesService"] }, { type: _explore_desks_service__WEBPACK_IMPORTED_MODULE_5__["ExploreDesksService"] }, { type: _explore_zones_service__WEBPACK_IMPORTED_MODULE_4__["ExploreZonesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_8__["SpacesService"] }, { type: _user_interfaces_users__WEBPACK_IMPORTED_MODULE_9__["StaffService"] }, { type: _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_12__["OrganisationService"] }]; }, null); })();


/***/ }),

/***/ "FAxw":
/*!************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore.module.ts ***!
  \************************************************************************************************/
/*! exports provided: SharedExploreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedExploreModule", function() { return SharedExploreModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _user_interfaces_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @user-interfaces/components */ "Rc+I");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slide-toggle */ "k8N0");
/* harmony import */ var _explore_map_control_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./explore-map-control.component */ "zPhw");
/* harmony import */ var _explore_map_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./explore-map-view.component */ "AQ+f");
/* harmony import */ var _explore_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./explore-search.component */ "+vRD");
/* harmony import */ var _explore_space_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./explore-space-info.component */ "QNjw");
/* harmony import */ var _explore_zoom_control_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./explore-zoom-control.component */ "gGs/");
/* harmony import */ var _explore_device_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./explore-device-info.component */ "6j8/");
/* harmony import */ var _explore_booking_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./explore-booking-modal.component */ "3Bmc");













const COMPONENTS = [
    _explore_map_control_component__WEBPACK_IMPORTED_MODULE_5__["ExploreMapControlComponent"],
    _explore_map_view_component__WEBPACK_IMPORTED_MODULE_6__["ExploreMapViewComponent"],
    _explore_search_component__WEBPACK_IMPORTED_MODULE_7__["ExploreSearchComponent"],
    _explore_space_info_component__WEBPACK_IMPORTED_MODULE_8__["ExploreSpaceInfoComponent"],
    _explore_device_info_component__WEBPACK_IMPORTED_MODULE_10__["ExploreDeviceInfoComponent"],
    _explore_zoom_control_component__WEBPACK_IMPORTED_MODULE_9__["ExploreZoomControlComponent"],
    _explore_booking_modal_component__WEBPACK_IMPORTED_MODULE_11__["ExploreBookingModalComponent"],
];
class SharedExploreModule {
}
SharedExploreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedExploreModule });
SharedExploreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SharedExploreModule_Factory(t) { return new (t || SharedExploreModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _user_interfaces_components__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedExploreModule, { declarations: [_explore_map_control_component__WEBPACK_IMPORTED_MODULE_5__["ExploreMapControlComponent"],
        _explore_map_view_component__WEBPACK_IMPORTED_MODULE_6__["ExploreMapViewComponent"],
        _explore_search_component__WEBPACK_IMPORTED_MODULE_7__["ExploreSearchComponent"],
        _explore_space_info_component__WEBPACK_IMPORTED_MODULE_8__["ExploreSpaceInfoComponent"],
        _explore_device_info_component__WEBPACK_IMPORTED_MODULE_10__["ExploreDeviceInfoComponent"],
        _explore_zoom_control_component__WEBPACK_IMPORTED_MODULE_9__["ExploreZoomControlComponent"],
        _explore_booking_modal_component__WEBPACK_IMPORTED_MODULE_11__["ExploreBookingModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _user_interfaces_components__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"]], exports: [_explore_map_control_component__WEBPACK_IMPORTED_MODULE_5__["ExploreMapControlComponent"],
        _explore_map_view_component__WEBPACK_IMPORTED_MODULE_6__["ExploreMapViewComponent"],
        _explore_search_component__WEBPACK_IMPORTED_MODULE_7__["ExploreSearchComponent"],
        _explore_space_info_component__WEBPACK_IMPORTED_MODULE_8__["ExploreSpaceInfoComponent"],
        _explore_device_info_component__WEBPACK_IMPORTED_MODULE_10__["ExploreDeviceInfoComponent"],
        _explore_zoom_control_component__WEBPACK_IMPORTED_MODULE_9__["ExploreZoomControlComponent"],
        _explore_booking_modal_component__WEBPACK_IMPORTED_MODULE_11__["ExploreBookingModalComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedExploreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [...COMPONENTS],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _user_interfaces_components__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                ],
                exports: [...COMPONENTS],
            }]
    }], null, null); })();


/***/ }),

/***/ "QNjw":
/*!**************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-space-info.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ExploreSpaceInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreSpaceInfoComponent", function() { return ExploreSpaceInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _user_interfaces_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @user-interfaces/components */ "Rc+I");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");




function ExploreSpaceInfoComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Capacity: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r1.space.capacity, " ", ctx_r1.space.capacity === 1 ? "person" : "people", " ");
} }
function ExploreSpaceInfoComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.available_until, " ");
} }
function ExploreSpaceInfoComponent_div_0_div_10_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const feature_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", feature_r5, " ");
} }
function ExploreSpaceInfoComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Room Features");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExploreSpaceInfoComponent_div_0_div_10_li_4_Template, 2, 1, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.space.features);
} }
function ExploreSpaceInfoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExploreSpaceInfoComponent_div_0_div_5_Template, 4, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExploreSpaceInfoComponent_div_0_div_9_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExploreSpaceInfoComponent_div_0_div_10_Template, 5, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("absolute rounded bg-white p-4 top-0 left-0 shadow " + ctx_r0.x_pos + " " + ctx_r0.y_pos);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r0.space.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.space.display_name || ctx_r0.space.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.space.capacity >= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("capitalize rounded p-1 px-2 text-light " + ctx_r0.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.status !== "not-bookable");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.space.features == null ? null : ctx_r0.space.features.length) > 0);
} }
class ExploreSpaceInfoComponent {
    constructor(_details, _element) {
        this._details = _details;
        this._element = _element;
        /** Space to display details for */
        this.space = this._details.space;
        /** List of upcoming events for space */
        this.events = this._details.events;
        /** Current status of the space */
        this.status = this._details.status;
    }
    ngOnInit(tries = 0) {
        if (tries > 10)
            return;
        setTimeout(() => {
            var _a;
            const parent = (_a = this._element.nativeElement.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
            if (!parent)
                return this.ngOnInit(++tries);
            const position = {
                y: parseInt(parent.style.top, 10) / 100,
                x: parseInt(parent.style.left, 10) / 100,
            };
            this.y_pos = position.y >= 0.5 ? 'bottom' : 'top';
            this.x_pos = position.x >= 0.5 ? 'right' : 'left';
        }, 200);
    }
    get available_until() {
        return '';
    }
}
ExploreSpaceInfoComponent.ɵfac = function ExploreSpaceInfoComponent_Factory(t) { return new (t || ExploreSpaceInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_interfaces_components__WEBPACK_IMPORTED_MODULE_1__["MAP_FEATURE_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ExploreSpaceInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExploreSpaceInfoComponent, selectors: [["explore-space-info"]], decls: 1, vars: 1, consts: [["name", "space-info", 3, "id", "class", 4, "ngIf"], ["name", "space-info", 3, "id"], [1, "arrow"], [1, "details"], [1, "m-0", "mb-2"], ["class", "text-sm", 4, "ngIf"], [1, "flex", "flex-wrap", "my-2", "text-sm"], ["name", "status"], ["name", "available-until", 4, "ngIf"], ["class", "features", 4, "ngIf"], [1, "text-sm"], ["name", "available-until"], [1, "features"], [1, "pl-2"], ["class", "text-sm", 4, "ngFor", "ngForOf"]], template: function ExploreSpaceInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExploreSpaceInfoComponent_div_0_Template, 11, 10, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.space);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["[_nghost-%COMP%] {\n                position: absolute;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%, -50%);\n                pointer-events: none;\n                z-index: 1;\n            }\n\n            [name='space-info'][_ngcontent-%COMP%] {\n                width: 16rem;\n            }\n\n            [name='status'][_ngcontent-%COMP%] {\n                background-color: #43a047;\n                font-weight: 500;\n            }\n\n            [name='status'].busy[_ngcontent-%COMP%] {\n                background-color: #e53935;\n            }\n\n            [name='status'].pending[_ngcontent-%COMP%] {\n                background-color: #ffb300;\n            }\n\n            [name='status'].not-bookable[_ngcontent-%COMP%] {\n                background-color: #757575;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExploreSpaceInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'explore-space-info',
                template: `
        <div
            *ngIf="space"
            name="space-info"
            [id]="space.id"
            [class]="
                'absolute rounded bg-white p-4 top-0 left-0 shadow ' +
                x_pos +
                ' ' +
                y_pos
            "
        >
            <div class="arrow"></div>
            <div class="details">
                <h4 class="m-0 mb-2">{{ space.display_name || space.name }}</h4>
                <div class="text-sm" *ngIf="space.capacity >= 0">
                    <span>Capacity: </span>{{ space.capacity }}
                    {{ space.capacity === 1 ? 'person' : 'people' }}
                </div>
                <div class="flex flex-wrap my-2 text-sm">
                    <div
                        name="status"
                        [class]="
                            'capitalize rounded p-1 px-2 text-light ' + status
                        "
                    >
                        {{ status }}
                    </div>
                    <div
                        name="available-until"
                        *ngIf="status !== 'not-bookable'"
                    >
                        {{ available_until }}
                    </div>
                </div>
                <div class="features" *ngIf="space.features?.length > 0">
                    <h4 class="m-0 mb-2">Room Features</h4>
                    <ul class="pl-2">
                        <li
                            class="text-sm"
                            *ngFor="let feature of space.features"
                        >
                            {{ feature }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `,
                styles: [
                    `
            :host {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                pointer-events: none;
                z-index: 1;
            }

            [name='space-info'] {
                width: 16rem;
            }

            [name='status'] {
                background-color: #43a047;
                font-weight: 500;
            }

            [name='status'].busy {
                background-color: #e53935;
            }

            [name='status'].pending {
                background-color: #ffb300;
            }

            [name='status'].not-bookable {
                background-color: #757575;
            }
        `,
                ],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_user_interfaces_components__WEBPACK_IMPORTED_MODULE_1__["MAP_FEATURE_DATA"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "Sq/l":
/*!********************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-search.service.ts ***!
  \********************************************************************************************************/
/*! exports provided: ExploreSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreSearchService", function() { return ExploreSearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interfaces/spaces */ "6CBO");
/* harmony import */ var _user_interfaces_users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @user-interfaces/users */ "mjT4");









class ExploreSearchService {
    constructor(_spaces, _staff) {
        this._spaces = _spaces;
        this._staff = _staff;
        /** Current search results for spaces */
        this._space_list = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        /** Current search results for staff users */
        this._user_list = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        /** Filter string for results */
        this._filter = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        /** Whether results are being loaded */
        this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.search_results = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this._space_list, this._user_list]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((i) => {
            const results = [
                ...i[0].map((s) => ({
                    id: s.id,
                    type: 'space',
                    name: s.display_name || s.name,
                    description: `Capacity: ${s.capacity} `,
                })),
                ...i[1].map((u) => ({ id: u.email, type: 'user', name: u.name, description: u.email })),
            ];
            results.sort((a, b) => a.name.localeCompare(b.name));
            return results;
        }));
        /** Obverable for current space search results */
        this.space_list = this._space_list.asObservable();
        /** Obverable for current user search results */
        this.user_list = this._user_list.asObservable();
        /** Obverable for whether results are being loaded */
        this.loading = this._loading.asObservable();
        this._spaces.list.subscribe(() => this._filter.next(this._filter.getValue()));
        this._filter.subscribe((filter_str) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this._loading.next(true);
            const s = filter_str.toLowerCase();
            this._space_list.next(this._spaces.space_list.filter((space) => space.email.toLowerCase().includes(s) ||
                space.name.toLowerCase().includes(s) ||
                space.display_name.toLowerCase().includes(s)));
            this._user_list.next([]);
            if (s.length > 2) {
                const users = yield this._staff.query({ q: s }).catch(_ => null);
                this._user_list.next(users || []);
            }
            this._loading.next(false);
        }));
    }
    setFilter(str) {
        this._filter.next(str);
    }
}
ExploreSearchService.ɵfac = function ExploreSearchService_Factory(t) { return new (t || ExploreSearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_4__["SpacesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_interfaces_users__WEBPACK_IMPORTED_MODULE_5__["StaffService"])); };
ExploreSearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ExploreSearchService, factory: ExploreSearchService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExploreSearchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_4__["SpacesService"] }, { type: _user_interfaces_users__WEBPACK_IMPORTED_MODULE_5__["StaffService"] }]; }, null); })();


/***/ }),

/***/ "T50y":
/*!*******************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-state.service.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ExploreStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreStateService", function() { return ExploreStateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interfaces/organisation */ "dJst");
/* harmony import */ var _user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @user-interfaces/spaces */ "6CBO");










class ExploreStateService extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["BaseClass"] {
    constructor(_org, _spaces, _settings) {
        super();
        this._org = _org;
        this._spaces = _spaces;
        this._settings = _settings;
        /** Currently active level */
        this._level = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        /** Currently active level */
        this._positions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
            zoom: 1,
            center: { x: 0.5, y: 0.5 },
        });
        /** Mapping of groups to their styles */
        this._styles = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        /** Mapping of groups to their features */
        this._features = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        /** Mapping of groups to their actions */
        this._actions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        /** Mapping of groups to their actions */
        this._labels = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this._options = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        /** Currently active level */
        this.level = this._level.asObservable();
        /** Spaces associated with the active level */
        this.spaces = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this._level, this._spaces.list]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((details) => details[1].filter((space) => space.zones.includes(details[0].id))));
        /** Currently shown space's map URL */
        this.map_url = this._level.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((lvl) => (lvl ? lvl.map_id : '') || ''));
        /** Currently center and zoom positions for map */
        this.map_positions = this._positions.asObservable();
        /** Currently center and zoom positions for map */
        this.map_features = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this._features, this._options]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(details => {
            const [features, options] = details;
            let list = [];
            for (const key in features) {
                if (key !== 'devices' || (options.show_zones && this._settings.get('app.explore.display_devices') !== false)) {
                    list = list.concat(features[key]);
                }
            }
            return list;
        }));
        /** Currently center and zoom positions for map */
        this.map_actions = this._actions.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(i => Object.values(i).reduce((list, a) => list.concat(a), [])));
        /** Currently center and zoom positions for map */
        this.map_labels = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this._labels, this._options]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(details => {
            const [labels, options] = details;
            let list = [];
            for (const key in labels) {
                if (key !== 'zones' || options.show_zones) {
                    list = list.concat(labels[key]);
                }
            }
            return list;
        }));
        /** Current map styles */
        this.map_styles = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this._styles, this._options]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((details) => {
            const [styles, options] = details;
            const style_mappings = Object.keys(styles).reduce((a, h) => (Object.assign(Object.assign({}, a), styles[h])), {});
            if (!options.show_zones) {
                style_mappings['#zones'] = { display: 'none' };
                style_mappings['#Zones'] = { display: 'none' };
            }
            style_mappings['text'] = { display: 'none' };
            return style_mappings;
        }));
        this.options = this._options.asObservable();
        this._org.initialised.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])((_) => _)).subscribe(() => {
            this.subscription('building', this._org.active_building.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((_) => !!_)).subscribe((bld) => {
                const level = this._level.getValue();
                const level_list = this._org.levelsForBuilding(bld);
                const has_level = level_list.find((lvl) => (level === null || level === void 0 ? void 0 : level.id) === lvl.id);
                if (!has_level && level_list.length) {
                    this.setLevel(level_list[0].id);
                }
            }));
        });
    }
    get positions() {
        return this._positions.getValue();
    }
    setOptions(options) {
        this._options.next(Object.assign(Object.assign({}, this._options.getValue()), options));
    }
    setLevel(zone_id) {
        const lvl = this._org.levelWithID([zone_id]);
        if (lvl) {
            this._level.next(lvl);
        }
    }
    setStyles(name, styles) {
        const style_map = this._styles.getValue();
        style_map[name] = styles;
        this._styles.next(style_map);
    }
    setFeatures(name, features) {
        const feature_map = this._features.getValue();
        feature_map[name] = features;
        this._features.next(feature_map);
    }
    setActions(name, actions) {
        const actions_map = this._actions.getValue();
        actions_map[name] = actions;
        this._actions.next(actions_map);
    }
    setLabels(name, labels) {
        const labels_map = this._labels.getValue();
        labels_map[name] = labels;
        this._labels.next(labels_map);
    }
    setPositions(zoom, center) {
        this._positions.next({ zoom, center });
    }
}
ExploreStateService.ɵfac = function ExploreStateService_Factory(t) { return new (t || ExploreStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_4__["OrganisationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_5__["SpacesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["SettingsService"])); };
ExploreStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExploreStateService, factory: ExploreStateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExploreStateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_4__["OrganisationService"] }, { type: _user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_5__["SpacesService"] }, { type: _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] }]; }, null); })();


/***/ }),

/***/ "aAMe":
/*!***********************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/explore/src/index.ts ***!
  \***********************************************************************************/
/*! exports provided: ExploreDesksService, ExploreMapControlComponent, ExploreMapViewComponent, ExploreSearchComponent, ExploreSearchService, ExploreSpaceInfoComponent, DEFAULT_COLOURS, ExploreSpacesService, ExploreStateService, ExploreZonesService, ExploreZoomControlComponent, SharedExploreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_explore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/explore */ "AJYC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExploreDesksService", function() { return _lib_explore__WEBPACK_IMPORTED_MODULE_0__["ExploreDesksService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExploreMapControlComponent", function() { return _lib_explore__WEBPACK_IMPORTED_MODULE_0__["ExploreMapControlComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExploreMapViewComponent", function() { return _lib_explore__WEBPACK_IMPORTED_MODULE_0__["ExploreMapViewComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExploreSearchComponent", function() { return _lib_explore__WEBPACK_IMPORTED_MODULE_0__["ExploreSearchComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExploreSearchService", function() { return _lib_explore__WEBPACK_IMPORTED_MODULE_0__["ExploreSearchService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExploreSpaceInfoComponent", function() { return _lib_explore__WEBPACK_IMPORTED_MODULE_0__["ExploreSpaceInfoComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_COLOURS", function() { return _lib_explore__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_COLOURS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExploreSpacesService", function() { return _lib_explore__WEBPACK_IMPORTED_MODULE_0__["ExploreSpacesService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExploreStateService", function() { return _lib_explore__WEBPACK_IMPORTED_MODULE_0__["ExploreStateService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExploreZonesService", function() { return _lib_explore__WEBPACK_IMPORTED_MODULE_0__["ExploreZonesService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExploreZoomControlComponent", function() { return _lib_explore__WEBPACK_IMPORTED_MODULE_0__["ExploreZoomControlComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedExploreModule", function() { return _lib_explore__WEBPACK_IMPORTED_MODULE_0__["SharedExploreModule"]; });




/***/ }),

/***/ "fljt":
/*!********************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-spaces.service.ts ***!
  \********************************************************************************************************/
/*! exports provided: DEFAULT_COLOURS, ExploreSpacesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_COLOURS", function() { return DEFAULT_COLOURS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreSpacesService", function() { return ExploreSpacesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/ts-client */ "/It1");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @user-interfaces/events */ "eZII");
/* harmony import */ var _explore_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./explore-state.service */ "T50y");
/* harmony import */ var _explore_space_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./explore-space-info.component */ "QNjw");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _explore_booking_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./explore-booking-modal.component */ "3Bmc");












const DEFAULT_COLOURS = {
    free: '#43a047',
    pending: '#ffb300',
    reserved: '#3949ab',
    busy: '#e53935',
    'not-bookable': '#757575',
    unknown: '#757575',
};
class ExploreSpacesService extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["BaseClass"] {
    constructor(_state, _settings, _dialog) {
        super();
        this._state = _state;
        this._settings = _settings;
        this._dialog = _dialog;
        this._spaces = [];
        this._bookings = {};
        this._bindings = [];
        this._statuses = {};
        this.subscription('spaces', this._state.spaces.subscribe((list) => {
            this.clearBindings();
            this._spaces = list;
            this.bindToSpaces();
        }));
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.clearBindings();
    }
    clearBindings() {
        if (!this._spaces)
            return;
        for (const space of this._spaces) {
            this.unsub(`bookings-${space.id}`);
            this.unsub(`status-${space.id}`);
        }
        this._bindings.forEach((b) => b.unbind());
        this._bindings = [];
        this._statuses = {};
    }
    bindToSpaces() {
        if (!this._spaces)
            return;
        for (const space of this._spaces) {
            let binding = Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["getModule"])(space.id, 'Bookings').binding('bookings');
            this.subscription(`bookings-${space.id}`, binding
                .listen()
                .subscribe((d) => this.handleBookingsChange(space, d)));
            binding.bind();
            this._bindings.push(binding);
            binding = Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["getModule"])(space.id, 'Bookings').binding('status');
            this.subscription(`status-${space.id}`, binding
                .listen()
                .subscribe((d) => this.handleStatusChange(space, d)));
            binding.bind();
            this._bindings.push(binding);
        }
        this.updateActions();
        this.updateHoverElements();
    }
    bookSpace(space) {
        if (this._statuses[space.id] === 'busy') {
            return Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["notifyError"])(`${space.display_name || space.name} is unavailable at the current time`);
        }
        this._dialog.open(_explore_booking_modal_component__WEBPACK_IMPORTED_MODULE_7__["ExploreBookingModalComponent"], {
            data: { space }
        });
    }
    handleBookingsChange(space, bookings) {
        if (!bookings)
            return;
        this._bookings[space.id] = bookings.map((i) => new _user_interfaces_events__WEBPACK_IMPORTED_MODULE_3__["CalendarEvent"](i));
        this.timeout('update_hover_els', () => this.updateHoverElements(), 100);
    }
    handleStatusChange(space, status) {
        this._statuses[space.id] = space.bookable
            ? status || 'free'
            : 'not-bookable';
        this.timeout('update_statuses', () => {
            this.clearTimeout('update_hover_els');
            this.updateStatus();
            this.updateHoverElements();
        }, 100);
    }
    updateStatus() {
        const style_map = {};
        const colours = this._settings.get('app.explore.colors') || {};
        for (const space of this._spaces) {
            style_map[`#${space.map_id}`] = {
                fill: colours[`space-${this._statuses[space.id]}`] ||
                    colours[`${this._statuses[space.id]}`] ||
                    DEFAULT_COLOURS[`${this._statuses[space.id]}`],
                opacity: 0.6,
            };
        }
        this._state.setStyles('spaces', style_map);
    }
    updateHoverElements() {
        const features = [];
        for (const space of this._spaces) {
            features.push({
                location: space.map_id,
                hover: true,
                content: _explore_space_info_component__WEBPACK_IMPORTED_MODULE_5__["ExploreSpaceInfoComponent"],
                data: {
                    space,
                    events: this._bookings[space.id],
                    status: this._statuses[space.id],
                },
            });
        }
        this._state.setFeatures('spaces', features);
    }
    updateActions() {
        const actions = [];
        for (const space of this._spaces) {
            actions.push({
                id: space.map_id,
                action: 'click',
                callback: () => this.bookSpace(space),
            });
            actions.push({
                id: space.map_id,
                action: 'touchend',
                callback: () => this.bookSpace(space),
            });
        }
        this._state.setActions('spaces', actions);
    }
}
ExploreSpacesService.ɵfac = function ExploreSpacesService_Factory(t) { return new (t || ExploreSpacesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_explore_state_service__WEBPACK_IMPORTED_MODULE_4__["ExploreStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
ExploreSpacesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExploreSpacesService, factory: ExploreSpacesService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExploreSpacesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _explore_state_service__WEBPACK_IMPORTED_MODULE_4__["ExploreStateService"] }, { type: _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "gGs/":
/*!****************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-zoom-control.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: ExploreZoomControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreZoomControlComponent", function() { return ExploreZoomControlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _explore_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explore-state.service */ "T50y");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/src/lib/icon/icon.component */ "ukpX");






class ExploreZoomControlComponent {
    constructor(_state) {
        this._state = _state;
        this.zoomIn = () => this._state.setPositions(Math.min(10, this._state.positions.zoom * 1.2), this._state.positions.center);
        this.zoomOut = () => this._state.setPositions(Math.max(1, this._state.positions.zoom * (1 / 1.2)), this._state.positions.center);
        this.reset = () => this._state.setPositions(1, { x: 0.5, y: 0.5 });
    }
}
ExploreZoomControlComponent.ɵfac = function ExploreZoomControlComponent_Factory(t) { return new (t || ExploreZoomControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_explore_state_service__WEBPACK_IMPORTED_MODULE_1__["ExploreStateService"])); };
ExploreZoomControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExploreZoomControlComponent, selectors: [["explore-zoom-controls"]], decls: 9, vars: 0, consts: [["mat-icon-button", "", 1, "bg-white", 3, "click"], ["className", "material-icons"]], template: function ExploreZoomControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExploreZoomControlComponent_Template_button_click_0_listener() { return ctx.zoomIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExploreZoomControlComponent_Template_button_click_3_listener() { return ctx.zoomOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExploreZoomControlComponent_Template_button_click_6_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "autorenew");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__["IconComponent"]], styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                padding: .5rem;\n            }\n\n            button[_ngcontent-%COMP%] {\n                border: 1px solid #ccc;\n                border-radius: 0;\n            }\n\n            button[_ngcontent-%COMP%]:first-child {\n                border-radius: 0.25rem 0.25rem 0 0;\n                border-bottom: none;\n            }\n\n            button[_ngcontent-%COMP%]:last-child {\n                border-radius: 0 0 0.25rem 0.25rem;\n                border-top: none;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExploreZoomControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `explore-zoom-controls`,
                template: `
        <button mat-icon-button class="bg-white" (click)="zoomIn()">
            <app-icon className="material-icons">add</app-icon>
        </button>
        <button mat-icon-button class="bg-white" (click)="zoomOut()">
            <app-icon className="material-icons">remove</app-icon>
        </button>
        <button mat-icon-button class="bg-white" (click)="reset()">
            <app-icon className="material-icons">autorenew</app-icon>
        </button>
    `,
                styles: [
                    `
            :host {
                display: flex;
                flex-direction: column;
                padding: .5rem;
            }

            button {
                border: 1px solid #ccc;
                border-radius: 0;
            }

            button:first-child {
                border-radius: 0.25rem 0.25rem 0 0;
                border-bottom: none;
            }

            button:last-child {
                border-radius: 0 0 0.25rem 0.25rem;
                border-top: none;
            }
        `,
                ],
            }]
    }], function () { return [{ type: _explore_state_service__WEBPACK_IMPORTED_MODULE_1__["ExploreStateService"] }]; }, null); })();


/***/ }),

/***/ "iQfU":
/*!*******************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-zones.service.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ExploreZonesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreZonesService", function() { return ExploreZonesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/ts-client */ "/It1");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interfaces/organisation */ "dJst");
/* harmony import */ var _explore_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./explore-state.service */ "T50y");
/* harmony import */ var _explore_spaces_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./explore-spaces.service */ "fljt");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");












const EMPTY_LABEL = { location: { x: -10, y: -10 }, content: '0% Usage' };
class ExploreZonesService extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["BaseClass"] {
    constructor(_state, _org, _settings) {
        super();
        this._state = _state;
        this._org = _org;
        this._settings = _settings;
        this._level = null;
        this._bindings = [];
        this._statuses = {};
        this._labels = {};
        this._location = {};
        this._capacity = {};
        this.init();
    }
    init() {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._org.initialised.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])(_ => _)).toPromise();
            const zone_metadata = yield Promise.all(this._org.levels.map(bld => Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["showMetadata"])(bld.id, { name: 'map_regions' }).toPromise()));
            for (const zone of zone_metadata) {
                const areas = (_a = zone === null || zone === void 0 ? void 0 : zone.details) === null || _a === void 0 ? void 0 : _a.areas;
                if (areas) {
                    for (const area of areas) {
                        this._capacity[area.id] = ((_b = area.properties) === null || _b === void 0 ? void 0 : _b.capacity) || 100;
                        this._location[area.id] = ((_c = area.properties) === null || _c === void 0 ? void 0 : _c.label_location) || { x: .5, y: .5 };
                    }
                }
            }
            this.subscription('spaces', this._state.level.subscribe((level) => {
                this.clearBindings();
                this._level = level;
                this.bindToZones();
            }));
        });
    }
    clearBindings() {
        if (!this._level)
            return;
        this.unsub('zones');
        this._bindings.forEach(b => b.unbind());
        this._bindings = [];
        this._statuses = {};
    }
    bindToZones() {
        if (!this._level)
            return;
        const building = this._org.buildings.find((bld) => bld.id === this._level.parent_id);
        if (!building)
            return;
        const system_id = this._org.organisation.bindings.area_management;
        if (!system_id)
            return;
        const binding = Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["getModule"])(system_id, 'AreaManagement').binding(`${this._level.id}:areas`);
        this.subscription(`zones`, binding.listen().subscribe((d) => this.parseData(d)));
        binding.bind();
        this._bindings.push(binding);
    }
    parseData(d) {
        const value = (d === null || d === void 0 ? void 0 : d.value) || [];
        const labels = [];
        for (const zone of value) {
            const filled = zone.count / (this._capacity[zone.area_id] || 100);
            this._statuses[zone.area_id] =
                filled < .4 ? 'free' : filled < .75 ? 'pending' : 'busy';
            this._labels[zone.area_id] = {
                location: this._location[zone.area_id],
                content: `${zone.count} ${zone.count === 1 ? 'Person' : 'People'}`
            };
            labels.push(this._labels[zone.area_id]);
        }
        this._state.setLabels('zones', labels);
        this.timeout('update', () => this.updateStatus(), 100);
    }
    updateStatus() {
        const style_map = {};
        const colours = this._settings.get('app.explore.colors') || {};
        for (const zone_id in this._statuses) {
            if (!this._statuses.hasOwnProperty(zone_id))
                continue;
            style_map[`#${zone_id}`] = {
                fill: colours[`zone-${this._statuses[zone_id]}`] ||
                    colours[`${this._statuses[zone_id]}`] ||
                    _explore_spaces_service__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_COLOURS"][`${this._statuses[zone_id]}`],
                opacity: 0.6,
            };
        }
        this._state.setStyles('zones', style_map);
    }
}
ExploreZonesService.ɵfac = function ExploreZonesService_Factory(t) { return new (t || ExploreZonesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_explore_state_service__WEBPACK_IMPORTED_MODULE_5__["ExploreStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_4__["OrganisationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["SettingsService"])); };
ExploreZonesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ExploreZonesService, factory: ExploreZonesService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExploreZonesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _explore_state_service__WEBPACK_IMPORTED_MODULE_5__["ExploreStateService"] }, { type: _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_4__["OrganisationService"] }, { type: _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] }]; }, null); })();


/***/ }),

/***/ "k8N0":
/*!******************************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js ***!
  \******************************************************************************************************************************/
/*! exports provided: MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS, MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR, MAT_SLIDE_TOGGLE_VALUE_ACCESSOR, MatSlideToggle, MatSlideToggleChange, MatSlideToggleModule, MatSlideToggleRequiredValidator, _MatSlideToggleRequiredValidatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS", function() { return MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR", function() { return MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SLIDE_TOGGLE_VALUE_ACCESSOR", function() { return MAT_SLIDE_TOGGLE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSlideToggle", function() { return MatSlideToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSlideToggleChange", function() { return MatSlideToggleChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSlideToggleModule", function() { return MatSlideToggleModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSlideToggleRequiredValidator", function() { return MatSlideToggleRequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatSlideToggleRequiredValidatorModule", function() { return _MatSlideToggleRequiredValidatorModule; });
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/observers */ "TKFd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "mFH5");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ "sg/T");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "5XID");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "5lCh");








/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token to be used to override the default options for `mat-slide-toggle`. */





const _c0 = ["thumbContainer"];
const _c1 = ["toggleBar"];
const _c2 = ["input"];
const _c3 = function () { return { enterDuration: 150 }; };
const _c4 = ["*"];
const MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('mat-slide-toggle-default-options', {
    providedIn: 'root',
    factory: () => ({ disableToggleValue: false })
});

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Increasing integer for generating unique ids for slide-toggle components.
let nextUniqueId = 0;
/** @docs-private */
const MAT_SLIDE_TOGGLE_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => MatSlideToggle),
    multi: true
};
/** Change event object emitted by a MatSlideToggle. */
class MatSlideToggleChange {
    constructor(
    /** The source MatSlideToggle of the event. */
    source, 
    /** The new `checked` value of the MatSlideToggle. */
    checked) {
        this.source = source;
        this.checked = checked;
    }
}
// Boilerplate for applying mixins to MatSlideToggle.
/** @docs-private */
class MatSlideToggleBase {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
const _MatSlideToggleMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSlideToggleBase)), 'accent'));
/** Represents a slidable "switch" toggle that can be moved between on and off. */
class MatSlideToggle extends _MatSlideToggleMixinBase {
    constructor(elementRef, _focusMonitor, _changeDetectorRef, tabIndex, defaults, _animationMode) {
        super(elementRef);
        this._focusMonitor = _focusMonitor;
        this._changeDetectorRef = _changeDetectorRef;
        this.defaults = defaults;
        this._animationMode = _animationMode;
        this._onChange = (_) => { };
        this._onTouched = () => { };
        this._uniqueId = `mat-slide-toggle-${++nextUniqueId}`;
        this._required = false;
        this._checked = false;
        /** Name value will be applied to the input element if present. */
        this.name = null;
        /** A unique id for the slide-toggle input. If none is supplied, it will be auto-generated. */
        this.id = this._uniqueId;
        /** Whether the label should appear after or before the slide-toggle. Defaults to 'after'. */
        this.labelPosition = 'after';
        /** Used to set the aria-label attribute on the underlying input element. */
        this.ariaLabel = null;
        /** Used to set the aria-labelledby attribute on the underlying input element. */
        this.ariaLabelledby = null;
        /** An event will be dispatched each time the slide-toggle changes its value. */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * An event will be dispatched each time the slide-toggle input is toggled.
         * This event is always emitted when the user toggles the slide toggle, but this does not mean
         * the slide toggle's value has changed.
         */
        this.toggleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.tabIndex = parseInt(tabIndex) || 0;
    }
    /** Whether the slide-toggle is required. */
    get required() { return this._required; }
    set required(value) { this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value); }
    /** Whether the slide-toggle element is checked or not. */
    get checked() { return this._checked; }
    set checked(value) {
        this._checked = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        this._changeDetectorRef.markForCheck();
    }
    /** Returns the unique id for the visual hidden input. */
    get inputId() { return `${this.id || this._uniqueId}-input`; }
    ngAfterContentInit() {
        this._focusMonitor
            .monitor(this._elementRef, true)
            .subscribe(focusOrigin => {
            // Only forward focus manually when it was received programmatically or through the
            // keyboard. We should not do this for mouse/touch focus for two reasons:
            // 1. It can prevent clicks from landing in Chrome (see #18269).
            // 2. They're already handled by the wrapping `label` element.
            if (focusOrigin === 'keyboard' || focusOrigin === 'program') {
                this._inputElement.nativeElement.focus();
            }
            else if (!focusOrigin) {
                // When a focused element becomes disabled, the browser *immediately* fires a blur event.
                // Angular does not expect events to be raised during change detection, so any state
                // change (such as a form control's 'ng-touched') will cause a changed-after-checked
                // error. See https://github.com/angular/angular/issues/17793. To work around this,
                // we defer telling the form control it has been touched until the next tick.
                Promise.resolve().then(() => this._onTouched());
            }
        });
    }
    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef);
    }
    /** Method being called whenever the underlying input emits a change event. */
    _onChangeEvent(event) {
        // We always have to stop propagation on the change event.
        // Otherwise the change event, from the input element, will bubble up and
        // emit its event object to the component's `change` output.
        event.stopPropagation();
        this.toggleChange.emit();
        // When the slide toggle's config disables toggle change event by setting
        // `disableToggleValue: true`, the slide toggle's value does not change, and the
        // checked state of the underlying input needs to be changed back.
        if (this.defaults.disableToggleValue) {
            this._inputElement.nativeElement.checked = this.checked;
            return;
        }
        // Sync the value from the underlying input element with the component instance.
        this.checked = this._inputElement.nativeElement.checked;
        // Emit our custom change event only if the underlying input emitted one. This ensures that
        // there is no change event, when the checked state changes programmatically.
        this._emitChangeEvent();
    }
    /** Method being called whenever the slide-toggle has been clicked. */
    _onInputClick(event) {
        // We have to stop propagation for click events on the visual hidden input element.
        // By default, when a user clicks on a label element, a generated click event will be
        // dispatched on the associated input element. Since we are using a label element as our
        // root container, the click event on the `slide-toggle` will be executed twice.
        // The real click event will bubble up, and the generated click event also tries to bubble up.
        // This will lead to multiple click events.
        // Preventing bubbling for the second event will solve that issue.
        event.stopPropagation();
    }
    /** Implemented as part of ControlValueAccessor. */
    writeValue(value) {
        this.checked = !!value;
    }
    /** Implemented as part of ControlValueAccessor. */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /** Implemented as part of ControlValueAccessor. */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /** Implemented as a part of ControlValueAccessor. */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this._changeDetectorRef.markForCheck();
    }
    /** Focuses the slide-toggle. */
    focus(options) {
        this._focusMonitor.focusVia(this._inputElement, 'keyboard', options);
    }
    /** Toggles the checked state of the slide-toggle. */
    toggle() {
        this.checked = !this.checked;
        this._onChange(this.checked);
    }
    /**
     * Emits a change event on the `change` output. Also notifies the FormControl about the change.
     */
    _emitChangeEvent() {
        this._onChange(this.checked);
        this.change.emit(new MatSlideToggleChange(this, this.checked));
    }
    /** Method being called whenever the label text changes. */
    _onLabelTextChange() {
        // Since the event of the `cdkObserveContent` directive runs outside of the zone, the
        // slide-toggle component will be only marked for check, but no actual change detection runs
        // automatically. Instead of going back into the zone in order to trigger a change detection
        // which causes *all* components to be checked (if explicitly marked or not using OnPush),
        // we only trigger an explicit change detection for the slide-toggle view and its children.
        this._changeDetectorRef.detectChanges();
    }
}
MatSlideToggle.ɵfac = function MatSlideToggle_Factory(t) { return new (t || MatSlideToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8)); };
MatSlideToggle.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatSlideToggle, selectors: [["mat-slide-toggle"]], viewQuery: function MatSlideToggle_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._thumbEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._thumbBarEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
    } }, hostAttrs: [1, "mat-slide-toggle"], hostVars: 12, hostBindings: function MatSlideToggle_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.disabled ? null : -1)("aria-label", null)("aria-labelledby", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-checked", ctx.checked)("mat-disabled", ctx.disabled)("mat-slide-toggle-label-before", ctx.labelPosition == "before")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    } }, inputs: { disabled: "disabled", disableRipple: "disableRipple", color: "color", tabIndex: "tabIndex", name: "name", id: "id", labelPosition: "labelPosition", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], required: "required", checked: "checked" }, outputs: { change: "change", toggleChange: "toggleChange" }, exportAs: ["matSlideToggle"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAT_SLIDE_TOGGLE_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c4, decls: 16, vars: 18, consts: [[1, "mat-slide-toggle-label"], ["label", ""], [1, "mat-slide-toggle-bar"], ["toggleBar", ""], ["type", "checkbox", "role", "switch", 1, "mat-slide-toggle-input", "cdk-visually-hidden", 3, "id", "required", "tabIndex", "checked", "disabled", "change", "click"], ["input", ""], [1, "mat-slide-toggle-thumb-container"], ["thumbContainer", ""], [1, "mat-slide-toggle-thumb"], ["mat-ripple", "", 1, "mat-slide-toggle-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered", "matRippleRadius", "matRippleAnimation"], [1, "mat-ripple-element", "mat-slide-toggle-persistent-ripple"], [1, "mat-slide-toggle-content", 3, "cdkObserveContent"], ["labelContent", ""], [2, "display", "none"]], template: function MatSlideToggle_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function MatSlideToggle_Template_input_change_4_listener($event) { return ctx._onChangeEvent($event); })("click", function MatSlideToggle_Template_input_click_4_listener($event) { return ctx._onInputClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkObserveContent", function MatSlideToggle_Template_span_cdkObserveContent_11_listener() { return ctx._onLabelTextChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("for", ctx.inputId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-slide-toggle-bar-no-side-margin", !_r4.textContent || !_r4.textContent.trim());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.inputId)("required", ctx.required)("tabIndex", ctx.tabIndex)("checked", ctx.checked)("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("name", ctx.name)("aria-checked", ctx.checked.toString())("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true)("matRippleRadius", 20)("matRippleAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c3));
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRipple"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["CdkObserveContent"]], styles: [".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"], encapsulation: 2, changeDetection: 0 });
MatSlideToggle.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"], args: ['tabindex',] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"],] }] }
];
MatSlideToggle.propDecorators = {
    _thumbEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['thumbContainer',] }],
    _thumbBarEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['toggleBar',] }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    labelPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['aria-label',] }],
    ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['aria-labelledby',] }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    checked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    toggleChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    _inputElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['input',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSlideToggle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mat-slide-toggle',
                exportAs: 'matSlideToggle',
                host: {
                    'class': 'mat-slide-toggle',
                    '[id]': 'id',
                    // Needs to be `-1` so it can still receive programmatic focus.
                    '[attr.tabindex]': 'disabled ? null : -1',
                    '[attr.aria-label]': 'null',
                    '[attr.aria-labelledby]': 'null',
                    '[class.mat-checked]': 'checked',
                    '[class.mat-disabled]': 'disabled',
                    '[class.mat-slide-toggle-label-before]': 'labelPosition == "before"',
                    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
                },
                template: "<label [attr.for]=\"inputId\" class=\"mat-slide-toggle-label\" #label>\n  <div #toggleBar class=\"mat-slide-toggle-bar\"\n       [class.mat-slide-toggle-bar-no-side-margin]=\"!labelContent.textContent || !labelContent.textContent.trim()\">\n\n    <input #input class=\"mat-slide-toggle-input cdk-visually-hidden\" type=\"checkbox\"\n           role=\"switch\"\n           [id]=\"inputId\"\n           [required]=\"required\"\n           [tabIndex]=\"tabIndex\"\n           [checked]=\"checked\"\n           [disabled]=\"disabled\"\n           [attr.name]=\"name\"\n           [attr.aria-checked]=\"checked.toString()\"\n           [attr.aria-label]=\"ariaLabel\"\n           [attr.aria-labelledby]=\"ariaLabelledby\"\n           (change)=\"_onChangeEvent($event)\"\n           (click)=\"_onInputClick($event)\">\n\n    <div class=\"mat-slide-toggle-thumb-container\" #thumbContainer>\n      <div class=\"mat-slide-toggle-thumb\"></div>\n      <div class=\"mat-slide-toggle-ripple mat-focus-indicator\" mat-ripple\n           [matRippleTrigger]=\"label\"\n           [matRippleDisabled]=\"disableRipple || disabled\"\n           [matRippleCentered]=\"true\"\n           [matRippleRadius]=\"20\"\n           [matRippleAnimation]=\"{enterDuration: 150}\">\n\n        <div class=\"mat-ripple-element mat-slide-toggle-persistent-ripple\"></div>\n      </div>\n    </div>\n\n  </div>\n\n  <span class=\"mat-slide-toggle-content\" #labelContent (cdkObserveContent)=\"_onLabelTextChange()\">\n    <!-- Add an invisible span so JAWS can read the label -->\n    <span style=\"display:none\">&nbsp;</span>\n    <ng-content></ng-content>\n  </span>\n</label>\n",
                providers: [MAT_SLIDE_TOGGLE_VALUE_ACCESSOR],
                inputs: ['disabled', 'disableRipple', 'color', 'tabIndex'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                styles: [".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
                args: ['tabindex']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }] }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], labelPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['aria-label']
        }], ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['aria-labelledby']
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], toggleChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], checked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], _thumbEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['thumbContainer']
        }], _thumbBarEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['toggleBar']
        }], _inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['input']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => MatSlideToggleRequiredValidator),
    multi: true
};
/**
 * Validator for Material slide-toggle components with the required attribute in a
 * template-driven form. The default validator for required form controls asserts
 * that the control value is not undefined but that is not appropriate for a slide-toggle
 * where the value is always defined.
 *
 * Required slide-toggle form controls are valid when checked.
 */
class MatSlideToggleRequiredValidator extends _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxRequiredValidator"] {
}
MatSlideToggleRequiredValidator.ɵfac = function MatSlideToggleRequiredValidator_Factory(t) { return ɵMatSlideToggleRequiredValidator_BaseFactory(t || MatSlideToggleRequiredValidator); };
MatSlideToggleRequiredValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatSlideToggleRequiredValidator, selectors: [["mat-slide-toggle", "required", "", "formControlName", ""], ["mat-slide-toggle", "required", "", "formControl", ""], ["mat-slide-toggle", "required", "", "ngModel", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
const ɵMatSlideToggleRequiredValidator_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatSlideToggleRequiredValidator);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSlideToggleRequiredValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: `mat-slide-toggle[required][formControlName],
             mat-slide-toggle[required][formControl], mat-slide-toggle[required][ngModel]`,
                providers: [MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** This module is used by both original and MDC-based slide-toggle implementations. */
class _MatSlideToggleRequiredValidatorModule {
}
_MatSlideToggleRequiredValidatorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: _MatSlideToggleRequiredValidatorModule });
_MatSlideToggleRequiredValidatorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function _MatSlideToggleRequiredValidatorModule_Factory(t) { return new (t || _MatSlideToggleRequiredValidatorModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_MatSlideToggleRequiredValidatorModule, { declarations: [MatSlideToggleRequiredValidator], exports: [MatSlideToggleRequiredValidator] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_MatSlideToggleRequiredValidatorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                exports: [MatSlideToggleRequiredValidator],
                declarations: [MatSlideToggleRequiredValidator]
            }]
    }], null, null); })();
class MatSlideToggleModule {
}
MatSlideToggleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MatSlideToggleModule });
MatSlideToggleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MatSlideToggleModule_Factory(t) { return new (t || MatSlideToggleModule)(); }, imports: [[
            _MatSlideToggleRequiredValidatorModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
            _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"],
        ], _MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatSlideToggleModule, { declarations: function () { return [MatSlideToggle]; }, imports: function () { return [_MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]]; }, exports: function () { return [_MatSlideToggleRequiredValidatorModule, MatSlideToggle, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSlideToggleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _MatSlideToggleRequiredValidatorModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
                    _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"],
                ],
                exports: [
                    _MatSlideToggleRequiredValidatorModule,
                    MatSlideToggle,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]
                ],
                declarations: [MatSlideToggle]
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



//# sourceMappingURL=slide-toggle.js.map

/***/ }),

/***/ "wWh8":
/*!*******************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-desks.service.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ExploreDesksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreDesksService", function() { return ExploreDesksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/ts-client */ "/It1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _explore_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./explore-state.service */ "T50y");
/* harmony import */ var _explore_spaces_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./explore-spaces.service */ "fljt");
/* harmony import */ var _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @user-interfaces/organisation */ "dJst");
/* harmony import */ var _explore_device_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./explore-device-info.component */ "6j8/");












class ExploreDesksService extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["BaseClass"] {
    constructor(_state, _org, _settings) {
        super();
        this._state = _state;
        this._org = _org;
        this._settings = _settings;
        this._level = null;
        this._in_use = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._desks = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._reserved = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._statuses = {};
        this._bindings = [];
        this._stats = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
            free: 0,
            occupied: 0,
            total: 0,
        });
        this.subscription('spaces', this._state.level.subscribe((level) => {
            this.clearBindings();
            this._level = level;
            this.bindToDesks();
        }));
        this.subscription('changes', Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([
            this._desks,
            this._in_use,
            this._reserved,
        ]).subscribe((details) => {
            const [desks, in_use, reserved] = details;
            this._statuses = {};
            for (const id of desks) {
                const is_used = in_use.some((i) => id === i);
                const is_reserved = reserved.some((i) => id === i);
                this._statuses[id] = !is_used
                    ? 'free'
                    : is_reserved
                        ? 'reserved'
                        : 'busy';
            }
            this.timeout('update', () => this.updateStatus(), 100);
        }));
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.clearBindings();
    }
    clearBindings() {
        const bindings = [
            'desks_in_use',
            'desk_list'
        ];
        for (const id of bindings) {
            this.unsub(id);
        }
        this._bindings.forEach((b) => b.unbind());
        this._bindings = [];
        this._statuses = {};
    }
    bindToDesks() {
        if (!this._level)
            return;
        const building = this._org.buildings.find((bld) => bld.id === this._level.parent_id);
        if (!building) {
            return;
        }
        const system_id = this._org.organisation.bindings.area_management;
        if (!system_id) {
            return;
        }
        let binding = Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["getModule"])(system_id, 'AreaManagement').binding(this._level.id);
        this.subscription(`desks_in_use`, binding.listen().subscribe((d) => {
            var _a, _b;
            const devices = ((d === null || d === void 0 ? void 0 : d.value) || []).filter((v) => v.location !== 'desk');
            const desks = ((d === null || d === void 0 ? void 0 : d.value) || []).filter((v) => v.location === 'desk');
            this._in_use.next(desks.map((v) => v.map_id));
            this._reserved.next(desks.filter((v) => !v.at_location).map((v) => v.map_id));
            const list = [];
            for (const device of devices) {
                const x = device.x / device.map_width;
                const y = device.y / device.map_height;
                list.push({
                    location: {
                        x: ((_a = device.coordinates_from) === null || _a === void 0 ? void 0 : _a.includes('right')) ? 1 - x : x,
                        y: ((_b = device.coordinates_from) === null || _b === void 0 ? void 0 : _b.includes('bottom')) ? 1 - y : y,
                    },
                    content: _explore_device_info_component__WEBPACK_IMPORTED_MODULE_7__["ExploreDeviceInfoComponent"],
                    data: Object.assign({}, device)
                });
            }
            list.sort((a, b) => {
                const dist_a = 1 - Math.sqrt(Math.pow(a.x - .5, 2) + Math.pow(a.x - .5, 2));
                const dist_b = 1 - Math.sqrt(Math.pow(b.x - .5, 2) + Math.pow(b.x - .5, 2));
                return dist_a - dist_b;
            });
            this._state.setFeatures('devices', list);
        }));
        binding.bind();
        this._bindings.push(binding);
        binding = Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["getModule"])(system_id, 'AreaManagement').binding(`${this._level.id}:desk_ids`);
        this.subscription(`desks_list`, binding.listen().subscribe((d) => this._desks.next(d || [])));
        binding.bind();
        this._bindings.push(binding);
    }
    updateStatus() {
        const style_map = {};
        const colours = this._settings.get('app.explore.colors') || {};
        for (const desk_id in this._statuses) {
            if (!this._statuses.hasOwnProperty(desk_id))
                continue;
            style_map[`#${desk_id}`] = {
                fill: colours[`desk-${this._statuses[desk_id]}`] ||
                    colours[`${this._statuses[desk_id]}`] ||
                    _explore_spaces_service__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_COLOURS"][`${this._statuses[desk_id]}`],
                opacity: 0.6,
            };
        }
        this._state.setStyles('desks', style_map);
    }
}
ExploreDesksService.ɵfac = function ExploreDesksService_Factory(t) { return new (t || ExploreDesksService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_explore_state_service__WEBPACK_IMPORTED_MODULE_4__["ExploreStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_6__["OrganisationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["SettingsService"])); };
ExploreDesksService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExploreDesksService, factory: ExploreDesksService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExploreDesksService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _explore_state_service__WEBPACK_IMPORTED_MODULE_4__["ExploreStateService"] }, { type: _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_6__["OrganisationService"] }, { type: _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] }]; }, null); })();


/***/ }),

/***/ "zPhw":
/*!***************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-map-control.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ExploreMapControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreMapControlComponent", function() { return ExploreMapControlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @user-interfaces/organisation */ "dJst");
/* harmony import */ var _explore_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./explore-state.service */ "T50y");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "R7+U");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "mFH5");











function ExploreMapControlComponent_mat_form_field_1_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bld_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", bld_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bld_r3.display_name || bld_r3.name, " ");
} }
function ExploreMapControlComponent_mat_form_field_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExploreMapControlComponent_mat_form_field_1_Template_mat_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.setBuilding($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExploreMapControlComponent_mat_form_field_1_mat_option_3_Template, 2, 2, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r0.building));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx_r0.buildings));
} }
function ExploreMapControlComponent_mat_form_field_3_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lvl_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", lvl_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", lvl_r7.display_name || lvl_r7.name, " ");
} }
function ExploreMapControlComponent_mat_form_field_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExploreMapControlComponent_mat_form_field_3_Template_mat_select_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.setLevel($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExploreMapControlComponent_mat_form_field_3_mat_option_4_Template, 2, 2, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("has-bld", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx_r1.buildings)) == null ? null : tmp_0_0.length) > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, ctx_r1.level));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, ctx_r1.levels));
} }
class ExploreMapControlComponent {
    constructor(_org, _state) {
        this._org = _org;
        this._state = _state;
        /** List of available buildings */
        this.buildings = this._org.building_list;
        /** Currently active building */
        this.building = this._org.active_building;
        /** List of availabel levels */
        this.levels = this._org.active_levels;
        /** Currently active level */
        this.level = this._state.level;
        /** Set the currently active level */
        this.setLevel = (lvl) => this._state.setLevel(lvl.id);
        /** Set the currenly active building */
        this.setBuilding = (bld) => (this._org.building = bld);
    }
}
ExploreMapControlComponent.ɵfac = function ExploreMapControlComponent_Factory(t) { return new (t || ExploreMapControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_1__["OrganisationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_explore_state_service__WEBPACK_IMPORTED_MODULE_2__["ExploreStateService"])); };
ExploreMapControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExploreMapControlComponent, selectors: [["explore-map-controls"]], decls: 5, vars: 6, consts: [[1, "flex", "space-x-2"], ["overlay", "", "class", "flex-1", "has-bld", "true", "appearance", "outline", 4, "ngIf"], ["overlay", "", "class", "flex-1", "appearance", "outline", 4, "ngIf"], ["overlay", "", "has-bld", "true", "appearance", "outline", 1, "flex-1"], ["placeholder", "Select Building...", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["overlay", "", "appearance", "outline", 1, "flex-1"], ["placeholder", "Select Level...", 3, "ngModel", "ngModelChange"]], template: function ExploreMapControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExploreMapControlComponent_mat_form_field_1_Template, 5, 6, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExploreMapControlComponent_mat_form_field_3_Template, 6, 9, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_0_0 = null;
        var tmp_1_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.buildings)) == null ? null : tmp_0_0.length) > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx.levels)) == null ? null : tmp_1_0.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n                padding: 0.5rem;\n            }\n\n            mat-form-field[has-bld=\"true\"][_ngcontent-%COMP%] {\n                max-width: calc(50vw - 2.5rem);\n            }\n\n            [full][_nghost-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n                max-width: calc(50% - 2.5rem);\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExploreMapControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'explore-map-controls',
                template: `
        <div class="flex space-x-2">
            <mat-form-field
                overlay
                class="flex-1"
                has-bld="true"
                *ngIf="(buildings | async)?.length > 1"
                appearance="outline"
            >
                <mat-select
                    placeholder="Select Building..."
                    [ngModel]="building | async"
                    (ngModelChange)="setBuilding($event)"
                >
                    <mat-option
                        *ngFor="let bld of buildings | async"
                        [value]="bld"
                    >
                        {{ bld.display_name || bld.name }}
                    </mat-option>
                </mat-select>
            </mat-form-field>
            <mat-form-field
                overlay
                class="flex-1"
                [attr.has-bld]="(buildings | async)?.length > 1"
                *ngIf="(levels | async)?.length"
                appearance="outline"
            >
                <mat-select
                    placeholder="Select Level..."
                    [ngModel]="level | async"
                    (ngModelChange)="setLevel($event)"
                >
                    <mat-option
                        *ngFor="let lvl of levels | async"
                        [value]="lvl"
                    >
                        {{ lvl.display_name || lvl.name }}
                    </mat-option>
                </mat-select>
            </mat-form-field>
        </div>
    `,
                styles: [
                    `
            :host {
                padding: 0.5rem;
            }

            mat-form-field[has-bld="true"] {
                max-width: calc(50vw - 2.5rem);
            }

            :host[full] mat-form-field {
                max-width: calc(50% - 2.5rem);
            }
        `,
                ],
            }]
    }], function () { return [{ type: _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_1__["OrganisationService"] }, { type: _explore_state_service__WEBPACK_IMPORTED_MODULE_2__["ExploreStateService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~bookings-bookings-module~explore-explore-module.js.map