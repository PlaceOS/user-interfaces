"use strict";
(self["webpackChunkworkplace"] = self["webpackChunkworkplace"] || []).push([["apps_workplace_src_app_schedule_schedule_module_ts"],{

/***/ 87037:
/*!*************************************************************************!*\
  !*** ./apps/workplace/src/app/schedule/schedule-list-item.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScheduleListItemComponent: () => (/* binding */ ScheduleListItemComponent)
/* harmony export */ });
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/bookings */ 85616);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 91543);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _libs_spaces_src_lib_space_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/spaces/src/lib/space.pipe */ 22011);








const _c0 = ["schedule-list-item", ""];
const _c1 = (a0, a1) => ["/schedule", "view", a0, a1];
function ScheduleListItemComponent_ng_container_0_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" No events for ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, ctx_r0.item.date, "longDate"), " ");
  }
}
function ScheduleListItemComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ScheduleListItemComponent_ng_container_0_div_1_div_4_Template, 3, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 3, ctx_r0.item.date, "longDate"), " (", ctx_r0.item.duration, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.item.duration);
  }
}
function ScheduleListItemComponent_ng_container_0_a_2_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17)(1, "app-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "place");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](5, 1, (ctx_r0.item == null ? null : ctx_r0.item.location) || (ctx_r0.item == null ? null : ctx_r0.item.description), 0, 255), " ");
  }
}
function ScheduleListItemComponent_ng_container_0_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "space");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "space");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 9)(6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "app-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 14)(14, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ScheduleListItemComponent_ng_container_0_a_2_div_16_Template, 6, 5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("opacity-50", ctx_r0.has_ended);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](25, _c1, (ctx_r0.item == null ? null : ctx_r0.item.id) + (((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 16, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 14, ctx_r0.item == null ? null : ctx_r0.item.system == null ? null : ctx_r0.item.system.email))) == null ? null : tmp_3_0.id) ? "|" + ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 20, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 18, ctx_r0.item == null ? null : ctx_r0.item.system == null ? null : ctx_r0.item.system.email))) == null ? null : tmp_3_0.id) : ""), ctx_r0.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("bg-success", ctx_r0.status === "approved")("bg-warning", ctx_r0.status === "tentative")("bg-error", ctx_r0.status === "declined");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r0.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (ctx_r0.item == null ? null : ctx_r0.item.all_day) ? "All Day" : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 22, ctx_r0.item == null ? null : ctx_r0.item.date, "shortTime"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" (", ctx_r0.status, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (ctx_r0.item == null ? null : ctx_r0.item.title) || "Untitled Event", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r0.item == null ? null : ctx_r0.item.location) || (ctx_r0.item == null ? null : ctx_r0.item.description));
  }
}
function ScheduleListItemComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ScheduleListItemComponent_ng_container_0_div_1_Template, 5, 6, "div", 2)(2, ScheduleListItemComponent_ng_container_0_a_2_Template, 17, 28, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", ctx_r0.item == null ? null : ctx_r0.item.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "date");
  }
}
class ScheduleListItemComponent {
  get type() {
    return this.item instanceof _placeos_bookings__WEBPACK_IMPORTED_MODULE_0__.Booking ? 'booking' : 'event';
  }
  get has_ended() {
    return !this.item || this.item.id === 'date' || (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.isAfter)(new Date(), this.item.date + this.item.duration * 60 * 1000);
  }
  get icon() {
    if (this.status === 'declined') return 'event_busy';
    if (this.item.asset_id) {
      switch (this.item.booking_type) {
        case 'room':
          return {
            content: 'meeting_room'
          };
        case 'desk':
          return {
            type: 'img',
            src: 'assets/img/desk.svg'
          };
        case 'parking':
          return {
            content: 'local_parking'
          };
      }
    }
    return {
      content: 'event'
    };
  }
  get status() {
    if (!this.item || this.item.id === 'date') return 'declined';
    return this.item.status;
  }
  static #_ = this.ɵfac = function ScheduleListItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ScheduleListItemComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ScheduleListItemComponent,
    selectors: [["", "schedule-list-item", ""]],
    inputs: {
      item: "item"
    },
    attrs: _c0,
    decls: 1,
    vars: 1,
    consts: [[3, "ngSwitch", 4, "ngIf"], [3, "ngSwitch"], ["date", "", 4, "ngSwitchCase"], ["btn", "", "matRipple", "", "item", "", "class", "rounded-none my-1 mx-4 w-[calc(100%-2rem)] h-20 bg-base-100 hover:shadow p-0", 3, "opacity-50", "routerLink", 4, "ngSwitchDefault"], ["date", ""], [1, "mx-4", "w-full", "h-12", "text-xl", "flex", "items-center"], ["class", "mx-4 w-full h-10 text-lg text-center font-normal opacity-60", 4, "ngIf"], [1, "mx-4", "w-full", "h-10", "text-lg", "text-center", "font-normal", "opacity-60"], ["btn", "", "matRipple", "", "item", "", 1, "rounded-none", "my-1", "mx-4", "w-[calc(100%-2rem)]", "h-20", "bg-base-100", "hover:shadow", "p-0", 3, "routerLink"], [1, "flex", "items-center", "border", "border-base-200"], ["status", "", 1, "h-20", "w-20", "flex", "flex-col", "items-center", "justify-center", "text-white", "leading-tight"], [1, "text-2xl", 3, "icon"], [1, "font-normal"], [1, "capitalize", "text-xs", "font-medium"], [1, "flex-1", "flex", "flex-col", "text-left", "p-2"], [1, "text-xl", "pl-1"], ["class", "flex items-center font-normal", 4, "ngIf"], [1, "flex", "items-center", "font-normal"], [1, "text-lg", "mr-1"]],
    template: function ScheduleListItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ScheduleListItemComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.item);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitchDefault, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatRipple, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe, _libs_spaces_src_lib_space_pipe__WEBPACK_IMPORTED_MODULE_2__.SpacePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 74551:
