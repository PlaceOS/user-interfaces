"use strict";
(self["webpackChunkworkplace"] = self["webpackChunkworkplace"] || []).push([["apps_workplace_src_app_events_group-events_module_ts"],{

/***/ 26763:
/*!******************************************************************************!*\
  !*** ./apps/workplace/src/app/events/group-events-filters-list.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupEventsFiltersListComponent: () => (/* binding */ GroupEventsFiltersListComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _group_events_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group-events-state.service */ 12794);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 33240);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 56441);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 71246);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 74646);









const _c0 = () => [];
function GroupEventsFiltersListComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GroupEventsFiltersListComponent_div_13_Template_button_click_3_listener() {
      const tag_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.removeTag(tag_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](tag_r2);
  }
}
class GroupEventsFiltersListComponent {
  constructor(_state) {
    this._state = _state;
    this.options = this._state.options;
    this.filters = this._state.filters;
    this.this_period = this._state.options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(({
      date,
      end
    }) => {
      return Date.now() >= (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.startOfDay)(date).valueOf() && Date.now() < (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.endOfDay)(end || date).valueOf();
    }));
    this.period = this._state.options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(({
      date,
      end
    }) => Math.abs((0,date_fns__WEBPACK_IMPORTED_MODULE_7__.differenceInDays)(date, end || Date.now())) > 7 ? 'month' : 'week'));
  }
  removeTag(tag) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const tags = (yield _this.filters.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1)).toPromise())?.tags || [];
      _this._state.setFilters({
        tags: tags.filter(_ => _ !== tag)
      });
    })();
  }
  static #_ = this.ɵfac = function GroupEventsFiltersListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || GroupEventsFiltersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_group_events_state_service__WEBPACK_IMPORTED_MODULE_1__.GroupEventsStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: GroupEventsFiltersListComponent,
    selectors: [["group-events-filters-list"]],
    decls: 15,
    vars: 22,
    consts: [[1, "my-2", "w-[63rem]", "max-w-full", "mx-auto", "border", "border-base-300", "p-4", "bg-base-100", "rounded"], [1, "flex", "items-center", "justify-between", "space-x-2", "mb-4"], [1, "flex", "flex-wrap"], [1, "flex", "items-center", "px-4", "py-3", "rounded-3xl", "border", "border-base-400", "m-1", "text-sm"], ["class", "flex items-center pl-4 pr-1 rounded-3xl border border-base-400 m-1", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "pl-4", "pr-1", "rounded-3xl", "border", "border-base-400", "m-1"], [1, "mr-2", "flex-1", "text-sm"], ["icon", "", "matRipple", "", 3, "click"]],
    template: function GroupEventsFiltersListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 2)(7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, GroupEventsFiltersListComponent_div_13_Template, 6, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 5, ctx.this_period) ? "This" : "Upcoming", " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 7, ctx.period) === "week" ? "Week" : "Month", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 11, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 9, ctx.options)) == null ? null : tmp_1_0.date, "MMM d, y"), " \u2013 ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](12, 16, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 14, ctx.options)) == null ? null : tmp_1_0.end, "MMM d, y"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 19, ctx.filters)) == null ? null : tmp_2_0.tags) || _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](21, _c0));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe]
  });
}

/***/ }),

/***/ 19191:
/*!*************************************************************************!*\
  !*** ./apps/workplace/src/app/events/group-events-sidebar.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupEventsSidebarComponent: () => (/* binding */ GroupEventsSidebarComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 28797);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 60452);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 90610);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 56441);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 45726);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 36337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var _group_events_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./group-events-state.service */ 12794);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _libs_form_fields_src_lib_date_calendar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/date-calendar.component */ 89058);
















