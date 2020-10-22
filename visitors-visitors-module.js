(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visitors-visitors-module"],{

/***/ "2sop":
/*!*********************************************!*\
  !*** ./src/app/visitors/visitors.module.ts ***!
  \*********************************************/
/*! exports provided: VisitorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorsModule", function() { return VisitorsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/ui.module */ "oRDy");
/* harmony import */ var _visitors_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visitors.component */ "ZRUe");








const ROUTES = [{ path: '', component: _visitors_component__WEBPACK_IMPORTED_MODULE_5__["VisitorsComponent"] }];
class VisitorsModule {
}
VisitorsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VisitorsModule });
VisitorsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VisitorsModule_Factory(t) { return new (t || VisitorsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ui_ui_module__WEBPACK_IMPORTED_MODULE_4__["UIModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(ROUTES),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VisitorsModule, { declarations: [_visitors_component__WEBPACK_IMPORTED_MODULE_5__["VisitorsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ui_ui_module__WEBPACK_IMPORTED_MODULE_4__["UIModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisitorsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _visitors_component__WEBPACK_IMPORTED_MODULE_5__["VisitorsComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ui_ui_module__WEBPACK_IMPORTED_MODULE_4__["UIModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(ROUTES),
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "ZRUe":
/*!************************************************!*\
  !*** ./src/app/visitors/visitors.component.ts ***!
  \************************************************/
/*! exports provided: VisitorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorsComponent", function() { return VisitorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _ui_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/sidebar.component */ "UfDH");



class VisitorsComponent {
}
VisitorsComponent.ɵfac = function VisitorsComponent_Factory(t) { return new (t || VisitorsComponent)(); };
VisitorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VisitorsComponent, selectors: [["app-visitors"]], decls: 2, vars: 0, consts: [[1, "relative"]], template: function VisitorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "main", 0);
    } }, directives: [_ui_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"]], styles: ["[_nghost-%COMP%] {\n                display: flex;\n                height: 100%;\n                width: 100%;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisitorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-visitors',
                template: `
        <sidebar></sidebar>
        <main class="relative">

        </main>
    `,
                styles: [
                    `
            :host {
                display: flex;
                height: 100%;
                width: 100%;
            }
        `
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=visitors-visitors-module.js.map