/*!********************************************************************!*\
  !*** ./apps/workplace/src/app/schedule/schedule-list.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScheduleListComponent: () => (/* binding */ ScheduleListComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/scrolling */ 79975);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 36337);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 31257);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 28797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var _schedule_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule-state.service */ 79184);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ 61977);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-bar */ 26354);
/* harmony import */ var _schedule_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schedule-list-item.component */ 87037);
/* harmony import */ var _libs_users_src_lib_user_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/users/src/lib/user.pipe */ 89577);





















function ScheduleListComponent_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "user");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_6_0;
    const cal_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", cal_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, cal_r2.id))) == null ? null : tmp_6_0.name) || cal_r2.id);
  }
}
function ScheduleListComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 22);
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("item", item_r3);
  }
}
function ScheduleListComponent_mat_progress_bar_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-progress-bar", 23);
  }
}
class ScheduleListComponent {
  get user() {
    return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.currentUser)();
  }
  constructor(_state) {
    this._state = _state;
    this.today = new Date();
    this.max_date = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.addMonths)(this.today, 4);
    this.options = this._state.options;
    this.loading = this._state.loading;
    this.calendars = this._state.calendars;
    this.date = this.options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(_ => new Date(_.start)));
    this.setOptions = o => this._state.setOptions(o);
    this.event_list = this._state.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(list => {
      let items = [];
      let start = new Date(this.today);
      while (start < this.max_date) {
        const found = list.filter(_ => (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.isSameDay)(start, _.date));
        items = found.length ? [...items, {
          id: 'date',
          date: start.valueOf(),
          duration: found.length
        }, ...found] : [...items, {
          id: 'date',
          date: start.valueOf(),
          duration: 0
        }];
        start = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__.addDays)(start, 1);
      }
      return items;
    }));
  }
  ngOnInit() {
    this._state.startPolling();
  }
  ngOnDestroy() {
    this._state.stopPolling();
  }
  setDate(date) {
    this._state.setOptions({
      start: date.valueOf()
    });
  }
  updateDate(index) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const events = (yield _this.event_list.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).toPromise()) || [];
      const event = events[index] || {};
      if (event) _this.setDate(event.date);
    })();
  }
  scrollTo(date) {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const events = yield _this2.event_list.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).toPromise();
      const index = events.findIndex(_ => _.id === 'date' && (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.isSameDay)(_.date, date));
      if (index >= 0 && _this2._viewport) {
        let position = 0;
        for (let i = 0; i < events.length && i < index; i++) {
          if (events[i].id === 'date' && events[i].duration > 0) position += 88 / 88;else position += 1;
        }
        _this2._viewport.scrollTo({
          top: Math.round(position * 88),
          behavior: 'smooth'
        });
      }
      _this2.setDate(date);
    })();
  }
  /* istanbul ignore next */
  trackByFn(idx, event) {
    return event ? `${event.id}|${event.date}` : undefined;
  }
  static #_ = this.ɵfac = function ScheduleListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ScheduleListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_schedule_state_service__WEBPACK_IMPORTED_MODULE_2__.ScheduleStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: ScheduleListComponent,
    selectors: [["schedule-list"]],
    viewQuery: function ScheduleListComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.CdkVirtualScrollViewport, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx._viewport = _t.first);
      }
    },
    decls: 35,
    vars: 22,
    consts: [["dateMenu", ""], ["picker", ""], ["legend", "matMenu"], [1, "w-full", "h-16", "flex", "items-center", "justify-between", "bg-base-100", "border-b", "border-base-200", "shadow", "p-2"], ["appearance", "outline", 1, "h-[3.25rem]"], [3, "ngModelChange", "ngModel", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "space-x-2"], ["matRipple", "", 1, "clear", "underline", 3, "matMenuTriggerFor"], ["icon", "", 1, "relative"], ["matInput", "", 1, "opacity-0", "absolute", "inset-0", 3, "ngModelChange", "ngModel", "matDatepicker", "min", "max"], ["matSuffix", "", 1, "opacity-0", "absolute", "inset-0", 3, "for"], [1, "w-full", "flex-1", "overflow-hidden", "bg-base-200"], ["itemSize", "88", 1, "h-full", "w-full", 3, "scrolledIndexChange"], ["schedule-list-item", "", 3, "item", 4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy"], ["mode", "indeterminate", "class", "w-full", 4, "ngIf"], ["xPosition", "before"], [1, "flex", "items-center", "px-4", "py-2", "hover:bg-neutral"], [1, "bg-success", "h-2", "w-2", "rounded-full", "mr-4"], [1, "bg-warning", "h-2", "w-2", "rounded-full", "mr-4"], [1, "bg-error", "h-2", "w-2", "rounded-full", "mr-4"], [3, "value"], ["schedule-list-item", "", 3, "item"], ["mode", "indeterminate", 1, "w-full"]],
    template: function ScheduleListComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 3)(1, "mat-form-field", 4)(2, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ScheduleListComponent_Template_mat_select_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.setOptions({
            calendar: $event
          }));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ScheduleListComponent_mat_option_4_Template, 4, 6, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 7)(7, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " Legend ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 9, 0)(11, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "event");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ScheduleListComponent_Template_input_ngModelChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.scrollTo($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "mat-datepicker-toggle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "mat-datepicker", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 12)(19, "cdk-virtual-scroll-viewport", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("scrolledIndexChange", function ScheduleListComponent_Template_cdk_virtual_scroll_viewport_scrolledIndexChange_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.updateDate($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, ScheduleListComponent_div_20_Template, 1, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, ScheduleListComponent_mat_progress_bar_22_Template, 1, 0, "mat-progress-bar", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "mat-menu", 16, 2)(26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, " Approved ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, " Tentative ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, " Declined ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        let tmp_3_0;
        const picker_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](17);
        const legend_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 12, ctx.options)) == null ? null : tmp_3_0.calendar)("placeholder", ctx.user == null ? null : ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 14, ctx.calendars));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matMenuTriggerFor", legend_r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](14, 16, ctx.date))("matDatepicker", picker_r4)("min", ctx.today)("max", ctx.max_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", picker_r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("cdkVirtualForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](21, 18, ctx.event_list))("cdkVirtualForTrackBy", ctx.trackByFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](23, 20, ctx.loading));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuTrigger, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatRipple, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDatepickerToggle, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInput, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.CdkFixedSizeVirtualScroll, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.CdkVirtualForOf, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.CdkVirtualScrollViewport, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__.MatProgressBar, _schedule_list_item_component__WEBPACK_IMPORTED_MODULE_4__.ScheduleListItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _libs_users_src_lib_user_pipe__WEBPACK_IMPORTED_MODULE_5__.UserPipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVkdWxlLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLHNCQUFzQjtnQkFDdEIsWUFBWTtnQkFDWixXQUFXO1lBQ2YiLCJmaWxlIjoic2NoZWR1bGUtbGlzdC5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd29ya3BsYWNlL3NyYy9hcHAvc2NoZWR1bGUvc2NoZWR1bGUtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixZQUFZO2dCQUNaLFdBQVc7WUFDZjs7QUFFWix3aUJBQXdpQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 82072:
/*!****************************************************************************!*\
  !*** ./apps/workplace/src/app/schedule/schedule-view-booking.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScheduleViewBookingComponent: () => (/* binding */ ScheduleViewBookingComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/bookings */ 85616);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 99134);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 91543);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 49675);
