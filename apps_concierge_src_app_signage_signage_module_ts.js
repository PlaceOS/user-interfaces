"use strict";
(self["webpackChunkconcierge"] = self["webpackChunkconcierge"] || []).push([["apps_concierge_src_app_signage_signage_module_ts"],{

/***/ 37056:
/*!********************************************************************!*\
  !*** ./apps/concierge/src/app/signage/search-overlay.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchOverlayComponent: () => (/* binding */ SearchOverlayComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);







const _c0 = a0 => ({
  item: a0
});
function SearchOverlayComponent_For_8_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function SearchOverlayComponent_For_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SearchOverlayComponent_For_8_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 11);
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.result_template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, item_r2));
  }
}
function SearchOverlayComponent_For_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r2.name || item_r2, " ");
  }
}
function SearchOverlayComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchOverlayComponent_For_8_Template_button_click_0_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.selected.next(item_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SearchOverlayComponent_For_8_Conditional_1_Template, 1, 4, "ng-container")(2, SearchOverlayComponent_For_8_Conditional_2_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx_r2.result_template ? 1 : 2);
  }
}
function SearchOverlayComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchOverlayComponent_Conditional_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.close.next());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " No items available to select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class SearchOverlayComponent {
  constructor() {
    this.item_list = [];
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.search = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('');
    this._items = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
  }
  ngOnChanges(changes) {
    if (changes.item_list) {
      this._items.next(this.item_list || []);
    }
  }
  static #_ = this.ɵfac = function SearchOverlayComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SearchOverlayComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SearchOverlayComponent,
    selectors: [["search-overlay"]],
    inputs: {
      item_list: "item_list",
      result_template: "result_template"
    },
    outputs: {
      selected: "selected",
      close: "close"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    decls: 13,
    vars: 2,
    consts: [[1, "absolute", "inset-0", "flex", "flex-col", "p-8", "items-center", 3, "click", "keydown.esc"], [1, "absolute", "inset-0", "bg-base-content", "opacity-70", "z-0"], [1, "relative", "mb-4", "w-[32rem]", "max-w-[calc(100%-2rem)]", "mx-auto", "z-10", 3, "click"], ["placeholder", "Search...", 1, "rounded-[4rem]", "text-xl", "text-base-content", "bg-base-100", "border", "border-base-300", "shadow", "pl-14", "pr-6", "py-4", "w-full", 3, "ngModelChange", "ngModel"], [1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "text-3xl", "pointer-events-none"], [1, "overflow-auto", "max-h-[65%]", "w-[32rem]", "max-w-[calc(100%-2rem)]", "mx-auto", "rounded", "z-10", 3, "click"], ["matRipple", "", 1, "w-full", "text-left"], ["matRipple", "", 1, "w-full", "p-4", "text-base-100"], ["icon", "", "matRipple", "", 1, "absolute", "top-10", "right-8", "text-base-100", "text-xl", "h-12", "w-12"], ["matRipple", "", 1, "w-full", "text-left", 3, "click"], [1, "p-4", "w-full", "bg-base-100", "hover:bg-base-200", "border", "border-base-300"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["matRipple", "", 1, "w-full", "p-4", "text-base-100", 3, "click"], [1, "opacity-30"]],
    template: function SearchOverlayComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchOverlayComponent_Template_div_click_0_listener() {
          return ctx.close.next();
        })("keydown.esc", function SearchOverlayComponent_Template_div_keydown_esc_0_listener() {
          return ctx.close.next();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchOverlayComponent_Template_div_click_2_listener($event) {
          return $event.stopPropagation();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchOverlayComponent_Template_input_ngModelChange_3_listener($event) {
          return ctx.search.next($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "app-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchOverlayComponent_Template_div_click_6_listener($event) {
          return $event.stopPropagation();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](7, SearchOverlayComponent_For_8_Template, 3, 1, "button", 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SearchOverlayComponent_Conditional_9_Template, 3, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 8)(11, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.search.getValue());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.item_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](!(ctx.item_list == null ? null : ctx.item_list.length) ? 9 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_0__.IconComponent]
  });
}

/***/ }),

/***/ 91992:
/*!***************************************************************************!*\
  !*** ./apps/concierge/src/app/signage/signage-display-modal.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignageDisplayModalComponent: () => (/* binding */ SignageDisplayModalComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);

















function SignageDisplayModalComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 6)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function SignageDisplayModalComponent_main_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "main", 7)(1, "div", 8)(2, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 8)(11, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "textarea", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 8)(16, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Orientation");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-form-field", 11)(19, "mat-select", 16)(20, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, " Unspecified ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Landscape");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Portrait");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Square");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r0.form);
  }
}
function SignageDisplayModalComponent_footer_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "footer", 21)(1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SignageDisplayModalComponent_footer_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function SignageDisplayModalComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "main", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-spinner", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Saving display...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("diameter", 32);
  }
}
class SignageDisplayModalComponent {
  constructor(_data, _dialog_ref, _org) {
    this._data = _data;
    this._dialog_ref = _dialog_ref;
    this._org = _org;
    this.loading = false;
    this.display = this._data.display;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
      id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this._data.display?.id || ''),
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this._data.display?.display_name || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this._data.display?.description || ''),
      orientation: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this._data.display?.orientation || 'unspecified')
    });
  }
  save() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.form.markAllAsTouched();
      _this.form.updateValueAndValidity();
      if (_this.form.invalid) return;
      _this.loading = true;
      const form_value = _this.form.getRawValue();
      const new_display = new _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.PlaceSystem({
        ...form_value,
        name: `SIGNAGE ${form_value.name}`,
        display_name: form_value.name,
        signage: true,
        zones: (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.unique)([_this._org.organisation.id, _this._org.region?.id, _this._org.building?.id, ..._this.display.zones].filter(_ => !!_))
      });
      const method = _this.display.id ? (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.updateSystem)(_this.display.id, new_display) : (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.addSystem)(new_display);
      const result = yield method.toPromise();
      _this._dialog_ref.close(result);
    })();
  }
  static #_ = this.ɵfac = function SignageDisplayModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SignageDisplayModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: SignageDisplayModalComponent,
    selectors: [["signage-display-modal"]],
    decls: 8,
    vars: 5,
    consts: [["load_state", ""], [1, "flex", "items-center", "justify-between", "border-b", "border-base-300", "p-2"], [1, "p-2", "font-medium", "text-xl"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "p-4 flex flex-col w-[32rem] max-w-[calc(100vw-2rem)]", 3, "formGroup", 4, "ngIf", "ngIfElse"], ["class", "flex justify-end p-4 border-t border-base-200", 4, "ngIf"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "p-4", "flex", "flex-col", "w-[32rem]", "max-w-[calc(100vw-2rem)]", 3, "formGroup"], [1, "flex", "flex-col"], ["for", "name"], ["required", ""], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "name", "placeholder", "Name", "formControlName", "name", "required", ""], ["for", "description"], ["matInput", "", "name", "description", "placeholder", "Description", "formControlName", "description", 1, "min-h-32"], ["for", "orientation"], ["name", "orientation", "formControlName", "orientation", "placeholder", "Unspecified"], ["value", "unspecified"], ["value", "landscape"], ["value", "portrait"], ["value", "square"], [1, "flex", "justify-end", "p-4", "border-t", "border-base-200"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "p-8"], [3, "diameter"], [1, "mt-4"]],
    template: function SignageDisplayModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "header", 1)(1, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, SignageDisplayModalComponent_button_3_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, SignageDisplayModalComponent_main_4_Template, 28, 1, "main", 4)(5, SignageDisplayModalComponent_footer_5_Template, 3, 0, "footer", 5)(6, SignageDisplayModalComponent_ng_template_6_Template, 4, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const load_state_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.display.id ? "Edit" : "New", " Display ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", load_state_r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__.MatProgressSpinner, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogClose, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatRipple, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__.IconComponent]
  });
}

/***/ }),

/***/ 30041:
/*!**********************************************************************!*\
  !*** ./apps/concierge/src/app/signage/signage-displays.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignageDisplaysComponent: () => (/* binding */ SignageDisplaysComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var _signage_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signage-state.service */ 65383);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 50854);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _search_overlay_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-overlay.component */ 37056);
/* harmony import */ var _signage_item_playlists_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signage-item-playlists.component */ 47611);
/* harmony import */ var _libs_components_src_lib_zone_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/zone.pipe */ 45312);






















const _forTrack0 = ($index, $item) => $item.id;
const _c0 = () => [];
const _c1 = a0 => ({
  display: a0
});
const _c2 = (a0, a1) => ({
  display: a0,
  trigger: a1
});
const _c3 = () => ["/signage", "zones"];
const _c4 = a0 => ({
  zone: a0
});
function SignageDisplaysComponent_Conditional_6_For_2_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 13)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "a", 16)(4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const trigger_r1 = ctx.$implicit;
    const display_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("!bg-secondary", ctx_r2.selected_trigger.getValue() === (trigger_r1 == null ? null : trigger_r1.id))("text-secondary-content", ctx_r2.selected_trigger.getValue() === (trigger_r1 == null ? null : trigger_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](7, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](8, _c2, display_r2.id, trigger_r1 == null ? null : trigger_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"]((trigger_r1 == null ? null : trigger_r1.display_name) || (trigger_r1 == null ? null : trigger_r1.name) || "Trigger");
  }
}
function SignageDisplaysComponent_Conditional_6_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](0, SignageDisplaysComponent_Conditional_6_For_2_Conditional_2_For_1_Template, 6, 11, "div", 13, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 0, ctx_r2.triggers));
  }
}
function SignageDisplaysComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, SignageDisplaysComponent_Conditional_6_For_2_Conditional_2_Template, 3, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
  }
  if (rf & 2) {
    let tmp_16_0;
    const display_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("!bg-secondary", ctx_r2.selected.getValue() === display_r2.id)("text-secondary-content", ctx_r2.selected.getValue() === display_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](10, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](11, _c1, display_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", display_r2.display_name || display_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](((tmp_16_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 8, ctx_r2.active_display)) == null ? null : tmp_16_0.id) === display_r2.id && !ctx_r2.switching ? 2 : -1);
  }
}
function SignageDisplaysComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](1, SignageDisplaysComponent_Conditional_6_For_2_Template, 4, 13, null, null, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 0, ctx_r2.displays));
  }
}
function SignageDisplaysComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 7)(1, "app-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "hide_image");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r2.search.getValue() ? "No matching displays found" : "No displays", " ");
  }
}
function SignageDisplaysComponent_Conditional_10_div_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "zone");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "zone");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_15_0;
    const zone_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](11, _c3))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](12, _c4, zone_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ((tmp_15_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 5, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 3, zone_r5))) == null ? null : tmp_15_0.display_name) || ((tmp_15_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 9, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 7, zone_r5))) == null ? null : tmp_15_0.name), " ");
  }
}
function SignageDisplaysComponent_Conditional_10_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](1, SignageDisplaysComponent_Conditional_10_div_6_For_2_Template, 6, 14, "a", 30, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, " Add Zone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"]((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 0, ctx_r2.active_display)) == null ? null : tmp_3_0.zones);
  }
}
function SignageDisplaysComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "signage-item-playlists", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("add", function SignageDisplaysComponent_Conditional_10_Template_signage_item_playlists_add_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.adding = true);
    })("remove", function SignageDisplaysComponent_Conditional_10_Template_signage_item_playlists_remove_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.removePlaylist($event));
    })("ondrop", function SignageDisplaysComponent_Conditional_10_Template_signage_item_playlists_ondrop_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.drop($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, SignageDisplaysComponent_Conditional_10_div_6_Template, 6, 2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "button", 22)(9, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "mat-menu", null, 0)(13, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 24)(16, "app-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "open_in_new");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Open Signage Player");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SignageDisplaysComponent_Conditional_10_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.removeDisplay());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 24)(22, "app-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Remove Display");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_7_0;
    const menu_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](12);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 6, ctx_r2.active_trigger) || _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 8, ctx_r2.active_display))("name", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 10, ctx_r2.active_trigger) ? "trigger" : "display")("extra", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 12, ctx_r2.active_trigger) ? "" : (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 14, ctx_r2.active_display)) == null ? null : tmp_4_0.orientation);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 16, ctx_r2.active_trigger));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matMenuTriggerFor", menu_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("href", ctx_r2.signage_path + "/#/signage/" + ((tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](14, 18, ctx_r2.active_display)) == null ? null : tmp_7_0.id), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}
function SignageDisplaysComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 10)(1, "app-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "desktop_windows");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Select a display from the left to view playlists");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function SignageDisplaysComponent_search_overlay_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "search-overlay", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selected", function SignageDisplaysComponent_search_overlay_13_Template_search_overlay_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.addPlaylist($event));
    })("close", function SignageDisplaysComponent_search_overlay_13_Template_search_overlay_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.adding = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item_list", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, ctx_r2.playlists));
  }
}
class SignageDisplaysComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_2__.AsyncHandler {
  get signage_path() {
    return this._settings.get('app.signage_path') || '/signage';
  }
  constructor(_state, _route, _settings) {
    var _this;
    super();
    _this = this;
    this._state = _state;
    this._route = _route;
    this._settings = _settings;
    this.adding = false;
    this.switching = false;
    this.search = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject('');
    this.loading = this._state.loading;
    this.displays = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)([this.search, this._state.displays]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(([search, list]) => list.filter(_ => _.name.toLowerCase().includes(search.toLowerCase()))));
    this.selected = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject('');
    this.selected_trigger = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject('');
    this.active_display = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)([this.displays, this.selected]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(([displays, id]) => displays.find(item => item.id === id)));
    this.triggers = this.selected.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(id => (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.listSystemTriggers)(id)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(_ => _.data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(_ => setTimeout(() => this.switching = false, 200)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.shareReplay)(1));
    this.active_trigger = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)([this.triggers, this.selected_trigger, this.selected]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(([list, id, sys_id]) => list.find(item => item.id === id && item.control_system_id === sys_id)));
    this.playlists = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)([this.active_display, this.active_trigger, this._state.playlists, this._state.has_changed]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(([display, trigger, playlists]) => playlists.filter(_ => !(trigger || display)?.playlists.find(id => _.id === id))));
    this.removeDisplay = /*#__PURE__*/(0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this._state.removeDisplay(yield _this.active_display.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.take)(1)).toPromise());
    });
  }
  ngOnInit() {
    this.subscription('route.params', this._route.queryParamMap.subscribe(params => {
      this.switching = params.get('display') !== this.selected.getValue();
      this.selected.next(params.get('display') || '');
      this.selected_trigger.next(params.get('trigger') || '');
    }));
  }
  addPlaylist(playlist) {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const display = yield _this2.active_display.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.take)(1)).toPromise();
      const trigger = yield _this2.active_trigger.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.take)(1)).toPromise();
      const item = trigger || display;
      const playlists = [...item.playlists, playlist.id];
      const method = trigger ? _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.updateTrigger : _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.updateSystem;
      yield method(item.id, {
        playlists,
        version: display.version
      }, 'patch').toPromise();
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifySuccess)(`Successfully added playlist to the ${trigger ? 'trigger' : 'display'}`);
      _this2._state.changed();
      _this2.adding = false;
    })();
  }
  removePlaylist(playlist) {
    var _this3 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const display = yield _this3.active_display.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.take)(1)).toPromise();
      const trigger = yield _this3.active_trigger.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.take)(1)).toPromise();
      const item = trigger || display;
      const playlists = item.playlists.filter(id => playlist.id !== id);
      const method = trigger ? _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.updateTrigger : _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.updateSystem;
      yield method(item.id, {
        playlists,
        version: display.version
      }, 'patch').toPromise();
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifySuccess)(`Successfully removed playlist from ${trigger ? 'trigger' : 'display'}`);
      _this3._state.changed();
      _this3.adding = false;
    })();
  }
  drop(event) {
    var _this4 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const display = yield _this4.active_display.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.take)(1)).toPromise();
      const trigger = yield _this4.active_trigger.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.take)(1)).toPromise();
      const item = trigger || display;
      const old_playlist = item.playlists;
      const playlists = [...old_playlist];
      (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__.moveItemInArray)(playlists, event.previousIndex, event.currentIndex);
      item.playlists = playlists;
      _this4._state.changed();
      const method = trigger ? _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.updateTrigger : _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.updateSystem;
      yield method(item.id, {
        playlists,
        version: display.version
      }, 'patch').toPromise().catch(e => {
        item.playlists = old_playlist;
        _this4._state.changed();
        throw e;
      });
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifySuccess)(`Successfully re-ordered playlists on ${trigger ? 'trigger' : 'display'}`);
      _this4._state.changed();
    })();
  }
  static #_ = this.ɵfac = function SignageDisplaysComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SignageDisplaysComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_signage_state_service__WEBPACK_IMPORTED_MODULE_1__.SignageStateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_2__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: SignageDisplaysComponent,
    selectors: [["signage-displays"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
    decls: 14,
    vars: 8,
    consts: [["menu", "matMenu"], [1, "relative", "h-full", "w-full", "overflow-visible", "flex", "space-x-4"], ["sidebar", "", 1, "w-64", "h-full", "flex", "flex-col", "space-y-4", "py-4"], [1, "text-xl", "font-medium", "text-center"], ["appearance", "outline", 1, "w-full", "no-subscript"], ["matInput", "", "placeholder", "Search...", 3, "ngModelChange", "ngModel"], [1, "h-1/2", "flex-1", "w-full", "overflow-auto", "space-y-2"], [1, "flex", "flex-col", "items-center", "justify-center", "p-8", "space-y-2", "opacity-30"], [1, "relative", "flex", "flex-col", "flex-1", "w-1/2", "h-full", "overflow-auto", "rounded-lg", "border", "border-base-300", "p-4", "shadow", "space-y-4"], [1, "flex", "flex-col", "flex-1", 3, "item", "name", "extra"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "opacity-30"], [3, "item_list", "selected", "close", 4, "ngIf"], ["matRipple", "", 1, "w-full", "px-6", "rounded-3xl", "min-h-12", "flex", "items-center", "hover:bg-base-200", "truncate", "z-10", 3, "routerLink", "queryParams"], [1, "relative", "flex", "items-center", "space-x-2", "z-0"], [1, "w-6"], [1, "absolute", "h-16", "w-4", "border-b-2", "border-l-2", "border-base-300", "top-1/2", "left-6", "-translate-y-full"], ["matRipple", "", 1, "w-1/2", "flex-1", "px-6", "rounded-3xl", "min-h-12", "flex", "items-center", "hover:bg-base-200", "truncate", 3, "routerLink", "queryParams"], [1, "max-w-full", "truncate"], [1, "text-6xl"], [1, "text-center"], [1, "flex", "flex-col", "flex-1", 3, "add", "remove", "ondrop", "item", "name", "extra"], ["class", "flex flex-wrap items-center overflow-auto mt-4", 4, "ngIf"], ["icon", "", "matRipple", "", 1, "absolute", "top-2", "right-2", "!m-0", 3, "matMenuTriggerFor"], ["mat-menu-item", "", "target", "_blank", "ref", "noopener noreferrer", 3, "href"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], [1, "pr-2"], ["mat-menu-item", "", 3, "click"], [1, "text-2xl", "text-error"], [1, "flex", "flex-wrap", "items-center", "overflow-auto", "mt-4"], ["matRipple", "", 1, "px-2", "py-1", "font-mono", "text-xs", "bg-base-200", "rounded", "whitespace-nowrap", "m-1", 3, "routerLink", "queryParams"], ["matRipple", "", 1, "underline", "font-mono", "text-xs", "px-2", "py-1", "rounded", "m-1"], [3, "selected", "close", "item_list"]],
    template: function SignageDisplaysComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Displays");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-form-field", 4)(5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function SignageDisplaysComponent_Template_input_ngModelChange_5_listener($event) {
          return ctx.search.next($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, SignageDisplaysComponent_Conditional_6_Template, 4, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, SignageDisplaysComponent_Conditional_8_Template, 5, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, SignageDisplaysComponent_Conditional_10_Template, 26, 20, "signage-item-playlists", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, SignageDisplaysComponent_Conditional_12_Template, 5, 0, "div", 10)(13, SignageDisplaysComponent_search_overlay_13_Template, 2, 3, "search-overlay", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.search.getValue());
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 4, ctx.displays)) == null ? null : tmp_1_0.length) > 0 ? 6 : 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 6, ctx.active_display) ? 10 : 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.adding);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInput, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__.IconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterLink, _search_overlay_component__WEBPACK_IMPORTED_MODULE_5__.SearchOverlayComponent, _signage_item_playlists_component__WEBPACK_IMPORTED_MODULE_6__.SignageItemPlaylistsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.AsyncPipe, _libs_components_src_lib_zone_pipe__WEBPACK_IMPORTED_MODULE_7__.ZonePipe]
  });
}

/***/ }),

/***/ 47611:
/*!****************************************************************************!*\
  !*** ./apps/concierge/src/app/signage/signage-item-playlists.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignageItemPlaylistsComponent: () => (/* binding */ SignageItemPlaylistsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var _signage_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signage-state.service */ 65383);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 89273);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 50854);













const _c0 = ["*"];
const _forTrack0 = ($index, $item) => $item.id;
const _c1 = () => ["/signage", "media"];
const _c2 = a0 => ({
  playlist: a0
});
function SignageItemPlaylistsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.extra, " ");
  }
}
function SignageItemPlaylistsComponent_Conditional_5_For_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 21);
  }
}
function SignageItemPlaylistsComponent_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SignageItemPlaylistsComponent_Conditional_5_For_2_div_1_Template, 1, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 10)(3, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "drag_handle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 11)(6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 14)(11, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-menu", null, 0)(15, "a", 15)(16, "div", 16)(17, "app-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " visibility ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "View Playlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SignageItemPlaylistsComponent_Conditional_5_For_2_Template_button_click_21_listener() {
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.remove.next(item_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 16)(23, "app-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Remove Playlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const menu_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.playlistCount(item_r4.id) || 0, " Media items ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", menu_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c2, item_r4.id));
  }
}
function SignageItemPlaylistsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkDropListDropped", function SignageItemPlaylistsComponent_Conditional_5_Template_div_cdkDropListDropped_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.ondrop.next($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](1, SignageItemPlaylistsComponent_Conditional_5_For_2_Template, 27, 8, "div", 7, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SignageItemPlaylistsComponent_Conditional_5_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.add.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Add Playlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 0, ctx_r0.active_playlists));
  }
}
function SignageItemPlaylistsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "div", 22)(2, "app-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "hide_image");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SignageItemPlaylistsComponent_Conditional_7_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.add.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Add Playlist ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("No playlists in ", ctx_r0.name, ".");
  }
}
const PLAYLIST_ITEM_COUNTS = {};
class SignageItemPlaylistsComponent {
  playlistCount(id) {
    return PLAYLIST_ITEM_COUNTS[id]?.count || 0;
  }
  constructor(_state) {
    this._state = _state;
    this.name = 'zone';
    this.extra = '';
    this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.ondrop = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this._playlist_ids = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    this.active_playlists = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)([this._state.playlists, this._playlist_ids, this._state.has_changed]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(([playlists, ids]) => ids.map(id => playlists.find(_ => _.id === id))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(playlists => {
      for (const item of playlists) {
        const old_counts = PLAYLIST_ITEM_COUNTS[item.id];
        if (old_counts && old_counts.last_updated > item.updated_at * 1000) {
          continue;
        }
        this._state.getPlaylistMedia(item.id).then(media => {
          PLAYLIST_ITEM_COUNTS[item.id] = {
            count: media.length,
            last_updated: Date.now()
          };
        });
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)([]));
  }
  ngOnChanges(changes) {
    if (changes.item) {
      this._playlist_ids.next(this.item?.playlists || []);
    }
  }
  static #_ = this.ɵfac = function SignageItemPlaylistsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SignageItemPlaylistsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_signage_state_service__WEBPACK_IMPORTED_MODULE_0__.SignageStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SignageItemPlaylistsComponent,
    selectors: [["signage-item-playlists"]],
    inputs: {
      item: "item",
      name: "name",
      extra: "extra"
    },
    outputs: {
      add: "add",
      remove: "remove",
      ondrop: "ondrop"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 8,
    vars: 5,
    consts: [["menu", "matMenu"], [1, "flex", "items-center", "justify-center", "space-x-2"], [1, "text-xl", "font-medium"], ["class", "px-2 py-1 text-xs font-mono bg-base-200 rounded-lg uppercase", 4, "ngIf"], [1, "flex", "flex-col", "items-center", "justify-center", "p-8", "space-y-2", "mx-auto", "flex-1"], [1, "px-2", "py-1", "text-xs", "font-mono", "bg-base-200", "rounded-lg", "uppercase"], ["cdkDropList", "", 1, "flex-1", "h-1/2", "overflow-auto", "flex", "flex-col", "space-y-2", "mt-4", 3, "cdkDropListDropped"], ["cdkDrag", "", 1, "w-full", "bg-base-100", "h-20", "rounded-lg", "flex", "items-center", "p-2", "space-x-2", "border", "border-base-300"], ["btn", "", "matRipple", "", 3, "click"], ["class", "h-20 w-full border-4 border-dashed border-base-400 bg-base-300 rounded-xl", 4, "cdkDragPlaceholder"], ["matRipple", "", "cdkDragHandle", "", "matTooltip", "Drag to reorder", 1, "flex", "items-center", "justify-center", "w-6", "h-full", "rounded", "hover:bg-base-200"], [1, "text-base-content", "flex-1", "w-1/2"], [1, "truncate"], [1, "truncate", "text-sm", "opacity-30"], ["icon", "", "matRipple", "", "aria-label", "Media Actions", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "routerLink", "queryParams"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], [1, "pr-2"], ["mat-menu-item", "", 3, "click"], [1, "text-2xl", "text-error"], [1, "h-20", "w-full", "border-4", "border-dashed", "border-base-400", "bg-base-300", "rounded-xl"], [1, "flex", "flex-col", "items-center", "justify-center", "opacity-30"], [1, "text-6xl"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"]],
    template: function SignageItemPlaylistsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SignageItemPlaylistsComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SignageItemPlaylistsComponent_Conditional_5_Template, 6, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, SignageItemPlaylistsComponent_Conditional_7_Template, 8, 1, "div", 4);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx.item == null ? null : ctx.item.display_name) || (ctx.item == null ? null : ctx.item.name), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.extra);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 3, ctx.active_playlists).length > 0 && ctx.item ? 5 : 7);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuTrigger, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltip, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__.CdkDrag, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__.CdkDragHandle, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__.CdkDragPlaceholder, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25hZ2UtaXRlbS1wbGF5bGlzdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLHNCQUFzQjtZQUMxQiIsImZpbGUiOiJzaWduYWdlLWl0ZW0tcGxheWxpc3RzLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvc2lnbmFnZS9zaWduYWdlLWl0ZW0tcGxheWxpc3RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixzQkFBc0I7WUFDMUI7O0FBRVosZ2RBQWdkIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 75649:
/*!************************************************************************!*\
  !*** ./apps/concierge/src/app/signage/signage-media-list.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignageMediaListComponent: () => (/* binding */ SignageMediaListComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var _signage_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signage-state.service */ 65383);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 99908);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 23206);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _libs_components_src_lib_authenticated_image_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/authenticated-image.directive */ 93208);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 50854);
/* harmony import */ var _libs_components_src_lib_media_duration_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/media-duration.pipe */ 28975);



















