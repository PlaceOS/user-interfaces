"use strict";
(self["webpackChunkconcierge"] = self["webpackChunkconcierge"] || []).push([["apps_concierge_src_app_events_events_module_ts"],{

/***/ 55568:
/*!*****************************************************************!*\
  !*** ./apps/concierge/src/app/events/event-manage.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventManageComponent: () => (/* binding */ EventManageComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/keycodes */ 30554);
/* harmony import */ var _placeos_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/events */ 58908);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _libs_form_fields_src_lib_user_search_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/user-search-field.component */ 20576);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/chips */ 21757);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 21916);















function EventManageComponent_mat_chip_row_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-chip-row", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("removed", function EventManageComponent_mat_chip_row_46_Template_mat_chip_row_removed_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const tag_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.removeTag(tag_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "app-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("selectable", true)("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", tag_r2, " ");
  }
}
const _c0 = () => ["/entertainment", "events"];
const EMPTY = [];
class EventManageComponent {
  get tag_list() {
    return this.form.controls.tags.value || EMPTY;
  }
  constructor(_event_form) {
    this._event_form = _event_form;
    this.form = this._event_form.form;
    this.separators = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.ENTER, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.COMMA, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.SPACE];
  }
  /**
   * Add a feature to the list of features for the item
   * @param event Input event
   */
  addTag(event) {
    if (!this.form || !this.form.controls.tags) return;
    const input = event.input;
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
  static #_ = this.ɵfac = function EventManageComponent_Factory(t) {
    return new (t || EventManageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_placeos_events__WEBPACK_IMPORTED_MODULE_0__.EventFormService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: EventManageComponent,
    selectors: [["app-event-manage"]],
    decls: 48,
    vars: 10,
    consts: [[1, "absolute", "inset-0", "bg-base-100", "overflow-auto"], ["icon", "", "matRipple", "", 1, "absolute", "top-2", "right-2", 3, "routerLink"], [1, "flex", "flex-col", "w-[40rem]", "max-w-full", "mx-auto", "px-4", 3, "formGroup"], [1, "py-4", "text-2xl", "font-medium"], [1, "flex", "flex-col", "space-y-2"], ["for", "title"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "title", "formControlName", "title", "placeholder", "e.g. Team Meeting"], ["for", "organiser"], ["name", "organiser", "formControlName", "organiser", 1, "block"], [1, "flex", "space-x-4"], [1, "space-y-2", "flex-1"], ["for", "type"], ["name", "type", "placeholder", "Please select", "formControlName", "event_type"], ["for", "category"], ["name", "category", "placeholder", "Please select", "formControlName", "category"], ["for", "tags"], ["appearance", "outline"], ["aria-label", "Event Tags"], ["chipList", ""], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "New feature...", 3, "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur", "matChipInputTokenEnd"], [3, "selectable", "removable", "removed"], ["matChipRemove", ""]],
    template: function EventManageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "a", 1)(2, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 2)(5, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "New Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "section", 4)(8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Event Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Organiser");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "a-user-search-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 10)(23, "div", 11)(24, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "mat-form-field", 6)(29, "mat-select", 13)(30, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 11)(33, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "mat-form-field", 6)(38, "mat-select", 15)(39, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "mat-form-field", 17)(44, "mat-chip-grid", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, EventManageComponent_mat_chip_row_46_Template, 4, 3, "mat-chip-row", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("matChipInputTokenEnd", function EventManageComponent_Template_input_matChipInputTokenEnd_47_listener($event) {
          return ctx.addTag($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 7, "FORM.TITLE_ERROR"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.tag_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matChipInputFor", _r0)("matChipInputSeparatorKeyCodes", ctx.separators)("matChipInputAddOnBlur", true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatRipple, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _libs_form_fields_src_lib_user_search_field_component__WEBPACK_IMPORTED_MODULE_1__.UserSearchFieldComponent, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__.MatChipGrid, _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__.MatChipInput, _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__.MatChipRemove, _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__.MatChipRow, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe]
  });
}

/***/ }),

