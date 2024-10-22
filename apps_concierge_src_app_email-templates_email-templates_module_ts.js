"use strict";
(self["webpackChunkconcierge"] = self["webpackChunkconcierge"] || []).push([["apps_concierge_src_app_email-templates_email-templates_module_ts"],{

/***/ 31986:
/*!***********************************************************************************!*\
  !*** ./apps/concierge/src/app/email-templates/email-template-manage.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailTemplateManageComponent: () => (/* binding */ EmailTemplateManageComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _email_templates_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-templates-state.service */ 46867);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/clipboard */ 52352);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _libs_form_fields_src_lib_rich_text_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/rich-text-input.component */ 81772);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
























const _c0 = () => ["/email-templates"];
const _c1 = () => [];
function EmailTemplateManageComponent_mat_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bld_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", bld_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", bld_r2.display_name || bld_r2.name, " ");
  }
}
function EmailTemplateManageComponent_mat_option_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const template_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", template_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", template_r3.name, " ");
  }
}
function EmailTemplateManageComponent_button_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EmailTemplateManageComponent_button_47_Template_button_click_0_listener() {
      const field_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.copyField(field_r5.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 33)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const field_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](field_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", field_r5.description, " ");
  }
}
function EmailTemplateManageComponent_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 35)(1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "mat-spinner", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("diameter", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r5.loading);
  }
}
class EmailTemplateManageComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_2__.AsyncHandler {
  constructor(_org, _state, _route, _router, _clipboard) {
    super();
    this._org = _org;
    this._state = _state;
    this._route = _route;
    this._router = _router;
    this._clipboard = _clipboard;
    this.loading = '';
    this.definitions = this._state.template_definitions;
    this.buildings = this._org.building_list;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
      id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
      reply_to: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
      from: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
      subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
      category: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('internal'),
      trigger: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
      html: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
      zone_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('')
    });
    this.active_trigger = null;
  }
  ngOnInit() {
    var _this = this;
    this.subscription('route.params', this._route.paramMap.subscribe( /*#__PURE__*/function () {
      var _ref = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (params) {
        if (params.has('id')) {
          _this.loading = 'Loading email template...';
          _this.template = yield _this._state.loadTemplate(params.get('id'));
          _this.loading = '';
          console.log('Template:', _this.template);
          if (!_this.template) {
            _this._router.navigate(['/email-templates', 'manage']);
          } else {
            _this.form.patchValue(_this.template);
          }
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()));
    this.subscription('trigger', this.form.valueChanges.subscribe( /*#__PURE__*/function () {
      var _ref2 = (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (value) {
        if (value.trigger) {
          const trigger_list = yield _this.definitions.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1)).toPromise();
          _this.active_trigger = trigger_list.find(_ => _.id === value.trigger);
        }
      });
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()));
  }
  copyField(field) {
    this._clipboard.copy(field);
    (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifySuccess)(`Copied field "${field}" to clipboard.`);
  }
  save() {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = 'Saving email template...';
      yield _this2._state.saveTemplate({
        ...(_this2.template || {}),
        ..._this2.form.getRawValue(),
        text: (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.extractTextFromHTML)(_this2.form.getRawValue().html || '')
      });
      _this2.loading = '';
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifySuccess)('Successfully saved email template');
      _this2._router.navigate(['/email-templates']);
    })();
  }
  static #_ = this.ɵfac = function EmailTemplateManageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || EmailTemplateManageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_3__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_email_templates_state_service__WEBPACK_IMPORTED_MODULE_1__.EmailTemplatesStateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_10__.Clipboard));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: EmailTemplateManageComponent,
    selectors: [["email-template-manage"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
    decls: 66,
    vars: 14,
    consts: [["tracking_menu", "matMenu"], ["load_state", ""], [1, "absolute", "inset-0", "bg-base-100", "overflow-auto", "p-8"], [1, "max-w-full", "w-[48rem]", "mx-auto", "min-h-full", 3, "formGroup"], [1, "flex", "items-center", "space-x-2", "mb-8"], ["icon", "", "matRipple", "", 1, "-ml-8", 3, "routerLink"], [1, "text-2xl", "font-medium"], [1, "flex-1"], ["btn", "", "matRipple", "", "type", "button", 1, "w-48", 3, "click"], [1, "flex", "items-center", "space-x-4"], [1, "flex-1", "space-y-2", "w-1/4"], ["for", "zone"], ["appearance", "outline", 1, "w-full"], ["name", "zone", "placeholder", "Select Building", "formControlName", "zone_id"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "category"], ["name", "category", "placeholder", "Select Category", "formControlName", "category"], ["value", "internal"], ["value", "external"], ["for", "trigger"], ["name", "trigger", "placeholder", "Select Trigger", "formControlName", "trigger"], ["value", ""], ["btn", "", "matRipple", "", "matTooltip", "Values that get replaced in the email template when sent", 1, "flex-1", "mt-2", 3, "disabled"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "flex-1"], ["matInput", "", "placeholder", "Reply to address", "formControlName", "reply_to"], ["matInput", "", "placeholder", "From address", "formControlName", "from"], ["matPrefix", "", 1, "text-2xl", "relative", "-left-1"], ["matInput", "", "placeholder", "Template Subject", "formControlName", "subject"], ["formControlName", "html", "placeholder", "Body of the email template", 1, "min-h-[calc(100vh-28rem)]", "block", 3, "images_allowed"], [3, "value"], ["mat-menu-item", "", 3, "click"], [1, "flex", "flex-col", "leading-tight"], [1, "text-xs", "opacity-30"], [1, "absolute", "inset-0", "bg-base-100"], [1, "h-full", "w-full", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [3, "diameter"]],
    template: function EmailTemplateManageComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2)(1, "form", 3)(2, "div", 4)(3, "a", 5)(4, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EmailTemplateManageComponent_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.save());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " Save Template ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Building");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-form-field", 12)(16, "mat-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, EmailTemplateManageComponent_mat_option_17_Template, 2, 2, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "A building is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 10)(22, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "mat-form-field", 12)(25, "mat-select", 16)(26, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, " Internal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, " External ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "A category is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 10)(33, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "Trigger");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "mat-form-field", 12)(36, "mat-select", 20)(37, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, EmailTemplateManageComponent_mat_option_39_Template, 2, 2, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](40, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "A trigger is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, " Placeholders ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "mat-menu", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](47, EmailTemplateManageComponent_button_47_Template, 6, 2, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 24)(49, "mat-form-field", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](50, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "A reply address is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "mat-form-field", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](54, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "A from address is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "mat-form-field", 12)(58, "app-icon", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, " description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](60, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "A title for the template is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](63, "rich-text-input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](64, EmailTemplateManageComponent_ng_template_64_Template, 5, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", (ctx.template == null ? null : ctx.template.id) ? "Edit" : "New", " Email Template ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](18, 8, ctx.buildings));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](40, 10, ctx.definitions));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.form.value.trigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", (ctx.active_trigger == null ? null : ctx.active_trigger.fields) || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](13, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("images_allowed", true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatPrefix, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuItem, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltip, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__.MatProgressSpinner, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatRipple, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _libs_form_fields_src_lib_rich_text_input_component__WEBPACK_IMPORTED_MODULE_4__.RichTextInputComponent, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_5__.IconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe]
  });
}

