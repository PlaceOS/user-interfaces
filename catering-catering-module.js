(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["catering-catering-module"],{

/***/ "/LTK":
/*!****************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/catering/src/lib/catering-item-modal.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: CateringItemModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateringItemModalComponent", function() { return CateringItemModalComponent; });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/keycodes */ "fAiE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _catering_item_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./catering-item.class */ "Ygd4");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ "ulve");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/src/lib/icon/icon.component */ "ukpX");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "mFH5");














const _c0 = function () { return { type: "icon", class: "material-icons", content: "close" }; };
function CateringItemModalComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
} }
function CateringItemModalComponent_form_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("error", ctx_r7.form.controls.name.invalid && ctx_r7.form.controls.name.touched);
} }
function CateringItemModalComponent_form_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Category is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("error", ctx_r8.form.controls.category.invalid && ctx_r8.form.controls.category.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matAutocomplete", _r5);
} }
const _c5 = function () { return { class: "material-icons", content: "close" }; };
function CateringItemModalComponent_form_4_div_3_mat_chip_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("removed", function CateringItemModalComponent_form_4_div_3_mat_chip_6_Template_mat_chip_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const tag_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r15.removeTag(tag_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectable", true)("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", tag_r14, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c5));
} }
function CateringItemModalComponent_form_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-chip-list", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CateringItemModalComponent_form_4_div_3_mat_chip_6_Template, 3, 5, "mat-chip", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nAttributes"](8, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("matChipInputTokenEnd", function CateringItemModalComponent_form_4_div_3_Template_input_matChipInputTokenEnd_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r17.addTag($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("error", ctx_r9.form.controls.tags.invalid && ctx_r9.form.controls.tags.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r9.tag_list);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matChipInputFor", _r12)("matChipInputSeparatorKeyCodes", ctx_r9.separators)("matChipInputAddOnBlur", true);
} }
function CateringItemModalComponent_form_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "textarea", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CateringItemModalComponent_form_4_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Unit Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Unit Price is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("error", ctx_r11.form.controls.unit_price.invalid && ctx_r11.form.controls.unit_price.touched);
} }
function CateringItemModalComponent_form_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CateringItemModalComponent_form_4_div_1_Template, 10, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CateringItemModalComponent_form_4_div_2_Template, 10, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CateringItemModalComponent_form_4_div_3_Template, 9, 6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CateringItemModalComponent_form_4_div_4_Template, 5, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CateringItemModalComponent_form_4_div_5_Template, 10, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.form.controls.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.form.controls.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.form.controls.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.form.controls.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.form.controls.unit_price);
} }
function CateringItemModalComponent_footer_5_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CateringItemModalComponent_footer_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.saveChanges(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r2.form.dirty);
} }
function CateringItemModalComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-spinner", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Saving catering item...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CateringItemModalComponent_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r21, " ");
} }
class CateringItemModalComponent {
    constructor(_data) {
        this._data = _data;
        /** Emitter for events on the modal */
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Whether changes are being saved */
        this.loading = false;
        /** List of separator characters for tags */
        this.separators = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["COMMA"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["SPACE"]];
    }
    /** Current item details */
    get item() {
        return this._data.item;
    }
    /** List of available categories */
    get categories() {
        return this._data.categories || [];
    }
    get tag_list() {
        return this.form.controls.tags.value;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.item.name || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.item.description || ''),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.item.category || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            unit_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.item.unit_price, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.item.tags || []),
        });
    }
    /**
     * Add a tag to the list of tags for the item
     * @param event Input event
     */
    addTag(event) {
        if (!this.form || !this.form.controls.tags)
            return;
        this.form.controls.tags.markAsDirty();
        const input = event.input;
        const value = event.value;
        const tag_list = this.tag_list;
        if ((value || '').trim()) {
            tag_list.push(value);
            this.form.controls.tags.setValue(tag_list);
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    }
    /**
     * Remove tag from the list
     * @param existing_tag Tag to remove
     */
    removeTag(existing_tag) {
        if (!this.form || !this.form.controls.tags)
            return;
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
                item: new _catering_item_class__WEBPACK_IMPORTED_MODULE_4__["CateringItem"](Object.assign(Object.assign(Object.assign({}, this.item), { id: this.item.id || `item-${Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_5__["randomInt"])(99999999)}` }), this.form.value)),
            },
        });
    }
}
CateringItemModalComponent.ɵfac = function CateringItemModalComponent_Factory(t) { return new (t || CateringItemModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])); };
CateringItemModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CateringItemModalComponent, selectors: [["catering-item-modal"]], outputs: { event: "event" }, decls: 11, vars: 6, consts: function () { var i18n_1; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_tagsLabel$$LIBS_CATERING_SRC_LIB_CATERING_ITEM_MODAL_COMPONENT_TS___2 = goog.getMsg(" Tags: ");
        i18n_1 = MSG_EXTERNAL_tagsLabel$$LIBS_CATERING_SRC_LIB_CATERING_ITEM_MODAL_COMPONENT_TS___2;
    }
    else {
        i18n_1 = $localize `:@@tagsLabel␟800ffadd463cfe152c5af3fa9f13803ab2e77b93␟4746186018558508280: Tags: `;
    } var i18n_3; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_zoneTagsPlaceholder$$LIBS_CATERING_SRC_LIB_CATERING_ITEM_MODAL_COMPONENT_TS___4 = goog.getMsg("Zone tags...");
        i18n_3 = MSG_EXTERNAL_zoneTagsPlaceholder$$LIBS_CATERING_SRC_LIB_CATERING_ITEM_MODAL_COMPONENT_TS___4;
    }
    else {
        i18n_3 = $localize `:@@zoneTagsPlaceholder␟8dc7c13b0c6b8ad9c770bce0ad72e14b4aef8456␟3986010900542572161:Zone tags...`;
    } return [["mat-dialog-title", ""], ["mat-icon-button", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "p-4 overflow-auto", 3, "formGroup", 4, "ngIf", "ngIfElse"], ["class", "flex p-2 items-center justify-center border-none border-t border-solid border-gray-300", 4, "ngIf"], ["load_state", ""], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "mat-dialog-close", ""], [3, "icon"], [1, "p-4", "overflow-auto", 3, "formGroup"], ["class", "field", 4, "ngIf"], [1, "field"], ["for", "title"], ["appearance", "outline"], ["matInput", "", "name", "name", "placeholder", "Item name", "formControlName", "name"], ["for", "category"], ["matInput", "", "name", "category", "placeholder", "Category", "formControlName", "category", 3, "matAutocomplete"], ["for", "tags"], i18n_1, ["aria-label", "Item Tags"], ["chipList", ""], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["name", "tags", 3, "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur", "matChipInputTokenEnd", 6, "placeholder"], ["placeholder", i18n_3], [3, "selectable", "removable", "removed"], ["matChipRemove", "", 3, "icon"], ["for", "description"], ["matInput", "", "name", "description", "placeholder", "Item Description", "formControlName", "description"], ["matInput", "", "name", "unit-price", "type", "number", "placeholder", "Unit Price", "formControlName", "unit_price"], [1, "flex", "p-2", "items-center", "justify-center", "border-none", "border-t", "border-solid", "border-gray-300"], ["mat-button", "", 3, "disabled", "click"], [1, "body"], [1, "info-block"], [1, "icon"], ["diameter", "32"], [1, "text"], [3, "value"]]; }, template: function CateringItemModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CateringItemModalComponent_button_3_Template, 2, 2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CateringItemModalComponent_form_4_Template, 6, 6, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CateringItemModalComponent_footer_5_Template, 3, 1, "footer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CateringItemModalComponent_ng_template_6_Template, 6, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-autocomplete", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CateringItemModalComponent_mat_option_10_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.item.id ? "Edit" : "Add", " Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form && !ctx.loading)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogTitle"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocomplete"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogClose"], _components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_8__["IconComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteTrigger"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]], styles: [".field[_ngcontent-%COMP%] {\n                display: flex;\n                flex-wrap: wrap;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CateringItemModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'catering-item-modal',
                template: `
        <header>
            <h3 mat-dialog-title>{{ item.id ? 'Edit' : 'Add' }} Item</h3>
            <button mat-icon-button mat-dialog-close *ngIf="!loading">
                <app-icon
                    [icon]="{ type: 'icon', class: 'material-icons', content: 'close' }"
                ></app-icon>
            </button>
        </header>
        <form
            class="p-4 overflow-auto"
            *ngIf="form && !loading; else load_state"
            [formGroup]="form"
        >
            <div class="field" *ngIf="form.controls.name">
                <label
                    for="title"
                    [class.error]="form.controls.name.invalid && form.controls.name.touched"
                >
                    Name<span>*</span>:
                </label>
                <mat-form-field appearance="outline">
                    <input matInput name="name" placeholder="Item name" formControlName="name" />
                    <mat-error>Name is required</mat-error>
                </mat-form-field>
            </div>
            <div class="field" *ngIf="form.controls.category">
                <label
                    for="category"
                    [class.error]="form.controls.category.invalid && form.controls.category.touched"
                >
                    Category<span>*</span>:
                </label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="category"
                        placeholder="Category"
                        formControlName="category"
                        [matAutocomplete]="auto"
                    />
                    <mat-error>Category is required</mat-error>
                </mat-form-field>
            </div>
            <div class="field" *ngIf="form.controls.tags">
                <label
                    for="tags"
                    [class.error]="form.controls.tags.invalid && form.controls.tags.touched"
                    i18n="@@tagsLabel"
                >
                    Tags:
                </label>
                <mat-form-field appearance="outline">
                    <mat-chip-list #chipList aria-label="Item Tags">
                        <mat-chip
                            *ngFor="let tag of tag_list"
                            [selectable]="true"
                            [removable]="true"
                            (removed)="removeTag(tag)"
                        >
                            {{ tag }}
                            <app-icon
                                matChipRemove
                                [icon]="{ class: 'material-icons', content: 'close' }"
                            ></app-icon>
                        </mat-chip>
                        <input
                            name="tags"
                            placeholder="Zone tags..."
                            i18n-placeholder="@@zoneTagsPlaceholder"
                            [matChipInputFor]="chipList"
                            [matChipInputSeparatorKeyCodes]="separators"
                            [matChipInputAddOnBlur]="true"
                            (matChipInputTokenEnd)="addTag($event)"
                        />
                    </mat-chip-list>
                </mat-form-field>
            </div>
            <div class="field" *ngIf="form.controls.description">
                <label for="description">Description:</label>
                <mat-form-field appearance="outline">
                    <textarea
                        matInput
                        name="description"
                        placeholder="Item Description"
                        formControlName="description"
                    ></textarea>
                </mat-form-field>
            </div>
            <div class="field" *ngIf="form.controls.unit_price">
                <label
                    for="title"
                    [class.error]="
                        form.controls.unit_price.invalid && form.controls.unit_price.touched
                    "
                >
                    Unit Price<span>*</span>:
                </label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="unit-price"
                        type="number"
                        placeholder="Unit Price"
                        formControlName="unit_price"
                    />
                    <mat-error>Unit Price is required</mat-error>
                </mat-form-field>
            </div>
        </form>
        <footer
            *ngIf="!loading"
            class="flex p-2 items-center justify-center border-none border-t border-solid border-gray-300"
        >
            <button mat-button [disabled]="!form.dirty" (click)="saveChanges()">Save</button>
        </footer>
        <ng-template #load_state>
            <div class="body">
                <div class="info-block">
                    <div class="icon">
                        <mat-spinner diameter="32"></mat-spinner>
                    </div>
                    <div class="text">Saving catering item...</div>
                </div>
            </div>
        </ng-template>
        <mat-autocomplete #auto="matAutocomplete">
            <mat-option *ngFor="let option of categories" [value]="option">
                {{ option }}
            </mat-option>
        </mat-autocomplete>
    `,
                styles: [
                    `
            .field {
                display: flex;
                flex-wrap: wrap;
            }
        `,
                ],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
            }] }]; }, { event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "/iyb":
/*!************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/catering/src/lib/catering.vars.ts ***!
  \************************************************************************************************/
/*! exports provided: CATERING_STATUSES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATERING_STATUSES", function() { return CATERING_STATUSES; });
const CATERING_STATUSES = [
    { id: 'pending', name: 'Pending', icon: { class: 'custom-pending' }, colour: '#ccc' },
    { id: 'accepted', name: 'Accepted', icon: { class: 'custom-accepted' }, colour: '#3996B6' },
    {
        id: 'preparing',
        name: 'Preparing',
        icon: { class: 'custom-preparing' },
        colour: '#E7536B',
    },
    { id: 'ready', name: 'Ready', icon: { class: 'custom-ready' }, colour: '#FFD028' },
    {
        id: 'delivered',
        name: 'Delivered',
        icon: { class: 'custom-delivered' },
        colour: '#75BB43',
    },
    {
        id: 'cancelled',
        name: 'Cancelled',
        icon: { class: 'custom-cancelled' },
        colour: '#747474',
    },
];


/***/ }),

/***/ "0rdp":
/*!******************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/catering/src/lib/catering.interfaces.ts ***!
  \******************************************************************************************************/
/*! exports provided: RULE_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RULE_TYPES", function() { return RULE_TYPES; });
const RULE_TYPES = [
    { id: 'after_hour', name: 'After Hour' },
    { id: 'before_hour', name: 'Before Hour' },
    { id: 'min_length', name: 'Min. Meeting Length' },
    { id: 'max_length', name: 'Max. Meeting Length' },
    { id: 'is_before', name: 'Is Before Time' },
    { id: 'is_after', name: 'Is After Time' },
    { id: 'visitor_type', name: 'Visitor Type' },
    { id: 'groups', name: 'User in Groups' },
];


/***/ }),

/***/ "3ihl":
/*!******************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/catering/src/lib/catering-option-modal.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: CateringItemOptionModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateringItemOptionModalComponent", function() { return CateringItemOptionModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _catering_item_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./catering-item.class */ "Ygd4");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ "ulve");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/src/lib/icon/icon.component */ "ukpX");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "mFH5");













const _c0 = function () { return { type: "icon", class: "material-icons", content: "close" }; };
function CateringItemOptionModalComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function CateringItemOptionModalComponent_form_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("error", ctx_r7.form.controls.name.invalid && ctx_r7.form.controls.name.touched);
} }
function CateringItemOptionModalComponent_form_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Type is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("error", ctx_r8.form.controls.group.invalid && ctx_r8.form.controls.group.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r5);
} }
function CateringItemOptionModalComponent_form_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Unit Price:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CateringItemOptionModalComponent_form_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Can select multiple of type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CateringItemOptionModalComponent_form_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CateringItemOptionModalComponent_form_4_div_1_Template, 10, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CateringItemOptionModalComponent_form_4_div_2_Template, 10, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CateringItemOptionModalComponent_form_4_div_3_Template, 5, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CateringItemOptionModalComponent_form_4_div_4_Template, 3, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.controls.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.controls.group);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.controls.unit_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.controls.multiple);
} }
function CateringItemOptionModalComponent_footer_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CateringItemOptionModalComponent_footer_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.saveChanges(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.form.dirty);
} }
function CateringItemOptionModalComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-spinner", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Saving catering item...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CateringItemOptionModalComponent_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r13, " ");
} }
class CateringItemOptionModalComponent {
    constructor(_data) {
        this._data = _data;
        /** Emitter for events on the modal */
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Whether changes are being saved */
        this.loading = false;
    }
    /** Current item details */
    get option() {
        return this._data.option;
    }
    /** List of available categories */
    get types() {
        return this._data.types || [];
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.option.name || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            group: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.option.group || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            unit_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.option.unit_price),
            multiple: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](!!this.option.multiple, []),
        });
    }
    saveChanges() {
        this.loading = true;
        const new_option = Object.assign(Object.assign(Object.assign({}, this.option), { id: this.option.id || `option-${Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["randomInt"])(99999999)}` }), this.form.value);
        this.event.emit({
            reason: 'done',
            metadata: {
                item: new _catering_item_class__WEBPACK_IMPORTED_MODULE_4__["CateringItem"](Object.assign(Object.assign({}, this._data.parent), { options: this._data.parent.options
                        .filter((i) => i.id !== new_option.id)
                        .concat([new_option]) })),
            },
        });
    }
}
CateringItemOptionModalComponent.ɵfac = function CateringItemOptionModalComponent_Factory(t) { return new (t || CateringItemOptionModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
CateringItemOptionModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CateringItemOptionModalComponent, selectors: [["catering-option-modal"]], outputs: { event: "event" }, decls: 11, vars: 6, consts: [["mat-dialog-title", ""], ["mat-icon-button", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "p-4 overflow-auto", 3, "formGroup", 4, "ngIf", "ngIfElse"], ["class", "flex p-2 items-center justify-center border-none border-t border-solid border-gray-300", 4, "ngIf"], ["load_state", ""], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "mat-dialog-close", ""], [3, "icon"], [1, "p-4", "overflow-auto", 3, "formGroup"], ["class", "field", 4, "ngIf"], [1, "field"], ["for", "title"], ["appearance", "outline"], ["matInput", "", "name", "name", "placeholder", "Item name", "formControlName", "name"], ["for", "group"], ["matInput", "", "name", "group", "placeholder", "Type of option e.g. Number of sugars", "formControlName", "group", 3, "matAutocomplete"], ["matInput", "", "name", "unit-price", "type", "number", "placeholder", "Unit Price", "formControlName", "unit_price"], ["name", "multiple", "formControlName", "multiple"], [1, "flex", "p-2", "items-center", "justify-center", "border-none", "border-t", "border-solid", "border-gray-300"], ["mat-button", "", 3, "disabled", "click"], [1, "body"], [1, "info-block"], [1, "icon"], ["diameter", "32"], [1, "text"], [3, "value"]], template: function CateringItemOptionModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CateringItemOptionModalComponent_button_3_Template, 2, 2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CateringItemOptionModalComponent_form_4_Template, 5, 5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CateringItemOptionModalComponent_footer_5_Template, 3, 1, "footer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CateringItemOptionModalComponent_ng_template_6_Template, 6, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-autocomplete", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CateringItemOptionModalComponent_mat_option_10_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.option.id ? "Edit" : "Add", " Item Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form && !ctx.loading)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.types);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocomplete"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__["IconComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteTrigger"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]], styles: [".field[_ngcontent-%COMP%] {\n                display: flex;\n                flex-wrap: wrap;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CateringItemOptionModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'catering-option-modal',
                template: `
        <header>
            <h3 mat-dialog-title>{{ option.id ? 'Edit' : 'Add' }} Item Option</h3>
            <button mat-icon-button mat-dialog-close *ngIf="!loading">
                <app-icon
                    [icon]="{ type: 'icon', class: 'material-icons', content: 'close' }"
                ></app-icon>
            </button>
        </header>
        <form
            class="p-4 overflow-auto"
            *ngIf="form && !loading; else load_state"
            [formGroup]="form"
        >
            <div class="field" *ngIf="form.controls.name">
                <label
                    for="title"
                    [class.error]="form.controls.name.invalid && form.controls.name.touched"
                >
                    Name<span>*</span>:
                </label>
                <mat-form-field appearance="outline">
                    <input matInput name="name" placeholder="Item name" formControlName="name" />
                    <mat-error>Name is required</mat-error>
                </mat-form-field>
            </div>
            <div class="field" *ngIf="form.controls.group">
                <label
                    for="group"
                    [class.error]="form.controls.group.invalid && form.controls.group.touched"
                >
                    Type<span>*</span>:
                </label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="group"
                        placeholder="Type of option e.g. Number of sugars"
                        formControlName="group"
                        [matAutocomplete]="auto"
                    />
                    <mat-error>Type is required</mat-error>
                </mat-form-field>
            </div>
            <div class="field" *ngIf="form.controls.unit_price">
                <label for="title">Unit Price:</label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="unit-price"
                        type="number"
                        placeholder="Unit Price"
                        formControlName="unit_price"
                    />
                </mat-form-field>
            </div>
            <div class="field" *ngIf="form.controls.multiple">
                <mat-checkbox name="multiple" formControlName="multiple"
                    >Can select multiple of type</mat-checkbox
                >
            </div>
        </form>
        <footer
            *ngIf="!loading"
            class="flex p-2 items-center justify-center border-none border-t border-solid border-gray-300"
        >
            <button mat-button [disabled]="!form.dirty" (click)="saveChanges()">Save</button>
        </footer>
        <ng-template #load_state>
            <div class="body">
                <div class="info-block">
                    <div class="icon">
                        <mat-spinner diameter="32"></mat-spinner>
                    </div>
                    <div class="text">Saving catering item...</div>
                </div>
            </div>
        </ng-template>
        <mat-autocomplete #auto="matAutocomplete">
            <mat-option *ngFor="let option of types" [value]="option">
                {{ option }}
            </mat-option>
        </mat-autocomplete>
    `,
                styles: [
                    `
            .field {
                display: flex;
                flex-wrap: wrap;
            }
        `,
                ],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, { event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "52zK":
/*!************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/catering/src/index.ts ***!
  \************************************************************************************/
/*! exports provided: CateringOptionsModalComponent, cateringItemAvailable, CateringOrderModalComponent, CateringConfigModalComponent, CateringItemModalComponent, CateringItem, CateringMenuItemComponent, CateringMenuComponent, CateringItemOptionModalComponent, CateringOrderListOrderItemComponent, CateringOrderListOrderComponent, CateringOrderListComponent, CateringOrder, CateringOrdersService, CateringStateService, RULE_TYPES, SharedCateringModule, CATERING_STATUSES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_catering__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/catering */ "it71");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CateringOptionsModalComponent", function() { return _lib_catering__WEBPACK_IMPORTED_MODULE_0__["CateringOptionsModalComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cateringItemAvailable", function() { return _lib_catering__WEBPACK_IMPORTED_MODULE_0__["cateringItemAvailable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CateringOrderModalComponent", function() { return _lib_catering__WEBPACK_IMPORTED_MODULE_0__["CateringOrderModalComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CateringConfigModalComponent", function() { return _lib_catering__WEBPACK_IMPORTED_MODULE_0__["CateringConfigModalComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CateringItemModalComponent", function() { return _lib_catering__WEBPACK_IMPORTED_MODULE_0__["CateringItemModalComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CateringItem", function() { return _lib_catering__WEBPACK_IMPORTED_MODULE_0__["CateringItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CateringMenuItemComponent", function() { return _lib_catering__WEBPACK_IMPORTED_MODULE_0__["CateringMenuItemComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CateringMenuComponent", function() { return _lib_catering__WEBPACK_IMPORTED_MODULE_0__["CateringMenuComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CateringItemOptionModalComponent", function() { return _lib_catering__WEBPACK_IMPORTED_MODULE_0__["CateringItemOptionModalComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CateringOrderListOrderItemComponent", function() { return _lib_catering__WEBPACK_IMPORTED_MODULE_0__["CateringOrderListOrderItemComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CateringOrderListOrderComponent", function() { return _lib_catering__WEBPACK_IMPORTED_MODULE_0__["CateringOrderListOrderComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CateringOrderListComponent", function() { return _lib_catering__WEBPACK_IMPORTED_MODULE_0__["CateringOrderListComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CateringOrder", function() { return _lib_catering__WEBPACK_IMPORTED_MODULE_0__["CateringOrder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CateringOrdersService", function() { return _lib_catering__WEBPACK_IMPORTED_MODULE_0__["CateringOrdersService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CateringStateService", function() { return _lib_catering__WEBPACK_IMPORTED_MODULE_0__["CateringStateService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RULE_TYPES", function() { return _lib_catering__WEBPACK_IMPORTED_MODULE_0__["RULE_TYPES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedCateringModule", function() { return _lib_catering__WEBPACK_IMPORTED_MODULE_0__["SharedCateringModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CATERING_STATUSES", function() { return _lib_catering__WEBPACK_IMPORTED_MODULE_0__["CATERING_STATUSES"]; });




/***/ }),

/***/ "AHTY":
/*!***************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/catering/src/lib/catering-menu-item.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: CateringMenuItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateringMenuItemComponent", function() { return CateringMenuItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _catering_item_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catering-item.class */ "Ygd4");
/* harmony import */ var _catering_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catering-state.service */ "IePy");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "Jb3d");
/* harmony import */ var _components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/src/lib/icon/icon.component */ "ukpX");