const _forTrack0 = ($index, $item) => $item.id;
function SignageMediaListComponent_Conditional_5_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 9);
  }
}
function SignageMediaListComponent_Conditional_5_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 10);
  }
}
function SignageMediaListComponent_Conditional_5_For_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24)(1, "app-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function SignageMediaListComponent_Conditional_5_For_3_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 26);
  }
  if (rf & 2) {
    const media_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("source", media_r4.thumbnail_url);
  }
}
function SignageMediaListComponent_Conditional_5_For_3_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "mediaDuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const media_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, media_r4.play_time / 1000), " ");
  }
}
function SignageMediaListComponent_Conditional_5_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SignageMediaListComponent_Conditional_5_For_3_Conditional_1_Template, 1, 0, "div", 9)(2, SignageMediaListComponent_Conditional_5_For_3_Conditional_2_Template, 1, 0, "div", 10)(3, SignageMediaListComponent_Conditional_5_For_3_div_3_Template, 3, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, SignageMediaListComponent_Conditional_5_For_3_img_5_Template, 1, 1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, SignageMediaListComponent_Conditional_5_For_3_div_8_Template, 3, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 16)(10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 18)(13, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-menu", null, 0)(17, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SignageMediaListComponent_Conditional_5_For_3_Template_button_click_17_listener() {
      const media_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.editItem(media_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 20)(19, "app-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Edit Media Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SignageMediaListComponent_Conditional_5_For_3_Template_button_click_23_listener() {
      const media_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.previewItem(media_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 20)(25, "app-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " Preview Media Item ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SignageMediaListComponent_Conditional_5_For_3_Template_button_click_29_listener() {
      const media_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.removeItem(media_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 20)(31, "app-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, " delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, " Remove Media Item ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const media_r4 = ctx.$implicit;
    const menu_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](16);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](media_r4.valid_from && ctx_r1.now < media_r4.valid_from ? 1 : media_r4.valid_until && ctx_r1.now > media_r4.valid_until ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", media_r4.thumbnail_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("bg-info", media_r4.media_type === "video")("text-info-content", media_r4.media_type === "video")("bg-warning", media_r4.media_type === "image")("text-warning-content", media_r4.media_type === "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", media_r4.media_type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", media_r4.play_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matTooltip", media_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", media_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", menu_r5);
  }
}
function SignageMediaListComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("cdkDropListDropped", function SignageMediaListComponent_Conditional_5_Template_div_cdkDropListDropped_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.drop($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](2, SignageMediaListComponent_Conditional_5_For_3_Template, 35, 15, "div", 8, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("cdkDropListData", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 2, ctx_r1.media))("cdkDropListConnectedTo", ctx_r1.playlist_ids);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 4, ctx_r1.media));
  }
}
function SignageMediaListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6)(1, "app-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "hide_image");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "No media found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
class SignageMediaListComponent {
  get now() {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.getUnixTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_7__.startOfMinute)(Date.now()));
  }
  constructor(_state) {
    var _this = this;
    this._state = _state;
    this.playlist_count = 0;
    this.search = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject('');
    this.media = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.search, this._state.media]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(([search, media]) => media.filter(_ => _.name.toLowerCase().includes(search.toLowerCase()))));
    this.playlist_ids = [];
    this.previewItem = item => this._state.previewMedia(item);
    this.editItem = item => this._state.editMedia(item);
    this.removeItem = /*#__PURE__*/function () {
      var _ref = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (item) {
        return _this._state.removeMedia(item);
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
  }
  ngOnChanges(changes) {
    if (changes.playlist_count) {
      this.playlist_ids = new Array(this.playlist_count).fill(0).map((_, idx) => `playlist-${idx}`);
    }
  }
  drop(event) {}
  static #_ = this.ɵfac = function SignageMediaListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SignageMediaListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_signage_state_service__WEBPACK_IMPORTED_MODULE_1__.SignageStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: SignageMediaListComponent,
    selectors: [["signage-media-list"]],
    inputs: {
      playlist_count: "playlist_count"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]],
    decls: 8,
    vars: 4,
    consts: [["menu", "matMenu"], [1, "p-4"], [1, "text-xl", "font-medium", "text-center", "mb-4"], ["appearance", "outline", 1, "w-full", "no-subscript"], ["matInput", "", "placeholder", "Search...", 3, "ngModelChange", "ngModel"], ["cdkDropList", "", "id", "media-list", 1, "grid", "w-full", "gap-4", "md:grid-cols-2", "lg:grid-cols-3", "p-4", 3, "cdkDropListData", "cdkDropListConnectedTo"], [1, "flex", "flex-col", "items-center", "justify-center", "p-8", "space-y-2", "opacity-30", "mx-auto", "flex-1"], ["cdkDropList", "", "id", "media-list", 1, "grid", "w-full", "gap-4", "md:grid-cols-2", "lg:grid-cols-3", "p-4", 3, "cdkDropListDropped", "cdkDropListData", "cdkDropListConnectedTo"], ["cdkDrag", "", 1, "relative", "bg-base-100", "rounded-lg", "flex", "flex-col", "items-center", "justify-center", "p-3", "hover:opacity-80", "border", "border-base-300"], [1, "absolute", "inset-0", "z-0", "bg-warning", "opacity-10", "rounded-lg"], [1, "absolute", "inset-0", "z-0", "bg-error", "opacity-10", "rounded-lg"], ["class", "min-h-10 min-w-10 border-4 rounded-2xl border-base-400 bg-base-300 border-dashed flex items-center justify-center", 4, "cdkDragPlaceholder"], ["preview", "", 1, "relative", "w-full", "h-36", "bg-base-200", "rounded-lg", "overflow-hidden"], ["auth", "", "class", "w-full h-full object-contain rounded-lg", 3, "source", 4, "ngIf"], [1, "absolute", "top-1", "left-1", "px-2", "py-1", "text-xs", "rounded-lg", "capitalize", "font-mono"], ["class", "absolute bottom-1 right-1 px-2 py-1 text-xs rounded-lg bg-info text-info-content capitalize font-mono", 4, "ngIf"], [1, "flex", "items-center", "justify-between", "w-full", "relative", "top-1"], [1, "text-base-content", "truncate", "flex-1", "w-1/2", 3, "matTooltip"], ["icon", "", "matRipple", "", "aria-label", "Media Actions", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], [1, "pr-2"], [1, "text-2xl", "text-error"], [1, "min-h-10", "min-w-10", "border-4", "rounded-2xl", "border-base-400", "bg-base-300", "border-dashed", "flex", "items-center", "justify-center"], [1, "text-2xl", "text-base-100"], ["auth", "", 1, "w-full", "h-full", "object-contain", "rounded-lg", 3, "source"], [1, "absolute", "bottom-1", "right-1", "px-2", "py-1", "text-xs", "rounded-lg", "bg-info", "text-info-content", "capitalize", "font-mono"], [1, "text-6xl"]],
    template: function SignageMediaListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Media");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-form-field", 3)(4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function SignageMediaListComponent_Template_input_ngModelChange_4_listener($event) {
          return ctx.search.next($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, SignageMediaListComponent_Conditional_5_Template, 5, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, SignageMediaListComponent_Conditional_7_Template, 5, 0, "div", 6);
      }
      if (rf & 2) {
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.search.getValue());
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 2, ctx.media)) == null ? null : tmp_1_0.length) > 0 ? 5 : 7);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuTrigger, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltip, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _libs_components_src_lib_authenticated_image_directive__WEBPACK_IMPORTED_MODULE_3__.AuthenticatedImageDirective, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_18__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_18__.CdkDrag, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_18__.CdkDragPlaceholder, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _libs_components_src_lib_media_duration_pipe__WEBPACK_IMPORTED_MODULE_4__.MediaDurationPipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25hZ2UtbWVkaWEtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixZQUFZO1lBQ2hCIiwiZmlsZSI6InNpZ25hZ2UtbWVkaWEtbGlzdC5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvc2lnbmFnZS9zaWduYWdlLW1lZGlhLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLHNCQUFzQjtnQkFDdEIsWUFBWTtZQUNoQjs7QUFFWixnZ0JBQWdnQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 22270:
/*!*************************************************************************!*\
  !*** ./apps/concierge/src/app/signage/signage-media-modal.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignageMediaModalComponent: () => (/* binding */ SignageMediaModalComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var _placeos_ts_client_dist_esm_signage_media_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/ts-client/dist/esm/signage/media.class */ 52672);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 33240);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 34938);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 56441);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ 99908);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _libs_form_fields_src_lib_date_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/date-field.component */ 19608);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _libs_components_src_lib_authenticated_image_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/authenticated-image.directive */ 93208);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/slider */ 64992);
/* harmony import */ var _libs_components_src_lib_media_duration_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/media-duration.pipe */ 28975);





















function SignageMediaModalComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 6)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function SignageMediaModalComponent_main_4_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 15)(1, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Start Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "mediaDuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "mat-slider", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](5, 2, ctx_r1.form.value.start_time / 1000, true), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("max", (ctx_r1.item.video_length || 300000) - 1000);
  }
}
function SignageMediaModalComponent_main_4_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "mediaDuration");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](1, 1, ctx_r1.form.value.play_time / 1000, true), " ");
  }
}
function SignageMediaModalComponent_main_4_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "mediaDuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Default (", ctx_r1.item.video_length ? _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, ctx_r1.item.video_length / 1000) : "", ") ");
  }
}
function SignageMediaModalComponent_main_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "main", 7)(1, "div", 8)(2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SignageMediaModalComponent_main_4_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.preview());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "A name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, SignageMediaModalComponent_main_4_Conditional_12_Template, 8, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 15)(14, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, " Play Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, SignageMediaModalComponent_main_4_Conditional_17_Template, 2, 4)(18, SignageMediaModalComponent_main_4_Conditional_18_Template, 3, 3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "mat-slider", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "Animation");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "mat-form-field", 13)(24, "mat-select", 22)(25, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "Playlist Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "Cut");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "Cross Fade");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "Slide Top");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "Slide Left");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, "Slide Right");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "Slide Bottom");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](42, "textarea", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "div", 27)(44, "div", 28)(45, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, "Valid From");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](47, "a-date-field", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "div", 28)(49, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50, "Valid Until");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](51, "a-date-field", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("source", ctx_r1.thumbnail || ctx_r1.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.media_type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r1.media_type === "video" ? 12 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r1.form.value.play_time ? 17 : 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("min", ctx_r1.form.value.start_time)("max", ctx_r1.item.video_length || 300000);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("from", ctx_r1.form.value.valid_from);
  }
}
function SignageMediaModalComponent_footer_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "footer", 36)(1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SignageMediaModalComponent_footer_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.saveMedia());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function SignageMediaModalComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "main", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-spinner", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Saving media item...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
class SignageMediaModalComponent {
  get media_type() {
    if (!this.file) return this.item.media_type;
    return (this.file.type.includes('video') ? 'video' : this.file.type.includes('image') ? 'image' : '') || this.item.media_type;
  }
  get url() {
    if (this.item.id) return this.item.media_url;
    if (this._file_url) return this._file_url;
    this._file_url = URL.createObjectURL(this.file);
    return this._file_url;
  }
  constructor(_data, _dialog_ref) {
    this._data = _data;
    this._dialog_ref = _dialog_ref;
    this.loading = false;
    this.item = this._data.media;
    this.file = this._data.file;
    this.thumbnail = this._data.file_thumbnail || this._data.media.thumbnail_url;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(''),
      animation: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(_placeos_ts_client_dist_esm_signage_media_class__WEBPACK_IMPORTED_MODULE_3__.MediaAnimation.Default),
      start_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(0),
      play_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null),
      valid_from: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl((0,date_fns__WEBPACK_IMPORTED_MODULE_10__.startOfDay)(Date.now()).valueOf()),
      valid_until: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl((0,date_fns__WEBPACK_IMPORTED_MODULE_11__.addYears)((0,date_fns__WEBPACK_IMPORTED_MODULE_12__.endOfDay)(Date.now()), 10).valueOf())
    });
    this.preview = () => this._data.preview({
      media_url: this.url,
      media_type: this.media_type,
      name: this.form.value.name
    });
    this.form.patchValue({
      ...this._data.media,
      valid_from: this._data.media.valid_from * 1000,
      valid_until: this._data.media.valid_until * 1000
    });
    if (this._data.file) {
      this.form.patchValue({
        name: this._data.file.name
      });
    }
    if (this._data.file_metadata) {
      this.item.video_length = Math.floor(this._data.file_metadata[1] * 1000);
    }
  }
  ngOnDestroy() {
    if (this._file_url) URL.revokeObjectURL(this._file_url);
  }
  saveMedia() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.form.markAllAsTouched();
      _this.form.updateValueAndValidity();
      if (!_this.form.valid) return;
      _this.loading = true;
      _this._dialog_ref.disableClose = true;
      const form_value = _this.form.getRawValue();
      const new_media = {
        ..._this.item,
        ...form_value,
        valid_from: (0,date_fns__WEBPACK_IMPORTED_MODULE_13__.getUnixTime)(new Date(form_value.valid_from)),
        valid_until: (0,date_fns__WEBPACK_IMPORTED_MODULE_13__.getUnixTime)(form_value.valid_until)
      };
      const onError = e => {
        _this._dialog_ref.disableClose = false;
        _this.loading = false;
        throw e;
      };
      if (_this.item.id) {
        yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.updateSignageMedia)(_this.item.id, new_media).toPromise().catch(onError);
      } else {
        yield _this._data.onAdd(_this.file, new_media).catch(onError);
      }
      _this._dialog_ref.disableClose = false;
      _this._dialog_ref.close();
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifySuccess)('Successfully saved media item.');
    })();
  }
  static #_ = this.ɵfac = function SignageMediaModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SignageMediaModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: SignageMediaModalComponent,
    selectors: [["signage-media-modal"]],
    decls: 8,
    vars: 5,
    consts: [["load_state", ""], [1, "flex", "items-center", "justify-between", "border-b", "border-base-300"], [1, "p-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "p-4 max-w-[calc(100vw-2rem)] w-[32rem] max-h-[65vh] overflow-auto", 3, "formGroup", 4, "ngIf", "ngIfElse"], ["class", "flex justify-end p-4 border-t border-base-300", 4, "ngIf"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "p-4", "max-w-[calc(100vw-2rem)]", "w-[32rem]", "max-h-[65vh]", "overflow-auto", 3, "formGroup"], [1, "flex", "flex-col"], ["matRipple", "", 1, "relative", "w-full", "h-48", "mx-auto", "bg-base-300", "rounded-xl", "overflow-hidden", "mb-4", 3, "click"], ["auth", "", 1, "h-full", "w-full", "object-contain", "object-center", 3, "source"], [1, "absolute", "top-2", "left-2", "px-2", "py-1", "rounded", "text-xs", "bg-base-400", "capitalize"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "name", "name", "formControlName", "name", "placeholder", "Media Name"], [1, "flex", "items-center", "space-x-4"], ["for", "play-time", 1, "w-auto", "min-w-0", "m-0"], [1, "text-xs", "font-mono"], [1, "opacity-30"], ["step", "100", 3, "min", "max"], ["name", "play-time", "matSliderThumb", "", "formControlName", "play_time"], ["for", "animation"], ["name", "animation", "formControlName", "animation", "placeholder", "Playlist Default"], [3, "value"], ["for", "description"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "description", "placeholder", "Description", "formControlName", "description", 1, "min-h-32"], [1, "flex", "space-x-4"], [1, "flex-1"], ["for", "valid-from"], ["name", "valid-from", "formControlName", "valid_from"], ["for", "valid-until"], ["name", "valid-until", "formControlName", "valid_until", 3, "from"], ["for", "start-time", 1, "w-auto", "min-w-0", "m-0"], ["min", "0", "step", "100", 3, "max"], ["name", "start-time", "matSliderThumb", "", "formControlName", "start_time"], [1, "flex", "justify-end", "p-4", "border-t", "border-base-300"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "p-8", "max-w-[calc(100vw-2rem)]", "min-h-64", "w-[32rem]", "space-y-4"], ["diameter", "32"]],
    template: function SignageMediaModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "header", 1)(1, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, SignageMediaModalComponent_button_3_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, SignageMediaModalComponent_main_4_Template, 52, 15, "main", 4)(5, SignageMediaModalComponent_footer_5_Template, 3, 0, "footer", 5)(6, SignageMediaModalComponent_ng_template_6_Template, 4, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const load_state_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.item.id ? "Edit" : "New", " Media Item ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", load_state_r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinner, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogClose, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatRipple, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _libs_form_fields_src_lib_date_field_component__WEBPACK_IMPORTED_MODULE_4__.DateFieldComponent, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_5__.IconComponent, _libs_components_src_lib_authenticated_image_directive__WEBPACK_IMPORTED_MODULE_6__.AuthenticatedImageDirective, _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__.MatSlider, _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__.MatSliderThumb, _libs_components_src_lib_media_duration_pipe__WEBPACK_IMPORTED_MODULE_7__.MediaDurationPipe]
  });
}

