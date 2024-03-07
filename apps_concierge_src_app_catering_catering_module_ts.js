"use strict";
(self["webpackChunkconcierge"] = self["webpackChunkconcierge"] || []).push([["apps_concierge_src_app_catering_catering_module_ts"],{

/***/ 4210:
/*!**********************************************************************!*\
  !*** ./apps/concierge/src/app/catering/catering-topbar.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CateringTopbarComponent: () => (/* binding */ CateringTopbarComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 17627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 46939);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 5745);
/* harmony import */ var _placeos_catering__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/catering */ 5039);
/* harmony import */ var _placeos_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/components */ 24815);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ui_date_options_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/date-options.component */ 11771);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ 60702);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);





















function CateringTopbarComponent_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const level_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", level_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", level_r6.display_name || level_r6.name, " ");
  }
}
function CateringTopbarComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CateringTopbarComponent_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r7.addItem());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "app-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function CateringTopbarComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CateringTopbarComponent_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r9.editConfig());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "app-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "menu_book");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function CateringTopbarComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CateringTopbarComponent_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r11.importMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "app-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "cloud_upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function CateringTopbarComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CateringTopbarComponent_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r13.setRoomAvailability());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "app-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "event_available");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function CateringTopbarComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CateringTopbarComponent_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r15.setChargeCodes());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "app-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "payments");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
class CateringTopbarComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  /** Active Building */
  get building() {
    return this._org.building;
  }
  constructor(_orders, _catering, _org, _route, _router, _dialog) {
    super();
    this._orders = _orders;
    this._catering = _catering;
    this._org = _org;
    this._route = _route;
    this._router = _router;
    this._dialog = _dialog;
    /** List of selected levels */
    this.zones = [];
    /** List of levels for the active building */
    this.levels = this._org.active_levels;
    /** Set filtered date */
    this.setDate = date => this._orders.filters = {
      ...this._orders.filters,
      date
    };
    /** List of levels for the active building */
    this.updateZones = z => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: {
          zone_ids: z.join(',')
        }
      });
      this._orders.filters = {
        ...this._orders.filters,
        zones: [z]
      };
      this._catering.zone = z[0] || this._catering.zone;
    };
    this.addItem = () => this._catering.addItem();
    this.editConfig = () => this._catering.editConfig();
    this.importMenu = () => this._catering.importMenu();
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this._org.initialised.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.first)(_ => _)).toPromise();
      _this._catering.zone = (_this._orders.filters?.zones || [])[0] || _this._org.building?.id;
      _this.subscription('route.query', _this._route.queryParamMap.subscribe(params => {
        if (params.has('zone_ids')) {
          const zones = params.get('zone_ids').split(',');
          if (!zones.length) return;
          const level = _this._org.levelWithID(zones);
          _this.zones = zones;
          if (!level) return;
          _this._org.building = _this._org.buildings.find(bld => bld.id === level.parent_id);
        }
      }));
      _this.subscription('route.params', _this._route.paramMap.subscribe(params => _this.page = params.has('view') ? params.get('view') : ''));
      _this.subscription('levels', _this._org.active_levels.subscribe(levels => {
        _this.zones = _this.zones.filter(zone => levels.find(lvl => lvl.id === zone));
        if (!_this.zones.length && levels.length) {
          _this.zones.push(levels[0].id);
        }
        _this.updateZones(_this.zones);
      }));
    })();
  }
  setRoomAvailability() {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ref = _this2._dialog.open(_placeos_components__WEBPACK_IMPORTED_MODULE_4__.AvailableRoomsStateModalComponent, {
        data: {
          type: 'Catering',
          disabled_rooms: yield _this2._catering.availability.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).toPromise()
        }
      });
      _this2.subscription('room-availability', ref.componentInstance.change.subscribe( /*#__PURE__*/function () {
        var _ref = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (list) {
          yield _this2._catering.saveSettings({
            disabled_rooms: list
          }).catch();
          ref.componentInstance.loading = false;
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()));
    })();
  }
  setChargeCodes() {
    this._dialog.open(_placeos_catering__WEBPACK_IMPORTED_MODULE_3__.ChargeCodeListModalComponent);
  }
  static #_ = this.ɵfac = function CateringTopbarComponent_Factory(t) {
    return new (t || CateringTopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_placeos_catering__WEBPACK_IMPORTED_MODULE_3__.CateringOrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_placeos_catering__WEBPACK_IMPORTED_MODULE_3__.CateringStateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: CateringTopbarComponent,
    selectors: [["catering-topbar"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
    decls: 14,
    vars: 10,
    consts: [[1, "flex", "items-center", "bg-base-100", "h-20", "px-4", "border-b", "border-base-200", "space-x-2"], ["appearance", "outline"], ["placeholder", "All Levels", 3, "ngModel", "ngModelChange"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["btn", "", "matRipple", "", "matTooltip", "Add Item", 3, "click", 4, "ngIf"], ["btn", "", "matRipple", "", "matTooltip", "Edit Config", 3, "click", 4, "ngIf"], ["btn", "", "matRipple", "", "matTooltip", "Import Menu", 3, "click", 4, "ngIf"], ["btn", "", "matRipple", "", "matTooltip", "Room Availability", 3, "click", 4, "ngIf"], ["btn", "", "matRipple", "", "matTooltip", "Charge Codes", 3, "click", 4, "ngIf"], [1, "flex-1", "w-2"], [3, "dateChange"], ["btn", "", "matRipple", "", "matTooltip", "Add Item", 3, "click"], [1, "text-2xl"], ["btn", "", "matRipple", "", "matTooltip", "Edit Config", 3, "click"], ["btn", "", "matRipple", "", "matTooltip", "Import Menu", 3, "click"], ["btn", "", "matRipple", "", "matTooltip", "Room Availability", 3, "click"], ["btn", "", "matRipple", "", "matTooltip", "Charge Codes", 3, "click"]],
    template: function CateringTopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "mat-form-field", 1)(2, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CateringTopbarComponent_Template_mat_select_ngModelChange_2_listener($event) {
          return ctx.zones[0] = $event;
        })("ngModelChange", function CateringTopbarComponent_Template_mat_select_ngModelChange_2_listener($event) {
          return ctx.updateZones([$event]);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " All Levels ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, CateringTopbarComponent_mat_option_5_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, CateringTopbarComponent_button_7_Template, 3, 0, "button", 5)(8, CateringTopbarComponent_button_8_Template, 3, 0, "button", 6)(9, CateringTopbarComponent_button_9_Template, 3, 0, "button", 7)(10, CateringTopbarComponent_button_10_Template, 3, 0, "button", 8)(11, CateringTopbarComponent_button_11_Template, 3, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "date-options", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("dateChange", function CateringTopbarComponent_Template_date_options_dateChange_13_listener($event) {
          return ctx.setDate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.zones[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.building == null ? null : ctx.building.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 8, ctx.levels));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.page === "menu" && (!ctx.zones[0] || ctx.zones[0] === (ctx.building == null ? null : ctx.building.id)));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.page === "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.page === "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.page === "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.page === "menu");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _ui_date_options_component__WEBPACK_IMPORTED_MODULE_5__.DateOptionsComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltip, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_6__.IconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe],
    styles: ["mat-form-field[_ngcontent-%COMP%] {\n                height: 3.25em;\n                width: 8em;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvY2F0ZXJpbmcvY2F0ZXJpbmctdG9wYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksY0FBYztnQkFDZCxVQUFVO1lBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMuMjVlbTtcbiAgICAgICAgICAgICAgICB3aWR0aDogOGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 13694:
/*!***************************************************************!*\
  !*** ./apps/concierge/src/app/catering/catering.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CateringComponent: () => (/* binding */ CateringComponent)
/* harmony export */ });
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _ui_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/sidebar.component */ 42349);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _libs_catering_src_lib_catering_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/catering/src/lib/catering-menu.component */ 56748);
/* harmony import */ var _libs_catering_src_lib_catering_order_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/catering/src/lib/catering-order-list.component */ 82467);
/* harmony import */ var _catering_topbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./catering-topbar.component */ 4210);