const _c0 = ["catering-menu-item", ""];
function CateringMenuItemComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CateringMenuItemComponent_div_18_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const option_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.editOption(option_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CateringMenuItemComponent_div_18_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const option_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.removeOption(option_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r2.group);
} }
class CateringMenuItemComponent {
    constructor(_catering) {
        this._catering = _catering;
        /** Whether to show item options */
        this.show_options = false;
        this.addOption = () => this._catering.addOption(this.item);
        this.editOption = (option) => this._catering.addOption(this.item, option);
        this.removeOption = (option) => this._catering.deleteOption(this.item, option);
        this.editItem = () => this._catering.addItem(this.item);
        this.removeItem = () => this._catering.deleteItem(this.item);
    }
    /** Currency symbol for active menu */
    get symbol() {
        return this._catering.currency;
    }
}
CateringMenuItemComponent.ɵfac = function CateringMenuItemComponent_Factory(t) { return new (t || CateringMenuItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_catering_state_service__WEBPACK_IMPORTED_MODULE_2__["CateringStateService"])); };
CateringMenuItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CateringMenuItemComponent, selectors: [["", "catering-menu-item", ""]], inputs: { item: "item" }, attrs: _c0, decls: 36, vars: 13, consts: [[1, "flex", "items-center", "px-2"], [1, "flex", "items-center", "p-2", "flex-1"], [1, "flex-1"], [1, "text-xs", "text-dark-fade"], [1, "p-2", "m-2", "text-xs", "font-bold", "text-white", "rounded", "bg-primary"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["className", "material-icons"], ["mat-icon-button", "", 3, "disabled", "click"], ["name", "options", 1, "bg-gray-100", "overflow-hidden"], ["class", "flex p-2 items-center border-none border-t border-solid border-gray-300", 4, "ngFor", "ngForOf"], ["menu", "matMenu"], ["mat-menu-item", "", 1, "flex", "items-center", 3, "click"], [1, "ml-2"], [1, "flex", "p-2", "items-center", "border-none", "border-t", "border-solid", "border-gray-300"], [1, "flex-1", "px-2"], [1, "text"], ["mat-icon-button", "", 1, "mx-2", 3, "click"]], template: function CateringMenuItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CateringMenuItemComponent_Template_button_click_14_listener() { return ctx.show_options = !ctx.show_options; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "expand_more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CateringMenuItemComponent_div_18_Template, 12, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-menu", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CateringMenuItemComponent_Template_button_click_21_listener() { return ctx.addOption(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "app-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Add Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CateringMenuItemComponent_Template_button_click_26_listener() { return ctx.editItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "app-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Edit Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CateringMenuItemComponent_Template_button_click_31_listener() { return ctx.removeItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "app-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Remove Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 8, ctx.item.unit_price / 100, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 11, ctx.symbol)), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.item.options.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.show_options ? ctx.item.options.length * 3.5 + "rem" : "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.item.options);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"], _components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__["IconComponent"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuItem"]], styles: ["[_nghost-%COMP%] {\n            background-color: #fff;\n            border: 1px solid #ccc;\n            border-radius: .25rem;\n            overflow: hidden;\n            width: 768px;\n            margin: .5rem auto;\n            max-width: calc(100vw - 1rem);\n        }\n\n        button[mat-menu-item][_ngcontent-%COMP%] {\n            display: flex;\n        }\n\n        [name=\"options\"][_ngcontent-%COMP%] {\n            transition: height 200ms;\n        }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CateringMenuItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '[catering-menu-item]',
                template: `
        <div class="flex items-center px-2">
            <div class="flex items-center p-2 flex-1">
                <div class="flex-1">
                    <div>{{ item.name }}</div>
                    <div class="text-xs text-dark-fade">{{ item.category }}</div>
                </div>
                <div class="p-2 m-2 text-xs font-bold text-white rounded bg-primary">
                    {{ item.unit_price / 100 | currency: (symbol | async) }}
                </div>
            </div>
            <button mat-icon-button [matMenuTriggerFor]="menu">
                <app-icon className="material-icons">more_vert</app-icon>
            </button>
            <button
                mat-icon-button
                [disabled]="!item.options.length"
                (click)="show_options = !show_options"
            >
                <app-icon className="material-icons">expand_more</app-icon>
            </button>
        </div>
        <div
            name="options"
            class="bg-gray-100 overflow-hidden"
            [style.height]="show_options ? item.options.length * 3.5 + 'rem' : '0'"
        >
            <div class="flex p-2 items-center border-none border-t border-solid border-gray-300" *ngFor="let option of item.options">
                <div class="flex-1 px-2">
                    <div class="text">{{ option.name }}</div>
                    <div class="text-xs text-dark-fade">{{ option.group }}</div>
                </div>
                <button mat-icon-button class="mx-2" (click)="editOption(option)">
                    <app-icon className="material-icons">edit</app-icon>
                </button>
                <button mat-icon-button class="mx-2" (click)="removeOption(option)">
                    <app-icon className="material-icons">delete</app-icon>
                </button>
            </div>
        </div>
        <mat-menu #menu="matMenu">
            <button mat-menu-item class="flex items-center" (click)="addOption()">
                <app-icon className="material-icons">add</app-icon>
                <div class="ml-2">Add Option</div>
            </button>
            <button mat-menu-item class="flex items-center" (click)="editItem()">
                <app-icon className="material-icons">edit</app-icon>
                <div class="ml-2">Edit Item</div>
            </button>
            <button mat-menu-item class="flex items-center" (click)="removeItem()">
                <app-icon className="material-icons">delete</app-icon>
                <div class="ml-2">Remove Item</div>
            </button>
        </mat-menu>
    `,
                styles: [`
        :host {
            background-color: #fff;
            border: 1px solid #ccc;
            border-radius: .25rem;
            overflow: hidden;
            width: 768px;
            margin: .5rem auto;
            max-width: calc(100vw - 1rem);
        }

        button[mat-menu-item] {
            display: flex;
        }

        [name="options"] {
            transition: height 200ms;
        }

    `],
            }]
    }], function () { return [{ type: _catering_state_service__WEBPACK_IMPORTED_MODULE_2__["CateringStateService"] }]; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "EDgw":
/*!******************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/catering/src/lib/catering-config-modal.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: CateringConfigModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateringConfigModalComponent", function() { return CateringConfigModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _catering_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catering.interfaces */ "0rdp");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/src/lib/icon/icon.component */ "ukpX");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "R7+U");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "mFH5");











function CateringConfigModalComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CateringConfigModalComponent_div_7_div_13_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r6.name, " ");
} }
function CateringConfigModalComponent_div_7_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CateringConfigModalComponent_div_7_div_13_Template_mat_select_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const rule_r4 = ctx.$implicit; return (rule_r4[0] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CateringConfigModalComponent_div_7_div_13_mat_option_3_Template, 2, 2, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CateringConfigModalComponent_div_7_div_13_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const rule_r4 = ctx.$implicit; return (rule_r4[1] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Rule value is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rule_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", rule_r4[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.rule_types);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", rule_r4[1]);
} }
function CateringConfigModalComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CateringConfigModalComponent_div_7_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const set_r2 = ctx.$implicit; return set_r2.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Ruleset name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CateringConfigModalComponent_div_7_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const set_r2 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); set_r2.rules.push(["", ""]); return ctx_r12.show_rules = set_r2.id; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CateringConfigModalComponent_div_7_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const set_r2 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.show_rules = ctx_r13.show_rules !== set_r2.id ? set_r2.id : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CateringConfigModalComponent_div_7_div_13_Template, 8, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const set_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", set_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !set_r2.rules.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.show_rules === set_r2.id ? "expand_less" : "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", (ctx_r1.show_rules === set_r2.id ? 3.5 * set_r2.rules.length : 0) + "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", set_r2.rules);
} }
class CateringConfigModalComponent {
    constructor(_data) {
        this._data = _data;
        /** Emitter for events on the modal */
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Whether changes are being saved */
        this.loading = false;
        this.rule_types = _catering_interfaces__WEBPACK_IMPORTED_MODULE_2__["RULE_TYPES"];
        this.rulesets = (_data.config || []).map((set) => {
            set.rules = set.rules.map((i) => [i[0], JSON.stringify(i[1])]);
            return set;
        });
    }
    get new_id() {
        return 'ruleset-' + Math.floor(Math.random() * 99999999);
    }
    saveChanges() {
        const rulesets = this.rulesets.map((set) => {
            return Object.assign(Object.assign({}, set), { rules: set.rules.map((i) => {
                    let value = i[1];
                    try {
                        value = JSON.parse(i[1]);
                    }
                    catch (e) { }
                    return [i[0], value];
                }) });
        });
        this.event.emit({ reason: 'done', metadata: rulesets });
    }
}
CateringConfigModalComponent.ɵfac = function CateringConfigModalComponent_Factory(t) { return new (t || CateringConfigModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
CateringConfigModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CateringConfigModalComponent, selectors: [["catering-config-modal"]], outputs: { event: "event" }, decls: 11, vars: 2, consts: [["mat-icon-button", "", "mat-dialog-close", "", 4, "ngIf"], [1, "overflow-auto", "text-center"], ["mat-button", "", 3, "click"], ["class", "ruleset", 4, "ngFor", "ngForOf"], [1, "flex", "p-2", "items-center", "justify-center", "border-none", "border-t", "border-solid", "border-gray-300"], ["mat-icon-button", "", "mat-dialog-close", ""], ["className", "material-icons"], [1, "ruleset"], [1, "flex"], ["appearance", "outline", 1, "flex-1"], ["matInput", "", "name", "name", "placeholder", "Zone ID, Category or Tag", "required", "", 3, "ngModel", "ngModelChange"], ["mat-icon-button", "", 1, "mb-6", 3, "click"], ["mat-icon-button", "", 1, "mb-6", 3, "disabled", "click"], ["name", "rules", 1, "bg-gray-100", "rounded", "overflow-hidden"], ["class", "flex px-2 h-14 space-x-2", 4, "ngFor", "ngForOf"], [1, "flex", "px-2", "h-14", "space-x-2"], ["name", "booking-type", "placeholder", "Select Rule", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "name", "value", "placeholder", "Rule value", "required", "", 3, "ngModel", "ngModelChange"], [3, "value"]], template: function CateringConfigModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Catering Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CateringConfigModalComponent_button_3_Template, 3, 0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CateringConfigModalComponent_Template_button_click_5_listener() { return ctx.rulesets.push({ id: ctx.new_id, rules: [] }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " New Ruleset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CateringConfigModalComponent_div_7_Template, 14, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "footer", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CateringConfigModalComponent_Template_button_click_9_listener() { return ctx.saveChanges(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Save Changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rulesets);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__["IconComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]], styles: ["[name='rules'][_ngcontent-%COMP%] {\n                transition: height 200ms;\n            }\n\n            main[_ngcontent-%COMP%] {\n                width: 32em;\n                padding: 0.5em 1em 1em;\n            }\n\n            main[_ngcontent-%COMP%]   button.mat-button[_ngcontent-%COMP%] {\n                margin: 0 auto 0.5em;\n                min-width: 12em;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CateringConfigModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'catering-config-modal',
                template: `
        <header>
            <h3>Edit Catering Configuration</h3>
            <button mat-icon-button mat-dialog-close *ngIf="!loading">
                <app-icon className="material-icons">close</app-icon>
            </button>
        </header>
        <main class="overflow-auto text-center">
            <button mat-button (click)="rulesets.push({ id: new_id, rules: [] })">
                New Ruleset
            </button>
            <div *ngFor="let set of rulesets" class="ruleset">
                <div class="flex">
                    <mat-form-field class="flex-1" appearance="outline">
                        <input
                            matInput
                            name="name"
                            placeholder="Zone ID, Category or Tag"
                            [(ngModel)]="set.name"
                            required
                        />
                        <mat-error>Ruleset name is required</mat-error>
                    </mat-form-field>
                    <button
                        mat-icon-button
                        class="mb-6"
                        (click)="set.rules.push(['', '']); show_rules = set.id"
                    >
                        <app-icon className="material-icons">add</app-icon>
                    </button>
                    <button
                        mat-icon-button
                        class="mb-6"
                        [disabled]="!set.rules.length"
                        (click)="show_rules = show_rules !== set.id ? set.id : ''"
                    >
                        <app-icon className="material-icons">{{
                            show_rules === set.id ? 'expand_less' : 'expand_more'
                        }}</app-icon>
                    </button>
                </div>
                <div
                    name="rules"
                    class="bg-gray-100 rounded overflow-hidden"
                    [style.height]="(show_rules === set.id ? 3.5 * set.rules.length : 0) + 'em'"
                >
                    <div class="flex px-2 h-14 space-x-2" *ngFor="let rule of set.rules">
                        <mat-form-field class="flex-1" appearance="outline">
                            <mat-select
                                name="booking-type"
                                [(ngModel)]="rule[0]"
                                placeholder="Select Rule"
                            >
                                <mat-option *ngFor="let type of rule_types" [value]="type.id">
                                    {{ type.name }}
                                </mat-option>
                            </mat-select>
                        </mat-form-field>
                        <mat-form-field class="flex-1" appearance="outline">
                            <input
                                matInput
                                name="value"
                                placeholder="Rule value"
                                [(ngModel)]="rule[1]"
                                required
                            />
                            <mat-error>Rule value is required</mat-error>
                        </mat-form-field>
                    </div>
                </div>
            </div>
        </main>
        <footer class="flex p-2 items-center justify-center border-none border-t border-solid border-gray-300">
            <button mat-button (click)="saveChanges()">Save Changes</button>
        </footer>
    `,
                styles: [
                    `
            [name='rules'] {
                transition: height 200ms;
            }

            main {
                width: 32em;
                padding: 0.5em 1em 1em;
            }

            main button.mat-button {
                margin: 0 auto 0.5em;
                min-width: 12em;
            }
        `,
                ],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, { event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "EoLz":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/catering/src/lib/catering-order-modal/catering-order-modal.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: cateringItemAvailable, CateringOrderModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cateringItemAvailable", function() { return cateringItemAvailable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateringOrderModalComponent", function() { return CateringOrderModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "w8Fe");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _catering_item_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../catering-item.class */ "Ygd4");
/* harmony import */ var _catering_order_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../catering-order.class */ "lbut");
/* harmony import */ var _events_src_lib_event_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../events/src/lib/event.utilities */ "DjF3");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "KZIX");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../components/src/lib/icon/icon.component */ "ukpX");
/* harmony import */ var _components_src_lib_counter_counter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/src/lib/counter/counter.component */ "nMbc");
















function CateringOrderModalComponent_div_1_ng_container_1_ng_container_2_mat_tab_1_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Options Available ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { class: "material-icons", content: "add" }; };
function CateringOrderModalComponent_div_1_ng_container_1_ng_container_2_mat_tab_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CateringOrderModalComponent_div_1_ng_container_1_ng_container_2_mat_tab_1_div_2_div_4_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CateringOrderModalComponent_div_1_ng_container_1_ng_container_2_mat_tab_1_div_2_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const item_r11 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5); return ctx_r13.addItem(item_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "app-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r11.options.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 4, item_r11.unit_price / 100));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
} }
const _c1 = function () { return {}; };
function CateringOrderModalComponent_div_1_ng_container_1_ng_container_2_mat_tab_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-tab", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CateringOrderModalComponent_div_1_ng_container_1_ng_container_2_mat_tab_1_div_2_Template, 10, 7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", cat_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, ctx_r9.menu_items$) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c1))[cat_r8]);
} }
function CateringOrderModalComponent_div_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CateringOrderModalComponent_div_1_ng_container_1_ng_container_2_mat_tab_1_Template, 4, 5, "mat-tab", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cat_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r7.menu_items$) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c1))[cat_r8].length);
} }
function CateringOrderModalComponent_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-tab-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CateringOrderModalComponent_div_1_ng_container_1_ng_container_2_Template, 3, 4, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, ctx_r6.categories));
} }
function CateringOrderModalComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CateringOrderModalComponent_div_1_ng_container_1_Template, 4, 3, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.show_order_details)("ngIfElse", _r4);
} }
function CateringOrderModalComponent_mat_dialog_actions_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CateringOrderModalComponent_mat_dialog_actions_2_ng_container_2_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r19.confirmOrder(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Confirm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r16.order.item_count)("matBadge", ctx_r16.order.item_count)("matBadgeHidden", !ctx_r16.order.item_count);
} }
function CateringOrderModalComponent_mat_dialog_actions_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CateringOrderModalComponent_mat_dialog_actions_2_ng_template_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r21.show_order_details = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CateringOrderModalComponent_mat_dialog_actions_2_ng_template_3_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r23.saveOrder(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Save Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CateringOrderModalComponent_mat_dialog_actions_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-dialog-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CateringOrderModalComponent_mat_dialog_actions_2_ng_container_2_Template, 5, 3, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CateringOrderModalComponent_mat_dialog_actions_2_ng_template_3_Template, 4, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.show_order_details)("ngIfElse", _r17);
} }
function CateringOrderModalComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-spinner", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.loading, " ");
} }
function CateringOrderModalComponent_ng_template_5_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx_r26.optionsFor(item_r25));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", item_r25.options.length, " option", item_r25.options.length === 1 ? "" : "s", " selected ");
} }
function CateringOrderModalComponent_ng_template_5_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CateringOrderModalComponent_ng_template_5_div_4_div_4_Template, 2, 3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a-counter", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CateringOrderModalComponent_ng_template_5_div_4_Template_a_counter_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const item_r25 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r28.updateItemQuantity(item_r25, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r25.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r25.options.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 4, item_r25.total_cost / 100));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", item_r25.quantity);
} }
function CateringOrderModalComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Confirm Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CateringOrderModalComponent_ng_template_5_div_4_Template, 9, 6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.order.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r5.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("error", ctx_r5.form.controls.charge_code.touched && ctx_r5.form.controls.charge_code.invalid);
} }
function cateringItemAvailable(item, rules, event) {
    var _a;
    let is_available = true;
    for (const rule of rules) {
        if (item.category === rule.name ||
            item.tags.includes(rule.name) || ((_a = event.space) === null || _a === void 0 ? void 0 : _a.zones.includes(rule.name)) ||
            rule.name === '*') {
            let matches = 0;
            for (const condition of rule.rules) {
                const date = new Date(event.date);
                switch (condition[0]) {
                    case 'after_hour':
                        matches += Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["isAfter"])(date, Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["setHours"])(date, condition[1])) ? 1 : 0;
                        break;
                    case 'before_hour':
                        matches += Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["isBefore"])(date, Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["setHours"])(date, condition[1])) ? 1 : 0;
                        break;
                    case 'min_length':
                        matches += event.duration >= Object(_events_src_lib_event_utilities__WEBPACK_IMPORTED_MODULE_8__["stringToMinutes"])(condition[1]) ? 1 : 0;
                        break;
                    case 'max_length':
                        matches += event.duration <= Object(_events_src_lib_event_utilities__WEBPACK_IMPORTED_MODULE_8__["stringToMinutes"])(condition[1]) ? 1 : 0;
                        break;
                    case 'visitor_type':
                        matches += event.visitor_type === condition[1] ? 1 : 0;
                        break;
                    default:
                        matches++;
                }
            }
            is_available = matches >= rule.rules.length;
        }
    }
    return is_available;
}
class CateringOrderModalComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_9__["BaseClass"] {
    constructor(_data) {
        super();
        this._data = _data;
        /** Emitter for events on the modal */
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Whether changes are being saved */
        this.loading = '';
        this.loading = 'Loading menu...';
        this.menu_items$ = this._data.menu.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((list) => {
            const categories = Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_9__["unique"])(list.map((item) => item.category));
            const map = {};
            for (const cat of categories) {
                map[cat] = list.filter((item) => item.category === cat &&
                    cateringItemAvailable(item, this.rules, this.order.event));
            }
            return map;
        }));
        this.order = new _catering_order_class__WEBPACK_IMPORTED_MODULE_7__["CateringOrder"](this._data.order);
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            charge_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.order.charge_code, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
        });
        this.subscription('charge_code', this.form.controls.charge_code.valueChanges.subscribe((value) => (this.order = new _catering_order_class__WEBPACK_IMPORTED_MODULE_7__["CateringOrder"](Object.assign(Object.assign({}, this.order), { charge_code: value })))));
        this.subscription('loading', this._data.loading.subscribe((state) => (this.loading = state ? 'Loading menu...' : '')));
        this.loading = 'Loading menu...';
        this.timeout('loading', () => (this.loading = ''), 1000);
    }
    /** List of categories for the active menu */
    get categories() {
        return this._data.menu.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((list) => Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_9__["unique"])(list.map((item) => item.category))));
    }
    ngOnInit() {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.rules = yield this._data.getCateringConfig((_b = (_a = this.order.event.space) === null || _a === void 0 ? void 0 : _a.level) === null || _b === void 0 ? void 0 : _b.parent_id);
        });
    }
    addItem(item, choose_options = true) {
        var _a;
        const old_item = this.order.items.find((itm) => itm.id === item.id &&
            itm.options.length ===
                itm.options.reduce((c, o) => c + (item.options.find((opt) => o.id === opt.id) ? 1 : 0), 0));
        if (choose_options && ((_a = item.options) === null || _a === void 0 ? void 0 : _a.length)) {
            this._data.selectOptions(item.options).then((options) => {
                const new_item = new _catering_item_class__WEBPACK_IMPORTED_MODULE_6__["CateringItem"](Object.assign(Object.assign({}, item), { options }));
                this.addItem(new_item, false);
            });
        }
        else if (old_item) {
            this.order = new _catering_order_class__WEBPACK_IMPORTED_MODULE_7__["CateringOrder"](Object.assign(Object.assign({}, this.order), { items: this.order.items
                    .filter((i) => i !== old_item && i.options.length === old_item.options.length)
                    .concat([new _catering_item_class__WEBPACK_IMPORTED_MODULE_6__["CateringItem"](Object.assign(Object.assign({}, item), { quantity: old_item.quantity + 1 }))]) }));
        }
        else {
            this.order = new _catering_order_class__WEBPACK_IMPORTED_MODULE_7__["CateringOrder"](Object.assign(Object.assign({}, this.order), { items: this.order.items.concat([new _catering_item_class__WEBPACK_IMPORTED_MODULE_6__["CateringItem"](Object.assign(Object.assign({}, item), { quantity: 1 }))]) }));
        }
    }
    updateItemQuantity(item, amount) {
        const old_item = this.order.items.find((itm) => itm.id === item.id &&
            item.options.length ===
                item.options.reduce((c, o) => c + (itm.options.find((opt) => o.id === opt.id) ? 1 : 0), 0));
        let items = [...this.order.items];
        if (old_item) {
            items = this.order.items
                .filter((i) => i.id !== item.id)
                .concat([new _catering_item_class__WEBPACK_IMPORTED_MODULE_6__["CateringItem"](Object.assign(Object.assign({}, item), { quantity: amount }))]);
        }
        else {
            items = this.order.items.concat([new _catering_item_class__WEBPACK_IMPORTED_MODULE_6__["CateringItem"](Object.assign(Object.assign({}, item), { quantity: amount }))]);
        }
        items.sort((a, b) => a.name.localeCompare(b.name));
        this.order = new _catering_order_class__WEBPACK_IMPORTED_MODULE_7__["CateringOrder"](Object.assign(Object.assign({}, this.order), { items }));
    }
    optionsFor(item) {
        return item.options.map((i) => i.name).join('\n');
    }
    saveOrder() {
        this.form.markAllAsTouched();
        if (this.form.valid) {
            this.event.emit({ reason: 'done', metadata: { order: this.order } });
        }
    }
    confirmOrder() {
        this.show_order_details = true;
    }
}
CateringOrderModalComponent.ɵfac = function CateringOrderModalComponent_Factory(t) { return new (t || CateringOrderModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
CateringOrderModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CateringOrderModalComponent, selectors: [["app-catering-order-modal"]], outputs: { event: "event" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 3, consts: [["class", "main", 4, "ngIf", "ngIfElse"], [4, "ngIf"], ["load_state", ""], ["order_details", ""], [1, "main"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], [3, "label", 4, "ngIf"], [3, "label"], [1, "list"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], [1, "details"], [1, "name"], ["class", "info no-underline", 4, "ngIf"], [1, "price"], ["mat-icon-button", "", 3, "click"], [3, "icon"], [1, "info", "no-underline"], ["order_actions", ""], ["mat-button", "", "mat-dialog-close", "", 1, "inverse"], ["mat-button", "", "matBadgeColor", "warn", 3, "disabled", "matBadge", "matBadgeHidden", "click"], ["mat-button", "", 1, "inverse", 3, "click"], ["mat-button", "", 3, "click"], [1, "body"], [1, "info-block"], [1, "icon"], ["diameter", "32"], [1, "text"], [1, "charge-code", 3, "formGroup"], ["formControlName", "charge_code", "placeholder", "Charge Code*", "required", ""], ["class", "info", 3, "matTooltip", 4, "ngIf"], [3, "ngModel", "ngModelChange"], [1, "info", 3, "matTooltip"]], template: function CateringOrderModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CateringOrderModalComponent_div_1_Template, 2, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CateringOrderModalComponent_mat_dialog_actions_2_Template, 5, 2, "mat-dialog-actions", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CateringOrderModalComponent_ng_template_3_Template, 6, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CateringOrderModalComponent_ng_template_5_Template, 7, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTab"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_12__["IconComponent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _components_src_lib_counter_counter_component__WEBPACK_IMPORTED_MODULE_13__["CounterComponent"]], styles: [".list[_ngcontent-%COMP%] {\n  height: 24em;\n  min-width: 24em;\n  max-width: calc(100vw - 1em);\n}\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.5em;\n  border-bottom: 1px solid #f0f0f0;\n}\nheader[_ngcontent-%COMP%] {\n  height: 3.25em;\n}\n.main[_ngcontent-%COMP%], mat-dialog-content[_ngcontent-%COMP%] {\n  min-width: 20em;\n}\n.name[_ngcontent-%COMP%], .details[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 50%;\n}\n.info[_ngcontent-%COMP%] {\n  font-size: 0.6em;\n  text-decoration: underline;\n}\n.no-underline[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.price[_ngcontent-%COMP%] {\n  background-color: #d04a02;\n  padding: 0.5em 1em;\n  border-radius: 4px;\n  font-size: 0.7em;\n  margin: 0 0.5em;\n  color: #fff;\n  font-weight: 500;\n}\nfooter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 8em;\n}\ninput[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding: 1em;\n  border: none;\n  border-radius: 0 !important;\n  border-top: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n  outline: none;\n  font-size: 1em;\n}\ninput[_ngcontent-%COMP%]:focus {\n  border: none;\n  border-top: 2px solid #d04a02;\n  border-bottom: 2px solid #d04a02;\n  box-shadow: none;\n}\ninput.error[_ngcontent-%COMP%]::-moz-placeholder {\n  color: rgba(244, 67, 54, 0.45);\n}\ninput.error[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: rgba(244, 67, 54, 0.45);\n}\ninput.error[_ngcontent-%COMP%]::placeholder {\n  color: rgba(244, 67, 54, 0.45);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC1zdHlsZXMvdmFyaWFibGVzLnNjc3MiLCJsaWJzL2NhdGVyaW5nL3NyYy9saWIvY2F0ZXJpbmctb3JkZXItbW9kYWwvY2F0ZXJpbmctb3JkZXItbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O3FCQUFBO0FBZUE7OzBCQUFBO0FBd0NBOztjQUFBO0FBYUE7O3NCQUFBO0FDbEVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQVdGO0FBUkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUFXRjtBQVJBO0VBQ0UsY0FBQTtBQVdGO0FBUkE7O0VBRUUsZUFBQTtBQVdGO0FBUkE7O0VBRUUsT0FBQTtFQUNBLGNBQUE7QUFXRjtBQVJBO0VBQ0UsZ0JBQUE7RUFDQSwwQkFBQTtBQVdGO0FBUkE7RUFDRSxxQkFBQTtBQVdGO0FBUkE7RUFDRSx5QkROYztFQ09kLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFXRjtBQVBFO0VBQ0UsY0FBQTtBQVVKO0FBTkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBU0Y7QUFSRTtFQUNFLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUFVSjtBQVBJO0VBQ0UsOEJBQUE7QUFTTjtBQVBJO0VBQ0UsOEJBQUE7QUFTTjtBQVBJO0VBQ0UsOEJBQUE7QUFTTiIsImZpbGUiOiJsaWJzL2NhdGVyaW5nL3NyYy9saWIvY2F0ZXJpbmctb3JkZXItbW9kYWwvY2F0ZXJpbmctb3JkZXItbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKj09PT09PT09PT09PT09PT09PSpcXFxufHwgQnJhbmRpbmcgQ29sb3VycyB8fFxuXFwqPT09PT09PT09PT09PT09PT09Ki9cblxuJHB3Yy1vcmFuZ2U6ICNEMDRBMDI7XG4kcHdjLXJvc2U6ICNEOTM5NTQ7XG4kcHdjLXJlZDogI0UwMzAxRTtcbiRwd2MteWVsbG93OiAjRkZCNjAwO1xuJHB3Yy10YW5nZXJpbmU6ICNFQjhDMDA7XG5cbiRsaWdodC1ncmV5OiAjZGRkZGRkO1xuXG4kYm94U2hhZG93OiAwIDFweCAzcHggMCByZ2JhKCMwMDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoIzAwMCwgMC4xNCksXG4gICAgMCAycHggMXB4IC0xcHggcmdiYSgjMDAwLCAwLjEyKTtcblxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICMyMWE0NTM7XG4kc3VjY2Vzcy1saWdodDogbGlnaHRlbigkc3VjY2VzcywgMTApO1xuJHN1Y2Nlc3MtZGFyazogZGFya2VuKCRzdWNjZXNzLCAxMCk7XG5cbiRwZW5kaW5nOiAjZmZiZjFmO1xuJHBlbmRpbmctbGlnaHQ6IGxpZ2h0ZW4oJHBlbmRpbmcsIDEwKTtcbiRwZW5kaW5nLWRhcms6IGRhcmtlbigkcGVuZGluZywgMTApO1xuXG4kZXJyb3I6ICNmNDQzMzY7XG4kZXJyb3ItbGlnaHQ6IGxpZ2h0ZW4oJGVycm9yLCAxMCk7XG4kZXJyb3ItZGFyazogZGFya2VuKCRlcnJvciwgMTApO1xuXG4kY29sb3ItcHJpbWFyeTogI2QwNGEwMjtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcblxuJGNvbG9yLXNlY29uZGFyeTogI2UwMzAxZTtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuXG4kYmctbGlnaHQ6ICNmMGYwZjA7XG4kYmctZGFyazogIzI2MzIzODtcbiRmb290ZXItYmFjazogIzI2MzIzODtcbiRncmV5OiAjOTY5Njk2O1xuXG4kY29sb3ItdGVybmFyeTogIzBhMGQyZTtcbiRjb2xvci1leHRlcm5hbDogIzE1MWM2YTtcblxuLy8gVHlwZSBjb2xvcnMgZm9yIGJvb2tpbmcgc3RhdHVzXG4kaW50ZXJuYWw6ICRjb2xvci1wcmltYXJ5O1xuJGV4dGVybmFsOiAkY29sb3ItZXh0ZXJuYWw7XG4kY2FuY2VsbGVkOiAkZ3JleTtcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250LXN0YWNrOiAnSGVsdmV0aWNhIE5ldWUnLCBSb2JvdG8sIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcblxuJGhlYWRpbmctZm9udDogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiRmb250OiAkZm9udC1zdGFjaztcblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTZweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuLmxpc3Qge1xuICBoZWlnaHQ6IDI0ZW07XG4gIG1pbi13aWR0aDogMjRlbTtcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gMWVtKTtcbn1cblxuLml0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XG59XG5cbmhlYWRlciB7XG4gIGhlaWdodDogMy4yNWVtO1xufVxuXG4ubWFpbixcbm1hdC1kaWFsb2ctY29udGVudCB7XG4gIG1pbi13aWR0aDogMjBlbTtcbn1cblxuLm5hbWUsXG4uZGV0YWlscyB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogNTAlO1xufVxuXG4uaW5mbyB7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ubm8tdW5kZXJsaW5lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ucHJpY2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIG1hcmdpbjogMCAwLjVlbTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmZvb3RlciB7XG4gIGJ1dHRvbiB7XG4gICAgbWluLXdpZHRoOiA4ZW07XG4gIH1cbn1cblxuaW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICAmOmZvY3VzIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICRjb2xvci1wcmltYXJ5O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkY29sb3ItcHJpbWFyeTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG4gICYuZXJyb3Ige1xuICAgICY6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6IHJnYmEoJGVycm9yLCAwLjQ1KTtcbiAgICB9XG4gICAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6IHJnYmEoJGVycm9yLCAwLjQ1KTtcbiAgICB9XG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6IHJnYmEoJGVycm9yLCAwLjQ1KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CateringOrderModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-catering-order-modal',
                templateUrl: './catering-order-modal.component.html',
                styleUrls: ['./catering-order-modal.component.scss'],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, { event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "Gbzf":
/*!*********************************************!*\
  !*** ./src/app/catering/catering.module.ts ***!
  \*********************************************/
/*! exports provided: CateringModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateringModule", function() { return CateringModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "KZIX");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/chips */ "S17y");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/ui.module */ "oRDy");
/* harmony import */ var _catering_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./catering.component */ "JYJz");
/* harmony import */ var _catering_topbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./catering-topbar.component */ "Ug2Q");
/* harmony import */ var _user_interfaces_catering__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @user-interfaces/catering */ "52zK");