/***/ 35437:
/*!****************************************************************!*\
  !*** ./apps/concierge/src/app/events/events-list.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventsListComponent: () => (/* binding */ EventsListComponent)
/* harmony export */ });
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _placeos_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/events */ 58908);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 58415);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);
/* harmony import */ var _libs_components_src_lib_custom_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/custom-table.component */ 27442);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _libs_components_src_lib_level_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/level.pipe */ 6612);
/* harmony import */ var _libs_components_src_lib_building_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/building.pipe */ 3085);
/* harmony import */ var _libs_spaces_src_lib_space_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/spaces/src/lib/space.pipe */ 60942);














function EventsListComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 20)(10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](18, "building");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](19, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](20, "space");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r12 = ctx.row;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](4, 6, item_r12.date, "MMM"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](7, 9, item_r12.date, "d"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r12.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](14, 12, item_r12.date, "EEEE, " + ctx_r0.time_format), " \u2013 ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](15, 15, item_r12.date + item_r12.duration * 60 * 1000, ctx_r0.time_format + " z"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r12.location || ((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](18, 18, (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](19, 20, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](20, 22, item_r12.resources[0] == null ? null : item_r12.resources[0].email))) == null ? null : tmp_4_0.zones)) == null ? null : tmp_4_0.address), " ");
  }
}
function EventsListComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "level");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "space");
  }
  if (rf & 2) {
    const item_r13 = ctx.row;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 3, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 5, item_r13.resources[0] == null ? null : item_r13.resources[0].email))) == null ? null : tmp_0_0.zones)) == null ? null : tmp_0_0.display_name, " ");
  }
}
function EventsListComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "space");
  }
  if (rf & 2) {
    const item_r14 = ctx.row;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 3, item_r14.resources[0] == null ? null : item_r14.resources[0].email))) == null ? null : tmp_0_0.display_name, " ");
  }
}
function EventsListComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const item_r15 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (item_r15.attendees == null ? null : item_r15.attendees.length) || 1, " ");
  }
}
function EventsListComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r16 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("text-white", item_r16.state !== "done" && item_r16.state !== "in_progress")("bg-success", item_r16.state !== "done" && item_r16.state !== "in_progress")("bg-warning", item_r16.state === "in_progress")("bg-base-200", item_r16.state === "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r16.state === "done" ? "Done" : item_r16.state === "in_progress" ? "In Progress" : "Active", " ");
  }
}
function EventsListComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 25)(1, "button", 26)(2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-menu", null, 27)(6, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Promote Event");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Copy URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matMenuTriggerFor", _r18);
  }
}
const _c0 = () => ["/entertainment", "events", "manage"];
const _c1 = () => ["events", "level", "room", "attending", "status", "actions"];
const _c2 = () => ["Event", "Level", "Room", "Attending", "Status", " "];
const _c3 = () => ["20r", "10r", "10r", "8r", "8r", "flex"];
const _c4 = (a0, a1, a2, a3, a4, a5) => ({
  events: a0,
  level: a1,
  room: a2,
  attending: a3,
  status: a4,
  actions: a5
});
class EventsListComponent {
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_settings) {
    this._settings = _settings;
    this.event_list = [new _placeos_events__WEBPACK_IMPORTED_MODULE_1__.CalendarEvent({
      title: 'Test Event',
      date: (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date(), -15).valueOf(),
      resources: [{
        email: 'testroom1@0cbfs.onmicrosoft.com'
      }]
    })];
  }
  static #_ = this.ɵfac = function EventsListComponent_Factory(t) {
    return new (t || EventsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: EventsListComponent,
    selectors: [["app-event-list"]],
    decls: 24,
    vars: 17,
    consts: [[1, "w-full", "h-full", "flex", "flex-col"], [1, "flex", "items-center", "justify-between", "p-8"], [1, "text-2xl", "font-medium"], ["btn", "", "matRipple", "", 3, "routerLink"], [1, "ml-2"], [1, "text-2xl"], ["filters", "", 1, ""], [1, "h-1/2", "flex-1", "w-full", "px-8", "overflow-auto"], [1, "min-w-[64rem]", "block", 3, "dataSource", "columns", "display_column", "column_size", "template"], ["event_template", ""], ["level_template", ""], ["room_template", ""], ["attending_template", ""], ["status_template", ""], ["actions_template", ""], [1, "flex", "items-center", "space-x-2"], ["date", "", 1, "flex", "flex-col", "items-center", "leading-tight"], ["month", "", 1, "text-sm", "font-medium", "relative", "top-0.5"], ["day", "", 1, "text-2xl", "font-light", "relative", "-top-0.5"], [1, "h-12", "w-12", "rounded", "overflow-hidden", "bg-base-200"], ["details", "", 1, "flex", "flex-col"], [1, "text-sm"], [1, "text-xs", "opacity-40"], [1, "text-xs"], [1, "px-4", "py-1", "rounded-full"], [1, "w-full", "flex", "items-center", "justify-end", "space-x-2"], ["icon", "", "matRipple", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""]],
    template: function EventsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "a", 3)(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Create Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "app-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "chevron_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "custom-table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, EventsListComponent_ng_template_12_Template, 21, 24, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"])(14, EventsListComponent_ng_template_14_Template, 4, 7, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"])(16, EventsListComponent_ng_template_16_Template, 3, 5, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"])(18, EventsListComponent_ng_template_18_Template, 1, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"])(20, EventsListComponent_ng_template_20_Template, 2, 9, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"])(22, EventsListComponent_ng_template_22_Template, 16, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](13);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](15);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](17);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](19);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](21);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.event_list)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](7, _c1))("display_column", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](8, _c2))("column_size", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](9, _c3))("template", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction6"](10, _c4, _r1, _r3, _r5, _r7, _r9, _r11));
      }
    },
    dependencies: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _libs_components_src_lib_custom_table_component__WEBPACK_IMPORTED_MODULE_3__.CustomTableComponent, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe, _libs_components_src_lib_level_pipe__WEBPACK_IMPORTED_MODULE_4__.LevelPipe, _libs_components_src_lib_building_pipe__WEBPACK_IMPORTED_MODULE_5__.BuildingPipe, _libs_spaces_src_lib_space_pipe__WEBPACK_IMPORTED_MODULE_6__.SpacePipe],
    styles: ["[_nghost-%COMP%] {\n                flex: 1;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvZXZlbnRzL2V2ZW50cy1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksT0FBTztZQUNYIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 68203:
/*!***********************************************************!*\
  !*** ./apps/concierge/src/app/events/events.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventsComponent: () => (/* binding */ EventsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/app-topbar.component */ 33005);
