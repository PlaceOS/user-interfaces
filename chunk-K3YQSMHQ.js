import {
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  BuildingPipe,
  CommonModule,
  Component,
  DatePipe,
  IconComponent,
  Injectable,
  Input,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  OrganisationService,
  RouterLink,
  RouterModule,
  SettingsService,
  SimpleTableComponent,
  TranslatePipe,
  Xu,
  __spreadProps,
  __spreadValues,
  catchError,
  combineLatest,
  currentUser,
  ec,
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
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-Z5DSMDUT.js";

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

// apps/concierge/src/app/email-templates/email-templates-list.component.ts
var _c0 = (a0) => ({ key: "subject", name: a0 });
var _c1 = (a0, a1) => ({ key: "category", name: a0, show: a1 });
var _c2 = (a0, a1) => ({ key: "trigger", name: a0, content: a1 });
var _c3 = (a0, a1) => ({ key: "zone_id", name: a0, content: a1 });
var _c4 = (a0, a1) => ({ key: "created_at", name: a0, size: "8rem", content: a1 });
var _c5 = (a0) => ({ key: "actions", name: " ", size: "3.5rem", content: a0, sortable: false });
var _c6 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
var _c7 = () => ["/email-templates", "manage"];
var _c8 = (a0) => ["/email-templates", "manage", a0];
function EmailTemplatesListComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h2", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 9);
    \u0275\u0275elementStart(5, "a", 10)(6, "div", 11);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "icon", 12);
    \u0275\u0275text(10, "add");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "APP.CONCIERGE.EMAIL_TEMPLATES_HEADER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c7));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 5, "APP.CONCIERGE.EMAIL_TEMPLATES_ADD"), " ");
  }
}
function EmailTemplatesListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
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
function EmailTemplatesListComponent_ng_template_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "RESOURCE.BUILDING_EMPTY"), " ");
  }
}
function EmailTemplatesListComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275conditionalCreate(3, EmailTemplatesListComponent_ng_template_11_Conditional_3_Template, 3, 3, "span", 15);
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
function EmailTemplatesListComponent_ng_template_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.TRIGGER_EMPTY"), " ");
  }
}
function EmailTemplatesListComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, EmailTemplatesListComponent_ng_template_13_Conditional_2_Template, 3, 3, "span", 15);
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
function EmailTemplatesListComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17)(1, "icon");
    \u0275\u0275text(2, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "mat-menu", null, 4)(5, "button", 18);
    \u0275\u0275listener("click", function EmailTemplatesListComponent_ng_template_15_Template_button_click_5_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).row;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.sendTestEmail(row_r5));
    });
    \u0275\u0275elementStart(6, "div", 19)(7, "icon", 12);
    \u0275\u0275text(8, "send");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "a", 20)(13, "div", 19)(14, "icon", 12);
    \u0275\u0275text(15, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "button", 18);
    \u0275\u0275listener("click", function EmailTemplatesListComponent_ng_template_15_Template_button_click_19_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).row;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.removeTemplate(row_r5));
    });
    \u0275\u0275elementStart(20, "div", 19)(21, "icon", 21);
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
    this.hide_header = false;
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
_EmailTemplatesListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailTemplatesListComponent, selectors: [["email-templates-list"]], inputs: { hide_header: "hide_header" }, decls: 17, vars: 39, consts: [["date_template", ""], ["bld_template", ""], ["trigger_template", ""], ["actions_template", ""], ["menu", "matMenu"], [1, "absolute", "inset-0", "overflow-auto", "px-8"], [1, "flex", "items-center", "justify-between", "space-x-2", "p-8"], ["empty_message", "No group events for selected period", 1, "mb-8", "block", "w-full", "min-w-[56rem]", "text-sm", 3, "data", "columns", "sortable"], [1, "text-2xl", "font-medium"], [1, "flex-1"], ["btn", "", "matRipple", "", 3, "routerLink"], [1, "ml-2"], [1, "text-2xl"], [1, "p-4", "opacity-60"], [1, "p-4"], [1, "opacity-30"], [1, "p-4", "font-mono", "text-xs"], ["icon", "", "matRipple", "", 1, "mx-auto", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], ["mat-menu-item", "", 3, "routerLink"], [1, "text-2xl", "text-error"]], template: function EmailTemplatesListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275conditionalCreate(1, EmailTemplatesListComponent_Conditional_1_Template, 11, 8, "div", 6);
    \u0275\u0275element(2, "simple-table", 7);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275template(9, EmailTemplatesListComponent_ng_template_9_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(11, EmailTemplatesListComponent_ng_template_11_Template, 5, 6, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(13, EmailTemplatesListComponent_ng_template_13_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(15, EmailTemplatesListComponent_ng_template_15_Template, 26, 13, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const date_template_r8 = \u0275\u0275reference(10);
    const bld_template_r9 = \u0275\u0275reference(12);
    const trigger_template_r10 = \u0275\u0275reference(14);
    const actions_template_r11 = \u0275\u0275reference(16);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.hide_header ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.templates)("columns", \u0275\u0275pureFunction6(32, _c6, \u0275\u0275pureFunction1(16, _c0, \u0275\u0275pipeBind1(3, 4, "FORM.TITLE")), \u0275\u0275pureFunction2(18, _c1, \u0275\u0275pipeBind1(4, 6, "COMMON.CATEGORY"), !((tmp_6_0 = \u0275\u0275pipeBind1(5, 8, ctx.filters)) == null ? null : tmp_6_0.category) && false), \u0275\u0275pureFunction2(21, _c2, \u0275\u0275pipeBind1(6, 10, "COMMON.TRIGGER"), trigger_template_r10), \u0275\u0275pureFunction2(24, _c3, \u0275\u0275pipeBind1(7, 12, "RESOURCE.BUILDING"), bld_template_r9), \u0275\u0275pureFunction2(27, _c4, \u0275\u0275pipeBind1(8, 14, "COMMON.CREATED_AT"), date_template_r8), \u0275\u0275pureFunction1(30, _c5, actions_template_r11)))("sortable", true);
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
    args: [{ selector: "email-templates-list", template: `
        <div class="absolute inset-0 overflow-auto px-8">
            @if (!hide_header) {
                <div class="flex items-center justify-between space-x-2 p-8">
                    <h2 class="text-2xl font-medium">
                        {{ 'APP.CONCIERGE.EMAIL_TEMPLATES_HEADER' | translate }}
                    </h2>
                    <div class="flex-1"></div>
                    <a
                        btn
                        matRipple
                        [routerLink]="['/email-templates', 'manage']"
                    >
                        <div class="ml-2">
                            {{
                                'APP.CONCIERGE.EMAIL_TEMPLATES_ADD' | translate
                            }}
                        </div>
                        <icon class="text-2xl">add</icon>
                    </a>
                </div>
            }
            <simple-table
                class="mb-8 block w-full min-w-[56rem] text-sm"
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
                        [routerLink]="['/email-templates', 'manage', row.id]"
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
                            <icon class="text-2xl text-error"> delete </icon>
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
    `, imports: [
      CommonModule,
      TranslatePipe,
      IconComponent,
      SimpleTableComponent,
      RouterModule,
      MatMenuModule,
      BuildingPipe
    ] }]
  }], null, { hide_header: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmailTemplatesListComponent, { className: "EmailTemplatesListComponent", filePath: "apps/concierge/src/app/email-templates/email-templates-list.component.ts", lineNumber: 172 });
})();

export {
  EmailTemplatesStateService,
  EmailTemplatesListComponent
};
//# sourceMappingURL=chunk-K3YQSMHQ.js.map