/***/ }),

/***/ 32482:
/*!**********************************************************************************!*\
  !*** ./apps/concierge/src/app/email-templates/email-templates-list.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailTemplatesListComponent: () => (/* binding */ EmailTemplatesListComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _email_templates_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-templates-state.service */ 46867);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 69434);
/* harmony import */ var _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/simple-table.component */ 88328);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _libs_components_src_lib_building_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/building.pipe */ 56062);


















const _c0 = () => ["/email-templates", "manage"];
const _c1 = () => ({
  key: "subject",
  name: "Title"
});
const _c2 = a0 => ({
  key: "category",
  name: "Category",
  show: a0
});
const _c3 = () => ({
  key: "trigger",
  name: "Trigger",
  empty: "No Trigger"
});
const _c4 = a0 => ({
  key: "zone_id",
  name: "Building",
  content: a0
});
const _c5 = a0 => ({
  key: "created_at",
  name: "Created",
  size: "8rem",
  content: a0
});
const _c6 = a0 => ({
  key: "actions",
  name: " ",
  size: "3.5rem",
  content: a0,
  sortable: false
});
const _c7 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
const _c8 = a0 => ["/email-templates", "manage", a0];
function EmailTemplatesListComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r2 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](2, 1, data_r2 * 1000, "mediumDate"), " ");
  }
}
function EmailTemplatesListComponent_ng_template_25_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " No Building ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function EmailTemplatesListComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "building");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, EmailTemplatesListComponent_ng_template_25_span_3_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "building");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_5_0;
    const data_r3 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, data_r3)) == null ? null : tmp_5_0.display_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 4, data_r3));
  }
}
function EmailTemplatesListComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 23)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-menu", null, 3)(5, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EmailTemplatesListComponent_ng_template_27_Template_button_click_5_listener() {
      const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4).row;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r5.sendTestEmail(row_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 25)(7, "app-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "send");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Send Test Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "a", 26)(12, "div", 25)(13, "app-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Edit Template");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EmailTemplatesListComponent_ng_template_27_Template_button_click_17_listener() {
      const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4).row;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r5.removeTemplate(row_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 25)(19, "app-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, " delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "Delete Template");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    const menu_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matMenuTriggerFor", menu_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](2, _c8, row_r5.id));
  }
}
class EmailTemplatesListComponent {
  constructor(_state, _org) {
    this._state = _state;
    this._org = _org;
    this.filters = this._state.filters;
    this.templates = this._state.filtered_templates;
    this.removeTemplate = t => this._state.removeTemplate(t);
  }
  setFilters(filters) {
    this._state.setFilters(filters);
  }
  sendTestEmail(template) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.sending_email = template.id;
      const stmp_system = _this._org.binding('smtp');
      if (!stmp_system) {
        return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifyError)('Mailing system not configured for application.');
      }
      const mod = (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_4__.getModule)(stmp_system, 'Mailer');
      yield mod.execute('send_mail', [(0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.currentUser)()?.email, template.subject, template.text, template.html, [],
      // resource attachments
      [],
      // attachments
      [],
      // cc
      [],
      // bcc
      template.reply_to || null,
      // reply_to
      template.from || (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.currentUser)()?.email // from
      ]);
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifySuccess)('Successfully sent test email');
      _this.sending_email = null;
    })();
  }
  static #_ = this.ɵfac = function EmailTemplatesListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || EmailTemplatesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_email_templates_state_service__WEBPACK_IMPORTED_MODULE_1__.EmailTemplatesStateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: EmailTemplatesListComponent,
    selectors: [["email-templates-list"]],
    decls: 29,
    vars: 27,
    consts: [["date_template", ""], ["bld_template", ""], ["actions_template", ""], ["menu", "matMenu"], [1, "absolute", "inset-0", "flex", "flex-col"], [1, "flex", "items-center", "justify-between", "p-8", "space-x-2"], [1, "text-2xl", "font-medium"], [1, "flex-1"], ["appearance", "outline", 1, "w-56", "no-subscript"], ["placeholder", "All Categories", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "internal"], ["value", "external"], ["btn", "", "matRipple", "", 3, "routerLink"], [1, "ml-2"], [1, "text-2xl"], [1, "h-1/2", "flex-1", "w-full", "px-8", "overflow-y-auto", "relative"], [1, "w-full", "min-h-full", "overflow-x-auto"], ["empty_message", "No group events for selected period", 1, "min-w-[56rem]", "w-full", "block", "text-sm", 3, "data", "columns", "sortable"], [1, "opacity-60", "p-4"], [1, "p-4"], ["class", "opacity-30", 4, "ngIf"], [1, "opacity-30"], ["icon", "", "matRipple", "", 1, "mx-auto", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], ["mat-menu-item", "", 3, "routerLink"], [1, "text-2xl", "text-error"]],
    template: function EmailTemplatesListComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Email Templates");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "mat-form-field", 8)(6, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function EmailTemplatesListComponent_Template_mat_select_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.setFilters({
            category: $event
          }));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "All Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Internal");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "External");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "a", 13)(15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Create Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "app-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 16)(20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "simple-table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](22, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, EmailTemplatesListComponent_ng_template_23_Template, 3, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"])(25, EmailTemplatesListComponent_ng_template_25_Template, 5, 6, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"])(27, EmailTemplatesListComponent_ng_template_27_Template, 23, 4, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        let tmp_3_0;
        let tmp_6_0;
        const date_template_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](24);
        const bld_template_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](26);
        const actions_template_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 5, ctx.filters)) == null ? null : tmp_3_0.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx.templates)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction6"](20, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](10, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](11, _c2, !((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](22, 7, ctx.filters)) == null ? null : tmp_6_0.category)), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](13, _c3), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](14, _c4, bld_template_r9), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](16, _c5, date_template_r8), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](18, _c6, actions_template_r10)))("sortable", true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_5__.IconComponent, _libs_components_src_lib_simple_table_component__WEBPACK_IMPORTED_MODULE_6__.SimpleTableComponent, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe, _libs_components_src_lib_building_pipe__WEBPACK_IMPORTED_MODULE_7__.BuildingPipe]
  });
}