const ROUTES = [
    { path: '', component: _catering_component__WEBPACK_IMPORTED_MODULE_7__["CateringComponent"] },
    { path: ':view', component: _catering_component__WEBPACK_IMPORTED_MODULE_7__["CateringComponent"] },
];
class CateringModule {
}
CateringModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CateringModule });
CateringModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CateringModule_Factory(t) { return new (t || CateringModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ui_ui_module__WEBPACK_IMPORTED_MODULE_6__["UIModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
            _user_interfaces_catering__WEBPACK_IMPORTED_MODULE_9__["SharedCateringModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(ROUTES),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CateringModule, { declarations: [_catering_component__WEBPACK_IMPORTED_MODULE_7__["CateringComponent"], _catering_topbar_component__WEBPACK_IMPORTED_MODULE_8__["CateringTopbarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ui_ui_module__WEBPACK_IMPORTED_MODULE_6__["UIModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
        _user_interfaces_catering__WEBPACK_IMPORTED_MODULE_9__["SharedCateringModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CateringModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_catering_component__WEBPACK_IMPORTED_MODULE_7__["CateringComponent"], _catering_topbar_component__WEBPACK_IMPORTED_MODULE_8__["CateringTopbarComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ui_ui_module__WEBPACK_IMPORTED_MODULE_6__["UIModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                    _user_interfaces_catering__WEBPACK_IMPORTED_MODULE_9__["SharedCateringModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(ROUTES),
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "HLeM":
/*!**********************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/catering/src/lib/catering-orders.service.ts ***!
  \**********************************************************************************************************/
/*! exports provided: CateringOrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateringOrdersService", function() { return CateringOrdersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "w8Fe");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _events_src_lib_event_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../events/src/lib/event.class */ "SUR7");
/* harmony import */ var _events_src_lib_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../events/src/lib/events.service */ "9hUz");
/* harmony import */ var _catering_order_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./catering-order.class */ "lbut");










function checkOrder(order, filters) {
    const s = (filters.search || '').toLowerCase();
    return !!order.items.find((item) => item.name.toLowerCase().includes(s) ||
        !!item.options.find((option) => option.name.toLowerCase().includes(s)));
}
class CateringOrdersService extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["BaseClass"] {
    constructor(_events) {
        super();
        this._events = _events;
        this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this._orders = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this._filters = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ count: 0 });
        this._update = this._filters.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((filters) => {
            this._loading.next(true);
            const start = Math.floor(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["startOfDay"])(new Date(filters.date || Date.now())).valueOf() / 1000);
            const end = Math.floor(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["endOfDay"])(new Date(filters.date || Date.now())).valueOf() / 1000);
            return this._events.query({
                zone_ids: (filters.zones || []).join(','),
                period_start: start,
                period_end: end,
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((events) => {
            return Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["flatten"])(events.map((event) => event.catering));
        }));
        /** Observable for loading status of orders */
        this.loading = this._loading.asObservable();
        /** Observable for list of orders */
        this.orders = this._orders.asObservable();
        /** Filtered list of catering orders */
        this.filtered = this._orders.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((list) => list.filter((order) => checkOrder(order, this._filters.getValue()))));
        this.subscription('changes', this._update.subscribe((orders) => {
            this._loading.next(false);
            this._orders.next(orders);
        }));
    }
    /** Order filters */
    get filters() {
        return this._filters.getValue();
    }
    /** Order filters */
    set filters(filters) {
        this._filters.next(filters);
    }
    /** Start polling for catering orders */
    startPolling(delay = 15 * 1000) {
        this.interval('polling', () => {
            const filters = this._filters.getValue();
            this._filters.next(Object.assign(Object.assign({}, filters), { count: filters.count + 1 }));
        }, delay);
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
        const updated_order = new _catering_order_class__WEBPACK_IMPORTED_MODULE_7__["CateringOrder"](Object.assign(Object.assign({}, order), { status }));
        const event = new _events_src_lib_event_class__WEBPACK_IMPORTED_MODULE_5__["CalendarEvent"](Object.assign(Object.assign({}, order.event), { catering: [
                ...order.event.catering.filter((o) => o.id !== order.id),
                updated_order
            ].map((i) => new _catering_order_class__WEBPACK_IMPORTED_MODULE_7__["CateringOrder"](Object.assign({}, i))) }));
        return this._events.patch(event.id, event);
    }
}
CateringOrdersService.ɵfac = function CateringOrdersService_Factory(t) { return new (t || CateringOrdersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_events_src_lib_events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"])); };
CateringOrdersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CateringOrdersService, factory: CateringOrdersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CateringOrdersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _events_src_lib_events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"] }]; }, null); })();


/***/ }),

/***/ "I6F0":
/*!******************************************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/catering/src/lib/catering-options-modal/catering-options-modal.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: CateringOptionsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateringOptionsModalComponent", function() { return CateringOptionsModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/src/lib/icon/icon.component */ "ukpX");







function CateringOptionsModalComponent_div_7_ng_container_4_mat_radio_button_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opt_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" +", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, opt_r6.unit_price / 100), " ");
} }
function CateringOptionsModalComponent_div_7_ng_container_4_mat_radio_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CateringOptionsModalComponent_div_7_ng_container_4_mat_radio_button_4_div_4_Template, 3, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", opt_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](opt_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", opt_r6.unit_price);
} }
function CateringOptionsModalComponent_div_7_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-radio-group", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CateringOptionsModalComponent_div_7_ng_container_4_Template_mat_radio_group_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const group_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.updateGroupOption(group_r1, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-radio-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CateringOptionsModalComponent_div_7_ng_container_4_mat_radio_button_4_Template, 5, 3, "mat-radio-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const group_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r1.options);
} }
function CateringOptionsModalComponent_div_7_ng_template_5_mat_checkbox_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opt_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" +", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, opt_r14.unit_price / 100), " ");
} }
function CateringOptionsModalComponent_div_7_ng_template_5_mat_checkbox_0_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-checkbox", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CateringOptionsModalComponent_div_7_ng_template_5_mat_checkbox_0_Template_mat_checkbox_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const opt_r14 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return (ctx_r17.option_state[opt_r14.id] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CateringOptionsModalComponent_div_7_ng_template_5_mat_checkbox_0_div_4_Template, 3, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opt_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r13.option_state[opt_r14.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](opt_r14.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", opt_r14.unit_price);
} }
function CateringOptionsModalComponent_div_7_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CateringOptionsModalComponent_div_7_ng_template_5_mat_checkbox_0_Template, 5, 3, "mat-checkbox", 16);
} if (rf & 2) {
    const group_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r1.options);
} }
function CateringOptionsModalComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CateringOptionsModalComponent_div_7_ng_container_4_Template, 5, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CateringOptionsModalComponent_div_7_ng_template_5_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !group_r1.multiple)("ngIfElse", _r3);
} }
const _c0 = function () { return { class: "material-icons", content: "close" }; };
class CateringOptionsModalComponent {
    constructor(_data) {
        this._data = _data;
        /** Emitter for events on the modal */
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Mapping of options to their active state */
        this.option_state = {};
        const groups = Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["unique"])(this._data.options.map((i) => i.group || 'Other'));
        const group_list = [];
        for (const group of groups) {
            const options = this._data.options.filter((i) => i.group === group);
            group_list.push({
                name: group,
                multiple: !!options.find((i) => i.multiple),
                options,
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
        const options = this._data.options.filter((opt) => this.option_state[opt.id]);
        this.event.emit({ reason: 'done', metadata: { options } });
    }
}
CateringOptionsModalComponent.ɵfac = function CateringOptionsModalComponent_Factory(t) { return new (t || CateringOptionsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
CateringOptionsModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CateringOptionsModalComponent, selectors: [["app-catering-options-modal"]], outputs: { event: "event" }, decls: 12, vars: 3, consts: [["mat-icon-button", "", "mat-dialog-close", ""], [3, "icon"], ["class", "group", 4, "ngFor", "ngForOf"], ["mat-button", "", 3, "click"], [1, "group"], [1, "name"], [1, "options"], [4, "ngIf", "ngIfElse"], ["multi_options", ""], ["aria-label", "Select an option", 3, "ngModel", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "details"], ["class", "price", 4, "ngIf"], [1, "price"], [3, "ngModel", "ngModelChange", 4, "ngFor", "ngForOf"], [3, "ngModel", "ngModelChange"]], template: function CateringOptionsModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CateringOptionsModalComponent_div_7_Template, 7, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CateringOptionsModalComponent_Template_button_click_10_listener() { return ctx.saveOptions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.groups);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__["IconComponent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"]], styles: ["main[_ngcontent-%COMP%] {\n  min-height: 24em;\n  overflow: auto;\n}\n\n.group[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  padding: 0.25em 0 0.5em;\n}\n\n.name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  padding: 0.5em;\n}\n\nmat-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\nmat-radio-button[_ngcontent-%COMP%] {\n  margin: 0.25em 0;\n}\n\n.options[_ngcontent-%COMP%] {\n  padding-left: 1.5em;\n  display: flex;\n  flex-direction: column;\n}\n\n.details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.details[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 50%;\n  width: 16em;\n}\n\n.details[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  opacity: 0.65;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvY2F0ZXJpbmcvc3JjL2xpYi9jYXRlcmluZy1vcHRpb25zLW1vZGFsL2NhdGVyaW5nLW9wdGlvbnMtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBQUU7RUFDRSxPQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFFSjs7QUFBRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQUVKIiwiZmlsZSI6ImxpYnMvY2F0ZXJpbmcvc3JjL2xpYi9jYXRlcmluZy1vcHRpb25zLW1vZGFsL2NhdGVyaW5nLW9wdGlvbnMtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcbiAgbWluLWhlaWdodDogMjRlbTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5ncm91cCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiAuMjVlbSAwIC41ZW07XG59XG5cbi5uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogMC41ZW07XG59XG5cbm1hdC1yYWRpby1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbm1hdC1yYWRpby1idXR0b24ge1xuICBtYXJnaW46IC4yNWVtIDA7XG59XG5cbi5vcHRpb25zIHtcbiAgcGFkZGluZy1sZWZ0OiAxLjVlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLm5hbWUge1xuICAgIGZsZXg6IDE7XG4gICAgbWluLXdpZHRoOiA1MCU7XG4gICAgd2lkdGg6IDE2ZW07XG4gIH1cbiAgLnByaWNlIHtcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgb3BhY2l0eTogLjY1O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CateringOptionsModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-catering-options-modal',
                templateUrl: './catering-options-modal.component.html',
                styleUrls: ['./catering-options-modal.component.scss'],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, { event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "IePy":
/*!*********************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/catering/src/lib/catering-state.service.ts ***!
  \*********************************************************************************************************/
/*! exports provided: CateringStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateringStateService", function() { return CateringStateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/ts-client */ "/It1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @user-interfaces/organisation */ "dJst");
/* harmony import */ var _components_src_lib_confirm_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/src/lib/confirm-modal.component */ "mU/8");
/* harmony import */ var _catering_item_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./catering-item-modal.component */ "/LTK");
/* harmony import */ var _catering_option_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./catering-option-modal.component */ "3ihl");
/* harmony import */ var _catering_config_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./catering-config-modal.component */ "EDgw");
/* harmony import */ var _catering_item_class__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./catering-item.class */ "Ygd4");
/* harmony import */ var _catering_order_class__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./catering-order.class */ "lbut");
/* harmony import */ var _catering_order_modal_catering_order_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./catering-order-modal/catering-order-modal.component */ "EoLz");
/* harmony import */ var _catering_options_modal_catering_options_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./catering-options-modal/catering-options-modal.component */ "I6F0");



















