(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["directory-directory-module"],{

/***/ "KlkT":
/*!***********************************************!*\
  !*** ./src/app/directory/directory.module.ts ***!
  \***********************************************/
/*! exports provided: DirectoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectoryModule", function() { return DirectoryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _ui_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/shared.module */ "R3Ii");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-list/user-list.component */ "N1CQ");
/* harmony import */ var _user_list_item_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-list/item/item.component */ "kbXw");








const ROUTES = [{ path: '', component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["DirectoryUserListComponent"] }];
class DirectoryModule {
}
DirectoryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DirectoryModule });
DirectoryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DirectoryModule_Factory(t) { return new (t || DirectoryModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES), _ui_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedContentModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DirectoryModule, { declarations: [_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["DirectoryUserListComponent"], _user_list_item_item_component__WEBPACK_IMPORTED_MODULE_5__["DirectoryUserListItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ui_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedContentModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DirectoryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["DirectoryUserListComponent"], _user_list_item_item_component__WEBPACK_IMPORTED_MODULE_5__["DirectoryUserListItemComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES), _ui_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedContentModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "N1CQ":
/*!************************************************************!*\
  !*** ./src/app/directory/user-list/user-list.component.ts ***!
  \************************************************************/
/*! exports provided: DirectoryUserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectoryUserListComponent", function() { return DirectoryUserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interfaces/users */ "mjT4");
/* harmony import */ var _ui_topbar_header_topbar_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/topbar-header/topbar-header.component */ "e81E");
/* harmony import */ var _ui_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/searchbar/searchbar.component */ "ek5h");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _ui_footer_menu_footer_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/footer-menu/footer-menu.component */ "C9Ki");
/* harmony import */ var _ui_overlay_menu_overlay_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/overlay-menu/overlay-menu.component */ "d4mj");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./item/item.component */ "kbXw");
/* harmony import */ var _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../libs/components/src/lib/icon/icon.component */ "ukpX");















