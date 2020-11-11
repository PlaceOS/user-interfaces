(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["explore-explore-module"],{

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
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "mFH5");












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
    } }, directives: [_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__["IconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteOrigin"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n                z-index: 99;\n            }\n\n            [role='search'][_ngcontent-%COMP%] {\n                height: 3.125rem;\n                width: 3.125rem;\n                border-radius: 1.5rem;\n                border: 1px solid #ccc;\n                outline: none;\n                transition: width 200ms;\n            }\n\n            app-icon[_ngcontent-%COMP%] {\n                outline: none;\n                margin: .55rem;\n            }\n\n            [role='search'].show[_ngcontent-%COMP%] {\n                width: 32rem;\n                max-width: calc(100vw - 1rem);\n                border-color: #1e88e5;\n            }\n\n            [name='anchor'][_ngcontent-%COMP%] {\n                left: 2rem;\n                right: 2rem;\n            }\n\n            input[_ngcontent-%COMP%] {\n                border: none;\n                outline: none;\n            }\n\n            .hide[_ngcontent-%COMP%] {\n                display: none;\n            }"] });
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
        console.log('Space:', space);
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
            console.log('Locate User:', user);
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
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["@keyframes wait {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n[_nghost-%COMP%] {\n  width: 100%;\n  z-index: 10;\n  font-size: 1.25em;\n}\n.footer-legend[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #fff;\n  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  width: 100%;\n}\n.tag[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translate(-50%, -100%);\n  overflow: hidden;\n  padding: 0.5em 0.5em 0;\n}\n.tag[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  border-radius: 4px 4px 0 0;\n  width: 8em;\n  height: 2em;\n  border: none;\n  color: rgba(0, 0, 0, 0.85);\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.25em 0.5em;\n  font-size: 1.25em;\n}\n.header[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  flex: 1;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n.time[_ngcontent-%COMP%] {\n  padding: 0.5em;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  font-size: 0.7em;\n}\n.colour-legend[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5em;\n  border: 1px solid #ccc;\n}\n.colour[_ngcontent-%COMP%] {\n  margin-right: 0.5em;\n  padding: 0.5em 1em;\n  border-radius: 4px;\n  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  flex: 1;\n  text-align: center;\n}\n.colour.dark[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.colour[_ngcontent-%COMP%]:last-child {\n  margin: 0;\n}\n.icon-legend[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  height: 0;\n  width: 100%;\n  border: 1px solid #ccc;\n  overflow: auto;\n  transition: height 200ms;\n  max-height: 25vh;\n}\n.icon-legend.show[_ngcontent-%COMP%] {\n  height: 37.5vw;\n}\n.icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  height: 12.4vw;\n  width: 12.4vw;\n  font-size: 2vw;\n  border: 1px solid #ccc;\n  flex-grow: 1;\n}\n.icon[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  font-size: 3em;\n}\n.icon[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 0.6em;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC1zdHlsZXMvdmFyaWFibGVzLnNjc3MiLCJzaGFyZWQtc3R5bGVzL21peGlucy5zY3NzIiwiYXBwcy92aXNpdG9yLWtpb3NrL3NyYy9hcHAvZXhwbG9yZS9mb290ZXItbGVnZW5kL2Zvb3Rlci1sZWdlbmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O3FCQUFBO0FBZUE7OzBCQUFBO0FBd0NBOztjQUFBO0FBYUE7O3NCQUFBO0FBcEVBOztxQkFBQTtBQWVBOzswQkFBQTtBQXdDQTs7Y0FBQTtBQWFBOztzQkFBQTtBQy9DQTtFQUNJO0lBQUssVUFBQTtFQ0tQO0VESkU7SUFBTyxVQUFBO0VDT1Q7QUFDRjtBRExBO0VBQ0k7SUFBSyxVQUFBO0VDUVA7RURQRTtJQUFPLFVBQUE7RUNVVDtBQUNGO0FEUkE7O3NCQUFBO0FDM0JBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQXdDRjtBQXJDQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RURGRSxpSEFBQTtFQ0lGLFdBQUE7QUF3Q0Y7QUFyQ0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBd0NGO0FBdkNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFRGxCQSxpSEFBQTtFQ29CQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FBeUNKO0FBckNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQXdDRjtBQXZDRTtFQUNFLE9BQUE7RUFDQSxxREZnQlc7QUV5QmY7QUFyQ0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBd0NGO0FBckNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUF3Q0Y7QUFyQ0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUR6REUsaUhBQUE7RUMyREYsT0FBQTtFQUNBLGtCQUFBO0FBd0NGO0FBdkNFO0VBQ0UsV0FBQTtBQXlDSjtBQXZDRTtFQUNFLFNBQUE7QUF5Q0o7QUFyQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FBd0NGO0FBdkNFO0VBQ0UsY0FBQTtBQXlDSjtBQXJDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUF3Q0Y7QUF2Q0U7RUFDRSxjQUFBO0FBeUNKO0FBdkNFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQXlDSiIsImZpbGUiOiJhcHBzL3Zpc2l0b3Ita2lvc2svc3JjL2FwcC9leHBsb3JlL2Zvb3Rlci1sZWdlbmQvZm9vdGVyLWxlZ2VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qPT09PT09PT09PT09PT09PT09KlxcXG58fCBCcmFuZGluZyBDb2xvdXJzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT0qL1xuXG4kcHdjLW9yYW5nZTogI0QwNEEwMjtcbiRwd2Mtcm9zZTogI0Q5Mzk1NDtcbiRwd2MtcmVkOiAjRTAzMDFFO1xuJHB3Yy15ZWxsb3c6ICNGRkI2MDA7XG4kcHdjLXRhbmdlcmluZTogI0VCOEMwMDtcblxuJGxpZ2h0LWdyZXk6ICNkZGRkZGQ7XG5cbiRib3hTaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoIzAwMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgjMDAwLCAwLjE0KSxcbiAgICAwIDJweCAxcHggLTFweCByZ2JhKCMwMDAsIDAuMTIpO1xuXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzIxYTQ1MztcbiRzdWNjZXNzLWxpZ2h0OiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHBlbmRpbmc6ICNmZmJmMWY7XG4kcGVuZGluZy1saWdodDogbGlnaHRlbigkcGVuZGluZywgMTApO1xuJHBlbmRpbmctZGFyazogZGFya2VuKCRwZW5kaW5nLCAxMCk7XG5cbiRlcnJvcjogI2Y0NDMzNjtcbiRlcnJvci1saWdodDogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cbiRjb2xvci1wcmltYXJ5OiAjZDA0YTAyO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcbiRjb2xvci1wcmltYXJ5LWRhcms6IGRhcmtlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjZTAzMDFlO1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogbGlnaHRlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6IGRhcmtlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG5cbiRiZy1saWdodDogI2YwZjBmMDtcbiRiZy1kYXJrOiAjMjYzMjM4O1xuJGZvb3Rlci1iYWNrOiAjMjYzMjM4O1xuJGdyZXk6ICM5Njk2OTY7XG5cbiRjb2xvci10ZXJuYXJ5OiAjMGEwZDJlO1xuJGNvbG9yLWV4dGVybmFsOiAjMTUxYzZhO1xuXG4vLyBUeXBlIGNvbG9ycyBmb3IgYm9va2luZyBzdGF0dXNcbiRpbnRlcm5hbDogJGNvbG9yLXByaW1hcnk7XG4kZXh0ZXJuYWw6ICRjb2xvci1leHRlcm5hbDtcbiRjYW5jZWxsZWQ6ICRncmV5O1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQtc3RhY2s6ICdIZWx2ZXRpY2EgTmV1ZScsIFJvYm90bywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuXG4kaGVhZGluZy1mb250OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuJGZvbnQ6ICRmb250LXN0YWNrO1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNnB4O1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG4iLCJcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbkBtaXhpbiBoaWRlLXRleHQtb3ZlcmZsb3cge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIGJveC1zaGFkb3coJGNvbG9yOiAjMDAwLCAkZGVwdGg6IDEpIHtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMXB4ICogKCRkZXB0aCAtIDEpIHJnYmEoIzAwMCwgLjIpLFxuICAgICAgICAgICAgICAgIDAgMXB4IDFweCAwIHJnYmEoIzAwMCwgLjE0KSxcbiAgICAgICAgICAgICAgICAwIDJweCAxcHggLTFweCByZ2JhKCMwMDAsIC4xMik7XG59XG5cbkBtaXhpbiBmYWRlLWluKCR3YWl0KSB7XG4gICAgYW5pbWF0aW9uOlxuICAgICAgICB3YWl0ICN7JHdhaXR9LFxuICAgICAgICBmYWRlLWluIDQwMG1zICN7JHdhaXR9O1xufVxuXG5Aa2V5ZnJhbWVzIHdhaXQge1xuICAgIDAlIHsgb3BhY2l0eTogMDsgfVxuICAgIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZS1pbiB7XG4gICAgMCUgeyBvcGFjaXR5OiAwOyB9XG4gICAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cbn1cblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbkBpbXBvcnQgJ21peGlucyc7XG5cbjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDEwO1xuICBmb250LXNpemU6IDEuMjVlbTtcbn1cblxuLmZvb3Rlci1sZWdlbmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIEBpbmNsdWRlIGJveC1zaGFkb3c7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGFnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTEwMCUpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAuNWVtIC41ZW0gMDtcbiAgLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3c7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG4gICAgd2lkdGg6IDhlbTtcbiAgICBoZWlnaHQ6IDJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHJnYmEoIzAwMCwgLjg1KTtcbiAgfVxufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogLjI1ZW0gLjVlbTtcbiAgZm9udC1zaXplOiAxLjI1ZW07XG4gIC50ZXh0IHtcbiAgICBmbGV4OiAxO1xuICAgIGZvbnQtZmFtaWx5OiAkaGVhZGluZy1mb250O1xuICB9XG59XG5cbi50aW1lIHtcbiAgcGFkZGluZzogLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBmb250LXNpemU6IC43ZW07XG59XG5cbi5jb2xvdXItbGVnZW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IC41ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5jb2xvdXIge1xuICBtYXJnaW4tcmlnaHQ6IC41ZW07XG4gIHBhZGRpbmc6IC41ZW0gMWVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIEBpbmNsdWRlIGJveC1zaGFkb3c7XG4gIGZsZXg6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgJi5kYXJrIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAmOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4uaWNvbi1sZWdlbmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBvdmVyZmxvdzogYXV0bztcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDIwMG1zO1xuICBtYXgtaGVpZ2h0OiAyNXZoO1xuICAmLnNob3cge1xuICAgIGhlaWdodDogMzcuNXZ3O1xuICB9XG59XG5cbi5pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTIuNHZ3O1xuICB3aWR0aDogMTIuNHZ3O1xuICBmb250LXNpemU6IDJ2dztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgZmxleC1ncm93OiAxO1xuICBhcHAtaWNvbiB7XG4gICAgZm9udC1zaXplOiAzZW07XG4gIH1cbiAgLnRleHQge1xuICAgIGZvbnQtc2l6ZTogLjZlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterLegendComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'a-footer-legend',
                templateUrl: './footer-legend.component.html',
                styleUrls: ['./footer-legend.component.scss']
            }]
    }], null, null); })();


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












