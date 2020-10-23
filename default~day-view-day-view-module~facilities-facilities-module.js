(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~day-view-day-view-module~facilities-facilities-module"],{

/***/ "0Dh+":
/*!**********************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/spaces/src/lib/spaces.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: SharedSpacesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedSpacesModule", function() { return SharedSpacesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _user_interfaces_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @user-interfaces/components */ "Rc+I");
/* harmony import */ var _space_select_modal_item_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./space-select-modal/item/item.component */ "7ow8");
/* harmony import */ var _space_select_modal_space_select_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./space-select-modal/space-select-modal.component */ "a1dc");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ "E5oP");
/* harmony import */ var _components_src_lib_action_icon_action_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/src/lib/action-icon/action-icon.component */ "ZnXB");
/* harmony import */ var _components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/src/lib/icon/icon.component */ "ukpX");
/* harmony import */ var _components_src_lib_popout_menu_popout_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/src/lib/popout-menu/popout-menu.component */ "ILxS");
/* harmony import */ var _components_src_lib_user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/src/lib/user-avatar/user-avatar.component */ "FGQ9");
/* harmony import */ var _components_src_lib_action_field_action_field_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/src/lib/action-field/action-field.component */ "7u5P");
/* harmony import */ var _components_src_lib_date_field_date_field_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/src/lib/date-field/date-field.component */ "kD+q");
/* harmony import */ var _components_src_lib_duration_field_duration_field_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/src/lib/duration-field/duration-field.component */ "gpkD");
/* harmony import */ var _components_src_lib_counter_counter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/src/lib/counter/counter.component */ "nMbc");
/* harmony import */ var _components_src_lib_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../components/src/lib/time-field/time-field.component */ "NhjZ");
/* harmony import */ var _components_src_lib_user_list_field_user_list_field_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/src/lib/user-list-field/user-list-field.component */ "mnsz");
/* harmony import */ var _components_src_lib_user_search_field_user_search_field_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../components/src/lib/user-search-field/user-search-field.component */ "lfZe");
/* harmony import */ var _components_src_lib_confirm_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../components/src/lib/confirm-modal.component */ "mU/8");
/* harmony import */ var _components_src_lib_interactive_map_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../components/src/lib/interactive-map.component */ "lYMz");
/* harmony import */ var _components_src_lib_map_pin_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../components/src/lib/map-pin.component */ "Pw6A");
/* harmony import */ var _components_src_lib_map_radius_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../components/src/lib/map-radius.component */ "kOXA");
/* harmony import */ var _components_src_lib_binding_binding_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../components/src/lib/binding/binding.directive */ "gV1Q");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/autocomplete */ "ulve");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/scrolling */ "qvOF");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ "mFH5");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/menu */ "Jb3d");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/select */ "R7+U");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/datepicker */ "gcUQ");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/cdk/text-field */ "H0K4");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @acaprojects/ngx-pipes */ "81Qw");



