function DirectoryUserListComponent_ng_container_7_ng_container_1_ng_container_1_a_directory_user_list_item_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a-directory-user-list-item", 14);
} if (rf & 2) {
    const user_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", user_r7);
} }
function DirectoryUserListComponent_ng_container_7_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DirectoryUserListComponent_ng_container_7_ng_container_1_ng_container_1_a_directory_user_list_item_3_Template, 1, 1, "a-directory-user-list-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const letter_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](letter_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.groupedUsers[letter_r4]);
} }
function DirectoryUserListComponent_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DirectoryUserListComponent_ng_container_7_ng_container_1_ng_container_1_Template, 4, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const letter_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.groupedUsers[letter_r4].length);
} }
function DirectoryUserListComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DirectoryUserListComponent_ng_container_7_ng_container_1_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.letters);
} }
const _c0 = function (a2) { return { type: "icon", class: "material-icons", content: a2 }; };
function DirectoryUserListComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r2.search_str && ctx_r2.search_str.length >= ctx_r2.min_search_length ? "close" : "arrow_upward"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.search_str && ctx_r2.search_str.length >= ctx_r2.min_search_length ? " No matches for \"" + ctx_r2.search_str + "\"" : "Type above to search for users", " ");
} }
const LETTERS = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`.split('');
class DirectoryUserListComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["BaseClass"] {
    constructor(_settings, _users) {
        super();
        this._settings = _settings;
        this._users = _users;
        /** List of controllable spaces */
        this.user_list = [];
        /** Subject holding the value of the search */
        this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.groupedUsers = {};
    }
    /** Minimum length of the search string needed to initial a search */
    get min_search_length() {
        const length = this._settings.get('app.directory.min_search_length');
        return typeof length === 'number' && length >= 0 ? length : 3;
    }
    ngOnInit() {
        // Listen for input changes
        this.search_results$ = this.search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((query) => {
            this.loading = true;
            const retVal = query.length >= this.min_search_length
                ? this._users.query({ q: query }).catch(() => [])
                : Promise.resolve(this.user_list || []);
            return retVal;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((list) => {
            this.loading = false;
            return list;
        }));
        // Process API results
        this.subscription('search_results', this.search_results$.subscribe((list) => {
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
            this.groupedUsers[letter] = sorted.filter((f) => f.name.startsWith(letter));
        }
    }
}
DirectoryUserListComponent.ɵfac = function DirectoryUserListComponent_Factory(t) { return new (t || DirectoryUserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_interfaces_users__WEBPACK_IMPORTED_MODULE_4__["StaffService"])); };
DirectoryUserListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DirectoryUserListComponent, selectors: [["a-directory-user-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 13, vars: 12, consts: [[1, "directory", "page"], [1, "header"], [3, "menu", "menuChange"], [1, "actions"], [1, "search"], ["placeholder", "Search for a person...", 3, "value", "loading", "autofocus", "flat", "valueChange"], [4, "ngIf", "ngIfElse"], [1, "footer"], ["empty_state", ""], [3, "show", "showChange"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "letter"], [3, "user", 4, "ngFor", "ngForOf"], [3, "user"], [1, "list"], [1, "info-block"], [1, "icon"], [3, "icon"], [1, "text"]], template: function DirectoryUserListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a-topbar-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("menuChange", function DirectoryUserListComponent_Template_a_topbar_header_menuChange_2_listener($event) { return ctx.show_menu = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a-searchbar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function DirectoryUserListComponent_Template_a_searchbar_valueChange_5_listener($event) { return ctx.search_str = $event; })("valueChange", function DirectoryUserListComponent_Template_a_searchbar_valueChange_5_listener($event) { return ctx.search$.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DirectoryUserListComponent_ng_container_7_Template, 2, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "footer", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "a-footer-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DirectoryUserListComponent_ng_template_10_Template, 6, 4, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a-overlay-menu", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("showChange", function DirectoryUserListComponent_Template_a_overlay_menu_showChange_12_listener($event) { return ctx.show_menu = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("menu", ctx.show_menu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("blank", false)("has-back", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.search_str)("loading", ctx.loading)("autofocus", true)("flat", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.groupedUsers && ctx.user_list.length)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.show_menu);
    } }, directives: [_ui_topbar_header_topbar_header_component__WEBPACK_IMPORTED_MODULE_5__["TopbarHeaderComponent"], _ui_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_6__["SearchbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ui_footer_menu_footer_menu_component__WEBPACK_IMPORTED_MODULE_8__["FooterMenuComponent"], _ui_overlay_menu_overlay_menu_component__WEBPACK_IMPORTED_MODULE_9__["OverlayMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _item_item_component__WEBPACK_IMPORTED_MODULE_10__["DirectoryUserListItemComponent"], _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_11__["IconComponent"]], styles: [".page[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  background: #f0f0f0;\n}\n.page[_ngcontent-%COMP%]   main[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n}\n.page[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  height: 3.5em;\n}\n.page[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  background: white;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.page[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.page[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex: 1;\n}\n.page[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: none;\n}\n.page[_ngcontent-%COMP%]   .actions.has-back[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: block;\n}\n.page[_ngcontent-%COMP%]   .actions.has-back[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  margin-left: 0.5em;\n  font-size: 1.5em;\n}\n.page[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.page[_ngcontent-%COMP%]   .actions.blank[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.page[_ngcontent-%COMP%]   .actions.blank[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%], .page[_ngcontent-%COMP%]   .actions.blank[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  display: none;\n}\n.page[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  height: 3.5em;\n  background: white;\n}\n.page.directory[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n.page.directory[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  display: none;\n  width: 0;\n}\n.page.directory[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.page.directory[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   a-searchbar[_ngcontent-%COMP%]   .searchbar[_ngcontent-%COMP%] {\n  border-radius: unset;\n  box-shadow: none;\n}\n.page.directory[_ngcontent-%COMP%]   main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.page.directory[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   a-directory-user-list-item[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 0.5em;\n}\n.page.directory[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .letter[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.2em;\n  padding: 0.25em 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC1zdHlsZXMvdmFyaWFibGVzLnNjc3MiLCJhcHBzL3dvcmtwbGFjZS9zcmMvYXBwL3NoZWxsLWxheW91dC5zY3NzIiwiYXBwcy93b3JrcGxhY2Uvc3JjL2FwcC9kaXJlY3RvcnkvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7cUJBQUE7QUFlQTs7MEJBQUE7QUF3Q0E7O2NBQUE7QUFhQTs7c0JBQUE7QUNwRUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ2FKO0FEWEk7RUFDSSxPQUFBO0VBQ0EsY0FBQTtBQ2FSO0FEVkk7RUFDSSxhQUFBO0FDWVI7QURUSTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ1dSO0FEVFE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ1daO0FEUlE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0FDVVo7QURUWTtFQUNJLGFBQUE7QUNXaEI7QURMZ0I7RUFDSSxjQUFBO0FDT3BCO0FETm9CO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ1F4QjtBREZRO0VBQ0ksWUFBQTtBQ0laO0FERFE7RUFDSSx1QkFBQTtBQ0daO0FERFk7O0VBRUksYUFBQTtBQ0doQjtBREVJO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FDQVI7QUEvREU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQWtFSjtBQWpFSTtFQUNFLGFBQUE7RUFDQSxRQUFBO0FBbUVOO0FBakVJO0VBQ0UsV0FBQTtBQW1FTjtBQWpFUTtFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7QUFtRVY7QUE5REU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFnRUo7QUEvREk7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7QUFpRU47QUEvREk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFpRU4iLCJmaWxlIjoiYXBwcy93b3JrcGxhY2Uvc3JjL2FwcC9kaXJlY3RvcnkvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qPT09PT09PT09PT09PT09PT09KlxcXG58fCBCcmFuZGluZyBDb2xvdXJzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT0qL1xuXG4kcHdjLW9yYW5nZTogI0QwNEEwMjtcbiRwd2Mtcm9zZTogI0Q5Mzk1NDtcbiRwd2MtcmVkOiAjRTAzMDFFO1xuJHB3Yy15ZWxsb3c6ICNGRkI2MDA7XG4kcHdjLXRhbmdlcmluZTogI0VCOEMwMDtcblxuJGxpZ2h0LWdyZXk6ICNkZGRkZGQ7XG5cbiRib3hTaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoIzAwMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgjMDAwLCAwLjE0KSxcbiAgICAwIDJweCAxcHggLTFweCByZ2JhKCMwMDAsIDAuMTIpO1xuXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzIxYTQ1MztcbiRzdWNjZXNzLWxpZ2h0OiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHBlbmRpbmc6ICNmZmJmMWY7XG4kcGVuZGluZy1saWdodDogbGlnaHRlbigkcGVuZGluZywgMTApO1xuJHBlbmRpbmctZGFyazogZGFya2VuKCRwZW5kaW5nLCAxMCk7XG5cbiRlcnJvcjogI2Y0NDMzNjtcbiRlcnJvci1saWdodDogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cbiRjb2xvci1wcmltYXJ5OiAjZDA0YTAyO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcbiRjb2xvci1wcmltYXJ5LWRhcms6IGRhcmtlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjZTAzMDFlO1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogbGlnaHRlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6IGRhcmtlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG5cbiRiZy1saWdodDogI2YwZjBmMDtcbiRiZy1kYXJrOiAjMjYzMjM4O1xuJGZvb3Rlci1iYWNrOiAjMjYzMjM4O1xuJGdyZXk6ICM5Njk2OTY7XG5cbiRjb2xvci10ZXJuYXJ5OiAjMGEwZDJlO1xuJGNvbG9yLWV4dGVybmFsOiAjMTUxYzZhO1xuXG4vLyBUeXBlIGNvbG9ycyBmb3IgYm9va2luZyBzdGF0dXNcbiRpbnRlcm5hbDogJGNvbG9yLXByaW1hcnk7XG4kZXh0ZXJuYWw6ICRjb2xvci1leHRlcm5hbDtcbiRjYW5jZWxsZWQ6ICRncmV5O1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQtc3RhY2s6ICdIZWx2ZXRpY2EgTmV1ZScsIFJvYm90bywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuXG4kaGVhZGluZy1mb250OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuJGZvbnQ6ICRmb250LXN0YWNrO1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNnB4O1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG4iLCIucGFnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZDogI2YwZjBmMDtcblxuICAgIG1haW4ge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICB9XG5cbiAgICBoZWFkZXIge1xuICAgICAgICBoZWlnaHQ6IDMuNWVtO1xuICAgIH1cblxuICAgIC5hY3Rpb25zIHtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICAucm93IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuYmFjayB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmhhcy1iYWNrIHtcbiAgICAgICAgICAgIC5iYWNrIHtcbiAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgYXBwLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWFyY2gge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5ibGFuayB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgICAgICAgICAgLnNlYXJjaCxcbiAgICAgICAgICAgIC5iYWNrLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvb3RlciB7XG4gICAgICAgIGhlaWdodDogMy41ZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbkBpbXBvcnQgJy4uLy4uL3NoZWxsLWxheW91dC5zY3NzJztcblxuLnBhZ2UuZGlyZWN0b3J5IHtcbiAgLmFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAuYmFjayB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgd2lkdGg6IDA7XG4gICAgfVxuICAgIC5zZWFyY2gge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBhLXNlYXJjaGJhciB7XG4gICAgICAgIC5zZWFyY2hiYXIge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHVuc2V0O1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGEtZGlyZWN0b3J5LXVzZXItbGlzdC1pdGVtIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gICAgfVxuICAgIC5sZXR0ZXIge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgcGFkZGluZzogMC4yNWVtIDFlbTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DirectoryUserListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'a-directory-user-list',
                templateUrl: './user-list.component.html',
                styleUrls: ['./user-list.component.scss'],
            }]
    }], function () { return [{ type: _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] }, { type: _user_interfaces_users__WEBPACK_IMPORTED_MODULE_4__["StaffService"] }]; }, null); })();


/***/ }),

/***/ "kbXw":
/*!************************************************************!*\
  !*** ./src/app/directory/user-list/item/item.component.ts ***!
  \************************************************************/
/*! exports provided: DirectoryUserListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectoryUserListItemComponent", function() { return DirectoryUserListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @user-interfaces/users */ "mjT4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _libs_components_src_lib_user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../libs/components/src/lib/user-avatar/user-avatar.component */ "FGQ9");
/* harmony import */ var _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @acaprojects/ngx-pipes */ "81Qw");










function DirectoryUserListItemComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a-user-avatar", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", ctx_r1.user);
} }
function DirectoryUserListItemComponent_div_0_a_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DirectoryUserListItemComponent_div_0_a_13_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.sendCallEvent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Call ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, "tel:" + ctx_r2.user.phone, "url"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function () { return ["/explore"]; };
const _c1 = function (a0) { return { user: a0 }; };
function DirectoryUserListItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DirectoryUserListItemComponent_div_0_div_2_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DirectoryUserListItemComponent_div_0_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.sendLocateEvent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Locate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DirectoryUserListItemComponent_div_0_a_13_Template, 3, 4, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("with-image", ctx_r0.show_image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.show_image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 9, "mailto:" + ctx_r0.user.email, "url"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx_r0.user.email));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.user.phone);
} }
class DirectoryUserListItemComponent {
    constructor(_settings) {
        this._settings = _settings;
    }
    get show_image() {
        return this._settings.get('app.directory.show_avatars');
    }
    sendLocateEvent() {
        // this._service.Analytics.event('Locate', `locate_clicked_user_${this.user.name}`);
    }
    sendCallEvent() {
        // this._service.Analytics.event('Call', `call_clicked_user_${this.user.name}`);
    }
}
DirectoryUserListItemComponent.ɵfac = function DirectoryUserListItemComponent_Factory(t) { return new (t || DirectoryUserListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["SettingsService"])); };
DirectoryUserListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DirectoryUserListItemComponent, selectors: [["a-directory-user-list-item"]], inputs: { user: "user" }, decls: 1, vars: 1, consts: [["class", "space-details", 3, "with-image", 4, "ngIf"], [1, "space-details"], [1, "group"], ["class", "avatar", 4, "ngIf"], [1, "details"], [1, "name"], [1, "info"], ["name", "email", 3, "href"], [1, "actions"], ["mat-flat-button", "", "color", "primary", "button", "", "name", "locate", 3, "routerLink", "queryParams", "click"], ["mat-flat-button", "", "color", "primary", "button", "", "name", "call", 3, "href", "click", 4, "ngIf"], [1, "avatar"], [3, "user"], ["mat-flat-button", "", "color", "primary", "button", "", "name", "call", 3, "href", "click"]], template: function DirectoryUserListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DirectoryUserListItemComponent_div_0_Template, 14, 15, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _libs_components_src_lib_user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_6__["UserAvatarComponent"]], pipes: [_acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_7__["ɵa"]], styles: ["@keyframes wait {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.space-details[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  background-color: #fff;\n  flex-wrap: wrap;\n  overflow: hidden;\n  transition: all 200ms;\n  padding: 0 1em;\n}\n.space-details[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n.space-details[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  display: none;\n}\n.with-image[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  display: initial;\n}\n.group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex: 1;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .group[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #ccc;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .group[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #ccc;\n  }\n}\n.details[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 50%;\n  padding: 0.5em 1em;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .details[_ngcontent-%COMP%] {\n    padding: 1em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .details[_ngcontent-%COMP%] {\n    padding: 1em;\n  }\n}\n.info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: rgba(0, 0, 0, 0.65);\n}\n.info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.65);\n}\n.name[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n.location[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  flex: 1;\n  min-width: 50%;\n}\n.capacity[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .actions[_ngcontent-%COMP%] {\n    flex-direction: row;\n    flex: 1;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .actions[_ngcontent-%COMP%] {\n    flex-direction: row;\n    flex: 1;\n  }\n}\na[button][_ngcontent-%COMP%] {\n  width: 8em;\n  margin: 0.5em 0.5em 0;\n}\na[button][_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0.5em;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  a[button][_ngcontent-%COMP%] {\n    width: 12em;\n    margin: 0.5em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  a[button][_ngcontent-%COMP%] {\n    width: 12em;\n    margin: 0.5em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC1zdHlsZXMvdmFyaWFibGVzLnNjc3MiLCJzaGFyZWQtc3R5bGVzL21peGlucy5zY3NzIiwiYXBwcy93b3JrcGxhY2Uvc3JjL2FwcC9kaXJlY3RvcnkvdXNlci1saXN0L2l0ZW0vaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7cUJBQUE7QUFlQTs7MEJBQUE7QUF3Q0E7O2NBQUE7QUFhQTs7c0JBQUE7QUFwRUE7O3FCQUFBO0FBZUE7OzBCQUFBO0FBd0NBOztjQUFBO0FBYUE7O3NCQUFBO0FDL0NBO0VBQ0k7SUFBSyxVQUFBO0VDS1A7RURKRTtJQUFPLFVBQUE7RUNPVDtBQUNGO0FETEE7RUFDSTtJQUFLLFVBQUE7RUNRUDtFRFBFO0lBQU8sVUFBQTtFQ1VUO0FBQ0Y7QURSQTs7c0JBQUE7QUMzQkE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBd0NGO0FBdkNFO0VBQ0UsOEJBQUE7QUF5Q0o7QUF2Q0U7RUFDRSxhQUFBO0FBeUNKO0FBcENFO0VBQ0UsZ0JBQUE7QUF1Q0o7QUFuQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0FBc0NGO0FEL0JRO0VDVlI7SUFLSSw2QkFBQTtFQXdDRjtBQUNGO0FEakNRO0VDYlI7SUFLSSw2QkFBQTtFQTZDRjtBQUNGO0FBMUNBO0VBQ0UsT0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQTZDRjtBRC9DUTtFQ0RSO0lBS0ksWUFBQTtFQStDRjtBQUNGO0FEakRRO0VDSlI7SUFLSSxZQUFBO0VBb0RGO0FBQ0Y7QUFqREE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQW9ERjtBQW5ERTtFQUNFLDBCQUFBO0FBcURKO0FBakRBO0VBQ0UsZ0JBQUE7QUFvREY7QUFqREE7RUFDRSxnQkFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0FBb0RGO0FBakRBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBb0RGO0FBakRBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQW9ERjtBRHhGUTtFQ2dDUjtJQU1JLG1CQUFBO0lBRUEsT0FBQTtFQXFERjtBQUNGO0FEM0ZRO0VDNkJSO0lBTUksbUJBQUE7SUFFQSxPQUFBO0VBMkRGO0FBQ0Y7QUF4REE7RUFDRSxVQUFBO0VBQ0EscUJBQUE7QUEyREY7QUExREU7RUFDRSxvQkFBQTtBQTRESjtBRDVHUTtFQzRDUjtJQU9JLFdBQUE7SUFFQSxhQUFBO0VBNERGO0FBQ0Y7QUQvR1E7RUN5Q1I7SUFPSSxXQUFBO0lBRUEsYUFBQTtFQWtFRjtBQUNGIiwiZmlsZSI6ImFwcHMvd29ya3BsYWNlL3NyYy9hcHAvZGlyZWN0b3J5L3VzZXItbGlzdC9pdGVtL2l0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKj09PT09PT09PT09PT09PT09PSpcXFxufHwgQnJhbmRpbmcgQ29sb3VycyB8fFxuXFwqPT09PT09PT09PT09PT09PT09Ki9cblxuJHB3Yy1vcmFuZ2U6ICNEMDRBMDI7XG4kcHdjLXJvc2U6ICNEOTM5NTQ7XG4kcHdjLXJlZDogI0UwMzAxRTtcbiRwd2MteWVsbG93OiAjRkZCNjAwO1xuJHB3Yy10YW5nZXJpbmU6ICNFQjhDMDA7XG5cbiRsaWdodC1ncmV5OiAjZGRkZGRkO1xuXG4kYm94U2hhZG93OiAwIDFweCAzcHggMCByZ2JhKCMwMDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoIzAwMCwgMC4xNCksXG4gICAgMCAycHggMXB4IC0xcHggcmdiYSgjMDAwLCAwLjEyKTtcblxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICMyMWE0NTM7XG4kc3VjY2Vzcy1saWdodDogbGlnaHRlbigkc3VjY2VzcywgMTApO1xuJHN1Y2Nlc3MtZGFyazogZGFya2VuKCRzdWNjZXNzLCAxMCk7XG5cbiRwZW5kaW5nOiAjZmZiZjFmO1xuJHBlbmRpbmctbGlnaHQ6IGxpZ2h0ZW4oJHBlbmRpbmcsIDEwKTtcbiRwZW5kaW5nLWRhcms6IGRhcmtlbigkcGVuZGluZywgMTApO1xuXG4kZXJyb3I6ICNmNDQzMzY7XG4kZXJyb3ItbGlnaHQ6IGxpZ2h0ZW4oJGVycm9yLCAxMCk7XG4kZXJyb3ItZGFyazogZGFya2VuKCRlcnJvciwgMTApO1xuXG4kY29sb3ItcHJpbWFyeTogI2QwNGEwMjtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcblxuJGNvbG9yLXNlY29uZGFyeTogI2UwMzAxZTtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuXG4kYmctbGlnaHQ6ICNmMGYwZjA7XG4kYmctZGFyazogIzI2MzIzODtcbiRmb290ZXItYmFjazogIzI2MzIzODtcbiRncmV5OiAjOTY5Njk2O1xuXG4kY29sb3ItdGVybmFyeTogIzBhMGQyZTtcbiRjb2xvci1leHRlcm5hbDogIzE1MWM2YTtcblxuLy8gVHlwZSBjb2xvcnMgZm9yIGJvb2tpbmcgc3RhdHVzXG4kaW50ZXJuYWw6ICRjb2xvci1wcmltYXJ5O1xuJGV4dGVybmFsOiAkY29sb3ItZXh0ZXJuYWw7XG4kY2FuY2VsbGVkOiAkZ3JleTtcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250LXN0YWNrOiAnSGVsdmV0aWNhIE5ldWUnLCBSb2JvdG8sIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcblxuJGhlYWRpbmctZm9udDogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiRmb250OiAkZm9udC1zdGFjaztcblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTZweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuIiwiXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AbWl4aW4gaGlkZS10ZXh0LW92ZXJmbG93IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93KCRjb2xvcjogIzAwMCwgJGRlcHRoOiAxKSB7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDFweCAqICgkZGVwdGggLSAxKSByZ2JhKCMwMDAsIC4yKSxcbiAgICAgICAgICAgICAgICAwIDFweCAxcHggMCByZ2JhKCMwMDAsIC4xNCksXG4gICAgICAgICAgICAgICAgMCAycHggMXB4IC0xcHggcmdiYSgjMDAwLCAuMTIpO1xufVxuXG5AbWl4aW4gZmFkZS1pbigkd2FpdCkge1xuICAgIGFuaW1hdGlvbjpcbiAgICAgICAgd2FpdCAjeyR3YWl0fSxcbiAgICAgICAgZmFkZS1pbiA0MDBtcyAjeyR3YWl0fTtcbn1cblxuQGtleWZyYW1lcyB3YWl0IHtcbiAgICAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgICAxMDAlIHsgb3BhY2l0eTogMDsgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xuICAgIDAlIHsgb3BhY2l0eTogMDsgfVxuICAgIDEwMCUgeyBvcGFjaXR5OiAxOyB9XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AaW1wb3J0ICdtaXhpbnMnO1xuXG4uc3BhY2UtZGV0YWlscyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XG4gIHBhZGRpbmc6IDAgMWVtO1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCMwMDAsIDAuMSk7XG4gIH1cbiAgLmF2YXRhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4ud2l0aC1pbWFnZSB7XG4gIC5hdmF0YXIge1xuICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gIH1cbn1cblxuLmdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleDogMTtcbiAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgfVxufVxuXG4uZGV0YWlscyB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogNTAlO1xuICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgcGFkZGluZzogMWVtO1xuICB9XG59XG5cbi5pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHJnYmEoJGZvbnQtZGFyaywgMC42NSk7XG4gIGEge1xuICAgIGNvbG9yOiByZ2JhKCRmb250LWRhcmssIDAuNjUpO1xuICB9XG59XG5cbi5uYW1lIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuLmxvY2F0aW9uIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiA1MCU7XG59XG5cbi5jYXBhY2l0eSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgIGZsZXg6IDE7XG4gIH1cbn1cblxuYVtidXR0b25dIHtcbiAgd2lkdGg6IDhlbTtcbiAgbWFyZ2luOiAwLjVlbSAwLjVlbSAwO1xuICAmOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICB9XG4gIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgd2lkdGg6IDEyZW07XG5cbiAgICBtYXJnaW46IDAuNWVtO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DirectoryUserListItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'a-directory-user-list-item',
                templateUrl: './item.component.html',
                styleUrls: ['./item.component.scss'],
            }]
    }], function () { return [{ type: _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["SettingsService"] }]; }, { user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=directory-directory-module.js.map