"use strict";
(self["webpackChunkworkplace"] = self["webpackChunkworkplace"] || []).push([["apps_workplace_src_app_dashboard_dashboard_module_ts"],{

/***/ 68320:
/*!******************************************************************************!*\
  !*** ./apps/workplace/src/app/dashboard/dashboard-availability.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardAvailabilityComponent: () => (/* binding */ DashboardAvailabilityComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _dashboard_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-state.service */ 29448);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);







const _c0 = () => ["/explore"];
const _c1 = a0 => ({
  level: a0
});
const _c2 = a0 => ({
  space: a0
});
function DashboardAvailabilityComponent_a_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 7)(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const lvl_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c1, lvl_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", lvl_r1.display_name || lvl_r1.name, " ");
  }
}
function DashboardAvailabilityComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No free spaces in building");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DashboardAvailabilityComponent_div_12_a_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 7)(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const space_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c2, space_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", space_r2.display_name || space_r2.name, " ");
  }
}
function DashboardAvailabilityComponent_div_12_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No free spaces");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DashboardAvailabilityComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "div", 2)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Spaces");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, DashboardAvailabilityComponent_div_12_a_5_Template, 3, 6, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, DashboardAvailabilityComponent_div_12_span_8_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](7, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 2, ctx_r2.space_list), 0, 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 8, ctx_r2.space_list).length);
  }
}
class DashboardAvailabilityComponent {
  constructor(_state) {
    this._state = _state;
    this.space_list = this._state.free_spaces;
    this.levels_free = this._state.level_occupancy;
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this._state.pollFreeSpaces();
    })();
  }
  ngOnDestroy() {
    this._state.stopPollingFreeSpaces();
  }
  static #_ = this.ɵfac = function DashboardAvailabilityComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DashboardAvailabilityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dashboard_state_service__WEBPACK_IMPORTED_MODULE_1__.DashboardStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: DashboardAvailabilityComponent,
    selectors: [["a-dashboard-availability"]],
    decls: 14,
    vars: 13,
    consts: [[1, "m-0", "font-medium", "text-xl"], [1, "flex", "flex-col", "items-center", "p-2", "bg-base-100", "shadow", "my-4", "rounded-lg"], [1, "flex", "items-center", "w-full", "mb-2"], ["free-levels", "", 1, "items", "space-y-2", "w-full"], ["btn", "", "matRipple", "", "class", "w-full", 3, "routerLink", "queryParams", 4, "ngFor", "ngForOf"], ["class", "text-black/30/30 text-sm mb-2", 4, "ngIf"], ["free-spaces", "", "class", "flex items-center flex-col rounded-lg bg-base-100 shadow my-4 p-2", 4, "ngIf"], ["btn", "", "matRipple", "", 1, "w-full", 3, "routerLink", "queryParams"], [1, "max-w-full", "truncate"], [1, "text-black/30/30", "text-sm", "mb-2"], ["free-spaces", "", 1, "flex", "items-center", "flex-col", "rounded-lg", "bg-base-100", "shadow", "my-4", "p-2"], [1, "items", "space-y-2", "w-full"], ["class", "text-dark-fade text-sm mb-2", 4, "ngIf"], [1, "text-dark-fade", "text-sm", "mb-2"]],
    template: function DashboardAvailabilityComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Available Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Building Levels");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, DashboardAvailabilityComponent_a_7_Template, 3, 6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, DashboardAvailabilityComponent_span_10_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, DashboardAvailabilityComponent_div_12_Template, 10, 10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "async");
      }
      if (rf & 2) {
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](9, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 3, ctx.levels_free), 0, 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 9, ctx.levels_free).length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 11, ctx.space_list)) == null ? null : tmp_2_0.length);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRipple, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.SlicePipe],
    styles: ["[_nghost-%COMP%] {\n                padding: 1em;\n                min-width: 16rem;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC1hdmFpbGFiaWxpdHkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxZQUFZO2dCQUNaLGdCQUFnQjtZQUNwQiIsImZpbGUiOiJkYXNoYm9hcmQtYXZhaWxhYmlsaXR5LmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE2cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd29ya3BsYWNlL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC1hdmFpbGFiaWxpdHkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxZQUFZO2dCQUNaLGdCQUFnQjtZQUNwQjs7QUFFWix3Y0FBd2MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 53526:
/*!**************************************************************************!*\
  !*** ./apps/workplace/src/app/dashboard/dashboard-contacts.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardContactsComponent: () => (/* binding */ DashboardContactsComponent)
/* harmony export */ });
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _dashboard_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-state.service */ 29448);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _libs_components_src_lib_user_avatar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/user-avatar.component */ 23574);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _dashboard_deliveries_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-deliveries.component */ 67887);