function GroupEventsSidebarComponent_mat_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const range_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", range_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", range_r1.display, " ");
  }
}
function GroupEventsSidebarComponent_div_19_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupEventsSidebarComponent_div_19_button_3_Template_button_click_0_listener() {
      const tag_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.toggleTag(tag_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-checkbox", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const tag_r3 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, ctx_r3.filters)) == null ? null : tmp_3_0.tags == null ? null : tmp_3_0.tags.includes(tag_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", tag_r3, " ");
  }
}
function GroupEventsSidebarComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Tags");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, GroupEventsSidebarComponent_div_19_button_3_Template, 4, 4, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 1, ctx_r3.tags));
  }
}
class GroupEventsSidebarComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  constructor(_settings, _state) {
    super();
    this._settings = _settings;
    this._state = _state;
    this.period = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject('week');
    this.period_list = [];
    this.options = this._state.options;
    this.filters = this._state.filters;
    this.tags = this._state.tags;
  }
  ngOnInit() {
    this.subscription('period', this.period.subscribe(() => {
      this._generatePeriods();
      if (this.period_list.length) {
        this.setPeriod(this.period_list[0].id);
        this.selected_range = this.period_list[0].id;
      }
    }));
    this._generatePeriods();
    if (this.period_list.length) {
      this.setPeriod(this.period_list[0].id);
      this.selected_range = this.period_list[0].id;
    }
  }
  toggleTag(tag) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const tags = (yield _this.filters.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).toPromise())?.tags || [];
      if (tags.includes(tag)) {
        _this._state.setFilters({
          tags: tags.filter(_ => _ !== tag)
        });
      } else {
        _this._state.setFilters({
          tags: [...tags, tag]
        });
      }
    })();
  }
  setPeriodFromDate(date) {
    for (const period of this.period_list) {
      if (date >= period.start && date <= period.end) {
        this.selected_range = period.id;
        this.setPeriod(period.id);
        return;
      }
    }
  }
  setPeriod(id) {
    const {
      start,
      end
    } = this.period_list.find(_ => _.id === id);
    this._state.setOptions({
      date: start,
      end
    });
  }
  _generatePeriods() {
    const periods = [];
    const period_type = this.period.value;
    let date = Date.now();
    const end_date = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.addDays)(date, 12 * 30).valueOf();
    const week_offset = this._settings.get('app.week_start') || 0;
    if (period_type === 'month') {
      date = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.startOfMonth)(date).valueOf();
    } else if (period_type === 'week') {
      date = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.startOfWeek)(date, {
        weekStartsOn: week_offset
      }).valueOf();
    }
    while (date < end_date) {
      if (period_type === 'week') {
        const end = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__.endOfDay)((0,date_fns__WEBPACK_IMPORTED_MODULE_7__.addDays)(date, 6)).valueOf();
        periods.push({
          id: date,
          start: date,
          end,
          display: `${(0,date_fns__WEBPACK_IMPORTED_MODULE_11__.format)(Math.max(Date.now(), date), 'EEE, do MMM')} – ${(0,date_fns__WEBPACK_IMPORTED_MODULE_11__.format)(end, 'do MMM')}`
        });
        date = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.addDays)(date, 7).valueOf();
      } else if (period_type === 'month') {
        const end = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__.endOfDay)((0,date_fns__WEBPACK_IMPORTED_MODULE_7__.addDays)((0,date_fns__WEBPACK_IMPORTED_MODULE_12__.addMonths)(date, 1), -1)).valueOf();
        periods.push({
          id: date,
          start: date,
          end,
          display: `${(0,date_fns__WEBPACK_IMPORTED_MODULE_11__.format)(date, 'MMMM yyyy')}`
        });
        date = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__.addMonths)(date, 1).valueOf();
      } else break;
    }
    this.period_list = periods;
  }
  static #_ = this.ɵfac = function GroupEventsSidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || GroupEventsSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_group_events_state_service__WEBPACK_IMPORTED_MODULE_2__.GroupEventsStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: GroupEventsSidebarComponent,
    selectors: [["group-events-sidebar"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
    decls: 21,
    vars: 16,
    consts: [[1, "flex", "flex-col", "bg-base-100", "w-[18rem]", "h-full"], [1, "flex", "items-center", "space-x-2", "p-2"], ["btn", "", "matRipple", "", 1, "flex-1", "rounded-3xl", 3, "click"], [1, "flex", "flex-col", "items-center", "space-y-2", "pb-2", "px-2"], ["appearance", "outline", 1, "w-full", "no-subscript"], ["placeholder", "Select Period", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "border-base-200", "w-[calc(100%-1rem)]", "mx-auto"], [3, "ngModelChange", "ngModel"], [1, "flex", "flex-col", "flex-1", "overflow-auto"], [1, "text-lg", "font-medium", "p-4"], ["class", "flex flex-col space-y-2 px-4", 4, "ngIf"], [3, "value"], [1, "flex", "flex-col", "space-y-2", "px-4"], ["matRipple", "", "class", "flex items-center rounded w-full text-left", 3, "click", 4, "ngFor", "ngForOf"], ["matRipple", "", 1, "flex", "items-center", "rounded", "w-full", "text-left", 3, "click"], [3, "ngModel"]],
    template: function GroupEventsSidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupEventsSidebarComponent_Template_button_click_2_listener() {
          return ctx.period.next("week");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Week ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupEventsSidebarComponent_Template_button_click_5_listener() {
          return ctx.period.next("month");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Month ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 3)(9, "mat-form-field", 4)(10, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function GroupEventsSidebarComponent_Template_mat_select_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selected_range, $event) || (ctx.selected_range = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function GroupEventsSidebarComponent_Template_mat_select_ngModelChange_10_listener($event) {
          return ctx.setPeriod($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, GroupEventsSidebarComponent_mat_option_11_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "date-calendar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function GroupEventsSidebarComponent_Template_date_calendar_ngModelChange_13_listener($event) {
          return ctx.setPeriodFromDate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 9)(17, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, GroupEventsSidebarComponent_div_19_Template, 5, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        let tmp_5_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("inverse", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 8, ctx.period) !== "week");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("inverse", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 10, ctx.period) !== "month");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selected_range);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.period_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 12, ctx.options).date);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](20, 14, ctx.tags)) == null ? null : tmp_5_0.length);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatRipple, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__.MatCheckbox, _libs_form_fields_src_lib_date_calendar_component__WEBPACK_IMPORTED_MODULE_3__.DateCalendarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe]
  });
}

