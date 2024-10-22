"use strict";
(self["webpackChunkconcierge"] = self["webpackChunkconcierge"] || []).push([["apps_concierge_src_app_events_events_module_ts"],{

/***/ 61879:
/*!*******************************************************************!*\
  !*** ./apps/concierge/src/app/events/event-calendar.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventCalendarComponent: () => (/* binding */ EventCalendarComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _event_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-state.service */ 94338);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 45726);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 6243);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 36337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _event_week_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-week-view.component */ 84889);
/* harmony import */ var _event_month_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-month-view.component */ 3393);















function EventCalendarComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, ctx_r1.period) === "week" ? "This Week" : "This Month");
  }
}
function EventCalendarComponent_event_week_view_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "event-week-view");
  }
}
function EventCalendarComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "event-month-view");
  }
}
class EventCalendarComponent {
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_settings, _state, _router, _route) {
    this._settings = _settings;
    this._state = _state;
    this._router = _router;
    this._route = _route;
    this.period = this._state.options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(_ => _.period));
    this.options = this._state.options;
    this.is_today = this.options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(_ => _.date <= Date.now() && _.end > Date.now()));
    this.event_list = this._state.event_list;
    this.event_day_map = this.event_list.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(list => {
      const map = {};
      for (const event of list) {
        const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)(event.date, 'yyyy-MM-dd');
        if (!map[date]) map[date] = [];
        map[date].push(event);
      }
      return map;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.shareReplay)(1));
  }
  setPeriod(period) {
    this._state.setOptions({
      period
    });
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: {
        period
      },
      queryParamsHandling: 'merge'
    });
  }
  nextPeriod() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        date,
        period
      } = yield _this.options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1)).toPromise();
      _this._router.navigate([], {
        relativeTo: _this._route,
        queryParams: {
          range: period === 'week' ? (0,date_fns__WEBPACK_IMPORTED_MODULE_11__.addWeeks)(date, 1).valueOf() : (0,date_fns__WEBPACK_IMPORTED_MODULE_12__.addMonths)(date, 1).valueOf()
        },
        queryParamsHandling: 'merge'
      });
    })();
  }
  previousPeriod() {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        date,
        period
      } = yield _this2.options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1)).toPromise();
      _this2._router.navigate([], {
        relativeTo: _this2._route,
        queryParams: {
          range: period === 'week' ? (0,date_fns__WEBPACK_IMPORTED_MODULE_11__.addWeeks)(date, -1).valueOf() : (0,date_fns__WEBPACK_IMPORTED_MODULE_12__.addMonths)(date, -1).valueOf()
        },
        queryParamsHandling: 'merge'
      });
    })();
  }
  static #_ = this.ɵfac = function EventCalendarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || EventCalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_event_state_service__WEBPACK_IMPORTED_MODULE_2__.EventStateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: EventCalendarComponent,
    selectors: [["event-calendar"]],
    decls: 28,
    vars: 21,
    consts: [["month_calendar", ""], [1, "flex", "items-center", "border-y", "border-base-200", "w-full"], [1, "flex-1", "px-2", "py-4"], ["class", "text-info text-xs", 4, "ngIf"], [1, "flex-2", "flex", "items-center", "justify-center", "space-x-2"], [1, "font-medium", "pl-4"], ["icon", "", "matRipple", "", 3, "click"], [1, "flex-1", "flex", "items-center", "justify-end", "space-x-2", "py-2"], ["btn", "", "matRipple", "", 1, "rounded-3xl", 3, "click"], [1, "w-full", "h-4"], [1, "relative", "flex-1", "h-1/2", "w-full", "overflow-auto"], [4, "ngIf", "ngIfElse"], [1, "text-info", "text-xs"]],
    template: function EventCalendarComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, EventCalendarComponent_span_2_Template, 3, 3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EventCalendarComponent_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.previousPeriod());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "chevron_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EventCalendarComponent_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.nextPeriod());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "chevron_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 7)(16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EventCalendarComponent_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.setPeriod("week"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, " Week ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EventCalendarComponent_Template_button_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.setPeriod("month"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, " Month ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, EventCalendarComponent_event_week_view_24_Template, 1, 0, "event-week-view", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](25, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, EventCalendarComponent_ng_template_26_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let tmp_2_0;
        const month_calendar_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 8, ctx.is_today));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](8, 12, (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 10, ctx.options)) == null ? null : tmp_2_0.date, "MMM yyyy"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("inverse", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](17, 15, ctx.period) !== "week");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("inverse", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](20, 17, ctx.period) !== "month");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](25, 19, ctx.period) !== "month")("ngIfElse", month_calendar_r3);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, _event_week_view_component__WEBPACK_IMPORTED_MODULE_4__.EventWeekViewComponent, _event_month_view_component__WEBPACK_IMPORTED_MODULE_5__.EventMonthViewComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LWNhbGVuZGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixzQkFBc0I7Z0JBQ3RCLFlBQVk7Z0JBQ1osV0FBVztZQUNmIiwiZmlsZSI6ImV2ZW50LWNhbGVuZGFyLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvZXZlbnRzL2V2ZW50LWNhbGVuZGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixzQkFBc0I7Z0JBQ3RCLFlBQVk7Z0JBQ1osV0FBVztZQUNmOztBQUVaLDRpQkFBNGlCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 84055:
/*!******************************************************************!*\
  !*** ./apps/concierge/src/app/events/event-listing.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventListingComponent: () => (/* binding */ EventListingComponent)
/* harmony export */ });
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _event_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-state.service */ 94338);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ 26354);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _libs_components_src_lib_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/custom-tooltip.component */ 22238);
/* harmony import */ var _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/simple-table.component */ 88328);
/* harmony import */ var _libs_components_src_lib_authenticated_image_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/authenticated-image.directive */ 93208);
/* harmony import */ var _libs_events_src_lib_attendee_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/events/src/lib/attendee-list.component */ 47249);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _libs_components_src_lib_level_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/level.pipe */ 23666);
/* harmony import */ var _libs_components_src_lib_building_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/building.pipe */ 56062);
/* harmony import */ var _libs_spaces_src_lib_space_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../libs/spaces/src/lib/space.pipe */ 22011);


















