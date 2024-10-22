"use strict";
(self["webpackChunkworkplace"] = self["webpackChunkworkplace"] || []).push([["apps_workplace_src_app_new-schedule_schedule_module_ts"],{

/***/ 23897:
/*!*******************************************************************************!*\
  !*** ./apps/workplace/src/app/new-schedule/schedule-filter-card.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScheduleFilterCardComponent: () => (/* binding */ ScheduleFilterCardComponent)
/* harmony export */ });
/* harmony import */ var _schedule_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule-state.service */ 75323);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 15244);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 597);













function ScheduleFilterCardComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ScheduleFilterCardComponent_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.toggleType("event"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 18)(2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "place");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 19)(5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "mat-checkbox", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 3, "WPA.ROOM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 5, "WPA.SCHEDULE_ROOM_FILTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 7, ctx_r1.filters)) == null ? null : tmp_3_0.shown_types == null ? null : tmp_3_0.shown_types.includes("event"));
  }
}
function ScheduleFilterCardComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ScheduleFilterCardComponent_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.toggleType("desk"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 19)(4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "mat-checkbox", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 3, "WPA.DESK"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 5, "WPA.SCHEDULE_DESK_FILTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 7, ctx_r1.filters)) == null ? null : tmp_3_0.shown_types == null ? null : tmp_3_0.shown_types.includes("desk"));
  }
}
function ScheduleFilterCardComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ScheduleFilterCardComponent_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.toggleType("parking"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 18)(2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "drive_eta");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 19)(5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "mat-checkbox", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 3, "WPA.PARKING"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 5, "WPA.SCHEDULE_PARKING_FILTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 7, ctx_r1.filters)) == null ? null : tmp_3_0.shown_types == null ? null : tmp_3_0.shown_types.includes("parking"));
  }
}
function ScheduleFilterCardComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ScheduleFilterCardComponent_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.toggleType("visitor"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 18)(2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 19)(5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](6, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](9, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "mat-checkbox", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 3, "WPA.VISITORS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nApply"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 5, "WPA.SCHEDULE_VISITOR_FILTER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nApply"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 7, ctx_r1.filters)) == null ? null : tmp_5_0.shown_types == null ? null : tmp_5_0.shown_types.includes("visitor"));
  }
}
function ScheduleFilterCardComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ScheduleFilterCardComponent_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.toggleType("locker"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 18)(2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "door_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 19)(5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](6, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](9, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "mat-checkbox", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 3, "WPA.LOCKERS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nApply"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 5, "WPA.SCHEDULE_LOCKER_FILTER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nApply"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 7, ctx_r1.filters)) == null ? null : tmp_5_0.shown_types == null ? null : tmp_5_0.shown_types.includes("locker"));
  }
}
function ScheduleFilterCardComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ScheduleFilterCardComponent_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.toggleType("group-event"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 18)(2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "door_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 19)(5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](6, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](9, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "mat-checkbox", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 3, "WPA.GROUP_EVENT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nApply"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 5, "WPA.SCHEDULE_GROUP_EVENT_FILTER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18nApply"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 7, ctx_r1.filters)) == null ? null : tmp_5_0.shown_types == null ? null : tmp_5_0.shown_types.includes("group-event"));
  }
}
class ScheduleFilterCardComponent {
  hasFeature(feature) {
    return this._settings.get('app.features')?.includes(feature);
  }
  constructor(_state, _settings, _sheet_ref) {
    this._state = _state;
    this._settings = _settings;
    this._sheet_ref = _sheet_ref;
    this.filters = this._state.filters;
    this.toggleType = t => this._state.toggleType(t);
    this.dismiss = () => this._sheet_ref.dismiss();
  }
  static #_ = this.ɵfac = function ScheduleFilterCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ScheduleFilterCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_schedule_state_service__WEBPACK_IMPORTED_MODULE_0__.ScheduleStateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__.MatBottomSheetRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ScheduleFilterCardComponent,
    selectors: [["schedule-filter-card"]],
    decls: 19,
    vars: 12,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_939697261836969798$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_FILTER_CARD_COMPONENT_TS_0 = goog.getMsg(" {$interpolation} ", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{ 'WPA.VISITORS' | translate }}"
          }
        });
        i18n_0 = MSG_EXTERNAL_939697261836969798$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_FILTER_CARD_COMPONENT_TS_0;
      } else {
        i18n_0 = $localize`:␟9fcb038849eab8d830223dd228152df6054cf4aa␟939697261836969798: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5206845892282891167$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_FILTER_CARD_COMPONENT_TS_1 = goog.getMsg(" {$interpolation} ", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{ 'WPA.SCHEDULE_VISITOR_FILTER' | translate }}"
          }
        });
        i18n_1 = MSG_EXTERNAL_5206845892282891167$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_FILTER_CARD_COMPONENT_TS_1;
      } else {
        i18n_1 = $localize`:␟8623e29e5a6b1d4fafbe137daaaa530d7b981170␟5206845892282891167: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1641774232295752417$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_FILTER_CARD_COMPONENT_TS_2 = goog.getMsg(" {$interpolation} ", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{ 'WPA.LOCKERS' | translate }}"
          }
        });
        i18n_2 = MSG_EXTERNAL_1641774232295752417$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_FILTER_CARD_COMPONENT_TS_2;
      } else {
        i18n_2 = $localize`:␟bdc83ff78fa7b20c0a6da999cd8be30049ffb968␟1641774232295752417: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8446653337428936370$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_FILTER_CARD_COMPONENT_TS_3 = goog.getMsg(" {$interpolation} ", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{ 'WPA.SCHEDULE_LOCKER_FILTER' | translate }}"
          }
        });
        i18n_3 = MSG_EXTERNAL_8446653337428936370$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_FILTER_CARD_COMPONENT_TS_3;
      } else {
        i18n_3 = $localize`:␟79586ebafc0539512135209e7a859ebdbd0c3d92␟8446653337428936370: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8612736343132991713$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_FILTER_CARD_COMPONENT_TS_4 = goog.getMsg(" {$interpolation} ", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{ 'WPA.GROUP_EVENT' | translate }}"
          }
        });
        i18n_4 = MSG_EXTERNAL_8612736343132991713$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_FILTER_CARD_COMPONENT_TS_4;
      } else {
        i18n_4 = $localize`:␟393f0f5ecbcef157e087a7fdb7d97607f1d6a684␟8612736343132991713: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
      }
      let i18n_5;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7608261914493025487$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_FILTER_CARD_COMPONENT_TS_5 = goog.getMsg(" {$interpolation} ", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{ 'WPA.SCHEDULE_GROUP_EVENT_FILTER' | translate }}"
          }
        });
        i18n_5 = MSG_EXTERNAL_7608261914493025487$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_FILTER_CARD_COMPONENT_TS_5;
      } else {
        i18n_5 = $localize`:␟fcb042bec7d0cb7c7f6f9fba759557f32c63fd3a␟7608261914493025487: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
      }
      return [i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, [1, "flex", "items-center", "border-b", "border-base-200", "space-x-2", "mb-4", "text-xl"], ["icon", "", "matRipple", "", 3, "click"], [1, "flex-1", "w-1/2", "text-center"], [1, "space-y-4", "border-b", "border-base-200", "mb-4", "pb-4", "px-2"], ["matRipple", "", "name", "schedule-toggle-event-filter", "class", "flex items-center space-x-2 w-full text-left", 3, "click", 4, "ngIf"], ["matRipple", "", "name", "schedule-toggle-desk-filter", "class", "flex items-center space-x-2 w-full text-left", 3, "click", 4, "ngIf"], ["matRipple", "", "name", "schedule-toggle-parking-filter", "class", "flex items-center space-x-2 w-full text-left", 3, "click", 4, "ngIf"], ["matRipple", "", "name", "schedule-toggle-visitor-filter", "class", "flex items-center space-x-2 w-full text-left", 3, "click", 4, "ngIf"], ["matRipple", "", "name", "schedule-toggle-locker-filter", "class", "flex items-center space-x-2 w-full text-left", 3, "click", 4, "ngIf"], [1, "px-2", "pb-2"], ["btn", "", "matRipple", "", "name", "schedule-apply-filter", 1, "w-full", 3, "click"], ["matRipple", "", "name", "schedule-toggle-event-filter", 1, "flex", "items-center", "space-x-2", "w-full", "text-left", 3, "click"], [1, "h-10", "w-10", "rounded-full", "flex", "items-center", "justify-center", "bg-base-200", "text-2xl"], [1, "flex-1"], [1, ""], [1, "text-sm", "opacity-60"], [3, "ngModel"], ["matRipple", "", "name", "schedule-toggle-desk-filter", 1, "flex", "items-center", "space-x-2", "w-full", "text-left", 3, "click"], ["src", "assets/icons/desk-outline.svg", 1, "w-6"], ["matRipple", "", "name", "schedule-toggle-parking-filter", 1, "flex", "items-center", "space-x-2", "w-full", "text-left", 3, "click"], ["matRipple", "", "name", "schedule-toggle-visitor-filter", 1, "flex", "items-center", "space-x-2", "w-full", "text-left", 3, "click"], ["matRipple", "", "name", "schedule-toggle-locker-filter", 1, "flex", "items-center", "space-x-2", "w-full", "text-left", 3, "click"]];
    },
    template: function ScheduleFilterCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6)(1, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ScheduleFilterCardComponent_Template_button_click_1_listener() {
          return ctx.dismiss();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "chevron_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ScheduleFilterCardComponent_button_9_Template, 13, 9, "button", 10)(10, ScheduleFilterCardComponent_button_10_Template, 12, 9, "button", 11)(11, ScheduleFilterCardComponent_button_11_Template, 13, 9, "button", 12)(12, ScheduleFilterCardComponent_button_12_Template, 13, 9, "button", 13)(13, ScheduleFilterCardComponent_button_13_Template, 13, 9, "button", 14)(14, ScheduleFilterCardComponent_button_14_Template, 13, 9, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 15)(16, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ScheduleFilterCardComponent_Template_button_click_16_listener() {
          return ctx.dismiss();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 8, "WPA.BOOKING_TYPES"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hasFeature("spaces"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hasFeature("desks"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hasFeature("parking"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hasFeature("visitor-invite"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hasFeature("lockers"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hasFeature("group-events"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 10, "WPA.FILTERS_APPLY"), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatRipple, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
    styles: ["mat-checkbox[_ngcontent-%COMP%] {\n                pointer-events: none;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVkdWxlLWZpbHRlci1jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksb0JBQW9CO1lBQ3hCIiwiZmlsZSI6InNjaGVkdWxlLWZpbHRlci1jYXJkLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgbWF0LWNoZWNrYm94IHtcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd29ya3BsYWNlL3NyYy9hcHAvbmV3LXNjaGVkdWxlL3NjaGVkdWxlLWZpbHRlci1jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksb0JBQW9CO1lBQ3hCOztBQUVaLHdaQUF3WiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgbWF0LWNoZWNrYm94IHtcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 22401:
/*!***************************************************************************!*\
  !*** ./apps/workplace/src/app/new-schedule/schedule-filters.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScheduleFiltersComponent: () => (/* binding */ ScheduleFiltersComponent)
/* harmony export */ });
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _schedule_filter_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule-filter-card.component */ 23897);
/* harmony import */ var _schedule_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule-state.service */ 75323);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 15244);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 597);












function ScheduleFiltersComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScheduleFiltersComponent_div_5_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.toggleType("event", true));
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
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScheduleFiltersComponent_div_7_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.toggleType("desk", true));
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
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScheduleFiltersComponent_div_9_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.toggleType("parking", true));
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
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScheduleFiltersComponent_div_11_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.toggleType("visitor", true));
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
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScheduleFiltersComponent_div_13_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.toggleType("locker", true));
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
function ScheduleFiltersComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScheduleFiltersComponent_div_15_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.toggleType("group-event", true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "WPA.GROUP_EVENT"));
  }
}
function ScheduleFiltersComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScheduleFiltersComponent_div_22_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.toggleType("event", true));
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
function ScheduleFiltersComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScheduleFiltersComponent_div_24_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.toggleType("desk", true));
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
function ScheduleFiltersComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScheduleFiltersComponent_div_26_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.toggleType("parking", true));
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
function ScheduleFiltersComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScheduleFiltersComponent_div_28_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.toggleType("visitor", true));
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
function ScheduleFiltersComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScheduleFiltersComponent_div_30_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.toggleType("locker", true));
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
function ScheduleFiltersComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScheduleFiltersComponent_div_32_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.toggleType("group-event", true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "WPA.GROUP_EVENTS"));
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
  static #_ = this.ɵfac = function ScheduleFiltersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ScheduleFiltersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__.MatBottomSheet), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_schedule_state_service__WEBPACK_IMPORTED_MODULE_2__.ScheduleStateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ScheduleFiltersComponent,
    selectors: [["schedule-filters"]],
    decls: 34,
    vars: 39,
    consts: [[1, "hidden", "sm:block", "bg-base-100", "border", "border-base-200", "rounded", "p-2"], [1, "font-medium", "mb-2"], [1, "flex", "flex-wrap", "space-x-2"], ["class", "flex items-center rounded-3xl border border-base-200", 4, "ngIf"], [1, "sm:hidden", "flex", "items-center", "space-x-2", "overflow-auto"], ["btn", "", "matRipple", "", "name", "schedule-open-filter-edit", 1, "min-w-12", "sm:w-24", 3, "click"], [1, "flex", "items-center", "justify-center", "space-x-2"], [1, "text-xl"], ["class", "flex items-center rounded-3xl border border-base-200 bg-base-100 text-sm pl-2", 4, "ngIf"], [1, "flex", "items-center", "rounded-3xl", "border", "border-base-200"], [1, "px-2"], ["icon", "", "name", "schedule-remove-event-filter", 3, "click"], ["icon", "", "name", "schedule-remove-desk-filter", 3, "click"], ["icon", "", "matRipple", "", "name", "schedule-remove-parking-filter", 3, "click"], ["icon", "", "matRipple", "", "name", "schedule-remove-visitor-filter", 3, "click"], ["icon", "", "matRipple", "", "name", "schedule-remove-locker-filter", 3, "click"], [1, "flex", "items-center", "rounded-3xl", "border", "border-base-200", "bg-base-100", "text-sm", "pl-2"], ["icon", "", "name", "schedule-remove-event-filter-mobile", 3, "click"], ["icon", "", "name", "schedule-remove-desk-filter-mobile", 3, "click"], ["icon", "", "name", "schedule-remove-parking-filter-mobile", 3, "click"], ["icon", "", "name", "schedule-remove-visitor-filter-mobile", 3, "click"], ["icon", "", "name", "schedule-remove-locker-filter-mobile", 3, "click"]],
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, ScheduleFiltersComponent_div_15_Template, 7, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 4)(18, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScheduleFiltersComponent_Template_button_click_18_listener() {
          return ctx.openFilters();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 6)(20, "app-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "filter_list");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, ScheduleFiltersComponent_div_22_Template, 7, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, ScheduleFiltersComponent_div_24_Template, 7, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](25, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, ScheduleFiltersComponent_div_26_Template, 7, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](27, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, ScheduleFiltersComponent_div_28_Template, 7, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](29, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, ScheduleFiltersComponent_div_30_Template, 7, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](31, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, ScheduleFiltersComponent_div_32_Template, 7, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](33, "async");
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
        let tmp_11_0;
        let tmp_12_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 13, "WPA.SCHEDULE_CAT_FILTERS"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 15, ctx.filters)) == null ? null : tmp_1_0.shown_types == null ? null : tmp_1_0.shown_types.includes("event"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 17, ctx.filters)) == null ? null : tmp_2_0.shown_types == null ? null : tmp_2_0.shown_types.includes("desk")) && ctx.hasFeature("desks"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 19, ctx.filters)) == null ? null : tmp_3_0.shown_types == null ? null : tmp_3_0.shown_types.includes("parking")) && ctx.hasFeature("parking"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 21, ctx.filters)) == null ? null : tmp_4_0.shown_types == null ? null : tmp_4_0.shown_types.includes("visitor")) && ctx.hasFeature("visitor-invite"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 23, ctx.filters)) == null ? null : tmp_5_0.shown_types == null ? null : tmp_5_0.shown_types.includes("locker")) && ctx.hasFeature("lockers"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 25, ctx.filters)) == null ? null : tmp_6_0.shown_types == null ? null : tmp_6_0.shown_types.includes("group-evnet")) && ctx.hasFeature("group-events"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 27, ctx.filters)) == null ? null : tmp_7_0.shown_types == null ? null : tmp_7_0.shown_types.includes("event"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](25, 29, ctx.filters)) == null ? null : tmp_8_0.shown_types == null ? null : tmp_8_0.shown_types.includes("desk")) && ctx.hasFeature("desks"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](27, 31, ctx.filters)) == null ? null : tmp_9_0.shown_types == null ? null : tmp_9_0.shown_types.includes("parking")) && ctx.hasFeature("parking"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](29, 33, ctx.filters)) == null ? null : tmp_10_0.shown_types == null ? null : tmp_10_0.shown_types.includes("visitor")) && ctx.hasFeature("visitor-invite"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_11_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](31, 35, ctx.filters)) == null ? null : tmp_11_0.shown_types == null ? null : tmp_11_0.shown_types.includes("locker")) && ctx.hasFeature("lockers"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_12_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](33, 37, ctx.filters)) == null ? null : tmp_12_0.shown_types == null ? null : tmp_12_0.shown_types.includes("group-event")) && ctx.hasFeature("group-events"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe]
  });
}