/***/ }),

/***/ 9151:
/*!*********************************************************************************!*\
  !*** ./apps/concierge/src/app/signage/signage-media-preview-modal.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignageMediaPreviewModalComponent: () => (/* binding */ SignageMediaPreviewModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _libs_components_src_lib_authenticated_image_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/authenticated-image.directive */ 93208);









function SignageMediaPreviewModalComponent_main_6_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 10);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("source", ctx_r0.resource.toString());
  }
}
function SignageMediaPreviewModalComponent_main_6_video_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "video", 11);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("source", ctx_r0.resource.toString());
  }
}
function SignageMediaPreviewModalComponent_main_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SignageMediaPreviewModalComponent_main_6_img_2_Template, 1, 1, "img", 8)(3, SignageMediaPreviewModalComponent_main_6_video_3_Template, 1, 1, "video", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.type === "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.type === "video");
  }
}
function SignageMediaPreviewModalComponent_footer_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "footer", 12)(1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SignageMediaPreviewModalComponent_footer_7_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.save.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Save Media ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function SignageMediaPreviewModalComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-spinner", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("diameter", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.loading);
  }
}
class SignageMediaPreviewModalComponent {
  constructor(_data) {
    this._data = _data;
    this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.loading = '';
    this.resource = this._data.url;
    this.type = this._data.type;
    this.name = this._data.name;
    this.file = this._data.file;
    this.can_save = this._data.save !== false;
  }
  static #_ = this.ɵfac = function SignageMediaPreviewModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SignageMediaPreviewModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SignageMediaPreviewModalComponent,
    selectors: [["signage-media-preview-modal"]],
    outputs: {
      save: "save"
    },
    decls: 10,
    vars: 4,
    consts: [["load_state", ""], [1, "flex", "items-center", "justify-between", "p-2", "border-b", "border-base-300"], [1, "px-2"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], ["class", "bg-base-200", 4, "ngIf", "ngIfElse"], ["class", "p-2 flex items-center justify-end space-x-2 border-t border-base-300", 4, "ngIf"], [1, "bg-base-200"], [1, "max-w-[80vw]", "max-h-[65vh]", "w-[80vw]", "h-[65vh]", "flex", "items-center", "justify-center"], ["class", "w-full h-full object-contain object-center", "auth", "", 3, "source", 4, "ngIf"], ["class", "w-full h-full object-contain object-center", "auth", "", "autoplay", "", "controls", "", 3, "source", 4, "ngIf"], ["auth", "", 1, "w-full", "h-full", "object-contain", "object-center", 3, "source"], ["auth", "", "autoplay", "", "controls", "", 1, "w-full", "h-full", "object-contain", "object-center", 3, "source"], [1, "p-2", "flex", "items-center", "justify-end", "space-x-2", "border-t", "border-base-300"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "p-8", "w-[28rem]", "h-[20rem]", "max-w-[80vw]", "max-h-[65vh]"], [3, "diameter"]],
    template: function SignageMediaPreviewModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header", 1)(1, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 3)(4, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SignageMediaPreviewModalComponent_main_6_Template, 4, 2, "main", 4)(7, SignageMediaPreviewModalComponent_footer_7_Template, 3, 0, "footer", 5)(8, SignageMediaPreviewModalComponent_ng_template_8_Template, 4, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const load_state_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Preview - ", ctx.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", load_state_r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.can_save && !ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__.MatProgressSpinner, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_0__.IconComponent, _libs_components_src_lib_authenticated_image_directive__WEBPACK_IMPORTED_MODULE_1__.AuthenticatedImageDirective]
  });
}

/***/ }),

/***/ 51706:
/*!*******************************************************************!*\
  !*** ./apps/concierge/src/app/signage/signage-media.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignageMediaComponent: () => (/* binding */ SignageMediaComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _signage_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signage-state.service */ 65383);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 50854);
/* harmony import */ var _signage_media_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signage-media-list.component */ 75649);
/* harmony import */ var _signage_playlist_media_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signage-playlist-media-list.component */ 15864);



















const _forTrack0 = ($index, $item) => $item.id;
const _c0 = () => [];
const _c1 = () => ({
  playlist: ""
});
const _c2 = a0 => ({
  playlist: a0
});
const _c3 = () => ["media-list", "playlist-list"];
function SignageMediaComponent_Conditional_9_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("cdkDropListDropped", function SignageMediaComponent_Conditional_9_For_1_Template_a_cdkDropListDropped_0_listener($event) {
      const playlist_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.selected_playlist === playlist_r2.id ? "" : ctx_r2.drop(playlist_r2, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const playlist_r2 = ctx.$implicit;
    const $index_r4 = ctx.$index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("!bg-secondary", ctx_r2.selected_playlist === playlist_r2.id)("text-secondary-content", ctx_r2.selected_playlist === playlist_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](9, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](10, _c2, playlist_r2.id))("id", "playlist-" + $index_r4)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](12, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", playlist_r2.name, " ");
  }
}
function SignageMediaComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterCreate"](0, SignageMediaComponent_Conditional_9_For_1_Template, 3, 13, "a", 12, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 0, ctx_r2.playlists));
  }
}
function SignageMediaComponent_Conditional_11_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SignageMediaComponent_Conditional_11_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.addPlaylist());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 20)(2, "app-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Add Playlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}
function SignageMediaComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 15)(1, "app-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "hide_image");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, SignageMediaComponent_Conditional_11_button_5_Template, 6, 0, "button", 18);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.search.getValue() ? "No matching playlists found" : "No playlists", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r2.search.getValue());
  }
}
function SignageMediaComponent_signage_media_list_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "signage-media-list", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("playlist_count", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, ctx_r2.playlists)) == null ? null : tmp_1_0.length);
  }
}
function SignageMediaComponent_signage_playlist_media_list_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "signage-playlist-media-list", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("playlist", ctx_r2.selected_playlist)("playlist_count", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 2, ctx_r2.playlists)) == null ? null : tmp_2_0.length);
  }
}
function SignageMediaComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("dragleave", function SignageMediaComponent_div_16_Template_div_dragleave_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.hideOverlay($event));
    })("drop", function SignageMediaComponent_div_16_Template_div_drop_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.previewFile($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 27)(3, "app-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "cloud_upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Drop Media to upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function SignageMediaComponent_div_16_Template_input_change_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.previewFile($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
class SignageMediaComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_2__.AsyncHandler {
  onEnter(e) {
    this.clearTimeout('hide_overlay');
    this.show_dropzone = e?.dataTransfer?.types.includes('Files');
  }
  hideOverlay(e) {
    if (!this.show_dropzone) return;
    if (!(e.target instanceof HTMLInputElement)) {
      e.preventDefault();
    }
    this.timeout('hide_overlay', () => this.show_dropzone = false);
  }
  constructor(_state, _router, _route) {
    var _this;
    super();
    _this = this;
    this._state = _state;
    this._router = _router;
    this._route = _route;
    this.search = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject('');
    this.loading = this._state.loading;
    this.playlists = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.search, this._state.playlists]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(([search, list]) => list.filter(_ => _.name.toLowerCase().includes(search.toLowerCase()))));
    this.selected_playlist = '';
    this.show_dropzone = false;
    this.addPlaylist = /*#__PURE__*/(0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const result = yield _this._state.editPlaylist();
      if (result) {
        _this._router.navigate(['/signage/media', {
          query: {
            playlist: result.id
          }
        }]);
      }
    });
    this.previewMedia = item => this._state.previewMedia(item);
    this.previewFile = event => this._state.previewFileFromInput(event, this.selected_playlist);
  }
  ngOnInit() {
    this.subscription('route.params', this._route.queryParamMap.subscribe(params => {
      if (params.has('playlist')) {
        this.selected_playlist = params.get('playlist');
      }
    }));
  }
  drop(playlist, event) {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const media = event.previousContainer.data[event.previousIndex];
      const media_list = yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.listSignagePlaylistMedia)(playlist.id).toPromise();
      const new_media_list = [...media_list.items, media.id];
      yield _this2._state.updatePlaylistMedia(playlist.id, new_media_list);
    })();
  }
  static #_ = this.ɵfac = function SignageMediaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SignageMediaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_signage_state_service__WEBPACK_IMPORTED_MODULE_1__.SignageStateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: SignageMediaComponent,
    selectors: [["signage-media"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
    decls: 17,
    vars: 15,
    consts: [[1, "relative", "h-full", "w-full", "overflow-visible", "flex", "space-x-4"], ["sidebar", "", 1, "w-64", "h-full", "flex", "flex-col", "space-y-4", "py-4", "overflow-auto"], [1, "text-xl", "font-medium", "text-center"], ["appearance", "outline", 1, "w-full", "no-subscript"], ["matInput", "", "placeholder", "Search...", 3, "ngModelChange", "ngModel"], ["matRipple", "", 1, "w-full", "px-6", "rounded-3xl", "min-h-12", "flex", "items-center", "hover:bg-base-200", 3, "routerLink", "queryParams"], [1, "w-full"], [1, "relative", "flex-1", "w-1/2", "h-full", "overflow-hidden", "rounded-lg", "border", "border-base-300", "shadow", 3, "dragover", "dragenter", "drop"], [1, "h-full", "w-full", "overflow-auto"], [3, "playlist_count", 4, "ngIf"], [3, "playlist", "playlist_count", 4, "ngIf"], ["class", "absolute inset-0", 3, "dragleave", "drop", 4, "ngIf"], ["matRipple", "", "cdkDropList", "", 1, "w-full", "px-6", "rounded-3xl", "h-12", "min-h-12", "flex", "items-center", "hover:bg-base-200", 3, "!bg-secondary", "text-secondary-content", "routerLink", "queryParams", "id", "cdkDropListConnectedTo"], ["matRipple", "", "cdkDropList", "", 1, "w-full", "px-6", "rounded-3xl", "h-12", "min-h-12", "flex", "items-center", "hover:bg-base-200", 3, "cdkDropListDropped", "routerLink", "queryParams", "id", "cdkDropListConnectedTo"], [1, "flex-1"], [1, "flex", "flex-col", "items-center", "justify-center", "p-8", "space-y-2", "opacity-30"], [1, "text-6xl"], [1, "text-center"], ["btn", "", "matRipple", "", "class", "inverse", 3, "click", 4, "ngIf"], ["btn", "", "matRipple", "", 1, "inverse", 3, "click"], [1, "flex", "items-center", "justify-center", "w-full"], [1, "text-2xl"], [1, "ml-2", "mr-4"], [3, "playlist_count"], [3, "playlist", "playlist_count"], [1, "absolute", "inset-0", 3, "dragleave", "drop"], [1, "absolute", "inset-0", "bg-base-content", "opacity-60"], [1, "absolute", "inset-4", "border-4", "border-dashed", "border-base-300", "flex", "flex-col", "items-center", "justify-center", "rounded-2xl", "text-base-100", "space-y-4"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"]],
    template: function SignageMediaComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Playlists");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-form-field", 3)(5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SignageMediaComponent_Template_input_ngModelChange_5_listener($event) {
          return ctx.search.next($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " All Media ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, SignageMediaComponent_Conditional_9_Template, 3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, SignageMediaComponent_Conditional_11_Template, 6, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("dragover", function SignageMediaComponent_Template_div_dragover_12_listener($event) {
          return ctx.onEnter($event);
        })("dragenter", function SignageMediaComponent_Template_div_dragenter_12_listener($event) {
          return ctx.onEnter($event);
        })("drop", function SignageMediaComponent_Template_div_drop_12_listener($event) {
          return ctx.hideOverlay($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, SignageMediaComponent_signage_media_list_14_Template, 2, 3, "signage-media-list", 9)(15, SignageMediaComponent_signage_playlist_media_list_15_Template, 2, 4, "signage-playlist-media-list", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, SignageMediaComponent_div_16_Template, 8, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        let tmp_5_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.search.getValue());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("!bg-secondary", !ctx.selected_playlist)("text-secondary-content", !ctx.selected_playlist);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](13, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](14, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](10, 11, ctx.playlists)) == null ? null : tmp_5_0.length) > 0 ? 9 : 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.selected_playlist);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.selected_playlist);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.show_dropzone);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__.IconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_17__.CdkDropList, _signage_media_list_component__WEBPACK_IMPORTED_MODULE_5__.SignageMediaListComponent, _signage_playlist_media_list_component__WEBPACK_IMPORTED_MODULE_6__.SignagePlaylistMediaListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n                min-height: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25hZ2UtbWVkaWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxnQkFBZ0I7WUFDcEIiLCJmaWxlIjoic2lnbmFnZS1tZWRpYS5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvc2lnbmFnZS9zaWduYWdlLW1lZGlhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksZ0JBQWdCO1lBQ3BCOztBQUVaLHdYQUF3WCIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 15864:
/*!*********************************************************************************!*\
  !*** ./apps/concierge/src/app/signage/signage-playlist-media-list.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignagePlaylistMediaListComponent: () => (/* binding */ SignagePlaylistMediaListComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 71536);
/* harmony import */ var _signage_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signage-state.service */ 65383);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 19803);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 29314);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 89273);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 50854);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 99908);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 23206);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _libs_components_src_lib_authenticated_image_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/authenticated-image.directive */ 93208);
/* harmony import */ var _libs_components_src_lib_media_duration_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/media-duration.pipe */ 28975);




















function SignagePlaylistMediaListComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Shuffle ON ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignagePlaylistMediaListComponent_Conditional_47_ng_container_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 23);
  }
}
function SignagePlaylistMediaListComponent_Conditional_47_ng_container_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 24);
  }
}
function SignagePlaylistMediaListComponent_Conditional_47_ng_container_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 31)(1, "app-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function SignagePlaylistMediaListComponent_Conditional_47_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, SignagePlaylistMediaListComponent_Conditional_47_ng_container_2_Conditional_2_Template, 1, 0, "div", 23)(3, SignagePlaylistMediaListComponent_Conditional_47_ng_container_2_Conditional_3_Template, 1, 0, "div", 24)(4, SignagePlaylistMediaListComponent_Conditional_47_ng_container_2_div_4_Template, 3, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 26)(6, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "drag_handle");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "button", 30)(13, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-menu", null, 0)(17, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignagePlaylistMediaListComponent_Conditional_47_ng_container_2_Template_button_click_17_listener() {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.editItem(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 5)(19, "app-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, " edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Edit Media Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignagePlaylistMediaListComponent_Conditional_47_ng_container_2_Template_button_click_23_listener() {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.previewItem(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 5)(25, "app-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, " visibility ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, " Preview Media Item ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignagePlaylistMediaListComponent_Conditional_47_ng_container_2_Template_button_click_29_listener() {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.removeItem(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 5)(31, "app-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, " delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, " Remove Media Item ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const menu_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](16);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](item_r5.valid_from && ctx_r2.now < item_r5.valid_from ? 2 : item_r5.valid_until && ctx_r2.now > item_r5.valid_until ? 3 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("source", item_r5.thumbnail_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r5.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matMenuTriggerFor", menu_r6);
  }
}
function SignagePlaylistMediaListComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("cdkDropListDropped", function SignagePlaylistMediaListComponent_Conditional_47_Template_div_cdkDropListDropped_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.drop($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, SignagePlaylistMediaListComponent_Conditional_47_ng_container_2_Template, 35, 4, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("cdkDropListData", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 3, ctx_r2.media))("cdkDropListConnectedTo", ctx_r2.playlist_ids);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 5, ctx_r2.media));
  }
}
function SignagePlaylistMediaListComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18)(1, "app-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "hide_image");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "No media in playlist.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
class SignagePlaylistMediaListComponent {
  get now() {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.getUnixTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_8__.startOfMinute)(Date.now()));
  }
  constructor(_state, _router) {
    var _this = this;
    this._state = _state;
    this._router = _router;
    this.playlist = '';
    this.playlist_count = 0;
    this.playlist_ids = [];
    this._playlist = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject('');
    this.editPlaylist = /*#__PURE__*/(0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const playlist = yield _this.selected_playlist.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1)).toPromise();
      _this._state.editPlaylist(playlist);
    });
    this.removeItem = /*#__PURE__*/function () {
      var _ref2 = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (item) {
        const playlist = yield _this._playlist_media.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1)).toPromise();
        const list = playlist.items.filter(_ => _ !== item.id);
        yield _this._state.updatePlaylistMedia(_this.playlist, list);
        _this._playlist.next(_this.playlist);
      });
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();
    this.previewItem = item => this._state.previewMedia(item);
    this.editItem = item => this._state.editMedia(item);
    this.removePlaylist = /*#__PURE__*/(0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this._state.removePlaylist(yield _this.selected_playlist.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1)).toPromise());
      _this._router.navigate(['/signage/media', {}]);
    });
    this.selected_playlist = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatest)([this._playlist, this._state.playlists]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(([playlist, list]) => {
      const item = list.find(_ => _.id === playlist);
      if (!item) this._router.navigate(['/signage/media', {}]);
      return item;
    }));
    this._playlist_media = this._playlist.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.filter)(playlist => !!playlist), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(playlist => (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.listSignagePlaylistMedia)(playlist).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)({
      id: '',
      items: []
    })))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.shareReplay)(1));
    this.media = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatest)([this._playlist_media, this._state.media]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(([playlist, media]) => playlist.items.map(_ => media.find(m => m.id === _)).filter(_ => _)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.startWith)([]));
  }
  ngOnChanges(changes) {
    if (changes.playlist) {
      this._playlist.next(this.playlist);
    }
    if (changes.playlist_count) {
      this.playlist_ids = new Array(this.playlist_count).fill(0).map((_, idx) => `playlist-${idx}`);
    }
  }
  animation_name(value) {
    switch (value) {
      case _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.MediaAnimation.Cut:
        return 'Cut';
      case _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.MediaAnimation.CrossFade:
        return 'Cross Fade';
      case _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.MediaAnimation.SlideBottom:
        return 'Slide Bottom';
      case _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.MediaAnimation.SlideLeft:
        return 'Slide Left';
      case _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.MediaAnimation.SlideRight:
        return 'Slide Right';
      case _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__.MediaAnimation.SlideTop:
        return 'Slide Top';
    }
    return 'Default';
  }
  drop(event) {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (event.previousIndex === event.currentIndex) return;
      const id = yield _this2._playlist.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1)).toPromise();
      const playlist = yield _this2._playlist_media.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1)).toPromise();
      if (!id && playlist) return;
      const list = [...playlist.items];
      (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_20__.moveItemInArray)(list, event.previousIndex, event.currentIndex);
      yield _this2._state.updatePlaylistMedia(id, list);
      _this2._playlist.next(_this2.playlist);
    })();
  }
  static #_ = this.ɵfac = function SignagePlaylistMediaListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SignagePlaylistMediaListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_signage_state_service__WEBPACK_IMPORTED_MODULE_1__.SignageStateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: SignagePlaylistMediaListComponent,
    selectors: [["signage-playlist-media-list"]],
    inputs: {
      playlist: "playlist",
      playlist_count: "playlist_count"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]],
    decls: 50,
    vars: 40,
    consts: [["menu", "matMenu"], [1, "flex", "flex-col", "space-y-4", "relative", "p-4", "h-full", "w-full"], [1, "text-xl", "font-medium", "text-center"], ["icon", "", "matRipple", "", 1, "absolute", "top-2", "right-2", "!m-0", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], [1, "pr-2"], [1, "text-2xl", "text-error"], ["details", "", 1, "flex", "items-center", "flex-wrap"], [1, "ml-2", "text-xs", "px-2", "py-1", "m-1", "rounded"], ["class", "ml-2 text-xs px-2 py-1 m-1 rounded bg-secondary text-secondary-content", 4, "ngIf"], ["matTooltip", "Default Transition Animation", 1, "text-xs", "px-2", "py-1", "m-1"], [1, "ml-1", "uppercase", "bg-base-200", "px-2", "py-1", "rounded"], ["matTooltip", "Default Playback Duration", 1, "text-xs", "px-2", "py-1", "m-1"], [1, "ml-1", "font-mono", "bg-base-200", "px-2", "py-1", "rounded"], ["matTooltip", "Prefered Orientation", 1, "text-xs", "px-2", "py-1", "m-1"], ["cdkDropList", "", "id", "playlist-list", 1, "flex-1", "h-1/2", "overflow-auto", "flex", "flex-col", "space-y-2", 3, "cdkDropListData", "cdkDropListConnectedTo"], [1, "flex", "flex-col", "items-center", "justify-center", "p-8", "space-y-2", "opacity-30", "mx-auto", "flex-1"], [1, "ml-2", "text-xs", "px-2", "py-1", "m-1", "rounded", "bg-secondary", "text-secondary-content"], ["cdkDropList", "", "id", "playlist-list", 1, "flex-1", "h-1/2", "overflow-auto", "flex", "flex-col", "space-y-2", 3, "cdkDropListDropped", "cdkDropListData", "cdkDropListConnectedTo"], [4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "relative", "w-full", "bg-base-100", "h-20", "rounded-lg", "flex", "items-center", "p-2", "space-x-2", "border", "border-base-300"], [1, "absolute", "inset-0", "z-0", "bg-warning", "opacity-10", "rounded-lg"], [1, "absolute", "inset-0", "z-0", "bg-error", "opacity-10", "rounded-lg"], ["class", "min-h-10 min-w-10 border-4 rounded-2xl border-base-400 bg-base-300 border-dashed flex items-center justify-center", 4, "cdkDragPlaceholder"], ["matRipple", "", "cdkDragHandle", "", "matTooltip", "Drag to reorder", 1, "flex", "items-center", "justify-center", "w-6", "h-full", "rounded", "hover:bg-base-200"], ["preview", "", 1, "w-[4.5rem]", "h-16", "bg-base-200", "rounded-lg", "overflow-hidden"], ["auth", "", 1, "w-full", "h-full", "object-contain", 3, "source"], [1, "text-base-content", "truncate", "flex-1", "w-1/2"], ["icon", "", "matRipple", "", "aria-label", "Media Actions", 3, "matMenuTriggerFor"], [1, "min-h-10", "min-w-10", "border-4", "rounded-2xl", "border-base-400", "bg-base-300", "border-dashed", "flex", "items-center", "justify-center"], [1, "text-2xl", "text-base-100"], [1, "text-6xl"]],
    template: function SignagePlaylistMediaListComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1)(1, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 3)(5, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-menu", null, 0)(9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignagePlaylistMediaListComponent_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.editPlaylist());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 5)(11, "app-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Edit Playlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignagePlaylistMediaListComponent_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.removePlaylist());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 5)(17, "app-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Remove Playlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 9)(22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](24, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](25, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](26, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](28, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, SignagePlaylistMediaListComponent_div_29_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](30, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, " Animation: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](35, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, " Duration: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](40, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](41, "mediaDuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, " Orientation: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](46, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](47, SignagePlaylistMediaListComponent_Conditional_47_Template, 4, 7, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](48, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](49, SignagePlaylistMediaListComponent_Conditional_49_Template, 5, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_6_0;
        let tmp_7_0;
        let tmp_8_0;
        let tmp_9_0;
        let tmp_10_0;
        let tmp_11_0;
        const menu_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Playlist - ", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 16, ctx.selected_playlist)) == null ? null : tmp_1_0.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matMenuTriggerFor", menu_r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("bg-success", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](23, 18, ctx.selected_playlist)) == null ? null : tmp_3_0.enabled)("text-success-content", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](24, 20, ctx.selected_playlist)) == null ? null : tmp_4_0.enabled)("bg-error", !((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](25, 22, ctx.selected_playlist)) == null ? null : tmp_5_0.enabled))("text-error-content", !((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](26, 24, ctx.selected_playlist)) == null ? null : tmp_6_0.enabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ((tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](28, 26, ctx.selected_playlist)) == null ? null : tmp_7_0.enabled) ? "Enabled" : "Disabled", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](30, 28, ctx.selected_playlist)) == null ? null : tmp_8_0.random);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.animation_name((tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](35, 30, ctx.selected_playlist)) == null ? null : tmp_9_0.default_animation));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](41, 34, ((tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](40, 32, ctx.selected_playlist)) == null ? null : tmp_10_0.default_duration) / 1000));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((tmp_11_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](46, 36, ctx.selected_playlist)) == null ? null : tmp_11_0.orientation);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](48, 38, ctx.media).length > 0 ? 47 : 49);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenuTrigger, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__.MatTooltip, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, _libs_components_src_lib_authenticated_image_directive__WEBPACK_IMPORTED_MODULE_4__.AuthenticatedImageDirective, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_20__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_20__.CdkDrag, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_20__.CdkDragHandle, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_20__.CdkDragPlaceholder, _angular_common__WEBPACK_IMPORTED_MODULE_22__.AsyncPipe, _libs_components_src_lib_media_duration_pipe__WEBPACK_IMPORTED_MODULE_5__.MediaDurationPipe],
    styles: ["[_nghost-%COMP%] {\n                height: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25hZ2UtcGxheWxpc3QtbWVkaWEtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLFlBQVk7WUFDaEIiLCJmaWxlIjoic2lnbmFnZS1wbGF5bGlzdC1tZWRpYS1saXN0LmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvc2lnbmFnZS9zaWduYWdlLXBsYXlsaXN0LW1lZGlhLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxZQUFZO1lBQ2hCOztBQUVaLG9aQUFvWiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 44140:
/*!****************************************************************************!*\
  !*** ./apps/concierge/src/app/signage/signage-playlist-modal.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignagePlaylistModalComponent: () => (/* binding */ SignagePlaylistModalComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _signage_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signage-state.service */ 65383);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_ts_client_dist_esm_signage_media_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/ts-client/dist/esm/signage/media.class */ 52672);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 99908);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _libs_form_fields_src_lib_date_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/date-field.component */ 19608);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/slider */ 64992);
/* harmony import */ var _libs_components_src_lib_media_duration_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/media-duration.pipe */ 28975);



