const _c0 = a0 => ({
  key: "date",
  name: "Event",
  content: a0
});
const _c1 = a0 => ({
  key: "level",
  name: "Level",
  content: a0,
  size: "8rem",
  sortable: false
});
const _c2 = a0 => ({
  key: "room",
  name: "Room",
  content: a0,
  size: "12rem",
  sortable: false
});
const _c3 = a0 => ({
  key: "interested",
  name: "Interested",
  content: a0,
  size: "6rem",
  sortable: false
});
const _c4 = a0 => ({
  key: "attending",
  name: "Attending",
  content: a0,
  size: "6rem",
  sortable: false
});
const _c5 = a0 => ({
  key: "state",
  name: "Status",
  content: a0,
  size: "8.5rem"
});
const _c6 = a0 => ({
  key: "access",
  name: "Published",
  content: a0,
  size: "6rem",
  sortable: false
});
const _c7 = a0 => ({
  key: "actions",
  name: " ",
  content: a0,
  size: "4rem",
  sortable: false
});
const _c8 = (a0, a1, a2, a3, a4, a5, a6, a7) => [a0, a1, a2, a3, a4, a5, a6, a7];
const _c9 = a0 => ["/entertainment", "events", "manage", a0];
function EventListingComponent_ng_template_4_img_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "img", 23);
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("source", item_r1.images[0]);
  }
}
function EventListingComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, EventListingComponent_ng_template_4_img_9_Template, 1, 1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 19)(11, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](19, "space");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](20, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](21, "building");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_15_0;
    const item_r1 = ctx.row;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](4, 7, item_r1.date, "MMM"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](7, 10, item_r1.date, "d"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", item_r1.images == null ? null : item_r1.images.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](15, 13, item_r1.date, "EEEE, " + ctx_r1.time_format), " \u2013 ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](16, 16, item_r1.date + item_r1.duration * 60 * 1000, ctx_r1.time_format + " (z)"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", (tmp_15_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](21, 23, (tmp_15_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](20, 21, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](19, 19, item_r1.linked_event == null ? null : item_r1.linked_event.system_id))) == null ? null : tmp_15_0.zones)) == null ? null : tmp_15_0.address, " ");
  }
}
function EventListingComponent_ng_template_6_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " No Level ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function EventListingComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "space");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "level");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, EventListingComponent_ng_template_6_span_5_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_11_0;
    const item_r3 = ctx.row;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", (tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 6, (tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, (tmp_10_0 = ctx_r1.room(item_r3)) == null ? null : tmp_10_0.email))) == null ? null : tmp_10_0.zones)) == null ? null : tmp_10_0.display_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !((tmp_11_0 = ctx_r1.room(item_r3)) == null ? null : tmp_11_0.email));
  }
}
function EventListingComponent_ng_template_8_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " No Room ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function EventListingComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "space");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, EventListingComponent_ng_template_8_span_4_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_11_0;
    const item_r4 = ctx.row;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", (tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, (tmp_10_0 = ctx_r1.room(item_r4)) == null ? null : tmp_10_0.email))) == null ? null : tmp_10_0.display_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !((tmp_11_0 = ctx_r1.room(item_r4)) == null ? null : tmp_11_0.email));
  }
}
function EventListingComponent_ng_template_10_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "attendee-list", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("list", item_r5.attendees)("host", item_r5.user_email || item_r5.host)("show_host", false)("hide_close", true)("custom_title", "Interested");
  }
}
function EventListingComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, EventListingComponent_ng_template_10_ng_template_2_Template, 2, 5, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
  }
  if (rf & 2) {
    const item_r5 = ctx.row;
    const view_attendees_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("content", view_attendees_r6)("disabled", !(item_r5.attendees == null ? null : item_r5.attendees.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", (item_r5.attendees == null ? null : item_r5.attendees.length) || 0, " ");
  }
}
function EventListingComponent_ng_template_12_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "attendee-list", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().row;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("show_host", false)("list", ctx_r1.checkedInList(item_r7.attendees))("host", item_r7.user_email || item_r7.host)("hide_close", true);
  }
}
function EventListingComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, EventListingComponent_ng_template_12_ng_template_2_Template, 2, 4, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
  }
  if (rf & 2) {
    const item_r7 = ctx.row;
    const view_attendees_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("content", view_attendees_r8)("disabled", !ctx_r1.checkedInCount(item_r7.attendees));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.checkedInCount(item_r7.attendees), " ");
  }
}
function EventListingComponent_ng_template_14_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 32)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function EventListingComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, EventListingComponent_ng_template_14_div_0_Template, 3, 0, "div", 31);
  }
  if (rf & 2) {
    const data_r9 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", data_r9 === "OPEN" || data_r9 === "open");
  }
}
function EventListingComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 24)(1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r10 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("bg-success", item_r10.state !== "done" && item_r10.state !== "in_progress" && item_r10.state !== "started")("text-success-content", item_r10.state !== "done" && item_r10.state !== "in_progress" && item_r10.state !== "started")("bg-warning", item_r10.state === "in_progress" || item_r10.state === "started")("text-warning-content", item_r10.state === "in_progress" || item_r10.state === "started")("bg-base-200", item_r10.state === "done")("text-base-content", item_r10.state === "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r10.state === "done" ? "Done" : item_r10.state === "in_progress" || item_r10.state === "started" ? "In Progress" : "Active", " ");
  }
}
function EventListingComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 34)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "mat-menu", null, 9)(5, "button", 35)(6, "div", 36)(7, "app-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, " confirmation_number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Promote Event");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EventListingComponent_ng_template_18_Template_button_click_11_listener() {
      const row_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11).row;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.viewEvent(row_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 36)(13, "app-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "View Event");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "a", 40)(18, "div", 36)(19, "app-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "Edit Event");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "button", 35)(24, "div", 36)(25, "app-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "Copy URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EventListingComponent_ng_template_18_Template_button_click_29_listener() {
      const row_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11).row;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r1.removeEvent(row_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 36)(31, "app-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, "Delete Event");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const row_r12 = ctx.row;
    const menu_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matMenuTriggerFor", menu_r13)("disabled", row_r12.state === "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](5, _c9, row_r12 == null ? null : row_r12.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", true);
  }
}
class EventListingComponent {
  room(item) {
    return item.resources.find(_ => _.email !== this._state.calendar);
  }
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_settings, _state) {
    this._settings = _settings;
    this._state = _state;
    this.loading = this._state.loading;
    this.event_list = this._state.event_list;
    this.viewEvent = event => this._state.viewEvent(event);
    this.removeEvent = event => this._state.removeEvent(event);
  }
  checkedInCount(attendees) {
    if (!attendees?.length) return 0;
    return attendees.filter(user => user.checked_in).length;
  }
  checkedInList(attendees) {
    if (!attendees?.length) return [];
    return attendees.filter(user => user.checked_in);
  }
  static #_ = this.ɵfac = function EventListingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || EventListingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_event_state_service__WEBPACK_IMPORTED_MODULE_1__.EventStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: EventListingComponent,
    selectors: [["event-listing"]],
    decls: 20,
    vars: 32,
    consts: [["event_template", ""], ["level_template", ""], ["room_template", ""], ["interested_template", ""], ["attending_template", ""], ["published_template", ""], ["status_template", ""], ["actions_template", ""], ["view_attendees", ""], ["menu", "matMenu"], ["mode", "indeterminate", 1, "w-full"], ["empty_message", "No group events for selected period", 1, "min-w-[72rem]", "w-full", "block", "text-sm", 3, "data", "columns", "sortable"], [1, "w-full", "h-20"], [1, "flex", "items-center", "space-x-2", "px-3", "py-2"], ["date", "", 1, "flex", "flex-col", "items-center", "leading-tight", "w-8"], ["month", "", 1, "text-sm", "font-medium", "relative", "top-0.5", "opacity-60"], ["day", "", 1, "text-2xl", "font-light", "relative", "-top-0.5"], [1, "flex", "items-center", "justify-center", "h-12", "w-12", "rounded", "overflow-hidden", "bg-base-200", "border", "border-base-200"], ["auth", "", "class", "min-h-full min-w-full object-cover", 3, "source", 4, "ngIf"], ["details", "", 1, "flex", "flex-col"], [1, "text-sm"], [1, "text-xs", "opacity-40"], [1, "text-xs"], ["auth", "", 1, "min-h-full", "min-w-full", "object-cover", 3, "source"], [1, "p-4"], ["class", "opacity-30", 4, "ngIf"], [1, "opacity-30"], ["icon", "", "matRipple", "", "customTooltip", "", 1, "rounded", "h-12", "w-12", "mx-auto", 3, "content", "disabled"], [1, "relative", "w-[20rem]", "h-[28rem]", "overflow-auto", "bg-white", "rounded", "shadow"], [3, "list", "host", "show_host", "hide_close", "custom_title"], [3, "show_host", "list", "host", "hide_close"], ["class", "rounded h-8 w-8 flex items-center justify-center text-2xl bg-success text-success-content mx-auto", 4, "ngIf"], [1, "rounded", "h-8", "w-8", "flex", "items-center", "justify-center", "text-2xl", "bg-success", "text-success-content", "mx-auto"], [1, "px-4", "py-1", "rounded-full"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", "mx-2", 3, "matMenuTriggerFor", "disabled"], ["mat-menu-item", "", 3, "disabled"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], [1, "mr-2"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 3, "routerLink"], [1, "text-2xl", "text-error"]],
    template: function EventListingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "mat-progress-bar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "simple-table", 11)(3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, EventListingComponent_ng_template_4_Template, 22, 25, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"])(6, EventListingComponent_ng_template_6_Template, 6, 8, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"])(8, EventListingComponent_ng_template_8_Template, 5, 6, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"])(10, EventListingComponent_ng_template_10_Template, 4, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"])(12, EventListingComponent_ng_template_12_Template, 4, 3, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"])(14, EventListingComponent_ng_template_14_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"])(16, EventListingComponent_ng_template_16_Template, 3, 13, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"])(18, EventListingComponent_ng_template_18_Template, 35, 7, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const event_template_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](5);
        const level_template_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](7);
        const room_template_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](9);
        const interested_template_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](11);
        const attending_template_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](13);
        const published_template_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](15);
        const status_template_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](17);
        const actions_template_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("opacity-0", !_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 5, ctx.loading));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("data", ctx.event_list)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction8"](23, _c8, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](7, _c0, event_template_r14), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](9, _c1, level_template_r15), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](11, _c2, room_template_r16), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](13, _c3, interested_template_r17), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](15, _c4, attending_template_r18), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](17, _c5, status_template_r20), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](19, _c6, published_template_r19), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](21, _c7, actions_template_r21)))("sortable", true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuTrigger, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__.MatProgressBar, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _libs_components_src_lib_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_3__.CustomTooltipComponent, _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_4__.SimpleTableComponent, _libs_components_src_lib_authenticated_image_directive__WEBPACK_IMPORTED_MODULE_5__.AuthenticatedImageDirective, _libs_events_src_lib_attendee_list_component__WEBPACK_IMPORTED_MODULE_6__.AttendeeListComponent, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe, _libs_components_src_lib_level_pipe__WEBPACK_IMPORTED_MODULE_7__.LevelPipe, _libs_components_src_lib_building_pipe__WEBPACK_IMPORTED_MODULE_8__.BuildingPipe, _libs_spaces_src_lib_space_pipe__WEBPACK_IMPORTED_MODULE_9__.SpacePipe]
  });
}

/***/ }),

/***/ 13246:
/*!*****************************************************************!*\
  !*** ./apps/concierge/src/app/events/event-manage.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventManageComponent: () => (/* binding */ EventManageComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/keycodes */ 74879);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 57871);
/* harmony import */ var _event_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-state.service */ 94338);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns */ 45726);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! date-fns */ 1874);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! date-fns */ 99134);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! date-fns */ 33240);
/* harmony import */ var _placeos_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/events */ 40569);
/* harmony import */ var _placeos_users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @placeos/users */ 41489);
/* harmony import */ var _placeos_spaces__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @placeos/spaces */ 44855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/autocomplete */ 79771);
/* harmony import */ var _libs_form_fields_src_lib_date_field_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/date-field.component */ 19608);
/* harmony import */ var _libs_form_fields_src_lib_time_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/time-field.component */ 81413);
/* harmony import */ var _libs_form_fields_src_lib_user_search_field_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/user-search-field.component */ 18000);
/* harmony import */ var _libs_form_fields_src_lib_rich_text_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/rich-text-input.component */ 81772);
/* harmony import */ var _libs_form_fields_src_lib_image_list_field_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/image-list-field.component */ 56864);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/chips */ 12772);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ngx-translate/core */ 597);


