/* harmony import */ var _placeos_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/components */ 51588);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
















const _c0 = () => ["/schedule"];
function ScheduleViewBookingComponent_div_8_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" at ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 2, ctx_r0.event.date, "shortTime"), " ~ ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 5, ctx_r0.event.date + ctx_r0.event.duration * 60 * 1000, "shortTime"), " ");
  }
}
function ScheduleViewBookingComponent_div_8_div_17_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ScheduleViewBookingComponent_div_8_div_17_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.viewLocation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Map ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ScheduleViewBookingComponent_div_8_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14)(1, "div", 11)(2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "menu_book");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ScheduleViewBookingComponent_div_8_div_17_button_6_Template, 2, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.event.description || "<No Asset>", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.event.extension_data.map_id && ctx_r0.can_view_location);
  }
}
function ScheduleViewBookingComponent_div_8_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19)(1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ScheduleViewBookingComponent_div_8_div_18_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.confirmDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.is_host ? "Delete" : "Decline", " Event ");
  }
}
function ScheduleViewBookingComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8)(1, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 10)(4, "div", 11)(5, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "event");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, ScheduleViewBookingComponent_div_8_span_10_Template, 4, 8, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 14)(12, "div", 11)(13, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, ScheduleViewBookingComponent_div_8_div_17_Template, 7, 2, "div", 15)(18, ScheduleViewBookingComponent_div_8_div_18_Template, 3, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.event.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](9, 6, ctx_r0.event.date, "longDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.event.all_day && ctx_r0.event.duration < 12 * 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", !ctx_r0.event.all_day && ctx_r0.event.duration < 12 * 60 ? ctx_r0.duration : "All Day", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.event.asset_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.has_ended && ctx_r0.is_host);
  }
}
function ScheduleViewBookingComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-spinner", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Loading booking data...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("diameter", 32);
  }
}
class ScheduleViewBookingComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_2__.AsyncHandler {
  get is_host() {
    return this.event?.user_email === (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.currentUser)()?.email;
  }
  get can_view_location() {
    return !this._settings.get('app.no_maps');
  }
  get duration() {
    return this.event.all_day || this.event.duration >= 12 * 60 ? 'All Day' : (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.formatDuration)({
      hours: Math.floor(this.event?.duration / 60),
      minutes: this.event?.duration % 60
    });
  }
  get has_ended() {
    return this.event && (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.isAfter)(new Date(), (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.addMinutes)(this.event.date, this.event.duration));
  }
  constructor(_route, _router, _dialog, _bookings, _settings) {
    super();
    this._route = _route;
    this._router = _router;
    this._dialog = _dialog;
    this._bookings = _bookings;
    this._settings = _settings;
  }
  ngOnInit() {
    var _this = this;
    this.subscription('route.params', this._route.paramMap.subscribe( /*#__PURE__*/function () {
      var _ref = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (params) {
        if (params.has('id')) {
          _this.event = yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.showBooking)(params.get('id')).toPromise().catch(() => null);
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()));
    this.timeout('return', () => !this.event ? this._router.navigate(['/schedule']) : '', 8 * 1000);
  }
  viewLocation() {
    this._dialog.open(_placeos_components__WEBPACK_IMPORTED_MODULE_3__.MapLocateModalComponent, {
      maxWidth: '95vw',
      maxHeight: '95vh',
      data: {
        item: {
          id: this.event.asset_id,
          map_id: this.event.extension_data.map_id,
          name: this.event.description,
          zones: this.event.zones
        }
      }
    });
  }
  editEvent() {
    this._bookings.newForm(this.event);
    this._router.navigate(['/book', 'desks', 'form']);
  }
  confirmDelete() {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const details = yield (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.openConfirmModal)({
        title: `${_this2.is_host ? 'Delete' : 'Decline'} event`,
        content: `Are you sure you wish to ${_this2.is_host ? 'delete' : 'decline'} this event?`,
        icon: {
          content: _this2.is_host ? 'delete' : 'event_busy'
        }
      }, _this2._dialog);
      if (details.reason !== 'done') return;
      details.loading('Removing booking...');
      yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.rejectBooking)(_this2.event.id).toPromise().catch(e => {
        details.loading('');
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifyError)(`Error removing booking. ${e}`);
        throw e;
      });
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifySuccess)('Successfully removed booking.');
      _this2._router.navigate(['/schedule']);
      details.close();
    })();
  }
  static #_ = this.ɵfac = function ScheduleViewBookingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ScheduleViewBookingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.BookingFormService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_2__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ScheduleViewBookingComponent,
    selectors: [["schedule-view-booking"]],
    inputs: {
      event: "event"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
    decls: 11,
    vars: 4,
    consts: [["load_state", ""], ["topbar", "", 1, ""], ["btn", "", "matRipple", "", 1, "clear", "h-[2.75rem]", "text-white", 3, "routerLink"], [1, "flex", "items-center", "justify-center", "h-full"], [1, "text-xl"], [1, "ml-2", "mx-4"], [1, "flex-1", "w-full", "flex", "flex-col", "items-center", "bg-base-200", "p-4", "overflow-auto"], ["class", "max-w-full w-[28rem] bg-base-100 border border-base-200 px-4 pb-4 divide-y divide-base-200", 4, "ngIf", "ngIfElse"], [1, "max-w-full", "w-[28rem]", "bg-base-100", "border", "border-base-200", "px-4", "pb-4", "divide-y", "divide-base-200"], [1, "text-xl", "uppercase", "font-medium", "w-full", "my-4"], [1, "flex", "items-center", "py-2", "space-x-2", "w-full", "!border-none"], [1, "p-2", "rounded-full", "bg-base-200", "mr-2"], [1, "flex-1", "truncate"], [4, "ngIf"], [1, "flex", "items-center", "py-2", "space-x-2", "w-full"], ["class", "flex items-center py-2 space-x-2 w-full", 4, "ngIf"], ["class", "flex items-center justify-center space-x-2 mt-4 !border-none", 4, "ngIf"], ["matRipple", "", "locate", "", "class", "bg-transparent border-none underline text-black", 3, "click", 4, "ngIf"], ["matRipple", "", "locate", "", 1, "bg-transparent", "border-none", "underline", "text-black", 3, "click"], [1, "flex", "items-center", "justify-center", "space-x-2", "mt-4", "!border-none"], ["matRipple", "", "remove", "", 1, "w-32", "error", "inverse", 3, "click", "disabled"], [1, "h-full", "w-full", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [3, "diameter"]],
    template: function ScheduleViewBookingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "a", 2)(2, "div", 3)(3, "app-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ScheduleViewBookingComponent_div_8_Template, 19, 9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ScheduleViewBookingComponent_ng_template_9_Template, 4, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const load_state_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.event)("ngIfElse", load_state_r4);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatRipple, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__.MatProgressSpinner, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
    styles: ["[_nghost-%COMP%] {\n                height: 100%;\n                width: 100%;\n                display: flex;\n                flex-direction: column;\n            }\n\n            [topbar][_ngcontent-%COMP%] {\n                background-color: #00539f;\n            }\n\n            [list][_ngcontent-%COMP%] {\n                transition: height 200ms;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVkdWxlLXZpZXctYm9va2luZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCxhQUFhO2dCQUNiLHNCQUFzQjtZQUMxQjs7WUFFQTtnQkFDSSx5QkFBeUI7WUFDN0I7O1lBRUE7Z0JBQ0ksd0JBQXdCO1lBQzVCIiwiZmlsZSI6InNjaGVkdWxlLXZpZXctYm9va2luZy5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbdG9wYmFyXSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTM5ZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgW2xpc3RdIHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMjAwbXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd29ya3BsYWNlL3NyYy9hcHAvc2NoZWR1bGUvc2NoZWR1bGUtdmlldy1ib29raW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksWUFBWTtnQkFDWixXQUFXO2dCQUNYLGFBQWE7Z0JBQ2Isc0JBQXNCO1lBQzFCOztZQUVBO2dCQUNJLHlCQUF5QjtZQUM3Qjs7WUFFQTtnQkFDSSx3QkFBd0I7WUFDNUI7O0FBRVosZzJCQUFnMkIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbdG9wYmFyXSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTM5ZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgW2xpc3RdIHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMjAwbXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 18959:
/*!**************************************************************************!*\
  !*** ./apps/workplace/src/app/schedule/schedule-view-event.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScheduleViewEventComponent: () => (/* binding */ ScheduleViewEventComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/events */ 40569);
/* harmony import */ var _placeos_spaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/spaces */ 44855);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 99134);
/* harmony import */ var _placeos_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/components */ 51588);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @placeos/bookings */ 85616);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _libs_components_src_lib_user_avatar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/user-avatar.component */ 23574);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _libs_components_src_lib_sanitise_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/sanitise.pipe */ 54616);























