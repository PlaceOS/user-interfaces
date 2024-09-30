"use strict";
(self["webpackChunkconcierge"] = self["webpackChunkconcierge"] || []).push([["apps_concierge_src_app_week-view_week-view_module_ts"],{

/***/ 24316:
/*!*********************************************************************!*\
  !*** ./apps/concierge/src/app/week-view/week-view-day.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeekViewDayComponent: () => (/* binding */ WeekViewDayComponent)
/* harmony export */ });
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 28797);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 90610);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 56441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var _day_view_events_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../day-view/events-state.service */ 88288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _week_view_event_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./week-view-event.component */ 19314);










function WeekViewDayComponent_ng_container_5_week_view_event_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "week-view-event", 5);
  }
  if (rf & 2) {
    const event_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("event", event_r1);
  }
}
function WeekViewDayComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WeekViewDayComponent_ng_container_5_week_view_event_1_Template, 1, 1, "week-view-event", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r1.events));
  }
}
function WeekViewDayComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No events");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class WeekViewDayComponent {
  constructor(_state) {
    this._state = _state;
    this._index = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(0);
    this.date = this._state.date.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(date => (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.addDays)((0,date_fns__WEBPACK_IMPORTED_MODULE_7__.startOfWeek)(date), this.index).valueOf()));
    this.events = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this._state.filtered, this._state.date, this._index]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(([events, date, index]) => {
      const start = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.addDays)((0,date_fns__WEBPACK_IMPORTED_MODULE_7__.startOfWeek)(date), index).valueOf();
      const end = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.endOfDay)(start).valueOf();
      return events.filter(bkn => (0,_placeos_common__WEBPACK_IMPORTED_MODULE_0__.timePeriodsIntersect)(start, end, bkn.date, bkn.date + bkn.duration * 60 * 1000));
    }));
  }
  ngOnChanges(changes) {
    if (changes.index) {
      this._index.next(this.index);
    }
  }
  static #_ = this.ɵfac = function WeekViewDayComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || WeekViewDayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_day_view_events_state_service__WEBPACK_IMPORTED_MODULE_1__.EventsStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: WeekViewDayComponent,
    selectors: [["week-view-day"]],
    inputs: {
      index: "index"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
    decls: 9,
    vars: 10,
    consts: [["empty_state", ""], [1, "flex", "items-center", "justify-center", "border-b", "border-base-200", "bg-base-300", "w-full", "py-3", "text-white"], [1, "flex-1", "h-1/2", "overflow-auto", "w-full"], [4, "ngIf", "ngIfElse"], [3, "event", 4, "ngFor", "ngForOf"], [3, "event"], [1, "text-center", "p-2"]],
    template: function WeekViewDayComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, WeekViewDayComponent_ng_container_5_Template, 3, 3, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, WeekViewDayComponent_ng_template_7_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        let tmp_2_0;
        const empty_state_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 3, ctx.date), "EEE, MMM d, y"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 8, ctx.events)) == null ? null : tmp_2_0.length)("ngIfElse", empty_state_r3);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _week_view_event_component__WEBPACK_IMPORTED_MODULE_2__.WeekViewEventComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                align-items: center;\n                height: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlZWstdmlldy1kYXkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLHNCQUFzQjtnQkFDdEIsbUJBQW1CO2dCQUNuQixZQUFZO1lBQ2hCIiwiZmlsZSI6IndlZWstdmlldy1kYXkuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvd2Vlay12aWV3L3dlZWstdmlldy1kYXkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLHNCQUFzQjtnQkFDdEIsbUJBQW1CO2dCQUNuQixZQUFZO1lBQ2hCOztBQUVaLHdqQkFBd2pCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 19314:
/*!***********************************************************************!*\
  !*** ./apps/concierge/src/app/week-view/week-view-event.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeekViewEventComponent: () => (/* binding */ WeekViewEventComponent)
/* harmony export */ });
/* harmony import */ var _placeos_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/events */ 40569);
/* harmony import */ var _day_view_events_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../day-view/events-state.service */ 88288);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 74646);








function WeekViewEventComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WeekViewEventComponent_div_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.view(ctx_r1.event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("m-2 p-2 bg-base-100 shadow rounded border-2 text-black text-left font-normal " + ((ctx_r1.event == null ? null : ctx_r1.event.state) === "done" ? "done" : ctx_r1.event == null ? null : ctx_r1.event.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.event == null ? null : ctx_r1.event.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 6, ctx_r1.event == null ? null : ctx_r1.event.date, ctx_r1.time_format));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r1.event == null ? null : ctx_r1.event.attendees.length, " Attendee", (ctx_r1.event == null ? null : ctx_r1.event.attendees.length) === 1 ? "" : "s", " ");
  }
}
class WeekViewEventComponent {
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_state, _settings) {
    this._state = _state;
    this._settings = _settings;
    this.view = e => this._state.setEvent(e);
  }
  static #_ = this.ɵfac = function WeekViewEventComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || WeekViewEventComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_day_view_events_state_service__WEBPACK_IMPORTED_MODULE_1__.EventsStateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_2__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: WeekViewEventComponent,
    selectors: [["week-view-event"]],
    inputs: {
      event: "event"
    },
    decls: 1,
    vars: 1,
    consts: [["content", "", "matRipple", "", 3, "class", "click", 4, "ngIf"], ["content", "", "matRipple", "", 3, "click"], [1, "text-base"], [1, "text-sm"]],
    template: function WeekViewEventComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, WeekViewEventComponent_div_0_Template, 8, 9, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.event);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
    styles: ["button[_ngcontent-%COMP%] {\n                background: none !important;\n                border: none !important;\n            }\n\n            [content][_ngcontent-%COMP%] {\n                width: calc(100% - 1rem);\n            }\n\n            .done[_ngcontent-%COMP%] {\n                opacity: 0.5;\n            }\n\n            .done[_ngcontent-%COMP%]:hover {\n                opacity: 1;\n            }\n\n            .cancelled[_ngcontent-%COMP%] {\n                border-color: #626262;\n            }\n\n            .external[_ngcontent-%COMP%] {\n                border-color: #d85be0;\n            }\n\n            .internal[_ngcontent-%COMP%] {\n                border-color: #00a4c7;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlZWstdmlldy1ldmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLDJCQUEyQjtnQkFDM0IsdUJBQXVCO1lBQzNCOztZQUVBO2dCQUNJLHdCQUF3QjtZQUM1Qjs7WUFFQTtnQkFDSSxZQUFZO1lBQ2hCOztZQUVBO2dCQUNJLFVBQVU7WUFDZDs7WUFFQTtnQkFDSSxxQkFBcUI7WUFDekI7O1lBRUE7Z0JBQ0kscUJBQXFCO1lBQ3pCOztZQUVBO2dCQUNJLHFCQUFxQjtZQUN6QiIsImZpbGUiOiJ3ZWVrLXZpZXctZXZlbnQuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgW2NvbnRlbnRdIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMXJlbSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kb25lIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kb25lOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY2FuY2VsbGVkIHtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICM2MjYyNjI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5leHRlcm5hbCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZDg1YmUwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaW50ZXJuYWwge1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwYTRjNztcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvd2Vlay12aWV3L3dlZWstdmlldy1ldmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLDJCQUEyQjtnQkFDM0IsdUJBQXVCO1lBQzNCOztZQUVBO2dCQUNJLHdCQUF3QjtZQUM1Qjs7WUFFQTtnQkFDSSxZQUFZO1lBQ2hCOztZQUVBO2dCQUNJLFVBQVU7WUFDZDs7WUFFQTtnQkFDSSxxQkFBcUI7WUFDekI7O1lBRUE7Z0JBQ0kscUJBQXFCO1lBQ3pCOztZQUVBO2dCQUNJLHFCQUFxQjtZQUN6Qjs7QUFFWixneENBQWd4QyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtjb250ZW50XSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDFyZW0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZG9uZSB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZG9uZTpob3ZlciB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNhbmNlbGxlZCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjNjI2MjYyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZXh0ZXJuYWwge1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2Q4NWJlMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmludGVybmFsIHtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICMwMGE0Yzc7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 79437:
/*!**************************************************************************!*\
  !*** ./apps/concierge/src/app/week-view/week-view-timeline.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeekViewTimelineComponent: () => (/* binding */ WeekViewTimelineComponent)
/* harmony export */ });
/* harmony import */ var _day_view_events_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../day-view/events-state.service */ 88288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ui_view_event_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/view-event-details.component */ 22232);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-bar */ 26354);
/* harmony import */ var _week_view_day_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./week-view-day.component */ 24316);







function WeekViewTimelineComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "week-view-day", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("index", i_r1);
  }
}
function WeekViewTimelineComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WeekViewTimelineComponent_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r1 !== 0 && i_r1 !== 6 || _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r1.options).show_weekends);
  }
}
function WeekViewTimelineComponent_mat_progress_bar_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-progress-bar", 6);
  }
}
function WeekViewTimelineComponent_view_event_details_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "view-event-details", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("event", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx_r1.event));
  }
}
class WeekViewTimelineComponent {
  constructor(_state) {
    this._state = _state;
    this.weekdays = [0, 1, 2, 3, 4, 5, 6];
    this.options = this._state.options;
    this.event = this._state.event;
    this.loading = this._state.loading;
  }
  ngOnInit() {
    this._state.startPolling('week');
  }
  ngOnDestroy() {
    this._state.stopPolling();
  }
  static #_ = this.ɵfac = function WeekViewTimelineComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || WeekViewTimelineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_day_view_events_state_service__WEBPACK_IMPORTED_MODULE_0__.EventsStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: WeekViewTimelineComponent,
    selectors: [["week-view-timeline"]],
    decls: 6,
    vars: 7,
    consts: [[1, "flex", "divide-x", "border-base-200", "h-full"], [4, "ngFor", "ngForOf"], ["mode", "indeterminate", 4, "ngIf"], [3, "event", 4, "ngIf"], [4, "ngIf"], [1, "h-full", "flex-1", 3, "index"], ["mode", "indeterminate"], [3, "event"]],
    template: function WeekViewTimelineComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, WeekViewTimelineComponent_ng_container_1_Template, 3, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, WeekViewTimelineComponent_mat_progress_bar_2_Template, 1, 0, "mat-progress-bar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, WeekViewTimelineComponent_view_event_details_4_Template, 2, 3, "view-event-details", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.weekdays);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 3, ctx.loading));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 5, ctx.event));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ui_view_event_details_component__WEBPACK_IMPORTED_MODULE_1__.ViewEventDetailsComponent, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__.MatProgressBar, _week_view_day_component__WEBPACK_IMPORTED_MODULE_2__.WeekViewDayComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n                position: relative;\n                height: 100%;\n                width: 100%;\n                overflow: hidden;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlZWstdmlldy10aW1lbGluZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGtCQUFrQjtnQkFDbEIsWUFBWTtnQkFDWixXQUFXO2dCQUNYLGdCQUFnQjtZQUNwQiIsImZpbGUiOiJ3ZWVrLXZpZXctdGltZWxpbmUuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvd2Vlay12aWV3L3dlZWstdmlldy10aW1lbGluZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGtCQUFrQjtnQkFDbEIsWUFBWTtnQkFDWixXQUFXO2dCQUNYLGdCQUFnQjtZQUNwQjs7QUFFWix3akJBQXdqQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 96622:
/*!************************************************************************!*\
  !*** ./apps/concierge/src/app/week-view/week-view-topbar.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeekViewTopbarComponent: () => (/* binding */ WeekViewTopbarComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 57871);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _day_view_events_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../day-view/events-state.service */ 88288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ui_date_options_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/date-options.component */ 94584);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);


