const _c0 = () => ["/entertainment", "events"];
const _c1 = () => ({
  standalone: true
});
function EventManageComponent_div_0_mat_chip_row_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-chip-row", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("removed", function EventManageComponent_div_0_mat_chip_row_28_Template_mat_chip_row_removed_0_listener() {
      const tag_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r3.removeTag(tag_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "app-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("selectable", true)("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", tag_r3, " ");
  }
}
function EventManageComponent_div_0_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 49)(1, "div", 50)(2, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "a-time-field", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function EventManageComponent_div_0_div_58_Template_a_time_field_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r3.form.patchValue({
        date: $event
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "div", 50)(9, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "a-time-field", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function EventManageComponent_div_0_div_58_Template_a_time_field_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r3.form.patchValue({
        date_end: $event
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](4, 11, "FORM.START_TIME"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r3.form.getRawValue().date)("disabled", ctx_r3.form.controls.date.disabled)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](15, _c1))("use_24hr", ctx_r3.use_24hr);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](11, 13, "FORM.END_TIME"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r3.form.value.date_end || ctx_r3.form.value.date + ctx_r3.form.value.duration * 60 * 1000)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](16, _c1))("from", (ctx_r3.form == null ? null : (tmp_13_0 = ctx_r3.form.getRawValue()) == null ? null : tmp_13_0.date) + 30 * 60 * 1000)("use_24hr", ctx_r3.use_24hr)("extra_info_fn", ctx_r3.duration_info);
  }
}
function EventManageComponent_div_0_mat_option_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tz_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", tz_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", tz_r6, " ");
  }
}
function EventManageComponent_div_0_mat_option_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " No matching timezones ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", true);
  }
}
function EventManageComponent_div_0_ng_container_90_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const building_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", building_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", building_r8.display_name || building_r8.name, " ");
  }
}
function EventManageComponent_div_0_ng_container_90_mat_option_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const level_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", level_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", level_r9.display_name || level_r9.name, " ");
  }
}
function EventManageComponent_div_0_ng_container_90_mat_option_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const room_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", room_r10.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", room_r10.display_name || room_r10.name, " ");
  }
}
function EventManageComponent_div_0_ng_container_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Building Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "mat-form-field", 32)(4, "mat-select", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function EventManageComponent_div_0_ng_container_90_Template_mat_select_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r7);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r3.setBuilding($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, EventManageComponent_div_0_ng_container_90_mat_option_5_Template, 2, 2, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 59)(8, "div", 60)(9, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, "Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "mat-form-field", 32)(12, "mat-select", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function EventManageComponent_div_0_ng_container_90_Template_mat_select_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r7);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r3.setLevel($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](13, EventManageComponent_div_0_ng_container_90_mat_option_13_Template, 2, 2, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "div", 63)(16, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17, "Room");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "mat-form-field", 32)(19, "mat-select", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](20, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayListener"]("ngModelChange", function EventManageComponent_div_0_ng_container_90_Template_mat_select_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r7);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayBindingSet"](ctx_r3.resource, $event) || (ctx_r3.resource = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "mat-option")(22, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](23, "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](24, EventManageComponent_div_0_ng_container_90_mat_option_24_Template, 2, 2, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](25, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    let tmp_13_0;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r3.building_zone)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](18, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](6, 10, ctx_r3.building_list));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r3.level_zone)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](19, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](14, 12, ctx_r3.active_levels));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.resource);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](20, _c1))("disabled", ((tmp_13_0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](20, 14, ctx_r3.available_spaces)) == null ? null : tmp_13_0.length) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](25, 16, ctx_r3.available_spaces));
  }
}
function EventManageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 5)(1, "a", 6)(2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "form", 7)(5, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "section", 9)(8, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "Event Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](14, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, "Organiser");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](22, "a-user-search-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24, "Tags");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "mat-form-field", 16)(26, "mat-chip-grid", 17, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](28, EventManageComponent_div_0_mat_chip_row_28_Template, 4, 3, "mat-chip-row", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("matChipInputTokenEnd", function EventManageComponent_div_0_Template_input_matChipInputTokenEnd_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r3.addTag($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "div", 20)(31, "mat-checkbox", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](32, " Featured ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "mat-checkbox", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function EventManageComponent_div_0_Template_mat_checkbox_ngModelChange_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r3.form.patchValue({
        view_access: $event ? "OPEN" : "PRIVATE"
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](34, " Publish ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](35, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](37, "Date and Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](39, "div", 24)(40, "div", 25)(41, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](43, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](44, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](45, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](46, "a-date-field", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](48, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](49, "div", 25)(50, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](52, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](53, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](54, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](55, "a-date-field", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](57, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](58, EventManageComponent_div_0_div_58_Template, 15, 17, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](59, "div", 30)(60, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵi18n"](61, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](62, "mat-form-field", 32)(63, "app-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](64, " search ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](65, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](66, "mat-autocomplete", null, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](68, EventManageComponent_div_0_mat_option_68_Template, 2, 2, "mat-option", 35)(69, EventManageComponent_div_0_mat_option_69_Template, 2, 1, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](70, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](71, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](72, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](74, "div", 37)(75, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EventManageComponent_div_0_Template_button_click_75_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r3.form.patchValue({
        attendance_type: "ONSITE"
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](76, "app-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](77, "domain");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](78, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](79, "On Premise");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](80, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EventManageComponent_div_0_Template_button_click_80_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r3.form.patchValue({
        attendance_type: "ONLINE"
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](81, "app-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](82, "laptop_mac");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](83, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](84, "Online Only");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](85, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EventManageComponent_div_0_Template_button_click_85_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r3.form.patchValue({
        attendance_type: "ANY"
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](86, "app-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](87, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](88, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](89, "Both");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](90, EventManageComponent_div_0_ng_container_90_Template, 26, 21, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](91, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](92, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](93, "Event Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](95, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](96, "Event Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](97, "rich-text-input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](98, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](99, "Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](100, "image-list-field", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](101, "div", 44)(102, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](103, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](104, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EventManageComponent_div_0_Template_button_click_104_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r3.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](105, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const chipList_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](27);
    const auto_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](67);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](41, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx_r3.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r3.form.value.id ? "Edit" : "New", " Group Event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](17, 31, "FORM.TITLE_ERROR"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r3.tag_list);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matChipInputFor", chipList_r11)("matChipInputSeparatorKeyCodes", ctx_r3.separators)("matChipInputAddOnBlur", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r3.form.value.view_access === "OPEN")("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](42, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](43, 33, "FORM.DATE"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("to", ctx_r3.end_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](48, 35, "FORM.DATE_ERROR"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](52, 37, "FORM.END_DATE"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("from", ctx_r3.start_date)("to", ctx_r3.end_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](57, 39, "FORM.DATE_ERROR"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r3.form.value.all_day);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matAutocomplete", auto_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r3.filtered_timezones);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r3.timezones.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("inverse", false)("inverse", ctx_r3.form.value.attendance_type !== "ONSITE");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("inverse", ctx_r3.form.value.attendance_type !== "ONLINE");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("inverse", ctx_r3.form.value.attendance_type !== "ANY");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r3.form.value.attendance_type !== "ONLINE");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](43, _c0));
  }
}
function EventManageComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "mat-spinner", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Saving event...");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
const EMPTY = [];
class EventManageComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  get tag_list() {
    return this.form.getRawValue().tags || EMPTY;
  }
  get max_duration() {
    return this._settings.get('app.events.max_duration') || 480;
  }
  get use_24hr() {
    return this._settings.get('app.use_24_hour_time');
  }
  get building_zone() {
    const level = this.level_zone;
    const building = this._org.buildings.find(b => b.id === level?.parent_id);
    return building || this._org.building;
  }
  get level_zone() {
    const zones = this._form_state.options_value.zone_ids || [];
    const level = this._org.levelWithID(zones);
    return level;
  }
  constructor(_form_state, _state, _route, _router, _org, _settings) {
    super();
    this._form_state = _form_state;
    this._state = _state;
    this._route = _route;
    this._router = _router;
    this._org = _org;
    this._settings = _settings;
    this.loading = false;
    this.timezones = [];
    this.filtered_timezones = [];
    this.form = this._form_state.form;
    this.separators = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__.ENTER, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__.COMMA, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__.SPACE];
    this.building_list = this._org.building_list;
    this.active_levels = this._org.active_levels;
    this.available_spaces = this._form_state.available_spaces;
    this.duration_info = time => {
      const date = this.form.getRawValue().date;
      if ((0,date_fns__WEBPACK_IMPORTED_MODULE_15__.format)(date, 'yyyy-MM-dd') !== (0,date_fns__WEBPACK_IMPORTED_MODULE_15__.format)(time, 'yyyy-MM-dd')) return '';
      const diff = (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.differenceInMinutes)(time, date);
      return ` (${(0,date_fns__WEBPACK_IMPORTED_MODULE_17__.formatDuration)({
        hours: Math.floor(diff / 60),
        minutes: diff % 60
      })})`;
    };
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this._org.initialised.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.first)(_ => _)).toPromise();
      _this.form.patchValue({
        location: _this._org.building.address || _this._org.building.display_name,
        organiser: (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.currentUser)(),
        attendance_type: 'ONSITE',
        shared_event: true
      });
      _this.subscription('route.params', _this._route.paramMap.subscribe( /*#__PURE__*/function () {
        var _ref = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (params) {
          if (params.has('id')) {
            const booking = yield (0,_placeos_events__WEBPACK_IMPORTED_MODULE_4__.showEvent)(params.get('id'), {
              calendar: _this._state.calendar
            }).toPromise();
            if (!booking) return _this._router.navigate(['/entertainment', 'events']);
            _this._form_state.newForm(booking);
            _this.resource = booking.resources.find(_ => _.email !== _this._state.calendar)?.email;
            _this.form.patchValue({
              tags: booking.extension_data?.tags || [],
              organiser: new _placeos_users__WEBPACK_IMPORTED_MODULE_5__.StaffUser({
                id: booking.organiser?.id,
                email: booking.host,
                name: booking.organiser?.name
              }),
              resources: booking.resources.filter(_ => _.email !== _this._state.calendar)
            });
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()));
      _this._updateTimezoneList();
      _this.subscription('tz-change', _this.form.valueChanges.subscribe(() => _this._updateTimezoneList()));
    })();
  }
  setBuilding(bld) {
    this._org.building = bld;
  }
  setLevel(level) {
    const new_zones = (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.unique)([this._org.organisation.id, this._org.building.parent_id, this._org.building.id, level.id]);
    this._form_state.setOptions({
      zone_ids: [level.id]
    });
  }
  /**
   * Add a feature to the list of features for the item
   * @param event Input event
   */
  addTag(event) {
    if (!this.form || !this.form.controls.tags) return;
    const input = event.chipInput.inputElement;
    const value = event.value;
    const feature_list = this.tag_list;
    if ((value || '').trim()) {
      feature_list.push(value);
      this.form.controls.tags.setValue(feature_list);
    }
    if (input) input.value = '';
  }
  /**
   * Remove tag from the list
   * @param existing_tag Feature to remove
   */
  removeTag(existing_tag) {
    if (!this.form || !this.form.controls.tags) return;
    const tag_list = this.tag_list;
    const index = tag_list.indexOf(existing_tag);
    if (index >= 0) {
      tag_list.splice(index, 1);
      this.form.controls.tags.setValue(tag_list);
    }
  }
  save() {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.form.markAllAsTouched();
      if (!_this2.form.valid) {
        return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)(`Some form fields are invalid. [${(0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.getInvalidFields)(_this2.form)}]`);
      }
      _this2.loading = true;
      let resources = _this2.form.getRawValue().resources;
      const space = yield new _placeos_spaces__WEBPACK_IMPORTED_MODULE_6__.SpacePipe().transform(_this2._state.calendar);
      resources.push(space || new _placeos_spaces__WEBPACK_IMPORTED_MODULE_6__.Space({
        id: _this2._state.calendar,
        email: _this2._state.calendar
      }));
      if (_this2.resource) {
        const resource = yield new _placeos_spaces__WEBPACK_IMPORTED_MODULE_6__.SpacePipe().transform(_this2.resource);
        resources.push(resource);
      }
      resources = (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.unique)(resources, 'email');
      _this2.form.patchValue({
        resources,
        host: _this2._state.calendar
      });
      const date = _this2.form.getRawValue().date;
      const res = yield _this2._form_state.postForm(false, [_this2._state.calendar], true).catch(e => (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)(e));
      _this2._state.changed();
      _this2.loading = false;
      if (res) {
        _this2._router.navigate(['/entertainment', 'events'], {
          queryParams: {
            range: (0,date_fns__WEBPACK_IMPORTED_MODULE_19__.startOfDay)(date).valueOf()
          }
        });
      }
    })();
  }
  _updateTimezoneList() {
    const timezone = this.form?.value?.timezone || '';
    this.timezones = _placeos_common__WEBPACK_IMPORTED_MODULE_1__.TIMEZONES_IANA;
    this.filtered_timezones = this.timezones.filter(_ => _.toLowerCase().includes(timezone.toLowerCase()));
  }
  static #_ = this.ɵfac = function EventManageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || EventManageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_placeos_events__WEBPACK_IMPORTED_MODULE_4__.EventFormService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_event_state_service__WEBPACK_IMPORTED_MODULE_3__.EventStateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
    type: EventManageComponent,
    selectors: [["app-event-manage"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵInheritDefinitionFeature"]],
    decls: 3,
    vars: 2,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_displayNameLabel$$APPS_CONCIERGE_SRC_APP_EVENTS_EVENT_MANAGE_COMPONENT_TS_0 = goog.getMsg(" Timezone: ");
        i18n_0 = MSG_EXTERNAL_displayNameLabel$$APPS_CONCIERGE_SRC_APP_EVENTS_EVENT_MANAGE_COMPONENT_TS_0;
      } else {
        i18n_0 = $localize`:@@displayNameLabel␟23ba0a48c17b76008ce17f71f2ab2243ed7d8026␟3213117795366291168: Timezone: `;
      }
      return [["load_state", ""], ["chipList", ""], ["auto", "matAutocomplete"], i18n_0, ["class", "absolute inset-0 bg-base-100 overflow-auto", 4, "ngIf", "ngIfElse"], [1, "absolute", "inset-0", "bg-base-100", "overflow-auto"], ["icon", "", "matRipple", "", 1, "sticky", "top-2", "right-2", "ml-auto", 3, "routerLink"], [1, "flex", "flex-col", "w-[40rem]", "max-w-full", "mx-auto", "px-4", 3, "formGroup"], [1, "py-4", "text-2xl", "font-medium"], [1, "flex", "flex-col", "space-y-2"], ["for", "title"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "title", "formControlName", "title", "placeholder", "e.g. Team Meeting"], ["for", "host"], ["name", "host", "formControlName", "organiser", 1, "block", "mb-4"], ["for", "tags"], ["appearance", "outline", 1, "no-subscript"], ["aria-label", "Event Tags"], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "Add new tags relevant to this event...", 3, "matChipInputTokenEnd", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [1, "py-4", "flex", "items-center", "space-x-8"], ["formControlName", "featured"], [3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "w-full", "h-px", "bg-base-200"], [1, "flex", "items-center", "flex-wrap", "sm:space-x-2"], [1, "flex-1", "min-w-[256px]", "relative"], ["for", "date"], ["name", "date", "formControlName", "date", 3, "to"], ["name", "date", "formControlName", "date_end", 3, "from", "to"], ["class", "flex items-center space-x-2", 4, "ngIf"], [1, "flex", "flex-col"], ["for", "display-name"], ["appearance", "outline"], ["matPrefix", "", 1, "text-2xl"], ["matInput", "", "formControlName", "timezone", "placeholder", "Timezone", 3, "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "disabled", 4, "ngIf"], [1, "flex", "items-center", "space-x-2", "pb-2"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "click"], [1, "text-2xl"], [1, "mx-2"], [4, "ngIf"], ["formControlName", "body"], ["formControlName", "images"], [1, "flex", "justify-end", "space-x-2", "sticky", "bottom-0", "w-full", "bg-base-100", "py-4"], ["btn", "", "matRipple", "", 1, "inverse", "w-32", 3, "routerLink"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [3, "removed", "selectable", "removable"], ["matChipRemove", ""], [1, "flex", "items-center", "space-x-2"], [1, "flex-1", "w-1/3"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "disabled", "ngModelOptions", "use_24hr"], ["for", "end-time"], ["name", "end-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "from", "use_24hr", "extra_info_fn"], [3, "value"], [3, "disabled"], ["for", "location"], ["placeholder", "Select Building", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "flex", "space-x-2"], [1, "flex", "flex-col", "flex-[2]"], ["for", "level"], ["placeholder", "Select Level", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "flex", "flex-col", "flex-[3]"], ["placeholder", "Select Room", 3, "ngModelChange", "ngModel", "ngModelOptions", "disabled"], [1, "absolute", "inset-0", "bg-base-100", "flex", "flex-col", "items-center", "justify-center", "space-y-4"], ["diameter", "48"]];
    },
    template: function EventManageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, EventManageComponent_div_0_Template, 106, 44, "div", 4)(1, EventManageComponent_ng_template_1_Template, 4, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const load_state_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", load_state_r13);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatPrefix, _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_25__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatOption, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__.MatCheckbox, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinner, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__.MatAutocompleteTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatRipple, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormControlName, _libs_form_fields_src_lib_date_field_component__WEBPACK_IMPORTED_MODULE_7__.DateFieldComponent, _libs_form_fields_src_lib_time_field_component__WEBPACK_IMPORTED_MODULE_8__.TimeFieldComponent, _libs_form_fields_src_lib_user_search_field_component__WEBPACK_IMPORTED_MODULE_9__.UserSearchFieldComponent, _libs_form_fields_src_lib_rich_text_input_component__WEBPACK_IMPORTED_MODULE_10__.RichTextInputComponent, _libs_form_fields_src_lib_image_list_field_component__WEBPACK_IMPORTED_MODULE_11__.ImageListFieldComponent, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_12__.IconComponent, _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__.MatChipGrid, _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__.MatChipInput, _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__.MatChipRemove, _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__.MatChipRow, _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_21__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__.TranslatePipe]
  });
}