const _c0 = () => ["/schedule"];
function ScheduleViewEventComponent_div_8_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("at ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](2, 2, ctx_r1.event.date, "shortTime"), " ~ ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](3, 5, ctx_r1.event.date + ctx_r1.event.duration * 60 * 1000, "shortTime"), "");
  }
}
function ScheduleViewEventComponent_div_8_div_27_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ScheduleViewEventComponent_div_8_div_27_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const space_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.viewLocation(space_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Map ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ScheduleViewEventComponent_div_8_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 24)(1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, ScheduleViewEventComponent_div_8_div_27_button_4_Template, 2, 0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const space_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", space_r4.display_name || space_r4.name, " [", (space_r4.level == null ? null : space_r4.level.display_name) || (space_r4.level == null ? null : space_r4.level.name), "] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("bg-success", space_r4.response_status === "accepted")("bg-warning", space_r4.response_status === "tentative")("bg-error", space_r4.response_status === "declined");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.can_view_location);
  }
}
function ScheduleViewEventComponent_div_8_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "a-user-avatar", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("user", user_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](user_r5.name || user_r5.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("bg-success", user_r5.response_status === "accepted")("bg-warning", user_r5.response_status === "tentative")("bg-error", user_r5.response_status === "declined");
  }
}
function ScheduleViewEventComponent_div_8_div_39_div_11_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matTooltip", ctx_r1.optionsFor(item_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", item_r7.options.length, " option", item_r7.options.length === 1 ? "" : "s", " selected ");
  }
}
function ScheduleViewEventComponent_div_8_div_39_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 34)(1, "div", 35)(2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, ScheduleViewEventComponent_div_8_div_39_div_11_div_4_Template, 2, 3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r7.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r7.options.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 4, item_r7.total_cost / 100), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r7.quantity, " ");
  }
}
function ScheduleViewEventComponent_div_8_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 15)(1, "div", 31)(2, "div", 16)(3, "div", 11)(4, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "group");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ScheduleViewEventComponent_div_8_div_39_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.show_catering = !ctx_r1.show_catering);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, ScheduleViewEventComponent_div_8_div_39_div_11_Template, 10, 6, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", (ctx_r1.event.extension_data.catering[0] == null ? null : ctx_r1.event.extension_data.catering[0].item_count) || 0, " Catering Item(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.show_people ? "Hide" : "Show", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("height", !ctx_r1.show_catering ? "0" : (ctx_r1.event.extension_data.catering[0] == null ? null : ctx_r1.event.extension_data.catering[0].items.length) * 3 + "rem");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.event.extension_data.catering[0] == null ? null : ctx_r1.event.extension_data.catering[0].items);
  }
}
function ScheduleViewEventComponent_div_8_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 14)(1, "div", 11)(2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "event_note");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "sanitize");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 1, ctx_r1.event.body), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
  }
}
function ScheduleViewEventComponent_div_8_div_42_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ScheduleViewEventComponent_div_8_div_42_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.editEvent());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Edit Event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r1.loading);
  }
}
function ScheduleViewEventComponent_div_8_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ScheduleViewEventComponent_div_8_div_42_button_1_Template, 2, 1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ScheduleViewEventComponent_div_8_div_42_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.confirmDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.is_host);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.is_host ? "Delete" : "Decline", " Event ");
  }
}
function ScheduleViewEventComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 8)(1, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 10)(4, "div", 11)(5, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "event");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, ScheduleViewEventComponent_div_8_span_10_Template, 4, 8, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 14)(12, "div", 11)(13, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 15)(18, "div", 16)(19, "div", 11)(20, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "place");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ScheduleViewEventComponent_div_8_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.show_spaces = !ctx_r1.show_spaces);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](27, ScheduleViewEventComponent_div_8_div_27_Template, 5, 9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "div", 15)(29, "div", 16)(30, "div", 11)(31, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, "group");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ScheduleViewEventComponent_div_8_Template_button_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.show_people = !ctx_r1.show_people);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](38, ScheduleViewEventComponent_div_8_div_38_Template, 5, 8, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](39, ScheduleViewEventComponent_div_8_div_39_Template, 12, 5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](41, ScheduleViewEventComponent_div_8_div_41_Template, 6, 3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](42, ScheduleViewEventComponent_div_8_div_42_Template, 4, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.event.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](9, 19, ctx_r1.event.date, "longDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r1.event.all_day);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.event.resources == null ? null : ctx_r1.event.resources.length, " Space(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !(ctx_r1.event.resources == null ? null : ctx_r1.event.resources.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.show_spaces ? "Hide" : "Show", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("height", !ctx_r1.show_spaces ? "0" : (ctx_r1.event.resources == null ? null : ctx_r1.event.resources.length) * 2.5 + "rem");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.event.resources);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", (ctx_r1.event.attendees == null ? null : ctx_r1.event.attendees.length) || 0, " Attendee(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !(ctx_r1.event.attendees == null ? null : ctx_r1.event.attendees.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.show_people ? "Hide" : "Show", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("height", !ctx_r1.show_people ? "0" : ctx_r1.event.attendees.length * 3 + "rem");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.event.attendees);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.event.extension_data.catering == null ? null : ctx_r1.event.extension_data.catering.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.event.body);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.event.state !== "done");
  }
}
function ScheduleViewEventComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "mat-spinner", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Loading event data...");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("diameter", 32);
  }
}
class ScheduleViewEventComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  get is_host() {
    return this.event?.host;
  }
  get can_view_location() {
    return !this._settings.get('app.no_maps');
  }
  get duration() {
    return this.event.all_day ? 'All Day' : (0,date_fns__WEBPACK_IMPORTED_MODULE_10__.formatDuration)({
      hours: Math.floor(this.event?.duration / 60),
      minutes: this.event?.duration % 60
    });
  }
  constructor(_route, _router, _dialog, _events, _spaces, _settings) {
    super();
    this._route = _route;
    this._router = _router;
    this._dialog = _dialog;
    this._events = _events;
    this._spaces = _spaces;
    this._settings = _settings;
  }
  ngOnInit() {
    var _this = this;
    this.subscription('route.params', this._route.paramMap.subscribe( /*#__PURE__*/function () {
      var _ref = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (params) {
        if (params.has('id')) {
          const parts = params.get('id').split('|');
          _this.event = _this._settings.get('app.events.use_bookings') ? yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_5__.showBooking)(parts[0]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(_ => (0,_placeos_events__WEBPACK_IMPORTED_MODULE_2__.newCalendarEventFromBooking)(_))).toPromise() : yield (0,_placeos_events__WEBPACK_IMPORTED_MODULE_2__.showEvent)(parts[0], {
            system_id: parts[1]
          }).toPromise();
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()));
    this.timeout('return', () => !this.event ? this._router.navigate(['/schedule']) : '', 8 * 1000);
  }
  optionsFor(item) {
    return item.options.map(i => i.name).join('\n');
  }
  viewLocation(space) {
    space = this._spaces.find(space.id || space.email) || space;
    this._dialog.open(_placeos_components__WEBPACK_IMPORTED_MODULE_4__.MapLocateModalComponent, {
      maxWidth: '95vw',
      maxHeight: '95vh',
      data: {
        item: space
      }
    });
  }
  editEvent() {
    if ('event_start' in this.event) {
      this._events.newForm(this.event);
      this._router.navigate(['/book', 'spaces', 'form']);
    }
  }
  confirmDelete() {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const details = yield (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.openConfirmModal)({
        title: `${_this2.is_host ? 'Delete' : 'Decline'} event`,
        content: `Are you sure you wish to ${_this2.is_host ? 'delete' : 'decline'} this event?`,
        icon: {
          content: _this2.is_host ? 'delete' : 'event_busy'
        }
      }, _this2._dialog);
      if (details.reason !== 'done') return;
      details.loading('Removing event...');
      yield (_this2._settings.get('app.events.use_bookings') ? _placeos_bookings__WEBPACK_IMPORTED_MODULE_5__.removeBooking : _placeos_events__WEBPACK_IMPORTED_MODULE_2__.removeEvent)(_this2.event.id).toPromise().catch(e => {
        details.loading('');
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)(`Error removing event. ${e}`);
        throw e;
      });
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifySuccess)('Successfully removed event.');
      _this2._router.navigate(['/schedule']);
      details.close();
    })();
  }
  static #_ = this.ɵfac = function ScheduleViewEventComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ScheduleViewEventComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_placeos_events__WEBPACK_IMPORTED_MODULE_2__.EventFormService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_placeos_spaces__WEBPACK_IMPORTED_MODULE_3__.SpacesService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: ScheduleViewEventComponent,
    selectors: [["schedule-view-event"]],
    inputs: {
      event: "event"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]],
    decls: 11,
    vars: 4,
    consts: [["load_state", ""], ["topbar", "", 1, ""], ["btn", "", "matRipple", "", 1, "clear", "h-[2.75rem]", "text-white", 3, "routerLink"], [1, "flex", "items-center", "justify-center", "h-full"], [1, "text-xl"], [1, "ml-2", "mx-4"], [1, "flex-1", "w-full", "flex", "flex-col", "items-center", "bg-base-200", "p-4", "overflow-auto"], ["class", "max-w-full w-[28rem] bg-base-100 border border-base-200 px-4 pb-4 divide-y divide-base-200", 4, "ngIf", "ngIfElse"], [1, "max-w-full", "w-[28rem]", "bg-base-100", "border", "border-base-200", "px-4", "pb-4", "divide-y", "divide-base-200"], [1, "text-xl", "uppercase", "font-medium", "w-full", "my-4"], [1, "flex", "items-center", "py-2", "space-x-2", "w-full", "!border-none"], [1, "p-2", "rounded-full", "bg-base-200", "mr-2"], [1, "flex-1", "truncate"], [4, "ngIf"], [1, "flex", "items-center", "py-2", "space-x-2", "w-full"], [1, "w-full"], [1, "flex", "items-center", "py-2", "space-x-2"], ["matRipple", "", 1, "clear", "bg-transparent", "border-none", "underline", 3, "click", "disabled"], ["list", "", 1, "overflow-hidden"], ["class", "flex items-center h-10 pl-12", 4, "ngFor", "ngForOf"], ["class", "flex items-center h-12 pl-12 pr-2 space-x-2", 4, "ngFor", "ngForOf"], ["class", "w-full", 4, "ngIf"], ["class", "flex items-center py-2 space-x-2 w-full", 4, "ngIf"], ["class", "flex items-center justify-center space-x-2 mt-4 !border-none", 4, "ngIf"], [1, "flex", "items-center", "h-10", "pl-12"], [1, "h-2", "w-2", "rounded", "mr-2"], ["matRipple", "", "locate", "", "class", "bg-transparent border-none underline text-black", 3, "click", 4, "ngIf"], ["matRipple", "", "locate", "", 1, "bg-transparent", "border-none", "underline", "text-black", 3, "click"], [1, "flex", "items-center", "h-12", "pl-12", "pr-2", "space-x-2"], [1, "text-sm", 3, "user"], [1, "h-2", "w-2", "rounded", "mr-4"], [1, "border-b", "border-base-200", "w-full"], ["matRipple", "", 1, "clear", "bg-transparent", "border-none", "underline", 3, "click"], ["class", "flex items-center h-12 pl-12 space-x-2", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "h-12", "pl-12", "space-x-2"], [1, "flex-1", "w-1/2"], ["class", "text-xs underline", 3, "matTooltip", 4, "ngIf"], [1, "bg-primary", "text-xs", "rounded", "px-4", "py-2", "mx-2", "text-white", "font-medium"], [1, "m-2", "bg-neutral-500", "text-white", "h-8", "w-8", "rounded-full", "flex", "items-center", "justify-center", "text-sm"], [1, "text-xs", "underline", 3, "matTooltip"], ["notes", "", 1, "flex-1", "w-1/2", "overflow-auto", 3, "innerHTML"], [1, "flex", "items-center", "justify-center", "space-x-2", "mt-4", "!border-none"], ["matRipple", "", "edit", "", "class", "w-32", 3, "disabled", "click", 4, "ngIf"], ["matRipple", "", "remove", "", 1, "w-32", "error", "inverse", 3, "click", "disabled"], ["matRipple", "", "edit", "", 1, "w-32", 3, "click", "disabled"], [1, "h-full", "w-full", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [3, "diameter"]],
    template: function ScheduleViewEventComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 1)(1, "a", 2)(2, "div", 3)(3, "app-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, ScheduleViewEventComponent_div_8_Template, 43, 22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, ScheduleViewEventComponent_ng_template_9_Template, 4, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const load_state_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.event)("ngIfElse", load_state_r10);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_6__.IconComponent, _libs_components_src_lib_user_avatar_component__WEBPACK_IMPORTED_MODULE_7__.UserAvatarComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatRipple, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__.MatProgressSpinner, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltip, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_14__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe, _libs_components_src_lib_sanitise_pipe__WEBPACK_IMPORTED_MODULE_8__.SanitizePipe],
    styles: ["[_nghost-%COMP%] {\n                height: 100%;\n                width: 100%;\n                display: flex;\n                flex-direction: column;\n            }\n\n            [topbar][_ngcontent-%COMP%] {\n                background-color: #00539f;\n            }\n\n            [list][_ngcontent-%COMP%] {\n                transition: height 200ms;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVkdWxlLXZpZXctZXZlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsYUFBYTtnQkFDYixzQkFBc0I7WUFDMUI7O1lBRUE7Z0JBQ0kseUJBQXlCO1lBQzdCOztZQUVBO2dCQUNJLHdCQUF3QjtZQUM1QiIsImZpbGUiOiJzY2hlZHVsZS12aWV3LWV2ZW50LmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFt0b3BiYXJdIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1MzlmO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbbGlzdF0ge1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAyMDBtcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd29ya3BsYWNlL3NyYy9hcHAvc2NoZWR1bGUvc2NoZWR1bGUtdmlldy1ldmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCxhQUFhO2dCQUNiLHNCQUFzQjtZQUMxQjs7WUFFQTtnQkFDSSx5QkFBeUI7WUFDN0I7O1lBRUE7Z0JBQ0ksd0JBQXdCO1lBQzVCOztBQUVaLHcxQkFBdzFCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgW3RvcGJhcl0ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDUzOWY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtsaXN0XSB7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDIwMG1zO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 62448:
/*!***************************************************************!*\
  !*** ./apps/workplace/src/app/schedule/schedule.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScheduleComponent: () => (/* binding */ ScheduleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _components_topbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/topbar.component */ 17434);
/* harmony import */ var _components_footer_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/footer-menu.component */ 10895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);