class CateringStateService extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_6__["BaseClass"] {
    constructor(_org, _dialog) {
        super();
        this._org = _org;
        this._dialog = _dialog;
        /** Active menu */
        this._menu = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        /** Whether the menu for the active building is loading */
        this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        /** Currency code for the active building */
        this._currency = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('USD');
        /** Observable for the active menu */
        this.menu = this._menu.asObservable();
        /** Observable for whether the menu for the active building is loadingg */
        this.loading = this._loading.asObservable();
        /** Observable for the currency code of the active building */
        this.currency = this._currency.asObservable();
        this.subscription('building', this._org.active_building.subscribe((bld) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (bld) {
                const menu = (yield this.getCateringForZone(bld.id)).map((i) => new _catering_item_class__WEBPACK_IMPORTED_MODULE_12__["CateringItem"](i));
                this._currency.next(bld.currency || 'USD');
                this._menu.next(menu);
            }
        })));
    }
    get categories() {
        const menu = this._menu.getValue();
        return Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_6__["unique"])(menu.map((i) => i.category));
    }
    /**
     * Create/Edit catering order
     * @param order Order to manipulate
     */
    manageCateringOrder(order) {
        return new Promise((resolve) => {
            let is_resolved = false;
            const ref = this._dialog.open(_catering_order_modal_catering_order_modal_component__WEBPACK_IMPORTED_MODULE_14__["CateringOrderModalComponent"], {
                data: {
                    order,
                    menu: this.menu,
                    loading: this.loading,
                    getCateringConfig: (_) => this.getCateringConfig(_),
                    selectOptions: (_) => this.selectOptions(_),
                },
            });
            ref.componentInstance.event
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])((_) => _.reason === 'done'))
                .subscribe((event) => {
                is_resolved = true;
                resolve(event.metadata.order);
                ref.close();
            });
            ref.afterClosed().subscribe(() => (is_resolved ? '' : resolve(order)));
        });
    }
    addItem(item = new _catering_item_class__WEBPACK_IMPORTED_MODULE_12__["CateringItem"]()) {
        const ref = this._dialog.open(_catering_item_modal_component__WEBPACK_IMPORTED_MODULE_9__["CateringItemModalComponent"], Object.assign(Object.assign({}, _components_src_lib_confirm_modal_component__WEBPACK_IMPORTED_MODULE_8__["CONFIRM_METADATA"]), { data: {
                item,
                categories: this.categories,
            } }));
        ref.componentInstance.event
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])((_) => _.reason === 'done'))
            .subscribe((event) => {
            let menu = this._menu.getValue();
            const index = menu.findIndex((itm) => itm.id === item.id);
            if (index >= 0) {
                menu.splice(index, 1, event.metadata.item);
            }
            else {
                menu.push(event.metadata.item);
            }
            this.updateMenu(this._org.building.id, menu).then(() => {
                this._menu.next([...menu]);
                ref.close();
            }, () => (ref.componentInstance.loading = false));
        });
    }
    addOption(item, option = {}) {
        const types = Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_6__["unique"])(item.options.map((i) => i.group));
        const ref = this._dialog.open(_catering_option_modal_component__WEBPACK_IMPORTED_MODULE_10__["CateringItemOptionModalComponent"], Object.assign(Object.assign({}, _components_src_lib_confirm_modal_component__WEBPACK_IMPORTED_MODULE_8__["CONFIRM_METADATA"]), { data: {
                parent: item,
                option,
                types,
            } }));
        ref.componentInstance.event
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])((_) => _.reason === 'done'))
            .subscribe((event) => {
            let menu = this._menu.getValue();
            const index = menu.findIndex((itm) => itm.id === item.id);
            if (index >= 0) {
                menu.splice(index, 1, event.metadata.item);
            }
            else {
                menu.push(event.metadata.item);
            }
            this.updateMenu(this._org.building.id, menu).then(() => {
                this._menu.next([...menu]);
                ref.close();
            }, () => (ref.componentInstance.loading = false));
        });
    }
    selectOptions(options) {
        return new Promise((resolve, reject) => {
            let is_resolved = false;
            const ref = this._dialog.open(_catering_options_modal_catering_options_modal_component__WEBPACK_IMPORTED_MODULE_15__["CateringOptionsModalComponent"], Object.assign(Object.assign({}, _components_src_lib_confirm_modal_component__WEBPACK_IMPORTED_MODULE_8__["CONFIRM_METADATA"]), { data: {
                    options,
                } }));
            ref.componentInstance.event
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])((_) => _.reason === 'done'))
                .subscribe((event) => {
                is_resolved = true;
                resolve(event.metadata.options);
                ref.close();
            });
            ref.afterClosed().subscribe(() => (is_resolved ? '' : reject()));
        });
    }
    deleteItem(item) {
        const ref = this._dialog.open(_components_src_lib_confirm_modal_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalComponent"], Object.assign(Object.assign({}, _components_src_lib_confirm_modal_component__WEBPACK_IMPORTED_MODULE_8__["CONFIRM_METADATA"]), { data: {
                title: 'Delete Catering Item',
                content: `Are you sure you wish to remove the catering item ${item.name} from the menu?`,
                icon: { type: 'icon', class: 'material-icons', content: 'delete' },
            } }));
        ref.componentInstance.event
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])((_) => _.reason === 'done'))
            .subscribe(() => {
            const menu = this._menu.getValue().filter((itm) => item.id !== itm.id);
            this.updateMenu(this._org.building.id, menu).then(() => {
                this._menu.next([...menu]);
                ref.close();
            }, () => (ref.componentInstance.loading = ''));
        });
    }
    deleteOption(item, option) {
        const ref = this._dialog.open(_components_src_lib_confirm_modal_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalComponent"], Object.assign(Object.assign({}, _components_src_lib_confirm_modal_component__WEBPACK_IMPORTED_MODULE_8__["CONFIRM_METADATA"]), { data: {
                title: 'Delete Catering Item Option',
                content: `Are you sure you wish to remove the catering option "${option.name}" from "${item.name}"?`,
                icon: { type: 'icon', class: 'material-icons', content: 'delete' },
            } }));
        ref.componentInstance.event
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])((_) => _.reason === 'done'))
            .subscribe(() => {
            const menu = this._menu.getValue();
            menu.splice(menu.findIndex((itm) => itm.id === item.id), 1, new _catering_item_class__WEBPACK_IMPORTED_MODULE_12__["CateringItem"](Object.assign(Object.assign({}, item), { options: item.options.filter((opt) => opt.id !== option.id) })));
            this.updateMenu(this._org.building.id, menu).then(() => {
                this._menu.next([...menu]);
                ref.close();
            }, () => (ref.componentInstance.loading = ''));
        });
    }
    editConfig() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const config = yield this.getCateringConfig(this._org.building.id);
            const menu = this._menu.getValue();
            const types = Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_6__["unique"])(Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_6__["flatten"])(menu.map((i) => [i.category, ...i.tags])));
            const ref = this._dialog.open(_catering_config_modal_component__WEBPACK_IMPORTED_MODULE_11__["CateringConfigModalComponent"], {
                data: {
                    config,
                    types,
                },
            });
            ref.componentInstance.event
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])((_) => _.reason === 'done'))
                .subscribe((event) => {
                this.updateConfig(this._org.building.id, event.metadata).then(() => ref.close(), () => (ref.componentInstance.loading = false));
            });
        });
    }
    updateMenu(zone_id, menu) {
        return Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["updateMetadata"])(zone_id, {
            id: zone_id,
            name: 'catering',
            details: menu,
            description: `Catering menu for ${zone_id}`,
        }).toPromise();
    }
    getCateringForZone(zone_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const menu = (yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["showMetadata"])(zone_id, { name: 'catering' }).toPromise()).details;
            return menu instanceof Array ? menu : [];
        });
    }
    getCateringConfig(zone_id = this._org.building.id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const rules = (yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["showMetadata"])(zone_id, { name: 'catering_config' }).toPromise())
                .details;
            return rules instanceof Array ? rules : [];
        });
    }
    updateConfig(zone_id, config) {
        return Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["updateMetadata"])(zone_id, {
            id: zone_id,
            name: 'catering_config',
            details: config,
            description: `Catering menu config for ${zone_id}`,
        }).toPromise();
    }
    addItemToOrder(order, new_item) {
        let new_order;
        if (order) {
            let items = order.items;
            const match = items.find((item) => {
                var _a, _b;
                return item.id === new_item.id &&
                    ((_a = new_item.options) === null || _a === void 0 ? void 0 : _a.length) === ((_b = item.options) === null || _b === void 0 ? void 0 : _b.reduce((c, o) => c + (new_item.options.find((opt) => o.id === opt.id) ? 1 : 0), 0));
            });
            match
                ? (match.quantity += 1)
                : (items = items.concat([new _catering_item_class__WEBPACK_IMPORTED_MODULE_12__["CateringItem"](Object.assign(Object.assign({}, new_item), { quantity: 1 }))]));
            new_order = new _catering_order_class__WEBPACK_IMPORTED_MODULE_13__["CateringOrder"](Object.assign(Object.assign({}, order), { items, event: null }));
        }
        else {
            new_order = new _catering_order_class__WEBPACK_IMPORTED_MODULE_13__["CateringOrder"]({
                items: [Object.assign(Object.assign({}, new_item), { quantity: 1 })],
            });
        }
        return new_order;
    }
}
CateringStateService.ɵfac = function CateringStateService_Factory(t) { return new (t || CateringStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_7__["OrganisationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
CateringStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CateringStateService, factory: CateringStateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CateringStateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_7__["OrganisationService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "JYJz":
/*!************************************************!*\
  !*** ./src/app/catering/catering.component.ts ***!
  \************************************************/
/*! exports provided: CateringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateringComponent", function() { return CateringComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _ui_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/sidebar.component */ "UfDH");
/* harmony import */ var _catering_topbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./catering-topbar.component */ "Ug2Q");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _libs_catering_src_lib_catering_order_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/catering/src/lib/catering-order-list.component */ "s0U4");
/* harmony import */ var _libs_catering_src_lib_catering_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/catering/src/lib/catering-menu.component */ "ccdn");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "mFH5");











function CateringComponent_catering_order_list_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "catering-order-list", 5);
} }
function CateringComponent_catering_menu_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "catering-menu", 5);
} }
const _c0 = function () { return ["/catering", "menu"]; };
const _c1 = function () { return ["/catering", "orders"]; };
function CateringComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Menus and Pricing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " View and Edit Menus and Pricing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Today's Orders ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " View Catering Orders and their statuses upon arrival ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", "rgba(0,0,0, .45) url(assets/img/menus.jpg)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", "rgba(0,0,0, .45) url(assets/img/orders.jpg)");
} }
class CateringComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["BaseClass"] {
    constructor(_route) {
        super();
        this._route = _route;
    }
    ngOnInit() {
        this.subscription('route.params', this._route.paramMap.subscribe((params) => (this.page = params.has('view') ? params.get('view') : '')));
    }
}
CateringComponent.ɵfac = function CateringComponent_Factory(t) { return new (t || CateringComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
CateringComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CateringComponent, selectors: [["app-catering"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 3, consts: [[1, "relative", "w-full", "flex", "flex-col"], [1, "relative", "z-10"], [3, "ngSwitch"], ["class", "flex-1", 4, "ngSwitchCase"], ["class", "flex flex-1 items-center justify-center", 4, "ngSwitchDefault"], [1, "flex-1"], [1, "flex", "flex-1", "items-center", "justify-center"], ["matRipple", "", 1, "rounded", "flex", "flex-col", "items-center", "bg-white", "shadow", "text-black", 3, "routerLink"], ["name", "img", 1, "w-full", "flex", "flex-1", "items-center", "justify-center", "text-2xl", "text-white"], [1, "p-2", "h-14", "w-full", "text-sm", "text-center", "flex", "items-center", "justify-center"]], template: function CateringComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "catering-topbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CateringComponent_catering_order_list_4_Template, 1, 0, "catering-order-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CateringComponent_catering_menu_5_Template, 1, 0, "catering-menu", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CateringComponent_div_6_Template, 11, 8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.page);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "menu");
    } }, directives: [_ui_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _catering_topbar_component__WEBPACK_IMPORTED_MODULE_4__["CateringTopbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchDefault"], _libs_catering_src_lib_catering_order_list_component__WEBPACK_IMPORTED_MODULE_6__["CateringOrderListComponent"], _libs_catering_src_lib_catering_menu_component__WEBPACK_IMPORTED_MODULE_7__["CateringMenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRipple"]], styles: ["[_nghost-%COMP%] {\n                display: flex;\n                height: 100%;\n                width: 100%;\n            }\n\n            a[_ngcontent-%COMP%] {\n                width: 28rem;\n                height: 16rem;\n                margin-left: 0.5rem;\n                text-decoration: none;\n                transition: background 200ms;\n            }\n\n            a[_ngcontent-%COMP%]:hover {\n                background-color: #00000001 !important;\n            }\n\n            a[_ngcontent-%COMP%]:first-child {\n                margin: 0;\n            }\n\n            [name='img'][_ngcontent-%COMP%] {\n                background: rgba(0, 0, 0, 0.45);\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CateringComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-catering',
                template: `
        <sidebar></sidebar>
        <main class="relative w-full flex flex-col">
            <catering-topbar class="relative z-10"></catering-topbar>
            <ng-container [ngSwitch]="page">
                <catering-order-list
                    *ngSwitchCase="'orders'"
                    class="flex-1"
                ></catering-order-list>
                <catering-menu *ngSwitchCase="'menu'" class="flex-1"></catering-menu>
                <div *ngSwitchDefault class="flex flex-1 items-center justify-center">
                    <a
                        matRipple
                        class="rounded flex flex-col items-center bg-white shadow text-black"
                        [routerLink]="['/catering', 'menu']"
                    >
                        <div
                            name="img"
                            class="w-full flex flex-1 items-center justify-center text-2xl text-white"
                            [style.background]="'rgba(0,0,0, .45) url(assets/img/menus.jpg)'"
                        >
                            Menus and Pricing
                        </div>
                        <div
                            class="p-2 h-14 w-full text-sm text-center flex items-center justify-center"
                        >
                            View and Edit Menus and Pricing
                        </div>
                    </a>
                    <a
                        matRipple
                        class="rounded flex flex-col items-center bg-white shadow text-black"
                        [routerLink]="['/catering', 'orders']"
                    >
                        <div
                            name="img"
                            class="w-full flex flex-1 items-center justify-center text-2xl text-white"
                            [style.background]="'rgba(0,0,0, .45) url(assets/img/orders.jpg)'"
                        >
                            Today's Orders
                        </div>
                        <div
                            class="p-2 h-14 w-full text-sm text-center flex items-center justify-center"
                        >
                            View Catering Orders and their statuses upon arrival
                        </div>
                    </a>
                </div>
            </ng-container>
        </main>
    `,
                styles: [
                    `
            :host {
                display: flex;
                height: 100%;
                width: 100%;
            }

            a {
                width: 28rem;
                height: 16rem;
                margin-left: 0.5rem;
                text-decoration: none;
                transition: background 200ms;
            }

            a:hover {
                background-color: #00000001 !important;
            }

            a:first-child {
                margin: 0;
            }

            [name='img'] {
                background: rgba(0, 0, 0, 0.45);
            }
        `,
                ],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "KZIX":
/*!**********************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js ***!
  \**********************************************************************************************************************/
/*! exports provided: MAT_TABS_CONFIG, MAT_TAB_GROUP, MatInkBar, MatTab, MatTabBody, MatTabBodyPortal, MatTabChangeEvent, MatTabContent, MatTabGroup, MatTabHeader, MatTabLabel, MatTabLabelWrapper, MatTabLink, MatTabNav, MatTabsModule, _MAT_INK_BAR_POSITIONER, _MatTabBodyBase, _MatTabGroupBase, _MatTabHeaderBase, _MatTabLinkBase, _MatTabNavBase, matTabsAnimations, ɵangular_material_src_material_tabs_tabs_a, ɵangular_material_src_material_tabs_tabs_b, ɵangular_material_src_material_tabs_tabs_c, ɵangular_material_src_material_tabs_tabs_d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TABS_CONFIG", function() { return MAT_TABS_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TAB_GROUP", function() { return MAT_TAB_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatInkBar", function() { return MatInkBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTab", function() { return MatTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabBody", function() { return MatTabBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabBodyPortal", function() { return MatTabBodyPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabChangeEvent", function() { return MatTabChangeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabContent", function() { return MatTabContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabGroup", function() { return MatTabGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabHeader", function() { return MatTabHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabLabel", function() { return MatTabLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabLabelWrapper", function() { return MatTabLabelWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabLink", function() { return MatTabLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabNav", function() { return MatTabNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTabsModule", function() { return MatTabsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MAT_INK_BAR_POSITIONER", function() { return _MAT_INK_BAR_POSITIONER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatTabBodyBase", function() { return _MatTabBodyBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatTabGroupBase", function() { return _MatTabGroupBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatTabHeaderBase", function() { return _MatTabHeaderBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatTabLinkBase", function() { return _MatTabLinkBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatTabNavBase", function() { return _MatTabNavBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matTabsAnimations", function() { return matTabsAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_tabs_tabs_a", function() { return _MAT_INK_BAR_POSITIONER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_tabs_tabs_b", function() { return MAT_TAB_LABEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_tabs_tabs_c", function() { return MAT_TAB_CONTENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_tabs_tabs_d", function() { return MatPaginatedTabHeader; });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ "sg/T");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/observers */ "TKFd");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ "Sv/w");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "mFH5");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "5lCh");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ "E5oP");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ "f7+R");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/coercion */ "5XID");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/scrolling */ "qvOF");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/platform */ "cZZj");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/keycodes */ "fAiE");
















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token for the MatInkBar's Positioner. */










function MatTab_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0);
} }
const _c0 = ["*"];
function MatTabBody_ng_template_2_Template(rf, ctx) { }
const _c1 = function (a0) { return { animationDuration: a0 }; };
const _c2 = function (a0, a1) { return { value: a0, params: a1 }; };
const _c3 = ["tabBodyWrapper"];
const _c4 = ["tabHeader"];
function MatTabGroup_div_2_ng_template_2_ng_template_0_Template(rf, ctx) { }
function MatTabGroup_div_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MatTabGroup_div_2_ng_template_2_ng_template_0_Template, 0, 0, "ng-template", 9);
} if (rf & 2) {
    const tab_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cdkPortalOutlet", tab_r4.templateLabel);
} }
function MatTabGroup_div_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
} if (rf & 2) {
    const tab_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](tab_r4.textLabel);
} }
function MatTabGroup_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatTabGroup_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const tab_r4 = ctx.$implicit; const i_r5 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1); return ctx_r11._handleClick(tab_r4, _r0, i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MatTabGroup_div_2_ng_template_2_Template, 1, 1, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MatTabGroup_div_2_ng_template_3_Template, 1, 1, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-label-active", ctx_r1.selectedIndex == i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", ctx_r1._getTabLabelId(i_r5))("disabled", tab_r4.disabled)("matRippleDisabled", tab_r4.disabled || ctx_r1.disableRipple);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("tabIndex", ctx_r1._getTabIndex(tab_r4, i_r5))("aria-posinset", i_r5 + 1)("aria-setsize", ctx_r1._tabs.length)("aria-controls", ctx_r1._getTabContentId(i_r5))("aria-selected", ctx_r1.selectedIndex == i_r5)("aria-label", tab_r4.ariaLabel || null)("aria-labelledby", !tab_r4.ariaLabel && tab_r4.ariaLabelledby ? tab_r4.ariaLabelledby : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", tab_r4.templateLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !tab_r4.templateLabel);
} }
function MatTabGroup_mat_tab_body_5_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-tab-body", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("_onCentered", function MatTabGroup_mat_tab_body_5_Template_mat_tab_body__onCentered_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15._removeTabBodyWrapperHeight(); })("_onCentering", function MatTabGroup_mat_tab_body_5_Template_mat_tab_body__onCentering_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r17._setTabBodyWrapperHeight($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-body-active", ctx_r3.selectedIndex == i_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", ctx_r3._getTabContentId(i_r14))("content", tab_r13.content)("position", tab_r13.position)("origin", tab_r13.origin)("animationDuration", ctx_r3.animationDuration);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-labelledby", ctx_r3._getTabLabelId(i_r14));
} }
const _c5 = ["tabListContainer"];
const _c6 = ["tabList"];
const _c7 = ["nextPaginator"];
const _c8 = ["previousPaginator"];
const _c9 = ["mat-tab-nav-bar", ""];
const _MAT_INK_BAR_POSITIONER = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MatInkBarPositioner', {
    providedIn: 'root',
    factory: _MAT_INK_BAR_POSITIONER_FACTORY
});
/**
 * The default positioner function for the MatInkBar.
 * @docs-private
 */
function _MAT_INK_BAR_POSITIONER_FACTORY() {
    const method = (element) => ({
        left: element ? (element.offsetLeft || 0) + 'px' : '0',
        width: element ? (element.offsetWidth || 0) + 'px' : '0',
    });
    return method;
}
/**
 * The ink-bar is used to display and animate the line underneath the current active tab label.
 * @docs-private
 */
class MatInkBar {
    constructor(_elementRef, _ngZone, _inkBarPositioner, _animationMode) {
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._inkBarPositioner = _inkBarPositioner;
        this._animationMode = _animationMode;
    }
    /**
     * Calculates the styles from the provided element in order to align the ink-bar to that element.
     * Shows the ink bar if previously set as hidden.
     * @param element
     */
    alignToElement(element) {
        this.show();
        if (typeof requestAnimationFrame !== 'undefined') {
            this._ngZone.runOutsideAngular(() => {
                requestAnimationFrame(() => this._setStyles(element));
            });
        }
        else {
            this._setStyles(element);
        }
    }
    /** Shows the ink bar. */
    show() {
        this._elementRef.nativeElement.style.visibility = 'visible';
    }
    /** Hides the ink bar. */
    hide() {
        this._elementRef.nativeElement.style.visibility = 'hidden';
    }
    /**
     * Sets the proper styles to the ink bar element.
     * @param element
     */
    _setStyles(element) {
        const positions = this._inkBarPositioner(element);
        const inkBar = this._elementRef.nativeElement;
        inkBar.style.left = positions.left;
        inkBar.style.width = positions.width;
    }
}
MatInkBar.ɵfac = function MatInkBar_Factory(t) { return new (t || MatInkBar)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_MAT_INK_BAR_POSITIONER), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8)); };
MatInkBar.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: MatInkBar, selectors: [["mat-ink-bar"]], hostAttrs: [1, "mat-ink-bar"], hostVars: 2, hostBindings: function MatInkBar_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    } } });
MatInkBar.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_MAT_INK_BAR_POSITIONER,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"],] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatInkBar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
                selector: 'mat-ink-bar',
                host: {
                    'class': 'mat-ink-bar',
                    '[class._mat-animation-noopable]': `_animationMode === 'NoopAnimations'`
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_MAT_INK_BAR_POSITIONER]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token that can be used to reference instances of `MatTabContent`. It serves as
 * alternative token to the actual `MatTabContent` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_TAB_CONTENT = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MatTabContent');
/** Decorates the `ng-template` tags and reads out the template from it. */
class MatTabContent {
    constructor(
    /** Content for the tab. */ template) {
        this.template = template;
    }
}
MatTabContent.ɵfac = function MatTabContent_Factory(t) { return new (t || MatTabContent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"])); };
MatTabContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: MatTabContent, selectors: [["", "matTabContent", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{ provide: MAT_TAB_CONTENT, useExisting: MatTabContent }])] });
MatTabContent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
                selector: '[matTabContent]',
                providers: [{ provide: MAT_TAB_CONTENT, useExisting: MatTabContent }]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token that can be used to reference instances of `MatTabLabel`. It serves as
 * alternative token to the actual `MatTabLabel` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_TAB_LABEL = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MatTabLabel');
/** Used to flag tab labels for use with the portal directive */
class MatTabLabel extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortal"] {
}
MatTabLabel.ɵfac = function MatTabLabel_Factory(t) { return ɵMatTabLabel_BaseFactory(t || MatTabLabel); };
MatTabLabel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: MatTabLabel, selectors: [["", "mat-tab-label", ""], ["", "matTabLabel", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{ provide: MAT_TAB_LABEL, useExisting: MatTabLabel }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]] });
const ɵMatTabLabel_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](MatTabLabel);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabLabel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
                selector: '[mat-tab-label], [matTabLabel]',
                providers: [{ provide: MAT_TAB_LABEL, useExisting: MatTabLabel }]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatTab.
/** @docs-private */
class MatTabBase {
}
const _MatTabMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisabled"])(MatTabBase);
/**
 * Used to provide a tab group to a tab without causing a circular dependency.
 * @docs-private
 */
const MAT_TAB_GROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MAT_TAB_GROUP');
class MatTab extends _MatTabMixinBase {
    constructor(_viewContainerRef, 
    /**
     * @deprecated `_closestTabGroup` parameter to become required.
     * @breaking-change 10.0.0
     */
    _closestTabGroup) {
        super();
        this._viewContainerRef = _viewContainerRef;
        this._closestTabGroup = _closestTabGroup;
        /** Plain text label for the tab, used when there is no template label. */
        this.textLabel = '';
        /** Portal that will be the hosted content of the tab */
        this._contentPortal = null;
        /** Emits whenever the internal state of the tab changes. */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * The relatively indexed position where 0 represents the center, negative is left, and positive
         * represents the right.
         */
        this.position = null;
        /**
         * The initial relatively index origin of the tab if it was created and selected after there
         * was already a selected tab. Provides context of what position the tab should originate from.
         */
        this.origin = null;
        /**
         * Whether the tab is currently active.
         */
        this.isActive = false;
    }
    /** Content for the tab label given by `<ng-template mat-tab-label>`. */
    get templateLabel() { return this._templateLabel; }
    set templateLabel(value) { this._setTemplateLabelInput(value); }
    /** @docs-private */
    get content() {
        return this._contentPortal;
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('textLabel') || changes.hasOwnProperty('disabled')) {
            this._stateChanges.next();
        }
    }
    ngOnDestroy() {
        this._stateChanges.complete();
    }
    ngOnInit() {
        this._contentPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["TemplatePortal"](this._explicitContent || this._implicitContent, this._viewContainerRef);
    }
    /**
     * This has been extracted to a util because of TS 4 and VE.
     * View Engine doesn't support property rename inheritance.
     * TS 4.0 doesn't allow properties to override accessors or vice-versa.
     * @docs-private
     */
    _setTemplateLabelInput(value) {
        // Only update the templateLabel via query if there is actually
        // a MatTabLabel found. This works around an issue where a user may have
        // manually set `templateLabel` during creation mode, which would then get clobbered
        // by `undefined` when this query resolves.
        if (value) {
            this._templateLabel = value;
        }
    }
}
MatTab.ɵfac = function MatTab_Factory(t) { return new (t || MatTab)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_TAB_GROUP, 8)); };
MatTab.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MatTab, selectors: [["mat-tab"]], contentQueries: function MatTab_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MAT_TAB_LABEL, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticContentQuery"](dirIndex, MAT_TAB_CONTENT, true, _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.templateLabel = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._explicitContent = _t.first);
    } }, viewQuery: function MatTab_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._implicitContent = _t.first);
    } }, inputs: { disabled: "disabled", textLabel: ["label", "textLabel"], ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"] }, exportAs: ["matTab"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function MatTab_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MatTab_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2 });
MatTab.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [MAT_TAB_GROUP,] }] }
];
MatTab.propDecorators = {
    templateLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: [MAT_TAB_LABEL,] }],
    _explicitContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: [MAT_TAB_CONTENT, { read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], static: true },] }],
    _implicitContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], { static: true },] }],
    textLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['label',] }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['aria-label',] }],
    ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['aria-labelledby',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTab, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'mat-tab',
                template: "<!-- Create a template for the content of the <mat-tab> so that we can grab a reference to this\n    TemplateRef and use it in a Portal to render the tab content in the appropriate place in the\n    tab-group. -->\n<ng-template><ng-content></ng-content></ng-template>\n",
                inputs: ['disabled'],
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].Default,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                exportAs: 'matTab'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [MAT_TAB_GROUP]
            }] }]; }, { textLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['label']
        }], templateLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
            args: [MAT_TAB_LABEL]
        }], _explicitContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
            args: [MAT_TAB_CONTENT, { read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], static: true }]
        }], _implicitContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], { static: true }]
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['aria-label']
        }], ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['aria-labelledby']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Animations used by the Material tabs.
 * @docs-private
 */