/***/ }),

/***/ 3393:
/*!*********************************************************************!*\
  !*** ./apps/concierge/src/app/events/event-month-view.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventMonthViewComponent: () => (/* binding */ EventMonthViewComponent)
/* harmony export */ });
/* harmony import */ var _event_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-state.service */ 94338);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 45726);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 33240);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 90610);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 60452);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 28797);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ 31257);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ 79681);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 89273);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/custom-tooltip.component */ 22238);
/* harmony import */ var _libs_events_src_lib_group_event_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/events/src/lib/group-event-card.component */ 27535);

















const _c0 = () => [];
function EventMonthViewComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const weekday_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, weekday_r1, "EEEE"), " ");
  }
}
function EventMonthViewComponent_div_3_button_4_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "group-event-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const event_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("event", event_r3);
  }
}
function EventMonthViewComponent_div_3_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EventMonthViewComponent_div_3_button_4_Template_button_click_0_listener() {
      const event_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.viewEvent(event_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, EventMonthViewComponent_div_3_button_4_ng_template_6_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const event_r3 = ctx.$implicit;
    const event_card_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](4, 4, event_r3.date, "shortTime"), " \u2014 ", event_r3.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("content", event_card_r5)("hover", true);
  }
}
function EventMonthViewComponent_div_3_button_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const day_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const menu_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", menu_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, ctx_r3.event_day_map)[ctx_r3.dateString(day_r6.id)] || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c0)).length - 3, " more event(s) ");
  }
}
function EventMonthViewComponent_div_3_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EventMonthViewComponent_div_3_button_11_Template_button_click_0_listener() {
      const event_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.viewEvent(event_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 20)(2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const event_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](event_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](6, 2, event_r9.date, "shortTime"), " ");
  }
}
function EventMonthViewComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7)(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, EventMonthViewComponent_div_3_button_4_Template, 8, 7, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, EventMonthViewComponent_div_3_button_7_Template, 3, 5, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-menu", null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, EventMonthViewComponent_div_3_button_11_Template, 7, 5, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const day_r6 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("opacity-30", !day_r6.is_month)("bg-secondary", day_r6.is_today)("text-secondary-content", day_r6.is_today);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](3, 10, day_r6.id, "d"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](6, 15, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 13, ctx_r3.event_day_map)[ctx_r3.dateString(day_r6.id)] || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](26, _c0), 0, 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 19, ctx_r3.event_day_map)[ctx_r3.dateString(day_r6.id)] || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](27, _c0)).length > 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](13, 23, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 21, ctx_r3.event_day_map)[ctx_r3.dateString(day_r6.id)] || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](28, _c0), 3));
  }
}
class EventMonthViewComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  dateString(date) {
    if (!date) return '';
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.format)(date, 'yyyy-MM-dd');
  }
  get offset_weekday() {
    return this._settings.get('app.week_start') || 0;
  }
  constructor(_state, _settings, _dialog, _router) {
    super();
    this._state = _state;
    this._settings = _settings;
    this._dialog = _dialog;
    this._router = _router;
    this.month = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.startOfDay)(Date.now()).valueOf();
    this.weekdays = [];
    this.month_days = [];
    this.event_list = this._state.event_list;
    this.event_day_map = this.event_list.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(list => {
      const map = {};
      for (const event of list) {
        const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.format)(event.date, 'yyyy-MM-dd');
        if (!map[date]) map[date] = [];
        const start = new Date(event.date);
        map[date].push({
          ...event,
          offset: (start.getHours() * 60 + start.getMinutes()) / (24 * 60),
          length: event.duration / (24 * 60)
        });
      }
      return map;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.startWith)({}), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.shareReplay)(1));
    this.viewEvent = event => this._state.viewEvent(event);
  }
  ngOnInit() {
    this.subscription('date', this._state.options.subscribe(({
      date
    }) => {
      this.month = date;
      this._setMonthDays();
      this._setWeekdays();
    }));
    this._setMonthDays();
    this._setWeekdays();
  }
  _setMonthDays() {
    const start = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__.startOfWeek)((0,date_fns__WEBPACK_IMPORTED_MODULE_11__.startOfMonth)(this.month), {
      weekStartsOn: this.offset_weekday
    });
    this.month_days = Array.from(Array(7 * 6).keys()).map(i => {
      const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__.addDays)(start, i).valueOf();
      return {
        id: date,
        is_today: (0,date_fns__WEBPACK_IMPORTED_MODULE_13__.isSameDay)(date, Date.now()),
        is_month: (0,date_fns__WEBPACK_IMPORTED_MODULE_14__.isSameMonth)(date, this.month)
      };
    });
  }
  _setWeekdays() {
    const start = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__.startOfWeek)(Date.now(), {
      weekStartsOn: this.offset_weekday
    });
    this.weekdays = Array.from(Array(7).keys()).map(i => (0,date_fns__WEBPACK_IMPORTED_MODULE_12__.addDays)(start, i));
  }
  static #_ = this.ɵfac = function EventMonthViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || EventMonthViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_event_state_service__WEBPACK_IMPORTED_MODULE_0__.EventStateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: EventMonthViewComponent,
    selectors: [["event-month-view"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
    decls: 4,
    vars: 2,
    consts: [["menu", "matMenu"], ["event_card", ""], [1, "absolute", "inset-0", "overflow-auto"], [1, "grid", "grid-cols-7", "min-w-full", "w-[80rem]", "min-h-full", "h-[56rem]", "m-2", "border-b", "border-base-200"], ["weekday", "", "class", "relative flex items-center justify-center text-sm opacity-60 p-2 h-12", 4, "ngFor", "ngForOf"], ["monthday", "", "class", "relative border border-base-200 flex flex-col space-y-1", 4, "ngFor", "ngForOf"], ["weekday", "", 1, "relative", "flex", "items-center", "justify-center", "text-sm", "opacity-60", "p-2", "h-12"], ["monthday", "", 1, "relative", "border", "border-base-200", "flex", "flex-col", "space-y-1"], [1, "rounded-full", "w-8", "h-8", "flex", "items-center", "justify-center", "mt-1", "ml-1"], ["matRipple", "", "class", "relative w-[calc(100%-0.5rem)] h-7 bg-base-100 rounded border border-base-200 hover:border-info shadow pl-3 pr-2 py-1 overflow-hidden mx-1", 3, "click", 4, "ngFor", "ngForOf"], ["matRipple", "", "matTooltip", "More events", "class", "relative w-[calc(100%-0.5rem)] h-7 rounded pl-3 pr-2 py-1 overflow-hidden mx-1 underline text-sm", 3, "matMenuTriggerFor", 4, "ngIf"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["matRipple", "", 1, "relative", "w-[calc(100%-0.5rem)]", "h-7", "bg-base-100", "rounded", "border", "border-base-200", "hover:border-info", "shadow", "pl-3", "pr-2", "py-1", "overflow-hidden", "mx-1", 3, "click"], [1, "absolute", "left-0", "inset-y-0", "bg-info", "w-1.5"], [1, "text-sm", "opacity-60", "h-full", "text-left", "truncate"], ["customTooltip", "", "xPosition", "center", "yPosition", "bottom", 1, "absolute", "inset-0", 3, "content", "hover"], [1, "p-2", "pointer-events-none"], [3, "event"], ["matRipple", "", "matTooltip", "More events", 1, "relative", "w-[calc(100%-0.5rem)]", "h-7", "rounded", "pl-3", "pr-2", "py-1", "overflow-hidden", "mx-1", "underline", "text-sm", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-4"], [1, "flex-1"], [1, "text-xs", "opacity-60", "py-1", "px-2", "rounded", "bg-base-200", "text-base-content"]],
    template: function EventMonthViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, EventMonthViewComponent_div_2_Template, 3, 4, "div", 4)(3, EventMonthViewComponent_div_3_Template, 14, 29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.weekdays);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.month_days);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuTrigger, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltip, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatRipple, _libs_components_src_lib_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_2__.CustomTooltipComponent, _libs_events_src_lib_group_event_card_component__WEBPACK_IMPORTED_MODULE_3__.GroupEventCardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_17__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe],
    styles: [".grid[_ngcontent-%COMP%] {\n                grid-template-rows: 3rem repeat(6, minmax(0, 1fr));\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LW1vbnRoLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxrREFBa0Q7WUFDdEQiLCJmaWxlIjoiZXZlbnQtbW9udGgtdmlldy5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIC5ncmlkIHtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDNyZW0gcmVwZWF0KDYsIG1pbm1heCgwLCAxZnIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvZXZlbnRzL2V2ZW50LW1vbnRoLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxrREFBa0Q7WUFDdEQ7O0FBRVosNGFBQTRhIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICAuZ3JpZCB7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzcmVtIHJlcGVhdCg2LCBtaW5tYXgoMCwgMWZyKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 94338:
/*!**************************************************************!*\
  !*** ./apps/concierge/src/app/events/event-state.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventStateService: () => (/* binding */ EventStateService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/events */ 40569);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 99908);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 33240);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 56441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 19803);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 95072);