class ScheduleComponent {
  static #_ = this.ɵfac = function ScheduleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ScheduleComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ScheduleComponent,
    selectors: [["schedule"]],
    decls: 5,
    vars: 0,
    consts: [[1, "flex-1", "flex", "sm:flex-row", "flex-col-reverse", "h-1/2"], [1, "relative", "flex", "flex-col", "flex-1", "h-1/2", "sm:h-auto", "overflow-hidden"]],
    template: function ScheduleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "topbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "footer-menu");
      }
    },
    dependencies: [_components_topbar_component__WEBPACK_IMPORTED_MODULE_0__.TopbarComponent, _components_footer_menu_component__WEBPACK_IMPORTED_MODULE_1__.FooterMenuComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVkdWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixzQkFBc0I7Z0JBQ3RCLFlBQVk7Z0JBQ1osV0FBVztZQUNmIiwiZmlsZSI6InNjaGVkdWxlLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd29ya3BsYWNlL3NyYy9hcHAvc2NoZWR1bGUvc2NoZWR1bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLHNCQUFzQjtnQkFDdEIsWUFBWTtnQkFDWixXQUFXO1lBQ2Y7O0FBRVosNGhCQUE0aEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 56383:
/*!************************************************************!*\
  !*** ./apps/workplace/src/app/schedule/schedule.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppScheduleModule: () => (/* binding */ AppScheduleModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/scrolling */ 79975);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _placeos_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/users */ 41489);
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/shared.module */ 46358);
/* harmony import */ var _schedule_list_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule-list-item.component */ 87037);
/* harmony import */ var _schedule_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schedule-list.component */ 74551);
/* harmony import */ var _schedule_view_booking_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schedule-view-booking.component */ 82072);
/* harmony import */ var _schedule_view_event_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schedule-view-event.component */ 18959);
/* harmony import */ var _schedule_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schedule.component */ 62448);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);













