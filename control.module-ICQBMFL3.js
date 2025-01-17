import {
  AsyncHandler,
  CommonModule,
  DefaultValueAccessor,
  FooterMenuComponent,
  FormsModule,
  IconComponent,
  MatFormField,
  MatInput,
  MatPrefix,
  MatProgressSpinner,
  MatRipple,
  MatSuffix,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  OrganisationService,
  RouterLink,
  RouterModule,
  SafePipe,
  SettingsService,
  SharedComponentModule,
  SpacesService,
  TopbarComponent,
  first,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IM5PHJ7W.js";
import {
  __async
} from "./chunk-4MWRP73S.js";

// apps/workplace/src/app/control/list-item.component.ts
var _c0 = () => ["/explore"];
var _c1 = (a0) => ({ space: a0 });
function ControlSpaceListItemComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "div", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6)(8, "app-icon");
    \u0275\u0275text(9, "account_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 7)(12, "a", 8);
    \u0275\u0275pipe(13, "safe");
    \u0275\u0275text(14, " Control ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a", 9);
    \u0275\u0275text(16, " Find ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("with-image", ctx_r0.show_image);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.space.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.location);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.space.capacity || "0", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(13, 8, ctx_r0.space.support_url, "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(11, _c0))("queryParams", \u0275\u0275pureFunction1(12, _c1, ctx_r0.space.id));
  }
}
var _ControlSpaceListItemComponent = class _ControlSpaceListItemComponent {
  get show_image() {
    return this._settings.get("app.spaces.show_images");
  }
  /** Display location of the space */
  get location() {
    if (!this.space) {
      return "Unable to determine location";
    }
    const level = this.space.level;
    const bld = this._org.buildings.find((building) => building.id === level.parent_id);
    return `${bld ? (bld.display_name || bld.name) + ", " : ""}${level?.display_name || level?.name || "<No Level>"}`;
  }
  constructor(_settings, _org) {
    this._settings = _settings;
    this._org = _org;
  }
};
_ControlSpaceListItemComponent.\u0275fac = function ControlSpaceListItemComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ControlSpaceListItemComponent)(\u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(OrganisationService));
};
_ControlSpaceListItemComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ControlSpaceListItemComponent, selectors: [["a-control-space-list-item"]], inputs: { space: "space" }, decls: 1, vars: 1, consts: [["class", "flex flex-wrap items-center sm:space-x-4 bg-base-100 hover:bg-base-200 overflow-hidden p-2 pl-4 mb-2", 3, "with-image", 4, "ngIf"], [1, "flex", "flex-wrap", "items-center", "sm:space-x-4", "bg-base-100", "hover:bg-base-200", "overflow-hidden", "p-2", "pl-4", "mb-2"], [1, "flex", "flex-col", "flex-1"], [1, "text-xl"], [1, "flex", "items-center", "w-full", "text-sm"], [1, "flex-1"], [1, "flex", "items-center", "text-lg"], [1, "flex", "w-full", "sm:w-auto", "sm:flex-col", "items-center", "space-x-2", "sm:space-x-0", "sm:space-y-2", "mt-4", "sm:mt-0"], ["btn", "", "matRipple", "", "control", "", 1, "w-32", "flex-1", "sm:flex-none", 3, "href"], ["btn", "", "matRipple", "", "locate", "", 1, "w-32", "flex-1", "sm:flex-none", "inverse", 3, "routerLink", "queryParams"]], template: function ControlSpaceListItemComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ControlSpaceListItemComponent_div_0_Template, 17, 14, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.space);
  }
}, dependencies: [NgIf, RouterLink, IconComponent, MatRipple, SafePipe] });
var ControlSpaceListItemComponent = _ControlSpaceListItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ControlSpaceListItemComponent, { className: "ControlSpaceListItemComponent", filePath: "apps/workplace/src/app/control/list-item.component.ts", lineNumber: 52 });
})();