class EventStateService extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  changed() {
    this.timeout('changed', () => this._changed.next(Date.now()), 100);
  }
  get period() {
    return this._options.getValue()?.period;
  }
  get calendar() {
    return this._settings.get('app.group_events_calendar');
  }
  constructor(_settings, _org, _dialog, _router) {
    super();
    this._settings = _settings;
    this._org = _org;
    this._dialog = _dialog;
    this._router = _router;
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject({
      period: 'week'
    });
    this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject('');
    this._poll = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(0);
    this._changed = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(0);
    this.event_list = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([this._org.active_building, this._options, this._changed, this._poll]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(([bld]) => !!bld), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(310), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(([_, options]) => {
      this._loading.next('Loading event list...');
      return (0,_placeos_events__WEBPACK_IMPORTED_MODULE_2__.queryEvents)({
        period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.getUnixTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_10__.startOfDay)(options.date)),
        period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.getUnixTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_11__.endOfDay)(options.end || options.date || Date.now())),
        calendars: this.calendar
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(list => list.filter(_ => _.extension_data?.shared_event).sort((a, b) => a.date - b.date)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(() => this._loading.next('')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.shareReplay)(1));
    this.options = this._options.asObservable();
    this.loading = this._loading.asObservable();
  }
  startPolling(delay = 60 * 1000) {
    this.interval('poll', () => document.hasFocus() ? this._poll.next(Date.now()) : '', delay);
    return () => this.stopPolling();
  }
  stopPolling() {
    this.clearInterval('poll');
  }
  setOptions(options) {
    this._options.next({
      ...this._options.value,
      ...options
    });
  }
  viewEvent(event) {
    var _this = this;
    const ref = this._dialog.open(_placeos_events__WEBPACK_IMPORTED_MODULE_2__.GroupEventDetailsModalComponent, {
      data: {
        event,
        concierge: true
      }
    });
    this.subscription(`edit:${event.id}`, ref.componentInstance.edit.subscribe(() => {
      this._router.navigate(['/entertainment', 'events', 'manage', event.id]);
    }));
    this.subscription(`remove:${event.id}`, ref.componentInstance.remove.subscribe( /*#__PURE__*/(0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.removeEvent(event);
      ref.close();
    })));
  }
  removeEvent(event) {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const result = yield (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.openConfirmModal)({
        title: 'Delete Event',
        content: `Are you sure you want to delete the event "${event.title}"?`,
        icon: {
          content: 'delete'
        },
        confirm_text: 'Delete'
      }, _this2._dialog);
      if (result.reason !== 'done') return;
      result.loading('Deleting event...');
      yield (0,_placeos_events__WEBPACK_IMPORTED_MODULE_2__.removeEvent)(event.id, {
        calendar: _this2.calendar
      }).toPromise().catch(e => {
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)(e);
        result.close();
        throw e;
      });
      result.close();
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifySuccess)('Successfully deleted event.');
      _this2._changed.next(Date.now());
    })();
  }
  static #_ = this.ɵfac = function EventStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || EventStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_3__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjectable"]({
    token: EventStateService,
    factory: EventStateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 84889:
/*!********************************************************************!*\
  !*** ./apps/concierge/src/app/events/event-week-view.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventWeekViewComponent: () => (/* binding */ EventWeekViewComponent)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 45726);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 23206);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 28797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 89273);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _event_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-state.service */ 94338);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/custom-tooltip.component */ 22238);
/* harmony import */ var _libs_events_src_lib_group_event_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/events/src/lib/group-event-card.component */ 27535);














const _c0 = () => [];
function EventWeekViewComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const hour_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", hour_r1, " ", i_r2 >= 12 ? "PM" : "AM", " ");
  }
}
function EventWeekViewComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const date_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](3, 2, date_r3, "EEEE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](6, 5, date_r3, "d"));
  }
}
function EventWeekViewComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 16);
  }
}
function EventWeekViewComponent_div_12_button_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "group-event-card", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const event_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("event", event_r5);
  }
}
function EventWeekViewComponent_div_12_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EventWeekViewComponent_div_12_button_1_Template_button_click_0_listener() {
      const event_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.viewEvent(event_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, EventWeekViewComponent_div_12_button_1_ng_template_6_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const event_r5 = ctx.$implicit;
    const event_card_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("top", event_r5.offset * 100 + "%")("height", event_r5.length * 100 + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](4, 8, event_r5.date, "shortTime"), " \u2014 ", event_r5.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("content", event_card_r7)("hover", true);
  }
}
function EventWeekViewComponent_div_12_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("top", ctx_r5.now_offset * 100 + "%");
  }
}
function EventWeekViewComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, EventWeekViewComponent_div_12_button_1_Template, 8, 11, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, EventWeekViewComponent_div_12_div_3_Template, 2, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const date_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("transform", "translateX(" + i_r9 * 100 + "%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 4, ctx_r5.event_day_map)[ctx_r5.dateString(date_r8)] || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.isCurrentDay(date_r8));
  }
}
class EventWeekViewComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_0__.AsyncHandler {
  dateString(date) {
    if (!date) return '';
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.format)(date, 'yyyy-MM-dd');
  }
  isCurrentDay(date) {
    if (!date) return false;
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.format)(Date.now(), 'yyyy-MM-dd') === (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.format)(date, 'yyyy-MM-dd');
  }
  get now() {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.startOfMinute)(Date.now()).valueOf();
  }
  get now_offset() {
    const now = new Date(this.now);
    return (now.getHours() * 60 + now.getMinutes()) / (24 * 60);
  }
  constructor(_state, _dialog, _router) {
    super();
    this._state = _state;
    this._dialog = _dialog;
    this._router = _router;
    this.days = new Array(7).fill(0).map((_, idx) => idx + 1);
    this.hours = new Array(24).fill(0).map((_, idx) => idx % 12 ? idx % 12 : 12);
    this.event_list = this._state.event_list;
    this.event_day_map = this.event_list.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(list => {
      const map = {};
      for (const event of list) {
        const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.format)(event.date, 'yyyy-MM-dd');
        if (!map[date]) map[date] = [];
        const start = new Date(event.date);
        map[date].push({
          ...event,
          offset: (start.getHours() * 60 + start.getMinutes()) / (24 * 60),
          length: event.duration / (24 * 60)
        });
      }
      return map;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.startWith)({}), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.shareReplay)(1));
    this.viewEvent = event => this._state.viewEvent(event);
  }
  ngOnInit() {
    this.subscription('date', this._state.options.subscribe(({
      date
    }) => {
      if (!date) return;
      this.days = this.days.map((_, idx) => (0,date_fns__WEBPACK_IMPORTED_MODULE_10__.addDays)(date, idx).valueOf());
    }));
  }
  static #_ = this.ɵfac = function EventWeekViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || EventWeekViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_event_state_service__WEBPACK_IMPORTED_MODULE_1__.EventStateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: EventWeekViewComponent,
    selectors: [["event-week-view"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
    decls: 13,
    vars: 8,
    consts: [["event_card", ""], [1, "absolute", "inset-0", "overflow-auto", "flex"], [1, "sticky", "left-0", "w-24", "min-h-full", "flex", "flex-col", "items-end", "z-20", "bg-base-100"], ["header", "", 1, "sticky", "top-0", "h-16", "min-h-16", "flex", "justify-end", "z-10"], [1, "bg-base-100", "pt-6", "h-10"], [1, "opacity-30", "text-xs", "px-2"], ["class", "relative min-h-10 w-full flex-1 bg-base-100", 4, "ngFor", "ngForOf"], [1, "relative", "min-w-[84rem]", "min-h-full", "z-10"], ["header", "", 1, "sticky", "flex", "top-0", "h-16", "min-h-16", "border-b", "border-base-200", "bg-base-100", "z-10"], ["date", "", "class", "flex flex-col items-center justify-center p-4 min-w-48 flex-1 border-r border-base-200", 4, "ngFor", "ngForOf"], ["class", "relative flex min-h-10 min-w-[84rem] flex-1 border-x border-b border-base-200 pointer-events-none", 4, "ngFor", "ngForOf"], ["date", "", "class", "absolute top-16 left-0 w-[calc(100%/7)] h-[60rem] flex-1 border-r border-base-200 pointer-events-none", 3, "transform", 4, "ngFor", "ngForOf"], [1, "relative", "min-h-10", "w-full", "flex-1", "bg-base-100"], ["hour", "", 1, "absolute", "top-0", "right-1", "-translate-y-1/2", "whitespace-nowrap", "text-xs", "opacity-60"], ["date", "", 1, "flex", "flex-col", "items-center", "justify-center", "p-4", "min-w-48", "flex-1", "border-r", "border-base-200"], [1, "text-sm", "opacity-60"], [1, "relative", "flex", "min-h-10", "min-w-[84rem]", "flex-1", "border-x", "border-b", "border-base-200", "pointer-events-none"], ["date", "", 1, "absolute", "top-16", "left-0", "w-[calc(100%/7)]", "h-[60rem]", "flex-1", "border-r", "border-base-200", "pointer-events-none"], ["matRipple", "", "class", "absolute inset-x-1 bg-base-100 rounded border border-base-200 hover:border-info shadow pl-3 pr-2 py-1 overflow-hidden pointer-events-auto", 3, "top", "height", "click", 4, "ngFor", "ngForOf"], ["now", "", "class", "absolute inset-x-0 h-0 border-y-2 border-base-content", 3, "top", 4, "ngIf"], ["matRipple", "", 1, "absolute", "inset-x-1", "bg-base-100", "rounded", "border", "border-base-200", "hover:border-info", "shadow", "pl-3", "pr-2", "py-1", "overflow-hidden", "pointer-events-auto", 3, "click"], [1, "absolute", "left-0", "inset-y-0", "bg-info", "w-1.5"], [1, "text-sm", "opacity-60", "h-full", "text-left"], ["customTooltip", "", "xPosition", "center", "yPosition", "bottom", 1, "absolute", "inset-0", 3, "content", "hover"], [1, "p-2", "pointer-events-none"], [3, "event"], ["now", "", 1, "absolute", "inset-x-0", "h-0", "border-y-2", "border-base-content"], [1, "absolute", "left-0", "top-0", "-translate-x-1/2", "-translate-y-1/2", "h-4", "w-4", "rounded-full", "bg-base-content"]],
    template: function EventWeekViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, EventWeekViewComponent_div_7_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7)(9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, EventWeekViewComponent_div_10_Template, 7, 8, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, EventWeekViewComponent_div_11_Template, 1, 0, "div", 10)(12, EventWeekViewComponent_div_12_Template, 4, 7, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](6, 5, ctx.now, "zzzz"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.hours);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.days);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.hours);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.days);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatRipple, _libs_components_src_lib_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_2__.CustomTooltipComponent, _libs_events_src_lib_group_event_card_component__WEBPACK_IMPORTED_MODULE_3__.GroupEventCardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe]
  });
}