/***/ }),

/***/ 46867:
/*!*********************************************************************************!*\
  !*** ./apps/concierge/src/app/email-templates/email-templates-state.service.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailTemplatesStateService: () => (/* binding */ EmailTemplatesStateService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 2510);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/ts-client */ 35713);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ 99908);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 90521);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 68824);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 71536);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 68757);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 71963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 29314);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 7841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 33602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37580);










class EmailTemplatesStateService {
  _processTemplates(metadata, zone_id) {
    const data = metadata.details;
    return ((data instanceof Array ? data : '') || []).map(template => ({
      ...template,
      zone_id
    }));
  }
  constructor(_org, _settings) {
    this._org = _org;
    this._settings = _settings;
    this._filters = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject({});
    this._change = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(0);
    this.template_definitions = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([this._org.active_building, this._org.active_region, this._change]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(([bld]) => !!bld), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.showMetadata)(this._org.organisation.id, 'email_template_fields').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(_ => {
      const definitions = _?.details || {};
      return Object.keys(definitions).map(key => ({
        id: key,
        name: definitions[key].name,
        description: definitions[key].description || '',
        fields: definitions[key].fields.map(field => ({
          name: field.name,
          description: field.description || ''
        }))
      }));
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)([])))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.shareReplay)(1));
    this.templates = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([this._org.active_building, this._org.active_region, this._change]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(([bld]) => !!bld), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(([bld, region]) => (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.forkJoin)([(0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.showMetadata)(this._org.organisation.id, 'email_templates').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(_ => this._processTemplates(_, this._org.organisation.id)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)([]))), (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.showMetadata)(bld.id, 'email_templates').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(_ => this._processTemplates(_, bld.id)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)([]))), region ? (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.showMetadata)(region.id, 'email_templates').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(_ => this._processTemplates(_, region.id)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)([]))) : (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)([])])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(([org_templates, bld_templates, region_templates]) => org_templates.concat(bld_templates).concat(region_templates)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.shareReplay)(1));
    this.filters = this._filters.asObservable();
    this.filtered_templates = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([this.templates, this.filters]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(([templates, filters]) => {
      const category = filters.category || '';
      return templates.filter(_ => _.category === category || category === '');
    }));
  }
  loadTemplate(id) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const template_list = yield _this.templates.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1)).toPromise();
      return template_list.find(_ => _.id === id);
    })();
  }
  saveTemplate(template) {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!template.zone_id) return;
      const template_list = yield _this2.templates.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1)).toPromise();
      if (!template.id) {
        template.id = `template-${(0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.randomString)(8)}`;
        template.created_at = (0,date_fns__WEBPACK_IMPORTED_MODULE_14__.getUnixTime)(Date.now());
      }
      template.updated_at = (0,date_fns__WEBPACK_IMPORTED_MODULE_14__.getUnixTime)(Date.now());
      const zone_templates = template_list.filter(_ => _.zone_id === template.zone_id);
      const template_value = {
        ...template
      };
      delete template_value.zone_id;
      console.log('Templates:', template_list);
      const new_template_list = [...zone_templates.filter(_ => _.id !== template.id), template];
      yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.updateMetadata)(template.zone_id, {
        name: `email_templates`,
        details: new_template_list,
        description: 'Email Templates for Zone'
      }).toPromise();
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifySuccess)('Successfully saved template');
    })();
  }
  removeTemplate(template) {
    var _this3 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const template_list = yield _this3.templates.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1)).toPromise();
      const zone_templates = template_list.filter(_ => _.zone_id === template.zone_id);
      const new_template_list = zone_templates.filter(_ => _.id !== template.id);
      yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.updateMetadata)(template.zone_id, {
        name: `email_templates`,
        details: new_template_list,
        description: 'Email Templates for Zone'
      }).toPromise();
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifySuccess)('Successfully removed template');
    })();
  }
  setFilters(filters) {
    this._filters.next({
      ...this._filters.getValue(),
      ...filters
    });
  }
  static #_ = this.ɵfac = function EmailTemplatesStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || EmailTemplatesStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjectable"]({
    token: EmailTemplatesStateService,
    factory: EmailTemplatesStateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 12703:
/*!*****************************************************************************!*\
  !*** ./apps/concierge/src/app/email-templates/email-templates.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailTemplatesComponent: () => (/* binding */ EmailTemplatesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/app-topbar.component */ 45189);
/* harmony import */ var _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/app-sidebar.component */ 96843);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);




const _c0 = ["app-email-templates", ""];
class EmailTemplatesComponent {
  static #_ = this.ɵfac = function EmailTemplatesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || EmailTemplatesComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: EmailTemplatesComponent,
    selectors: [["", "app-email-templates", ""]],
    attrs: _c0,
    decls: 5,
    vars: 0,
    consts: [[1, "flex", "flex-1", "h-px"], [1, "relative", "flex", "flex-col", "flex-1", "w-1/2", "h-full"]],
    template: function EmailTemplatesComponent_Template(rf, ctx) {
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
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n                background-color: var(--b1);\n            }\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLXRlbXBsYXRlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsMkJBQTJCO1lBQy9CIiwiZmlsZSI6ImVtYWlsLXRlbXBsYXRlcy5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWIxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvZW1haWwtdGVtcGxhdGVzL2VtYWlsLXRlbXBsYXRlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsMkJBQTJCO1lBQy9COztBQUVaLDRuQkFBNG5CIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 59166:
/*!**************************************************************************!*\
  !*** ./apps/concierge/src/app/email-templates/email-templates.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailTemplatesModule: () => (/* binding */ EmailTemplatesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _placeos_spaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/spaces */ 44855);
