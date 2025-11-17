import {
  EmailTemplatesListComponent,
  EmailTemplatesStateService
} from "./chunk-MM4V7IQY.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent
} from "./chunk-G36UUYE3.js";
import {
  ActivatedRoute,
  AsyncHandler,
  AsyncPipe,
  Clipboard,
  CommonModule,
  Component,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  IconComponent,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatOption,
  MatPrefix,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSelect,
  MatSelectModule,
  MatTooltip,
  MatTooltipModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModule,
  OrganisationService,
  ReactiveFormsModule,
  RichTextInputComponent,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  TranslatePipe,
  Validators,
  __spreadProps,
  __spreadValues,
  extractTextFromHTML,
  i18n,
  inject,
  nextValueFrom,
  notifySuccess,
  setClassMetadata,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JMWE3Z3Z.js";

// apps/concierge/src/app/email-templates/email-template-manage.component.ts
var _c0 = () => [];
var _c1 = () => ["/email-templates"];
function EmailTemplateManageComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c1));
  }
}
function EmailTemplateManageComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r2 = ctx.$implicit;
    \u0275\u0275property("value", bld_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bld_r2.display_name || bld_r2.name, " ");
  }
}
function EmailTemplateManageComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.TRIGGER_SELECT"), " ");
  }
}
function EmailTemplateManageComponent_For_42_For_3_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 22);
    \u0275\u0275text(1, "done");
    \u0275\u0275elementEnd();
  }
}
function EmailTemplateManageComponent_For_42_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function EmailTemplateManageComponent_For_42_For_3_Template_button_click_0_listener() {
      const tmpl_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.form.patchValue({ trigger: tmpl_r4.id }));
    });
    \u0275\u0275elementStart(1, "div", 37)(2, "div", 38)(3, "div", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 40);
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 41);
    \u0275\u0275text(8, ":");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(9, EmailTemplateManageComponent_For_42_For_3_Conditional_9_Template, 2, 0, "icon", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tmpl_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", tmpl_r4.description, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", tmpl_r4.name || tmpl_r4.module_name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r4.form.value.trigger === tmpl_r4.id ? 9 : -1);
  }
}
function EmailTemplateManageComponent_For_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(2, EmailTemplateManageComponent_For_42_For_3_Template, 10, 3, "button", 26, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const group_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(group_r6.name);
    \u0275\u0275advance();
    \u0275\u0275repeater(group_r6.items);
  }
}
function EmailTemplateManageComponent_For_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function EmailTemplateManageComponent_For_50_Template_button_click_0_listener() {
      const field_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.copyField(field_r8.name));
    });
    \u0275\u0275elementStart(1, "div", 42)(2, "div", 43);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 39);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const field_r8 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", field_r8.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", field_r8.description, " ");
  }
}
function EmailTemplateManageComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "APP.CONCIERGE.EMAIL_TEMPLATES_PLACEHOLDERS_EMPTY"), " ");
  }
}
function EmailTemplateManageComponent_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 35)(1, "button", 44);
    \u0275\u0275listener("click", function EmailTemplateManageComponent_Conditional_74_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.save());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.EMAIL_TEMPLATES_SAVE"), " ");
  }
}
function EmailTemplateManageComponent_ng_template_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46);
    \u0275\u0275element(2, "mat-spinner", 47);
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.loading);
  }
}
var _EmailTemplateManageComponent = class _EmailTemplateManageComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._org = inject(OrganisationService);
    this._state = inject(EmailTemplatesStateService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._clipboard = inject(Clipboard);
    this.loading = "";
    this.definitions = this._state.template_groups;
    this.buildings = this._org.building_list;
    this.form = new FormGroup({
      id: new FormControl(""),
      reply_to: new FormControl(""),
      from: new FormControl(""),
      subject: new FormControl("", [Validators.required]),
      category: new FormControl("internal"),
      trigger: new FormControl(""),
      html: new FormControl("", [Validators.required]),
      zone_id: new FormControl("")
    });
    this.active_trigger = null;
  }
  ngOnInit() {
    this.subscription("route.params", this._route.paramMap.subscribe(async (params) => {
      if (params.has("id")) {
        this.loading = i18n("APP.CONCIERGE.EMAIL_TEMPLATES_LOADING");
        this.template = await this._state.loadTemplate(params.get("id"));
        this.loading = "";
        console.log("Template:", this.template);
        if (!this.template) {
          this._router.navigate(["/email-templates", "manage"]);
        } else {
          this.form.patchValue(this.template);
        }
      }
    }));
    this.subscription("trigger", this.form.valueChanges.subscribe(async (value) => {
      if (value.trigger) {
        const trigger_list = await nextValueFrom(this._state.template_definitions);
        this.active_trigger = trigger_list.find((_) => _.id === value.trigger);
      }
    }));
  }
  copyField(field) {
    this._clipboard.copy(`%{${field}}`);
    notifySuccess(i18n("APP.CONCIERGE.EMAIL_TEMPLATES_COPIED_FIELD", { field }));
  }
  async save() {
    this.loading = i18n("APP.CONCIERGE.EMAIL_TEMPLATES_SAVING");
    const zone = this.template?.zone_id !== this.form.value.zone_id ? this.template?.zone_id : "";
    await this._state.saveTemplate(__spreadProps(__spreadValues(__spreadValues({}, this.template || {}), this.form.getRawValue()), {
      text: extractTextFromHTML(this.form.getRawValue().html || "")
    }), zone).catch((e) => {
      this.loading = "";
      throw e;
    });
    this.loading = "";
    this._router.navigate(["/email-templates"]);
  }
};
_EmailTemplateManageComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275EmailTemplateManageComponent_BaseFactory;
  return function EmailTemplateManageComponent_Factory(__ngFactoryType__) {
    return (\u0275EmailTemplateManageComponent_BaseFactory || (\u0275EmailTemplateManageComponent_BaseFactory = \u0275\u0275getInheritedFactory(_EmailTemplateManageComponent)))(__ngFactoryType__ || _EmailTemplateManageComponent);
  };
})();
_EmailTemplateManageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailTemplateManageComponent, selectors: [["email-template-manage"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 77, vars: 58, consts: [["trigger_menu", "matMenu"], ["tracking_menu", "matMenu"], ["load_state", ""], [1, "absolute", "inset-0", "overflow-auto", "bg-base-200"], [1, "absolute", "left-1/2", "top-0", "h-full", "w-[41rem]", "max-w-full", "-translate-x-1/2", "border-x", "border-base-300", "bg-base-100"], [1, "sticky", "top-0", "z-20", "mx-auto", "my-2", "flex", "w-full", "max-w-[40rem]", "items-center", "justify-between", "rounded", "border-none", "bg-base-200", "px-4", "py-2"], [1, "text-xl", "font-medium"], ["icon", "", "matRipple", "", 3, "routerLink"], [1, "relative", "z-10", "mx-auto", "w-full", "max-w-[40rem]", "overflow-visible", "p-2", 3, "formGroup"], [1, "flex", "items-center", "space-x-4"], [1, "w-1/4", "flex-1", "space-y-2"], ["for", "zone"], ["appearance", "outline", 1, "w-full"], ["name", "zone", "formControlName", "zone_id", 3, "placeholder"], ["value", ""], [3, "value"], [1, "w-1/4", "flex-1", "space-y-2", "pb-6"], ["for", "trigger"], ["btn", "", "matRipple", "", 1, "inverse", "flex", "h-12", "w-full", "items-center", "justify-between", "rounded", "border", "border-base-300", "px-2", 3, "click", "matMenuTriggerFor"], [1, "flex", "w-1/2", "flex-1", "flex-col", "px-2", "text-left", "leading-tight"], [1, "truncate"], [1, "truncate", "opacity-30"], [1, "text-2xl"], [1, "max-h-[24rem]"], ["mat-menu-item", "", 3, "click"], ["btn", "", "matRipple", "", "matTooltip", "Values that get replaced in the email template when sent", 1, "mt-2", "flex-1", 3, "disabled", "matMenuTriggerFor"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "disabled"], [1, "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "flex-1"], ["matInput", "", "formControlName", "reply_to", 3, "placeholder"], ["matInput", "", "formControlName", "from", 3, "placeholder"], ["matPrefix", "", 1, "relative", "-left-1", "text-2xl"], ["matInput", "", "placeholder", "Template Subject", "formControlName", "subject"], ["formControlName", "html", 1, "block", "min-h-[calc(100vh-32rem)]", 3, "placeholder", "images_allowed"], [1, "fixed", "bottom-0", "left-1/2", "z-20", "mx-auto", "my-2", "flex", "w-full", "max-w-[640px]", "-translate-x-1/2", "items-center", "justify-end", "rounded", "border-none", "bg-base-200", "px-4", "py-2"], [1, "p-4"], [1, "flex", "items-center", "space-x-2", "pl-2"], [1, "my-2", "flex", "flex-1", "flex-col-reverse", "leading-tight"], [1, "text-xs", "opacity-30"], [1, "text-sm"], [1, "opacity-0"], [1, "flex", "flex-col", "leading-tight"], [1, "font-mono", "text-sm"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"], [1, "absolute", "inset-0", "bg-base-100"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-2"], [3, "diameter"]], template: function EmailTemplateManageComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementStart(2, "header", 5)(3, "h2", 6);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, EmailTemplateManageComponent_Conditional_6_Template, 3, 2, "a", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "form", 8)(8, "div", 9)(9, "div", 10)(10, "label", 11);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-form-field", 12)(14, "mat-select", 13);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementStart(16, "mat-option", 14);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(19, EmailTemplateManageComponent_For_20_Template, 2, 2, "mat-option", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "mat-error");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 16)(26, "label", 17);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 18);
    \u0275\u0275listener("click", function EmailTemplateManageComponent_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.form.controls.trigger.markAsTouched());
    });
    \u0275\u0275elementStart(30, "div", 19)(31, "div", 20);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(33, EmailTemplateManageComponent_Conditional_33_Template, 3, 3, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "icon", 22);
    \u0275\u0275text(35, " arrow_drop_down ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "mat-menu", 23, 0)(38, "button", 24);
    \u0275\u0275listener("click", function EmailTemplateManageComponent_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.form.patchValue({ trigger: "" }));
    });
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(41, EmailTemplateManageComponent_For_42_Template, 4, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(43, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "button", 25);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "mat-menu", 23, 1);
    \u0275\u0275repeaterCreate(49, EmailTemplateManageComponent_For_50_Template, 6, 2, "button", 26, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(51, EmailTemplateManageComponent_Conditional_51_Template, 3, 4, "button", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 28)(53, "mat-form-field", 29);
    \u0275\u0275element(54, "input", 30);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275elementStart(56, "mat-error");
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "mat-form-field", 29);
    \u0275\u0275element(60, "input", 31);
    \u0275\u0275pipe(61, "translate");
    \u0275\u0275elementStart(62, "mat-error");
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "mat-form-field", 12)(66, "icon", 32);
    \u0275\u0275text(67, " description ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(68, "input", 33);
    \u0275\u0275elementStart(69, "mat-error");
    \u0275\u0275text(70);
    \u0275\u0275pipe(71, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(72, "rich-text-input", 34);
    \u0275\u0275pipe(73, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(74, EmailTemplateManageComponent_Conditional_74_Template, 4, 3, "footer", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275template(75, EmailTemplateManageComponent_ng_template_75_Template, 5, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const trigger_menu_r10 = \u0275\u0275reference(37);
    const tracking_menu_r11 = \u0275\u0275reference(48);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 24, (ctx.template == null ? null : ctx.template.id) ? "APP.CONCIERGE.EMAIL_TEMPLATES_EDIT" : "APP.CONCIERGE.EMAIL_TEMPLATES_NEW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 26, "RESOURCE.BUILDING"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(15, 28, "COMMON.BUILDING_SELECT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 30, "COMMON.BUILDING_EMPTY"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(21, 32, ctx.buildings));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 34, "COMMON.BUILDING_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 36, "COMMON.TRIGGER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", trigger_menu_r10);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (ctx.active_trigger == null ? null : ctx.active_trigger.name) || (ctx.active_trigger == null ? null : ctx.active_trigger.module_name), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.active_trigger ? 33 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 38, "COMMON.NONE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(43, 40, ctx.definitions));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx.form.value.trigger)("matMenuTriggerFor", tracking_menu_r11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(46, 42, "APP.CONCIERGE.EMAIL_TEMPLATES_PLACEHOLDERS"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater((ctx.active_trigger == null ? null : ctx.active_trigger.fields) || \u0275\u0275pureFunction0(56, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!((ctx.active_trigger == null ? null : ctx.active_trigger.fields) || \u0275\u0275pureFunction0(57, _c0)).length ? 51 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(55, 44, "APP.CONCIERGE.EMAIL_TEMPLATES_REPLY_TO"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 46, "APP.CONCIERGE.EMAIL_TEMPLATES_REPLY_TO_REQUIRED"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(61, 48, "APP.CONCIERGE.EMAIL_TEMPLATES_FROM"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(64, 50, "APP.CONCIERGE.EMAIL_TEMPLATES_FROM_REQUIRED"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(71, 52, "APP.CONCIERGE.EMAIL_TEMPLATES_SUBJECT_REQUIRED"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(73, 54, "APP.CONCIERGE.EMAIL_TEMPLATES_BODY"))("images_allowed", true);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading ? 74 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  RouterModule,
  RouterLink,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  TranslatePipe,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  RichTextInputComponent,
  MatFormFieldModule,
  MatFormField,
  MatError,
  MatPrefix,
  MatInputModule,
  MatInput,
  MatSelectModule,
  MatSelect,
  MatOption,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatTooltipModule,
  MatTooltip,
  IconComponent
], encapsulation: 2 });
var EmailTemplateManageComponent = _EmailTemplateManageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailTemplateManageComponent, [{
    type: Component,
    args: [{ selector: "email-template-manage", template: `
        <div class="absolute inset-0 overflow-auto bg-base-200">
            <div
                class="absolute left-1/2 top-0 h-full w-[41rem] max-w-full -translate-x-1/2 border-x border-base-300 bg-base-100"
            ></div>
            <header
                class="sticky top-0 z-20 mx-auto my-2 flex w-full max-w-[40rem] items-center justify-between rounded border-none bg-base-200 px-4 py-2"
            >
                <h2 class="text-xl font-medium">
                    {{
                        (template?.id
                            ? 'APP.CONCIERGE.EMAIL_TEMPLATES_EDIT'
                            : 'APP.CONCIERGE.EMAIL_TEMPLATES_NEW'
                        ) | translate
                    }}
                </h2>
                @if (!loading) {
                    <a icon matRipple [routerLink]="['/email-templates']">
                        <icon>close</icon>
                    </a>
                }
            </header>
            <form
                class="relative z-10 mx-auto w-full max-w-[40rem] overflow-visible p-2"
                [formGroup]="form"
            >
                <div class="flex items-center space-x-4">
                    <div class="w-1/4 flex-1 space-y-2">
                        <label for="zone">
                            {{ 'RESOURCE.BUILDING' | translate }}
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="zone"
                                [placeholder]="
                                    'COMMON.BUILDING_SELECT' | translate
                                "
                                formControlName="zone_id"
                            >
                                <mat-option value="">{{
                                    'COMMON.BUILDING_EMPTY' | translate
                                }}</mat-option>
                                @for (bld of buildings | async; track bld) {
                                    <mat-option [value]="bld.id">
                                        {{ bld.display_name || bld.name }}
                                    </mat-option>
                                }
                            </mat-select>
                            <mat-error>{{
                                'COMMON.BUILDING_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="w-1/4 flex-1 space-y-2 pb-6">
                        <label for="trigger">
                            {{ 'COMMON.TRIGGER' | translate }}
                        </label>
                        <button
                            class="inverse flex h-12 w-full items-center justify-between rounded border border-base-300 px-2"
                            btn
                            matRipple
                            [matMenuTriggerFor]="trigger_menu"
                            (click)="form.controls.trigger.markAsTouched()"
                        >
                            <div
                                class="flex w-1/2 flex-1 flex-col px-2 text-left leading-tight"
                            >
                                <div class="truncate">
                                    {{
                                        active_trigger?.name ||
                                            active_trigger?.module_name
                                    }}
                                </div>
                                @if (!active_trigger) {
                                    <div class="truncate opacity-30">
                                        {{
                                            'COMMON.TRIGGER_SELECT' | translate
                                        }}
                                    </div>
                                }
                            </div>
                            <icon class="text-2xl"> arrow_drop_down </icon>
                        </button>
                        <mat-menu #trigger_menu="matMenu" class="max-h-[24rem]">
                            <button
                                mat-menu-item
                                (click)="form.patchValue({ trigger: '' })"
                            >
                                {{ 'COMMON.NONE' | translate }}
                            </button>
                            @for (group of definitions | async; track group) {
                                <label class="p-4">{{ group.name }}</label>
                                @for (tmpl of group.items; track tmpl) {
                                    <button
                                        mat-menu-item
                                        (click)="
                                            form.patchValue({
                                                trigger: tmpl.id,
                                            })
                                        "
                                    >
                                        <div
                                            class="flex items-center space-x-2 pl-2"
                                        >
                                            <div
                                                class="my-2 flex flex-1 flex-col-reverse leading-tight"
                                            >
                                                <div class="text-xs opacity-30">
                                                    {{ tmpl.description }}
                                                </div>
                                                <div class="text-sm">
                                                    {{
                                                        tmpl.name ||
                                                            tmpl.module_name
                                                    }}
                                                    <span class="opacity-0"
                                                        >:</span
                                                    >
                                                </div>
                                            </div>
                                            @if (
                                                form.value.trigger === tmpl.id
                                            ) {
                                                <icon class="text-2xl"
                                                    >done</icon
                                                >
                                            }
                                        </div>
                                    </button>
                                }
                            }
                        </mat-menu>
                    </div>
                    <button
                        btn
                        matRipple
                        class="mt-2 flex-1"
                        matTooltip="Values that get replaced in the email template when sent"
                        [disabled]="!form.value.trigger"
                        [matMenuTriggerFor]="tracking_menu"
                    >
                        {{
                            'APP.CONCIERGE.EMAIL_TEMPLATES_PLACEHOLDERS'
                                | translate
                        }}
                    </button>
                    <mat-menu #tracking_menu="matMenu" class="max-h-[24rem]">
                        @for (
                            field of active_trigger?.fields || [];
                            track field
                        ) {
                            <button
                                mat-menu-item
                                (click)="copyField(field.name)"
                            >
                                <div class="flex flex-col leading-tight">
                                    <div class="font-mono text-sm">
                                        {{ field.name }}
                                    </div>
                                    <div class="text-xs opacity-30">
                                        {{ field.description }}
                                    </div>
                                </div>
                            </button>
                        }
                        @if (!(active_trigger?.fields || []).length) {
                            <button mat-menu-item [disabled]="true">
                                {{
                                    'APP.CONCIERGE.EMAIL_TEMPLATES_PLACEHOLDERS_EMPTY'
                                        | translate
                                }}
                            </button>
                        }
                    </mat-menu>
                </div>
                <div class="flex items-center space-x-2">
                    <mat-form-field appearance="outline" class="flex-1">
                        <input
                            matInput
                            [placeholder]="
                                'APP.CONCIERGE.EMAIL_TEMPLATES_REPLY_TO'
                                    | translate
                            "
                            formControlName="reply_to"
                        />
                        <mat-error>{{
                            'APP.CONCIERGE.EMAIL_TEMPLATES_REPLY_TO_REQUIRED'
                                | translate
                        }}</mat-error>
                    </mat-form-field>
                    <mat-form-field appearance="outline" class="flex-1">
                        <input
                            matInput
                            [placeholder]="
                                'APP.CONCIERGE.EMAIL_TEMPLATES_FROM' | translate
                            "
                            formControlName="from"
                        />
                        <mat-error>{{
                            'APP.CONCIERGE.EMAIL_TEMPLATES_FROM_REQUIRED'
                                | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <mat-form-field appearance="outline" class="w-full">
                    <icon matPrefix class="relative -left-1 text-2xl">
                        description
                    </icon>
                    <input
                        matInput
                        placeholder="Template Subject"
                        formControlName="subject"
                    />
                    <mat-error>{{
                        'APP.CONCIERGE.EMAIL_TEMPLATES_SUBJECT_REQUIRED'
                            | translate
                    }}</mat-error>
                </mat-form-field>
                <rich-text-input
                    formControlName="html"
                    [placeholder]="
                        'APP.CONCIERGE.EMAIL_TEMPLATES_BODY' | translate
                    "
                    [images_allowed]="true"
                    class="block min-h-[calc(100vh-32rem)]"
                ></rich-text-input>
            </form>
            @if (!loading) {
                <footer
                    class="fixed bottom-0 left-1/2 z-20 mx-auto my-2 flex w-full max-w-[640px] -translate-x-1/2 items-center justify-end rounded border-none bg-base-200 px-4 py-2"
                >
                    <button btn matRipple class="w-40" (click)="save()">
                        {{ 'APP.CONCIERGE.EMAIL_TEMPLATES_SAVE' | translate }}
                    </button>
                </footer>
            }
        </div>
        <ng-template #load_state>
            <div class="absolute inset-0 bg-base-100">
                <div
                    class="flex h-full w-full flex-col items-center justify-center space-y-2"
                >
                    <mat-spinner [diameter]="32"></mat-spinner>
                    <p>{{ loading }}</p>
                </div>
            </div>
        </ng-template>
    `, imports: [
      CommonModule,
      RouterModule,
      MatProgressSpinnerModule,
      TranslatePipe,
      ReactiveFormsModule,
      RichTextInputComponent,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatMenuModule,
      MatTooltipModule,
      IconComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmailTemplateManageComponent, { className: "EmailTemplateManageComponent", filePath: "apps/concierge/src/app/email-templates/email-template-manage.component.ts", lineNumber: 298 });
})();

// apps/concierge/src/app/email-templates/email-templates.component.ts
var _c02 = ["app-email-templates", ""];
var _EmailTemplatesComponent = class _EmailTemplatesComponent {
};
_EmailTemplatesComponent.\u0275fac = function EmailTemplatesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EmailTemplatesComponent)();
};
_EmailTemplatesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailTemplatesComponent, selectors: [["", "app-email-templates", ""]], attrs: _c02, decls: 5, vars: 0, consts: [[1, "flex", "h-px", "flex-1"], [1, "relative", "flex", "h-full", "w-1/2", "flex-1", "flex-col"]], template: function EmailTemplatesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 1);
    \u0275\u0275element(4, "router-outlet");
    \u0275\u0275elementEnd()();
  }
}, dependencies: [
  ApplicationTopbarComponent,
  ApplicationSidebarComponent,
  RouterModule,
  RouterOutlet
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=email-templates.component.css.map */"] });
var EmailTemplatesComponent = _EmailTemplatesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailTemplatesComponent, [{
    type: Component,
    args: [{ selector: "[app-email-templates]", template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="relative flex h-full w-1/2 flex-1 flex-col">
                <router-outlet></router-outlet>
            </main>
        </div>
    `, imports: [
      ApplicationTopbarComponent,
      ApplicationSidebarComponent,
      RouterModule
    ], styles: ["/* angular:styles/component:css;8c4a04aa555db379bf6f094c3ef1278e1f19da8fa9947c76cf85d1411aeb75c3;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/email-templates/email-templates.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=email-templates.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmailTemplatesComponent, { className: "EmailTemplatesComponent", filePath: "apps/concierge/src/app/email-templates/email-templates.component.ts", lineNumber: 34 });
})();

// apps/concierge/src/app/email-templates/email-templates.module.ts
var ROUTES = [
  {
    path: "",
    component: EmailTemplatesComponent,
    children: [{ path: "", component: EmailTemplatesListComponent }]
  },
  { path: "manage", component: EmailTemplateManageComponent },
  { path: "manage/:id", component: EmailTemplateManageComponent },
  { path: "**", redirectTo: "" }
];
var _EmailTemplatesModule = class _EmailTemplatesModule {
};
_EmailTemplatesModule.\u0275fac = function EmailTemplatesModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EmailTemplatesModule)();
};
_EmailTemplatesModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _EmailTemplatesModule });
_EmailTemplatesModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  EmailTemplatesComponent,
  EmailTemplatesListComponent,
  EmailTemplateManageComponent,
  RouterModule.forChild(ROUTES)
] });
var EmailTemplatesModule = _EmailTemplatesModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailTemplatesModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        EmailTemplatesComponent,
        EmailTemplatesListComponent,
        EmailTemplateManageComponent,
        RouterModule.forChild(ROUTES)
      ]
    }]
  }], null, null);
})();
export {
  EmailTemplatesModule
};
//# sourceMappingURL=email-templates.module-XTXQC7JH.js.map
