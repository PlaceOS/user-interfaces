import "./chunk-OCNVS36S.js";
import {
  SharedBookingsModule
} from "./chunk-YJIFACNB.js";
import "./chunk-4Q6FM26T.js";
import {
  ActivatedRoute,
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  BuildingPipe,
  Clipboard,
  CommonModule,
  DatePipe,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormFieldsModule,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  IconComponent,
  MatError,
  MatFormField,
  MatInput,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatOption,
  MatPrefix,
  MatProgressSpinner,
  MatRipple,
  MatSelect,
  MatTooltip,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModel,
  OrganisationService,
  RichTextInputComponent,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  SettingsService,
  SharedSpacesModule,
  SimpleTableComponent,
  UIModule,
  Validators,
  __async,
  __spreadProps,
  __spreadValues,
  catchError,
  combineLatest,
  currentUser,
  extractTextFromHTML,
  filter,
  forkJoin,
  getModule,
  getUnixTime,
  map,
  notifyError,
  notifySuccess,
  of,
  randomString,
  shareReplay,
  showMetadata,
  switchMap,
  take,
  tap,
  unique,
  updateMetadata,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction6,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-LCTDH2CE.js";

// apps/concierge/src/app/email-templates/email-templates.component.ts
var _c0 = ["app-email-templates", ""];
var _EmailTemplatesComponent = class _EmailTemplatesComponent {
};
_EmailTemplatesComponent.\u0275fac = function EmailTemplatesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EmailTemplatesComponent)();
};
_EmailTemplatesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailTemplatesComponent, selectors: [["", "app-email-templates", ""]], attrs: _c0, decls: 5, vars: 0, consts: [[1, "flex", "flex-1", "h-px"], [1, "relative", "flex", "flex-col", "flex-1", "w-1/2", "h-full"]], template: function EmailTemplatesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 1);
    \u0275\u0275element(4, "router-outlet");
    \u0275\u0275elementEnd()();
  }
}, dependencies: [ApplicationTopbarComponent, ApplicationSidebarComponent, RouterOutlet], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\n/*# sourceMappingURL=email-templates.component.css.map */"] });
var EmailTemplatesComponent = _EmailTemplatesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmailTemplatesComponent, { className: "EmailTemplatesComponent", filePath: "apps/concierge/src/app/email-templates/email-templates.component.ts", lineNumber: 26 });
})();

