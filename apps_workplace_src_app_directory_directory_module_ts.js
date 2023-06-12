"use strict";
(self["webpackChunkworkplace"] = self["webpackChunkworkplace"] || []).push([["apps_workplace_src_app_directory_directory_module_ts"],{

/***/ 63572:
/*!**************************************************************!*\
  !*** ./apps/workplace/src/app/directory/directory.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectoryModule": () => (/* binding */ DirectoryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _user_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-list.component */ 18124);
/* harmony import */ var _user_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-details.component */ 99517);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared.module */ 75206);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);








const ROUTES = [{
  path: '',
  component: _user_list_component__WEBPACK_IMPORTED_MODULE_0__.DirectoryUserListComponent
}];
class DirectoryModule {}
DirectoryModule.ɵfac = function DirectoryModule_Factory(t) {
  return new (t || DirectoryModule)();
};
DirectoryModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: DirectoryModule
});
DirectoryModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(ROUTES), _components_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DirectoryModule, {
    declarations: [_user_list_component__WEBPACK_IMPORTED_MODULE_0__.DirectoryUserListComponent, _user_details_component__WEBPACK_IMPORTED_MODULE_1__.DirectoryUserListItemComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _components_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentModule]
  });
})();

/***/ }),

/***/ 99517:
/*!********************************************************************!*\
  !*** ./apps/workplace/src/app/directory/user-details.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectoryUserListItemComponent": () => (/* binding */ DirectoryUserListItemComponent)
/* harmony export */ });
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 88397);
/* harmony import */ var _placeos_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/users */ 42852);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _libs_components_src_lib_user_avatar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/user-avatar.component */ 99685);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _libs_components_src_lib_safe_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/safe.pipe */ 60158);









function DirectoryUserListItemComponent_div_0_a_user_avatar_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "a-user-avatar", 9);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("user", ctx_r1.user);
  }
}
function DirectoryUserListItemComponent_div_0_a_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DirectoryUserListItemComponent_div_0_a_11_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.sendCallEvent());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Call ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](1, 1, "tel:" + ctx_r2.user.phone, "url"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
const _c0 = function () {
  return ["/explore"];
};
const _c1 = function (a0) {
  return {
    user: a0
  };
};
function DirectoryUserListItemComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DirectoryUserListItemComponent_div_0_a_user_avatar_1_Template, 1, 1, "a-user-avatar", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 3)(3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6)(9, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DirectoryUserListItemComponent_div_0_Template_a_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.sendLocateEvent());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Locate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, DirectoryUserListItemComponent_div_0_a_11_Template, 3, 4, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("with-image", ctx_r0.show_image);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.show_image);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](6, 9, "mailto:" + ctx_r0.user.email, "url"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.user.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](12, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](13, _c1, ctx_r0.user.email));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.user.phone);
  }
}
class DirectoryUserListItemComponent {
  get show_image() {
    return this._settings.get('app.users.show_avatars');
  }
  sendLocateEvent() {
    // this._service.Analytics.event('Locate', `locate_clicked_user_${this.user.name}`);
  }
  sendCallEvent() {
    // this._service.Analytics.event('Call', `call_clicked_user_${this.user.name}`);
  }
  constructor(_settings) {
    this._settings = _settings;
  }
}
DirectoryUserListItemComponent.ɵfac = function DirectoryUserListItemComponent_Factory(t) {
  return new (t || DirectoryUserListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService));
};
DirectoryUserListItemComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: DirectoryUserListItemComponent,
  selectors: [["a-directory-user-list-item"]],
  inputs: {
    user: "user"
  },
  decls: 1,
  vars: 1,
  consts: [["class", "flex flex-wrap items-center sm:space-x-4 bg-white hover:bg-gray-100 overflow-hidden p-4 mb-2", 3, "with-image", 4, "ngIf"], [1, "flex", "flex-wrap", "items-center", "sm:space-x-4", "bg-white", "hover:bg-gray-100", "overflow-hidden", "p-4", "mb-2"], [3, "user", 4, "ngIf"], [1, "flex", "flex-col", "flex-1", "w-1/2", "ml-4", "sm:ml-0"], [1, "name"], ["name", "email", 1, "text-sm", "underline", 3, "href"], [1, "flex", "w-full", "sm:w-auto", "sm:flex-col", "items-center", "space-x-2", "sm:space-x-0", "sm:space-y-2", "mt-4", "sm:mt-0"], ["btn", "", "matRipple", "", "button", "", "locate", "", 1, "w-32", "flex-1", "sm:flex-none", 3, "routerLink", "queryParams", "click"], ["btn", "", "matRipple", "", "button", "", "class", "w-32 flex-1 sm:flex-nones", "call", "", 3, "href", "click", 4, "ngIf"], [3, "user"], ["btn", "", "matRipple", "", "button", "", "call", "", 1, "w-32", "flex-1", "sm:flex-nones", 3, "href", "click"]],
  template: function DirectoryUserListItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, DirectoryUserListItemComponent_div_0_Template, 12, 15, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.user);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _libs_components_src_lib_user_avatar_component__WEBPACK_IMPORTED_MODULE_2__.UserAvatarComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatRipple, _libs_components_src_lib_safe_pipe__WEBPACK_IMPORTED_MODULE_3__.SafePipe]
});