const _c0 = ["app-catering", ""];
function CateringComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " To edit the menu select \"All Levels\" from the top left ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CateringComponent_catering_order_list_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "catering-order-list", 8);
  }
}
function CateringComponent_catering_menu_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "catering-menu", 8);
  }
}
const _c1 = () => ["/book", "catering", "menu"];
const _c2 = () => ["/book", "catering", "orders"];
function CateringComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9)(1, "a", 10)(2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Menus and Pricing");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " View and Edit Menus and Pricing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "a", 10)(9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Today's Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " View Catering Orders and their statuses upon arrival ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](6, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-image", "url(assets/menus.jpg)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](7, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-image", "url(assets/orders.jpg)");
  }
}
class CateringComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_0__.AsyncHandler {
  constructor(_route) {
    super();
    this._route = _route;
  }
  ngOnInit() {
    this.subscription('route.params', this._route.paramMap.subscribe(params => this.page = params.has('view') ? params.get('view') : ''));
  }
  static #_ = this.ɵfac = function CateringComponent_Factory(t) {
    return new (t || CateringComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: CateringComponent,
    selectors: [["", "app-catering", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
    attrs: _c0,
    decls: 9,
    vars: 4,
    consts: [[1, "relative", "w-full", "flex", "flex-col", "bg-base-200"], [1, "relative", "z-10"], ["class", "p-2 flex items-center justify-center bg-info text-info-content text-sm", 4, "ngIf"], [1, "flex", "flex-1", "h-1/2", "w-full", "overflow-auto"], [3, "ngSwitch"], ["class", "flex-1", 4, "ngSwitchCase"], ["class", "flex flex-1 flex-wrap items-center justify-center", 4, "ngSwitchDefault"], [1, "p-2", "flex", "items-center", "justify-center", "bg-info", "text-info-content", "text-sm"], [1, "flex-1"], [1, "flex", "flex-1", "flex-wrap", "items-center", "justify-center"], ["matRipple", "", 1, "rounded", "flex", "flex-col", "items-center", "bg-base-100", "shadow", "text-black", 3, "routerLink"], ["name", "img", 1, "relative", "w-full", "flex", "flex-1", "items-center", "justify-center", "text-2xl", "text-white", "bg-center", "bg-cover"], [1, "absolute", "inset-0", "bg-neutral", "opacity-60", "z-0"], [1, "z-10"], [1, "p-2", "h-14", "w-full", "text-sm", "text-center", "flex", "items-center", "justify-center"]],
    template: function CateringComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "catering-topbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, CateringComponent_div_3_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](5, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, CateringComponent_catering_order_list_6_Template, 1, 0, "catering-order-list", 5)(7, CateringComponent_catering_menu_7_Template, 1, 0, "catering-menu", 5)(8, CateringComponent_div_8_Template, 15, 8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.page === "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitch", ctx.page);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "menu");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitchDefault, _ui_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRipple, _libs_catering_src_lib_catering_menu_component__WEBPACK_IMPORTED_MODULE_2__.CateringMenuComponent, _libs_catering_src_lib_catering_order_list_component__WEBPACK_IMPORTED_MODULE_3__.CateringOrderListComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _catering_topbar_component__WEBPACK_IMPORTED_MODULE_4__.CateringTopbarComponent],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                height: 100%;\n                width: 100%;\n            }\n\n            a[_ngcontent-%COMP%] {\n                width: 28rem;\n                height: 16rem;\n                margin-left: 0.5rem;\n                text-decoration: none;\n                transition: background 200ms;\n            }\n\n            a[_ngcontent-%COMP%]:hover {\n                opacity: 0.8;\n            }\n\n            a[_ngcontent-%COMP%]:first-child {\n                margin: 0;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvY2F0ZXJpbmcvY2F0ZXJpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLFlBQVk7Z0JBQ1osV0FBVztZQUNmOztZQUVBO2dCQUNJLFlBQVk7Z0JBQ1osYUFBYTtnQkFDYixtQkFBbUI7Z0JBQ25CLHFCQUFxQjtnQkFDckIsNEJBQTRCO1lBQ2hDOztZQUVBO2dCQUNJLFlBQVk7WUFDaEI7O1lBRUE7Z0JBQ0ksU0FBUztZQUNiIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyOHJlbTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2cmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMjAwbXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYTpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 69869:
/*!************************************************************!*\
  !*** ./apps/concierge/src/app/catering/catering.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CateringModule: () => (/* binding */ CateringModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ 60989);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ 21757);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/ui.module */ 97428);
/* harmony import */ var _catering_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catering.component */ 13694);
/* harmony import */ var _catering_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catering-topbar.component */ 4210);
/* harmony import */ var _placeos_catering__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/catering */ 5039);
/* harmony import */ var _new_catering_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-catering.component */ 67078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);