const _c0 = ["input"];
const _c1 = () => ({
  class: "material-icons",
  content: "person_add"
});
const _c2 = () => ({
  class: "material-icons",
  content: "close"
});
function DashboardContactsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "a-user-avatar", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DashboardContactsComponent_div_3_Template_button_click_4_listener() {
      const user_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.removeUser(user_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "app-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const user_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("user", user_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", user_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](3, _c2));
  }
}
function DashboardContactsComponent_button_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", !ctx_r3.search_str ? "Type to search for users..." : "No matches for \"" + ctx_r3.search_str + "\"", " ");
  }
}
function DashboardContactsComponent_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DashboardContactsComponent_button_17_Template_button_click_0_listener() {
      const user_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.addUser(user_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "a-user-avatar", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 24)(4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const user_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("user", user_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](user_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", user_r6.email, " ");
  }
}
function DashboardContactsComponent_dashboard_deliveries_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "dashboard-deliveries");
  }
}
class DashboardContactsComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_0__.AsyncHandler {
  get can_deliver() {
    return !!this._settings.get('app.can_deliver');
  }
  constructor(_state, _settings) {
    super();
    this._state = _state;
    this._settings = _settings;
    this.contacts = this._state.contacts;
    this.search_results = this._state.search_results;
    this.addUser = u => this._state.addContact(u);
    this.removeUser = u => this._state.removeContact(u);
    this.updateSearch = s => this._state.setOptions({
      search: s
    });
    this.search_str = '';
  }
  ngOnInit() {
    this._state.updateContacts();
  }
  focusInput() {
    this.timeout('focus', () => {
      if (this._input_el) {
        this._input_el.nativeElement.focus();
      }
    });
  }
  clearInput() {
    this.search_str = '';
    this._state.setOptions({
      search: ''
    });
  }
  static #_ = this.ɵfac = function DashboardContactsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DashboardContactsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_dashboard_state_service__WEBPACK_IMPORTED_MODULE_1__.DashboardStateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: DashboardContactsComponent,
    selectors: [["a-dashboard-contacts"]],
    viewQuery: function DashboardContactsComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._input_el = _t.first);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
    decls: 21,
    vars: 18,
    consts: [["menu", "matMenu"], ["input", ""], [1, "m-0", "mb-2", "font-medium", "text-xl"], ["name", "contact-list", 1, "bg-base-300", "border", "border-base-200", "shadow", "rounded-lg", "p-2", "pl-0", "space-y-2", "flex", "flex-wrap"], ["name", "contact", "class", "bg-base-100 rounded-lg flex-1 flex flex-col items-center p-2 relative", 4, "ngFor", "ngForOf"], ["name", "contact", "btn", "", "matRipple", "", 1, "rounded-lg", "flex-1", "w-full", 3, "menuOpened", "menuClosed", "matMenuTriggerFor"], [1, "flex", "flex-col", "items-center", "p-4", "text-black", "w-full"], [1, "text-2xl", 3, "icon"], [1, "w-full", "leading-tight", "whitespace-normal"], ["xPosition", "before"], ["mat-menu-item", "", 1, "p-0", 3, "click"], ["placeholder", "Search for user...", 1, "w-full", "p-2", "text-base", 3, "ngModelChange", "ngModel"], ["mat-menu-item", "", 4, "ngIf"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["name", "contact", 1, "bg-base-100", "rounded-lg", "flex-1", "flex", "flex-col", "items-center", "p-2", "relative"], [1, "text-2xl", "mb-2", 3, "user"], ["name", "contact-name", 1, "text-sm", "mb-2"], ["icon", "", "name", "close", 3, "click"], [3, "icon"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "leading-tight"], [1, "text-xl", "mr-2", 3, "user"], [1, "flex-1"], [1, "text-xs", "text-dark-fade"]],
    template: function DashboardContactsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Colleagues");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, DashboardContactsComponent_div_3_Template, 6, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("menuOpened", function DashboardContactsComponent_Template_button_menuOpened_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.focusInput());
        })("menuClosed", function DashboardContactsComponent_Template_button_menuClosed_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.clearInput());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "app-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Click to add a person to contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-menu", 9, 0)(12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DashboardContactsComponent_Template_div_click_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          $event.stopPropagation();
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.preventDefault());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "input", 11, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function DashboardContactsComponent_Template_input_ngModelChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.search_str, $event) || (ctx.search_str = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function DashboardContactsComponent_Template_input_ngModelChange_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.updateSearch(ctx.search_str));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, DashboardContactsComponent_button_15_Template, 2, 1, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, DashboardContactsComponent_button_17_Template, 8, 3, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, DashboardContactsComponent_dashboard_deliveries_20_Template, 1, 0, "dashboard-deliveries", 14);
      }
      if (rf & 2) {
        let tmp_6_0;
        const menu_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 7, ctx.contacts));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", menu_r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](17, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.search_str);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 9, ctx.search_results)) == null ? null : tmp_6_0.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](19, 13, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](18, 11, ctx.search_results), 0, 8));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.can_deliver);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _libs_components_src_lib_user_avatar_component__WEBPACK_IMPORTED_MODULE_3__.UserAvatarComponent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatRipple, _dashboard_deliveries_component__WEBPACK_IMPORTED_MODULE_4__.DashboardDeliveriesComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.SlicePipe],
    styles: ["[_nghost-%COMP%] {\n                padding: 1em;\n                min-width: 16rem;\n            }\n\n            [name='contact-list'][_ngcontent-%COMP%] {\n                padding: 0 0.5rem 0.5rem 0;\n            }\n\n            [name='contact'][_ngcontent-%COMP%] {\n                min-width: 8rem;\n                width: 8rem;\n                margin-left: 0.5rem;\n                margin-top: 0.5rem;\n            }\n\n            [name='contact-name'][_ngcontent-%COMP%] {\n                font-weight: 400;\n            }\n\n            [name='dot'][_ngcontent-%COMP%] {\n                height: 8px;\n                width: 8px;\n                border-radius: 8px;\n                background-color: #22992e;\n            }\n\n            button[name='close'][_ngcontent-%COMP%] {\n                position: absolute;\n                display: none;\n                top: 0.25rem;\n                right: 0.25rem;\n            }\n\n            [name='contact'][_ngcontent-%COMP%]:hover   button[name='close'][_ngcontent-%COMP%] {\n                display: initial;\n            }\n\n            button[name='contact'][_ngcontent-%COMP%] {\n                background-color: #f0f0f0;\n                border: none;\n                min-width: calc(100% - 0.5rem) !important;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC1jb250YWN0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLFlBQVk7Z0JBQ1osZ0JBQWdCO1lBQ3BCOztZQUVBO2dCQUNJLDBCQUEwQjtZQUM5Qjs7WUFFQTtnQkFDSSxlQUFlO2dCQUNmLFdBQVc7Z0JBQ1gsbUJBQW1CO2dCQUNuQixrQkFBa0I7WUFDdEI7O1lBRUE7Z0JBQ0ksZ0JBQWdCO1lBQ3BCOztZQUVBO2dCQUNJLFdBQVc7Z0JBQ1gsVUFBVTtnQkFDVixrQkFBa0I7Z0JBQ2xCLHlCQUF5QjtZQUM3Qjs7WUFFQTtnQkFDSSxrQkFBa0I7Z0JBQ2xCLGFBQWE7Z0JBQ2IsWUFBWTtnQkFDWixjQUFjO1lBQ2xCOztZQUVBO2dCQUNJLGdCQUFnQjtZQUNwQjs7WUFFQTtnQkFDSSx5QkFBeUI7Z0JBQ3pCLFlBQVk7Z0JBQ1oseUNBQXlDO1lBQzdDIiwiZmlsZSI6ImRhc2hib2FyZC1jb250YWN0cy5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNnJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgW25hbWU9J2NvbnRhY3QtbGlzdCddIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDAuNXJlbSAwLjVyZW0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgW25hbWU9J2NvbnRhY3QnXSB7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA4cmVtO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4cmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbbmFtZT0nY29udGFjdC1uYW1lJ10ge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtuYW1lPSdkb3QnXSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDhweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyOTkyZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnV0dG9uW25hbWU9J2Nsb3NlJ10ge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIHRvcDogMC4yNXJlbTtcbiAgICAgICAgICAgICAgICByaWdodDogMC4yNXJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgW25hbWU9J2NvbnRhY3QnXTpob3ZlciBidXR0b25bbmFtZT0nY2xvc2UnXSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5pdGlhbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnV0dG9uW25hbWU9J2NvbnRhY3QnXSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiBjYWxjKDEwMCUgLSAwLjVyZW0pICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd29ya3BsYWNlL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC1jb250YWN0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLFlBQVk7Z0JBQ1osZ0JBQWdCO1lBQ3BCOztZQUVBO2dCQUNJLDBCQUEwQjtZQUM5Qjs7WUFFQTtnQkFDSSxlQUFlO2dCQUNmLFdBQVc7Z0JBQ1gsbUJBQW1CO2dCQUNuQixrQkFBa0I7WUFDdEI7O1lBRUE7Z0JBQ0ksZ0JBQWdCO1lBQ3BCOztZQUVBO2dCQUNJLFdBQVc7Z0JBQ1gsVUFBVTtnQkFDVixrQkFBa0I7Z0JBQ2xCLHlCQUF5QjtZQUM3Qjs7WUFFQTtnQkFDSSxrQkFBa0I7Z0JBQ2xCLGFBQWE7Z0JBQ2IsWUFBWTtnQkFDWixjQUFjO1lBQ2xCOztZQUVBO2dCQUNJLGdCQUFnQjtZQUNwQjs7WUFFQTtnQkFDSSx5QkFBeUI7Z0JBQ3pCLFlBQVk7Z0JBQ1oseUNBQXlDO1lBQzdDOztBQUVaLDRzRUFBNHNFIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTZyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtuYW1lPSdjb250YWN0LWxpc3QnXSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAwLjVyZW0gMC41cmVtIDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtuYW1lPSdjb250YWN0J10ge1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogOHJlbTtcbiAgICAgICAgICAgICAgICB3aWR0aDogOHJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgW25hbWU9J2NvbnRhY3QtbmFtZSddIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbbmFtZT0nZG90J10ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjk5MmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJ1dHRvbltuYW1lPSdjbG9zZSddIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICB0b3A6IDAuMjVyZW07XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDAuMjVyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtuYW1lPSdjb250YWN0J106aG92ZXIgYnV0dG9uW25hbWU9J2Nsb3NlJ10ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJ1dHRvbltuYW1lPSdjb250YWN0J10ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogY2FsYygxMDAlIC0gMC41cmVtKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 67887:
/*!****************************************************************************!*\
  !*** ./apps/workplace/src/app/dashboard/dashboard-deliveries.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardDeliveriesComponent: () => (/* binding */ DashboardDeliveriesComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 57871);