const COMPONENTS = [
    _space_select_modal_space_select_modal_component__WEBPACK_IMPORTED_MODULE_4__["SpaceSelectModalComponent"],
    _space_select_modal_item_item_component__WEBPACK_IMPORTED_MODULE_3__["SpaceSelectItemComponent"],
];
class SharedSpacesModule {
}
SharedSpacesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedSpacesModule });
SharedSpacesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedSpacesModule_Factory(t) { return new (t || SharedSpacesModule)(); }, providers: [], imports: [[
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
            _user_interfaces_components__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedSpacesModule, { declarations: [_space_select_modal_space_select_modal_component__WEBPACK_IMPORTED_MODULE_4__["SpaceSelectModalComponent"],
        _space_select_modal_item_item_component__WEBPACK_IMPORTED_MODULE_3__["SpaceSelectItemComponent"]], imports: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
        _user_interfaces_components__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"]], exports: [_space_select_modal_space_select_modal_component__WEBPACK_IMPORTED_MODULE_4__["SpaceSelectModalComponent"],
        _space_select_modal_item_item_component__WEBPACK_IMPORTED_MODULE_3__["SpaceSelectItemComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedSpacesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [...COMPONENTS],
                imports: [
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                    _user_interfaces_components__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"]
                ],
                providers: [],
                exports: [...COMPONENTS]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_space_select_modal_space_select_modal_component__WEBPACK_IMPORTED_MODULE_4__["SpaceSelectModalComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContainer"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Dir"], _components_src_lib_action_icon_action_icon_component__WEBPACK_IMPORTED_MODULE_6__["ActionIconComponent"], _components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__["IconComponent"], _components_src_lib_popout_menu_popout_menu_component__WEBPACK_IMPORTED_MODULE_8__["PopoutMenuComponent"], _components_src_lib_user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_9__["UserAvatarComponent"], _components_src_lib_action_field_action_field_component__WEBPACK_IMPORTED_MODULE_10__["ActionFieldComponent"], _components_src_lib_date_field_date_field_component__WEBPACK_IMPORTED_MODULE_11__["DateFieldComponent"], _components_src_lib_duration_field_duration_field_component__WEBPACK_IMPORTED_MODULE_12__["DurationFieldComponent"], _components_src_lib_counter_counter_component__WEBPACK_IMPORTED_MODULE_13__["CounterComponent"], _components_src_lib_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_14__["TimeFieldComponent"], _components_src_lib_user_list_field_user_list_field_component__WEBPACK_IMPORTED_MODULE_15__["UserListFieldComponent"], _components_src_lib_user_search_field_user_search_field_component__WEBPACK_IMPORTED_MODULE_16__["UserSearchFieldComponent"], _components_src_lib_confirm_modal_component__WEBPACK_IMPORTED_MODULE_17__["ConfirmModalComponent"], _components_src_lib_interactive_map_component__WEBPACK_IMPORTED_MODULE_18__["InteractiveMapComponent"], _components_src_lib_map_pin_component__WEBPACK_IMPORTED_MODULE_19__["MapPinComponent"], _components_src_lib_map_radius_component__WEBPACK_IMPORTED_MODULE_20__["MapRadiusComponent"], _components_src_lib_binding_binding_directive__WEBPACK_IMPORTED_MODULE_21__["BindingDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__["MatAutocomplete"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__["MatAutocompleteOrigin"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_23__["CdkScrollable"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatOption"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatOptgroup"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatSuffix"], _angular_material_select__WEBPACK_IMPORTED_MODULE_27__["MatSelect"], _angular_material_select__WEBPACK_IMPORTED_MODULE_27__["MatSelectTrigger"], _angular_material_button__WEBPACK_IMPORTED_MODULE_28__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_28__["MatAnchor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatCalendar"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatCalendarBody"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatDatepicker"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatDatepickerContent"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatDatepickerToggleIcon"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatMonthView"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatYearView"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatMultiYearView"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatCalendarHeader"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatDateRangeInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatStartDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatEndDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatDateRangePicker"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_30__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_30__["CdkTextareaAutosize"], _angular_material_input__WEBPACK_IMPORTED_MODULE_31__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_31__["MatTextareaAutosize"], _space_select_modal_space_select_modal_component__WEBPACK_IMPORTED_MODULE_4__["SpaceSelectModalComponent"],
    _space_select_modal_item_item_component__WEBPACK_IMPORTED_MODULE_3__["SpaceSelectItemComponent"]], [_acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_32__["ɵa"], _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_32__["ɵb"]]);
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_space_select_modal_item_item_component__WEBPACK_IMPORTED_MODULE_3__["SpaceSelectItemComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContainer"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Dir"], _components_src_lib_action_icon_action_icon_component__WEBPACK_IMPORTED_MODULE_6__["ActionIconComponent"], _components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__["IconComponent"], _components_src_lib_popout_menu_popout_menu_component__WEBPACK_IMPORTED_MODULE_8__["PopoutMenuComponent"], _components_src_lib_user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_9__["UserAvatarComponent"], _components_src_lib_action_field_action_field_component__WEBPACK_IMPORTED_MODULE_10__["ActionFieldComponent"], _components_src_lib_date_field_date_field_component__WEBPACK_IMPORTED_MODULE_11__["DateFieldComponent"], _components_src_lib_duration_field_duration_field_component__WEBPACK_IMPORTED_MODULE_12__["DurationFieldComponent"], _components_src_lib_counter_counter_component__WEBPACK_IMPORTED_MODULE_13__["CounterComponent"], _components_src_lib_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_14__["TimeFieldComponent"], _components_src_lib_user_list_field_user_list_field_component__WEBPACK_IMPORTED_MODULE_15__["UserListFieldComponent"], _components_src_lib_user_search_field_user_search_field_component__WEBPACK_IMPORTED_MODULE_16__["UserSearchFieldComponent"], _components_src_lib_confirm_modal_component__WEBPACK_IMPORTED_MODULE_17__["ConfirmModalComponent"], _components_src_lib_interactive_map_component__WEBPACK_IMPORTED_MODULE_18__["InteractiveMapComponent"], _components_src_lib_map_pin_component__WEBPACK_IMPORTED_MODULE_19__["MapPinComponent"], _components_src_lib_map_radius_component__WEBPACK_IMPORTED_MODULE_20__["MapRadiusComponent"], _components_src_lib_binding_binding_directive__WEBPACK_IMPORTED_MODULE_21__["BindingDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__["MatAutocomplete"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__["MatAutocompleteOrigin"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_23__["CdkScrollable"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatOption"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatOptgroup"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatSuffix"], _angular_material_select__WEBPACK_IMPORTED_MODULE_27__["MatSelect"], _angular_material_select__WEBPACK_IMPORTED_MODULE_27__["MatSelectTrigger"], _angular_material_button__WEBPACK_IMPORTED_MODULE_28__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_28__["MatAnchor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatCalendar"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatCalendarBody"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatDatepicker"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatDatepickerContent"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatDatepickerToggleIcon"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatMonthView"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatYearView"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatMultiYearView"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatCalendarHeader"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatDateRangeInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatStartDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatEndDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatDateRangePicker"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_30__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_30__["CdkTextareaAutosize"], _angular_material_input__WEBPACK_IMPORTED_MODULE_31__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_31__["MatTextareaAutosize"], _space_select_modal_space_select_modal_component__WEBPACK_IMPORTED_MODULE_4__["SpaceSelectModalComponent"],
    _space_select_modal_item_item_component__WEBPACK_IMPORTED_MODULE_3__["SpaceSelectItemComponent"]], [_acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_32__["ɵa"], _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_32__["ɵb"]]);


/***/ }),

/***/ "2eSb":
/*!************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/spaces/src/lib/space.utilities.ts ***!
  \************************************************************************************************/
/*! exports provided: generateMockSpace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateMockSpace", function() { return generateMockSpace; });
/* harmony import */ var _users_src_lib_user_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../users/src/lib/user.utilities */ "HTl7");

let SPACE_COUNT = 0;
function generateMockSpace(overrides = {}) {
    const id = `space-${SPACE_COUNT++}`;
    const name = `Test Space ${SPACE_COUNT}`;
    const linked = Math.floor(Math.random() * 99999) % 2 === 0 && SPACE_COUNT > 1;
    const space = Object.assign({ id,
        name, long_name: `${name} with an long name`, map_id: `${SPACE_COUNT}`, capacity: Math.floor(Math.random() * 20 + 1) * 2, email: `${name.toLowerCase().split(' ').join('.')}@${_users_src_lib_user_utilities__WEBPACK_IMPORTED_MODULE_0__["USER_DOMAIN"]}`, type: '', searchable: Math.floor(Math.random() * 99999) % 2 === 0, controlable: Math.floor(Math.random() * 99999) % 2 === 0, bookable: Math.floor(Math.random() * 99999) % 2 === 0, cost_hour: Math.floor(Math.random() * 300) * 100, setup: Math.floor(Math.random() * 6) * 5, breakdown: Math.floor(Math.random() * 6) * 5, zones: ['zone_lvl-0'], support_url: `/control/#/${id}`, bookings: [], linked_rooms: linked ? [`space-${Math.floor(Math.random() * (SPACE_COUNT - 1))}`] : [], image: '' }, overrides);
    if (space['configurations'] && space['configurations'].length > 0) {
        space['configurations'].forEach(config => config.capacity = Math.floor(Math.random() * space.capacity) + 1);
        space['configurations'][0].capacity = space.capacity;
    }
    return space;
}


/***/ }),

/***/ "6CBO":
/*!**********************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/spaces/src/index.ts ***!
  \**********************************************************************************/
/*! exports provided: SpaceSelectItemComponent, SpaceSelectModalComponent, Space, generateMockSpace, SharedSpacesModule, SpacesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_spaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/spaces */ "nWvK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpaceSelectItemComponent", function() { return _lib_spaces__WEBPACK_IMPORTED_MODULE_0__["SpaceSelectItemComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpaceSelectModalComponent", function() { return _lib_spaces__WEBPACK_IMPORTED_MODULE_0__["SpaceSelectModalComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Space", function() { return _lib_spaces__WEBPACK_IMPORTED_MODULE_0__["Space"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateMockSpace", function() { return _lib_spaces__WEBPACK_IMPORTED_MODULE_0__["generateMockSpace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedSpacesModule", function() { return _lib_spaces__WEBPACK_IMPORTED_MODULE_0__["SharedSpacesModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpacesService", function() { return _lib_spaces__WEBPACK_IMPORTED_MODULE_0__["SpacesService"]; });




/***/ }),

/***/ "7ow8":
/*!***********************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/spaces/src/lib/space-select-modal/item/item.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: SpaceSelectItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceSelectItemComponent", function() { return SpaceSelectItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _space_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../space.class */ "mh7C");



const _c0 = function () { return { class: "material-icons", content: "account_circle" }; };
function SpaceSelectItemComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.space.capacity);
} }
const _c1 = function (a1) { return { class: "material-icons", content: a1 }; };
function SpaceSelectItemComponent_div_0_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpaceSelectItemComponent_div_0_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.action.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r4.type === "available" ? "add" : "close"));
} }
function SpaceSelectItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SpaceSelectItemComponent_div_0_div_6_Template, 4, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SpaceSelectItemComponent_div_0_button_8_Template, 2, 3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.space.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.space.level == null ? null : ctx_r0.space.level.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.space.capacity !== -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.multiple)("ngIfElse", _r1);
} }
function SpaceSelectItemComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("request", ctx_r2.space.by_request);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.space.by_request ? "Request" : "Book", " ");
} }
class SpaceSelectItemComponent {
    constructor() { }
    ngOnInit() { }
}
SpaceSelectItemComponent.ɵfac = function SpaceSelectItemComponent_Factory(t) { return new (t || SpaceSelectItemComponent)(); };
SpaceSelectItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpaceSelectItemComponent, selectors: [["a-space-select-item"]], inputs: { space: "space", type: "type", multiple: "multiple" }, decls: 3, vars: 1, consts: [["class", "item", 4, "ngIf"], ["single_button", ""], [1, "item"], [1, "details"], [1, "name"], [1, "info"], ["class", "capacity", 4, "ngIf"], [1, "actions"], ["mat-icon-button", "", 3, "click", 4, "ngIf", "ngIfElse"], [1, "capacity"], [3, "icon"], [1, "text"], ["mat-icon-button", "", 3, "click"], ["mat-button", "", "color", "primary"]], template: function SpaceSelectItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpaceSelectItemComponent_div_0_Template, 9, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SpaceSelectItemComponent_ng_template_1_Template, 2, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.space);
    } }, styles: [".item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.5em;\n}\n\n.details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.name[_ngcontent-%COMP%] {\n  font-size: 1em;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.info[_ngcontent-%COMP%] {\n  font-size: 0.65em;\n}\n\n.capacity[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: 0.5em;\n}\n\n.actions[_ngcontent-%COMP%] {\n  margin-left: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvc3BhY2VzL3NyYy9saWIvc3BhY2Utc2VsZWN0LW1vZGFsL2l0ZW0vaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLE9BQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRiIsImZpbGUiOiJsaWJzL3NwYWNlcy9zcmMvbGliL3NwYWNlLXNlbGVjdC1tb2RhbC9pdGVtL2l0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IC41ZW07XG59XG5cbi5kZXRhaWxzIHtcbiAgZmxleDogMTtcbn1cblxuLm5hbWUge1xuICBmb250LXNpemU6IDFlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5pbmZvIHtcbiAgZm9udC1zaXplOiAuNjVlbTtcbn1cblxuLmNhcGFjaXR5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IC41ZW07XG59XG5cbi5hY3Rpb25zIHtcbiAgbWFyZ2luLWxlZnQ6IC41ZW07XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpaceSelectItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'a-space-select-item',
                templateUrl: './item.component.html',
                styleUrls: ['./item.component.scss']
            }]
    }], function () { return []; }, { space: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "HWRp":
/*!**************************************************!*\
  !*** ./src/app/day-view/events-state.service.ts ***!
  \**************************************************/
/*! exports provided: EventsStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsStateService", function() { return EventsStateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "w8Fe");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @user-interfaces/events */ "eZII");
/* harmony import */ var _user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @user-interfaces/spaces */ "6CBO");