/***/ }),

/***/ 97221:
/*!***********************************************************************************!*\
  !*** ./apps/workplace/src/app/new-schedule/schedule-mobile-calendar.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScheduleMobileCalendarComponent: () => (/* binding */ ScheduleMobileCalendarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 33240);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 36337);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 90610);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 60452);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 55882);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 79681);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 31257);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 28797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 74646);







function ScheduleMobileCalendarComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const day_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, day_r1.id, "EE"), " ");
  }
}
function ScheduleMobileCalendarComponent_button_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 11);
  }
}
function ScheduleMobileCalendarComponent_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScheduleMobileCalendarComponent_button_18_Template_button_click_0_listener() {
      const day_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.setValue(day_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ScheduleMobileCalendarComponent_button_18_div_1_Template, 1, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const day_r3 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("text-opacity-30", !day_r3.is_month)("text-white", day_r3.id === ctx_r3.active_date)("text-black", day_r3.id !== ctx_r3.active_date)("bg-primary", day_r3.id === ctx_r3.active_date)("font-normal", day_r3.id !== ctx_r3.active_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", day_r3.is_today);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 12, day_r3.id, "d"), " ");
  }
}
class ScheduleMobileCalendarComponent {
  constructor() {
    this.active_date = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.startOfDay)(Date.now()).valueOf();
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
    this.active_date = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.startOfDay)(new_value).valueOf();
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
    this.active_date = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.startOfDay)(value).valueOf();
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
    const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.addMonths)(this.active_date, this.offset);
    let start = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.startOfWeek)((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.startOfMonth)(date));
    const now = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.startOfDay)(Date.now());
    let list = [];
    while (list.length < 7 * 6) {
      list.push({
        id: start.valueOf(),
        is_past: (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.isBefore)(start, now),
        is_month: (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.isSameMonth)(start, date),
        is_today: (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.isSameDay)(Date.now(), start)
      });
      start = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.addDays)(start, 1);
    }
    this.date_list = list;
    start = this.offset === 0 ? (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.startOfWeek)(date) : (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.startOfWeek)((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.startOfMonth)(date));
    list = [];
    while (list.length < 7) {
      list.push({
        id: start.valueOf(),
        is_past: (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.isBefore)(start, now),
        is_month: (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.isSameMonth)(start, date),
        is_today: (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.isSameDay)(Date.now(), start)
      });
      start = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.addDays)(start, 1);
    }
    this.short_list = list;
  }
  static #_ = this.ɵfac = function ScheduleMobileCalendarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ScheduleMobileCalendarComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ScheduleMobileCalendarComponent,
    selectors: [["schedule-mobile-calendar"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NG_VALUE_ACCESSOR,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => ScheduleMobileCalendarComponent),
      multi: true
    }])],
    decls: 19,
    vars: 10,
    consts: [[1, "p-2"], [1, "flex", "items-center", "justify-between"], ["btn", "", "matRipple", "", 1, "clear", "font-medium", 3, "click"], [1, "flex", "items-center"], ["icon", "", "matRipple", "", 3, "click"], [1, "grid", "grid-cols-7", "gap-2", "mb-2"], ["class", "opacity-60 text-center w-10 mx-2", 4, "ngFor", "ngForOf"], ["icon", "", "matRipple", "", "class", "min-w-[calc(14%-1rem)] flex-1 mx-2 h-9 overflow-visible", 3, "text-opacity-30", "text-white", "text-black", "bg-primary", "font-normal", "click", 4, "ngFor", "ngForOf"], [1, "opacity-60", "text-center", "w-10", "mx-2"], ["icon", "", "matRipple", "", 1, "min-w-[calc(14%-1rem)]", "flex-1", "mx-2", "h-9", "overflow-visible", 3, "click"], ["class", "absolute -inset-0.5 border border-primary rounded-full", 4, "ngIf"], [1, "absolute", "-inset-0.5", "border", "border-primary", "rounded-full"]],
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ScheduleMobileCalendarComponent_button_18_Template, 4, 15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 3, (ctx.date_list[6] == null ? null : ctx.date_list[6].id) || ctx.active_date, "LLLL YYYY"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](17, 6, ctx.date_list, 0, 7));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.list);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_0__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_11__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe]
  });
}