/* harmony import */ var _dashboard_delivery_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-delivery-modal.component */ 55199);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 74646);








function DashboardDeliveriesComponent_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (item_r2 == null ? null : item_r2.name) || "Untitled Delivery", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r2 && item_r2.received ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 6, item_r2.received, "medium") : "Not received", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("bg-warning", !item_r2.received)("bg-success", item_r2.received);
  }
}
function DashboardDeliveriesComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DashboardDeliveriesComponent_div_3_div_1_Template, 8, 9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardDeliveriesComponent_div_3_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.registerDelivery());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Register Delivery ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.deliveries);
  }
}
function DashboardDeliveriesComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " No registered deliveries ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class DashboardDeliveriesComponent {
  constructor(_dialog) {
    this._dialog = _dialog;
    this.deliveries = [{
      name: 'USB-C Cables',
      received: Date.now()
    }, {
      name: 'Desk Fan'
    }];
  }
  registerDelivery() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ref = _this._dialog.open(_dashboard_delivery_modal_component__WEBPACK_IMPORTED_MODULE_1__.DashboardDeliveryModalComponent);
      const details = yield Promise.race([ref.componentInstance.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.first)(_ => _.reason === 'done')).toPromise(), ref.afterClosed().toPromise()]);
      if (details.reason !== 'done') return;
      _this.deliveries.push(details.metadata);
      ref.close();
    })();
  }
  static #_ = this.ɵfac = function DashboardDeliveriesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DashboardDeliveriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: DashboardDeliveriesComponent,
    selectors: [["dashboard-deliveries"]],
    decls: 6,
    vars: 2,
    consts: [["empty_state", ""], [1, "m-0", "my-2", "font-medium", "text-xl"], [1, "bg-base-100", "shadow", "p-2", "rounded"], ["class", "divide-y", 4, "ngIf", "ngIfElse"], [1, "divide-y"], ["class", "flex items-center py-2", 4, "ngFor", "ngForOf"], ["matRipple", "", 1, "w-full", "mt-2", 3, "click"], [1, "flex", "items-center", "py-2"], [1, "flex-1", "pl-2"], [1, ""], [1, "text-xs", "opacity-60"], [1, "m-4", "h-2", "w-2", "rounded-full"], [1, "p-8", "flex", "items-center", "justify-center", "opacity-40"]],
    template: function DashboardDeliveriesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Deliveries");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DashboardDeliveriesComponent_div_3_Template, 4, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DashboardDeliveriesComponent_ng_template_4_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const empty_state_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.deliveries == null ? null : ctx.deliveries.length)("ngIfElse", empty_state_r4);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe]
  });
}