const matTabsAnimations = {
    /** Animation translates a tab along the X axis. */
    translateTab: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('translateTab', [
        // Note: transitions to `none` instead of 0, because some browsers might blur the content.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('center, void, left-origin-center, right-origin-center', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ transform: 'none' })),
        // If the tab is either on the left or right, we additionally add a `min-height` of 1px
        // in order to ensure that the element has a height before its state changes. This is
        // necessary because Chrome does seem to skip the transition in RTL mode if the element does
        // not have a static height and is not rendered. See related issue: #9465
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('left', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ transform: 'translate3d(-100%, 0, 0)', minHeight: '1px' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('right', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ transform: 'translate3d(100%, 0, 0)', minHeight: '1px' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('* => left, * => right, left => center, right => center', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('void => left-origin-center', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ transform: 'translate3d(-100%, 0, 0)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('void => right-origin-center', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ transform: 'translate3d(100%, 0, 0)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')
        ])
    ])
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * The portal host directive for the contents of the tab.
 * @docs-private
 */
class MatTabBodyPortal extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortalOutlet"] {
    constructor(componentFactoryResolver, viewContainerRef, _host, 
    /**
     * @deprecated `_document` parameter to be made required.
     * @breaking-change 9.0.0
     */
    _document) {
        super(componentFactoryResolver, viewContainerRef, _document);
        this._host = _host;
        /** Subscription to events for when the tab body begins centering. */
        this._centeringSub = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        /** Subscription to events for when the tab body finishes leaving from center position. */
        this._leavingSub = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
    }
    /** Set initial visibility or set up subscription for changing visibility. */
    ngOnInit() {
        super.ngOnInit();
        this._centeringSub = this._host._beforeCentering
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(this._host._isCenterPosition(this._host._position)))
            .subscribe((isCentering) => {
            if (isCentering && !this.hasAttached()) {
                this.attach(this._host._content);
            }
        });
        this._leavingSub = this._host._afterLeavingCenter.subscribe(() => {
            this.detach();
        });
    }
    /** Clean up centering subscription. */
    ngOnDestroy() {
        super.ngOnDestroy();
        this._centeringSub.unsubscribe();
        this._leavingSub.unsubscribe();
    }
}
MatTabBodyPortal.ɵfac = function MatTabBodyPortal_Factory(t) { return new (t || MatTabBodyPortal)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(() => MatTabBody)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])); };
MatTabBodyPortal.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: MatTabBodyPortal, selectors: [["", "matTabBodyHost", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]] });
MatTabBodyPortal.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"] },
    { type: MatTabBody, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(() => MatTabBody),] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabBodyPortal, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
                selector: '[matTabBodyHost]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"] }, { type: MatTabBody, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(() => MatTabBody)]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }] }]; }, null); })();
/**
 * Base class with all of the `MatTabBody` functionality.
 * @docs-private
 */
class _MatTabBodyBase {
    constructor(_elementRef, _dir, changeDetectorRef) {
        this._elementRef = _elementRef;
        this._dir = _dir;
        /** Subscription to the directionality change observable. */
        this._dirChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        /** Emits when an animation on the tab is complete. */
        this._translateTabComplete = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /** Event emitted when the tab begins to animate towards the center as the active tab. */
        this._onCentering = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /** Event emitted before the centering of the tab begins. */
        this._beforeCentering = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /** Event emitted before the centering of the tab begins. */
        this._afterLeavingCenter = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /** Event emitted when the tab completes its animation towards the center. */
        this._onCentered = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](true);
        // Note that the default value will always be overwritten by `MatTabBody`, but we need one
        // anyway to prevent the animations module from throwing an error if the body is used on its own.
        /** Duration for the tab's animation. */
        this.animationDuration = '500ms';
        if (_dir) {
            this._dirChangeSubscription = _dir.change.subscribe((dir) => {
                this._computePositionAnimationState(dir);
                changeDetectorRef.markForCheck();
            });
        }
        // Ensure that we get unique animation events, because the `.done` callback can get
        // invoked twice in some browsers. See https://github.com/angular/angular/issues/24084.
        this._translateTabComplete.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["distinctUntilChanged"])((x, y) => {
            return x.fromState === y.fromState && x.toState === y.toState;
        })).subscribe(event => {
            // If the transition to the center is complete, emit an event.
            if (this._isCenterPosition(event.toState) && this._isCenterPosition(this._position)) {
                this._onCentered.emit();
            }
            if (this._isCenterPosition(event.fromState) && !this._isCenterPosition(this._position)) {
                this._afterLeavingCenter.emit();
            }
        });
    }
    /** The shifted index position of the tab body, where zero represents the active center tab. */
    set position(position) {
        this._positionIndex = position;
        this._computePositionAnimationState();
    }
    /**
     * After initialized, check if the content is centered and has an origin. If so, set the
     * special position states that transition the tab from the left or right before centering.
     */
    ngOnInit() {
        if (this._position == 'center' && this.origin != null) {
            this._position = this._computePositionFromOrigin(this.origin);
        }
    }
    ngOnDestroy() {
        this._dirChangeSubscription.unsubscribe();
        this._translateTabComplete.complete();
    }
    _onTranslateTabStarted(event) {
        const isCentering = this._isCenterPosition(event.toState);
        this._beforeCentering.emit(isCentering);
        if (isCentering) {
            this._onCentering.emit(this._elementRef.nativeElement.clientHeight);
        }
    }
    /** The text direction of the containing app. */
    _getLayoutDirection() {
        return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    /** Whether the provided position state is considered center, regardless of origin. */
    _isCenterPosition(position) {
        return position == 'center' ||
            position == 'left-origin-center' ||
            position == 'right-origin-center';
    }
    /** Computes the position state that will be used for the tab-body animation trigger. */
    _computePositionAnimationState(dir = this._getLayoutDirection()) {
        if (this._positionIndex < 0) {
            this._position = dir == 'ltr' ? 'left' : 'right';
        }
        else if (this._positionIndex > 0) {
            this._position = dir == 'ltr' ? 'right' : 'left';
        }
        else {
            this._position = 'center';
        }
    }
    /**
     * Computes the position state based on the specified origin position. This is used if the
     * tab is becoming visible immediately after creation.
     */
    _computePositionFromOrigin(origin) {
        const dir = this._getLayoutDirection();
        if ((dir == 'ltr' && origin <= 0) || (dir == 'rtl' && origin > 0)) {
            return 'left-origin-center';
        }
        return 'right-origin-center';
    }
}
_MatTabBodyBase.ɵfac = function _MatTabBodyBase_Factory(t) { return new (t || _MatTabBodyBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"])); };
_MatTabBodyBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: _MatTabBodyBase, inputs: { animationDuration: "animationDuration", position: "position", _content: ["content", "_content"], origin: "origin" }, outputs: { _onCentering: "_onCentering", _beforeCentering: "_beforeCentering", _afterLeavingCenter: "_afterLeavingCenter", _onCentered: "_onCentered" } });
_MatTabBodyBase.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }
];
_MatTabBodyBase.propDecorators = {
    _onCentering: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    _beforeCentering: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    _afterLeavingCenter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    _onCentered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    _content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['content',] }],
    origin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    animationDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_MatTabBodyBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }]; }, { _onCentering: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], _beforeCentering: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], _afterLeavingCenter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], _onCentered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], animationDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], _content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['content']
        }], origin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }] }); })();
/**
 * Wrapper for the contents of a tab.
 * @docs-private
 */
class MatTabBody extends _MatTabBodyBase {
    constructor(elementRef, dir, changeDetectorRef) {
        super(elementRef, dir, changeDetectorRef);
    }
}
MatTabBody.ɵfac = function MatTabBody_Factory(t) { return new (t || MatTabBody)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"])); };
MatTabBody.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MatTabBody, selectors: [["mat-tab-body"]], viewQuery: function MatTabBody_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalHostDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._portalHost = _t.first);
    } }, hostAttrs: [1, "mat-tab-body"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 6, consts: [[1, "mat-tab-body-content"], ["content", ""], ["matTabBodyHost", ""]], template: function MatTabBody_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("@translateTab.start", function MatTabBody_Template_div_animation_translateTab_start_0_listener($event) { return ctx._onTranslateTabStarted($event); })("@translateTab.done", function MatTabBody_Template_div_animation_translateTab_done_0_listener($event) { return ctx._translateTabComplete.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MatTabBody_ng_template_2_Template, 0, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@translateTab", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](3, _c2, ctx._position, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c1, ctx.animationDuration)));
    } }, directives: [MatTabBodyPortal], styles: [".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}\n"], encapsulation: 2, data: { animation: [matTabsAnimations.translateTab] } });
MatTabBody.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }
];
MatTabBody.propDecorators = {
    _portalHost: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalHostDirective"],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabBody, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'mat-tab-body',
                template: "<div class=\"mat-tab-body-content\" #content\n     [@translateTab]=\"{\n        value: _position,\n        params: {animationDuration: animationDuration}\n     }\"\n     (@translateTab.start)=\"_onTranslateTabStarted($event)\"\n     (@translateTab.done)=\"_translateTabComplete.next($event)\">\n  <ng-template matTabBodyHost></ng-template>\n</div>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].Default,
                animations: [matTabsAnimations.translateTab],
                host: {
                    'class': 'mat-tab-body'
                },
                styles: [".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }]; }, { _portalHost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalHostDirective"]]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token that can be used to provide the default options the tabs module. */
const MAT_TABS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MAT_TABS_CONFIG');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Used to generate unique ID's for each tab component */
let nextId = 0;
/** A simple change event emitted on focus or selection changes. */
class MatTabChangeEvent {
}
// Boilerplate for applying mixins to MatTabGroup.
/** @docs-private */
class MatTabGroupMixinBase {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
const _MatTabGroupMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisableRipple"])(MatTabGroupMixinBase), 'primary');
/**
 * Base class with all of the `MatTabGroupBase` functionality.
 * @docs-private
 */
class _MatTabGroupBase extends _MatTabGroupMixinBase {
    constructor(elementRef, _changeDetectorRef, defaultConfig, _animationMode) {
        super(elementRef);
        this._changeDetectorRef = _changeDetectorRef;
        this._animationMode = _animationMode;
        /** All of the tabs that belong to the group. */
        this._tabs = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["QueryList"]();
        /** The tab index that should be selected after the content has been checked. */
        this._indexToSelect = 0;
        /** Snapshot of the height of the tab body wrapper before another tab is activated. */
        this._tabBodyWrapperHeight = 0;
        /** Subscription to tabs being added/removed. */
        this._tabsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        /** Subscription to changes in the tab labels. */
        this._tabLabelSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        this._dynamicHeight = false;
        this._selectedIndex = null;
        /** Position of the tab header. */
        this.headerPosition = 'above';
        /** Output to enable support for two-way binding on `[(selectedIndex)]` */
        this.selectedIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /** Event emitted when focus has changed within a tab group. */
        this.focusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /** Event emitted when the body animation has completed */
        this.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /** Event emitted when the tab selection has changed. */
        this.selectedTabChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](true);
        this._groupId = nextId++;
        this.animationDuration = defaultConfig && defaultConfig.animationDuration ?
            defaultConfig.animationDuration : '500ms';
        this.disablePagination = defaultConfig && defaultConfig.disablePagination != null ?
            defaultConfig.disablePagination : false;
    }
    /** Whether the tab group should grow to the size of the active tab. */
    get dynamicHeight() { return this._dynamicHeight; }
    set dynamicHeight(value) { this._dynamicHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceBooleanProperty"])(value); }
    /** The index of the active tab. */
    get selectedIndex() { return this._selectedIndex; }
    set selectedIndex(value) {
        this._indexToSelect = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceNumberProperty"])(value, null);
    }
    /** Duration for the tab animation. Will be normalized to milliseconds if no units are set. */
    get animationDuration() { return this._animationDuration; }
    set animationDuration(value) {
        this._animationDuration = /^\d+$/.test(value) ? value + 'ms' : value;
    }
    /** Background color of the tab group. */
    get backgroundColor() { return this._backgroundColor; }
    set backgroundColor(value) {
        const nativeElement = this._elementRef.nativeElement;
        nativeElement.classList.remove(`mat-background-${this.backgroundColor}`);
        if (value) {
            nativeElement.classList.add(`mat-background-${value}`);
        }
        this._backgroundColor = value;
    }
    /**
     * After the content is checked, this component knows what tabs have been defined
     * and what the selected index should be. This is where we can know exactly what position
     * each tab should be in according to the new selected index, and additionally we know how
     * a new selected tab should transition in (from the left or right).
     */
    ngAfterContentChecked() {
        // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
        // the amount of tabs changes before the actual change detection runs.
        const indexToSelect = this._indexToSelect = this._clampTabIndex(this._indexToSelect);
        // If there is a change in selected index, emit a change event. Should not trigger if
        // the selected index has not yet been initialized.
        if (this._selectedIndex != indexToSelect) {
            const isFirstRun = this._selectedIndex == null;
            if (!isFirstRun) {
                this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
            }
            // Changing these values after change detection has run
            // since the checked content may contain references to them.
            Promise.resolve().then(() => {
                this._tabs.forEach((tab, index) => tab.isActive = index === indexToSelect);
                if (!isFirstRun) {
                    this.selectedIndexChange.emit(indexToSelect);
                }
            });
        }
        // Setup the position for each tab and optionally setup an origin on the next selected tab.
        this._tabs.forEach((tab, index) => {
            tab.position = index - indexToSelect;
            // If there is already a selected tab, then set up an origin for the next selected tab
            // if it doesn't have one already.
            if (this._selectedIndex != null && tab.position == 0 && !tab.origin) {
                tab.origin = indexToSelect - this._selectedIndex;
            }
        });
        if (this._selectedIndex !== indexToSelect) {
            this._selectedIndex = indexToSelect;
            this._changeDetectorRef.markForCheck();
        }
    }
    ngAfterContentInit() {
        this._subscribeToAllTabChanges();
        this._subscribeToTabLabels();
        // Subscribe to changes in the amount of tabs, in order to be
        // able to re-render the content as new tabs are added or removed.
        this._tabsSubscription = this._tabs.changes.subscribe(() => {
            const indexToSelect = this._clampTabIndex(this._indexToSelect);
            // Maintain the previously-selected tab if a new tab is added or removed and there is no
            // explicit change that selects a different tab.
            if (indexToSelect === this._selectedIndex) {
                const tabs = this._tabs.toArray();
                for (let i = 0; i < tabs.length; i++) {
                    if (tabs[i].isActive) {
                        // Assign both to the `_indexToSelect` and `_selectedIndex` so we don't fire a changed
                        // event, otherwise the consumer may end up in an infinite loop in some edge cases like
                        // adding a tab within the `selectedIndexChange` event.
                        this._indexToSelect = this._selectedIndex = i;
                        break;
                    }
                }
            }
            this._changeDetectorRef.markForCheck();
        });
    }
    /** Listens to changes in all of the tabs. */
    _subscribeToAllTabChanges() {
        // Since we use a query with `descendants: true` to pick up the tabs, we may end up catching
        // some that are inside of nested tab groups. We filter them out manually by checking that
        // the closest group to the tab is the current one.
        this._allTabs.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(this._allTabs))
            .subscribe((tabs) => {
            this._tabs.reset(tabs.filter(tab => {
                // @breaking-change 10.0.0 Remove null check for `_closestTabGroup`
                // once it becomes a required parameter in MatTab.
                return !tab._closestTabGroup || tab._closestTabGroup === this;
            }));
            this._tabs.notifyOnChanges();
        });
    }
    ngOnDestroy() {
        this._tabs.destroy();
        this._tabsSubscription.unsubscribe();
        this._tabLabelSubscription.unsubscribe();
    }
    /** Re-aligns the ink bar to the selected tab element. */
    realignInkBar() {
        if (this._tabHeader) {
            this._tabHeader._alignInkBarToSelectedTab();
        }
    }
    _focusChanged(index) {
        this.focusChange.emit(this._createChangeEvent(index));
    }
    _createChangeEvent(index) {
        const event = new MatTabChangeEvent;
        event.index = index;
        if (this._tabs && this._tabs.length) {
            event.tab = this._tabs.toArray()[index];
        }
        return event;
    }
    /**
     * Subscribes to changes in the tab labels. This is needed, because the @Input for the label is
     * on the MatTab component, whereas the data binding is inside the MatTabGroup. In order for the
     * binding to be updated, we need to subscribe to changes in it and trigger change detection
     * manually.
     */
    _subscribeToTabLabels() {
        if (this._tabLabelSubscription) {
            this._tabLabelSubscription.unsubscribe();
        }
        this._tabLabelSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(...this._tabs.map(tab => tab._stateChanges))
            .subscribe(() => this._changeDetectorRef.markForCheck());
    }
    /** Clamps the given index to the bounds of 0 and the tabs length. */
    _clampTabIndex(index) {
        // Note the `|| 0`, which ensures that values like NaN can't get through
        // and which would otherwise throw the component into an infinite loop
        // (since Math.max(NaN, 0) === NaN).
        return Math.min(this._tabs.length - 1, Math.max(index || 0, 0));
    }
    /** Returns a unique id for each tab label element */
    _getTabLabelId(i) {
        return `mat-tab-label-${this._groupId}-${i}`;
    }
    /** Returns a unique id for each tab content element */
    _getTabContentId(i) {
        return `mat-tab-content-${this._groupId}-${i}`;
    }
    /**
     * Sets the height of the body wrapper to the height of the activating tab if dynamic
     * height property is true.
     */
    _setTabBodyWrapperHeight(tabHeight) {
        if (!this._dynamicHeight || !this._tabBodyWrapperHeight) {
            return;
        }
        const wrapper = this._tabBodyWrapper.nativeElement;
        wrapper.style.height = this._tabBodyWrapperHeight + 'px';
        // This conditional forces the browser to paint the height so that
        // the animation to the new height can have an origin.
        if (this._tabBodyWrapper.nativeElement.offsetHeight) {
            wrapper.style.height = tabHeight + 'px';
        }
    }
    /** Removes the height of the tab body wrapper. */
    _removeTabBodyWrapperHeight() {
        const wrapper = this._tabBodyWrapper.nativeElement;
        this._tabBodyWrapperHeight = wrapper.clientHeight;
        wrapper.style.height = '';
        this.animationDone.emit();
    }
    /** Handle click events, setting new selected index if appropriate. */
    _handleClick(tab, tabHeader, index) {
        if (!tab.disabled) {
            this.selectedIndex = tabHeader.focusIndex = index;
        }
    }
    /** Retrieves the tabindex for the tab. */
    _getTabIndex(tab, idx) {
        if (tab.disabled) {
            return null;
        }
        return this.selectedIndex === idx ? 0 : -1;
    }
}
_MatTabGroupBase.ɵfac = function _MatTabGroupBase_Factory(t) { return new (t || _MatTabGroupBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_TABS_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8)); };
_MatTabGroupBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: _MatTabGroupBase, inputs: { headerPosition: "headerPosition", animationDuration: "animationDuration", disablePagination: "disablePagination", dynamicHeight: "dynamicHeight", selectedIndex: "selectedIndex", backgroundColor: "backgroundColor" }, outputs: { selectedIndexChange: "selectedIndexChange", focusChange: "focusChange", animationDone: "animationDone", selectedTabChange: "selectedTabChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]] });
_MatTabGroupBase.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [MAT_TABS_CONFIG,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"],] }] }
];
_MatTabGroupBase.propDecorators = {
    dynamicHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    selectedIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    headerPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    animationDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    disablePagination: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    backgroundColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    selectedIndexChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    focusChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    animationDone: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    selectedTabChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_MatTabGroupBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [MAT_TABS_CONFIG]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }] }]; }, { headerPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], selectedIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], focusChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], animationDone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], selectedTabChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], animationDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], disablePagination: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], dynamicHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], selectedIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }] }); })();
/**
 * Material design tab-group component. Supports basic tab pairs (label + content) and includes
 * animated ink-bar, keyboard navigation, and screen reader.
 * See: https://material.io/design/components/tabs.html
 */
class MatTabGroup extends _MatTabGroupBase {
    constructor(elementRef, changeDetectorRef, defaultConfig, animationMode) {
        super(elementRef, changeDetectorRef, defaultConfig, animationMode);
    }
}
MatTabGroup.ɵfac = function MatTabGroup_Factory(t) { return new (t || MatTabGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_TABS_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8)); };
MatTabGroup.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MatTabGroup, selectors: [["mat-tab-group"]], contentQueries: function MatTabGroup_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MatTab, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._allTabs = _t);
    } }, viewQuery: function MatTabGroup_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c4, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabBodyWrapper = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabHeader = _t.first);
    } }, hostAttrs: [1, "mat-tab-group"], hostVars: 4, hostBindings: function MatTabGroup_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-group-dynamic-height", ctx.dynamicHeight)("mat-tab-group-inverted-header", ctx.headerPosition === "below");
    } }, inputs: { color: "color", disableRipple: "disableRipple" }, exportAs: ["matTabGroup"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
                provide: MAT_TAB_GROUP,
                useExisting: MatTabGroup
            }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 7, consts: [[3, "selectedIndex", "disableRipple", "disablePagination", "indexFocused", "selectFocusedIndex"], ["tabHeader", ""], ["class", "mat-tab-label mat-focus-indicator", "role", "tab", "matTabLabelWrapper", "", "mat-ripple", "", "cdkMonitorElementFocus", "", 3, "id", "mat-tab-label-active", "disabled", "matRippleDisabled", "click", 4, "ngFor", "ngForOf"], [1, "mat-tab-body-wrapper"], ["tabBodyWrapper", ""], ["role", "tabpanel", 3, "id", "mat-tab-body-active", "content", "position", "origin", "animationDuration", "_onCentered", "_onCentering", 4, "ngFor", "ngForOf"], ["role", "tab", "matTabLabelWrapper", "", "mat-ripple", "", "cdkMonitorElementFocus", "", 1, "mat-tab-label", "mat-focus-indicator", 3, "id", "disabled", "matRippleDisabled", "click"], [1, "mat-tab-label-content"], [3, "ngIf"], [3, "cdkPortalOutlet"], ["role", "tabpanel", 3, "id", "content", "position", "origin", "animationDuration", "_onCentered", "_onCentering"]], template: function MatTabGroup_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-tab-header", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("indexFocused", function MatTabGroup_Template_mat_tab_header_indexFocused_0_listener($event) { return ctx._focusChanged($event); })("selectFocusedIndex", function MatTabGroup_Template_mat_tab_header_selectFocusedIndex_0_listener($event) { return ctx.selectedIndex = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MatTabGroup_div_2_Template, 4, 14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, MatTabGroup_mat_tab_body_5_Template, 1, 8, "mat-tab-body", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selectedIndex", ctx.selectedIndex || 0)("disableRipple", ctx.disableRipple)("disablePagination", ctx.disablePagination);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx._tabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx._tabs);
    } }, directives: function () { return [MatTabHeader, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], MatTabLabelWrapper, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["CdkMonitorFocus"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortalOutlet"], MatTabBody]; }, styles: [".mat-tab-group{display:flex;flex-direction:column}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-tab-body-wrapper{transition:none;animation:none}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}\n"], encapsulation: 2 });
MatTabGroup.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [MAT_TABS_CONFIG,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"],] }] }
];
MatTabGroup.propDecorators = {
    _allTabs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [MatTab, { descendants: true },] }],
    _tabBodyWrapper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['tabBodyWrapper',] }],
    _tabHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['tabHeader',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabGroup, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'mat-tab-group',
                exportAs: 'matTabGroup',
                template: "<mat-tab-header #tabHeader\n               [selectedIndex]=\"selectedIndex || 0\"\n               [disableRipple]=\"disableRipple\"\n               [disablePagination]=\"disablePagination\"\n               (indexFocused)=\"_focusChanged($event)\"\n               (selectFocusedIndex)=\"selectedIndex = $event\">\n  <div class=\"mat-tab-label mat-focus-indicator\" role=\"tab\" matTabLabelWrapper mat-ripple cdkMonitorElementFocus\n       *ngFor=\"let tab of _tabs; let i = index\"\n       [id]=\"_getTabLabelId(i)\"\n       [attr.tabIndex]=\"_getTabIndex(tab, i)\"\n       [attr.aria-posinset]=\"i + 1\"\n       [attr.aria-setsize]=\"_tabs.length\"\n       [attr.aria-controls]=\"_getTabContentId(i)\"\n       [attr.aria-selected]=\"selectedIndex == i\"\n       [attr.aria-label]=\"tab.ariaLabel || null\"\n       [attr.aria-labelledby]=\"(!tab.ariaLabel && tab.ariaLabelledby) ? tab.ariaLabelledby : null\"\n       [class.mat-tab-label-active]=\"selectedIndex == i\"\n       [disabled]=\"tab.disabled\"\n       [matRippleDisabled]=\"tab.disabled || disableRipple\"\n       (click)=\"_handleClick(tab, tabHeader, i)\">\n\n\n    <div class=\"mat-tab-label-content\">\n      <!-- If there is a label template, use it. -->\n      <ng-template [ngIf]=\"tab.templateLabel\">\n        <ng-template [cdkPortalOutlet]=\"tab.templateLabel\"></ng-template>\n      </ng-template>\n\n      <!-- If there is not a label template, fall back to the text label. -->\n      <ng-template [ngIf]=\"!tab.templateLabel\">{{tab.textLabel}}</ng-template>\n    </div>\n  </div>\n</mat-tab-header>\n\n<div\n  class=\"mat-tab-body-wrapper\"\n  [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\"\n  #tabBodyWrapper>\n  <mat-tab-body role=\"tabpanel\"\n               *ngFor=\"let tab of _tabs; let i = index\"\n               [id]=\"_getTabContentId(i)\"\n               [attr.aria-labelledby]=\"_getTabLabelId(i)\"\n               [class.mat-tab-body-active]=\"selectedIndex == i\"\n               [content]=\"tab.content!\"\n               [position]=\"tab.position!\"\n               [origin]=\"tab.origin\"\n               [animationDuration]=\"animationDuration\"\n               (_onCentered)=\"_removeTabBodyWrapperHeight()\"\n               (_onCentering)=\"_setTabBodyWrapperHeight($event)\">\n  </mat-tab-body>\n</div>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].Default,
                inputs: ['color', 'disableRipple'],
                providers: [{
                        provide: MAT_TAB_GROUP,
                        useExisting: MatTabGroup
                    }],
                host: {
                    'class': 'mat-tab-group',
                    '[class.mat-tab-group-dynamic-height]': 'dynamicHeight',
                    '[class.mat-tab-group-inverted-header]': 'headerPosition === "below"'
                },
                styles: [".mat-tab-group{display:flex;flex-direction:column}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-tab-body-wrapper{transition:none;animation:none}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [MAT_TABS_CONFIG]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }] }]; }, { _allTabs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
            args: [MatTab, { descendants: true }]
        }], _tabBodyWrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['tabBodyWrapper']
        }], _tabHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['tabHeader']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatTabLabelWrapper.
