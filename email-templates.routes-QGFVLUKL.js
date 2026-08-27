import {
  UserListFieldComponent
} from "./chunk-RHW7PZTN.js";
import {
  toSignal
} from "./chunk-RPJRKZJT.js";
import {
  queryAllEvents
} from "./chunk-IHAOKHUQ.js";
import "./chunk-ZPOHLJTY.js";
import {
  BuildingPipe
} from "./chunk-3PQMPZLI.js";
import "./chunk-PDMRTYMA.js";
import {
  SimpleTableComponent
} from "./chunk-TZ3UXIQG.js";
import {
  queryAllBookings
} from "./chunk-5HZYZ5OU.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  FullscreenModalShellComponent,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSelect,
  MatSelectModule,
  RichTextInputComponent
} from "./chunk-76AIUSHB.js";
import "./chunk-QJWYJFTN.js";
import "./chunk-5NOPK7NX.js";
import {
  ActivatedRoute,
  AsyncHandler,
  Clipboard,
  CommonModule,
  Component,
  DatePipe,
  FormField,
  IconComponent,
  Injectable,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatOption,
  MatPrefix,
  MatTooltip,
  MatTooltipModule,
  OrganisationService,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  SettingsService,
  TranslatePipe,
  Vu,
  Xu,
  addMinutes,
  computed,
  currentUser,
  effect,
  endOfDay,
  extractTextFromHTML,
  form,
  getTimezoneDifferenceInHours,
  getUnixTime,
  i18n,
  inject,
  notifyError,
  notifySuccess,
  randomString,
  required,
  resource,
  setClassMetadata,
  signal,
  startOfDay,
  unique,
  untracked,
  validate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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
} from "./chunk-F7PQS4NK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/concierge/src/app/email-templates/email-templates-state.service.ts
var EmailTemplatesStateService = class _EmailTemplatesStateService extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._filters = signal(
      {},
      ...ngDevMode ? [{ debugName: "_filters" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._change = signal(
      0,
      ...ngDevMode ? [{ debugName: "_change" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._template_definitions = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_template_definitions" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        building: this._org.active_building()?.id,
        region: this._org.active_region()?.id,
        change: this._change()
      }),
      defaultValue: [],
      loader: async ({ params }) => {
        if (!params.building)
          return [];
        const metadata = await Vu(this._org.organisation.id, "email_template_fields").catch(() => null);
        const definitions = metadata?.details || {};
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
      }
    }));
    this.template_definitions = this._template_definitions.value;
    this.template_groups = computed(
      () => {
        const defs = this.template_definitions();
        const groups = unique(defs.map((_) => _.module_name));
        if (!groups.length)
          return [{ name: "", items: defs }];
        return groups.map((name) => ({
          name,
          items: defs.filter((_) => _.module_name === name)
        }));
      },
      ...ngDevMode ? [{ debugName: "template_groups" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._templates = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_templates" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        building: this._org.active_building()?.id,
        region: this._org.active_region()?.id,
        change: this._change()
      }),
      defaultValue: [],
      loader: ({ params }) => this._queryTemplates(params.building, params.region)
    }));
    this.templates = this._templates.value;
    this.filters = this._filters.asReadonly();
    this.filtered_templates = computed(
      () => {
        const templates = this.templates();
        const category = this.filters().category || "";
        return templates.filter((_) => _.category === category || category === "");
      },
      ...ngDevMode ? [{ debugName: "filtered_templates" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  _processTemplates(metadata, zone_id) {
    const data = metadata.details;
    return ((data instanceof Array ? data : "") || []).map((template) => __spreadProps(__spreadValues({}, template), { zone_id }));
  }
  /** Query the merged list of templates for the given building/region */
  async _queryTemplates(building, region) {
    if (!building)
      return [];
    const [org_templates, bld_templates, region_templates] = await Promise.all([
      Vu(this._org.organisation.id, "email_templates").then((_) => this._processTemplates(_, this._org.organisation.id)).catch(() => []),
      Vu(building, "email_templates").then((_) => this._processTemplates(_, building)).catch(() => []),
      region ? Vu(region, "email_templates").then((_) => this._processTemplates(_, region)).catch(() => []) : Promise.resolve([])
    ]);
    return org_templates.concat(bld_templates).concat(region_templates);
  }
  async loadTemplate(id) {
    const template_list = await this._queryTemplates(this._org.active_building()?.id, this._org.active_region()?.id);
    return template_list.find((_) => _.id === id);
  }
  async saveTemplate(template, old_zone = "") {
    if (!template.zone_id)
      throw "A building is required";
    if (template.id && old_zone) {
      const old_metadata = await Vu(old_zone, "email_templates");
      if (old_metadata.details instanceof Array) {
        await Xu(old_zone, {
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
    const metadata = await Vu(template.zone_id, "email_templates");
    const template_list = metadata.details instanceof Array ? metadata.details : [];
    const zone_templates = template_list.filter((_) => _.zone_id === template.zone_id);
    const new_template_list = [
      ...zone_templates.filter((_) => _.id !== template.id),
      template
    ];
    await Xu(template.zone_id, {
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
    this.timeout("changed", () => this._change.set(Date.now()));
  }
  async removeTemplate(template) {
    const template_list = await this._queryTemplates(this._org.active_building()?.id, this._org.active_region()?.id);
    const zone_templates = template_list.filter((_) => _.zone_id === template.zone_id);
    const new_template_list = zone_templates.filter((_) => _.id !== template.id);
    await Xu(template.zone_id, {
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
    this.timeout("changed", () => this._change.set(Date.now()));
  }
  setFilters(filters) {
    this._filters.set(__spreadValues(__spreadValues({}, this._filters()), filters));
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
      return \u0275\u0275resetView(ctx_r3.model.update((m) => __spreadProps(__spreadValues({}, m), { trigger: tmpl_r3.id })));
    });
    \u0275\u0275elementStart(1, "div", 35)(2, "div", 36)(3, "div", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 38);
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 39);
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
    \u0275\u0275conditional(ctx_r3.model().trigger === tmpl_r3.id ? 9 : -1);
  }
}
function EmailTemplateManageComponent_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 34);
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
    \u0275\u0275elementStart(1, "div", 40)(2, "div", 41);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 37);
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
    \u0275\u0275elementStart(0, "footer", 33)(1, "button", 42);
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
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44);
    \u0275\u0275element(2, "mat-spinner", 45);
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
    this.loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.template = signal(
      null,
      ...ngDevMode ? [{ debugName: "template" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.definitions = this._state.template_groups;
    this.buildings = this._org.building_list;
    this.model = signal(
      {
        id: "",
        reply_to: "",
        from: "",
        subject: "",
        category: "internal",
        trigger: "",
        html: "",
        zone_id: ""
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model, (p) => {
      required(p.subject);
      required(p.html);
    });
    this.active_trigger = computed(
      () => {
        const trigger_id = this.model().trigger;
        return this.definitions().flatMap((group) => group.items).find((_) => _.id === trigger_id);
      },
      ...ngDevMode ? [{ debugName: "active_trigger" }] : (
        /* istanbul ignore next */
        []
      )
    );
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
    const value = this.model();
    const zone = this.template()?.zone_id !== value.zone_id ? this.template()?.zone_id : "";
    await this._state.saveTemplate(__spreadProps(__spreadValues(__spreadValues({}, this.template() || {}), value), {
      text: extractTextFromHTML(value.html || "")
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
    const tmpl = template;
    this.model.update((m) => __spreadProps(__spreadValues({}, m), {
      id: tmpl.id ?? m.id,
      reply_to: tmpl.reply_to ?? m.reply_to,
      from: tmpl.from ?? m.from,
      subject: tmpl.subject ?? m.subject,
      category: tmpl.category ?? m.category,
      trigger: tmpl.trigger ?? m.trigger,
      html: tmpl.html ?? m.html,
      zone_id: tmpl.zone_id ?? m.zone_id
    }));
  }
  static {
    this.\u0275fac = function EmailTemplateManageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmailTemplateManageComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailTemplateManageComponent, selectors: [["email-template-manage"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 72, vars: 55, consts: [["trigger_menu", "matMenu"], ["tracking_menu", "matMenu"], ["load_state", ""], [1, "bg-base-200", "absolute", "inset-0", "overflow-auto"], [1, "bg-base-100", "border-base-300", "mx-auto", "min-h-full", "w-164", "max-w-full", "border-x"], [1, "bg-base-200", "sticky", "top-2", "z-20", "mx-auto", "mb-2", "flex", "w-full", "max-w-160", "items-center", "justify-between", "rounded-sm", "border-none", "px-4", "py-2"], [1, "text-xl", "font-medium"], ["icon", "", "matRipple", "", 3, "routerLink"], [1, "relative", "z-10", "mx-auto", "min-h-[calc(100vh-8.5rem)]", "w-full", "max-w-160", "overflow-visible", "p-2"], [1, "mb-2", "flex", "items-center", "gap-2"], [1, "w-1/4", "flex-1", "gap-2"], ["for", "zone"], ["appearance", "outline", 1, "no-subscript", "w-full"], [3, "placeholder", "formField"], [3, "value"], ["for", "trigger"], ["type", "button", "btn", "", "matRipple", "", 1, "inverse", "border-base-300", "flex", "h-12", "w-full", "items-center", "justify-between", "rounded-sm", "border", "px-2", 3, "click", "matMenuTriggerFor"], [1, "flex", "w-1/2", "flex-1", "flex-col", "px-2", "text-left", "leading-tight"], [1, "truncate"], [1, "truncate", "opacity-30"], [1, "text-2xl"], [1, "max-h-96"], ["mat-menu-item", "", 3, "click"], ["btn", "", "type", "button", "matRipple", "", "matTooltip", "Values that get replaced in the email template when sent", 1, "mt-5.5", "flex-1", 3, "disabled", "matMenuTriggerFor"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "disabled"], [1, "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "flex-1"], ["matInput", "", 3, "placeholder", "formField"], ["appearance", "outline", 1, "w-full"], ["matPrefix", "", 1, "relative", "-left-1", "text-2xl"], ["matInput", "", "placeholder", "Template Subject", 3, "formField"], [1, "block", "min-h-[calc(100vh-32rem)]", 3, "formField", "placeholder", "images_allowed"], [1, "bg-base-200", "sticky", "bottom-2", "z-20", "mx-auto", "mt-2", "flex", "w-full", "max-w-160", "items-center", "justify-end", "rounded-sm", "border-none", "px-4", "py-2"], [1, "p-4"], [1, "flex", "items-center", "space-x-2", "pl-2"], [1, "my-2", "flex", "flex-1", "flex-col-reverse", "leading-tight"], [1, "text-xs", "opacity-30"], [1, "text-sm"], [1, "opacity-0"], [1, "flex", "flex-col", "leading-tight"], [1, "font-mono", "text-sm"], ["btn", "", "type", "button", "matRipple", "", 1, "w-40", 3, "click"], [1, "bg-base-100", "absolute", "inset-0"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-2"], [3, "diameter"]], template: function EmailTemplateManageComponent_Template(rf, ctx) {
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
        \u0275\u0275controlCreate();
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
          return ctx.form.trigger().markAsTouched();
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
          return ctx.model.update((m) => __spreadProps(__spreadValues({}, m), { trigger: "" }));
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
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(51, "mat-error");
        \u0275\u0275text(52);
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "mat-form-field", 27);
        \u0275\u0275element(55, "input", 28);
        \u0275\u0275pipe(56, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(57, "mat-error");
        \u0275\u0275text(58);
        \u0275\u0275pipe(59, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(60, "mat-form-field", 29)(61, "icon", 30);
        \u0275\u0275text(62, " description ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(63, "input", 31);
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(64, "mat-error");
        \u0275\u0275text(65);
        \u0275\u0275pipe(66, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(67, "rich-text-input", 32);
        \u0275\u0275pipe(68, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(69, EmailTemplateManageComponent_Conditional_69_Template, 4, 3, "footer", 33);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(70, EmailTemplateManageComponent_ng_template_70_Template, 5, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const trigger_menu_r9 = \u0275\u0275reference(33);
        const tracking_menu_r10 = \u0275\u0275reference(43);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 27, ctx.template()?.id ? "APP.CONCIERGE.EMAIL_TEMPLATES_EDIT" : "APP.CONCIERGE.EMAIL_TEMPLATES_NEW"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 6 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 29, "RESOURCE.BUILDING"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(15, 31, "COMMON.BUILDING_SELECT"))("formField", ctx.form.zone_id);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.buildings());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 33, "COMMON.BUILDING_REQUIRED"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 35, "COMMON.TRIGGER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("matMenuTriggerFor", trigger_menu_r9);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.active_trigger()?.name || ctx.active_trigger()?.module_name, " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.active_trigger() ? 29 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 37, "COMMON.NONE"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.definitions());
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.model().trigger)("matMenuTriggerFor", tracking_menu_r10);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 39, "APP.CONCIERGE.EMAIL_TEMPLATES_PLACEHOLDERS"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.active_trigger()?.fields || \u0275\u0275pureFunction0(53, _c0));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!(ctx.active_trigger()?.fields || \u0275\u0275pureFunction0(54, _c0)).length ? 46 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(50, 41, "APP.CONCIERGE.EMAIL_TEMPLATES_REPLY_TO"))("formField", ctx.form.reply_to);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 43, "APP.CONCIERGE.EMAIL_TEMPLATES_REPLY_TO_REQUIRED"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(56, 45, "APP.CONCIERGE.EMAIL_TEMPLATES_FROM"))("formField", ctx.form.from);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(59, 47, "APP.CONCIERGE.EMAIL_TEMPLATES_FROM_REQUIRED"));
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.subject);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(66, 49, "APP.CONCIERGE.EMAIL_TEMPLATES_SUBJECT_REQUIRED"));
        \u0275\u0275advance(2);
        \u0275\u0275property("formField", ctx.form.html)("placeholder", \u0275\u0275pipeBind1(68, 51, "APP.CONCIERGE.EMAIL_TEMPLATES_BODY"))("images_allowed", true);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 69 : -1);
      }
    }, dependencies: [
      RouterModule,
      RouterLink,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      FormField,
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
                                    [placeholder]="
                                        'COMMON.BUILDING_SELECT' | translate
                                    "
                                    [formField]="form.zone_id"
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
                                type="button"
                                class="inverse border-base-300 flex h-12 w-full items-center justify-between rounded-sm border px-2"
                                btn
                                matRipple
                                [matMenuTriggerFor]="trigger_menu"
                                (click)="form.trigger().markAsTouched()"
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
                                    (click)="
                                        model.update((m) => ({
                                            ...m,
                                            trigger: '',
                                        }))
                                    "
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
                                                model.update((m) => ({
                                                    ...m,
                                                    trigger: tmpl.id,
                                                }))
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
                                                    model().trigger === tmpl.id
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
                            type="button"
                            matRipple
                            class="mt-5.5 flex-1"
                            matTooltip="Values that get replaced in the email template when sent"
                            [disabled]="!model().trigger"
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
                                [formField]="form.reply_to"
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
                                [formField]="form.from"
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
                            [formField]="form.subject"
                        />
                        <mat-error>{{
                            'APP.CONCIERGE.EMAIL_TEMPLATES_SUBJECT_REQUIRED'
                                | translate
                        }}</mat-error>
                    </mat-form-field>
                    <rich-text-input
                        [formField]="form.html"
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
                        <button btn
                            type="button" matRipple class="w-40" (click)="save()">
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
      FormField,
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
    \u0275\u0275conditional(ctx_r1.recipientsHasError("required") ? 1 : ctx_r1.recipientsHasError("invalidEmails") ? 2 : -1);
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
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(5, BroadcastEmailModalComponent_Conditional_18_Conditional_5_Template, 3, 1, "div", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("error", ctx_r1.form.recipients().invalid() && ctx_r1.form.recipients().touched());
    \u0275\u0275advance(4);
    \u0275\u0275property("formField", ctx_r1.form.recipients)("hide_actions", true);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.recipients().invalid() && ctx_r1.form.recipients().touched() ? 5 : -1);
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
    this.loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.resolving_recipients = signal(
      false,
      ...ngDevMode ? [{ debugName: "resolving_recipients" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.recipients = signal(
      [],
      ...ngDevMode ? [{ debugName: "recipients" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.recipient_count = computed(
      () => this.recipients().length,
      ...ngDevMode ? [{ debugName: "recipient_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._recipient_request = 0;
    this.recipient_options = [
      { id: "rooms", name: "All room hosts & attendees" },
      { id: "desks", name: "All desk hosts" },
      { id: "parking", name: "All parking hosts" },
      { id: "all", name: "All room, desk & parking users" },
      { id: "custom", name: "Custom list" }
    ];
    this.model = signal(
      {
        subject: "",
        recipient_group: "custom",
        recipients: [],
        message_plaintext: ""
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model, (p) => {
      required(p.subject);
      required(p.recipient_group);
      required(p.message_plaintext);
      validate(p.recipients, ({ value }) => {
        const list = value() || [];
        if (!list.length)
          return { kind: "required" };
        if (list.some((user) => !EMAIL_REGEX.test(user.email)))
          return { kind: "invalidEmails" };
        return void 0;
      });
    });
    this.send_disabled = computed(
      () => {
        const is_custom = this.model().recipient_group === "custom";
        return !!this.loading() || this.resolving_recipients() || this.form.subject().invalid() || this.form.message_plaintext().invalid() || this.form.recipient_group().invalid() || is_custom && this.form.recipients().invalid() || !this.recipient_count();
      },
      ...ngDevMode ? [{ debugName: "send_disabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      this.form.recipient_group().value();
      this.form.recipients().value();
      untracked(() => this.updateRecipients());
    });
  }
  recipientsHasError(kind) {
    return this.form.recipients().errors().some((error) => error.kind === kind);
  }
  async sendEmail() {
    this.form().markAsTouched();
    await this.updateRecipients();
    if (this.send_disabled())
      return;
    const mod = this._org.module("smtp", "Mailer");
    if (!mod) {
      return notifyError("Mailing system is not configured for this application");
    }
    const { subject, message_plaintext } = this.model();
    const recipient_list = this.recipients();
    if (!recipient_list.length) {
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
    const recipient_group = this.model().recipient_group;
    if (recipient_group === "custom") {
      this.resolving_recipients.set(false);
      this.recipients.set(this._validEmails(this.model().recipients.map((user) => user.email)));
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
    const recipient_group = this.model().recipient_group;
    if (recipient_group === "custom") {
      return this._validEmails(this.model().recipients.map((user) => user.email));
    }
    const period_start = addMinutes(startOfDay(Date.now()), this._tzOffset() * 60);
    const period_end = addMinutes(endOfDay(Date.now()), this._tzOffset() * 60);
    const query = {
      period_start: getUnixTime(period_start),
      period_end: getUnixTime(period_end),
      limit: 200
    };
    const zone_ids = this._activeZoneIds().join(",");
    const rooms_request = recipient_group === "rooms" || recipient_group === "all" ? queryAllEvents(__spreadProps(__spreadValues({}, query), { zone_ids })).catch(() => []) : Promise.resolve([]);
    const desks_request = recipient_group === "desks" || recipient_group === "all" ? queryAllBookings(__spreadProps(__spreadValues({}, query), {
      zones: zone_ids,
      type: "desk",
      include_checked_out: true
    })).catch(() => []) : Promise.resolve([]);
    const parking_request = recipient_group === "parking" || recipient_group === "all" ? queryAllBookings(__spreadProps(__spreadValues({}, query), {
      zones: zone_ids,
      type: "parking",
      include_checked_out: true
    })).catch(() => []) : Promise.resolve([]);
    const [rooms, desks, parking] = await Promise.all([
      rooms_request,
      desks_request,
      parking_request
    ]);
    return this._validEmails([
      ...rooms.flatMap((event) => {
        const room_emails = new Set([event.system, ...event.resources || []].map((room) => room?.email?.trim().toLowerCase()).filter((email) => !!email));
        return [
          event.host,
          ...(event.attendees || []).filter((user) => !user.resource).map((user) => user.email)
        ].filter((email) => !room_emails.has(email.trim().toLowerCase()));
      }),
      ...desks.flatMap((booking) => [
        booking.user_email,
        booking.booked_by_email
      ]),
      ...parking.flatMap((booking) => [
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
  static {
    this.\u0275fac = function BroadcastEmailModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BroadcastEmailModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BroadcastEmailModalComponent, selectors: [["broadcast-email-modal"]], decls: 34, vars: 17, consts: [["heading", "Broadcast Email", "confirm_text", "Send Email", 3, "confirm", "loading", "confirm_disabled"], [1, "mx-auto", "flex", "max-w-3xl", "flex-col"], ["for", "subject"], ["appearance", "outline"], ["matInput", "", "placeholder", "Email subject", 3, "formField"], ["for", "recipient_group"], [3, "formField"], [3, "value"], [1, "-mt-4", "mb-4", "text-sm", "opacity-60"], [1, "border-base-200", "bg-base-100", "mb-4", "rounded", "border"], [1, "flex", "items-center", "justify-between", "px-4", "py-3", "text-sm"], [1, "opacity-60"], [1, "border-base-200", "max-h-40", "overflow-y-auto", "border-t", "px-4", "py-2", "text-sm"], [1, "border-base-200", "border-t", "px-4", "py-3", "text-sm", "opacity-60"], ["for", "message_plaintext"], ["matInput", "", "rows", "12", "placeholder", "Plaintext email body", 3, "formField"], [3, "formField", "hide_actions"], [1, "text-error", "-mt-4", "mb-4", "text-sm"], [1, "truncate", "py-1"]], template: function BroadcastEmailModalComponent_Template(rf, ctx) {
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
        \u0275\u0275controlCreate();
        \u0275\u0275conditionalCreate(8, BroadcastEmailModalComponent_Conditional_8_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "label", 5);
        \u0275\u0275text(10, " Send to");
        \u0275\u0275elementStart(11, "span");
        \u0275\u0275text(12, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "mat-form-field", 3)(14, "mat-select", 6);
        \u0275\u0275repeaterCreate(15, BroadcastEmailModalComponent_For_16_Template, 2, 2, "mat-option", 7, _forTrack02);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(17, BroadcastEmailModalComponent_Conditional_17_Template, 2, 0, "div", 8);
        \u0275\u0275conditionalCreate(18, BroadcastEmailModalComponent_Conditional_18_Template, 6, 5);
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
        \u0275\u0275controlCreate();
        \u0275\u0275conditionalCreate(33, BroadcastEmailModalComponent_Conditional_33_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("loading", ctx.loading())("confirm_disabled", ctx.send_disabled());
        \u0275\u0275advance(2);
        \u0275\u0275classProp("error", ctx.form.subject().invalid() && ctx.form.subject().touched());
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.subject);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.form.subject().invalid() && ctx.form.subject().touched() ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("error", ctx.form.recipient_group().invalid() && ctx.form.recipient_group().touched());
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.recipient_group);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.recipient_options);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.model().recipient_group !== "custom" ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.model().recipient_group === "custom" ? 18 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.resolving_recipients() ? 23 : 24);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.resolving_recipients() && ctx.recipient_count() ? 25 : !ctx.resolving_recipients() ? 26 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("error", ctx.form.message_plaintext().invalid() && ctx.form.message_plaintext().touched());
        \u0275\u0275advance(5);
        \u0275\u0275property("formField", ctx.form.message_plaintext);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.form.message_plaintext().invalid() && ctx.form.message_plaintext().touched() ? 33 : -1);
      }
    }, dependencies: [
      FormField,
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
            <form class="mx-auto flex max-w-3xl flex-col">
                <label
                    for="subject"
                    [class.error]="
                        form.subject().invalid() && form.subject().touched()
                    "
                >
                    Subject<span>*</span>
                </label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        [formField]="form.subject"
                        placeholder="Email subject"
                    />
                    @if (
                        form.subject().invalid() && form.subject().touched()
                    ) {
                        <mat-error>A subject line is required</mat-error>
                    }
                </mat-form-field>

                <label
                    for="recipient_group"
                    [class.error]="
                        form.recipient_group().invalid() &&
                        form.recipient_group().touched()
                    "
                >
                    Send to<span>*</span>
                </label>
                <mat-form-field appearance="outline">
                    <mat-select [formField]="form.recipient_group">
                        @for (option of recipient_options; track option.id) {
                            <mat-option [value]="option.id">
                                {{ option.name }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
                @if (model().recipient_group !== 'custom') {
                    <div class="-mt-4 mb-4 text-sm opacity-60">
                        Recipients are resolved from today's bookings for the
                        active building or region.
                    </div>
                }

                @if (model().recipient_group === 'custom') {
                    <label
                        [class.error]="
                            form.recipients().invalid() &&
                            form.recipients().touched()
                        "
                    >
                        Recipients<span>*</span>
                    </label>
                    <a-user-list-field
                        [formField]="form.recipients"
                        [hide_actions]="true"
                    ></a-user-list-field>
                    @if (
                        form.recipients().invalid() &&
                        form.recipients().touched()
                    ) {
                        <div class="text-error -mt-4 mb-4 text-sm">
                            @if (recipientsHasError('required')) {
                                At least one recipient is required
                            } @else if (recipientsHasError('invalidEmails')) {
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
                        form.message_plaintext().invalid() &&
                        form.message_plaintext().touched()
                    "
                >
                    Plaintext body<span>*</span>
                </label>
                <mat-form-field appearance="outline">
                    <textarea
                        matInput
                        rows="12"
                        [formField]="form.message_plaintext"
                        placeholder="Plaintext email body"
                    ></textarea>
                    @if (
                        form.message_plaintext().invalid() &&
                        form.message_plaintext().touched()
                    ) {
                        <mat-error>A plaintext body is required</mat-error>
                    }
                </mat-form-field>
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      FormField,
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BroadcastEmailModalComponent, { className: "BroadcastEmailModalComponent", filePath: "apps/concierge/src/app/email-templates/broadcast-email-modal.component.ts", lineNumber: 181 });
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
    const data_r4 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, data_r4)?.display_name, " ");
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
function EmailTemplatesListComponent_ng_template_25_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r5 = \u0275\u0275nextContext().data;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.triggerDescription(data_r5), " ");
  }
}
function EmailTemplatesListComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, EmailTemplatesListComponent_ng_template_25_Conditional_2_Template, 3, 3, "span", 19);
    \u0275\u0275conditionalCreate(3, EmailTemplatesListComponent_ng_template_25_Conditional_3_Template, 2, 1, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r5 = ctx.data;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.triggerName(data_r5), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!data_r5 ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.triggerDescription(data_r5) ? 3 : -1);
  }
}
function EmailTemplatesListComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22)(1, "icon");
    \u0275\u0275text(2, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "mat-menu", null, 4)(5, "button", 23);
    \u0275\u0275listener("click", function EmailTemplatesListComponent_ng_template_27_Template_button_click_5_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sendTestEmail(row_r7));
    });
    \u0275\u0275elementStart(6, "div", 24)(7, "icon", 12);
    \u0275\u0275text(8, "send");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "a", 25)(13, "div", 24)(14, "icon", 12);
    \u0275\u0275text(15, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "button", 23);
    \u0275\u0275listener("click", function EmailTemplatesListComponent_ng_template_27_Template_button_click_19_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeTemplate(row_r7));
    });
    \u0275\u0275elementStart(20, "div", 24)(21, "icon", 26);
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
    this.filters = this._state.filters;
    this.templates = this._state.filtered_templates;
    this._triggers = computed(
      () => {
        const map = {};
        for (const def of this._state.template_definitions()) {
          map[def.id] = def;
        }
        return map;
      },
      ...ngDevMode ? [{ debugName: "_triggers" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.triggerName = (id) => {
      const def = this._triggers()[id];
      return def ? def.name || def.module_name : id;
    };
    this.triggerDescription = (id) => this._triggers()[id]?.description || "";
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailTemplatesListComponent, selectors: [["email-templates-list"]], decls: 29, vars: 45, consts: [["date_template", ""], ["bld_template", ""], ["trigger_template", ""], ["actions_template", ""], ["menu", "matMenu"], [1, "absolute", "inset-0", "flex", "flex-col"], [1, "flex", "items-center", "justify-between", "space-x-2", "p-8"], [1, "text-2xl", "font-medium"], [1, "flex-1"], ["btn", "", "matRipple", ""], ["btn", "", "matRipple", "", 3, "routerLink"], [1, "ml-2"], [1, "text-2xl"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-y-auto", "px-8"], [1, "min-h-full", "w-full", "overflow-x-auto"], ["empty_message", "No group events for selected period", 1, "block", "w-full", "min-w-4xl", "text-sm", 3, "data", "columns", "sortable"], ["btn", "", "matRipple", "", 3, "click"], [1, "p-4", "opacity-60"], [1, "p-4"], [1, "opacity-30"], [1, "px-4", "py-2", "text-sm", "leading-tight"], [1, "text-xs", "opacity-30"], ["icon", "", "default", "", "matRipple", "", 1, "mx-auto", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], ["mat-menu-item", "", 3, "routerLink"], [1, "text-error", "text-2xl"]], template: function EmailTemplatesListComponent_Template(rf, ctx) {
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
        \u0275\u0275template(21, EmailTemplatesListComponent_ng_template_21_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(23, EmailTemplatesListComponent_ng_template_23_Template, 5, 6, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(25, EmailTemplatesListComponent_ng_template_25_Template, 4, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(27, EmailTemplatesListComponent_ng_template_27_Template, 26, 13, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
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
        \u0275\u0275property("data", ctx.templates())("columns", \u0275\u0275pureFunction6(38, _c7, \u0275\u0275pureFunction1(22, _c12, \u0275\u0275pipeBind1(16, 11, "FORM.TITLE")), \u0275\u0275pureFunction2(24, _c2, \u0275\u0275pipeBind1(17, 13, "COMMON.CATEGORY"), !ctx.filters()?.category && false), \u0275\u0275pureFunction2(27, _c3, \u0275\u0275pipeBind1(18, 15, "COMMON.TRIGGER"), trigger_template_r11), \u0275\u0275pureFunction2(30, _c4, \u0275\u0275pipeBind1(19, 17, "RESOURCE.BUILDING"), bld_template_r10), \u0275\u0275pureFunction2(33, _c5, \u0275\u0275pipeBind1(20, 19, "COMMON.CREATED_AT"), date_template_r9), \u0275\u0275pureFunction1(36, _c6, actions_template_r12)))("sortable", true);
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
                    <div class="px-4 py-2 text-sm leading-tight">
                        {{ triggerName(data) }}
                        @if (!data) {
                            <span class="opacity-30">
                                {{ 'COMMON.TRIGGER_EMPTY' | translate }}
                            </span>
                        }
                        @if (triggerDescription(data)) {
                            <div class="text-xs opacity-30">
                                {{ triggerDescription(data) }}
                            </div>
                        }
                    </div>
                </ng-template>
                <ng-template #actions_template let-row="row">
                    <button
                        icon
                        default
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmailTemplatesListComponent, { className: "EmailTemplatesListComponent", filePath: "apps/concierge/src/app/email-templates/email-templates-list.component.ts", lineNumber: 198 });
})();

// apps/concierge/src/app/email-templates/email-templates.component.ts
var EmailTemplatesComponent = class _EmailTemplatesComponent extends AsyncHandler {
  constructor() {
    super();
    this._router = inject(Router);
    this._url = signal(
      null,
      ...ngDevMode ? [{ debugName: "_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.path = computed(
      () => {
        this._url();
        const parts = this._router.url.split("/");
        return parts[parts.length - 1].split("?")[0];
      },
      ...ngDevMode ? [{ debugName: "path" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.subscription("router", this._router.events.subscribe((event) => this._url.set(event)));
  }
  static {
    this.\u0275fac = function EmailTemplatesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmailTemplatesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailTemplatesComponent, selectors: [["", "app-email-templates", ""]], features: [\u0275\u0275InheritDefinitionFeature], decls: 5, vars: 0, consts: [[1, "flex", "h-px", "flex-1"], [1, "relative", "flex", "h-full", "w-1/2", "flex-1", "flex-col"]], template: function EmailTemplatesComponent_Template(rf, ctx) {
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
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmailTemplatesComponent, { className: "EmailTemplatesComponent", filePath: "apps/concierge/src/app/email-templates/email-templates.component.ts", lineNumber: 35 });
})();

// apps/concierge/src/app/email-templates/email-templates.routes.ts
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
export {
  ROUTES
};
//# sourceMappingURL=email-templates.routes-QGFVLUKL.js.map