const _c0 = ["search_input"];
function SignagePlaylistModalComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 6)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function SignagePlaylistModalComponent_main_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "main", 7)(1, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 12)(10, "mat-checkbox", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Enabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "mat-checkbox", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, " Shuffle Playback ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 15)(15, "label", 16)(16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Default Play Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "app-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, " info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](22, "mediaDuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "mat-slider", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 21)(26, "div", 22)(27, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "Orientation");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "mat-form-field", 10)(30, "mat-select", 24)(31, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, " Unspecified ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "Landscape");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, "Portrait");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "Square");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 22)(40, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "Animation");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "mat-form-field", 10)(43, "mat-select", 30)(44, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45, "Cut");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, "Cross Fade");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "Slide Top");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51, "Slide Left");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, "Slide Right");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55, "Slide Bottom");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](59, "textarea", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "div", 34)(61, "div", 22)(62, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](63, "Valid From");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](64, "a-date-field", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "div", 22)(66, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67, "Valid Until");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](68, "a-date-field", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](22, 10, ctx_r0.form.value.default_duration / 1000), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("from", ctx_r0.form.value.valid_from)("disabled", !ctx_r0.form.value.valid_from);
  }
}
function SignagePlaylistModalComponent_footer_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "footer", 39)(1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SignagePlaylistModalComponent_footer_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.savePlaylist());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Save Playlist ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function SignagePlaylistModalComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "main", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-spinner", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Saving Playlist...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("diameter", 32);
  }
}
class SignagePlaylistModalComponent {
  constructor(_data = {}, _state, _dialog, _dialog_ref) {
    this._data = _data;
    this._state = _state;
    this._dialog = _dialog;
    this._dialog_ref = _dialog_ref;
    this.loading = false;
    this.playlist = this._data;
    this.media = this._state.media;
    this.search = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject('');
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
      id: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.playlist.id || ''),
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.playlist.name || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.playlist.description || ''),
      default_animation: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.playlist.default_animation || _placeos_ts_client_dist_esm_signage_media_class__WEBPACK_IMPORTED_MODULE_3__.MediaAnimation.Cut),
      orientation: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.playlist.orientation || 'unspecified'),
      enabled: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.playlist.enabled),
      random: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.playlist.random),
      default_duration: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(Math.max(this.playlist.default_duration || 15 * 1000, 5000)),
      valid_from: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.playlist.valid_from * 1000),
      valid_until: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.playlist.valid_until * 1000)
    });
  }
  savePlaylist() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.form.markAllAsTouched();
      _this.form.updateValueAndValidity();
      if (_this.form.invalid) return;
      _this.loading = true;
      const form_value = _this.form.getRawValue();
      const result = yield _this._state.savePlaylist({
        ...form_value,
        valid_from: (0,date_fns__WEBPACK_IMPORTED_MODULE_11__.getUnixTime)(form_value.valid_from),
        valid_until: (0,date_fns__WEBPACK_IMPORTED_MODULE_11__.getUnixTime)(form_value.valid_until)
      }).catch(_ => {
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifyError)('Error saving playlist');
        _this.loading = false;
        throw _;
      });
      _this._dialog_ref.close(result);
    })();
  }
  static #_ = this.ɵfac = function SignagePlaylistModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SignagePlaylistModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_signage_state_service__WEBPACK_IMPORTED_MODULE_1__.SignageStateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: SignagePlaylistModalComponent,
    selectors: [["signage-playlist-modal"]],
    viewQuery: function SignagePlaylistModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.search_input = _t.first);
      }
    },
    decls: 8,
    vars: 5,
    consts: [["load_state", ""], [1, "flex", "items-center", "justify-between", "border-b", "border-base-300"], [1, "p-2", "font-medium", "text-xl"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "p-4 flex flex-col w-[32rem] max-w-[calc(100vw-2rem)]", 3, "formGroup", 4, "ngIf", "ngIfElse"], ["class", "p-4 flex items-center justify-end space-x-2 border-t border-base-300", 4, "ngIf"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "p-4", "flex", "flex-col", "w-[32rem]", "max-w-[calc(100vw-2rem)]", 3, "formGroup"], ["for", "name"], ["required", ""], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "name", "placeholder", "Name", "formControlName", "name"], [1, "flex", "items-center", "space-x-8", "mb-4"], ["formControlName", "enabled"], ["formControlName", "random"], [1, "flex", "items-center", "space-x-4"], ["for", "default-duration", 1, "w-auto", "min-w-0", "m-0", "space-x-2", "flex", "items-center"], ["matTooltip", "Default length of time to hold images on screen", 1, "text-xl"], [1, "text-xs", "font-mono"], ["min", "5000", "max", "300000", "step", "1000"], ["name", "default-duration", "matSliderThumb", "", "formControlName", "default_duration"], [1, "flex", "space-x-2"], [1, "flex-1"], ["for", "orientation"], ["name", "orientation", "formControlName", "orientation", "placeholder", "Unspecified"], ["value", "unspecified"], ["value", "landscape"], ["value", "portrait"], ["value", "square"], ["for", "animation"], ["name", "animation", "formControlName", "default_animation", "placeholder", "Playlist Default"], [3, "value"], ["for", "description"], ["matInput", "", "name", "description", "placeholder", "Description", "formControlName", "description", 1, "min-h-32"], [1, "flex", "space-x-4"], ["for", "valid-from"], ["name", "valid-from", "formControlName", "valid_from"], ["for", "valid-until"], ["name", "valid-until", "formControlName", "valid_until", 3, "from", "disabled"], [1, "p-4", "flex", "items-center", "justify-end", "space-x-2", "border-t", "border-base-300"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "p-8"], [3, "diameter"], [1, "mt-4"]],
    template: function SignagePlaylistModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "header", 1)(1, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, SignagePlaylistModalComponent_button_3_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, SignagePlaylistModalComponent_main_4_Template, 69, 12, "main", 4)(5, SignagePlaylistModalComponent_footer_5_Template, 3, 0, "footer", 5)(6, SignagePlaylistModalComponent_ng_template_6_Template, 4, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const load_state_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.playlist.id ? "Edit" : "New", " Playlist ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", load_state_r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOption, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__.MatCheckbox, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltip, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinner, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogClose, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatRipple, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _libs_form_fields_src_lib_date_field_component__WEBPACK_IMPORTED_MODULE_5__.DateFieldComponent, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_6__.IconComponent, _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__.MatSlider, _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__.MatSliderThumb, _libs_components_src_lib_media_duration_pipe__WEBPACK_IMPORTED_MODULE_7__.MediaDurationPipe]
  });
}

/***/ }),

/***/ 65383:
/*!*****************************************************************!*\
  !*** ./apps/concierge/src/app/signage/signage-state.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignageStateService: () => (/* binding */ SignageStateService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 71536);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 19803);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 29314);
/* harmony import */ var _signage_media_preview_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signage-media-preview-modal.component */ 9151);
/* harmony import */ var _signage_playlist_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signage-playlist-modal.component */ 44140);
/* harmony import */ var _signage_media_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signage-media-modal.component */ 22270);
/* harmony import */ var _signage_display_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signage-display-modal.component */ 91992);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ 12587);















function dataURLtoBlob(dataURL) {
  // Split the data URL to get the mime type and the data
  const [prefix, data] = dataURL.split(',');
  const mimeType = prefix.split(':')[1].split(';')[0];
  // Convert base64 to raw binary data
  const byteString = atob(data);
  // Create an ArrayBuffer and fill it with the binary data
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const uint8Array = new Uint8Array(arrayBuffer);
  for (let i = 0; i < byteString.length; i++) {
    uint8Array[i] = byteString.charCodeAt(i);
  }
  // Create and return the Blob
  return new Blob([arrayBuffer], {
    type: mimeType
  });
}
function dataURLtoFile(dataURL, filename) {
  // Split the data URL to get the mime type and the data
  const [prefix, data] = dataURL.split(',');
  const mimeType = prefix.split(':')[1].split(';')[0];
  // Convert base64 to raw binary data
  const byteString = atob(data);
  // Create an ArrayBuffer and fill it with the binary data
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const uint8Array = new Uint8Array(arrayBuffer);
  for (let i = 0; i < byteString.length; i++) {
    uint8Array[i] = byteString.charCodeAt(i);
  }
  // Create and return the File
  return new File([uint8Array], filename, {
    type: mimeType
  });
}
class SignageStateService extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  changed() {
    this._change.next(Date.now());
  }
  constructor(_org, _dialog, _settings) {
    super();
    this._org = _org;
    this._dialog = _dialog;
    this._settings = _settings;
    this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(false);
    this._change = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(0);
    this._active_upload = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(null);
    this.loading = this._loading.asObservable();
    this.has_changed = this._change.asObservable();
    this.media = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this._org.active_building, this._change]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(([_]) => !!_?.id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(([bld]) => (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.querySignageMedia)({
      limit: 2500
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(_ => _.data.sort((a, b) => b.created_at - a.created_at)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.shareReplay)(1));
    this.playlists = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this._org.active_building, this._change]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(([_]) => !!_?.id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(() => (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.querySignagePlaylists)({
      limit: 500
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(_ => (_.data || []).sort((a, b) => a.name.localeCompare(b.name))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.shareReplay)(1));
    this.displays = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this._org.active_region, this._org.active_building, this._change]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(([region, bld]) => !!bld?.id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(([region, bld]) => (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.querySystems)({
      zone_id: (this._settings.get('app.use_region') ? region?.id : '') || bld?.id,
      limit: 500,
      signage: true
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(_ => (_.data || []).sort((a, b) => (a.display_name || a.name).localeCompare(b.display_name || b.name)).filter(_ => _.signage)))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.shareReplay)(1));
    this.zones = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this._org.active_building, this._change]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(([bld]) => (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.queryZones)({
      limit: 250
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.of)({
      data: []
    })))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(_ => (_.data || []).sort((a, b) => (a.display_name || a.name).localeCompare(b.display_name || b.name))));
  }
  editPlaylist(playlist = new _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.SignagePlaylist({})) {
    return new Promise(resolve => {
      const ref = this._dialog.open(_signage_playlist_modal_component__WEBPACK_IMPORTED_MODULE_5__.SignagePlaylistModalComponent, {
        data: playlist
      });
      ref.afterClosed().subscribe(result => {
        this.timeout('changed', () => this._change.next(Date.now()));
        resolve(result);
      });
    });
  }
  editMedia(media = new _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.SignageMedia({}), file, playlist_id = '') {
    var _this = this;
    return new Promise( /*#__PURE__*/function () {
      var _ref = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
        const ref = _this._dialog.open(_signage_media_modal_component__WEBPACK_IMPORTED_MODULE_6__.SignageMediaModalComponent, {
          data: {
            media,
            file,
            file_metadata: file ? yield _this._getMediaMetadata(file) : [media.orientation === 'landscape', 0],
            file_thumbnail: file ? yield _this._generateThumbnail(file, 1024, 720) : '',
            playlist_id,
            onAdd: (f, m) => _this.addMedia(f, m),
            preview: item => _this.previewMedia(item)
          }
        });
        ref.afterClosed().subscribe(result => {
          _this.timeout('changed', () => _this._change.next(Date.now()));
          resolve(result);
        });
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  editDisplay(display = new _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.PlaceSystem({})) {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Edit Display:', display);
      const ref = _this2._dialog.open(_signage_display_modal_component__WEBPACK_IMPORTED_MODULE_7__.SignageDisplayModalComponent, {
        data: {
          display
        }
      });
      const result = yield ref.afterClosed().toPromise();
      _this2.timeout('changed', () => _this2._change.next(Date.now()));
      return result;
    })();
  }
  removeDisplay(display) {
    var _this3 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const result = yield (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.openConfirmModal)({
        title: `Remove Display`,
        content: `
                Are you sure you wish to remove the display "<strong>${display.display_name}</strong>"?
                `,
        icon: {
          content: 'delete'
        }
      }, _this3._dialog);
      if (result.reason !== 'done') return;
      result.loading('Removing display...');
      if (display.map_id || display.email || display.module_list.length > 0) {
        yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.updateSystem)(display.id, {
          signage: false
        }).toPromise();
      } else {
        yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.removeSystem)(display.id).toPromise();
      }
      _this3._change.next(Date.now());
      result.close();
    })();
  }
  savePlaylist(playlist) {
    var _this4 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const call = playlist.id ? (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.updateSignagePlaylist)(playlist.id, playlist) : (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.addSignagePlaylist)(playlist);
      const new_playlist = yield call.toPromise();
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifySuccess)(`Successfully saved playlist.`);
      _this4._change.next(Date.now());
    })();
  }
  removePlaylist(playlist) {
    var _this5 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!playlist?.id) return;
      const result = yield (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.openConfirmModal)({
        title: `Remove Playlist`,
        content: `
            Are you sure you wish to remove the playlist "<strong>${playlist.name}</strong>"?<br/><br/>`,
        icon: {
          content: 'delete'
        }
      }, _this5._dialog);
      if (result.reason !== 'done') return;
      yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.removeSignagePlaylist)(playlist.id).toPromise();
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifySuccess)(`Successfully removed playlist.`);
      _this5._change.next(Date.now());
      result.close();
    })();
  }
  updatePlaylistMedia(playlist_id, list) {
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.updateSignagePlaylistMedia)(playlist_id, list).toPromise();
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifySuccess)(`Successfully updated playlist media.`);
    })();
  }
  getPlaylistMedia(playlist_id) {
    return (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.listSignagePlaylistMedia)(playlist_id).toPromise().then(_ => _.items);
  }
  previewMedia(item) {
    const ref = this._dialog.open(_signage_media_preview_modal_component__WEBPACK_IMPORTED_MODULE_4__.SignageMediaPreviewModalComponent, {
      data: {
        url: item.media_url,
        type: item.media_type,
        name: item.name,
        save: false
      }
    });
  }
  previewFileFromInput(event, playlist_id = '') {
    const element = event.target;
    /* istanbul ignore else */
    if (!element?.files?.length) return;
    const files = element.files;
    const file = files[0];
    if (file && (file.type.includes('image') || file.type.includes('video'))) {
      this.editMedia(undefined, file, playlist_id);
    } else {
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)('Invalid file type.');
    }
  }
  previewFileMedia(media, playlist_id = '') {
    var _this6 = this;
    const url = URL.createObjectURL(media);
    const type = media.type.includes('image') ? 'image' : 'video';
    const ref = this._dialog.open(_signage_media_preview_modal_component__WEBPACK_IMPORTED_MODULE_4__.SignageMediaPreviewModalComponent, {
      data: {
        url,
        type,
        name: media.name,
        save: true,
        file: media
      }
    });
    ref.afterClosed().subscribe(() => URL.revokeObjectURL(url));
    ref.componentInstance.save.subscribe( /*#__PURE__*/(0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      ref.componentInstance.loading = 'Saving...';
      const new_media = yield _this6.addMedia(media).catch(e => {
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)('Error saving media.');
        ref.componentInstance.loading = '';
        throw e;
      });
      if (playlist_id && new_media.id) {
        const media_list = yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.listSignagePlaylistMedia)(playlist_id).toPromise();
        const new_media_list = [...media_list.items, new_media.id];
        yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.updateSignagePlaylistMedia)(playlist_id, new_media_list).toPromise();
      }
      ref.close();
    }));
  }
  addMedia(file, media_item = new _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.SignageMedia({})) {
    var _this7 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const upload = file => new Promise((resolve, reject) => {
        let state = null;
        let resolved = false;
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.uploadFile)(file).subscribe(s => {
          state = s;
          if (s.link) {
            resolved = true;
            resolve({
              id: s.upload.id,
              link: s.link
            });
          }
        }, reject, () => !resolved ? resolve(state) : null);
      });
      const [is_landscape, _] = yield _this7._getMediaMetadata(file);
      const thumbnail_image = yield _this7._generateThumbnail(file, 1280, 720).catch(_ => null);
      const media = yield upload(file);
      let thumbnail = null;
      if (thumbnail_image) {
        thumbnail = yield upload(dataURLtoFile(thumbnail_image, `thumb+${file.name}`));
      }
      const data = {
        ...new _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.SignageMedia({
          ...media_item,
          name: media_item.name || file.name,
          media_id: media.id,
          media_uri: media.link,
          media_type: file.type.includes('image') ? 'image' : 'video',
          orientation: is_landscape ? 'landscape' : 'portrait',
          thumbnail_id: thumbnail.id
        })
      };
      for (const key in data) {
        if (!data[key]) delete data[key];
      }
      const result = yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.addSignageMedia)(data).toPromise();
      _this7._active_upload.next(null);
      _this7._change.next(Date.now());
      return result;
    })();
  }
  updateMedia(item) {
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!item?.id) return;
      yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.updateSignageMedia)(item.id, item).toPromise();
    })();
  }
  removeMedia(item) {
    var _this8 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!item?.id) return;
      const result = yield (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.openConfirmModal)({
        title: `Remove Media item`,
        content: `
                Are you sure you wish to remove the media item "<strong>${item.name}</strong>"?<br/><br/>
                <i class="text-sm">The item will be removed from all playlists and the files deleted from storage.</i>
                `,
        icon: {
          content: 'delete'
        }
      }, _this8._dialog);
      if (result.reason !== 'done') return;
      result.loading('Removing media...');
      yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.removeSignageMedia)(item.id).toPromise();
      _this8._change.next(Date.now());
      result.close();
    })();
  }
  _getMediaMetadata(file) {
    return new Promise(resolve => {
      const url = URL.createObjectURL(file);
      // file is loaded
      if (file.type.includes('video')) {
        let video = document.createElement('video');
        video.src = url.toString();
        video.addEventListener('loadedmetadata', () => {
          const {
            videoWidth,
            videoHeight
          } = video;
          resolve([videoWidth > videoHeight, video.duration]);
        });
        video.load();
      } else {
        let img = new Image();
        img.onload = () => resolve([img.width > img.height, 0]);
        img.src = url.toString(); // is the data URL because called with readAsDataURL
      }
    });
  }
  _generateThumbnail(file, max_width, max_height) {
    var _this9 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('File:', file, max_width, max_height);
      if (file.type.includes('video')) {
        return _this9._generateVideoThumbnail(file, max_width, max_height);
      } else {
        return _this9._generateImageThumbnail(file, max_width, max_height);
      }
    })();
  }
  _generateImageThumbnail(file, max_width, max_height) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      console.log('Image:', img.src);
      img.onload = () => {
        const image = this._generateThumbnailFromResource(img, img.width, img.height, max_width, max_height);
        URL.revokeObjectURL(img.src);
        resolve(image);
      };
      img.onerror = reject;
    });
  }
  _generateVideoThumbnail(file, max_width, max_height) {
    return new Promise((resolve, reject) => {
      // Create video element
      const video = document.createElement('video');
      video.autoplay = true;
      video.muted = true;
      video.src = URL.createObjectURL(file);
      video.onloadeddata = () => {
        const image = this._generateThumbnailFromResource(video, video.videoWidth, video.videoHeight, max_width, max_height);
        // Clean up
        URL.revokeObjectURL(video.src);
        resolve(image);
      };
      video.onerror = reject;
    });
  }
  _generateThumbnailFromResource(data, source_width, source_height, max_width, max_height) {
    // Create canvas element
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    // Calculate thumbnail dimensions
    let thumbnailWidth = source_width;
    let thumbnailHeight = source_height;
    const aspectRatio = thumbnailWidth / thumbnailHeight;
    if (thumbnailWidth > max_width) {
      thumbnailWidth = max_height;
      thumbnailHeight = thumbnailWidth / aspectRatio;
    }
    if (thumbnailHeight > max_height) {
      thumbnailHeight = max_width;
      thumbnailWidth = thumbnailHeight * aspectRatio;
    }
    canvas.width = thumbnailWidth;
    canvas.height = thumbnailHeight;
    // Draw video frame on canvas
    ctx.drawImage(data, 0, 0, thumbnailWidth, thumbnailHeight);
    // Convert canvas to data URL
    const dataURL = canvas.toDataURL('image/jpeg');
    return dataURL;
  }
  static #_ = this.ɵfac = function SignageStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SignageStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjectable"]({
    token: SignageStateService,
    factory: SignageStateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 42658:
/*!********************************************************************!*\
  !*** ./apps/concierge/src/app/signage/signage-topbar.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignageTopbarComponent: () => (/* binding */ SignageTopbarComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 57871);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _signage_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signage-state.service */ 65383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);










class SignageTopbarComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  // public readonly filters = this._state.filters;
  // /** Set filtered date */
  // public readonly setDate = (date) => this._state.setFilters({ date });
  // /** Set filtered date */
  // public readonly setFilters = (filters) => this._state.setFilters(filters);
  // /** Set filter string */
  // public readonly setSearch = (str) => this._state.setSearchString(str);
  // /** Update active zones for desks */
  // public readonly updateZones = (zones) => {
  //     this._router.navigate([], {
  //         relativeTo: this._route,
  //         queryParams: { zone_ids: zones.join(',') },
  //     });
  //     this._state.setFilters({ zones });
  // };
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
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this._org.initialised.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)(_ => _)).toPromise();
      _this.subscription('route.query', _this._route.queryParamMap.subscribe(params => {
        if (params.has('zone_ids')) {
          const zones = params.get('zone_ids').split(',');
          if (zones.length) {
            const level = _this._org.levelWithID(zones);
            if (!level) {
              return;
            }
            _this._org.building = _this._org.buildings.find(bld => bld.id === level.parent_id);
            _this.zones = zones;
          }
        }
      }));
      _this.subscription('levels', _this._org.active_levels.subscribe(levels => {
        _this.zones = _this.zones.filter(zone => levels.find(lvl => lvl.id === zone));
        if (!_this.zones.length && levels.length) {
          _this.zones.push(levels[0].id);
        }
        // this.updateZones(this.zones);
      }));
      // this.setSearch('');
    })();
  }
  static #_ = this.ɵfac = function SignageTopbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SignageTopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_signage_state_service__WEBPACK_IMPORTED_MODULE_3__.SignageStateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: SignageTopbarComponent,
    selectors: [["signage-topbar"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
    decls: 1,
    vars: 0,
    consts: [[1, "flex", "items-center", "bg-base-100", "h-20", "px-4", "border-b", "border-base-200", "space-x-2"]],
    template: function SignageTopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 0);
      }
    },
    styles: ["mat-form-field[_ngcontent-%COMP%] {\n                height: 3.25em;\n                width: 8em;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25hZ2UtdG9wYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksY0FBYztnQkFDZCxVQUFVO1lBQ2QiLCJmaWxlIjoic2lnbmFnZS10b3BiYXIuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzLjI1ZW07XG4gICAgICAgICAgICAgICAgd2lkdGg6IDhlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvc2lnbmFnZS9zaWduYWdlLXRvcGJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGNBQWM7Z0JBQ2QsVUFBVTtZQUNkOztBQUVaLG9iQUFvYiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgbWF0LWZvcm0tZmllbGQge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMy4yNWVtO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 25845:
/*!*******************************************************************!*\
  !*** ./apps/concierge/src/app/signage/signage-zones.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignageZonesComponent: () => (/* binding */ SignageZonesComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var _signage_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signage-state.service */ 65383);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 50854);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _search_overlay_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-overlay.component */ 37056);
/* harmony import */ var _signage_item_playlists_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signage-item-playlists.component */ 47611);



















const _forTrack0 = ($index, $item) => $item.id;
const _c0 = () => [];
const _c1 = a0 => ({
  zone: a0
});
const _c2 = (a0, a1) => ({
  zone: a0,
  trigger: a1
});
function SignageZonesComponent_Conditional_6_For_2_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const trigger_r1 = ctx.$implicit;
    const zone_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("!bg-secondary", ctx_r2.selected_trigger.getValue() === (trigger_r1 == null ? null : trigger_r1.id))("text-secondary-content", ctx_r2.selected_trigger.getValue() === (trigger_r1 == null ? null : trigger_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](7, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](8, _c2, zone_r2.id, trigger_r1 == null ? null : trigger_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (trigger_r1 == null ? null : trigger_r1.display_name) || (trigger_r1 == null ? null : trigger_r1.name) || "Trigger", " ");
  }
}
function SignageZonesComponent_Conditional_6_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterCreate"](0, SignageZonesComponent_Conditional_6_For_2_Conditional_2_For_1_Template, 5, 11, "div", 12, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 0, ctx_r2.triggers));
  }
}
function SignageZonesComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, SignageZonesComponent_Conditional_6_For_2_Conditional_2_Template, 3, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "async");
  }
  if (rf & 2) {
    let tmp_16_0;
    const zone_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("!bg-secondary", ctx_r2.selected.getValue() === zone_r2.id)("text-secondary-content", ctx_r2.selected.getValue() === zone_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](10, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](11, _c1, zone_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", zone_r2.display_name || zone_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](((tmp_16_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 8, ctx_r2.active_zone)) == null ? null : tmp_16_0.id) === zone_r2.id && !ctx_r2.switching ? 2 : -1);
  }
}
function SignageZonesComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterCreate"](1, SignageZonesComponent_Conditional_6_For_2_Template, 4, 13, null, null, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 0, ctx_r2.zones));
  }
}
function SignageZonesComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 6)(1, "app-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "hide_image");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.search.getValue() ? "No matching zones found" : "No zones", " ");
  }
}
function SignageZonesComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "signage-item-playlists", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("add", function SignageZonesComponent_Conditional_10_Template_signage_item_playlists_add_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.adding = true);
    })("remove", function SignageZonesComponent_Conditional_10_Template_signage_item_playlists_remove_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.removePlaylist($event));
    })("ondrop", function SignageZonesComponent_Conditional_10_Template_signage_item_playlists_ondrop_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.drop($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("item", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 2, ctx_r2.active_trigger) || _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 4, ctx_r2.active_zone))("name", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 6, ctx_r2.active_trigger) ? "trigger" : "zone");
  }
}
function SignageZonesComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 9)(1, "app-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "desktop_windows");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Select a zone from the left to view playlists");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function SignageZonesComponent_search_overlay_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "search-overlay", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selected", function SignageZonesComponent_search_overlay_13_Template_search_overlay_selected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.addPlaylist($event));
    })("close", function SignageZonesComponent_search_overlay_13_Template_search_overlay_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.adding = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("item_list", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, ctx_r2.playlists));
  }
}
class SignageZonesComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_2__.AsyncHandler {
  constructor(_state, _route) {
    super();
    this._state = _state;
    this._route = _route;
    this.adding = false;
    this.switching = false;
    this.search = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject('');
    this.loading = this._state.loading;
    this.zones = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.search, this._state.zones]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(([search, list]) => list.filter(_ => _.name.toLowerCase().includes(search.toLowerCase()))));
    this.selected = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject('');
    this.selected_trigger = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject('');
    this.active_zone = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.zones, this.selected]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(([zones, id]) => zones.find(item => item.id === id)));
    this.triggers = this.selected.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(id => (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.listZoneTriggers)(id)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(_ => _.data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(_ => setTimeout(() => this.switching = false, 100)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.shareReplay)(1));
    this.active_trigger = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.triggers, this.selected_trigger]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(([list, id]) => list.find(item => item.id === id)));
    this.playlists = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.active_zone, this.active_trigger, this._state.playlists, this._state.has_changed]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(([zone, trigger, playlists]) => playlists.filter(_ => !(trigger || zone)?.playlists.find(id => _.id === id))));
  }
  ngOnInit() {
    this.subscription('route.params', this._route.queryParamMap.subscribe(params => {
      this.switching = params.get('zone') !== this.selected.getValue();
      this.selected.next(params.get('zone') || '');
      this.selected_trigger.next(params.get('trigger') || '');
    }));
  }
  addPlaylist(playlist) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const zone = yield _this.active_zone.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.take)(1)).toPromise();
      const trigger = yield _this.active_trigger.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.take)(1)).toPromise();
      const item = trigger || zone;
      const playlists = [...item.playlists, playlist.id];
      const method = trigger ? _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.updateTrigger : _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.updateZone;
      yield method(item.id, {
        playlists,
        version: zone.version
      }, 'patch').toPromise();
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifySuccess)(`Successfully added playlist to the ${trigger ? 'trigger' : 'zone'}`);
      _this._state.changed();
      _this.adding = false;
    })();
  }
  removePlaylist(playlist) {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const zone = yield _this2.active_zone.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.take)(1)).toPromise();
      const trigger = yield _this2.active_trigger.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.take)(1)).toPromise();
      const item = trigger || zone;
      const playlists = item.filter(id => playlist.id !== id);
      const method = trigger ? _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.updateTrigger : _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.updateZone;
      yield method(item.id, {
        playlists,
        version: zone.version
      }, 'patch').toPromise();
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifySuccess)(`Successfully removed playlist from ${trigger ? 'trigger' : 'zone'}`);
      _this2._state.changed();
      _this2.adding = false;
    })();
  }
  drop(event) {
    var _this3 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const zone = yield _this3.active_zone.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.take)(1)).toPromise();
      const trigger = yield _this3.active_trigger.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.take)(1)).toPromise();
      const item = trigger || zone;
      const old_playlist = item.playlists;
      const playlists = [...old_playlist];
      (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__.moveItemInArray)(playlists, event.previousIndex, event.currentIndex);
      item.playlists = playlists;
      _this3._state.changed();
      const method = trigger ? _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.updateTrigger : _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.updateZone;
      yield method(item.id, {
        playlists,
        version: zone.version
      }, 'patch').toPromise().catch(e => {
        item.playlists = old_playlist;
        _this3._state.changed();
        throw e;
      });
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifySuccess)(`Successfully re-ordered playlists on ${trigger ? 'trigger' : 'zone'}`);
      _this3._state.changed();
    })();
  }
  static #_ = this.ɵfac = function SignageZonesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SignageZonesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_signage_state_service__WEBPACK_IMPORTED_MODULE_1__.SignageStateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: SignageZonesComponent,
    selectors: [["signage-zones"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
    decls: 14,
    vars: 8,
    consts: [[1, "relative", "h-full", "w-full", "overflow-visible", "flex", "space-x-4"], ["sidebar", "", 1, "w-64", "h-full", "flex", "flex-col", "space-y-4", "py-4"], [1, "text-xl", "font-medium", "text-center"], ["appearance", "outline", 1, "w-full", "no-subscript"], ["matInput", "", "placeholder", "Search...", 3, "ngModelChange", "ngModel"], [1, "h-1/2", "flex-1", "w-full", "overflow-auto", "space-y-2"], [1, "flex", "flex-col", "items-center", "justify-center", "p-8", "space-y-2", "opacity-30"], [1, "relative", "flex", "flex-col", "flex-1", "w-1/2", "h-full", "overflow-auto", "rounded-lg", "border", "border-base-300", "p-4", "shadow", "space-y-4"], [1, "flex", "flex-col", "flex-1", 3, "item", "name"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "opacity-30"], [3, "item_list", "selected", "close", 4, "ngIf"], ["matRipple", "", 1, "w-full", "px-6", "rounded-3xl", "min-h-12", "flex", "items-center", "hover:bg-base-200", "truncate", "z-10", 3, "routerLink", "queryParams"], [1, "relative", "flex", "items-center", "space-x-2", "z-0"], [1, "w-6"], [1, "absolute", "h-16", "w-4", "border-b-2", "border-l-2", "border-base-300", "top-1/2", "left-6", "-translate-y-full"], ["matRipple", "", 1, "w-full", "px-6", "rounded-3xl", "min-h-12", "flex", "items-center", "hover:bg-base-200", "truncate", 3, "routerLink", "queryParams"], [1, "text-6xl"], [1, "text-center"], [1, "flex", "flex-col", "flex-1", 3, "add", "remove", "ondrop", "item", "name"], [3, "selected", "close", "item_list"]],
    template: function SignageZonesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Zones");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-form-field", 3)(5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SignageZonesComponent_Template_input_ngModelChange_5_listener($event) {
          return ctx.search.next($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, SignageZonesComponent_Conditional_6_Template, 4, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, SignageZonesComponent_Conditional_8_Template, 5, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, SignageZonesComponent_Conditional_10_Template, 4, 8, "signage-item-playlists", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, SignageZonesComponent_Conditional_12_Template, 5, 0, "div", 9)(13, SignageZonesComponent_search_overlay_13_Template, 2, 3, "search-overlay", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.search.getValue());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 4, ctx.zones)) == null ? null : tmp_1_0.length) > 0 ? 6 : 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 6, ctx.active_zone) ? 10 : 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.adding);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInput, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__.IconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterLink, _search_overlay_component__WEBPACK_IMPORTED_MODULE_5__.SearchOverlayComponent, _signage_item_playlists_component__WEBPACK_IMPORTED_MODULE_6__.SignageItemPlaylistsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.AsyncPipe]
  });
}

