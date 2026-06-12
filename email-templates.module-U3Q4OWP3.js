import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent
} from "./chunk-5O7QTLTR.js";
import {
  ActivatedRoute,
  AsyncHandler,
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
  Fu,
  FullscreenModalShellComponent,
  IconComponent,
  Injectable,
  Lu,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
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
  UserListFieldComponent,
  Validators,
  __spreadProps,
  __spreadValues,
  addMinutes,
  catchError,
  combineLatest,
  computed,
  currentUser,
  effect,
  endOfDay,
  extractTextFromHTML,
  filter,
  forkJoin,
  from,
  getTimezoneDifferenceInHours,
  getUnixTime,
  i18n,
  inject,
  lastValueFrom,
  map,
  nextValueFrom,
  notifyError,
  notifySuccess,
  of,
  queryAllBookings,
  queryAllEvents,
  randomString,
  setClassMetadata,
  shareReplay,
  signal,
  startOfDay,
  startWith,
  switchMap,
  takeUntilDestroyed,
  tap,
  toSignal,
  unique,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
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
} from "./chunk-32WFR5TQ.js";

// apps/concierge/src/app/email-templates/email-templates-state.service.ts
var EmailTemplatesStateService = class _EmailTemplatesStateService extends AsyncHandler {
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
    ]).pipe(filter(([bld]) => !!bld), switchMap(() => from(Fu(this._org.organisation.id, "email_template_fields")).pipe(map((_) => {
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
    }), catchError(() => of([])))), tap((_) => console.log("Templates:", _)), shareReplay(1));
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
      from(Fu(this._org.organisation.id, "email_templates")).pipe(map((_) => this._processTemplates(_, this._org.organisation.id)), catchError(() => of([]))),
      from(Fu(bld.id, "email_templates")).pipe(map((_) => this._processTemplates(_, bld.id)), catchError(() => of([]))),
      region ? from(Fu(region.id, "email_templates")).pipe(map((_) => this._processTemplates(_, region.id)), catchError(() => of([]))) : of([])
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
      throw "A building is required";
    if (template.id && old_zone) {
      const old_metadata = await Fu(old_zone, "email_templates");
      if (old_metadata.details instanceof Array) {
        await Lu(old_zone, {
          name: "email_templates",
          details: old_metadata.details.filter((_) => _.id !== template.id),
          description: old_metadata.description
        });
      }
    }
    if (!template.id) {
      template.id = `template-${randomString(8)}`;
      template.created_at = getUnixTime(Date.now());
    }
    template.updated_at = getUnixTime(Date.now());
    const metadata = await Fu(template.zone_id, "email_templates");
    const template_list = metadata.details instanceof Array ? metadata.details : [];
    const zone_templates = template_list.filter((_) => _.zone_id === template.zone_id);
    const new_template_list = [
      ...zone_templates.filter((_) => _.id !== template.id),
      template
    ];
    await Lu(template.zone_id, {
      name: `email_templates`,
      details: new_template_list,
      description: "Email Templates for Zone"
    }).catch((e) => {
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
    await Lu(template.zone_id, {
      name: `email_templates`,
      details: new_template_list,
      description: "Email Templates for Zone"
    }).catch((e) => {
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
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275EmailTemplatesStateService_BaseFactory;
      return function EmailTemplatesStateService_Factory(__ngFactoryType__) {
        return (\u0275EmailTemplatesStateService_BaseFactory || (\u0275EmailTemplatesStateService_BaseFactory = \u0275\u0275getInheritedFactory(_EmailTemplatesStateService)))(__ngFactoryType__ || _EmailTemplatesStateService);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EmailTemplatesStateService, factory: _EmailTemplatesStateService.\u0275fac, providedIn: "root" });
  }
};
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
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.name;
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
function EmailTemplateManageComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r1 = ctx.$implicit;
    \u0275\u0275property("value", bld_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bld_r1.display_name || bld_r1.name, " ");
  }
}
function EmailTemplateManageComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.TRIGGER_SELECT"), " ");
  }
}
function EmailTemplateManageComponent_For_38_For_3_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 20);
    \u0275\u0275text(1, "done");
    \u0275\u0275elementEnd();
  }
}
function EmailTemplateManageComponent_For_38_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function EmailTemplateManageComponent_For_38_For_3_Template_button_click_0_listener() {
      const tmpl_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.form.patchValue({ trigger: tmpl_r3.id }));
    });
    \u0275\u0275elementStart(1, "div", 36)(2, "div", 37)(3, "div", 38);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 39);
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 40);
    \u0275\u0275text(8, ":");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(9, EmailTemplateManageComponent_For_38_For_3_Conditional_9_Template, 2, 0, "icon", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tmpl_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", tmpl_r3.description, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", tmpl_r3.name || tmpl_r3.module_name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.form.value.trigger === tmpl_r3.id ? 9 : -1);
  }
}
function EmailTemplateManageComponent_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(2, EmailTemplateManageComponent_For_38_For_3_Template, 10, 3, "button", 24, _forTrack0);
  }
  if (rf & 2) {
    const group_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(group_r5.name);
    \u0275\u0275advance();
    \u0275\u0275repeater(group_r5.items);
  }
}
function EmailTemplateManageComponent_For_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function EmailTemplateManageComponent_For_45_Template_button_click_0_listener() {
      const field_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.copyField(field_r7.name));
    });
    \u0275\u0275elementStart(1, "div", 41)(2, "div", 42);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const field_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", field_r7.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", field_r7.description, " ");
  }
}
function EmailTemplateManageComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 25);
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
function EmailTemplateManageComponent_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 34)(1, "button", 43);
    \u0275\u0275listener("click", function EmailTemplateManageComponent_Conditional_69_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.save());
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
function EmailTemplateManageComponent_ng_template_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 45);
    \u0275\u0275element(2, "mat-spinner", 46);
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.loading());
  }
}
var EmailTemplateManageComponent = class _EmailTemplateManageComponent extends AsyncHandler {
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._state = inject(EmailTemplatesStateService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._clipboard = inject(Clipboard);
    this._params = toSignal(this._route.paramMap, {
      initialValue: this._route.snapshot.paramMap
    });
    this.loading = signal("", ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.template = signal(null, ...ngDevMode ? [{ debugName: "template" }] : (
      /* istanbul ignore next */
      []
    ));
    this.definitions = toSignal(this._state.template_groups, {
      initialValue: []
    });
    this.buildings = toSignal(this._org.building_list, {
      initialValue: []
    });
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
    this._trigger = toSignal(this.form.controls.trigger.valueChanges.pipe(startWith(this.form.controls.trigger.value || "")), { initialValue: this.form.controls.trigger.value || "" });
    this.active_trigger = computed(() => {
      const trigger_id = this._trigger();
      return this.definitions().flatMap((group) => group.items).find((_) => _.id === trigger_id);
    }, ...ngDevMode ? [{ debugName: "active_trigger" }] : (
      /* istanbul ignore next */
      []
    ));
    effect(() => {
      const id = this._params().get("id");
      if (id)
        this._loadTemplate(id);
    });
  }
  copyField(field) {
    this._clipboard.copy(`%{${field}}`);
    notifySuccess(i18n("APP.CONCIERGE.EMAIL_TEMPLATES_COPIED_FIELD", { field }));
  }
  async save() {
    this.loading.set(i18n("APP.CONCIERGE.EMAIL_TEMPLATES_SAVING"));
    const zone = this.template()?.zone_id !== this.form.value.zone_id ? this.template()?.zone_id : "";
    await this._state.saveTemplate(__spreadProps(__spreadValues(__spreadValues({}, this.template() || {}), this.form.getRawValue()), {
      text: extractTextFromHTML(this.form.getRawValue().html || "")
    }), zone).catch((e) => {
      this.loading.set("");
      notifyError(i18n(e));
      throw e;
    });
    this.loading.set("");
    this._router.navigate(["/email-templates"]);
  }
  async _loadTemplate(id) {
    this.loading.set(i18n("APP.CONCIERGE.EMAIL_TEMPLATES_LOADING"));
    const template = await this._state.loadTemplate(id);
    this.template.set(template || null);
    this.loading.set("");
    if (!template) {
      this._router.navigate(["/email-templates", "manage"]);
      return;
    }
    this.form.patchValue(template);
  }
  static {
    this.\u0275fac = function EmailTemplateManageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmailTemplateManageComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailTemplateManageComponent, selectors: [["email-template-manage"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 72, vars: 51, consts: [["trigger_menu", "matMenu"], ["tracking_menu", "matMenu"], ["load_state", ""], [1, "bg-base-200", "absolute", "inset-0", "overflow-auto"], [1, "bg-base-100", "border-base-300", "mx-auto", "min-h-full", "w-164", "max-w-full", "border-x"], [1, "bg-base-200", "sticky", "top-2", "z-20", "mx-auto", "mb-2", "flex", "w-full", "max-w-160", "items-center", "justify-between", "rounded-sm", "border-none", "px-4", "py-2"], [1, "text-xl", "font-medium"], ["icon", "", "matRipple", "", 3, "routerLink"], [1, "relative", "z-10", "mx-auto", "min-h-[calc(100vh-8.5rem)]", "w-full", "max-w-160", "overflow-visible", "p-2", 3, "formGroup"], [1, "mb-2", "flex", "items-center", "gap-2"], [1, "w-1/4", "flex-1", "gap-2"], ["for", "zone"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["name", "zone", "formControlName", "zone_id", 3, "placeholder"], [3, "value"], ["for", "trigger"], ["btn", "", "matRipple", "", 1, "inverse", "border-base-300", "flex", "h-12", "w-full", "items-center", "justify-between", "rounded-sm", "border", "px-2", 3, "click", "matMenuTriggerFor"], [1, "flex", "w-1/2", "flex-1", "flex-col", "px-2", "text-left", "leading-tight"], [1, "truncate"], [1, "truncate", "opacity-30"], [1, "text-2xl"], [1, "max-h-96"], ["mat-menu-item", "", 3, "click"], ["btn", "", "matRipple", "", "matTooltip", "Values that get replaced in the email template when sent", 1, "mt-5.5", "flex-1", 3, "disabled", "matMenuTriggerFor"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "disabled"], [1, "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "flex-1"], ["matInput", "", "formControlName", "reply_to", 3, "placeholder"], ["matInput", "", "formControlName", "from", 3, "placeholder"], ["appearance", "outline", 1, "w-full"], ["matPrefix", "", 1, "relative", "-left-1", "text-2xl"], ["matInput", "", "placeholder", "Template Subject", "formControlName", "subject"], ["formControlName", "html", 1, "block", "min-h-[calc(100vh-32rem)]", 3, "placeholder", "images_allowed"], [1, "bg-base-200", "sticky", "bottom-2", "z-20", "mx-auto", "mt-2", "flex", "w-full", "max-w-160", "items-center", "justify-end", "rounded-sm", "border-none", "px-4", "py-2"], [1, "p-4"], [1, "flex", "items-center", "space-x-2", "pl-2"], [1, "my-2", "flex", "flex-1", "flex-col-reverse", "leading-tight"], [1, "text-xs", "opacity-30"], [1, "text-sm"], [1, "opacity-0"], [1, "flex", "flex-col", "leading-tight"], [1, "font-mono", "text-sm"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"], [1, "bg-base-100", "absolute", "inset-0"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-2"], [3, "diameter"]], template: function EmailTemplateManageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "header", 5)(3, "h2", 6);
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
        \u0275\u0275repeaterCreate(16, EmailTemplateManageComponent_For_17_Template, 2, 2, "mat-option", 14, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "mat-error");
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "div", 10)(22, "label", 15);
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "button", 16);
        \u0275\u0275listener("click", function EmailTemplateManageComponent_Template_button_click_25_listener() {
          return ctx.form.controls.trigger.markAsTouched();
        });
        \u0275\u0275elementStart(26, "div", 17)(27, "div", 18);
        \u0275\u0275text(28);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(29, EmailTemplateManageComponent_Conditional_29_Template, 3, 3, "div", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "icon", 20);
        \u0275\u0275text(31, " arrow_drop_down ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "mat-menu", 21, 0)(34, "button", 22);
        \u0275\u0275listener("click", function EmailTemplateManageComponent_Template_button_click_34_listener() {
          return ctx.form.patchValue({ trigger: "" });
        });
        \u0275\u0275text(35);
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(37, EmailTemplateManageComponent_For_38_Template, 4, 1, null, null, _forTrack1);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "button", 23);
        \u0275\u0275text(40);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "mat-menu", 21, 1);
        \u0275\u0275repeaterCreate(44, EmailTemplateManageComponent_For_45_Template, 6, 2, "button", 24, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275conditionalCreate(46, EmailTemplateManageComponent_Conditional_46_Template, 3, 4, "button", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "div", 26)(48, "mat-form-field", 27);
        \u0275\u0275element(49, "input", 28);
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275elementStart(51, "mat-error");
        \u0275\u0275text(52);
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "mat-form-field", 27);
        \u0275\u0275element(55, "input", 29);
        \u0275\u0275pipe(56, "translate");
        \u0275\u0275elementStart(57, "mat-error");
        \u0275\u0275text(58);
        \u0275\u0275pipe(59, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(60, "mat-form-field", 30)(61, "icon", 31);
        \u0275\u0275text(62, " description ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(63, "input", 32);
        \u0275\u0275elementStart(64, "mat-error");
        \u0275\u0275text(65);
        \u0275\u0275pipe(66, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(67, "rich-text-input", 33);
        \u0275\u0275pipe(68, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(69, EmailTemplateManageComponent_Conditional_69_Template, 4, 3, "footer", 34);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(70, EmailTemplateManageComponent_ng_template_70_Template, 5, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        let tmp_3_0;
        let tmp_12_0;
        let tmp_19_0;
        let tmp_20_0;
        const trigger_menu_r9 = \u0275\u0275reference(33);
        const tracking_menu_r10 = \u0275\u0275reference(43);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 23, ((tmp_3_0 = ctx.template()) == null ? null : tmp_3_0.id) ? "APP.CONCIERGE.EMAIL_TEMPLATES_EDIT" : "APP.CONCIERGE.EMAIL_TEMPLATES_NEW"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 25, "RESOURCE.BUILDING"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(15, 27, "COMMON.BUILDING_SELECT"));
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.buildings());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 29, "COMMON.BUILDING_REQUIRED"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 31, "COMMON.TRIGGER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("matMenuTriggerFor", trigger_menu_r9);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ((tmp_12_0 = ctx.active_trigger()) == null ? null : tmp_12_0.name) || ((tmp_12_0 = ctx.active_trigger()) == null ? null : tmp_12_0.module_name), " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.active_trigger() ? 29 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 33, "COMMON.NONE"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.definitions());
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.form.value.trigger)("matMenuTriggerFor", tracking_menu_r10);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 35, "APP.CONCIERGE.EMAIL_TEMPLATES_PLACEHOLDERS"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275repeater(((tmp_19_0 = ctx.active_trigger()) == null ? null : tmp_19_0.fields) || \u0275\u0275pureFunction0(49, _c0));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!(((tmp_20_0 = ctx.active_trigger()) == null ? null : tmp_20_0.fields) || \u0275\u0275pureFunction0(50, _c0)).length ? 46 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(50, 37, "APP.CONCIERGE.EMAIL_TEMPLATES_REPLY_TO"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 39, "APP.CONCIERGE.EMAIL_TEMPLATES_REPLY_TO_REQUIRED"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(56, 41, "APP.CONCIERGE.EMAIL_TEMPLATES_FROM"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(59, 43, "APP.CONCIERGE.EMAIL_TEMPLATES_FROM_REQUIRED"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(66, 45, "APP.CONCIERGE.EMAIL_TEMPLATES_SUBJECT_REQUIRED"));
        \u0275\u0275advance(2);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(68, 47, "APP.CONCIERGE.EMAIL_TEMPLATES_BODY"))("images_allowed", true);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 69 : -1);
      }
    }, dependencies: [
      RouterModule,
      RouterLink,
      MatProgressSpinnerModule,
      MatProgressSpinner,
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
      IconComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailTemplateManageComponent, [{
    type: Component,
    args: [{ selector: "email-template-manage", template: `
        <div class="bg-base-200 absolute inset-0 overflow-auto">
            <div
                class="bg-base-100 border-base-300 mx-auto min-h-full w-164 max-w-full border-x"
            >
                <header
                    class="bg-base-200 sticky top-2 z-20 mx-auto mb-2 flex w-full max-w-160 items-center justify-between rounded-sm border-none px-4 py-2"
                >
                    <h2 class="text-xl font-medium">
                        {{
                            (template()?.id
                                ? 'APP.CONCIERGE.EMAIL_TEMPLATES_EDIT'
                                : 'APP.CONCIERGE.EMAIL_TEMPLATES_NEW'
                            ) | translate
                        }}
                    </h2>
                    @if (!loading()) {
                        <a icon matRipple [routerLink]="['/email-templates']">
                            <icon>close</icon>
                        </a>
                    }
                </header>
                <form
                    class="relative z-10 mx-auto min-h-[calc(100vh-8.5rem)] w-full max-w-160 overflow-visible p-2"
                    [formGroup]="form"
                >
                    <div class="mb-2 flex items-center gap-2">
                        <div class="w-1/4 flex-1 gap-2">
                            <label for="zone">
                                {{ 'RESOURCE.BUILDING' | translate }}
                            </label>
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript w-full"
                            >
                                <mat-select
                                    name="zone"
                                    [placeholder]="
                                        'COMMON.BUILDING_SELECT' | translate
                                    "
                                    formControlName="zone_id"
                                >
                                    @for (bld of buildings(); track bld.id) {
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
                        <div class="w-1/4 flex-1 gap-2">
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
                                            active_trigger()?.name ||
                                                active_trigger()?.module_name
                                        }}
                                    </div>
                                    @if (!active_trigger()) {
                                        <div class="truncate opacity-30">
                                            {{
                                                'COMMON.TRIGGER_SELECT'
                                                    | translate
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
                                @for (
                                    group of definitions();
                                    track group.name
                                ) {
                                    <label class="p-4">{{ group.name }}</label>
                                    @for (tmpl of group.items; track tmpl.id) {
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
                                                    <div
                                                        class="text-xs opacity-30"
                                                    >
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
                                                    form.value.trigger ===
                                                    tmpl.id
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
                            class="mt-5.5 flex-1"
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
                                field of active_trigger()?.fields || [];
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
                            @if (!(active_trigger()?.fields || []).length) {
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
                                    'APP.CONCIERGE.EMAIL_TEMPLATES_FROM'
                                        | translate
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
                @if (!loading()) {
                    <footer
                        class="bg-base-200 sticky bottom-2 z-20 mx-auto mt-2 flex w-full max-w-160 items-center justify-end rounded-sm border-none px-4 py-2"
                    >
                        <button btn matRipple class="w-40" (click)="save()">
                            {{
                                'APP.CONCIERGE.EMAIL_TEMPLATES_SAVE' | translate
                            }}
                        </button>
                    </footer>
                }
            </div>
        </div>
        <ng-template #load_state>
            <div class="bg-base-100 absolute inset-0">
                <div
                    class="flex h-full w-full flex-col items-center justify-center space-y-2"
                >
                    <mat-spinner [diameter]="32"></mat-spinner>
                    <p>{{ loading() }}</p>
                </div>
            </div>
        </ng-template>
    `, imports: [
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
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmailTemplateManageComponent, { className: "EmailTemplateManageComponent", filePath: "apps/concierge/src/app/email-templates/email-template-manage.component.ts", lineNumber: 310 });
})();

// apps/concierge/src/app/email-templates/broadcast-email-modal.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function BroadcastEmailModalComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "A subject line is required");
    \u0275\u0275elementEnd();
  }
}
function BroadcastEmailModalComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    \u0275\u0275property("value", option_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r1.name, " ");
  }
}
function BroadcastEmailModalComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1, " Recipients are resolved from today's bookings for the active building or region. ");
    \u0275\u0275elementEnd();
  }
}
function BroadcastEmailModalComponent_Conditional_18_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " At least one recipient is required ");
  }
}
function BroadcastEmailModalComponent_Conditional_18_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Some email addresses are invalid ");
  }
}
function BroadcastEmailModalComponent_Conditional_18_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275conditionalCreate(1, BroadcastEmailModalComponent_Conditional_18_Conditional_5_Conditional_1_Template, 1, 0)(2, BroadcastEmailModalComponent_Conditional_18_Conditional_5_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.recipients.hasError("required") ? 1 : ctx_r1.form.controls.recipients.hasError("invalidEmails") ? 2 : -1);
  }
}
function BroadcastEmailModalComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1, " Recipients");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(4, "a-user-list-field", 16);
    \u0275\u0275conditionalCreate(5, BroadcastEmailModalComponent_Conditional_18_Conditional_5_Template, 3, 1, "div", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("error", ctx_r1.form.controls.recipients.invalid && ctx_r1.form.controls.recipients.touched);
    \u0275\u0275advance(4);
    \u0275\u0275property("hide_actions", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.recipients.invalid && ctx_r1.form.controls.recipients.touched ? 5 : -1);
  }
}
function BroadcastEmailModalComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}
function BroadcastEmailModalComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.recipient_count());
  }
}
function BroadcastEmailModalComponent_Conditional_25_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const email_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(email_r3);
  }
}
function BroadcastEmailModalComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 12);
    \u0275\u0275repeaterCreate(1, BroadcastEmailModalComponent_Conditional_25_For_2_Template, 2, 1, "li", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.recipients());
  }
}
function BroadcastEmailModalComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, " No recipients found ");
    \u0275\u0275elementEnd();
  }
}
function BroadcastEmailModalComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "A plaintext body is required");
    \u0275\u0275elementEnd();
  }
}
var EMAIL_REGEX = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
var BroadcastEmailModalComponent = class _BroadcastEmailModalComponent {
  constructor() {
    this._dialog_ref = inject(MatDialogRef);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.loading = signal("", ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.resolving_recipients = signal(false, ...ngDevMode ? [{ debugName: "resolving_recipients" }] : (
      /* istanbul ignore next */
      []
    ));
    this.recipients = signal([], ...ngDevMode ? [{ debugName: "recipients" }] : (
      /* istanbul ignore next */
      []
    ));
    this.recipient_count = computed(() => this.recipients().length, ...ngDevMode ? [{ debugName: "recipient_count" }] : (
      /* istanbul ignore next */
      []
    ));
    this._form_changes = signal(0, ...ngDevMode ? [{ debugName: "_form_changes" }] : (
      /* istanbul ignore next */
      []
    ));
    this._recipient_request = 0;
    this.recipient_options = [
      { id: "rooms", name: "All room hosts & attendees" },
      { id: "desks", name: "All desk hosts" },
      { id: "parking", name: "All parking hosts" },
      { id: "all", name: "All room, desk & parking users" },
      { id: "custom", name: "Custom list" }
    ];
    this.form = new FormGroup({
      subject: new FormControl("", Validators.required),
      recipient_group: new FormControl("custom", {
        nonNullable: true,
        validators: Validators.required
      }),
      recipients: new FormControl([], {
        nonNullable: true,
        validators: this._validateRecipients
      }),
      message_plaintext: new FormControl("", Validators.required)
    });
    this.send_disabled = computed(() => {
      this._form_changes();
      const is_custom = this.form.controls.recipient_group.value === "custom";
      return !!this.loading() || this.resolving_recipients() || this.form.controls.subject.invalid || this.form.controls.message_plaintext.invalid || this.form.controls.recipient_group.invalid || is_custom && this.form.controls.recipients.invalid || !this.recipient_count();
    }, ...ngDevMode ? [{ debugName: "send_disabled" }] : (
      /* istanbul ignore next */
      []
    ));
    this.form.controls.recipient_group.valueChanges.pipe(takeUntilDestroyed()).subscribe(() => this.updateRecipients());
    this.form.controls.recipients.valueChanges.pipe(takeUntilDestroyed()).subscribe(() => this.updateRecipients());
    this.form.valueChanges.pipe(takeUntilDestroyed()).subscribe(() => {
      this._form_changes.update((value) => value + 1);
    });
    this.form.statusChanges.pipe(takeUntilDestroyed()).subscribe(() => this._form_changes.update((value) => value + 1));
    this.updateRecipients();
  }
  async sendEmail() {
    this.form.markAllAsTouched();
    this.form.updateValueAndValidity();
    await this.updateRecipients();
    const is_custom = this.form.controls.recipient_group.value === "custom";
    if (this.send_disabled())
      return;
    const mod = this._org.module("smtp", "Mailer");
    if (!mod) {
      return notifyError("Mailing system is not configured for this application");
    }
    const { subject, message_plaintext } = this.form.getRawValue();
    const recipient_list = this.recipients();
    if (!recipient_list.length) {
      if (is_custom) {
        this.form.controls.recipients.setErrors({ required: true });
      }
      notifyError("No matching recipients found.");
      return;
    }
    const to = recipient_list.length === 1 ? recipient_list[0] : recipient_list;
    this.loading.set("Sending email...");
    try {
      await mod.execute("send_mail", [to, subject, message_plaintext]);
      notifySuccess("Broadcast email sent.");
      this._dialog_ref.close(true);
    } catch (error) {
      notifyError(`Failed to send broadcast email. Error: ${error}`);
    } finally {
      this.loading.set("");
    }
  }
  async updateRecipients() {
    const request_id = ++this._recipient_request;
    const recipient_group = this.form.controls.recipient_group.value;
    if (recipient_group === "custom") {
      this.resolving_recipients.set(false);
      this.recipients.set(this._validEmails(this.form.controls.recipients.value.map((user) => user.email)));
      return;
    }
    this.resolving_recipients.set(true);
    try {
      const recipient_list = await this._recipientList();
      if (request_id === this._recipient_request) {
        this.recipients.set(recipient_list);
      }
    } finally {
      if (request_id === this._recipient_request) {
        this.resolving_recipients.set(false);
      }
    }
  }
  async _recipientList() {
    const recipient_group = this.form.controls.recipient_group.value;
    if (recipient_group === "custom") {
      return this._validEmails(this.form.controls.recipients.value.map((user) => user.email));
    }
    const period_start = addMinutes(startOfDay(Date.now()), this._tzOffset() * 60);
    const period_end = addMinutes(endOfDay(Date.now()), this._tzOffset() * 60);
    const query = {
      period_start: getUnixTime(period_start),
      period_end: getUnixTime(period_end),
      limit: 1e3
    };
    const zone_ids = this._activeZoneIds().join(",");
    const rooms = recipient_group === "rooms" || recipient_group === "all" ? queryAllEvents(__spreadProps(__spreadValues({}, query), { zone_ids })).pipe(catchError(() => of([]))) : of([]);
    const desks = recipient_group === "desks" || recipient_group === "all" ? queryAllBookings(__spreadProps(__spreadValues({}, query), {
      zones: zone_ids,
      type: "desk",
      include_checked_out: true
    })).pipe(catchError(() => of([]))) : of([]);
    const parking = recipient_group === "parking" || recipient_group === "all" ? queryAllBookings(__spreadProps(__spreadValues({}, query), {
      zones: zone_ids,
      type: "parking",
      include_checked_out: true
    })).pipe(catchError(() => of([]))) : of([]);
    const result = await lastValueFrom(forkJoin({ rooms, desks, parking }));
    return this._validEmails([
      ...result.rooms.flatMap((event) => [
        event.host,
        ...(event.attendees || []).map((user) => user.email)
      ]),
      ...result.desks.flatMap((booking) => [
        booking.user_email,
        booking.booked_by_email
      ]),
      ...result.parking.flatMap((booking) => [
        booking.user_email,
        booking.booked_by_email
      ])
    ]);
  }
  _validEmails(emails) {
    const email_set = /* @__PURE__ */ new Set();
    for (const email of emails) {
      const value = (email || "").trim().toLowerCase();
      if (EMAIL_REGEX.test(value))
        email_set.add(value);
    }
    return [...email_set];
  }
  _activeZoneIds() {
    const default_zones = this._settings.get("app.use_region") ? this._org.buildingsForRegion(this._org.region).map((_) => _.id) : [this._org.building?.id];
    return default_zones.filter((zone_id) => !!zone_id);
  }
  _tzOffset() {
    const tz = this._settings.get("app.bookings.use_building_timezone") ? this._org.building?.timezone : "";
    const current_tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return !tz ? 0 : getTimezoneDifferenceInHours(current_tz, tz);
  }
  _validateRecipients(control) {
    const value = control.value || [];
    if (!value || !value.length)
      return { required: true };
    const has_invalid = value.some((user) => !EMAIL_REGEX.test(user.email));
    if (has_invalid)
      return { invalidEmails: true };
    return null;
  }
  static {
    this.\u0275fac = function BroadcastEmailModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BroadcastEmailModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BroadcastEmailModalComponent, selectors: [["broadcast-email-modal"]], decls: 34, vars: 15, consts: [["heading", "Broadcast Email", "confirm_text", "Send Email", 3, "confirm", "loading", "confirm_disabled"], [1, "mx-auto", "flex", "max-w-3xl", "flex-col", 3, "formGroup"], ["for", "subject"], ["appearance", "outline"], ["matInput", "", "name", "subject", "formControlName", "subject", "placeholder", "Email subject"], ["for", "recipient_group"], ["name", "recipient_group", "formControlName", "recipient_group"], [3, "value"], [1, "-mt-4", "mb-4", "text-sm", "opacity-60"], [1, "border-base-200", "bg-base-100", "mb-4", "rounded", "border"], [1, "flex", "items-center", "justify-between", "px-4", "py-3", "text-sm"], [1, "opacity-60"], [1, "border-base-200", "max-h-40", "overflow-y-auto", "border-t", "px-4", "py-2", "text-sm"], [1, "border-base-200", "border-t", "px-4", "py-3", "text-sm", "opacity-60"], ["for", "message_plaintext"], ["matInput", "", "name", "message_plaintext", "rows", "12", "formControlName", "message_plaintext", "placeholder", "Plaintext email body"], ["name", "recipients", "formControlName", "recipients", 3, "hide_actions"], [1, "text-error", "-mt-4", "mb-4", "text-sm"], [1, "truncate", "py-1"]], template: function BroadcastEmailModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275listener("confirm", function BroadcastEmailModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.sendEmail();
        });
        \u0275\u0275elementStart(1, "form", 1)(2, "label", 2);
        \u0275\u0275text(3, " Subject");
        \u0275\u0275elementStart(4, "span");
        \u0275\u0275text(5, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "mat-form-field", 3);
        \u0275\u0275element(7, "input", 4);
        \u0275\u0275conditionalCreate(8, BroadcastEmailModalComponent_Conditional_8_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "label", 5);
        \u0275\u0275text(10, " Send to");
        \u0275\u0275elementStart(11, "span");
        \u0275\u0275text(12, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "mat-form-field", 3)(14, "mat-select", 6);
        \u0275\u0275repeaterCreate(15, BroadcastEmailModalComponent_For_16_Template, 2, 2, "mat-option", 7, _forTrack02);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(17, BroadcastEmailModalComponent_Conditional_17_Template, 2, 0, "div", 8);
        \u0275\u0275conditionalCreate(18, BroadcastEmailModalComponent_Conditional_18_Template, 6, 4);
        \u0275\u0275elementStart(19, "div", 9)(20, "div", 10)(21, "span", 11);
        \u0275\u0275text(22, "Recipients");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(23, BroadcastEmailModalComponent_Conditional_23_Template, 2, 0, "span")(24, BroadcastEmailModalComponent_Conditional_24_Template, 2, 1, "span");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(25, BroadcastEmailModalComponent_Conditional_25_Template, 3, 0, "ul", 12)(26, BroadcastEmailModalComponent_Conditional_26_Template, 2, 0, "div", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "label", 14);
        \u0275\u0275text(28, " Plaintext body");
        \u0275\u0275elementStart(29, "span");
        \u0275\u0275text(30, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "mat-form-field", 3);
        \u0275\u0275element(32, "textarea", 15);
        \u0275\u0275conditionalCreate(33, BroadcastEmailModalComponent_Conditional_33_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("loading", ctx.loading())("confirm_disabled", ctx.send_disabled());
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance();
        \u0275\u0275classProp("error", ctx.form.controls.subject.invalid && ctx.form.controls.subject.touched);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.form.controls.subject.invalid && ctx.form.controls.subject.touched ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("error", ctx.form.controls.recipient_group.invalid && ctx.form.controls.recipient_group.touched);
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.recipient_options);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.form.controls.recipient_group.value !== "custom" ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.form.controls.recipient_group.value === "custom" ? 18 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.resolving_recipients() ? 23 : 24);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.resolving_recipients() && ctx.recipient_count() ? 25 : !ctx.resolving_recipients() ? 26 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("error", ctx.form.controls.message_plaintext.invalid && ctx.form.controls.message_plaintext.touched);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.form.controls.message_plaintext.invalid && ctx.form.controls.message_plaintext.touched ? 33 : -1);
      }
    }, dependencies: [
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      MatDialogModule,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      FullscreenModalShellComponent,
      UserListFieldComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BroadcastEmailModalComponent, [{
    type: Component,
    args: [{ selector: "broadcast-email-modal", template: `
        <fullscreen-modal-shell
            heading="Broadcast Email"
            [loading]="loading()"
            confirm_text="Send Email"
            [confirm_disabled]="send_disabled()"
            (confirm)="sendEmail()"
        >
            <form class="mx-auto flex max-w-3xl flex-col" [formGroup]="form">
                <label
                    for="subject"
                    [class.error]="
                        form.controls.subject.invalid &&
                        form.controls.subject.touched
                    "
                >
                    Subject<span>*</span>
                </label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="subject"
                        formControlName="subject"
                        placeholder="Email subject"
                    />
                    @if (
                        form.controls.subject.invalid &&
                        form.controls.subject.touched
                    ) {
                        <mat-error>A subject line is required</mat-error>
                    }
                </mat-form-field>

                <label
                    for="recipient_group"
                    [class.error]="
                        form.controls.recipient_group.invalid &&
                        form.controls.recipient_group.touched
                    "
                >
                    Send to<span>*</span>
                </label>
                <mat-form-field appearance="outline">
                    <mat-select
                        name="recipient_group"
                        formControlName="recipient_group"
                    >
                        @for (option of recipient_options; track option.id) {
                            <mat-option [value]="option.id">
                                {{ option.name }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
                @if (form.controls.recipient_group.value !== 'custom') {
                    <div class="-mt-4 mb-4 text-sm opacity-60">
                        Recipients are resolved from today's bookings for the
                        active building or region.
                    </div>
                }

                @if (form.controls.recipient_group.value === 'custom') {
                    <label
                        [class.error]="
                            form.controls.recipients.invalid &&
                            form.controls.recipients.touched
                        "
                    >
                        Recipients<span>*</span>
                    </label>
                    <a-user-list-field
                        name="recipients"
                        formControlName="recipients"
                        [hide_actions]="true"
                    ></a-user-list-field>
                    @if (
                        form.controls.recipients.invalid &&
                        form.controls.recipients.touched
                    ) {
                        <div class="text-error -mt-4 mb-4 text-sm">
                            @if (
                                form.controls.recipients.hasError('required')
                            ) {
                                At least one recipient is required
                            } @else if (
                                form.controls.recipients.hasError(
                                    'invalidEmails'
                                )
                            ) {
                                Some email addresses are invalid
                            }
                        </div>
                    }
                }

                <div class="border-base-200 bg-base-100 mb-4 rounded border">
                    <div
                        class="flex items-center justify-between px-4 py-3 text-sm"
                    >
                        <span class="opacity-60">Recipients</span>
                        @if (resolving_recipients()) {
                            <span>Loading...</span>
                        } @else {
                            <span>{{ recipient_count() }}</span>
                        }
                    </div>
                    @if (!resolving_recipients() && recipient_count()) {
                        <ul
                            class="border-base-200 max-h-40 overflow-y-auto border-t px-4 py-2 text-sm"
                        >
                            @for (email of recipients(); track email) {
                                <li class="truncate py-1">{{ email }}</li>
                            }
                        </ul>
                    } @else if (!resolving_recipients()) {
                        <div
                            class="border-base-200 border-t px-4 py-3 text-sm opacity-60"
                        >
                            No recipients found
                        </div>
                    }
                </div>

                <label
                    for="message_plaintext"
                    [class.error]="
                        form.controls.message_plaintext.invalid &&
                        form.controls.message_plaintext.touched
                    "
                >
                    Plaintext body<span>*</span>
                </label>
                <mat-form-field appearance="outline">
                    <textarea
                        matInput
                        name="message_plaintext"
                        rows="12"
                        formControlName="message_plaintext"
                        placeholder="Plaintext email body"
                    ></textarea>
                    @if (
                        form.controls.message_plaintext.invalid &&
                        form.controls.message_plaintext.touched
                    ) {
                        <mat-error>A plaintext body is required</mat-error>
                    }
                </mat-form-field>
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      ReactiveFormsModule,
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      FullscreenModalShellComponent,
      UserListFieldComponent
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BroadcastEmailModalComponent, { className: "BroadcastEmailModalComponent", filePath: "apps/concierge/src/app/email-templates/broadcast-email-modal.component.ts", lineNumber: 198 });
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
function EmailTemplatesListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function EmailTemplatesListComponent_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openBroadcastModal());
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275text(2, "Broadcast Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "icon", 12);
    \u0275\u0275text(4, "campaign");
    \u0275\u0275elementEnd()();
  }
}
function EmailTemplatesListComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, data_r3 * 1e3, "mediumDate"), " ");
  }
}
function EmailTemplatesListComponent_ng_template_23_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
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
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275conditionalCreate(3, EmailTemplatesListComponent_ng_template_23_Conditional_3_Template, 3, 3, "span", 19);
    \u0275\u0275pipe(4, "building");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const data_r4 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_6_0 = \u0275\u0275pipeBind1(2, 2, data_r4)) == null ? null : tmp_6_0.display_name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(4, 4, data_r4) ? 3 : -1);
  }
}
function EmailTemplatesListComponent_ng_template_25_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
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
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, EmailTemplatesListComponent_ng_template_25_Conditional_2_Template, 3, 3, "span", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r5 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r5, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!data_r5 ? 2 : -1);
  }
}
function EmailTemplatesListComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21)(1, "icon");
    \u0275\u0275text(2, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "mat-menu", null, 4)(5, "button", 22);
    \u0275\u0275listener("click", function EmailTemplatesListComponent_ng_template_27_Template_button_click_5_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sendTestEmail(row_r7));
    });
    \u0275\u0275elementStart(6, "div", 23)(7, "icon", 12);
    \u0275\u0275text(8, "send");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "a", 24)(13, "div", 23)(14, "icon", 12);
    \u0275\u0275text(15, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "button", 22);
    \u0275\u0275listener("click", function EmailTemplatesListComponent_ng_template_27_Template_button_click_19_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeTemplate(row_r7));
    });
    \u0275\u0275elementStart(20, "div", 23)(21, "icon", 25);
    \u0275\u0275text(22, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r7 = ctx.row;
    const menu_r8 = \u0275\u0275reference(4);
    \u0275\u0275property("matMenuTriggerFor", menu_r8);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 5, "APP.CONCIERGE.EMAIL_TEMPLATES_SEND_TEST"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c8, row_r7.id));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 7, "APP.CONCIERGE.EMAIL_TEMPLATES_EDIT"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 9, "APP.CONCIERGE.EMAIL_TEMPLATES_REMOVE"), " ");
  }
}
var EmailTemplatesListComponent = class _EmailTemplatesListComponent {
  constructor() {
    this._state = inject(EmailTemplatesStateService);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this.filters = toSignal(this._state.filters, {
      initialValue: {}
    });
    this.templates = toSignal(this._state.filtered_templates, {
      initialValue: []
    });
    this.removeTemplate = (t) => this._state.removeTemplate(t);
    this.openBroadcastModal = () => this._dialog.open(BroadcastEmailModalComponent, {});
  }
  get has_mailing_binding() {
    return !!this._org.binding("smtp");
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
  static {
    this.\u0275fac = function EmailTemplatesListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmailTemplatesListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailTemplatesListComponent, selectors: [["email-templates-list"]], decls: 29, vars: 45, consts: [["date_template", ""], ["bld_template", ""], ["trigger_template", ""], ["actions_template", ""], ["menu", "matMenu"], [1, "absolute", "inset-0", "flex", "flex-col"], [1, "flex", "items-center", "justify-between", "space-x-2", "p-8"], [1, "text-2xl", "font-medium"], [1, "flex-1"], ["btn", "", "matRipple", ""], ["btn", "", "matRipple", "", 3, "routerLink"], [1, "ml-2"], [1, "text-2xl"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-y-auto", "px-8"], [1, "min-h-full", "w-full", "overflow-x-auto"], ["empty_message", "No group events for selected period", 1, "block", "w-full", "min-w-4xl", "text-sm", 3, "data", "columns", "sortable"], ["btn", "", "matRipple", "", 3, "click"], [1, "p-4", "opacity-60"], [1, "p-4"], [1, "opacity-30"], [1, "p-4", "font-mono", "text-xs"], ["icon", "", "matRipple", "", 1, "mx-auto", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], ["mat-menu-item", "", 3, "routerLink"], [1, "text-error", "text-2xl"]], template: function EmailTemplatesListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "h2", 7);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(5, "div", 8);
        \u0275\u0275conditionalCreate(6, EmailTemplatesListComponent_Conditional_6_Template, 5, 0, "button", 9);
        \u0275\u0275elementStart(7, "a", 10)(8, "div", 11);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "icon", 12);
        \u0275\u0275text(12, "add");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 13)(14, "div", 14);
        \u0275\u0275element(15, "simple-table", 15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275template(21, EmailTemplatesListComponent_ng_template_21_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(23, EmailTemplatesListComponent_ng_template_23_Template, 5, 6, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(25, EmailTemplatesListComponent_ng_template_25_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(27, EmailTemplatesListComponent_ng_template_27_Template, 26, 13, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_9_0;
        const date_template_r9 = \u0275\u0275reference(22);
        const bld_template_r10 = \u0275\u0275reference(24);
        const trigger_template_r11 = \u0275\u0275reference(26);
        const actions_template_r12 = \u0275\u0275reference(28);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "APP.CONCIERGE.EMAIL_TEMPLATES_HEADER"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.has_mailing_binding ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(21, _c02));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 9, "APP.CONCIERGE.EMAIL_TEMPLATES_ADD"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275property("data", ctx.templates())("columns", \u0275\u0275pureFunction6(38, _c7, \u0275\u0275pureFunction1(22, _c12, \u0275\u0275pipeBind1(16, 11, "FORM.TITLE")), \u0275\u0275pureFunction2(24, _c2, \u0275\u0275pipeBind1(17, 13, "COMMON.CATEGORY"), !((tmp_9_0 = ctx.filters()) == null ? null : tmp_9_0.category) && false), \u0275\u0275pureFunction2(27, _c3, \u0275\u0275pipeBind1(18, 15, "COMMON.TRIGGER"), trigger_template_r11), \u0275\u0275pureFunction2(30, _c4, \u0275\u0275pipeBind1(19, 17, "RESOURCE.BUILDING"), bld_template_r10), \u0275\u0275pureFunction2(33, _c5, \u0275\u0275pipeBind1(20, 19, "COMMON.CREATED_AT"), date_template_r9), \u0275\u0275pureFunction1(36, _c6, actions_template_r12)))("sortable", true);
      }
    }, dependencies: [
      CommonModule,
      IconComponent,
      SimpleTableComponent,
      RouterModule,
      RouterLink,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      DatePipe,
      TranslatePipe,
      BuildingPipe
    ], encapsulation: 2 });
  }
};
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
            @if (has_mailing_binding) {
                <button btn matRipple (click)="openBroadcastModal()">
                    <div class="ml-2">Broadcast Email</div>
                    <icon class="text-2xl">campaign</icon>
                </button>
            }
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
                    [data]="templates()"
                    empty_message="No group events for selected period"
                    [columns]="[
                        { key: 'subject', name: 'FORM.TITLE' | translate },
                        {
                            key: 'category',
                            name: 'COMMON.CATEGORY' | translate,
                            show: !filters()?.category && false,
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmailTemplatesListComponent, { className: "EmailTemplatesListComponent", filePath: "apps/concierge/src/app/email-templates/email-templates-list.component.ts", lineNumber: 192 });
})();

// apps/concierge/src/app/email-templates/email-templates.component.ts
var _c03 = ["app-email-templates", ""];
var EmailTemplatesComponent = class _EmailTemplatesComponent {
  constructor() {
    this._router = inject(Router);
    this._url = toSignal(this._router.events.pipe(startWith(null)), {
      initialValue: null
    });
    this.path = computed(() => {
      this._url();
      const parts = this._router.url.split("/");
      return parts[parts.length - 1].split("?")[0];
    }, ...ngDevMode ? [{ debugName: "path" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function EmailTemplatesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmailTemplatesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailTemplatesComponent, selectors: [["", "app-email-templates", ""]], attrs: _c03, decls: 5, vars: 0, consts: [[1, "flex", "h-px", "flex-1"], [1, "relative", "flex", "h-full", "w-1/2", "flex-1", "flex-col"]], template: function EmailTemplatesComponent_Template(rf, ctx) {
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
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=email-templates.component.css.map */"] });
  }
};
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmailTemplatesComponent, { className: "EmailTemplatesComponent", filePath: "apps/concierge/src/app/email-templates/email-templates.component.ts", lineNumber: 36 });
})();

// apps/concierge/src/app/email-templates/email-templates.module.ts
var ROUTES = [
  {
    path: "",
    component: EmailTemplatesComponent,
    children: [
      {
        path: "",
        component: EmailTemplatesListComponent,
        title: "Email Templates"
      }
    ]
  },
  {
    path: "manage",
    component: EmailTemplateManageComponent,
    title: "Manage Email Template"
  },
  {
    path: "manage/:id",
    component: EmailTemplateManageComponent,
    title: "Manage Email Template"
  },
  { path: "**", redirectTo: "" }
];
var EmailTemplatesModule = class _EmailTemplatesModule {
  static {
    this.\u0275fac = function EmailTemplatesModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmailTemplatesModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _EmailTemplatesModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      EmailTemplatesComponent,
      EmailTemplatesListComponent,
      EmailTemplateManageComponent,
      RouterModule.forChild(ROUTES)
    ] });
  }
};
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
//# sourceMappingURL=email-templates.module-U3Q4OWP3.js.map