/* harmony import */ var _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/app-sidebar.component */ 19842);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);




const _c0 = ["app-events", ""];
class EventsComponent {
  static #_ = this.ɵfac = function EventsComponent_Factory(t) {
    return new (t || EventsComponent)();
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
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n                background-color: var(--b1);\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvZXZlbnRzL2V2ZW50cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsMkJBQTJCO1lBQy9CIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 24194:
/*!********************************************************!*\
  !*** ./apps/concierge/src/app/events/events.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventsModule: () => (/* binding */ EventsModule)
/* harmony export */ });
/* harmony import */ var _events_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events.component */ 68203);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/ui.module */ 97428);
/* harmony import */ var _events_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events-list.component */ 35437);
/* harmony import */ var _event_manage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-manage.component */ 55568);
/* harmony import */ var _placeos_spaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/spaces */ 55322);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);










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
  static #_ = this.ɵfac = function EventsModule_Factory(t) {
    return new (t || EventsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: EventsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_1__.UIModule, _placeos_spaces__WEBPACK_IMPORTED_MODULE_4__.SharedSpacesModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(ROUTES)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](EventsModule, {
    declarations: [_events_component__WEBPACK_IMPORTED_MODULE_0__.EventsComponent, _events_list_component__WEBPACK_IMPORTED_MODULE_2__.EventsListComponent, _event_manage_component__WEBPACK_IMPORTED_MODULE_3__.EventManageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_1__.UIModule, _placeos_spaces__WEBPACK_IMPORTED_MODULE_4__.SharedSpacesModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=apps_concierge_src_app_events_events_module_ts.js.map