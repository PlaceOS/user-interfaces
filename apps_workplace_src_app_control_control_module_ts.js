"use strict";
(self["webpackChunkworkplace"] = self["webpackChunkworkplace"] || []).push([["apps_workplace_src_app_control_control_module_ts"],{

/***/ 9974:
/*!*************************************************************!*\
  !*** ./apps/workplace/src/app/control/control.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlComponent": () => (/* binding */ ControlComponent)
/* harmony export */ });
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 88397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _components_topbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/topbar.component */ 64187);
/* harmony import */ var _components_footer_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer-menu.component */ 46012);
/* harmony import */ var _space_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./space-list.component */ 73370);






const _c0 = ["app-control", ""];
class ControlComponent {
  constructor(_settings) {
    this._settings = _settings;
  }
  ngOnInit() {
    this._settings.title = 'Control';
  }
}
ControlComponent.ɵfac = function ControlComponent_Factory(t) {
  return new (t || ControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService));
};
ControlComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ControlComponent,
  selectors: [["", "app-control", ""]],
  attrs: _c0,
  decls: 5,
  vars: 0,
  consts: [[1, "flex-1", "flex", "sm:flex-row", "flex-col-reverse", "h-1/2"], [1, "relative", "z-0", "flex", "flex-col", "flex-1", "h-1/2", "sm:h-auto", "overflow-hidden"]],
  template: function ControlComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "topbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0)(2, "main", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "a-control-space-list");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "footer-menu");
    }
  },
  dependencies: [_components_topbar_component__WEBPACK_IMPORTED_MODULE_1__.TopbarComponent, _components_footer_menu_component__WEBPACK_IMPORTED_MODULE_2__.FooterMenuComponent, _space_list_component__WEBPACK_IMPORTED_MODULE_3__.ControlSpaceListComponent],
  styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n                background: #f0f0f0;\n            }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLHNCQUFzQjtnQkFDdEIsWUFBWTtnQkFDWixXQUFXO2dCQUNYLG1CQUFtQjtZQUN2QiIsImZpbGUiOiJjb250cm9sLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2YwZjBmMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd29ya3BsYWNlL3NyYy9hcHAvY29udHJvbC9jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixzQkFBc0I7Z0JBQ3RCLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCxtQkFBbUI7WUFDdkI7O0FBRVosNGxCQUE0bEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 94532:
/*!**********************************************************!*\
  !*** ./apps/workplace/src/app/control/control.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlModule": () => (/* binding */ ControlModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _control_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control.component */ 9974);
/* harmony import */ var _space_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./space-list.component */ 73370);
/* harmony import */ var _list_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-item.component */ 37294);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/shared.module */ 75206);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);









const ROUTES = [{
  path: '',
  component: _control_component__WEBPACK_IMPORTED_MODULE_0__.ControlComponent
}];
class ControlModule {}
ControlModule.ɵfac = function ControlModule_Factory(t) {
  return new (t || ControlModule)();
};
ControlModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: ControlModule
});
ControlModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(ROUTES), _components_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedComponentModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ControlModule, {
    declarations: [_control_component__WEBPACK_IMPORTED_MODULE_0__.ControlComponent, _space_list_component__WEBPACK_IMPORTED_MODULE_1__.ControlSpaceListComponent, _list_item_component__WEBPACK_IMPORTED_MODULE_2__.ControlSpaceListItemComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _components_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedComponentModule]
  });
})();

/***/ }),

/***/ 37294:
/*!***************************************************************!*\
  !*** ./apps/workplace/src/app/control/list-item.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlSpaceListItemComponent": () => (/* binding */ ControlSpaceListItemComponent)
/* harmony export */ });
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 88397);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/organisation */ 6221);
/* harmony import */ var _placeos_spaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/spaces */ 43404);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 65306);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _libs_components_src_lib_safe_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/safe.pipe */ 60158);