function WeekViewTopbarComponent_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const level_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", level_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", level_r1.display_name || level_r1.name, " ");
  }
}
class WeekViewTopbarComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
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
    /** Options set for week view */
    this.options = this._state.options;
    /** Set filtered date */
    this.setDate = d => this._state.setDate(d);
    /** Set filtered date */
    this.setWeekends = d => this._state.setUIOptions({
      show_weekends: d
    });
    /**  */
    this.newBooking = d => this._state.newBooking(d);
    /** List of levels for the active building */
    this.updateZones = z => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: {
          zone_ids: z.join(',')
        }
      });
      this._state.setZones(z);
    };
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this._org.initialised.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.first)(_ => _)).toPromise();
      _this.subscription('route.query', _this._route.queryParamMap.subscribe(params => {
        if (params.has('zone_ids')) {
          const zones = params.get('zone_ids').split(',');
          if (zones.length) {
            const level = _this._org.levelWithID(zones);
            _this.zones = zones;
            if (!level) return;
            _this._org.building = _this._org.buildings.find(bld => bld.id === level.parent_id);
          }
        }
      }));
      _this.subscription('levels', _this._org.active_levels.subscribe(levels => {
        _this.zones = _this.zones.filter(zone => levels.find(lvl => lvl.id === zone));
        if (!_this.zones.length && levels.length) {
          _this.zones.push(levels[0].id);
        }
        _this.updateZones(_this.zones);
      }));
    })();
  }
  static #_ = this.ɵfac = function WeekViewTopbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || WeekViewTopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_day_view_events_state_service__WEBPACK_IMPORTED_MODULE_3__.EventsStateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: WeekViewTopbarComponent,
    selectors: [["week-view-topbar"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
    decls: 16,
    vars: 7,
    consts: [["btn", "", "matRipple", "", "new", "", 1, "w-12", "xl:w-auto", 3, "click"], [1, "flex", "items-center"], [1, "mr-2"], [1, "hidden", "xl:block"], ["appearance", "outline"], ["multiple", "", "placeholder", "All Levels", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "m-2", 3, "ngModelChange", "ngModel"], [1, "text-xs"], [1, "flex-1", "w-0"], [3, "dateChange"], [3, "value"]],
    template: function WeekViewTopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WeekViewTopbarComponent_Template_button_click_0_listener() {
          return ctx.newBooking();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1)(2, "app-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "New Booking");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-form-field", 4)(7, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function WeekViewTopbarComponent_Template_mat_select_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.zones, $event) || (ctx.zones = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function WeekViewTopbarComponent_Template_mat_select_ngModelChange_7_listener($event) {
          return ctx.updateZones($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, WeekViewTopbarComponent_mat_option_8_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-slide-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function WeekViewTopbarComponent_Template_mat_slide_toggle_ngModelChange_10_listener($event) {
          return ctx.setWeekends($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Show weekends");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "date-options", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dateChange", function WeekViewTopbarComponent_Template_date_options_dateChange_15_listener($event) {
          return ctx.setDate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.zones);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 3, ctx.levels));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 5, ctx.options)) == null ? null : tmp_2_0.show_weekends);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _ui_date_options_component__WEBPACK_IMPORTED_MODULE_4__.DateOptionsComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__.MatSlideToggle, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_5__.IconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                align-items: center;\n                background-color: var(--b1);\n                height: 5em;\n                padding: 0 1em;\n            }\n\n            button[_ngcontent-%COMP%] {\n                min-width: 0;\n                padding: 0 0.85rem;\n            }\n\n            mat-form-field[_ngcontent-%COMP%] {\n                height: 3.25em;\n                width: 8em;\n                margin-left: 1em;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlZWstdmlldy10b3BiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLG1CQUFtQjtnQkFDbkIsMkJBQTJCO2dCQUMzQixXQUFXO2dCQUNYLGNBQWM7WUFDbEI7O1lBRUE7Z0JBQ0ksWUFBWTtnQkFDWixrQkFBa0I7WUFDdEI7O1lBRUE7Z0JBQ0ksY0FBYztnQkFDZCxVQUFVO2dCQUNWLGdCQUFnQjtZQUNwQiIsImZpbGUiOiJ3ZWVrLXZpZXctdG9wYmFyLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iMSk7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1ZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMC44NXJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWF0LWZvcm0tZmllbGQge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMy4yNWVtO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4ZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvd2Vlay12aWV3L3dlZWstdmlldy10b3BiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLG1CQUFtQjtnQkFDbkIsMkJBQTJCO2dCQUMzQixXQUFXO2dCQUNYLGNBQWM7WUFDbEI7O1lBRUE7Z0JBQ0ksWUFBWTtnQkFDWixrQkFBa0I7WUFDdEI7O1lBRUE7Z0JBQ0ksY0FBYztnQkFDZCxVQUFVO2dCQUNWLGdCQUFnQjtZQUNwQjs7QUFFWiw0akNBQTRqQyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iMSk7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1ZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMC44NXJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWF0LWZvcm0tZmllbGQge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMy4yNWVtO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4ZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 64623:
/*!*****************************************************************!*\
  !*** ./apps/concierge/src/app/week-view/week-view.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeekViewComponent: () => (/* binding */ WeekViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ui_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/sidebar.component */ 74605);
/* harmony import */ var _week_view_topbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./week-view-topbar.component */ 96622);
/* harmony import */ var _week_view_timeline_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./week-view-timeline.component */ 79437);




