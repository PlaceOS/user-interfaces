"use strict";
(self["webpackChunkconcierge"] = self["webpackChunkconcierge"] || []).push([["default-libs_catering_src_index_ts"],{

/***/ 5039:
/*!************************************!*\
  !*** ./libs/catering/src/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CATERING_STATUSES: () => (/* reexport safe */ _lib_catering__WEBPACK_IMPORTED_MODULE_1__.CATERING_STATUSES),
/* harmony export */   CateringItem: () => (/* reexport safe */ _lib_catering__WEBPACK_IMPORTED_MODULE_1__.CateringItem),
/* harmony export */   CateringItemModalComponent: () => (/* reexport safe */ _lib_catering__WEBPACK_IMPORTED_MODULE_1__.CateringItemModalComponent),
/* harmony export */   CateringItemOptionModalComponent: () => (/* reexport safe */ _lib_catering__WEBPACK_IMPORTED_MODULE_1__.CateringItemOptionModalComponent),
/* harmony export */   CateringMenuComponent: () => (/* reexport safe */ _lib_catering__WEBPACK_IMPORTED_MODULE_1__.CateringMenuComponent),
/* harmony export */   CateringMenuItemComponent: () => (/* reexport safe */ _lib_catering__WEBPACK_IMPORTED_MODULE_1__.CateringMenuItemComponent),
/* harmony export */   CateringOrder: () => (/* reexport safe */ _lib_catering__WEBPACK_IMPORTED_MODULE_1__.CateringOrder),
/* harmony export */   CateringOrderComponent: () => (/* reexport safe */ _lib_catering__WEBPACK_IMPORTED_MODULE_1__.CateringOrderComponent),
/* harmony export */   CateringOrderItemComponent: () => (/* reexport safe */ _lib_catering__WEBPACK_IMPORTED_MODULE_1__.CateringOrderItemComponent),
/* harmony export */   CateringOrderListComponent: () => (/* reexport safe */ _lib_catering__WEBPACK_IMPORTED_MODULE_1__.CateringOrderListComponent),
/* harmony export */   CateringOrderModalComponent: () => (/* reexport safe */ _lib_catering__WEBPACK_IMPORTED_MODULE_1__.CateringOrderModalComponent),
/* harmony export */   CateringOrderOptionsModalComponent: () => (/* reexport safe */ _lib_catering__WEBPACK_IMPORTED_MODULE_1__.CateringOrderOptionsModalComponent),
/* harmony export */   CateringOrdersService: () => (/* reexport safe */ _lib_catering__WEBPACK_IMPORTED_MODULE_1__.CateringOrdersService),
/* harmony export */   CateringStateService: () => (/* reexport safe */ _lib_catering__WEBPACK_IMPORTED_MODULE_1__.CateringStateService),
/* harmony export */   ChargeCodeListModalComponent: () => (/* reexport safe */ _lib_charge_code_list_modal_component__WEBPACK_IMPORTED_MODULE_2__.ChargeCodeListModalComponent),
/* harmony export */   NewCateringOrderModalComponent: () => (/* reexport safe */ _lib_catering__WEBPACK_IMPORTED_MODULE_1__.NewCateringOrderModalComponent),
/* harmony export */   SharedCateringModule: () => (/* reexport safe */ _lib_catering_module__WEBPACK_IMPORTED_MODULE_0__.SharedCateringModule)
/* harmony export */ });
/* harmony import */ var _lib_catering_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/catering.module */ 13832);
/* harmony import */ var _lib_catering__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/catering */ 4292);
/* harmony import */ var _lib_charge_code_list_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/charge-code-list-modal.component */ 42051);




/***/ }),

/***/ 30766:
/*!***********************************************************************!*\
  !*** ./libs/catering/src/lib/catering-import-menu-modal.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CateringImportMenuModalComponent: () => (/* binding */ CateringImportMenuModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _catering_item_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catering-item.class */ 85784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/src/lib/icon.component */ 94888);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ 33910);









function CateringImportMenuModalComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 4)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CateringImportMenuModalComponent_main_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "main")(1, "div", 5)(2, "app-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Click to select file or Drag and drop files");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function CateringImportMenuModalComponent_main_4_Template_input_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.handleFileEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 8)(8, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CateringImportMenuModalComponent_main_4_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.downloadTemplate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Download Template ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function CateringImportMenuModalComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "main", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-spinner", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.loading);
  }
}
class CateringImportMenuModalComponent {
  constructor() {
    this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  }
  /** Upload the image to the cloud */
  handleFileEvent(event) {
    this.loading = 'Processing menu data...';
    const element = event.target;
    if (!element?.files) return this.loading = '';
    const files = element.files;
    if (!files.length) return this.loading = '';
    const file = files[0];
    const fileReader = new FileReader();
    fileReader.addEventListener('loadend', e => {
      const contents = e.target.result;
      const data = (0,_placeos_common__WEBPACK_IMPORTED_MODULE_0__.csvToJson)(contents);
      this.loading = '';
      this.event.emit({
        reason: 'done',
        metadata: data.filter(_ => (_.type || '').toLowerCase() === 'item').map(i => new _catering_item_class__WEBPACK_IMPORTED_MODULE_1__.CateringItem({
          ...i,
          options: data.filter(_ => (_.type || '').toLowerCase() === 'option' && _.tags === i.id).map(_ => ({
            id: _.id,
            name: _.name,
            group: _.category,
            multiple: _.multiple,
            unit_price: _.unit_price
          }))
        }))
      });
    });
    fileReader.readAsText(file);
  }
  downloadTemplate() {
    const template = `ID,Type,Name,Unit Price,Category,Description,Tags,Multiple
item-1,item,Coffee,200,Drink,Wake Up,,
option-1,option,1 Sugar,20,Sugars,,item-1,false`;
    (0,_placeos_common__WEBPACK_IMPORTED_MODULE_0__.downloadFile)('import-menu-template.csv', template);
  }
  static #_ = this.ɵfac = function CateringImportMenuModalComponent_Factory(t) {
    return new (t || CateringImportMenuModalComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: CateringImportMenuModalComponent,
    selectors: [["catering-import-menu-modal"]],
    outputs: {
      event: "event"
    },
    decls: 7,
    vars: 3,
    consts: [[1, "h-12", "bg-primary", "flex", "items-center", "justify-between", "px-4"], ["icon", "", "mat-dialog-close", "", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["load_state", ""], ["icon", "", "mat-dialog-close", ""], [1, "relative", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "h-[24rem]", "w-[24rem]", "border-4", "border-base-200", "border-dashed", "rounded-xl", "hover:bg-base-200", "m-4", "p-4", "cursor-pointer"], [1, "text-4xl"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"], [1, "flex", "items-center", "justify-center", "px-4", "pb-4"], ["matRipple", "", 1, "clear", "underline", "w-48", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8", "h-[24rem]", "w-[24rem]"], ["diameter", "32"]],
    template: function CateringImportMenuModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header", 0)(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Import Catering Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CateringImportMenuModalComponent_button_3_Template, 3, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CateringImportMenuModalComponent_main_4_Template, 10, 0, "main", 2)(5, CateringImportMenuModalComponent_ng_template_5_Template, 4, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r3);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatRipple, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__.MatProgressSpinner]
  });
}

/***/ }),

/***/ 98147:
/*!****************************************************************!*\
  !*** ./libs/catering/src/lib/catering-item-modal.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CateringItemModalComponent: () => (/* binding */ CateringItemModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/keycodes */ 30554);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _catering_item_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catering-item.class */ 85784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ 99892);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ 56658);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/src/lib/icon.component */ 94888);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ 33910);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ 21757);
/* harmony import */ var _form_fields_src_lib_counter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../form-fields/src/lib/counter.component */ 37594);
/* harmony import */ var _form_fields_src_lib_image_list_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../form-fields/src/lib/image-list-field.component */ 64035);




















function CateringItemModalComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 6)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function CateringItemModalComponent_form_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17)(1, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-form-field", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("error", ctx_r7.form.controls.name.invalid && ctx_r7.form.controls.name.touched);
  }
}
function CateringItemModalComponent_form_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17)(1, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-form-field", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Category is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("error", ctx_r8.form.controls.category.invalid && ctx_r8.form.controls.category.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matAutocomplete", _r5);
  }
}
function CateringItemModalComponent_form_4_div_4_mat_chip_row_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-chip-row", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("removed", function CateringItemModalComponent_form_4_div_4_mat_chip_row_6_Template_mat_chip_row_removed_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17);
      const item_r15 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r16.removeTag(item_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "button", 30)(3, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r15, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", "Remove " + item_r15);
  }
}
function CateringItemModalComponent_form_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17)(1, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](2, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-form-field", 19)(4, "mat-chip-grid", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, CateringItemModalComponent_form_4_div_4_mat_chip_row_6_Template, 5, 2, "mat-chip-row", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("matChipInputTokenEnd", function CateringItemModalComponent_form_4_div_4_Template_input_matChipInputTokenEnd_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r18.addTag($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("error", ctx_r9.form.controls.tags.invalid && ctx_r9.form.controls.tags.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r9.tag_list);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matChipInputFor", _r13)("matChipInputSeparatorKeyCodes", ctx_r9.separators)("matChipInputAddOnBlur", true);
  }
}
function CateringItemModalComponent_form_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17)(1, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-form-field", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "textarea", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function CateringItemModalComponent_form_4_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17)(1, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Unit Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-form-field", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Unit Price is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("error", ctx_r11.form.controls.unit_price.invalid && ctx_r11.form.controls.unit_price.touched);
  }
}
function CateringItemModalComponent_form_4_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17)(1, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](2, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "image-list-field", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
const _c0 = () => ({
  standalone: true
});
function CateringItemModalComponent_form_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 7)(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CateringItemModalComponent_form_4_div_2_Template, 10, 2, "div", 9)(3, CateringItemModalComponent_form_4_div_3_Template, 10, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, CateringItemModalComponent_form_4_div_4_Template, 8, 6, "div", 9)(5, CateringItemModalComponent_form_4_div_5_Template, 5, 0, "div", 9)(6, CateringItemModalComponent_form_4_div_6_Template, 10, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 10)(8, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Accept Points?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-checkbox", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 13)(13, "mat-checkbox", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CateringItemModalComponent_form_4_Template_mat_checkbox_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event ? ctx_r20.addTag({
        value: "Gluten Free"
      }) : ctx_r20.removeTag("Gluten Free"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " Gluten Free (GF) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-checkbox", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CateringItemModalComponent_form_4_Template_mat_checkbox_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event ? ctx_r22.addTag({
        value: "Vegan"
      }) : ctx_r22.removeTag("Vegan"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " Vegan (VG) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-checkbox", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CateringItemModalComponent_form_4_Template_mat_checkbox_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event ? ctx_r23.addTag({
        value: "Vegetarian"
      }) : ctx_r23.removeTag("Vegetarian"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " Vegetarian (V) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-checkbox", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CateringItemModalComponent_form_4_Template_mat_checkbox_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event ? ctx_r24.addTag({
        value: "Contains Dairy"
      }) : ctx_r24.removeTag("Contains Dairy"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, " Contains Dairy (D) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "mat-checkbox", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CateringItemModalComponent_form_4_Template_mat_checkbox_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event ? ctx_r25.addTag({
        value: "Contains Nuts"
      }) : ctx_r25.removeTag("Contains Nuts"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " Contains Nuts (N) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 10)(24, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Discount Cap");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "a-counter", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, CateringItemModalComponent_form_4_div_27_Template, 4, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_6_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.form.controls.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.form.controls.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.form.controls.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.form.controls.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.form.controls.unit_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](((tmp_6_0 = ctx_r1.form.get("accept_points")) == null ? null : tmp_6_0.value) ? "No" : "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.hasTag("Gluten Free"))("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](22, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.hasTag("Vegan"))("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](23, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.hasTag("Vegetarian"))("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](24, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.hasTag("Contains Dairy"))("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](25, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r1.hasTag("Contains Nuts"))("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](26, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("min", 0)("max", 100)("step", 5)("render_fn", ctx_r1.renderPercent);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.form.controls.images);
  }
}
function CateringItemModalComponent_footer_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "footer", 37)(1, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CateringItemModalComponent_footer_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r26.saveChanges());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r2.form.dirty);
  }
}
function CateringItemModalComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-spinner", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Saving catering item...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function CateringItemModalComponent_mat_option_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", option_r28, " ");
  }
}
class CateringItemModalComponent {
  /** Current item details */
  get item() {
    return this._data.item || new _catering_item_class__WEBPACK_IMPORTED_MODULE_1__.CateringItem();
  }
  /** List of available categories */
  get categories() {
    return this._data.categories || [];
  }
  get tag_list() {
    return this.form.controls.tags.value;
  }
  renderPercent(value = 0) {
    return `${value}%`;
  }
  hasTag(tag) {
    return this.tag_list.includes(tag);
  }
  constructor(_data) {
    this._data = _data;
    /** Emitter for events on the modal */
    this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    /** Form fields for item */
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.item.name || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.item.description || ''),
      category: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.item.category || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
      unit_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.item.unit_price, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
      tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.item.tags || []),
      accept_points: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.item.accept_points || false),
      discount_cap: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.item.discount_cap || 0),
      images: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.item.images || [])
    });
    /** Whether changes are being saved */
    this.loading = false;
    /** List of separator characters for tags */
    this.separators = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ENTER, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.COMMA, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.SPACE];
  }
  /**
   * Add a tag to the list of tags for the item
   * @param event Input event
   */
  addTag(event) {
    if (!this.form || !this.form.controls.tags) return;
    this.form.controls.tags.markAsDirty();
    const input = event.input;
    const value = event.value;
    const tag_list = this.tag_list;
    if ((value || '').trim()) {
      tag_list.push(value);
      this.form.controls.tags.setValue(tag_list);
    }
    // Reset the input value
    if (input) input.value = '';
  }
  /**
   * Remove tag from the list
   * @param existing_tag Tag to remove
   */
  removeTag(existing_tag) {
    if (!this.form || !this.form.controls.tags) return;
    const tag_list = this.tag_list;
    this.form.controls.tags.markAsDirty();
    const index = tag_list.indexOf(existing_tag);
    if (index >= 0) {
      tag_list.splice(index, 1);
      this.form.controls.tags.setValue(tag_list);
    }
  }
  saveChanges() {
    this.loading = true;
    this.event.emit({
      reason: 'done',
      metadata: {
        item: new _catering_item_class__WEBPACK_IMPORTED_MODULE_1__.CateringItem({
          ...this.item,
          id: this.item.id || `item-${(0,_placeos_common__WEBPACK_IMPORTED_MODULE_0__.randomInt)(99999999)}`,
          ...this.form.value
        })
      }
    });
  }
  static #_ = this.ɵfac = function CateringItemModalComponent_Factory(t) {
    return new (t || CateringItemModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: CateringItemModalComponent,
    selectors: [["catering-item-modal"]],
    outputs: {
      event: "event"
    },
    decls: 11,
    vars: 6,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_tagsLabel$$LIBS_CATERING_SRC_LIB_CATERING_ITEM_MODAL_COMPONENT_TS___0 = goog.getMsg(" Tags: ");
        i18n_0 = MSG_EXTERNAL_tagsLabel$$LIBS_CATERING_SRC_LIB_CATERING_ITEM_MODAL_COMPONENT_TS___0;
      } else {
        i18n_0 = $localize`:@@tagsLabel␟800ffadd463cfe152c5af3fa9f13803ab2e77b93␟4746186018558508280: Tags: `;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_zoneTagsPlaceholder$$LIBS_CATERING_SRC_LIB_CATERING_ITEM_MODAL_COMPONENT_TS___1 = goog.getMsg("Item tags e.g. Gluten Free, Vegan etc.");
        i18n_1 = MSG_EXTERNAL_zoneTagsPlaceholder$$LIBS_CATERING_SRC_LIB_CATERING_ITEM_MODAL_COMPONENT_TS___1;
      } else {
        i18n_1 = $localize`:@@zoneTagsPlaceholder␟c133beffffe3288bbdbf8572a32910c33ce14991␟2194594490376201833:Item tags e.g. Gluten Free, Vegan etc.`;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_imagesLabel$$LIBS_CATERING_SRC_LIB_CATERING_ITEM_MODAL_COMPONENT_TS___2 = goog.getMsg("Images:");
        i18n_2 = MSG_EXTERNAL_imagesLabel$$LIBS_CATERING_SRC_LIB_CATERING_ITEM_MODAL_COMPONENT_TS___2;
      } else {
        i18n_2 = $localize`:@@imagesLabel␟e5d9e00faa06714d7671b164cad364b26f4c585b␟5137125764814732349:Images:`;
      }
      return [["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "p-4 overflow-auto max-h-[65vh]", 3, "formGroup", 4, "ngIf", "ngIfElse"], ["class", "flex p-2 items-center justify-center border-t border-solid border-base-200", 4, "ngIf"], ["load_state", ""], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "p-4", "overflow-auto", "max-h-[65vh]", 3, "formGroup"], [1, "flex", "items-center", "space-x-2"], ["class", "flex flex-col", 4, "ngIf"], [1, "flex", "items-center"], [1, "flex-none", "w-28", "min-w-0"], ["formControlName", "accept_points"], ["list", "", 1, "flex", "items-center", "flex-wrap", "max-w-lg"], [3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "flex-1", "w-24", "min-w-0"], ["formControlName", "discount_cap", 1, "border", "border-base-200", "rounded", 3, "min", "max", "step", "render_fn"], [1, "flex", "flex-col"], ["for", "title"], ["appearance", "outline"], ["matInput", "", "name", "name", "placeholder", "Item name", "formControlName", "name"], ["for", "category"], ["matInput", "", "name", "category", "placeholder", "Category", "formControlName", "category", 3, "matAutocomplete"], ["for", "tags"], i18n_0, ["aria-label", "Item Tags"], ["chipList", ""], [3, "removed", 4, "ngFor", "ngForOf"], ["name", "tags", "placeholder", i18n_1, 3, "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur", "matChipInputTokenEnd"], [3, "removed"], ["matChipRemove", ""], ["for", "description"], ["matInput", "", "name", "description", "placeholder", "Item Description", "formControlName", "description"], ["matInput", "", "name", "unit-price", "type", "number", "placeholder", "Unit Price", "formControlName", "unit_price"], ["for", "images"], i18n_2, ["name", "images", "formControlName", "images"], [1, "flex", "p-2", "items-center", "justify-center", "border-t", "border-solid", "border-base-200"], ["btn", "", "matRipple", "", 3, "disabled", "click"], [1, "flex", "flex-col", "items-center", "p-8", "space-y-2", "w-64"], ["diameter", "32"], [3, "value"]];
    },
    template: function CateringItemModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "header")(1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, CateringItemModalComponent_button_3_Template, 3, 0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, CateringItemModalComponent_form_4_Template, 28, 27, "form", 1)(5, CateringItemModalComponent_footer_5_Template, 3, 1, "footer", 2)(6, CateringItemModalComponent_ng_template_6_Template, 4, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-autocomplete", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, CateringItemModalComponent_mat_option_10_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.item.id ? "Edit" : "Add", " Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form && !ctx.loading)("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.categories);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__.MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__.MatAutocompleteTrigger, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogClose, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatError, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatRipple, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__.MatProgressSpinner, _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipGrid, _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipInput, _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipRemove, _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipRow, _form_fields_src_lib_counter_component__WEBPACK_IMPORTED_MODULE_3__.CounterComponent, _form_fields_src_lib_image_list_field_component__WEBPACK_IMPORTED_MODULE_4__.ImageListFieldComponent],
    styles: ["[list][_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\n                margin: 0.5rem;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvY2F0ZXJpbmcvc3JjL2xpYi9jYXRlcmluZy1pdGVtLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksY0FBYztZQUNsQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgW2xpc3RdIG1hdC1jaGVja2JveCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 67910:
/*!***************************************************************!*\
  !*** ./libs/catering/src/lib/catering-menu-item.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CateringMenuItemComponent: () => (/* binding */ CateringMenuItemComponent)
/* harmony export */ });
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _catering_item_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catering-item.class */ 85784);
/* harmony import */ var _catering_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catering-state.service */ 45618);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ 56658);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ 60702);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/src/lib/icon.component */ 94888);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 55309);












const _c0 = ["catering-menu-item", ""];
function CateringMenuItemComponent_div_1_button_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 14)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r2);
  }
}
function CateringMenuItemComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "mat-checkbox", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CateringMenuItemComponent_div_1_Template_mat_checkbox_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.is_enabled = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 8)(3, "div", 9)(4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, CateringMenuItemComponent_div_1_button_12_Template, 3, 1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CateringMenuItemComponent_div_1_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.show_options = !ctx_r6.show_options);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r0.is_enabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.item.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.item.category, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](10, 6, ctx_r0.item.unit_price / 100, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 9, ctx_r0.symbol)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.can_edit);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r0.item.options.length);
  }
}
function CateringMenuItemComponent_div_2_div_1_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CateringMenuItemComponent_div_2_div_1_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const option_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.editOption(option_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function CateringMenuItemComponent_div_2_div_1_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CateringMenuItemComponent_div_2_div_1_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const option_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.removeOption(option_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function CateringMenuItemComponent_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 19)(3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, CateringMenuItemComponent_div_2_div_1_button_7_Template, 3, 0, "button", 21)(8, CateringMenuItemComponent_div_2_div_1_button_8_Template, 3, 0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](option_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", option_r8.group, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.can_edit);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.can_edit);
  }
}
function CateringMenuItemComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CateringMenuItemComponent_div_2_div_1_Template, 9, 4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("height", ctx_r1.show_options ? ctx_r1.item.options.length * 3.5 + "rem" : "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.item.options);
  }
}
class CateringMenuItemComponent {
  get can_edit() {
    return this._catering.is_editable;
  }
  get is_enabled() {
    return !this.item.hide_for_zones.includes(this._catering.zone);
  }
  set is_enabled(state) {
    let list = this.item.hide_for_zones;
    if (!state) list = (0,_placeos_common__WEBPACK_IMPORTED_MODULE_0__.unique)([...list, this._catering.zone]);else list = list.filter(_ => _ !== this._catering.zone);
    this._catering.updateItem(new _catering_item_class__WEBPACK_IMPORTED_MODULE_1__.CateringItem({
      ...this.item,
      hide_for_zones: list
    }));
  }
  /** Currency symbol for active menu */
  get symbol() {
    return this._catering.currency;
  }
  constructor(_catering) {
    this._catering = _catering;
    /** Whether to show item options */
    this.show_options = false;
    this.addOption = () => this._catering.addOption(this.item);
    this.editOption = option => this._catering.addOption(this.item, option);
    this.removeOption = option => this._catering.deleteOption(this.item, option);
    this.editItem = () => this._catering.addItem(this.item);
    this.removeItem = () => this._catering.deleteItem(this.item);
  }
  static #_ = this.ɵfac = function CateringMenuItemComponent_Factory(t) {
    return new (t || CateringMenuItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_catering_state_service__WEBPACK_IMPORTED_MODULE_2__.CateringStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: CateringMenuItemComponent,
    selectors: [["", "catering-menu-item", ""]],
    inputs: {
      item: "item"
    },
    attrs: _c0,
    decls: 20,
    vars: 2,
    consts: [[1, "w-full", "h-full", "bg-base-100", "border", "border-base-200", "overflow-hidden", "rounded"], ["item", "", "class", "flex items-center px-2", 4, "ngIf"], ["options", "", "class", "bg-base-200 overflow-hidden", 3, "height", 4, "ngIf"], ["menu", "matMenu"], ["mat-menu-item", "", 1, "flex", "items-center", 3, "click"], [1, "ml-2"], ["item", "", 1, "flex", "items-center", "px-2"], ["matTooltip", "Allow Ordering Item", 1, "mr-2", 3, "ngModel", "ngModelChange"], [1, "flex", "items-center", "p-2", "flex-1"], [1, "flex-1"], [1, "text-xs", "opacity-60"], [1, "p-2", "m-2", "text-xs", "font-bold", "text-secondary-content", "rounded", "bg-secondary"], ["icon", "", "matRipple", "", 3, "matMenuTriggerFor", 4, "ngIf"], ["icon", "", "matRipple", "", 3, "disabled", "click"], ["icon", "", "matRipple", "", 3, "matMenuTriggerFor"], ["options", "", 1, "bg-base-200", "overflow-hidden"], ["class", "flex p-2 items-center border-t border-solid border-base-200 relative", 4, "ngFor", "ngForOf"], [1, "flex", "p-2", "items-center", "border-t", "border-solid", "border-base-200", "relative"], [1, "absolute", "inset-y-0", "left-0", "w-2", "bg-black", "opacity-10"], [1, "flex-1", "pl-4", "pr-2"], [1, "text"], ["edit", "", "icon", "", "matRipple", "", "class", "mx-2", 3, "click", 4, "ngIf"], ["remove", "", "icon", "", "matRipple", "", "class", "mx-2", 3, "click", 4, "ngIf"], ["edit", "", "icon", "", "matRipple", "", 1, "mx-2", 3, "click"], ["remove", "", "icon", "", "matRipple", "", 1, "mx-2", 3, "click"]],
    template: function CateringMenuItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CateringMenuItemComponent_div_1_Template, 16, 11, "div", 1)(2, CateringMenuItemComponent_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-menu", null, 3)(5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CateringMenuItemComponent_Template_button_click_5_listener() {
          return ctx.addOption();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Add Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CateringMenuItemComponent_Template_button_click_10_listener() {
          return ctx.editItem();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Edit Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CateringMenuItemComponent_Template_button_click_15_listener() {
          return ctx.removeItem();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Remove Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.item);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.item);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuTrigger, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckbox, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CurrencyPipe],
    styles: ["[_nghost-%COMP%] {\n                overflow: hidden;\n                width: 48rem;\n                margin: 0.5rem auto;\n                max-width: calc(100vw - 1rem);\n            }\n\n            button[mat-menu-item][_ngcontent-%COMP%] {\n                display: flex;\n            }\n\n            [options][_ngcontent-%COMP%] {\n                transition: height 200ms;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvY2F0ZXJpbmcvc3JjL2xpYi9jYXRlcmluZy1tZW51LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxnQkFBZ0I7Z0JBQ2hCLFlBQVk7Z0JBQ1osbUJBQW1CO2dCQUNuQiw2QkFBNkI7WUFDakM7O1lBRUE7Z0JBQ0ksYUFBYTtZQUNqQjs7WUFFQTtnQkFDSSx3QkFBd0I7WUFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0OHJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAuNXJlbSBhdXRvO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDFyZW0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBidXR0b25bbWF0LW1lbnUtaXRlbV0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtvcHRpb25zXSB7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDIwMG1zO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 56748:
/*!**********************************************************!*\
  !*** ./libs/catering/src/lib/catering-menu.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CateringMenuComponent: () => (/* binding */ CateringMenuComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 70462);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 47422);