/** @docs-private */
class MatTabLabelWrapperBase {
}
const _MatTabLabelWrapperMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisabled"])(MatTabLabelWrapperBase);
/**
 * Used in the `mat-tab-group` view to display tab labels.
 * @docs-private
 */
class MatTabLabelWrapper extends _MatTabLabelWrapperMixinBase {
    constructor(elementRef) {
        super();
        this.elementRef = elementRef;
    }
    /** Sets focus on the wrapper element */
    focus() {
        this.elementRef.nativeElement.focus();
    }
    getOffsetLeft() {
        return this.elementRef.nativeElement.offsetLeft;
    }
    getOffsetWidth() {
        return this.elementRef.nativeElement.offsetWidth;
    }
}
MatTabLabelWrapper.ɵfac = function MatTabLabelWrapper_Factory(t) { return new (t || MatTabLabelWrapper)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"])); };
MatTabLabelWrapper.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: MatTabLabelWrapper, selectors: [["", "matTabLabelWrapper", ""]], hostVars: 3, hostBindings: function MatTabLabelWrapper_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-disabled", !!ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-disabled", ctx.disabled);
    } }, inputs: { disabled: "disabled" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]] });
MatTabLabelWrapper.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabLabelWrapper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
                selector: '[matTabLabelWrapper]',
                inputs: ['disabled'],
                host: {
                    '[class.mat-tab-disabled]': 'disabled',
                    '[attr.aria-disabled]': '!!disabled'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Config used to bind passive event listeners */
const passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["normalizePassiveListenerOptions"])({ passive: true });
/**
 * The distance in pixels that will be overshot when scrolling a tab label into view. This helps
 * provide a small affordance to the label next to it.
 */
const EXAGGERATED_OVERSCROLL = 60;
/**
 * Amount of milliseconds to wait before starting to scroll the header automatically.
 * Set a little conservatively in order to handle fake events dispatched on touch devices.
 */
const HEADER_SCROLL_DELAY = 650;
/**
 * Interval in milliseconds at which to scroll the header
 * while the user is holding their pointer.
 */
const HEADER_SCROLL_INTERVAL = 100;
/**
 * Base class for a tab header that supported pagination.
 * @docs-private
 */
class MatPaginatedTabHeader {
    constructor(_elementRef, _changeDetectorRef, _viewportRuler, _dir, _ngZone, 
    /**
     * @deprecated @breaking-change 9.0.0 `_platform` and `_animationMode`
     * parameters to become required.
     */
    _platform, _animationMode) {
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._viewportRuler = _viewportRuler;
        this._dir = _dir;
        this._ngZone = _ngZone;
        this._platform = _platform;
        this._animationMode = _animationMode;
        /** The distance in pixels that the tab labels should be translated to the left. */
        this._scrollDistance = 0;
        /** Whether the header should scroll to the selected index after the view has been checked. */
        this._selectedIndexChanged = false;
        /** Emits when the component is destroyed. */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /** Whether the controls for pagination should be displayed */
        this._showPaginationControls = false;
        /** Whether the tab list can be scrolled more towards the end of the tab label list. */
        this._disableScrollAfter = true;
        /** Whether the tab list can be scrolled more towards the beginning of the tab label list. */
        this._disableScrollBefore = true;
        /** Stream that will stop the automated scrolling. */
        this._stopScrolling = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * Whether pagination should be disabled. This can be used to avoid unnecessary
         * layout recalculations if it's known that pagination won't be required.
         */
        this.disablePagination = false;
        this._selectedIndex = 0;
        /** Event emitted when the option is selected. */
        this.selectFocusedIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /** Event emitted when a label is focused. */
        this.indexFocused = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        // Bind the `mouseleave` event on the outside since it doesn't change anything in the view.
        _ngZone.runOutsideAngular(() => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(_elementRef.nativeElement, 'mouseleave')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed))
                .subscribe(() => {
                this._stopInterval();
            });
        });
    }
    /** The index of the active tab. */
    get selectedIndex() { return this._selectedIndex; }
    set selectedIndex(value) {
        value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceNumberProperty"])(value);
        if (this._selectedIndex != value) {
            this._selectedIndexChanged = true;
            this._selectedIndex = value;
            if (this._keyManager) {
                this._keyManager.updateActiveItem(value);
            }
        }
    }
    ngAfterViewInit() {
        // We need to handle these events manually, because we want to bind passive event listeners.
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this._previousPaginator.nativeElement, 'touchstart', passiveEventListenerOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed))
            .subscribe(() => {
            this._handlePaginatorPress('before');
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this._nextPaginator.nativeElement, 'touchstart', passiveEventListenerOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed))
            .subscribe(() => {
            this._handlePaginatorPress('after');
        });
    }
    ngAfterContentInit() {
        const dirChange = this._dir ? this._dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(null);
        const resize = this._viewportRuler.change(150);
        const realign = () => {
            this.updatePagination();
            this._alignInkBarToSelectedTab();
        };
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusKeyManager"](this._items)
            .withHorizontalOrientation(this._getLayoutDirection())
            .withHomeAndEnd()
            .withWrap();
        this._keyManager.updateActiveItem(this._selectedIndex);
        // Defer the first call in order to allow for slower browsers to lay out the elements.
        // This helps in cases where the user lands directly on a page with paginated tabs.
        typeof requestAnimationFrame !== 'undefined' ? requestAnimationFrame(realign) : realign();
        // On dir change or window resize, realign the ink bar and update the orientation of
        // the key manager if the direction has changed.
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(dirChange, resize, this._items.changes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(() => {
            // We need to defer this to give the browser some time to recalculate the element dimensions.
            Promise.resolve().then(realign);
            this._keyManager.withHorizontalOrientation(this._getLayoutDirection());
        });
        // If there is a change in the focus key manager we need to emit the `indexFocused`
        // event in order to provide a public event that notifies about focus changes. Also we realign
        // the tabs container by scrolling the new focused tab into the visible section.
        this._keyManager.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(newFocusIndex => {
            this.indexFocused.emit(newFocusIndex);
            this._setTabFocus(newFocusIndex);
        });
    }
    ngAfterContentChecked() {
        // If the number of tab labels have changed, check if scrolling should be enabled
        if (this._tabLabelCount != this._items.length) {
            this.updatePagination();
            this._tabLabelCount = this._items.length;
            this._changeDetectorRef.markForCheck();
        }
        // If the selected index has changed, scroll to the label and check if the scrolling controls
        // should be disabled.
        if (this._selectedIndexChanged) {
            this._scrollToLabel(this._selectedIndex);
            this._checkScrollingControls();
            this._alignInkBarToSelectedTab();
            this._selectedIndexChanged = false;
            this._changeDetectorRef.markForCheck();
        }
        // If the scroll distance has been changed (tab selected, focused, scroll controls activated),
        // then translate the header to reflect this.
        if (this._scrollDistanceChanged) {
            this._updateTabScrollPosition();
            this._scrollDistanceChanged = false;
            this._changeDetectorRef.markForCheck();
        }
    }
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
        this._stopScrolling.complete();
    }
    /** Handles keyboard events on the header. */
    _handleKeydown(event) {
        // We don't handle any key bindings with a modifier key.
        if (Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["hasModifierKey"])(event)) {
            return;
        }
        switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["ENTER"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["SPACE"]:
                if (this.focusIndex !== this.selectedIndex) {
                    this.selectFocusedIndex.emit(this.focusIndex);
                    this._itemSelected(event);
                }
                break;
            default:
                this._keyManager.onKeydown(event);
        }
    }
    /**
     * Callback for when the MutationObserver detects that the content has changed.
     */
    _onContentChanges() {
        const textContent = this._elementRef.nativeElement.textContent;
        // We need to diff the text content of the header, because the MutationObserver callback
        // will fire even if the text content didn't change which is inefficient and is prone
        // to infinite loops if a poorly constructed expression is passed in (see #14249).
        if (textContent !== this._currentTextContent) {
            this._currentTextContent = textContent || '';
            // The content observer runs outside the `NgZone` by default, which
            // means that we need to bring the callback back in ourselves.
            this._ngZone.run(() => {
                this.updatePagination();
                this._alignInkBarToSelectedTab();
                this._changeDetectorRef.markForCheck();
            });
        }
    }
    /**
     * Updates the view whether pagination should be enabled or not.
     *
     * WARNING: Calling this method can be very costly in terms of performance. It should be called
     * as infrequently as possible from outside of the Tabs component as it causes a reflow of the
     * page.
     */
    updatePagination() {
        this._checkPaginationEnabled();
        this._checkScrollingControls();
        this._updateTabScrollPosition();
    }
    /** Tracks which element has focus; used for keyboard navigation */
    get focusIndex() {
        return this._keyManager ? this._keyManager.activeItemIndex : 0;
    }
    /** When the focus index is set, we must manually send focus to the correct label */
    set focusIndex(value) {
        if (!this._isValidIndex(value) || this.focusIndex === value || !this._keyManager) {
            return;
        }
        this._keyManager.setActiveItem(value);
    }
    /**
     * Determines if an index is valid.  If the tabs are not ready yet, we assume that the user is
     * providing a valid index and return true.
     */
    _isValidIndex(index) {
        if (!this._items) {
            return true;
        }
        const tab = this._items ? this._items.toArray()[index] : null;
        return !!tab && !tab.disabled;
    }
    /**
     * Sets focus on the HTML element for the label wrapper and scrolls it into the view if
     * scrolling is enabled.
     */
    _setTabFocus(tabIndex) {
        if (this._showPaginationControls) {
            this._scrollToLabel(tabIndex);
        }
        if (this._items && this._items.length) {
            this._items.toArray()[tabIndex].focus();
            // Do not let the browser manage scrolling to focus the element, this will be handled
            // by using translation. In LTR, the scroll left should be 0. In RTL, the scroll width
            // should be the full width minus the offset width.
            const containerEl = this._tabListContainer.nativeElement;
            const dir = this._getLayoutDirection();
            if (dir == 'ltr') {
                containerEl.scrollLeft = 0;
            }
            else {
                containerEl.scrollLeft = containerEl.scrollWidth - containerEl.offsetWidth;
            }
        }
    }
    /** The layout direction of the containing app. */
    _getLayoutDirection() {
        return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    /** Performs the CSS transformation on the tab list that will cause the list to scroll. */
    _updateTabScrollPosition() {
        if (this.disablePagination) {
            return;
        }
        const scrollDistance = this.scrollDistance;
        const platform = this._platform;
        const translateX = this._getLayoutDirection() === 'ltr' ? -scrollDistance : scrollDistance;
        // Don't use `translate3d` here because we don't want to create a new layer. A new layer
        // seems to cause flickering and overflow in Internet Explorer. For example, the ink bar
        // and ripples will exceed the boundaries of the visible tab bar.
        // See: https://github.com/angular/components/issues/10276
        // We round the `transform` here, because transforms with sub-pixel precision cause some
        // browsers to blur the content of the element.
        this._tabList.nativeElement.style.transform = `translateX(${Math.round(translateX)}px)`;
        // Setting the `transform` on IE will change the scroll offset of the parent, causing the
        // position to be thrown off in some cases. We have to reset it ourselves to ensure that
        // it doesn't get thrown off. Note that we scope it only to IE and Edge, because messing
        // with the scroll position throws off Chrome 71+ in RTL mode (see #14689).
        // @breaking-change 9.0.0 Remove null check for `platform` after it can no longer be undefined.
        if (platform && (platform.TRIDENT || platform.EDGE)) {
            this._tabListContainer.nativeElement.scrollLeft = 0;
        }
    }
    /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */
    get scrollDistance() { return this._scrollDistance; }
    set scrollDistance(value) {
        this._scrollTo(value);
    }
    /**
     * Moves the tab list in the 'before' or 'after' direction (towards the beginning of the list or
     * the end of the list, respectively). The distance to scroll is computed to be a third of the
     * length of the tab list view window.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    _scrollHeader(direction) {
        const viewLength = this._tabListContainer.nativeElement.offsetWidth;
        // Move the scroll distance one-third the length of the tab list's viewport.
        const scrollAmount = (direction == 'before' ? -1 : 1) * viewLength / 3;
        return this._scrollTo(this._scrollDistance + scrollAmount);
    }
    /** Handles click events on the pagination arrows. */
    _handlePaginatorClick(direction) {
        this._stopInterval();
        this._scrollHeader(direction);
    }
    /**
     * Moves the tab list such that the desired tab label (marked by index) is moved into view.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    _scrollToLabel(labelIndex) {
        if (this.disablePagination) {
            return;
        }
        const selectedLabel = this._items ? this._items.toArray()[labelIndex] : null;
        if (!selectedLabel) {
            return;
        }
        // The view length is the visible width of the tab labels.
        const viewLength = this._tabListContainer.nativeElement.offsetWidth;
        const { offsetLeft, offsetWidth } = selectedLabel.elementRef.nativeElement;
        let labelBeforePos, labelAfterPos;
        if (this._getLayoutDirection() == 'ltr') {
            labelBeforePos = offsetLeft;
            labelAfterPos = labelBeforePos + offsetWidth;
        }
        else {
            labelAfterPos = this._tabList.nativeElement.offsetWidth - offsetLeft;
            labelBeforePos = labelAfterPos - offsetWidth;
        }
        const beforeVisiblePos = this.scrollDistance;
        const afterVisiblePos = this.scrollDistance + viewLength;
        if (labelBeforePos < beforeVisiblePos) {
            // Scroll header to move label to the before direction
            this.scrollDistance -= beforeVisiblePos - labelBeforePos + EXAGGERATED_OVERSCROLL;
        }
        else if (labelAfterPos > afterVisiblePos) {
            // Scroll header to move label to the after direction
            this.scrollDistance += labelAfterPos - afterVisiblePos + EXAGGERATED_OVERSCROLL;
        }
    }
    /**
     * Evaluate whether the pagination controls should be displayed. If the scroll width of the
     * tab list is wider than the size of the header container, then the pagination controls should
     * be shown.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    _checkPaginationEnabled() {
        if (this.disablePagination) {
            this._showPaginationControls = false;
        }
        else {
            const isEnabled = this._tabList.nativeElement.scrollWidth > this._elementRef.nativeElement.offsetWidth;
            if (!isEnabled) {
                this.scrollDistance = 0;
            }
            if (isEnabled !== this._showPaginationControls) {
                this._changeDetectorRef.markForCheck();
            }
            this._showPaginationControls = isEnabled;
        }
    }
    /**
     * Evaluate whether the before and after controls should be enabled or disabled.
     * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
     * before button. If the header is at the end of the list (scroll distance is equal to the
     * maximum distance we can scroll), then disable the after button.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    _checkScrollingControls() {
        if (this.disablePagination) {
            this._disableScrollAfter = this._disableScrollBefore = true;
        }
        else {
            // Check if the pagination arrows should be activated.
            this._disableScrollBefore = this.scrollDistance == 0;
            this._disableScrollAfter = this.scrollDistance == this._getMaxScrollDistance();
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance. This
     * is equal to the difference in width between the tab list container and tab header container.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    _getMaxScrollDistance() {
        const lengthOfTabList = this._tabList.nativeElement.scrollWidth;
        const viewLength = this._tabListContainer.nativeElement.offsetWidth;
        return (lengthOfTabList - viewLength) || 0;
    }
    /** Tells the ink-bar to align itself to the current label wrapper */
    _alignInkBarToSelectedTab() {
        const selectedItem = this._items && this._items.length ?
            this._items.toArray()[this.selectedIndex] : null;
        const selectedLabelWrapper = selectedItem ? selectedItem.elementRef.nativeElement : null;
        if (selectedLabelWrapper) {
            this._inkBar.alignToElement(selectedLabelWrapper);
        }
        else {
            this._inkBar.hide();
        }
    }
    /** Stops the currently-running paginator interval.  */
    _stopInterval() {
        this._stopScrolling.next();
    }
    /**
     * Handles the user pressing down on one of the paginators.
     * Starts scrolling the header after a certain amount of time.
     * @param direction In which direction the paginator should be scrolled.
     */
    _handlePaginatorPress(direction, mouseEvent) {
        // Don't start auto scrolling for right mouse button clicks. Note that we shouldn't have to
        // null check the `button`, but we do it so we don't break tests that use fake events.
        if (mouseEvent && mouseEvent.button != null && mouseEvent.button !== 0) {
            return;
        }
        // Avoid overlapping timers.
        this._stopInterval();
        // Start a timer after the delay and keep firing based on the interval.
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["timer"])(HEADER_SCROLL_DELAY, HEADER_SCROLL_INTERVAL)
            // Keep the timer going until something tells it to stop or the component is destroyed.
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(this._stopScrolling, this._destroyed)))
            .subscribe(() => {
            const { maxScrollDistance, distance } = this._scrollHeader(direction);
            // Stop the timer if we've reached the start or the end.
            if (distance === 0 || distance >= maxScrollDistance) {
                this._stopInterval();
            }
        });
    }
    /**
     * Scrolls the header to a given position.
     * @param position Position to which to scroll.
     * @returns Information on the current scroll distance and the maximum.
     */
    _scrollTo(position) {
        if (this.disablePagination) {
            return { maxScrollDistance: 0, distance: 0 };
        }
        const maxScrollDistance = this._getMaxScrollDistance();
        this._scrollDistance = Math.max(0, Math.min(maxScrollDistance, position));
        // Mark that the scroll distance has changed so that after the view is checked, the CSS
        // transformation can move the header.
        this._scrollDistanceChanged = true;
        this._checkScrollingControls();
        return { maxScrollDistance, distance: this._scrollDistance };
    }
}
MatPaginatedTabHeader.ɵfac = function MatPaginatedTabHeader_Factory(t) { return new (t || MatPaginatedTabHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8)); };
MatPaginatedTabHeader.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: MatPaginatedTabHeader, inputs: { disablePagination: "disablePagination" } });
MatPaginatedTabHeader.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"],] }] }
];
MatPaginatedTabHeader.propDecorators = {
    disablePagination: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatPaginatedTabHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }, { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }] }]; }, { disablePagination: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Base class with all of the `MatTabHeader` functionality.
 * @docs-private
 */
class _MatTabHeaderBase extends MatPaginatedTabHeader {
    constructor(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, 
    // @breaking-change 9.0.0 `_animationMode` parameter to be made required.
    animationMode) {
        super(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
        this._disableRipple = false;
    }
    /** Whether the ripple effect is disabled or not. */
    get disableRipple() { return this._disableRipple; }
    set disableRipple(value) { this._disableRipple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceBooleanProperty"])(value); }
    _itemSelected(event) {
        event.preventDefault();
    }
}
_MatTabHeaderBase.ɵfac = function _MatTabHeaderBase_Factory(t) { return new (t || _MatTabHeaderBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8)); };
_MatTabHeaderBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: _MatTabHeaderBase, inputs: { disableRipple: "disableRipple" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]] });
_MatTabHeaderBase.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"],] }] }
];
_MatTabHeaderBase.propDecorators = {
    disableRipple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_MatTabHeaderBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }, { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }] }]; }, { disableRipple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }] }); })();
/**
 * The header of the tab group which displays a list of all the tabs in the tab group. Includes
 * an ink bar that follows the currently selected tab. When the tabs list's width exceeds the
 * width of the header container, then arrows will be displayed to allow the user to scroll
 * left and right across the header.
 * @docs-private
 */
class MatTabHeader extends _MatTabHeaderBase {
    constructor(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, 
    // @breaking-change 9.0.0 `_animationMode` parameter to be made required.
    animationMode) {
        super(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
    }
}
MatTabHeader.ɵfac = function MatTabHeader_Factory(t) { return new (t || MatTabHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8)); };
MatTabHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MatTabHeader, selectors: [["mat-tab-header"]], contentQueries: function MatTabHeader_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MatTabLabelWrapper, false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._items = _t);
    } }, viewQuery: function MatTabHeader_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](MatInkBar, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](_c5, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](_c6, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c7, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c8, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._inkBar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabListContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabList = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._nextPaginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._previousPaginator = _t.first);
    } }, hostAttrs: [1, "mat-tab-header"], hostVars: 4, hostBindings: function MatTabHeader_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-tab-header-rtl", ctx._getLayoutDirection() == "rtl");
    } }, inputs: { selectedIndex: "selectedIndex" }, outputs: { selectFocusedIndex: "selectFocusedIndex", indexFocused: "indexFocused" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c0, decls: 13, vars: 8, consts: [["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-before", "mat-elevation-z4", 3, "matRippleDisabled", "click", "mousedown", "touchend"], ["previousPaginator", ""], [1, "mat-tab-header-pagination-chevron"], [1, "mat-tab-label-container", 3, "keydown"], ["tabListContainer", ""], ["role", "tablist", 1, "mat-tab-list", 3, "cdkObserveContent"], ["tabList", ""], [1, "mat-tab-labels"], ["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-after", "mat-elevation-z4", 3, "matRippleDisabled", "mousedown", "click", "touchend"], ["nextPaginator", ""]], template: function MatTabHeader_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatTabHeader_Template_div_click_0_listener() { return ctx._handlePaginatorClick("before"); })("mousedown", function MatTabHeader_Template_div_mousedown_0_listener($event) { return ctx._handlePaginatorPress("before", $event); })("touchend", function MatTabHeader_Template_div_touchend_0_listener() { return ctx._stopInterval(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function MatTabHeader_Template_div_keydown_3_listener($event) { return ctx._handleKeydown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cdkObserveContent", function MatTabHeader_Template_div_cdkObserveContent_5_listener() { return ctx._onContentChanges(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "mat-ink-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mousedown", function MatTabHeader_Template_div_mousedown_10_listener($event) { return ctx._handlePaginatorPress("after", $event); })("click", function MatTabHeader_Template_div_click_10_listener() { return ctx._handlePaginatorClick("after"); })("touchend", function MatTabHeader_Template_div_touchend_10_listener() { return ctx._stopInterval(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollBefore);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollAfter);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple);
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["CdkObserveContent"], MatInkBar], styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-labels{display:flex}[mat-align-tabs=center]>.mat-tab-header .mat-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-tab-header .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}._mat-animation-noopable.mat-tab-list{transition:none;animation:none}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{min-width:72px}}\n"], encapsulation: 2 });
MatTabHeader.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"],] }] }
];
MatTabHeader.propDecorators = {
    _items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [MatTabLabelWrapper, { descendants: false },] }],
    _inkBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [MatInkBar, { static: true },] }],
    _tabListContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['tabListContainer', { static: true },] }],
    _tabList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['tabList', { static: true },] }],
    _nextPaginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['nextPaginator',] }],
    _previousPaginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['previousPaginator',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'mat-tab-header',
                template: "<div class=\"mat-tab-header-pagination mat-tab-header-pagination-before mat-elevation-z4\"\n     #previousPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollBefore || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollBefore\"\n     (click)=\"_handlePaginatorClick('before')\"\n     (mousedown)=\"_handlePaginatorPress('before', $event)\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n\n<div class=\"mat-tab-label-container\" #tabListContainer (keydown)=\"_handleKeydown($event)\">\n  <div\n    #tabList\n    class=\"mat-tab-list\"\n    [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\"\n    role=\"tablist\"\n    (cdkObserveContent)=\"_onContentChanges()\">\n    <div class=\"mat-tab-labels\">\n      <ng-content></ng-content>\n    </div>\n    <mat-ink-bar></mat-ink-bar>\n  </div>\n</div>\n\n<div class=\"mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4\"\n     #nextPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollAfter || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollAfter\"\n     (mousedown)=\"_handlePaginatorPress('after', $event)\"\n     (click)=\"_handlePaginatorClick('after')\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n",
                inputs: ['selectedIndex'],
                outputs: ['selectFocusedIndex', 'indexFocused'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].Default,
                host: {
                    'class': 'mat-tab-header',
                    '[class.mat-tab-header-pagination-controls-enabled]': '_showPaginationControls',
                    '[class.mat-tab-header-rtl]': "_getLayoutDirection() == 'rtl'"
                },
                styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-labels{display:flex}[mat-align-tabs=center]>.mat-tab-header .mat-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-tab-header .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}._mat-animation-noopable.mat-tab-list{transition:none;animation:none}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{min-width:72px}}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }, { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }] }]; }, { _items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
            args: [MatTabLabelWrapper, { descendants: false }]
        }], _inkBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [MatInkBar, { static: true }]
        }], _tabListContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['tabListContainer', { static: true }]
        }], _tabList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['tabList', { static: true }]
        }], _nextPaginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['nextPaginator']
        }], _previousPaginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['previousPaginator']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Base class with all of the `MatTabNav` functionality.
 * @docs-private
 */
