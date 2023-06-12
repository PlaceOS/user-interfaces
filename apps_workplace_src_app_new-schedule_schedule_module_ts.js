"use strict";
(self["webpackChunkworkplace"] = self["webpackChunkworkplace"] || []).push([["apps_workplace_src_app_new-schedule_schedule_module_ts"],{

/***/ 66177:
/*!****************************************************************************!*\
  !*** ./apps/workplace/src/app/new-schedule/schedule-calendar.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScheduleCalendarComponent": () => (/* binding */ ScheduleCalendarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 69377);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 88053);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 68031);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 42375);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 90475);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 53470);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 20312);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 65306);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 443);







function ScheduleCalendarComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const day_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, day_r2.id, "EE"), " ");
  }
}
function ScheduleCalendarComponent_button_16_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 13);
  }
}
function ScheduleCalendarComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScheduleCalendarComponent_button_16_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const day_r3 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.setValue(day_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ScheduleCalendarComponent_button_16_div_3_Template, 1, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const day_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hover:bg-blue-600", day_r3.id !== ctx_r1.active_date)("hover:bg-opacity-20", day_r3.id !== ctx_r1.active_date)("text-opacity-30", !day_r3.is_month)("text-white", day_r3.id === ctx_r1.active_date)("text-black", day_r3.id !== ctx_r1.active_date)("dark:text-white", day_r3.id !== ctx_r1.active_date)("dark:text-opacity-30", !day_r3.is_month)("bg-primary", day_r3.id === ctx_r1.active_date)("font-normal", day_r3.id !== ctx_r1.active_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 20, day_r3.id, "d"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.today === day_r3.id);
  }
}
class ScheduleCalendarComponent {
  constructor() {
    this.active_date = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(Date.now()).valueOf();
    this.today = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(Date.now()).valueOf();
    this.offset = 0;
    this.date_list = [];
    /* istanbul ignore next */
    this.registerOnChange = fn => this._onChange = fn;
    /* istanbul ignore next */
    this.registerOnTouched = fn => this._onTouch = fn;
  }
  ngOnInit() {
    this.generateDates();
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.active_date = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new_value).valueOf();
    this.offset = 0;
    this.generateDates();
    if (this._onChange) {
      this._onChange(new_value);
    }
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.active_date = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(value).valueOf();
    this.offset = 0;
    this.generateDates();
  }
  changeMonth(change) {
    this.offset += change;
    this.generateDates();
  }
  generateDates() {
    const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(this.active_date, this.offset);
    let start = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(date));
    const now = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(Date.now());
    const list = [];
    while (list.length < 42) {
      list.push({
        id: start.valueOf(),
        is_past: (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(start, now),
        is_month: (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(start, date)
      });
      start = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(start, 1);
    }
    this.date_list = list;
  }
}
ScheduleCalendarComponent.ɵfac = function ScheduleCalendarComponent_Factory(t) {
  return new (t || ScheduleCalendarComponent)();
};
ScheduleCalendarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ScheduleCalendarComponent,
  selectors: [["schedule-calendar"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => ScheduleCalendarComponent),
    multi: true
  }])],
  decls: 17,
  vars: 10,
  consts: [[1, "p-2"], [1, "flex", "items-center", "justify-between"], [1, "px-2", "font-medium"], [1, "flex", "items-center"], ["icon", "", "matRipple", "", "name", "schedule-next-month", 3, "click"], ["icon", "", "matRipple", "", "name", "schedule-previous-month", 3, "click"], [1, "flex", "items-center", "text-sm"], ["class", "flex-1 opacity-60 text-center", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "flex-wrap"], ["icon", "", "name", "schedule-set-date", "class", "min-w-[14%] flex-1 relative overflow-visible", 3, "hover:bg-blue-600", "hover:bg-opacity-20", "text-opacity-30", "text-white", "text-black", "dark:text-white", "dark:text-opacity-30", "bg-primary", "font-normal", "click", 4, "ngFor", "ngForOf"], [1, "flex-1", "opacity-60", "text-center"], ["icon", "", "name", "schedule-set-date", 1, "min-w-[14%]", "flex-1", "relative", "overflow-visible", 3, "click"], ["class", "absolute -inset-[2px] border border-primary rounded-full overflow-hidden", "matRipple", "", 4, "ngIf"], ["matRipple", "", 1, "absolute", "-inset-[2px]", "border", "border-primary", "rounded-full", "overflow-hidden"]],
  template: function ScheduleCalendarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScheduleCalendarComponent_Template_button_click_6_listener() {
        return ctx.changeMonth(-1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "app-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "chevron_left");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScheduleCalendarComponent_Template_button_click_9_listener() {
        return ctx.changeMonth(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "app-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "chevron_right");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ScheduleCalendarComponent_div_13_Template, 3, 4, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "slice");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ScheduleCalendarComponent_button_16_Template, 4, 23, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 3, (ctx.date_list[6] == null ? null : ctx.date_list[6].id) || ctx.active_date, "LLLL YYYY"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](14, 6, ctx.date_list, 0, 7));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.date_list);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_0__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_10__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe]
});


/***/ }),

/***/ 42566:
/*!*******************************************************************************!*\
  !*** ./apps/workplace/src/app/new-schedule/schedule-filter-card.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScheduleFilterCardComponent": () => (/* binding */ ScheduleFilterCardComponent)
/* harmony export */ });
/* harmony import */ var _schedule_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule-state.service */ 87625);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 95763);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 65306);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ 7672);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 38699);