/***/ }),

/***/ 55199:
/*!********************************************************************************!*\
  !*** ./apps/workplace/src/app/dashboard/dashboard-delivery-modal.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardDeliveryModalComponent: () => (/* binding */ DashboardDeliveryModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 95541);










class DashboardDeliveryModalComponent {
  constructor() {
    this.events = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
      sender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
      priority: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('')
    });
  }
  register() {
    this.form.markAllAsTouched();
    if (!this.form.valid) return;
    this.events.emit({
      reason: 'done',
      metadata: this.form.value
    });
  }
  static #_ = this.ɵfac = function DashboardDeliveryModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DashboardDeliveryModalComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DashboardDeliveryModalComponent,
    selectors: [["dashboard-delivery-modal"]],
    outputs: {
      events: "events"
    },
    decls: 47,
    vars: 1,
    consts: [[1, "flex", "items-center", "justify-between"], ["icon", "", "mat-dialog-close", ""], [1, "p-2", "w-[24rem]", 3, "formGroup"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "placeholder", "Name of items being delivered", "formControlName", "name"], ["matInput", "", "placeholder", "Description of items being delivered", "formControlName", "description"], ["matInput", "", "placeholder", "Name of sender", "formControlName", "sender"], ["placeholder", "Low", "formControlName", "priority"], [1, "p-2", "flex", "items-center", "justify-center", "border-t", "border-base-200"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"]],
    template: function DashboardDeliveryModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0)(1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Register Delivery");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 1)(4, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "main", 2)(7, "div")(8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Name is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div")(18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div")(23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Sender:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Sender is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div")(30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Priority:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-form-field", 3)(33, "mat-select", 7)(34, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Very Low");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Low");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Normal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "High");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Very Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "footer", 8)(45, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardDeliveryModalComponent_Template_button_click_45_listener() {
          return ctx.register();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_0__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatError, _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRipple, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName]
  });
}

/***/ }),

/***/ 3466:
/*!*******************************************************************************!*\
  !*** ./apps/workplace/src/app/dashboard/dashboard-schedule-item.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardScheduledItemComponent: () => (/* binding */ DashboardScheduledItemComponent)
/* harmony export */ });
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/bookings */ 85616);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 91543);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);







const _c0 = ["scheduled-item", ""];
const _c1 = (a0, a1) => ["/schedule", "view", a0, a1];
function DashboardScheduledItemComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "app-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "place");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](5, 1, (ctx_r0.item == null ? null : ctx_r0.item.location) || (ctx_r0.item == null ? null : ctx_r0.item.description), 0, 255), " ");
  }
}
class DashboardScheduledItemComponent {
  get type() {
    return this.item instanceof _placeos_bookings__WEBPACK_IMPORTED_MODULE_0__.Booking ? 'booking' : 'event';
  }
  get has_ended() {
    return !this.item || this.item.id === 'date' || (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.isAfter)(new Date(), this.item.date + this.item.duration * 60 * 1000);
  }
  get icon() {
    if (this.status === 'declined') return 'cancel';
    if (this.item.asset_id) {
      switch (this.item.booking_type) {
        case 'desk':
          return 'view_quilt';
        case 'parking':
          return 'local_parking';
      }
    }
    return 'event';
  }
  get status() {
    if (!this.item || this.item.id === 'date') return 'declined';
    return this.item.status;
  }
  static #_ = this.ɵfac = function DashboardScheduledItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DashboardScheduledItemComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: DashboardScheduledItemComponent,
    selectors: [["", "scheduled-item", ""]],
    inputs: {
      item: "item"
    },
    attrs: _c0,
    decls: 20,
    vars: 24,
    consts: [["btn", "", "matRipple", "", 1, "rounded-none", "my-1", "mx-4", "w-[calc(100%-2rem)]", "h-24", "bg-base-100", "hover:shadow", "p-0", 3, "routerLink"], [1, "flex", "items-center", "border", "border-base-200", "rounded-lg"], ["status", "", 1, "h-24", "w-20", "flex", "flex-col", "items-center", "justify-center", "text-white", "leading-tight"], [1, "text-2xl"], [1, "font-normal"], [1, "capitalize", "text-xs", "font-medium"], [1, "flex-1", "flex", "flex-col", "text-left", "p-2"], [1, "text-xl", "pl-1"], [1, "flex", "items-center", "font-normal", "leading-normal", "space-x-1"], [1, "text-lg"], [1, "text-sm"], ["class", "flex items-center font-normal leading-normal space-x-1", 4, "ngIf"]],
    template: function DashboardScheduledItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 0)(1, "div", 1)(2, "div", 2)(3, "app-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6)(11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 8)(14, "app-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "today");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, DashboardScheduledItemComponent_div_19_Template, 6, 5, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("opacity-50", ctx.has_ended);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](21, _c1, ctx.item == null ? null : ctx.item.id, ctx.type));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("bg-success", ctx.status === "approved")("bg-warning", ctx.status === "tentative")("bg-error", ctx.status === "declined");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx.item == null ? null : ctx.item.all_day) ? "All Day" : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](7, 15, ctx.item == null ? null : ctx.item.date, "shortTime"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" (", ctx.status, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx.item == null ? null : ctx.item.title) || "Untitled Event", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](18, 18, ctx.item == null ? null : ctx.item.date, "MMMM d"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.item == null ? null : ctx.item.location) || (ctx.item == null ? null : ctx.item.description));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRipple, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_4__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 29448:
/*!*********************************************************************!*\
  !*** ./apps/workplace/src/app/dashboard/dashboard-state.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardStateService: () => (/* binding */ DashboardStateService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 71536);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 19803);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 29314);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 57871);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! date-fns */ 1874);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! date-fns */ 56441);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/events */ 40569);
/* harmony import */ var _placeos_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/users */ 41489);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _placeos_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @placeos/calendar */ 91886);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @placeos/bookings */ 85616);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 37580);
















class DashboardStateService extends _placeos_common__WEBPACK_IMPORTED_MODULE_2__.AsyncHandler {
  constructor(_settings, _calendar, _org, _event_form) {
    super();
    this._settings = _settings;
    this._calendar = _calendar;
    this._org = _org;
    this._event_form = _event_form;
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject({});
    /**  */
    this._free_spaces = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject([]);
    /**  */
    this._upcoming_events = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject([]);
    /**  */
    this._contacts = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject([]);
    /**  */
    this._level_occupancy = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject([]);
    /**  */
    this.free_spaces = this._free_spaces.asObservable();
    /**  */
    this.upcoming_events = this._upcoming_events.asObservable();
    /**  */
    this.contacts = this._contacts.asObservable();
    /**  */
    this.options = this._options.asObservable();
    this.search_results = this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(({
      search
    }) => search ? (0,_placeos_users__WEBPACK_IMPORTED_MODULE_4__.searchStaff)(search) : (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)([])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(_ => []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.shareReplay)(1));
    /**  */
    this.level_occupancy = this._level_occupancy.asObservable();
    this.init();
  }
  init() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this._org.initialised.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.first)(_ => _)).toPromise();
      _this.subscription('building', _this._org.active_building.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.filter)(bld => !!bld)).subscribe(() => _this.updateBuildingMetadata()));
      let sys_id = _this._org.binding('contact_tracing');
      if (!sys_id) return;
      const binding = (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.getModule)(sys_id, 'AreaManagement').binding('overview');
      binding.listen().subscribe(d => _this.updateOccupancy(d || {}));
      binding.bind();
    })();
  }
  setOptions(options) {
    this._options.next({
      ...this._options.getValue(),
      ...options
    });
  }
  pollFreeSpaces(delay = 10 * 1000) {
    this.updateFreeSpaces();
    this.interval('free_spaces', () => this.updateFreeSpaces(), delay);
  }
  stopPollingFreeSpaces() {
    this.clearInterval('free_spaces');
  }
  pollUpcomingEvents(delay = 10 * 1000) {
    this.updateUpcomingEvents();
    this.interval('upcoming_events', () => this.updateUpcomingEvents(), delay);
  }
  stopPollingUpcomingEvents() {
    this.clearInterval('upcoming_events');
  }
  updateContacts() {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const metadata = yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.showMetadata)((0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.currentUser)().id, 'contacts').toPromise();
      const list = metadata.details instanceof Array ? metadata.details : [];
      _this2._contacts.next(list.map(i => new _placeos_users__WEBPACK_IMPORTED_MODULE_4__.User(i)));
    })();
  }
  addContact(user) {
    var _this3 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let users = [..._this3._contacts.getValue()];
      users.push(user);
      users = (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.unique)(users, 'email');
      const metadata = yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.updateMetadata)((0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.currentUser)().id, {
        name: 'contacts',
        description: 'Contacts for the User',
        details: users
      }).toPromise();
      const list = metadata.details instanceof Array ? metadata.details : [];
      _this3._contacts.next(list.map(i => new _placeos_users__WEBPACK_IMPORTED_MODULE_4__.User(i)));
    })();
  }
  removeContact(user) {
    var _this4 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let users = [..._this4._contacts.getValue()];
      users = users.filter(u => u.email !== user.email);
      const metadata = yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.updateMetadata)((0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.currentUser)().id, {
        name: 'contacts',
        description: 'Contacts for the User',
        details: users
      }).toPromise();
      const list = metadata.details instanceof Array ? metadata.details : [];
      _this4._contacts.next(list.map(i => new _placeos_users__WEBPACK_IMPORTED_MODULE_4__.User(i)));
    })();
  }
  updateOccupancy(map) {
    var _this5 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const levels = [..._this5._org.levels];
      levels.sort((a, b) => map[a.id]?.recommendation - map[b.id]?.recommendation);
      _this5._level_occupancy.next(levels);
    })();
  }
  updateFreeSpaces() {
    var _this6 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this6._org.building) return;
      const mins = Math.abs((0,date_fns__WEBPACK_IMPORTED_MODULE_16__.differenceInMinutes)(Date.now(), (0,date_fns__WEBPACK_IMPORTED_MODULE_17__.endOfDay)(Date.now())));
      _this6._event_form.setOptions({
        zone_ids: [],
        capacity: 0,
        features: [],
        show_fav: false
      });
      _this6._event_form.form.patchValue({
        date: Date.now(),
        duration: mins
      });
      const list = yield _this6._event_form.available_spaces.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.take)(1)).toPromise();
      list.sort((a, b) => a.capacity - b.capacity);
      _this6._free_spaces.next(list);
    })();
  }
  updateUpcomingEvents() {
    var _this7 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const period_start = Math.floor(new Date().valueOf() / 1000);
      const period_end = Math.floor((0,date_fns__WEBPACK_IMPORTED_MODULE_17__.endOfDay)(new Date()).valueOf() / 1000);
      const events = yield (_this7._settings.get('app.events.use_bookings') ? (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_7__.queryBookings)({
        period_start,
        period_end,
        type: 'room',
        email: (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.currentUser)().email
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.map)(_ => _.map(i => (0,_placeos_events__WEBPACK_IMPORTED_MODULE_3__.newCalendarEventFromBooking)(i)))) : (0,_placeos_events__WEBPACK_IMPORTED_MODULE_3__.queryEvents)({
        period_start,
        period_end,
        calendars: (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.currentUser)().email
      })).toPromise().catch(_ => []);
      const bookings = yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_7__.queryBookings)({
        period_start,
        period_end,
        type: 'desk',
        user: (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.currentUser)().email
      }).toPromise().catch(_ => []);
      const event_list = [...events, ...bookings].sort((a, b) => a.date - b.date);
      _this7._upcoming_events.next(event_list);
    })();
  }
  updateBuildingMetadata() {
    var _this8 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const building = _this8._org.building;
      const metadata = yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.showMetadata)(building.id, 'bindings').toPromise();
      if (!metadata.details.occupancy) return;
      const details = metadata.details.occupancy;
      const module = (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.getModule)(details.sys, details.module, details.index);
      if (!module) return;
      if (_this8._occupancy_binding) {
        _this8._occupancy_binding.unbind();
      }
      _this8._occupancy_binding = module.binding('occupancy');
      _this8._occupancy_binding.bind();
      _this8.subscription('occupancy_binding', _this8._occupancy_binding.listen().subscribe(value => {
        const levels = Object.keys(value).map(key => ({
          id: key,
          ...value[key]
        }));
        levels.sort((a, b) => a.recommendation_factor - b.recommendation_factor);
        _this8._level_occupancy.next(levels.map(i => _this8._org.levelWithID([i.id])));
      }));
    })();
  }
  static #_ = this.ɵfac = function DashboardStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DashboardStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_placeos_common__WEBPACK_IMPORTED_MODULE_2__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_placeos_calendar__WEBPACK_IMPORTED_MODULE_6__.CalendarService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_5__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_placeos_events__WEBPACK_IMPORTED_MODULE_3__.EventFormService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjectable"]({
    token: DashboardStateService,
    factory: DashboardStateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 92541:
/*!**************************************************************************!*\
  !*** ./apps/workplace/src/app/dashboard/dashboard-upcoming.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardUpcomingComponent: () => (/* binding */ DashboardUpcomingComponent)
/* harmony export */ });
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 36337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var _placeos_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/components */ 51588);
/* harmony import */ var _schedule_schedule_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../schedule/schedule-state.service */ 79184);
/* harmony import */ var _dashboard_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-state.service */ 29448);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _libs_components_src_lib_user_avatar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/user-avatar.component */ 23574);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);

















const _c0 = () => ({
  class: "material-icons",
  content: "group"
});
function DashboardUpcomingComponent_div_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const event_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", event_r2.guests == null ? null : event_r2.guests.length, " Guest", (event_r2.guests == null ? null : event_r2.guests.length) === 1 ? "" : "s", " ");
  }
}
function DashboardUpcomingComponent_div_2_div_14_a_user_avatar_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "a-user-avatar", 17);
  }
  if (rf & 2) {
    const guest_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("user", guest_r4);
  }
}
function DashboardUpcomingComponent_div_2_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DashboardUpcomingComponent_div_2_div_14_a_user_avatar_1_Template, 1, 1, "a-user-avatar", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const event_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", event_r2.guests);
  }
}
function DashboardUpcomingComponent_div_2_a_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Join Call");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const event_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("href", event_r2.meeting_link, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function DashboardUpcomingComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 4)(3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 7)(9, "app-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "room");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardUpcomingComponent_div_2_Template_a_click_11_listener() {
      const event_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](event_r2.space || event_r2.asset_id ? ctx_r2.locateSpace(event_r2.space || event_r2) : "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, DashboardUpcomingComponent_div_2_div_13_Template, 3, 4, "div", 10)(14, DashboardUpcomingComponent_div_2_div_14_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, DashboardUpcomingComponent_div_2_a_15_Template, 2, 1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const event_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("bg-primary", event_r2.asset_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](5, 12, event_r2.date, "shortTime"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", event_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("underline", !!event_r2.space || !!event_r2.asset_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matTooltip", event_r2.space ? "Locate Space" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", (event_r2.space == null ? null : event_r2.space.display_name) || (event_r2.space == null ? null : event_r2.space.name) || event_r2.asset_name || "<No Location>", " ", (event_r2.space == null ? null : event_r2.space.level == null ? null : event_r2.space.level.display_name) || (event_r2.space == null ? null : event_r2.space.level == null ? null : event_r2.space.level.name) ? ", " + event_r2.space.level.display_name || 0 : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", event_r2.guests);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", event_r2.guests);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", event_r2.meeting_link);
  }
}
class DashboardUpcomingComponent {
  constructor(_org, _state, _schedule, _dialog) {
    this._org = _org;
    this._state = _state;
    this._schedule = _schedule;
    this._dialog = _dialog;
    this.today = new Date();
    this.max_date = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.addMonths)(this.today, 4);
    this.upcoming_events = this._state.upcoming_events;
    this.event_list = this._schedule.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(list => {
      const updated_list = list.filter(_ => _.state !== 'done' && _.is_done !== true).map(_ => _.space ? _ : {
        ..._,
        space: {
          name: _.asset_name || _.asset_id,
          map_id: _.asset_id,
          level: this._org.levelWithID(_.zones),
          zones: _.zones
        }
      });
      return updated_list;
    }));
  }
  ngOnInit() {
    this._state.pollUpcomingEvents();
    this._schedule.startPolling();
  }
  ngOnDestroy() {
    this._state.stopPollingUpcomingEvents();
    this._schedule.stopPolling();
  }
  locateSpace(space) {
    this._dialog.open(_placeos_components__WEBPACK_IMPORTED_MODULE_1__.MapLocateModalComponent, {
      data: {
        item: {
          ...space,
          level: null
        }
      }
    });
  }
  trackByFn(idx, event) {
    return event ? `${event.id}|${event.date}` : undefined;
  }
  static #_ = this.ɵfac = function DashboardUpcomingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DashboardUpcomingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_0__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_dashboard_state_service__WEBPACK_IMPORTED_MODULE_3__.DashboardStateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_schedule_schedule_state_service__WEBPACK_IMPORTED_MODULE_2__.ScheduleStateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: DashboardUpcomingComponent,
    selectors: [["a-dashboard-upcoming"]],
    decls: 5,
    vars: 7,
    consts: [[1, "m-0", "mb-4", "font-medium", "text-xl"], ["name", "event", "class", "flex bg-base-100 shadow rounded-lg relative overflow-hidden mb-4", 4, "ngFor", "ngForOf"], ["name", "event", 1, "flex", "bg-base-100", "shadow", "rounded-lg", "relative", "overflow-hidden", "mb-4"], ["name", "status", 1, "absolute", "rounded-lg"], ["name", "details", 1, "flex-1", "mr-2"], ["time", "", 1, "text-primary", "text-sm", "font-bold", "mb-2"], ["name", "title", 1, "text-sm", "font-bold", "mb-2"], ["name", "space", 1, "text-xs", "flex", "items-center", "mb-2"], [1, "mr-2"], [1, "text-black", 3, "click", "matTooltip"], ["name", "attendees", "class", "text-xs flex items-center mb-2", 4, "ngIf"], ["name", "guests", "class", "flex space-x-2 text-sm", 4, "ngIf"], ["btn", "", "matRipple", "", "class", "uppercase h-12", 3, "href", 4, "ngIf"], ["name", "attendees", 1, "text-xs", "flex", "items-center", "mb-2"], [1, "mr-2", 3, "icon"], ["name", "guests", 1, "flex", "space-x-2", "text-sm"], [3, "user", 4, "ngFor", "ngForOf"], [3, "user"], ["btn", "", "matRipple", "", 1, "uppercase", "h-12", 3, "href"]],
    template: function DashboardUpcomingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Your Bookings");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, DashboardUpcomingComponent_div_2_Template, 16, 15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "slice");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](4, 3, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 1, ctx.event_list), 0, 3));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__.IconComponent, _libs_components_src_lib_user_avatar_component__WEBPACK_IMPORTED_MODULE_5__.UserAvatarComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatRipple, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
    styles: ["[_nghost-%COMP%] {\n                padding: 1em;\n                min-width: 16rem;\n            }\n\n            [name='event'][_ngcontent-%COMP%] {\n                padding: 1rem 1rem 1rem 2rem;\n            }\n\n            [name='status'][_ngcontent-%COMP%] {\n                top: 1rem;\n                left: -0.8rem;\n                height: 2.5rem;\n                width: 1.6rem;\n                background-color: #00529b;\n            }\n\n            button[_ngcontent-%COMP%] {\n                height: 3em;\n            }\n\n            app-icon[_ngcontent-%COMP%] {\n                margin-left: -0.25rem;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC11cGNvbWluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLFlBQVk7Z0JBQ1osZ0JBQWdCO1lBQ3BCOztZQUVBO2dCQUNJLDRCQUE0QjtZQUNoQzs7WUFFQTtnQkFDSSxTQUFTO2dCQUNULGFBQWE7Z0JBQ2IsY0FBYztnQkFDZCxhQUFhO2dCQUNiLHlCQUF5QjtZQUM3Qjs7WUFFQTtnQkFDSSxXQUFXO1lBQ2Y7O1lBRUE7Z0JBQ0kscUJBQXFCO1lBQ3pCIiwiZmlsZSI6ImRhc2hib2FyZC11cGNvbWluZy5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNnJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgW25hbWU9J2V2ZW50J10ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAxcmVtIDJyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtuYW1lPSdzdGF0dXMnXSB7XG4gICAgICAgICAgICAgICAgdG9wOiAxcmVtO1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0wLjhyZW07XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEuNnJlbTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1MjliO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogM2VtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhcHAtaWNvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0wLjI1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd29ya3BsYWNlL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC11cGNvbWluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLFlBQVk7Z0JBQ1osZ0JBQWdCO1lBQ3BCOztZQUVBO2dCQUNJLDRCQUE0QjtZQUNoQzs7WUFFQTtnQkFDSSxTQUFTO2dCQUNULGFBQWE7Z0JBQ2IsY0FBYztnQkFDZCxhQUFhO2dCQUNiLHlCQUF5QjtZQUM3Qjs7WUFFQTtnQkFDSSxXQUFXO1lBQ2Y7O1lBRUE7Z0JBQ0kscUJBQXFCO1lBQ3pCOztBQUVaLGd1Q0FBZ3VDIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTZyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtuYW1lPSdldmVudCddIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMXJlbSAycmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbbmFtZT0nc3RhdHVzJ10ge1xuICAgICAgICAgICAgICAgIHRvcDogMXJlbTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMC44cmVtO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMi41cmVtO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxLjZyZW07XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTI5YjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDNlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXBwLWljb24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMC4yNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 31640:
/*!*****************************************************************!*\
  !*** ./apps/workplace/src/app/dashboard/dashboard.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _components_topbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/topbar.component */ 17434);