const COMPONENTS = [
    _explore_map_control_component__WEBPACK_IMPORTED_MODULE_5__["ExploreMapControlComponent"],
    _explore_map_view_component__WEBPACK_IMPORTED_MODULE_6__["ExploreMapViewComponent"],
    _explore_search_component__WEBPACK_IMPORTED_MODULE_7__["ExploreSearchComponent"],
    _explore_space_info_component__WEBPACK_IMPORTED_MODULE_8__["ExploreSpaceInfoComponent"],
    _explore_device_info_component__WEBPACK_IMPORTED_MODULE_10__["ExploreDeviceInfoComponent"],
    _explore_zoom_control_component__WEBPACK_IMPORTED_MODULE_9__["ExploreZoomControlComponent"]
];
class SharedExploreModule {
}
SharedExploreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedExploreModule });
SharedExploreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SharedExploreModule_Factory(t) { return new (t || SharedExploreModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _user_interfaces_components__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedExploreModule, { declarations: [_explore_map_control_component__WEBPACK_IMPORTED_MODULE_5__["ExploreMapControlComponent"],
        _explore_map_view_component__WEBPACK_IMPORTED_MODULE_6__["ExploreMapViewComponent"],
        _explore_search_component__WEBPACK_IMPORTED_MODULE_7__["ExploreSearchComponent"],
        _explore_space_info_component__WEBPACK_IMPORTED_MODULE_8__["ExploreSpaceInfoComponent"],
        _explore_device_info_component__WEBPACK_IMPORTED_MODULE_10__["ExploreDeviceInfoComponent"],
        _explore_zoom_control_component__WEBPACK_IMPORTED_MODULE_9__["ExploreZoomControlComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _user_interfaces_components__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"]], exports: [_explore_map_control_component__WEBPACK_IMPORTED_MODULE_5__["ExploreMapControlComponent"],
        _explore_map_view_component__WEBPACK_IMPORTED_MODULE_6__["ExploreMapViewComponent"],
        _explore_search_component__WEBPACK_IMPORTED_MODULE_7__["ExploreSearchComponent"],
        _explore_space_info_component__WEBPACK_IMPORTED_MODULE_8__["ExploreSpaceInfoComponent"],
        _explore_device_info_component__WEBPACK_IMPORTED_MODULE_10__["ExploreDeviceInfoComponent"],
        _explore_zoom_control_component__WEBPACK_IMPORTED_MODULE_9__["ExploreZoomControlComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedExploreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [...COMPONENTS],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _user_interfaces_components__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"]],
                exports: [...COMPONENTS]
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
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interfaces/organisation */ "dJst");
/* harmony import */ var _ui_topbar_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/topbar-header.component */ "/dba");
/* harmony import */ var _libs_explore_src_lib_explore_map_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/explore/src/lib/explore-map-view.component */ "AQ+f");
/* harmony import */ var _footer_legend_footer_legend_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer-legend/footer-legend.component */ "Ef3g");













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
ExploreComponent.ɵfac = function ExploreComponent_Factory(t) { return new (t || ExploreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_4__["OrganisationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
ExploreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExploreComponent, selectors: [["app-explore"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 0, consts: [[1, "flex", "flex-1", "w-full", "relative"], [1, "flex", "w-full"]], template: function ExploreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a-topbar-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "explore-map-view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "footer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "a-footer-legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ui_topbar_header_component__WEBPACK_IMPORTED_MODULE_5__["TopbarHeaderComponent"], _libs_explore_src_lib_explore_map_view_component__WEBPACK_IMPORTED_MODULE_6__["ExploreMapViewComponent"], _footer_legend_footer_legend_component__WEBPACK_IMPORTED_MODULE_7__["FooterLegendComponent"]], styles: ["[_nghost-%COMP%] {\n                position: absolute;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                overflow: hidden;\n                display: flex;\n                flex-direction: column;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExploreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-explore',
                template: `
        <header>
            <a-topbar-header></a-topbar-header>
        </header>
        <main class="flex flex-1 w-full relative">
            <explore-map-view></explore-map-view>
        </main>
        <footer class="flex w-full">
            <a-footer-legend></a-footer-legend>
        </footer>
    `,
                styles: [
                    `
            :host {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                overflow: hidden;
                display: flex;
                flex-direction: column;
            }
        `,
                ],
            }]
    }], function () { return [{ type: _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_4__["OrganisationService"] }, { type: _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, null); })();


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
            console.log('Map Styles:', style_mappings);
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









const DEFAULT_COLOURS = {
    free: '#43a047',
    pending: '#ffb300',
    reserved: '#3949ab',
    busy: '#e53935',
    'not-bookable': '#757575',
    unknown: '#757575',
};
class ExploreSpacesService extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["BaseClass"] {
    constructor(_state, _settings) {
        super();
        this._state = _state;
        this._settings = _settings;
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
        console.log('Book Space:', space);
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
        }
        this._state.setActions('spaces', actions);
    }
}
ExploreSpacesService.ɵfac = function ExploreSpacesService_Factory(t) { return new (t || ExploreSpacesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_explore_state_service__WEBPACK_IMPORTED_MODULE_4__["ExploreStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["SettingsService"])); };
ExploreSpacesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExploreSpacesService, factory: ExploreSpacesService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExploreSpacesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _explore_state_service__WEBPACK_IMPORTED_MODULE_4__["ExploreStateService"] }, { type: _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] }]; }, null); })();


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
        console.log('Parse Data:', d);
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
        console.log('Styles:', style_map);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckbox"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 1em;\n  min-width: 24em;\n}\nmat-checkbox[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 1.25em;\n}\nbutton[_ngcontent-%COMP%] {\n  min-width: 8em;\n  margin-top: 1em;\n}\nheader[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  margin-bottom: 0.5em;\n  padding: 0.5em;\n  text-align: center;\n  width: 100%;\n  color: #fff;\n  background-color: #d04a02;\n  border-radius: 4px;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC1zdHlsZXMvdmFyaWFibGVzLnNjc3MiLCJhcHBzL3Zpc2l0b3Ita2lvc2svc3JjL2FwcC9leHBsb3JlL2ZpbHRlcnMvZmlsdGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7cUJBQUE7QUFlQTs7MEJBQUE7QUF3Q0E7O2NBQUE7QUFhQTs7c0JBQUE7QUNsRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBV0Y7QUFSQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQVdGO0FBUkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQVdGO0FBUkE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkRPYztFQ05kLGtCQUFBO0VBQ0EscUREZ0NhO0FDckJmIiwiZmlsZSI6ImFwcHMvdmlzaXRvci1raW9zay9zcmMvYXBwL2V4cGxvcmUvZmlsdGVycy9maWx0ZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyo9PT09PT09PT09PT09PT09PT0qXFxcbnx8IEJyYW5kaW5nIENvbG91cnMgfHxcblxcKj09PT09PT09PT09PT09PT09PSovXG5cbiRwd2Mtb3JhbmdlOiAjRDA0QTAyO1xuJHB3Yy1yb3NlOiAjRDkzOTU0O1xuJHB3Yy1yZWQ6ICNFMDMwMUU7XG4kcHdjLXllbGxvdzogI0ZGQjYwMDtcbiRwd2MtdGFuZ2VyaW5lOiAjRUI4QzAwO1xuXG4kbGlnaHQtZ3JleTogI2RkZGRkZDtcblxuJGJveFNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgjMDAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKCMwMDAsIDAuMTQpLFxuICAgIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwgMC4xMik7XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjMjFhNDUzO1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZzogI2ZmYmYxZjtcbiRwZW5kaW5nLWxpZ2h0OiBsaWdodGVuKCRwZW5kaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrOiBkYXJrZW4oJHBlbmRpbmcsIDEwKTtcblxuJGVycm9yOiAjZjQ0MzM2O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuJGNvbG9yLXByaW1hcnk6ICNkMDRhMDI7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICNlMDMwMWU7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJnLWxpZ2h0OiAjZjBmMGYwO1xuJGJnLWRhcms6ICMyNjMyMzg7XG4kZm9vdGVyLWJhY2s6ICMyNjMyMzg7XG4kZ3JleTogIzk2OTY5NjtcblxuJGNvbG9yLXRlcm5hcnk6ICMwYTBkMmU7XG4kY29sb3ItZXh0ZXJuYWw6ICMxNTFjNmE7XG5cbi8vIFR5cGUgY29sb3JzIGZvciBib29raW5nIHN0YXR1c1xuJGludGVybmFsOiAkY29sb3ItcHJpbWFyeTtcbiRleHRlcm5hbDogJGNvbG9yLWV4dGVybmFsO1xuJGNhbmNlbGxlZDogJGdyZXk7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udC1zdGFjazogJ0hlbHZldGljYSBOZXVlJywgUm9ib3RvLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG5cbiRoZWFkaW5nLWZvbnQ6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4kZm9udDogJGZvbnQtc3RhY2s7XG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE2cHg7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMWVtO1xuICBtaW4td2lkdGg6IDI0ZW07XG59XG5cbm1hdC1jaGVja2JveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEuMjVlbTtcbn1cblxuYnV0dG9uIHtcbiAgbWluLXdpZHRoOiA4ZW07XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cblxuaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgbWFyZ2luLWJvdHRvbTogLjVlbTtcbiAgcGFkZGluZzogLjVlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtZmFtaWx5OiAkaGVhZGluZy1mb250O1xufVxuIl19 */"] });
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
/*! exports provided: AppExploreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppExploreModule", function() { return AppExploreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _explore_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./explore.component */ "RFGy");
/* harmony import */ var _ui_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/shared.module */ "R3Ii");
/* harmony import */ var _footer_legend_footer_legend_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer-legend/footer-legend.component */ "Ef3g");
/* harmony import */ var _filters_filters_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filters/filters.component */ "v/X9");
/* harmony import */ var _user_interfaces_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @user-interfaces/components */ "Rc+I");
/* harmony import */ var _user_interfaces_explore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @user-interfaces/explore */ "aAMe");