/***/ }),

/***/ 68630:
/*!****************************************************************!*\
  !*** ./apps/concierge/src/app/events/events-list.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventsListComponent: () => (/* binding */ EventsListComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _event_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-state.service */ 94338);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 6243);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 36337);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 70602);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ 60452);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ 90610);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns */ 56441);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! date-fns */ 28797);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! date-fns */ 45726);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 6109);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _event_listing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-listing.component */ 84055);
/* harmony import */ var _event_calendar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-calendar.component */ 61879);


















const _c0 = () => ["/entertainment", "events", "manage"];
function EventsListComponent_mat_option_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const range_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", range_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", range_r1.display, " ");
  }
}
function EventsListComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "event-listing", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function EventsListComponent_event_calendar_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "event-calendar", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("period", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, ctx_r1.period));
  }
}
function EventsListComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " A shared calendar is required to view and manage group events. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
class EventsListComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  get has_calendar() {
    return this._settings.get('app.group_events_calendar');
  }
  constructor(_settings, _state, _router, _route) {
    super();
    this._settings = _settings;
    this._state = _state;
    this._router = _router;
    this._route = _route;
    this.period = this._state.options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(_ => _.period), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)());
    this.view = 'list';
    this.period_list = [];
  }
  ngOnInit() {
    this.subscription('poll_events', this._state.startPolling());
    this.subscription('period', this.period.subscribe(() => {
      this._generatePeriods();
      this._initPeriod();
    }));
    this._generatePeriods();
    this._initPeriod();
    this.subscription('route.query', this._route.queryParamMap.subscribe(q => {
      if (q.has('view')) {
        this.view = q.get('view');
      }
      if (q.has('period') && q.get('period') !== this._state.period) {
        this.setPeriodType(q.get('period'), false);
      }
      this._generatePeriods();
      if (q.has('range')) {
        this.timeout('update', () => {
          const id = parseInt(q.get('range'), 10);
          const item = this.period_list.find(_ => id >= _.start && id < _.end) || this.period_list[0] || {
            start: id,
            end: this._state.period === 'week' ? (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.addWeeks)(id, 1).valueOf() : (0,date_fns__WEBPACK_IMPORTED_MODULE_10__.addMonths)(id, 1).valueOf()
          };
          this.selected_range = item.id || id;
          this._state.setOptions({
            date: item.start,
            end: item.end
          });
          this.setPeriod(this.selected_range);
        });
      }
    }));
  }
  setView(view) {
    this.view = view;
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: {
        view: view
      },
      queryParamsHandling: 'merge'
    });
  }
  setPeriodType(type, set_route = true) {
    this._state.setOptions({
      period: type
    });
    if (set_route) {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: {
          period: type
        },
        queryParamsHandling: 'merge'
      });
    }
  }
  setPeriod(id) {
    this.timeout('set_period', () => {
      const item = this.period_list.find(_ => id >= _.start && id < _.end) || this.period_list[0];
      if (!item) return;
      this.selected_range = item.id;
      const {
        start,
        end
      } = item;
      this._state.setOptions({
        date: start,
        end
      });
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: {
          range: id
        },
        queryParamsHandling: 'merge'
      });
    });
  }
  _generatePeriods() {
    var _this = this;
    this.timeout('generate_periods', /*#__PURE__*/(0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const periods = [];
      const period_type = yield _this.period.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).toPromise();
      let date = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__.subMonths)(Date.now(), 6).valueOf();
      const end_date = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__.addMonths)(Date.now(), 6).valueOf();
      const week_offset = _this._settings.get('app.week_start') || 0;
      if (period_type === 'month') {
        date = (0,date_fns__WEBPACK_IMPORTED_MODULE_13__.startOfMonth)(date).valueOf();
      } else if (period_type === 'week') {
        date = (0,date_fns__WEBPACK_IMPORTED_MODULE_14__.startOfWeek)(date, {
          weekStartsOn: week_offset
        }).valueOf();
      }
      while (date < end_date) {
        if (period_type === 'week') {
          const end = (0,date_fns__WEBPACK_IMPORTED_MODULE_15__.endOfDay)((0,date_fns__WEBPACK_IMPORTED_MODULE_16__.addDays)(date, 6)).valueOf();
          periods.push({
            id: date,
            start: date,
            end,
            display: `${(0,date_fns__WEBPACK_IMPORTED_MODULE_17__.format)(date, 'EEE, do MMM')} – ${(0,date_fns__WEBPACK_IMPORTED_MODULE_17__.format)(end, 'do MMM')}`
          });
          date = (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.addDays)(date, 7).valueOf();
        } else if (period_type === 'month') {
          const end = (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.addDays)((0,date_fns__WEBPACK_IMPORTED_MODULE_10__.addMonths)(date, 1), -1).valueOf();
          periods.push({
            id: date,
            start: date,
            end,
            display: `${(0,date_fns__WEBPACK_IMPORTED_MODULE_17__.format)(date, 'MMMM yyyy')}`
          });
          date = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__.addMonths)(date, 1).valueOf();
        } else break;
      }
      _this.period_list = periods;
    }));
  }
  _initPeriod() {
    this.timeout('update', () => {
      if (this.period_list.length) {
        let index = this.period_list.findIndex(_ => _.start <= Date.now() && _.end >= Date.now());
        if (index < 0) index = 0;
        this.setPeriod(this.period_list[index].id);
        this.selected_range = this.period_list[index].id;
      }
    }, 350);
  }
  static #_ = this.ɵfac = function EventsListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || EventsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_event_state_service__WEBPACK_IMPORTED_MODULE_2__.EventStateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: EventsListComponent,
    selectors: [["app-event-list"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
    decls: 38,
    vars: 14,
    consts: [[1, "absolute", "inset-0", "flex", "flex-col"], [1, "flex", "items-center", "justify-between", "p-8"], [1, "text-2xl", "font-medium"], ["btn", "", "matRipple", "", 3, "routerLink"], [1, "ml-2"], [1, "text-2xl"], ["filters", "", 1, "flex", "items-center", "px-8", "space-x-2", "pb-4"], ["btn", "", "matRipple", "", 1, "rounded-3xl", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], [1, "pr-2"], [1, "h-full", "px-2"], [1, "w-px", "h-full", "bg-base-300"], ["appearance", "outline", 1, "w-32", "no-subscript"], [3, "ngModelChange", "ngModel"], ["value", "week"], ["value", "month"], ["appearance", "outline", 1, "w-64", "no-subscript"], [3, "value", 4, "ngFor", "ngForOf"], [1, "h-1/2", "flex-1", "w-full", "px-8", "overflow-y-auto", "relative"], ["class", "w-full min-h-full overflow-x-auto", 4, "ngIf"], [3, "period", 4, "ngIf"], ["class", "absolute inset-0 flex items-center justify-center z-50", 4, "ngIf"], [3, "value"], [1, "w-full", "min-h-full", "overflow-x-auto"], [1, "block"], [3, "period"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "z-50"], [1, "absolute", "inset-0", "bg-base-100", "opacity-80"], [1, "opacity-60", "text-lg", "max-w-[32rem]"]],
    template: function EventsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "a", 3)(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Create Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "app-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "chevron_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 6)(10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EventsListComponent_Template_button_click_10_listener() {
          return ctx.setView("list");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 8)(12, "app-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "List");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EventsListComponent_Template_button_click_16_listener() {
          return ctx.setView("calendar");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 8)(18, "app-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "event");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "mat-form-field", 13)(25, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](26, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function EventsListComponent_Template_mat_select_ngModelChange_25_listener($event) {
          return ctx.setPeriodType($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "mat-form-field", 17)(32, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function EventsListComponent_Template_mat_select_ngModelChange_32_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.selected_range, $event) || (ctx.selected_range = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function EventsListComponent_Template_mat_select_ngModelChange_32_listener($event) {
          return ctx.setPeriod($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, EventsListComponent_mat_option_33_Template, 2, 2, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, EventsListComponent_div_35_Template, 2, 0, "div", 20)(36, EventsListComponent_event_calendar_36_Template, 2, 3, "event-calendar", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, EventsListComponent_div_37_Template, 4, 0, "div", 22);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("inverse", ctx.view !== "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("inverse", ctx.view !== "calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](26, 11, ctx.period));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.selected_range);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.period_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.view === "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.view === "calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.has_calendar);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatOption, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterLink, _event_listing_component__WEBPACK_IMPORTED_MODULE_4__.EventListingComponent, _event_calendar_component__WEBPACK_IMPORTED_MODULE_5__.EventCalendarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n                flex: 1;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksT0FBTztZQUNYIiwiZmlsZSI6ImV2ZW50cy1saXN0LmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvZXZlbnRzL2V2ZW50cy1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksT0FBTztZQUNYOztBQUVaLG9XQUFvVyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 59571:
/*!***********************************************************!*\
  !*** ./apps/concierge/src/app/events/events.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventsComponent: () => (/* binding */ EventsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/app-topbar.component */ 45189);
/* harmony import */ var _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/app-sidebar.component */ 96843);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);