class EventsStateService extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["BaseClass"] {
    constructor(_events, _spaces) {
        super();
        this._events = _events;
        this._spaces = _spaces;
        /** List of bookings */
        this._poll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        /** List of bookings */
        this._long_poll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        /** List of bookings */
        this._bookings = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        /** Filter details for bookings */
        this._filters = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        /** Filter details for bookings */
        this._ui_options = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        /** Currently active date */
        this._date = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new Date().valueOf());
        /** Currently displayed zone */
        this._zones = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        /** Whether booking data is being loaded */
        this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        /** Observable for filter and booking list changes */
        this._state = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this._bookings, this._filters, this._date, this._zones);
        /** Event currently being viewed */
        this._event = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        /** Observable for list of bookings */
        this.bookings = this._bookings.asObservable();
        /** Observable for active date */
        this.date = this._date.asObservable();
        /** Observable for active zone */
        this.zones = this._zones.asObservable();
        /** Observable for UI display options */
        this.ui_options = this._ui_options.asObservable();
        /** Observable for loading state of bookings */
        this.loading = this._loading.asObservable();
        /** Observable for viewed event */
        this.event = this._event.asObservable();
        /** Obsevable for filtered list of bookings */
        this.filtered = this._state.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => {
            const start = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(new Date(this._date.getValue()));
            const end = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfDay"])(start);
            return this.filterEvents(start, end);
        }));
        /** Obsevable for filtered list of bookings of the active week */
        this.filtered_week = this._state.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => {
            const start = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfWeek"])(new Date(this._date.getValue()));
            const end = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfWeek"])(start);
            return this.filterEvents(start, end);
        }));
        /** Obsevable for filtered list of bookings for active month */
        this.filtered_month = this._state.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => {
            const start = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfMonth"])(new Date(this._date.getValue()));
            const end = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfMonth"])(start);
            return this.filterEvents(start, end);
        }));
        /** Generate observable for updating bookings */
        const search = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this._poll, this._zones, this._date]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((i) => !!i[0]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => {
            const fzones = this._zones.getValue();
            if (!fzones || !fzones.length) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
            }
            this._loading.next(true);
            const start = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(new Date(this._date.getValue()));
            const end = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfDay"])(start);
            return this._events.query({
                zone_ids: fzones.join(','),
                period_start: Math.floor(start.valueOf() / 1000),
                period_end: Math.floor(end.valueOf() / 1000),
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([])));
        /** Generate observable for updating bookings */
        const search_long = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this._long_poll, this._zones, this._date]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((i) => !!i[0]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((props) => {
            const type = props[0];
            const fzones = props[1];
            if (!fzones || !fzones.length) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
            }
            this._loading.next(true);
            const start = (type === 'week' ? date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfWeek"] : date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfMonth"])(new Date(props[2]));
            const end = (type === 'week' ? date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfWeek"] : date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfMonth"])(start);
            return this._events.query({
                zone_ids: fzones.join(','),
                period_start: Math.floor(start.valueOf() / 1000),
                period_end: Math.floor(end.valueOf() / 1000),
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([])));
        /** Subscribe to update observable */
        search.subscribe((events) => {
            this.processBookings(events);
            this._loading.next(false);
        });
        search_long.subscribe((events) => {
            this.processBookings(events, this._long_poll.getValue());
            this._loading.next(false);
        });
    }
    /** Active filters */
    get filters() {
        return this._filters.getValue();
    }
    /**
     * Update the booking filters
     * @param details
     */
    setFilters(details) {
        this._filters.next(details);
    }
    /**
     * Update the booking date
     * @param details
     */
    setDate(date) {
        this._date.next(date);
    }
    /**
     * Update the booking's zone
     * @param details
     */
    setZones(zones) {
        this._zones.next(zones);
    }
    /**
     * Update the booking's zone
     * @param details
     */
    setEvent(event) {
        this._event.next(event);
    }
    /**
     * Update the booking's zone
     * @param details
     */
    setUIOptions(options) {
        const old_options = this._ui_options.getValue();
        this._ui_options.next(Object.assign(Object.assign({}, old_options), options));
    }
    /**
     * Start polling to update bookings
     * @param delay Duration between polling events in milliseconds
     */
    startPolling(delay = 10 * 1000) {
        this._poll.next(true);
        this.interval('polling', () => this._poll.next(true), delay);
    }
    /**
     * Start polling to update bookings
     * @param delay Duration between polling events in milliseconds
     */
    startPollingWeek(delay = 30 * 1000) {
        this._long_poll.next('week');
        this.interval('polling_long', () => this._long_poll.next('week'), delay);
    }
    /**
     * Start polling to update bookings
     * @param delay Duration between polling events in milliseconds
     */
    startPollingMonth(delay = 5 * 60 * 1000) {
        this._long_poll.next('month');
        this.interval('polling_long', () => this._long_poll.next('month'), delay);
    }
    /**
     * Stop polling to update bookings;
     */
    stopPolling() {
        this._poll.next(false);
        this.clearInterval('polling');
        this._long_poll.next('');
        this.clearInterval('polling_long');
    }
    /**
     * Add booking to bookings listing
     * @param booking
     */
    add(booking) {
        const bookings = this._bookings.getValue();
        const new_bookings = bookings.concat([booking]);
        this._bookings.next(new_bookings);
    }
    /**
     * Update booking in the bookings list
     * @param booking
     */
    replace(booking) {
        const bookings = this._bookings.getValue();
        const new_bookings = bookings.filter((bkn) => bkn.id !== booking.id).concat([booking]);
        this._bookings.next(new_bookings);
    }
    /**
     * Remove booking in the bookings list
     * @param booking
     */
    remove(booking) {
        const bookings = this._bookings.getValue();
        const new_bookings = bookings.filter((bkn) => bkn.id !== booking.id);
        this._bookings.next(new_bookings);
    }
    processBookings(events, period = 'day') {
        const start = (period === 'month'
            ? date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfMonth"]
            : period === 'week'
                ? date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfWeek"]
                : date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(new Date(this._date.getValue()));
        const end = (period === 'month' ? date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfMonth"] : period === 'week' ? date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfWeek"] : date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfDay"])(start);
        let bookings = this._bookings.getValue();
        const space_list = Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["unique"])(Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["flatten"])(events.map((event) => event.resources)), 'email');
        space_list.forEach((space) => {
            bookings = Object(_user_interfaces_events__WEBPACK_IMPORTED_MODULE_5__["replaceBookings"])(bookings, events
                .filter((bkn) => bkn.resources.find((s) => s.email === space.email))
                .map((bkn) => new _user_interfaces_events__WEBPACK_IMPORTED_MODULE_5__["CalendarEvent"](bkn)), {
                space: space.email,
                from: start.valueOf(),
                to: end.valueOf(),
            });
        });
        this._bookings.next(bookings);
    }
    filterEvents(start, end) {
        const filters = this._filters.getValue();
        const bookings = this._bookings.getValue();
        const fzones = this._zones.getValue();
        return bookings.filter((bkn) => {
            var _a, _b, _c;
            const intersects = Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["timePeriodsIntersect"])(start.valueOf(), end.valueOf(), bkn.date, bkn.date + bkn.duration * 60 * 1000);
            const in_zone = !!bkn.resources
                .map((r) => this._spaces.find(r.id))
                .find((space) => fzones.find((z) => space.zones.includes(z)));
            const has_space = !((_a = filters.space_emails) === null || _a === void 0 ? void 0 : _a.length) ||
                !!bkn.resources.find((space) => filters.space_emails.includes(space.email));
            const in_zones = !((_b = filters.zone_ids) === null || _b === void 0 ? void 0 : _b.length) ||
                !!bkn.resources.find((space) => space.zones.find((zone) => filters.zone_ids.includes(zone)));
            const type = bkn.has_visitors ? 'external' : bkn.status === 'cancelled' ? 'cancelled' : 'internal';
            const show = !((_c = filters.hide_type) === null || _c === void 0 ? void 0 : _c.length) || !filters.hide_type.includes(type);
            return intersects && has_space && in_zone && in_zones && show;
        });
    }
}
EventsStateService.ɵfac = function EventsStateService_Factory(t) { return new (t || EventsStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_interfaces_events__WEBPACK_IMPORTED_MODULE_5__["EventsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_6__["SpacesService"])); };
EventsStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EventsStateService, factory: EventsStateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventsStateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _user_interfaces_events__WEBPACK_IMPORTED_MODULE_5__["EventsService"] }, { type: _user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_6__["SpacesService"] }]; }, null); })();