const ROUTES = [{
  path: '',
  component: _schedule_component__WEBPACK_IMPORTED_MODULE_6__.ScheduleComponent,
  children: [{
    path: '',
    component: _schedule_list_component__WEBPACK_IMPORTED_MODULE_3__.ScheduleListComponent
  }, {
    path: 'view/:id/booking',
    component: _schedule_view_booking_component__WEBPACK_IMPORTED_MODULE_4__.ScheduleViewBookingComponent
  }, {
    path: 'view/:id/event',
    component: _schedule_view_event_component__WEBPACK_IMPORTED_MODULE_5__.ScheduleViewEventComponent
  }]
}, {
  path: '*',
  redirectTo: ''
}];
class AppScheduleModule {
  static #_ = this.ɵfac = function AppScheduleModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppScheduleModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: AppScheduleModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _components_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedComponentModule, _placeos_users__WEBPACK_IMPORTED_MODULE_0__.SharedUsersModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__.ScrollingModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(ROUTES)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppScheduleModule, {
    declarations: [_schedule_component__WEBPACK_IMPORTED_MODULE_6__.ScheduleComponent, _schedule_list_component__WEBPACK_IMPORTED_MODULE_3__.ScheduleListComponent, _schedule_list_item_component__WEBPACK_IMPORTED_MODULE_2__.ScheduleListItemComponent, _schedule_view_booking_component__WEBPACK_IMPORTED_MODULE_4__.ScheduleViewBookingComponent, _schedule_view_event_component__WEBPACK_IMPORTED_MODULE_5__.ScheduleViewEventComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _components_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedComponentModule, _placeos_users__WEBPACK_IMPORTED_MODULE_0__.SharedUsersModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__.ScrollingModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=apps_workplace_src_app_schedule_schedule_module_ts.js.map