const _c0 = ["app-weekview", ""];
class WeekViewComponent {
  static #_ = this.ɵfac = function WeekViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || WeekViewComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: WeekViewComponent,
    selectors: [["", "app-weekview", ""]],
    attrs: _c0,
    decls: 4,
    vars: 0,
    consts: [[1, "relative", "overflow-hidden"]],
    template: function WeekViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "week-view-topbar")(3, "week-view-timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_ui_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent, _week_view_topbar_component__WEBPACK_IMPORTED_MODULE_1__.WeekViewTopbarComponent, _week_view_timeline_component__WEBPACK_IMPORTED_MODULE_2__.WeekViewTimelineComponent],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                height: 100%;\n                width: 100%;\n                background: var(--b1);\n            }\n\n            sidebar[_ngcontent-%COMP%] {\n                height: 100%;\n            }\n\n            main[_ngcontent-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                flex: 1;\n                min-width: 50%;\n                height: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlZWstdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGFBQWE7Z0JBQ2IsWUFBWTtnQkFDWixXQUFXO2dCQUNYLHFCQUFxQjtZQUN6Qjs7WUFFQTtnQkFDSSxZQUFZO1lBQ2hCOztZQUVBO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixPQUFPO2dCQUNQLGNBQWM7Z0JBQ2QsWUFBWTtZQUNoQiIsImZpbGUiOiJ3ZWVrLXZpZXcuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYjEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzaWRlYmFyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvd2Vlay12aWV3L3dlZWstdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGFBQWE7Z0JBQ2IsWUFBWTtnQkFDWixXQUFXO2dCQUNYLHFCQUFxQjtZQUN6Qjs7WUFFQTtnQkFDSSxZQUFZO1lBQ2hCOztZQUVBO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixPQUFPO2dCQUNQLGNBQWM7Z0JBQ2QsWUFBWTtZQUNoQjs7QUFFWixnZ0NBQWdnQyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWIxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2lkZWJhciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYWluIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 55118:
/*!**************************************************************!*\
  !*** ./apps/concierge/src/app/week-view/week-view.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeekViewModule: () => (/* binding */ WeekViewModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/ui.module */ 15412);
/* harmony import */ var _placeos_spaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/spaces */ 44855);
/* harmony import */ var _placeos_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/users */ 41489);
/* harmony import */ var _week_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./week-view.component */ 64623);
/* harmony import */ var _week_view_topbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./week-view-topbar.component */ 96622);
/* harmony import */ var _week_view_timeline_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./week-view-timeline.component */ 79437);
/* harmony import */ var _week_view_day_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./week-view-day.component */ 24316);
/* harmony import */ var _week_view_event_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./week-view-event.component */ 19314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);













const ROUTES = [{
  path: '',
  component: _week_view_component__WEBPACK_IMPORTED_MODULE_3__.WeekViewComponent
}, {
  path: 'new',
  component: _week_view_component__WEBPACK_IMPORTED_MODULE_3__.WeekViewComponent
}];
class WeekViewModule {
  static #_ = this.ɵfac = function WeekViewModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || WeekViewModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: WeekViewModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule, _placeos_spaces__WEBPACK_IMPORTED_MODULE_1__.SharedSpacesModule, _placeos_users__WEBPACK_IMPORTED_MODULE_2__.SharedUsersModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(ROUTES)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](WeekViewModule, {
    declarations: [_week_view_component__WEBPACK_IMPORTED_MODULE_3__.WeekViewComponent, _week_view_topbar_component__WEBPACK_IMPORTED_MODULE_4__.WeekViewTopbarComponent, _week_view_timeline_component__WEBPACK_IMPORTED_MODULE_5__.WeekViewTimelineComponent, _week_view_day_component__WEBPACK_IMPORTED_MODULE_6__.WeekViewDayComponent, _week_view_event_component__WEBPACK_IMPORTED_MODULE_7__.WeekViewEventComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule, _placeos_spaces__WEBPACK_IMPORTED_MODULE_1__.SharedSpacesModule, _placeos_users__WEBPACK_IMPORTED_MODULE_2__.SharedUsersModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
  });
})();

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

/***/ })

}]);
//# sourceMappingURL=apps_concierge_src_app_week-view_week-view_module_ts.js.map