const _c0 = function () {
  return ["/explore"];
};
const _c1 = function (a0) {
  return {
    space: a0
  };
};
function ControlSpaceListItemComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4)(5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6)(8, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 7)(12, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " Control ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " Find ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("with-image", ctx_r0.show_image);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.space.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.space.capacity || "0", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](13, 8, ctx_r0.space.support_url, "url"), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](11, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](12, _c1, ctx_r0.space.id));
  }
}
class ControlSpaceListItemComponent {
  get show_image() {
    return this._settings.get('app.spaces.show_images');
  }
  /** Display location of the space */
  get location() {
    if (!this.space) {
      return 'Unable to determine location';
    }
    const level = this.space.level;
    const bld = this._org.buildings.find(building => building.id === level.parent_id);
    return `${bld ? (bld.display_name || bld.name) + ', ' : ''}${level?.display_name || level?.name || '<No Level>'}`;
  }
  constructor(_settings, _org) {
    this._settings = _settings;
    this._org = _org;
  }
}
ControlSpaceListItemComponent.ɵfac = function ControlSpaceListItemComponent_Factory(t) {
  return new (t || ControlSpaceListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_1__.OrganisationService));
};
ControlSpaceListItemComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ControlSpaceListItemComponent,
  selectors: [["a-control-space-list-item"]],
  inputs: {
    space: "space"
  },
  decls: 1,
  vars: 1,
  consts: [["class", "flex flex-wrap items-center sm:space-x-4 bg-white hover:bg-gray-100 overflow-hidden p-2 pl-4 mb-2", 3, "with-image", 4, "ngIf"], [1, "flex", "flex-wrap", "items-center", "sm:space-x-4", "bg-white", "hover:bg-gray-100", "overflow-hidden", "p-2", "pl-4", "mb-2"], [1, "flex", "flex-col", "flex-1"], [1, "text-xl"], [1, "flex", "items-center", "w-full", "text-sm"], [1, "flex-1"], [1, "flex", "items-center", "text-lg"], [1, "flex", "w-full", "sm:w-auto", "sm:flex-col", "items-center", "space-x-2", "sm:space-x-0", "sm:space-y-2", "mt-4", "sm:mt-0"], ["btn", "", "matRipple", "", "button", "", "control", "", 1, "w-32", "flex-1", "sm:flex-none", 3, "href"], ["btn", "", "matRipple", "", "button", "", "locate", "", 1, "w-32", "flex-1", "sm:flex-none", "inverse", 3, "routerLink", "queryParams"]],
  template: function ControlSpaceListItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ControlSpaceListItemComponent_div_0_Template, 17, 14, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.space);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRipple, _libs_components_src_lib_safe_pipe__WEBPACK_IMPORTED_MODULE_4__.SafePipe]
});


/***/ }),

/***/ 73370:
/*!****************************************************************!*\
  !*** ./apps/workplace/src/app/control/space-list.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlSpaceListComponent": () => (/* binding */ ControlSpaceListComponent)
/* harmony export */ });
/* harmony import */ var _Users_yuion_Documents_work_repos_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 25670);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 88397);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 6221);
/* harmony import */ var _placeos_spaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/spaces */ 43404);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 65306);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 15312);
/* harmony import */ var _list_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-item.component */ 37294);