class _MatTabNavBase extends MatPaginatedTabHeader {
    constructor(elementRef, dir, ngZone, changeDetectorRef, viewportRuler, 
    /**
     * @deprecated @breaking-change 9.0.0 `platform` parameter to become required.
     */
    platform, animationMode) {
        super(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
        this._disableRipple = false;
        /** Theme color of the nav bar. */
        this.color = 'primary';
    }
    /** Background color of the tab nav. */
    get backgroundColor() { return this._backgroundColor; }
    set backgroundColor(value) {
        const classList = this._elementRef.nativeElement.classList;
        classList.remove(`mat-background-${this.backgroundColor}`);
        if (value) {
            classList.add(`mat-background-${value}`);
        }
        this._backgroundColor = value;
    }
    /** Whether the ripple effect is disabled or not. */
    get disableRipple() { return this._disableRipple; }
    set disableRipple(value) { this._disableRipple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceBooleanProperty"])(value); }
    _itemSelected() {
        // noop
    }
    ngAfterContentInit() {
        // We need this to run before the `changes` subscription in parent to ensure that the
        // selectedIndex is up-to-date by the time the super class starts looking for it.
        this._items.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(() => {
            this.updateActiveLink();
        });
        super.ngAfterContentInit();
    }
    /**
     * Notifies the component that the active link has been changed.
     * @breaking-change 8.0.0 `element` parameter to be removed.
     */
    updateActiveLink(_element) {
        if (!this._items) {
            return;
        }
        const items = this._items.toArray();
        for (let i = 0; i < items.length; i++) {
            if (items[i].active) {
                this.selectedIndex = i;
                this._changeDetectorRef.markForCheck();
                return;
            }
        }
        // The ink bar should hide itself if no items are active.
        this.selectedIndex = -1;
        this._inkBar.hide();
    }
}
_MatTabNavBase.ɵfac = function _MatTabNavBase_Factory(t) { return new (t || _MatTabNavBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8)); };
_MatTabNavBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: _MatTabNavBase, inputs: { color: "color", backgroundColor: "backgroundColor", disableRipple: "disableRipple" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]] });
_MatTabNavBase.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"],] }] }
];
_MatTabNavBase.propDecorators = {
    backgroundColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    disableRipple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_MatTabNavBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }, { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }] }]; }, { color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], disableRipple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }] }); })();
/**
 * Navigation component matching the styles of the tab group header.
 * Provides anchored navigation with animated ink bar.
 */
class MatTabNav extends _MatTabNavBase {
    constructor(elementRef, dir, ngZone, changeDetectorRef, viewportRuler, 
    /**
     * @deprecated @breaking-change 9.0.0 `platform` parameter to become required.
     */
    platform, animationMode) {
        super(elementRef, dir, ngZone, changeDetectorRef, viewportRuler, platform, animationMode);
    }
}
MatTabNav.ɵfac = function MatTabNav_Factory(t) { return new (t || MatTabNav)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8)); };
MatTabNav.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MatTabNav, selectors: [["", "mat-tab-nav-bar", ""]], contentQueries: function MatTabNav_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MatTabLink, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._items = _t);
    } }, viewQuery: function MatTabNav_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](MatInkBar, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](_c5, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](_c6, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c7, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c8, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._inkBar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabListContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabList = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._nextPaginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._previousPaginator = _t.first);
    } }, hostAttrs: [1, "mat-tab-nav-bar", "mat-tab-header"], hostVars: 10, hostBindings: function MatTabNav_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-tab-header-rtl", ctx._getLayoutDirection() == "rtl")("mat-primary", ctx.color !== "warn" && ctx.color !== "accent")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn");
    } }, inputs: { color: "color" }, exportAs: ["matTabNavBar", "matTabNav"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], attrs: _c9, ngContentSelectors: _c0, decls: 13, vars: 8, consts: [["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-before", "mat-elevation-z4", 3, "matRippleDisabled", "click", "mousedown", "touchend"], ["previousPaginator", ""], [1, "mat-tab-header-pagination-chevron"], [1, "mat-tab-link-container", 3, "keydown"], ["tabListContainer", ""], [1, "mat-tab-list", 3, "cdkObserveContent"], ["tabList", ""], [1, "mat-tab-links"], ["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-after", "mat-elevation-z4", 3, "matRippleDisabled", "mousedown", "click", "touchend"], ["nextPaginator", ""]], template: function MatTabNav_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatTabNav_Template_div_click_0_listener() { return ctx._handlePaginatorClick("before"); })("mousedown", function MatTabNav_Template_div_mousedown_0_listener($event) { return ctx._handlePaginatorPress("before", $event); })("touchend", function MatTabNav_Template_div_touchend_0_listener() { return ctx._stopInterval(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function MatTabNav_Template_div_keydown_3_listener($event) { return ctx._handleKeydown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cdkObserveContent", function MatTabNav_Template_div_cdkObserveContent_5_listener() { return ctx._onContentChanges(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "mat-ink-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mousedown", function MatTabNav_Template_div_mousedown_10_listener($event) { return ctx._handlePaginatorPress("after", $event); })("click", function MatTabNav_Template_div_click_10_listener() { return ctx._handlePaginatorClick("after"); })("touchend", function MatTabNav_Template_div_touchend_10_listener() { return ctx._stopInterval(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollBefore);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollAfter);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple);
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["CdkObserveContent"], MatInkBar], styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-links{display:flex}[mat-align-tabs=center]>.mat-tab-link-container .mat-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-tab-link-container .mat-tab-links{justify-content:flex-end}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}.mat-tab-link:focus{outline:none}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-link:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-link.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-link.mat-tab-disabled{opacity:.5}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-link{opacity:1}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}@media(max-width: 599px){.mat-tab-link{min-width:72px}}\n"], encapsulation: 2 });
MatTabNav.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"],] }] }
];
MatTabNav.propDecorators = {
    _items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(() => MatTabLink), { descendants: true },] }],
    _inkBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [MatInkBar, { static: true },] }],
    _tabListContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['tabListContainer', { static: true },] }],
    _tabList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['tabList', { static: true },] }],
    _nextPaginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['nextPaginator',] }],
    _previousPaginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['previousPaginator',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabNav, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: '[mat-tab-nav-bar]',
                exportAs: 'matTabNavBar, matTabNav',
                inputs: ['color'],
                template: "<div class=\"mat-tab-header-pagination mat-tab-header-pagination-before mat-elevation-z4\"\n     #previousPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollBefore || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollBefore\"\n     (click)=\"_handlePaginatorClick('before')\"\n     (mousedown)=\"_handlePaginatorPress('before', $event)\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n\n<div class=\"mat-tab-link-container\" #tabListContainer (keydown)=\"_handleKeydown($event)\">\n  <div\n    class=\"mat-tab-list\"\n    [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\"\n    #tabList\n    (cdkObserveContent)=\"_onContentChanges()\">\n    <div class=\"mat-tab-links\">\n      <ng-content></ng-content>\n    </div>\n    <mat-ink-bar></mat-ink-bar>\n  </div>\n</div>\n\n<div class=\"mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4\"\n     #nextPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollAfter || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollAfter\"\n     (mousedown)=\"_handlePaginatorPress('after', $event)\"\n     (click)=\"_handlePaginatorClick('after')\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n",
                host: {
                    'class': 'mat-tab-nav-bar mat-tab-header',
                    '[class.mat-tab-header-pagination-controls-enabled]': '_showPaginationControls',
                    '[class.mat-tab-header-rtl]': "_getLayoutDirection() == 'rtl'",
                    '[class.mat-primary]': 'color !== "warn" && color !== "accent"',
                    '[class.mat-accent]': 'color === "accent"',
                    '[class.mat-warn]': 'color === "warn"'
                },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].Default,
                styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-links{display:flex}[mat-align-tabs=center]>.mat-tab-link-container .mat-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-tab-link-container .mat-tab-links{justify-content:flex-end}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}.mat-tab-link:focus{outline:none}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-link:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-link.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-link.mat-tab-disabled{opacity:.5}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-link{opacity:1}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}@media(max-width: 599px){.mat-tab-link{min-width:72px}}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }, { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }] }]; }, { _items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(() => MatTabLink), { descendants: true }]
        }], _inkBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [MatInkBar, { static: true }]
        }], _tabListContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['tabListContainer', { static: true }]
        }], _tabList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['tabList', { static: true }]
        }], _nextPaginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['nextPaginator']
        }], _previousPaginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['previousPaginator']
        }] }); })();
// Boilerplate for applying mixins to MatTabLink.
class MatTabLinkMixinBase {
}
const _MatTabLinkMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisabled"])(MatTabLinkMixinBase)));
/** Base class with all of the `MatTabLink` functionality. */
class _MatTabLinkBase extends _MatTabLinkMixinBase {
    constructor(_tabNavBar, 
    /** @docs-private */ elementRef, globalRippleOptions, tabIndex, _focusMonitor, animationMode) {
        super();
        this._tabNavBar = _tabNavBar;
        this.elementRef = elementRef;
        this._focusMonitor = _focusMonitor;
        /** Whether the tab link is active or not. */
        this._isActive = false;
        this.rippleConfig = globalRippleOptions || {};
        this.tabIndex = parseInt(tabIndex) || 0;
        if (animationMode === 'NoopAnimations') {
            this.rippleConfig.animation = { enterDuration: 0, exitDuration: 0 };
        }
    }
    /** Whether the link is active. */
    get active() { return this._isActive; }
    set active(value) {
        const newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceBooleanProperty"])(value);
        if (newValue !== this._isActive) {
            this._isActive = value;
            this._tabNavBar.updateActiveLink(this.elementRef);
        }
    }
    /**
     * Whether ripples are disabled on interaction.
     * @docs-private
     */
    get rippleDisabled() {
        return this.disabled || this.disableRipple || this._tabNavBar.disableRipple ||
            !!this.rippleConfig.disabled;
    }
    /** Focuses the tab link. */
    focus() {
        this.elementRef.nativeElement.focus();
    }
    ngAfterViewInit() {
        this._focusMonitor.monitor(this.elementRef);
    }
    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this.elementRef);
    }
}
_MatTabLinkBase.ɵfac = function _MatTabLinkBase_Factory(t) { return new (t || _MatTabLinkBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_MatTabNavBase), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8)); };
_MatTabLinkBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: _MatTabLinkBase, inputs: { active: "active" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]] });
_MatTabLinkBase.ctorParameters = () => [
    { type: _MatTabNavBase },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"], args: ['tabindex',] }] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"],] }] }
];
_MatTabLinkBase.propDecorators = {
    active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_MatTabLinkBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
    }], function () { return [{ type: _MatTabNavBase }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"],
                args: ['tabindex']
            }] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }] }]; }, { active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }] }); })();
/**
 * Link inside of a `mat-tab-nav-bar`.
 */
class MatTabLink extends _MatTabLinkBase {
    constructor(tabNavBar, elementRef, ngZone, platform, globalRippleOptions, tabIndex, focusMonitor, animationMode) {
        super(tabNavBar, elementRef, globalRippleOptions, tabIndex, focusMonitor, animationMode);
        this._tabLinkRipple = new _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["RippleRenderer"](this, ngZone, elementRef, platform);
        this._tabLinkRipple.setupTriggerEvents(elementRef.nativeElement);
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this._tabLinkRipple._removeTriggerEvents();
    }
}
MatTabLink.ɵfac = function MatTabLink_Factory(t) { return new (t || MatTabLink)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatTabNav), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8)); };
MatTabLink.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: MatTabLink, selectors: [["", "mat-tab-link", ""], ["", "matTabLink", ""]], hostAttrs: [1, "mat-tab-link", "mat-focus-indicator"], hostVars: 7, hostBindings: function MatTabLink_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-current", ctx.active ? "page" : null)("aria-disabled", ctx.disabled)("tabIndex", ctx.tabIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-disabled", ctx.disabled)("mat-tab-label-active", ctx.active);
    } }, inputs: { disabled: "disabled", disableRipple: "disableRipple", tabIndex: "tabIndex" }, exportAs: ["matTabLink"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]] });
MatTabLink.ctorParameters = () => [
    { type: MatTabNav },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"], args: ['tabindex',] }] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"],] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabLink, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
                selector: '[mat-tab-link], [matTabLink]',
                exportAs: 'matTabLink',
                inputs: ['disabled', 'disableRipple', 'tabIndex'],
                host: {
                    'class': 'mat-tab-link mat-focus-indicator',
                    '[attr.aria-current]': 'active ? "page" : null',
                    '[attr.aria-disabled]': 'disabled',
                    '[attr.tabIndex]': 'tabIndex',
                    '[class.mat-tab-disabled]': 'disabled',
                    '[class.mat-tab-label-active]': 'active'
                }
            }]
    }], function () { return [{ type: MatTabNav }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"],
                args: ['tabindex']
            }] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
            }] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatTabsModule {
}
MatTabsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: MatTabsModule });
MatTabsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function MatTabsModule_Factory(t) { return new (t || MatTabsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
            _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["ObserversModule"],
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
        ], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MatTabsModule, { declarations: function () { return [MatTabGroup, MatTabLabel, MatTab, MatInkBar, MatTabLabelWrapper, MatTabNav, MatTabLink, MatTabBody, MatTabBodyPortal, MatTabHeader, MatTabContent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["ObserversModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"]]; }, exports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], MatTabGroup, MatTabLabel, MatTab, MatTabNav, MatTabLink, MatTabContent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                    _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["ObserversModule"],
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
                ],
                // Don't export all components because some are only to be used internally.
                exports: [
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"],
                    MatTabGroup,
                    MatTabLabel,
                    MatTab,
                    MatTabNav,
                    MatTabLink,
                    MatTabContent,
                ],
                declarations: [
                    MatTabGroup,
                    MatTabLabel,
                    MatTab,
                    MatInkBar,
                    MatTabLabelWrapper,
                    MatTabNav,
                    MatTabLink,
                    MatTabBody,
                    MatTabBodyPortal,
                    MatTabHeader,
                    MatTabContent,
                ]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ "OJ3s":
/*!***************************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/catering/src/lib/catering-order-list-order-item.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: CateringOrderListOrderItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateringOrderListOrderItemComponent", function() { return CateringOrderListOrderItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _catering_item_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catering-item.class */ "Ygd4");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/src/lib/icon/icon.component */ "ukpX");





const _c0 = ["catering-order-list-order-item", ""];
class CateringOrderListOrderItemComponent {
    constructor() {
        this.active = false;
    }
}
CateringOrderListOrderItemComponent.ɵfac = function CateringOrderListOrderItemComponent_Factory(t) { return new (t || CateringOrderListOrderItemComponent)(); };
CateringOrderListOrderItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CateringOrderListOrderItemComponent, selectors: [["", "catering-order-list-order-item", ""]], inputs: { item: "item" }, attrs: _c0, decls: 8, vars: 8, consts: [[1, "w-20", "text-right"], ["name", "item-bar", 1, "bg-gray-300"], [1, "w-12", "mr-4"], ["mat-icon-button", "", 1, "border", "border-gray-300", "border-dashed", "text-2xl", "text-dark-fade"], ["className", "material-icons"], [1, "flex-1", "border-none", "border-b", "border-gray-300", "border-solid", "py-4"]], template: function CateringOrderListOrderItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("bg-success", ctx.active)("text-white", ctx.active)("border-solid", ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.active ? "done" : "local_pizza");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.item.name, " ");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__["IconComponent"]], styles: ["[_nghost-%COMP%]:last-child    > div[_ngcontent-%COMP%] {\n                border: none !important;\n            }\n\n            [name='item-bar'][_ngcontent-%COMP%] {\n                height: 2px;\n                margin-left: auto;\n                margin-right: 1rem;\n                width: calc(50% - 0.9375rem);\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CateringOrderListOrderItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '[catering-order-list-order-item]',
                template: `
        <div class="w-20 text-right">
            <div name="item-bar" class="bg-gray-300"></div>
        </div>
        <div class="w-12 mr-4">
            <button
                mat-icon-button
                class="border border-gray-300 border-dashed text-2xl text-dark-fade"
                [class.bg-success]="active"
                [class.text-white]="active"
                [class.border-solid]="active"
            >
                <app-icon className="material-icons">{{ active ? 'done' : 'local_pizza' }}</app-icon>
            </button>
        </div>
        <div class="flex-1 border-none border-b border-gray-300 border-solid py-4">
            {{ item.name }}
        </div>
    `,
                styles: [
                    `
            :host:last-child > div {
                border: none !important;
            }

            [name='item-bar'] {
                height: 2px;
                margin-left: auto;
                margin-right: 1rem;
                width: calc(50% - 0.9375rem);
            }
        `,
                ],
            }]
    }], null, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Q9WK":
/*!**************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/catering/src/lib/catering.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: SharedCateringModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedCateringModule", function() { return SharedCateringModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/autocomplete */ "ulve");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ "Jb3d");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "KZIX");
/* harmony import */ var _user_interfaces_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @user-interfaces/components */ "Rc+I");
/* harmony import */ var _catering_config_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./catering-config-modal.component */ "EDgw");
/* harmony import */ var _catering_item_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./catering-item-modal.component */ "/LTK");
/* harmony import */ var _catering_menu_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./catering-menu-item.component */ "AHTY");
/* harmony import */ var _catering_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./catering-menu.component */ "ccdn");
/* harmony import */ var _catering_option_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./catering-option-modal.component */ "3ihl");
/* harmony import */ var _catering_options_modal_catering_options_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./catering-options-modal/catering-options-modal.component */ "I6F0");
/* harmony import */ var _catering_order_list_order_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./catering-order-list-order-item.component */ "OJ3s");
/* harmony import */ var _catering_order_list_order_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./catering-order-list-order.component */ "l1Lo");
/* harmony import */ var _catering_order_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./catering-order-list.component */ "s0U4");
/* harmony import */ var _catering_order_modal_catering_order_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./catering-order-modal/catering-order-modal.component */ "EoLz");

















const COMPONENTS = [
    _catering_options_modal_catering_options_modal_component__WEBPACK_IMPORTED_MODULE_11__["CateringOptionsModalComponent"],
    _catering_order_modal_catering_order_modal_component__WEBPACK_IMPORTED_MODULE_15__["CateringOrderModalComponent"],
    _catering_config_modal_component__WEBPACK_IMPORTED_MODULE_6__["CateringConfigModalComponent"],
    _catering_item_modal_component__WEBPACK_IMPORTED_MODULE_7__["CateringItemModalComponent"],
    _catering_menu_component__WEBPACK_IMPORTED_MODULE_9__["CateringMenuComponent"],
    _catering_menu_item_component__WEBPACK_IMPORTED_MODULE_8__["CateringMenuItemComponent"],
    _catering_option_modal_component__WEBPACK_IMPORTED_MODULE_10__["CateringItemOptionModalComponent"],
    _catering_order_list_component__WEBPACK_IMPORTED_MODULE_14__["CateringOrderListComponent"],
    _catering_order_list_order_component__WEBPACK_IMPORTED_MODULE_13__["CateringOrderListOrderComponent"],
    _catering_order_list_order_item_component__WEBPACK_IMPORTED_MODULE_12__["CateringOrderListOrderItemComponent"]
];
class SharedCateringModule {
}
SharedCateringModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedCateringModule });
SharedCateringModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedCateringModule_Factory(t) { return new (t || SharedCateringModule)(); }, providers: [], imports: [[
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _user_interfaces_components__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedCateringModule, { declarations: [_catering_options_modal_catering_options_modal_component__WEBPACK_IMPORTED_MODULE_11__["CateringOptionsModalComponent"],
        _catering_order_modal_catering_order_modal_component__WEBPACK_IMPORTED_MODULE_15__["CateringOrderModalComponent"],
        _catering_config_modal_component__WEBPACK_IMPORTED_MODULE_6__["CateringConfigModalComponent"],
        _catering_item_modal_component__WEBPACK_IMPORTED_MODULE_7__["CateringItemModalComponent"],
        _catering_menu_component__WEBPACK_IMPORTED_MODULE_9__["CateringMenuComponent"],
        _catering_menu_item_component__WEBPACK_IMPORTED_MODULE_8__["CateringMenuItemComponent"],
        _catering_option_modal_component__WEBPACK_IMPORTED_MODULE_10__["CateringItemOptionModalComponent"],
        _catering_order_list_component__WEBPACK_IMPORTED_MODULE_14__["CateringOrderListComponent"],
        _catering_order_list_order_component__WEBPACK_IMPORTED_MODULE_13__["CateringOrderListOrderComponent"],
        _catering_order_list_order_item_component__WEBPACK_IMPORTED_MODULE_12__["CateringOrderListOrderItemComponent"]], imports: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
        _user_interfaces_components__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]], exports: [_catering_options_modal_catering_options_modal_component__WEBPACK_IMPORTED_MODULE_11__["CateringOptionsModalComponent"],
        _catering_order_modal_catering_order_modal_component__WEBPACK_IMPORTED_MODULE_15__["CateringOrderModalComponent"],
        _catering_config_modal_component__WEBPACK_IMPORTED_MODULE_6__["CateringConfigModalComponent"],
        _catering_item_modal_component__WEBPACK_IMPORTED_MODULE_7__["CateringItemModalComponent"],
        _catering_menu_component__WEBPACK_IMPORTED_MODULE_9__["CateringMenuComponent"],
        _catering_menu_item_component__WEBPACK_IMPORTED_MODULE_8__["CateringMenuItemComponent"],
        _catering_option_modal_component__WEBPACK_IMPORTED_MODULE_10__["CateringItemOptionModalComponent"],
        _catering_order_list_component__WEBPACK_IMPORTED_MODULE_14__["CateringOrderListComponent"],
        _catering_order_list_order_component__WEBPACK_IMPORTED_MODULE_13__["CateringOrderListOrderComponent"],
        _catering_order_list_order_item_component__WEBPACK_IMPORTED_MODULE_12__["CateringOrderListOrderItemComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedCateringModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [...COMPONENTS],
                imports: [
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                    _user_interfaces_components__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]
                ],
                providers: [],
                exports: [...COMPONENTS]
            }]
    }], null, null); })();


/***/ }),

/***/ "Ug2Q":
/*!*******************************************************!*\
  !*** ./src/app/catering/catering-topbar.component.ts ***!
  \*******************************************************/
/*! exports provided: CateringTopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateringTopbarComponent", function() { return CateringTopbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @user-interfaces/organisation */ "dJst");
/* harmony import */ var _user_interfaces_catering__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @user-interfaces/catering */ "52zK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "R7+U");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _ui_date_options_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ui/date-options.component */ "wrRZ");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "mFH5");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "PBFl");


