const _c0 = ["app-events", ""];
class EventsComponent {
  static #_ = this.ɵfac = function EventsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || EventsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: EventsComponent,
    selectors: [["", "app-events", ""]],
    attrs: _c0,
    decls: 5,
    vars: 0,
    consts: [[1, "flex", "flex-1", "h-px"], [1, "relative", "flex", "flex-col", "flex-1", "w-1/2", "h-full"]],
    template: function EventsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-topbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_0__.ApplicationTopbarComponent, _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.ApplicationSidebarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n                background-color: var(--b1);\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsMkJBQTJCO1lBQy9CIiwiZmlsZSI6ImV2ZW50cy5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWIxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvZXZlbnRzL2V2ZW50cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsMkJBQTJCO1lBQy9COztBQUVaLG9tQkFBb21CIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 85986:
/*!********************************************************!*\
  !*** ./apps/concierge/src/app/events/events.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventsModule: () => (/* binding */ EventsModule)
/* harmony export */ });
/* harmony import */ var _events_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events.component */ 59571);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/ui.module */ 15412);
/* harmony import */ var _events_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events-list.component */ 68630);
/* harmony import */ var _event_manage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-manage.component */ 13246);
/* harmony import */ var _placeos_spaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/spaces */ 44855);
/* harmony import */ var _placeos_form_fields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @placeos/form-fields */ 63046);
/* harmony import */ var _event_listing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event-listing.component */ 84055);
/* harmony import */ var _event_week_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./event-week-view.component */ 84889);
/* harmony import */ var _event_month_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./event-month-view.component */ 3393);
/* harmony import */ var _event_calendar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./event-calendar.component */ 61879);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @placeos/bookings */ 85616);
/* harmony import */ var _placeos_events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @placeos/events */ 40569);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37580);

















const ROUTES = [{
  path: '',
  component: _events_component__WEBPACK_IMPORTED_MODULE_0__.EventsComponent,
  children: [{
    path: '',
    component: _events_list_component__WEBPACK_IMPORTED_MODULE_2__.EventsListComponent
  }]
}, {
  path: 'manage',
  component: _event_manage_component__WEBPACK_IMPORTED_MODULE_3__.EventManageComponent
}, {
  path: 'manage/:id',
  component: _event_manage_component__WEBPACK_IMPORTED_MODULE_3__.EventManageComponent
}, {
  path: '**',
  redirectTo: ''
}];
class EventsModule {
  static #_ = this.ɵfac = function EventsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || EventsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
    type: EventsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_1__.UIModule, _placeos_spaces__WEBPACK_IMPORTED_MODULE_4__.SharedSpacesModule, _placeos_bookings__WEBPACK_IMPORTED_MODULE_10__.SharedBookingsModule, _placeos_events__WEBPACK_IMPORTED_MODULE_11__.SharedEventsModule, _placeos_form_fields__WEBPACK_IMPORTED_MODULE_5__.FormFieldsModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forChild(ROUTES)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](EventsModule, {
    declarations: [_events_component__WEBPACK_IMPORTED_MODULE_0__.EventsComponent, _events_list_component__WEBPACK_IMPORTED_MODULE_2__.EventsListComponent, _event_manage_component__WEBPACK_IMPORTED_MODULE_3__.EventManageComponent, _event_listing_component__WEBPACK_IMPORTED_MODULE_6__.EventListingComponent, _event_calendar_component__WEBPACK_IMPORTED_MODULE_9__.EventCalendarComponent, _event_week_view_component__WEBPACK_IMPORTED_MODULE_7__.EventWeekViewComponent, _event_month_view_component__WEBPACK_IMPORTED_MODULE_8__.EventMonthViewComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_1__.UIModule, _placeos_spaces__WEBPACK_IMPORTED_MODULE_4__.SharedSpacesModule, _placeos_bookings__WEBPACK_IMPORTED_MODULE_10__.SharedBookingsModule, _placeos_events__WEBPACK_IMPORTED_MODULE_11__.SharedEventsModule, _placeos_form_fields__WEBPACK_IMPORTED_MODULE_5__.FormFieldsModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule]
  });
})();

/***/ }),

/***/ 85616:
/*!************************************!*\
  !*** ./libs/bookings/src/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Booking: () => (/* reexport safe */ _lib_booking_class__WEBPACK_IMPORTED_MODULE_2__.Booking),
/* harmony export */   BookingCardComponent: () => (/* reexport safe */ _lib_booking_card_component__WEBPACK_IMPORTED_MODULE_8__.BookingCardComponent),
/* harmony export */   BookingDetailsModalComponent: () => (/* reexport safe */ _lib_booking_details_modal_component__WEBPACK_IMPORTED_MODULE_7__.BookingDetailsModalComponent),
/* harmony export */   BookingFormService: () => (/* reexport safe */ _lib_booking_form_service__WEBPACK_IMPORTED_MODULE_1__.BookingFormService),
/* harmony export */   DAYS_OF_WEEK_INDEX: () => (/* reexport safe */ _lib_booking_class__WEBPACK_IMPORTED_MODULE_2__.DAYS_OF_WEEK_INDEX),
/* harmony export */   DesksService: () => (/* reexport safe */ _lib_desk_service__WEBPACK_IMPORTED_MODULE_5__.DesksService),
/* harmony export */   FAV_PARKING_KEY: () => (/* reexport safe */ _lib_parking_select_modal_parking_select_modal_component__WEBPACK_IMPORTED_MODULE_9__.FAV_PARKING_KEY),
/* harmony export */   LockersService: () => (/* reexport safe */ _lib_lockers_service__WEBPACK_IMPORTED_MODULE_6__.LockersService),
/* harmony export */   ParkingService: () => (/* reexport safe */ _lib_parking_service__WEBPACK_IMPORTED_MODULE_10__.ParkingService),
/* harmony export */   ParkingSpaceSelectModalComponent: () => (/* reexport safe */ _lib_parking_select_modal_parking_select_modal_component__WEBPACK_IMPORTED_MODULE_9__.ParkingSpaceSelectModalComponent),
/* harmony export */   RecurrenceDays: () => (/* reexport safe */ _lib_booking_class__WEBPACK_IMPORTED_MODULE_2__.RecurrenceDays),
/* harmony export */   SharedBookingsModule: () => (/* reexport safe */ _lib_bookings_module__WEBPACK_IMPORTED_MODULE_0__.SharedBookingsModule),
/* harmony export */   WeekOfMonth: () => (/* reexport safe */ _lib_booking_class__WEBPACK_IMPORTED_MODULE_2__.WeekOfMonth),
/* harmony export */   approveBooking: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.approveBooking),
/* harmony export */   approveBookingInstance: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.approveBookingInstance),
/* harmony export */   bookedResourceList: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.bookedResourceList),
/* harmony export */   bookingAddGuest: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.bookingAddGuest),
/* harmony export */   bookingRemoveGuest: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.bookingRemoveGuest),
/* harmony export */   checkinBooking: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.checkinBooking),
/* harmony export */   checkinBookingAttendee: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.checkinBookingAttendee),
/* harmony export */   checkinBookingGuest: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.checkinBookingGuest),
/* harmony export */   checkinBookingInstance: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.checkinBookingInstance),
/* harmony export */   createBooking: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.createBooking),
/* harmony export */   createBookingsForEvent: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.createBookingsForEvent),
/* harmony export */   findNearbyFeature: () => (/* reexport safe */ _lib_booking_utilities__WEBPACK_IMPORTED_MODULE_3__.findNearbyFeature),
/* harmony export */   generateBookingForm: () => (/* reexport safe */ _lib_booking_utilities__WEBPACK_IMPORTED_MODULE_3__.generateBookingForm),
/* harmony export */   isResourceAvailable: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.isResourceAvailable),
/* harmony export */   newBookingFromCalendarEvent: () => (/* reexport safe */ _lib_booking_utilities__WEBPACK_IMPORTED_MODULE_3__.newBookingFromCalendarEvent),
/* harmony export */   queryAllBookings: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.queryAllBookings),
/* harmony export */   queryBookingGuests: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.queryBookingGuests),
/* harmony export */   queryBookings: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.queryBookings),
/* harmony export */   queryPagedBookings: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.queryPagedBookings),
/* harmony export */   queryResourceAvailability: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.queryResourceAvailability),
/* harmony export */   rejectBooking: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.rejectBooking),
/* harmony export */   rejectBookingInstance: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.rejectBookingInstance),
/* harmony export */   removeBooking: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.removeBooking),
/* harmony export */   removeBookingInstance: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.removeBookingInstance),
/* harmony export */   saveBooking: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.saveBooking),
/* harmony export */   setBookingState: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.setBookingState),
/* harmony export */   showBooking: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.showBooking),
/* harmony export */   updateBooking: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.updateBooking),
/* harmony export */   updateBookingInductionStatus: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.updateBookingInductionStatus),
/* harmony export */   updateBookingInstance: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.updateBookingInstance)
/* harmony export */ });
/* harmony import */ var _lib_bookings_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/bookings.module */ 38742);
/* harmony import */ var _lib_booking_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/booking-form.service */ 18379);
/* harmony import */ var _lib_booking_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/booking.class */ 53857);
/* harmony import */ var _lib_booking_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/booking.utilities */ 17141);
/* harmony import */ var _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/bookings.fn */ 18026);
/* harmony import */ var _lib_desk_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/desk.service */ 74350);
/* harmony import */ var _lib_lockers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/lockers.service */ 98796);
/* harmony import */ var _lib_booking_details_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/booking-details-modal.component */ 1781);
/* harmony import */ var _lib_booking_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/booking-card.component */ 27547);
/* harmony import */ var _lib_parking_select_modal_parking_select_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/parking-select-modal/parking-select-modal.component */ 67642);
/* harmony import */ var _lib_parking_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/parking.service */ 1593);