const ROUTES = [{
  path: '',
  component: _catering_component__WEBPACK_IMPORTED_MODULE_1__.CateringComponent
}, {
  path: 'new',
  component: _new_catering_component__WEBPACK_IMPORTED_MODULE_4__.NewCateringComponent
}, {
  path: ':view',
  component: _catering_component__WEBPACK_IMPORTED_MODULE_1__.CateringComponent
}, {
  path: 'new/:view',
  component: _new_catering_component__WEBPACK_IMPORTED_MODULE_4__.NewCateringComponent
}];
class CateringModule {
  static #_ = this.ɵfac = function CateringModule_Factory(t) {
    return new (t || CateringModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: CateringModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabsModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__.MatChipsModule, _placeos_catering__WEBPACK_IMPORTED_MODULE_3__.SharedCateringModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(ROUTES)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CateringModule, {
    declarations: [_catering_component__WEBPACK_IMPORTED_MODULE_1__.CateringComponent, _new_catering_component__WEBPACK_IMPORTED_MODULE_4__.NewCateringComponent, _catering_topbar_component__WEBPACK_IMPORTED_MODULE_2__.CateringTopbarComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabsModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__.MatChipsModule, _placeos_catering__WEBPACK_IMPORTED_MODULE_3__.SharedCateringModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ }),

/***/ 67078:
/*!*******************************************************************!*\
  !*** ./apps/concierge/src/app/catering/new-catering.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewCateringComponent: () => (/* binding */ NewCateringComponent)
/* harmony export */ });
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/app-topbar.component */ 33005);
/* harmony import */ var _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/app-sidebar.component */ 19842);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _libs_catering_src_lib_catering_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/catering/src/lib/catering-menu.component */ 56748);
/* harmony import */ var _libs_catering_src_lib_catering_order_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/catering/src/lib/catering-order-list.component */ 82467);
/* harmony import */ var _catering_topbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./catering-topbar.component */ 4210);