/***/ }),

/***/ "nWvK":
/*!***************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/spaces/src/lib/spaces.ts ***!
  \***************************************************************************************/
/*! exports provided: SpaceSelectItemComponent, SpaceSelectModalComponent, Space, generateMockSpace, SharedSpacesModule, SpacesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _space_select_modal_item_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./space-select-modal/item/item.component */ "7ow8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpaceSelectItemComponent", function() { return _space_select_modal_item_item_component__WEBPACK_IMPORTED_MODULE_0__["SpaceSelectItemComponent"]; });

/* harmony import */ var _space_select_modal_space_select_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./space-select-modal/space-select-modal.component */ "a1dc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpaceSelectModalComponent", function() { return _space_select_modal_space_select_modal_component__WEBPACK_IMPORTED_MODULE_1__["SpaceSelectModalComponent"]; });

/* harmony import */ var _space_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./space.class */ "mh7C");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Space", function() { return _space_class__WEBPACK_IMPORTED_MODULE_2__["Space"]; });

/* harmony import */ var _space_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./space.utilities */ "2eSb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateMockSpace", function() { return _space_utilities__WEBPACK_IMPORTED_MODULE_3__["generateMockSpace"]; });

/* harmony import */ var _spaces_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spaces.module */ "0Dh+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedSpacesModule", function() { return _spaces_module__WEBPACK_IMPORTED_MODULE_4__["SharedSpacesModule"]; });

/* harmony import */ var _spaces_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spaces.service */ "VK0q");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpacesService", function() { return _spaces_service__WEBPACK_IMPORTED_MODULE_5__["SpacesService"]; });









/***/ })

}]);
//# sourceMappingURL=default~day-view-day-view-module~facilities-facilities-module.js.map