function ControlSpaceListComponent_mat_spinner_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-spinner", 7);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("diameter", 32);
  }
}
function ControlSpaceListComponent_div_6_a_control_space_list_item_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "a-control-space-list-item", 10);
  }
  if (rf & 2) {
    const space_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("space", space_r5);
  }
}
function ControlSpaceListComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ControlSpaceListComponent_div_6_a_control_space_list_item_1_Template, 1, 1, "a-control-space-list-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.filtered_list);
  }
}
function ControlSpaceListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 11)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r3.search_str ? " No matches for \"" + ctx_r3.search_str + "\"" : "No controllable spaces", " ");
  }
}
class ControlSpaceListComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  constructor(_spaces, _org) {
    super();
    this._spaces = _spaces;
    this._org = _org;
    /** List of controllable spaces */
    this.space_list = [];
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_yuion_Documents_work_repos_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this._spaces.initialised.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.first)(_ => _)).toPromise();
      _this.space_list = _this._spaces.filter(space => !!space.support_url);
      _this.space_list.sort((a, b) => _this.sortSpaces(a, b));
    })();
  }
  /** List of spaces filtered using the search string */
  get filtered_list() {
    const search = (this.search_str || '').toLowerCase();
    return (this.space_list || []).filter(space => {
      const bld = this._org.buildings.find(building => building.id === space.level.parent_id);
      const space_name = (space.name || '').toLowerCase();
      const level_name = ((space.level ? space.level.name : '') || '').toLowerCase();
      const bld_name = ((bld ? bld.name : '') || '').toLowerCase();
      return space_name.indexOf(search) >= 0 || level_name && level_name.indexOf(search) >= 0 || bld_name && bld_name.indexOf(search) >= 0;
    });
  }
  sortSpaces(first, second) {
    const bld_a = this._org.buildings.find(building => building.id === first.level?.parent_id);
    const space_a_name = (first.name || '').toLowerCase();
    const level_a_name = ((first.level ? first.level.name : '') || '').toLowerCase();
    const bld_a_name = (bld_a?.name || '').toLowerCase();
    const bld_b = this._org.buildings.find(building => building.id === second.level?.parent_id);
    const space_b_name = (second.name || '').toLowerCase();
    const level_b_name = ((second.level ? second.level.name : '') || '').toLowerCase();
    const bld_b_name = (bld_b?.name || '').toLowerCase();
    return bld_a_name.localeCompare(bld_b_name) || level_a_name.localeCompare(level_b_name) || space_a_name.localeCompare(space_b_name);
  }
}
ControlSpaceListComponent.ɵfac = function ControlSpaceListComponent_Factory(t) {
  return new (t || ControlSpaceListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_placeos_spaces__WEBPACK_IMPORTED_MODULE_3__.SpacesService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService));
};
ControlSpaceListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: ControlSpaceListComponent,
  selectors: [["a-control-space-list"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
  decls: 9,
  vars: 4,
  consts: [[1, "w-full", "flex", "items-center", "justify-center", "p-2"], ["overlay", "", "appearance", "outline", 1, "rounded", "h-12"], ["matPrefix", "", 1, "text-xl"], ["matInput", "", "placeholder", "Search...", 3, "ngModel", "ngModelChange"], ["matSuffix", "", "class", "top-2", 3, "diameter", 4, "ngIf"], ["class", "flex flex-col flex-1 overflow-auto w-full", 4, "ngIf", "ngIfElse"], ["empty_state", ""], ["matSuffix", "", 1, "top-2", 3, "diameter"], [1, "flex", "flex-col", "flex-1", "overflow-auto", "w-full"], [3, "space", 4, "ngFor", "ngForOf"], [3, "space"], [1, "flex", "flex-col", "items-center", "p-8"]],
  template: function ControlSpaceListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "mat-form-field", 1)(2, "app-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "search");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ControlSpaceListComponent_Template_input_ngModelChange_4_listener($event) {
        return ctx.search_str = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ControlSpaceListComponent_mat_spinner_5_Template, 1, 1, "mat-spinner", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ControlSpaceListComponent_div_6_Template, 2, 1, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ControlSpaceListComponent_ng_template_7_Template, 5, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.search_str);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.filtered_list.length)("ngIfElse", _r2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__.IconComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinner, _list_item_component__WEBPACK_IMPORTED_MODULE_5__.ControlSpaceListItemComponent],
  styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n            }\n\n            mat-form-field[_ngcontent-%COMP%] {\n                width: 48rem;\n                max-width: calc(100% - 2rem);\n            }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwYWNlLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLHNCQUFzQjtnQkFDdEIsWUFBWTtnQkFDWixXQUFXO1lBQ2Y7O1lBRUE7Z0JBQ0ksWUFBWTtnQkFDWiw0QkFBNEI7WUFDaEMiLCJmaWxlIjoic3BhY2UtbGlzdC5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ4cmVtO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMnJlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd29ya3BsYWNlL3NyYy9hcHAvY29udHJvbC9zcGFjZS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixzQkFBc0I7Z0JBQ3RCLFlBQVk7Z0JBQ1osV0FBVztZQUNmOztZQUVBO2dCQUNJLFlBQVk7Z0JBQ1osNEJBQTRCO1lBQ2hDOztBQUVaLHd2QkFBd3ZCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWF0LWZvcm0tZmllbGQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0OHJlbTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDJyZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ })

}]);
//# sourceMappingURL=apps_workplace_src_app_control_control_module_ts.js.map