/* harmony import */ var _components_footer_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer-menu.component */ 10895);
/* harmony import */ var _dashboard_availability_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-availability.component */ 68320);
/* harmony import */ var _dashboard_upcoming_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-upcoming.component */ 92541);
/* harmony import */ var _dashboard_contacts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-contacts.component */ 53526);









const _c0 = ["dashboard", ""];
function DashboardComponent_a_dashboard_availability_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "a-dashboard-availability", 4);
  }
}
function DashboardComponent_a_dashboard_contacts_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "a-dashboard-contacts", 4);
  }
}
class DashboardComponent {
  constructor(_settings) {
    this._settings = _settings;
  }
  get hide_availability() {
    return this._settings.get('app.hide_availability') !== false;
  }
  get hide_contacts() {
    return this._settings.get('app.hide_contacts') !== false;
  }
  static #_ = this.ɵfac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: DashboardComponent,
    selectors: [["", "dashboard", ""]],
    attrs: _c0,
    decls: 8,
    vars: 2,
    consts: [[1, "flex-1", "flex", "sm:flex-row", "flex-col-reverse", "h-1/2", "bg-base-200"], [1, "relative", "z-0", "flex", "flex-col", "flex-1", "h-1/2", "sm:h-auto", "overflow-hidden"], [1, "flex", "flex-1", "px-0", "sm:px-8", "flex-wrap", "overflow-auto", "h-px", "sm:h-auto"], ["class", "flex-1 min-w-64", 4, "ngIf"], [1, "flex-1", "min-w-64"]],
    template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "topbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, DashboardComponent_a_dashboard_availability_4_Template, 1, 0, "a-dashboard-availability", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "a-dashboard-upcoming", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, DashboardComponent_a_dashboard_contacts_6_Template, 1, 0, "a-dashboard-contacts", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "footer-menu");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.hide_availability);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.hide_contacts);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _components_topbar_component__WEBPACK_IMPORTED_MODULE_1__.TopbarComponent, _components_footer_menu_component__WEBPACK_IMPORTED_MODULE_2__.FooterMenuComponent, _dashboard_availability_component__WEBPACK_IMPORTED_MODULE_3__.DashboardAvailabilityComponent, _dashboard_upcoming_component__WEBPACK_IMPORTED_MODULE_4__.DashboardUpcomingComponent, _dashboard_contacts_component__WEBPACK_IMPORTED_MODULE_5__.DashboardContactsComponent],
    styles: ["[_nghost-%COMP%] {\n                position: absolute;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                overflow: hidden;\n                display: flex;\n                flex-direction: column;\n            }\n\n            main[_ngcontent-%COMP%] {\n                min-height: 50%;\n            }\n\n            .top[_ngcontent-%COMP%] {\n                background-color: #007ac8;\n            }\n\n            a[button].tile[_ngcontent-%COMP%] {\n                flex: 1;\n                border-radius: 0;\n                background-color: #fff;\n                color: rgba(0, 0, 0, 0.85);\n                border: none;\n                border-right: 1px solid #ccc;\n            }\n\n            a[button].tile[_ngcontent-%COMP%]:last-child {\n                border: none;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGtCQUFrQjtnQkFDbEIsTUFBTTtnQkFDTixPQUFPO2dCQUNQLFFBQVE7Z0JBQ1IsU0FBUztnQkFDVCxnQkFBZ0I7Z0JBQ2hCLGFBQWE7Z0JBQ2Isc0JBQXNCO1lBQzFCOztZQUVBO2dCQUNJLGVBQWU7WUFDbkI7O1lBRUE7Z0JBQ0kseUJBQXlCO1lBQzdCOztZQUVBO2dCQUNJLE9BQU87Z0JBQ1AsZ0JBQWdCO2dCQUNoQixzQkFBc0I7Z0JBQ3RCLDBCQUEwQjtnQkFDMUIsWUFBWTtnQkFDWiw0QkFBNEI7WUFDaEM7O1lBRUE7Z0JBQ0ksWUFBWTtZQUNoQiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudG9wIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YWM4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhW2J1dHRvbl0udGlsZSB7XG4gICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFbYnV0dG9uXS50aWxlOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd29ya3BsYWNlL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGtCQUFrQjtnQkFDbEIsTUFBTTtnQkFDTixPQUFPO2dCQUNQLFFBQVE7Z0JBQ1IsU0FBUztnQkFDVCxnQkFBZ0I7Z0JBQ2hCLGFBQWE7Z0JBQ2Isc0JBQXNCO1lBQzFCOztZQUVBO2dCQUNJLGVBQWU7WUFDbkI7O1lBRUE7Z0JBQ0kseUJBQXlCO1lBQzdCOztZQUVBO2dCQUNJLE9BQU87Z0JBQ1AsZ0JBQWdCO2dCQUNoQixzQkFBc0I7Z0JBQ3RCLDBCQUEwQjtnQkFDMUIsWUFBWTtnQkFDWiw0QkFBNEI7WUFDaEM7O1lBRUE7Z0JBQ0ksWUFBWTtZQUNoQjs7QUFFWiw0bkRBQTRuRCIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRvcCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2FjODtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYVtidXR0b25dLnRpbGUge1xuICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhW2J1dHRvbl0udGlsZTpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 14935:
/*!**************************************************************!*\
  !*** ./apps/workplace/src/app/dashboard/dashboard.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardModule: () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/scrolling */ 79975);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/shared.module */ 46358);