/* harmony import */ var _placeos_form_fields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/form-fields */ 63046);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/bookings */ 85616);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/ui.module */ 15412);
/* harmony import */ var _email_templates_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./email-templates.component */ 12703);
/* harmony import */ var _email_templates_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./email-templates-list.component */ 32482);
/* harmony import */ var _email_template_manage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./email-template-manage.component */ 31986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);












const ROUTES = [{
  path: '',
  component: _email_templates_component__WEBPACK_IMPORTED_MODULE_4__.EmailTemplatesComponent,
  children: [{
    path: '',
    component: _email_templates_list_component__WEBPACK_IMPORTED_MODULE_5__.EmailTemplatesListComponent
  }]
}, {
  path: 'manage',
  component: _email_template_manage_component__WEBPACK_IMPORTED_MODULE_6__.EmailTemplateManageComponent
}, {
  path: 'manage/:id',
  component: _email_template_manage_component__WEBPACK_IMPORTED_MODULE_6__.EmailTemplateManageComponent
}, {
  path: '**',
  redirectTo: ''
}];
class EmailTemplatesModule {
  static #_ = this.ɵfac = function EmailTemplatesModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || EmailTemplatesModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: EmailTemplatesModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_3__.UIModule, _placeos_spaces__WEBPACK_IMPORTED_MODULE_0__.SharedSpacesModule, _placeos_bookings__WEBPACK_IMPORTED_MODULE_2__.SharedBookingsModule, _placeos_form_fields__WEBPACK_IMPORTED_MODULE_1__.FormFieldsModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(ROUTES)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](EmailTemplatesModule, {
    declarations: [_email_templates_component__WEBPACK_IMPORTED_MODULE_4__.EmailTemplatesComponent, _email_templates_list_component__WEBPACK_IMPORTED_MODULE_5__.EmailTemplatesListComponent, _email_template_manage_component__WEBPACK_IMPORTED_MODULE_6__.EmailTemplateManageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_3__.UIModule, _placeos_spaces__WEBPACK_IMPORTED_MODULE_0__.SharedSpacesModule, _placeos_bookings__WEBPACK_IMPORTED_MODULE_2__.SharedBookingsModule, _placeos_form_fields__WEBPACK_IMPORTED_MODULE_1__.FormFieldsModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ }),