class ScheduleFilterCardComponent {
  constructor(_state, _sheet_ref) {
    this._state = _state;
    this._sheet_ref = _sheet_ref;
    this.filters = this._state.filters;
    this.toggleType = t => this._state.toggleType(t);
    this.dismiss = () => this._sheet_ref.dismiss();
  }
}
ScheduleFilterCardComponent.ɵfac = function ScheduleFilterCardComponent_Factory(t) {
  return new (t || ScheduleFilterCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_schedule_state_service__WEBPACK_IMPORTED_MODULE_0__.ScheduleStateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__.MatBottomSheetRef));
};
ScheduleFilterCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ScheduleFilterCardComponent,
  selectors: [["schedule-filter-card"]],
  decls: 64,
  vars: 42,
  consts: [[1, "flex", "items-center", "border-b", "border-gray-300", "dark:bg-neutral-700", "space-x-2", "mb-4", "text-xl"], ["icon", "", "matRipple", "", 3, "click"], [1, "flex-1", "w-1/2", "text-center"], [1, "space-y-4", "border-b", "border-gray-300", "mb-4", "pb-4", "dark:bg-neutral-700"], ["name", "schedule-toggle-event-filter", "matRipple", "", 1, "flex", "items-center", "space-x-2", "w-full", "text-left", "pr-2", 3, "click"], [1, "h-10", "w-10", "rounded-full", "flex", "items-center", "justify-center", "text-2xl"], [1, "flex-1"], [1, ""], [1, "text-sm", "opacity-60"], [3, "ngModel"], ["matRipple", "", "name", "schedule-toggle-desk-filter", 1, "flex", "items-center", "space-x-2", "w-full", "text-left", "pr-2", 3, "click"], ["src", "assets/icons/desk-outline.svg", 1, "w-6"], ["matRipple", "", "name", "schedule-toggle-parking-filter", 1, "flex", "items-center", "space-x-2", "w-full", "text-left", "pr-2", 3, "click"], ["matRipple", "", "name", "schedule-toggle-visitor-filter", 1, "flex", "items-center", "space-x-2", "w-full", "text-left", "pr-2", 3, "click"], [1, "px-2", "pb-2"], ["btn", "", "matRipple", "", "name", "schedule-apply-filter", 1, "w-full", 3, "click"]],
  template: function ScheduleFilterCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ScheduleFilterCardComponent_Template_button_click_1_listener() {
        return ctx.dismiss();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "app-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "chevron_left");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "app-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 3)(9, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ScheduleFilterCardComponent_Template_button_click_9_listener() {
        return ctx.toggleType("event");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5)(11, "app-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "meeting_room");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 6)(14, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "mat-checkbox", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ScheduleFilterCardComponent_Template_button_click_22_listener() {
        return ctx.toggleType("desk");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 6)(26, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](31, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "mat-checkbox", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](33, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ScheduleFilterCardComponent_Template_button_click_34_listener() {
        return ctx.toggleType("parking");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 5)(36, "app-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "drive_eta");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 6)(39, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](41, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](44, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "mat-checkbox", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](46, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ScheduleFilterCardComponent_Template_button_click_47_listener() {
        return ctx.toggleType("visitor");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 5)(49, "app-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "people");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 6)(52, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](54, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](57, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "mat-checkbox", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](59, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 14)(61, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ScheduleFilterCardComponent_Template_button_click_61_listener() {
        return ctx.dismiss();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](63, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      let tmp_3_0;
      let tmp_6_0;
      let tmp_9_0;
      let tmp_12_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 14, "WPA.BOOKING_TYPES"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 16, "WPA.ROOM"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 18, "WPA.SCHEULD_ROOM_FILTER"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 20, ctx.filters)) == null ? null : tmp_3_0.shown_types == null ? null : tmp_3_0.shown_types.includes("event"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](28, 22, "WPA.DESK"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](31, 24, "WPA.SCHEDULE_DESK_FILTER"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](33, 26, ctx.filters)) == null ? null : tmp_6_0.shown_types == null ? null : tmp_6_0.shown_types.includes("desk"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](41, 28, "WPA.PARKING"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](44, 30, "WPA.SCHEDULE_PARKING_FILTER"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", (tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](46, 32, ctx.filters)) == null ? null : tmp_9_0.shown_types == null ? null : tmp_9_0.shown_types.includes("parking"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](54, 34, "WPA.VISITORS"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](57, 36, "WPA.SCHEDULE_VISITOR_FILTER"), "s ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", (tmp_12_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](59, 38, ctx.filters)) == null ? null : tmp_12_0.shown_types == null ? null : tmp_12_0.shown_types.includes("visitor"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](63, 40, "WPA.FILTERS_APPLY"), " ");
    }
  },
  dependencies: [_libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRipple, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
  styles: ["mat-checkbox[_ngcontent-%COMP%] {\n                pointer-events: none;\n            }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVkdWxlLWZpbHRlci1jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksb0JBQW9CO1lBQ3hCIiwiZmlsZSI6InNjaGVkdWxlLWZpbHRlci1jYXJkLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgbWF0LWNoZWNrYm94IHtcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd29ya3BsYWNlL3NyYy9hcHAvbmV3LXNjaGVkdWxlL3NjaGVkdWxlLWZpbHRlci1jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksb0JBQW9CO1lBQ3hCOztBQUVaLHdaQUF3WiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgbWF0LWNoZWNrYm94IHtcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 94938:
/*!***************************************************************************!*\
  !*** ./apps/workplace/src/app/new-schedule/schedule-filters.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScheduleFiltersComponent": () => (/* binding */ ScheduleFiltersComponent)
/* harmony export */ });
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 88397);
/* harmony import */ var _schedule_filter_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule-filter-card.component */ 42566);
/* harmony import */ var _schedule_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule-state.service */ 87625);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 95763);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 65306);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 38699);












function ScheduleFiltersComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScheduleFiltersComponent_div_5_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.toggleType("event", true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "WPA.ROOMS"));
  }
}
function ScheduleFiltersComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScheduleFiltersComponent_div_7_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.toggleType("desk", true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "WPA.DESKS"));
  }
}
function ScheduleFiltersComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScheduleFiltersComponent_div_9_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.toggleType("parking", true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "WPA.PARKING"));
  }
}
function ScheduleFiltersComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScheduleFiltersComponent_div_11_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r16.toggleType("visitor", true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "WPA.VISITORS"));
  }
}
function ScheduleFiltersComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScheduleFiltersComponent_div_13_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r18.toggleType("locker", true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "WPA.LOCKERS"));
  }
}
function ScheduleFiltersComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScheduleFiltersComponent_div_20_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r20.toggleType("event", true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "WPA.ROOMS"));
  }
}
function ScheduleFiltersComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScheduleFiltersComponent_div_22_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r22.toggleType("desk", true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "WPA.DESKS"));
  }
}
function ScheduleFiltersComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScheduleFiltersComponent_div_24_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r24.toggleType("parking", true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "WPA.PARKING"));
  }
}
function ScheduleFiltersComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScheduleFiltersComponent_div_26_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r26.toggleType("visitor", true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "WPA.VISITORS"));
  }
}
function ScheduleFiltersComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScheduleFiltersComponent_div_28_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r28.toggleType("locker", true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "WPA.LOCKERS"));
  }
}
class ScheduleFiltersComponent {
  hasFeature(feature) {
    return this._settings.get('app.features')?.includes(feature);
  }
  constructor(_sheet, _state, _settings) {
    this._sheet = _sheet;
    this._state = _state;
    this._settings = _settings;
    this.filters = this._state.filters;
    this.toggleType = (t, c = false) => this._state.toggleType(t, c);
  }
  openFilters() {
    this._sheet.open(_schedule_filter_card_component__WEBPACK_IMPORTED_MODULE_1__.ScheduleFilterCardComponent);
  }
}
ScheduleFiltersComponent.ɵfac = function ScheduleFiltersComponent_Factory(t) {
  return new (t || ScheduleFiltersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__.MatBottomSheet), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_schedule_state_service__WEBPACK_IMPORTED_MODULE_2__.ScheduleStateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService));
};
ScheduleFiltersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ScheduleFiltersComponent,
  selectors: [["schedule-filters"]],
  decls: 30,
  vars: 33,
  consts: [[1, "hidden", "sm:block", "bg-white", "dark:bg-neutral-800", "border", "border-gray-300", "rounded", "p-2"], [1, "font-medium", "mb-2"], [1, "flex", "flex-wrap", "space-x-2"], ["class", "flex items-center rounded-3xl border border-gray-300", 4, "ngIf"], [1, "sm:hidden", "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", "name", "schedule-open-filter-edit", 1, "min-w-0", "sm:w-24", 3, "click"], [1, "flex", "items-center", "justify-center", "space-x-2"], [1, "text-xl"], ["class", "flex items-center rounded-3xl border border-gray-300 bg-white dark:bg-neutral-700 text-sm pl-2", 4, "ngIf"], [1, "flex", "items-center", "rounded-3xl", "border", "border-gray-300"], [1, "px-2"], ["icon", "", "name", "schedule-remove-event-filter", 3, "click"], ["icon", "", "name", "schedule-remove-desk-filter", 3, "click"], ["icon", "", "matRipple", "", "name", "schedule-remove-parking-filter", 3, "click"], ["icon", "", "matRipple", "", "name", "schedule-remove-visitor-filter", 3, "click"], ["icon", "", "matRipple", "", "name", "schedule-remove-locker-filter", 3, "click"], [1, "flex", "items-center", "rounded-3xl", "border", "border-gray-300", "bg-white", "dark:bg-neutral-700", "text-sm", "pl-2"], ["icon", "", "name", "schedule-remove-event-filter-mobile", 3, "click"], ["icon", "", "name", "schedule-remove-desk-filter-mobile", 3, "click"], ["icon", "", "name", "schedule-remove-parking-filter-mobile", 3, "click"], ["icon", "", "name", "schedule-remove-visitor-filter-mobile", 3, "click"], ["icon", "", "name", "schedule-remove-locker-filter-mobile", 3, "click"]],
  template: function ScheduleFiltersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ScheduleFiltersComponent_div_5_Template, 7, 3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ScheduleFiltersComponent_div_7_Template, 7, 3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ScheduleFiltersComponent_div_9_Template, 7, 3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ScheduleFiltersComponent_div_11_Template, 7, 3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ScheduleFiltersComponent_div_13_Template, 7, 3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 4)(16, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScheduleFiltersComponent_Template_button_click_16_listener() {
        return ctx.openFilters();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 6)(18, "app-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "filter_list");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, ScheduleFiltersComponent_div_20_Template, 7, 3, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, ScheduleFiltersComponent_div_22_Template, 7, 3, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, ScheduleFiltersComponent_div_24_Template, 7, 3, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](25, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, ScheduleFiltersComponent_div_26_Template, 7, 3, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](27, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, ScheduleFiltersComponent_div_28_Template, 7, 3, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](29, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_6_0;
      let tmp_7_0;
      let tmp_8_0;
      let tmp_9_0;
      let tmp_10_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 11, "WPA.SCHEDULE_CAT_FILTERS"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 13, ctx.filters)) == null ? null : tmp_1_0.shown_types == null ? null : tmp_1_0.shown_types.includes("event"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 15, ctx.filters)) == null ? null : tmp_2_0.shown_types == null ? null : tmp_2_0.shown_types.includes("desk")) && ctx.hasFeature("desks"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 17, ctx.filters)) == null ? null : tmp_3_0.shown_types == null ? null : tmp_3_0.shown_types.includes("parking")) && ctx.hasFeature("parking"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 19, ctx.filters)) == null ? null : tmp_4_0.shown_types == null ? null : tmp_4_0.shown_types.includes("visitor")) && ctx.hasFeature("visitor-invite"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 21, ctx.filters)) == null ? null : tmp_5_0.shown_types == null ? null : tmp_5_0.shown_types.includes("locker")) && ctx.hasFeature("lockers"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 23, ctx.filters)) == null ? null : tmp_6_0.shown_types == null ? null : tmp_6_0.shown_types.includes("event"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 25, ctx.filters)) == null ? null : tmp_7_0.shown_types == null ? null : tmp_7_0.shown_types.includes("desk")) && ctx.hasFeature("desks"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](25, 27, ctx.filters)) == null ? null : tmp_8_0.shown_types == null ? null : tmp_8_0.shown_types.includes("parking")) && ctx.hasFeature("parking"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](27, 29, ctx.filters)) == null ? null : tmp_9_0.shown_types == null ? null : tmp_9_0.shown_types.includes("visitor")) && ctx.hasFeature("visitor-invite"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](29, 31, ctx.filters)) == null ? null : tmp_10_0.shown_types == null ? null : tmp_10_0.shown_types.includes("locker")) && ctx.hasFeature("lockers"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe]
});


/***/ }),

/***/ 59005:
/*!***********************************************************************************!*\
  !*** ./apps/workplace/src/app/new-schedule/schedule-mobile-calendar.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScheduleMobileCalendarComponent": () => (/* binding */ ScheduleMobileCalendarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 69377);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 88053);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 68031);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 42375);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 90475);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 53470);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 75845);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 20312);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 65306);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 443);







function ScheduleMobileCalendarComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const day_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, day_r2.id, "EE"), " ");
  }
}
function ScheduleMobileCalendarComponent_button_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 12);
  }
}
function ScheduleMobileCalendarComponent_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScheduleMobileCalendarComponent_button_19_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const day_r3 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.setValue(day_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ScheduleMobileCalendarComponent_button_19_div_1_Template, 1, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const day_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("text-opacity-30", !day_r3.is_month)("text-white", day_r3.id === ctx_r1.active_date)("text-black", day_r3.id !== ctx_r1.active_date)("dark:text-white", day_r3.id !== ctx_r1.active_date)("dark:text-opacity-30", !day_r3.is_month)("bg-primary", day_r3.id === ctx_r1.active_date)("font-normal", day_r3.id !== ctx_r1.active_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", day_r3.is_today);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 16, day_r3.id, "d"), " ");
  }
}
class ScheduleMobileCalendarComponent {
  constructor() {
    this.active_date = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(Date.now()).valueOf();
    this.offset = 0;
    this.date_list = [];
    this.short_list = [];
    this.show_shortlist = true;
    /* istanbul ignore next */
    this.registerOnChange = fn => this._onChange = fn;
    /* istanbul ignore next */
    this.registerOnTouched = fn => this._onTouch = fn;
  }
  ngOnInit() {
    this.generateDates();
  }
  get list() {
    return this.show_shortlist ? this.short_list : this.date_list;
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.active_date = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new_value).valueOf();
    this.offset = 0;
    if (this._onChange) {
      this._onChange(new_value);
    }
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.active_date = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(value).valueOf();
    this.offset = 0;
    this.generateDates();
  }
  resetMonth() {
    this.changeMonth(-this.offset);
  }
  changeMonth(change) {
    this.offset += change;
    this.generateDates();
  }
  generateDates() {
    const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(this.active_date, this.offset);
    let start = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(date));
    const now = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(Date.now());
    let list = [];
    while (list.length < 7 * 6) {
      list.push({
        id: start.valueOf(),
        is_past: (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(start, now),
        is_month: (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(start, date),
        is_today: (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(Date.now(), start)
      });
      start = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(start, 1);
    }
    this.date_list = list;
    start = this.offset === 0 ? (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(date) : (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(date));
    list = [];
    while (list.length < 7) {
      list.push({
        id: start.valueOf(),
        is_past: (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(start, now),
        is_month: (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(start, date),
        is_today: (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(Date.now(), start)
      });
      start = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(start, 1);
    }
    this.short_list = list;
  }
}
ScheduleMobileCalendarComponent.ɵfac = function ScheduleMobileCalendarComponent_Factory(t) {
  return new (t || ScheduleMobileCalendarComponent)();
};
ScheduleMobileCalendarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ScheduleMobileCalendarComponent,
  selectors: [["schedule-mobile-calendar"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => ScheduleMobileCalendarComponent),
    multi: true
  }])],
  decls: 20,
  vars: 10,
  consts: [[1, "p-2"], [1, "flex", "items-center", "justify-between"], ["btn", "", "matRipple", "", 1, "clear", "font-medium", 3, "click"], [1, "flex", "items-center"], ["icon", "", "matRipple", "", 3, "click"], [1, "flex", "items-center", "justify-center", "text-sm", "mb-2"], ["class", "opacity-60 text-center w-10 mx-2", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between", "flex-wrap"], ["icon", "", "matRipple", "", "class", "min-w-[calc(14%-1rem)] flex-1 mx-2 h-9 overflow-visible", 3, "text-opacity-30", "text-white", "text-black", "dark:text-white", "dark:text-opacity-30", "bg-primary", "font-normal", "click", 4, "ngFor", "ngForOf"], [1, "opacity-60", "text-center", "w-10", "mx-2"], ["icon", "", "matRipple", "", 1, "min-w-[calc(14%-1rem)]", "flex-1", "mx-2", "h-9", "overflow-visible", 3, "click"], ["class", "absolute -inset-0.5 border border-primary rounded-full", 4, "ngIf"], [1, "absolute", "-inset-0.5", "border", "border-primary", "rounded-full"]],
  template: function ScheduleMobileCalendarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScheduleMobileCalendarComponent_Template_button_click_2_listener() {
        return ctx.resetMonth();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScheduleMobileCalendarComponent_Template_button_click_6_listener() {
        return ctx.changeMonth(-1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "app-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "chevron_left");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScheduleMobileCalendarComponent_Template_button_click_9_listener() {
        return ctx.changeMonth(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "app-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "chevron_right");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScheduleMobileCalendarComponent_Template_button_click_12_listener() {
        return ctx.show_shortlist = !ctx.show_shortlist;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "app-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "arrow_drop_down");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ScheduleMobileCalendarComponent_div_16_Template, 3, 4, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "slice");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ScheduleMobileCalendarComponent_button_19_Template, 4, 19, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 3, (ctx.date_list[6] == null ? null : ctx.date_list[6].id) || ctx.active_date, "LLLL YYYY"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](17, 6, ctx.date_list, 0, 7));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.list);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_0__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_11__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe]
});


/***/ }),

/***/ 93231:
/*!***************************************************************************!*\
  !*** ./apps/workplace/src/app/new-schedule/schedule-sidebar.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScheduleSidebarComponent": () => (/* binding */ ScheduleSidebarComponent)
/* harmony export */ });
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 88397);
/* harmony import */ var _schedule_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule-state.service */ 87625);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 65306);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ 7672);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _schedule_calendar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schedule-calendar.component */ 66177);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 38699);












function ScheduleSidebarComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScheduleSidebarComponent_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.toggleType("event"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 11)(2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "place");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 12)(5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "mat-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 3, "WPA.ROOM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 5, "WPA.SCHEDULE_ROOM_FILTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 7, ctx_r0.filters)) == null ? null : tmp_2_0.shown_types == null ? null : tmp_2_0.shown_types.includes("event"));
  }
}
function ScheduleSidebarComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScheduleSidebarComponent_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.toggleType("desk"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 12)(4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "mat-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 3, "WPA.DESK"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 5, "WPA.SCHEDULE_DESK_FILTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 7, ctx_r1.filters)) == null ? null : tmp_2_0.shown_types == null ? null : tmp_2_0.shown_types.includes("desk"));
  }
}
function ScheduleSidebarComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScheduleSidebarComponent_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.toggleType("parking"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 11)(2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "drive_eta");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 12)(5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "mat-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 3, "WPA.PARKING"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 5, "WPA.SCHEDULE_PARKING_FILTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 7, ctx_r2.filters)) == null ? null : tmp_2_0.shown_types == null ? null : tmp_2_0.shown_types.includes("parking"));
  }
}
function ScheduleSidebarComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScheduleSidebarComponent_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.toggleType("visitor"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 11)(2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 12)(5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](6, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](9, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "mat-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 3, "WPA.VISITORS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nApply"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 5, "WPA.SCHEDULE_VISITOR_FILTER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nApply"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 7, ctx_r3.filters)) == null ? null : tmp_2_0.shown_types == null ? null : tmp_2_0.shown_types.includes("visitor"));
  }
}
function ScheduleSidebarComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScheduleSidebarComponent_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r13.toggleType("locker"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 11)(2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "door_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 12)(5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](6, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](9, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "mat-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 3, "WPA.LOCKERS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nApply"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 5, "WPA.SCHEDULE_LOCKER_FILTER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18nApply"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 7, ctx_r4.filters)) == null ? null : tmp_2_0.shown_types == null ? null : tmp_2_0.shown_types.includes("locker"));
  }
}
class ScheduleSidebarComponent {
  hasFeature(feature) {
    return this._settings.get('app.features')?.includes(feature);
  }
  constructor(_state, _settings) {
    this._state = _state;
    this._settings = _settings;
    this.filters = this._state.filters;
    this.date = this._state.date;
    this.toggleType = t => this._state.toggleType(t);
    this.setDate = d => this._state.setDate(d);
  }
}
ScheduleSidebarComponent.ɵfac = function ScheduleSidebarComponent_Factory(t) {
  return new (t || ScheduleSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_schedule_state_service__WEBPACK_IMPORTED_MODULE_1__.ScheduleStateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService));
};
ScheduleSidebarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ScheduleSidebarComponent,
  selectors: [["schedule-sidebar"]],
  decls: 11,
  vars: 8,
  consts: function () {
    let i18n_0;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_4163272119298020373$$_______________USERS_YUION_DOCUMENTS_WORK_REPOS_USER_INTERFACES_APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_SIDEBAR_COMPONENT_TS_1 = goog.getMsg("Filters");
      i18n_0 = MSG_EXTERNAL_4163272119298020373$$_______________USERS_YUION_DOCUMENTS_WORK_REPOS_USER_INTERFACES_APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_SIDEBAR_COMPONENT_TS_1;
    } else {
      i18n_0 = $localize`:␟1298c1d2bbbb7415f5494e800f6775fdb70f4df6␟4163272119298020373:Filters`;
    }
    let i18n_2;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_1215297419226013896$$_______________USERS_YUION_DOCUMENTS_WORK_REPOS_USER_INTERFACES_APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_SIDEBAR_COMPONENT_TS__3 = goog.getMsg(" {$interpolation} ", {
        "interpolation": "\uFFFD0\uFFFD"
      }, {
        original_code: {
          "interpolation": "{{ 'WPA.VISITORS' | translate }}"
        }
      });
      i18n_2 = MSG_EXTERNAL_1215297419226013896$$_______________USERS_YUION_DOCUMENTS_WORK_REPOS_USER_INTERFACES_APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_SIDEBAR_COMPONENT_TS__3;
    } else {
      i18n_2 = $localize`:␟59151f596eb603224ad9b858fdf5e3e6dfb3a4dc␟1215297419226013896: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
    }
    let i18n_4;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_5823422811675104879$$_______________USERS_YUION_DOCUMENTS_WORK_REPOS_USER_INTERFACES_APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_SIDEBAR_COMPONENT_TS__5 = goog.getMsg(" {$interpolation} ", {
        "interpolation": "\uFFFD0\uFFFD"
      }, {
        original_code: {
          "interpolation": "{{ 'WPA.SCHEDULE_VISITOR_FILTER' | translate }}"
        }
      });
      i18n_4 = MSG_EXTERNAL_5823422811675104879$$_______________USERS_YUION_DOCUMENTS_WORK_REPOS_USER_INTERFACES_APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_SIDEBAR_COMPONENT_TS__5;
    } else {
      i18n_4 = $localize`:␟6c8f5c27706957b7df521a06b88ba1df1f7a31e9␟5823422811675104879: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
    }
    let i18n_6;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_2481958659371886477$$_______________USERS_YUION_DOCUMENTS_WORK_REPOS_USER_INTERFACES_APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_SIDEBAR_COMPONENT_TS__7 = goog.getMsg(" {$interpolation} ", {
        "interpolation": "\uFFFD0\uFFFD"
      }, {
        original_code: {
          "interpolation": "{{ 'WPA.LOCKERS' | translate }}"
        }
      });
      i18n_6 = MSG_EXTERNAL_2481958659371886477$$_______________USERS_YUION_DOCUMENTS_WORK_REPOS_USER_INTERFACES_APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_SIDEBAR_COMPONENT_TS__7;
    } else {
      i18n_6 = $localize`:␟613617f03056b686e8959e951f278e3518947bd7␟2481958659371886477: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
    }
    let i18n_8;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_8248636682633599470$$_______________USERS_YUION_DOCUMENTS_WORK_REPOS_USER_INTERFACES_APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_SIDEBAR_COMPONENT_TS__9 = goog.getMsg(" {$interpolation} ", {
        "interpolation": "\uFFFD0\uFFFD"
      }, {
        original_code: {
          "interpolation": "{{ 'WPA.SCHEDULE_LOCKER_FILTER' | translate }}"
        }
      });
      i18n_8 = MSG_EXTERNAL_8248636682633599470$$_______________USERS_YUION_DOCUMENTS_WORK_REPOS_USER_INTERFACES_APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_SIDEBAR_COMPONENT_TS__9;
    } else {
      i18n_8 = $localize`:␟6a370310350e3781c551d62b37abc16c1515a657␟8248636682633599470: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
    }
    return [[1, "flex", "flex-col", "w-[18rem]", "h-full", "overflow-hidden", "bg-white", "dark:bg-[#1F2021]", "border-r", "border-gray-300", "dark:border-neutral-800"], [1, "border-b", "border-gray-200", "dark:border-neutral-800", 3, "ngModel", "ngModelChange"], [1, "mx-4", "mt-4", "font-medium"], i18n_0, [1, "p-4", "space-y-4"], ["matRipple", "", "name", "schedule-toggle-event-filter", "class", "flex items-center space-x-2 w-full text-left", 3, "click", 4, "ngIf"], ["matRipple", "", "name", "schedule-toggle-desk-filter", "class", "flex items-center space-x-2 w-full text-left", 3, "click", 4, "ngIf"], ["matRipple", "", "name", "schedule-toggle-parking-filter", "class", "flex items-center space-x-2 w-full text-left", 3, "click", 4, "ngIf"], ["matRipple", "", "name", "schedule-toggle-visitor-filter", "class", "flex items-center space-x-2 w-full text-left", 3, "click", 4, "ngIf"], ["matRipple", "", "name", "schedule-toggle-locker-filter", "class", "flex items-center space-x-2 w-full text-left", 3, "click", 4, "ngIf"], ["matRipple", "", "name", "schedule-toggle-event-filter", 1, "flex", "items-center", "space-x-2", "w-full", "text-left", 3, "click"], [1, "h-10", "w-10", "rounded-full", "flex", "items-center", "justify-center", "bg-gray-200", "dark:bg-neutral-800", "text-2xl"], [1, "flex-1"], [1, ""], [1, "text-sm", "opacity-60"], [3, "ngModel"], ["matRipple", "", "name", "schedule-toggle-desk-filter", 1, "flex", "items-center", "space-x-2", "w-full", "text-left", 3, "click"], ["src", "assets/icons/desk-outline.svg", 1, "w-6"], ["matRipple", "", "name", "schedule-toggle-parking-filter", 1, "flex", "items-center", "space-x-2", "w-full", "text-left", 3, "click"], ["matRipple", "", "name", "schedule-toggle-visitor-filter", 1, "flex", "items-center", "space-x-2", "w-full", "text-left", 3, "click"], i18n_2, i18n_4, ["matRipple", "", "name", "schedule-toggle-locker-filter", 1, "flex", "items-center", "space-x-2", "w-full", "text-left", 3, "click"], i18n_6, i18n_8];
  },
  template: function ScheduleSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "schedule-calendar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ScheduleSidebarComponent_Template_schedule_calendar_ngModelChange_1_listener($event) {
        return ctx.setDate($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h3", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](4, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ScheduleSidebarComponent_button_6_Template, 13, 9, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ScheduleSidebarComponent_button_7_Template, 12, 9, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ScheduleSidebarComponent_button_8_Template, 13, 9, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ScheduleSidebarComponent_button_9_Template, 13, 9, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ScheduleSidebarComponent_button_10_Template, 13, 9, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 6, ctx.date));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.hasFeature("spaces"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.hasFeature("desks"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.hasFeature("parking"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.hasFeature("visitor-invite"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.hasFeature("lockers"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatRipple, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _schedule_calendar_component__WEBPACK_IMPORTED_MODULE_3__.ScheduleCalendarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
  styles: ["mat-checkbox[_ngcontent-%COMP%] {\n                pointer-events: none;\n            }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVkdWxlLXNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxvQkFBb0I7WUFDeEIiLCJmaWxlIjoic2NoZWR1bGUtc2lkZWJhci5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIG1hdC1jaGVja2JveCB7XG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd29ya3BsYWNlL3NyYy9hcHAvbmV3LXNjaGVkdWxlL3NjaGVkdWxlLXNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxvQkFBb0I7WUFDeEI7O0FBRVosZ1pBQWdaIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICBtYXQtY2hlY2tib3gge1xuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 93546:
/*!*******************************************************************!*\
  !*** ./apps/workplace/src/app/new-schedule/schedule.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScheduleComponent": () => (/* binding */ ScheduleComponent)
/* harmony export */ });
/* harmony import */ var _Users_yuion_Documents_work_repos_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/bookings */ 56917);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 88397);
/* harmony import */ var _placeos_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/events */ 27288);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns */ 75845);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _schedule_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schedule-state.service */ 87625);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 19193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _components_topbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/topbar.component */ 64187);
/* harmony import */ var _components_footer_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/footer-menu.component */ 46012);
/* harmony import */ var _libs_events_src_lib_event_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/events/src/lib/event-card.component */ 52551);
/* harmony import */ var _libs_bookings_src_lib_booking_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/bookings/src/lib/booking-card.component */ 64088);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-bar */ 46297);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _schedule_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./schedule-sidebar.component */ 93231);
/* harmony import */ var _schedule_filters_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./schedule-filters.component */ 94938);
/* harmony import */ var _schedule_mobile_calendar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./schedule-mobile-calendar.component */ 59005);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ 38699);



