/* harmony import */ var _catering_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catering-state.service */ 45618);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ 60989);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/src/lib/icon.component */ 94888);
/* harmony import */ var _catering_menu_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catering-menu-item.component */ 67910);









function CateringMenuComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("item", item_r5);
  }
}
function CateringMenuComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CateringMenuComponent_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r0.menu));
  }
}
function CateringMenuComponent_mat_tab_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("item", item_r8);
  }
}
function CateringMenuComponent_mat_tab_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-tab", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CateringMenuComponent_mat_tab_4_ng_container_1_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", group_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("label", group_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 3, ctx_r1.tab_menu)[group_r6]);
  }
}
function CateringMenuComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "No items in menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class CateringMenuComponent {
  get categories() {
    return this._catering.categories;
  }
  constructor(_catering) {
    this._catering = _catering;
    /** Observable for the currently active menu */
    this.menu = this._catering.menu;
    /** Store for the currently selected tab */
    this.shown_tab = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject('');
    /** Observable for the menu list for the selected tab */
    this.tab_menu = this.menu.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(menu => {
      const menu_map = {};
      for (const group of this.categories) {
        menu_map[group] = menu.filter(item => item.category === group);
      }
      return menu_map;
    }));
  }
  static #_ = this.ɵfac = function CateringMenuComponent_Factory(t) {
    return new (t || CateringMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_catering_state_service__WEBPACK_IMPORTED_MODULE_0__.CateringStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: CateringMenuComponent,
    selectors: [["catering-menu"]],
    decls: 7,
    vars: 5,
    consts: [[1, "h-full", 3, "selectedIndexChange"], ["label", "All Items"], [4, "ngIf", "ngIfElse"], [3, "label", 4, "ngFor", "ngForOf"], ["empty_state", ""], [4, "ngFor", "ngForOf"], ["catering-menu-item", "", 3, "item"], [3, "label"], [1, "flex", "flex-col", "items-center", "p-8", "space-y-2"]],
    template: function CateringMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-tab-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectedIndexChange", function CateringMenuComponent_Template_mat_tab_group_selectedIndexChange_0_listener($event) {
          return ctx.shown_tab.next($event === 0 ? "" : ctx.categories[$event - 1]);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CateringMenuComponent_ng_container_2_Template, 3, 3, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CateringMenuComponent_mat_tab_4_Template, 3, 5, "mat-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CateringMenuComponent_ng_template_5_Template, 5, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 3, ctx.menu)) == null ? null : tmp_0_0.length)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.categories);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTabGroup, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent, _catering_menu_item_component__WEBPACK_IMPORTED_MODULE_2__.CateringMenuItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 90%;\n                width: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvY2F0ZXJpbmcvc3JjL2xpYi9jYXRlcmluZy1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixzQkFBc0I7Z0JBQ3RCLFdBQVc7Z0JBQ1gsV0FBVztZQUNmIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGhlaWdodDogOTAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 57341:
/*!******************************************************************!*\
  !*** ./libs/catering/src/lib/catering-option-modal.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CateringItemOptionModalComponent: () => (/* binding */ CateringItemOptionModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var libs_common_src_lib_general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! libs/common/src/lib/general */ 52338);
/* harmony import */ var _catering_item_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catering-item.class */ 85784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/autocomplete */ 99892);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ 56658);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/src/lib/icon.component */ 94888);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 33910);
















function CateringItemOptionModalComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 6)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CateringItemOptionModalComponent_form_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9)(1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("error", ctx_r7.form.controls.name.invalid && ctx_r7.form.controls.name.touched);
  }
}
function CateringItemOptionModalComponent_form_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9)(1, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Type is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("error", ctx_r8.form.controls.group.invalid && ctx_r8.form.controls.group.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matAutocomplete", _r5);
  }
}
function CateringItemOptionModalComponent_form_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9)(1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Unit Price:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CateringItemOptionModalComponent_form_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9)(1, "mat-checkbox", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Can select multiple of type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CateringItemOptionModalComponent_form_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CateringItemOptionModalComponent_form_4_div_1_Template, 10, 2, "div", 8)(2, CateringItemOptionModalComponent_form_4_div_2_Template, 10, 3, "div", 8)(3, CateringItemOptionModalComponent_form_4_div_3_Template, 5, 0, "div", 8)(4, CateringItemOptionModalComponent_form_4_div_4_Template, 3, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.form.controls.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.form.controls.group);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.form.controls.unit_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.form.controls.multiple);
  }
}
function CateringItemOptionModalComponent_footer_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "footer", 17)(1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CateringItemOptionModalComponent_footer_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.saveChanges());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r2.form.dirty);
  }
}
function CateringItemOptionModalComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-spinner", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Saving catering item option...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CateringItemOptionModalComponent_mat_option_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", option_r13, " ");
  }
}
class CateringItemOptionModalComponent {
  /** Current item details */
  get option() {
    return this._data.option;
  }
  /** List of available categories */
  get types() {
    return this._data.types || [];
  }
  constructor(_data) {
    this._data = _data;
    /** Emitter for events on the modal */
    this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    /** Form fields for item */
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.option.name || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
      group: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.option.group || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
      unit_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.option.unit_price),
      multiple: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(!!this.option.multiple, [])
    });
    /** Whether changes are being saved */
    this.loading = false;
  }
  saveChanges() {
    this.loading = true;
    const new_option = {
      ...this.option,
      id: this.option.id || `option-${(0,libs_common_src_lib_general__WEBPACK_IMPORTED_MODULE_0__.randomInt)(99999999)}`,
      ...this.form.value
    };
    this.event.emit({
      reason: 'done',
      metadata: {
        item: new _catering_item_class__WEBPACK_IMPORTED_MODULE_1__.CateringItem({
          ...this._data.parent,
          options: this._data.parent.options.filter(i => i.id !== new_option.id).concat([new_option])
        })
      }
    });
  }
  static #_ = this.ɵfac = function CateringItemOptionModalComponent_Factory(t) {
    return new (t || CateringItemOptionModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: CateringItemOptionModalComponent,
    selectors: [["catering-option-modal"]],
    outputs: {
      event: "event"
    },
    decls: 11,
    vars: 6,
    consts: [["icon", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "p-4 overflow-auto max-h-[65vh]", 3, "formGroup", 4, "ngIf", "ngIfElse"], ["class", "flex p-2 items-center justify-center border-t border-solid border-base-200", 4, "ngIf"], ["load_state", ""], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["icon", "", "mat-dialog-close", ""], [1, "p-4", "overflow-auto", "max-h-[65vh]", 3, "formGroup"], ["class", "flex flex-col", 4, "ngIf"], [1, "flex", "flex-col"], ["for", "title"], ["appearance", "outline"], ["matInput", "", "name", "name", "placeholder", "Item name", "formControlName", "name"], ["for", "group"], ["matInput", "", "name", "group", "placeholder", "Type of option e.g. Number of sugars", "formControlName", "group", 3, "matAutocomplete"], ["matInput", "", "name", "unit-price", "type", "number", "placeholder", "Unit Price", "formControlName", "unit_price"], ["name", "multiple", "formControlName", "multiple"], [1, "flex", "p-2", "items-center", "justify-center", "border-t", "border-solid", "border-base-200"], ["btn", "", "matRipple", "", 3, "disabled", "click"], ["loading", "", 1, "flex", "flex-col", "items-center", "p-8", "space-y-2", "w-64"], ["diameter", "32"], [3, "value"]],
    template: function CateringItemOptionModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header")(1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CateringItemOptionModalComponent_button_3_Template, 3, 0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CateringItemOptionModalComponent_form_4_Template, 5, 5, "form", 1)(5, CateringItemOptionModalComponent_footer_5_Template, 3, 1, "footer", 2)(6, CateringItemOptionModalComponent_ng_template_6_Template, 4, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-autocomplete", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, CateringItemOptionModalComponent_mat_option_10_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.option.id ? "Edit" : "Add", " Item Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form && !ctx.loading)("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.types);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__.MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__.MatAutocompleteTrigger, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRipple, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinner]
  });
}

/***/ }),

/***/ 11506:
/*!****************************************************************!*\
  !*** ./libs/catering/src/lib/catering-order-item.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CateringOrderItemComponent: () => (/* binding */ CateringOrderItemComponent)
/* harmony export */ });
/* harmony import */ var _catering_item_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catering-item.class */ 85784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/src/lib/icon.component */ 94888);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 55309);





const _c0 = ["catering-order-item", ""];
function CateringOrderItemComponent_ng_container_0_ng_container_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", opt_r2.name, " ");
  }
}
function CateringOrderItemComponent_ng_container_0_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CateringOrderItemComponent_ng_container_0_ng_container_14_div_1_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const opt_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", opt_r2);
  }
}
function CateringOrderItemComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CateringOrderItemComponent_ng_container_0_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7)(11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, CateringOrderItemComponent_ng_container_0_ng_container_14_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("bg-success", ctx_r0.active)("text-white", ctx_r0.active)("border-solid", ctx_r0.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.active ? "done" : "local_pizza");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.item == null ? null : ctx_r0.item.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u2A2F", (ctx_r0.item == null ? null : ctx_r0.item.amount) || (ctx_r0.item == null ? null : ctx_r0.item.quantity) || 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.item.option_list);
  }
}
const ACTIVE_ITEMS = new Set();
class CateringOrderItemComponent {
  constructor() {
    this.active = false;
  }
  get item_key() {
    return `${this.order_id}|${this.item?.id}`;
  }
  ngOnInit() {
    this.active = ACTIVE_ITEMS.has(this.item_key);
  }
  toggle() {
    if (ACTIVE_ITEMS.has(this.item_key)) {
      ACTIVE_ITEMS.delete(this.item_key);
      this.active = false;
    } else {
      ACTIVE_ITEMS.add(this.item_key);
      this.active = true;
    }
  }
  static #_ = this.ɵfac = function CateringOrderItemComponent_Factory(t) {
    return new (t || CateringOrderItemComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: CateringOrderItemComponent,
    selectors: [["", "catering-order-item", ""]],
    inputs: {
      order_id: "order_id",
      item: "item"
    },
    attrs: _c0,
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], [1, "w-20", "text-right", "h-14", "relative"], [1, "border-b-2", "border-l-2", "border-base-200", "w-4", "h-16", "absolute", "top-1/2", "left-1/2", "-translate-y-full"], [1, "w-12", "mr-4"], ["action", "", "icon", "", "matRipple", "", 1, "border", "border-base-200", "border-dashed", "text-xl", "text-dark-fade", "p-2", 3, "click"], [1, "flex", "flex-1", "border-b", "border-base-200", "border-solid", "py-4", "space-x-2"], [1, ""], [1, "flex-1"], [1, "p-1", "rounded-full", "bg-neutral", "w-8", "h-8", "flex", "items-center", "justify-center"], [1, "flex", "space-x-2", "mr-2"], [4, "ngFor", "ngForOf"], ["class", "text-xs py-1 px-2 bg-warning text-black rounded-2xl shadow", 4, "ngIf"], [1, "text-xs", "py-1", "px-2", "bg-warning", "text-black", "rounded-2xl", "shadow"]],
    template: function CateringOrderItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CateringOrderItemComponent_ng_container_0_Template, 15, 10, "ng-container", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.item);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRipple],
    styles: ["[_nghost-%COMP%]:last-child    > div[_ngcontent-%COMP%] {\n                border: none !important;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvY2F0ZXJpbmcvc3JjL2xpYi9jYXRlcmluZy1vcmRlci1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksdUJBQXVCO1lBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdDpsYXN0LWNoaWxkID4gZGl2IHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 82467:
/*!****************************************************************!*\
  !*** ./libs/catering/src/lib/catering-order-list.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CateringOrderListComponent: () => (/* binding */ CateringOrderListComponent)
/* harmony export */ });
/* harmony import */ var _catering_orders_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catering-orders.service */ 6030);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _catering_order_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catering-order.component */ 70021);