function CateringTopbarComponent_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const level_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", level_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", level_r3.display_name || level_r3.name, " ");
} }
function CateringTopbarComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CateringTopbarComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.addItem(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CateringTopbarComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CateringTopbarComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.editConfig(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Edit Config");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class CateringTopbarComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["BaseClass"] {
    constructor(_orders, _catering, _org, _route, _router) {
        super();
        this._orders = _orders;
        this._catering = _catering;
        this._org = _org;
        this._route = _route;
        this._router = _router;
        /** List of selected levels */
        this.zones = [];
        /** Set filtered date */
        this.setDate = (date) => (this._orders.filters = Object.assign(Object.assign({}, this._orders.filters), { date }));
        /** List of levels for the active building */
        this.levels = this._org.active_levels;
        /** List of levels for the active building */
        this.updateZones = (z) => {
            this._router.navigate([], {
                relativeTo: this._route,
                queryParams: { zone_ids: z.join(',') },
            });
            this._orders.filters = Object.assign(Object.assign({}, this._orders.filters), { zones: [z] });
        };
        this.addItem = () => this._catering.addItem();
        this.editConfig = () => this._catering.editConfig();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._org.initialised.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])((_) => _)).toPromise();
            this.subscription('route.query', this._route.queryParamMap.subscribe((params) => {
                if (params.has('zone_ids')) {
                    const zones = params.get('zone_ids').split(',');
                    if (zones.length) {
                        const level = this._org.levelWithID(zones);
                        if (!level) {
                            return;
                        }
                        this._org.building = this._org.buildings.find((bld) => bld.id === level.parent_id);
                        this.zones = zones;
                    }
                }
            }));
            this.subscription('route.params', this._route.paramMap.subscribe((params) => (this.page = params.has('view') ? params.get('view') : '')));
            this.subscription('levels', this._org.active_levels.subscribe((levels) => {
                this.zones = this.zones.filter((zone) => levels.find((lvl) => lvl.id === zone));
                if (!this.zones.length && levels.length) {
                    this.zones.push(levels[0].id);
                }
                this.updateZones(this.zones);
            }));
        });
    }
}
CateringTopbarComponent.ɵfac = function CateringTopbarComponent_Factory(t) { return new (t || CateringTopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_interfaces_catering__WEBPACK_IMPORTED_MODULE_6__["CateringOrdersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_interfaces_catering__WEBPACK_IMPORTED_MODULE_6__["CateringStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_5__["OrganisationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CateringTopbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CateringTopbarComponent, selectors: [["catering-topbar"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 6, consts: [["appearance", "outline"], ["multiple", "", "placeholder", "All Levels", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-button", "", 3, "click", 4, "ngIf"], [1, "flex-1", "w-2"], [3, "dateChange"], [3, "value"], ["mat-button", "", 3, "click"]], template: function CateringTopbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CateringTopbarComponent_Template_mat_select_ngModelChange_1_listener($event) { return ctx.zones = $event; })("ngModelChange", function CateringTopbarComponent_Template_mat_select_ngModelChange_1_listener($event) { return ctx.updateZones($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CateringTopbarComponent_mat_option_2_Template, 2, 2, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CateringTopbarComponent_button_4_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CateringTopbarComponent_button_5_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "date-options", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dateChange", function CateringTopbarComponent_Template_date_options_dateChange_7_listener($event) { return ctx.setDate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.zones);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, ctx.levels));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.page === "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.page === "menu");
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _ui_date_options_component__WEBPACK_IMPORTED_MODULE_11__["DateOptionsComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n                display: flex;\n                align-items: center;\n                background-color: #fff;\n                height: 5em;\n                padding: 0 2em;\n                border-bottom: 1px solid #ccc;\n            }\n\n            [_nghost-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n                margin-left: .5rem;\n            }\n\n            mat-form-field[_ngcontent-%COMP%] {\n                height: 3.25em;\n                width: 8em;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CateringTopbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'catering-topbar',
                template: `
        <mat-form-field appearance="outline">
            <mat-select
                multiple
                [(ngModel)]="zones"
                (ngModelChange)="updateZones($event)"
                placeholder="All Levels"
            >
                <mat-option *ngFor="let level of levels | async" [value]="level.id">
                    {{ level.display_name || level.name }}
                </mat-option>
            </mat-select>
        </mat-form-field>
        <button *ngIf="page === 'menu'" mat-button (click)="addItem()">Add Item</button>
        <button *ngIf="page === 'menu'" mat-button (click)="editConfig()">Edit Config</button>
        <div class="flex-1 w-2"></div>
        <!-- <searchbar class="mr-2"></searchbar> -->
        <date-options (dateChange)="setDate($event)"></date-options>
    `,
                styles: [
                    `
            :host {
                display: flex;
                align-items: center;
                background-color: #fff;
                height: 5em;
                padding: 0 2em;
                border-bottom: 1px solid #ccc;
            }

            :host > * + * {
                margin-left: .5rem;
            }

            mat-form-field {
                height: 3.25em;
                width: 8em;
            }
        `,
                ],
            }]
    }], function () { return [{ type: _user_interfaces_catering__WEBPACK_IMPORTED_MODULE_6__["CateringOrdersService"] }, { type: _user_interfaces_catering__WEBPACK_IMPORTED_MODULE_6__["CateringStateService"] }, { type: _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_5__["OrganisationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "ccdn":
/*!**********************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/catering/src/lib/catering-menu.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: CateringMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateringMenuComponent", function() { return CateringMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _catering_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catering-state.service */ "IePy");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "KZIX");
/* harmony import */ var _catering_menu_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./catering-menu-item.component */ "AHTY");
/* harmony import */ var _components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/src/lib/icon/icon.component */ "ukpX");









function CateringMenuComponent_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r5);
} }
function CateringMenuComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CateringMenuComponent_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.menu));
} }
function CateringMenuComponent_mat_tab_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r8);
} }
function CateringMenuComponent_mat_tab_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CateringMenuComponent_mat_tab_4_ng_container_1_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", group_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r1.tab_menu)[group_r6]);
} }
const _c0 = function () { return { class: "material-icons", content: "close" }; };
function CateringMenuComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No items in menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
class CateringMenuComponent {
    constructor(_catering) {
        this._catering = _catering;
        /** Observable for the currently active menu */
        this.menu = this._catering.menu;
        /** Store for the currently selected tab */
        this.shown_tab = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        /** Observable for the menu list for the selected tab */
        this.tab_menu = this.menu.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((menu) => {
            const menu_map = {};
            for (const group of this.categories) {
                menu_map[group] = menu.filter(item => item.category === group);
            }
            return menu_map;
        }));
    }
    get categories() {
        return this._catering.categories;
    }
}
CateringMenuComponent.ɵfac = function CateringMenuComponent_Factory(t) { return new (t || CateringMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_catering_state_service__WEBPACK_IMPORTED_MODULE_3__["CateringStateService"])); };
CateringMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CateringMenuComponent, selectors: [["catering-menu"]], decls: 7, vars: 5, consts: [[1, "h-full", 3, "selectedIndexChange"], ["label", "All Items"], [4, "ngIf", "ngIfElse"], [3, "label", 4, "ngFor", "ngForOf"], ["empty_state", ""], [4, "ngFor", "ngForOf"], ["catering-menu-item", "", 3, "item"], [3, "label"], [1, "info-block"], [1, "icon"], [3, "icon"], [1, "text"]], template: function CateringMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedIndexChange", function CateringMenuComponent_Template_mat_tab_group_selectedIndexChange_0_listener($event) { return ctx.shown_tab.next($event === 0 ? "" : ctx.categories[$event - 1]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CateringMenuComponent_ng_container_2_Template, 3, 3, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CateringMenuComponent_mat_tab_4_Template, 3, 4, "mat-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CateringMenuComponent_ng_template_5_Template, 5, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        var tmp_0_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx.menu)) == null ? null : tmp_0_0.length)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTab"], _catering_menu_item_component__WEBPACK_IMPORTED_MODULE_5__["CateringMenuItemComponent"], _components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"]], styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 90%;\n                width: 100%;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CateringMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'catering-menu',
                template: `
        <mat-tab-group class="h-full" (selectedIndexChange)="shown_tab.next($event === 0 ? '' : categories[$event - 1])">
            <mat-tab label="All Items">
                <ng-container *ngIf="(menu | async)?.length; else empty_state">
                    <ng-container *ngFor="let item of menu | async">
                        <div catering-menu-item [item]="item"></div>
                    </ng-container>
                </ng-container>
            </mat-tab>
            <mat-tab *ngFor="let group of categories" [label]="group">
                <ng-container *ngFor="let item of (tab_menu | async)[group]">
                    <div catering-menu-item [item]="item"></div>
                </ng-container>
            </mat-tab>
        </mat-tab-group>
        <ng-template #empty_state>
            <div class="info-block">
                <div class="icon">
                    <app-icon [icon]="{ class: 'material-icons', content: 'close' }"></app-icon>
                </div>
                <div class="text">No items in menu</div>
            </div>
        </ng-template>
    `,
                styles: [
                    `
            :host {
                display: flex;
                flex-direction: column;
                height: 90%;
                width: 100%;
            }
        `
                ]
            }]
    }], function () { return [{ type: _catering_state_service__WEBPACK_IMPORTED_MODULE_3__["CateringStateService"] }]; }, null); })();


/***/ }),

/***/ "it71":
/*!*******************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/catering/src/lib/catering.ts ***!
  \*******************************************************************************************/
/*! exports provided: CateringOptionsModalComponent, cateringItemAvailable, CateringOrderModalComponent, CateringConfigModalComponent, CateringItemModalComponent, CateringItem, CateringMenuItemComponent, CateringMenuComponent, CateringItemOptionModalComponent, CateringOrderListOrderItemComponent, CateringOrderListOrderComponent, CateringOrderListComponent, CateringOrder, CateringOrdersService, CateringStateService, RULE_TYPES, SharedCateringModule, CATERING_STATUSES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _catering_options_modal_catering_options_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catering-options-modal/catering-options-modal.component */ "I6F0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CateringOptionsModalComponent", function() { return _catering_options_modal_catering_options_modal_component__WEBPACK_IMPORTED_MODULE_0__["CateringOptionsModalComponent"]; });

/* harmony import */ var _catering_order_modal_catering_order_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catering-order-modal/catering-order-modal.component */ "EoLz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cateringItemAvailable", function() { return _catering_order_modal_catering_order_modal_component__WEBPACK_IMPORTED_MODULE_1__["cateringItemAvailable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CateringOrderModalComponent", function() { return _catering_order_modal_catering_order_modal_component__WEBPACK_IMPORTED_MODULE_1__["CateringOrderModalComponent"]; });

/* harmony import */ var _catering_config_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catering-config-modal.component */ "EDgw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CateringConfigModalComponent", function() { return _catering_config_modal_component__WEBPACK_IMPORTED_MODULE_2__["CateringConfigModalComponent"]; });

/* harmony import */ var _catering_item_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catering-item-modal.component */ "/LTK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CateringItemModalComponent", function() { return _catering_item_modal_component__WEBPACK_IMPORTED_MODULE_3__["CateringItemModalComponent"]; });

/* harmony import */ var _catering_item_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./catering-item.class */ "Ygd4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CateringItem", function() { return _catering_item_class__WEBPACK_IMPORTED_MODULE_4__["CateringItem"]; });

/* harmony import */ var _catering_menu_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./catering-menu-item.component */ "AHTY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CateringMenuItemComponent", function() { return _catering_menu_item_component__WEBPACK_IMPORTED_MODULE_5__["CateringMenuItemComponent"]; });

/* harmony import */ var _catering_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./catering-menu.component */ "ccdn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CateringMenuComponent", function() { return _catering_menu_component__WEBPACK_IMPORTED_MODULE_6__["CateringMenuComponent"]; });

/* harmony import */ var _catering_option_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./catering-option-modal.component */ "3ihl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CateringItemOptionModalComponent", function() { return _catering_option_modal_component__WEBPACK_IMPORTED_MODULE_7__["CateringItemOptionModalComponent"]; });

/* harmony import */ var _catering_order_list_order_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./catering-order-list-order-item.component */ "OJ3s");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CateringOrderListOrderItemComponent", function() { return _catering_order_list_order_item_component__WEBPACK_IMPORTED_MODULE_8__["CateringOrderListOrderItemComponent"]; });

/* harmony import */ var _catering_order_list_order_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./catering-order-list-order.component */ "l1Lo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CateringOrderListOrderComponent", function() { return _catering_order_list_order_component__WEBPACK_IMPORTED_MODULE_9__["CateringOrderListOrderComponent"]; });

/* harmony import */ var _catering_order_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./catering-order-list.component */ "s0U4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CateringOrderListComponent", function() { return _catering_order_list_component__WEBPACK_IMPORTED_MODULE_10__["CateringOrderListComponent"]; });

/* harmony import */ var _catering_order_class__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./catering-order.class */ "lbut");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CateringOrder", function() { return _catering_order_class__WEBPACK_IMPORTED_MODULE_11__["CateringOrder"]; });

/* harmony import */ var _catering_orders_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./catering-orders.service */ "HLeM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CateringOrdersService", function() { return _catering_orders_service__WEBPACK_IMPORTED_MODULE_12__["CateringOrdersService"]; });

/* harmony import */ var _catering_state_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./catering-state.service */ "IePy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CateringStateService", function() { return _catering_state_service__WEBPACK_IMPORTED_MODULE_13__["CateringStateService"]; });

/* harmony import */ var _catering_interfaces__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./catering.interfaces */ "0rdp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RULE_TYPES", function() { return _catering_interfaces__WEBPACK_IMPORTED_MODULE_14__["RULE_TYPES"]; });

/* harmony import */ var _catering_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./catering.module */ "Q9WK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedCateringModule", function() { return _catering_module__WEBPACK_IMPORTED_MODULE_15__["SharedCateringModule"]; });

/* harmony import */ var _catering_vars__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./catering.vars */ "/iyb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CATERING_STATUSES", function() { return _catering_vars__WEBPACK_IMPORTED_MODULE_16__["CATERING_STATUSES"]; });




















/***/ }),

/***/ "l1Lo":
/*!**********************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/catering/src/lib/catering-order-list-order.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: CateringOrderListOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateringOrderListOrderComponent", function() { return CateringOrderListOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _catering_orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catering-orders.service */ "HLeM");
/* harmony import */ var _catering_order_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catering-order.class */ "lbut");
/* harmony import */ var _catering_vars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./catering.vars */ "/iyb");
/* harmony import */ var _components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/src/lib/icon/icon.component */ "ukpX");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "Jb3d");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _catering_order_list_order_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./catering-order-list-order-item.component */ "OJ3s");











function CateringOrderListOrderComponent_li_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 19);
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r3);
} }
function CateringOrderListOrderComponent_button_31_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CateringOrderListOrderComponent_button_31_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const status_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.updateStatus(status_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", status_r5.colour);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](status_r5.name);
} }
class CateringOrderListOrderComponent {
    constructor(_orders) {
        this._orders = _orders;
        /** Whether to show the items in the catering order */
        this.show_items = false;
        /** List of status available to select */
        this.statuses = _catering_vars__WEBPACK_IMPORTED_MODULE_4__["CATERING_STATUSES"];
        this.updateStatus = (s) => this._orders.updateStatus(this.order, s);
    }
    get status() {
        return this.statuses.find((i) => i.id === this.order.status);
    }
}
CateringOrderListOrderComponent.ɵfac = function CateringOrderListOrderComponent_Factory(t) { return new (t || CateringOrderListOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_catering_orders_service__WEBPACK_IMPORTED_MODULE_2__["CateringOrdersService"])); };
CateringOrderListOrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CateringOrderListOrderComponent, selectors: [["catering-order-list-item"]], inputs: { order: "order" }, decls: 32, vars: 22, consts: [[1, "w-full", "font-medium", "flex", "items-center", "py-2", "bg-gray-100"], [1, "w-20", "flex", "items-center", "justify-center"], [1, "rounded-full", "bg-gray-300", "p-2", "text-2xl", "text-dark-fade", "flex", "items-center", "justify-center"], ["className", "material-icons"], [1, "w-24"], [1, "flex-1"], [1, "w-56"], [1, "w-28"], [1, "w-36"], ["name", "status", "matRipple", "", 1, "text-base", "border-none", "h-10", "px-4", "flex", "items-center", "text-white", 3, "matMenuTriggerFor"], [1, "flex", "text-center", "capitalize", "mx-2"], ["className", "material-icons", 1, "pl-2"], [1, "w-12"], ["mat-icon-button", "", 3, "click"], [1, "list-none", "p-0", "m-0", "w-full", "relative"], ["name", "bar", 1, "absolute", "top-0", "bg-gray-300"], ["catering-order-list-order-item", "", "class", "flex items-center", 3, "item", 4, "ngFor", "ngForOf"], ["menu", "matMenu"], ["mat-menu-item", "", "class", "flex items-center", 3, "click", 4, "ngFor", "ngForOf"], ["catering-order-list-order-item", "", 1, "flex", "items-center", 3, "item"], ["mat-menu-item", "", 1, "flex", "items-center", 3, "click"], [1, "rounded-full", "h-4", "w-4", "mr-2"], [1, "mr-2", "w-20"]], template: function CateringOrderListOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "room_service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "app-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "arrow_drop_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CateringOrderListOrderComponent_Template_button_click_23_listener() { return ctx.show_items = !ctx.show_items; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "app-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CateringOrderListOrderComponent_li_28_Template, 1, 1, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-menu", null, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, CateringOrderListOrderComponent_button_31_Template, 4, 3, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("shown", ctx.show_items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 19, ctx.order.deliver_at, "shortTime"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.order.event == null ? null : ctx.order.event.space.display_name) || (ctx.order.event == null ? null : ctx.order.event.space.name) || "~ No Location ~", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.order.event == null ? null : ctx.order.event.organiser == null ? null : ctx.order.event.organiser.name) || (ctx.order.event == null ? null : ctx.order.event.host) || "~ Unknown Host ~", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.charge_code || "~ No Code ~");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.invoice_number || "~ No Invoice ~");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.status == null ? null : ctx.status.colour);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.status == null ? null : ctx.status.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.show_items ? "keyboard_arrow_down" : "keyboard_arrow_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("shown", ctx.show_items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@show", ctx.show_items ? "show" : "hide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", 3.125 * ctx.order.items.length - 1 + "rem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.order.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.statuses);
    } }, directives: [_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__["IconComponent"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuTrigger"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["_MatMenu"], _catering_order_list_order_item_component__WEBPACK_IMPORTED_MODULE_8__["CateringOrderListOrderItemComponent"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuItem"]], styles: ["[name='status'][_ngcontent-%COMP%] {\n                border-radius: 1.55rem;\n            }\n\n            button[mat-menu-item][_ngcontent-%COMP%] {\n                display: flex;\n            }\n\n            .shown[_ngcontent-%COMP%] {\n                background-color: #eee;\n            }\n\n            [name='bar'][_ngcontent-%COMP%] {\n                width: 2px;\n                top: -0.5rem;\n                left: calc(2.5rem - 1px);\n            }"], data: { animation: [_user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_SHOW_CONTRACT_EXPAND"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CateringOrderListOrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'catering-order-list-item',
                template: `
        <div
            class="w-full font-medium flex items-center py-2 bg-gray-100"
            [class.shown]="show_items"
        >
            <div class="w-20 flex items-center justify-center">
                <div
                    class="rounded-full bg-gray-300  p-2 text-2xl text-dark-fade flex items-center justify-center"
                >
                    <app-icon className="material-icons">room_service</app-icon>
                </div>
            </div>
            <div class="w-24">{{ order.deliver_at | date: 'shortTime' }}</div>
            <div class="flex-1">
                {{
                    order.event?.space.display_name || order.event?.space.name || '~ No Location ~'
                }}
            </div>
            <div class="w-56">
                {{ order.event?.organiser?.name || order.event?.host || '~ Unknown Host ~' }}
            </div>
            <div class="w-24">{{ order.charge_code || '~ No Code ~' }}</div>
            <div class="w-28">{{ order.invoice_number || '~ No Invoice ~' }}</div>
            <div class="w-36">
                <button
                    name="status"
                    class="text-base border-none h-10 px-4 flex items-center text-white"
                    matRipple
                    [style.background]="status?.colour"
                    [matMenuTriggerFor]="menu"
                >
                    <div class="flex text-center capitalize mx-2">{{ status?.name }}</div>
                    <app-icon class="pl-2" className="material-icons">arrow_drop_down</app-icon>
                </button>
            </div>
            <div class="w-12">
                <button mat-icon-button (click)="show_items = !show_items">
                    <app-icon className="material-icons">{{
                        show_items ? 'keyboard_arrow_down' : 'keyboard_arrow_right'
                    }}</app-icon>
                </button>
            </div>
        </div>
        <ul
            class="list-none p-0 m-0 w-full relative"
            [class.shown]="show_items"
            [@show]="show_items ? 'show' : 'hide'"
        >
            <div
                name="bar"
                class="absolute top-0 bg-gray-300"
                [style.height]="3.125 * order.items.length - 1 + 'rem'"
            ></div>

            <li
                catering-order-list-order-item
                class="flex items-center"
                *ngFor="let item of order.items; let i = index"
                [item]="item"
            ></li>
        </ul>
        <mat-menu #menu="matMenu">
            <button
                mat-menu-item
                *ngFor="let status of statuses"
                class="flex items-center"
                (click)="updateStatus(status.id)"
            >
                <div
                    class="rounded-full h-4 w-4 mr-2"
                    [style.background-color]="status.colour"
                ></div>

                <span class="mr-2 w-20">{{ status.name }}</span>
            </button>
        </mat-menu>
    `,
                styles: [
                    `
            [name='status'] {
                border-radius: 1.55rem;
            }

            button[mat-menu-item] {
                display: flex;
            }

            .shown {
                background-color: #eee;
            }

            [name='bar'] {
                width: 2px;
                top: -0.5rem;
                left: calc(2.5rem - 1px);
            }
        `,
                ],
                animations: [_user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_SHOW_CONTRACT_EXPAND"]],
            }]
    }], function () { return [{ type: _catering_orders_service__WEBPACK_IMPORTED_MODULE_2__["CateringOrdersService"] }]; }, { order: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "s0U4":
/*!****************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/catering/src/lib/catering-order-list.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: CateringOrderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateringOrderListComponent", function() { return CateringOrderListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _catering_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catering-orders.service */ "HLeM");
/* harmony import */ var _catering_order_list_order_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catering-order-list-order.component */ "l1Lo");





function CateringOrderListComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "catering-order-list-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("order", order_r3);
} }
function CateringOrderListComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Catering Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CateringOrderListComponent_mat_progress_bar_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 16);
} }
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
}
CateringOrderListComponent.ɵfac = function CateringOrderListComponent_Factory(t) { return new (t || CateringOrderListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_catering_orders_service__WEBPACK_IMPORTED_MODULE_1__["CateringOrdersService"])); };
CateringOrderListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CateringOrderListComponent, selectors: [["catering-order-list"]], decls: 22, vars: 9, consts: [[1, "w-full", "text-sm", "font-medium", "flex", "items-center", "py-4", "border-none", "border-solid", "border-b", "border-gray-300", "bg-white"], [1, "w-20"], [1, "w-24"], [1, "flex-1"], [1, "w-56"], [1, "w-28"], [1, "w-36"], [1, "w-12"], [1, "list-none", "p-0", "m-0", "w-full", "flex-1", "overflow-auto"], ["class", "border-none border-solid border-b border-gray-300", 4, "ngFor", "ngForOf"], ["class", "info-block text-dark-fade", 4, "ngIf"], ["class", "w-full", "mode", "indeterminate", 4, "ngIf"], [1, "border-none", "border-solid", "border-b", "border-gray-300"], [3, "order"], [1, "info-block", "text-dark-fade"], [1, "text"], ["mode", "indeterminate", 1, "w-full"]], template: function CateringOrderListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Host");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Charge Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Invoice No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CateringOrderListComponent_li_16_Template, 2, 1, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CateringOrderListComponent_div_18_Template, 3, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CateringOrderListComponent_mat_progress_bar_20_Template, 1, 0, "mat-progress-bar", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 3, ctx.order_list));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 5, ctx.order_list).length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 7, ctx.loading));
    } }, directives: [_catering_order_list_order_component__WEBPACK_IMPORTED_MODULE_2__["CateringOrderListOrderComponent"]], styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CateringOrderListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'catering-order-list',
                template: `
        <div
            class="w-full text-sm font-medium flex items-center py-4 border-none border-solid border-b border-gray-300 bg-white"
        >
            <div class="w-20"></div>
            <div class="w-24">Time</div>
            <div class="flex-1">Location</div>
            <div class="w-56">Host</div>
            <div class="w-24">Charge Code</div>
            <div class="w-28">Invoice No.</div>
            <div class="w-36">Status</div>
            <div class="w-12"></div>
        </div>
        <ul class="list-none p-0 m-0 w-full flex-1 overflow-auto">
            <li
                class="border-none border-solid border-b border-gray-300"
                *ngFor="let order of order_list | async"
            >
                <catering-order-list-item [order]="order"></catering-order-list-item>
            </li>
            <div class="info-block text-dark-fade" *ngIf="!(order_list | async).length">
                <div class="text">No Catering Orders</div>
            </div>
        </ul>
        <mat-progress-bar *ngIf="loading | async" class="w-full" mode="indeterminate"></mat-progress-bar>
    `,
                styles: [
                    `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
            }
        `,
                ],
            }]
    }], function () { return [{ type: _catering_orders_service__WEBPACK_IMPORTED_MODULE_1__["CateringOrdersService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=catering-catering-module.js.map