// apps/concierge/src/app/email-templates/email-templates-state.service.ts
var _EmailTemplatesStateService = class _EmailTemplatesStateService {
  _processTemplates(metadata, zone_id) {
    const data = metadata.details;
    return ((data instanceof Array ? data : "") || []).map((template) => __spreadProps(__spreadValues({}, template), { zone_id }));
  }
  constructor(_org, _settings) {
    this._org = _org;
    this._settings = _settings;
    this._filters = new BehaviorSubject({});
    this._change = new BehaviorSubject(0);
    this.template_definitions = combineLatest([
      this._org.active_building,
      this._org.active_region,
      this._change
    ]).pipe(filter(([bld]) => !!bld), switchMap(() => showMetadata(this._org.organisation.id, "email_template_fields").pipe(map((_) => {
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
      showMetadata(this._org.organisation.id, "email_templates").pipe(map((_) => this._processTemplates(_, this._org.organisation.id)), catchError(() => of([]))),
      showMetadata(bld.id, "email_templates").pipe(map((_) => this._processTemplates(_, bld.id)), catchError(() => of([]))),
      region ? showMetadata(region.id, "email_templates").pipe(map((_) => this._processTemplates(_, region.id)), catchError(() => of([]))) : of([])
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
  loadTemplate(id) {
    return __async(this, null, function* () {
      const template_list = yield this.templates.pipe(take(1)).toPromise();
      return template_list.find((_) => _.id === id);
    });
  }
  saveTemplate(template) {
    return __async(this, null, function* () {
      if (!template.zone_id)
        return;
      const template_list = yield this.templates.pipe(take(1)).toPromise();
      if (!template.id) {
        template.id = `template-${randomString(8)}`;
        template.created_at = getUnixTime(Date.now());
      }
      template.updated_at = getUnixTime(Date.now());
      const zone_templates = template_list.filter((_) => _.zone_id === template.zone_id);
      const template_value = __spreadValues({}, template);
      delete template_value.zone_id;
      console.log("Templates:", template_list);
      const new_template_list = [
        ...zone_templates.filter((_) => _.id !== template.id),
        template
      ];
      yield updateMetadata(template.zone_id, {
        name: `email_templates`,
        details: new_template_list,
        description: "Email Templates for Zone"
      }).toPromise();
      notifySuccess("Successfully saved template");
    });
  }
  removeTemplate(template) {
    return __async(this, null, function* () {
      const template_list = yield this.templates.pipe(take(1)).toPromise();
      const zone_templates = template_list.filter((_) => _.zone_id === template.zone_id);
      const new_template_list = zone_templates.filter((_) => _.id !== template.id);
      yield updateMetadata(template.zone_id, {
        name: `email_templates`,
        details: new_template_list,
        description: "Email Templates for Zone"
      }).toPromise();
      notifySuccess("Successfully removed template");
    });
  }
  setFilters(filters) {
    this._filters.next(__spreadValues(__spreadValues({}, this._filters.getValue()), filters));
  }
};
_EmailTemplatesStateService.\u0275fac = function EmailTemplatesStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EmailTemplatesStateService)(\u0275\u0275inject(OrganisationService), \u0275\u0275inject(SettingsService));
};
_EmailTemplatesStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EmailTemplatesStateService, factory: _EmailTemplatesStateService.\u0275fac, providedIn: "root" });
var EmailTemplatesStateService = _EmailTemplatesStateService;

// apps/concierge/src/app/email-templates/email-templates-list.component.ts
var _c02 = () => ["/email-templates", "manage"];
var _c1 = () => ({ key: "subject", name: "Title" });
var _c2 = (a0) => ({ key: "category", name: "Category", show: a0 });
var _c3 = () => ({ key: "trigger", name: "Trigger", empty: "No Trigger" });
var _c4 = (a0) => ({ key: "zone_id", name: "Building", content: a0 });
var _c5 = (a0) => ({ key: "created_at", name: "Created", size: "8rem", content: a0 });
var _c6 = (a0) => ({ key: "actions", name: " ", size: "3.5rem", content: a0, sortable: false });
var _c7 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
var _c8 = (a0) => ["/email-templates", "manage", a0];
function EmailTemplatesListComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, data_r2 * 1e3, "mediumDate"), " ");
  }
}
function EmailTemplatesListComponent_ng_template_25_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, " No Building ");
    \u0275\u0275elementEnd();
  }
}
function EmailTemplatesListComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275template(3, EmailTemplatesListComponent_ng_template_25_span_3_Template, 2, 0, "span", 21);
    \u0275\u0275pipe(4, "building");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const data_r3 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_5_0 = \u0275\u0275pipeBind1(2, 2, data_r3)) == null ? null : tmp_5_0.display_name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(4, 4, data_r3));
  }
}
function EmailTemplatesListComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23)(1, "app-icon");
    \u0275\u0275text(2, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "mat-menu", null, 3)(5, "button", 24);
    \u0275\u0275listener("click", function EmailTemplatesListComponent_ng_template_27_Template_button_click_5_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).row;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.sendTestEmail(row_r5));
    });
    \u0275\u0275elementStart(6, "div", 25)(7, "app-icon", 15);
    \u0275\u0275text(8, "send");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div");
    \u0275\u0275text(10, "Send Test Email");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "a", 26)(12, "div", 25)(13, "app-icon", 15);
    \u0275\u0275text(14, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div");
    \u0275\u0275text(16, "Edit Template");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "button", 24);
    \u0275\u0275listener("click", function EmailTemplatesListComponent_ng_template_27_Template_button_click_17_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).row;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.removeTemplate(row_r5));
    });
    \u0275\u0275elementStart(18, "div", 25)(19, "app-icon", 27);
    \u0275\u0275text(20, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div");
    \u0275\u0275text(22, "Delete Template");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    const menu_r7 = \u0275\u0275reference(4);
    \u0275\u0275property("matMenuTriggerFor", menu_r7);
    \u0275\u0275advance(11);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c8, row_r5.id));
  }
}
var _EmailTemplatesListComponent = class _EmailTemplatesListComponent {
  constructor(_state, _org) {
    this._state = _state;
    this._org = _org;
    this.filters = this._state.filters;
    this.templates = this._state.filtered_templates;
    this.removeTemplate = (t) => this._state.removeTemplate(t);
  }
  setFilters(filters) {
    this._state.setFilters(filters);
  }
  sendTestEmail(template) {
    return __async(this, null, function* () {
      this.sending_email = template.id;
      const stmp_system = this._org.binding("smtp");
      if (!stmp_system) {
        return notifyError("Mailing system not configured for application.");
      }
      const mod = getModule(stmp_system, "Mailer");
      yield mod.execute("send_mail", [
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
      notifySuccess("Successfully sent test email");
      this.sending_email = null;
    });
  }
};
_EmailTemplatesListComponent.\u0275fac = function EmailTemplatesListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EmailTemplatesListComponent)(\u0275\u0275directiveInject(EmailTemplatesStateService), \u0275\u0275directiveInject(OrganisationService));
};
_EmailTemplatesListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailTemplatesListComponent, selectors: [["email-templates-list"]], decls: 29, vars: 27, consts: [["date_template", ""], ["bld_template", ""], ["actions_template", ""], ["menu", "matMenu"], [1, "absolute", "inset-0", "flex", "flex-col"], [1, "flex", "items-center", "justify-between", "p-8", "space-x-2"], [1, "text-2xl", "font-medium"], [1, "flex-1"], ["appearance", "outline", 1, "w-56", "no-subscript"], ["placeholder", "All Categories", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "internal"], ["value", "external"], ["btn", "", "matRipple", "", 3, "routerLink"], [1, "ml-2"], [1, "text-2xl"], [1, "h-1/2", "flex-1", "w-full", "px-8", "overflow-y-auto", "relative"], [1, "w-full", "min-h-full", "overflow-x-auto"], ["empty_message", "No group events for selected period", 1, "min-w-[56rem]", "w-full", "block", "text-sm", 3, "data", "columns", "sortable"], [1, "opacity-60", "p-4"], [1, "p-4"], ["class", "opacity-30", 4, "ngIf"], [1, "opacity-30"], ["icon", "", "matRipple", "", 1, "mx-auto", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], ["mat-menu-item", "", 3, "routerLink"], [1, "text-2xl", "text-error"]], template: function EmailTemplatesListComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "h2", 6);
    \u0275\u0275text(3, "Email Templates");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 7);
    \u0275\u0275elementStart(5, "mat-form-field", 8)(6, "mat-select", 9);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275listener("ngModelChange", function EmailTemplatesListComponent_Template_mat_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setFilters({ category: $event }));
    });
    \u0275\u0275elementStart(8, "mat-option", 10);
    \u0275\u0275text(9, "All Categories");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-option", 11);
    \u0275\u0275text(11, "Internal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-option", 12);
    \u0275\u0275text(13, "External");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "a", 13)(15, "div", 14);
    \u0275\u0275text(16, "Create Template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "app-icon", 15);
    \u0275\u0275text(18, "add");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 16)(20, "div", 17);
    \u0275\u0275element(21, "simple-table", 18);
    \u0275\u0275pipe(22, "async");
    \u0275\u0275template(23, EmailTemplatesListComponent_ng_template_23_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(25, EmailTemplatesListComponent_ng_template_25_Template, 5, 6, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(27, EmailTemplatesListComponent_ng_template_27_Template, 23, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_6_0;
    const date_template_r8 = \u0275\u0275reference(24);
    const bld_template_r9 = \u0275\u0275reference(26);
    const actions_template_r10 = \u0275\u0275reference(28);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", (tmp_3_0 = \u0275\u0275pipeBind1(7, 5, ctx.filters)) == null ? null : tmp_3_0.category);
    \u0275\u0275advance(8);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(9, _c02));
    \u0275\u0275advance(7);
    \u0275\u0275property("data", ctx.templates)("columns", \u0275\u0275pureFunction6(20, _c7, \u0275\u0275pureFunction0(10, _c1), \u0275\u0275pureFunction1(11, _c2, !((tmp_6_0 = \u0275\u0275pipeBind1(22, 7, ctx.filters)) == null ? null : tmp_6_0.category)), \u0275\u0275pureFunction0(13, _c3), \u0275\u0275pureFunction1(14, _c4, bld_template_r9), \u0275\u0275pureFunction1(16, _c5, date_template_r8), \u0275\u0275pureFunction1(18, _c6, actions_template_r10)))("sortable", true);
  }
}, dependencies: [NgIf, NgControlStatus, NgModel, MatFormField, MatSelect, MatOption, MatMenu, MatMenuItem, MatMenuTrigger, MatRipple, IconComponent, SimpleTableComponent, RouterLink, AsyncPipe, DatePipe, BuildingPipe] });
var EmailTemplatesListComponent = _EmailTemplatesListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmailTemplatesListComponent, { className: "EmailTemplatesListComponent", filePath: "apps/concierge/src/app/email-templates/email-templates-list.component.ts", lineNumber: 130 });
})();