function CateringOrderListComponent_li_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "catering-order", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const order_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("order", order_r3);
  }
}
function CateringOrderListComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14)(1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No Catering Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function CateringOrderListComponent_mat_progress_bar_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-progress-bar", 16);
  }
}
class CateringOrderListComponent {
  constructor(_orders) {
    this._orders = _orders;
    /** List of filtered orders */
    this.order_list = this._orders.filtered;
    /** Whether order list is loading */
    this.loading = this._orders.loading;
  }
  ngOnInit() {
    this._orders.startPolling();
  }
  ngOnDestroy() {
    this._orders.stopPolling();
  }
  /* istanbul ignore next */
  trackByFn(index, order) {
    return order ? order.id : undefined;
  }
  static #_ = this.ɵfac = function CateringOrderListComponent_Factory(t) {
    return new (t || CateringOrderListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_catering_orders_service__WEBPACK_IMPORTED_MODULE_0__.CateringOrdersService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: CateringOrderListComponent,
    selectors: [["catering-order-list"]],
    decls: 26,
    vars: 10,
    consts: [[1, "sticky", "top-0", "w-full", "text-sm", "font-medium", "flex", "items-center", "py-4", "border-solid", "border-b", "border-base-200", "bg-base-100"], [1, "w-20"], [1, "w-24"], [1, "w-36"], [1, "flex-1"], [1, "w-56"], [1, "w-28"], [1, "w-12"], [1, "list-none", "p-0", "m-0", "w-full", "flex-1", "overflow-auto"], ["class", "border-solid border-b border-base-200", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["empty", "", "class", "info-block opacity-60", 4, "ngIf"], ["class", "w-full", "mode", "indeterminate", 4, "ngIf"], [1, "border-solid", "border-b", "border-base-200"], [3, "order"], ["empty", "", 1, "info-block", "opacity-60"], [1, "p-4", "text-center"], ["mode", "indeterminate", 1, "w-full"]],
    template: function CateringOrderListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Meeting Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Host");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Charge Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Invoice No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, CateringOrderListComponent_li_20_Template, 2, 1, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, CateringOrderListComponent_div_22_Template, 3, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, CateringOrderListComponent_mat_progress_bar_24_Template, 1, 0, "mat-progress-bar", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "async");
      }
      if (rf & 2) {
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 4, ctx.order_list))("ngForTrackBy", ctx.trackByFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 6, ctx.order_list)) == null ? null : tmp_2_0.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 8, ctx.loading));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _catering_order_component__WEBPACK_IMPORTED_MODULE_1__.CateringOrderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvY2F0ZXJpbmcvc3JjL2xpYi9jYXRlcmluZy1vcmRlci1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixzQkFBc0I7Z0JBQ3RCLFlBQVk7Z0JBQ1osV0FBVztZQUNmIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 40593:
/*!*****************************************************************!*\
  !*** ./libs/catering/src/lib/catering-order-modal.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CateringOrderModalComponent: () => (/* binding */ CateringOrderModalComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _catering_item_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catering-item.class */ 85784);
/* harmony import */ var _catering_order_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catering-order.class */ 65688);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/organisation */ 5745);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utilities */ 36736);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ 60989);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ 60702);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/src/lib/icon.component */ 94888);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ 33910);
/* harmony import */ var _form_fields_src_lib_counter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../form-fields/src/lib/counter.component */ 37594);



















function CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Options Available ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_a_counter_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a-counter", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_a_counter_8_Template_a_counter_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r15.updateItemQuantity(item_r11, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", item_r11.quantity);
  }
}
function CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19)(1, "div", 20)(2, "button", 21)(3, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_div_9_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21);
      const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r19.addItem(item_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matTooltip", item_r11.quantity ? "Items with options must be removed from order confirmation page" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r11.quantity, " ");
  }
}
function CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_div_4_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_a_counter_8_Template, 1, 1, "a-counter", 15)(9, CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_div_9_Template, 10, 3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r11.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r11.options.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](7, 5, item_r11.unit_price / 100, ctx_r10.code), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !item_r11.options.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r11.options.length);
  }
}
const _c0 = () => ({});
function CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-tab", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_Template, 10, 8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const cat_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("label", cat_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", (ctx_r9.menu_items || _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](2, _c0))[cat_r8]);
  }
}
function CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_Template, 3, 3, "mat-tab", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const cat_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r7.menu_items || _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](1, _c0))[cat_r8].length);
  }
}
function CateringOrderModalComponent_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-tab-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_Template, 2, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r6.categories);
  }
}
function CateringOrderModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CateringOrderModalComponent_div_0_ng_container_1_Template, 3, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.show_order_details)("ngIfElse", _r5);
  }
}
function CateringOrderModalComponent_footer_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CateringOrderModalComponent_footer_1_ng_container_1_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r27.show_order_details = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " Confirm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r24.order.item_count)("matBadge", ctx_r24.order.item_count)("matBadgeHidden", !ctx_r24.order.item_count);
  }
}
function CateringOrderModalComponent_footer_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CateringOrderModalComponent_footer_1_ng_template_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r29.show_order_details = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CateringOrderModalComponent_footer_1_ng_template_2_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r30);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r31.saveOrder());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Save Order ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function CateringOrderModalComponent_footer_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "footer", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CateringOrderModalComponent_footer_1_ng_container_1_Template, 5, 3, "ng-container", 5)(2, CateringOrderModalComponent_footer_1_ng_template_2_Template, 4, 0, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.show_order_details)("ngIfElse", _r26);
  }
}
function CateringOrderModalComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-spinner", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r2.loading);
  }
}
function CateringOrderModalComponent_ng_template_4_div_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matTooltip", ctx_r34.optionsFor(item_r33));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", item_r33.options.length, " option", item_r33.options.length === 1 ? "" : "s", " selected ");
  }
}
function CateringOrderModalComponent_ng_template_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, CateringOrderModalComponent_ng_template_4_div_4_div_4_Template, 2, 3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "a-counter", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CateringOrderModalComponent_ng_template_4_div_4_Template_a_counter_ngModelChange_8_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r37);
      const item_r33 = restoredCtx.$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r36.updateItemQuantity(item_r33, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r33 = ctx.$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r33.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r33.options.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](7, 4, item_r33.total_cost / 100, ctx_r32.code), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", item_r33.quantity);
  }
}
function CateringOrderModalComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "header", 32)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Confirm Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, CateringOrderModalComponent_ng_template_4_div_4_Template, 9, 7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r4.order.items);
  }
}
// TODO: Split template into 2 children components. Order menu and Order Confirm;
class CateringOrderModalComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  get code() {
    return this._org.currency_code;
  }
  constructor(_org, _data) {
    super();
    this._org = _org;
    this._data = _data;
    /** Emitter for events on the modal */
    this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    /** Whether changes are being saved */
    this.loading = '';
    /** List of menu items to show */
    this.menu_items = {};
    /** List of categories for the active menu */
    this.categories = [];
    this.loading = 'Loading menu...';
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loading = 'Loading menu...';
      _this.order = new _catering_order_class__WEBPACK_IMPORTED_MODULE_3__.CateringOrder(_this._data.order);
      _this.rules = yield _this._data.getCateringConfig(_this.order.event?.space?.level?.parent_id);
      _this._data.menu.subscribe(list => {
        _this.loading = 'Loading menu...';
        const categories = (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.unique)(list.map(item => item.category));
        const map = {};
        for (const cat of categories) {
          map[cat] = list.filter(item => {
            return item.category === cat && (0,_utilities__WEBPACK_IMPORTED_MODULE_5__.cateringItemAvailable)(item, _this.rules, _this.order.event);
          });
        }
        _this.categories = categories;
        _this.menu_items = map;
        _this.updateMenuQuantities();
        _this.timeout('clear_loading', () => _this.loading = '', 1000);
      });
    })();
  }
  addItem(item, choose_options = true) {
    const old_item = this.order.items.find(itm => itm.id === item.id && itm.options.length === itm.options.reduce((c, o) => c + (item.options.find(opt => o.id === opt.id) ? 1 : 0), 0));
    if (choose_options && item.options?.length) {
      this._data.selectOptions(item.options).then(options => {
        const new_item = new _catering_item_class__WEBPACK_IMPORTED_MODULE_2__.CateringItem({
          ...item,
          options
        });
        this.addItem(new_item, false);
      });
    } else if (old_item) {
      this.order = new _catering_order_class__WEBPACK_IMPORTED_MODULE_3__.CateringOrder({
        ...this.order,
        items: this.order.items.filter(i => !(i.id === item.id && i.options_string === item.options_string)).concat([new _catering_item_class__WEBPACK_IMPORTED_MODULE_2__.CateringItem({
          ...item,
          quantity: old_item.quantity + 1
        })])
      });
    } else {
      this.order = new _catering_order_class__WEBPACK_IMPORTED_MODULE_3__.CateringOrder({
        ...this.order,
        items: this.order.items.concat([new _catering_item_class__WEBPACK_IMPORTED_MODULE_2__.CateringItem({
          ...item,
          quantity: 1
        })])
      });
    }
    this.updateMenuQuantities();
  }
  removeItem(item) {
    this.order = new _catering_order_class__WEBPACK_IMPORTED_MODULE_3__.CateringOrder({
      ...this.order,
      items: this.order.items.filter(_ => _.id !== item.id && _.options_string === item.options_string)
    });
    this.updateMenuQuantities();
  }
  updateItemQuantity(item, amount) {
    const old_item = this.order.items.find(itm => itm.id === item.id && itm.options_string === item.options_string);
    let items = [...this.order.items];
    if (old_item) {
      items = this.order.items.filter(i => !(i.id === item.id && i.options_string === item.options_string)).concat([new _catering_item_class__WEBPACK_IMPORTED_MODULE_2__.CateringItem({
        ...item,
        quantity: amount
      })]);
    } else {
      items = this.order.items.concat([new _catering_item_class__WEBPACK_IMPORTED_MODULE_2__.CateringItem({
        ...item,
        quantity: amount
      })]);
    }
    items.sort((a, b) => a.name.localeCompare(b.name));
    this.order = new _catering_order_class__WEBPACK_IMPORTED_MODULE_3__.CateringOrder({
      ...this.order,
      items
    });
    this.updateMenuQuantities();
  }
  updateMenuQuantities() {
    for (const cat in this.menu_items) {
      for (const item of this.menu_items[cat]) {
        item.quantity = this.order.items.reduce((c, i) => i.id === item.id ? c + i.quantity : c, 0);
      }
    }
  }
  optionsFor(item) {
    return item.options.map(i => i.name).join('\n');
  }
  saveOrder() {
    this.event.emit({
      reason: 'done',
      metadata: {
        order: this.order
      }
    });
  }
  confirmOrder() {
    this.show_order_details = true;
  }
  static #_ = this.ɵfac = function CateringOrderModalComponent_Factory(t) {
    return new (t || CateringOrderModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_4__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: CateringOrderModalComponent,
    selectors: [["app-catering-order-modal"]],
    outputs: {
      event: "event"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
    decls: 6,
    vars: 3,
    consts: [["class", "main min-w-[20rem]", 4, "ngIf", "ngIfElse"], ["class", "flex items-center justify-center space-x-2 p-2 border-t border-base-200", 4, "ngIf"], ["load_state", ""], ["order_details", ""], [1, "main", "min-w-[20rem]"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], [3, "label", 4, "ngIf"], [3, "label"], [1, "list"], ["item", "", "class", "flex items-center p-2 border-b border-base-200", 4, "ngFor", "ngForOf"], ["item", "", 1, "flex", "items-center", "p-2", "border-b", "border-base-200"], [1, "flex-1", "w-1/2"], ["class", "text-xs no-underline", 4, "ngIf"], [1, "bg-primary", "text-xs", "rounded", "px-4", "py-2", "mx-2", "text-white", "font-medium"], ["ngDefaultControl", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "flex items-center", 4, "ngIf"], [1, "text-xs", "no-underline"], ["ngDefaultControl", "", 3, "ngModel", "ngModelChange"], [1, "flex", "items-center"], [3, "matTooltip"], ["icon", "", "matRipple", "", 3, "disabled"], [1, "count", "h-12", "w-12", "flex", "items-center", "justify-center"], ["icon", "", "matRipple", "", 3, "click"], [1, "flex", "items-center", "justify-center", "space-x-2", "p-2", "border-t", "border-base-200"], ["order_actions", ""], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "inverse"], ["confirm", "", "btn", "", "matRipple", "", "matBadgeColor", "warn", 3, "disabled", "matBadge", "matBadgeHidden", "click"], ["matRipple", "", 1, "inverse", 3, "click"], ["save", "", "btn", "", "matRipple", "", 3, "click"], [1, "flex", "flex-col", "w-64", "p-8", "items-center", "space-y-2"], ["diameter", "32"], [1, "h-[3.25rem]"], ["class", "text-xs underline", 3, "matTooltip", 4, "ngIf"], [3, "ngModel", "ngModelChange"], [1, "text-xs", "underline", 3, "matTooltip"]],
    template: function CateringOrderModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, CateringOrderModalComponent_div_0_Template, 2, 2, "div", 0)(1, CateringOrderModalComponent_footer_1_Template, 4, 2, "footer", 1)(2, CateringOrderModalComponent_ng_template_2_Template, 4, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"])(4, CateringOrderModalComponent_ng_template_4_Template, 5, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabGroup, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogClose, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_6__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatRipple, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__.MatProgressSpinner, _form_fields_src_lib_counter_component__WEBPACK_IMPORTED_MODULE_7__.CounterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CurrencyPipe],
    styles: [".list[_ngcontent-%COMP%] {\n                height: 24em;\n                min-width: 32em;\n                max-width: calc(100vw - 1em);\n            }\n\n            footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n                min-width: 12em;\n            }\n\n            input[_ngcontent-%COMP%] {\n                position: relative;\n                width: 100%;\n                padding: 1em;\n                border: none;\n                border-radius: 0 !important;\n                border-top: 1px solid #ccc;\n                border-bottom: 1px solid #ccc;\n                outline: none;\n                font-size: 1em;\n            }\n\n            input[_ngcontent-%COMP%]:focus {\n                border: none;\n                border-top: 2px solid var(--s);\n                border-bottom: 2px solid var(--s);\n                box-shadow: none;\n            }\n\n            input.error[_ngcontent-%COMP%]::placeholder {\n                color: rgba(var(--error), 0.45);\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvY2F0ZXJpbmcvc3JjL2xpYi9jYXRlcmluZy1vcmRlci1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLFlBQVk7Z0JBQ1osZUFBZTtnQkFDZiw0QkFBNEI7WUFDaEM7O1lBRUE7Z0JBQ0ksZUFBZTtZQUNuQjs7WUFFQTtnQkFDSSxrQkFBa0I7Z0JBQ2xCLFdBQVc7Z0JBQ1gsWUFBWTtnQkFDWixZQUFZO2dCQUNaLDJCQUEyQjtnQkFDM0IsMEJBQTBCO2dCQUMxQiw2QkFBNkI7Z0JBQzdCLGFBQWE7Z0JBQ2IsY0FBYztZQUNsQjs7WUFFQTtnQkFDSSxZQUFZO2dCQUNaLDhCQUE4QjtnQkFDOUIsaUNBQWlDO2dCQUNqQyxnQkFBZ0I7WUFDcEI7O1lBRUE7Z0JBQ0ksK0JBQStCO1lBQ25DIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICAubGlzdCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNGVtO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMzJlbTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSAxZW0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb290ZXIgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5wdXQ6Zm9jdXMge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tcyk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXMpO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlucHV0LmVycm9yOjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEodmFyKC0tZXJyb3IpLCAwLjQ1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 68089:
/*!*************************************************************************!*\
  !*** ./libs/catering/src/lib/catering-order-options-modal.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CateringOrderOptionsModalComponent: () => (/* binding */ CateringOrderOptionsModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var libs_common_src_lib_general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! libs/common/src/lib/general */ 52338);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ 56658);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/radio */ 92106);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/src/lib/icon.component */ 94888);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 55309);











