import "./chunk-K53BEZPB.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent
} from "./chunk-FZK62I25.js";
import "./chunk-DLQIRHBA.js";
import {
  ActivatedRoute,
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  BuildingPipe,
  Clipboard,
  CommonModule,
  Component,
  DatePipe,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  IconComponent,
  Injectable,
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
  SettingsService,
  SimpleTableComponent,
  TranslatePipe,
  Validators,
  Xu,
  __spreadProps,
  __spreadValues,
  catchError,
  combineLatest,
  currentUser,
  ec,
  extractTextFromHTML,
  filter,
  forkJoin,
  getUnixTime,
  i18n,
  inject,
  lastValueFrom,
  map,
  nextValueFrom,
  notifyError,
  notifySuccess,
  of,
  randomString,
  setClassMetadata,
  shareReplay,
  switchMap,
  tap,
  unique,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction6,
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
} from "./chunk-APXD2SKZ.js";

// apps/concierge/src/app/email-templates/email-templates-state.service.ts
var _EmailTemplatesStateService = class _EmailTemplatesStateService extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._filters = new BehaviorSubject({});
    this._change = new BehaviorSubject(0);
    this.template_definitions = combineLatest([
      this._org.active_building,
      this._org.active_region,
      this._change
    ]).pipe(filter(([bld]) => !!bld), switchMap(() => Xu(this._org.organisation.id, "email_template_fields").pipe(map((_) => {
      const definitions = _?.details || {};
      return Object.keys(definitions).map((key) => ({
        id: key,
        name: definitions[key].name,
        module_name: definitions[key].module_name,
        name_details: definitions[key].name.split(":"),
        description: definitions[key].description || "",
        fields: definitions[key].fields.map((field) => ({
          name: field.name,
          description: field.description || ""
        }))
      }));
    })).pipe(catchError(() => of([])))), tap((_) => console.log("Templates:", _)), shareReplay(1));
    this.template_groups = this.template_definitions.pipe(map((defs) => {
      const groups = unique(defs.map((_) => _.module_name));
      if (!groups.length)
        return [{ name: "", items: defs }];
      return groups.map((name) => ({
        name,
        items: defs.filter((_) => _.module_name === name)
      }));
    }));
    this.templates = combineLatest([
      this._org.active_building,
      this._org.active_region,
      this._change
    ]).pipe(filter(([bld]) => !!bld), switchMap(([bld, region]) => forkJoin([
      Xu(this._org.organisation.id, "email_templates").pipe(map((_) => this._processTemplates(_, this._org.organisation.id)), catchError(() => of([]))),
      Xu(bld.id, "email_templates").pipe(map((_) => this._processTemplates(_, bld.id)), catchError(() => of([]))),
      region ? Xu(region.id, "email_templates").pipe(map((_) => this._processTemplates(_, region.id)), catchError(() => of([]))) : of([])
    ])), map(([org_templates, bld_templates, region_templates]) => org_templates.concat(bld_templates).concat(region_templates)), shareReplay(1));
    this.filters = this._filters.asObservable();
    this.filtered_templates = combineLatest([
      this.templates,
      this.filters
    ]).pipe(map(([templates, filters]) => {
      const category = filters.category || "";
      return templates.filter((_) => _.category === category || category === "");
    }));
  }
  _processTemplates(metadata, zone_id) {
    const data = metadata.details;
    return ((data instanceof Array ? data : "") || []).map((template) => __spreadProps(__spreadValues({}, template), { zone_id }));
  }
  async loadTemplate(id) {
    const template_list = await nextValueFrom(this.templates);
    return template_list.find((_) => _.id === id);
  }
  async saveTemplate(template, old_zone = "") {
    if (!template.zone_id)
      return;
    if (template.id && old_zone) {
      const old_metadata = await lastValueFrom(Xu(old_zone, "email_templates"));
      if (old_metadata.details instanceof Array) {
        await lastValueFrom(ec(old_zone, {
          name: "email_templates",
          details: old_metadata.details.filter((_) => _.id !== template.id),
          description: old_metadata.description
        }));
      }
    }
    if (!template.id) {
      template.id = `template-${randomString(8)}`;
      template.created_at = getUnixTime(Date.now());
    }
    template.updated_at = getUnixTime(Date.now());
    const metadata = await lastValueFrom(Xu(template.zone_id, "email_templates"));
    const template_list = metadata.details instanceof Array ? metadata.details : [];
    const zone_templates = template_list.filter((_) => _.zone_id === template.zone_id);
    const new_template_list = [
      ...zone_templates.filter((_) => _.id !== template.id),
      template
    ];
    await lastValueFrom(ec(template.zone_id, {
      name: `email_templates`,
      details: new_template_list,
      description: "Email Templates for Zone"
    })).catch((e) => {
      notifyError(i18n("APP.CONCIERGE.EMAIL_TEMPLATES_SAVE_ERROR", {
        error: e
      }));
      throw e;
    });
    notifySuccess(i18n("APP.CONCIERGE.EMAIL_TEMPLATES_SAVE_SUCCESS"));
    this.timeout("changed", () => this._change.next(Date.now()));
  }
  async removeTemplate(template) {
    const template_list = await nextValueFrom(this.templates);
    const zone_templates = template_list.filter((_) => _.zone_id === template.zone_id);
    const new_template_list = zone_templates.filter((_) => _.id !== template.id);
    await ec(template.zone_id, {
      name: `email_templates`,
      details: new_template_list,
      description: "Email Templates for Zone"
    }).toPromise().catch((e) => {
      notifyError(i18n("APP.CONCIERGE.EMAIL_TEMPLATES_REMOVE_ERROR", {
        error: e
      }));
      throw e;
    });
    notifySuccess(i18n("APP.CONCIERGE.EMAIL_TEMPLATES_REMOVE_SUCCESS"));
    this.timeout("changed", () => this._change.next(Date.now()));
  }
  setFilters(filters) {
    this._filters.next(__spreadValues(__spreadValues({}, this._filters.getValue()), filters));
  }
};
_EmailTemplatesStateService.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275EmailTemplatesStateService_BaseFactory;
  return function EmailTemplatesStateService_Factory(__ngFactoryType__) {
    return (\u0275EmailTemplatesStateService_BaseFactory || (\u0275EmailTemplatesStateService_BaseFactory = \u0275\u0275getInheritedFactory(_EmailTemplatesStateService)))(__ngFactoryType__ || _EmailTemplatesStateService);
  };
})();
_EmailTemplatesStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EmailTemplatesStateService, factory: _EmailTemplatesStateService.\u0275fac, providedIn: "root" });
var EmailTemplatesStateService = _EmailTemplatesStateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailTemplatesStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

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
_EmailTemplateManageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailTemplateManageComponent, selectors: [["email-template-manage"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 77, vars: 58, consts: [["trigger_menu", "matMenu"], ["tracking_menu", "matMenu"], ["load_state", ""], [1, "bg-base-200", "absolute", "inset-0", "overflow-auto"], [1, "border-base-300", "bg-base-100", "absolute", "top-0", "left-1/2", "h-full", "w-164", "max-w-full", "-translate-x-1/2", "border-x"], [1, "bg-base-200", "sticky", "top-0", "z-20", "mx-auto", "my-2", "flex", "w-full", "max-w-160", "items-center", "justify-between", "rounded-sm", "border-none", "px-4", "py-2"], [1, "text-xl", "font-medium"], ["icon", "", "matRipple", "", 3, "routerLink"], [1, "relative", "z-10", "mx-auto", "w-full", "max-w-160", "overflow-visible", "p-2", 3, "formGroup"], [1, "flex", "items-center", "space-x-4"], [1, "w-1/4", "flex-1", "space-y-2"], ["for", "zone"], ["appearance", "outline", 1, "w-full"], ["name", "zone", "formControlName", "zone_id", 3, "placeholder"], ["value", ""], [3, "value"], [1, "w-1/4", "flex-1", "space-y-2", "pb-6"], ["for", "trigger"], ["btn", "", "matRipple", "", 1, "inverse", "border-base-300", "flex", "h-12", "w-full", "items-center", "justify-between", "rounded-sm", "border", "px-2", 3, "click", "matMenuTriggerFor"], [1, "flex", "w-1/2", "flex-1", "flex-col", "px-2", "text-left", "leading-tight"], [1, "truncate"], [1, "truncate", "opacity-30"], [1, "text-2xl"], [1, "max-h-96"], ["mat-menu-item", "", 3, "click"], ["btn", "", "matRipple", "", "matTooltip", "Values that get replaced in the email template when sent", 1, "mt-2", "flex-1", 3, "disabled", "matMenuTriggerFor"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "disabled"], [1, "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "flex-1"], ["matInput", "", "formControlName", "reply_to", 3, "placeholder"], ["matInput", "", "formControlName", "from", 3, "placeholder"], ["matPrefix", "", 1, "relative", "-left-1", "text-2xl"], ["matInput", "", "placeholder", "Template Subject", "formControlName", "subject"], ["formControlName", "html", 1, "block", "min-h-[calc(100vh-32rem)]", 3, "placeholder", "images_allowed"], [1, "bg-base-200", "fixed", "bottom-0", "left-1/2", "z-20", "mx-auto", "my-2", "flex", "w-full", "max-w-[640px]", "-translate-x-1/2", "items-center", "justify-end", "rounded-sm", "border-none", "px-4", "py-2"], [1, "p-4"], [1, "flex", "items-center", "space-x-2", "pl-2"], [1, "my-2", "flex", "flex-1", "flex-col-reverse", "leading-tight"], [1, "text-xs", "opacity-30"], [1, "text-sm"], [1, "opacity-0"], [1, "flex", "flex-col", "leading-tight"], [1, "font-mono", "text-sm"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"], [1, "bg-base-100", "absolute", "inset-0"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-2"], [3, "diameter"]], template: function EmailTemplateManageComponent_Template(rf, ctx) {
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
        <div class="bg-base-200 absolute inset-0 overflow-auto">
            <div
                class="border-base-300 bg-base-100 absolute top-0 left-1/2 h-full w-164 max-w-full -translate-x-1/2 border-x"
            ></div>
            <header
                class="bg-base-200 sticky top-0 z-20 mx-auto my-2 flex w-full max-w-160 items-center justify-between rounded-sm border-none px-4 py-2"
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
                class="relative z-10 mx-auto w-full max-w-160 overflow-visible p-2"
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
                            class="inverse border-base-300 flex h-12 w-full items-center justify-between rounded-sm border px-2"
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
                        <mat-menu #trigger_menu="matMenu" class="max-h-96">
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
                    <mat-menu #tracking_menu="matMenu" class="max-h-96">
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
                    class="bg-base-200 fixed bottom-0 left-1/2 z-20 mx-auto my-2 flex w-full max-w-[640px] -translate-x-1/2 items-center justify-end rounded-sm border-none px-4 py-2"
                >
                    <button btn matRipple class="w-40" (click)="save()">
                        {{ 'APP.CONCIERGE.EMAIL_TEMPLATES_SAVE' | translate }}
                    </button>
                </footer>
            }
        </div>
        <ng-template #load_state>
            <div class="bg-base-100 absolute inset-0">
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

// apps/concierge/src/app/email-templates/email-templates-list.component.ts
var _c02 = () => ["/email-templates", "manage"];
var _c12 = (a0) => ({ key: "subject", name: a0 });
var _c2 = (a0, a1) => ({ key: "category", name: a0, show: a1 });
var _c3 = (a0, a1) => ({ key: "trigger", name: a0, content: a1 });
var _c4 = (a0, a1) => ({ key: "zone_id", name: a0, content: a1 });
var _c5 = (a0, a1) => ({ key: "created_at", name: a0, size: "8rem", content: a1 });
var _c6 = (a0) => ({ key: "actions", name: " ", size: "3.5rem", content: a0, sortable: false });
var _c7 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
var _c8 = (a0) => ["/email-templates", "manage", a0];
function EmailTemplatesListComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r1 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, data_r1 * 1e3, "mediumDate"), " ");
  }
}
function EmailTemplatesListComponent_ng_template_23_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "RESOURCE.BUILDING_EMPTY"), " ");
  }
}
function EmailTemplatesListComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275conditionalCreate(3, EmailTemplatesListComponent_ng_template_23_Conditional_3_Template, 3, 3, "span", 17);
    \u0275\u0275pipe(4, "building");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const data_r2 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_6_0 = \u0275\u0275pipeBind1(2, 2, data_r2)) == null ? null : tmp_6_0.display_name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(4, 4, data_r2) ? 3 : -1);
  }
}
function EmailTemplatesListComponent_ng_template_25_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.TRIGGER_EMPTY"), " ");
  }
}
function EmailTemplatesListComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, EmailTemplatesListComponent_ng_template_25_Conditional_2_Template, 3, 3, "span", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r3, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!data_r3 ? 2 : -1);
  }
}
function EmailTemplatesListComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19)(1, "icon");
    \u0275\u0275text(2, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "mat-menu", null, 4)(5, "button", 20);
    \u0275\u0275listener("click", function EmailTemplatesListComponent_ng_template_27_Template_button_click_5_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).row;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.sendTestEmail(row_r5));
    });
    \u0275\u0275elementStart(6, "div", 21)(7, "icon", 11);
    \u0275\u0275text(8, "send");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "a", 22)(13, "div", 21)(14, "icon", 11);
    \u0275\u0275text(15, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "button", 20);
    \u0275\u0275listener("click", function EmailTemplatesListComponent_ng_template_27_Template_button_click_19_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).row;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.removeTemplate(row_r5));
    });
    \u0275\u0275elementStart(20, "div", 21)(21, "icon", 23);
    \u0275\u0275text(22, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    const menu_r7 = \u0275\u0275reference(4);
    \u0275\u0275property("matMenuTriggerFor", menu_r7);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 5, "APP.CONCIERGE.EMAIL_TEMPLATES_SEND_TEST"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c8, row_r5.id));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 7, "APP.CONCIERGE.EMAIL_TEMPLATES_EDIT"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 9, "APP.CONCIERGE.EMAIL_TEMPLATES_REMOVE"), " ");
  }
}
var _EmailTemplatesListComponent = class _EmailTemplatesListComponent {
  constructor() {
    this._state = inject(EmailTemplatesStateService);
    this._org = inject(OrganisationService);
    this.filters = this._state.filters;
    this.templates = this._state.filtered_templates;
    this.removeTemplate = (t) => this._state.removeTemplate(t);
  }
  setFilters(filters) {
    this._state.setFilters(filters);
  }
  async sendTestEmail(template) {
    this.sending_email = template.id;
    const mod = this._org.module("smtp", "Mailer");
    if (!mod) {
      return notifyError(i18n("APP.CONCIERGE.EMAIL_TEMPLATES_CONFIG_ERROR"));
    }
    await mod.execute("send_mail", [
      currentUser()?.email,
      template.subject,
      template.text,
      template.html,
      [],
      // resource attachments
      [],
      // attachments
      [],
      // cc
      [],
      // bcc
      template.reply_to || null,
      // reply_to
      template.from || currentUser()?.email
      // from
    ]);
    notifySuccess(i18n("APP.CONCIERGE.EMAIL_TEMPLATES_SEND_TEST"));
    this.sending_email = null;
  }
};
_EmailTemplatesListComponent.\u0275fac = function EmailTemplatesListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EmailTemplatesListComponent)();
};
_EmailTemplatesListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailTemplatesListComponent, selectors: [["email-templates-list"]], decls: 29, vars: 46, consts: [["date_template", ""], ["bld_template", ""], ["trigger_template", ""], ["actions_template", ""], ["menu", "matMenu"], [1, "absolute", "inset-0", "flex", "flex-col"], [1, "flex", "items-center", "justify-between", "space-x-2", "p-8"], [1, "text-2xl", "font-medium"], [1, "flex-1"], ["btn", "", "matRipple", "", 3, "routerLink"], [1, "ml-2"], [1, "text-2xl"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-y-auto", "px-8"], [1, "min-h-full", "w-full", "overflow-x-auto"], ["empty_message", "No group events for selected period", 1, "block", "w-full", "min-w-4xl", "text-sm", 3, "data", "columns", "sortable"], [1, "p-4", "opacity-60"], [1, "p-4"], [1, "opacity-30"], [1, "p-4", "font-mono", "text-xs"], ["icon", "", "matRipple", "", 1, "mx-auto", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], ["mat-menu-item", "", 3, "routerLink"], [1, "text-error", "text-2xl"]], template: function EmailTemplatesListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "h2", 7);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 8);
    \u0275\u0275elementStart(6, "a", 9)(7, "div", 10);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "icon", 11);
    \u0275\u0275text(11, "add");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 12)(13, "div", 13);
    \u0275\u0275element(14, "simple-table", 14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275pipe(17, "async");
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275template(21, EmailTemplatesListComponent_ng_template_21_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(23, EmailTemplatesListComponent_ng_template_23_Template, 5, 6, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(25, EmailTemplatesListComponent_ng_template_25_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(27, EmailTemplatesListComponent_ng_template_27_Template, 26, 13, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    const date_template_r8 = \u0275\u0275reference(22);
    const bld_template_r9 = \u0275\u0275reference(24);
    const trigger_template_r10 = \u0275\u0275reference(26);
    const actions_template_r11 = \u0275\u0275reference(28);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, "APP.CONCIERGE.EMAIL_TEMPLATES_HEADER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(22, _c02));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 8, "APP.CONCIERGE.EMAIL_TEMPLATES_ADD"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("data", ctx.templates)("columns", \u0275\u0275pureFunction6(39, _c7, \u0275\u0275pureFunction1(23, _c12, \u0275\u0275pipeBind1(15, 10, "FORM.TITLE")), \u0275\u0275pureFunction2(25, _c2, \u0275\u0275pipeBind1(16, 12, "COMMON.CATEGORY"), !((tmp_8_0 = \u0275\u0275pipeBind1(17, 14, ctx.filters)) == null ? null : tmp_8_0.category) && false), \u0275\u0275pureFunction2(28, _c3, \u0275\u0275pipeBind1(18, 16, "COMMON.TRIGGER"), trigger_template_r10), \u0275\u0275pureFunction2(31, _c4, \u0275\u0275pipeBind1(19, 18, "RESOURCE.BUILDING"), bld_template_r9), \u0275\u0275pureFunction2(34, _c5, \u0275\u0275pipeBind1(20, 20, "COMMON.CREATED_AT"), date_template_r8), \u0275\u0275pureFunction1(37, _c6, actions_template_r11)))("sortable", true);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  DatePipe,
  TranslatePipe,
  IconComponent,
  SimpleTableComponent,
  RouterModule,
  RouterLink,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  BuildingPipe
], encapsulation: 2 });
var EmailTemplatesListComponent = _EmailTemplatesListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailTemplatesListComponent, [{
    type: Component,
    args: [{ selector: "email-templates-list", template: ` <div class="absolute inset-0 flex flex-col">
        <div class="flex items-center justify-between space-x-2 p-8">
            <h2 class="text-2xl font-medium">
                {{ 'APP.CONCIERGE.EMAIL_TEMPLATES_HEADER' | translate }}
            </h2>
            <div class="flex-1"></div>
            <!-- <mat-form-field appearance="outline" class="w-56 no-subscript">
            <mat-select
              [ngModel]="(filters | async)?.category"
              [placeholder]="'COMMON.CATEGORY_ALL' | translate"
              (ngModelChange)="setFilters({ category: $event })"
              >
              <mat-option value="">{{'COMMON.CATEGORY_ALL' | translate}}</mat-option>
              <mat-option value="internal">{{'COMMON.TYPE_INTERNAL' | translate}}</mat-option>
              <mat-option value="external">{{'COMMON.TYPE_EXTERNAL' | translate}}</mat-option>
            </mat-select>
          </mat-form-field> -->
            <a btn matRipple [routerLink]="['/email-templates', 'manage']">
                <div class="ml-2">
                    {{ 'APP.CONCIERGE.EMAIL_TEMPLATES_ADD' | translate }}
                </div>
                <icon class="text-2xl">add</icon>
            </a>
        </div>
        <div class="relative h-1/2 w-full flex-1 overflow-y-auto px-8">
            <div class="min-h-full w-full overflow-x-auto">
                <simple-table
                    class="block w-full min-w-4xl text-sm"
                    [data]="templates"
                    empty_message="No group events for selected period"
                    [columns]="[
                        { key: 'subject', name: 'FORM.TITLE' | translate },
                        {
                            key: 'category',
                            name: 'COMMON.CATEGORY' | translate,
                            show: !(filters | async)?.category && false,
                        },
                        {
                            key: 'trigger',
                            name: 'COMMON.TRIGGER' | translate,
                            content: trigger_template,
                        },
                        {
                            key: 'zone_id',
                            name: 'RESOURCE.BUILDING' | translate,
                            content: bld_template,
                        },
                        {
                            key: 'created_at',
                            name: 'COMMON.CREATED_AT' | translate,
                            size: '8rem',
                            content: date_template,
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            size: '3.5rem',
                            content: actions_template,
                            sortable: false,
                        },
                    ]"
                    [sortable]="true"
                >
                </simple-table>
                <ng-template #date_template let-data="data">
                    <div class="p-4 opacity-60">
                        {{ data * 1000 | date: 'mediumDate' }}
                    </div>
                </ng-template>
                <ng-template #bld_template let-data="data">
                    <div class="p-4">
                        {{ (data | building)?.display_name }}
                        @if (!(data | building)) {
                            <span class="opacity-30">
                                {{ 'RESOURCE.BUILDING_EMPTY' | translate }}
                            </span>
                        }
                    </div>
                </ng-template>
                <ng-template #trigger_template let-data="data">
                    <div class="p-4 font-mono text-xs">
                        {{ data }}
                        @if (!data) {
                            <span class="opacity-30">
                                {{ 'COMMON.TRIGGER_EMPTY' | translate }}
                            </span>
                        }
                    </div>
                </ng-template>
                <ng-template #actions_template let-row="row">
                    <button
                        icon
                        matRipple
                        [matMenuTriggerFor]="menu"
                        class="mx-auto"
                    >
                        <icon>more_vert</icon>
                    </button>
                    <mat-menu #menu="matMenu">
                        <button mat-menu-item (click)="sendTestEmail(row)">
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">send</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.EMAIL_TEMPLATES_SEND_TEST'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                        <a
                            mat-menu-item
                            [routerLink]="[
                                '/email-templates',
                                'manage',
                                row.id,
                            ]"
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">edit</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.EMAIL_TEMPLATES_EDIT'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </a>
                        <button mat-menu-item (click)="removeTemplate(row)">
                            <div class="flex items-center space-x-2">
                                <icon class="text-error text-2xl">
                                    delete
                                </icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.EMAIL_TEMPLATES_REMOVE'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                    </mat-menu>
                </ng-template>
            </div>
        </div>
    </div>`, imports: [
      CommonModule,
      TranslatePipe,
      IconComponent,
      SimpleTableComponent,
      RouterModule,
      MatMenuModule,
      BuildingPipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmailTemplatesListComponent, { className: "EmailTemplatesListComponent", filePath: "apps/concierge/src/app/email-templates/email-templates-list.component.ts", lineNumber: 183 });
})();

// apps/concierge/src/app/email-templates/email-templates.component.ts
var _c03 = ["app-email-templates", ""];
var _EmailTemplatesComponent = class _EmailTemplatesComponent {
};
_EmailTemplatesComponent.\u0275fac = function EmailTemplatesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EmailTemplatesComponent)();
};
_EmailTemplatesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailTemplatesComponent, selectors: [["", "app-email-templates", ""]], attrs: _c03, decls: 5, vars: 0, consts: [[1, "flex", "h-px", "flex-1"], [1, "relative", "flex", "h-full", "w-1/2", "flex-1", "flex-col"]], template: function EmailTemplatesComponent_Template(rf, ctx) {
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
//# sourceMappingURL=email-templates.module-OGLOX7LG.js.map