/***/ }),

/***/ 18124:
/*!*****************************************************************!*\
  !*** ./apps/workplace/src/app/directory/user-list.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectoryUserListComponent": () => (/* binding */ DirectoryUserListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 88397);
/* harmony import */ var _placeos_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/users */ 42852);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _components_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/topbar.component */ 64187);
/* harmony import */ var _components_footer_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer-menu.component */ 46012);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 65306);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ 15312);
/* harmony import */ var _user_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-details.component */ 99517);















const _c0 = ["a-directory-user-list", ""];
function DirectoryUserListComponent_mat_spinner_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-spinner", 10);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("diameter", 32);
  }
}
function DirectoryUserListComponent_ng_container_10_ng_container_1_ng_container_1_a_directory_user_list_item_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "a-directory-user-list-item", 15);
  }
  if (rf & 2) {
    const user_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("user", user_r8);
  }
}
function DirectoryUserListComponent_ng_container_10_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, DirectoryUserListComponent_ng_container_10_ng_container_1_ng_container_1_a_directory_user_list_item_3_Template, 1, 1, "a-directory-user-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const letter_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", letter_r5, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r6.groupedUsers[letter_r5]);
  }
}
function DirectoryUserListComponent_ng_container_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DirectoryUserListComponent_ng_container_10_ng_container_1_ng_container_1_Template, 4, 2, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const letter_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.groupedUsers[letter_r5].length);
  }
}
function DirectoryUserListComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DirectoryUserListComponent_ng_container_10_ng_container_1_Template, 2, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.letters);
  }
}
function DirectoryUserListComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16)(1, "app-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r3.search_str && ctx_r3.search_str.length >= ctx_r3.min_search_length ? "close" : "arrow_upward");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r3.search_str && ctx_r3.search_str.length >= ctx_r3.min_search_length ? " No matches for \"" + ctx_r3.search_str + "\"" : "Type above to search for users", " ");
  }
}
const LETTERS = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`.split('');
class DirectoryUserListComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_0__.AsyncHandler {
  /** Minimum length of the search string needed to initial a search */
  get min_search_length() {
    const length = this._settings.get('app.users.min_search_length');
    return typeof length === 'number' && length >= 0 ? length : 3;
  }
  constructor(_settings) {
    super();
    this._settings = _settings;
    /** List of searchable users */
    this.user_list = [];
    this.groupedUsers = {};
    /** Subject holding the value of the search */
    this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    /** List of users from an API search */
    this.search_results$ = this.search$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(400), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(query => {
      this.loading = true;
      const retVal = query.length >= this.min_search_length ? (0,_placeos_users__WEBPACK_IMPORTED_MODULE_1__.searchStaff)(query).toPromise().catch(() => []) : Promise.resolve(this.user_list || []);
      return retVal;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(list => {
      this.loading = false;
      return list;
    }));
  }
  ngOnInit() {
    // Process API results
    this.subscription('search_results', this.search_results$.subscribe(list => {
      this.user_list = list;
      this.buildGroups(this.user_list);
    }));
    this.search$.next('');
  }
  get letters() {
    return LETTERS;
  }
  buildGroups(users) {
    const sorted = users.sort((a, b) => a.name.localeCompare(b.name));
    for (const letter of this.letters) {
      this.groupedUsers[letter] = sorted.filter(f => f.name.startsWith(letter));
    }
  }
}
DirectoryUserListComponent.ɵfac = function DirectoryUserListComponent_Factory(t) {
  return new (t || DirectoryUserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService));
};
DirectoryUserListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: DirectoryUserListComponent,
  selectors: [["", "a-directory-user-list", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
  attrs: _c0,
  decls: 14,
  vars: 4,
  consts: [[1, "flex-1", "flex", "sm:flex-row", "flex-col-reverse", "h-1/2"], [1, "relative", "z-0", "flex", "flex-col", "flex-1", "h-1/2", "sm:h-auto", "overflow-hidden"], [1, "w-full", "flex", "items-center", "justify-center", "p-2"], ["overlay", "", "appearance", "outline", 1, "rounded"], ["matPrefix", "", 1, "text-xl"], ["matInput", "", "placeholder", "Search for a person...", 3, "ngModel", "ngModelChange"], ["matSuffix", "", "class", "top-2", 3, "diameter", 4, "ngIf"], [1, "flex-1", "h-1/2", "w-full"], [4, "ngIf", "ngIfElse"], ["empty_state", ""], ["matSuffix", "", 1, "top-2", 3, "diameter"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "py-2", "px-4", "font-medium"], [3, "user", 4, "ngFor", "ngForOf"], [3, "user"], [1, "flex", "flex-col", "items-center", "p-8"], [1, "text-5xl"], [1, "text"]],
  template: function DirectoryUserListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "topbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "mat-form-field", 3)(5, "app-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "search");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function DirectoryUserListComponent_Template_input_ngModelChange_7_listener($event) {
        return ctx.search_str = $event;
      })("ngModelChange", function DirectoryUserListComponent_Template_input_ngModelChange_7_listener($event) {
        return ctx.search$.next($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, DirectoryUserListComponent_mat_spinner_8_Template, 1, 1, "mat-spinner", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "main", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, DirectoryUserListComponent_ng_container_10_Template, 2, 1, "ng-container", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "footer-menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, DirectoryUserListComponent_ng_template_12_Template, 5, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.search_str);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.groupedUsers && ctx.user_list.length)("ngIfElse", _r2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _components_topbar_component__WEBPACK_IMPORTED_MODULE_2__.TopbarComponent, _components_footer_menu_component__WEBPACK_IMPORTED_MODULE_3__.FooterMenuComponent, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__.IconComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__.MatProgressSpinner, _user_details_component__WEBPACK_IMPORTED_MODULE_5__.DirectoryUserListItemComponent],
  styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n                background: #f0f0f0;\n            }\n\n            mat-form-field[_ngcontent-%COMP%] {\n                width: 48rem;\n                max-width: calc(100% - 2rem);\n            }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsbUJBQW1CO1lBQ3ZCOztZQUVBO2dCQUNJLFlBQVk7Z0JBQ1osNEJBQTRCO1lBQ2hDIiwiZmlsZSI6InVzZXItbGlzdC5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDhyZW07XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAycmVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd29ya3BsYWNlL3NyYy9hcHAvZGlyZWN0b3J5L3VzZXItbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsbUJBQW1CO1lBQ3ZCOztZQUVBO2dCQUNJLFlBQVk7Z0JBQ1osNEJBQTRCO1lBQ2hDOztBQUVaLHd6QkFBd3pCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ4cmVtO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMnJlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ })

}]);
//# sourceMappingURL=apps_workplace_src_app_directory_directory_module_ts.js.map