/***/ 85616:
/*!************************************!*\
  !*** ./libs/bookings/src/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Booking: () => (/* reexport safe */ _lib_booking_class__WEBPACK_IMPORTED_MODULE_2__.Booking),
/* harmony export */   BookingCardComponent: () => (/* reexport safe */ _lib_booking_card_component__WEBPACK_IMPORTED_MODULE_8__.BookingCardComponent),
/* harmony export */   BookingDetailsModalComponent: () => (/* reexport safe */ _lib_booking_details_modal_component__WEBPACK_IMPORTED_MODULE_7__.BookingDetailsModalComponent),
/* harmony export */   BookingFormService: () => (/* reexport safe */ _lib_booking_form_service__WEBPACK_IMPORTED_MODULE_1__.BookingFormService),
/* harmony export */   DAYS_OF_WEEK_INDEX: () => (/* reexport safe */ _lib_booking_class__WEBPACK_IMPORTED_MODULE_2__.DAYS_OF_WEEK_INDEX),
/* harmony export */   DesksService: () => (/* reexport safe */ _lib_desk_service__WEBPACK_IMPORTED_MODULE_5__.DesksService),
/* harmony export */   FAV_PARKING_KEY: () => (/* reexport safe */ _lib_parking_select_modal_parking_select_modal_component__WEBPACK_IMPORTED_MODULE_9__.FAV_PARKING_KEY),
/* harmony export */   LockersService: () => (/* reexport safe */ _lib_lockers_service__WEBPACK_IMPORTED_MODULE_6__.LockersService),
/* harmony export */   ParkingService: () => (/* reexport safe */ _lib_parking_service__WEBPACK_IMPORTED_MODULE_10__.ParkingService),
/* harmony export */   ParkingSpaceSelectModalComponent: () => (/* reexport safe */ _lib_parking_select_modal_parking_select_modal_component__WEBPACK_IMPORTED_MODULE_9__.ParkingSpaceSelectModalComponent),
/* harmony export */   RecurrenceDays: () => (/* reexport safe */ _lib_booking_class__WEBPACK_IMPORTED_MODULE_2__.RecurrenceDays),
/* harmony export */   SharedBookingsModule: () => (/* reexport safe */ _lib_bookings_module__WEBPACK_IMPORTED_MODULE_0__.SharedBookingsModule),
/* harmony export */   WeekOfMonth: () => (/* reexport safe */ _lib_booking_class__WEBPACK_IMPORTED_MODULE_2__.WeekOfMonth),
/* harmony export */   approveBooking: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.approveBooking),
/* harmony export */   approveBookingInstance: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.approveBookingInstance),
/* harmony export */   bookedResourceList: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.bookedResourceList),
/* harmony export */   bookingAddGuest: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.bookingAddGuest),
/* harmony export */   bookingRemoveGuest: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.bookingRemoveGuest),
/* harmony export */   checkinBooking: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.checkinBooking),
/* harmony export */   checkinBookingAttendee: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.checkinBookingAttendee),
/* harmony export */   checkinBookingGuest: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.checkinBookingGuest),
/* harmony export */   checkinBookingInstance: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.checkinBookingInstance),
/* harmony export */   createBooking: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.createBooking),
/* harmony export */   createBookingsForEvent: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.createBookingsForEvent),
/* harmony export */   findNearbyFeature: () => (/* reexport safe */ _lib_booking_utilities__WEBPACK_IMPORTED_MODULE_3__.findNearbyFeature),
/* harmony export */   generateBookingForm: () => (/* reexport safe */ _lib_booking_utilities__WEBPACK_IMPORTED_MODULE_3__.generateBookingForm),
/* harmony export */   isResourceAvailable: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.isResourceAvailable),
/* harmony export */   newBookingFromCalendarEvent: () => (/* reexport safe */ _lib_booking_utilities__WEBPACK_IMPORTED_MODULE_3__.newBookingFromCalendarEvent),
/* harmony export */   queryAllBookings: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.queryAllBookings),
/* harmony export */   queryBookingGuests: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.queryBookingGuests),
/* harmony export */   queryBookings: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.queryBookings),
/* harmony export */   queryPagedBookings: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.queryPagedBookings),
/* harmony export */   queryResourceAvailability: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.queryResourceAvailability),
/* harmony export */   rejectBooking: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.rejectBooking),
/* harmony export */   rejectBookingInstance: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.rejectBookingInstance),
/* harmony export */   removeBooking: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.removeBooking),
/* harmony export */   removeBookingInstance: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.removeBookingInstance),
/* harmony export */   saveBooking: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.saveBooking),
/* harmony export */   setBookingState: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.setBookingState),
/* harmony export */   showBooking: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.showBooking),
/* harmony export */   updateBooking: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.updateBooking),
/* harmony export */   updateBookingInductionStatus: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.updateBookingInductionStatus),
/* harmony export */   updateBookingInstance: () => (/* reexport safe */ _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__.updateBookingInstance)
/* harmony export */ });
/* harmony import */ var _lib_bookings_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/bookings.module */ 38742);
/* harmony import */ var _lib_booking_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/booking-form.service */ 18379);
/* harmony import */ var _lib_booking_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/booking.class */ 53857);
/* harmony import */ var _lib_booking_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/booking.utilities */ 17141);
/* harmony import */ var _lib_bookings_fn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/bookings.fn */ 18026);
/* harmony import */ var _lib_desk_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/desk.service */ 74350);
/* harmony import */ var _lib_lockers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/lockers.service */ 98796);
/* harmony import */ var _lib_booking_details_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/booking-details-modal.component */ 1781);
/* harmony import */ var _lib_booking_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/booking-card.component */ 27547);
/* harmony import */ var _lib_parking_select_modal_parking_select_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/parking-select-modal/parking-select-modal.component */ 67642);
/* harmony import */ var _lib_parking_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/parking.service */ 1593);