/***/ }),

/***/ 12794:
/*!*********************************************************************!*\
  !*** ./apps/workplace/src/app/events/group-events-state.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupEventsStateService: () => (/* binding */ GroupEventsStateService)
/* harmony export */ });
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/events */ 40569);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 99908);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 33240);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 56441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37580);









class GroupEventsStateService {
  get calendar() {
    return this._settings.get('app.group_events_calendar');
  }
  constructor(_org, _settings) {
    this._org = _org;
    this._settings = _settings;
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject({
      date: Date.now()
    });
    this._filters = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject({
      categories: [],
      tags: []
    });
    this._tag_list = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    this.filters = this._filters.asObservable();
    this.tags = this._tag_list.asObservable();
    this.events = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)([this._org.active_building, this._options]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(([building]) => !!building), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(([building, options]) => (0,_placeos_events__WEBPACK_IMPORTED_MODULE_1__.queryEvents)({
      period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.getUnixTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_8__.startOfDay)(options.date)),
      period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.getUnixTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_9__.endOfDay)(options.end || options.date || Date.now())),
      calendars: this.calendar
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(list => list.filter(_ => _.extension_data.view_access !== 'PRIVATE' && _.extension_data.shared_event).sort((a, b) => a.date - b.date)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(list => {
      const old_tags = this._tag_list.getValue();
      const tags = list.map(event => event.extension_data.tags || []).flat();
      this._tag_list.next((0,_placeos_common__WEBPACK_IMPORTED_MODULE_0__.unique)([...old_tags, ...tags]));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.shareReplay)(1));
    this.filtered_events = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)([this.events, this._filters]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(([list, {
      tags
    }]) => {
      const tag_list = tags.map(_ => _.toLowerCase());
      return list.filter(event => {
        const event_tags = (event.extension_data.tags || []).map(_ => _.toLowerCase());
        return tag_list.every(tag => event_tags.includes(tag)) && event.date_end > Date.now();
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.shareReplay)(1));
    this.options = this._options.asObservable();
  }
  setOptions(options) {
    this._options.next({
      ...this._options.value,
      ...options
    });
  }
  setFilters(filters) {
    this._filters.next({
      ...this._filters.value,
      ...filters
    });
  }
  static #_ = this.ɵfac = function GroupEventsStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || GroupEventsStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjectable"]({
    token: GroupEventsStateService,
    factory: GroupEventsStateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 98106:
/*!*****************************************************************!*\
  !*** ./apps/workplace/src/app/events/group-events.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupEventsComponent: () => (/* binding */ GroupEventsComponent)
/* harmony export */ });
/* harmony import */ var _group_events_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group-events-state.service */ 12794);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _components_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/topbar.component */ 17434);
/* harmony import */ var _components_footer_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer-menu.component */ 10895);
/* harmony import */ var _libs_events_src_lib_group_event_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/events/src/lib/group-event-card.component */ 27535);
/* harmony import */ var _group_events_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./group-events-sidebar.component */ 19191);
/* harmony import */ var _group_events_filters_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./group-events-filters-list.component */ 26763);