/***/ }),

/***/ 22578:
/*!***************************************************************************!*\
  !*** ./apps/workplace/src/app/new-schedule/schedule-sidebar.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScheduleSidebarComponent: () => (/* binding */ ScheduleSidebarComponent)
/* harmony export */ });
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _schedule_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule-state.service */ 75323);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 33240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _libs_form_fields_src_lib_date_calendar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/date-calendar.component */ 89058);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 597);



















function ScheduleSidebarComponent_date_calendar_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "date-calendar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ScheduleSidebarComponent_date_calendar_6_Template_date_calendar_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.setDate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 2, ctx_r1.date))("offset_weekday", ctx_r1.offset_weekday);
  }
}
function ScheduleSidebarComponent_div_7_mat_option_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "(C)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ScheduleSidebarComponent_div_7_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ScheduleSidebarComponent_div_7_mat_option_4_span_2_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", option_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", option_r4.this_week);
  }
}
function ScheduleSidebarComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20)(1, "mat-form-field", 21)(2, "mat-select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ScheduleSidebarComponent_div_7_Template_mat_select_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.setDate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ScheduleSidebarComponent_div_7_mat_option_4_Template, 3, 3, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, ctx_r1.week_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 4, ctx_r1.week_options));
  }
}
function ScheduleSidebarComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ScheduleSidebarComponent_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.toggleType("event"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 28)(2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "place");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 29)(5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "mat-checkbox", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 3, "WPA.ROOM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 5, "WPA.SCHEDULE_ROOM_FILTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 7, ctx_r1.filters)) == null ? null : tmp_3_0.shown_types == null ? null : tmp_3_0.shown_types.includes("event"));
  }
}
function ScheduleSidebarComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ScheduleSidebarComponent_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.toggleType("desk"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 29)(4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "mat-checkbox", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 3, "WPA.DESK"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 5, "WPA.SCHEDULE_DESK_FILTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 7, ctx_r1.filters)) == null ? null : tmp_3_0.shown_types == null ? null : tmp_3_0.shown_types.includes("desk"));
  }
}
function ScheduleSidebarComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ScheduleSidebarComponent_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.toggleType("parking"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 28)(2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "drive_eta");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 29)(5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "mat-checkbox", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 3, "WPA.PARKING"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 5, "WPA.SCHEDULE_PARKING_FILTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 7, ctx_r1.filters)) == null ? null : tmp_3_0.shown_types == null ? null : tmp_3_0.shown_types.includes("parking"));
  }
}
function ScheduleSidebarComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ScheduleSidebarComponent_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.toggleType("visitor"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 28)(2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 29)(5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](6, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](9, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "mat-checkbox", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 3, "WPA.VISITORS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nApply"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 5, "WPA.SCHEDULE_VISITOR_FILTER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nApply"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 7, ctx_r1.filters)) == null ? null : tmp_5_0.shown_types == null ? null : tmp_5_0.shown_types.includes("visitor"));
  }
}
function ScheduleSidebarComponent_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ScheduleSidebarComponent_button_15_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.toggleType("locker"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 28)(2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "door_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 29)(5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](6, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](9, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "mat-checkbox", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 3, "WPA.LOCKERS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nApply"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 5, "WPA.SCHEDULE_LOCKER_FILTER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nApply"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 7, ctx_r1.filters)) == null ? null : tmp_5_0.shown_types == null ? null : tmp_5_0.shown_types.includes("locker"));
  }
}
function ScheduleSidebarComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ScheduleSidebarComponent_button_16_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.toggleType("group-event"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 28)(2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "door_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 29)(5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](6, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](9, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "mat-checkbox", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 3, "WPA.GROUP_EVENT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nApply"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 5, "WPA.SCHEDULE_GROUP_EVENT_FILTER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nApply"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 7, ctx_r1.filters)) == null ? null : tmp_5_0.shown_types == null ? null : tmp_5_0.shown_types.includes("group-event"));
  }
}
class ScheduleSidebarComponent {
  get period() {
    return this._state.getOptions().period;
  }
  setOptions(options) {
    this._state.setOptions(options);
  }
  hasFeature(feature) {
    return this._settings.get('app.features')?.includes(feature);
  }
  get offset_weekday() {
    return this._settings.get('app.week_start') || 0;
  }
  constructor(_org, _state, _settings) {
    this._org = _org;
    this._state = _state;
    this._settings = _settings;
    this.filters = this._state.filters;
    this.date = this._state.date.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(_ => (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.startOfDay)(_)));
    this.toggleType = t => this._state.toggleType(t);
    this.setDate = d => this._state.setDate(d);
    this.week_date = this._state.week_date;
    this.week_options = this._state.week_options;
  }
  static #_ = this.ɵfac = function ScheduleSidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ScheduleSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_schedule_state_service__WEBPACK_IMPORTED_MODULE_1__.ScheduleStateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ScheduleSidebarComponent,
    selectors: [["schedule-sidebar"]],
    decls: 17,
    vars: 12,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4163272119298020373$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_SIDEBAR_COMPONENT_TS_0 = goog.getMsg("Filters");
        i18n_0 = MSG_EXTERNAL_4163272119298020373$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_SIDEBAR_COMPONENT_TS_0;
      } else {
        i18n_0 = $localize`:␟1298c1d2bbbb7415f5494e800f6775fdb70f4df6␟4163272119298020373:Filters`;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1215297419226013896$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_SIDEBAR_COMPONENT_TS_1 = goog.getMsg(" {$interpolation} ", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{ 'WPA.VISITORS' | translate }}"
          }
        });
        i18n_1 = MSG_EXTERNAL_1215297419226013896$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_SIDEBAR_COMPONENT_TS_1;
      } else {
        i18n_1 = $localize`:␟59151f596eb603224ad9b858fdf5e3e6dfb3a4dc␟1215297419226013896: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5823422811675104879$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_SIDEBAR_COMPONENT_TS_2 = goog.getMsg(" {$interpolation} ", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{ 'WPA.SCHEDULE_VISITOR_FILTER' | translate }}"
          }
        });
        i18n_2 = MSG_EXTERNAL_5823422811675104879$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_SIDEBAR_COMPONENT_TS_2;
      } else {
        i18n_2 = $localize`:␟6c8f5c27706957b7df521a06b88ba1df1f7a31e9␟5823422811675104879: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2481958659371886477$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_SIDEBAR_COMPONENT_TS_3 = goog.getMsg(" {$interpolation} ", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{ 'WPA.LOCKERS' | translate }}"
          }
        });
        i18n_3 = MSG_EXTERNAL_2481958659371886477$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_SIDEBAR_COMPONENT_TS_3;
      } else {
        i18n_3 = $localize`:␟613617f03056b686e8959e951f278e3518947bd7␟2481958659371886477: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8248636682633599470$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_SIDEBAR_COMPONENT_TS_4 = goog.getMsg(" {$interpolation} ", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{ 'WPA.SCHEDULE_LOCKER_FILTER' | translate }}"
          }
        });
        i18n_4 = MSG_EXTERNAL_8248636682633599470$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_SIDEBAR_COMPONENT_TS_4;
      } else {
        i18n_4 = $localize`:␟6a370310350e3781c551d62b37abc16c1515a657␟8248636682633599470: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
      }
      let i18n_5;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2082215832043440591$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_SIDEBAR_COMPONENT_TS_5 = goog.getMsg(" {$interpolation} ", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{ 'WPA.GROUP_EVENT' | translate }}"
          }
        });
        i18n_5 = MSG_EXTERNAL_2082215832043440591$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_SIDEBAR_COMPONENT_TS_5;
      } else {
        i18n_5 = $localize`:␟8e8a186e6f6bf074d0c8cd68ecf385cb3b46fba4␟2082215832043440591: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7788094696937337857$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_SIDEBAR_COMPONENT_TS_6 = goog.getMsg(" {$interpolation} ", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{ 'WPA.SCHEDULE_GROUP_EVENT_FILTER' | translate }}"
          }
        });
        i18n_6 = MSG_EXTERNAL_7788094696937337857$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_SIDEBAR_COMPONENT_TS_6;
      } else {
        i18n_6 = $localize`:␟c0572e59dd4e3290349c620fe79926580977d70d␟7788094696937337857: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
      }
      return [i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, i18n_6, [1, "flex", "flex-col", "w-[18rem]", "h-full", "overflow-hidden", "bg-base-100[#1F2021]", "border-r", "border-base-200"], [1, "flex", "items-center", "space-x-4", "p-4"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "click"], ["class", "border-b border-base-200", 3, "ngModel", "offset_weekday", "ngModelChange", 4, "ngIf"], ["class", "px-4 w-full", 4, "ngIf"], [1, "mx-4", "mt-4", "font-medium"], [1, "p-4", "space-y-4", "flex-1", "h-1/2", "overflow-auto"], ["matRipple", "", "name", "schedule-toggle-event-filter", "class", "flex items-center space-x-2 w-full text-left", 3, "click", 4, "ngIf"], ["matRipple", "", "name", "schedule-toggle-desk-filter", "class", "flex items-center space-x-2 w-full text-left", 3, "click", 4, "ngIf"], ["matRipple", "", "name", "schedule-toggle-parking-filter", "class", "flex items-center space-x-2 w-full text-left", 3, "click", 4, "ngIf"], ["matRipple", "", "name", "schedule-toggle-visitor-filter", "class", "flex items-center space-x-2 w-full text-left", 3, "click", 4, "ngIf"], ["matRipple", "", "name", "schedule-toggle-locker-filter", "class", "flex items-center space-x-2 w-full text-left", 3, "click", 4, "ngIf"], [1, "border-b", "border-base-200", 3, "ngModelChange", "ngModel", "offset_weekday"], [1, "px-4", "w-full"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["placeholder", "Select Week...", 3, "ngModelChange", "ngModel"], ["class", "leading-tight", 3, "value", 4, "ngFor", "ngForOf"], [1, "leading-tight", 3, "value"], ["class", "text-xs text-info px-1", "matTooltip", "This Week", 4, "ngIf"], ["matTooltip", "This Week", 1, "text-xs", "text-info", "px-1"], ["matRipple", "", "name", "schedule-toggle-event-filter", 1, "flex", "items-center", "space-x-2", "w-full", "text-left", 3, "click"], [1, "h-10", "w-10", "rounded-full", "flex", "items-center", "justify-center", "bg-base-200", "text-2xl"], [1, "flex-1"], [1, ""], [1, "text-sm", "opacity-60"], [3, "ngModel"], ["matRipple", "", "name", "schedule-toggle-desk-filter", 1, "flex", "items-center", "space-x-2", "w-full", "text-left", 3, "click"], ["src", "assets/icons/desk-outline.svg", 1, "w-6"], ["matRipple", "", "name", "schedule-toggle-parking-filter", 1, "flex", "items-center", "space-x-2", "w-full", "text-left", 3, "click"], ["matRipple", "", "name", "schedule-toggle-visitor-filter", 1, "flex", "items-center", "space-x-2", "w-full", "text-left", 3, "click"], ["matRipple", "", "name", "schedule-toggle-locker-filter", 1, "flex", "items-center", "space-x-2", "w-full", "text-left", 3, "click"]];
    },
    template: function ScheduleSidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ScheduleSidebarComponent_Template_button_click_2_listener() {
          return ctx.setOptions({
            period: "day"
          });
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Day ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ScheduleSidebarComponent_Template_button_click_4_listener() {
          return ctx.setOptions({
            period: "week"
          });
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Week ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ScheduleSidebarComponent_date_calendar_6_Template, 2, 4, "date-calendar", 10)(7, ScheduleSidebarComponent_div_7_Template, 6, 6, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](9, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, ScheduleSidebarComponent_button_11_Template, 13, 9, "button", 14)(12, ScheduleSidebarComponent_button_12_Template, 12, 9, "button", 15)(13, ScheduleSidebarComponent_button_13_Template, 13, 9, "button", 16)(14, ScheduleSidebarComponent_button_14_Template, 13, 9, "button", 17)(15, ScheduleSidebarComponent_button_15_Template, 13, 9, "button", 18)(16, ScheduleSidebarComponent_button_16_Template, 13, 9, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("inverse", ctx.period !== "day");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("inverse", ctx.period !== "week");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.period === "day");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.period === "week");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hasFeature("spaces"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hasFeature("desks"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hasFeature("parking"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hasFeature("visitor-invite"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hasFeature("lockers"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hasFeature("group-events"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatRipple, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltip, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckbox, _libs_form_fields_src_lib_date_calendar_component__WEBPACK_IMPORTED_MODULE_4__.DateCalendarComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe],
    styles: ["mat-checkbox[_ngcontent-%COMP%] {\n                pointer-events: none;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVkdWxlLXNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxvQkFBb0I7WUFDeEIiLCJmaWxlIjoic2NoZWR1bGUtc2lkZWJhci5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIG1hdC1jaGVja2JveCB7XG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd29ya3BsYWNlL3NyYy9hcHAvbmV3LXNjaGVkdWxlL3NjaGVkdWxlLXNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxvQkFBb0I7WUFDeEI7O0FBRVosZ1pBQWdaIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICBtYXQtY2hlY2tib3gge1xuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 34039:
/*!*******************************************************************!*\
  !*** ./apps/workplace/src/app/new-schedule/schedule.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScheduleComponent: () => (/* binding */ ScheduleComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/bookings */ 85616);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/events */ 40569);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns */ 45726);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! date-fns */ 41192);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! date-fns */ 31257);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var _schedule_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schedule-state.service */ 75323);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _components_topbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/topbar.component */ 17434);