/***/ }),

/***/ 74350:
/*!***********************************************!*\
  !*** ./libs/bookings/src/lib/desk.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DesksService: () => (/* binding */ DesksService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 22797);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 99908);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 33240);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 56441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 57871);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 35443);
/* harmony import */ var libs_organisation_src_lib_organisation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! libs/organisation/src/lib/organisation.service */ 19863);
/* harmony import */ var _bookings_fn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookings.fn */ 18026);
/* harmony import */ var _desk_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./desk-confirm-modal.component */ 3367);
/* harmony import */ var _desk_questions_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./desk-questions-modal.component */ 67254);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 12587);












class DesksService {
  constructor(_org, _dialog) {
    this._org = _org;
    this._dialog = _dialog;
    this.can_set_date = true;
    this.error_on_host = true;
  }
  bookDesk({
    desks,
    host,
    reason,
    attendees,
    date
  }) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.error_on_host && !host) {
        return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)('You need to select a host to book a desk.');
      } else {
        host = host || (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.currentUser)();
      }
      reason = reason || '';
      const level = _this._org.levelWithID(desks[0].zone instanceof Array ? desks[0].zone : [desks[0].zone?.id]);
      let ref = _this._dialog.open(_desk_questions_modal_component__WEBPACK_IMPORTED_MODULE_5__.DeskQuestionsModalComponent);
      let success = yield Promise.race([ref.componentInstance.event.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.first)(_ => _.reason === 'done')).toPromise(), ref.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(_ => null)).toPromise()]);
      if (!success) return;
      ref.close();
      ref = _this._dialog.open(_desk_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__.DeskConfirmModalComponent, {
        data: {
          host,
          desks,
          date: date ? new Date(date) : new Date(),
          reason,
          level,
          can_set_date: _this.can_set_date
        }
      });
      success = yield Promise.race([ref.componentInstance.event.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.first)(_ => _.reason === 'done')).toPromise(), ref.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(_ => null)).toPromise()]);
      if (!success) return;
      host = ref.componentInstance.host || host;
      date = ref.componentInstance.date || date;
      reason = ref.componentInstance.reason || reason;
      if (!host) {
        ref.close();
        return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)('You need to select a host to book a desk. ');
      }
      ref.componentInstance.loading = 'Checking for existing desk bookings...';
      const bookings = yield (0,_bookings_fn__WEBPACK_IMPORTED_MODULE_3__.queryBookings)({
        type: 'desk',
        period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.getUnixTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_9__.startOfDay)(date || new Date())),
        period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.getUnixTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_10__.endOfDay)(date || new Date()))
      }).toPromise();
      const desk_list = bookings.filter(d => d.user_email.toLowerCase() === host.email.toLowerCase());
      if (desk_list?.length) {
        ref.close();
        return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)('You currently already have a desk booked for the selected date.');
      }
      ref.componentInstance.loading = 'Booking desk...';
      const users = [host, ...(attendees || [])];
      yield Promise.all([desks.map((desk, idx) => _this.makeDeskBooking(desk, host, date.valueOf() || new Date().valueOf(), reason, users[idx]))]);
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifySuccess)('Successfully booked desk');
      ref.close();
      return true;
    })();
  }
  makeDeskBooking(desk, host, date, reason, for_user = null) {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const location = `${desk.zone?.name}-${desk.id}`;
      const level = _this2._org.levelWithID(desk.zone instanceof Array ? desk.zone : [desk.zone?.id]);
      const zones = desk.zone?.id ? [desk.zone?.id, level?.parent_id] : [level?.parent_id];
      const booking_data = {
        booking_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.getUnixTime)((0,date_fns__WEBPACK_IMPORTED_MODULE_9__.startOfDay)(date)),
        user_id: for_user?.id || host.id,
        user_name: for_user?.name || host.name,
        user_email: for_user?.email || host.email,
        booking_end: Math.floor((0,date_fns__WEBPACK_IMPORTED_MODULE_10__.endOfDay)(date).valueOf() / 1000),
        asset_id: desk.id,
        asset_name: desk.name,
        title: reason,
        description: location,
        zones,
        booking_type: 'desk',
        extension_data: {
          map_id: desk?.map_id || desk?.id,
          groups: desk.groups,
          for_user: for_user?.email
        }
      };
      return (0,_bookings_fn__WEBPACK_IMPORTED_MODULE_3__.saveBooking)(booking_data).toPromise();
    })();
  }
  static #_ = this.ɵfac = function DesksService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DesksService)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](libs_organisation_src_lib_organisation_service__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
    token: DesksService,
    factory: DesksService.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

}]);
//# sourceMappingURL=apps_concierge_src_app_email-templates_email-templates_module_ts.js.map