const _c0 = ["group-events", ""];
function GroupEventsComponent_group_event_card_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "group-event-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("event", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 2, ctx_r0.featured))("featured", true);
  }
}
function GroupEventsComponent_ng_container_7_group_event_card_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "group-event-card", 8);
  }
  if (rf & 2) {
    const event_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("event", event_r2);
  }
}
function GroupEventsComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, GroupEventsComponent_ng_container_7_group_event_card_2_Template, 1, 1, "group-event-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, ctx_r0.events_without_featured));
  }
}
function GroupEventsComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " No events for the selected time period ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Expand you search or try again ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
class GroupEventsComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  constructor(_state) {
    super();
    this._state = _state;
    this.event_list = this._state.filtered_events;
    this.featured = this.event_list.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(_ => _.find(_ => _.extension_data?.featured || _.featured)));
    this.events_without_featured = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.event_list, this.featured]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(([list, featured]) => list.filter(_ => _.id !== featured?.id)));
  }
  static #_ = this.ɵfac = function GroupEventsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || GroupEventsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_group_events_state_service__WEBPACK_IMPORTED_MODULE_0__.GroupEventsStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: GroupEventsComponent,
    selectors: [["", "group-events", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
    attrs: _c0,
    decls: 12,
    vars: 7,
    consts: [["no_events", ""], [1, "flex", "flex-1", "h-1/2", "bg-base-200"], [1, "w-1/2", "flex-1", "h-full", "overflow-auto", "p-4"], ["class", "my-2 mx-auto w-[64rem] max-w-full", 3, "event", "featured", 4, "ngIf"], [4, "ngIf", "ngIfElse"], [1, "my-2", "mx-auto", "w-[64rem]", "max-w-full", 3, "event", "featured"], [1, "flex", "flex-wrap", "mt-2", "w-[64rem]", "max-w-full", "mx-auto"], ["class", "m-2", 3, "event", 4, "ngFor", "ngForOf"], [1, "m-2", 3, "event"], [1, "flex", "flex-col", "items-center", "justify-center", "w-full", "h-full", "space-y-2"], ["src", "assets/icons/no-results.svg", 1, "w-32"], [1, "font-medium"], [1, "opacity-30"]],
    template: function GroupEventsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "topbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "group-events-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "group-events-filters-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, GroupEventsComponent_group_event_card_5_Template, 2, 4, "group-event-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, GroupEventsComponent_ng_container_7_Template, 4, 3, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, GroupEventsComponent_ng_template_9_Template, 6, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "footer-menu");
      }
      if (rf & 2) {
        let tmp_2_0;
        const no_events_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 3, ctx.featured));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 5, ctx.event_list)) == null ? null : tmp_2_0.length)("ngIfElse", no_events_r3);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _components_topbar_component__WEBPACK_IMPORTED_MODULE_2__.TopbarComponent, _components_footer_menu_component__WEBPACK_IMPORTED_MODULE_3__.FooterMenuComponent, _libs_events_src_lib_group_event_card_component__WEBPACK_IMPORTED_MODULE_4__.GroupEventCardComponent, _group_events_sidebar_component__WEBPACK_IMPORTED_MODULE_5__.GroupEventsSidebarComponent, _group_events_filters_list_component__WEBPACK_IMPORTED_MODULE_6__.GroupEventsFiltersListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n                position: absolute;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                overflow: hidden;\n                display: flex;\n                flex-direction: column;\n            }\n\n            main[_ngcontent-%COMP%] {\n                min-height: 50%;\n            }\n\n            .top[_ngcontent-%COMP%] {\n                background-color: #007ac8;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwLWV2ZW50cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGtCQUFrQjtnQkFDbEIsTUFBTTtnQkFDTixPQUFPO2dCQUNQLFFBQVE7Z0JBQ1IsU0FBUztnQkFDVCxnQkFBZ0I7Z0JBQ2hCLGFBQWE7Z0JBQ2Isc0JBQXNCO1lBQzFCOztZQUVBO2dCQUNJLGVBQWU7WUFDbkI7O1lBRUE7Z0JBQ0kseUJBQXlCO1lBQzdCIiwiZmlsZSI6Imdyb3VwLWV2ZW50cy5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYWluIHtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1MCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50b3Age1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdhYzg7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd29ya3BsYWNlL3NyYy9hcHAvZXZlbnRzL2dyb3VwLWV2ZW50cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGtCQUFrQjtnQkFDbEIsTUFBTTtnQkFDTixPQUFPO2dCQUNQLFFBQVE7Z0JBQ1IsU0FBUztnQkFDVCxnQkFBZ0I7Z0JBQ2hCLGFBQWE7Z0JBQ2Isc0JBQXNCO1lBQzFCOztZQUVBO2dCQUNJLGVBQWU7WUFDbkI7O1lBRUE7Z0JBQ0kseUJBQXlCO1lBQzdCOztBQUVaLGdoQ0FBZ2hDIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudG9wIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YWM4O1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 67533:
/*!**************************************************************!*\
  !*** ./apps/workplace/src/app/events/group-events.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupEventsModule: () => (/* binding */ GroupEventsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _placeos_form_fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/form-fields */ 63046);