function CateringOrderOptionsModalComponent_div_7_ng_container_4_mat_radio_button_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" +", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, opt_r6.unit_price / 100, ctx_r7.code), " ");
  }
}
function CateringOrderOptionsModalComponent_div_7_ng_container_4_mat_radio_button_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-radio-button", 14)(1, "div", 15)(2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CateringOrderOptionsModalComponent_div_7_ng_container_4_mat_radio_button_5_div_4_Template, 3, 4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", opt_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", opt_r6.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", opt_r6.unit_price);
  }
}
function CateringOrderOptionsModalComponent_div_7_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-radio-group", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CateringOrderOptionsModalComponent_div_7_ng_container_4_Template_mat_radio_group_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const group_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.updateGroupOption(group_r1, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-radio-button", 11)(3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CateringOrderOptionsModalComponent_div_7_ng_container_4_mat_radio_button_5_Template, 5, 3, "mat-radio-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const group_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", group_r1 == null ? null : group_r1.options);
  }
}
function CateringOrderOptionsModalComponent_div_7_ng_template_5_mat_checkbox_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" +", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, opt_r14.unit_price / 100, ctx_r15.code), " ");
  }
}
function CateringOrderOptionsModalComponent_div_7_ng_template_5_mat_checkbox_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-checkbox", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CateringOrderOptionsModalComponent_div_7_ng_template_5_mat_checkbox_0_Template_mat_checkbox_ngModelChange_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const opt_r14 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r17.option_state[opt_r14.id] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 15)(2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CateringOrderOptionsModalComponent_div_7_ng_template_5_mat_checkbox_0_div_4_Template, 3, 4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const opt_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r13.option_state[opt_r14.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", opt_r14.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", opt_r14.unit_price);
  }
}
function CateringOrderOptionsModalComponent_div_7_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CateringOrderOptionsModalComponent_div_7_ng_template_5_mat_checkbox_0_Template, 5, 3, "mat-checkbox", 19);
  }
  if (rf & 2) {
    const group_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", group_r1 == null ? null : group_r1.options);
  }
}
function CateringOrderOptionsModalComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CateringOrderOptionsModalComponent_div_7_ng_container_4_Template, 6, 1, "ng-container", 8)(5, CateringOrderOptionsModalComponent_div_7_ng_template_5_Template, 1, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const group_r1 = ctx.$implicit;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("group", group_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](group_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !group_r1.multiple)("ngIfElse", _r4);
  }
}
class CateringOrderOptionsModalComponent {
  constructor(_data) {
    this._data = _data;
    /** Emitter for events on the modal */
    this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /** Mapping of options to their active state */
    this.option_state = {};
    this.code = this._data.code;
    const groups = (0,libs_common_src_lib_general__WEBPACK_IMPORTED_MODULE_0__.unique)(this._data.options.map(i => i.group || 'Other'));
    const group_list = [];
    for (const group of groups) {
      const options = this._data.options.filter(i => i.group === group);
      group_list.push({
        name: group,
        multiple: !!options.find(i => i.multiple),
        options
      });
    }
    this.groups = group_list;
  }
  updateGroupOption(group, id) {
    for (const option of group.options) {
      this.option_state[option.id] = option.id === id;
    }
  }
  saveOptions() {
    const options = this._data.options.filter(opt => this.option_state[opt.id]);
    this.event.emit({
      reason: 'done',
      metadata: {
        options
      }
    });
  }
  static #_ = this.ɵfac = function CateringOrderOptionsModalComponent_Factory(t) {
    return new (t || CateringOrderOptionsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: CateringOrderOptionsModalComponent,
    selectors: [["app-catering-options-modal"]],
    outputs: {
      event: "event"
    },
    decls: 11,
    vars: 1,
    consts: [["icon", "", "mat-dialog-close", ""], [1, "overflow-auto"], ["class", "pt-1 pb-2 border-b border-base-200", 4, "ngFor", "ngForOf"], [1, "p-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "pt-1", "pb-2", "border-b", "border-base-200"], [1, "font-medium", "p-2", "capitalize"], [1, "flex", "flex-col", "pl-6"], [4, "ngIf", "ngIfElse"], ["multi_options", ""], ["aria-label", "Select an option", "ngModel", "", 1, "flex", "flex-col", 3, "ngModelChange"], ["value", "", 1, "my-1", "mx-0"], [1, "font-medium", "p-2"], ["class", "my-1 mx-0", 3, "value", 4, "ngFor", "ngForOf"], [1, "my-1", "mx-0", 3, "value"], [1, "flex", "items-center", "justify-center"], [1, "font-medium", "p-2", "flex-1", "w-1/2"], ["class", "opacity-60 text-xs", 4, "ngIf"], [1, "opacity-60", "text-xs"], [3, "ngModel", "ngModelChange", 4, "ngFor", "ngForOf"], [3, "ngModel", "ngModelChange"]],
    template: function CateringOrderOptionsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header")(1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Select options");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 0)(4, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CateringOrderOptionsModalComponent_div_7_Template, 7, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "footer", 3)(9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CateringOrderOptionsModalComponent_Template_button_click_9_listener() {
          return ctx.saveOptions();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.groups);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__.MatCheckbox, _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__.MatRadioButton, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe],
    styles: ["main[_ngcontent-%COMP%] {\n                min-height: 24em;\n                width: 24rem;\n                max-width: calc(100vw - 2rem);\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvY2F0ZXJpbmcvc3JjL2xpYi9jYXRlcmluZy1vcmRlci1vcHRpb25zLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksZ0JBQWdCO2dCQUNoQixZQUFZO2dCQUNaLDZCQUE2QjtZQUNqQyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjRlbTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjRyZW07XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gMnJlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 70021:
/*!***********************************************************!*\
  !*** ./libs/catering/src/lib/catering-order.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CateringOrderComponent: () => (/* binding */ CateringOrderComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _catering_orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catering-orders.service */ 6030);
/* harmony import */ var _catering_order_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catering-order.class */ 65688);
/* harmony import */ var _catering_vars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./catering.vars */ 39815);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 60702);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/src/lib/icon.component */ 94888);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _catering_order_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./catering-order-item.component */ 11506);














function CateringOrderComponent_div_0_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " No Location ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function CateringOrderComponent_div_0_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Unknown Host ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function CateringOrderComponent_div_0_button_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matTooltip", ctx_r6.order.notes);
  }
}
function CateringOrderComponent_div_0_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " No Invoice ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function CateringOrderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "room_service");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, CateringOrderComponent_div_0_span_18_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, CateringOrderComponent_div_0_span_21_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, CateringOrderComponent_div_0_button_25_Template, 2, 1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, CateringOrderComponent_div_0_span_28_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 15)(30, "button", 16)(31, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "app-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 19)(36, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CateringOrderComponent_div_0_Template_button_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r8.show_items = !ctx_r8.show_items);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("bg-base-200", !ctx_r0.show_items)("bg-base-200", ctx_r0.show_items);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("bg-base-200", ctx_r0.show_items)("dark:bg-neutral-700", ctx_r0.show_items);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](7, 26, ctx_r0.order.deliver_at, ctx_r0.time_format), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](10, 29, ctx_r0.order.event == null ? null : ctx_r0.order.event.date, "MMM d"), ", ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](11, 32, ctx_r0.order.event == null ? null : ctx_r0.order.event.date, ctx_r0.time_format), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](14, 35, ctx_r0.order.event == null ? null : ctx_r0.order.event.date_end, "MMM d"), ", ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](15, 38, ctx_r0.order.event == null ? null : ctx_r0.order.event.date_end, ctx_r0.time_format), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (ctx_r0.order.event == null ? null : ctx_r0.order.event.space == null ? null : ctx_r0.order.event.space.display_name) || (ctx_r0.order.event == null ? null : ctx_r0.order.event.space == null ? null : ctx_r0.order.event.space.name) || "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !((ctx_r0.order.event == null ? null : ctx_r0.order.event.space == null ? null : ctx_r0.order.event.space.display_name) || (ctx_r0.order.event == null ? null : ctx_r0.order.event.space == null ? null : ctx_r0.order.event.space.name)));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (ctx_r0.order.event == null ? null : ctx_r0.order.event.organiser == null ? null : ctx_r0.order.event.organiser.name) || (ctx_r0.order.event == null ? null : ctx_r0.order.event.host) || "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !((ctx_r0.order.event == null ? null : ctx_r0.order.event.organiser == null ? null : ctx_r0.order.event.organiser.name) || (ctx_r0.order.event == null ? null : ctx_r0.order.event.host)));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.order.charge_code || "~ No Code ~");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.order.notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.order.invoice_number || "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.order.invoice_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background", ctx_r0.status == null ? null : ctx_r0.status.colour);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matMenuTriggerFor", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.status == null ? null : ctx_r0.status.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.show_items ? "keyboard_arrow_down" : "keyboard_arrow_right");
  }
}
function CateringOrderComponent_ul_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "li", 25);
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("order_id", ctx_r10.order == null ? null : ctx_r10.order.id)("item", item_r11);
  }
}
function CateringOrderComponent_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ul", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CateringOrderComponent_ul_1_li_1_Template, 1, 2, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("shown", ctx_r1.show_items);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@show", ctx_r1.show_items ? "show" : "hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.order.items);
  }
}
function CateringOrderComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CateringOrderComponent_button_4_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15);
      const status_r13 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r14.updateStatus(status_r13.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const status_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-color", status_r13.colour);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](status_r13.name);
  }
}
class CateringOrderComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  get status() {
    return this.statuses.find(i => i.id === this.order.status);
  }
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_orders, _settings) {
    var _this;
    super();
    _this = this;
    this._orders = _orders;
    this._settings = _settings;
    /** Whether to show the items in the catering order */
    this.show_items = false;
    /** List of status available to select */
    this.statuses = _catering_vars__WEBPACK_IMPORTED_MODULE_4__.CATERING_STATUSES;
    this.updateStatus = /*#__PURE__*/function () {
      var _ref = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (s) {
        yield _this._orders.updateStatus(_this.order, s);
        _this.timeout('status-change', () => _this.order.status = s);
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
  }
  static #_ = this.ɵfac = function CateringOrderComponent_Factory(t) {
    return new (t || CateringOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_catering_orders_service__WEBPACK_IMPORTED_MODULE_2__.CateringOrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: CateringOrderComponent,
    selectors: [["catering-order"]],
    inputs: {
      order: "order"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
    decls: 5,
    vars: 3,
    consts: [["class", "w-full flex items-center py-2", 3, "bg-base-200", 4, "ngIf"], ["class", "list-none p-0 m-0 w-full relative z-0", 3, "shown", 4, "ngIf"], ["menu", "matMenu"], ["mat-menu-item", "", "class", "flex items-center", 3, "click", 4, "ngFor", "ngForOf"], [1, "w-full", "flex", "items-center", "py-2"], [1, "w-20", "flex", "items-center", "justify-center", "z-20", "h-full"], [1, "rounded-full", "bg-base-300", "p-2", "text-2xl", "text-black", "opacity-60", "flex", "items-center", "justify-center"], ["time", "", 1, "w-24"], ["time", "", 1, "w-36", "text-sm"], [1, "flex-1"], ["class", "opacity-30", 4, "ngIf"], [1, "w-56"], [1, "w-28"], [1, "w-24"], ["class", "clear underline", 3, "matTooltip", 4, "ngIf"], [1, "w-36"], ["name", "status", "matRipple", "", 1, "text-base", "border-none", "h-10", "px-4", "flex", "items-center", "text-white", "w-36", 3, "matMenuTriggerFor"], [1, "flex", "text-center", "capitalize", "mx-2"], [1, "pl-2"], [1, "w-12"], ["icon", "", 3, "click"], [1, "opacity-30"], [1, "clear", "underline", 3, "matTooltip"], [1, "list-none", "p-0", "m-0", "w-full", "relative", "z-0"], ["catering-order-item", "", "class", "flex items-center", 3, "order_id", "item", 4, "ngFor", "ngForOf"], ["catering-order-item", "", 1, "flex", "items-center", 3, "order_id", "item"], ["mat-menu-item", "", 1, "flex", "items-center", 3, "click"], [1, "rounded-full", "h-4", "w-4", "mr-2"], [1, "mr-2", "w-20"]],
    template: function CateringOrderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CateringOrderComponent_div_0_Template, 39, 41, "div", 0)(1, CateringOrderComponent_ul_1_Template, 2, 4, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-menu", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, CateringOrderComponent_button_4_Template, 4, 3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.order);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.order == null ? null : ctx.order.items.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.statuses);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuTrigger, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltip, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_5__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatRipple, _catering_order_item_component__WEBPACK_IMPORTED_MODULE_6__.CateringOrderItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
    styles: ["[name='status'][_ngcontent-%COMP%] {\n                border-radius: 1.55rem;\n            }\n\n            button[mat-menu-item][_ngcontent-%COMP%] {\n                display: flex;\n            }\n\n            [name='bar'][_ngcontent-%COMP%] {\n                width: 2px;\n                top: -0.5rem;\n                left: calc(2.5rem - 1px);\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvY2F0ZXJpbmcvc3JjL2xpYi9jYXRlcmluZy1vcmRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLHNCQUFzQjtZQUMxQjs7WUFFQTtnQkFDSSxhQUFhO1lBQ2pCOztZQUVBO2dCQUNJLFVBQVU7Z0JBQ1YsWUFBWTtnQkFDWix3QkFBd0I7WUFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIFtuYW1lPSdzdGF0dXMnXSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMS41NXJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnV0dG9uW21hdC1tZW51LWl0ZW1dIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBbbmFtZT0nYmFyJ10ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAycHg7XG4gICAgICAgICAgICAgICAgdG9wOiAtMC41cmVtO1xuICAgICAgICAgICAgICAgIGxlZnQ6IGNhbGMoMi41cmVtIC0gMXB4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [_placeos_common__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_SHOW_CONTRACT_EXPAND]
    }
  });
}

/***/ }),