/***/ }),

/***/ 63571:
/*!*************************************************************!*\
  !*** ./apps/concierge/src/app/signage/signage.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignageComponent: () => (/* binding */ SignageComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _signage_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signage-state.service */ 65383);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/app-topbar.component */ 45189);
/* harmony import */ var _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/app-sidebar.component */ 96843);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ 38223);












const _c0 = ["app-new-staff", ""];
function SignageComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SignageComponent_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.newItem(ctx_r1.active_link));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Add ", ctx_r1.singular(ctx_r1.active_link), " ");
  }
}
function SignageComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SignageComponent_For_11_Template_a_click_0_listener() {
      const link_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.active_link = link_r4);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const link_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", "/signage/" + _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 3, link_r4))("active", ctx_r1.active_link == link_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", link_r4, " ");
  }
}
class SignageComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_2__.AsyncHandler {
  singular(name) {
    if (name === 'Media') return 'Playlist';
    if (name === 'Playlists') return 'Playlist';
    if (name === 'Displays') return 'Display';
    return '';
  }
  newItem(name) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let result = null;
      switch (name) {
        case 'Media':
        case 'Playlists':
          result = yield _this._state.editPlaylist();
          if (result) {
            _this._router.navigate(['/signage/media'], {
              queryParams: {
                playlist: result.id
              }
            });
          }
          break;
        case 'Displays':
          result = yield _this._state.editDisplay();
          if (!result) return;
          _this._router.navigate(['/signage/displays'], {
            queryParams: {
              display: result.id
            }
          });
          break;
      }
    })();
  }
  constructor(_state, _router) {
    super();
    this._state = _state;
    this._router = _router;
    this.loading = this._state.loading;
    this.links = ['Media', 'Displays', 'Zones'];
    this.active_link = this.links[0];
    this.previewFile = event => this._state.previewFileFromInput(event);
  }
  ngOnInit() {
    this.subscription('route.query', this._router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd) {
        this.active_link = this.links.find(_ => this._router.url.includes(_.toLowerCase()));
      }
    }));
    this.active_link = this.links.find(_ => this._router.url.includes(_.toLowerCase()));
  }
  static #_ = this.ɵfac = function SignageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SignageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_signage_state_service__WEBPACK_IMPORTED_MODULE_1__.SignageStateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: SignageComponent,
    selectors: [["", "app-new-staff", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
    attrs: _c0,
    decls: 15,
    vars: 2,
    consts: [["tabPanel", ""], [1, "flex", "flex-1", "h-px"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full"], [1, "p-8", "h-28", "flex", "items-center", "justify-between"], [1, "text-2xl", "font-medium"], ["btn", "", "matRipple", "", "class", "w-40", 3, "click", 4, "ngIf"], [1, "px-8"], ["mat-tab-nav-bar", "", 3, "tabPanel"], ["mat-tab-link", "", 3, "routerLink", "active"], [1, "flex-1", "h-1/2", "overflow-auto", "px-8", "py-4"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"], ["mat-tab-link", "", 3, "click", "routerLink", "active"]],
    template: function SignageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-topbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "main", 2)(4, "div", 3)(5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Digital Signage Management ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, SignageComponent_button_7_Template, 2, 1, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 6)(9, "nav", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](10, SignageComponent_For_11_Template, 3, 5, "a", 8, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-tab-nav-panel", 9, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const tabPanel_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.active_link === "Media" || ctx.active_link === "Displays");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tabPanel", tabPanel_r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.links);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_3__.ApplicationTopbarComponent, _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_4__.ApplicationSidebarComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRipple, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTabNav, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTabNavPanel, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTabLink, _angular_common__WEBPACK_IMPORTED_MODULE_7__.LowerCasePipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n                background-color: var(--b1);\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25hZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLHNCQUFzQjtnQkFDdEIsWUFBWTtnQkFDWixXQUFXO2dCQUNYLDJCQUEyQjtZQUMvQiIsImZpbGUiOiJzaWduYWdlLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYjEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvc2lnbmFnZS9zaWduYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixzQkFBc0I7Z0JBQ3RCLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCwyQkFBMkI7WUFDL0I7O0FBRVosd21CQUF3bUIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWIxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 21250:
/*!**********************************************************!*\
  !*** ./apps/concierge/src/app/signage/signage.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COMPONENTS: () => (/* binding */ COMPONENTS),
/* harmony export */   SignageModule: () => (/* binding */ SignageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 50854);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/ui.module */ 15412);
/* harmony import */ var _signage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signage.component */ 63571);
/* harmony import */ var _signage_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signage-topbar.component */ 42658);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tabs */ 38223);
/* harmony import */ var _signage_media_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signage-media.component */ 51706);
/* harmony import */ var _signage_media_preview_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signage-media-preview-modal.component */ 9151);
/* harmony import */ var _placeos_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @placeos/components */ 51588);
/* harmony import */ var _signage_playlist_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signage-playlist-modal.component */ 44140);
/* harmony import */ var _signage_playlist_media_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signage-playlist-media-list.component */ 15864);
/* harmony import */ var _signage_media_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signage-media-list.component */ 75649);
/* harmony import */ var _signage_displays_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signage-displays.component */ 30041);
/* harmony import */ var _search_overlay_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search-overlay.component */ 37056);
/* harmony import */ var _signage_zones_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signage-zones.component */ 25845);
/* harmony import */ var _signage_item_playlists_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./signage-item-playlists.component */ 47611);
/* harmony import */ var _signage_media_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./signage-media-modal.component */ 22270);
/* harmony import */ var _signage_display_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./signage-display-modal.component */ 91992);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37580);























const ROUTES = [{
  path: '',
  component: _signage_component__WEBPACK_IMPORTED_MODULE_1__.SignageComponent,
  children: [{
    path: '',
    redirectTo: 'media',
    pathMatch: 'full'
  }, {
    path: 'media',
    component: _signage_media_component__WEBPACK_IMPORTED_MODULE_3__.SignageMediaComponent
  }, {
    path: 'displays',
    component: _signage_displays_component__WEBPACK_IMPORTED_MODULE_9__.SignageDisplaysComponent
  }, {
    path: 'zones',
    component: _signage_zones_component__WEBPACK_IMPORTED_MODULE_11__.SignageZonesComponent
  }, {
    path: '*',
    redirectTo: 'media',
    pathMatch: 'full'
  }]
}];
const COMPONENTS = [_signage_component__WEBPACK_IMPORTED_MODULE_1__.SignageComponent, _signage_topbar_component__WEBPACK_IMPORTED_MODULE_2__.SignageTopbarComponent, _signage_media_component__WEBPACK_IMPORTED_MODULE_3__.SignageMediaComponent, _signage_media_modal_component__WEBPACK_IMPORTED_MODULE_13__.SignageMediaModalComponent, _signage_media_preview_modal_component__WEBPACK_IMPORTED_MODULE_4__.SignageMediaPreviewModalComponent, _signage_playlist_modal_component__WEBPACK_IMPORTED_MODULE_6__.SignagePlaylistModalComponent, _signage_media_list_component__WEBPACK_IMPORTED_MODULE_8__.SignageMediaListComponent, _signage_playlist_media_list_component__WEBPACK_IMPORTED_MODULE_7__.SignagePlaylistMediaListComponent, _signage_displays_component__WEBPACK_IMPORTED_MODULE_9__.SignageDisplaysComponent, _signage_display_modal_component__WEBPACK_IMPORTED_MODULE_14__.SignageDisplayModalComponent, _signage_zones_component__WEBPACK_IMPORTED_MODULE_11__.SignageZonesComponent, _search_overlay_component__WEBPACK_IMPORTED_MODULE_10__.SearchOverlayComponent, _signage_item_playlists_component__WEBPACK_IMPORTED_MODULE_12__.SignageItemPlaylistsComponent];
class SignageModule {
  static #_ = this.ɵfac = function SignageModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SignageModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
    type: SignageModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule, _placeos_components__WEBPACK_IMPORTED_MODULE_5__.ComponentsModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule.forChild(ROUTES), _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__.MatTabsModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_20__.DragDropModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](SignageModule, {
    declarations: [_signage_component__WEBPACK_IMPORTED_MODULE_1__.SignageComponent, _signage_topbar_component__WEBPACK_IMPORTED_MODULE_2__.SignageTopbarComponent, _signage_media_component__WEBPACK_IMPORTED_MODULE_3__.SignageMediaComponent, _signage_media_modal_component__WEBPACK_IMPORTED_MODULE_13__.SignageMediaModalComponent, _signage_media_preview_modal_component__WEBPACK_IMPORTED_MODULE_4__.SignageMediaPreviewModalComponent, _signage_playlist_modal_component__WEBPACK_IMPORTED_MODULE_6__.SignagePlaylistModalComponent, _signage_media_list_component__WEBPACK_IMPORTED_MODULE_8__.SignageMediaListComponent, _signage_playlist_media_list_component__WEBPACK_IMPORTED_MODULE_7__.SignagePlaylistMediaListComponent, _signage_displays_component__WEBPACK_IMPORTED_MODULE_9__.SignageDisplaysComponent, _signage_display_modal_component__WEBPACK_IMPORTED_MODULE_14__.SignageDisplayModalComponent, _signage_zones_component__WEBPACK_IMPORTED_MODULE_11__.SignageZonesComponent, _search_overlay_component__WEBPACK_IMPORTED_MODULE_10__.SearchOverlayComponent, _signage_item_playlists_component__WEBPACK_IMPORTED_MODULE_12__.SignageItemPlaylistsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule, _placeos_components__WEBPACK_IMPORTED_MODULE_5__.ComponentsModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__.MatTabsModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_20__.DragDropModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=apps_concierge_src_app_signage_signage_module_ts.js.map