function ScheduleComponent_topbar_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "topbar");
  }
}
function ScheduleComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "COMMON.TODAY"), ")");
  }
}
function ScheduleComponent_ng_container_14_ng_container_1_event_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "event-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("edit", function ScheduleComponent_ng_container_14_ng_container_1_event_card_1_Template_event_card_edit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14);
      const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r12.edit(item_r8));
    })("remove", function ScheduleComponent_ng_container_14_ng_container_1_event_card_1_Template_event_card_remove_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14);
      const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r15.remove(item_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("event", item_r8);
  }
}
function ScheduleComponent_ng_container_14_ng_container_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "booking-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("remove", function ScheduleComponent_ng_container_14_ng_container_1_ng_template_2_Template_booking_card_remove_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r20);
      const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r18.remove(item_r8));
    })("end", function ScheduleComponent_ng_container_14_ng_container_1_ng_template_2_Template_booking_card_end_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r20);
      const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r21.end(item_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("booking", item_r8);
  }
}
function ScheduleComponent_ng_container_14_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ScheduleComponent_ng_container_14_ng_container_1_event_card_1_Template, 1, 1, "event-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, ScheduleComponent_ng_container_14_ng_container_1_ng_template_2_Template, 1, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](3);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r7.isEvent(item_r8))("ngIfElse", _r10);
  }
}
function ScheduleComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ScheduleComponent_ng_container_14_ng_container_1_Template, 4, 2, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, ctx_r2.bookings))("ngForTrackBy", ctx_r2.trackByFn);
  }
}
function ScheduleComponent_mat_progress_bar_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "mat-progress-bar", 15);
  }
}
function ScheduleComponent_footer_menu_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "footer-menu");
  }
}
function ScheduleComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 2, "WPA.SCHEDULE_EMPTY"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](5, 4, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](6, 7, ctx_r6.date), "EEEE, dd LLL yyyy"), " ");
  }
}
class ScheduleComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_2__.AsyncHandler {
  isEvent(item) {
    return item instanceof _placeos_events__WEBPACK_IMPORTED_MODULE_3__.CalendarEvent;
  }
  get hide_nav() {
    return localStorage.getItem('PlaceOS.hide_nav') === 'true';
  }
  constructor(_state, _event_form, _router, _dialog, _settings) {
    super();
    this._state = _state;
    this._event_form = _event_form;
    this._router = _router;
    this._dialog = _dialog;
    this._settings = _settings;
    this.bookings = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this._state.filtered_bookings, this._state.loading]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(([bookings, loading]) => loading ? [] : bookings));
    this.date = this._state.date;
    this.loading = this._state.loading;
    this.is_today = this.date.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(_ => (0,date_fns__WEBPACK_IMPORTED_MODULE_15__["default"])(_, Date.now())));
    this.setDate = d => this._state.setDate(d);
  }
  ngOnInit() {
    this._state.triggerPoll();
    this.subscription('poll', this._state.startPolling());
  }
  trackByFn(index, item) {
    return item?.id;
  }
  edit(event) {
    var _this = this;
    return (0,_Users_yuion_Documents_work_repos_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this._router.navigate(['/book', 'meeting', 'form']);
      if (event.creator !== event.mailbox) {
        event = (yield (0,_placeos_events__WEBPACK_IMPORTED_MODULE_3__.queryEvents)({
          period_start: event.event_start,
          period_end: event.event_end,
          ical_uid: event.ical_uid
        }).toPromise()).find(_ => _.ical_uid === event.ical_uid) || event;
      }
      _this._event_form.newForm(event);
    })();
  }
  remove(item) {
    var _this2 = this;
    return (0,_Users_yuion_Documents_work_repos_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const time = `${(0,date_fns__WEBPACK_IMPORTED_MODULE_16__["default"])(item.date, 'dd MMM yyyy h:mma')}`;
      const resource_name = item instanceof _placeos_events__WEBPACK_IMPORTED_MODULE_3__.CalendarEvent ? item.space?.display_name : item.asset_name || item.asset_id;
      const content = `Delete the booking for ${resource_name} at ${time}`;
      const resp = yield (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.openConfirmModal)({
        title: `Delete booking`,
        content,
        icon: {
          content: 'delete'
        }
      }, _this2._dialog);
      if (item instanceof _placeos_events__WEBPACK_IMPORTED_MODULE_3__.CalendarEvent && item.creator !== item.mailbox) {
        item = (yield (0,_placeos_events__WEBPACK_IMPORTED_MODULE_3__.queryEvents)({
          period_start: item.event_start,
          period_end: item.event_end,
          ical_uid: item.ical_uid
        }).toPromise()).find(_ => _.ical_uid === item.ical_uid) || item;
      }
      if (resp.reason !== 'done') return;
      resp.loading('Requesting booking deletion...');
      yield (item instanceof _placeos_events__WEBPACK_IMPORTED_MODULE_3__.CalendarEvent ? _placeos_events__WEBPACK_IMPORTED_MODULE_3__.removeEvent : _placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.removeBooking)(item.id, {
        calendar: _this2._settings.get('app.no_user_calendar') ? null : (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.currentUser)()?.email,
        system_id: item.system?.id
      }).toPromise().catch(e => {
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifyError)(`Unable to delete booking. ${e}`);
        resp.close();
        throw e;
      });
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifySuccess)('Successfully deleted booking.');
      _this2._state.removeItem(item);
      _this2._dialog.closeAll();
    })();
  }
  end(item) {
    var _this3 = this;
    return (0,_Users_yuion_Documents_work_repos_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const time = `${(0,date_fns__WEBPACK_IMPORTED_MODULE_16__["default"])(item.date, 'dd MMM yyyy h:mma')}`;
      const resource_name = item.asset_name || item.asset_id;
      const content = `End the booking for ${resource_name} at ${time}`;
      const resp = yield (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.openConfirmModal)({
        title: `End booking`,
        content,
        icon: {
          content: 'delete'
        }
      }, _this3._dialog);
      if (resp.reason !== 'done') return;
      resp.loading('Ending booking...');
      yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.checkinBooking)(item.id, false).toPromise().catch(e => {
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifyError)(`Unable to end booking. ${e}`);
        resp.close();
        throw e;
      });
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifySuccess)('Successfully ended booking.');
      _this3._state.removeItem(item);
      _this3._dialog.closeAll();
    })();
  }
}
ScheduleComponent.ɵfac = function ScheduleComponent_Factory(t) {
  return new (t || ScheduleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_schedule_state_service__WEBPACK_IMPORTED_MODULE_4__.ScheduleStateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_placeos_events__WEBPACK_IMPORTED_MODULE_3__.EventFormService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_2__.SettingsService));
};
ScheduleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: ScheduleComponent,
  selectors: [["app-schedule"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]],
  decls: 21,
  vars: 21,
  consts: [[4, "ngIf"], [1, "flex", "flex-col", "sm:flex-row", "flex-1", "h-1/2", "bg-[#F8F8FA]", "dark:bg-neutral-900", "relative"], [1, "hidden", "sm:block"], [1, "w-full", "bg-white", "dark:bg-[#1F2021]", "border-b", "border-gray-300", "sm:hidden"], [3, "ngModel", "ngModelChange"], [1, "flex-1", "h-full", "p-4", "overflow-auto", "space-y-2"], [1, "font-medium", "my-2"], [4, "ngIf", "ngIfElse"], ["class", "absolute inset-x-0 bottom-0", "mode", "indeterminate", 4, "ngIf"], ["empty_state", ""], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "event", "edit", "remove", 4, "ngIf", "ngIfElse"], ["booking_card", ""], [3, "event", "edit", "remove"], [3, "booking", "remove", "end"], ["mode", "indeterminate", 1, "absolute", "inset-x-0", "bottom-0"], [1, "w-full", "p-8", "flex", "flex-col", "items-center", "justify-center", "space-y-4"], ["src", "assets/img/no-events.svg", 1, "mr-4"], [1, "opacity-30"]],
  template: function ScheduleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, ScheduleComponent_topbar_0_Template, 1, 0, "topbar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "schedule-sidebar", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 3)(4, "schedule-mobile-calendar", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function ScheduleComponent_Template_schedule_mobile_calendar_ngModelChange_4_listener($event) {
        return ctx.setDate($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "schedule-filters");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "h3", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](10, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](11, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, ScheduleComponent_span_12_Template, 3, 3, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](13, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](14, ScheduleComponent_ng_container_14_Template, 3, 4, "ng-container", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](15, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, ScheduleComponent_mat_progress_bar_16_Template, 1, 0, "mat-progress-bar", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](17, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, ScheduleComponent_footer_menu_18_Template, 1, 0, "footer-menu", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](19, ScheduleComponent_ng_template_19_Template, 7, 9, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](20);
      let tmp_4_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.hide_nav);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 8, ctx.date));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](10, 10, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](11, 13, ctx.date), "EEE dd LLL yyyy"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](13, 15, ctx.is_today));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](15, 17, ctx.bookings)) == null ? null : tmp_4_0.length)("ngIfElse", _r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](17, 19, ctx.loading));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.hide_nav);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _components_topbar_component__WEBPACK_IMPORTED_MODULE_5__.TopbarComponent, _components_footer_menu_component__WEBPACK_IMPORTED_MODULE_6__.FooterMenuComponent, _libs_events_src_lib_event_card_component__WEBPACK_IMPORTED_MODULE_7__.EventCardComponent, _libs_bookings_src_lib_booking_card_component__WEBPACK_IMPORTED_MODULE_8__.BookingCardComponent, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__.MatProgressBar, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgModel, _schedule_sidebar_component__WEBPACK_IMPORTED_MODULE_9__.ScheduleSidebarComponent, _schedule_filters_component__WEBPACK_IMPORTED_MODULE_10__.ScheduleFiltersComponent, _schedule_mobile_calendar_component__WEBPACK_IMPORTED_MODULE_11__.ScheduleMobileCalendarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_19__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslatePipe],
  styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n            }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVkdWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixzQkFBc0I7Z0JBQ3RCLFlBQVk7Z0JBQ1osV0FBVztZQUNmIiwiZmlsZSI6InNjaGVkdWxlLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd29ya3BsYWNlL3NyYy9hcHAvbmV3LXNjaGVkdWxlL3NjaGVkdWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixzQkFBc0I7Z0JBQ3RCLFlBQVk7Z0JBQ1osV0FBVztZQUNmOztBQUVaLDRoQkFBNGhCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 62139:
/*!****************************************************************!*\
  !*** ./apps/workplace/src/app/new-schedule/schedule.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppScheduleModule": () => (/* binding */ AppScheduleModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 95763);
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/shared.module */ 75206);
/* harmony import */ var _schedule_calendar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule-calendar.component */ 66177);
/* harmony import */ var _schedule_filter_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule-filter-card.component */ 42566);
/* harmony import */ var _schedule_filters_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schedule-filters.component */ 94938);
/* harmony import */ var _schedule_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schedule-sidebar.component */ 93231);
/* harmony import */ var _schedule_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schedule.component */ 93546);
/* harmony import */ var _schedule_mobile_calendar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schedule-mobile-calendar.component */ 59005);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 86839);













const ROUTES = [{
  path: '',
  component: _schedule_component__WEBPACK_IMPORTED_MODULE_5__.ScheduleComponent
}, {
  path: '**',
  redirectTo: ''
}];
const COMPONENTS = [_schedule_component__WEBPACK_IMPORTED_MODULE_5__.ScheduleComponent, _schedule_sidebar_component__WEBPACK_IMPORTED_MODULE_4__.ScheduleSidebarComponent, _schedule_calendar_component__WEBPACK_IMPORTED_MODULE_1__.ScheduleCalendarComponent, _schedule_filters_component__WEBPACK_IMPORTED_MODULE_3__.ScheduleFiltersComponent, _schedule_filter_card_component__WEBPACK_IMPORTED_MODULE_2__.ScheduleFilterCardComponent, _schedule_mobile_calendar_component__WEBPACK_IMPORTED_MODULE_6__.ScheduleMobileCalendarComponent];
class AppScheduleModule {}
AppScheduleModule.ɵfac = function AppScheduleModule_Factory(t) {
  return new (t || AppScheduleModule)();
};
AppScheduleModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: AppScheduleModule
});
AppScheduleModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _components_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedComponentModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__.MatBottomSheetModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(ROUTES)]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppScheduleModule, {
    declarations: [_schedule_component__WEBPACK_IMPORTED_MODULE_5__.ScheduleComponent, _schedule_sidebar_component__WEBPACK_IMPORTED_MODULE_4__.ScheduleSidebarComponent, _schedule_calendar_component__WEBPACK_IMPORTED_MODULE_1__.ScheduleCalendarComponent, _schedule_filters_component__WEBPACK_IMPORTED_MODULE_3__.ScheduleFiltersComponent, _schedule_filter_card_component__WEBPACK_IMPORTED_MODULE_2__.ScheduleFilterCardComponent, _schedule_mobile_calendar_component__WEBPACK_IMPORTED_MODULE_6__.ScheduleMobileCalendarComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _components_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedComponentModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__.MatBottomSheetModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
  });
})();

/***/ }),

/***/ 53470:
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameMonth/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


/**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month (and year)?
 *
 * @description
 * Are the given dates in the same month (and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same month (and year)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 *
 * @example
 * // Are 2 September 2014 and 25 September 2015 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2015, 8, 25))
 * //=> false
 */
function isSameMonth(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeft.getFullYear() === dateRight.getFullYear() && dateLeft.getMonth() === dateRight.getMonth();
}

/***/ }),

/***/ 42375:
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfMonth/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);


/**
 * @name startOfMonth
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ 68031:
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ 18325);
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 67367);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 31170);
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ 35380);




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ })

}]);
//# sourceMappingURL=apps_workplace_src_app_new-schedule_schedule_module_ts.js.map