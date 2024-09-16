"use strict";
(self["webpackChunkvisitor_kiosk"] = self["webpackChunkvisitor_kiosk"] || []).push([["apps_visitor-kiosk_src_app_checkin_checkin_module_ts"],{

/***/ 20224:
/*!***********************************************************************!*\
  !*** ./apps/visitor-kiosk/src/app/checkin/checkin-covid.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckinCovidComponent: () => (/* binding */ CheckinCovidComponent)
/* harmony export */ });
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _checkin_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkin-state.service */ 98488);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ 53804);










const _c0 = ["checkin-covid", ""];
const _c1 = () => ["/welcome"];
class CheckinCovidComponent {
  constructor(_router, _checkin) {
    this._router = _router;
    this._checkin = _checkin;
  }
  confirm() {
    if (!this.symptoms || !this.contact) return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_0__.notifyError)('Please select yes or no for each question');
    this._checkin.updateGuest({
      covid: this.contact === 'true',
      symptoms: this.symptoms === 'true'
    });
    if (this.symptoms === 'false' && this.contact === 'false') {
      this._router.navigate(['/checkin', 'results']);
    } else {
      this._checkin.setError('Please get tested for COVID-19 and self-isolate at home for 14 days');
      this._router.navigate(['/checkin', 'error']);
    }
  }
  static #_ = this.ɵfac = function CheckinCovidComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CheckinCovidComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_checkin_state_service__WEBPACK_IMPORTED_MODULE_1__.CheckinStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: CheckinCovidComponent,
    selectors: [["", "checkin-covid", ""]],
    attrs: _c0,
    decls: 55,
    vars: 5,
    consts: [[1, "bg-base-100", "rounded", "p-4", "relative", "overflow-y-auto", "overflow-x-hidden"], [1, "text-xl", "font-medium", "mb-4"], [1, "list-decimal", "list-inside"], [1, "list-disc", "list-inside", "px-4", "mb-4"], ["aria-label", "Has Symptoms", 3, "ngModelChange", "ngModel"], ["value", "true"], ["value", "false", 1, "ml-4"], [1, "my-4"], ["aria-label", "COVID contact or self-isolated", 3, "ngModelChange", "ngModel"], ["btn", "", "matRipple", "", 3, "click"], ["icon", "", "matRipple", "", 1, "absolute", "top-0", "right-0", 3, "routerLink"]],
    template: function CheckinCovidComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "COVID Disclaimer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ol", 2)(4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Do you have any of the following symptoms?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "br")(7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ul", 3)(9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Fever");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Cough");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Shortness of breath");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Chills");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Body aches");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Sore or scratchy throat");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Headache");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Runny nose");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Muscle pain");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Vomitting");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Nausea");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Diarrhoa");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Loss of taste or smell");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "mat-radio-group", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function CheckinCovidComponent_Template_mat_radio_group_ngModelChange_35_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.symptoms, $event) || (ctx.symptoms = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "mat-radio-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "mat-radio-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, " Have you been in contact with a COVID-19 case in the last 14 days or been asked to self-isolate by a health offical?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "br")(44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "mat-radio-group", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function CheckinCovidComponent_Template_mat_radio_group_ngModelChange_45_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.contact, $event) || (ctx.contact = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "mat-radio-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "mat-radio-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CheckinCovidComponent_Template_button_click_50_listener() {
          return ctx.confirm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "a", 10)(53, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.symptoms);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.contact);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", !ctx.symptoms && !ctx.contact);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatRipple, _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__.MatRadioButton, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
    styles: ["[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n                width: 32rem;\n                max-width: calc(100vw - 2rem);\n                max-height: calc(100% - 2rem);\n            }\n\n            button[_ngcontent-%COMP%] {\n                margin: 1rem 11rem 0;\n                width: 8rem;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNraW4tY292aWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxZQUFZO2dCQUNaLDZCQUE2QjtnQkFDN0IsNkJBQTZCO1lBQ2pDOztZQUVBO2dCQUNJLG9CQUFvQjtnQkFDcEIsV0FBVztZQUNmIiwiZmlsZSI6ImNoZWNraW4tY292aWQuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCA+IGRpdiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMycmVtO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDJyZW0pO1xuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDJyZW0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMXJlbSAxMXJlbSAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvdmlzaXRvci1raW9zay9zcmMvYXBwL2NoZWNraW4vY2hlY2tpbi1jb3ZpZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLFlBQVk7Z0JBQ1osNkJBQTZCO2dCQUM3Qiw2QkFBNkI7WUFDakM7O1lBRUE7Z0JBQ0ksb0JBQW9CO2dCQUNwQixXQUFXO1lBQ2Y7O0FBRVosNHRCQUE0dEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0ID4gZGl2IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzJyZW07XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gMnJlbSk7XG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMnJlbSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDExcmVtIDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDhyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 70431:
/*!*************************************************************************!*\
  !*** ./apps/visitor-kiosk/src/app/checkin/checkin-details.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckinDetailsComponent: () => (/* binding */ CheckinDetailsComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 57871);
/* harmony import */ var _checkin_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkin-state.service */ 98488);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
















const _c0 = ["checkin-details", ""];
const _c1 = () => ["/welcome"];
function CheckinDetailsComponent_form_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Confirm Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4)(5, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Host");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " The email address of your host is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 4)(12, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Please enter your full name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 4)(19, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "A valid email address is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 4)(26, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 4)(31, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Organisation / Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CheckinDetailsComponent_form_0_Template_button_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.updateGuest());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "a", 16)(38, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, ctx_r1.form));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c1));
  }
}
function CheckinDetailsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "mat-spinner", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Updating data and checking in... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("diameter", 48);
  }
}
class CheckinDetailsComponent {
  get induction_after_details() {
    return this._settings.get('app.induction_after_details');
  }
  constructor(_checkin, _router, _settings) {
    this._checkin = _checkin;
    this._router = _router;
    this._settings = _settings;
    this.form = this._checkin.form;
    this.loading = false;
  }
  ngOnInit() {
    this.form.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.first)()).subscribe(_ => !_ || !_.value.email ? this.previous() : '');
  }
  updateGuest() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loading = true;
      // await this._checkin.updateGuest();
      const result = yield _this._checkin.checkinGuest().then(() => true).catch(() => false);
      _this.loading = false;
      if (!result) return;
      if (_this.induction_after_details) {
        _this._router.navigate(['/checkin', 'induction']);
      } else {
        _this._router.navigate(['/checkin', 'results']);
      }
    })();
  }
  previous() {
    this._router.navigate(['/checkin', 'scan']);
  }
  static #_ = this.ɵfac = function CheckinDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CheckinDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_checkin_state_service__WEBPACK_IMPORTED_MODULE_1__.CheckinStateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_2__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: CheckinDetailsComponent,
    selectors: [["", "checkin-details", ""]],
    attrs: _c0,
    decls: 4,
    vars: 4,
    consts: [["load_state", ""], ["class", "bg-base-100 rounded shadow overflow-hidden relative flex flex-col items-center w-[36rem] p-4", 3, "formGroup", 4, "ngIf", "ngIfElse"], [1, "bg-base-100", "rounded", "shadow", "overflow-hidden", "relative", "flex", "flex-col", "items-center", "w-[36rem]", "p-4", 3, "formGroup"], [1, "text-2xl", "m-4"], ["field", "", 1, "flex", "flex-col"], ["form", "host"], ["appearance", "outline"], ["matInput", "", "name", "host", "formControlName", "host", "placeholder", "Host's Email Address"], ["form", "name"], ["matInput", "", "name", "name", "formControlName", "name", "placeholder", "Full Name"], ["form", "email"], ["matInput", "", "name", "email", "formControlName", "email", "placeholder", "Email Address"], ["matInput", "", "name", "phone", "type", "tel", "formControlName", "phone", "placeholder", "Phone Number"], ["form", "org"], ["matInput", "", "name", "org", "formControlName", "organisation", "placeholder", "Organisation / Company"], ["next", "", "btn", "", "matRipple", "", 3, "click"], ["icon", "", "matRipple", "", 1, "absolute", "top-0", "right-0", 3, "routerLink"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center"], [1, "flex", "flex-col", "items-center", "space-y-2", "bg-base-100", "rounded", "shadow", "p-16"], [3, "diameter"], [1, "my-4", "text-lg"]],
    template: function CheckinDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, CheckinDetailsComponent_form_0_Template, 40, 5, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CheckinDetailsComponent_ng_template_2_Template, 5, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const load_state_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, ctx.form) && !ctx.loading)("ngIfElse", load_state_r3);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatRipple, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinner, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
    styles: ["form[_ngcontent-%COMP%] {\n                width: 32rem;\n                max-width: calc(100vw - 2rem);\n            }\n\n            [field][_ngcontent-%COMP%] {\n                width: calc(100% - 2rem);\n            }\n\n            button[_ngcontent-%COMP%] {\n                margin-bottom: 1rem;\n                width: 8rem;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNraW4tZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLFlBQVk7Z0JBQ1osNkJBQTZCO1lBQ2pDOztZQUVBO2dCQUNJLHdCQUF3QjtZQUM1Qjs7WUFFQTtnQkFDSSxtQkFBbUI7Z0JBQ25CLFdBQVc7WUFDZiIsImZpbGUiOiJjaGVja2luLWRldGFpbHMuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICBmb3JtIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzJyZW07XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gMnJlbSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtmaWVsZF0ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAycmVtKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvdmlzaXRvci1raW9zay9zcmMvYXBwL2NoZWNraW4vY2hlY2tpbi1kZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksWUFBWTtnQkFDWiw2QkFBNkI7WUFDakM7O1lBRUE7Z0JBQ0ksd0JBQXdCO1lBQzVCOztZQUVBO2dCQUNJLG1CQUFtQjtnQkFDbkIsV0FBVztZQUNmOztBQUVaLG94QkFBb3hCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICBmb3JtIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzJyZW07XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gMnJlbSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFtmaWVsZF0ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAycmVtKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 31431:
/*!***********************************************************************!*\
  !*** ./apps/visitor-kiosk/src/app/checkin/checkin-error.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckinErrorComponent: () => (/* binding */ CheckinErrorComponent)
/* harmony export */ });
/* harmony import */ var _checkin_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkin-state.service */ 98488);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);






const _c0 = () => ["/welcome"];
function CheckinErrorComponent_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r0.error));
  }
}
class CheckinErrorComponent {
  constructor(_checkin) {
    this._checkin = _checkin;
    this.error = this._checkin.error;
  }
  static #_ = this.ɵfac = function CheckinErrorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CheckinErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_checkin_state_service__WEBPACK_IMPORTED_MODULE_0__.CheckinStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CheckinErrorComponent,
    selectors: [["checkin-error"]],
    decls: 9,
    vars: 5,
    consts: [[1, "bg-base-100", "rounded", "shadow", "overflow-hidden", "relative", "flex", "flex-col", "items-center", "m-4", "py-4", "px-16", "text-center", "space-y-4"], [1, "text-2xl", "pb-2"], [4, "ngIf"], ["btn", "", "matRipple", "", 1, "w-32", 3, "routerLink"]],
    template: function CheckinErrorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Please see reception.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CheckinErrorComponent_p_3_Template, 3, 3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Our staff at reception will assist you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, ctx.error));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRipple, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
    styles: ["[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n                width: 28rem;\n                max-width: calc(100vw - 2rem);\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNraW4tZXJyb3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxZQUFZO2dCQUNaLDZCQUE2QjtZQUNqQyIsImZpbGUiOiJjaGVja2luLWVycm9yLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3QgPiBkaXYge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyOHJlbTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSAycmVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvdmlzaXRvci1raW9zay9zcmMvYXBwL2NoZWNraW4vY2hlY2tpbi1lcnJvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLFlBQVk7Z0JBQ1osNkJBQTZCO1lBQ2pDOztBQUVaLHdjQUF3YyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3QgPiBkaXYge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyOHJlbTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSAycmVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 94718:
/*!***************************************************************************!*\
  !*** ./apps/visitor-kiosk/src/app/checkin/checkin-induction.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckinInductionComponent: () => (/* binding */ CheckinInductionComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _checkin_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkin-state.service */ 98488);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 57871);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);














const _c0 = ["checkin-induction", ""];
class CheckinInductionComponent {
  get induction_details() {
    return this._settings.get('app.induction_details');
  }
  get induction_after_details() {
    return this._settings.get('app.induction_after_details');
  }
  get is_enabled() {
    return this._settings.get('app.induction_enabled') && this._settings.get('app.induction_details');
  }
  constructor(_checkin, _router, _settings, _org) {
    this._checkin = _checkin;
    this._router = _router;
    this._settings = _settings;
    this._org = _org;
    this.event = this._checkin.event;
    this.agree = false;
    this.loading = false;
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this._org.initialised.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)(_ => _)).toPromise();
      const event = yield _this.event.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)()).toPromise();
      if (!event) _this._router.navigate(['/checkin']);
      if (!_this.is_enabled || event.induction === 'accepted') {
        if (_this.induction_after_details) {
          _this._router.navigate(['/checkin', 'results']);
        } else {
          _this._router.navigate(['/checkin', 'details']);
        }
      }
    })();
  }
  decline() {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = true;
      yield _this2._checkin.declineInduction().catch(err => {
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifyError)('Error declining induction', err);
        throw err;
      });
      _this2._checkin.setError('You have declined the induction.');
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifyInfo)('Induction declined successfully');
      _this2._router.navigate(['/checkin', 'error']);
    })();
  }
  continue() {
    var _this3 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.loading = true;
      yield _this3._checkin.completeInduction().catch(err => {
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifyError)('Error completing induction', err);
        throw err;
      });
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifySuccess)('Induction completed successfully');
      _this3._router.navigate(['/checkin', 'details']);
    })();
  }
  static #_ = this.ɵfac = function CheckinInductionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CheckinInductionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_checkin_state_service__WEBPACK_IMPORTED_MODULE_1__.CheckinStateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_2__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_3__.OrganisationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: CheckinInductionComponent,
    selectors: [["", "checkin-induction", ""]],
    attrs: _c0,
    decls: 12,
    vars: 3,
    consts: [[1, "relative", "bg-base-100", "rounded", "shadow", "overflow-hidden", "flex", "flex-col", "items-center", "w-[32rem]", "p-4"], [1, "my-4"], [1, "rounded", "border", "border-base-300", "w-full", "p-4", "opacity-60", "text-sm", "overflow-y-auto", "overflow-x-hidden", "max-h-[50vh]", "whitespace-pre-wrap"], [1, "my-4", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "justify-center", "space-x-2"], ["btn", "", "matRipple", "", 1, "w-32", "clear", "underline", 3, "click"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click", "disabled"]],
    template: function CheckinInductionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Please read the induction information below before proceeding ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-checkbox", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function CheckinInductionComponent_Template_mat_checkbox_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.agree, $event) || (ctx.agree = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " I agree ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 4)(8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CheckinInductionComponent_Template_button_click_8_listener() {
          return ctx.decline();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Decline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CheckinInductionComponent_Template_button_click_10_listener() {
          return ctx.continue();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " Accept ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.induction_details, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.agree);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.agree);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRipple, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckbox],
    encapsulation: 2
  });
}

/***/ }),

/***/ 1073:
/*!***********************************************************************!*\
  !*** ./apps/visitor-kiosk/src/app/checkin/checkin-photo.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckinPhotoComponent: () => (/* binding */ CheckinPhotoComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _checkin_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkin-state.service */ 98488);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _components_take_photo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/take-photo.component */ 99536);












const _c0 = () => ["/welcome"];
function CheckinPhotoComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Take a photo to continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "a-take-photo", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("photoAccepted", function CheckinPhotoComponent_div_0_Template_a_take_photo_photoAccepted_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.handlePhoto($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "a", 5)(5, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](1, _c0));
  }
}
function CheckinPhotoComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-spinner", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Printing guest pass... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("diameter", 48);
  }
}
class CheckinPhotoComponent {
  constructor(_checkin, _router) {
    this._checkin = _checkin;
    this._router = _router;
  }
  handlePhoto(event) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!event) {
        return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)('Error saving image, please try again');
      }
      _this.loading = true;
      _this._checkin.setPhoto(event);
      yield _this._checkin.printPass().catch(e => {
        _this.loading = false;
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)(e);
        throw e;
      });
      _this.loading = false;
      _this._router.navigate(['/checkin', 'results']);
    })();
  }
  static #_ = this.ɵfac = function CheckinPhotoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CheckinPhotoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_checkin_state_service__WEBPACK_IMPORTED_MODULE_2__.CheckinStateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: CheckinPhotoComponent,
    selectors: [["checkin-photo"]],
    decls: 3,
    vars: 2,
    consts: [["load_state", ""], ["class", "bg-base-100 rounded shadow overflow-hidden relative flex flex-col items-center p-4", 4, "ngIf", "ngIfElse"], [1, "bg-base-100", "rounded", "shadow", "overflow-hidden", "relative", "flex", "flex-col", "items-center", "p-4"], [1, "text-xl", "mb-4"], [3, "photoAccepted"], ["icon", "", "matRipple", "", 1, "absolute", "top-0", "right-0", 3, "routerLink"], [1, "flex", "flex-col", "items-center", "m-auto"], [3, "diameter"], [1, "my-4", "text-lg", "text-white"]],
    template: function CheckinPhotoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CheckinPhotoComponent_div_0_Template, 7, 2, "div", 1)(1, CheckinPhotoComponent_ng_template_1_Template, 4, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const load_state_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", load_state_r3);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRipple, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinner, _components_take_photo_component__WEBPACK_IMPORTED_MODULE_4__.TakePhotoComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink],
    styles: ["[_nghost-%COMP%] {\n                position: absolute;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                background-color: rgba(0, 0, 0, 0.5);\n            }\n\n            .absolute[_ngcontent-%COMP%] {\n                position: absolute;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNraW4tcGhvdG8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxrQkFBa0I7Z0JBQ2xCLGFBQWE7Z0JBQ2IsbUJBQW1CO2dCQUNuQix1QkFBdUI7Z0JBQ3ZCLE1BQU07Z0JBQ04sT0FBTztnQkFDUCxRQUFRO2dCQUNSLFNBQVM7Z0JBQ1Qsb0NBQW9DO1lBQ3hDOztZQUVBO2dCQUNJLGtCQUFrQjtZQUN0QiIsImZpbGUiOiJjaGVja2luLXBob3RvLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmFic29sdXRlIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvdmlzaXRvci1raW9zay9zcmMvYXBwL2NoZWNraW4vY2hlY2tpbi1waG90by5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGtCQUFrQjtnQkFDbEIsYUFBYTtnQkFDYixtQkFBbUI7Z0JBQ25CLHVCQUF1QjtnQkFDdkIsTUFBTTtnQkFDTixPQUFPO2dCQUNQLFFBQVE7Z0JBQ1IsU0FBUztnQkFDVCxvQ0FBb0M7WUFDeEM7O1lBRUE7Z0JBQ0ksa0JBQWtCO1lBQ3RCOztBQUVaLG8vQkFBby9CIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYWJzb2x1dGUge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 46651:
/*!*****************************************************************************!*\
  !*** ./apps/visitor-kiosk/src/app/checkin/checkin-preferences.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckinPreferencesComponent: () => (/* binding */ CheckinPreferencesComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_catering__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/catering */ 4157);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 57871);
/* harmony import */ var _checkin_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkin-state.service */ 98488);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 25175);
















const _c0 = () => ["/welcome"];
function CheckinPreferencesComponent_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r1.name, " ");
  }
}
class CheckinPreferencesComponent {
  constructor(_router, _checkin, _catering) {
    this._router = _router;
    this._checkin = _checkin;
    this._catering = _catering;
    this.menu = this._catering.menu.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(l => {
      return l.filter(_ => _.tags.find(_ => _.toLowerCase() === 'drink' || _.toLowerCase() === 'drinks' || _.toLowerCase() === 'beverage'));
    }));
  }
  update() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.beverage) return _this.next();
      const event = yield _this._checkin.event.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.first)(_ => !!_)).toPromise();
      if (!event) return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifyError)('Unable to load event data.');
      // const order =
      //     (event.ext('catering') ? event.ext('catering')[0] : null) ||
      //     new CateringOrder();
      // await updateEvent(
      //     event.id,
      //     new CalendarEvent({
      //         ...event,
      //         extension_data: {
      //             ...event.extension_data,
      //             catering: [
      //                 ...(event.extension_data.catering?.filter(
      //                     (_) => _.id !== order.id
      //                 ) || []),
      //                 new CateringOrder({
      //                     ...order,
      //                     items: [
      //                         ...order.items,
      //                         new CateringItem({
      //                             ...this.beverage,
      //                             quantity: 1,
      //                         }),
      //                     ],
      //                 }),
      //             ],
      //         },
      //     })
      // ).toPromise();
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifySuccess)('Successfully update event.');
      _this.next();
    })();
  }
  next() {
    this._router.navigate(['/welcome']);
  }
  static #_ = this.ɵfac = function CheckinPreferencesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CheckinPreferencesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_checkin_state_service__WEBPACK_IMPORTED_MODULE_3__.CheckinStateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_catering__WEBPACK_IMPORTED_MODULE_1__.CateringStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: CheckinPreferencesComponent,
    selectors: [["checkin-preferences"]],
    decls: 13,
    vars: 7,
    consts: [[1, "bg-base-100", "rounded", "shadow", "overflow-hidden", "relative", "flex", "flex-col", "items-center", "w-[36rem]", "p-4"], [1, "text-xl", "mb-2", "w-full"], [1, "w-full"], ["appearance", "outline", 1, "w-full"], ["placeholder", "Select beverage", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], ["icon", "", "matRipple", "", 1, "absolute", "top-0", "right-0", 3, "routerLink"], [3, "value"]],
    template: function CheckinPreferencesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Would you like a drink?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2)(4, "mat-form-field", 3)(5, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function CheckinPreferencesComponent_Template_mat_select_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.beverage, $event) || (ctx.beverage = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, CheckinPreferencesComponent_mat_option_6_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CheckinPreferencesComponent_Template_button_click_8_listener() {
          return ctx.update();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "a", 7)(11, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.beverage);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 4, ctx.menu));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.beverage ? "Update" : "Continue", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](6, _c0));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatRipple, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
    styles: ["[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n                max-width: calc(100vw - 2rem);\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNraW4tcHJlZmVyZW5jZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSw2QkFBNkI7WUFDakMiLCJmaWxlIjoiY2hlY2tpbi1wcmVmZXJlbmNlcy5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0ID4gZGl2IHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSAycmVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvdmlzaXRvci1raW9zay9zcmMvYXBwL2NoZWNraW4vY2hlY2tpbi1wcmVmZXJlbmNlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLDZCQUE2QjtZQUNqQzs7QUFFWixnYUFBZ2EiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0ID4gZGl2IHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSAycmVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 15566:
/*!*************************************************************************!*\
  !*** ./apps/visitor-kiosk/src/app/checkin/checkin-qr-scan.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckinQRScanComponent: () => (/* binding */ CheckinQRScanComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var qr_scanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qr-scanner */ 38279);
/* harmony import */ var _checkin_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkin-state.service */ 98488);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);

















const _c0 = ["video"];
const _c1 = ["checkin-qr-scan", ""];
const _c2 = () => ["/welcome"];
class CheckinQRScanComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  get is_induction_enabled() {
    return this._settings.get('app.induction_enabled') && this._settings.get('app.induction_details');
  }
  get induction_after_details() {
    return this._settings.get('app.induction_after_details');
  }
  constructor(_checkin, _router, _settings) {
    super();
    this._checkin = _checkin;
    this._router = _router;
    this._settings = _settings;
    this.checking_code = false;
  }
  ngAfterViewInit() {
    this.setupQRReader();
  }
  ngOnDestroy() {
    if (this._video_el.nativeElement.srcObject) {
      this._video_el.nativeElement.srcObject.getTracks().forEach(track => track?.stop());
    }
    this._reader?.stop();
  }
  checkQRCode(raw_text) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.checking_code) return;
      _this.timeout('check_qr_code', /*#__PURE__*/(0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this._reader?.stop();
        _this.checking_code = true;
        const chunks = raw_text.split(',');
        let [visit_block, system_id, event_id, host_email] = chunks;
        const [_, visitor_email] = visit_block.split(':');
        if (!visitor_email && !event_id) {
          (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)('Invalid QRCode');
          _this.setupQRReader();
          _this.checking_code = false;
          return;
        }
        if (!/^\d+$/.test(event_id)) event_id = undefined;
        yield _this._checkin.loadGuestAndEvent(visitor_email, event_id).catch(err => {
          _this.handleError(err.message || err);
          _this.checking_code = false;
          throw err;
        });
        const event = yield _this._checkin.event.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).toPromise();
        if (event.rejected) {
          _this.handleError('Your meeting has been rejected.');
          _this.checking_code = false;
          return;
        }
        if (_this.is_induction_enabled && event?.induction !== 'accepted') {
          _this._router.navigate(['/checkin', 'induction']);
        } else {
          _this._router.navigate(['/checkin', 'details']);
        }
        _this.checking_code = false;
      }));
    })();
  }
  checkEmail(email) {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!email || !email.includes('@') || email.length < 5) return;
      yield _this2._checkin.loadGuestAndEvent(email).catch(err => {
        _this2.handleError('Unable to find visitor or a meeting associated with the given email address.');
        throw err;
      });
      const event = yield _this2._checkin.event.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).toPromise();
      if (event.induction !== 'accepted' && _this2.is_induction_enabled && !_this2.induction_after_details) {
        _this2._router.navigate(['/checkin', 'induction']);
      } else {
        _this2._router.navigate(['/checkin', 'details']);
      }
    })();
  }
  setupQRReader() {
    this.timeout('setup_qr_reader', () => {
      if (!this._video_el?.nativeElement) return this.setupQRReader();
      if (navigator.mediaDevices?.getUserMedia && !this._video_el.nativeElement.srcObject) {
        navigator.mediaDevices.getUserMedia({
          video: true
        }).then(stream => this._video_el.nativeElement.srcObject = stream).catch(e => console.error('Unable to fetch media devices!', e));
      }
      if (!qr_scanner__WEBPACK_IMPORTED_MODULE_2__["default"]) return;
      this._reader = new qr_scanner__WEBPACK_IMPORTED_MODULE_2__["default"](this._video_el.nativeElement, r => this.checkQRCode(r.data), {});
      this._reader.start();
    });
  }
  handleError(message) {
    this._checkin.setError(message?.statusText || message);
    this._router.navigate(['/checkin', 'error']);
  }
  static #_ = this.ɵfac = function CheckinQRScanComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CheckinQRScanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_checkin_state_service__WEBPACK_IMPORTED_MODULE_3__.CheckinStateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: CheckinQRScanComponent,
    selectors: [["", "checkin-qr-scan", ""]],
    viewQuery: function CheckinQRScanComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx._video_el = _t.first);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
    attrs: _c1,
    decls: 25,
    vars: 7,
    consts: [["video", ""], [1, "bg-base-100", "rounded", "shadow", "overflow-hidden", "relative", "flex", "flex-col", "items-center", "w-[36rem]", "p-4"], [1, "my-4"], [1, "flex", "items-center", "space-x-2", "w-full"], ["appearance", "outline", 1, "w-px", "flex-1", "no-subscript"], ["matInput", "", "placeholder", "Enter email...", "type", "email", "autocomplete", "off", 3, "ngModelChange", "blur", "keyup.enter", "ngModel"], ["btn", "", "matRipple", "", 3, "click"], [1, "relative", "rounded", "mt-4", "bg-base-200", "border", "border-base-200", "overflow-hidden"], [1, "absolute", "top-1/2", "left-1/2", "-translate-x-1/2", "-translate-y-1/2", "opacity-30", "flex", "flex-col", "items-center", "space-y-2", "z-0"], [1, "text-6xl"], [1, "text-center"], ["id", "qr-stream", "playsinline", "", "width", "640", "height", "480", "autoplay", "", 1, "object-cover", "relative", "z-10"], ["icon", "", "matRipple", "", 1, "absolute", "top-0", "right-0", 3, "routerLink"], [1, "bg-base-100", "rounded", "shadow", "overflow-hidden", "relative", "flex", "flex-col", "items-center", "p-16"], ["diameter", "32"]],
    template: function CheckinQRScanComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1)(1, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Please enter your email address or scan your QR code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3)(4, "mat-form-field", 4)(5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function CheckinQRScanComponent_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.email, $event) || (ctx.email = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("blur", function CheckinQRScanComponent_Template_input_blur_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.checkEmail(ctx.email));
        })("keyup.enter", function CheckinQRScanComponent_Template_input_keyup_enter_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.checkEmail(ctx.email));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Invalid email format");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CheckinQRScanComponent_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.checkEmail(ctx.email));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " Find Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "app-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "videocam_off");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, " Camera feed loading or is not available ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "video", 11, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "a", 12)(19, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "mat-spinner", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Loading visitor information...");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("hidden", ctx.checking_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("hidden", !ctx.checking_code);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__.IconComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatRipple, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinner, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink],
    styles: ["video[_ngcontent-%COMP%] {\n                width: 34rem;\n                height: 24rem;\n            }\n\n            a[_ngcontent-%COMP%] {\n                position: absolute;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNraW4tcXItc2Nhbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLFlBQVk7Z0JBQ1osYUFBYTtZQUNqQjs7WUFFQTtnQkFDSSxrQkFBa0I7WUFDdEIiLCJmaWxlIjoiY2hlY2tpbi1xci1zY2FuLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgdmlkZW8ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzNHJlbTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvdmlzaXRvci1raW9zay9zcmMvYXBwL2NoZWNraW4vY2hlY2tpbi1xci1zY2FuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksWUFBWTtnQkFDWixhQUFhO1lBQ2pCOztZQUVBO2dCQUNJLGtCQUFrQjtZQUN0Qjs7QUFFWixnakJBQWdqQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgdmlkZW8ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzNHJlbTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 2382:
/*!************************************************************************!*\
  !*** ./apps/visitor-kiosk/src/app/checkin/checkin-result.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckinResultsComponent: () => (/* binding */ CheckinResultsComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 89273);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 57871);
/* harmony import */ var _checkin_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkin-state.service */ 98488);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 23206);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 5647);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _libs_components_src_lib_user_avatar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/user-avatar.component */ 23574);
/* harmony import */ var _libs_components_src_lib_printable_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/printable.component */ 74846);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _libs_components_src_lib_sanitise_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/sanitise.pipe */ 54616);


















const _c0 = () => ({});
function CheckinResultsComponent_div_0_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Cleared for ", ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, ctx_r1.level)) == null ? null : tmp_2_0.display_name) || ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 3, ctx_r1.level)) == null ? null : tmp_2_0.name), " ");
  }
}
function CheckinResultsComponent_div_0_button_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CheckinResultsComponent_div_0_button_40_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.print());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Print Label ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CheckinResultsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1)(1, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "You are checked in!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "sanitize");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "a-user-avatar", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](18, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, " Visitor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, CheckinResultsComponent_div_0_div_23_Template, 4, 5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](24, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "pre", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](27, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 16)(29, "div", 17)(30, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](32, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](33, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](36, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](37, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, CheckinResultsComponent_div_0_button_40_Template, 2, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CheckinResultsComponent_div_0_Template_button_click_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.next());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, " Done ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](5, 13, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 11, ctx_r1.result_template), "html"), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("user", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](36, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 16, ctx_r1.event)) == null ? null : tmp_3_0.asset_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" For: ", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 18, ctx_r1.event)) == null ? null : tmp_4_0.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Seeing ", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](18, 20, ctx_r1.event)) == null ? null : tmp_5_0.user_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r1.logo == null ? null : ctx_r1.logo.src, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](24, 22, ctx_r1.level));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("                        ", (tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](27, 24, ctx_r1.event)) == null ? null : tmp_8_0.extension_data == null ? null : tmp_8_0.extension_data.extra_details, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](33, 28, ((tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](32, 26, ctx_r1.event)) == null ? null : tmp_9_0.date) || "", "shortTime"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](37, 33, ((tmp_10_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](36, 31, ctx_r1.event)) == null ? null : tmp_10_0.date) || "", "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.allow_printing_label);
  }
}
const DEFAULT_TEMPLATE = `
<p class="text-center">
    Welcome, you have a meeting at {{ time }} with {{ host_name }}.
    <br />{{ host_name }} has been notified and will be with you shortly.
</p>
<p>{{ can_use_lift }}</p>
`;
class CheckinResultsComponent {
  get time_format() {
    return this._settings.time_format;
  }
  get now() {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.startOfMinute)((0,date_fns__WEBPACK_IMPORTED_MODULE_8__.roundToNearestMinutes)(Date.now(), {
      nearestTo: 5
    }));
  }
  /** Application logo to display */
  get logo() {
    return this._settings.get('app.logo_light');
  }
  get allow_printing_label() {
    return this._settings.get('app.allow_printing_label') !== false;
  }
  constructor(_org, _checkin, _settings, _router, _date) {
    this._org = _org;
    this._checkin = _checkin;
    this._settings = _settings;
    this._router = _router;
    this._date = _date;
    this.event = this._checkin.event;
    this.guest = this._checkin.guest;
    this.level = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.event, this._org.initialised]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(([_]) => _ ? this._org.levelWithID(_.zones) : null));
    this.result_template = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.event, this.guest]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(([event, guest]) => !!event && !!guest), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(([event, guest]) => {
      let template = this._settings.get('app.checked_in_template');
      if (!template) template = DEFAULT_TEMPLATE;
      let updated_template = template.replace(/{{ title }}/g, event?.title || '').replace(/{{ room_name }}/g, event.extension_data?.location_id || '').replace(/{{ host_name }}/g, event?.user_name || '').replace(/{{ host_email }}/g, event?.user_email || '').replace(/{{ visitor_name }}/g, guest?.name || '').replace(/{{ visitor_email }}/g, guest?.email || '').replace(/{{ can_use_lift }}/g, event.extension_data.can_use_lift ? `Please use the vistor access lift over there` : `Please wait in the lobby.`);
      try {
        const date = event.date || event.event_start * 1000 || event.booking_start * 1000 || (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.startOfMinute)(Date.now());
        updated_template = updated_template.replace(/{{ date }}/g, this._date.transform(date, 'mediumDate')).replace(/{{ time }}/g, this._date.transform(date, this.time_format));
      } catch {}
      return updated_template;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.startWith)(DEFAULT_TEMPLATE));
    this.print = () => window.print();
  }
  ngOnInit() {
    this.event.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.first)()).subscribe(_ => !_ ? this.previous() : '');
  }
  previous() {
    this._router.navigate(['/checkin']);
  }
  next() {
    // this._settings.get('app.allow_beverages')
    //     ? this._router.navigate(['/checkin', 'preferences']) :
    this._router.navigate(['/welcome']);
  }
  static #_ = this.ɵfac = function CheckinResultsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CheckinResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_checkin_state_service__WEBPACK_IMPORTED_MODULE_0__.CheckinStateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: CheckinResultsComponent,
    selectors: [["checkin-results"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe])],
    decls: 2,
    vars: 3,
    consts: [["class", "bg-base-100 rounded shadow overflow-hidden relative flex flex-col items-center w-[36rem] p-4 space-y-4", 4, "ngIf"], [1, "bg-base-100", "rounded", "shadow", "overflow-hidden", "relative", "flex", "flex-col", "items-center", "w-[36rem]", "p-4", "space-y-4"], [1, "text-xl"], [1, "", 3, "innerHTML"], ["printable", "", 1, "relative", "w-[24rem]", "h-[14rem]", "rounded-xl", "border", "border-neutral", "m-4", "p-4", "bg-base-100", "print-only"], [1, "flex", "flex-col", "h-full"], [1, "h-[4.75rem]", "w-[4.75rem]", "rounded-full", "bg-base-200", "flex", "items-center", "justify-center"], [1, "text-3xl", 3, "user"], [1, "text-2xl"], [1, "text-sm", "mt-1"], [1, "text-sm", "opacity-60"], [1, "rounded-lg", "bg-black", "text-white", "px-2", "py-1", "text-sm", "mt-2", "w-32", "text-center"], [1, "absolute", "top-4", "right-4", "flex", "flex-col", "items-end"], ["logo", "", "alt", "Logo", 1, "h-10", 3, "src"], ["class", "text-xs text-right", 4, "ngIf"], [1, "text-right"], [1, "absolute", "bottom-4", "right-4", "flex", "items-end", "space-x-2"], [1, "text-right", "font-medium", "leading-tight"], [1, "h-16", "w-16", "rounded-lg", "border", "border-base-200"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", "class", "w-32", 3, "click", 4, "ngIf"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "text-xs", "text-right"]],
    template: function CheckinResultsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CheckinResultsComponent_div_0_Template, 43, 37, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, ctx.event));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _libs_components_src_lib_user_avatar_component__WEBPACK_IMPORTED_MODULE_3__.UserAvatarComponent, _libs_components_src_lib_printable_component__WEBPACK_IMPORTED_MODULE_4__.PrintableComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe, _libs_components_src_lib_sanitise_pipe__WEBPACK_IMPORTED_MODULE_5__.SanitizePipe],
    styles: ["[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n                max-width: calc(100vw - 2rem);\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNraW4tcmVzdWx0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksNkJBQTZCO1lBQ2pDIiwiZmlsZSI6ImNoZWNraW4tcmVzdWx0LmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3QgPiBkaXYge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDJyZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvdmlzaXRvci1raW9zay9zcmMvYXBwL2NoZWNraW4vY2hlY2tpbi1yZXN1bHQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSw2QkFBNkI7WUFDakM7O0FBRVosb1pBQW9aIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCA+IGRpdiB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gMnJlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 98488:
/*!*********************************************************************!*\
  !*** ./apps/visitor-kiosk/src/app/checkin/checkin-state.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckinStateService: () => (/* binding */ CheckinStateService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/users */ 41489);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 77388);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 99908);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 49675);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 31257);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/bookings */ 85616);
/* harmony import */ var _placeos_spaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/spaces */ 44855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);








class CheckinStateService {
  constructor() {
    /** Current event being checked in */
    this._booking = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(new _placeos_bookings__WEBPACK_IMPORTED_MODULE_3__.Booking({
      asset_id: 'jim@1234.com',
      asset_name: 'Jim Jones',
      user_email: 'alex@place.tech',
      user_name: 'Alex Sorafumo',
      date: (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.startOfHour)(Date.now()).valueOf(),
      duration: 60,
      zones: ['zone-Do2HJ00hTG']
    }));
    /** Current guest being checked in */
    this._guest = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
    /** Photo of the current guest */
    this._photo = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject('');
    /** Photo of the current guest */
    this._error = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject('');
    /** Form for the current guest details */
    this._form = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject((0,_placeos_users__WEBPACK_IMPORTED_MODULE_2__.generateGuestForm)());
    this._space_pipe = new _placeos_spaces__WEBPACK_IMPORTED_MODULE_4__.SpacePipe();
    this.event = this._booking.asObservable();
    this.guest = this._guest.asObservable();
    this.error = this._error.asObservable();
    this.form = this._form.asObservable();
  }
  clear() {
    this._guest.next(null);
    this._booking.next(null);
    this._photo.next(null);
  }
  setPhoto(data) {
    this._photo.next(data);
  }
  setError(message) {
    this._error.next(message);
  }
  /** Load guest and event data */
  loadGuestAndEvent(email, event_id) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const guest = yield (0,_placeos_users__WEBPACK_IMPORTED_MODULE_2__.showGuest)(email).toPromise();
      if (event_id) {
        const event = yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_3__.showBooking)(event_id).toPromise();
        _this._guest.next(guest);
        _this._booking.next(event);
        _this._form.next((0,_placeos_users__WEBPACK_IMPORTED_MODULE_2__.generateGuestForm)(guest, event.user_email));
        return {
          guest,
          event
        };
      }
      if (guest.booking) {
        _this._guest.next(guest);
        _this._booking.next(guest.booking);
        _this._form.next((0,_placeos_users__WEBPACK_IMPORTED_MODULE_2__.generateGuestForm)(guest, guest.booking.user_email));
        return {
          guest,
          event: guest.booking
        };
      }
      let upcoming = yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_3__.queryAllBookings)({
        type: 'visitor',
        period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.getUnixTime)(Date.now()),
        period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.getUnixTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_8__.addMinutes)(Date.now(), 120))
      }).toPromise();
      upcoming = upcoming.filter(_ => _.user_email === email || _.asset_id === email);
      const today = new Date();
      const todays_events = upcoming.filter(event => (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.isSameDay)(new Date(event.date), today));
      todays_events.sort((a, b) => a.date - b.date);
      if (todays_events.length <= 0) {
        throw new Error(`No meetings for guest "${email}" today`);
      }
      _this._guest.next(guest);
      _this._booking.next(todays_events[0]);
      _this._form.next((0,_placeos_users__WEBPACK_IMPORTED_MODULE_2__.generateGuestForm)(guest, todays_events[0].user_email));
      return {
        guest,
        event: todays_events[0]
      };
    })();
  }
  updateGuest(data) {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const guest = _this2._guest.getValue();
      const form = _this2._form.getValue();
      if (!guest || !form) return;
      // await updateMetadata(guest.email, {
      //     name: 'preferences',
      //     details: { ...guest, ...form.value, ...(data || {}) },
      //     description: '',
      // }).toPromise();
    })();
  }
  completeInduction() {
    var _this3 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const guest = _this3._guest.getValue();
      const event = _this3._booking.getValue() || guest.extension_data.event;
      if (!guest || !event) return;
      yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_3__.updateBookingInductionStatus)(event.id, 'accepted').toPromise();
    })();
  }
  declineInduction() {
    var _this4 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const guest = _this4._guest.getValue();
      const event = _this4._booking.getValue() || guest.extension_data.event;
      if (!guest || !event) return;
      yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_3__.updateBookingInductionStatus)(event.id, 'declined').toPromise();
    })();
  }
  checkinGuest() {
    var _this5 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const guest = _this5._guest.getValue();
      const event = _this5._booking.getValue() || guest.extension_data.event;
      if (!guest || !event) return;
      const checkin_fn = (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_3__.checkinBooking)(event.id, true).toPromise();
      const result = yield checkin_fn.catch( /*#__PURE__*/function () {
        var _ref = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
          (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)(e || `Error checking in ${guest.name} for ${event.user_name || event.user_email}'s meeting.`);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      if (!result) return;
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifySuccess)(`Successfully checked in ${guest.name} for ${event.user_name || event.user_email}'s meeting`);
    })();
  }
  printPass() {
    try {
      // TODO: actually trigger print visitor pass
      return new Promise(res => setTimeout(() => res(''), 5000));
    } catch (err) {
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)('Error printing visitor pass');
    }
    return Promise.reject();
  }
  static #_ = this.ɵfac = function CheckinStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CheckinStateService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
    token: CheckinStateService,
    factory: CheckinStateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 39976:
/*!*****************************************************************!*\
  !*** ./apps/visitor-kiosk/src/app/checkin/checkin.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckinComponent: () => (/* binding */ CheckinComponent)
/* harmony export */ });
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ 23206);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);






const _c0 = ["app-checkin", ""];
class CheckinComponent {
  get now() {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.startOfMinute)(new Date());
  }
  get background() {
    return this._settings.get('app.home.background');
  }
  constructor(_settings) {
    this._settings = _settings;
  }
  static #_ = this.ɵfac = function CheckinComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CheckinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: CheckinComponent,
    selectors: [["", "app-checkin", ""]],
    attrs: _c0,
    decls: 8,
    vars: 10,
    consts: [[1, "absolute", "inset-0", "p-8", "flex", "items-center"], [1, "flex", "flex-col", "justify-center", "space-y-8", "z-10", "w-full"], [1, "absolute", "top-4", "right-4", "text-2xl", "text-white"], ["src", "assets/img/building.png", 1, "absolute", "w-[60%]", "bottom-0", "right-0"]],
    template: function CheckinComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-image", "url(" + ctx.background + ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 4, ctx.now, "mediumDate"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 7, ctx.now, "shortTime"), " ");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNraW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLHNCQUFzQjtnQkFDdEIsWUFBWTtnQkFDWixXQUFXO1lBQ2YiLCJmaWxlIjoiY2hlY2tpbi5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvdmlzaXRvci1raW9zay9zcmMvYXBwL2NoZWNraW4vY2hlY2tpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixZQUFZO2dCQUNaLFdBQVc7WUFDZjs7QUFFWix3aEJBQXdoQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 59623:
/*!**************************************************************!*\
  !*** ./apps/visitor-kiosk/src/app/checkin/checkin.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisitorCheckinModule: () => (/* binding */ VisitorCheckinModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/shared-components.module */ 91045);
/* harmony import */ var _checkin_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkin-details.component */ 70431);
/* harmony import */ var _checkin_photo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkin-photo.component */ 1073);
/* harmony import */ var _checkin_preferences_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkin-preferences.component */ 46651);
/* harmony import */ var _checkin_qr_scan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkin-qr-scan.component */ 15566);
/* harmony import */ var _checkin_result_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkin-result.component */ 2382);
/* harmony import */ var _checkin_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkin-error.component */ 31431);
/* harmony import */ var _checkin_covid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkin-covid.component */ 20224);
/* harmony import */ var _checkin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./checkin.component */ 39976);
/* harmony import */ var _checkin_induction_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./checkin-induction.component */ 94718);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);















const ROUTES = [{
  path: '',
  component: _checkin_component__WEBPACK_IMPORTED_MODULE_8__.CheckinComponent,
  children: [{
    path: 'scan',
    component: _checkin_qr_scan_component__WEBPACK_IMPORTED_MODULE_4__.CheckinQRScanComponent
  }, {
    path: 'details',
    component: _checkin_details_component__WEBPACK_IMPORTED_MODULE_1__.CheckinDetailsComponent
  }, {
    path: 'preferences',
    component: _checkin_preferences_component__WEBPACK_IMPORTED_MODULE_3__.CheckinPreferencesComponent
  }, {
    path: 'photo',
    component: _checkin_photo_component__WEBPACK_IMPORTED_MODULE_2__.CheckinPhotoComponent
  }, {
    path: 'results',
    component: _checkin_result_component__WEBPACK_IMPORTED_MODULE_5__.CheckinResultsComponent
  }, {
    path: 'error',
    component: _checkin_error_component__WEBPACK_IMPORTED_MODULE_6__.CheckinErrorComponent
  }, {
    path: 'covid',
    component: _checkin_covid_component__WEBPACK_IMPORTED_MODULE_7__.CheckinCovidComponent
  }, {
    path: 'induction',
    component: _checkin_induction_component__WEBPACK_IMPORTED_MODULE_9__.CheckinInductionComponent
  }, {
    path: '**',
    redirectTo: 'scan'
  }]
}, {
  path: '**',
  redirectTo: ''
}];
class VisitorCheckinModule {
  static #_ = this.ɵfac = function VisitorCheckinModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || VisitorCheckinModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
    type: VisitorCheckinModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _components_shared_components_module__WEBPACK_IMPORTED_MODULE_0__.SharedComponentsModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(ROUTES)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](VisitorCheckinModule, {
    declarations: [_checkin_component__WEBPACK_IMPORTED_MODULE_8__.CheckinComponent, _checkin_result_component__WEBPACK_IMPORTED_MODULE_5__.CheckinResultsComponent, _checkin_qr_scan_component__WEBPACK_IMPORTED_MODULE_4__.CheckinQRScanComponent, _checkin_preferences_component__WEBPACK_IMPORTED_MODULE_3__.CheckinPreferencesComponent, _checkin_photo_component__WEBPACK_IMPORTED_MODULE_2__.CheckinPhotoComponent, _checkin_details_component__WEBPACK_IMPORTED_MODULE_1__.CheckinDetailsComponent, _checkin_error_component__WEBPACK_IMPORTED_MODULE_6__.CheckinErrorComponent, _checkin_covid_component__WEBPACK_IMPORTED_MODULE_7__.CheckinCovidComponent, _checkin_induction_component__WEBPACK_IMPORTED_MODULE_9__.CheckinInductionComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _components_shared_components_module__WEBPACK_IMPORTED_MODULE_0__.SharedComponentsModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
  });
})();

/***/ }),

/***/ 4157:
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
/* harmony export */   CateringOrder: () => (/* reexport safe */ _lib_catering__WEBPACK_IMPORTED_MODULE_1__.CateringOrder),
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
/* harmony import */ var _lib_catering_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/catering.module */ 7872);
/* harmony import */ var _lib_catering__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/catering */ 95196);
/* harmony import */ var _lib_charge_code_list_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/charge-code-list-modal.component */ 96861);




/***/ }),

/***/ 76095:
/*!***********************************************************************!*\
  !*** ./libs/catering/src/lib/catering-import-menu-modal.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CateringImportMenuModalComponent: () => (/* binding */ CateringImportMenuModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _catering_item_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catering-item.class */ 25892);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);









function CateringImportMenuModalComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 4)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CateringImportMenuModalComponent_main_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "main")(1, "div", 5)(2, "app-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Click to select file or Drag and drop files");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function CateringImportMenuModalComponent_main_4_Template_input_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.handleFileEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 8)(8, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CateringImportMenuModalComponent_main_4_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.downloadTemplate());
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
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.loading);
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
  static #_ = this.ɵfac = function CateringImportMenuModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CateringImportMenuModalComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: CateringImportMenuModalComponent,
    selectors: [["catering-import-menu-modal"]],
    outputs: {
      event: "event"
    },
    decls: 7,
    vars: 3,
    consts: [["load_state", ""], [1, "h-12", "bg-primary", "flex", "items-center", "justify-between", "px-4"], ["icon", "", "mat-dialog-close", "", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["icon", "", "mat-dialog-close", ""], [1, "relative", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "h-[24rem]", "w-[24rem]", "border-4", "border-base-200", "border-dashed", "rounded-xl", "hover:bg-base-200", "m-4", "p-4", "cursor-pointer"], [1, "text-4xl"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"], [1, "flex", "items-center", "justify-center", "px-4", "pb-4"], ["matRipple", "", 1, "clear", "underline", "w-48", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8", "h-[24rem]", "w-[24rem]"], ["diameter", "32"]],
    template: function CateringImportMenuModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header", 1)(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Import Catering Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CateringImportMenuModalComponent_button_3_Template, 3, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CateringImportMenuModalComponent_main_4_Template, 10, 0, "main", 3)(5, CateringImportMenuModalComponent_ng_template_5_Template, 4, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const load_state_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", load_state_r3);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatRipple, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__.MatProgressSpinner]
  });
}

/***/ }),

/***/ 30807:
/*!****************************************************************!*\
  !*** ./libs/catering/src/lib/catering-item-modal.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CateringItemModalComponent: () => (/* binding */ CateringItemModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/keycodes */ 74879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _catering_item_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catering-item.class */ 25892);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ 79771);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ 12772);
/* harmony import */ var _form_fields_src_lib_counter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../form-fields/src/lib/counter.component */ 55507);
/* harmony import */ var _form_fields_src_lib_image_list_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../form-fields/src/lib/image-list-field.component */ 56864);




















const _c0 = () => ({
  standalone: true
});
function CateringItemModalComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 9)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function CateringItemModalComponent_form_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20)(1, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-form-field", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("error", ctx_r1.form.controls.name.invalid && ctx_r1.form.controls.name.touched);
  }
}
function CateringItemModalComponent_form_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20)(1, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-form-field", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Category is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    const auto_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("error", ctx_r1.form.controls.category.invalid && ctx_r1.form.controls.category.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matAutocomplete", auto_r3);
  }
}
function CateringItemModalComponent_form_4_div_4_mat_chip_row_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-chip-row", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("removed", function CateringItemModalComponent_form_4_div_4_mat_chip_row_6_Template_mat_chip_row_removed_0_listener() {
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.removeTag(item_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "button", 31)(3, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r6, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", "Remove " + item_r6);
  }
}
function CateringItemModalComponent_form_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20)(1, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-form-field", 22)(4, "mat-chip-grid", 27, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, CateringItemModalComponent_form_4_div_4_mat_chip_row_6_Template, 5, 2, "mat-chip-row", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("matChipInputTokenEnd", function CateringItemModalComponent_form_4_div_4_Template_input_matChipInputTokenEnd_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.addTag($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const chipList_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("error", ctx_r1.form.controls.tags.invalid && ctx_r1.form.controls.tags.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.tag_list);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matChipInputFor", chipList_r7)("matChipInputSeparatorKeyCodes", ctx_r1.separators)("matChipInputAddOnBlur", true);
  }
}
function CateringItemModalComponent_form_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20)(1, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-form-field", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "textarea", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function CateringItemModalComponent_form_4_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20)(1, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Unit Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-form-field", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Unit Price is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("error", ctx_r1.form.controls.unit_price.invalid && ctx_r1.form.controls.unit_price.touched);
  }
}
function CateringItemModalComponent_form_4_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20)(1, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](2, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "image-list-field", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CateringItemModalComponent_form_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CateringItemModalComponent_form_4_div_2_Template, 10, 2, "div", 12)(3, CateringItemModalComponent_form_4_div_3_Template, 10, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, CateringItemModalComponent_form_4_div_4_Template, 8, 6, "div", 12)(5, CateringItemModalComponent_form_4_div_5_Template, 5, 0, "div", 12)(6, CateringItemModalComponent_form_4_div_6_Template, 10, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 13)(8, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Accept Points?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 16)(13, "mat-checkbox", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CateringItemModalComponent_form_4_Template_mat_checkbox_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event ? ctx_r1.addTag({
        value: "Gluten Free"
      }) : ctx_r1.removeTag("Gluten Free"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " Gluten Free (GF) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-checkbox", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CateringItemModalComponent_form_4_Template_mat_checkbox_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event ? ctx_r1.addTag({
        value: "Vegan"
      }) : ctx_r1.removeTag("Vegan"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " Vegan (VG) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-checkbox", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CateringItemModalComponent_form_4_Template_mat_checkbox_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event ? ctx_r1.addTag({
        value: "Vegetarian"
      }) : ctx_r1.removeTag("Vegetarian"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " Vegetarian (V) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-checkbox", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CateringItemModalComponent_form_4_Template_mat_checkbox_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event ? ctx_r1.addTag({
        value: "Contains Dairy"
      }) : ctx_r1.removeTag("Contains Dairy"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, " Contains Dairy (D) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "mat-checkbox", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CateringItemModalComponent_form_4_Template_mat_checkbox_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event ? ctx_r1.addTag({
        value: "Contains Nuts"
      }) : ctx_r1.removeTag("Contains Nuts"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " Contains Nuts (N) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 13)(24, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Discount Cap");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "a-counter", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, CateringItemModalComponent_form_4_div_27_Template, 4, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_9_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](((tmp_9_0 = ctx_r1.form.get("accept_points")) == null ? null : tmp_9_0.value) ? "No" : "Yes");
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
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "footer", 37)(1, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CateringItemModalComponent_footer_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.saveChanges());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r1.form.dirty);
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
    const option_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", option_r9, " ");
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
          id: this.item.id || `item-${(0,_placeos_common__WEBPACK_IMPORTED_MODULE_0__.randomInt)(9999_9999)}`,
          ...this.form.value
        })
      }
    });
  }
  static #_ = this.ɵfac = function CateringItemModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CateringItemModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA));
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
        const MSG_EXTERNAL_zoneTagsPlaceholder$$LIBS_CATERING_SRC_LIB_CATERING_ITEM_MODAL_COMPONENT_TS_0 = goog.getMsg("Item tags e.g. Gluten Free, Vegan etc.");
        i18n_0 = MSG_EXTERNAL_zoneTagsPlaceholder$$LIBS_CATERING_SRC_LIB_CATERING_ITEM_MODAL_COMPONENT_TS_0;
      } else {
        i18n_0 = $localize`:@@zoneTagsPlaceholder␟c133beffffe3288bbdbf8572a32910c33ce14991␟2194594490376201833:Item tags e.g. Gluten Free, Vegan etc.`;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_tagsLabel$$LIBS_CATERING_SRC_LIB_CATERING_ITEM_MODAL_COMPONENT_TS_1 = goog.getMsg(" Tags: ");
        i18n_1 = MSG_EXTERNAL_tagsLabel$$LIBS_CATERING_SRC_LIB_CATERING_ITEM_MODAL_COMPONENT_TS_1;
      } else {
        i18n_1 = $localize`:@@tagsLabel␟800ffadd463cfe152c5af3fa9f13803ab2e77b93␟4746186018558508280: Tags: `;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_imagesLabel$$LIBS_CATERING_SRC_LIB_CATERING_ITEM_MODAL_COMPONENT_TS_2 = goog.getMsg("Images:");
        i18n_2 = MSG_EXTERNAL_imagesLabel$$LIBS_CATERING_SRC_LIB_CATERING_ITEM_MODAL_COMPONENT_TS_2;
      } else {
        i18n_2 = $localize`:@@imagesLabel␟e5d9e00faa06714d7671b164cad364b26f4c585b␟5137125764814732349:Images:`;
      }
      return [["load_state", ""], ["auto", "matAutocomplete"], ["chipList", ""], i18n_1, i18n_2, ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "p-4 overflow-auto max-h-[65vh]", 3, "formGroup", 4, "ngIf", "ngIfElse"], ["class", "flex p-2 items-center justify-center border-t border-solid border-base-200", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "p-4", "overflow-auto", "max-h-[65vh]", 3, "formGroup"], [1, "flex", "items-center", "space-x-2"], ["class", "flex flex-col", 4, "ngIf"], [1, "flex", "items-center"], [1, "flex-none", "w-28", "min-w-0"], ["formControlName", "accept_points"], ["list", "", 1, "flex", "items-center", "flex-wrap", "max-w-lg"], [3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "flex-1", "w-24", "min-w-0"], ["formControlName", "discount_cap", 1, "border", "border-base-200", "rounded", 3, "min", "max", "step", "render_fn"], [1, "flex", "flex-col"], ["for", "title"], ["appearance", "outline"], ["matInput", "", "name", "name", "placeholder", "Item name", "formControlName", "name"], ["for", "category"], ["matInput", "", "name", "category", "placeholder", "Category", "formControlName", "category", 3, "matAutocomplete"], ["for", "tags"], ["aria-label", "Item Tags"], [3, "removed", 4, "ngFor", "ngForOf"], ["name", "tags", "placeholder", i18n_0, 3, "matChipInputTokenEnd", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur"], [3, "removed"], ["matChipRemove", ""], ["for", "description"], ["matInput", "", "name", "description", "placeholder", "Item Description", "formControlName", "description"], ["matInput", "", "name", "unit-price", "type", "number", "placeholder", "Unit Price", "formControlName", "unit_price"], ["for", "images"], ["name", "images", "formControlName", "images"], [1, "flex", "p-2", "items-center", "justify-center", "border-t", "border-solid", "border-base-200"], ["btn", "", "matRipple", "", 3, "click", "disabled"], [1, "flex", "flex-col", "items-center", "p-8", "space-y-2", "w-64"], ["diameter", "32"], [3, "value"]];
    },
    template: function CateringItemModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "header")(1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, CateringItemModalComponent_button_3_Template, 3, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, CateringItemModalComponent_form_4_Template, 28, 27, "form", 6)(5, CateringItemModalComponent_footer_5_Template, 3, 1, "footer", 7)(6, CateringItemModalComponent_ng_template_6_Template, 4, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-autocomplete", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, CateringItemModalComponent_mat_option_10_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const load_state_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.item.id ? "Edit" : "Add", " Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form && !ctx.loading)("ngIfElse", load_state_r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.categories);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__.MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__.MatAutocompleteTrigger, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogClose, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatError, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatRipple, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__.MatProgressSpinner, _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipGrid, _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipInput, _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipRemove, _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipRow, _form_fields_src_lib_counter_component__WEBPACK_IMPORTED_MODULE_3__.CounterComponent, _form_fields_src_lib_image_list_field_component__WEBPACK_IMPORTED_MODULE_4__.ImageListFieldComponent],
    styles: ["[list][_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\n                margin: 0.5rem;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVyaW5nLWl0ZW0tbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxjQUFjO1lBQ2xCIiwiZmlsZSI6ImNhdGVyaW5nLWl0ZW0tbW9kYWwuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICBbbGlzdF0gbWF0LWNoZWNrYm94IHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAuNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvY2F0ZXJpbmcvc3JjL2xpYi9jYXRlcmluZy1pdGVtLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksY0FBYztZQUNsQjs7QUFFWixvWkFBb1oiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIFtsaXN0XSBtYXQtY2hlY2tib3gge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMC41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 61601:
/*!****************************************************************!*\
  !*** ./libs/catering/src/lib/catering-list-field.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CateringListFieldComponent: () => (/* binding */ CateringListFieldComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var libs_catering_src_lib_catering_order_modal_new_catering_order_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! libs/catering/src/lib/catering-order-modal/new-catering-order-modal.component */ 11732);
/* harmony import */ var _catering_order_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catering-order.class */ 75555);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 56441);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 33240);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 74646);
















function CateringListFieldComponent_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "priority_high");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matTooltip", ctx_r1.err_tooltip);
  }
}
function CateringListFieldComponent_div_1_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CateringListFieldComponent_div_1_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const order_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.duplicateOrder(order_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function CateringListFieldComponent_div_1_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CateringListFieldComponent_div_1_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const order_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.editOrder(order_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function CateringListFieldComponent_div_1_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CateringListFieldComponent_div_1_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const order_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.removeOrder(order_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function CateringListFieldComponent_div_1_div_19_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matTooltip", ctx_r1.optionList(item_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", (item_r8.option_list == null ? null : item_r8.option_list.length) || "0", " option(s) ");
  }
}
function CateringListFieldComponent_div_1_div_19_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CateringListFieldComponent_div_1_div_19_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const order_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.removeOrderItem(order_r4, item_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function CateringListFieldComponent_div_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20)(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, CateringListFieldComponent_div_1_div_19_span_3_Template, 2, 2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, CateringListFieldComponent_div_1_div_19_button_9_Template, 3, 0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CateringListFieldComponent_div_1_div_19_Template_button_click_10_listener() {
      const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.toggleFavourite(item_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r8.name || "Item", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r8.option_list == null ? null : item_r8.option_list.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" x", item_r8.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](8, 9, item_r8.unit_price_with_options / 100, ctx_r1.currency_code), " ea ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("text-blue-400", ctx_r1.favorites.includes(item_r8.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matTooltip", ctx_r1.favorites.includes(item_r8.id) ? "Remove from favourites" : "Add to favourites");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.favorites.includes(item_r8.id) ? "favorite" : "favorite_border");
  }
}
function CateringListFieldComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, CateringListFieldComponent_div_1_div_8_Template, 3, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, CateringListFieldComponent_div_1_button_12_Template, 3, 0, "button", 10)(13, CateringListFieldComponent_div_1_button_13_Template, 3, 0, "button", 11)(14, CateringListFieldComponent_div_1_button_14_Template, 3, 0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CateringListFieldComponent_div_1_Template_button_click_15_listener() {
      const order_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.show_order[order_r4.id] = !ctx_r1.show_order[order_r4.id]);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, CateringListFieldComponent_div_1_div_19_Template, 13, 12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const order_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("border-error", ctx_r1.end_time < order_r4.deliver_at)("border-base-300", ctx_r1.end_time >= order_r4.deliver_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" Order for ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](6, 16, order_r4.deliver_at_time, "mediumDate"), " at ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](7, 19, order_r4.deliver_at_time, ctx_r1.time_format), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.end_time < order_r4.deliver_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", order_r4.item_count, " item(s) for ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](11, 22, order_r4.total_cost / 100, ctx_r1.currency_code), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matTooltip", ctx_r1.show_order[order_r4.id] ? "Hide order items" : "Show order items");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.show_order[order_r4.id] ? "expand_less" : "expand_more", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@show", ctx_r1.show_order[order_r4.id] ? "show" : "hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", order_r4.items);
  }
}
const EMPTY_FAVS = [];
class CateringListFieldComponent {
  get favorites() {
    return this._settings.get('favourite_menu_items') || EMPTY_FAVS;
  }
  get end_time() {
    const time = (this.options.date || Date.now()) + (this.options.duration || 30) * 60 * 1000;
    return this.options.all_day ? (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.endOfDay)(time).valueOf() : time;
  }
  get time_format() {
    return this._settings.time_format || 'shortTime';
  }
  get currency_code() {
    return this._org.building?.currency || 'USD';
  }
  constructor(_settings, _org, _dialog) {
    this._settings = _settings;
    this._org = _org;
    this._dialog = _dialog;
    this.options = {};
    this.orders = [];
    this.show_order = {};
    this.disabled = false;
    this.err_tooltip = 'Delivery time is outside of the event time.\nThis order will be ignored.';
    this.selected = [];
    this.registerOnChange = fn => this._onChange = fn;
    this.registerOnTouched = fn => this._onTouch = fn;
    this.setDisabledState = s => this.disabled = s;
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.orders = new_value;
    if (this._onChange) this._onChange(this.orders);
  }
  ngOnChanges(changes) {
    if (changes.options) {
      this.orders = (this.orders || []).map(_ => new _catering_order_class__WEBPACK_IMPORTED_MODULE_2__.CateringOrder({
        ..._,
        event: this.options
      }));
    }
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.orders = (value || []).map(_ => new _catering_order_class__WEBPACK_IMPORTED_MODULE_2__.CateringOrder({
      ..._,
      event: this.options
    }));
  }
  removeOrder(order) {
    const updated_list = this.orders.filter(_ => _.id !== order.id);
    this.setValue(updated_list);
  }
  duplicateOrder(order) {
    const new_order = new _catering_order_class__WEBPACK_IMPORTED_MODULE_2__.CateringOrder({
      ...order,
      id: `order-${(0,_placeos_common__WEBPACK_IMPORTED_MODULE_0__.randomString)(8)}`
    });
    this.setValue([...this.orders, new_order]);
  }
  removeOrderItem(order, item) {
    const new_order = new _catering_order_class__WEBPACK_IMPORTED_MODULE_2__.CateringOrder({
      ...order,
      items: order.items.filter(_ => _.custom_id !== item.custom_id)
    });
    const updated_list = this.orders.filter(_ => _.id !== order.id);
    if (new_order.items.length > 0) {
      this.setValue([...updated_list, new_order]);
    } else this.setValue(updated_list);
  }
  editOrder(order = new _catering_order_class__WEBPACK_IMPORTED_MODULE_2__.CateringOrder()) {
    const ref = this._dialog.open(libs_catering_src_lib_catering_order_modal_new_catering_order_modal_component__WEBPACK_IMPORTED_MODULE_1__.NewCateringOrderModalComponent, {
      data: {
        items: order.items,
        details: {
          ...this.options,
          date: this.options.all_day ? (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.startOfDay)(this.options.date).valueOf() : this.options.date,
          duration: this.options.all_day ? Math.max(24 * 60, this.options.duration) : this.options.duration
        },
        exact_time: !!order.deliver_time,
        offset: order.deliver_offset,
        offset_day: order.deliver_day_offset
      }
    });
    ref.afterClosed().subscribe(items => {
      const orders = this.orders.filter(_ => _.id !== order.id);
      if (!items?.length) return;
      const time = new Date(this.options.date);
      for (const item of items) {
        item.options = [...item.options.map(_ => ({
          ..._
        }))];
        for (const option of item.options) {
          const opt = item.option_list.find(_ => _.id === option.id);
          option.active = !!opt;
        }
      }
      const new_order = new _catering_order_class__WEBPACK_IMPORTED_MODULE_2__.CateringOrder({
        ...order,
        items,
        event: this.options,
        deliver_offset: ref.componentInstance.offset,
        deliver_time: ref.componentInstance.exact_time ? time.getHours() + time.getMinutes() / 60 : null,
        deliver_day_offset: ref.componentInstance.offset_day || 0
      });
      if (new_order.item_count <= 0) return;
      this.setValue([...orders, new_order]);
    });
  }
  optionList(item) {
    return item.option_list?.map(_ => _.name).join('\n');
  }
  toggleFavourite(cateringitem) {
    const fav_list = this.favorites;
    const new_state = !fav_list.includes(cateringitem.id);
    if (new_state) {
      this._settings.saveUserSetting('favourite_menu_items', [...fav_list, cateringitem.id]);
    } else {
      this._settings.saveUserSetting('favourite_menu_items', fav_list.filter(_ => _ !== cateringitem.id));
    }
  }
  static #_ = this.ɵfac = function CateringListFieldComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CateringListFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_3__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: CateringListFieldComponent,
    selectors: [["catering-list-field"]],
    inputs: {
      options: "options"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NG_VALUE_ACCESSOR,
      /* istanbul ignore next */
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.forwardRef)(() => CateringListFieldComponent),
      multi: true
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]],
    decls: 8,
    vars: 2,
    consts: [["list", "", 1, "space-y-2"], ["order", "", "class", "border shadow bg-base-100 rounded-xl overflow-hidden", 3, "border-error", "border-base-300", 4, "ngFor", "ngForOf"], ["btn", "", "matRipple", "", "name", "add-catering-item", 1, "w-full", "inverse", "mt-2", 3, "click", "disabled"], [1, "flex", "items-center", "justify-center", "space-x-2"], ["order", "", 1, "border", "shadow", "bg-base-100", "rounded-xl", "overflow-hidden"], [1, "flex", "items-center", "space-x-2", "p-4"], [1, "flex-1"], [1, "flex", "items-center", "space-x-4"], ["class", "flex items-center justify-center h-6 w-6 rounded-full bg-error text-error-content", 3, "matTooltip", 4, "ngIf"], [1, "text-xs", "opacity-60"], ["icon", "", "matRipple", "", "matTooltip", "Duplicate Order", 3, "click", 4, "ngIf"], ["icon", "", "matRipple", "", "matTooltip", "Edit Order", 3, "click", 4, "ngIf"], ["icon", "", "matRipple", "", "matTooltip", "Remove Order", "class", "text-error", 3, "click", 4, "ngIf"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], [1, "flex", "flex-col", "bg-base-200", "divide-y", "divide-base-100"], ["class", "flex items-center px-4 py-1 space-x-2 hover:opacity-90", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-center", "h-6", "w-6", "rounded-full", "bg-error", "text-error-content", 3, "matTooltip"], ["icon", "", "matRipple", "", "matTooltip", "Duplicate Order", 3, "click"], ["icon", "", "matRipple", "", "matTooltip", "Edit Order", 3, "click"], ["icon", "", "matRipple", "", "matTooltip", "Remove Order", 1, "text-error", 3, "click"], [1, "flex", "items-center", "px-4", "py-1", "space-x-2", "hover:opacity-90"], [1, "flex", "items-center", "flex-1"], ["class", "text-xs opacity-60 ml-4 font-normal", 3, "matTooltip", 4, "ngIf"], [1, "rounded", "bg-success", "text-success-content", "text-xs", "px-2", "py-1"], [1, "rounded", "bg-info", "text-info-content", "text-xs", "px-2", "py-1"], ["icon", "", "matRipple", "", "matTooltip", "Remove Order Item", "class", "text-error", 3, "click", 4, "ngIf"], ["icon", "", "matRipple", "", "name", "toggle-catering-item-favourite", 3, "click", "matTooltip"], [1, "text-xs", "opacity-60", "ml-4", "font-normal", 3, "matTooltip"], ["icon", "", "matRipple", "", "matTooltip", "Remove Order Item", 1, "text-error", 3, "click"]],
    template: function CateringListFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CateringListFieldComponent_div_1_Template, 20, 25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CateringListFieldComponent_Template_button_click_2_listener() {
          return ctx.editOrder();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3)(4, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Add Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.orders);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.disabled);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltip, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
    data: {
      animation: [_placeos_common__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_SHOW_CONTRACT_EXPAND]
    }
  });
}

/***/ }),

/***/ 48519:
/*!**********************************************************!*\
  !*** ./libs/catering/src/lib/catering-menu.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CateringMenuComponent: () => (/* binding */ CateringMenuComponent)
/* harmony export */ });
/* harmony import */ var _catering_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catering-state.service */ 52201);
/* harmony import */ var _catering_item_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catering-item.class */ 25892);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _catering_orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catering-orders.service */ 98197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/src/lib/simple-table.component */ 88328);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 74646);















const _c0 = a0 => ({
  key: "active",
  name: " ",
  content: a0,
  size: "3.5rem",
  sortable: false
});
const _c1 = () => ({
  key: "name",
  name: "Name"
});
const _c2 = () => ({
  key: "category",
  name: "Category"
});
const _c3 = a0 => ({
  key: "unit_price",
  name: "Price",
  content: a0,
  size: "6rem"
});
const _c4 = a0 => ({
  key: "actions",
  name: " ",
  content: a0,
  size: "6.5rem",
  sortable: false
});
const _c5 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function CateringMenuComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-checkbox", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CateringMenuComponent_ng_template_1_Template_mat_checkbox_ngModelChange_0_listener($event) {
      const row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1).row;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.setEnabled(row_r2, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r2.isEnabled(row_r2));
  }
}
function CateringMenuComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r4 = ctx.data;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](3, 3, data_r4 / 100, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, ctx_r2.symbol)), " ");
  }
}
function CateringMenuComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8)(1, "button", 9)(2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-menu", null, 4)(6, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CateringMenuComponent_ng_template_5_Template_button_click_6_listener() {
      const row_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5).row;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.addOption(row_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 11)(8, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Add Option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CateringMenuComponent_ng_template_5_Template_button_click_12_listener() {
      const row_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5).row;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.editItem(row_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 11)(14, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Edit Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CateringMenuComponent_ng_template_5_Template_button_click_18_listener() {
      const row_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5).row;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.removeItem(row_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 11)(20, "app-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Remove Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CateringMenuComponent_ng_template_5_Template_button_click_24_listener() {
      const row_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5).row;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.show_children[row_r6.id] = !ctx_r2.show_children[row_r6.id]);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    const menu_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](5);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("opacity-0", !ctx_r2.can_edit);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r2.can_edit)("matMenuTriggerFor", menu_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !(row_r6.options == null ? null : row_r6.options.length))("matTooltip", (row_r6.options == null ? null : row_r6.options.length) ? (ctx_r2.show_children[row_r6.id] ? "Hide" : "Show") + " Menu Item Options" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r2.show_children[row_r6.id] ? "keyboard_arrow_down" : "chevron_right", " ");
  }
}
function CateringMenuComponent_ng_template_7_div_0_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CateringMenuComponent_ng_template_7_div_0_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const option_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const row_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().row;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.editOption(row_r10, option_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function CateringMenuComponent_ng_template_7_div_0_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CateringMenuComponent_ng_template_7_div_0_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const option_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const row_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().row;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.removeOption(row_r10, option_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "app-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function CateringMenuComponent_ng_template_7_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 17)(3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, CateringMenuComponent_ng_template_7_div_0_button_7_Template, 3, 0, "button", 20)(8, CateringMenuComponent_ng_template_7_div_0_button_8_Template, 3, 0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](option_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", option_r9.group, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.can_edit);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.can_edit);
  }
}
function CateringMenuComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, CateringMenuComponent_ng_template_7_div_0_Template, 9, 4, "div", 14);
  }
  if (rf & 2) {
    const row_r10 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", row_r10.options);
  }
}
class CateringMenuComponent {
  get filters() {
    return this._orders.filters;
  }
  get can_edit() {
    return this._catering.is_editable;
  }
  get categories() {
    return this._catering.categories;
  }
  constructor(_catering, _orders) {
    this._catering = _catering;
    this._orders = _orders;
    this.show_children = {};
    /** Observable for the currently active menu */
    this.menu = this._catering.menu;
    this.addOption = item => this._catering.addOption(item);
    this.editOption = (item, option) => this._catering.addOption(item, option);
    this.removeOption = (item, option) => this._catering.deleteOption(item, option);
    this.editItem = item => this._catering.addItem(item);
    this.removeItem = item => this._catering.deleteItem(item);
  }
  isEnabled(item) {
    return !item.hide_for_zones.includes(this._catering.zone);
  }
  setEnabled(item, state) {
    let list = item.hide_for_zones;
    if (!state) list = (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.unique)([...list, this._catering.zone]);else list = list.filter(_ => _ !== this._catering.zone);
    this._catering.updateItem(new _catering_item_class__WEBPACK_IMPORTED_MODULE_1__.CateringItem({
      ...item,
      hide_for_zones: list
    }));
  }
  static #_ = this.ɵfac = function CateringMenuComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CateringMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_catering_state_service__WEBPACK_IMPORTED_MODULE_0__.CateringStateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_catering_orders_service__WEBPACK_IMPORTED_MODULE_3__.CateringOrdersService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: CateringMenuComponent,
    selectors: [["catering-menu"]],
    decls: 9,
    vars: 20,
    consts: [["active_template", ""], ["price_template", ""], ["actions_template", ""], ["child_template", ""], ["menu", "matMenu"], ["empty_message", "No Items in Menu", 1, "w-full", "min-w-[32rem]", "block", "text-sm", 3, "data", "columns", "filter", "show_children", "child_template", "sortable"], ["matTooltip", "Allow Ordering Item for this zone", "matTooltipPosition", "right", 1, "mx-auto", 3, "ngModelChange", "ngModel"], [1, "px-2", "py-1", "font-mono", "text-xs", "flex", "items-center", "mx-auto", "bg-secondary", "text-secondary-content", "rounded"], [1, "p-2", "flex", "items-center", "mx-auto", "space-x-2"], ["icon", "", "matRipple", "", 3, "disabled", "matMenuTriggerFor"], ["mat-menu-item", "", 1, "flex", "items-center", 3, "click"], [1, "flex", "items-center", "space-x-2", "pr-2"], [1, "text-error"], ["icon", "", "matRipple", "", 3, "click", "disabled", "matTooltip"], ["class", "flex p-2 items-center border-b border-solid border-base-200 relative space-x-2", 4, "ngFor", "ngForOf"], [1, "flex", "p-2", "items-center", "border-b", "border-solid", "border-base-200", "relative", "space-x-2"], [1, "absolute", "inset-y-0", "left-0", "w-2", "bg-black", "opacity-10"], [1, "flex-1", "pl-4", "pr-2"], [1, "text"], [1, "text-xs", "opacity-60"], ["icon", "", "matRipple", "", "matTooltip", "Edit Menu Item Option", 3, "click", 4, "ngIf"], ["icon", "", "matRipple", "", "class", "!mr-1", "matTooltip", "Remove Menu Item Option", 3, "click", 4, "ngIf"], ["icon", "", "matRipple", "", "matTooltip", "Edit Menu Item Option", 3, "click"], ["icon", "", "matRipple", "", "matTooltip", "Remove Menu Item Option", 1, "!mr-1", 3, "click"]],
    template: function CateringMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "simple-table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CateringMenuComponent_ng_template_1_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"])(3, CateringMenuComponent_ng_template_3_Template, 4, 6, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"])(5, CateringMenuComponent_ng_template_5_Template, 27, 7, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"])(7, CateringMenuComponent_ng_template_7_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const active_template_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);
        const price_template_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](4);
        const actions_template_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](6);
        const child_template_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx.menu)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction5"](14, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](6, _c0, active_template_r12), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](8, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](10, _c3, price_template_r13), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](12, _c4, actions_template_r14)))("filter", ctx.filters == null ? null : ctx.filters.search)("show_children", ctx.show_children)("child_template", child_template_r15)("sortable", true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuTrigger, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckbox, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__.IconComponent, _components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_5__.SimpleTableComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 90%;\n                width: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVyaW5nLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLHNCQUFzQjtnQkFDdEIsV0FBVztnQkFDWCxXQUFXO1lBQ2YiLCJmaWxlIjoiY2F0ZXJpbmctbWVudS5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvY2F0ZXJpbmcvc3JjL2xpYi9jYXRlcmluZy1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixzQkFBc0I7Z0JBQ3RCLFdBQVc7Z0JBQ1gsV0FBVztZQUNmOztBQUVaLHdpQkFBd2lCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGhlaWdodDogOTAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 37053:
/*!******************************************************************!*\
  !*** ./libs/catering/src/lib/catering-option-modal.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CateringItemOptionModalComponent: () => (/* binding */ CateringItemOptionModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var libs_common_src_lib_general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! libs/common/src/lib/general */ 64217);
/* harmony import */ var _catering_item_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catering-item.class */ 25892);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/autocomplete */ 79771);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
















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
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("error", ctx_r0.form.controls.name.invalid && ctx_r0.form.controls.name.touched);
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
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    const auto_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("error", ctx_r0.form.controls.group.invalid && ctx_r0.form.controls.group.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matAutocomplete", auto_r2);
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
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.form.controls.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.form.controls.group);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.form.controls.unit_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.form.controls.multiple);
  }
}
function CateringItemOptionModalComponent_footer_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "footer", 17)(1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CateringItemOptionModalComponent_footer_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.saveChanges());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r0.form.dirty);
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
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", option_r4, " ");
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
      id: this.option.id || `option-${(0,libs_common_src_lib_general__WEBPACK_IMPORTED_MODULE_0__.randomInt)(9999_9999)}`,
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
  static #_ = this.ɵfac = function CateringItemOptionModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CateringItemOptionModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: CateringItemOptionModalComponent,
    selectors: [["catering-option-modal"]],
    outputs: {
      event: "event"
    },
    decls: 11,
    vars: 6,
    consts: [["load_state", ""], ["auto", "matAutocomplete"], ["icon", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "p-4 overflow-auto max-h-[65vh]", 3, "formGroup", 4, "ngIf", "ngIfElse"], ["class", "flex p-2 items-center justify-center border-t border-solid border-base-200", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], ["icon", "", "mat-dialog-close", ""], [1, "p-4", "overflow-auto", "max-h-[65vh]", 3, "formGroup"], ["class", "flex flex-col", 4, "ngIf"], [1, "flex", "flex-col"], ["for", "title"], ["appearance", "outline"], ["matInput", "", "name", "name", "placeholder", "Item name", "formControlName", "name"], ["for", "group"], ["matInput", "", "name", "group", "placeholder", "Type of option e.g. Number of sugars", "formControlName", "group", 3, "matAutocomplete"], ["matInput", "", "name", "unit-price", "type", "number", "placeholder", "Unit Price", "formControlName", "unit_price"], ["name", "multiple", "formControlName", "multiple"], [1, "flex", "p-2", "items-center", "justify-center", "border-t", "border-solid", "border-base-200"], ["btn", "", "matRipple", "", 3, "click", "disabled"], ["loading", "", 1, "flex", "flex-col", "items-center", "p-8", "space-y-2", "w-64"], ["diameter", "32"], [3, "value"]],
    template: function CateringItemOptionModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header")(1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CateringItemOptionModalComponent_button_3_Template, 3, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CateringItemOptionModalComponent_form_4_Template, 5, 5, "form", 3)(5, CateringItemOptionModalComponent_footer_5_Template, 3, 1, "footer", 4)(6, CateringItemOptionModalComponent_ng_template_6_Template, 4, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-autocomplete", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, CateringItemOptionModalComponent_mat_option_10_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const load_state_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.option.id ? "Edit" : "Add", " Item Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form && !ctx.loading)("ngIfElse", load_state_r5);
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

/***/ 81491:
/*!****************************************************************!*\
  !*** ./libs/catering/src/lib/catering-order-item.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CateringOrderItemComponent: () => (/* binding */ CateringOrderItemComponent)
/* harmony export */ });
/* harmony import */ var _catering_item_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catering-item.class */ 25892);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 74646);





const _c0 = ["catering-order-item", ""];
function CateringOrderItemComponent_ng_container_0_ng_container_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", opt_r3.name, " ");
  }
}
function CateringOrderItemComponent_ng_container_0_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CateringOrderItemComponent_ng_container_0_ng_container_14_div_1_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", opt_r3);
  }
}
function CateringOrderItemComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CateringOrderItemComponent_ng_container_0_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, CateringOrderItemComponent_ng_container_0_ng_container_14_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("bg-success", ctx_r1.active)("text-white", ctx_r1.active)("border-solid", ctx_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.active ? "done" : "local_pizza");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx_r1.item == null ? null : ctx_r1.item.amount) || (ctx_r1.item == null ? null : ctx_r1.item.quantity) || 1, "\u00D7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.item == null ? null : ctx_r1.item.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.item.option_list);
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
  static #_ = this.ɵfac = function CateringOrderItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CateringOrderItemComponent)();
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
    consts: [[4, "ngIf"], [1, "w-16", "text-right", "h-14", "relative"], ["arm", "", 1, "border-b-2", "border-l-2", "border-base-200", "w-4", "h-16", "absolute", "top-1/2", "left-1/2", "-translate-y-full", "-translate-x-px"], [1, "w-12", "mr-4"], ["action", "", "icon", "", "matRipple", "", 1, "border-2", "border-base-200", "border-dashed", "text-xl", "text-dark-fade", "p-2", 3, "click"], [1, "flex", "flex-1", "items-center", "border-b", "border-base-200", "border-solid", "py-4", "space-x-4"], [1, ""], [1, "p-1", "rounded-full", "bg-base-300", "w-10", "h-10", "flex", "items-center", "justify-center", "font-mono", "text-sm"], [1, "flex-1"], [1, "flex", "space-x-2", "mr-2", "px-4"], [4, "ngFor", "ngForOf"], ["class", "text-xs py-1 px-2 bg-warning text-warning-content rounded-2xl shadow", 4, "ngIf"], [1, "text-xs", "py-1", "px-2", "bg-warning", "text-warning-content", "rounded-2xl", "shadow"]],
    template: function CateringOrderItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CateringOrderItemComponent_ng_container_0_Template, 15, 10, "ng-container", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.item);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRipple],
    styles: ["[_nghost-%COMP%]:last-child    > div[_ngcontent-%COMP%] {\n                border: none !important;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVyaW5nLW9yZGVyLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSx1QkFBdUI7WUFDM0IiLCJmaWxlIjoiY2F0ZXJpbmctb3JkZXItaXRlbS5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0Omxhc3QtY2hpbGQgPiBkaXYge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvY2F0ZXJpbmcvc3JjL2xpYi9jYXRlcmluZy1vcmRlci1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksdUJBQXVCO1lBQzNCOztBQUVaLHdhQUF3YSIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Q6bGFzdC1jaGlsZCA+IGRpdiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 41623:
/*!****************************************************************!*\
  !*** ./libs/catering/src/lib/catering-order-list.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CateringOrderListComponent: () => (/* binding */ CateringOrderListComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _catering_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catering-orders.service */ 98197);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _catering_vars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catering.vars */ 91074);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _components_src_lib_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/src/lib/custom-tooltip.component */ 22238);
/* harmony import */ var _components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/src/lib/simple-table.component */ 88328);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-bar */ 26354);
/* harmony import */ var _catering_order_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./catering-order-item.component */ 81491);















const _c0 = a0 => ({
  key: "state",
  name: " ",
  size: "4rem",
  sortable: false,
  content: a0
});
const _c1 = a0 => ({
  key: "deliver_at",
  name: "Time",
  content: a0
});
const _c2 = a0 => ({
  key: "event",
  name: "Location",
  content: a0,
  sortable: false
});
const _c3 = a0 => ({
  key: "event",
  name: "Host",
  content: a0,
  sortable: false
});
const _c4 = () => ({
  key: "charge_code",
  name: "Charge Code"
});
const _c5 = () => ({
  key: "invoice_number",
  name: "Invoice No.",
  empty: "No Invoice"
});
const _c6 = a0 => ({
  key: "status",
  name: "Status",
  content: a0,
  size: "11rem"
});
const _c7 = a0 => ({
  key: "actions",
  name: " ",
  size: "6.5rem",
  content: a0,
  sortable: false
});
const _c8 = (a0, a1, a2, a3, a4, a5, a6, a7) => [a0, a1, a2, a3, a4, a5, a6, a7];
function CateringOrderListComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "room_service");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
}
function CateringOrderListComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 14)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r1 = ctx.data;
    const row_r2 = ctx.row;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Deliver at ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](3, 5, data_r1, ctx_r2.time_format), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate4"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](6, 8, row_r2 == null ? null : row_r2.event == null ? null : row_r2.event.date, "MMM d"), ", ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](7, 11, row_r2 == null ? null : row_r2.event == null ? null : row_r2.event.date, ctx_r2.time_format), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](8, 14, row_r2 == null ? null : row_r2.event == null ? null : row_r2.event.date_end, "MMM d"), ", ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](9, 17, row_r2 == null ? null : row_r2.event == null ? null : row_r2.event.date_end, ctx_r2.time_format), " ");
  }
}
function CateringOrderListComponent_ng_template_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " No Location ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function CateringOrderListComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CateringOrderListComponent_ng_template_8_span_2_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r4 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (data_r4 == null ? null : data_r4.space == null ? null : data_r4.space.display_name) || (data_r4 == null ? null : data_r4.space == null ? null : data_r4.space.name) || "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !((data_r4 == null ? null : data_r4.space == null ? null : data_r4.space.display_name) || (data_r4 == null ? null : data_r4.space == null ? null : data_r4.space.name)));
  }
}
function CateringOrderListComponent_ng_template_10_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Unknown Host ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function CateringOrderListComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 16)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, CateringOrderListComponent_ng_template_10_span_3_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r5 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (data_r5 == null ? null : data_r5.organiser == null ? null : data_r5.organiser.name) || (data_r5 == null ? null : data_r5.host) || "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !((data_r5 == null ? null : data_r5.organiser == null ? null : data_r5.organiser.name) || (data_r5 == null ? null : data_r5.host)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (data_r5 == null ? null : data_r5.organiser == null ? null : data_r5.organiser.email) || (data_r5 == null ? null : data_r5.host), " ");
  }
}
function CateringOrderListComponent_ng_template_12_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CateringOrderListComponent_ng_template_12_button_8_Template_button_click_0_listener() {
      const status_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6).$implicit;
      const row_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().row;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.updateStatus(row_r8, status_r7.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const status_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background-color", status_r7.colour);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](status_r7.name);
  }
}
function CateringOrderListComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 16)(1, "button", 19)(2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "app-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "mat-menu", null, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, CateringOrderListComponent_ng_template_12_button_8_Template, 5, 3, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_11_0;
    let tmp_13_0;
    const data_r9 = ctx.data;
    const menu_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](7);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background", (tmp_11_0 = ctx_r2.status(data_r9)) == null ? null : tmp_11_0.colour);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matMenuTriggerFor", menu_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (tmp_13_0 = ctx_r2.status(data_r9)) == null ? null : tmp_13_0.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.statuses);
  }
}
function CateringOrderListComponent_ng_template_14_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 30)(1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", row_r12.notes, " ");
  }
}
function CateringOrderListComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 27)(1, "button", 28)(2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "description");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, CateringOrderListComponent_ng_template_14_ng_template_4_Template, 5, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CateringOrderListComponent_ng_template_14_Template_button_click_6_listener() {
      const row_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11).row;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.show_children[row_r12.id] = !ctx_r2.show_children[row_r12.id]);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const row_r12 = ctx.row;
    const notes_template_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](5);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hover", true)("content", notes_template_r13)("disabled", !row_r12.notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r2.show_children[row_r12.id] ? "keyboard_arrow_down" : "chevron_right", " ");
  }
}
function CateringOrderListComponent_ng_template_16_ul_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "li", 36);
  }
  if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const row_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).row;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("order_id", row_r15 == null ? null : row_r15.id)("item", item_r14);
  }
}
function CateringOrderListComponent_ng_template_16_ul_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ul", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CateringOrderListComponent_ng_template_16_ul_0_li_1_Template, 1, 2, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", row_r15.items);
  }
}
function CateringOrderListComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, CateringOrderListComponent_ng_template_16_ul_0_Template, 2, 1, "ul", 33);
  }
  if (rf & 2) {
    const row_r15 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", row_r15 == null ? null : row_r15.items.length);
  }
}
class CateringOrderListComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_2__.AsyncHandler {
  get time_format() {
    return this._settings.time_format;
  }
  status(value) {
    return _catering_vars__WEBPACK_IMPORTED_MODULE_3__.CATERING_STATUSES.find(i => i.id === value);
  }
  constructor(_orders, _settings) {
    var _this;
    super();
    _this = this;
    this._orders = _orders;
    this._settings = _settings;
    /** List of filtered orders */
    this.order_list = this._orders.filtered;
    /** Whether order list is loading */
    this.loading = this._orders.loading;
    this.statuses = _catering_vars__WEBPACK_IMPORTED_MODULE_3__.CATERING_STATUSES;
    this.show_children = {};
    this.updateStatus = /*#__PURE__*/function () {
      var _ref = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (order, s) {
        yield _this._orders.updateStatus(order, s);
        _this.timeout('status-change', () => order.status = s);
      });
      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();
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
  static #_ = this.ɵfac = function CateringOrderListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CateringOrderListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_catering_orders_service__WEBPACK_IMPORTED_MODULE_1__.CateringOrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_2__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: CateringOrderListComponent,
    selectors: [["catering-order-list"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
    decls: 18,
    vars: 32,
    consts: [["state_template", ""], ["time_template", ""], ["location_template", ""], ["host_template", ""], ["status_template", ""], ["actions_template", ""], ["child_template", ""], ["menu", "matMenu"], ["notes_template", ""], [1, "flex", "flex-col", "h-full", "w-full", "overflow-auto"], ["mode", "indeterminate", 1, "sticky", "top-0", "left-0", "w-full"], ["empty_message", "No Catering Orders", 1, "min-w-[72rem]", "w-full", "block", "text-sm", 3, "data", "columns", "sortable", "show_children", "child_template"], [1, "p-2"], [1, "rounded-full", "bg-base-200", "p-2", "text-2xl", "flex", "items-center", "justify-center"], [1, "p-4"], [1, "text-xs", "opacity-30"], [1, "px-4", "py-2"], ["class", "opacity-30", 4, "ngIf"], [1, "opacity-30"], ["status", "", "matRipple", "", 1, "rounded-3xl", "text-base", "border-none", "h-10", "px-4", "flex", "items-center", "text-white", "w-36", 3, "matMenuTriggerFor"], [1, "flex", "text-center", "capitalize", "mx-2"], [1, "pl-2"], ["mat-menu-item", "", "class", "flex items-center", 3, "click", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 1, "flex", "items-center", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "rounded-full", "h-4", "w-4", "mr-2"], [1, "mr-2", "w-20"], [1, "flex", "items-center", "space-x-2", "p-2", "mx-auto"], ["icon", "", "matRipple", "", "customTooltip", "", "xPosition", "end", "yPosition", "top", 3, "hover", "content", "disabled"], ["icon", "", "matRipple", "", 3, "click"], [1, "p-2", "rounded-lg", "bg-base-100", "text-base-content", "max-w-[32rem]", "min-w-[8rem]", "shadow", "border", "border-base-200"], [1, "mb-2"], [1, "text-sm", "px-4", "py-2", "bg-base-200", "rounded"], ["class", "list-none p-0 m-0 w-full relative z-0", 4, "ngIf"], [1, "list-none", "p-0", "m-0", "w-full", "relative", "z-0"], ["catering-order-item", "", "class", "flex items-center", 3, "order_id", "item", 4, "ngFor", "ngForOf"], ["catering-order-item", "", 1, "flex", "items-center", 3, "order_id", "item"]],
    template: function CateringOrderListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-progress-bar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "simple-table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, CateringOrderListComponent_ng_template_4_Template, 4, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"])(6, CateringOrderListComponent_ng_template_6_Template, 10, 20, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"])(8, CateringOrderListComponent_ng_template_8_Template, 3, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"])(10, CateringOrderListComponent_ng_template_10_Template, 6, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"])(12, CateringOrderListComponent_ng_template_12_Template, 9, 5, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"])(14, CateringOrderListComponent_ng_template_14_Template, 9, 4, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"])(16, CateringOrderListComponent_ng_template_16_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const state_template_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](5);
        const time_template_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](7);
        const location_template_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](9);
        const host_template_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](11);
        const status_template_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](13);
        const actions_template_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](15);
        const child_template_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("opacity-0", !_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 7, ctx.loading));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx.order_list)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction8"](23, _c8, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](9, _c0, state_template_r16), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](11, _c1, time_template_r17), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](13, _c2, location_template_r18), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](15, _c3, host_template_r19), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](17, _c4), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](18, _c5), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](19, _c6, status_template_r20), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](21, _c7, actions_template_r21)))("sortable", true)("show_children", ctx.show_children)("child_template", child_template_r22);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuTrigger, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__.IconComponent, _components_src_lib_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_5__.CustomTooltipComponent, _components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_6__.SimpleTableComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatRipple, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__.MatProgressBar, _catering_order_item_component__WEBPACK_IMPORTED_MODULE_7__.CateringOrderItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVyaW5nLW9yZGVyLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLHNCQUFzQjtnQkFDdEIsWUFBWTtnQkFDWixXQUFXO1lBQ2YiLCJmaWxlIjoiY2F0ZXJpbmctb3JkZXItbGlzdC5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvY2F0ZXJpbmcvc3JjL2xpYi9jYXRlcmluZy1vcmRlci1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixzQkFBc0I7Z0JBQ3RCLFlBQVk7Z0JBQ1osV0FBVztZQUNmOztBQUVaLHdqQkFBd2pCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 82912:
/*!*****************************************************************!*\
  !*** ./libs/catering/src/lib/catering-order-modal.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CateringOrderModalComponent: () => (/* binding */ CateringOrderModalComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _catering_item_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catering-item.class */ 25892);
/* harmony import */ var _catering_order_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catering-order.class */ 75555);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utilities */ 60285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ 38223);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _form_fields_src_lib_counter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../form-fields/src/lib/counter.component */ 55507);



















const _c0 = () => ({});
function CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Options Available ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_a_counter_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a-counter", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_a_counter_8_Template_a_counter_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.updateItemQuantity(item_r2, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", item_r2.quantity);
  }
}
function CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 20)(1, "div", 21)(2, "button", 22)(3, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_div_9_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.addItem(item_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matTooltip", item_r2.quantity ? "Items with options must be removed from order confirmation page" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r2.quantity, " ");
  }
}
function CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_div_4_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_a_counter_8_Template, 1, 1, "a-counter", 16)(9, CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_div_9_Template, 10, 3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r2.options.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](7, 5, item_r2.unit_price / 100, ctx_r2.code), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !item_r2.options.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r2.options.length);
  }
}
function CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-tab", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_div_2_Template, 10, 8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const cat_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("label", cat_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", (ctx_r2.menu_items || _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](2, _c0))[cat_r5]);
  }
}
function CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_mat_tab_1_Template, 3, 3, "mat-tab", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const cat_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r2.menu_items || _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](1, _c0))[cat_r5].length);
  }
}
function CateringOrderModalComponent_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-tab-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CateringOrderModalComponent_div_0_ng_container_1_ng_container_2_Template, 2, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.categories);
  }
}
function CateringOrderModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CateringOrderModalComponent_div_0_ng_container_1_Template, 3, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const order_details_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r2.show_order_details)("ngIfElse", order_details_r6);
  }
}
function CateringOrderModalComponent_footer_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CateringOrderModalComponent_footer_1_ng_container_1_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.show_order_details = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " Confirm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r2.order.item_count)("matBadge", ctx_r2.order.item_count)("matBadgeHidden", !ctx_r2.order.item_count);
  }
}
function CateringOrderModalComponent_footer_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CateringOrderModalComponent_footer_1_ng_template_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.show_order_details = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CateringOrderModalComponent_footer_1_ng_template_2_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.saveOrder());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Save Order ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function CateringOrderModalComponent_footer_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "footer", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CateringOrderModalComponent_footer_1_ng_container_1_Template, 5, 3, "ng-container", 6)(2, CateringOrderModalComponent_footer_1_ng_template_2_Template, 4, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const order_actions_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r2.show_order_details)("ngIfElse", order_actions_r9);
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
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matTooltip", ctx_r2.optionsFor(item_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", item_r11.options.length, " option", item_r11.options.length === 1 ? "" : "s", " selected ");
  }
}
function CateringOrderModalComponent_ng_template_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, CateringOrderModalComponent_ng_template_4_div_4_div_4_Template, 2, 3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "a-counter", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CateringOrderModalComponent_ng_template_4_div_4_Template_a_counter_ngModelChange_8_listener($event) {
      const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.updateItemQuantity(item_r11, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r11.options.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](7, 4, item_r11.total_cost / 100, ctx_r2.code), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", item_r11.quantity);
  }
}
function CateringOrderModalComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "header", 32)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Confirm Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, CateringOrderModalComponent_ng_template_4_div_4_Template, 9, 7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.order.items);
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
  static #_ = this.ɵfac = function CateringOrderModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CateringOrderModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_4__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA));
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
    consts: [["load_state", ""], ["order_details", ""], ["order_actions", ""], ["class", "main min-w-[20rem]", 4, "ngIf", "ngIfElse"], ["class", "flex items-center justify-center space-x-2 p-2 border-t border-base-200", 4, "ngIf"], [1, "main", "min-w-[20rem]"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], [3, "label", 4, "ngIf"], [3, "label"], [1, "list"], ["item", "", "class", "flex items-center p-2 border-b border-base-200", 4, "ngFor", "ngForOf"], ["item", "", 1, "flex", "items-center", "p-2", "border-b", "border-base-200"], [1, "flex-1", "w-1/2"], ["class", "text-xs no-underline", 4, "ngIf"], [1, "bg-primary", "text-xs", "rounded", "px-4", "py-2", "mx-2", "text-white", "font-medium"], ["ngDefaultControl", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "flex items-center", 4, "ngIf"], [1, "text-xs", "no-underline"], ["ngDefaultControl", "", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center"], [3, "matTooltip"], ["icon", "", "matRipple", "", 3, "disabled"], [1, "count", "h-12", "w-12", "flex", "items-center", "justify-center"], ["icon", "", "matRipple", "", 3, "click"], [1, "flex", "items-center", "justify-center", "space-x-2", "p-2", "border-t", "border-base-200"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "inverse"], ["confirm", "", "btn", "", "matRipple", "", "matBadgeColor", "warn", 3, "click", "disabled", "matBadge", "matBadgeHidden"], ["matRipple", "", 1, "inverse", 3, "click"], ["save", "", "btn", "", "matRipple", "", 3, "click"], [1, "flex", "flex-col", "w-64", "p-8", "items-center", "space-y-2"], ["diameter", "32"], [1, "h-[3.25rem]"], ["class", "text-xs underline", 3, "matTooltip", 4, "ngIf"], [3, "ngModelChange", "ngModel"], [1, "text-xs", "underline", 3, "matTooltip"]],
    template: function CateringOrderModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, CateringOrderModalComponent_div_0_Template, 2, 2, "div", 3)(1, CateringOrderModalComponent_footer_1_Template, 4, 2, "footer", 4)(2, CateringOrderModalComponent_ng_template_2_Template, 4, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"])(4, CateringOrderModalComponent_ng_template_4_Template, 5, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const load_state_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", load_state_r12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabGroup, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogClose, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_6__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatRipple, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__.MatProgressSpinner, _form_fields_src_lib_counter_component__WEBPACK_IMPORTED_MODULE_7__.CounterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CurrencyPipe],
    styles: [".list[_ngcontent-%COMP%] {\n                height: 24em;\n                min-width: 32em;\n                max-width: calc(100vw - 1em);\n            }\n\n            footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n                min-width: 12em;\n            }\n\n            input[_ngcontent-%COMP%] {\n                position: relative;\n                width: 100%;\n                padding: 1em;\n                border: none;\n                border-radius: 0 !important;\n                border-top: 1px solid #ccc;\n                border-bottom: 1px solid #ccc;\n                outline: none;\n                font-size: 1em;\n            }\n\n            input[_ngcontent-%COMP%]:focus {\n                border: none;\n                border-top: 2px solid var(--s);\n                border-bottom: 2px solid var(--s);\n                box-shadow: none;\n            }\n\n            input.error[_ngcontent-%COMP%]::placeholder {\n                color: rgba(var(--error), 0.45);\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVyaW5nLW9yZGVyLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksWUFBWTtnQkFDWixlQUFlO2dCQUNmLDRCQUE0QjtZQUNoQzs7WUFFQTtnQkFDSSxlQUFlO1lBQ25COztZQUVBO2dCQUNJLGtCQUFrQjtnQkFDbEIsV0FBVztnQkFDWCxZQUFZO2dCQUNaLFlBQVk7Z0JBQ1osMkJBQTJCO2dCQUMzQiwwQkFBMEI7Z0JBQzFCLDZCQUE2QjtnQkFDN0IsYUFBYTtnQkFDYixjQUFjO1lBQ2xCOztZQUVBO2dCQUNJLFlBQVk7Z0JBQ1osOEJBQThCO2dCQUM5QixpQ0FBaUM7Z0JBQ2pDLGdCQUFnQjtZQUNwQjs7WUFFQTtnQkFDSSwrQkFBK0I7WUFDbkMiLCJmaWxlIjoiY2F0ZXJpbmctb3JkZXItbW9kYWwuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICAubGlzdCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNGVtO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMzJlbTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSAxZW0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb290ZXIgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5wdXQ6Zm9jdXMge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tcyk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXMpO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlucHV0LmVycm9yOjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEodmFyKC0tZXJyb3IpLCAwLjQ1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvY2F0ZXJpbmcvc3JjL2xpYi9jYXRlcmluZy1vcmRlci1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLFlBQVk7Z0JBQ1osZUFBZTtnQkFDZiw0QkFBNEI7WUFDaEM7O1lBRUE7Z0JBQ0ksZUFBZTtZQUNuQjs7WUFFQTtnQkFDSSxrQkFBa0I7Z0JBQ2xCLFdBQVc7Z0JBQ1gsWUFBWTtnQkFDWixZQUFZO2dCQUNaLDJCQUEyQjtnQkFDM0IsMEJBQTBCO2dCQUMxQiw2QkFBNkI7Z0JBQzdCLGFBQWE7Z0JBQ2IsY0FBYztZQUNsQjs7WUFFQTtnQkFDSSxZQUFZO2dCQUNaLDhCQUE4QjtnQkFDOUIsaUNBQWlDO2dCQUNqQyxnQkFBZ0I7WUFDcEI7O1lBRUE7Z0JBQ0ksK0JBQStCO1lBQ25DOztBQUVaLHcwREFBdzBEIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICAubGlzdCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNGVtO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMzJlbTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSAxZW0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb290ZXIgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5wdXQ6Zm9jdXMge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tcyk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXMpO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlucHV0LmVycm9yOjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEodmFyKC0tZXJyb3IpLCAwLjQ1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 90699:
/*!***************************************************************************************!*\
  !*** ./libs/catering/src/lib/catering-order-modal/catering-item-details.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CateringItemDetailsComponent: () => (/* binding */ CateringItemDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _catering_item_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../catering-item.class */ 25892);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/radio */ 53804);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _components_src_lib_image_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/src/lib/image-carousel.component */ 65277);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _form_fields_src_lib_counter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../form-fields/src/lib/counter.component */ 55507);












function CateringItemDetailsComponent_ng_container_0_p_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, ctx_r1.item.unit_price / 100, ctx_r1.code), " ");
  }
}
function CateringItemDetailsComponent_ng_container_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", tag_r3, " ");
  }
}
function CateringItemDetailsComponent_ng_container_0_div_21_ng_container_4_mat_radio_button_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" +", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, opt_r6.unit_price / 100, ctx_r1.code), " ");
  }
}
function CateringItemDetailsComponent_ng_container_0_div_21_ng_container_4_mat_radio_button_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-radio-button", 31)(1, "div", 32)(2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, CateringItemDetailsComponent_ng_container_0_div_21_ng_container_4_mat_radio_button_5_div_4_Template, 3, 4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", opt_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", opt_r6.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", opt_r6.unit_price);
  }
}
function CateringItemDetailsComponent_ng_container_0_div_21_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-radio-group", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function CateringItemDetailsComponent_ng_container_0_div_21_ng_container_4_Template_mat_radio_group_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const group_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.group_state[group_r5.name], $event) || (ctx_r1.group_state[group_r5.name] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CateringItemDetailsComponent_ng_container_0_div_21_ng_container_4_Template_mat_radio_group_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const group_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.updateGroupOption(group_r5, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-radio-button", 28)(3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](4, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, CateringItemDetailsComponent_ng_container_0_div_21_ng_container_4_mat_radio_button_5_Template, 5, 3, "mat-radio-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const group_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.group_state[group_r5.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.item == null ? null : ctx_r1.item.in_order);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", group_r5 == null ? null : group_r5.options);
  }
}
function CateringItemDetailsComponent_ng_container_0_div_21_ng_template_5_mat_checkbox_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" +", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, opt_r8.unit_price / 100, ctx_r1.code), " ");
  }
}
function CateringItemDetailsComponent_ng_container_0_div_21_ng_template_5_mat_checkbox_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-checkbox", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function CateringItemDetailsComponent_ng_container_0_div_21_ng_template_5_mat_checkbox_0_Template_mat_checkbox_ngModelChange_0_listener($event) {
      const opt_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.option_state[opt_r8.id], $event) || (ctx_r1.option_state[opt_r8.id] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CateringItemDetailsComponent_ng_container_0_div_21_ng_template_5_mat_checkbox_0_Template_mat_checkbox_ngModelChange_0_listener($event) {
      const opt_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.updateCheckedState(opt_r8.id, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 21)(2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, CateringItemDetailsComponent_ng_container_0_div_21_ng_template_5_mat_checkbox_0_div_4_Template, 3, 4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const opt_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.option_state[opt_r8.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.item == null ? null : ctx_r1.item.in_order);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", opt_r8.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", opt_r8.unit_price);
  }
}
function CateringItemDetailsComponent_ng_container_0_div_21_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CateringItemDetailsComponent_ng_container_0_div_21_ng_template_5_mat_checkbox_0_Template, 5, 4, "mat-checkbox", 36);
  }
  if (rf & 2) {
    const group_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", group_r5 == null ? null : group_r5.options);
  }
}
function CateringItemDetailsComponent_ng_container_0_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24)(1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, CateringItemDetailsComponent_ng_container_0_div_21_ng_container_4_Template, 6, 3, "ng-container", 4)(5, CateringItemDetailsComponent_ng_container_0_div_21_ng_template_5_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const group_r5 = ctx.$implicit;
    const multi_options_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("group", group_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", group_r5.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !group_r5.multiple)("ngIfElse", multi_options_r9);
  }
}
function CateringItemDetailsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "image-carousel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CateringItemDetailsComponent_ng_container_0_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.close.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CateringItemDetailsComponent_ng_container_0_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.toggleFav.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 9)(10, "section", 10)(11, "div")(12, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, CateringItemDetailsComponent_ng_container_0_p_14_Template, 3, 4, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "a-counter", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function CateringItemDetailsComponent_ng_container_0_Template_a_counter_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.item.quantity, $event) || (ctx_r1.item.quantity = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CateringItemDetailsComponent_ng_container_0_Template_a_counter_ngModelChange_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.active ? ctx_r1.activeChange.emit(ctx_r1.active) : "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "section", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, CateringItemDetailsComponent_ng_container_0_div_17_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "section", 16)(20, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, CateringItemDetailsComponent_ng_container_0_div_21_Template, 7, 4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 19)(23, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CateringItemDetailsComponent_ng_container_0_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r1.active = !ctx_r1.active;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.activeChange.emit(ctx_r1.active));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 21)(25, "app-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("images", ctx_r1.item.images);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("text-white", !ctx_r1.fav)("text-blue-400", ctx_r1.fav);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.fav ? "favorite" : "favorite_border");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.item.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.item.unit_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.item.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("min", 1)("max", ctx_r1.item.count || 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.item.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.groups);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("inverse", ctx_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.active ? "remove" : "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.active ? "Remove this item" : "Add this item", " ");
  }
}
function CateringItemDetailsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 39)(1, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
class CateringItemDetailsComponent {
  constructor() {
    this.active = false;
    this.fav = false;
    this.code = 'USD';
    this.toggleFav = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.activeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.option_state = {};
    this.group_state = {};
  }
  ngOnChanges(changes) {
    if (changes.item && this.item) {
      this._update();
    }
  }
  updateGroupOption(group, id) {
    if (!group) return;
    this.group_state[group.name] = id;
    for (const option of group.options) {
      option.active = option.id === id;
    }
  }
  updateCheckedState(id, state) {
    const option = this.item?.options.find(_ => _.id === id);
    if (option) option.active = state;
  }
  _update() {
    if (!this.item) return;
    if (!this.item.quantity) {
      this.item.quantity = 1;
    }
    this.option_state = {};
    this.group_state = {};
    const groups = (0,_placeos_common__WEBPACK_IMPORTED_MODULE_0__.unique)(this.item.options.map(i => i.group || 'Other'));
    const group_list = [];
    for (const group of groups) {
      const options = this.item.options.filter(i => i.group === group);
      group_list.push({
        name: group,
        multiple: !!options.find(i => i.multiple),
        options
      });
    }
    this.groups = group_list;
    if (this.item.option_list) {
      for (const opt of this.item.option_list) {
        const option = this.item.options.find(_ => _.id === opt.id);
        if (option) {
          option.active = true;
          this.option_state[opt.id] = true;
          this.updateGroupOption(this.groups.find(g => g.name === option.group), option.id);
        }
      }
    }
  }
  static #_ = this.ɵfac = function CateringItemDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CateringItemDetailsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: CateringItemDetailsComponent,
    selectors: [["catering-item-details"]],
    inputs: {
      item: "item",
      active: "active",
      fav: "fav",
      code: "code"
    },
    outputs: {
      toggleFav: "toggleFav",
      activeChange: "activeChange",
      close: "close"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]],
    decls: 3,
    vars: 2,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6252070156626006029$$LIBS_CATERING_SRC_LIB_CATERING_ORDER_MODAL_CATERING_ITEM_DETAILS_COMPONENT_TS_0 = goog.getMsg("None");
        i18n_0 = MSG_EXTERNAL_6252070156626006029$$LIBS_CATERING_SRC_LIB_CATERING_ORDER_MODAL_CATERING_ITEM_DETAILS_COMPONENT_TS_0;
      } else {
        i18n_0 = $localize`:␟a2f14a73f7a6e94479f67423cc51102da8d6f524␟6252070156626006029:None`;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2528715266490787662$$LIBS_CATERING_SRC_LIB_CATERING_ORDER_MODAL_CATERING_ITEM_DETAILS_COMPONENT_TS_1 = goog.getMsg(" Select an item to view it's details ");
        i18n_1 = MSG_EXTERNAL_2528715266490787662$$LIBS_CATERING_SRC_LIB_CATERING_ORDER_MODAL_CATERING_ITEM_DETAILS_COMPONENT_TS_1;
      } else {
        i18n_1 = $localize`:␟0fab86098296160aef9d98a89e252bee5cf35141␟2528715266490787662: Select an item to view it's details `;
      }
      return [["empty_state", ""], ["multi_options", ""], i18n_0, i18n_1, [4, "ngIf", "ngIfElse"], ["image", "", 1, "relative", "w-full", "h-64", "sm:h-40", "bg-neutral"], [1, "absolute", "inset-0", 3, "images"], ["icon", "", "matRipple", "", "name", "close-catering-item-details", 1, "absolute", "top-2", "left-2", "bg-neutral", "sm:hidden", "text-white", 3, "click"], ["icon", "", "matRipple", "", "name", "toggle-catering-item-favourite-details", 1, "absolute", "top-2", "right-2", "bg-neutral", 3, "click"], [1, "p-2", "space-y-2", "flex-1", "h-1/2", "overflow-auto"], ["actions", "", 1, "z-0", "flex", "items-center", "justify-between"], [1, "text-xl", "font-medium", "mb-2", "mt-4"], [4, "ngIf"], [3, "ngModelChange", "ngModel", "min", "max"], [1, "flex", "items-center", "flex-wrap"], ["class", "px-2 py-1 rounded-2xl bg-base-200 text-sm capitalize m-1", 4, "ngFor", "ngForOf"], ["details", "", 1, "space-y-2"], [1, "flex", "flex-col", "flex-wrap"], ["class", "min-w-1/2 flex-1", 4, "ngFor", "ngForOf"], [1, "px-2", "pt-2", "pb-[5.5rem]", "border-t", "border-base-200", "shadow", "sm:hidden"], ["btn", "", "matRipple", "", "name", "select-catering-item-details", 1, "w-full", 3, "click"], [1, "flex", "items-center", "justify-center"], [1, "text-2xl"], [1, "px-2", "py-1", "rounded-2xl", "bg-base-200", "text-sm", "capitalize", "m-1"], [1, "min-w-1/2", "flex-1"], [1, "font-medium", "p-2", "capitalize"], [1, "flex", "flex-col", "pl-4"], ["aria-label", "Select an option", 1, "flex", "flex-col", 3, "ngModelChange", "ngModel", "disabled"], ["value", "", 1, "m-0"], [1, "font-medium", "p-2"], ["class", "m-0", 3, "value", 4, "ngFor", "ngForOf"], [1, "m-0", 3, "value"], [1, "flex", "items-center", "justify-center", "max-w-[calc(100vw-4rem)]", "sm:max-w-[15rem]"], [1, "font-medium", "p-2", "flex-1", "w-1/2", "whitespace-normal"], ["class", "opacity-60 text-xs", 4, "ngIf"], [1, "opacity-60", "text-xs"], [3, "ngModel", "disabled", "ngModelChange", 4, "ngFor", "ngForOf"], [3, "ngModelChange", "ngModel", "disabled"], [1, "font-medium", "p-2", "flex-1", "w-1/2"], ["empty", "", 1, "p-16", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "opacity-30", "text-center"]];
    },
    template: function CateringItemDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CateringItemDetailsComponent_ng_container_0_Template, 29, 17, "ng-container", 4)(1, CateringItemDetailsComponent_ng_template_1_Template, 3, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const empty_state_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.item)("ngIfElse", empty_state_r10);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckbox, _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__.MatRadioButton, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _components_src_lib_image_carousel_component__WEBPACK_IMPORTED_MODULE_3__.ImageCarouselComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatRipple, _form_fields_src_lib_counter_component__WEBPACK_IMPORTED_MODULE_4__.CounterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CurrencyPipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                width: 30%;\n                min-width: 20rem;\n                height: 100%;\n                min-height: 65vh;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVyaW5nLWl0ZW0tZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixVQUFVO2dCQUNWLGdCQUFnQjtnQkFDaEIsWUFBWTtnQkFDWixnQkFBZ0I7WUFDcEIiLCJmaWxlIjoiY2F0ZXJpbmctaXRlbS1kZXRhaWxzLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjByZW07XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDY1dmg7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvY2F0ZXJpbmcvc3JjL2xpYi9jYXRlcmluZy1vcmRlci1tb2RhbC9jYXRlcmluZy1pdGVtLWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLHNCQUFzQjtnQkFDdEIsVUFBVTtnQkFDVixnQkFBZ0I7Z0JBQ2hCLFlBQVk7Z0JBQ1osZ0JBQWdCO1lBQ3BCOztBQUVaLGdzQkFBZ3NCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyMHJlbTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogNjV2aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 26386:
/*!***************************************************************************************!*\
  !*** ./libs/catering/src/lib/catering-order-modal/catering-item-filters.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CateringItemFiltersComponent: () => (/* binding */ CateringItemFiltersComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var _catering_order_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catering-order-state.service */ 20097);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 33240);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 28797);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 56441);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 49675);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 1874);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _form_fields_src_lib_duration_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../form-fields/src/lib/duration-field.component */ 83476);



















function CateringItemFiltersComponent_h3_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CateringItemFiltersComponent_div_7_ng_container_3_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const day_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", day_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 2, day_r4.value, "mediumDate"), " ");
  }
}
function CateringItemFiltersComponent_div_7_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Deliver Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-form-field", 16)(4, "mat-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function CateringItemFiltersComponent_div_7_ng_container_3_Template_mat_select_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.offset_day, $event) || (ctx_r1.offset_day = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CateringItemFiltersComponent_div_7_ng_container_3_Template_mat_select_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.offset_dayChange.next($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, CateringItemFiltersComponent_div_7_ng_container_3_mat_option_5_Template, 3, 5, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.offset_day);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.day_options);
  }
}
function CateringItemFiltersComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12)(1, "mat-checkbox", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function CateringItemFiltersComponent_div_7_Template_mat_checkbox_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.at_time, $event) || (ctx_r1.at_time = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CateringItemFiltersComponent_div_7_Template_mat_checkbox_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.at_timeChange.next($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Exact Time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, CateringItemFiltersComponent_div_7_ng_container_3_Template, 6, 2, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Deliver After:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "a-duration-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function CateringItemFiltersComponent_div_7_Template_a_duration_field_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r1.offset, $event) || (ctx_r1.offset = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CateringItemFiltersComponent_div_7_Template_a_duration_field_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.offsetChange.next($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.at_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matTooltip", ctx_r1.exact_tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.day_options.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.offset);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("time", ctx_r1.offset_day > 0 ? ctx_r1.start_of_date : (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 9, ctx_r1.filters)) == null ? null : tmp_5_0.date)("step", ctx_r1.step_interval)("min", ctx_r1.min_offset)("max", ctx_r1.max_offset)("use_24hr", ctx_r1.use_24hr);
  }
}
function CateringItemFiltersComponent_h3_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h3", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CateringItemFiltersComponent_mat_checkbox_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-checkbox", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CateringItemFiltersComponent_mat_checkbox_10_Template_mat_checkbox_ngModelChange_0_listener() {
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.toggleCategory(item_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_2_0;
    const item_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 3, ctx_r1.filters)) == null ? null : tmp_2_0.categories == null ? null : tmp_2_0.categories.includes(item_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("name", item_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r6, " ");
  }
}
const ICONS = {
  coffee: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_605_8664)">
    <path d="M38.388 21.2474C37.8243 20.7996 37.1598 20.4847 36.4474 20.3278C35.735 20.1708 34.9944 20.1762 34.2846 20.3434C34.2476 19.7774 34.2049 19.2037 34.1483 18.6155C34.1243 18.3664 34.0043 18.1349 33.8119 17.9668C33.6195 17.7986 33.3687 17.706 33.1088 17.707H1.26151C1.00166 17.706 0.750839 17.7986 0.558442 17.9668C0.366045 18.1349 0.246035 18.3664 0.222073 18.6155C-0.42931 25.3581 0.106585 30.5307 4.80024 35.4799C8.88062 39.7819 15.7271 39.9998 17.0599 39.9998H17.3047C18.6375 39.9998 25.4863 39.7774 29.5643 35.4799C30.5412 34.4597 31.3937 33.3353 32.1052 32.1286C32.2481 32.1199 32.3875 32.0819 32.514 32.0174C34.0959 31.2139 35.6169 30.3039 37.0656 29.2943C38.3815 28.4227 39.3664 27.1618 39.871 25.7028C40.0702 24.9006 40.0372 24.0612 39.7758 23.2757C39.5144 22.4902 39.0344 21.7887 38.388 21.2474ZM28.0329 34.13C24.4699 37.8905 18.0323 37.9984 17.3093 37.9984H17.0645C16.3426 37.9984 9.90389 37.8872 6.34092 34.13C2.37257 29.9436 1.75351 25.466 2.21549 19.7085H32.1583C32.6214 25.4649 32.0024 29.9425 28.0329 34.13ZM37.8498 25.2091C37.4485 26.2369 36.7212 27.117 35.771 27.7243C35.024 28.2636 34.2434 28.7582 33.4334 29.2053C34.1268 27.0036 34.4428 24.7078 34.3689 22.4082C34.3839 22.4027 34.3989 22.4082 34.4139 22.3982C34.8447 22.2182 35.3192 22.1579 35.7837 22.2242C36.2482 22.2905 36.6841 22.4808 37.0421 22.7733C37.4001 23.0659 37.6658 23.4491 37.8092 23.8796C37.9525 24.3101 37.9678 24.7707 37.8533 25.2091H37.8498Z" fill="currentcolor"/>
    <path d="M9.43243 8.16274C9.85735 8.48322 10.2069 8.88673 10.4582 9.34669C10.7094 9.80666 10.8565 10.3126 10.89 10.8313C10.7939 11.9569 10.2754 13.0103 9.43128 13.7946C9.32937 13.883 9.24664 13.9899 9.18786 14.1092C9.12907 14.2286 9.0954 14.3579 9.08878 14.4898C9.08216 14.6217 9.10275 14.7536 9.14931 14.8778C9.19588 15.002 9.26753 15.1161 9.36012 15.2136C9.45271 15.311 9.56442 15.3898 9.6888 15.4455C9.81319 15.5012 9.9478 15.5326 10.0849 15.538C10.2219 15.5433 10.3587 15.5225 10.4874 15.4767C10.6161 15.4309 10.734 15.3611 10.8345 15.2712C12.1048 14.1093 12.8679 12.5254 12.9688 10.8413C12.9432 10.042 12.7392 9.25727 12.3708 8.5405C12.0023 7.82373 11.478 7.19166 10.8334 6.68722C10.4067 6.38353 10.055 5.99283 9.80341 5.54303C9.55184 5.09323 9.40662 4.59547 9.37815 4.08534C9.51392 3.18283 10.0073 2.36595 10.7548 1.80591C10.9718 1.64618 11.1147 1.41065 11.1528 1.15024C11.1908 0.889843 11.1208 0.625512 10.958 0.414392C10.7951 0.203272 10.5525 0.062327 10.2826 0.0220596C10.0127 -0.0182078 9.73715 0.0454338 9.51559 0.199206C8.90219 0.651996 8.39004 1.21933 8.0098 1.86721C7.62956 2.5151 7.38907 3.2302 7.30273 3.9697C7.30292 4.77855 7.49485 5.5767 7.86392 6.30333C8.23298 7.02996 8.76944 7.66592 9.43243 8.16274Z" fill="currentcolor"/>
    <path d="M23.0984 8.16274C23.5234 8.48322 23.8729 8.88673 24.1242 9.34669C24.3754 9.80666 24.5225 10.3126 24.556 10.8313C24.4599 11.9569 23.9414 13.0103 23.0973 13.7946C22.9954 13.883 22.9126 13.9899 22.8539 14.1092C22.7951 14.2286 22.7614 14.3579 22.7548 14.4898C22.7482 14.6217 22.7687 14.7536 22.8153 14.8778C22.8619 15.002 22.9335 15.1161 23.0261 15.2136C23.1187 15.311 23.2304 15.3898 23.3548 15.4455C23.4792 15.5012 23.6138 15.5326 23.7509 15.538C23.8879 15.5433 24.0247 15.5225 24.1534 15.4767C24.2821 15.4309 24.4 15.3611 24.5005 15.2712C25.7708 14.1093 26.5339 12.5254 26.6348 10.8413C26.6092 10.042 26.4052 9.25727 26.0368 8.5405C25.6683 7.82373 25.144 7.19166 24.4994 6.68722C24.0727 6.38353 23.721 5.99283 23.4694 5.54303C23.2178 5.09323 23.0726 4.59547 23.0442 4.08534C23.1799 3.18283 23.6733 2.36595 24.4208 1.80591C24.6378 1.64618 24.7807 1.41065 24.8188 1.15024C24.8568 0.889843 24.7868 0.625512 24.624 0.414392C24.4611 0.203272 24.2185 0.062327 23.9486 0.0220596C23.6787 -0.0182078 23.4032 0.0454338 23.1816 0.199206C22.5682 0.651996 22.0561 1.21933 21.6758 1.86721C21.2956 2.5151 21.0551 3.2302 20.9688 3.9697C20.9689 4.77855 21.1609 5.5767 21.5299 6.30333C21.899 7.02996 22.4355 7.66592 23.0984 8.16274Z" fill="currentcolor"/>
    <path d="M16.2645 8.16274C16.6894 8.48322 17.039 8.88673 17.2902 9.34669C17.5414 9.80666 17.6886 10.3126 17.722 10.8313C17.626 11.9569 17.1074 13.0103 16.2633 13.7946C16.1614 13.883 16.0787 13.9899 16.0199 14.1092C15.9611 14.2286 15.9274 14.3579 15.9208 14.4898C15.9142 14.6217 15.9348 14.7536 15.9813 14.8778C16.0279 15.002 16.0996 15.1161 16.1922 15.2136C16.2847 15.311 16.3964 15.3898 16.5208 15.4455C16.6452 15.5012 16.7798 15.5326 16.9169 15.538C17.054 15.5433 17.1908 15.5225 17.3194 15.4767C17.4481 15.4309 17.5661 15.3611 17.6666 15.2712C18.9368 14.1093 19.6999 12.5254 19.8009 10.8413C19.7752 10.042 19.5713 9.25727 19.2028 8.5405C18.8343 7.82373 18.31 7.19166 17.6654 6.68722C17.2387 6.38353 16.887 5.99283 16.6354 5.54303C16.3839 5.09323 16.2386 4.59547 16.2102 4.08534C16.346 3.18283 16.8393 2.36595 17.5869 1.80591C17.8038 1.64618 17.9468 1.41065 17.9848 1.15024C18.0228 0.889843 17.9528 0.625512 17.79 0.414392C17.6271 0.203272 17.3845 0.062327 17.1146 0.0220596C16.8447 -0.0182078 16.5692 0.0454338 16.3476 0.199206C15.7342 0.651996 15.2221 1.21933 14.8418 1.86721C14.4616 2.5151 14.2211 3.2302 14.1348 3.9697C14.1349 4.77855 14.3269 5.5767 14.6959 6.30333C15.065 7.02996 15.6015 7.66592 16.2645 8.16274Z" fill="currentcolor"/>
    <path d="M7.16328 29.7138C5.86597 27.7051 5.17938 25.3866 5.18141 23.0212C5.18141 22.7558 5.07191 22.5013 4.87697 22.3136C4.68204 22.1259 4.41765 22.0205 4.14198 22.0205C3.8663 22.0205 3.60191 22.1259 3.40698 22.3136C3.21204 22.5013 3.10254 22.7558 3.10254 23.0212C3.10081 25.7653 3.89738 28.4551 5.40201 30.7857C5.55001 31.0072 5.78275 31.1637 6.04976 31.2211C6.31677 31.2784 6.59652 31.2322 6.82832 31.0923C7.06012 30.9524 7.22529 30.7301 7.288 30.4737C7.35071 30.2174 7.30588 29.9475 7.16328 29.7227V29.7138Z" fill="currentcolor"/>
    <path d="M9.06498 32.7103C8.94112 32.6482 8.84235 32.548 8.78434 32.4257C8.73082 32.3026 8.65227 32.1911 8.55334 32.0977C8.45441 32.0043 8.33708 31.9309 8.20825 31.8818C8.07942 31.8327 7.9417 31.8089 7.80317 31.8118C7.66464 31.8146 7.5281 31.8441 7.40159 31.8986C7.27508 31.953 7.16115 32.0312 7.06649 32.1286C6.97184 32.226 6.89837 32.3407 6.8504 32.4658C6.80244 32.591 6.78094 32.7241 6.78719 32.8574C6.79344 32.9906 6.8273 33.1213 6.88678 33.2418C7.13536 33.7758 7.56332 34.2136 8.10177 34.4849C8.34682 34.6079 8.63256 34.6321 8.89616 34.5523C9.15975 34.4724 9.37959 34.295 9.50732 34.0591C9.63505 33.8232 9.6602 33.5481 9.57725 33.2943C9.49429 33.0405 9.31003 32.8289 9.06498 32.7059V32.7103Z" fill="currentcolor"/>
    </g>
    <defs>
    <clipPath id="clip0_605_8664">
    <rect width="40" height="40" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `,
  drinks: `<svg width="28" height="39" viewBox="0 0 28 39" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_598_8203)">
    <path d="M0 0L0.662157 8.11078C0.662157 8.12619 0.653028 8.1394 0.653028 8.15481C0.658117 8.18851 0.664982 8.22193 0.673584 8.25496L3.1852 39H25.1048L28.0034 0H0ZM25.7932 1.98093L25.4085 7.16985C25.3982 7.16985 25.3902 7.16985 25.3799 7.16985H2.64519L2.22279 1.98642L25.7932 1.98093ZM23.1948 37.0191H5.08147L2.80846 9.14527H25.2612L23.1948 37.0191Z" fill="currentcolor"/>
    <path d="M6.24983 23.3122C6.28864 23.3122 6.32861 23.3122 6.364 23.3122C6.49825 23.2972 6.6281 23.2567 6.74613 23.1933C6.86415 23.1298 6.96804 23.0445 7.05181 22.9423C7.13559 22.8401 7.19762 22.7229 7.23436 22.5975C7.2711 22.4722 7.28181 22.341 7.26589 22.2117C7.0661 20.5444 6.86517 18.8155 6.66538 17.0855C6.4576 15.2861 6.24869 13.4846 6.03862 11.7502C5.99894 11.4962 5.85848 11.267 5.64686 11.111C5.43525 10.955 5.16904 10.8843 4.90438 10.9138C4.63973 10.9434 4.39731 11.0708 4.22831 11.2694C4.0593 11.4679 3.9769 11.722 3.9985 11.978C4.20628 13.7091 4.41522 15.5084 4.623 17.3056C4.82392 19.0378 5.02485 20.77 5.22578 22.4395C5.25574 22.6807 5.37661 22.9029 5.56542 23.0638C5.75424 23.2247 5.99781 23.3131 6.24983 23.3122Z" fill="currentcolor"/>
    <path d="M6.05485 24.414C5.9204 24.4288 5.79029 24.469 5.67201 24.5323C5.55372 24.5957 5.44958 24.6809 5.36557 24.7832C5.28156 24.8854 5.21933 25.0027 5.18245 25.1282C5.14557 25.2537 5.13477 25.385 5.15067 25.5145L5.31392 26.8857C5.34197 27.1276 5.46141 27.351 5.64945 27.5134C5.83748 27.6758 6.08096 27.7658 6.33341 27.7662C6.37223 27.7662 6.41105 27.7662 6.44759 27.7607C6.5817 27.7462 6.71152 27.7063 6.82966 27.6434C6.9478 27.5806 7.05194 27.4959 7.13612 27.3942C7.22029 27.2925 7.28287 27.1758 7.32027 27.0508C7.35766 26.9258 7.36913 26.7949 7.35404 26.6656L7.1908 25.2889C7.15839 25.0286 7.02114 24.791 6.80864 24.6273C6.59614 24.4636 6.32541 24.387 6.05485 24.414Z" fill="currentcolor"/>
    </g>
    <defs>
    <clipPath id="clip0_598_8203">
    <rect width="28" height="39" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `,
  snacks: `<svg width="44" height="30" viewBox="0 0 44 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M39.9739 12.3839H39.9673C39.8416 11.3068 39.529 10.2613 39.0441 9.29623C38.2937 7.89066 37.2396 6.67826 35.9616 5.75118C34.6837 4.82411 33.2156 4.20677 31.669 3.94605C31.658 3.94605 31.6471 3.94605 31.635 3.94605C29.7116 1.41671 26.4577 0.0219894 22.162 0.00292969C17.7851 0.0287164 14.3819 1.44362 12.4015 3.94605C12.3773 3.94605 12.3553 3.94605 12.3312 3.94605C10.7845 4.20721 9.31631 4.82484 8.03823 5.75207C6.76016 6.6793 5.70574 7.89174 4.95505 9.29734C4.47112 10.2623 4.15888 11.3074 4.03289 12.3839H4.02631C2.34137 14.0479 1.12087 16.1402 0.490328 18.4457C-0.140217 20.7512 -0.15805 23.1866 0.438675 25.5015C1.16762 28.1328 2.30494 29.6228 3.81991 29.9323C4.02143 29.975 4.22667 29.9968 4.43249 29.9973C5.03503 29.925 5.61546 29.722 6.13483 29.4017C6.6542 29.0815 7.1005 28.6516 7.44377 28.1407C8.13563 27.3077 8.96125 26.601 9.88529 26.0508C10.6588 25.658 11.4715 25.3513 12.3092 25.136C12.7407 25.007 13.2105 24.8624 13.7122 24.6875C14.2182 24.7717 14.7299 24.8148 15.2426 24.8164C16.5191 24.8132 17.7827 24.5561 18.963 24.0597C19.2243 24.1678 19.4915 24.2603 19.7633 24.3366C20.4624 24.5255 21.1737 24.6634 21.892 24.7492C21.9649 24.7584 22.0386 24.7584 22.1115 24.7492C22.8298 24.6634 23.5411 24.5255 24.2402 24.3366C24.5121 24.2602 24.7794 24.1674 25.0405 24.0585C26.6985 24.7663 28.5179 24.9843 30.2913 24.6875C30.7941 24.8568 31.2639 25.0014 31.6954 25.136C32.5326 25.3518 33.3449 25.6585 34.1182 26.0508C35.0422 26.6006 35.8675 27.3074 36.5586 28.1407C36.9021 28.6516 37.3486 29.0816 37.8682 29.4018C38.3877 29.722 38.9683 29.925 39.571 29.9973C39.7765 29.9968 39.9813 29.975 40.1825 29.9323C41.6986 29.6228 42.8359 28.1317 43.5648 25.5015C44.1604 23.1863 44.1418 20.7509 43.5107 18.4455C42.8796 16.1401 41.6588 14.0479 39.9739 12.3839ZM8.94886 24.276C7.83296 24.927 6.83512 25.7694 5.99906 26.7661C5.09447 27.7561 4.76074 28.07 4.20854 27.9568C3.49936 27.8111 2.83628 26.7459 2.34227 24.9543C1.92223 23.3112 1.86627 21.5932 2.17848 19.9252C2.4907 18.2572 3.16322 16.6814 4.14706 15.3124C4.29059 16.0686 4.52165 16.8048 4.83539 17.5054C6.01506 20.1182 8.00316 22.2624 10.4935 23.6078C9.96108 23.7857 9.44437 24.0092 8.94886 24.276ZM14.1514 22.7266C13.9962 22.6555 13.8256 22.6265 13.6562 22.6425C12.1235 22.2411 10.6976 21.4958 9.48221 20.461C8.26685 19.4261 7.2926 18.1277 6.63029 16.66C6.16216 15.6502 5.92631 14.5445 5.94077 13.4274C5.95523 12.3102 6.21962 11.2112 6.71373 10.2145C7.64306 8.45293 9.17618 7.10357 11.0193 6.42493C9.99726 9.36013 10.6472 13.6553 12.7165 17.6365C13.6785 19.5654 15.0132 21.2752 16.6401 22.6627C15.8195 22.8232 14.9787 22.8448 14.1514 22.7266ZM23.7451 22.3903C23.1716 22.5448 22.5889 22.6613 22.0007 22.7389C21.4117 22.6614 20.8283 22.5449 20.254 22.3903C18.2033 21.8521 16.0374 19.7219 14.462 16.6925C12.6704 13.2438 12.0469 9.47672 12.8834 7.09538C14.473 2.55356 19.9093 2.03223 22.1653 2.01765C25.4445 2.03783 29.66 2.93475 31.1157 7.09538C31.9501 9.4756 31.3353 13.2427 29.5393 16.6903C27.9628 19.7197 25.798 21.851 23.7451 22.3891V22.3903ZM27.3579 22.6649C28.9873 21.2782 30.3233 19.5673 31.2848 17.6365C33.353 13.6542 34.0019 9.36013 32.9798 6.42493C34.8231 7.1032 36.3564 8.45266 37.2854 10.2145C37.7798 11.2111 38.0446 12.31 38.0594 13.4271C38.0743 14.5442 37.8388 15.6501 37.371 16.66C36.7089 18.1267 35.7356 19.4246 34.5215 20.4595C33.3074 21.4945 31.883 22.2405 30.3517 22.6436C30.1773 22.6248 30.0013 22.6546 29.8423 22.73C29.0162 22.8474 28.1769 22.825 27.3579 22.6638V22.6649ZM41.6601 24.9555C41.165 26.7493 40.5009 27.8122 39.7939 27.9579C39.2516 28.07 38.9156 27.7595 38.0033 26.7673C37.1671 25.7707 36.1693 24.9284 35.0536 24.2772C34.5589 24.0089 34.0429 23.7839 33.5111 23.6045C36.0014 22.2591 37.9895 20.1148 39.1692 17.502C39.4825 16.8016 39.7135 16.0659 39.8575 15.3101C40.8408 16.6799 41.5127 18.2562 41.8245 19.9245C42.1364 21.5927 42.0802 23.311 41.6601 24.9543V24.9555Z" fill="currentColor"/>
    <path d="M17.3428 15.7782C16.1626 13.048 15.7674 10.0313 16.2032 7.08028C16.2231 6.94931 16.2174 6.81565 16.1867 6.68691C16.1559 6.55816 16.1006 6.43686 16.024 6.32994C15.9473 6.22302 15.8508 6.13257 15.7399 6.06375C15.629 5.99493 15.5059 5.94908 15.3777 5.92884C15.2495 5.90859 15.1186 5.91434 14.9925 5.94576C14.8665 5.97717 14.7477 6.03365 14.643 6.11194C14.5383 6.19023 14.4497 6.2888 14.3824 6.40205C14.315 6.5153 14.2701 6.641 14.2503 6.77197C13.7579 10.1061 14.2045 13.5144 15.538 16.5989C15.5889 16.7227 15.6636 16.8349 15.7575 16.9289C15.8515 17.0229 15.9628 17.0967 16.0851 17.1462C16.2074 17.1956 16.3381 17.2197 16.4695 17.2168C16.601 17.214 16.7306 17.1844 16.8507 17.1298C16.9709 17.0752 17.0791 16.9966 17.1691 16.8987C17.2591 16.8008 17.3291 16.6855 17.3749 16.5597C17.4208 16.4338 17.4415 16.2998 17.436 16.1656C17.4305 16.0315 17.3988 15.8997 17.3428 15.7782Z" fill="currentColor"/>
    <path d="M19.696 19.2067C19.2865 18.9533 18.9569 18.5852 18.7464 18.146C18.6921 18.023 18.6143 17.9124 18.5174 17.8206C18.4206 17.7288 18.3067 17.6578 18.1825 17.6118C18.0583 17.5658 17.9263 17.5456 17.7944 17.5526C17.6625 17.5596 17.5333 17.5935 17.4144 17.6524C17.2955 17.7112 17.1894 17.7939 17.1023 17.8953C17.0153 17.9968 16.949 18.1151 16.9075 18.2432C16.866 18.3712 16.85 18.5065 16.8606 18.641C16.8712 18.7755 16.908 18.9065 16.969 19.0262C17.3477 19.8156 17.9407 20.4772 18.6772 20.9321C18.7884 21.0004 18.9117 21.0457 19.0401 21.0654C19.1684 21.085 19.2993 21.0786 19.4253 21.0466C19.5512 21.0146 19.6698 20.9576 19.7741 20.8788C19.8785 20.8 19.9666 20.701 20.0335 20.5874C20.1004 20.4738 20.1448 20.3478 20.164 20.2168C20.1832 20.0857 20.177 19.952 20.1456 19.8234C20.1143 19.6947 20.0585 19.5737 19.9813 19.4671C19.9041 19.3605 19.8072 19.2705 19.696 19.2022V19.2067Z" fill="currentColor"/>
    </svg>
    `,
  meals: `<svg width="44" height="47" viewBox="0 0 44 47" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_598_8219)">
    <path d="M42.941 2.11595C42.7415 1.9851 42.4981 1.93888 42.2644 1.98745C42.0307 2.03602 41.8259 2.1754 41.695 2.37496L34.006 14.102C33.3796 13.6496 32.7178 13.2483 32.027 12.902C32.0551 12.8557 32.0786 12.8068 32.097 12.756L35.4431 1.14795C35.5094 0.91841 35.4818 0.671927 35.3663 0.46273C35.2509 0.253533 35.0571 0.098759 34.8275 0.0324549C34.598 -0.0338492 34.3515 -0.0062506 34.1423 0.109178C33.9331 0.224607 33.7783 0.41841 33.712 0.647954L30.382 12.202C28.8498 11.6558 27.2357 11.3751 25.609 11.372C23.5868 11.3208 21.5789 11.7248 19.7337 12.5541C17.8886 13.3834 16.2534 14.6167 14.949 16.163C13.472 15.5617 11.8698 15.3326 10.2834 15.4959C8.69704 15.6593 7.17511 16.21 5.85156 17.0996C4.528 17.9893 3.44339 19.1906 2.69314 20.5978C1.94289 22.0051 1.54999 23.5752 1.54904 25.17H0.900049C0.781014 25.1699 0.663159 25.1936 0.553309 25.2394C0.443459 25.2853 0.343801 25.3524 0.260096 25.4371C0.176391 25.5217 0.110305 25.6221 0.0656684 25.7325C0.0210317 25.8428 -0.00126705 25.9609 5.5571e-05 26.08C0.0892682 29.5951 1.16582 33.0142 3.10662 35.9464C5.04743 38.8786 7.77413 41.2054 10.975 42.661V45.147C10.975 45.3856 11.0699 45.6146 11.2386 45.7834C11.4074 45.9521 11.6364 46.047 11.8751 46.047H29.692C29.9307 46.047 30.1596 45.9521 30.3284 45.7834C30.4972 45.6146 30.592 45.3856 30.592 45.147V42.665C33.7927 41.2092 36.5191 38.8822 38.4597 35.9501C40.4004 33.018 41.4768 29.599 41.566 26.084C41.5674 25.9649 41.5451 25.8468 41.5004 25.7365C41.4558 25.6261 41.3897 25.5257 41.306 25.4411C41.2223 25.3565 41.1226 25.2893 41.0128 25.2434C40.9029 25.1976 40.7851 25.1739 40.666 25.174H39.976C39.82 21.3924 38.1759 17.8258 35.402 15.251L43.197 3.36196C43.3282 3.16274 43.3749 2.91961 43.3269 2.68598C43.2789 2.45235 43.1401 2.24733 42.941 2.11595ZM11.292 17.249C13.3949 17.2513 15.4113 18.0864 16.9 19.5716C18.3887 21.0568 19.2286 23.0711 19.236 25.174H18.476C18.4537 23.2835 17.6871 21.4779 16.3423 20.149C14.9976 18.82 13.1832 18.0747 11.2925 18.0747C9.4019 18.0747 7.58747 18.82 6.24273 20.149C4.89799 21.4779 4.13134 23.2835 4.10903 25.174H3.34905C3.35619 23.0712 4.1959 21.0569 5.68447 19.5717C7.17304 18.0865 9.18928 17.2513 11.292 17.249ZM30.46 25.174C30.3295 24.0738 29.829 23.0506 29.0406 22.2723C28.2521 21.494 27.2226 21.0067 26.1208 20.8904C25.019 20.7742 23.9104 21.0358 22.9769 21.6324C22.0433 22.2291 21.3403 23.1252 20.983 24.174C20.8976 23.3879 20.7156 22.6154 20.441 21.874C21.2275 20.8287 22.312 20.0461 23.5519 19.6292C24.7917 19.2124 26.1287 19.1807 27.3869 19.5384C28.6451 19.8962 29.7655 20.6265 30.6005 21.6334C31.4356 22.6402 31.9461 23.8763 32.065 25.179L30.46 25.174ZM28.66 25.174H22.555C22.6942 24.4666 23.0746 23.8296 23.6314 23.3717C24.1882 22.9138 24.8867 22.6634 25.6075 22.6634C26.3284 22.6634 27.0269 22.9138 27.5837 23.3717C28.1404 23.8296 28.5209 24.4666 28.66 25.174ZM33.8661 25.174C33.7524 23.5697 33.1734 22.0335 32.1999 20.7533C31.2265 19.4731 29.9008 18.5046 28.3853 17.9663C26.8698 17.428 25.2303 17.3434 23.6674 17.7227C22.1045 18.102 20.6862 18.9288 19.5861 20.102C19.3425 19.7013 19.0704 19.3187 18.772 18.957C19.6483 18.0285 20.7095 17.2942 21.8871 16.8014C23.0648 16.3086 24.3327 16.0683 25.609 16.096C28.0701 16.1 30.4374 17.0409 32.2298 18.7275C34.0222 20.414 35.1053 22.7196 35.259 25.176L33.8661 25.174ZM15.376 25.174C15.376 24.0911 14.9459 23.0525 14.1802 22.2868C13.4145 21.5211 12.3759 21.091 11.2931 21.091C10.2102 21.091 9.17165 21.5211 8.40594 22.2868C7.64023 23.0525 7.21005 24.0911 7.21005 25.174H5.91003C5.92931 23.7594 6.5048 22.4093 7.51193 21.4158C8.51906 20.4223 9.87684 19.8653 11.2915 19.8653C12.7062 19.8653 14.064 20.4223 15.0712 21.4158C16.0783 22.4093 16.6537 23.7594 16.673 25.174H15.376ZM13.576 25.174H9.01205C9.02455 24.5769 9.27051 24.0085 9.6972 23.5906C10.1239 23.1728 10.6973 22.9387 11.2945 22.9387C11.8918 22.9387 12.4652 23.1728 12.8919 23.5906C13.3186 24.0085 13.5646 24.5769 13.5771 25.174H13.576ZM12.7761 44.251V43.132H28.792V44.251H12.7761ZM29.136 41.332H12.436C9.52258 40.1406 6.99281 38.1712 5.12332 35.6389C3.25383 33.1066 2.11663 30.109 1.83605 26.974H39.7281C39.4482 30.1081 38.3122 33.1051 36.4441 35.6373C34.5761 38.1695 32.048 40.1395 29.136 41.332ZM38.178 25.174H37.0601C36.9048 22.2401 35.6312 19.4773 33.5013 17.4538C31.3713 15.4303 28.547 14.2998 25.609 14.295C24.0957 14.2643 22.5927 14.55 21.1962 15.1338C19.7996 15.7176 18.5404 16.5865 17.499 17.685C17.2087 17.4481 16.9052 17.2277 16.5901 17.025C17.7218 15.7645 19.1155 14.7668 20.6734 14.1017C22.2314 13.4367 23.9159 13.1204 25.609 13.175C28.8438 13.1792 31.9531 14.4275 34.2929 16.6611C36.6327 18.8948 38.0237 21.9428 38.178 25.174Z" fill="currentColor"/>
    <path d="M3.39209 30.1722C4.045 32.6025 5.31628 34.8222 7.08209 36.6152C7.16443 36.7021 7.26327 36.7717 7.37286 36.8199C7.48244 36.8682 7.60056 36.8941 7.72027 36.8961C7.83999 36.8981 7.95888 36.8762 8.07003 36.8317C8.18118 36.7872 8.28235 36.7209 8.36758 36.6368C8.45281 36.5528 8.52038 36.4525 8.56637 36.342C8.61237 36.2314 8.63585 36.1128 8.63543 35.9931C8.63501 35.8733 8.6107 35.7549 8.56393 35.6447C8.51716 35.5344 8.44888 35.4347 8.36306 35.3512C6.81633 33.7796 5.70257 31.8346 5.13006 29.7052C5.1013 29.589 5.04966 29.4797 4.97815 29.3837C4.90663 29.2878 4.81669 29.207 4.71359 29.1462C4.61049 29.0854 4.49631 29.0458 4.37771 29.0297C4.25912 29.0136 4.1385 29.0213 4.02291 29.0523C3.90733 29.0834 3.7991 29.1372 3.70456 29.2106C3.61001 29.284 3.53106 29.3755 3.47232 29.4798C3.41357 29.584 3.3762 29.699 3.36242 29.8179C3.34865 29.9368 3.35875 30.0572 3.39209 30.1722Z" fill="#323232"/>
    <path d="M10.5356 39.5502C10.7282 39.6767 10.962 39.7245 11.1889 39.6838C11.4157 39.643 11.6182 39.5168 11.7547 39.3312C11.8913 39.1456 11.9514 38.9146 11.9227 38.6859C11.8941 38.4573 11.7788 38.2483 11.6006 38.1022L10.3336 37.1752C10.1407 37.0392 9.90209 36.9844 9.66918 37.0226C9.43627 37.0609 9.2277 37.1891 9.08843 37.3797C8.94915 37.5702 8.89031 37.8079 8.92458 38.0414C8.95884 38.2749 9.08345 38.4857 9.27159 38.6282L10.5356 39.5502Z" fill="#323232"/>
    </g>
    <defs>
    <clipPath id="clip0_598_8219">
    <rect width="43.348" height="46.051" fill="white"/>
    </clipPath>
    </defs>
    </svg>`
};
class CateringItemFiltersComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_2__.AsyncHandler {
  get start_of_date() {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.startOfDay)((0,date_fns__WEBPACK_IMPORTED_MODULE_7__.addDays)(this._state.getFilters().date, this.offset_day)).valueOf();
  }
  get min_offset() {
    return this.offset_day > 0 ? 0 : this._min_offset;
  }
  get step_interval() {
    return this._settings.get('app.catering.step_interval') || 5;
  }
  get max_offset() {
    const end = Math.min((0,date_fns__WEBPACK_IMPORTED_MODULE_8__.endOfDay)((0,date_fns__WEBPACK_IMPORTED_MODULE_7__.addDays)(this._state.getFilters().date, this.offset_day)).valueOf(), (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.addMinutes)(this._state.getFilters().date, this._state.getFilters().duration).valueOf());
    const diff = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__.differenceInMinutes)(end, this._state.getFilters().date);
    return Math.min(diff, Math.min(24 * 60 - 1, this._max_offset));
  }
  get use_24hr() {
    return this._settings.get('app.use_24_hour_time');
  }
  constructor(_state, _settings) {
    super();
    this._state = _state;
    this._settings = _settings;
    this.search = false;
    this.at_time = false;
    this.at_timeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.offset = 0;
    this.offsetChange = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.offset_day = 0;
    this.offset_dayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this._min_offset = 0;
    this._max_offset = 60;
    this.icons = ICONS;
    this.filters = this._state.filters;
    this.setFilters = f => this._state.setFilters(f);
    this.categories = this._state.categories;
    this.exact_tooltip = 'Deliver at exactly specified time. \nNote that changes to the booking will not be \nreflected in the order if this is set.';
    this.day_options = [];
  }
  ngOnInit() {
    this._min_offset = Math.max(this._settings.get('app.catering.min_offset'), 0);
    this.subscription('filters', this._state.filters.subscribe(() => {
      this._max_offset = Math.max(15, (this._state.getFilters().duration || 60) - this._settings.get('app.catering.end_offset'));
      this._updateDayOptions();
    }));
    this._updateDayOptions();
  }
  toggleCategory(name) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        categories
      } = yield _this.filters.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).toPromise();
      if (categories.includes(name)) _this.setFilters({
        categories: categories.filter(_ => _ !== name)
      });else _this.setFilters({
        categories: [...categories, name]
      });
    })();
  }
  toggleTag(tag) {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        tags
      } = yield _this2.filters.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).toPromise();
      if (tags.includes(tag)) _this2.setFilters({
        tags: tags.filter(_ => _ !== tag)
      });else _this2.setFilters({
        tags: [...tags, tag]
      });
    })();
  }
  _updateDayOptions() {
    const {
      date,
      duration
    } = this._state.getFilters();
    if (duration <= 24 * 60) return this.day_options = [];
    let day = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.startOfDay)(date);
    let count = 0;
    const end = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.endOfDay)((0,date_fns__WEBPACK_IMPORTED_MODULE_9__.addMinutes)(date, duration)).valueOf();
    const options = [];
    while (day.valueOf() <= end) {
      options.push({
        id: count,
        value: day.valueOf()
      });
      day = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.addDays)(day, 1);
      count++;
    }
    this.day_options = options;
  }
  static #_ = this.ɵfac = function CateringItemFiltersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CateringItemFiltersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_catering_order_state_service__WEBPACK_IMPORTED_MODULE_1__.CateringOrderStateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_2__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: CateringItemFiltersComponent,
    selectors: [["catering-item-filters"]],
    inputs: {
      search: "search",
      at_time: "at_time",
      offset: "offset",
      offset_day: "offset_day"
    },
    outputs: {
      at_timeChange: "at_timeChange",
      offsetChange: "offsetChange",
      offset_dayChange: "offset_dayChange"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
    decls: 12,
    vars: 15,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_637156553417356107$$LIBS_CATERING_SRC_LIB_CATERING_ORDER_MODAL_CATERING_ITEM_FILTERS_COMPONENT_TS_0 = goog.getMsg(" Options ");
        i18n_0 = MSG_EXTERNAL_637156553417356107$$LIBS_CATERING_SRC_LIB_CATERING_ORDER_MODAL_CATERING_ITEM_FILTERS_COMPONENT_TS_0;
      } else {
        i18n_0 = $localize`:␟07b96192315617e1c3c3f020fed4749eafda31eb␟637156553417356107: Options `;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3888583854485349732$$LIBS_CATERING_SRC_LIB_CATERING_ORDER_MODAL_CATERING_ITEM_FILTERS_COMPONENT_TS_1 = goog.getMsg(" Catergories ");
        i18n_1 = MSG_EXTERNAL_3888583854485349732$$LIBS_CATERING_SRC_LIB_CATERING_ORDER_MODAL_CATERING_ITEM_FILTERS_COMPONENT_TS_1;
      } else {
        i18n_1 = $localize`:␟24300e769843b029b0346b3ea18e51e4e97a3502␟3888583854485349732: Catergories `;
      }
      return [i18n_0, i18n_1, [1, "px-4", "mt-3", "mb-2"], ["appearance", "outline", 1, "w-full", "h-14"], ["matPrefix", "", 1, "text-xl"], ["matInput", "", "placeholder", "Search menu...", 3, "ngModelChange", "ngModel"], ["class", "hidden sm:block font-medium px-2 py-2", 4, "ngIf"], ["class", "flex flex-col px-2", 4, "ngIf"], ["class", "hidden sm:block font-medium px-2 py-4", 4, "ngIf"], [1, "flex", "flex-col", "px-2", "space-y-4"], [3, "ngModel", "ngModelChange", 4, "ngFor", "ngForOf"], [1, "hidden", "sm:block", "font-medium", "px-2", "py-2"], [1, "flex", "flex-col", "px-2"], [3, "ngModelChange", "ngModel", "matTooltip"], [4, "ngIf"], [3, "ngModelChange", "ngModel", "time", "step", "min", "max", "use_24hr"], ["appearance", "outline", 1, "w-full", "no-subscript", "mb-4"], [3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "hidden", "sm:block", "font-medium", "px-2", "py-4"]];
    },
    template: function CateringItemFiltersComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "mat-form-field", 3)(2, "app-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CateringItemFiltersComponent_Template_input_ngModelChange_4_listener($event) {
          return ctx.setFilters({
            search: $event
          });
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, CateringItemFiltersComponent_h3_6_Template, 2, 0, "h3", 6)(7, CateringItemFiltersComponent_div_7_Template, 8, 11, "div", 7)(8, CateringItemFiltersComponent_h3_8_Template, 2, 0, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, CateringItemFiltersComponent_mat_checkbox_10_Template, 3, 5, "mat-checkbox", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("sm:hidden", !ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 11, ctx.filters)) == null ? null : tmp_1_0.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("sm:hidden", ctx.search)("sm:pt-1", !ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 13, ctx.categories));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckbox, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatPrefix, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelect, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInput, _form_fields_src_lib_duration_field_component__WEBPACK_IMPORTED_MODULE_4__.DurationFieldComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe],
    styles: ["[_nghost-%COMP%] {\n                min-width: 16rem;\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVyaW5nLWl0ZW0tZmlsdGVycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGdCQUFnQjtZQUNwQiIsImZpbGUiOiJjYXRlcmluZy1pdGVtLWZpbHRlcnMuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvY2F0ZXJpbmcvc3JjL2xpYi9jYXRlcmluZy1vcmRlci1tb2RhbC9jYXRlcmluZy1pdGVtLWZpbHRlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxnQkFBZ0I7WUFDcEI7O0FBRVosNFlBQTRZIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 89505:
/*!*****************************************************************************************!*\
  !*** ./libs/catering/src/lib/catering-order-modal/catering-item-list-item.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CateringItemListItemComponent: () => (/* binding */ CateringItemListItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _catering_item_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../catering-item.class */ 25892);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _components_src_lib_authenticated_image_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/src/lib/authenticated-image.directive */ 93208);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 74646);







function CateringItemListItemComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.item.quantity || "1", " ");
  }
}
function CateringItemListItemComponent_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 18);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("source", ctx_r1.item.images[0]);
  }
}
function CateringItemListItemComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 19);
  }
}
function CateringItemListItemComponent_p_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, ctx_r1.item.unit_price / 100, ctx_r1.code), " ");
  }
}
function CateringItemListItemComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.options, " ");
  }
}
function CateringItemListItemComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " GF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CateringItemListItemComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " VG ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CateringItemListItemComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " V ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CateringItemListItemComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CateringItemListItemComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " N ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class CateringItemListItemComponent {
  constructor() {
    this.active = false;
    this.selected = false;
    this.favourite = false;
    this.code = 'USD';
    this.toggleFav = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  }
  get options() {
    return this.item.option_list?.map(_ => _.name).join(', ');
  }
  static #_ = this.ɵfac = function CateringItemListItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CateringItemListItemComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: CateringItemListItemComponent,
    selectors: [["catering-item-list-item"]],
    inputs: {
      item: "item",
      active: "active",
      selected: "selected",
      favourite: "favourite",
      code: "code"
    },
    outputs: {
      toggleFav: "toggleFav",
      select: "select"
    },
    decls: 24,
    vars: 17,
    consts: [["placeholder", ""], ["item", "", "matRipple", "", 1, "relative", "p-2", "rounded-lg", "w-full", "shadow", "border", "bg-base-100", "border-base-200", "sm:w-[20rem]"], ["name", "select-catering-item", 1, "w-full", "h-full", "flex", "items-center", "z-0", 3, "click"], [1, "relative", "w-16", "h-16", "rounded-xl", "bg-neutral", "mr-4", "overflow-hidden", "border", "border-base-200", "flex", "items-center", "justify-center"], ["class", "absolute top-1 left-1 border border-white bg-neutral rounded-full h-6 w-6 flex items-center justify-center text-white text-xs", 4, "ngIf"], ["auth", "", "class", "object-cover min-h-full min-w-full", 3, "source", 4, "ngIf", "ngIfElse"], [1, "space-y-2", "text-left", "flex-1"], [1, "font-medium", "flex", "flex-col", "pr-10"], [1, "opacity-60", "text-xs"], [1, "flex", "items-center", "text-sm", "space-x-1"], ["class", "flex-1 w-px bg-base-100 rounded", 4, "ngIf"], ["class", "text-xs px-2 py-1 rounded-2xl shadow border border-base-200", 4, "ngIf"], ["class", "text-xs h-5 w-7 rounded-xl shadow bg-success flex items-center justify-center", 4, "ngIf"], ["class", "text-xs h-5 w-7 rounded-xl shadow bg-info flex items-center justify-center", 4, "ngIf"], ["class", "text-xs h-5 w-7 rounded-xl shadow bg-warning flex items-center justify-center", 4, "ngIf"], ["class", "text-xs h-5 w-7 rounded-xl shadow bg-orange-600 flex items-center justify-center", 4, "ngIf"], ["icon", "", "matRipple", "", "name", "toggle-catering-item-favourite", 1, "absolute", "top-1", "right-1", 3, "click"], [1, "absolute", "top-1", "left-1", "border", "border-white", "bg-neutral", "rounded-full", "h-6", "w-6", "flex", "items-center", "justify-center", "text-white", "text-xs"], ["auth", "", 1, "object-cover", "min-h-full", "min-w-full", 3, "source"], ["src", "assets/icons/catering-placeholder.svg", 1, "m-auto"], [1, "flex-1", "w-px", "bg-base-100", "rounded"], [1, "text-xs", "px-2", "py-1", "rounded-2xl", "shadow", "border", "border-base-200"], [1, "text-xs", "h-5", "w-7", "rounded-xl", "shadow", "bg-success", "flex", "items-center", "justify-center"], [1, "text-xs", "h-5", "w-7", "rounded-xl", "shadow", "bg-info", "flex", "items-center", "justify-center"], [1, "text-xs", "h-5", "w-7", "rounded-xl", "shadow", "bg-warning", "flex", "items-center", "justify-center"], [1, "text-xs", "h-5", "w-7", "rounded-xl", "shadow", "bg-orange-600", "flex", "items-center", "justify-center"]],
    template: function CateringItemListItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 1)(1, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CateringItemListItemComponent_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.select.emit());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CateringItemListItemComponent_div_3_Template, 2, 1, "div", 4)(4, CateringItemListItemComponent_img_4_Template, 1, 1, "img", 5)(5, CateringItemListItemComponent_ng_template_5_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, CateringItemListItemComponent_p_14_Template, 3, 4, "p", 10)(15, CateringItemListItemComponent_div_15_Template, 2, 1, "div", 11)(16, CateringItemListItemComponent_div_16_Template, 2, 0, "div", 12)(17, CateringItemListItemComponent_div_17_Template, 2, 0, "div", 13)(18, CateringItemListItemComponent_div_18_Template, 2, 0, "div", 13)(19, CateringItemListItemComponent_div_19_Template, 2, 0, "div", 14)(20, CateringItemListItemComponent_div_20_Template, 2, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CateringItemListItemComponent_Template_button_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.toggleFav.emit());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const placeholder_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("!border-base-200", ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.item.quantity && ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.item.images == null ? null : ctx.item.images.length)("ngIfElse", placeholder_r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.item.name || "Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.item.category, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.item.unit_price);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.item.option_list == null ? null : ctx.item.option_list.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.item.tags == null ? null : ctx.item.tags.includes("Gluten Free"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.item.tags == null ? null : ctx.item.tags.includes("Vegan"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.item.tags == null ? null : ctx.item.tags.includes("Vegetarian"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.item.tags == null ? null : ctx.item.tags.includes("Contains Dairy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.item.tags == null ? null : ctx.item.tags.includes("Contains Nuts"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("text-blue-400", ctx.favourite);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.favourite ? "favorite" : "favorite_border");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent, _components_src_lib_authenticated_image_directive__WEBPACK_IMPORTED_MODULE_2__.AuthenticatedImageDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe]
  });
}

/***/ }),

/***/ 32499:
/*!************************************************************************************!*\
  !*** ./libs/catering/src/lib/catering-order-modal/catering-item-list.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CateringItemListComponent: () => (/* binding */ CateringItemListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var _catering_order_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catering-order-state.service */ 20097);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _catering_item_list_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catering-item-list-item.component */ 89505);








function CateringItemListComponent_ng_container_1_catering_item_list_item_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "catering-item-list-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("toggleFav", function CateringItemListComponent_ng_container_1_catering_item_list_item_7_Template_catering_item_list_item_toggleFav_0_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.toggleFav.emit(item_r2.id));
    })("select", function CateringItemListComponent_ng_container_1_catering_item_list_item_7_Template_catering_item_list_item_select_0_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.selectItem(item_r2, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", item_r2)("active", ctx_r2.active === item_r2.custom_id)("selected", true)("favourite", ctx_r2.isFavourite(item_r2.id));
  }
}
function CateringItemListComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Ordered Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CateringItemListComponent_ng_container_1_catering_item_list_item_7_Template, 1, 4, "catering-item-list-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 2, ctx_r2.list)) == null ? null : tmp_3_0.length) || 0, " items(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 4, ctx_r2.list));
  }
}
function CateringItemListComponent_ng_container_8_ul_1_catering_item_list_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "catering-item-list-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("toggleFav", function CateringItemListComponent_ng_container_8_ul_1_catering_item_list_item_1_Template_catering_item_list_item_toggleFav_0_listener() {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.toggleFav(item_r5.id));
    })("select", function CateringItemListComponent_ng_container_8_ul_1_catering_item_list_item_1_Template_catering_item_list_item_select_0_listener() {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.selectItem(item_r5, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", item_r5)("active", ctx_r2.active === item_r5.custom_id)("selected", ctx_r2.selected.includes(item_r5.custom_id))("favourite", ctx_r2.isFavourite(item_r5.id))("code", ctx_r2.code);
  }
}
function CateringItemListComponent_ng_container_8_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CateringItemListComponent_ng_container_8_ul_1_catering_item_list_item_1_Template, 1, 5, "catering-item-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r2.item_list));
  }
}
function CateringItemListComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CateringItemListComponent_ng_container_8_ul_1_Template, 3, 3, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const empty_state_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, ctx_r2.item_list)) == null ? null : tmp_3_0.length)("ngIfElse", empty_state_r6);
  }
}
function CateringItemListComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13)(1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " No available items for selected time and/or filters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function CateringItemListComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-spinner", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Finding available items...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("diameter", 32);
  }
}
class CateringItemListComponent {
  get code() {
    return this._state.currency_code;
  }
  constructor(_state) {
    this._state = _state;
    this.active = '';
    this.selected = '';
    this.selected_items = [];
    this.favorites = [];
    this.toggleFav = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.list = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    this.loading = this._state.loading;
    this.item_list = this._state.filtered_menu;
  }
  ngOnChanges(changes) {
    if (changes.selected_items) {
      this.list.next(this.selected_items || []);
    }
  }
  isFavourite(item_id) {
    return this.favorites?.includes(item_id);
  }
  selectItem(item, clear_state = false) {
    this.onSelect.emit(item);
    if (clear_state) {
      item.options?.forEach(_ => delete _.active);
    }
  }
  static #_ = this.ɵfac = function CateringItemListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CateringItemListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_catering_order_state_service__WEBPACK_IMPORTED_MODULE_0__.CateringOrderStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: CateringItemListComponent,
    selectors: [["catering-item-list"]],
    inputs: {
      active: "active",
      selected: "selected",
      selected_items: "selected_items",
      favorites: "favorites"
    },
    outputs: {
      toggleFav: "toggleFav",
      onSelect: "onSelect"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
    decls: 14,
    vars: 10,
    consts: [["empty_state", ""], ["load_state", ""], [1, "w-full", "h-full", "overflow-auto", "py-2"], [4, "ngIf"], [1, "font-bold", "px-2"], ["count", "", 1, "text-sm", "opacity-60", "mb-2", "px-2"], [4, "ngIf", "ngIfElse"], [1, "list-style-none", "space-y-2", "p-2"], ["class", "block", 3, "item", "active", "selected", "favourite", "toggleFav", "select", 4, "ngFor", "ngForOf"], [1, "block", 3, "toggleFav", "select", "item", "active", "selected", "favourite"], ["class", "list-style-none space-y-2 p-2", 4, "ngIf", "ngIfElse"], ["class", "block", 3, "item", "active", "selected", "favourite", "code", "toggleFav", "select", 4, "ngFor", "ngForOf"], [1, "block", 3, "toggleFav", "select", "item", "active", "selected", "favourite", "code"], ["empty", "", 1, "p-16", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "opacity-30", "text-center"], ["loading", "", 1, "p-16", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [3, "diameter"], [1, "opacity-30"]],
    template: function CateringItemListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CateringItemListComponent_ng_container_1_Template, 9, 6, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Results");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CateringItemListComponent_ng_container_8_Template, 3, 4, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CateringItemListComponent_ng_template_10_Template, 3, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"])(12, CateringItemListComponent_ng_template_12_Template, 4, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_3_0;
        const load_state_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 4, ctx.list)) == null ? null : tmp_2_0.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 6, ctx.item_list)) == null ? null : tmp_3_0.length) || 0, " result(s) found ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 8, ctx.loading))("ngIfElse", load_state_r7);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__.MatProgressSpinner, _catering_item_list_item_component__WEBPACK_IMPORTED_MODULE_1__.CateringItemListItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe]
  });
}

/***/ }),

/***/ 20097:
/*!************************************************************************************!*\
  !*** ./libs/catering/src/lib/catering-order-modal/catering-order-state.service.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CateringOrderStateService: () => (/* binding */ CateringOrderStateService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 71536);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 29314);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var _catering_item_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../catering-item.class */ 25892);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities */ 60285);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37580);











class CateringOrderStateService {
  get currency_code() {
    return this._org.currency_code;
  }
  constructor(_org, _settings) {
    this._org = _org;
    this._settings = _settings;
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject({});
    this._filters = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject({
      search: '',
      tags: [],
      categories: []
    });
    this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject('');
    this.loading = this._loading.asObservable();
    this.filters = this._filters.asObservable();
    this.settings = this._org.active_building.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(_ => !!_), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(_ => (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.showMetadata)(_.id, 'catering-settings').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(_ => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)({})))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(_ => _.details), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(_ => this._settings.post('require_catering_notes', !!_?.require_notes)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.shareReplay)(1));
    this.charge_codes = this.settings.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(_ => _.charge_codes || []));
    this.availability = this.settings.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(_ => _.disabled_rooms || []));
    this.available_menu = (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([this._options, this._org.active_building]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(([_, bld]) => !!bld), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(([{
      zone
    }, bld]) => {
      this._loading.next('[Menu]');
      return (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.showMetadata)(zone || bld.id, 'catering').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(d => (d.details instanceof Array ? d.details : []).map(_ => new _catering_item_class__WEBPACK_IMPORTED_MODULE_4__.CateringItem(_))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(_ => []));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(_ => this._loading.next('')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.shareReplay)(1));
    this.categories = this.available_menu.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(_ => (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.unique)(_.map(i => i.category))));
    this.filtered_menu = (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([this._filters, this.available_menu]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)( /*#__PURE__*/function () {
      var _ref = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ([{
        search,
        tags,
        categories,
        zone_id,
        date,
        duration,
        resources
      }, l]) {
        const rules = yield (0,_utilities__WEBPACK_IMPORTED_MODULE_5__.getCateringRulesForZone)(zone_id).toPromise();
        search = search.toLowerCase();
        let list = search ? l.filter(_ => _.name.toLowerCase().includes(search)) : l;
        list = tags.length ? list.filter(_ => tags.every(t => _.tags.includes(t))) : list;
        list = categories.length ? list.filter(_ => categories.includes(_.category)) : list;
        list = list.filter(_ => (0,_utilities__WEBPACK_IMPORTED_MODULE_5__.cateringItemAvailable)(_, rules, {
          date,
          duration,
          resources
        }));
        return list;
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.shareReplay)(1));
  }
  setOptions(opts) {
    this._options.next({
      ...this._options.getValue(),
      ...opts
    });
  }
  setFilters(opts) {
    this._filters.next({
      ...this._filters.getValue(),
      ...opts
    });
  }
  getFilters() {
    return {
      ...this._filters.getValue()
    };
  }
  static #_ = this.ɵfac = function CateringOrderStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CateringOrderStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjectable"]({
    token: CateringOrderStateService,
    factory: CateringOrderStateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 11732:
/*!******************************************************************************************!*\
  !*** ./libs/catering/src/lib/catering-order-modal/new-catering-order-modal.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewCateringOrderModalComponent: () => (/* binding */ NewCateringOrderModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _catering_item_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../catering-item.class */ 25892);
/* harmony import */ var _catering_order_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catering-order-state.service */ 20097);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _catering_item_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./catering-item-list.component */ 32499);
/* harmony import */ var _catering_item_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./catering-item-details.component */ 90699);
/* harmony import */ var _catering_item_filters_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./catering-item-filters.component */ 26386);
















function NewCateringOrderModalComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NewCateringOrderModalComponent_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.displayed = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](1, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
const EMPTY_FAVS = [];
class NewCateringOrderModalComponent {
  get favorites() {
    return this._settings.get('favourite_menu_items') || EMPTY_FAVS;
  }
  get selected_ids() {
    return this.selected.map(_ => _.custom_id).join(',');
  }
  get count() {
    return this.selected.reduce((t, i) => t + i.quantity, 0);
  }
  get code() {
    return this._org.currency_code;
  }
  constructor(_settings, _order, _org, _data) {
    this._settings = _settings;
    this._order = _order;
    this._org = _org;
    this._data = _data;
    this.displayed = null;
    this.selected = [...(this._data.items || [])];
    this.exact_time = this._data.exact_time ?? false;
    const {
      duration
    } = this._data.details;
    this._order.setFilters(this._data.details);
    this.offset = Math.min(Math.max(this._settings.get('app.catering.min_offset'), this._data.offset || 0), (duration || 60) - this._settings.get('app.catering.end_offset'));
    this.offset_day = this._data.offset_day || 0;
  }
  isSelected(id) {
    return id && this.selected_ids.includes(id);
  }
  setSelected(item, state) {
    const list = this.selected.filter(_ => _.custom_id !== item.custom_id);
    if (state) {
      const new_item = new _catering_item_class__WEBPACK_IMPORTED_MODULE_2__.CateringItem({
        ...item,
        in_order: true
      });
      list.push(new_item);
      this.displayed = new_item;
    }
    this.selected = list;
  }
  toggleFavourite(item) {
    const fav_list = this.favorites;
    const new_state = !fav_list.includes(item.id);
    if (new_state) {
      this._settings.saveUserSetting('favourite_menu_items', [...fav_list, item.id]);
    } else {
      this._settings.saveUserSetting('favourite_menu_items', fav_list.filter(_ => _ !== item.id));
    }
  }
  static #_ = this.ɵfac = function NewCateringOrderModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NewCateringOrderModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_catering_order_state_service__WEBPACK_IMPORTED_MODULE_3__.CateringOrderStateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_1__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: NewCateringOrderModalComponent,
    selectors: [["new-catering-order-modal"]],
    decls: 32,
    vars: 28,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2076287131803615740$$LIBS_CATERING_SRC_LIB_CATERING_ORDER_MODAL_NEW_CATERING_ORDER_MODAL_COMPONENT_TS_0 = goog.getMsg("Add Catering");
        i18n_0 = MSG_EXTERNAL_2076287131803615740$$LIBS_CATERING_SRC_LIB_CATERING_ORDER_MODAL_NEW_CATERING_ORDER_MODAL_COMPONENT_TS_0;
      } else {
        i18n_0 = $localize`:␟737cdc02079fb61b2944ecf62f908ab35efb2d5a␟2076287131803615740:Add Catering`;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8443571736703532556$$LIBS_CATERING_SRC_LIB_CATERING_ORDER_MODAL_NEW_CATERING_ORDER_MODAL_COMPONENT_TS_1 = goog.getMsg(" View List ");
        i18n_1 = MSG_EXTERNAL_8443571736703532556$$LIBS_CATERING_SRC_LIB_CATERING_ORDER_MODAL_NEW_CATERING_ORDER_MODAL_COMPONENT_TS_1;
      } else {
        i18n_1 = $localize`:␟30d3439b0e0095fe69503245f3bd7a2e9498be7c␟8443571736703532556: View List `;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_819716823718458903$$LIBS_CATERING_SRC_LIB_CATERING_ORDER_MODAL_NEW_CATERING_ORDER_MODAL_COMPONENT_TS_2 = goog.getMsg("Back to form");
        i18n_2 = MSG_EXTERNAL_819716823718458903$$LIBS_CATERING_SRC_LIB_CATERING_ORDER_MODAL_NEW_CATERING_ORDER_MODAL_COMPONENT_TS_2;
      } else {
        i18n_2 = $localize`:␟18843b85d1a4f17fefafd07bc5cde636dca44295␟819716823718458903:Back to form`;
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4024487187516268099$$LIBS_CATERING_SRC_LIB_CATERING_ORDER_MODAL_NEW_CATERING_ORDER_MODAL_COMPONENT_TS_3 = goog.getMsg(" {$interpolation} items(s) added ", {
          "interpolation": "\uFFFD0\uFFFD"
        }, {
          original_code: {
            "interpolation": "{{ count }}"
          }
        });
        i18n_3 = MSG_EXTERNAL_4024487187516268099$$LIBS_CATERING_SRC_LIB_CATERING_ORDER_MODAL_NEW_CATERING_ORDER_MODAL_COMPONENT_TS_3;
      } else {
        i18n_3 = $localize`:␟523976668707aada89243171aa2abc1402656c5b␟4024487187516268099: ${"\uFFFD0\uFFFD"}:INTERPOLATION: items(s) added `;
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_874721418273731876$$LIBS_CATERING_SRC_LIB_CATERING_ORDER_MODAL_NEW_CATERING_ORDER_MODAL_COMPONENT_TS_4 = goog.getMsg(" Back ");
        i18n_4 = MSG_EXTERNAL_874721418273731876$$LIBS_CATERING_SRC_LIB_CATERING_ORDER_MODAL_NEW_CATERING_ORDER_MODAL_COMPONENT_TS_4;
      } else {
        i18n_4 = $localize`:␟ccda1d41ca79703a85a3a598c1d97e040a32b766␟874721418273731876: Back `;
      }
      return [i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, [1, "w-[100vw]", "h-[100vh]", "sm:relative", "sm:w-auto", "sm:h-auto", "flex", "flex-col", "bg-base-100"], [1, "flex", "items-center", "space-x-4", "w-full"], ["icon", "", "matRipple", "", 1, "bg-neutral", 3, "mat-dialog-close"], [1, "flex-1", "flex", "items-center", "divide-x", "divide-base-200", "min-h-[65vh]", "h-[65vh]", "sm:max-h-[65vh]", "sm:max-w-[95vw]", "w-full", "overflow-hidden"], [1, "h-full", "hidden", "sm:block", "sm:max-w-[12rem]", "sm:h-[65vh]", "sm:max-h-full", 3, "at_timeChange", "offsetChange", "offset_dayChange", "at_time", "offset", "offset_day"], [1, "flex", "flex-col", "items-center", "flex-1", "w-1/2", "h-full", "sm:h-[65vh]"], [1, "w-full", "border-b", "border-base-200", 3, "search"], [1, "flex-1", "h-1/2", "w-full", "overflow-hidden", 3, "toggleFav", "onSelect", "active", "selected", "selected_items", "favorites"], [1, "h-full", "w-full", "sm:h-[65vh]", "absolute", "sm:relative", "sm:flex", "sm:max-w-[16rem]", "z-20", "bg-base-100", 3, "activeChange", "toggleFav", "close", "item", "active", "code", "fav"], [1, "flex", "sm:hidden", "flex-col-reverse", "items-center", "justify-end", "px-2", "pt-2", "pb-[5.5rem]", "border-t", "border-base-200", "w-full"], ["btn", "", "matRipple", "", "name", "catering-item-return", "class", "inverse sm:hidden w-full sm:w-auto", 3, "click", 4, "ngIf"], ["btn", "", "matRipple", "", "name", "save-catering-item", 1, "w-full", "sm:w-auto", "sm:mb-0", 3, "mat-dialog-close"], [1, "hidden", "sm:flex", "items-center", "justify-between", "p-2", "border-t", "border-base-200", "w-full"], ["btn", "", "matRipple", "", "name", "catering-item-return", 1, "clear", "text-secondary", 3, "mat-dialog-close"], [1, "flex", "items-center"], [1, "text-xl"], [1, "mr-1", "underline"], [1, "opacity-60", "text-sm"], ["btn", "", "matRipple", "", "name", "toggle-catering-item", 3, "click", "disabled"], [1, "mr-1"], ["btn", "", "matRipple", "", "name", "catering-item-return", 1, "inverse", "sm:hidden", "w-full", "sm:w-auto", 3, "click"]];
    },
    template: function NewCateringOrderModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 5)(1, "header", 6)(2, "button", 7)(3, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](6, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "main", 8)(8, "catering-item-filters", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("at_timeChange", function NewCateringOrderModalComponent_Template_catering_item_filters_at_timeChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.exact_time, $event) || (ctx.exact_time = $event);
          return $event;
        })("offsetChange", function NewCateringOrderModalComponent_Template_catering_item_filters_offsetChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.offset, $event) || (ctx.offset = $event);
          return $event;
        })("offset_dayChange", function NewCateringOrderModalComponent_Template_catering_item_filters_offset_dayChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.offset_day, $event) || (ctx.offset_day = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "catering-item-filters", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "catering-item-list", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("toggleFav", function NewCateringOrderModalComponent_Template_catering_item_list_toggleFav_11_listener($event) {
          return ctx.toggleFavourite($event);
        })("onSelect", function NewCateringOrderModalComponent_Template_catering_item_list_onSelect_11_listener($event) {
          return ctx.displayed = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "catering-item-details", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("activeChange", function NewCateringOrderModalComponent_Template_catering_item_details_activeChange_12_listener($event) {
          return ctx.setSelected(ctx.displayed, $event);
        })("toggleFav", function NewCateringOrderModalComponent_Template_catering_item_details_toggleFav_12_listener() {
          return ctx.toggleFavourite(ctx.displayed);
        })("close", function NewCateringOrderModalComponent_Template_catering_item_details_close_12_listener() {
          return ctx.displayed = null;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "footer", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, NewCateringOrderModalComponent_button_14_Template, 2, 0, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](16, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "footer", 17)(18, "button", 18)(19, "div", 19)(20, "app-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](23, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](25, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NewCateringOrderModalComponent_Template_button_click_26_listener() {
          return ctx.setSelected(ctx.displayed, !ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.custom_id));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 19)(28, "app-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("mat-dialog-close", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("at_time", ctx.exact_time)("offset", ctx.offset)("offset_day", ctx.offset_day);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("search", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("active", ctx.displayed == null ? null : ctx.displayed.custom_id)("selected", ctx.selected_ids)("selected_items", ctx.selected)("favorites", ctx.favorites);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("hidden", !ctx.displayed)("inset-0", ctx.displayed);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", ctx.displayed)("active", ctx.selected_ids.includes((ctx.displayed == null ? null : ctx.displayed.custom_id) || ""))("code", ctx.code)("fav", !!ctx.displayed && ctx.favorites.includes((ctx.displayed == null ? null : ctx.displayed.id) || ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.displayed);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("mb-2", ctx.displayed);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("mat-dialog-close", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("mat-dialog-close", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nExp"](ctx.count);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nApply"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("inverse", ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.custom_id));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx.displayed);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.custom_id) ? "remove" : "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.isSelected(ctx.displayed == null ? null : ctx.displayed.custom_id) ? "Remove from Booking" : "Add to booking", " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogClose, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatRipple, _catering_item_list_component__WEBPACK_IMPORTED_MODULE_5__.CateringItemListComponent, _catering_item_details_component__WEBPACK_IMPORTED_MODULE_6__.CateringItemDetailsComponent, _catering_item_filters_component__WEBPACK_IMPORTED_MODULE_7__.CateringItemFiltersComponent]
  });
}

/***/ }),

/***/ 17707:
/*!*************************************************************************!*\
  !*** ./libs/catering/src/lib/catering-order-options-modal.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CateringOrderOptionsModalComponent: () => (/* binding */ CateringOrderOptionsModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var libs_common_src_lib_general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! libs/common/src/lib/general */ 64217);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/radio */ 53804);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 74646);











function CateringOrderOptionsModalComponent_div_7_ng_container_4_mat_radio_button_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" +", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, opt_r4.unit_price / 100, ctx_r2.code), " ");
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
    const opt_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", opt_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", opt_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", opt_r4.unit_price);
  }
}
function CateringOrderOptionsModalComponent_div_7_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-radio-group", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CateringOrderOptionsModalComponent_div_7_ng_container_4_Template_mat_radio_group_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const group_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.updateGroupOption(group_r2, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-radio-button", 11)(3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CateringOrderOptionsModalComponent_div_7_ng_container_4_mat_radio_button_5_Template, 5, 3, "mat-radio-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const group_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", group_r2 == null ? null : group_r2.options);
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
    const opt_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" +", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, opt_r6.unit_price / 100, ctx_r2.code), " ");
  }
}
function CateringOrderOptionsModalComponent_div_7_ng_template_5_mat_checkbox_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-checkbox", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function CateringOrderOptionsModalComponent_div_7_ng_template_5_mat_checkbox_0_Template_mat_checkbox_ngModelChange_0_listener($event) {
      const opt_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r2.option_state[opt_r6.id], $event) || (ctx_r2.option_state[opt_r6.id] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 15)(2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CateringOrderOptionsModalComponent_div_7_ng_template_5_mat_checkbox_0_div_4_Template, 3, 4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.option_state[opt_r6.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", opt_r6.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", opt_r6.unit_price);
  }
}
function CateringOrderOptionsModalComponent_div_7_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CateringOrderOptionsModalComponent_div_7_ng_template_5_mat_checkbox_0_Template, 5, 3, "mat-checkbox", 19);
  }
  if (rf & 2) {
    const group_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", group_r2 == null ? null : group_r2.options);
  }
}
function CateringOrderOptionsModalComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CateringOrderOptionsModalComponent_div_7_ng_container_4_Template, 6, 1, "ng-container", 9)(5, CateringOrderOptionsModalComponent_div_7_ng_template_5_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const group_r2 = ctx.$implicit;
    const multi_options_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("group", group_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](group_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !group_r2.multiple)("ngIfElse", multi_options_r7);
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
  static #_ = this.ɵfac = function CateringOrderOptionsModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CateringOrderOptionsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: CateringOrderOptionsModalComponent,
    selectors: [["app-catering-options-modal"]],
    outputs: {
      event: "event"
    },
    decls: 11,
    vars: 1,
    consts: [["multi_options", ""], ["icon", "", "mat-dialog-close", ""], [1, "overflow-auto"], ["class", "pt-1 pb-2 border-b border-base-200", 4, "ngFor", "ngForOf"], [1, "p-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "pt-1", "pb-2", "border-b", "border-base-200"], [1, "font-medium", "p-2", "capitalize"], [1, "flex", "flex-col", "pl-6"], [4, "ngIf", "ngIfElse"], ["aria-label", "Select an option", "ngModel", "", 1, "flex", "flex-col", 3, "ngModelChange"], ["value", "", 1, "my-1", "mx-0"], [1, "font-medium", "p-2"], ["class", "my-1 mx-0", 3, "value", 4, "ngFor", "ngForOf"], [1, "my-1", "mx-0", 3, "value"], [1, "flex", "items-center", "justify-center"], [1, "font-medium", "p-2", "flex-1", "w-1/2"], ["class", "opacity-60 text-xs", 4, "ngIf"], [1, "opacity-60", "text-xs"], [3, "ngModel", "ngModelChange", 4, "ngFor", "ngForOf"], [3, "ngModelChange", "ngModel"]],
    template: function CateringOrderOptionsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header")(1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Select options");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 1)(4, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CateringOrderOptionsModalComponent_div_7_Template, 7, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "footer", 4)(9, "button", 5);
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
    styles: ["main[_ngcontent-%COMP%] {\n                min-height: 24em;\n                width: 24rem;\n                max-width: calc(100vw - 2rem);\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVyaW5nLW9yZGVyLW9wdGlvbnMtbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxnQkFBZ0I7Z0JBQ2hCLFlBQVk7Z0JBQ1osNkJBQTZCO1lBQ2pDIiwiZmlsZSI6ImNhdGVyaW5nLW9yZGVyLW9wdGlvbnMtbW9kYWwuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICBtYWluIHtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyNGVtO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNHJlbTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSAycmVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvY2F0ZXJpbmcvc3JjL2xpYi9jYXRlcmluZy1vcmRlci1vcHRpb25zLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksZ0JBQWdCO2dCQUNoQixZQUFZO2dCQUNaLDZCQUE2QjtZQUNqQzs7QUFFWix3aUJBQXdpQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjRlbTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjRyZW07XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gMnJlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 98197:
/*!**********************************************************!*\
  !*** ./libs/catering/src/lib/catering-orders.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CateringOrdersService: () => (/* binding */ CateringOrdersService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 71536);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 19803);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 29314);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 99908);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 33240);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 56441);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns */ 45726);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var libs_events_src_lib_events_fn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! libs/events/src/lib/events.fn */ 51416);
/* harmony import */ var libs_events_src_lib_event_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! libs/events/src/lib/event.class */ 6727);
/* harmony import */ var _catering_order_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./catering-order.class */ 75555);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 37580);









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
      const start = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.getUnixTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_10__.startOfDay)(date || Date.now()));
      const end = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.getUnixTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_11__.endOfDay)(date || Date.now()));
      return (0,libs_events_src_lib_events_fn__WEBPACK_IMPORTED_MODULE_2__.queryEvents)({
        zone_ids: (zones || []).join(','),
        period_start: start,
        period_end: end
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)([])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(events => (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.flatten)(events.map(event => event.valid_catering.map(o => new _catering_order_class__WEBPACK_IMPORTED_MODULE_4__.CateringOrder({
        ...o,
        event
      }))))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(orders => orders.filter(o => (0,date_fns__WEBPACK_IMPORTED_MODULE_15__.format)(o.deliver_at, 'yyyy-MM-dd') === (0,date_fns__WEBPACK_IMPORTED_MODULE_15__.format)(start * 1000, 'yyyy-MM-dd'))));
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
  static #_ = this.ɵfac = function CateringOrdersService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CateringOrdersService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjectable"]({
    token: CateringOrdersService,
    factory: CateringOrdersService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 52201:
/*!*********************************************************!*\
  !*** ./libs/catering/src/lib/catering-state.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CateringStateService: () => (/* binding */ CateringStateService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 71536);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 29314);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 66000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 57871);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _catering_item_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./catering-item-modal.component */ 30807);
/* harmony import */ var _catering_option_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./catering-option-modal.component */ 37053);
/* harmony import */ var _placeos_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @placeos/components */ 51588);
/* harmony import */ var _catering_item_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./catering-item.class */ 25892);
/* harmony import */ var _catering_order_class__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./catering-order.class */ 75555);
/* harmony import */ var _catering_order_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./catering-order-modal.component */ 82912);
/* harmony import */ var _catering_order_options_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./catering-order-options-modal.component */ 17707);
/* harmony import */ var _catering_import_menu_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./catering-import-menu-modal.component */ 76095);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ 12587);



















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
  static #_ = this.ɵfac = function CateringStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CateringStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵinject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_3__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵinject"](_placeos_common__WEBPACK_IMPORTED_MODULE_2__.SettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjectable"]({
    token: CateringStateService,
    factory: CateringStateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 19172:
/*!******************************************************!*\
  !*** ./libs/catering/src/lib/catering.interfaces.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 7872:
/*!**************************************************!*\
  !*** ./libs/catering/src/lib/catering.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedCateringModule: () => (/* binding */ SharedCateringModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/autocomplete */ 79771);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tabs */ 38223);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/radio */ 53804);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ 26354);
/* harmony import */ var _placeos_form_fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/form-fields */ 63046);
/* harmony import */ var libs_components_src_lib_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! libs/components/src/lib/components.module */ 14974);
/* harmony import */ var _catering_item_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catering-item-modal.component */ 30807);
/* harmony import */ var _catering_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catering-menu.component */ 48519);
/* harmony import */ var _catering_option_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./catering-option-modal.component */ 37053);
/* harmony import */ var _catering_order_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./catering-order-item.component */ 81491);
/* harmony import */ var _catering_order_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./catering-order-list.component */ 41623);
/* harmony import */ var _catering_order_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./catering-order-modal.component */ 82912);
/* harmony import */ var _catering_order_options_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./catering-order-options-modal.component */ 17707);
/* harmony import */ var _catering_import_menu_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./catering-import-menu-modal.component */ 76095);
/* harmony import */ var _catering_order_modal_new_catering_order_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./catering-order-modal/new-catering-order-modal.component */ 11732);
/* harmony import */ var _catering_order_modal_catering_item_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./catering-order-modal/catering-item-list.component */ 32499);
/* harmony import */ var _catering_order_modal_catering_item_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./catering-order-modal/catering-item-details.component */ 90699);
/* harmony import */ var _catering_order_modal_catering_item_filters_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./catering-order-modal/catering-item-filters.component */ 26386);
/* harmony import */ var _catering_list_field_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./catering-list-field.component */ 61601);
/* harmony import */ var _charge_code_list_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./charge-code-list-modal.component */ 96861);
/* harmony import */ var _catering_order_modal_catering_item_list_item_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./catering-order-modal/catering-item-list-item.component */ 89505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 37580);































const COMPONENTS = [_catering_order_options_modal_component__WEBPACK_IMPORTED_MODULE_8__.CateringOrderOptionsModalComponent, _catering_order_modal_component__WEBPACK_IMPORTED_MODULE_7__.CateringOrderModalComponent, _catering_item_modal_component__WEBPACK_IMPORTED_MODULE_2__.CateringItemModalComponent, _catering_menu_component__WEBPACK_IMPORTED_MODULE_3__.CateringMenuComponent, _catering_option_modal_component__WEBPACK_IMPORTED_MODULE_4__.CateringItemOptionModalComponent, _catering_order_list_component__WEBPACK_IMPORTED_MODULE_6__.CateringOrderListComponent, _catering_order_item_component__WEBPACK_IMPORTED_MODULE_5__.CateringOrderItemComponent, _catering_import_menu_modal_component__WEBPACK_IMPORTED_MODULE_9__.CateringImportMenuModalComponent, _catering_list_field_component__WEBPACK_IMPORTED_MODULE_14__.CateringListFieldComponent, _catering_order_modal_new_catering_order_modal_component__WEBPACK_IMPORTED_MODULE_10__.NewCateringOrderModalComponent, _catering_order_modal_catering_item_list_component__WEBPACK_IMPORTED_MODULE_11__.CateringItemListComponent, _catering_order_modal_catering_item_details_component__WEBPACK_IMPORTED_MODULE_12__.CateringItemDetailsComponent, _catering_order_modal_catering_item_filters_component__WEBPACK_IMPORTED_MODULE_13__.CateringItemFiltersComponent, _catering_order_modal_catering_item_list_item_component__WEBPACK_IMPORTED_MODULE_16__.CateringItemListItemComponent, _charge_code_list_modal_component__WEBPACK_IMPORTED_MODULE_15__.ChargeCodeListModalComponent];
class SharedCateringModule {
  static #_ = this.ɵfac = function SharedCateringModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SharedCateringModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({
    type: SharedCateringModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__.MatTabsModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__.MatAutocompleteModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__.MatCheckboxModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__.MatRadioModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__.MatTooltipModule, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.ReactiveFormsModule, libs_components_src_lib_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__.MatFormFieldModule, _placeos_form_fields__WEBPACK_IMPORTED_MODULE_0__.FormFieldsModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinnerModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__.MatProgressBarModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](SharedCateringModule, {
    declarations: [_catering_order_options_modal_component__WEBPACK_IMPORTED_MODULE_8__.CateringOrderOptionsModalComponent, _catering_order_modal_component__WEBPACK_IMPORTED_MODULE_7__.CateringOrderModalComponent, _catering_item_modal_component__WEBPACK_IMPORTED_MODULE_2__.CateringItemModalComponent, _catering_menu_component__WEBPACK_IMPORTED_MODULE_3__.CateringMenuComponent, _catering_option_modal_component__WEBPACK_IMPORTED_MODULE_4__.CateringItemOptionModalComponent, _catering_order_list_component__WEBPACK_IMPORTED_MODULE_6__.CateringOrderListComponent, _catering_order_item_component__WEBPACK_IMPORTED_MODULE_5__.CateringOrderItemComponent, _catering_import_menu_modal_component__WEBPACK_IMPORTED_MODULE_9__.CateringImportMenuModalComponent, _catering_list_field_component__WEBPACK_IMPORTED_MODULE_14__.CateringListFieldComponent, _catering_order_modal_new_catering_order_modal_component__WEBPACK_IMPORTED_MODULE_10__.NewCateringOrderModalComponent, _catering_order_modal_catering_item_list_component__WEBPACK_IMPORTED_MODULE_11__.CateringItemListComponent, _catering_order_modal_catering_item_details_component__WEBPACK_IMPORTED_MODULE_12__.CateringItemDetailsComponent, _catering_order_modal_catering_item_filters_component__WEBPACK_IMPORTED_MODULE_13__.CateringItemFiltersComponent, _catering_order_modal_catering_item_list_item_component__WEBPACK_IMPORTED_MODULE_16__.CateringItemListItemComponent, _charge_code_list_modal_component__WEBPACK_IMPORTED_MODULE_15__.ChargeCodeListModalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__.MatTabsModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__.MatAutocompleteModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__.MatCheckboxModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__.MatRadioModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__.MatTooltipModule, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.ReactiveFormsModule, libs_components_src_lib_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__.MatFormFieldModule, _placeos_form_fields__WEBPACK_IMPORTED_MODULE_0__.FormFieldsModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinnerModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__.MatProgressBarModule],
    exports: [_catering_order_options_modal_component__WEBPACK_IMPORTED_MODULE_8__.CateringOrderOptionsModalComponent, _catering_order_modal_component__WEBPACK_IMPORTED_MODULE_7__.CateringOrderModalComponent, _catering_item_modal_component__WEBPACK_IMPORTED_MODULE_2__.CateringItemModalComponent, _catering_menu_component__WEBPACK_IMPORTED_MODULE_3__.CateringMenuComponent, _catering_option_modal_component__WEBPACK_IMPORTED_MODULE_4__.CateringItemOptionModalComponent, _catering_order_list_component__WEBPACK_IMPORTED_MODULE_6__.CateringOrderListComponent, _catering_order_item_component__WEBPACK_IMPORTED_MODULE_5__.CateringOrderItemComponent, _catering_import_menu_modal_component__WEBPACK_IMPORTED_MODULE_9__.CateringImportMenuModalComponent, _catering_list_field_component__WEBPACK_IMPORTED_MODULE_14__.CateringListFieldComponent, _catering_order_modal_new_catering_order_modal_component__WEBPACK_IMPORTED_MODULE_10__.NewCateringOrderModalComponent, _catering_order_modal_catering_item_list_component__WEBPACK_IMPORTED_MODULE_11__.CateringItemListComponent, _catering_order_modal_catering_item_details_component__WEBPACK_IMPORTED_MODULE_12__.CateringItemDetailsComponent, _catering_order_modal_catering_item_filters_component__WEBPACK_IMPORTED_MODULE_13__.CateringItemFiltersComponent, _catering_order_modal_catering_item_list_item_component__WEBPACK_IMPORTED_MODULE_16__.CateringItemListItemComponent, _charge_code_list_modal_component__WEBPACK_IMPORTED_MODULE_15__.ChargeCodeListModalComponent]
  });
})();

/***/ }),

/***/ 95196:
/*!*******************************************!*\
  !*** ./libs/catering/src/lib/catering.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CATERING_STATUSES: () => (/* reexport safe */ _catering_vars__WEBPACK_IMPORTED_MODULE_13__.CATERING_STATUSES),
/* harmony export */   CateringItem: () => (/* reexport safe */ _catering_item_class__WEBPACK_IMPORTED_MODULE_3__.CateringItem),
/* harmony export */   CateringItemModalComponent: () => (/* reexport safe */ _catering_item_modal_component__WEBPACK_IMPORTED_MODULE_2__.CateringItemModalComponent),
/* harmony export */   CateringItemOptionModalComponent: () => (/* reexport safe */ _catering_option_modal_component__WEBPACK_IMPORTED_MODULE_5__.CateringItemOptionModalComponent),
/* harmony export */   CateringMenuComponent: () => (/* reexport safe */ _catering_menu_component__WEBPACK_IMPORTED_MODULE_4__.CateringMenuComponent),
/* harmony export */   CateringOrder: () => (/* reexport safe */ _catering_order_class__WEBPACK_IMPORTED_MODULE_8__.CateringOrder),
/* harmony export */   CateringOrderItemComponent: () => (/* reexport safe */ _catering_order_item_component__WEBPACK_IMPORTED_MODULE_6__.CateringOrderItemComponent),
/* harmony export */   CateringOrderListComponent: () => (/* reexport safe */ _catering_order_list_component__WEBPACK_IMPORTED_MODULE_7__.CateringOrderListComponent),
/* harmony export */   CateringOrderModalComponent: () => (/* reexport safe */ _catering_order_modal_component__WEBPACK_IMPORTED_MODULE_1__.CateringOrderModalComponent),
/* harmony export */   CateringOrderOptionsModalComponent: () => (/* reexport safe */ _catering_order_options_modal_component__WEBPACK_IMPORTED_MODULE_0__.CateringOrderOptionsModalComponent),
/* harmony export */   CateringOrdersService: () => (/* reexport safe */ _catering_orders_service__WEBPACK_IMPORTED_MODULE_9__.CateringOrdersService),
/* harmony export */   CateringStateService: () => (/* reexport safe */ _catering_state_service__WEBPACK_IMPORTED_MODULE_10__.CateringStateService),
/* harmony export */   NewCateringOrderModalComponent: () => (/* reexport safe */ _catering_order_modal_new_catering_order_modal_component__WEBPACK_IMPORTED_MODULE_14__.NewCateringOrderModalComponent),
/* harmony export */   SharedCateringModule: () => (/* reexport safe */ _catering_module__WEBPACK_IMPORTED_MODULE_12__.SharedCateringModule)
/* harmony export */ });
/* harmony import */ var _catering_order_options_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catering-order-options-modal.component */ 17707);
/* harmony import */ var _catering_order_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catering-order-modal.component */ 82912);
/* harmony import */ var _catering_item_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catering-item-modal.component */ 30807);
/* harmony import */ var _catering_item_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catering-item.class */ 25892);
/* harmony import */ var _catering_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./catering-menu.component */ 48519);
/* harmony import */ var _catering_option_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./catering-option-modal.component */ 37053);
/* harmony import */ var _catering_order_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./catering-order-item.component */ 81491);
/* harmony import */ var _catering_order_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./catering-order-list.component */ 41623);
/* harmony import */ var _catering_order_class__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./catering-order.class */ 75555);
/* harmony import */ var _catering_orders_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./catering-orders.service */ 98197);
/* harmony import */ var _catering_state_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./catering-state.service */ 52201);
/* harmony import */ var _catering_interfaces__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./catering.interfaces */ 19172);
/* harmony import */ var _catering_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./catering.module */ 7872);
/* harmony import */ var _catering_vars__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./catering.vars */ 91074);
/* harmony import */ var _catering_order_modal_new_catering_order_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./catering-order-modal/new-catering-order-modal.component */ 11732);
















/***/ }),

/***/ 91074:
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

/***/ 96861:
/*!*******************************************************************!*\
  !*** ./libs/catering/src/lib/charge-code-list-modal.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChargeCodeListModalComponent: () => (/* binding */ ChargeCodeListModalComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var _catering_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catering-state.service */ 52201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/src/lib/icon.component */ 69434);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);















function ChargeCodeListModalComponent_main_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "mat-form-field", 7)(2, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ChargeCodeListModalComponent_main_6_div_1_Template_input_ngModelChange_2_listener($event) {
      const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r2.charge_codes[i_r2], $event) || (ctx_r2.charge_codes[i_r2] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChargeCodeListModalComponent_main_6_div_1_Template_button_click_3_listener() {
      const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.removeCode(i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.charge_codes[i_r2]);
  }
}
function ChargeCodeListModalComponent_main_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "main", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ChargeCodeListModalComponent_main_6_div_1_Template, 6, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.charge_codes)("ngForTrackBy", ctx_r2.trackByFn);
  }
}
function ChargeCodeListModalComponent_footer_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "footer", 10)(1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Import Codes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function ChargeCodeListModalComponent_footer_7_Template_input_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.addCodesFromFile($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChargeCodeListModalComponent_footer_7_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.newCode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Add Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChargeCodeListModalComponent_footer_7_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.saveChargeCodes());
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
  static #_ = this.ɵfac = function ChargeCodeListModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ChargeCodeListModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_catering_state_service__WEBPACK_IMPORTED_MODULE_2__.CateringStateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ChargeCodeListModalComponent,
    selectors: [["charge-code-list-modal"]],
    decls: 10,
    vars: 3,
    consts: [["load_state", ""], ["icon", "", "mat-dialog-close", ""], ["class", "overflow-auto max-h-[65vh] min-h-[20rem] flex flex-col", 4, "ngIf", "ngIfElse"], ["class", "flex items-center p-2 space-x-2 border-t border-base-200", 4, "ngIf"], [1, "overflow-auto", "max-h-[65vh]", "min-h-[20rem]", "flex", "flex-col"], ["class", "flex items-center space-x-2 w-full hover:bg-neutral px-2", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "flex", "items-center", "space-x-2", "w-full", "hover:bg-neutral", "px-2"], ["appearance", "outline", 1, "h-14", "flex-1"], ["matInput", "", "placeholder", "Charge Code", 3, "ngModelChange", "ngModel"], ["icon", "", 3, "click"], [1, "flex", "items-center", "p-2", "space-x-2", "border-t", "border-base-200"], ["btn", "", "matRipple", "", 1, "w-48", "inverse", "relative"], ["type", "file", 1, "opacity-0", "absolute", "inset-0", 3, "change"], ["btn", "", "matRipple", "", 1, "w-48", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "p-20", "space-y-2"], ["diameter", "32"]],
    template: function ChargeCodeListModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "header")(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Edit Charge Codes");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 1)(4, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ChargeCodeListModalComponent_main_6_Template, 2, 2, "main", 2)(7, ChargeCodeListModalComponent_footer_7_Template, 8, 0, "footer", 3)(8, ChargeCodeListModalComponent_ng_template_8_Template, 4, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const load_state_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", load_state_r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatRipple, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinner]
  });
}

/***/ }),

/***/ 60285:
/*!********************************************!*\
  !*** ./libs/catering/src/lib/utilities.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cateringItemAvailable: () => (/* binding */ cateringItemAvailable),
/* harmony export */   getCateringRulesForZone: () => (/* binding */ getCateringRulesForZone)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 55882);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 28848);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 91543);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 3330);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 71536);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 29314);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);





const RULE_REQUESTS = {};
function getCateringRulesForZone(zone_id, fresh = false) {
  if (!zone_id) return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)([]);
  if (!RULE_REQUESTS[zone_id] || fresh) RULE_REQUESTS[zone_id] = (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__.showMetadata)(zone_id, 'catering_config').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(_ => _.details instanceof Array ? _.details : []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(e => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)([])));
  return RULE_REQUESTS[zone_id];
}
function cateringItemAvailable(item, rules, event) {
  let is_available = true;
  for (const rule of rules) {
    if (item.category === rule.name || item.tags.includes(rule.name) || event.resources.find(_ => _.zones.includes(rule.name)) || event.space?.zones.includes(rule.name) || rule.name === '*') {
      let matches = 0;
      for (const condition of rule.rules) {
        const date = new Date(event.date);
        switch (condition[0]) {
          case 'is_before':
            matches += (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.isBefore)(Date.now(), (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.subHours)(date, condition[1])) ? 1 : 0;
            break;
          case 'within_hours':
            matches += (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.isAfter)(Date.now(), (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.subHours)(date, condition[1])) ? 1 : 0;
            break;
          case 'after_hour':
            matches += (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.isAfter)(date, (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.setHours)(date, condition[1])) ? 1 : 0;
            break;
          case 'before_hour':
            matches += (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.isBefore)(date, (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.setHours)(date, condition[1])) ? 1 : 0;
            break;
          case 'min_length':
            matches += event.duration >= (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.stringToMinutes)(condition[1]) ? 1 : 0;
            break;
          case 'max_length':
            matches += event.duration <= (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.stringToMinutes)(condition[1]) ? 1 : 0;
            break;
          case 'visitor_type':
            matches += event.ext('visitor_type') === condition[1] ? 1 : 0;
            break;
          default:
            matches += 1;
        }
      }
      is_available = matches >= rule.rules.length;
    }
  }
  return is_available;
}

/***/ }),

/***/ 38279:
/*!***************************************************!*\
  !*** ./node_modules/qr-scanner/qr-scanner.min.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);

class e {
  constructor(a, b, c, d, f) {
    this._legacyCanvasSize = e.DEFAULT_CANVAS_SIZE;
    this._preferredCamera = "environment";
    this._maxScansPerSecond = 25;
    this._lastScanTimestamp = -1;
    this._destroyed = this._flashOn = this._paused = this._active = !1;
    this.$video = a;
    this.$canvas = document.createElement("canvas");
    c && "object" === typeof c ? this._onDecode = b : (c || d || f ? console.warn("You're using a deprecated version of the QrScanner constructor which will be removed in the future") : console.warn("Note that the type of the scan result passed to onDecode will change in the future. To already switch to the new api today, you can pass returnDetailedScanResult: true."), this._legacyOnDecode = b);
    b = "object" === typeof c ? c : {};
    this._onDecodeError = b.onDecodeError || ("function" === typeof c ? c : this._onDecodeError);
    this._calculateScanRegion = b.calculateScanRegion || ("function" === typeof d ? d : this._calculateScanRegion);
    this._preferredCamera = b.preferredCamera || f || this._preferredCamera;
    this._legacyCanvasSize = "number" === typeof c ? c : "number" === typeof d ? d : this._legacyCanvasSize;
    this._maxScansPerSecond = b.maxScansPerSecond || this._maxScansPerSecond;
    this._onPlay = this._onPlay.bind(this);
    this._onLoadedMetaData = this._onLoadedMetaData.bind(this);
    this._onVisibilityChange = this._onVisibilityChange.bind(this);
    this._updateOverlay = this._updateOverlay.bind(this);
    a.disablePictureInPicture = !0;
    a.playsInline = !0;
    a.muted = !0;
    let h = !1;
    a.hidden && (a.hidden = !1, h = !0);
    document.body.contains(a) || (document.body.appendChild(a), h = !0);
    c = a.parentElement;
    if (b.highlightScanRegion || b.highlightCodeOutline) {
      d = !!b.overlay;
      this.$overlay = b.overlay || document.createElement("div");
      f = this.$overlay.style;
      f.position = "absolute";
      f.display = "none";
      f.pointerEvents = "none";
      this.$overlay.classList.add("scan-region-highlight");
      if (!d && b.highlightScanRegion) {
        this.$overlay.innerHTML = '<svg class="scan-region-highlight-svg" viewBox="0 0 238 238" preserveAspectRatio="none" style="position:absolute;width:100%;height:100%;left:0;top:0;fill:none;stroke:#e9b213;stroke-width:4;stroke-linecap:round;stroke-linejoin:round"><path d="M31 2H10a8 8 0 0 0-8 8v21M207 2h21a8 8 0 0 1 8 8v21m0 176v21a8 8 0 0 1-8 8h-21m-176 0H10a8 8 0 0 1-8-8v-21"/></svg>';
        try {
          this.$overlay.firstElementChild.animate({
            transform: ["scale(.98)", "scale(1.01)"]
          }, {
            duration: 400,
            iterations: Infinity,
            direction: "alternate",
            easing: "ease-in-out"
          });
        } catch (m) {}
        c.insertBefore(this.$overlay, this.$video.nextSibling);
      }
      b.highlightCodeOutline && (this.$overlay.insertAdjacentHTML("beforeend", '<svg class="code-outline-highlight" preserveAspectRatio="none" style="display:none;width:100%;height:100%;fill:none;stroke:#e9b213;stroke-width:5;stroke-dasharray:25;stroke-linecap:round;stroke-linejoin:round"><polygon/></svg>'), this.$codeOutlineHighlight = this.$overlay.lastElementChild);
    }
    this._scanRegion = this._calculateScanRegion(a);
    requestAnimationFrame(() => {
      let m = window.getComputedStyle(a);
      "none" === m.display && (a.style.setProperty("display", "block", "important"), h = !0);
      "visible" !== m.visibility && (a.style.setProperty("visibility", "visible", "important"), h = !0);
      h && (console.warn("QrScanner has overwritten the video hiding style to avoid Safari stopping the playback."), a.style.opacity = "0", a.style.width = "0", a.style.height = "0", this.$overlay && this.$overlay.parentElement && this.$overlay.parentElement.removeChild(this.$overlay), delete this.$overlay, delete this.$codeOutlineHighlight);
      this.$overlay && this._updateOverlay();
    });
    a.addEventListener("play", this._onPlay);
    a.addEventListener("loadedmetadata", this._onLoadedMetaData);
    document.addEventListener("visibilitychange", this._onVisibilityChange);
    window.addEventListener("resize", this._updateOverlay);
    this._qrEnginePromise = e.createQrEngine();
  }
  static set WORKER_PATH(a) {
    console.warn("Setting QrScanner.WORKER_PATH is not required and not supported anymore. Have a look at the README for new setup instructions.");
  }
  static hasCamera() {
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        return !!(yield e.listCameras(!1)).length;
      } catch (a) {
        return !1;
      }
    })();
  }
  static listCameras(a = !1) {
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!navigator.mediaDevices) return [];
      let b = /*#__PURE__*/function () {
          var _ref = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            return (yield navigator.mediaDevices.enumerateDevices()).filter(d => "videoinput" === d.kind);
          });
          return function b() {
            return _ref.apply(this, arguments);
          };
        }(),
        c;
      try {
        a && (yield b()).every(d => !d.label) && (c = yield navigator.mediaDevices.getUserMedia({
          audio: !1,
          video: !0
        }));
      } catch (d) {}
      try {
        return (yield b()).map((d, f) => ({
          id: d.deviceId,
          label: d.label || (0 === f ? "Default Camera" : `Camera ${f + 1}`)
        }));
      } finally {
        c && (console.warn("Call listCameras after successfully starting a QR scanner to avoid creating a temporary video stream"), e._stopVideoStream(c));
      }
    })();
  }
  hasFlash() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let a;
      try {
        if (_this.$video.srcObject) {
          if (!(_this.$video.srcObject instanceof MediaStream)) return !1;
          a = _this.$video.srcObject;
        } else a = (yield _this._getCameraStream()).stream;
        return "torch" in a.getVideoTracks()[0].getSettings();
      } catch (b) {
        return !1;
      } finally {
        a && a !== _this.$video.srcObject && (console.warn("Call hasFlash after successfully starting the scanner to avoid creating a temporary video stream"), e._stopVideoStream(a));
      }
    })();
  }
  isFlashOn() {
    return this._flashOn;
  }
  toggleFlash() {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2._flashOn ? yield _this2.turnFlashOff() : yield _this2.turnFlashOn();
    })();
  }
  turnFlashOn() {
    var _this3 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this3._flashOn && !_this3._destroyed && (_this3._flashOn = !0, _this3._active && !_this3._paused)) try {
        if (!(yield _this3.hasFlash())) throw "No flash available";
        yield _this3.$video.srcObject.getVideoTracks()[0].applyConstraints({
          advanced: [{
            torch: !0
          }]
        });
      } catch (a) {
        throw _this3._flashOn = !1, a;
      }
    })();
  }
  turnFlashOff() {
    var _this4 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4._flashOn && (_this4._flashOn = !1, yield _this4._restartVideoStream());
    })();
  }
  destroy() {
    this.$video.removeEventListener("loadedmetadata", this._onLoadedMetaData);
    this.$video.removeEventListener("play", this._onPlay);
    document.removeEventListener("visibilitychange", this._onVisibilityChange);
    window.removeEventListener("resize", this._updateOverlay);
    this._destroyed = !0;
    this._flashOn = !1;
    this.stop();
    e._postWorkerMessage(this._qrEnginePromise, "close");
  }
  start() {
    var _this5 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this5._destroyed) throw Error("The QR scanner can not be started as it had been destroyed.");
      if (!_this5._active || _this5._paused) if ("https:" !== window.location.protocol && console.warn("The camera stream is only accessible if the page is transferred via https."), _this5._active = !0, !document.hidden) if (_this5._paused = !1, _this5.$video.srcObject) yield _this5.$video.play();else try {
        let {
          stream: a,
          facingMode: b
        } = yield _this5._getCameraStream();
        !_this5._active || _this5._paused ? e._stopVideoStream(a) : (_this5._setVideoMirror(b), _this5.$video.srcObject = a, yield _this5.$video.play(), _this5._flashOn && (_this5._flashOn = !1, _this5.turnFlashOn().catch(() => {})));
      } catch (a) {
        if (!_this5._paused) throw _this5._active = !1, a;
      }
    })();
  }
  stop() {
    this.pause();
    this._active = !1;
  }
  pause(a = !1) {
    var _this6 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6._paused = !0;
      if (!_this6._active) return !0;
      _this6.$video.pause();
      _this6.$overlay && (_this6.$overlay.style.display = "none");
      let b = () => {
        _this6.$video.srcObject instanceof MediaStream && (e._stopVideoStream(_this6.$video.srcObject), _this6.$video.srcObject = null);
      };
      if (a) return b(), !0;
      yield new Promise(c => setTimeout(c, 300));
      if (!_this6._paused) return !1;
      b();
      return !0;
    })();
  }
  setCamera(a) {
    var _this7 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      a !== _this7._preferredCamera && (_this7._preferredCamera = a, yield _this7._restartVideoStream());
    })();
  }
  static scanImage(a, b, c, d, f = !1, h = !1) {
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let m,
        n = !1;
      b && ("scanRegion" in b || "qrEngine" in b || "canvas" in b || "disallowCanvasResizing" in b || "alsoTryWithoutScanRegion" in b || "returnDetailedScanResult" in b) ? (m = b.scanRegion, c = b.qrEngine, d = b.canvas, f = b.disallowCanvasResizing || !1, h = b.alsoTryWithoutScanRegion || !1, n = !0) : b || c || d || f || h ? console.warn("You're using a deprecated api for scanImage which will be removed in the future.") : console.warn("Note that the return type of scanImage will change in the future. To already switch to the new api today, you can pass returnDetailedScanResult: true.");
      b = !!c;
      try {
        let p, k;
        [c, p] = yield Promise.all([c || e.createQrEngine(), e._loadImage(a)]);
        [d, k] = e._drawToCanvas(p, m, d, f);
        let q;
        if (c instanceof Worker) {
          let g = c;
          b || e._postWorkerMessageSync(g, "inversionMode", "both");
          q = yield new Promise((l, v) => {
            let w,
              u,
              r,
              y = -1;
            u = t => {
              t.data.id === y && (g.removeEventListener("message", u), g.removeEventListener("error", r), clearTimeout(w), null !== t.data.data ? l({
                data: t.data.data,
                cornerPoints: e._convertPoints(t.data.cornerPoints, m)
              }) : v(e.NO_QR_CODE_FOUND));
            };
            r = t => {
              g.removeEventListener("message", u);
              g.removeEventListener("error", r);
              clearTimeout(w);
              v("Scanner error: " + (t ? t.message || t : "Unknown Error"));
            };
            g.addEventListener("message", u);
            g.addEventListener("error", r);
            w = setTimeout(() => r("timeout"), 1E4);
            let x = k.getImageData(0, 0, d.width, d.height);
            y = e._postWorkerMessageSync(g, "decode", x, [x.data.buffer]);
          });
        } else q = yield Promise.race([new Promise((g, l) => window.setTimeout(() => l("Scanner error: timeout"), 1E4)), (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          try {
            var [g] = yield c.detect(d);
            if (!g) throw e.NO_QR_CODE_FOUND;
            return {
              data: g.rawValue,
              cornerPoints: e._convertPoints(g.cornerPoints, m)
            };
          } catch (l) {
            g = l.message || l;
            if (/not implemented|service unavailable/.test(g)) return e._disableBarcodeDetector = !0, e.scanImage(a, {
              scanRegion: m,
              canvas: d,
              disallowCanvasResizing: f,
              alsoTryWithoutScanRegion: h
            });
            throw `Scanner error: ${g}`;
          }
        })()]);
        return n ? q : q.data;
      } catch (p) {
        if (!m || !h) throw p;
        let k = yield e.scanImage(a, {
          qrEngine: c,
          canvas: d,
          disallowCanvasResizing: f
        });
        return n ? k : k.data;
      } finally {
        b || e._postWorkerMessage(c, "close");
      }
    })();
  }
  setGrayscaleWeights(a, b, c, d = !0) {
    e._postWorkerMessage(this._qrEnginePromise, "grayscaleWeights", {
      red: a,
      green: b,
      blue: c,
      useIntegerApproximation: d
    });
  }
  setInversionMode(a) {
    e._postWorkerMessage(this._qrEnginePromise, "inversionMode", a);
  }
  static createQrEngine(a) {
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      a && console.warn("Specifying a worker path is not required and not supported anymore.");
      a = () => __webpack_require__.e(/*! import() */ "node_modules_qr-scanner_qr-scanner-worker_min_js").then(__webpack_require__.bind(__webpack_require__, /*! ./qr-scanner-worker.min.js */ 45614)).then(c => c.createWorker());
      if (!(!e._disableBarcodeDetector && "BarcodeDetector" in window && BarcodeDetector.getSupportedFormats && (yield BarcodeDetector.getSupportedFormats()).includes("qr_code"))) return a();
      let b = navigator.userAgentData;
      return b && b.brands.some(({
        brand: c
      }) => /Chromium/i.test(c)) && /mac ?OS/i.test(b.platform) && (yield b.getHighEntropyValues(["architecture", "platformVersion"]).then(({
        architecture: c,
        platformVersion: d
      }) => /arm/i.test(c || "arm") && 13 <= parseInt(d || "13")).catch(() => !0)) ? a() : new BarcodeDetector({
        formats: ["qr_code"]
      });
    })();
  }
  _onPlay() {
    this._scanRegion = this._calculateScanRegion(this.$video);
    this._updateOverlay();
    this.$overlay && (this.$overlay.style.display = "");
    this._scanFrame();
  }
  _onLoadedMetaData() {
    this._scanRegion = this._calculateScanRegion(this.$video);
    this._updateOverlay();
  }
  _onVisibilityChange() {
    document.hidden ? this.pause() : this._active && this.start();
  }
  _calculateScanRegion(a) {
    let b = Math.round(2 / 3 * Math.min(a.videoWidth, a.videoHeight));
    return {
      x: Math.round((a.videoWidth - b) / 2),
      y: Math.round((a.videoHeight - b) / 2),
      width: b,
      height: b,
      downScaledWidth: this._legacyCanvasSize,
      downScaledHeight: this._legacyCanvasSize
    };
  }
  _updateOverlay() {
    requestAnimationFrame(() => {
      if (this.$overlay) {
        var a = this.$video,
          b = a.videoWidth,
          c = a.videoHeight,
          d = a.offsetWidth,
          f = a.offsetHeight,
          h = a.offsetLeft,
          m = a.offsetTop,
          n = window.getComputedStyle(a),
          p = n.objectFit,
          k = b / c,
          q = d / f;
        switch (p) {
          case "none":
            var g = b;
            var l = c;
            break;
          case "fill":
            g = d;
            l = f;
            break;
          default:
            ("cover" === p ? k > q : k < q) ? (l = f, g = l * k) : (g = d, l = g / k), "scale-down" === p && (g = Math.min(g, b), l = Math.min(l, c));
        }
        var [v, w] = n.objectPosition.split(" ").map((r, y) => {
          const x = parseFloat(r);
          return r.endsWith("%") ? (y ? f - l : d - g) * x / 100 : x;
        });
        n = this._scanRegion.width || b;
        q = this._scanRegion.height || c;
        p = this._scanRegion.x || 0;
        var u = this._scanRegion.y || 0;
        k = this.$overlay.style;
        k.width = `${n / b * g}px`;
        k.height = `${q / c * l}px`;
        k.top = `${m + w + u / c * l}px`;
        c = /scaleX\(-1\)/.test(a.style.transform);
        k.left = `${h + (c ? d - v - g : v) + (c ? b - p - n : p) / b * g}px`;
        k.transform = a.style.transform;
      }
    });
  }
  static _convertPoints(a, b) {
    if (!b) return a;
    let c = b.x || 0,
      d = b.y || 0,
      f = b.width && b.downScaledWidth ? b.width / b.downScaledWidth : 1;
    b = b.height && b.downScaledHeight ? b.height / b.downScaledHeight : 1;
    for (let h of a) h.x = h.x * f + c, h.y = h.y * b + d;
    return a;
  }
  _scanFrame() {
    var _this8 = this;
    !this._active || this.$video.paused || this.$video.ended || ("requestVideoFrameCallback" in this.$video ? this.$video.requestVideoFrameCallback.bind(this.$video) : requestAnimationFrame)( /*#__PURE__*/(0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!(1 >= _this8.$video.readyState)) {
        var a = Date.now() - _this8._lastScanTimestamp,
          b = 1E3 / _this8._maxScansPerSecond;
        a < b && (yield new Promise(d => setTimeout(d, b - a)));
        _this8._lastScanTimestamp = Date.now();
        try {
          var c = yield e.scanImage(_this8.$video, {
            scanRegion: _this8._scanRegion,
            qrEngine: _this8._qrEnginePromise,
            canvas: _this8.$canvas
          });
        } catch (d) {
          if (!_this8._active) return;
          _this8._onDecodeError(d);
        }
        !e._disableBarcodeDetector || (yield _this8._qrEnginePromise) instanceof Worker || (_this8._qrEnginePromise = e.createQrEngine());
        c ? (_this8._onDecode ? _this8._onDecode(c) : _this8._legacyOnDecode && _this8._legacyOnDecode(c.data), _this8.$codeOutlineHighlight && (clearTimeout(_this8._codeOutlineHighlightRemovalTimeout), _this8._codeOutlineHighlightRemovalTimeout = void 0, _this8.$codeOutlineHighlight.setAttribute("viewBox", `${_this8._scanRegion.x || 0} ` + `${_this8._scanRegion.y || 0} ` + `${_this8._scanRegion.width || _this8.$video.videoWidth} ` + `${_this8._scanRegion.height || _this8.$video.videoHeight}`), _this8.$codeOutlineHighlight.firstElementChild.setAttribute("points", c.cornerPoints.map(({
          x: d,
          y: f
        }) => `${d},${f}`).join(" ")), _this8.$codeOutlineHighlight.style.display = "")) : _this8.$codeOutlineHighlight && !_this8._codeOutlineHighlightRemovalTimeout && (_this8._codeOutlineHighlightRemovalTimeout = setTimeout(() => _this8.$codeOutlineHighlight.style.display = "none", 100));
      }
      _this8._scanFrame();
    }));
  }
  _onDecodeError(a) {
    a !== e.NO_QR_CODE_FOUND && console.log(a);
  }
  _getCameraStream() {
    var _this9 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!navigator.mediaDevices) throw "Camera not found.";
      let a = /^(environment|user)$/.test(_this9._preferredCamera) ? "facingMode" : "deviceId",
        b = [{
          width: {
            min: 1024
          }
        }, {
          width: {
            min: 768
          }
        }, {}],
        c = b.map(d => Object.assign({}, d, {
          [a]: {
            exact: _this9._preferredCamera
          }
        }));
      for (let d of [...c, ...b]) try {
        let f = yield navigator.mediaDevices.getUserMedia({
            video: d,
            audio: !1
          }),
          h = _this9._getFacingMode(f) || (d.facingMode ? _this9._preferredCamera : "environment" === _this9._preferredCamera ? "user" : "environment");
        return {
          stream: f,
          facingMode: h
        };
      } catch (f) {}
      throw "Camera not found.";
    })();
  }
  _restartVideoStream() {
    var _this10 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let a = _this10._paused;
      (yield _this10.pause(!0)) && !a && _this10._active && (yield _this10.start());
    })();
  }
  static _stopVideoStream(a) {
    for (let b of a.getTracks()) b.stop(), a.removeTrack(b);
  }
  _setVideoMirror(a) {
    this.$video.style.transform = "scaleX(" + ("user" === a ? -1 : 1) + ")";
  }
  _getFacingMode(a) {
    return (a = a.getVideoTracks()[0]) ? /rear|back|environment/i.test(a.label) ? "environment" : /front|user|face/i.test(a.label) ? "user" : null : null;
  }
  static _drawToCanvas(a, b, c, d = !1) {
    c = c || document.createElement("canvas");
    let f = b && b.x ? b.x : 0,
      h = b && b.y ? b.y : 0,
      m = b && b.width ? b.width : a.videoWidth || a.width,
      n = b && b.height ? b.height : a.videoHeight || a.height;
    d || (d = b && b.downScaledWidth ? b.downScaledWidth : m, b = b && b.downScaledHeight ? b.downScaledHeight : n, c.width !== d && (c.width = d), c.height !== b && (c.height = b));
    b = c.getContext("2d", {
      alpha: !1
    });
    b.imageSmoothingEnabled = !1;
    b.drawImage(a, f, h, m, n, 0, 0, c.width, c.height);
    return [c, b];
  }
  static _loadImage(a) {
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (a instanceof Image) return yield e._awaitImageLoad(a), a;
      if (a instanceof HTMLVideoElement || a instanceof HTMLCanvasElement || a instanceof SVGImageElement || "OffscreenCanvas" in window && a instanceof OffscreenCanvas || "ImageBitmap" in window && a instanceof ImageBitmap) return a;
      if (a instanceof File || a instanceof Blob || a instanceof URL || "string" === typeof a) {
        let b = new Image();
        b.src = a instanceof File || a instanceof Blob ? URL.createObjectURL(a) : a.toString();
        try {
          return yield e._awaitImageLoad(b), b;
        } finally {
          (a instanceof File || a instanceof Blob) && URL.revokeObjectURL(b.src);
        }
      } else throw "Unsupported image type.";
    })();
  }
  static _awaitImageLoad(a) {
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      a.complete && 0 !== a.naturalWidth || (yield new Promise((b, c) => {
        let d = f => {
          a.removeEventListener("load", d);
          a.removeEventListener("error", d);
          f instanceof ErrorEvent ? c("Image load error") : b();
        };
        a.addEventListener("load", d);
        a.addEventListener("error", d);
      }));
    })();
  }
  static _postWorkerMessage(a, b, c, d) {
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return e._postWorkerMessageSync(yield a, b, c, d);
    })();
  }
  static _postWorkerMessageSync(a, b, c, d) {
    if (!(a instanceof Worker)) return -1;
    let f = e._workerMessageId++;
    a.postMessage({
      id: f,
      type: b,
      data: c
    }, d);
    return f;
  }
}
e.DEFAULT_CANVAS_SIZE = 400;
e.NO_QR_CODE_FOUND = "No QR code found";
e._disableBarcodeDetector = !1;
e._workerMessageId = 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (e);

/***/ }),

/***/ 38223:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/tabs.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_TAB: () => (/* binding */ MAT_TAB),
/* harmony export */   MAT_TABS_CONFIG: () => (/* binding */ MAT_TABS_CONFIG),
/* harmony export */   MAT_TAB_CONTENT: () => (/* binding */ MAT_TAB_CONTENT),
/* harmony export */   MAT_TAB_GROUP: () => (/* binding */ MAT_TAB_GROUP),
/* harmony export */   MAT_TAB_LABEL: () => (/* binding */ MAT_TAB_LABEL),
/* harmony export */   MatInkBar: () => (/* binding */ MatInkBar),
/* harmony export */   MatPaginatedTabHeader: () => (/* binding */ MatPaginatedTabHeader),
/* harmony export */   MatTab: () => (/* binding */ MatTab),
/* harmony export */   MatTabBody: () => (/* binding */ MatTabBody),
/* harmony export */   MatTabBodyPortal: () => (/* binding */ MatTabBodyPortal),
/* harmony export */   MatTabChangeEvent: () => (/* binding */ MatTabChangeEvent),
/* harmony export */   MatTabContent: () => (/* binding */ MatTabContent),
/* harmony export */   MatTabGroup: () => (/* binding */ MatTabGroup),
/* harmony export */   MatTabHeader: () => (/* binding */ MatTabHeader),
/* harmony export */   MatTabLabel: () => (/* binding */ MatTabLabel),
/* harmony export */   MatTabLabelWrapper: () => (/* binding */ MatTabLabelWrapper),
/* harmony export */   MatTabLink: () => (/* binding */ MatTabLink),
/* harmony export */   MatTabNav: () => (/* binding */ MatTabNav),
/* harmony export */   MatTabNavPanel: () => (/* binding */ MatTabNavPanel),
/* harmony export */   MatTabsModule: () => (/* binding */ MatTabsModule),
/* harmony export */   _MAT_INK_BAR_POSITIONER: () => (/* binding */ _MAT_INK_BAR_POSITIONER),
/* harmony export */   _MAT_INK_BAR_POSITIONER_FACTORY: () => (/* binding */ _MAT_INK_BAR_POSITIONER_FACTORY),
/* harmony export */   matTabsAnimations: () => (/* binding */ matTabsAnimations)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ 9168);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 33119);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 47557);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 71536);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 97405);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 24380);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 67498);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 26320);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 2842);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/scrolling */ 79975);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ 17699);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/bidi */ 63680);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/a11y */ 72102);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/keycodes */ 74879);
/* harmony import */ var _angular_cdk_observers_private__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/observers/private */ 98615);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 67464);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 19803);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 89273);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 61314);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs/operators */ 6109);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/observers */ 39539);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/animations */ 47172);



















/**
 * Injection token that can be used to reference instances of `MatTabContent`. It serves as
 * alternative token to the actual `MatTabContent` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const _c0 = ["*"];
function MatTab_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
  }
}
const _c1 = ["tabListContainer"];
const _c2 = ["tabList"];
const _c3 = ["tabListInner"];
const _c4 = ["nextPaginator"];
const _c5 = ["previousPaginator"];
const _c6 = a0 => ({
  animationDuration: a0
});
const _c7 = (a0, a1) => ({
  value: a0,
  params: a1
});
function MatTabBody_ng_template_2_Template(rf, ctx) {}
const _c8 = ["tabBodyWrapper"];
const _c9 = ["tabHeader"];
function MatTabGroup_For_3_Conditional_6_ng_template_0_Template(rf, ctx) {}
function MatTabGroup_For_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatTabGroup_For_3_Conditional_6_ng_template_0_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const tab_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", tab_r4.templateLabel);
  }
}
function MatTabGroup_For_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const tab_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r4.textLabel);
  }
}
function MatTabGroup_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatTabGroup_For_3_Template_div_click_0_listener() {
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const tab_r4 = ctx_r2.$implicit;
      const ɵ$index_3_r5 = ctx_r2.$index;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const tabHeader_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5._handleClick(tab_r4, tabHeader_r7, ɵ$index_3_r5));
    })("cdkFocusChange", function MatTabGroup_For_3_Template_div_cdkFocusChange_0_listener($event) {
      const ɵ$index_3_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2).$index;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5._tabFocusChanged($event, ɵ$index_3_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 8)(3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 10)(5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MatTabGroup_For_3_Conditional_6_Template, 1, 1, null, 12)(7, MatTabGroup_For_3_Conditional_7_Template, 1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const ɵ$index_3_r5 = ctx.$index;
    const tabNode_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](tab_r4.labelClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-tab--active", ctx_r5.selectedIndex === ɵ$index_3_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r5._getTabLabelId(ɵ$index_3_r5))("disabled", tab_r4.disabled)("fitInkBarToContent", ctx_r5.fitInkBarToContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabIndex", ctx_r5._getTabIndex(ɵ$index_3_r5))("aria-posinset", ɵ$index_3_r5 + 1)("aria-setsize", ctx_r5._tabs.length)("aria-controls", ctx_r5._getTabContentId(ɵ$index_3_r5))("aria-selected", ctx_r5.selectedIndex === ɵ$index_3_r5)("aria-label", tab_r4.ariaLabel || null)("aria-labelledby", !tab_r4.ariaLabel && tab_r4.ariaLabelledby ? tab_r4.ariaLabelledby : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", tabNode_r8)("matRippleDisabled", tab_r4.disabled || ctx_r5.disableRipple);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](tab_r4.templateLabel ? 6 : 7);
  }
}
function MatTabGroup_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
  }
}
function MatTabGroup_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-body", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("_onCentered", function MatTabGroup_For_8_Template_mat_tab_body__onCentered_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5._removeTabBodyWrapperHeight());
    })("_onCentering", function MatTabGroup_For_8_Template_mat_tab_body__onCentering_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5._setTabBodyWrapperHeight($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_r10 = ctx.$implicit;
    const ɵ$index_23_r11 = ctx.$index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](tab_r10.bodyClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tab-body-active", ctx_r5.selectedIndex === ɵ$index_23_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r5._getTabContentId(ɵ$index_23_r11))("content", tab_r10.content)("position", tab_r10.position)("origin", tab_r10.origin)("animationDuration", ctx_r5.animationDuration)("preserveContent", ctx_r5.preserveContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r5.contentTabIndex != null && ctx_r5.selectedIndex === ɵ$index_23_r11 ? ctx_r5.contentTabIndex : null)("aria-labelledby", ctx_r5._getTabLabelId(ɵ$index_23_r11))("aria-hidden", ctx_r5.selectedIndex !== ɵ$index_23_r11);
  }
}
const _c10 = ["mat-tab-nav-bar", ""];
const _c11 = ["mat-tab-link", ""];
const MAT_TAB_CONTENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatTabContent');
/** Decorates the `ng-template` tags and reads out the template from it. */
class MatTabContent {
  constructor( /** Content for the tab. */template) {
    this.template = template;
  }
  static #_ = this.ɵfac = function MatTabContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatTabContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatTabContent,
    selectors: [["", "matTabContent", ""]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: MAT_TAB_CONTENT,
      useExisting: MatTabContent
    }])]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matTabContent]',
      providers: [{
        provide: MAT_TAB_CONTENT,
        useExisting: MatTabContent
      }],
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
  }], null);
})();

/**
 * Injection token that can be used to reference instances of `MatTabLabel`. It serves as
 * alternative token to the actual `MatTabLabel` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_TAB_LABEL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatTabLabel');
/**
 * Used to provide a tab label to a tab without causing a circular dependency.
 * @docs-private
 */
const MAT_TAB = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_TAB');
/** Used to flag tab labels for use with the portal directive */
class MatTabLabel extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.CdkPortal {
  constructor(templateRef, viewContainerRef, _closestTab) {
    super(templateRef, viewContainerRef);
    this._closestTab = _closestTab;
  }
  static #_ = this.ɵfac = function MatTabLabel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatTabLabel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_TAB, 8));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatTabLabel,
    selectors: [["", "mat-tab-label", ""], ["", "matTabLabel", ""]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: MAT_TAB_LABEL,
      useExisting: MatTabLabel
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabLabel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-tab-label], [matTabLabel]',
      providers: [{
        provide: MAT_TAB_LABEL,
        useExisting: MatTabLabel
      }],
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [MAT_TAB]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }], null);
})();

/**
 * Used to provide a tab group to a tab without causing a circular dependency.
 * @docs-private
 */
const MAT_TAB_GROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_TAB_GROUP');
class MatTab {
  /** Content for the tab label given by `<ng-template mat-tab-label>`. */
  get templateLabel() {
    return this._templateLabel;
  }
  set templateLabel(value) {
    this._setTemplateLabelInput(value);
  }
  /** @docs-private */
  get content() {
    return this._contentPortal;
  }
  constructor(_viewContainerRef, _closestTabGroup) {
    this._viewContainerRef = _viewContainerRef;
    this._closestTabGroup = _closestTabGroup;
    /** whether the tab is disabled. */
    this.disabled = false;
    /**
     * Template provided in the tab content that will be used if present, used to enable lazy-loading
     */
    this._explicitContent = undefined;
    /** Plain text label for the tab, used when there is no template label. */
    this.textLabel = '';
    /** Portal that will be the hosted content of the tab */
    this._contentPortal = null;
    /** Emits whenever the internal state of the tab changes. */
    this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
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
  ngOnChanges(changes) {
    if (changes.hasOwnProperty('textLabel') || changes.hasOwnProperty('disabled')) {
      this._stateChanges.next();
    }
  }
  ngOnDestroy() {
    this._stateChanges.complete();
  }
  ngOnInit() {
    this._contentPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.TemplatePortal(this._explicitContent || this._implicitContent, this._viewContainerRef);
  }
  /**
   * This has been extracted to a util because of TS 4 and VE.
   * View Engine doesn't support property rename inheritance.
   * TS 4.0 doesn't allow properties to override accessors or vice-versa.
   * @docs-private
   */
  _setTemplateLabelInput(value) {
    // Only update the label if the query managed to find one. This works around an issue where a
    // user may have manually set `templateLabel` during creation mode, which would then get
    // clobbered by `undefined` when the query resolves. Also note that we check that the closest
    // tab matches the current one so that we don't pick up labels from nested tabs.
    if (value && value._closestTab === this) {
      this._templateLabel = value;
    }
  }
  static #_ = this.ɵfac = function MatTab_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatTab)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_TAB_GROUP, 8));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatTab,
    selectors: [["mat-tab"]],
    contentQueries: function MatTab_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatTabLabel, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatTabContent, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templateLabel = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._explicitContent = _t.first);
      }
    },
    viewQuery: function MatTab_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._implicitContent = _t.first);
      }
    },
    hostAttrs: ["hidden", ""],
    inputs: {
      disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      textLabel: [0, "label", "textLabel"],
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      labelClass: "labelClass",
      bodyClass: "bodyClass"
    },
    exportAs: ["matTab"],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: MAT_TAB,
      useExisting: MatTab
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function MatTab_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatTab_ng_template_0_Template, 1, 0, "ng-template");
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTab, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-tab',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      exportAs: 'matTab',
      providers: [{
        provide: MAT_TAB,
        useExisting: MatTab
      }],
      standalone: true,
      host: {
        // This element will be rendered on the server in order to support hydration.
        // Hide it so it doesn't cause a layout shift when it's removed on the client.
        'hidden': ''
      },
      template: "<!-- Create a template for the content of the <mat-tab> so that we can grab a reference to this\n    TemplateRef and use it in a Portal to render the tab content in the appropriate place in the\n    tab-group. -->\n<ng-template><ng-content></ng-content></ng-template>\n"
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [MAT_TAB_GROUP]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }], {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    templateLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MatTabLabel]
    }],
    _explicitContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MatTabContent, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
        static: true
      }]
    }],
    _implicitContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, {
        static: true
      }]
    }],
    textLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['label']
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-label']
    }],
    ariaLabelledby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-labelledby']
    }],
    labelClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    bodyClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/** Class that is applied when a tab indicator is active. */
const ACTIVE_CLASS = 'mdc-tab-indicator--active';
/** Class that is applied when the tab indicator should not transition. */
const NO_TRANSITION_CLASS = 'mdc-tab-indicator--no-transition';
/**
 * Abstraction around the MDC tab indicator that acts as the tab header's ink bar.
 * @docs-private
 */
class MatInkBar {
  constructor(_items) {
    this._items = _items;
  }
  /** Hides the ink bar. */
  hide() {
    this._items.forEach(item => item.deactivateInkBar());
  }
  /** Aligns the ink bar to a DOM node. */
  alignToElement(element) {
    const correspondingItem = this._items.find(item => item.elementRef.nativeElement === element);
    const currentItem = this._currentItem;
    if (correspondingItem === currentItem) {
      return;
    }
    currentItem?.deactivateInkBar();
    if (correspondingItem) {
      const domRect = currentItem?.elementRef.nativeElement.getBoundingClientRect?.();
      // The ink bar won't animate unless we give it the `DOMRect` of the previous item.
      correspondingItem.activateInkBar(domRect);
      this._currentItem = correspondingItem;
    }
  }
}
class InkBarItem {
  constructor() {
    this._elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    this._fitToContent = false;
  }
  /** Whether the ink bar should fit to the entire tab or just its content. */
  get fitInkBarToContent() {
    return this._fitToContent;
  }
  set fitInkBarToContent(newValue) {
    if (this._fitToContent !== newValue) {
      this._fitToContent = newValue;
      if (this._inkBarElement) {
        this._appendInkBarElement();
      }
    }
  }
  /** Aligns the ink bar to the current item. */
  activateInkBar(previousIndicatorClientRect) {
    const element = this._elementRef.nativeElement;
    // Early exit if no indicator is present to handle cases where an indicator
    // may be activated without a prior indicator state
    if (!previousIndicatorClientRect || !element.getBoundingClientRect || !this._inkBarContentElement) {
      element.classList.add(ACTIVE_CLASS);
      return;
    }
    // This animation uses the FLIP approach. You can read more about it at the link below:
    // https://aerotwist.com/blog/flip-your-animations/
    // Calculate the dimensions based on the dimensions of the previous indicator
    const currentClientRect = element.getBoundingClientRect();
    const widthDelta = previousIndicatorClientRect.width / currentClientRect.width;
    const xPosition = previousIndicatorClientRect.left - currentClientRect.left;
    element.classList.add(NO_TRANSITION_CLASS);
    this._inkBarContentElement.style.setProperty('transform', `translateX(${xPosition}px) scaleX(${widthDelta})`);
    // Force repaint before updating classes and transform to ensure the transform properly takes effect
    element.getBoundingClientRect();
    element.classList.remove(NO_TRANSITION_CLASS);
    element.classList.add(ACTIVE_CLASS);
    this._inkBarContentElement.style.setProperty('transform', '');
  }
  /** Removes the ink bar from the current item. */
  deactivateInkBar() {
    this._elementRef.nativeElement.classList.remove(ACTIVE_CLASS);
  }
  /** Initializes the foundation. */
  ngOnInit() {
    this._createInkBarElement();
  }
  /** Destroys the foundation. */
  ngOnDestroy() {
    this._inkBarElement?.remove();
    this._inkBarElement = this._inkBarContentElement = null;
  }
  /** Creates and appends the ink bar element. */
  _createInkBarElement() {
    const documentNode = this._elementRef.nativeElement.ownerDocument || document;
    const inkBarElement = this._inkBarElement = documentNode.createElement('span');
    const inkBarContentElement = this._inkBarContentElement = documentNode.createElement('span');
    inkBarElement.className = 'mdc-tab-indicator';
    inkBarContentElement.className = 'mdc-tab-indicator__content mdc-tab-indicator__content--underline';
    inkBarElement.appendChild(this._inkBarContentElement);
    this._appendInkBarElement();
  }
  /**
   * Appends the ink bar to the tab host element or content, depending on whether
   * the ink bar should fit to content.
   */
  _appendInkBarElement() {
    if (!this._inkBarElement && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error('Ink bar element has not been created and cannot be appended');
    }
    const parentElement = this._fitToContent ? this._elementRef.nativeElement.querySelector('.mdc-tab__content') : this._elementRef.nativeElement;
    if (!parentElement && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error('Missing element to host the ink bar');
    }
    parentElement.appendChild(this._inkBarElement);
  }
  static #_ = this.ɵfac = function InkBarItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || InkBarItem)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: InkBarItem,
    inputs: {
      fitInkBarToContent: [2, "fitInkBarToContent", "fitInkBarToContent", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InkBarItem, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], null, {
    fitInkBarToContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }]
  });
})();
/**
 * The default positioner function for the MatInkBar.
 * @docs-private
 */
function _MAT_INK_BAR_POSITIONER_FACTORY() {
  const method = element => ({
    left: element ? (element.offsetLeft || 0) + 'px' : '0',
    width: element ? (element.offsetWidth || 0) + 'px' : '0'
  });
  return method;
}
/** Injection token for the MatInkBar's Positioner. */
const _MAT_INK_BAR_POSITIONER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatInkBarPositioner', {
  providedIn: 'root',
  factory: _MAT_INK_BAR_POSITIONER_FACTORY
});

/**
 * Used in the `mat-tab-group` view to display tab labels.
 * @docs-private
 */
class MatTabLabelWrapper extends InkBarItem {
  constructor(elementRef) {
    super();
    this.elementRef = elementRef;
    /** Whether the tab is disabled. */
    this.disabled = false;
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
  static #_ = this.ɵfac = function MatTabLabelWrapper_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatTabLabelWrapper)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatTabLabelWrapper,
    selectors: [["", "matTabLabelWrapper", ""]],
    hostVars: 3,
    hostBindings: function MatTabLabelWrapper_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-disabled", !!ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tab-disabled", ctx.disabled);
      }
    },
    inputs: {
      disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabLabelWrapper, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matTabLabelWrapper]',
      host: {
        '[class.mat-mdc-tab-disabled]': 'disabled',
        '[attr.aria-disabled]': '!!disabled'
      },
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }], {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }]
  });
})();

/** Config used to bind passive event listeners */
const passiveEventListenerOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.normalizePassiveListenerOptions)({
  passive: true
});
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
  /** The index of the active tab. */
  get selectedIndex() {
    return this._selectedIndex;
  }
  set selectedIndex(v) {
    const value = isNaN(v) ? 0 : v;
    if (this._selectedIndex != value) {
      this._selectedIndexChanged = true;
      this._selectedIndex = value;
      if (this._keyManager) {
        this._keyManager.updateActiveItem(value);
      }
    }
  }
  constructor(_elementRef, _changeDetectorRef, _viewportRuler, _dir, _ngZone, _platform, _animationMode) {
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
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Whether the controls for pagination should be displayed */
    this._showPaginationControls = false;
    /** Whether the tab list can be scrolled more towards the end of the tab label list. */
    this._disableScrollAfter = true;
    /** Whether the tab list can be scrolled more towards the beginning of the tab label list. */
    this._disableScrollBefore = true;
    /** Stream that will stop the automated scrolling. */
    this._stopScrolling = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /**
     * Whether pagination should be disabled. This can be used to avoid unnecessary
     * layout recalculations if it's known that pagination won't be required.
     */
    this.disablePagination = false;
    this._selectedIndex = 0;
    /** Event emitted when the option is selected. */
    this.selectFocusedIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when a label is focused. */
    this.indexFocused = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._sharedResizeObserver = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_observers_private__WEBPACK_IMPORTED_MODULE_4__.SharedResizeObserver);
    this._injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
    // Bind the `mouseleave` event on the outside since it doesn't change anything in the view.
    _ngZone.runOutsideAngular(() => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(_elementRef.nativeElement, 'mouseleave').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed)).subscribe(() => {
        this._stopInterval();
      });
    });
  }
  ngAfterViewInit() {
    // We need to handle these events manually, because we want to bind passive event listeners.
    (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(this._previousPaginator.nativeElement, 'touchstart', passiveEventListenerOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed)).subscribe(() => {
      this._handlePaginatorPress('before');
    });
    (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(this._nextPaginator.nativeElement, 'touchstart', passiveEventListenerOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed)).subscribe(() => {
      this._handlePaginatorPress('after');
    });
  }
  ngAfterContentInit() {
    const dirChange = this._dir ? this._dir.change : (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)('ltr');
    // We need to debounce resize events because the alignment logic is expensive.
    // If someone animates the width of tabs, we don't want to realign on every animation frame.
    // Once we haven't seen any more resize events in the last 32ms (~2 animaion frames) we can
    // re-align.
    const resize = this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(32), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed));
    // Note: We do not actually need to watch these events for proper functioning of the tabs,
    // the resize events above should capture any viewport resize that we care about. However,
    // removing this is fairly breaking for screenshot tests, so we're leaving it here for now.
    const viewportResize = this._viewportRuler.change(150).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed));
    const realign = () => {
      this.updatePagination();
      this._alignInkBarToSelectedTab();
    };
    this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__.FocusKeyManager(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap()
    // Allow focus to land on disabled tabs, as per https://w3c.github.io/aria-practices/#kbd_disabled_controls
    .skipPredicate(() => false);
    this._keyManager.updateActiveItem(this._selectedIndex);
    // Note: We do not need to realign after the first render for proper functioning of the tabs
    // the resize events above should fire when we first start observing the element. However,
    // removing this is fairly breaking for screenshot tests, so we're leaving it here for now.
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.afterNextRender)(realign, {
      injector: this._injector
    });
    // On dir change or resize, realign the ink bar and update the orientation of
    // the key manager if the direction has changed.
    (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.merge)(dirChange, viewportResize, resize, this._items.changes, this._itemsResized()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed)).subscribe(() => {
      // We need to defer this to give the browser some time to recalculate
      // the element dimensions. The call has to be wrapped in `NgZone.run`,
      // because the viewport change handler runs outside of Angular.
      this._ngZone.run(() => {
        Promise.resolve().then(() => {
          // Clamp the scroll distance, because it can change with the number of tabs.
          this._scrollDistance = Math.max(0, Math.min(this._getMaxScrollDistance(), this._scrollDistance));
          realign();
        });
      });
      this._keyManager.withHorizontalOrientation(this._getLayoutDirection());
    });
    // If there is a change in the focus key manager we need to emit the `indexFocused`
    // event in order to provide a public event that notifies about focus changes. Also we realign
    // the tabs container by scrolling the new focused tab into the visible section.
    this._keyManager.change.subscribe(newFocusIndex => {
      this.indexFocused.emit(newFocusIndex);
      this._setTabFocus(newFocusIndex);
    });
  }
  /** Sends any changes that could affect the layout of the items. */
  _itemsResized() {
    if (typeof ResizeObserver !== 'function') {
      return rxjs__WEBPACK_IMPORTED_MODULE_11__.EMPTY;
    }
    return this._items.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.startWith)(this._items), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(tabItems => new rxjs__WEBPACK_IMPORTED_MODULE_14__.Observable(observer => this._ngZone.runOutsideAngular(() => {
      const resizeObserver = new ResizeObserver(entries => observer.next(entries));
      tabItems.forEach(item => resizeObserver.observe(item.elementRef.nativeElement));
      return () => {
        resizeObserver.disconnect();
      };
    }))),
    // Skip the first emit since the resize observer emits when an item
    // is observed for new items when the tab is already inserted
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.skip)(1),
    // Skip emissions where all the elements are invisible since we don't want
    // the header to try and re-render with invalid measurements. See #25574.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(entries => entries.some(e => e.contentRect.width > 0 && e.contentRect.height > 0)));
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
    this._keyManager?.destroy();
    this._destroyed.next();
    this._destroyed.complete();
    this._stopScrolling.complete();
  }
  /** Handles keyboard events on the header. */
  _handleKeydown(event) {
    // We don't handle any key bindings with a modifier key.
    if ((0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.hasModifierKey)(event)) {
      return;
    }
    switch (event.keyCode) {
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.ENTER:
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.SPACE:
        if (this.focusIndex !== this.selectedIndex) {
          const item = this._items.get(this.focusIndex);
          if (item && !item.disabled) {
            this.selectFocusedIndex.emit(this.focusIndex);
            this._itemSelected(event);
          }
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
    return this._items ? !!this._items.toArray()[index] : true;
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
      } else {
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
    if (this._platform.TRIDENT || this._platform.EDGE) {
      this._tabListContainer.nativeElement.scrollLeft = 0;
    }
  }
  /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */
  get scrollDistance() {
    return this._scrollDistance;
  }
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
    const {
      offsetLeft,
      offsetWidth
    } = selectedLabel.elementRef.nativeElement;
    let labelBeforePos, labelAfterPos;
    if (this._getLayoutDirection() == 'ltr') {
      labelBeforePos = offsetLeft;
      labelAfterPos = labelBeforePos + offsetWidth;
    } else {
      labelAfterPos = this._tabListInner.nativeElement.offsetWidth - offsetLeft;
      labelBeforePos = labelAfterPos - offsetWidth;
    }
    const beforeVisiblePos = this.scrollDistance;
    const afterVisiblePos = this.scrollDistance + viewLength;
    if (labelBeforePos < beforeVisiblePos) {
      // Scroll header to move label to the before direction
      this.scrollDistance -= beforeVisiblePos - labelBeforePos;
    } else if (labelAfterPos > afterVisiblePos) {
      // Scroll header to move label to the after direction
      this.scrollDistance += Math.min(labelAfterPos - afterVisiblePos, labelBeforePos - beforeVisiblePos);
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
    } else {
      const scrollWidth = this._tabListInner.nativeElement.scrollWidth;
      const containerWidth = this._elementRef.nativeElement.offsetWidth;
      // Usually checking that the scroll width is greater than the container width should be
      // enough, but on Safari at specific widths the browser ends up rounding up when there's
      // no pagination and rounding down once the pagination is added. This can throw the component
      // into an infinite loop where the pagination shows up and disappears constantly. We work
      // around it by adding a threshold to the calculation. From manual testing the threshold
      // can be lowered to 2px and still resolve the issue, but we set a higher one to be safe.
      // This shouldn't cause any content to be clipped, because tabs have a 24px horizontal
      // padding. See b/316395154 for more information.
      const isEnabled = scrollWidth - containerWidth >= 5;
      if (!isEnabled) {
        this.scrollDistance = 0;
      }
      if (isEnabled !== this._showPaginationControls) {
        this._showPaginationControls = isEnabled;
        this._changeDetectorRef.markForCheck();
      }
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
    } else {
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
    const lengthOfTabList = this._tabListInner.nativeElement.scrollWidth;
    const viewLength = this._tabListContainer.nativeElement.offsetWidth;
    return lengthOfTabList - viewLength || 0;
  }
  /** Tells the ink-bar to align itself to the current label wrapper */
  _alignInkBarToSelectedTab() {
    const selectedItem = this._items && this._items.length ? this._items.toArray()[this.selectedIndex] : null;
    const selectedLabelWrapper = selectedItem ? selectedItem.elementRef.nativeElement : null;
    if (selectedLabelWrapper) {
      this._inkBar.alignToElement(selectedLabelWrapper);
    } else {
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
    (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.timer)(HEADER_SCROLL_DELAY, HEADER_SCROLL_INTERVAL)
    // Keep the timer going until something tells it to stop or the component is destroyed.
    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.merge)(this._stopScrolling, this._destroyed))).subscribe(() => {
      const {
        maxScrollDistance,
        distance
      } = this._scrollHeader(direction);
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
      return {
        maxScrollDistance: 0,
        distance: 0
      };
    }
    const maxScrollDistance = this._getMaxScrollDistance();
    this._scrollDistance = Math.max(0, Math.min(maxScrollDistance, position));
    // Mark that the scroll distance has changed so that after the view is checked, the CSS
    // transformation can move the header.
    this._scrollDistanceChanged = true;
    this._checkScrollingControls();
    return {
      maxScrollDistance,
      distance: this._scrollDistance
    };
  }
  static #_ = this.ɵfac = function MatPaginatedTabHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatPaginatedTabHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatPaginatedTabHeader,
    inputs: {
      disablePagination: [2, "disablePagination", "disablePagination", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      selectedIndex: [2, "selectedIndex", "selectedIndex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute]
    },
    outputs: {
      selectFocusedIndex: "selectFocusedIndex",
      indexFocused: "indexFocused"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPaginatedTabHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__.ViewportRuler
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__.Directionality,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.Platform
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
    }]
  }], {
    disablePagination: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    selectedIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    selectFocusedIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    indexFocused: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

/**
 * The header of the tab group which displays a list of all the tabs in the tab group. Includes
 * an ink bar that follows the currently selected tab. When the tabs list's width exceeds the
 * width of the header container, then arrows will be displayed to allow the user to scroll
 * left and right across the header.
 * @docs-private
 */
class MatTabHeader extends MatPaginatedTabHeader {
  constructor(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode) {
    super(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
    /** Whether the ripple effect is disabled or not. */
    this.disableRipple = false;
  }
  ngAfterContentInit() {
    this._inkBar = new MatInkBar(this._items);
    super.ngAfterContentInit();
  }
  _itemSelected(event) {
    event.preventDefault();
  }
  static #_ = this.ɵfac = function MatTabHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatTabHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatTabHeader,
    selectors: [["mat-tab-header"]],
    contentQueries: function MatTabHeader_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatTabLabelWrapper, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._items = _t);
      }
    },
    viewQuery: function MatTabHeader_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabListContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabList = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabListInner = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._nextPaginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._previousPaginator = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-tab-header"],
    hostVars: 4,
    hostBindings: function MatTabHeader_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-mdc-tab-header-rtl", ctx._getLayoutDirection() == "rtl");
      }
    },
    inputs: {
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      disableRipple: [2, "disableRipple", "disableRipple", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c0,
    decls: 13,
    vars: 10,
    consts: [["previousPaginator", ""], ["tabListContainer", ""], ["tabList", ""], ["tabListInner", ""], ["nextPaginator", ""], ["mat-ripple", "", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-before", 3, "click", "mousedown", "touchend", "matRippleDisabled"], [1, "mat-mdc-tab-header-pagination-chevron"], [1, "mat-mdc-tab-label-container", 3, "keydown"], ["role", "tablist", 1, "mat-mdc-tab-list", 3, "cdkObserveContent"], [1, "mat-mdc-tab-labels"], ["mat-ripple", "", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-after", 3, "mousedown", "click", "touchend", "matRippleDisabled"]],
    template: function MatTabHeader_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatTabHeader_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._handlePaginatorClick("before"));
        })("mousedown", function MatTabHeader_Template_div_mousedown_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._handlePaginatorPress("before", $event));
        })("touchend", function MatTabHeader_Template_div_touchend_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._stopInterval());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MatTabHeader_Template_div_keydown_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._handleKeydown($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkObserveContent", function MatTabHeader_Template_div_cdkObserveContent_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._onContentChanges());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function MatTabHeader_Template_div_mousedown_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._handlePaginatorPress("after", $event));
        })("click", function MatTabHeader_Template_div_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._handlePaginatorClick("after"));
        })("touchend", function MatTabHeader_Template_div_touchend_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._stopInterval());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollBefore);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby || null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollAfter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple);
      }
    },
    dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatRipple, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_22__.CdkObserveContent],
    styles: [".mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;outline:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-header-pagination-icon-color, var(--mat-app-on-surface))}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}.mat-mdc-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-header-divider-height);border-bottom-color:var(--mat-tab-header-divider-color, var(--mat-app-surface-variant))}.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container{border-bottom:none;border-top-style:solid;border-top-width:var(--mat-tab-header-divider-height);border-top-color:var(--mat-tab-header-divider-color, var(--mat-app-surface-variant))}.mat-mdc-tab-labels{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:flex-end}.cdk-drop-list .mat-mdc-tab-labels,.mat-mdc-tab-labels.cdk-drop-list{min-height:var(--mdc-secondary-navigation-tab-container-height)}.mat-mdc-tab::before{margin:5px}.cdk-high-contrast-active .mat-mdc-tab[aria-disabled=true]{color:GrayText}"],
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-tab-header',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
      host: {
        'class': 'mat-mdc-tab-header',
        '[class.mat-mdc-tab-header-pagination-controls-enabled]': '_showPaginationControls',
        '[class.mat-mdc-tab-header-rtl]': "_getLayoutDirection() == 'rtl'"
      },
      standalone: true,
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatRipple, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_22__.CdkObserveContent],
      template: "<!--\n Note that this intentionally uses a `div` instead of a `button`, because it's not part of\n the regular tabs flow and is only here to support mouse users. It should also not be focusable.\n-->\n<div class=\"mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before\"\n     #previousPaginator\n     mat-ripple\n     [matRippleDisabled]=\"_disableScrollBefore || disableRipple\"\n     [class.mat-mdc-tab-header-pagination-disabled]=\"_disableScrollBefore\"\n     (click)=\"_handlePaginatorClick('before')\"\n     (mousedown)=\"_handlePaginatorPress('before', $event)\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-mdc-tab-header-pagination-chevron\"></div>\n</div>\n\n<div\n  class=\"mat-mdc-tab-label-container\"\n  #tabListContainer\n  (keydown)=\"_handleKeydown($event)\"\n  [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\">\n  <div\n    #tabList\n    class=\"mat-mdc-tab-list\"\n    role=\"tablist\"\n    [attr.aria-label]=\"ariaLabel || null\"\n    [attr.aria-labelledby]=\"ariaLabelledby || null\"\n    (cdkObserveContent)=\"_onContentChanges()\">\n    <div class=\"mat-mdc-tab-labels\" #tabListInner>\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n\n<div class=\"mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after\"\n     #nextPaginator\n     mat-ripple\n     [matRippleDisabled]=\"_disableScrollAfter || disableRipple\"\n     [class.mat-mdc-tab-header-pagination-disabled]=\"_disableScrollAfter\"\n     (mousedown)=\"_handlePaginatorPress('after', $event)\"\n     (click)=\"_handlePaginatorClick('after')\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-mdc-tab-header-pagination-chevron\"></div>\n</div>\n",
      styles: [".mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;outline:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-header-pagination-icon-color, var(--mat-app-on-surface))}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}.mat-mdc-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-header-divider-height);border-bottom-color:var(--mat-tab-header-divider-color, var(--mat-app-surface-variant))}.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container{border-bottom:none;border-top-style:solid;border-top-width:var(--mat-tab-header-divider-height);border-top-color:var(--mat-tab-header-divider-color, var(--mat-app-surface-variant))}.mat-mdc-tab-labels{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:flex-end}.cdk-drop-list .mat-mdc-tab-labels,.mat-mdc-tab-labels.cdk-drop-list{min-height:var(--mdc-secondary-navigation-tab-container-height)}.mat-mdc-tab::before{margin:5px}.cdk-high-contrast-active .mat-mdc-tab[aria-disabled=true]{color:GrayText}"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__.ViewportRuler
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__.Directionality,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.Platform
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
    }]
  }], {
    _items: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [MatTabLabelWrapper, {
        descendants: false
      }]
    }],
    _tabListContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['tabListContainer', {
        static: true
      }]
    }],
    _tabList: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['tabList', {
        static: true
      }]
    }],
    _tabListInner: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['tabListInner', {
        static: true
      }]
    }],
    _nextPaginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['nextPaginator']
    }],
    _previousPaginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['previousPaginator']
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-label']
    }],
    ariaLabelledby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-labelledby']
    }],
    disableRipple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }]
  });
})();

/** Injection token that can be used to provide the default options the tabs module. */
const MAT_TABS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_TABS_CONFIG');

/**
 * Animations used by the Material tabs.
 * @docs-private
 */
const matTabsAnimations = {
  /** Animation translates a tab along the X axis. */
  translateTab: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.trigger)('translateTab', [
  // Transitions to `none` instead of 0, because some browsers might blur the content.
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.state)('center, void, left-origin-center, right-origin-center', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.style)({
    transform: 'none',
    visibility: 'visible'
  })),
  // If the tab is either on the left or right, we additionally add a `min-height` of 1px
  // in order to ensure that the element has a height before its state changes. This is
  // necessary because Chrome does seem to skip the transition in RTL mode if the element does
  // not have a static height and is not rendered. See related issue: #9465
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.state)('left', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.style)({
    transform: 'translate3d(-100%, 0, 0)',
    minHeight: '1px',
    // Normally this is redundant since we detach the content from the DOM, but if the user
    // opted into keeping the content in the DOM, we have to hide it so it isn't focusable.
    visibility: 'hidden'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.state)('right', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.style)({
    transform: 'translate3d(100%, 0, 0)',
    minHeight: '1px',
    visibility: 'hidden'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.transition)('* => left, * => right, left => center, right => center', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.animate)('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.transition)('void => left-origin-center', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.style)({
    transform: 'translate3d(-100%, 0, 0)',
    visibility: 'hidden'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.animate)('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.transition)('void => right-origin-center', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.style)({
    transform: 'translate3d(100%, 0, 0)',
    visibility: 'hidden'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.animate)('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')])])
};

/**
 * The portal host directive for the contents of the tab.
 * @docs-private
 */
class MatTabBodyPortal extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.CdkPortalOutlet {
  constructor(componentFactoryResolver, viewContainerRef, _host, _document) {
    super(componentFactoryResolver, viewContainerRef, _document);
    this._host = _host;
    /** Subscription to events for when the tab body begins centering. */
    this._centeringSub = rxjs__WEBPACK_IMPORTED_MODULE_24__.Subscription.EMPTY;
    /** Subscription to events for when the tab body finishes leaving from center position. */
    this._leavingSub = rxjs__WEBPACK_IMPORTED_MODULE_24__.Subscription.EMPTY;
  }
  /** Set initial visibility or set up subscription for changing visibility. */
  ngOnInit() {
    super.ngOnInit();
    this._centeringSub = this._host._beforeCentering.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.startWith)(this._host._isCenterPosition(this._host._position))).subscribe(isCentering => {
      if (this._host._content && isCentering && !this.hasAttached()) {
        this.attach(this._host._content);
      }
    });
    this._leavingSub = this._host._afterLeavingCenter.subscribe(() => {
      if (!this._host.preserveContent) {
        this.detach();
      }
    });
  }
  /** Clean up centering subscription. */
  ngOnDestroy() {
    super.ngOnDestroy();
    this._centeringSub.unsubscribe();
    this._leavingSub.unsubscribe();
  }
  static #_ = this.ɵfac = function MatTabBodyPortal_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatTabBodyPortal)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatTabBody)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_25__.DOCUMENT));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatTabBodyPortal,
    selectors: [["", "matTabBodyHost", ""]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabBodyPortal, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matTabBodyHost]',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
  }, {
    type: MatTabBody,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatTabBody)]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_25__.DOCUMENT]
    }]
  }], null);
})();
/**
 * Wrapper for the contents of a tab.
 * @docs-private
 */
class MatTabBody {
  /** The shifted index position of the tab body, where zero represents the active center tab. */
  set position(position) {
    this._positionIndex = position;
    this._computePositionAnimationState();
  }
  constructor(_elementRef, _dir, changeDetectorRef) {
    this._elementRef = _elementRef;
    this._dir = _dir;
    /** Subscription to the directionality change observable. */
    this._dirChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_24__.Subscription.EMPTY;
    /** Emits when an animation on the tab is complete. */
    this._translateTabComplete = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Event emitted when the tab begins to animate towards the center as the active tab. */
    this._onCentering = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted before the centering of the tab begins. */
    this._beforeCentering = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted before the centering of the tab begins. */
    this._afterLeavingCenter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when the tab completes its animation towards the center. */
    this._onCentered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
    // Note that the default value will always be overwritten by `MatTabBody`, but we need one
    // anyway to prevent the animations module from throwing an error if the body is used on its own.
    /** Duration for the tab's animation. */
    this.animationDuration = '500ms';
    /** Whether the tab's content should be kept in the DOM while it's off-screen. */
    this.preserveContent = false;
    if (_dir) {
      this._dirChangeSubscription = _dir.change.subscribe(dir => {
        this._computePositionAnimationState(dir);
        changeDetectorRef.markForCheck();
      });
    }
    // Ensure that we get unique animation events, because the `.done` callback can get
    // invoked twice in some browsers. See https://github.com/angular/angular/issues/24084.
    this._translateTabComplete.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.distinctUntilChanged)((x, y) => {
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
    return position == 'center' || position == 'left-origin-center' || position == 'right-origin-center';
  }
  /** Computes the position state that will be used for the tab-body animation trigger. */
  _computePositionAnimationState(dir = this._getLayoutDirection()) {
    if (this._positionIndex < 0) {
      this._position = dir == 'ltr' ? 'left' : 'right';
    } else if (this._positionIndex > 0) {
      this._position = dir == 'ltr' ? 'right' : 'left';
    } else {
      this._position = 'center';
    }
  }
  /**
   * Computes the position state based on the specified origin position. This is used if the
   * tab is becoming visible immediately after creation.
   */
  _computePositionFromOrigin(origin) {
    const dir = this._getLayoutDirection();
    if (dir == 'ltr' && origin <= 0 || dir == 'rtl' && origin > 0) {
      return 'left-origin-center';
    }
    return 'right-origin-center';
  }
  static #_ = this.ɵfac = function MatTabBody_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatTabBody)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatTabBody,
    selectors: [["mat-tab-body"]],
    viewQuery: function MatTabBody_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.CdkPortalOutlet, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._portalHost = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-tab-body"],
    inputs: {
      _content: [0, "content", "_content"],
      origin: "origin",
      animationDuration: "animationDuration",
      preserveContent: "preserveContent",
      position: "position"
    },
    outputs: {
      _onCentering: "_onCentering",
      _beforeCentering: "_beforeCentering",
      _afterLeavingCenter: "_afterLeavingCenter",
      _onCentered: "_onCentered"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 6,
    consts: [["content", ""], ["cdkScrollable", "", 1, "mat-mdc-tab-body-content"], ["matTabBodyHost", ""]],
    template: function MatTabBody_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@translateTab.start", function MatTabBody_Template_div_animation_translateTab_start_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._onTranslateTabStarted($event));
        })("@translateTab.done", function MatTabBody_Template_div_animation_translateTab_done_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._translateTabComplete.next($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatTabBody_ng_template_2_Template, 0, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@translateTab", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c7, ctx._position, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c6, ctx.animationDuration)));
      }
    },
    dependencies: [MatTabBodyPortal, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__.CdkScrollable],
    styles: [".mat-mdc-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-mdc-tab-body.mat-mdc-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active{overflow-y:hidden}.mat-mdc-tab-body-content{height:100%;overflow:auto}.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content{overflow:hidden}.mat-mdc-tab-body-content[style*=\"visibility: hidden\"]{display:none}"],
    encapsulation: 2,
    data: {
      animation: [matTabsAnimations.translateTab]
    }
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabBody, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-tab-body',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
      animations: [matTabsAnimations.translateTab],
      host: {
        'class': 'mat-mdc-tab-body'
      },
      standalone: true,
      imports: [MatTabBodyPortal, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__.CdkScrollable],
      template: "<div class=\"mat-mdc-tab-body-content\" #content\n     [@translateTab]=\"{\n        value: _position,\n        params: {animationDuration: animationDuration}\n     }\"\n     (@translateTab.start)=\"_onTranslateTabStarted($event)\"\n     (@translateTab.done)=\"_translateTabComplete.next($event)\"\n     cdkScrollable>\n  <ng-template matTabBodyHost></ng-template>\n</div>\n",
      styles: [".mat-mdc-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-mdc-tab-body.mat-mdc-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active{overflow-y:hidden}.mat-mdc-tab-body-content{height:100%;overflow:auto}.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content{overflow:hidden}.mat-mdc-tab-body-content[style*=\"visibility: hidden\"]{display:none}"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__.Directionality,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }], {
    _onCentering: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _beforeCentering: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _afterLeavingCenter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _onCentered: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _portalHost: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.CdkPortalOutlet]
    }],
    _content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['content']
    }],
    origin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    animationDuration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    preserveContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/** Used to generate unique ID's for each tab component */
let nextId = 0;
/** Boolean constant that determines whether the tab group supports the `backgroundColor` input */
const ENABLE_BACKGROUND_INPUT = true;
/**
 * Material design tab-group component. Supports basic tab pairs (label + content) and includes
 * animated ink-bar, keyboard navigation, and screen reader.
 * See: https://material.io/design/components/tabs.html
 */
class MatTabGroup {
  /** Whether the ink bar should fit its width to the size of the tab label content. */
  get fitInkBarToContent() {
    return this._fitInkBarToContent;
  }
  set fitInkBarToContent(value) {
    this._fitInkBarToContent = value;
    this._changeDetectorRef.markForCheck();
  }
  /** The index of the active tab. */
  get selectedIndex() {
    return this._selectedIndex;
  }
  set selectedIndex(value) {
    this._indexToSelect = isNaN(value) ? null : value;
  }
  /** Duration for the tab animation. Will be normalized to milliseconds if no units are set. */
  get animationDuration() {
    return this._animationDuration;
  }
  set animationDuration(value) {
    const stringValue = value + '';
    this._animationDuration = /^\d+$/.test(stringValue) ? value + 'ms' : stringValue;
  }
  /**
   * `tabindex` to be set on the inner element that wraps the tab content. Can be used for improved
   * accessibility when the tab does not have focusable elements or if it has scrollable content.
   * The `tabindex` will be removed automatically for inactive tabs.
   * Read more at https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html
   */
  get contentTabIndex() {
    return this._contentTabIndex;
  }
  set contentTabIndex(value) {
    this._contentTabIndex = isNaN(value) ? null : value;
  }
  /**
   * Theme color of the background of the tab group. This API is supported in M2 themes only, it
   * has no effect in M3 themes.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.io/guide/theming#using-component-color-variants.
   *
   * @deprecated The background color should be customized through Sass theming APIs.
   * @breaking-change 20.0.0 Remove this input
   */
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(value) {
    if (!ENABLE_BACKGROUND_INPUT) {
      throw new Error(`mat-tab-group background color must be set through the Sass theming API`);
    }
    const classList = this._elementRef.nativeElement.classList;
    classList.remove('mat-tabs-with-background', `mat-background-${this.backgroundColor}`);
    if (value) {
      classList.add('mat-tabs-with-background', `mat-background-${value}`);
    }
    this._backgroundColor = value;
  }
  constructor(_elementRef, _changeDetectorRef, defaultConfig, _animationMode) {
    this._elementRef = _elementRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._animationMode = _animationMode;
    /** All of the tabs that belong to the group. */
    this._tabs = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
    /** The tab index that should be selected after the content has been checked. */
    this._indexToSelect = 0;
    /** Index of the tab that was focused last. */
    this._lastFocusedTabIndex = null;
    /** Snapshot of the height of the tab body wrapper before another tab is activated. */
    this._tabBodyWrapperHeight = 0;
    /** Subscription to tabs being added/removed. */
    this._tabsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_24__.Subscription.EMPTY;
    /** Subscription to changes in the tab labels. */
    this._tabLabelSubscription = rxjs__WEBPACK_IMPORTED_MODULE_24__.Subscription.EMPTY;
    this._fitInkBarToContent = false;
    /** Whether tabs should be stretched to fill the header. */
    this.stretchTabs = true;
    /** Whether the tab group should grow to the size of the active tab. */
    this.dynamicHeight = false;
    this._selectedIndex = null;
    /** Position of the tab header. */
    this.headerPosition = 'above';
    /**
     * Whether pagination should be disabled. This can be used to avoid unnecessary
     * layout recalculations if it's known that pagination won't be required.
     */
    this.disablePagination = false;
    /** Whether ripples in the tab group are disabled. */
    this.disableRipple = false;
    /**
     * By default tabs remove their content from the DOM while it's off-screen.
     * Setting this to `true` will keep it in the DOM which will prevent elements
     * like iframes and videos from reloading next time it comes back into the view.
     */
    this.preserveContent = false;
    /** Output to enable support for two-way binding on `[(selectedIndex)]` */
    this.selectedIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when focus has changed within a tab group. */
    this.focusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when the body animation has completed */
    this.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when the tab selection has changed. */
    this.selectedTabChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
    /** Whether the tab group is rendered on the server. */
    this._isServer = !(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.Platform).isBrowser;
    this._groupId = nextId++;
    this.animationDuration = defaultConfig && defaultConfig.animationDuration ? defaultConfig.animationDuration : '500ms';
    this.disablePagination = defaultConfig && defaultConfig.disablePagination != null ? defaultConfig.disablePagination : false;
    this.dynamicHeight = defaultConfig && defaultConfig.dynamicHeight != null ? defaultConfig.dynamicHeight : false;
    if (defaultConfig?.contentTabIndex != null) {
      this.contentTabIndex = defaultConfig.contentTabIndex;
    }
    this.preserveContent = !!defaultConfig?.preserveContent;
    this.fitInkBarToContent = defaultConfig && defaultConfig.fitInkBarToContent != null ? defaultConfig.fitInkBarToContent : false;
    this.stretchTabs = defaultConfig && defaultConfig.stretchTabs != null ? defaultConfig.stretchTabs : true;
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
        // Preserve the height so page doesn't scroll up during tab change.
        // Fixes https://stackblitz.com/edit/mat-tabs-scroll-page-top-on-tab-change
        const wrapper = this._tabBodyWrapper.nativeElement;
        wrapper.style.minHeight = wrapper.clientHeight + 'px';
      }
      // Changing these values after change detection has run
      // since the checked content may contain references to them.
      Promise.resolve().then(() => {
        this._tabs.forEach((tab, index) => tab.isActive = index === indexToSelect);
        if (!isFirstRun) {
          this.selectedIndexChange.emit(indexToSelect);
          // Clear the min-height, this was needed during tab change to avoid
          // unnecessary scrolling.
          this._tabBodyWrapper.nativeElement.style.minHeight = '';
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
      this._lastFocusedTabIndex = null;
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
        let selectedTab;
        for (let i = 0; i < tabs.length; i++) {
          if (tabs[i].isActive) {
            // Assign both to the `_indexToSelect` and `_selectedIndex` so we don't fire a changed
            // event, otherwise the consumer may end up in an infinite loop in some edge cases like
            // adding a tab within the `selectedIndexChange` event.
            this._indexToSelect = this._selectedIndex = i;
            this._lastFocusedTabIndex = null;
            selectedTab = tabs[i];
            break;
          }
        }
        // If we haven't found an active tab and a tab exists at the selected index, it means
        // that the active tab was swapped out. Since this won't be picked up by the rendering
        // loop in `ngAfterContentChecked`, we need to sync it up manually.
        if (!selectedTab && tabs[indexToSelect]) {
          Promise.resolve().then(() => {
            tabs[indexToSelect].isActive = true;
            this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
          });
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
    this._allTabs.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.startWith)(this._allTabs)).subscribe(tabs => {
      this._tabs.reset(tabs.filter(tab => {
        return tab._closestTabGroup === this || !tab._closestTabGroup;
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
  /**
   * Recalculates the tab group's pagination dimensions.
   *
   * WARNING: Calling this method can be very costly in terms of performance. It should be called
   * as infrequently as possible from outside of the Tabs component as it causes a reflow of the
   * page.
   */
  updatePagination() {
    if (this._tabHeader) {
      this._tabHeader.updatePagination();
    }
  }
  /**
   * Sets focus to a particular tab.
   * @param index Index of the tab to be focused.
   */
  focusTab(index) {
    const header = this._tabHeader;
    if (header) {
      header.focusIndex = index;
    }
  }
  _focusChanged(index) {
    this._lastFocusedTabIndex = index;
    this.focusChange.emit(this._createChangeEvent(index));
  }
  _createChangeEvent(index) {
    const event = new MatTabChangeEvent();
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
    this._tabLabelSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.merge)(...this._tabs.map(tab => tab._stateChanges)).subscribe(() => this._changeDetectorRef.markForCheck());
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
    if (!this.dynamicHeight || !this._tabBodyWrapperHeight) {
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
    tabHeader.focusIndex = index;
    if (!tab.disabled) {
      this.selectedIndex = index;
    }
  }
  /** Retrieves the tabindex for the tab. */
  _getTabIndex(index) {
    const targetIndex = this._lastFocusedTabIndex ?? this.selectedIndex;
    return index === targetIndex ? 0 : -1;
  }
  /** Callback for when the focused state of a tab has changed. */
  _tabFocusChanged(focusOrigin, index) {
    // Mouse/touch focus happens during the `mousedown`/`touchstart` phase which
    // can cause the tab to be moved out from under the pointer, interrupting the
    // click sequence (see #21898). We don't need to scroll the tab into view for
    // such cases anyway, because it will be done when the tab becomes selected.
    if (focusOrigin && focusOrigin !== 'mouse' && focusOrigin !== 'touch') {
      this._tabHeader.focusIndex = index;
    }
  }
  static #_ = this.ɵfac = function MatTabGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatTabGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_TABS_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatTabGroup,
    selectors: [["mat-tab-group"]],
    contentQueries: function MatTabGroup_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatTab, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._allTabs = _t);
      }
    },
    viewQuery: function MatTabGroup_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c8, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c9, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabBodyWrapper = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabHeader = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-tab-group"],
    hostVars: 10,
    hostBindings: function MatTabGroup_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("mat-" + (ctx.color || "primary"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--mat-tab-animation-duration", ctx.animationDuration);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tab-group-dynamic-height", ctx.dynamicHeight)("mat-mdc-tab-group-inverted-header", ctx.headerPosition === "below")("mat-mdc-tab-group-stretch-tabs", ctx.stretchTabs);
      }
    },
    inputs: {
      color: "color",
      fitInkBarToContent: [2, "fitInkBarToContent", "fitInkBarToContent", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      stretchTabs: [2, "mat-stretch-tabs", "stretchTabs", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      dynamicHeight: [2, "dynamicHeight", "dynamicHeight", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      selectedIndex: [2, "selectedIndex", "selectedIndex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      headerPosition: "headerPosition",
      animationDuration: "animationDuration",
      contentTabIndex: [2, "contentTabIndex", "contentTabIndex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      disablePagination: [2, "disablePagination", "disablePagination", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      disableRipple: [2, "disableRipple", "disableRipple", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      preserveContent: [2, "preserveContent", "preserveContent", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      backgroundColor: "backgroundColor",
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"]
    },
    outputs: {
      selectedIndexChange: "selectedIndexChange",
      focusChange: "focusChange",
      animationDone: "animationDone",
      selectedTabChange: "selectedTabChange"
    },
    exportAs: ["matTabGroup"],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: MAT_TAB_GROUP,
      useExisting: MatTabGroup
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c0,
    decls: 9,
    vars: 8,
    consts: [["tabHeader", ""], ["tabBodyWrapper", ""], ["tabNode", ""], [3, "indexFocused", "selectFocusedIndex", "selectedIndex", "disableRipple", "disablePagination", "aria-label", "aria-labelledby"], ["role", "tab", "matTabLabelWrapper", "", "cdkMonitorElementFocus", "", 1, "mdc-tab", "mat-mdc-tab", "mat-mdc-focus-indicator", 3, "id", "mdc-tab--active", "class", "disabled", "fitInkBarToContent"], [1, "mat-mdc-tab-body-wrapper"], ["role", "tabpanel", 3, "id", "mat-mdc-tab-body-active", "class", "content", "position", "origin", "animationDuration", "preserveContent"], ["role", "tab", "matTabLabelWrapper", "", "cdkMonitorElementFocus", "", 1, "mdc-tab", "mat-mdc-tab", "mat-mdc-focus-indicator", 3, "click", "cdkFocusChange", "id", "disabled", "fitInkBarToContent"], [1, "mdc-tab__ripple"], ["mat-ripple", "", 1, "mat-mdc-tab-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mdc-tab__content"], [1, "mdc-tab__text-label"], [3, "cdkPortalOutlet"], ["role", "tabpanel", 3, "_onCentered", "_onCentering", "id", "content", "position", "origin", "animationDuration", "preserveContent"]],
    template: function MatTabGroup_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-header", 3, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("indexFocused", function MatTabGroup_Template_mat_tab_header_indexFocused_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._focusChanged($event));
        })("selectFocusedIndex", function MatTabGroup_Template_mat_tab_header_selectFocusedIndex_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.selectedIndex = $event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](2, MatTabGroup_For_3_Template, 8, 17, "div", 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatTabGroup_Conditional_4_Template, 1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](7, MatTabGroup_For_8_Template, 1, 13, "mat-tab-body", 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx.selectedIndex || 0)("disableRipple", ctx.disableRipple)("disablePagination", ctx.disablePagination)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx._tabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx._isServer ? 4 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx._tabs);
      }
    },
    dependencies: [MatTabHeader, MatTabLabelWrapper, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__.CdkMonitorFocus, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatRipple, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.CdkPortalOutlet, MatTabBody],
    styles: [".mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;z-index:1}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab--active .mdc-tab__text-label{transition-delay:100ms}._mat-animation-noopable .mdc-tab__text-label{transition:none}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transition:var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}._mat-animation-noopable .mdc-tab-indicator__content,.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;height:var(--mdc-secondary-navigation-tab-container-height);font-family:var(--mat-tab-header-label-text-font, var(--mat-app-title-small-font));font-size:var(--mat-tab-header-label-text-size, var(--mat-app-title-small-size));letter-spacing:var(--mat-tab-header-label-text-tracking, var(--mat-app-title-small-tracking));line-height:var(--mat-tab-header-label-text-line-height, var(--mat-app-title-small-line-height));font-weight:var(--mat-tab-header-label-text-weight, var(--mat-app-title-small-weight))}.mat-mdc-tab.mdc-tab{flex-grow:0}.mat-mdc-tab .mdc-tab-indicator__content--underline{border-color:var(--mdc-tab-indicator-active-indicator-color, var(--mat-app-primary));border-top-width:var(--mdc-tab-indicator-active-indicator-height);border-radius:var(--mdc-tab-indicator-active-indicator-shape)}.mat-mdc-tab:hover .mdc-tab__text-label{color:var(--mat-tab-header-inactive-hover-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab:focus .mdc-tab__text-label{color:var(--mat-tab-header-inactive-focus-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-header-active-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-header-active-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-header-active-hover-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-hover-indicator-color, var(--mat-app-primary))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-header-active-focus-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-focus-indicator-color, var(--mat-app-primary))}.mat-mdc-tab.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-header-disabled-ripple-color)}.mat-mdc-tab .mdc-tab__ripple::before{content:\"\";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-header-inactive-label-text-color, var(--mat-app-on-surface));display:inline-flex;align-items:center}.mat-mdc-tab .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs>.mat-mdc-tab-header .mat-mdc-tab{flex-grow:1}.mat-mdc-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-header-with-background-background-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-focus-indicator::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-focus-indicator::before{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mdc-tab__ripple::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header{flex-direction:column-reverse}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline{align-self:flex-start}.mat-mdc-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-mdc-tab-body-wrapper._mat-animation-noopable{transition:none !important;animation:none !important}"],
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-tab-group',
      exportAs: 'matTabGroup',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
      providers: [{
        provide: MAT_TAB_GROUP,
        useExisting: MatTabGroup
      }],
      host: {
        'class': 'mat-mdc-tab-group',
        '[class]': '"mat-" + (color || "primary")',
        '[class.mat-mdc-tab-group-dynamic-height]': 'dynamicHeight',
        '[class.mat-mdc-tab-group-inverted-header]': 'headerPosition === "below"',
        '[class.mat-mdc-tab-group-stretch-tabs]': 'stretchTabs',
        '[style.--mat-tab-animation-duration]': 'animationDuration'
      },
      standalone: true,
      imports: [MatTabHeader, MatTabLabelWrapper, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__.CdkMonitorFocus, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatRipple, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.CdkPortalOutlet, MatTabBody],
      template: "<mat-tab-header #tabHeader\n                [selectedIndex]=\"selectedIndex || 0\"\n                [disableRipple]=\"disableRipple\"\n                [disablePagination]=\"disablePagination\"\n                [aria-label]=\"ariaLabel\"\n                [aria-labelledby]=\"ariaLabelledby\"\n                (indexFocused)=\"_focusChanged($event)\"\n                (selectFocusedIndex)=\"selectedIndex = $event\">\n\n  @for (tab of _tabs; track tab; let i = $index) {\n    <div class=\"mdc-tab mat-mdc-tab mat-mdc-focus-indicator\"\n        #tabNode\n        role=\"tab\"\n        matTabLabelWrapper\n        cdkMonitorElementFocus\n        [id]=\"_getTabLabelId(i)\"\n        [attr.tabIndex]=\"_getTabIndex(i)\"\n        [attr.aria-posinset]=\"i + 1\"\n        [attr.aria-setsize]=\"_tabs.length\"\n        [attr.aria-controls]=\"_getTabContentId(i)\"\n        [attr.aria-selected]=\"selectedIndex === i\"\n        [attr.aria-label]=\"tab.ariaLabel || null\"\n        [attr.aria-labelledby]=\"(!tab.ariaLabel && tab.ariaLabelledby) ? tab.ariaLabelledby : null\"\n        [class.mdc-tab--active]=\"selectedIndex === i\"\n        [class]=\"tab.labelClass\"\n        [disabled]=\"tab.disabled\"\n        [fitInkBarToContent]=\"fitInkBarToContent\"\n        (click)=\"_handleClick(tab, tabHeader, i)\"\n        (cdkFocusChange)=\"_tabFocusChanged($event, i)\">\n      <span class=\"mdc-tab__ripple\"></span>\n\n      <!-- Needs to be a separate element, because we can't put\n          `overflow: hidden` on tab due to the ink bar. -->\n      <div\n        class=\"mat-mdc-tab-ripple\"\n        mat-ripple\n        [matRippleTrigger]=\"tabNode\"\n        [matRippleDisabled]=\"tab.disabled || disableRipple\"></div>\n\n      <span class=\"mdc-tab__content\">\n        <span class=\"mdc-tab__text-label\">\n          <!--\n            If there is a label template, use it, otherwise fall back to the text label.\n            Note that we don't have indentation around the text label, because it adds\n            whitespace around the text which breaks some internal tests.\n          -->\n          @if (tab.templateLabel) {\n            <ng-template [cdkPortalOutlet]=\"tab.templateLabel\"></ng-template>\n          } @else {{{tab.textLabel}}}\n        </span>\n      </span>\n    </div>\n  }\n</mat-tab-header>\n\n<!--\n  We need to project the content somewhere to avoid hydration errors. Some observations:\n  1. This is only necessary on the server.\n  2. We get a hydration error if there aren't any nodes after the `ng-content`.\n  3. We get a hydration error if `ng-content` is wrapped in another element.\n-->\n@if (_isServer) {\n  <ng-content/>\n}\n\n<div\n  class=\"mat-mdc-tab-body-wrapper\"\n  [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\"\n  #tabBodyWrapper>\n  @for (tab of _tabs; track tab; let i = $index) {\n    <mat-tab-body role=\"tabpanel\"\n                 [id]=\"_getTabContentId(i)\"\n                 [attr.tabindex]=\"(contentTabIndex != null && selectedIndex === i) ? contentTabIndex : null\"\n                 [attr.aria-labelledby]=\"_getTabLabelId(i)\"\n                 [attr.aria-hidden]=\"selectedIndex !== i\"\n                 [class.mat-mdc-tab-body-active]=\"selectedIndex === i\"\n                 [class]=\"tab.bodyClass\"\n                 [content]=\"tab.content!\"\n                 [position]=\"tab.position!\"\n                 [origin]=\"tab.origin\"\n                 [animationDuration]=\"animationDuration\"\n                 [preserveContent]=\"preserveContent\"\n                 (_onCentered)=\"_removeTabBodyWrapperHeight()\"\n                 (_onCentering)=\"_setTabBodyWrapperHeight($event)\">\n    </mat-tab-body>\n  }\n</div>\n",
      styles: [".mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;z-index:1}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab--active .mdc-tab__text-label{transition-delay:100ms}._mat-animation-noopable .mdc-tab__text-label{transition:none}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transition:var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}._mat-animation-noopable .mdc-tab-indicator__content,.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;height:var(--mdc-secondary-navigation-tab-container-height);font-family:var(--mat-tab-header-label-text-font, var(--mat-app-title-small-font));font-size:var(--mat-tab-header-label-text-size, var(--mat-app-title-small-size));letter-spacing:var(--mat-tab-header-label-text-tracking, var(--mat-app-title-small-tracking));line-height:var(--mat-tab-header-label-text-line-height, var(--mat-app-title-small-line-height));font-weight:var(--mat-tab-header-label-text-weight, var(--mat-app-title-small-weight))}.mat-mdc-tab.mdc-tab{flex-grow:0}.mat-mdc-tab .mdc-tab-indicator__content--underline{border-color:var(--mdc-tab-indicator-active-indicator-color, var(--mat-app-primary));border-top-width:var(--mdc-tab-indicator-active-indicator-height);border-radius:var(--mdc-tab-indicator-active-indicator-shape)}.mat-mdc-tab:hover .mdc-tab__text-label{color:var(--mat-tab-header-inactive-hover-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab:focus .mdc-tab__text-label{color:var(--mat-tab-header-inactive-focus-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-header-active-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-header-active-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-header-active-hover-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-hover-indicator-color, var(--mat-app-primary))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-header-active-focus-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-focus-indicator-color, var(--mat-app-primary))}.mat-mdc-tab.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-header-disabled-ripple-color)}.mat-mdc-tab .mdc-tab__ripple::before{content:\"\";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-header-inactive-label-text-color, var(--mat-app-on-surface));display:inline-flex;align-items:center}.mat-mdc-tab .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs>.mat-mdc-tab-header .mat-mdc-tab{flex-grow:1}.mat-mdc-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-header-with-background-background-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-focus-indicator::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-focus-indicator::before{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mdc-tab__ripple::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header{flex-direction:column-reverse}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline{align-self:flex-start}.mat-mdc-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-mdc-tab-body-wrapper._mat-animation-noopable{transition:none !important;animation:none !important}"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [MAT_TABS_CONFIG]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
    }]
  }], {
    _allTabs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [MatTab, {
        descendants: true
      }]
    }],
    _tabBodyWrapper: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['tabBodyWrapper']
    }],
    _tabHeader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['tabHeader']
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    fitInkBarToContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    stretchTabs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        alias: 'mat-stretch-tabs',
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    dynamicHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    selectedIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    headerPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    animationDuration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    contentTabIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    disablePagination: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    disableRipple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    preserveContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    backgroundColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-label']
    }],
    ariaLabelledby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-labelledby']
    }],
    selectedIndexChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    focusChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    animationDone: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    selectedTabChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/** A simple change event emitted on focus or selection changes. */
class MatTabChangeEvent {}

// Increasing integer for generating unique ids for tab nav components.
let nextUniqueId = 0;
/**
 * Navigation component matching the styles of the tab group header.
 * Provides anchored navigation with animated ink bar.
 */
class MatTabNav extends MatPaginatedTabHeader {
  /** Whether the ink bar should fit its width to the size of the tab label content. */
  get fitInkBarToContent() {
    return this._fitInkBarToContent.value;
  }
  set fitInkBarToContent(value) {
    this._fitInkBarToContent.next(value);
    this._changeDetectorRef.markForCheck();
  }
  get animationDuration() {
    return this._animationDuration;
  }
  set animationDuration(value) {
    const stringValue = value + '';
    this._animationDuration = /^\d+$/.test(stringValue) ? value + 'ms' : stringValue;
  }
  /**
   * Theme color of the background of the tab nav. This API is supported in M2 themes only, it
   * has no effect in M3 themes.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.io/guide/theming#using-component-color-variants.
   */
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(value) {
    const classList = this._elementRef.nativeElement.classList;
    classList.remove('mat-tabs-with-background', `mat-background-${this.backgroundColor}`);
    if (value) {
      classList.add('mat-tabs-with-background', `mat-background-${value}`);
    }
    this._backgroundColor = value;
  }
  constructor(elementRef, dir, ngZone, changeDetectorRef, viewportRuler, platform, animationMode, defaultConfig) {
    super(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
    this._fitInkBarToContent = new rxjs__WEBPACK_IMPORTED_MODULE_27__.BehaviorSubject(false);
    /** Whether tabs should be stretched to fill the header. */
    this.stretchTabs = true;
    /** Whether the ripple effect is disabled or not. */
    this.disableRipple = false;
    /**
     * Theme color of the nav bar. This API is supported in M2 themes only, it has
     * no effect in M3 themes.
     *
     * For information on applying color variants in M3, see
     * https://material.angular.io/guide/theming#using-component-color-variants.
     */
    this.color = 'primary';
    this.disablePagination = defaultConfig && defaultConfig.disablePagination != null ? defaultConfig.disablePagination : false;
    this.fitInkBarToContent = defaultConfig && defaultConfig.fitInkBarToContent != null ? defaultConfig.fitInkBarToContent : false;
    this.stretchTabs = defaultConfig && defaultConfig.stretchTabs != null ? defaultConfig.stretchTabs : true;
  }
  _itemSelected() {
    // noop
  }
  ngAfterContentInit() {
    this._inkBar = new MatInkBar(this._items);
    // We need this to run before the `changes` subscription in parent to ensure that the
    // selectedIndex is up-to-date by the time the super class starts looking for it.
    this._items.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed)).subscribe(() => {
      this.updateActiveLink();
    });
    super.ngAfterContentInit();
  }
  ngAfterViewInit() {
    if (!this.tabPanel && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw new Error('A mat-tab-nav-panel must be specified via [tabPanel].');
    }
    super.ngAfterViewInit();
  }
  /** Notifies the component that the active link has been changed. */
  updateActiveLink() {
    if (!this._items) {
      return;
    }
    const items = this._items.toArray();
    for (let i = 0; i < items.length; i++) {
      if (items[i].active) {
        this.selectedIndex = i;
        this._changeDetectorRef.markForCheck();
        if (this.tabPanel) {
          this.tabPanel._activeTabId = items[i].id;
        }
        return;
      }
    }
    // The ink bar should hide itself if no items are active.
    this.selectedIndex = -1;
    this._inkBar.hide();
  }
  _getRole() {
    return this.tabPanel ? 'tablist' : this._elementRef.nativeElement.getAttribute('role');
  }
  static #_ = this.ɵfac = function MatTabNav_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatTabNav)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_TABS_CONFIG, 8));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatTabNav,
    selectors: [["", "mat-tab-nav-bar", ""]],
    contentQueries: function MatTabNav_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatTabLink, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._items = _t);
      }
    },
    viewQuery: function MatTabNav_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabListContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabList = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabListInner = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._nextPaginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._previousPaginator = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-tab-nav-bar", "mat-mdc-tab-header"],
    hostVars: 17,
    hostBindings: function MatTabNav_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx._getRole());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--mat-tab-animation-duration", ctx.animationDuration);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-mdc-tab-header-rtl", ctx._getLayoutDirection() == "rtl")("mat-mdc-tab-nav-bar-stretch-tabs", ctx.stretchTabs)("mat-primary", ctx.color !== "warn" && ctx.color !== "accent")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
      }
    },
    inputs: {
      fitInkBarToContent: [2, "fitInkBarToContent", "fitInkBarToContent", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      stretchTabs: [2, "mat-stretch-tabs", "stretchTabs", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      animationDuration: "animationDuration",
      backgroundColor: "backgroundColor",
      disableRipple: [2, "disableRipple", "disableRipple", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      color: "color",
      tabPanel: "tabPanel"
    },
    exportAs: ["matTabNavBar", "matTabNav"],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    attrs: _c10,
    ngContentSelectors: _c0,
    decls: 13,
    vars: 6,
    consts: [["previousPaginator", ""], ["tabListContainer", ""], ["tabList", ""], ["tabListInner", ""], ["nextPaginator", ""], ["mat-ripple", "", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-before", 3, "click", "mousedown", "touchend", "matRippleDisabled"], [1, "mat-mdc-tab-header-pagination-chevron"], [1, "mat-mdc-tab-link-container", 3, "keydown"], [1, "mat-mdc-tab-list", 3, "cdkObserveContent"], [1, "mat-mdc-tab-links"], ["mat-ripple", "", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-after", 3, "mousedown", "click", "touchend", "matRippleDisabled"]],
    template: function MatTabNav_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatTabNav_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._handlePaginatorClick("before"));
        })("mousedown", function MatTabNav_Template_div_mousedown_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._handlePaginatorPress("before", $event));
        })("touchend", function MatTabNav_Template_div_touchend_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._stopInterval());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MatTabNav_Template_div_keydown_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._handleKeydown($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkObserveContent", function MatTabNav_Template_div_cdkObserveContent_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._onContentChanges());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function MatTabNav_Template_div_mousedown_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._handlePaginatorPress("after", $event));
        })("click", function MatTabNav_Template_div_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._handlePaginatorClick("after"));
        })("touchend", function MatTabNav_Template_div_touchend_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._stopInterval());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollBefore);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollAfter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple);
      }
    },
    dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatRipple, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_22__.CdkObserveContent],
    styles: [".mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;z-index:1}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab--active .mdc-tab__text-label{transition-delay:100ms}._mat-animation-noopable .mdc-tab__text-label{transition:none}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transition:var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}._mat-animation-noopable .mdc-tab-indicator__content,.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;outline:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-header-pagination-icon-color, var(--mat-app-on-surface))}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}.mat-mdc-tab-links{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:flex-end}.cdk-drop-list .mat-mdc-tab-links,.mat-mdc-tab-links.cdk-drop-list{min-height:var(--mdc-secondary-navigation-tab-container-height)}.mat-mdc-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-header-divider-height);border-bottom-color:var(--mat-tab-header-divider-color, var(--mat-app-surface-variant))}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-header-with-background-background-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-focus-indicator::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-focus-indicator::before{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mdc-tab__ripple::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-header-with-background-foreground-color)}"],
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabNav, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: '[mat-tab-nav-bar]',
      exportAs: 'matTabNavBar, matTabNav',
      host: {
        '[attr.role]': '_getRole()',
        'class': 'mat-mdc-tab-nav-bar mat-mdc-tab-header',
        '[class.mat-mdc-tab-header-pagination-controls-enabled]': '_showPaginationControls',
        '[class.mat-mdc-tab-header-rtl]': "_getLayoutDirection() == 'rtl'",
        '[class.mat-mdc-tab-nav-bar-stretch-tabs]': 'stretchTabs',
        '[class.mat-primary]': 'color !== "warn" && color !== "accent"',
        '[class.mat-accent]': 'color === "accent"',
        '[class.mat-warn]': 'color === "warn"',
        '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
        '[style.--mat-tab-animation-duration]': 'animationDuration'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
      standalone: true,
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatRipple, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_22__.CdkObserveContent],
      template: "<!--\n Note that this intentionally uses a `div` instead of a `button`, because it's not part of\n the regular tabs flow and is only here to support mouse users. It should also not be focusable.\n-->\n<div class=\"mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before\"\n     #previousPaginator\n     mat-ripple\n     [matRippleDisabled]=\"_disableScrollBefore || disableRipple\"\n     [class.mat-mdc-tab-header-pagination-disabled]=\"_disableScrollBefore\"\n     (click)=\"_handlePaginatorClick('before')\"\n     (mousedown)=\"_handlePaginatorPress('before', $event)\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-mdc-tab-header-pagination-chevron\"></div>\n</div>\n\n<div class=\"mat-mdc-tab-link-container\" #tabListContainer (keydown)=\"_handleKeydown($event)\">\n  <div class=\"mat-mdc-tab-list\" #tabList (cdkObserveContent)=\"_onContentChanges()\">\n    <div class=\"mat-mdc-tab-links\" #tabListInner>\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n\n<div class=\"mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after\"\n     #nextPaginator\n     mat-ripple\n     [matRippleDisabled]=\"_disableScrollAfter || disableRipple\"\n     [class.mat-mdc-tab-header-pagination-disabled]=\"_disableScrollAfter\"\n     (mousedown)=\"_handlePaginatorPress('after', $event)\"\n     (click)=\"_handlePaginatorClick('after')\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-mdc-tab-header-pagination-chevron\"></div>\n</div>\n",
      styles: [".mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;z-index:1}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab--active .mdc-tab__text-label{transition-delay:100ms}._mat-animation-noopable .mdc-tab__text-label{transition:none}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transition:var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}._mat-animation-noopable .mdc-tab-indicator__content,.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;outline:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-header-pagination-icon-color, var(--mat-app-on-surface))}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}.mat-mdc-tab-links{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:flex-end}.cdk-drop-list .mat-mdc-tab-links,.mat-mdc-tab-links.cdk-drop-list{min-height:var(--mdc-secondary-navigation-tab-container-height)}.mat-mdc-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-header-divider-height);border-bottom-color:var(--mat-tab-header-divider-color, var(--mat-app-surface-variant))}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-header-with-background-background-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-focus-indicator::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-focus-indicator::before{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mdc-tab__ripple::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-header-with-background-foreground-color)}"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__.Directionality,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__.ViewportRuler
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.Platform
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [MAT_TABS_CONFIG]
    }]
  }], {
    fitInkBarToContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    stretchTabs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        alias: 'mat-stretch-tabs',
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    animationDuration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    _items: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatTabLink), {
        descendants: true
      }]
    }],
    backgroundColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disableRipple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tabPanel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    _tabListContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['tabListContainer', {
        static: true
      }]
    }],
    _tabList: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['tabList', {
        static: true
      }]
    }],
    _tabListInner: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['tabListInner', {
        static: true
      }]
    }],
    _nextPaginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['nextPaginator']
    }],
    _previousPaginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['previousPaginator']
    }]
  });
})();
/**
 * Link inside a `mat-tab-nav-bar`.
 */
class MatTabLink extends InkBarItem {
  /** Whether the link is active. */
  get active() {
    return this._isActive;
  }
  set active(value) {
    if (value !== this._isActive) {
      this._isActive = value;
      this._tabNavBar.updateActiveLink();
    }
  }
  /**
   * Whether ripples are disabled on interaction.
   * @docs-private
   */
  get rippleDisabled() {
    return this.disabled || this.disableRipple || this._tabNavBar.disableRipple || !!this.rippleConfig.disabled;
  }
  constructor(_tabNavBar, /** @docs-private */elementRef, globalRippleOptions, tabIndex, _focusMonitor, animationMode) {
    super();
    this._tabNavBar = _tabNavBar;
    this.elementRef = elementRef;
    this._focusMonitor = _focusMonitor;
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Whether the tab link is active or not. */
    this._isActive = false;
    /** Whether the tab link is disabled. */
    this.disabled = false;
    /** Whether ripples are disabled on the tab link. */
    this.disableRipple = false;
    this.tabIndex = 0;
    /** Unique id for the tab. */
    this.id = `mat-tab-link-${nextUniqueId++}`;
    this.rippleConfig = globalRippleOptions || {};
    this.tabIndex = parseInt(tabIndex) || 0;
    if (animationMode === 'NoopAnimations') {
      this.rippleConfig.animation = {
        enterDuration: 0,
        exitDuration: 0
      };
    }
    _tabNavBar._fitInkBarToContent.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed)).subscribe(fitInkBarToContent => {
      this.fitInkBarToContent = fitInkBarToContent;
    });
  }
  /** Focuses the tab link. */
  focus() {
    this.elementRef.nativeElement.focus();
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this.elementRef);
  }
  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
    super.ngOnDestroy();
    this._focusMonitor.stopMonitoring(this.elementRef);
  }
  _handleFocus() {
    // Since we allow navigation through tabbing in the nav bar, we
    // have to update the focused index whenever the link receives focus.
    this._tabNavBar.focusIndex = this._tabNavBar._items.toArray().indexOf(this);
  }
  _handleKeydown(event) {
    if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.SPACE || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.ENTER) {
      if (this.disabled) {
        event.preventDefault();
      } else if (this._tabNavBar.tabPanel) {
        // Only prevent the default action on space since it can scroll the page.
        // Don't prevent enter since it can break link navigation.
        if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.SPACE) {
          event.preventDefault();
        }
        this.elementRef.nativeElement.click();
      }
    }
  }
  _getAriaControls() {
    return this._tabNavBar.tabPanel ? this._tabNavBar.tabPanel?.id : this.elementRef.nativeElement.getAttribute('aria-controls');
  }
  _getAriaSelected() {
    if (this._tabNavBar.tabPanel) {
      return this.active ? 'true' : 'false';
    } else {
      return this.elementRef.nativeElement.getAttribute('aria-selected');
    }
  }
  _getAriaCurrent() {
    return this.active && !this._tabNavBar.tabPanel ? 'page' : null;
  }
  _getRole() {
    return this._tabNavBar.tabPanel ? 'tab' : this.elementRef.nativeElement.getAttribute('role');
  }
  _getTabIndex() {
    if (this._tabNavBar.tabPanel) {
      return this._isActive && !this.disabled ? 0 : -1;
    } else {
      return this.disabled ? -1 : this.tabIndex;
    }
  }
  static #_ = this.ɵfac = function MatTabLink_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatTabLink)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatTabNav), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MAT_RIPPLE_GLOBAL_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatTabLink,
    selectors: [["", "mat-tab-link", ""], ["", "matTabLink", ""]],
    hostAttrs: [1, "mdc-tab", "mat-mdc-tab-link", "mat-mdc-focus-indicator"],
    hostVars: 11,
    hostBindings: function MatTabLink_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MatTabLink_focus_HostBindingHandler() {
          return ctx._handleFocus();
        })("keydown", function MatTabLink_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-controls", ctx._getAriaControls())("aria-current", ctx._getAriaCurrent())("aria-disabled", ctx.disabled)("aria-selected", ctx._getAriaSelected())("id", ctx.id)("tabIndex", ctx._getTabIndex())("role", ctx._getRole());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tab-disabled", ctx.disabled)("mdc-tab--active", ctx.active);
      }
    },
    inputs: {
      active: [2, "active", "active", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      disableRipple: [2, "disableRipple", "disableRipple", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      tabIndex: [2, "tabIndex", "tabIndex", value => value == null ? 0 : (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute)(value)],
      id: "id"
    },
    exportAs: ["matTabLink"],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    attrs: _c11,
    ngContentSelectors: _c0,
    decls: 5,
    vars: 2,
    consts: [[1, "mdc-tab__ripple"], ["mat-ripple", "", 1, "mat-mdc-tab-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mdc-tab__content"], [1, "mdc-tab__text-label"]],
    template: function MatTabLink_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2)(3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", ctx.elementRef.nativeElement)("matRippleDisabled", ctx.rippleDisabled);
      }
    },
    dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatRipple],
    styles: [".mat-mdc-tab-link{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;height:var(--mdc-secondary-navigation-tab-container-height);font-family:var(--mat-tab-header-label-text-font, var(--mat-app-title-small-font));font-size:var(--mat-tab-header-label-text-size, var(--mat-app-title-small-size));letter-spacing:var(--mat-tab-header-label-text-tracking, var(--mat-app-title-small-tracking));line-height:var(--mat-tab-header-label-text-line-height, var(--mat-app-title-small-line-height));font-weight:var(--mat-tab-header-label-text-weight, var(--mat-app-title-small-weight))}.mat-mdc-tab-link.mdc-tab{flex-grow:0}.mat-mdc-tab-link .mdc-tab-indicator__content--underline{border-color:var(--mdc-tab-indicator-active-indicator-color, var(--mat-app-primary));border-top-width:var(--mdc-tab-indicator-active-indicator-height);border-radius:var(--mdc-tab-indicator-active-indicator-shape)}.mat-mdc-tab-link:hover .mdc-tab__text-label{color:var(--mat-tab-header-inactive-hover-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab-link:focus .mdc-tab__text-label{color:var(--mat-tab-header-inactive-focus-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-header-active-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-header-active-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-header-active-hover-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-hover-indicator-color, var(--mat-app-primary))}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-header-active-focus-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-focus-indicator-color, var(--mat-app-primary))}.mat-mdc-tab-link.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab-link.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-header-disabled-ripple-color)}.mat-mdc-tab-link .mdc-tab__ripple::before{content:\"\";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-header-inactive-label-text-color, var(--mat-app-on-surface));display:inline-flex;align-items:center}.mat-mdc-tab-link .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab-link:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab-link .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link{flex-grow:1}.mat-mdc-tab-link::before{margin:5px}@media(max-width: 599px){.mat-mdc-tab-link{min-width:72px}}"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabLink, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: '[mat-tab-link], [matTabLink]',
      exportAs: 'matTabLink',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        'class': 'mdc-tab mat-mdc-tab-link mat-mdc-focus-indicator',
        '[attr.aria-controls]': '_getAriaControls()',
        '[attr.aria-current]': '_getAriaCurrent()',
        '[attr.aria-disabled]': 'disabled',
        '[attr.aria-selected]': '_getAriaSelected()',
        '[attr.id]': 'id',
        '[attr.tabIndex]': '_getTabIndex()',
        '[attr.role]': '_getRole()',
        '[class.mat-mdc-tab-disabled]': 'disabled',
        '[class.mdc-tab--active]': 'active',
        '(focus)': '_handleFocus()',
        '(keydown)': '_handleKeydown($event)'
      },
      standalone: true,
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatRipple],
      template: "<span class=\"mdc-tab__ripple\"></span>\n\n<div\n  class=\"mat-mdc-tab-ripple\"\n  mat-ripple\n  [matRippleTrigger]=\"elementRef.nativeElement\"\n  [matRippleDisabled]=\"rippleDisabled\"></div>\n\n<span class=\"mdc-tab__content\">\n  <span class=\"mdc-tab__text-label\">\n    <ng-content></ng-content>\n  </span>\n</span>\n\n",
      styles: [".mat-mdc-tab-link{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;height:var(--mdc-secondary-navigation-tab-container-height);font-family:var(--mat-tab-header-label-text-font, var(--mat-app-title-small-font));font-size:var(--mat-tab-header-label-text-size, var(--mat-app-title-small-size));letter-spacing:var(--mat-tab-header-label-text-tracking, var(--mat-app-title-small-tracking));line-height:var(--mat-tab-header-label-text-line-height, var(--mat-app-title-small-line-height));font-weight:var(--mat-tab-header-label-text-weight, var(--mat-app-title-small-weight))}.mat-mdc-tab-link.mdc-tab{flex-grow:0}.mat-mdc-tab-link .mdc-tab-indicator__content--underline{border-color:var(--mdc-tab-indicator-active-indicator-color, var(--mat-app-primary));border-top-width:var(--mdc-tab-indicator-active-indicator-height);border-radius:var(--mdc-tab-indicator-active-indicator-shape)}.mat-mdc-tab-link:hover .mdc-tab__text-label{color:var(--mat-tab-header-inactive-hover-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab-link:focus .mdc-tab__text-label{color:var(--mat-tab-header-inactive-focus-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-header-active-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-header-active-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-header-active-hover-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-hover-indicator-color, var(--mat-app-primary))}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-header-active-focus-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-focus-indicator-color, var(--mat-app-primary))}.mat-mdc-tab-link.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab-link.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-header-disabled-ripple-color)}.mat-mdc-tab-link .mdc-tab__ripple::before{content:\"\";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-header-inactive-label-text-color, var(--mat-app-on-surface));display:inline-flex;align-items:center}.mat-mdc-tab-link .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab-link:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab-link .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link{flex-grow:1}.mat-mdc-tab-link::before{margin:5px}@media(max-width: 599px){.mat-mdc-tab-link{min-width:72px}}"]
    }]
  }], () => [{
    type: MatTabNav
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MAT_RIPPLE_GLOBAL_OPTIONS]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
      args: ['tabindex']
    }]
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__.FocusMonitor
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
    }]
  }], {
    active: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    disableRipple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    tabIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: value => value == null ? 0 : (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute)(value)
      }]
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Tab panel component associated with MatTabNav.
 */
class MatTabNavPanel {
  constructor() {
    /** Unique id for the tab panel. */
    this.id = `mat-tab-nav-panel-${nextUniqueId++}`;
  }
  static #_ = this.ɵfac = function MatTabNavPanel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatTabNavPanel)();
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatTabNavPanel,
    selectors: [["mat-tab-nav-panel"]],
    hostAttrs: ["role", "tabpanel", 1, "mat-mdc-tab-nav-panel"],
    hostVars: 2,
    hostBindings: function MatTabNavPanel_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx._activeTabId)("id", ctx.id);
      }
    },
    inputs: {
      id: "id"
    },
    exportAs: ["matTabNavPanel"],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function MatTabNavPanel_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabNavPanel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-tab-nav-panel',
      exportAs: 'matTabNavPanel',
      template: '<ng-content></ng-content>',
      host: {
        '[attr.aria-labelledby]': '_activeTabId',
        '[attr.id]': 'id',
        'class': 'mat-mdc-tab-nav-panel',
        'role': 'tabpanel'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      standalone: true
    }]
  }], null, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class MatTabsModule {
  static #_ = this.ɵfac = function MatTabsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MatTabsModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MatTabsModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatCommonModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTabsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatCommonModule, MatTabContent, MatTabLabel, MatTab, MatTabGroup, MatTabNav, MatTabNavPanel, MatTabLink],
      exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatCommonModule, MatTabContent, MatTabLabel, MatTab, MatTabGroup, MatTabNav, MatTabNavPanel, MatTabLink]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 77388:
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfHour.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfHour: () => (/* binding */ startOfHour)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ 58700);


/**
 * @name startOfHour
 * @category Hour Helpers
 * @summary Return the start of an hour for the given date.
 *
 * @description
 * Return the start of an hour for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an hour
 *
 * @example
 * // The start of an hour for 2 September 2014 11:55:00:
 * const result = startOfHour(new Date(2014, 8, 2, 11, 55))
 * //=> Tue Sep 02 2014 11:00:00
 */
function startOfHour(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  _date.setMinutes(0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfHour);

/***/ })

}]);
//# sourceMappingURL=apps_visitor-kiosk_src_app_checkin_checkin_module_ts.js.map