/* harmony import */ var _dashboard_availability_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-availability.component */ 68320);
/* harmony import */ var _dashboard_contacts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-contacts.component */ 53526);
/* harmony import */ var _dashboard_deliveries_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-deliveries.component */ 67887);
/* harmony import */ var _dashboard_delivery_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-delivery-modal.component */ 55199);
/* harmony import */ var _dashboard_schedule_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-schedule-item.component */ 3466);
/* harmony import */ var _dashboard_upcoming_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-upcoming.component */ 92541);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard.component */ 31640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);














const ROUTES = [{
  path: '',
  component: _dashboard_component__WEBPACK_IMPORTED_MODULE_7__.DashboardComponent
}];
class DashboardModule {
  static #_ = this.ɵfac = function DashboardModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DashboardModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: DashboardModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _components_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedComponentModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__.ScrollingModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(ROUTES)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](DashboardModule, {
    declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_7__.DashboardComponent, _dashboard_availability_component__WEBPACK_IMPORTED_MODULE_1__.DashboardAvailabilityComponent, _dashboard_upcoming_component__WEBPACK_IMPORTED_MODULE_6__.DashboardUpcomingComponent, _dashboard_contacts_component__WEBPACK_IMPORTED_MODULE_2__.DashboardContactsComponent, _dashboard_deliveries_component__WEBPACK_IMPORTED_MODULE_3__.DashboardDeliveriesComponent, _dashboard_delivery_modal_component__WEBPACK_IMPORTED_MODULE_4__.DashboardDeliveryModalComponent, _dashboard_schedule_item_component__WEBPACK_IMPORTED_MODULE_5__.DashboardScheduledItemComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _components_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedComponentModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__.ScrollingModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=apps_workplace_src_app_dashboard_dashboard_module_ts.js.map