const _c0 = ["app-new-catering", ""];
function NewCateringComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " To edit the menu select \"All Levels\" from the top left ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function NewCateringComponent_catering_order_list_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "catering-order-list", 9);
  }
}
function NewCateringComponent_catering_menu_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "catering-menu", 9);
  }
}
const _c1 = () => ["/catering", "menu"];
const _c2 = () => ["/catering", "orders"];
function NewCateringComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 10)(1, "a", 11)(2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Menus and Pricing");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " View and Edit Menus and Pricing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "a", 11)(9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Today's Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " View Catering Orders and their statuses upon arrival ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-image", "url(assets/menus.jpg)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](7, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-image", "url(assets/orders.jpg)");
  }
}
class NewCateringComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_0__.AsyncHandler {
  constructor(_route) {
    super();
    this._route = _route;
  }
  ngOnInit() {
    this.subscription('route.params', this._route.paramMap.subscribe(params => this.page = params.has('view') ? params.get('view') : ''));
  }
  static #_ = this.ɵfac = function NewCateringComponent_Factory(t) {
    return new (t || NewCateringComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: NewCateringComponent,
    selectors: [["", "app-new-catering", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
    attrs: _c0,
    decls: 11,
    vars: 4,
    consts: [[1, "flex", "flex-1", "h-px"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full"], [1, "relative", "z-10"], ["class", "p-2 flex items-center justify-center bg-info text-white text-sm", 4, "ngIf"], [1, "flex", "flex-1", "h-1/2", "w-full", "overflow-auto"], [3, "ngSwitch"], ["class", "flex-1", 4, "ngSwitchCase"], ["class", "flex flex-1 flex-wrap items-center justify-center", 4, "ngSwitchDefault"], [1, "p-2", "flex", "items-center", "justify-center", "bg-info", "text-white", "text-sm"], [1, "flex-1"], [1, "flex", "flex-1", "flex-wrap", "items-center", "justify-center"], ["matRipple", "", 1, "rounded", "flex", "flex-col", "items-center", "bg-base-100", "shadow", "text-black", 3, "routerLink"], ["name", "img", 1, "relative", "w-full", "flex", "flex-1", "items-center", "justify-center", "text-2xl", "text-white", "bg-center", "bg-cover"], [1, "absolute", "inset-0", "bg-neutral", "opacity-60", "z-0"], [1, "z-10"], [1, "p-2", "h-14", "w-full", "text-sm", "text-center", "flex", "items-center", "justify-center"]],
    template: function NewCateringComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-topbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "catering-topbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, NewCateringComponent_div_5_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, NewCateringComponent_catering_order_list_8_Template, 1, 0, "catering-order-list", 6)(9, NewCateringComponent_catering_menu_9_Template, 1, 0, "catering-menu", 6)(10, NewCateringComponent_div_10_Template, 15, 8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.page === "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitch", ctx.page);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "menu");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgSwitchDefault, _ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_1__.ApplicationTopbarComponent, _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.ApplicationSidebarComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatRipple, _libs_catering_src_lib_catering_menu_component__WEBPACK_IMPORTED_MODULE_3__.CateringMenuComponent, _libs_catering_src_lib_catering_order_list_component__WEBPACK_IMPORTED_MODULE_4__.CateringOrderListComponent, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _catering_topbar_component__WEBPACK_IMPORTED_MODULE_5__.CateringTopbarComponent],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n                background-color: var(--b1);\n            }\n\n            a[_ngcontent-%COMP%] {\n                width: 28rem;\n                height: 16rem;\n                margin-left: 0.5rem;\n                text-decoration: none;\n                transition: background 200ms;\n            }\n\n            a[_ngcontent-%COMP%]:hover {\n                opacity: 0.8;\n            }\n\n            a[_ngcontent-%COMP%]:first-child {\n                margin: 0;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvY2F0ZXJpbmcvbmV3LWNhdGVyaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixzQkFBc0I7Z0JBQ3RCLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCwyQkFBMkI7WUFDL0I7O1lBRUE7Z0JBQ0ksWUFBWTtnQkFDWixhQUFhO2dCQUNiLG1CQUFtQjtnQkFDbkIscUJBQXFCO2dCQUNyQiw0QkFBNEI7WUFDaEM7O1lBRUE7Z0JBQ0ksWUFBWTtZQUNoQjs7WUFFQTtnQkFDSSxTQUFTO1lBQ2IiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWIxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI4cmVtO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTZyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAyMDBtcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=apps_concierge_src_app_catering_catering_module_ts.js.map