/***/ 6030:
/*!**********************************************************!*\
  !*** ./libs/catering/src/lib/catering-orders.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CateringOrdersService: () => (/* binding */ CateringOrdersService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 70462);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 64555);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 9681);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 95933);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 36520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 58175);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 47422);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 15746);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 680);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 31957);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 57016);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 4512);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns */ 12687);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var libs_events_src_lib_events_fn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! libs/events/src/lib/events.fn */ 44386);
/* harmony import */ var libs_events_src_lib_event_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! libs/events/src/lib/event.class */ 78975);
/* harmony import */ var _catering_order_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./catering-order.class */ 65688);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 61699);









function checkOrder(order, filters) {
  const s = (filters.search || '').toLowerCase();
  return !!order.items.find(item => item.name.toLowerCase().includes(s) || !!item.options.find(option => option.name.toLowerCase().includes(s)));
}
class CateringOrdersService extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  /** Order filters */
  get filters() {
    return this._filters.getValue();
  }
  /** Order filters */
  set filters(filters) {
    this._filters.next(filters);
  }
  constructor() {
    super();
    this._poll = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(0);
    this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(false);
    this._filters = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject({});
    /** Observable for list of orders */
    this.orders = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this._filters, this._poll]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(([{
      date,
      zones
    }]) => {
      this._loading.next(true);
      const start = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(date || Date.now()));
      const end = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(date || Date.now()));
      return (0,libs_events_src_lib_events_fn__WEBPACK_IMPORTED_MODULE_2__.queryEvents)({
        zone_ids: (zones || []).join(','),
        period_start: start,
        period_end: end
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)([])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(events => (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.flatten)(events.map(event => event.valid_catering.map(o => new _catering_order_class__WEBPACK_IMPORTED_MODULE_4__.CateringOrder({
        ...o,
        event
      }))))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(orders => orders.filter(o => (0,date_fns__WEBPACK_IMPORTED_MODULE_15__["default"])(o.deliver_at, 'yyyy-MM-dd') === (0,date_fns__WEBPACK_IMPORTED_MODULE_15__["default"])(start * 1000, 'yyyy-MM-dd'))));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.tap)(() => this._loading.next(false)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.shareReplay)(1));
    /** Observable for loading status of orders */
    this.loading = this._loading.asObservable();
    /** Filtered list of catering orders */
    this.filtered = this.orders.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(list => list.filter(order => checkOrder(order, this._filters.getValue())).sort((a, b) => a.deliver_at - b.deliver_at)));
    this.subscription('changes', this.orders.subscribe());
  }
  /** Start polling for catering orders */
  startPolling(delay = 15 * 1000) {
    this.interval('polling', () => this._poll.next(new Date().valueOf()), delay);
  }
  /** Stop polling for new catering orders */
  stopPolling() {
    this.clearInterval('polling');
  }
  /**
   * Update the status of the order
   * @param order Order to update
   * @param status New order status
   */
  updateStatus(order, status) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      order.status = status;
      const updated_order = new _catering_order_class__WEBPACK_IMPORTED_MODULE_4__.CateringOrder({
        ...order,
        status,
        event: null
      });
      const catering = [...(order.event.extension_data.catering || []).filter(o => o.id !== order.id), updated_order].map(i => new _catering_order_class__WEBPACK_IMPORTED_MODULE_4__.CateringOrder({
        ...i
      }));
      const event = new libs_events_src_lib_event_class__WEBPACK_IMPORTED_MODULE_3__.CalendarEvent({
        ...order.event,
        catering
      });
      const system_id = event?.resources[0]?.id || event?.system?.id;
      const booking = yield (0,libs_events_src_lib_events_fn__WEBPACK_IMPORTED_MODULE_2__.updateEventMetadata)(event.id, system_id, event.extension_data).toPromise();
      _this.timeout('refresh-list', () => _this._poll.next(Date.now()), 1000);
      order.status = status;
      return booking;
    })();
  }
  static #_ = this.ɵfac = function CateringOrdersService_Factory(t) {
    return new (t || CateringOrdersService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjectable"]({
    token: CateringOrdersService,
    factory: CateringOrdersService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 45618:
/*!*********************************************************!*\
  !*** ./libs/catering/src/lib/catering-state.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CateringStateService: () => (/* binding */ CateringStateService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/ts-client */ 64331);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 70462);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 64555);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 9681);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 85046);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 36520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 58175);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 47422);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 15746);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 680);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 17627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 46939);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/organisation */ 5745);
/* harmony import */ var _catering_item_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./catering-item-modal.component */ 98147);
/* harmony import */ var _catering_option_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./catering-option-modal.component */ 57341);
/* harmony import */ var _placeos_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @placeos/components */ 24815);
/* harmony import */ var _catering_item_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./catering-item.class */ 85784);
/* harmony import */ var _catering_order_class__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./catering-order.class */ 65688);
/* harmony import */ var _catering_order_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./catering-order-modal.component */ 40593);
/* harmony import */ var _catering_order_options_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./catering-order-options-modal.component */ 68089);
/* harmony import */ var _catering_import_menu_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./catering-import-menu-modal.component */ 30766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ 17401);



















