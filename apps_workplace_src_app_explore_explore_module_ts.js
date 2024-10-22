"use strict";
(self["webpackChunkworkplace"] = self["webpackChunkworkplace"] || []).push([["apps_workplace_src_app_explore_explore_module_ts"],{

/***/ 72739:
/*!*************************************************************!*\
  !*** ./apps/workplace/src/app/explore/explore.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExploreComponent: () => (/* binding */ ExploreComponent)
/* harmony export */ });
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/bookings */ 85616);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _components_topbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/topbar.component */ 17434);
/* harmony import */ var _components_footer_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer-menu.component */ 10895);
/* harmony import */ var _libs_explore_src_lib_explore_map_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/explore/src/lib/explore-map-view.component */ 83134);







function ExploreComponent_topbar_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "topbar");
  }
}
function ExploreComponent_footer_menu_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "footer-menu");
  }
}
class ExploreComponent {
  get hide_nav() {
    return localStorage.getItem('PlaceOS.hide_nav') === 'true';
  }
  constructor(_desks) {
    this._desks = _desks;
  }
  ngOnInit() {
    this._desks.error_on_host = false;
  }
  static #_ = this.ɵfac = function ExploreComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ExploreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_placeos_bookings__WEBPACK_IMPORTED_MODULE_0__.DesksService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ExploreComponent,
    selectors: [["app-explore"]],
    decls: 5,
    vars: 2,
    consts: [[4, "ngIf"], [1, "flex-1", "flex", "sm:flex-row", "flex-col-reverse", "h-1/2", "bg-base-200"], [1, "relative", "z-0", "flex", "flex-col", "flex-1", "h-1/2", "sm:h-auto", "overflow-hidden"]],
    template: function ExploreComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ExploreComponent_topbar_0_Template, 1, 0, "topbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "explore-map-view");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ExploreComponent_footer_menu_4_Template, 1, 0, "footer-menu", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.hide_nav);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.hide_nav);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _components_topbar_component__WEBPACK_IMPORTED_MODULE_1__.TopbarComponent, _components_footer_menu_component__WEBPACK_IMPORTED_MODULE_2__.FooterMenuComponent, _libs_explore_src_lib_explore_map_view_component__WEBPACK_IMPORTED_MODULE_3__.ExploreMapViewComponent],
    styles: ["[_nghost-%COMP%] {\n                position: absolute;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                overflow: hidden;\n                display: flex;\n                flex-direction: column;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGxvcmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxrQkFBa0I7Z0JBQ2xCLE1BQU07Z0JBQ04sT0FBTztnQkFDUCxRQUFRO2dCQUNSLFNBQVM7Z0JBQ1QsZ0JBQWdCO2dCQUNoQixhQUFhO2dCQUNiLHNCQUFzQjtZQUMxQiIsImZpbGUiOiJleHBsb3JlLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB9XG4gICAgICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd29ya3BsYWNlL3NyYy9hcHAvZXhwbG9yZS9leHBsb3JlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksa0JBQWtCO2dCQUNsQixNQUFNO2dCQUNOLE9BQU87Z0JBQ1AsUUFBUTtnQkFDUixTQUFTO2dCQUNULGdCQUFnQjtnQkFDaEIsYUFBYTtnQkFDYixzQkFBc0I7WUFDMUI7O0FBRVosd3ZCQUF3dkIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 86271:
/*!**********************************************************!*\
  !*** ./apps/workplace/src/app/explore/explore.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExploreModule: () => (/* binding */ ExploreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _explore_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore.component */ 72739);
/* harmony import */ var _placeos_explore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/explore */ 27009);
/* harmony import */ var _placeos_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/components */ 51588);
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/shared.module */ 46358);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);









const ROUTES = [{
  path: '',
  component: _explore_component__WEBPACK_IMPORTED_MODULE_0__.ExploreComponent
}, {
  path: ':search_type',
  component: _explore_component__WEBPACK_IMPORTED_MODULE_0__.ExploreComponent
}];
class ExploreModule {
  static #_ = this.ɵfac = function ExploreModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ExploreModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: ExploreModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    providers: [{
      provide: _placeos_components__WEBPACK_IMPORTED_MODULE_2__.MAP_FEATURE_DATA,
      useValue: {}
    }],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(ROUTES), _components_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedComponentModule, _placeos_explore__WEBPACK_IMPORTED_MODULE_1__.SharedExploreModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ExploreModule, {
    declarations: [_explore_component__WEBPACK_IMPORTED_MODULE_0__.ExploreComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _components_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedComponentModule, _placeos_explore__WEBPACK_IMPORTED_MODULE_1__.SharedExploreModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=apps_workplace_src_app_explore_explore_module_ts.js.map