/* harmony import */ var _group_events_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group-events.component */ 98106);
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared.module */ 46358);
/* harmony import */ var _group_events_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./group-events-sidebar.component */ 19191);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/bookings */ 85616);
/* harmony import */ var _group_events_filters_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./group-events-filters-list.component */ 26763);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);











const ROUTES = [{
  path: '',
  component: _group_events_component__WEBPACK_IMPORTED_MODULE_1__.GroupEventsComponent
}];
class GroupEventsModule {
  static #_ = this.ɵfac = function GroupEventsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || GroupEventsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: GroupEventsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _components_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentModule, _placeos_bookings__WEBPACK_IMPORTED_MODULE_4__.SharedBookingsModule, _placeos_form_fields__WEBPACK_IMPORTED_MODULE_0__.FormFieldsModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(ROUTES)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](GroupEventsModule, {
    declarations: [_group_events_component__WEBPACK_IMPORTED_MODULE_1__.GroupEventsComponent, _group_events_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.GroupEventsSidebarComponent, _group_events_filters_list_component__WEBPACK_IMPORTED_MODULE_5__.GroupEventsFiltersListComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _components_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentModule, _placeos_bookings__WEBPACK_IMPORTED_MODULE_4__.SharedBookingsModule, _placeos_form_fields__WEBPACK_IMPORTED_MODULE_0__.FormFieldsModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=apps_workplace_src_app_events_group-events_module_ts.js.map