class CateringStateService extends _placeos_common__WEBPACK_IMPORTED_MODULE_2__.AsyncHandler {
  get is_editable() {
    return !this.zone || this.zone === this._org.building?.id;
  }
  get categories() {
    const menu = this._menu.getValue();
    return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.unique)(menu.map(i => i.category));
  }
  constructor(_org, _dialog, _settings) {
    var _this;
    super();
    _this = this;
    this._org = _org;
    this._dialog = _dialog;
    this._settings = _settings;
    this._updated = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject(0);
    /** Active menu */
    this._menu = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject([]);
    /** Whether the menu for the active building is loading */
    this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject(false);
    /** Currency code for the active building */
    this._currency = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject('USD');
    this._change = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject(0);
    /** Observable for the active menu */
    this.menu = this._menu.asObservable();
    /** Observable for whether the menu for the active building is loadingg */
    this.loading = this._loading.asObservable();
    /** Observable for the currency code of the active building */
    this.currency = this._currency.asObservable();
    this.settings = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this._org.active_building, this._change]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(([_]) => !!_), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(([_]) => (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.showMetadata)(_.id, 'catering-settings').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)({})))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(_ => _.details || {}), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.tap)(_ => this._settings.post('require_catering_notes', !!_?.require_notes)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.shareReplay)(1));
    this.charge_codes = this.settings.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(_ => _.charge_codes || []));
    this.availability = this.settings.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(_ => _.disabled_rooms || []));
    this.zone = '';
    this.subscription('building', this._org.active_building.subscribe( /*#__PURE__*/function () {
      var _ref = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (bld) {
        if (bld) {
          const menu = (yield _this.getCateringForZone(bld.id)).map(i => new _catering_item_class__WEBPACK_IMPORTED_MODULE_7__.CateringItem(i));
          _this._currency.next(_this._settings.get('app.currency') || bld.currency || 'USD');
          _this._menu.next(menu);
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()));
  }
  /**
   * Create/Edit catering order
   * @param order Order to manipulate
   */
  manageCateringOrder(order) {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ref = _this2._dialog.open(_catering_order_modal_component__WEBPACK_IMPORTED_MODULE_9__.CateringOrderModalComponent, {
        data: {
          code: _this2._currency.getValue(),
          order,
          menu: _this2.menu,
          loading: _this2.loading,
          getCateringConfig: _ => _this2.getCateringConfig(_),
          selectOptions: _ => _this2.selectOptions(_)
        }
      });
      const details = yield Promise.race([ref.componentInstance.event.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.first)(_ => _.reason === 'done')).toPromise(), ref.afterClosed().toPromise()]);
      ref.close();
      return details?.metadata?.order || order;
    })();
  }
  addItem(item = new _catering_item_class__WEBPACK_IMPORTED_MODULE_7__.CateringItem()) {
    var _this3 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ref = _this3._dialog.open(_catering_item_modal_component__WEBPACK_IMPORTED_MODULE_4__.CateringItemModalComponent, {
        data: {
          item,
          categories: _this3.categories
        }
      });
      const details = yield Promise.race([ref.componentInstance.event.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.first)(_ => _.reason === 'done')).toPromise(), ref.afterClosed().toPromise()]);
      if (details?.reason !== 'done') return;
      const menu = _this3._menu.getValue();
      const index = menu.findIndex(itm => itm.id === item.id);
      if (index >= 0) {
        menu.splice(index, 1, details.metadata.item);
      } else {
        menu.push(details.metadata.item);
      }
      _this3.updateMenu(_this3._org.building.id, menu).then(() => {
        _this3._menu.next([...menu]);
        ref.close();
      }, () => ref.componentInstance.loading = false);
    })();
  }
  updateItem(item) {
    const menu = this._menu.getValue();
    const index = menu.findIndex(itm => itm.id === item.id);
    if (index >= 0) menu.splice(index, 1, item);else menu.push(item);
    this.updateMenu(this._org.building.id, menu).then(() => this._menu.next([...menu]));
  }
  addOption(item, option = {}) {
    var _this4 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const types = (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.unique)(item.options.map(i => i.group));
      const ref = _this4._dialog.open(_catering_option_modal_component__WEBPACK_IMPORTED_MODULE_5__.CateringItemOptionModalComponent, {
        data: {
          parent: item,
          option,
          types
        }
      });
      const details = yield Promise.race([ref.componentInstance.event.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.first)(_ => _.reason === 'done')).toPromise(), ref.afterClosed().toPromise()]);
      if (details?.reason !== 'done') return;
      const menu = _this4._menu.getValue();
      const index = menu.findIndex(itm => itm.id === item.id);
      if (index >= 0) {
        menu.splice(index, 1, details.metadata.item);
      } else {
        menu.push(details.metadata.item);
      }
      _this4.updateMenu(_this4._org.building.id, menu).then(() => {
        _this4._menu.next([...menu]);
        ref.close();
      }, () => ref.componentInstance.loading = false);
    })();
  }
  selectOptions(options) {
    var _this5 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ref = _this5._dialog.open(_catering_order_options_modal_component__WEBPACK_IMPORTED_MODULE_10__.CateringOrderOptionsModalComponent, {
        data: {
          code: _this5._currency.getValue(),
          options
        }
      });
      const details = yield Promise.race([ref.componentInstance.event.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.first)(_ => _.reason === 'done')).toPromise(), ref.afterClosed().toPromise()]);
      if (details?.reason !== 'done') return [];
      ref.close();
      return details.metadata.options;
    })();
  }
  deleteItem(item) {
    var _this6 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const details = yield (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.openConfirmModal)({
        title: 'Delete Catering Item',
        content: `Are you sure you wish to remove the catering item ${item.name} from the menu?`,
        icon: {
          type: 'icon',
          class: 'material-icons',
          content: 'delete'
        }
      }, _this6._dialog);
      if (details.reason !== 'done') return;
      details.loading('Removing catering item...');
      const menu = _this6._menu.getValue().filter(itm => item.id !== itm.id);
      _this6.updateMenu(_this6._org.building.id, menu).then(() => {
        _this6._menu.next([...menu]);
        details.close();
      }, () => details.loading(''));
    })();
  }
  deleteOption(item, option) {
    var _this7 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const details = yield (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.openConfirmModal)({
        title: 'Delete Catering Item Option',
        content: `Are you sure you wish to remove the catering option "${option.name}" from "${item.name}"?`,
        icon: {
          type: 'icon',
          class: 'material-icons',
          content: 'delete'
        }
      }, _this7._dialog);
      if (details.reason !== 'done') return;
      details.loading('Removing catering item option...');
      const menu = _this7._menu.getValue();
      menu.splice(menu.findIndex(itm => itm.id === item.id), 1, new _catering_item_class__WEBPACK_IMPORTED_MODULE_7__.CateringItem({
        ...item,
        options: item.options.filter(opt => opt.id !== option.id)
      }));
      _this7.updateMenu(_this7._org.building.id, menu).then(() => {
        _this7._menu.next([...menu]);
        details.close();
      }, () => details.loading(''));
    })();
  }
  editConfig() {
    var _this8 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const config = yield _this8.getCateringConfig(_this8._org.building.id);
      const {
        require_notes
      } = yield _this8.settings.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.take)(1)).toPromise();
      const menu = _this8._menu.getValue();
      const types = (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.unique)((0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.flatten)(menu.map(i => [i.category, ...i.tags])));
      const ref = _this8._dialog.open(_placeos_components__WEBPACK_IMPORTED_MODULE_6__.AttachedResourceConfigModalComponent, {
        data: {
          config,
          types,
          require_notes,
          saveNotes: b => _this8.saveSettings({
            require_notes: b
          })
        }
      });
      const details = yield Promise.race([ref.componentInstance.event.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.first)(_ => _.reason === 'done')).toPromise(), ref.afterClosed().toPromise()]);
      if (details?.reason !== 'done') return;
      _this8.updateConfig(_this8._org.building.id, details.metadata).then(() => ref.close(), () => ref.componentInstance.loading = false);
    })();
  }
  importMenu() {
    var _this9 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ref = _this9._dialog.open(_catering_import_menu_modal_component__WEBPACK_IMPORTED_MODULE_11__.CateringImportMenuModalComponent);
      const details = yield Promise.race([ref.componentInstance.event.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.first)(_ => _.reason === 'done')).toPromise(), ref.afterClosed().toPromise()]);
      if (details?.reason !== 'done') return;
      ref.componentInstance.loading = 'Updating menu...';
      const menu = _this9._menu.getValue();
      const bld = _this9._org.building;
      const updated_menu = (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.unique)(details.metadata.concat(menu), 'id');
      yield _this9.updateMenu(bld.id, updated_menu).catch(_ => {
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifyError)('Error importing catering menu');
        ref.close();
        throw _;
      });
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifySuccess)(`Successfully imported catering menu. ${details.metadata.length} item(s) added.`);
      ref.close();
    })();
  }
  updateMenu(zone_id, menu) {
    return (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.updateMetadata)(zone_id, {
      id: zone_id,
      name: 'catering',
      details: menu,
      description: `Catering menu for ${zone_id}`
    }).toPromise();
  }
  saveSettings(settings) {
    var _this10 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const old_settings = yield _this10.settings.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.take)(1)).toPromise();
      const result = yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.updateMetadata)(_this10._org.building.id, {
        id: _this10._org.building.id,
        name: 'catering-settings',
        details: {
          ...old_settings,
          ...settings
        },
        description: `Catering settings for ${_this10._org.building.id}`
      }).toPromise();
      _this10._change.next(Date.now());
      return result;
    })();
  }
  getCateringForZone(zone_id) {
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const menu = (yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.showMetadata)(zone_id, 'catering').toPromise()).details;
      return menu instanceof Array ? menu : [];
    })();
  }
  getCateringConfig(zone_id = this._org.building.id) {
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const rules = (yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.showMetadata)(zone_id, 'catering_config').toPromise()).details;
      return rules instanceof Array ? rules : [];
    })();
  }
  updateConfig(zone_id, config) {
    return (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.updateMetadata)(zone_id, {
      id: zone_id,
      name: 'catering_config',
      details: config,
      description: `Catering menu config for ${zone_id}`
    }).toPromise();
  }
  addItemToOrder(order, new_item) {
    let items = order.items;
    const match = items.find(item => item.id === new_item.id && new_item.options?.length === item.options?.reduce((c, o) => c + (new_item.options.find(opt => o.id === opt.id) ? 1 : 0), 0));
    match ? match.quantity += 1 : items = items.concat([new _catering_item_class__WEBPACK_IMPORTED_MODULE_7__.CateringItem({
      ...new_item,
      quantity: 1
    })]);
    const new_order = new _catering_order_class__WEBPACK_IMPORTED_MODULE_8__.CateringOrder({
      ...order,
      items,
      event: null
    });
    return new_order;
  }
  static #_ = this.ɵfac = function CateringStateService_Factory(t) {
    return new (t || CateringStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵinject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_3__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵinject"](_placeos_common__WEBPACK_IMPORTED_MODULE_2__.SettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjectable"]({
    token: CateringStateService,
    factory: CateringStateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 49132:
/*!******************************************************!*\
  !*** ./libs/catering/src/lib/catering.interfaces.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 13832:
/*!**************************************************!*\
  !*** ./libs/catering/src/lib/catering.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedCateringModule: () => (/* binding */ SharedCateringModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/autocomplete */ 99892);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/checkbox */ 56658);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tabs */ 60989);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/radio */ 92106);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tooltip */ 60702);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _placeos_form_fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/form-fields */ 39304);
/* harmony import */ var libs_components_src_lib_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! libs/components/src/lib/components.module */ 64921);
/* harmony import */ var _catering_item_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catering-item-modal.component */ 98147);
/* harmony import */ var _catering_menu_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catering-menu-item.component */ 67910);
/* harmony import */ var _catering_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./catering-menu.component */ 56748);
/* harmony import */ var _catering_option_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./catering-option-modal.component */ 57341);
/* harmony import */ var _catering_order_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./catering-order-item.component */ 11506);
/* harmony import */ var _catering_order_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./catering-order-list.component */ 82467);
/* harmony import */ var _catering_order_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./catering-order-modal.component */ 40593);
/* harmony import */ var _catering_order_options_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./catering-order-options-modal.component */ 68089);
/* harmony import */ var _catering_order_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./catering-order.component */ 70021);
/* harmony import */ var _catering_import_menu_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./catering-import-menu-modal.component */ 30766);
/* harmony import */ var _catering_order_modal_new_catering_order_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./catering-order-modal/new-catering-order-modal.component */ 40533);
/* harmony import */ var _catering_order_modal_catering_item_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./catering-order-modal/catering-item-list.component */ 13099);
/* harmony import */ var _catering_order_modal_catering_item_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./catering-order-modal/catering-item-details.component */ 50774);
/* harmony import */ var _catering_order_modal_catering_item_filters_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./catering-order-modal/catering-item-filters.component */ 156);
/* harmony import */ var _catering_list_field_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./catering-list-field.component */ 83585);
/* harmony import */ var _charge_code_list_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./charge-code-list-modal.component */ 42051);
/* harmony import */ var _catering_order_modal_catering_item_list_item_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./catering-order-modal/catering-item-list-item.component */ 80136);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 61699);































const COMPONENTS = [_catering_order_options_modal_component__WEBPACK_IMPORTED_MODULE_9__.CateringOrderOptionsModalComponent, _catering_order_modal_component__WEBPACK_IMPORTED_MODULE_8__.CateringOrderModalComponent, _catering_item_modal_component__WEBPACK_IMPORTED_MODULE_2__.CateringItemModalComponent, _catering_menu_component__WEBPACK_IMPORTED_MODULE_4__.CateringMenuComponent, _catering_menu_item_component__WEBPACK_IMPORTED_MODULE_3__.CateringMenuItemComponent, _catering_option_modal_component__WEBPACK_IMPORTED_MODULE_5__.CateringItemOptionModalComponent, _catering_order_list_component__WEBPACK_IMPORTED_MODULE_7__.CateringOrderListComponent, _catering_order_component__WEBPACK_IMPORTED_MODULE_10__.CateringOrderComponent, _catering_order_item_component__WEBPACK_IMPORTED_MODULE_6__.CateringOrderItemComponent, _catering_import_menu_modal_component__WEBPACK_IMPORTED_MODULE_11__.CateringImportMenuModalComponent, _catering_list_field_component__WEBPACK_IMPORTED_MODULE_16__.CateringListFieldComponent, _catering_order_modal_new_catering_order_modal_component__WEBPACK_IMPORTED_MODULE_12__.NewCateringOrderModalComponent, _catering_order_modal_catering_item_list_component__WEBPACK_IMPORTED_MODULE_13__.CateringItemListComponent, _catering_order_modal_catering_item_details_component__WEBPACK_IMPORTED_MODULE_14__.CateringItemDetailsComponent, _catering_order_modal_catering_item_filters_component__WEBPACK_IMPORTED_MODULE_15__.CateringItemFiltersComponent, _catering_order_modal_catering_item_list_item_component__WEBPACK_IMPORTED_MODULE_18__.CateringItemListItemComponent, _charge_code_list_modal_component__WEBPACK_IMPORTED_MODULE_17__.ChargeCodeListModalComponent];
class SharedCateringModule {
  static #_ = this.ɵfac = function SharedCateringModule_Factory(t) {
    return new (t || SharedCateringModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({
    type: SharedCateringModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__.MatTabsModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__.MatAutocompleteModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__.MatDialogModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__.MatCheckboxModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__.MatRadioModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__.MatTooltipModule, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.ReactiveFormsModule, libs_components_src_lib_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__.MatFormFieldModule, _placeos_form_fields__WEBPACK_IMPORTED_MODULE_0__.FormFieldsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](SharedCateringModule, {
    declarations: [_catering_order_options_modal_component__WEBPACK_IMPORTED_MODULE_9__.CateringOrderOptionsModalComponent, _catering_order_modal_component__WEBPACK_IMPORTED_MODULE_8__.CateringOrderModalComponent, _catering_item_modal_component__WEBPACK_IMPORTED_MODULE_2__.CateringItemModalComponent, _catering_menu_component__WEBPACK_IMPORTED_MODULE_4__.CateringMenuComponent, _catering_menu_item_component__WEBPACK_IMPORTED_MODULE_3__.CateringMenuItemComponent, _catering_option_modal_component__WEBPACK_IMPORTED_MODULE_5__.CateringItemOptionModalComponent, _catering_order_list_component__WEBPACK_IMPORTED_MODULE_7__.CateringOrderListComponent, _catering_order_component__WEBPACK_IMPORTED_MODULE_10__.CateringOrderComponent, _catering_order_item_component__WEBPACK_IMPORTED_MODULE_6__.CateringOrderItemComponent, _catering_import_menu_modal_component__WEBPACK_IMPORTED_MODULE_11__.CateringImportMenuModalComponent, _catering_list_field_component__WEBPACK_IMPORTED_MODULE_16__.CateringListFieldComponent, _catering_order_modal_new_catering_order_modal_component__WEBPACK_IMPORTED_MODULE_12__.NewCateringOrderModalComponent, _catering_order_modal_catering_item_list_component__WEBPACK_IMPORTED_MODULE_13__.CateringItemListComponent, _catering_order_modal_catering_item_details_component__WEBPACK_IMPORTED_MODULE_14__.CateringItemDetailsComponent, _catering_order_modal_catering_item_filters_component__WEBPACK_IMPORTED_MODULE_15__.CateringItemFiltersComponent, _catering_order_modal_catering_item_list_item_component__WEBPACK_IMPORTED_MODULE_18__.CateringItemListItemComponent, _charge_code_list_modal_component__WEBPACK_IMPORTED_MODULE_17__.ChargeCodeListModalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__.MatTabsModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__.MatAutocompleteModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__.MatDialogModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__.MatCheckboxModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__.MatRadioModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__.MatTooltipModule, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.ReactiveFormsModule, libs_components_src_lib_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__.MatFormFieldModule, _placeos_form_fields__WEBPACK_IMPORTED_MODULE_0__.FormFieldsModule],
    exports: [_catering_order_options_modal_component__WEBPACK_IMPORTED_MODULE_9__.CateringOrderOptionsModalComponent, _catering_order_modal_component__WEBPACK_IMPORTED_MODULE_8__.CateringOrderModalComponent, _catering_item_modal_component__WEBPACK_IMPORTED_MODULE_2__.CateringItemModalComponent, _catering_menu_component__WEBPACK_IMPORTED_MODULE_4__.CateringMenuComponent, _catering_menu_item_component__WEBPACK_IMPORTED_MODULE_3__.CateringMenuItemComponent, _catering_option_modal_component__WEBPACK_IMPORTED_MODULE_5__.CateringItemOptionModalComponent, _catering_order_list_component__WEBPACK_IMPORTED_MODULE_7__.CateringOrderListComponent, _catering_order_component__WEBPACK_IMPORTED_MODULE_10__.CateringOrderComponent, _catering_order_item_component__WEBPACK_IMPORTED_MODULE_6__.CateringOrderItemComponent, _catering_import_menu_modal_component__WEBPACK_IMPORTED_MODULE_11__.CateringImportMenuModalComponent, _catering_list_field_component__WEBPACK_IMPORTED_MODULE_16__.CateringListFieldComponent, _catering_order_modal_new_catering_order_modal_component__WEBPACK_IMPORTED_MODULE_12__.NewCateringOrderModalComponent, _catering_order_modal_catering_item_list_component__WEBPACK_IMPORTED_MODULE_13__.CateringItemListComponent, _catering_order_modal_catering_item_details_component__WEBPACK_IMPORTED_MODULE_14__.CateringItemDetailsComponent, _catering_order_modal_catering_item_filters_component__WEBPACK_IMPORTED_MODULE_15__.CateringItemFiltersComponent, _catering_order_modal_catering_item_list_item_component__WEBPACK_IMPORTED_MODULE_18__.CateringItemListItemComponent, _charge_code_list_modal_component__WEBPACK_IMPORTED_MODULE_17__.ChargeCodeListModalComponent]
  });
})();

/***/ }),