// apps/concierge/src/app/email-templates/email-template-manage.component.ts
var _c03 = () => ["/email-templates"];
var _c12 = () => [];
function EmailTemplateManageComponent_mat_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 41);
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
function EmailTemplateManageComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1, " Select a trigger ");
    \u0275\u0275elementEnd();
  }
}
function EmailTemplateManageComponent_ng_container_48_button_3_app_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-icon", 27);
    \u0275\u0275text(1, "done");
    \u0275\u0275elementEnd();
  }
}
function EmailTemplateManageComponent_ng_container_48_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function EmailTemplateManageComponent_ng_container_48_button_3_Template_button_click_0_listener() {
      const tmpl_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.form.patchValue({ trigger: tmpl_r4.id }));
    });
    \u0275\u0275elementStart(1, "div", 44)(2, "div", 45)(3, "div", 46);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 47);
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "span", 48);
    \u0275\u0275text(8, ":");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, EmailTemplateManageComponent_ng_container_48_button_3_app_icon_9_Template, 2, 0, "app-icon", 49);
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
    \u0275\u0275property("ngIf", ctx_r4.form.value.trigger === tmpl_r4.id);
  }
}
function EmailTemplateManageComponent_ng_container_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "label", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, EmailTemplateManageComponent_ng_container_48_button_3_Template, 10, 3, "button", 32);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const group_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(group_r6.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", group_r6.items);
  }
}
function EmailTemplateManageComponent_button_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function EmailTemplateManageComponent_button_54_Template_button_click_0_listener() {
      const field_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.copyField(field_r8.name));
    });
    \u0275\u0275elementStart(1, "div", 50)(2, "div", 51);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 46);
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
function EmailTemplateManageComponent_button_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275text(1, " No placeholders available ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
  }
}
function EmailTemplateManageComponent_ng_template_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 54);
    \u0275\u0275element(2, "mat-spinner", 55);
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
  constructor(_org, _state, _route, _router, _clipboard) {
    super();
    this._org = _org;
    this._state = _state;
    this._route = _route;
    this._router = _router;
    this._clipboard = _clipboard;
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
    this.subscription("route.params", this._route.paramMap.subscribe((params) => __async(this, null, function* () {
      if (params.has("id")) {
        this.loading = "Loading email template...";
        this.template = yield this._state.loadTemplate(params.get("id"));
        this.loading = "";
        console.log("Template:", this.template);
        if (!this.template) {
          this._router.navigate(["/email-templates", "manage"]);
        } else {
          this.form.patchValue(this.template);
        }
      }
    })));
    this.subscription("trigger", this.form.valueChanges.subscribe((value) => __async(this, null, function* () {
      if (value.trigger) {
        const trigger_list = yield this._state.template_definitions.pipe(take(1)).toPromise();
        this.active_trigger = trigger_list.find((_) => _.id === value.trigger);
      }
    })));
  }
  copyField(field) {
    this._clipboard.copy(`%{${field}}`);
    notifySuccess(`Copied field "${field}" to clipboard.`);
  }
  save() {
    return __async(this, null, function* () {
      this.loading = "Saving email template...";
      yield this._state.saveTemplate(__spreadProps(__spreadValues(__spreadValues({}, this.template || {}), this.form.getRawValue()), {
        text: extractTextFromHTML(this.form.getRawValue().html || "")
      }));
      this.loading = "";
      notifySuccess("Successfully saved email template");
      this._router.navigate(["/email-templates"]);
    });
  }
};
_EmailTemplateManageComponent.\u0275fac = function EmailTemplateManageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EmailTemplateManageComponent)(\u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(EmailTemplatesStateService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Clipboard));
};
_EmailTemplateManageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmailTemplateManageComponent, selectors: [["email-template-manage"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 74, vars: 20, consts: [["trigger_menu", "matMenu"], ["tracking_menu", "matMenu"], ["load_state", ""], [1, "absolute", "inset-0", "bg-base-100", "overflow-auto", "p-8"], [1, "max-w-full", "w-[48rem]", "mx-auto", "min-h-full", 3, "formGroup"], [1, "flex", "items-center", "space-x-2", "mb-8"], ["icon", "", "matRipple", "", 1, "-ml-8", 3, "routerLink"], [1, "text-2xl", "font-medium"], [1, "flex-1"], ["btn", "", "matRipple", "", "type", "button", 1, "w-48", 3, "click"], [1, "flex", "items-center", "space-x-4"], [1, "flex-1", "space-y-2", "w-1/4"], ["for", "zone"], ["appearance", "outline", 1, "w-full"], ["name", "zone", "placeholder", "Select Building", "formControlName", "zone_id"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "category"], ["name", "category", "placeholder", "Select Category", "formControlName", "category"], ["value", "internal"], ["value", "external"], [1, "flex-1", "space-y-2", "w-1/4", "pb-6"], ["for", "trigger"], ["duration-field", "", "matRipple", "", 1, "flex", "items-center", "justify-between", "border", "border-neutral", "rounded", "h-12", "w-full", "px-2", 3, "click", "matMenuTriggerFor"], [1, "flex", "flex-col", "leading-tight", "px-2", "text-left", "flex-1", "w-1/2"], [1, "truncate"], ["class", "opacity-30 truncate", 4, "ngIf"], [1, "text-2xl"], [1, "max-h-[24rem]"], ["mat-menu-item", "", 3, "click"], [4, "ngFor", "ngForOf"], ["btn", "", "matRipple", "", "matTooltip", "Values that get replaced in the email template when sent", 1, "flex-1", "mt-2", 3, "disabled", "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "disabled", 4, "ngIf"], [1, "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "flex-1"], ["matInput", "", "placeholder", "Reply to address", "formControlName", "reply_to"], ["matInput", "", "placeholder", "From address", "formControlName", "from"], ["matPrefix", "", 1, "text-2xl", "relative", "-left-1"], ["matInput", "", "placeholder", "Template Subject", "formControlName", "subject"], ["formControlName", "html", "placeholder", "Body of the email template", 1, "min-h-[calc(100vh-28rem)]", "block", 3, "images_allowed"], [3, "value"], [1, "opacity-30", "truncate"], [1, "p-4"], [1, "flex", "items-center", "space-x-2", "pl-2"], [1, "flex", "flex-col-reverse", "leading-tight", "my-2", "flex-1"], [1, "text-xs", "opacity-30"], [1, "text-sm"], [1, "opacity-0"], ["class", "text-2xl", 4, "ngIf"], [1, "flex", "flex-col", "leading-tight"], [1, "font-mono", "text-sm"], ["mat-menu-item", "", 3, "disabled"], [1, "absolute", "inset-0", "bg-base-100"], [1, "h-full", "w-full", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [3, "diameter"]], template: function EmailTemplateManageComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "form", 4)(2, "div", 5)(3, "a", 6)(4, "app-icon");
    \u0275\u0275text(5, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h2", 7);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "div", 8);
    \u0275\u0275elementStart(9, "button", 9);
    \u0275\u0275listener("click", function EmailTemplateManageComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.save());
    });
    \u0275\u0275text(10, " Save Template ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 10)(12, "div", 11)(13, "label", 12);
    \u0275\u0275text(14, "Building");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-form-field", 13)(16, "mat-select", 14)(17, "mat-option", 15);
    \u0275\u0275text(18, " No Building ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, EmailTemplateManageComponent_mat_option_19_Template, 2, 2, "mat-option", 16);
    \u0275\u0275pipe(20, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-error");
    \u0275\u0275text(22, "A building is required");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 11)(24, "label", 17);
    \u0275\u0275text(25, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "mat-form-field", 13)(27, "mat-select", 18)(28, "mat-option", 19);
    \u0275\u0275text(29, " Internal ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "mat-option", 20);
    \u0275\u0275text(31, " External ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "mat-error");
    \u0275\u0275text(33, "A category is required");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 21)(35, "label", 22);
    \u0275\u0275text(36, "Trigger");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 23);
    \u0275\u0275listener("click", function EmailTemplateManageComponent_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.form.controls.trigger.markAsTouched());
    });
    \u0275\u0275elementStart(38, "div", 24)(39, "div", 25);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275template(41, EmailTemplateManageComponent_div_41_Template, 2, 0, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "app-icon", 27);
    \u0275\u0275text(43, " arrow_drop_down ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "mat-menu", 28, 0)(46, "button", 29);
    \u0275\u0275listener("click", function EmailTemplateManageComponent_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.form.patchValue({ trigger: "" }));
    });
    \u0275\u0275text(47, " None ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(48, EmailTemplateManageComponent_ng_container_48_Template, 4, 2, "ng-container", 30);
    \u0275\u0275pipe(49, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "button", 31);
    \u0275\u0275text(51, " Placeholders ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "mat-menu", 28, 1);
    \u0275\u0275template(54, EmailTemplateManageComponent_button_54_Template, 6, 2, "button", 32)(55, EmailTemplateManageComponent_button_55_Template, 2, 1, "button", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 34)(57, "mat-form-field", 35);
    \u0275\u0275element(58, "input", 36);
    \u0275\u0275elementStart(59, "mat-error");
    \u0275\u0275text(60, "A reply address is required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "mat-form-field", 35);
    \u0275\u0275element(62, "input", 37);
    \u0275\u0275elementStart(63, "mat-error");
    \u0275\u0275text(64, "A from address is required");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "mat-form-field", 13)(66, "app-icon", 38);
    \u0275\u0275text(67, " description ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(68, "input", 39);
    \u0275\u0275elementStart(69, "mat-error");
    \u0275\u0275text(70, "A title for the template is required");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(71, "rich-text-input", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(72, EmailTemplateManageComponent_ng_template_72_Template, 5, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const trigger_menu_r9 = \u0275\u0275reference(45);
    const tracking_menu_r10 = \u0275\u0275reference(53);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(17, _c03));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (ctx.template == null ? null : ctx.template.id) ? "Edit" : "New", " Email Template ");
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(20, 13, ctx.buildings));
    \u0275\u0275advance(18);
    \u0275\u0275property("matMenuTriggerFor", trigger_menu_r9);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (ctx.active_trigger == null ? null : ctx.active_trigger.name) || (ctx.active_trigger == null ? null : ctx.active_trigger.module_name), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.active_trigger);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(49, 15, ctx.definitions));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx.form.value.trigger)("matMenuTriggerFor", tracking_menu_r10);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", (ctx.active_trigger == null ? null : ctx.active_trigger.fields) || \u0275\u0275pureFunction0(18, _c12));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !((ctx.active_trigger == null ? null : ctx.active_trigger.fields) || \u0275\u0275pureFunction0(19, _c12)).length);
    \u0275\u0275advance(16);
    \u0275\u0275property("images_allowed", true);
  }
}, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MatFormField, MatError, MatPrefix, MatInput, MatSelect, MatOption, MatMenu, MatMenuItem, MatMenuTrigger, MatTooltip, MatProgressSpinner, MatRipple, FormGroupDirective, FormControlName, RichTextInputComponent, IconComponent, RouterLink, AsyncPipe] });
var EmailTemplateManageComponent = _EmailTemplateManageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmailTemplateManageComponent, { className: "EmailTemplateManageComponent", filePath: "apps/concierge/src/app/email-templates/email-template-manage.component.ts", lineNumber: 246 });
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
  CommonModule,
  FormsModule,
  UIModule,
  SharedSpacesModule,
  SharedBookingsModule,
  FormFieldsModule,
  RouterModule.forChild(ROUTES)
] });
var EmailTemplatesModule = _EmailTemplatesModule;
export {
  EmailTemplatesModule
};
//# sourceMappingURL=email-templates.module-UX4EFNCU.js.map