/* harmony import */ var _components_footer_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/footer-menu.component */ 10895);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _libs_events_src_lib_event_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/events/src/lib/event-card.component */ 21765);
/* harmony import */ var _libs_bookings_src_lib_booking_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/bookings/src/lib/booking-card.component */ 27547);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-bar */ 26354);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _schedule_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./schedule-sidebar.component */ 22578);
/* harmony import */ var _schedule_filters_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./schedule-filters.component */ 22401);
/* harmony import */ var _schedule_mobile_calendar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./schedule-mobile-calendar.component */ 97221);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-translate/core */ 597);
































function ScheduleComponent_topbar_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "topbar");
  }
}
function ScheduleComponent_schedule_mobile_calendar_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "schedule-mobile-calendar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function ScheduleComponent_schedule_mobile_calendar_9_Template_schedule_mobile_calendar_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.setDate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 1, ctx_r2.date));
  }
}
function ScheduleComponent_div_10_mat_option_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "(C)");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function ScheduleComponent_div_10_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, ScheduleComponent_div_10_mat_option_4_span_2_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", option_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", option_r5.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", option_r5.this_week);
  }
}
function ScheduleComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14)(1, "mat-form-field", 15)(2, "mat-select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function ScheduleComponent_div_10_Template_mat_select_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.setDate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, ScheduleComponent_div_10_mat_option_4_Template, 3, 3, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 2, ctx_r2.week_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 4, ctx_r2.week_options));
  }
}
function ScheduleComponent_ng_container_13_ng_container_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "COMMON.TODAY"), ")");
  }
}
function ScheduleComponent_ng_container_13_ng_container_1_ng_container_5_event_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "event-card", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("edit", function ScheduleComponent_ng_container_13_ng_container_1_ng_container_5_event_card_1_Template_event_card_edit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6);
      const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.edit(item_r7));
    })("remove", function ScheduleComponent_ng_container_13_ng_container_1_ng_container_5_event_card_1_Template_event_card_remove_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6);
      const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.remove(item_r7, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("event", item_r7);
  }
}
function ScheduleComponent_ng_container_13_ng_container_1_ng_container_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "booking-card", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("edit", function ScheduleComponent_ng_container_13_ng_container_1_ng_container_5_ng_template_2_Template_booking_card_edit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8);
      const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.editBooking(item_r7));
    })("remove", function ScheduleComponent_ng_container_13_ng_container_1_ng_container_5_ng_template_2_Template_booking_card_remove_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8);
      const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.remove(item_r7, $event));
    })("end", function ScheduleComponent_ng_container_13_ng_container_1_ng_container_5_ng_template_2_Template_booking_card_end_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8);
      const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.end(item_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("booking", item_r7);
  }
}
function ScheduleComponent_ng_container_13_ng_container_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ScheduleComponent_ng_container_13_ng_container_1_ng_container_5_event_card_1_Template, 1, 1, "event-card", 24)(2, ScheduleComponent_ng_container_13_ng_container_1_ng_container_5_ng_template_2_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const booking_card_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.isEvent(item_r7))("ngIfElse", booking_card_r9);
  }
}
function ScheduleComponent_ng_container_13_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "h3", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, ScheduleComponent_ng_container_13_ng_container_1_span_4_Template, 3, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, ScheduleComponent_ng_container_13_ng_container_1_ng_container_5_Template, 4, 2, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const date_block_r10 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](3, 4, date_block_r10.date, "EEE dd LLL yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", date_block_r10.is_today);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", date_block_r10.bookings)("ngForTrackBy", ctx_r2.trackByFn);
  }
}
function ScheduleComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ScheduleComponent_ng_container_13_ng_container_1_Template, 6, 7, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, ctx_r2.booking_dates));
  }
}
function ScheduleComponent_mat_progress_bar_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "mat-progress-bar", 27);
  }
}
function ScheduleComponent_footer_menu_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "footer-menu");
  }
}
function ScheduleComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 2, "WPA.SCHEDULE_EMPTY"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](6, 6, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 4, ctx_r2.date), "EEEE, dd LLL yyyy"), " ");
  }
}
class ScheduleComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_2__.AsyncHandler {
  get period() {
    return this._state.getOptions().period;
  }
  isEvent(item) {
    return item instanceof _placeos_events__WEBPACK_IMPORTED_MODULE_3__.CalendarEvent;
  }
  get hide_nav() {
    return localStorage.getItem('PlaceOS.hide_nav') === 'true';
  }
  constructor(_state, _event_form, _booking_form, _router, _dialog, _settings) {
    super();
    this._state = _state;
    this._event_form = _event_form;
    this._booking_form = _booking_form;
    this._router = _router;
    this._dialog = _dialog;
    this._settings = _settings;
    this.booking_dates = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this._state.filtered_bookings, this._state.loading]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(([bookings, loading]) => loading ? [] : bookings), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(bookings => {
      const sorted = bookings.sort((a, b) => a.date - b.date);
      const dates = new Set();
      for (const booking of sorted) {
        const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_15__.format)(booking.date, 'yyyy-MM-dd');
        if (!dates.has(date)) dates.add(date);
      }
      const list = [];
      for (const date of dates) {
        const day = (0,date_fns__WEBPACK_IMPORTED_MODULE_16__.parse)(date, 'yyyy-MM-dd', new Date());
        list.push({
          id: date,
          date: day.valueOf(),
          bookings: sorted.filter(booking => (0,date_fns__WEBPACK_IMPORTED_MODULE_17__.isSameDay)(booking.date, day)),
          is_today: (0,date_fns__WEBPACK_IMPORTED_MODULE_17__.isSameDay)(day, Date.now())
        });
      }
      return list;
    }));
    this.date = this._state.date;
    this.loading = this._state.loading;
    this.setDate = d => this._state.setDate(d);
    this.week_date = this._state.week_date;
    this.week_options = this._state.week_options;
  }
  ngOnInit() {
    this._state.triggerPoll();
    this.subscription('poll', this._state.startPolling());
  }
  trackByFn(index, item) {
    return item?.id;
  }
  setOptions(options) {
    this._state.setOptions(options);
  }
  edit(event) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
  editBooking(event) {
    this._router.navigate(['/book', `new-${event.type}`]);
    this._booking_form.newForm(event);
    setTimeout(() => {
      this._booking_form.form.patchValue({
        resources: [{
          id: event.asset_id,
          name: event.asset_name || event.description
        }],
        asset_id: event.asset_id
      });
    }, 100);
  }
  remove(item, remove_series = false) {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const time = `${(0,date_fns__WEBPACK_IMPORTED_MODULE_15__.format)(item.date, 'dd MMM yyyy h:mma')}`;
      const resource_name = item instanceof _placeos_events__WEBPACK_IMPORTED_MODULE_3__.CalendarEvent ? item.space?.display_name : item.asset_name || item.asset_id;
      const content = `Delete the ${remove_series ? 'recurring series of ' : ''}booking for ${resource_name} at ${time}`;
      const resp = yield (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.openConfirmModal)({
        title: `Delete booking ${remove_series ? 'series' : ''}`,
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
      yield (item instanceof _placeos_events__WEBPACK_IMPORTED_MODULE_3__.CalendarEvent ? _placeos_events__WEBPACK_IMPORTED_MODULE_3__.removeEvent : _placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.removeBooking)(remove_series ? item.recurring_event_id || item.id : item.id, {
        calendar: _this2._settings.get('app.no_user_calendar') ? null : item.calendar || (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.currentUser)()?.email,
        system_id: item.system?.id,
        instance: remove_series ? undefined : !!item.instance,
        start_time: !!item.instance ? item.instance : undefined
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
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const time = `${(0,date_fns__WEBPACK_IMPORTED_MODULE_15__.format)(item.date, 'dd MMM yyyy h:mma')}`;
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
      const promise = (item.instance ? (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.checkinBookingInstance)(item.id, item.instance, false) : (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.checkinBooking)(item.id, false)).toPromise().catch(e => {
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifyError)(`Unable to end booking. ${e}`);
        resp.close();
        throw e;
      });
      yield promise;
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifySuccess)('Successfully ended booking.');
      _this3._state.removeItem(item);
      _this3._dialog.closeAll();
    })();
  }
  static #_ = this.ɵfac = function ScheduleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ScheduleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_schedule_state_service__WEBPACK_IMPORTED_MODULE_4__.ScheduleStateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_placeos_events__WEBPACK_IMPORTED_MODULE_3__.EventFormService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.BookingFormService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_2__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: ScheduleComponent,
    selectors: [["app-schedule"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]],
    decls: 20,
    vars: 15,
    consts: [["empty_state", ""], ["booking_card", ""], [4, "ngIf"], [1, "flex", "flex-col", "sm:flex-row", "flex-1", "h-1/2", "bg-base-200", "relative"], [1, "hidden", "sm:block", "bg-base-100"], [1, "w-full", "bg-base-100", "border-b", "border-neutral", "sm:hidden"], [1, "flex", "items-center", "space-x-2", "px-2", "pt-2"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "click"], [3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "px-2 w-full my-2", 4, "ngIf"], [1, "flex-1", "h-full", "p-4", "overflow-auto", "space-y-2"], [4, "ngIf", "ngIfElse"], ["class", "absolute inset-x-0 bottom-0", "mode", "indeterminate", 4, "ngIf"], [3, "ngModelChange", "ngModel"], [1, "px-2", "w-full", "my-2"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["placeholder", "Select Week...", 3, "ngModelChange", "ngModel"], ["class", "leading-tight", 3, "value", 4, "ngFor", "ngForOf"], [1, "leading-tight", 3, "value"], ["class", "text-xs text-info px-1", "matTooltip", "This Week", 4, "ngIf"], ["matTooltip", "This Week", 1, "text-xs", "text-info", "px-1"], [4, "ngFor", "ngForOf"], [1, "font-medium", "my-2"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "event", "edit", "remove", 4, "ngIf", "ngIfElse"], [3, "edit", "remove", "event"], [3, "edit", "remove", "end", "booking"], ["mode", "indeterminate", 1, "absolute", "inset-x-0", "bottom-0"], [1, "w-full", "p-8", "flex", "flex-col", "items-center", "justify-center", "space-y-4"], ["src", "assets/img/no-events.svg", 1, "mr-4"], [1, "opacity-30"]],
    template: function ScheduleComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, ScheduleComponent_topbar_0_Template, 1, 0, "topbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "schedule-sidebar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 5)(4, "div", 6)(5, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ScheduleComponent_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.setOptions({
            period: "day"
          }));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, " Day ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ScheduleComponent_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.setOptions({
            period: "week"
          }));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, " Week ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, ScheduleComponent_schedule_mobile_calendar_9_Template, 2, 3, "schedule-mobile-calendar", 8)(10, ScheduleComponent_div_10_Template, 6, 6, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "schedule-filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, ScheduleComponent_ng_container_13_Template, 3, 3, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](15, ScheduleComponent_mat_progress_bar_15_Template, 1, 0, "mat-progress-bar", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](17, ScheduleComponent_footer_menu_17_Template, 1, 0, "footer-menu", 2)(18, ScheduleComponent_ng_template_18_Template, 7, 9, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        let tmp_6_0;
        const empty_state_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.hide_nav);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("inverse", ctx.period !== "day");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("inverse", ctx.period !== "week");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.period === "day");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.period === "week");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](14, 11, ctx.booking_dates)) == null ? null : tmp_6_0.length)("ngIfElse", empty_state_r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](16, 13, ctx.loading));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.hide_nav);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _components_topbar_component__WEBPACK_IMPORTED_MODULE_5__.TopbarComponent, _components_footer_menu_component__WEBPACK_IMPORTED_MODULE_6__.FooterMenuComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatRipple, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__.MatTooltip, _libs_events_src_lib_event_card_component__WEBPACK_IMPORTED_MODULE_7__.EventCardComponent, _libs_bookings_src_lib_booking_card_component__WEBPACK_IMPORTED_MODULE_8__.BookingCardComponent, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__.MatProgressBar, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.NgModel, _schedule_sidebar_component__WEBPACK_IMPORTED_MODULE_9__.ScheduleSidebarComponent, _schedule_filters_component__WEBPACK_IMPORTED_MODULE_10__.ScheduleFiltersComponent, _schedule_mobile_calendar_component__WEBPACK_IMPORTED_MODULE_11__.ScheduleMobileCalendarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_20__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_20__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslatePipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVkdWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixzQkFBc0I7Z0JBQ3RCLFlBQVk7Z0JBQ1osV0FBVztZQUNmIiwiZmlsZSI6InNjaGVkdWxlLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd29ya3BsYWNlL3NyYy9hcHAvbmV3LXNjaGVkdWxlL3NjaGVkdWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixzQkFBc0I7Z0JBQ3RCLFlBQVk7Z0JBQ1osV0FBVztZQUNmOztBQUVaLDRoQkFBNGhCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 51398:
/*!****************************************************************!*\
  !*** ./apps/workplace/src/app/new-schedule/schedule.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppScheduleModule: () => (/* binding */ AppScheduleModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 15244);
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/shared.module */ 46358);
/* harmony import */ var _schedule_filter_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule-filter-card.component */ 23897);
/* harmony import */ var _schedule_filters_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule-filters.component */ 22401);
/* harmony import */ var _schedule_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schedule-sidebar.component */ 22578);
/* harmony import */ var _schedule_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schedule.component */ 34039);
/* harmony import */ var _schedule_mobile_calendar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schedule-mobile-calendar.component */ 97221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);












const ROUTES = [{
  path: '',
  component: _schedule_component__WEBPACK_IMPORTED_MODULE_4__.ScheduleComponent
}, {
  path: '**',
  redirectTo: ''
}];
const COMPONENTS = [_schedule_component__WEBPACK_IMPORTED_MODULE_4__.ScheduleComponent, _schedule_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.ScheduleSidebarComponent, _schedule_filters_component__WEBPACK_IMPORTED_MODULE_2__.ScheduleFiltersComponent, _schedule_filter_card_component__WEBPACK_IMPORTED_MODULE_1__.ScheduleFilterCardComponent, _schedule_mobile_calendar_component__WEBPACK_IMPORTED_MODULE_5__.ScheduleMobileCalendarComponent];
class AppScheduleModule {
  static #_ = this.ɵfac = function AppScheduleModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppScheduleModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: AppScheduleModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _components_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedComponentModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__.MatBottomSheetModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(ROUTES)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppScheduleModule, {
    declarations: [_schedule_component__WEBPACK_IMPORTED_MODULE_4__.ScheduleComponent, _schedule_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.ScheduleSidebarComponent, _schedule_filters_component__WEBPACK_IMPORTED_MODULE_2__.ScheduleFiltersComponent, _schedule_filter_card_component__WEBPACK_IMPORTED_MODULE_1__.ScheduleFilterCardComponent, _schedule_mobile_calendar_component__WEBPACK_IMPORTED_MODULE_5__.ScheduleMobileCalendarComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _components_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedComponentModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__.MatBottomSheetModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=apps_workplace_src_app_new-schedule_schedule_module_ts.js.map