/***/ 4292:
/*!*******************************************!*\
  !*** ./libs/catering/src/lib/catering.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CATERING_STATUSES: () => (/* reexport safe */ _catering_vars__WEBPACK_IMPORTED_MODULE_15__.CATERING_STATUSES),
/* harmony export */   CateringItem: () => (/* reexport safe */ _catering_item_class__WEBPACK_IMPORTED_MODULE_3__.CateringItem),
/* harmony export */   CateringItemModalComponent: () => (/* reexport safe */ _catering_item_modal_component__WEBPACK_IMPORTED_MODULE_2__.CateringItemModalComponent),
/* harmony export */   CateringItemOptionModalComponent: () => (/* reexport safe */ _catering_option_modal_component__WEBPACK_IMPORTED_MODULE_6__.CateringItemOptionModalComponent),
/* harmony export */   CateringMenuComponent: () => (/* reexport safe */ _catering_menu_component__WEBPACK_IMPORTED_MODULE_5__.CateringMenuComponent),
/* harmony export */   CateringMenuItemComponent: () => (/* reexport safe */ _catering_menu_item_component__WEBPACK_IMPORTED_MODULE_4__.CateringMenuItemComponent),
/* harmony export */   CateringOrder: () => (/* reexport safe */ _catering_order_class__WEBPACK_IMPORTED_MODULE_10__.CateringOrder),
/* harmony export */   CateringOrderComponent: () => (/* reexport safe */ _catering_order_component__WEBPACK_IMPORTED_MODULE_8__.CateringOrderComponent),
/* harmony export */   CateringOrderItemComponent: () => (/* reexport safe */ _catering_order_item_component__WEBPACK_IMPORTED_MODULE_7__.CateringOrderItemComponent),
/* harmony export */   CateringOrderListComponent: () => (/* reexport safe */ _catering_order_list_component__WEBPACK_IMPORTED_MODULE_9__.CateringOrderListComponent),
/* harmony export */   CateringOrderModalComponent: () => (/* reexport safe */ _catering_order_modal_component__WEBPACK_IMPORTED_MODULE_1__.CateringOrderModalComponent),
/* harmony export */   CateringOrderOptionsModalComponent: () => (/* reexport safe */ _catering_order_options_modal_component__WEBPACK_IMPORTED_MODULE_0__.CateringOrderOptionsModalComponent),
/* harmony export */   CateringOrdersService: () => (/* reexport safe */ _catering_orders_service__WEBPACK_IMPORTED_MODULE_11__.CateringOrdersService),
/* harmony export */   CateringStateService: () => (/* reexport safe */ _catering_state_service__WEBPACK_IMPORTED_MODULE_12__.CateringStateService),
/* harmony export */   NewCateringOrderModalComponent: () => (/* reexport safe */ _catering_order_modal_new_catering_order_modal_component__WEBPACK_IMPORTED_MODULE_16__.NewCateringOrderModalComponent),
/* harmony export */   SharedCateringModule: () => (/* reexport safe */ _catering_module__WEBPACK_IMPORTED_MODULE_14__.SharedCateringModule)
/* harmony export */ });
/* harmony import */ var _catering_order_options_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catering-order-options-modal.component */ 68089);
/* harmony import */ var _catering_order_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catering-order-modal.component */ 40593);
/* harmony import */ var _catering_item_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catering-item-modal.component */ 98147);
/* harmony import */ var _catering_item_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catering-item.class */ 85784);
/* harmony import */ var _catering_menu_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./catering-menu-item.component */ 67910);
/* harmony import */ var _catering_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./catering-menu.component */ 56748);
/* harmony import */ var _catering_option_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./catering-option-modal.component */ 57341);
/* harmony import */ var _catering_order_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./catering-order-item.component */ 11506);
/* harmony import */ var _catering_order_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./catering-order.component */ 70021);
/* harmony import */ var _catering_order_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./catering-order-list.component */ 82467);
/* harmony import */ var _catering_order_class__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./catering-order.class */ 65688);
/* harmony import */ var _catering_orders_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./catering-orders.service */ 6030);
/* harmony import */ var _catering_state_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./catering-state.service */ 45618);
/* harmony import */ var _catering_interfaces__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./catering.interfaces */ 49132);
/* harmony import */ var _catering_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./catering.module */ 13832);
/* harmony import */ var _catering_vars__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./catering.vars */ 39815);
/* harmony import */ var _catering_order_modal_new_catering_order_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./catering-order-modal/new-catering-order-modal.component */ 40533);


















/***/ }),

/***/ 39815:
/*!************************************************!*\
  !*** ./libs/catering/src/lib/catering.vars.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CATERING_STATUSES: () => (/* binding */ CATERING_STATUSES)
/* harmony export */ });
const CATERING_STATUSES = [{
  id: 'pending',
  name: 'Pending',
  icon: {
    class: 'custom-pending'
  },
  colour: '#ccc'
}, {
  id: 'accepted',
  name: 'Accepted',
  icon: {
    class: 'custom-accepted'
  },
  colour: '#3996B6'
}, {
  id: 'preparing',
  name: 'Preparing',
  icon: {
    class: 'custom-preparing'
  },
  colour: '#E7536B'
}, {
  id: 'ready',
  name: 'Ready',
  icon: {
    class: 'custom-ready'
  },
  colour: '#FFD028'
}, {
  id: 'delivered',
  name: 'Delivered',
  icon: {
    class: 'custom-delivered'
  },
  colour: '#75BB43'
}, {
  id: 'cancelled',
  name: 'Cancelled',
  icon: {
    class: 'custom-cancelled'
  },
  colour: '#747474'
}];

/***/ }),

/***/ 42051:
/*!*******************************************************************!*\
  !*** ./libs/catering/src/lib/charge-code-list-modal.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChargeCodeListModalComponent: () => (/* binding */ ChargeCodeListModalComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 46939);
/* harmony import */ var _catering_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catering-state.service */ 45618);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/src/lib/icon.component */ 94888);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 33910);















function ChargeCodeListModalComponent_main_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "mat-form-field", 7)(2, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ChargeCodeListModalComponent_main_6_div_1_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const i_r6 = restoredCtx.index;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.charge_codes[i_r6] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChargeCodeListModalComponent_main_6_div_1_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const i_r6 = restoredCtx.index;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.removeCode(i_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r6 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r4.charge_codes[i_r6]);
  }
}
function ChargeCodeListModalComponent_main_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "main", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ChargeCodeListModalComponent_main_6_div_1_Template, 6, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.charge_codes)("ngForTrackBy", ctx_r0.trackByFn);
  }
}
function ChargeCodeListModalComponent_footer_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "footer", 10)(1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Import Codes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function ChargeCodeListModalComponent_footer_7_Template_input_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.addCodesFromFile($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChargeCodeListModalComponent_footer_7_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.newCode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Add Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChargeCodeListModalComponent_footer_7_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r13.saveChargeCodes());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Save Changes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function ChargeCodeListModalComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "main", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-spinner", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Saving changes to charge codes...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
class ChargeCodeListModalComponent {
  constructor(_state, _dialog_ref) {
    this._state = _state;
    this._dialog_ref = _dialog_ref;
    this.charge_codes = [];
    this.loading = false;
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.charge_codes = (yield _this._state.charge_codes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).toPromise()) || [];
    })();
  }
  newCode() {
    this.charge_codes.push('');
  }
  removeCode(index) {
    this.charge_codes.splice(index, 1);
  }
  /**
   * Load CSV file and populate the code list with the contents
   * @param event File input field event
   */
  addCodesFromFile(event) {
    /* istanbul ignore else */
    if (event.target) {
      const file = event.target.files[0];
      /* istanbul ignore else */
      if (file) {
        const reader = new FileReader();
        reader.readAsText(file, 'UTF-8');
        reader.addEventListener('load', evt => {
          const list = (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.csvToJson)(evt.srcElement.result) || [];
          for (const {
            code,
            description
          } of list) {
            this.charge_codes.push(code);
          }
          this.charge_codes = (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.unique)(this.charge_codes);
          event.target.value = '';
        });
        reader.addEventListener('error', _ => (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)('Error reading file.'));
      }
    }
  }
  saveChargeCodes() {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = true;
      const cleaned_codes = _this2.charge_codes.filter(_ => _ && _.trim());
      yield _this2._state.saveSettings({
        charge_codes: cleaned_codes
      });
      _this2._dialog_ref.close();
    })();
  }
  trackByFn(idx, item) {
    return idx;
  }
  static #_ = this.ɵfac = function ChargeCodeListModalComponent_Factory(t) {
    return new (t || ChargeCodeListModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_catering_state_service__WEBPACK_IMPORTED_MODULE_2__.CateringStateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ChargeCodeListModalComponent,
    selectors: [["charge-code-list-modal"]],
    decls: 10,
    vars: 3,
    consts: [["icon", "", "mat-dialog-close", ""], ["class", "overflow-auto max-h-[65vh] min-h-[20rem] flex flex-col", 4, "ngIf", "ngIfElse"], ["class", "flex items-center p-2 space-x-2 border-t border-base-200", 4, "ngIf"], ["load_state", ""], [1, "overflow-auto", "max-h-[65vh]", "min-h-[20rem]", "flex", "flex-col"], ["class", "flex items-center space-x-2 w-full hover:bg-neutral px-2", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "flex", "items-center", "space-x-2", "w-full", "hover:bg-neutral", "px-2"], ["appearance", "outline", 1, "h-14", "flex-1"], ["matInput", "", "placeholder", "Charge Code", 3, "ngModel", "ngModelChange"], ["icon", "", 3, "click"], [1, "flex", "items-center", "p-2", "space-x-2", "border-t", "border-base-200"], ["btn", "", "matRipple", "", 1, "w-48", "inverse", "relative"], ["type", "file", 1, "opacity-0", "absolute", "inset-0", 3, "change"], ["btn", "", "matRipple", "", 1, "w-48", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "p-20", "space-y-2"], ["diameter", "32"]],
    template: function ChargeCodeListModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "header")(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Edit Charge Codes");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 0)(4, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ChargeCodeListModalComponent_main_6_Template, 2, 2, "main", 1)(7, ChargeCodeListModalComponent_footer_7_Template, 8, 0, "footer", 2)(8, ChargeCodeListModalComponent_ng_template_8_Template, 4, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatRipple, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinner]
  });
}

/***/ })

}]);
//# sourceMappingURL=default-libs_catering_src_index_ts.js.map