/***/ }),

/***/ 74350:
/*!***********************************************!*\
  !*** ./libs/bookings/src/lib/desk.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DesksService: () => (/* binding */ DesksService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 99908);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 33240);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 56441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 57871);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var libs_organisation_src_lib_organisation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! libs/organisation/src/lib/organisation.service */ 19863);
/* harmony import */ var _bookings_fn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookings.fn */ 18026);
/* harmony import */ var _desk_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./desk-confirm-modal.component */ 3367);
/* harmony import */ var _desk_questions_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./desk-questions-modal.component */ 67254);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 12587);












class DesksService {
  constructor(_org, _dialog) {
    this._org = _org;
    this._dialog = _dialog;
    this.can_set_date = true;
    this.error_on_host = true;
  }
  bookDesk({
    desks,
    host,
    reason,
    attendees,
    date
  }) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.error_on_host && !host) {
        return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)('You need to select a host to book a desk.');
      } else {
        host = host || (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.currentUser)();
      }
      reason = reason || '';
      const level = _this._org.levelWithID(desks[0].zone instanceof Array ? desks[0].zone : [desks[0].zone?.id]);
      let ref = _this._dialog.open(_desk_questions_modal_component__WEBPACK_IMPORTED_MODULE_5__.DeskQuestionsModalComponent);
      let success = yield Promise.race([ref.componentInstance.event.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.first)(_ => _.reason === 'done')).toPromise(), ref.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(_ => null)).toPromise()]);
      if (!success) return;
      ref.close();
      ref = _this._dialog.open(_desk_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__.DeskConfirmModalComponent, {
        data: {
          host,
          desks,
          date: date ? new Date(date) : new Date(),
          reason,
          level,
          can_set_date: _this.can_set_date
        }
      });
      success = yield Promise.race([ref.componentInstance.event.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.first)(_ => _.reason === 'done')).toPromise(), ref.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(_ => null)).toPromise()]);
      if (!success) return;
      host = ref.componentInstance.host || host;
      date = ref.componentInstance.date || date;
      reason = ref.componentInstance.reason || reason;
      if (!host) {
        ref.close();
        return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)('You need to select a host to book a desk. ');
      }
      ref.componentInstance.loading = 'Checking for existing desk bookings...';
      const bookings = yield (0,_bookings_fn__WEBPACK_IMPORTED_MODULE_3__.queryBookings)({
        type: 'desk',
        period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.getUnixTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_9__.startOfDay)(date || new Date())),
        period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.getUnixTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_10__.endOfDay)(date || new Date()))
      }).toPromise();
      const desk_list = bookings.filter(d => d.user_email.toLowerCase() === host.email.toLowerCase());
      if (desk_list?.length) {
        ref.close();
        return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)('You currently already have a desk booked for the selected date.');
      }
      ref.componentInstance.loading = 'Booking desk...';
      const users = [host, ...(attendees || [])];
      yield Promise.all([desks.map((desk, idx) => _this.makeDeskBooking(desk, host, date.valueOf() || new Date().valueOf(), reason, users[idx]))]);
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifySuccess)('Successfully booked desk');
      ref.close();
      return true;
    })();
  }
  makeDeskBooking(desk, host, date, reason, for_user = null) {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const location = `${desk.zone?.name}-${desk.id}`;
      const level = _this2._org.levelWithID(desk.zone instanceof Array ? desk.zone : [desk.zone?.id]);
      const zones = desk.zone?.id ? [desk.zone?.id, level?.parent_id] : [level?.parent_id];
      const booking_data = {
        booking_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.getUnixTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_9__.startOfDay)(date)),
        user_id: for_user?.id || host.id,
        user_name: for_user?.name || host.name,
        user_email: for_user?.email || host.email,
        booking_end: Math.floor((0,date_fns__WEBPACK_IMPORTED_MODULE_10__.endOfDay)(date).valueOf() / 1000),
        asset_id: desk.id,
        asset_name: desk.name,
        title: reason,
        description: location,
        zones,
        booking_type: 'desk',
        extension_data: {
          map_id: desk?.map_id || desk?.id,
          groups: desk.groups,
          for_user: for_user?.email
        }
      };
      return (0,_bookings_fn__WEBPACK_IMPORTED_MODULE_3__.saveBooking)(booking_data).toPromise();
    })();
  }
  static #_ = this.ɵfac = function DesksService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DesksService)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](libs_organisation_src_lib_organisation_service__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
    token: DesksService,
    factory: DesksService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 41489:
/*!*********************************!*\
  !*** ./libs/users/src/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FindAvailabilityModalComponent: () => (/* reexport safe */ _lib_find_availability_modal_find_availability_modal_component__WEBPACK_IMPORTED_MODULE_2__.FindAvailabilityModalComponent),
/* harmony export */   GuestUser: () => (/* reexport safe */ _lib_user_class__WEBPACK_IMPORTED_MODULE_5__.GuestUser),
/* harmony export */   MapLocation: () => (/* reexport safe */ _lib_location_class__WEBPACK_IMPORTED_MODULE_4__.MapLocation),
/* harmony export */   NewUserModalComponent: () => (/* reexport safe */ _lib_new_user_modal_component__WEBPACK_IMPORTED_MODULE_1__.NewUserModalComponent),
/* harmony export */   SharedUsersModule: () => (/* reexport safe */ _lib_users_module__WEBPACK_IMPORTED_MODULE_0__.SharedUsersModule),
/* harmony export */   StaffUser: () => (/* reexport safe */ _lib_user_class__WEBPACK_IMPORTED_MODULE_5__.StaffUser),
/* harmony export */   USER_DOMAIN: () => (/* reexport safe */ _lib_user_utilities__WEBPACK_IMPORTED_MODULE_6__.USER_DOMAIN),
/* harmony export */   User: () => (/* reexport safe */ _lib_user_class__WEBPACK_IMPORTED_MODULE_5__.User),
/* harmony export */   UserFormComponent: () => (/* reexport safe */ _lib_user_form_component__WEBPACK_IMPORTED_MODULE_3__.UserFormComponent),
/* harmony export */   generateGuestForm: () => (/* reexport safe */ _lib_user_utilities__WEBPACK_IMPORTED_MODULE_6__.generateGuestForm),
/* harmony export */   generateMockUser: () => (/* reexport safe */ _lib_user_utilities__WEBPACK_IMPORTED_MODULE_6__.generateMockUser),
/* harmony export */   generateUserForm: () => (/* reexport safe */ _lib_user_utilities__WEBPACK_IMPORTED_MODULE_6__.generateUserForm),
/* harmony export */   listGuestMeetings: () => (/* reexport safe */ _lib_guests_fn__WEBPACK_IMPORTED_MODULE_7__.listGuestMeetings),
/* harmony export */   locateStaff: () => (/* reexport safe */ _lib_staff_fn__WEBPACK_IMPORTED_MODULE_8__.locateStaff),
/* harmony export */   queryGuests: () => (/* reexport safe */ _lib_guests_fn__WEBPACK_IMPORTED_MODULE_7__.queryGuests),
/* harmony export */   removeGuest: () => (/* reexport safe */ _lib_guests_fn__WEBPACK_IMPORTED_MODULE_7__.removeGuest),
/* harmony export */   searchGuests: () => (/* reexport safe */ _lib_guests_fn__WEBPACK_IMPORTED_MODULE_7__.searchGuests),
/* harmony export */   searchStaff: () => (/* reexport safe */ _lib_staff_fn__WEBPACK_IMPORTED_MODULE_8__.searchStaff),
/* harmony export */   setInternalUserDomain: () => (/* reexport safe */ _lib_user_utilities__WEBPACK_IMPORTED_MODULE_6__.setInternalUserDomain),
/* harmony export */   showGuest: () => (/* reexport safe */ _lib_guests_fn__WEBPACK_IMPORTED_MODULE_7__.showGuest),
/* harmony export */   showStaff: () => (/* reexport safe */ _lib_staff_fn__WEBPACK_IMPORTED_MODULE_8__.showStaff),
/* harmony export */   updateGuest: () => (/* reexport safe */ _lib_guests_fn__WEBPACK_IMPORTED_MODULE_7__.updateGuest)
/* harmony export */ });
/* harmony import */ var _lib_users_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/users.module */ 34426);
/* harmony import */ var _lib_new_user_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/new-user-modal.component */ 11543);
/* harmony import */ var _lib_find_availability_modal_find_availability_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/find-availability-modal/find-availability-modal.component */ 12716);
/* harmony import */ var _lib_user_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/user-form.component */ 7111);
/* harmony import */ var _lib_location_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/location.class */ 74529);
/* harmony import */ var _lib_user_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/user.class */ 93693);
/* harmony import */ var _lib_user_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/user.utilities */ 24129);
/* harmony import */ var _lib_guests_fn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/guests.fn */ 86039);
/* harmony import */ var _lib_staff_fn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/staff.fn */ 2372);











/***/ }),

/***/ 74529:
/*!**********************************************!*\
  !*** ./libs/users/src/lib/location.class.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapLocation: () => (/* binding */ MapLocation)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ 99908);

class MapLocation {
  constructor(_data = {}) {
    this.type = _data.type || _data.location || 'other';
    this.position = _data.position || _data.map_id || _data.asset_id || {
      x: _data.x / _data.map_width || 0,
      y: _data.y / _data.map_height || 0
    };
    this.variance = _data.variance || 0;
    this.last_seen = _data.last_seen || (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.getUnixTime)(new Date());
    this.level = _data.level;
    this.building = _data.building;
    this.at_location = !!_data.at_location;
    this.coordinates_from = _data.coordinates_from || 'top-left';
  }
}

/***/ }),

/***/ 70602:
/*!*********************************************!*\
  !*** ./node_modules/date-fns/subMonths.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   subMonths: () => (/* binding */ subMonths)
/* harmony export */ });
/* harmony import */ var _addMonths_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addMonths.mjs */ 36337);


/**
 * @name subMonths
 * @category Month Helpers
 * @summary Subtract the specified number of months from the given date.
 *
 * @description
 * Subtract the specified number of months from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of months to be subtracted.
 *
 * @returns The new date with the months subtracted
 *
 * @example
 * // Subtract 5 months from 1 February 2015:
 * const result = subMonths(new Date(2015, 1, 1), 5)
 * //=> Mon Sep 01 2014 00:00:00
 */
function subMonths(date, amount) {
  return (0,_addMonths_mjs__WEBPACK_IMPORTED_MODULE_0__.addMonths)(date, -amount);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (subMonths);

/***/ })

}]);
//# sourceMappingURL=apps_concierge_src_app_events_events_module_ts.js.map