const ROUTES = [
    { path: '', component: _explore_component__WEBPACK_IMPORTED_MODULE_4__["ExploreComponent"] },
    { path: ':search_type', component: _explore_component__WEBPACK_IMPORTED_MODULE_4__["ExploreComponent"] }
];
class AppExploreModule {
}
AppExploreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppExploreModule });
AppExploreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppExploreModule_Factory(t) { return new (t || AppExploreModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES),
            _ui_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedContentModule"],
            _user_interfaces_components__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _user_interfaces_explore__WEBPACK_IMPORTED_MODULE_9__["SharedExploreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppExploreModule, { declarations: [_explore_component__WEBPACK_IMPORTED_MODULE_4__["ExploreComponent"],
        _footer_legend_footer_legend_component__WEBPACK_IMPORTED_MODULE_6__["FooterLegendComponent"],
        _filters_filters_component__WEBPACK_IMPORTED_MODULE_7__["FiltersComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ui_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedContentModule"],
        _user_interfaces_components__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _user_interfaces_explore__WEBPACK_IMPORTED_MODULE_9__["SharedExploreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppExploreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _explore_component__WEBPACK_IMPORTED_MODULE_4__["ExploreComponent"],
                    _footer_legend_footer_legend_component__WEBPACK_IMPORTED_MODULE_6__["FooterLegendComponent"],
                    _filters_filters_component__WEBPACK_IMPORTED_MODULE_7__["FiltersComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES),
                    _ui_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedContentModule"],
                    _user_interfaces_components__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _user_interfaces_explore__WEBPACK_IMPORTED_MODULE_9__["SharedExploreModule"]
                ],
                entryComponents: [
                    _filters_filters_component__WEBPACK_IMPORTED_MODULE_7__["FiltersComponent"]
                ]
            }]
    }], null, null); })();


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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bld_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", bld_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bld_r3.name, " ");
} }
function ExploreMapControlComponent_mat_form_field_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExploreMapControlComponent_mat_form_field_1_Template_mat_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.setBuilding($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExploreMapControlComponent_mat_form_field_1_mat_option_3_Template, 2, 2, "mat-option", 4);
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
function ExploreMapControlComponent_mat_form_field_3_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lvl_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", lvl_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", lvl_r7.name, " ");
} }
function ExploreMapControlComponent_mat_form_field_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExploreMapControlComponent_mat_form_field_3_Template_mat_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.setLevel($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExploreMapControlComponent_mat_form_field_3_mat_option_3_Template, 2, 2, "mat-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r1.level));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx_r1.levels));
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
ExploreMapControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExploreMapControlComponent, selectors: [["explore-map-controls"]], decls: 5, vars: 6, consts: [[1, "space-x-2"], ["overlay", "", "appearance", "outline", 4, "ngIf"], ["overlay", "", "appearance", "outline"], ["placeholder", "Select Building...", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["placeholder", "Select Level...", 3, "ngModel", "ngModelChange"]], template: function ExploreMapControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExploreMapControlComponent_mat_form_field_1_Template, 5, 6, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExploreMapControlComponent_mat_form_field_3_Template, 5, 6, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_0_0 = null;
        var tmp_1_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.buildings)) == null ? null : tmp_0_0.length) > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx.levels)) == null ? null : tmp_1_0.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n                padding: 0.5rem;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExploreMapControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'explore-map-controls',
                template: `
        <div class="space-x-2">
            <mat-form-field
                overlay
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
                        {{ bld.name }}
                    </mat-option>
                </mat-select>
            </mat-form-field>
            <mat-form-field
                overlay
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
                        {{ lvl.name }}
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
        `,
                ],
            }]
    }], function () { return [{ type: _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_1__["OrganisationService"] }, { type: _explore_state_service__WEBPACK_IMPORTED_MODULE_2__["ExploreStateService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=explore-explore-module.js.map