// apps/workplace/src/app/control/space-list.component.ts
function ControlSpaceListComponent_mat_spinner_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 7);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 32);
  }
}
function ControlSpaceListComponent_div_6_a_control_space_list_item_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "a-control-space-list-item", 10);
  }
  if (rf & 2) {
    const space_r2 = ctx.$implicit;
    \u0275\u0275property("space", space_r2);
  }
}
function ControlSpaceListComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275template(1, ControlSpaceListComponent_div_6_a_control_space_list_item_1_Template, 1, 1, "a-control-space-list-item", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.filtered_list);
  }
}
function ControlSpaceListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "app-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.search_str ? ' No matches for "' + ctx_r2.search_str + '"' : "No controllable spaces", " ");
  }
}
var _ControlSpaceListComponent = class _ControlSpaceListComponent extends AsyncHandler {
  constructor(_spaces, _org) {
    super();
    this._spaces = _spaces;
    this._org = _org;
    this.space_list = [];
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this._spaces.initialised.pipe(first((_) => _)).toPromise();
      this.space_list = this._spaces.filter((space) => !!space.support_url);
      this.space_list.sort((a, b) => this.sortSpaces(a, b));
    });
  }
  /** List of spaces filtered using the search string */
  get filtered_list() {
    const search = (this.search_str || "").toLowerCase();
    return (this.space_list || []).filter((space) => {
      const bld = this._org.buildings.find((building) => building.id === space.level.parent_id);
      const space_name = (space.name || "").toLowerCase();
      const level_name = ((space.level ? space.level.name : "") || "").toLowerCase();
      const bld_name = ((bld ? bld.name : "") || "").toLowerCase();
      return space_name.indexOf(search) >= 0 || level_name && level_name.indexOf(search) >= 0 || bld_name && bld_name.indexOf(search) >= 0;
    });
  }
  sortSpaces(first2, second) {
    const bld_a = this._org.buildings.find((building) => building.id === first2.level?.parent_id);
    const space_a_name = (first2.name || "").toLowerCase();
    const level_a_name = ((first2.level ? first2.level.name : "") || "").toLowerCase();
    const bld_a_name = (bld_a?.name || "").toLowerCase();
    const bld_b = this._org.buildings.find((building) => building.id === second.level?.parent_id);
    const space_b_name = (second.name || "").toLowerCase();
    const level_b_name = ((second.level ? second.level.name : "") || "").toLowerCase();
    const bld_b_name = (bld_b?.name || "").toLowerCase();
    return bld_a_name.localeCompare(bld_b_name) || level_a_name.localeCompare(level_b_name) || space_a_name.localeCompare(space_b_name);
  }
};
_ControlSpaceListComponent.\u0275fac = function ControlSpaceListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ControlSpaceListComponent)(\u0275\u0275directiveInject(SpacesService), \u0275\u0275directiveInject(OrganisationService));
};
_ControlSpaceListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ControlSpaceListComponent, selectors: [["a-control-space-list"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 4, consts: [["empty_state", ""], [1, "w-full", "flex", "items-center", "justify-center", "p-2"], ["overlay", "", "appearance", "outline", 1, "rounded", "h-12"], ["matPrefix", "", 1, "text-xl"], ["matInput", "", "placeholder", "Search...", 3, "ngModelChange", "ngModel"], ["matSuffix", "", "class", "top-2", 3, "diameter", 4, "ngIf"], ["class", "flex flex-col flex-1 overflow-auto w-full", 4, "ngIf", "ngIfElse"], ["matSuffix", "", 1, "top-2", 3, "diameter"], [1, "flex", "flex-col", "flex-1", "overflow-auto", "w-full"], [3, "space", 4, "ngFor", "ngForOf"], [3, "space"], [1, "flex", "flex-col", "items-center", "p-8"]], template: function ControlSpaceListComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "mat-form-field", 2)(2, "app-icon", 3);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 4);
    \u0275\u0275twoWayListener("ngModelChange", function ControlSpaceListComponent_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.search_str, $event) || (ctx.search_str = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ControlSpaceListComponent_mat_spinner_5_Template, 1, 1, "mat-spinner", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ControlSpaceListComponent_div_6_Template, 2, 1, "div", 6)(7, ControlSpaceListComponent_ng_template_7_Template, 5, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const empty_state_r4 = \u0275\u0275reference(8);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.search_str);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.filtered_list.length)("ngIfElse", empty_state_r4);
  }
}, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel, IconComponent, MatFormField, MatPrefix, MatSuffix, MatInput, MatProgressSpinner, ControlSpaceListItemComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 48rem;\n  max-width: calc(100% - 2rem);\n}\n/*# sourceMappingURL=space-list.component.css.map */"] });
var ControlSpaceListComponent = _ControlSpaceListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ControlSpaceListComponent, { className: "ControlSpaceListComponent", filePath: "apps/workplace/src/app/control/space-list.component.ts", lineNumber: 65 });
})();

// apps/workplace/src/app/control/control.component.ts
var _c02 = ["app-control", ""];
var _ControlComponent = class _ControlComponent {
  constructor(_settings) {
    this._settings = _settings;
  }
  ngOnInit() {
    this._settings.title = "Control";
  }
};
_ControlComponent.\u0275fac = function ControlComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ControlComponent)(\u0275\u0275directiveInject(SettingsService));
};
_ControlComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ControlComponent, selectors: [["", "app-control", ""]], attrs: _c02, decls: 5, vars: 0, consts: [[1, "flex-1", "flex", "sm:flex-row", "flex-col-reverse", "h-1/2"], [1, "relative", "z-0", "flex", "flex-col", "flex-1", "h-1/2", "sm:h-auto", "overflow-hidden"]], template: function ControlComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "topbar");
    \u0275\u0275elementStart(1, "div", 0)(2, "main", 1);
    \u0275\u0275element(3, "a-control-space-list");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(4, "footer-menu");
  }
}, dependencies: [TopbarComponent, FooterMenuComponent, ControlSpaceListComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background: #f0f0f0;\n}\n/*# sourceMappingURL=control.component.css.map */"] });
var ControlComponent = _ControlComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ControlComponent, { className: "ControlComponent", filePath: "apps/workplace/src/app/control/control.component.ts", lineNumber: 29 });
})();

// apps/workplace/src/app/control/control.module.ts
var ROUTES = [{ path: "", component: ControlComponent }];
var _ControlModule = class _ControlModule {
};
_ControlModule.\u0275fac = function ControlModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ControlModule)();
};
_ControlModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ControlModule });
_ControlModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FormsModule,
  RouterModule.forChild(ROUTES),
  SharedComponentModule
] });
var ControlModule = _ControlModule;
export {
  ControlModule
};
//# sourceMappingURL=control.module-ICQBMFL3.js.map
