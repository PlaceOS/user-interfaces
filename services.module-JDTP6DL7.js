import {
  ServicesStateService
} from "./chunk-3M3NLU7R.js";
import {
  MatTabLink,
  MatTabNav,
  MatTabNavPanel,
  MatTabsModule
} from "./chunk-VVCSIYWZ.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent
} from "./chunk-53SDIA57.js";
import {
  ActivatedRoute,
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
  MatHint,
  MatInput,
  MatInputModule,
  MatLabel,
  MatOption,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModule,
  NumberValueAccessor,
  ReactiveFormsModule,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  Validators,
  computed,
  inject,
  notifyError,
  notifySuccess,
  setClassMetadata,
  signal,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-Q7N7E4GW.js";
import "./chunk-KWSTWQNB.js";

// apps/concierge/src/app/services/services.component.ts
var _c0 = () => ["/services", "packages"];
var _c1 = () => ["/services", "spaces"];
var _c2 = () => ["/services", "additional"];
function ServicesComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nav", 3)(1, "a", 5);
    \u0275\u0275text(2, " Event Packages ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 5);
    \u0275\u0275text(4, " Spaces & AV ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 5);
    \u0275\u0275text(6, " Additional Services ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_6_0;
    let tmp_8_0;
    const ctx_r0 = \u0275\u0275nextContext();
    const tabPanel_r2 = \u0275\u0275reference(6);
    \u0275\u0275property("tabPanel", tabPanel_r2);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c0))("active", (tmp_4_0 = ctx_r0.path()) == null ? null : tmp_4_0.includes("packages"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(8, _c1))("active", (tmp_6_0 = ctx_r0.path()) == null ? null : tmp_6_0.includes("spaces"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(9, _c2))("active", (tmp_8_0 = ctx_r0.path()) == null ? null : tmp_8_0.includes("additional"));
  }
}
var _ServicesComponent = class _ServicesComponent {
  constructor() {
    this._router = inject(Router);
    this.path = signal(location.hash);
    this.is_form = computed(() => this.path()?.includes("/form"));
    this._router.events.subscribe(() => {
      this.path.set(location.hash);
    });
  }
};
_ServicesComponent.\u0275fac = function ServicesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ServicesComponent)();
};
_ServicesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServicesComponent, selectors: [["app-services"]], decls: 8, vars: 1, consts: [["tabPanel", ""], [1, "flex", "h-px", "flex-1"], [1, "relative", "flex", "h-full", "w-1/2", "flex-1", "flex-col"], ["mat-tab-nav-bar", "", 3, "tabPanel"], [1, "flex-1", "overflow-auto"], ["mat-tab-link", "", 3, "routerLink", "active"]], template: function ServicesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar");
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 2);
    \u0275\u0275conditionalCreate(4, ServicesComponent_Conditional_4_Template, 7, 10, "nav", 3);
    \u0275\u0275elementStart(5, "mat-tab-nav-panel", 4, 0);
    \u0275\u0275element(7, "router-outlet");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!ctx.is_form() ? 4 : -1);
  }
}, dependencies: [
  RouterModule,
  RouterOutlet,
  RouterLink,
  MatTabsModule,
  MatTabNav,
  MatTabNavPanel,
  MatTabLink,
  ApplicationTopbarComponent,
  ApplicationSidebarComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=services.component.css.map */"] });
var ServicesComponent = _ServicesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServicesComponent, [{
    type: Component,
    args: [{ selector: "app-services", template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="relative flex h-full w-1/2 flex-1 flex-col">
                @if (!is_form()) {
                    <nav mat-tab-nav-bar [tabPanel]="tabPanel">
                        <a
                            mat-tab-link
                            [routerLink]="['/services', 'packages']"
                            [active]="path()?.includes('packages')"
                        >
                            Event Packages
                        </a>
                        <a
                            mat-tab-link
                            [routerLink]="['/services', 'spaces']"
                            [active]="path()?.includes('spaces')"
                        >
                            Spaces & AV
                        </a>
                        <a
                            mat-tab-link
                            [routerLink]="['/services', 'additional']"
                            [active]="path()?.includes('additional')"
                        >
                            Additional Services
                        </a>
                    </nav>
                }
                <mat-tab-nav-panel
                    #tabPanel
                    class="flex-1 overflow-auto"
                >
                    <router-outlet></router-outlet>
                </mat-tab-nav-panel>
            </main>
        </div>
    `, imports: [
      RouterModule,
      MatTabsModule,
      ApplicationTopbarComponent,
      ApplicationSidebarComponent
    ], styles: ["/* angular:styles/component:css;8c4a04aa555db379bf6f094c3ef1278e1f19da8fa9947c76cf85d1411aeb75c3;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/services/services.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=services.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServicesComponent, { className: "ServicesComponent", filePath: "apps/concierge/src/app/services/services.component.ts", lineNumber: 66 });
})();

// apps/concierge/src/app/services/services-packages.component.ts
var _c02 = () => ["/services", "form"];
var _c12 = (a0) => ["/services", "form", a0];
var _forTrack0 = ($index, $item) => $item.id;
function ServicesPackagesComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 21)(2, "div", 22)(3, "h3", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 24);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 25)(8, "a", 26)(9, "icon", 27);
    \u0275\u0275text(10, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 28);
    \u0275\u0275listener("click", function ServicesPackagesComponent_For_22_Template_button_click_11_listener() {
      const pkg_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.remove(pkg_r2.id));
    });
    \u0275\u0275elementStart(12, "icon", 29);
    \u0275\u0275text(13, " delete ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "p", 30);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 31)(17, "span", 32);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 33);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pkg_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", pkg_r2.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", pkg_r2.space, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c12, pkg_r2.id));
    \u0275\u0275attribute("aria-label", "Edit " + pkg_r2.name);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", "Delete " + pkg_r2.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", pkg_r2.description, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", pkg_r2.duration, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.rate_type() === "internal" ? pkg_r2.internal_price : pkg_r2.external_price, " ");
  }
}
function ServicesPackagesComponent_For_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 18)(1, "td", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 36)(6, "div", 37)(7, "a", 38)(8, "icon", 39);
    \u0275\u0275text(9, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 40);
    \u0275\u0275listener("click", function ServicesPackagesComponent_For_39_Template_button_click_10_listener() {
      const option_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.remove(option_r5.id));
    });
    \u0275\u0275elementStart(11, "icon", 41);
    \u0275\u0275text(12, " delete ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", option_r5.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.rate_type() === "internal" ? option_r5.internal_price : option_r5.external_price, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c12, option_r5.id));
    \u0275\u0275attribute("aria-label", "Edit " + option_r5.name);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", "Delete " + option_r5.name);
  }
}
function ServicesPackagesComponent_For_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 18)(1, "td", 34)(2, "div", 42)(3, "icon", 43);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 44);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 35);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 36)(11, "div", 37)(12, "a", 38)(13, "icon", 39);
    \u0275\u0275text(14, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 40);
    \u0275\u0275listener("click", function ServicesPackagesComponent_For_56_Template_button_click_15_listener() {
      const addon_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.remove(addon_r7.id));
    });
    \u0275\u0275elementStart(16, "icon", 41);
    \u0275\u0275text(17, " delete ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const addon_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", addon_r7.icon, " ");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", addon_r7.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", addon_r7.space, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.rate_type() === "internal" ? addon_r7.internal_price : addon_r7.external_price, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c12, addon_r7.id));
    \u0275\u0275attribute("aria-label", "Edit " + addon_r7.name);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", "Delete " + addon_r7.name);
  }
}
var _ServicesPackagesComponent = class _ServicesPackagesComponent {
  constructor() {
    this._state = inject(ServicesStateService);
    this.rate_type = signal("internal");
    this.packages = computed(() => this._state.services().filter((s) => s.category === "package"));
    this.alacarte = computed(() => this._state.services().filter((s) => s.category === "alacarte"));
    this.addons = computed(() => this._state.services().filter((s) => s.category === "addon"));
  }
  remove(id) {
    this._state.removeService(id);
    notifySuccess("Service removed.");
  }
};
_ServicesPackagesComponent.\u0275fac = function ServicesPackagesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ServicesPackagesComponent)();
};
_ServicesPackagesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServicesPackagesComponent, selectors: [["services-packages"]], decls: 65, vars: 6, consts: [[1, "p-6"], [1, "mb-6", "flex", "items-start", "justify-between"], [1, "text-2xl", "font-semibold"], [1, "mt-1", 2, "color", "#424242"], ["matRipple", "", 1, "bg-primary", "text-primary-content", "flex", "items-center", "gap-2", "rounded", "px-4", "py-2", "text-sm", "font-medium", 3, "routerLink"], [1, "mb-4", "flex", "items-center", "gap-2"], [1, "text-sm", "font-medium"], [1, "rounded-full", "px-4", "py-1", "text-sm", "font-medium", "transition-colors", 3, "click"], [1, "mb-3", "text-lg", "font-semibold"], [1, "mb-8", "grid", "grid-cols-1", "gap-4", "md:grid-cols-2", "lg:grid-cols-3"], [1, "border-base-200", "bg-base-100", "group", "rounded-lg", "border", "p-4", "shadow-sm"], [1, "text-sm", "font-normal", 2, "color", "#424242"], [1, "border-base-200", "mb-8", "overflow-hidden", "rounded-lg", "border"], [1, "w-full"], [1, "bg-base-200"], [1, "px-4", "py-3", "text-left", "text-sm"], [1, "px-4", "py-3", "text-right", "text-sm"], [1, "w-20", "px-4", "py-3", "text-right", "text-sm"], [1, "border-base-200", "group", "border-t"], [1, "border-base-200", "overflow-hidden", "rounded-lg", "border"], [1, "bg-info/10", "mt-6", "rounded-lg", "p-4", "text-sm", 2, "color", "#0d47a1"], [1, "mb-3", "flex", "items-start", "justify-between"], [1, "flex-1"], [1, "text-lg", "font-semibold"], [1, "text-sm", 2, "color", "#424242"], [1, "flex", "items-center", "gap-1"], ["matRipple", "", 1, "hover:bg-base-200", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "opacity-0", "transition-opacity", "group-hover:opacity-100", 3, "routerLink"], [1, "text-base"], ["matRipple", "", 1, "hover:bg-error/10", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "opacity-0", "transition-opacity", "group-hover:opacity-100", 3, "click"], [1, "text-base", 2, "color", "#c62828"], [1, "mb-3", "text-sm", 2, "color", "#424242"], [1, "border-base-200", "flex", "items-center", "justify-between", "border-t", "pt-3"], [1, "bg-base-200", "rounded", "px-2", "py-0.5", "text-xs"], [1, "text-lg", "font-bold", 2, "color", "#782144"], [1, "px-4", "py-3", "text-sm"], [1, "px-4", "py-3", "text-right", "text-sm", "font-semibold", 2, "color", "#782144"], [1, "px-4", "py-3", "text-right"], [1, "flex", "items-center", "justify-end", "gap-1", "opacity-0", "transition-opacity", "group-hover:opacity-100"], [1, "hover:bg-base-200", "flex", "h-7", "w-7", "items-center", "justify-center", "rounded-full", 3, "routerLink"], [1, "text-sm"], [1, "hover:bg-error/10", "flex", "h-7", "w-7", "items-center", "justify-center", "rounded-full", 3, "click"], [1, "text-sm", 2, "color", "#c62828"], [1, "flex", "items-center", "gap-2"], [1, "text-base", 2, "color", "#424242"], [1, "px-4", "py-3", "text-sm", 2, "color", "#424242"]], template: function ServicesPackagesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
    \u0275\u0275text(4, " CNSI Event Packages & Services ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 3);
    \u0275\u0275text(6, " Bundled packages include AV equipment, basic technical support, and events staff assistance. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a", 4)(8, "icon");
    \u0275\u0275text(9, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Add Service ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 5)(12, "span", 6);
    \u0275\u0275text(13, "Pricing:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 7);
    \u0275\u0275listener("click", function ServicesPackagesComponent_Template_button_click_14_listener() {
      return ctx.rate_type.set("internal");
    });
    \u0275\u0275text(15, " Internal (UCLA) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 7);
    \u0275\u0275listener("click", function ServicesPackagesComponent_Template_button_click_16_listener() {
      return ctx.rate_type.set("external");
    });
    \u0275\u0275text(17, " External ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "h3", 8);
    \u0275\u0275text(19, "Event Packages");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 9);
    \u0275\u0275repeaterCreate(21, ServicesPackagesComponent_For_22_Template, 21, 10, "div", 10, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "h3", 8);
    \u0275\u0275text(24, " A La Carte Options ");
    \u0275\u0275elementStart(25, "span", 11);
    \u0275\u0275text(26, " (up to 4 hours) ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 12)(28, "table", 13)(29, "thead")(30, "tr", 14)(31, "th", 15);
    \u0275\u0275text(32, " Service ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "th", 16);
    \u0275\u0275text(34, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th", 17);
    \u0275\u0275text(36, " Actions ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "tbody");
    \u0275\u0275repeaterCreate(38, ServicesPackagesComponent_For_39_Template, 13, 7, "tr", 18, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "h3", 8);
    \u0275\u0275text(41, "AV Add-ons");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 19)(43, "table", 13)(44, "thead")(45, "tr", 14)(46, "th", 15);
    \u0275\u0275text(47, " Add-on ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th", 15);
    \u0275\u0275text(49, "Space");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "th", 16);
    \u0275\u0275text(51, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "th", 17);
    \u0275\u0275text(53, " Actions ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "tbody");
    \u0275\u0275repeaterCreate(55, ServicesPackagesComponent_For_56_Template, 18, 9, "tr", 18, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "div", 20);
    \u0275\u0275text(58, " Please submit agenda and additional details to ");
    \u0275\u0275elementStart(59, "strong");
    \u0275\u0275text(60, "events@cnsi.ucla.edu");
    \u0275\u0275elementEnd();
    \u0275\u0275text(61, " with subject line: ");
    \u0275\u0275elementStart(62, "em");
    \u0275\u0275text(63, "event name and date");
    \u0275\u0275elementEnd();
    \u0275\u0275text(64, ". ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c02));
    \u0275\u0275advance(7);
    \u0275\u0275classMap(ctx.rate_type() === "internal" ? "bg-primary text-primary-content" : "bg-base-200 hover:bg-base-300");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx.rate_type() === "external" ? "bg-primary text-primary-content" : "bg-base-200 hover:bg-base-300");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx.packages());
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx.alacarte());
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx.addons());
  }
}, dependencies: [CommonModule, RouterModule, RouterLink, MatRippleModule, MatRipple, IconComponent], encapsulation: 2 });
var ServicesPackagesComponent = _ServicesPackagesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServicesPackagesComponent, [{
    type: Component,
    args: [{
      selector: "services-packages",
      template: `
        <div class="p-6">
            <div class="mb-6 flex items-start justify-between">
                <div>
                    <h2 class="text-2xl font-semibold">
                        CNSI Event Packages & Services
                    </h2>
                    <p class="mt-1" style="color: #424242">
                        Bundled packages include AV equipment, basic technical
                        support, and events staff assistance.
                    </p>
                </div>
                <a
                    matRipple
                    [routerLink]="['/services', 'form']"
                    class="bg-primary text-primary-content flex items-center gap-2 rounded px-4 py-2 text-sm font-medium"
                >
                    <icon>add</icon>
                    Add Service
                </a>
            </div>

            <div class="mb-4 flex items-center gap-2">
                <span class="text-sm font-medium">Pricing:</span>
                <button
                    class="rounded-full px-4 py-1 text-sm font-medium transition-colors"
                    [class]="
                        rate_type() === 'internal'
                            ? 'bg-primary text-primary-content'
                            : 'bg-base-200 hover:bg-base-300'
                    "
                    (click)="rate_type.set('internal')"
                >
                    Internal (UCLA)
                </button>
                <button
                    class="rounded-full px-4 py-1 text-sm font-medium transition-colors"
                    [class]="
                        rate_type() === 'external'
                            ? 'bg-primary text-primary-content'
                            : 'bg-base-200 hover:bg-base-300'
                    "
                    (click)="rate_type.set('external')"
                >
                    External
                </button>
            </div>

            <!-- Event Packages -->
            <h3 class="mb-3 text-lg font-semibold">Event Packages</h3>
            <div
                class="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
            >
                @for (pkg of packages(); track pkg.id) {
                    <div
                        class="border-base-200 bg-base-100 group rounded-lg border p-4 shadow-sm"
                    >
                        <div class="mb-3 flex items-start justify-between">
                            <div class="flex-1">
                                <h3 class="text-lg font-semibold">
                                    {{ pkg.name }}
                                </h3>
                                <p class="text-sm" style="color: #424242">
                                    {{ pkg.space }}
                                </p>
                            </div>
                            <div class="flex items-center gap-1">
                                <a
                                    matRipple
                                    [routerLink]="[
                                        '/services',
                                        'form',
                                        pkg.id,
                                    ]"
                                    [attr.aria-label]="'Edit ' + pkg.name"
                                    class="hover:bg-base-200 flex h-8 w-8 items-center justify-center rounded-full opacity-0 transition-opacity group-hover:opacity-100"
                                >
                                    <icon class="text-base">edit</icon>
                                </a>
                                <button
                                    matRipple
                                    (click)="remove(pkg.id)"
                                    [attr.aria-label]="'Delete ' + pkg.name"
                                    class="hover:bg-error/10 flex h-8 w-8 items-center justify-center rounded-full opacity-0 transition-opacity group-hover:opacity-100"
                                >
                                    <icon class="text-base" style="color: #c62828">
                                        delete
                                    </icon>
                                </button>
                            </div>
                        </div>
                        <p class="mb-3 text-sm" style="color: #424242">
                            {{ pkg.description }}
                        </p>
                        <div
                            class="border-base-200 flex items-center justify-between border-t pt-3"
                        >
                            <span
                                class="bg-base-200 rounded px-2 py-0.5 text-xs"
                            >
                                {{ pkg.duration }}
                            </span>
                            <span class="text-lg font-bold" style="color: #782144">
                                {{
                                    rate_type() === 'internal'
                                        ? pkg.internal_price
                                        : pkg.external_price
                                }}
                            </span>
                        </div>
                    </div>
                }
            </div>

            <!-- A La Carte -->
            <h3 class="mb-3 text-lg font-semibold">
                A La Carte Options
                <span class="text-sm font-normal" style="color: #424242">
                    (up to 4 hours)
                </span>
            </h3>
            <div
                class="border-base-200 mb-8 overflow-hidden rounded-lg border"
            >
                <table class="w-full">
                    <thead>
                        <tr class="bg-base-200">
                            <th class="px-4 py-3 text-left text-sm">
                                Service
                            </th>
                            <th class="px-4 py-3 text-right text-sm">Price</th>
                            <th class="w-20 px-4 py-3 text-right text-sm">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        @for (option of alacarte(); track option.id) {
                            <tr class="border-base-200 group border-t">
                                <td class="px-4 py-3 text-sm">
                                    {{ option.name }}
                                </td>
                                <td
                                    class="px-4 py-3 text-right text-sm font-semibold"
                                    style="color: #782144"
                                >
                                    {{
                                        rate_type() === 'internal'
                                            ? option.internal_price
                                            : option.external_price
                                    }}
                                </td>
                                <td class="px-4 py-3 text-right">
                                    <div
                                        class="flex items-center justify-end gap-1 opacity-0 transition-opacity group-hover:opacity-100"
                                    >
                                        <a
                                            [routerLink]="[
                                                '/services',
                                                'form',
                                                option.id,
                                            ]"
                                            [attr.aria-label]="'Edit ' + option.name"
                                            class="hover:bg-base-200 flex h-7 w-7 items-center justify-center rounded-full"
                                        >
                                            <icon class="text-sm">edit</icon>
                                        </a>
                                        <button
                                            (click)="remove(option.id)"
                                            [attr.aria-label]="'Delete ' + option.name"
                                            class="hover:bg-error/10 flex h-7 w-7 items-center justify-center rounded-full"
                                        >
                                            <icon class="text-sm" style="color: #c62828">
                                                delete
                                            </icon>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>

            <!-- AV Add-ons -->
            <h3 class="mb-3 text-lg font-semibold">AV Add-ons</h3>
            <div class="border-base-200 overflow-hidden rounded-lg border">
                <table class="w-full">
                    <thead>
                        <tr class="bg-base-200">
                            <th class="px-4 py-3 text-left text-sm">
                                Add-on
                            </th>
                            <th class="px-4 py-3 text-left text-sm">Space</th>
                            <th class="px-4 py-3 text-right text-sm">Price</th>
                            <th class="w-20 px-4 py-3 text-right text-sm">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        @for (addon of addons(); track addon.id) {
                            <tr class="border-base-200 group border-t">
                                <td class="px-4 py-3 text-sm">
                                    <div class="flex items-center gap-2">
                                        <icon
                                            class="text-base"
                                            style="color: #424242"
                                        >
                                            {{ addon.icon }}
                                        </icon>
                                        {{ addon.name }}
                                    </div>
                                </td>
                                <td
                                    class="px-4 py-3 text-sm"
                                    style="color: #424242"
                                >
                                    {{ addon.space }}
                                </td>
                                <td
                                    class="px-4 py-3 text-right text-sm font-semibold"
                                    style="color: #782144"
                                >
                                    {{
                                        rate_type() === 'internal'
                                            ? addon.internal_price
                                            : addon.external_price
                                    }}
                                </td>
                                <td class="px-4 py-3 text-right">
                                    <div
                                        class="flex items-center justify-end gap-1 opacity-0 transition-opacity group-hover:opacity-100"
                                    >
                                        <a
                                            [routerLink]="[
                                                '/services',
                                                'form',
                                                addon.id,
                                            ]"
                                            [attr.aria-label]="'Edit ' + addon.name"
                                            class="hover:bg-base-200 flex h-7 w-7 items-center justify-center rounded-full"
                                        >
                                            <icon class="text-sm">edit</icon>
                                        </a>
                                        <button
                                            (click)="remove(addon.id)"
                                            [attr.aria-label]="'Delete ' + addon.name"
                                            class="hover:bg-error/10 flex h-7 w-7 items-center justify-center rounded-full"
                                        >
                                            <icon class="text-sm" style="color: #c62828">
                                                delete
                                            </icon>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>

            <div class="bg-info/10 mt-6 rounded-lg p-4 text-sm" style="color: #0d47a1">
                Please submit agenda and additional details to
                <strong>events&#64;cnsi.ucla.edu</strong> with subject line:
                <em>event name and date</em>.
            </div>
        </div>
    `,
      imports: [CommonModule, RouterModule, MatRippleModule, IconComponent]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServicesPackagesComponent, { className: "ServicesPackagesComponent", filePath: "apps/concierge/src/app/services/services-packages.component.ts", lineNumber: 283 });
})();

// apps/concierge/src/app/services/services-spaces.component.ts
var _forTrack02 = ($index, $item) => $item.name;
function ServicesSpacesComponent_For_15_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 20)(1, "icon", 21);
    \u0275\u0275text(2, " check_circle ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", feature_r1, " ");
  }
}
function ServicesSpacesComponent_For_15_Conditional_17_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const addon_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", addon_r2.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.rate_type() === "internal" ? addon_r2.internal_price : addon_r2.external_price, " ");
  }
}
function ServicesSpacesComponent_For_15_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 18);
    \u0275\u0275text(1, " Optional Add-ons ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 22);
    \u0275\u0275repeaterCreate(3, ServicesSpacesComponent_For_15_Conditional_17_For_4_Template, 5, 2, "div", 23, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const space_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275repeater(space_r4.addons);
  }
}
function ServicesSpacesComponent_For_15_Conditional_18_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const addon_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", addon_r5.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.rate_type() === "internal" ? addon_r5.internal_price : addon_r5.external_price, " ");
  }
}
function ServicesSpacesComponent_For_15_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 18);
    \u0275\u0275text(1, " Timed Add-ons ");
    \u0275\u0275elementStart(2, "span", 26);
    \u0275\u0275text(3, " (fee covers 4 hours) ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 27);
    \u0275\u0275repeaterCreate(5, ServicesSpacesComponent_For_15_Conditional_18_For_6_Template, 5, 2, "div", 23, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const space_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275repeater(space_r4.timed_addons);
  }
}
function ServicesSpacesComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 11)(2, "icon", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13)(5, "h3", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 16);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 17)(12, "h4", 18);
    \u0275\u0275text(13, " Included Equipment ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "ul", 19);
    \u0275\u0275repeaterCreate(15, ServicesSpacesComponent_For_15_For_16_Template, 4, 1, "li", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, ServicesSpacesComponent_For_15_Conditional_17_Template, 5, 0);
    \u0275\u0275conditionalCreate(18, ServicesSpacesComponent_For_15_Conditional_18_Template, 7, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const space_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", space_r4.icon, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", space_r4.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", space_r4.room_code, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", space_r4.capacity, " ");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(space_r4.features);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(space_r4.addons.length ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(space_r4.timed_addons.length ? 18 : -1);
  }
}
var SPACES = [
  {
    name: "Auditorium",
    room_code: "CNSI 3200",
    capacity: "264 Seated",
    icon: "stadium",
    features: [
      "Podium with wired microphone and 4-port VGA switch",
      "Projector and screen (1024x768, 1280x720, 1366x768)",
      "Overhead speakers and 2.1 channel speaker system",
      "3 wireless clip-on microphones",
      "2 wireless handheld microphones with floor stands",
      "5 wired microphones with tabletop stands",
      "Assisted listening transmitters with headphones",
      "Wired and wireless internet"
    ],
    addons: [
      {
        name: "Laptop rental",
        internal_price: "$63",
        external_price: "$86.63"
      },
      {
        name: "Phone conferencing",
        internal_price: "Contact for pricing*",
        external_price: "Contact for pricing*"
      },
      {
        name: "Panel discussion (traditional table or fireside chat)",
        internal_price: "$94",
        external_price: "$129.72"
      }
    ],
    timed_addons: [
      {
        name: "Web conferencing**",
        internal_price: "$125",
        external_price: "$172.35"
      },
      {
        name: "Videography",
        internal_price: "$125",
        external_price: "$172.35"
      },
      {
        name: "Live streaming",
        internal_price: "$125",
        external_price: "$172.35"
      }
    ]
  },
  {
    name: "Lobby",
    room_code: "CNSI Main",
    capacity: "260 Standing / 130 Seated",
    icon: "door_front",
    features: [
      "Power outlets",
      "Video wall (3x3 screens, 1920x1080 each)",
      "Wireless internet"
    ],
    addons: [
      {
        name: "Laptop rental",
        internal_price: "$63",
        external_price: "$86.63"
      },
      {
        name: "Video wall usage",
        internal_price: "$63",
        external_price: "$86.30"
      },
      {
        name: "Portable PA system",
        internal_price: "$125",
        external_price: "$172.06"
      },
      {
        name: "Projector and screen",
        internal_price: "$94",
        external_price: "$129.48"
      },
      {
        name: "Panel discussion (traditional table or fireside chat)",
        internal_price: "$94",
        external_price: "$129.72"
      }
    ],
    timed_addons: [
      {
        name: "Videography",
        internal_price: "$125",
        external_price: "$172.35"
      },
      {
        name: "Overflow streaming",
        internal_price: "$156",
        external_price: "$214.98"
      }
    ]
  },
  {
    name: "Presentation Space",
    room_code: "CNSI 5200",
    capacity: "56 Max",
    icon: "present_to_all",
    features: [
      'Dual 85" 4K LED display with audio (HDMI up to 3840x2160)',
      "Tabletop power outlets",
      "Wired and wireless internet",
      "Tabletop projector and screen (VGA/DVI/HDMI, 1024x768 and 1280x800)"
    ],
    addons: [
      {
        name: "Laptop rental",
        internal_price: "$63",
        external_price: "$86.63"
      },
      {
        name: "External speakers for laptop",
        internal_price: "Included",
        external_price: "Included"
      },
      {
        name: "Phone conferencing",
        internal_price: "Contact for pricing*",
        external_price: "Contact for pricing*"
      },
      {
        name: "Projector and screen",
        internal_price: "$94",
        external_price: "$94"
      },
      {
        name: "Panel discussion (traditional table or fireside chat)",
        internal_price: "$94",
        external_price: "$129.72"
      }
    ],
    timed_addons: [
      {
        name: "Web conferencing**",
        internal_price: "$125",
        external_price: "$172.35"
      },
      {
        name: "Videography",
        internal_price: "$125",
        external_price: "$172.35"
      },
      {
        name: "Live streaming",
        internal_price: "$125",
        external_price: "$172.35"
      }
    ]
  },
  {
    name: "Executive Conference Rooms",
    room_code: "CNSI 3141, 3151",
    capacity: "15 Divided / 30 Linked",
    icon: "meeting_room",
    features: [
      'Built-in projector and dual 85" 4K LED display with audio',
      "HDMI up to 3840x2160",
      "Wired and wireless internet"
    ],
    addons: [
      {
        name: "Laptop rental",
        internal_price: "$63",
        external_price: "$86.63"
      },
      {
        name: "Phone conferencing",
        internal_price: "Contact for pricing*",
        external_price: "Contact for pricing*"
      }
    ],
    timed_addons: [
      {
        name: "Web conferencing**",
        internal_price: "$125",
        external_price: "$172.35"
      },
      {
        name: "Videography",
        internal_price: "$125",
        external_price: "$172.35"
      },
      {
        name: "Live streaming",
        internal_price: "$125",
        external_price: "$172.35"
      }
    ]
  },
  {
    name: "5th Floor Conference Rooms",
    room_code: "CNSI 5th Floor",
    capacity: "15 Max Each (4 available)",
    icon: "groups",
    features: ["Standard conference room setup"],
    addons: [],
    timed_addons: []
  },
  {
    name: "6th Floor Balconies",
    room_code: "CNSI 6th Floor",
    capacity: "150 Max Each",
    icon: "balcony",
    features: ["Outdoor balcony space"],
    addons: [],
    timed_addons: []
  }
];
var _ServicesSpacesComponent = class _ServicesSpacesComponent {
  constructor() {
    this.rate_type = signal("internal");
    this.spaces = SPACES;
  }
};
_ServicesSpacesComponent.\u0275fac = function ServicesSpacesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ServicesSpacesComponent)();
};
_ServicesSpacesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServicesSpacesComponent, selectors: [["services-spaces"]], decls: 21, vars: 4, consts: [[1, "p-6"], [1, "mb-6"], [1, "text-2xl", "font-semibold"], [1, "mt-1", 2, "color", "#424242"], [1, "mb-4", "flex", "items-center", "gap-2"], [1, "text-sm", "font-medium"], [1, "rounded-full", "px-4", "py-1", "text-sm", "font-medium", "transition-colors", 3, "click"], [1, "space-y-6"], [1, "border-base-200", "overflow-hidden", "rounded-lg", "border"], [1, "mt-6", "border-t", "border-base-200", "pt-4", "text-xs", 2, "color", "#424242"], [1, "mt-1"], [1, "bg-base-200", "flex", "items-center", "gap-3", "px-4", "py-3"], [1, "text-primary", "text-2xl"], [1, "flex-1"], [1, "text-lg", "font-semibold"], [1, "text-xs", 2, "color", "#424242"], [1, "bg-primary/10", "rounded-full", "px-3", "py-1", "text-sm", "font-medium", 2, "color", "#782144"], [1, "p-4"], [1, "mb-2", "text-sm", "font-semibold"], [1, "mb-4", "space-y-1"], [1, "flex", "items-start", "gap-2", "text-sm", 2, "color", "#424242"], [1, "mt-0.5", "text-base", 2, "color", "#2e7d32"], [1, "border-base-200", "mb-4", "overflow-hidden", "rounded", "border"], [1, "border-base-200", "flex", "items-center", "justify-between", "border-b", "px-3", "py-2", "last:border-b-0"], [1, "text-sm"], [1, "text-sm", "font-medium", 2, "color", "#782144"], [1, "font-normal", 2, "color", "#424242"], [1, "border-base-200", "overflow-hidden", "rounded", "border"]], template: function ServicesSpacesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
    \u0275\u0275text(3, "Spaces & AV Equipment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 3);
    \u0275\u0275text(5, " Available venues and their audio-visual capabilities. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 4)(7, "span", 5);
    \u0275\u0275text(8, "Pricing:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 6);
    \u0275\u0275listener("click", function ServicesSpacesComponent_Template_button_click_9_listener() {
      return ctx.rate_type.set("internal");
    });
    \u0275\u0275text(10, " Internal (UCLA) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 6);
    \u0275\u0275listener("click", function ServicesSpacesComponent_Template_button_click_11_listener() {
      return ctx.rate_type.set("external");
    });
    \u0275\u0275text(12, " External ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 7);
    \u0275\u0275repeaterCreate(14, ServicesSpacesComponent_For_15_Template, 19, 6, "div", 8, _forTrack02);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 9)(17, "p");
    \u0275\u0275text(18, "* Additional charges may apply. Contact events@cnsi.ucla.edu for details.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 10);
    \u0275\u0275text(20, "** A conference room camera and digital speakerphone will be provided.");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275classMap(ctx.rate_type() === "internal" ? "bg-primary text-primary-content" : "bg-base-200 hover:bg-base-300");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx.rate_type() === "external" ? "bg-primary text-primary-content" : "bg-base-200 hover:bg-base-300");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.spaces);
  }
}, dependencies: [CommonModule, IconComponent], encapsulation: 2 });
var ServicesSpacesComponent = _ServicesSpacesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServicesSpacesComponent, [{
    type: Component,
    args: [{
      selector: "services-spaces",
      template: `
        <div class="p-6">
            <div class="mb-6">
                <h2 class="text-2xl font-semibold">Spaces & AV Equipment</h2>
                <p class="mt-1" style="color: #424242">
                    Available venues and their audio-visual capabilities.
                </p>
            </div>

            <div class="mb-4 flex items-center gap-2">
                <span class="text-sm font-medium">Pricing:</span>
                <button
                    class="rounded-full px-4 py-1 text-sm font-medium transition-colors"
                    [class]="
                        rate_type() === 'internal'
                            ? 'bg-primary text-primary-content'
                            : 'bg-base-200 hover:bg-base-300'
                    "
                    (click)="rate_type.set('internal')"
                >
                    Internal (UCLA)
                </button>
                <button
                    class="rounded-full px-4 py-1 text-sm font-medium transition-colors"
                    [class]="
                        rate_type() === 'external'
                            ? 'bg-primary text-primary-content'
                            : 'bg-base-200 hover:bg-base-300'
                    "
                    (click)="rate_type.set('external')"
                >
                    External
                </button>
            </div>

            <div class="space-y-6">
                @for (space of spaces; track space.name) {
                    <div
                        class="border-base-200 overflow-hidden rounded-lg border"
                    >
                        <div
                            class="bg-base-200 flex items-center gap-3 px-4 py-3"
                        >
                            <icon class="text-primary text-2xl">
                                {{ space.icon }}
                            </icon>
                            <div class="flex-1">
                                <h3 class="text-lg font-semibold">
                                    {{ space.name }}
                                </h3>
                                <p class="text-xs" style="color: #424242">
                                    {{ space.room_code }}
                                </p>
                            </div>
                            <span
                                class="bg-primary/10 rounded-full px-3 py-1 text-sm font-medium"
                                style="color: #782144"
                            >
                                {{ space.capacity }}
                            </span>
                        </div>
                        <div class="p-4">
                            <h4 class="mb-2 text-sm font-semibold">
                                Included Equipment
                            </h4>
                            <ul class="mb-4 space-y-1">
                                @for (
                                    feature of space.features;
                                    track feature
                                ) {
                                    <li
                                        class="flex items-start gap-2 text-sm"
                                        style="color: #424242"
                                    >
                                        <icon
                                            class="mt-0.5 text-base"
                                            style="color: #2e7d32"
                                        >
                                            check_circle
                                        </icon>
                                        {{ feature }}
                                    </li>
                                }
                            </ul>

                            @if (space.addons.length) {
                                <h4 class="mb-2 text-sm font-semibold">
                                    Optional Add-ons
                                </h4>
                                <div
                                    class="border-base-200 mb-4 overflow-hidden rounded border"
                                >
                                    @for (
                                        addon of space.addons;
                                        track addon.name
                                    ) {
                                        <div
                                            class="border-base-200 flex items-center justify-between border-b px-3 py-2 last:border-b-0"
                                        >
                                            <span class="text-sm">
                                                {{ addon.name }}
                                            </span>
                                            <span
                                                class="text-sm font-medium"
                                                style="color: #782144"
                                            >
                                                {{
                                                    rate_type() === 'internal'
                                                        ? addon.internal_price
                                                        : addon.external_price
                                                }}
                                            </span>
                                        </div>
                                    }
                                </div>
                            }

                            @if (space.timed_addons.length) {
                                <h4 class="mb-2 text-sm font-semibold">
                                    Timed Add-ons
                                    <span
                                        class="font-normal"
                                        style="color: #424242"
                                    >
                                        (fee covers 4 hours)
                                    </span>
                                </h4>
                                <div
                                    class="border-base-200 overflow-hidden rounded border"
                                >
                                    @for (
                                        addon of space.timed_addons;
                                        track addon.name
                                    ) {
                                        <div
                                            class="border-base-200 flex items-center justify-between border-b px-3 py-2 last:border-b-0"
                                        >
                                            <span class="text-sm">
                                                {{ addon.name }}
                                            </span>
                                            <span
                                                class="text-sm font-medium"
                                                style="color: #782144"
                                            >
                                                {{
                                                    rate_type() === 'internal'
                                                        ? addon.internal_price
                                                        : addon.external_price
                                                }}
                                            </span>
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>

            <div
                class="mt-6 border-t border-base-200 pt-4 text-xs"
                style="color: #424242"
            >
                <p>* Additional charges may apply. Contact events&#64;cnsi.ucla.edu for details.</p>
                <p class="mt-1">** A conference room camera and digital speakerphone will be provided.</p>
            </div>
        </div>
    `,
      imports: [CommonModule, IconComponent]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServicesSpacesComponent, { className: "ServicesSpacesComponent", filePath: "apps/concierge/src/app/services/services-spaces.component.ts", lineNumber: 411 });
})();

// apps/concierge/src/app/services/services-additional.component.ts
var _ServicesAdditionalComponent = class _ServicesAdditionalComponent {
};
_ServicesAdditionalComponent.\u0275fac = function ServicesAdditionalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ServicesAdditionalComponent)();
};
_ServicesAdditionalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServicesAdditionalComponent, selectors: [["services-additional"]], decls: 94, vars: 0, consts: [[1, "p-6"], [1, "mb-6"], [1, "text-2xl", "font-semibold"], [1, "mt-1", 2, "color", "#424242"], [1, "grid", "grid-cols-1", "gap-6", "lg:grid-cols-2"], [1, "border-base-200", "overflow-hidden", "rounded-lg", "border"], [1, "bg-base-200", "flex", "items-center", "gap-3", "px-4", "py-3"], [1, "text-primary", "text-2xl"], [1, "text-lg", "font-semibold"], [1, "space-y-3", "p-4"], [1, "text-sm", 2, "color", "#424242"], [1, "space-y-2"], [1, "flex", "items-start", "gap-2"], [1, "mt-0.5", "text-base", 2, "color", "#424242"], [1, "text-sm"], [1, "bg-warning/10", "text-warning", "rounded", "p-3", "text-sm"], [1, "bg-info/10", "text-info", "rounded", "p-3", "text-sm"], [1, "flex", "items-center", "gap-2"], [1, "text-primary", "text-base"], [1, "text-sm", "font-medium"], [1, "mt-8"], [1, "mb-4", "text-xl", "font-semibold"], [1, "grid", "grid-cols-1", "gap-4", "lg:grid-cols-2"], [1, "border-base-200", "rounded-lg", "border", "p-4"], [1, "mb-2", "font-semibold"], [1, "mt-2", "text-xs", 2, "color", "#424242"], [1, "bg-info/10", "text-info", "mt-6", "rounded-lg", "p-4", "text-sm"]], template: function ServicesAdditionalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
    \u0275\u0275text(3, "Additional Services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 3);
    \u0275\u0275text(5, " Catering, bar services, equipment rentals, and delivery information. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "icon", 7);
    \u0275\u0275text(10, "restaurant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h3", 8);
    \u0275\u0275text(12, "Catering");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 9)(14, "p", 10);
    \u0275\u0275text(15, " Catering companies may use the kitchen area on the 3rd and 5th floor. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 11)(17, "div", 12)(18, "icon", 13);
    \u0275\u0275text(19, " info ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 14);
    \u0275\u0275text(21, " Provide catering company name, setup time, and cleanup time when booking. ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(22, "div", 5)(23, "div", 6)(24, "icon", 7);
    \u0275\u0275text(25, "local_bar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "h3", 8);
    \u0275\u0275text(27, "Bar Services");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 9)(29, "div", 15);
    \u0275\u0275text(30, " One beverage attendant is required for groups of 40 or larger. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 11)(32, "div", 12)(33, "icon", 13);
    \u0275\u0275text(34, " info ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 14);
    \u0275\u0275text(36, " Provide bartending company, start/end time, and person responsible for monitoring alcohol consumption. ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(37, "div", 5)(38, "div", 6)(39, "icon", 7);
    \u0275\u0275text(40, "inventory_2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "h3", 8);
    \u0275\u0275text(42, " Equipment Rentals ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 9)(44, "div", 16);
    \u0275\u0275text(45, " CNSI does not provide table linens. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 11)(47, "div", 12)(48, "icon", 13);
    \u0275\u0275text(49, " info ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span", 14);
    \u0275\u0275text(51, " Provide rental company, drop-off/setup date and time, pick-up date and time, and contact person for setup and strike. ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(52, "div", 5)(53, "div", 6)(54, "icon", 7);
    \u0275\u0275text(55, " local_shipping ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "h3", 8);
    \u0275\u0275text(57, "Deliveries");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 9)(59, "div", 17)(60, "icon", 18);
    \u0275\u0275text(61, " schedule ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "span", 19);
    \u0275\u0275text(63, " Loading dock hours: Monday - Friday, 8AM - 5PM ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 12)(65, "icon", 13);
    \u0275\u0275text(66, " info ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "span", 14);
    \u0275\u0275text(68, " Indicate any deliveries to be made to CNSI with full details when booking. ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(69, "div", 20)(70, "h3", 21);
    \u0275\u0275text(71, " Payment Information ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div", 22)(73, "div", 23)(74, "h4", 24);
    \u0275\u0275text(75, "UCLA Departments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "p", 10);
    \u0275\u0275text(77, " Please provide internal UCLA Recharge ID information. CNSI may verify sufficient funds in the FAU. All recharges are processed after the event. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 23)(79, "h4", 24);
    \u0275\u0275text(80, "External Parties");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "p", 10);
    \u0275\u0275text(82, ' Pay by check or money order to "UC Regents" sent to CNSI Events, or pay by credit card online. ');
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "p", 25);
    \u0275\u0275text(84, " California NanoSystems Institute at UCLA");
    \u0275\u0275element(85, "br");
    \u0275\u0275text(86, " 570 Westwood Plaza, Building 114, MC 722710");
    \u0275\u0275element(87, "br");
    \u0275\u0275text(88, " Los Angeles, CA 90095-7227 ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(89, "div", 26);
    \u0275\u0275text(90, " For questions, please email ");
    \u0275\u0275elementStart(91, "strong");
    \u0275\u0275text(92, "events@cnsi.ucla.edu");
    \u0275\u0275elementEnd();
    \u0275\u0275text(93, ". ");
    \u0275\u0275elementEnd()();
  }
}, dependencies: [CommonModule, IconComponent], encapsulation: 2 });
var ServicesAdditionalComponent = _ServicesAdditionalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServicesAdditionalComponent, [{
    type: Component,
    args: [{
      selector: "services-additional",
      template: `
        <div class="p-6">
            <div class="mb-6">
                <h2 class="text-2xl font-semibold">Additional Services</h2>
                <p style="color: #424242" class=" mt-1">
                    Catering, bar services, equipment rentals, and delivery
                    information.
                </p>
            </div>

            <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <!-- Catering -->
                <div
                    class="border-base-200 overflow-hidden rounded-lg border"
                >
                    <div
                        class="bg-base-200 flex items-center gap-3 px-4 py-3"
                    >
                        <icon class="text-primary text-2xl">restaurant</icon>
                        <h3 class="text-lg font-semibold">Catering</h3>
                    </div>
                    <div class="space-y-3 p-4">
                        <p style="color: #424242" class=" text-sm">
                            Catering companies may use the kitchen area on the
                            3rd and 5th floor.
                        </p>
                        <div class="space-y-2">
                            <div class="flex items-start gap-2">
                                <icon
                                    style="color: #424242" class=" mt-0.5 text-base"
                                >
                                    info
                                </icon>
                                <span class="text-sm">
                                    Provide catering company name, setup time,
                                    and cleanup time when booking.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Bar Services -->
                <div
                    class="border-base-200 overflow-hidden rounded-lg border"
                >
                    <div
                        class="bg-base-200 flex items-center gap-3 px-4 py-3"
                    >
                        <icon class="text-primary text-2xl">local_bar</icon>
                        <h3 class="text-lg font-semibold">Bar Services</h3>
                    </div>
                    <div class="space-y-3 p-4">
                        <div
                            class="bg-warning/10 text-warning rounded p-3 text-sm"
                        >
                            One beverage attendant is required for groups of 40
                            or larger.
                        </div>
                        <div class="space-y-2">
                            <div class="flex items-start gap-2">
                                <icon
                                    style="color: #424242" class=" mt-0.5 text-base"
                                >
                                    info
                                </icon>
                                <span class="text-sm">
                                    Provide bartending company, start/end time,
                                    and person responsible for monitoring alcohol
                                    consumption.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Equipment Rentals -->
                <div
                    class="border-base-200 overflow-hidden rounded-lg border"
                >
                    <div
                        class="bg-base-200 flex items-center gap-3 px-4 py-3"
                    >
                        <icon class="text-primary text-2xl">inventory_2</icon>
                        <h3 class="text-lg font-semibold">
                            Equipment Rentals
                        </h3>
                    </div>
                    <div class="space-y-3 p-4">
                        <div
                            class="bg-info/10 text-info rounded p-3 text-sm"
                        >
                            CNSI does not provide table linens.
                        </div>
                        <div class="space-y-2">
                            <div class="flex items-start gap-2">
                                <icon
                                    style="color: #424242" class=" mt-0.5 text-base"
                                >
                                    info
                                </icon>
                                <span class="text-sm">
                                    Provide rental company, drop-off/setup date
                                    and time, pick-up date and time, and contact
                                    person for setup and strike.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Deliveries -->
                <div
                    class="border-base-200 overflow-hidden rounded-lg border"
                >
                    <div
                        class="bg-base-200 flex items-center gap-3 px-4 py-3"
                    >
                        <icon class="text-primary text-2xl">
                            local_shipping
                        </icon>
                        <h3 class="text-lg font-semibold">Deliveries</h3>
                    </div>
                    <div class="space-y-3 p-4">
                        <div class="flex items-center gap-2">
                            <icon class="text-primary text-base">
                                schedule
                            </icon>
                            <span class="text-sm font-medium">
                                Loading dock hours: Monday - Friday, 8AM - 5PM
                            </span>
                        </div>
                        <div class="flex items-start gap-2">
                            <icon
                                style="color: #424242" class=" mt-0.5 text-base"
                            >
                                info
                            </icon>
                            <span class="text-sm">
                                Indicate any deliveries to be made to CNSI with
                                full details when booking.
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Payment Information -->
            <div class="mt-8">
                <h3 class="mb-4 text-xl font-semibold">
                    Payment Information
                </h3>
                <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <div
                        class="border-base-200 rounded-lg border p-4"
                    >
                        <h4 class="mb-2 font-semibold">UCLA Departments</h4>
                        <p style="color: #424242" class=" text-sm">
                            Please provide internal UCLA Recharge ID
                            information. CNSI may verify sufficient funds in the
                            FAU. All recharges are processed after the event.
                        </p>
                    </div>
                    <div
                        class="border-base-200 rounded-lg border p-4"
                    >
                        <h4 class="mb-2 font-semibold">External Parties</h4>
                        <p style="color: #424242" class=" text-sm">
                            Pay by check or money order to "UC Regents" sent to
                            CNSI Events, or pay by credit card online.
                        </p>
                        <p style="color: #424242" class=" mt-2 text-xs">
                            California NanoSystems Institute at UCLA<br />
                            570 Westwood Plaza, Building 114, MC 722710<br />
                            Los Angeles, CA 90095-7227
                        </p>
                    </div>
                </div>
            </div>

            <div
                class="bg-info/10 text-info mt-6 rounded-lg p-4 text-sm"
            >
                For questions, please email
                <strong>events&#64;cnsi.ucla.edu</strong>.
            </div>
        </div>
    `,
      imports: [CommonModule, IconComponent]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServicesAdditionalComponent, { className: "ServicesAdditionalComponent", filePath: "apps/concierge/src/app/services/services-additional.component.ts", lineNumber: 197 });
})();

// apps/concierge/src/app/services/service-form.component.ts
var _c03 = () => ["/services", "packages"];
var _ServiceFormComponent = class _ServiceFormComponent {
  constructor() {
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._state = inject(ServicesStateService);
    this.is_edit = signal(false);
    this._edit_id = "";
    this.form = new FormGroup({
      name: new FormControl("", [Validators.required]),
      category: new FormControl("package", [Validators.required]),
      space: new FormControl(""),
      duration: new FormControl(""),
      description: new FormControl(""),
      internal_price: new FormControl("", [Validators.required]),
      external_price: new FormControl("", [Validators.required]),
      refund_lead_days: new FormControl(null),
      icon: new FormControl("")
    });
  }
  ngOnInit() {
    const id = this._route.snapshot.paramMap.get("id");
    if (id) {
      const service = this._state.getById(id);
      if (service) {
        this.is_edit.set(true);
        this._edit_id = id;
        this.form.patchValue(service);
      } else {
        notifyError("Service not found");
        this._router.navigate(["/services", "packages"]);
      }
    }
  }
  save() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      notifyError("Please fill in all required fields.");
      return;
    }
    const value = this.form.getRawValue();
    if (this.is_edit()) {
      this._state.updateService(this._edit_id, value);
      notifySuccess("Service updated successfully.");
    } else {
      this._state.addService(value);
      notifySuccess("Service created successfully.");
    }
    this._router.navigate(["/services", "packages"]);
  }
};
_ServiceFormComponent.\u0275fac = function ServiceFormComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ServiceFormComponent)();
};
_ServiceFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServiceFormComponent, selectors: [["service-form"]], decls: 90, vars: 7, consts: [[1, "bg-base-100", "absolute", "inset-0", "overflow-auto"], [1, "bg-base-200", "sticky", "top-0", "z-10", "mx-auto", "my-2", "flex", "w-full", "max-w-[640px]", "items-center", "justify-between", "rounded", "px-4", "py-2"], [1, "text-xl", "font-medium"], ["icon", "", "matRipple", "", "aria-label", "Close form", 1, "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-full", 3, "routerLink"], [1, "mx-auto", "my-2", "flex", "w-full", "max-w-[640px]", "flex-col", "gap-1", "px-4", "pb-20", 3, "formGroup"], [1, "text-sm", "font-medium"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "formControlName", "name", "placeholder", "Service name"], ["formControlName", "category", "placeholder", "Select category"], ["value", "package"], ["value", "alacarte"], ["value", "addon"], ["value", "space"], ["matInput", "", "formControlName", "space", "placeholder", "e.g. Auditorium and Lobby"], ["matInput", "", "formControlName", "duration", "placeholder", "e.g. Up to 4 hours"], ["matInput", "", "formControlName", "description", "placeholder", "Service description", "rows", "3"], [1, "grid", "grid-cols-2", "gap-4"], ["matInput", "", "formControlName", "internal_price", "placeholder", "e.g. $719"], ["matInput", "", "formControlName", "external_price", "placeholder", "e.g. $990.94"], ["matInput", "", "type", "number", "formControlName", "refund_lead_days", "placeholder", "e.g. 7"], ["matInput", "", "formControlName", "icon", "placeholder", "e.g. groups, school, meeting_room"], [1, "bg-base-200", "fixed", "bottom-0", "left-1/2", "z-10", "mx-auto", "my-2", "flex", "w-full", "max-w-[640px]", "-translate-x-1/2", "items-center", "justify-end", "gap-2", "rounded", "px-4", "py-2"], ["matRipple", "", 1, "bg-base-300", "hover:bg-base-content/20", "rounded", "px-6", "py-2", "text-sm", "font-medium", 3, "routerLink"], ["matRipple", "", 1, "bg-primary", "text-primary-content", "rounded", "px-6", "py-2", "text-sm", "font-medium", 3, "click"]], template: function ServiceFormComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 3)(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "form", 4)(8, "label", 5);
    \u0275\u0275text(9, "Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-form-field", 6)(11, "mat-label");
    \u0275\u0275text(12, "Service name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 7);
    \u0275\u0275elementStart(14, "mat-error");
    \u0275\u0275text(15, "Name is required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "label", 5);
    \u0275\u0275text(17, "Category *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "mat-form-field", 6)(19, "mat-label");
    \u0275\u0275text(20, "Select category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-select", 8)(22, "mat-option", 9);
    \u0275\u0275text(23, " Event Package ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-option", 10);
    \u0275\u0275text(25, "A La Carte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "mat-option", 11);
    \u0275\u0275text(27, "AV Add-on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-option", 12);
    \u0275\u0275text(29, "Space / Venue");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "mat-error");
    \u0275\u0275text(31, "Category is required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "label", 5);
    \u0275\u0275text(33, "Space / Venue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "mat-form-field", 6)(35, "mat-label");
    \u0275\u0275text(36, "e.g. Auditorium and Lobby");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "input", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "label", 5);
    \u0275\u0275text(39, "Duration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "mat-form-field", 6)(41, "mat-label");
    \u0275\u0275text(42, "e.g. Up to 4 hours");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "input", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "label", 5);
    \u0275\u0275text(45, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "mat-form-field", 6)(47, "mat-label");
    \u0275\u0275text(48, "Service description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "textarea", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 16)(51, "div")(52, "label", 5);
    \u0275\u0275text(53, " Internal Price (UCLA) * ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "mat-form-field", 6)(55, "mat-label");
    \u0275\u0275text(56, "e.g. $719");
    \u0275\u0275elementEnd();
    \u0275\u0275element(57, "input", 17);
    \u0275\u0275elementStart(58, "mat-error");
    \u0275\u0275text(59, "Price is required");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div")(61, "label", 5);
    \u0275\u0275text(62, " External Price * ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "mat-form-field", 6)(64, "mat-label");
    \u0275\u0275text(65, "e.g. $990.94");
    \u0275\u0275elementEnd();
    \u0275\u0275element(66, "input", 18);
    \u0275\u0275elementStart(67, "mat-error");
    \u0275\u0275text(68, "Price is required");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(69, "label", 5);
    \u0275\u0275text(70, " Refund Lead Time (days) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "mat-form-field", 6)(72, "mat-label");
    \u0275\u0275text(73, "e.g. 7");
    \u0275\u0275elementEnd();
    \u0275\u0275element(74, "input", 19);
    \u0275\u0275elementStart(75, "mat-hint");
    \u0275\u0275text(76, " Days before event date when refund cutoff applies ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "label", 5);
    \u0275\u0275text(78, "Icon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "mat-form-field", 6)(80, "mat-label");
    \u0275\u0275text(81, "e.g. groups, school, meeting_room");
    \u0275\u0275elementEnd();
    \u0275\u0275element(82, "input", 20);
    \u0275\u0275elementStart(83, "mat-hint");
    \u0275\u0275text(84, " Use underscores, e.g. meeting_room not meeting room ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(85, "footer", 21)(86, "a", 22);
    \u0275\u0275text(87, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "button", 23);
    \u0275\u0275listener("click", function ServiceFormComponent_Template_button_click_88_listener() {
      return ctx.save();
    });
    \u0275\u0275text(89);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx.is_edit() ? "Edit Service" : "Add Service", " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c03));
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(79);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c03));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx.is_edit() ? "Update" : "Create", " ");
  }
}, dependencies: [
  CommonModule,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NumberValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  MatFormFieldModule,
  MatFormField,
  MatLabel,
  MatHint,
  MatError,
  MatInputModule,
  MatInput,
  MatSelectModule,
  MatSelect,
  MatOption,
  MatRippleModule,
  MatRipple,
  RouterModule,
  RouterLink,
  IconComponent
], encapsulation: 2 });
var ServiceFormComponent = _ServiceFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceFormComponent, [{
    type: Component,
    args: [{
      selector: "service-form",
      template: `
        <div class="bg-base-100 absolute inset-0 overflow-auto">
            <header
                class="bg-base-200 sticky top-0 z-10 mx-auto my-2 flex w-full max-w-[640px] items-center justify-between rounded px-4 py-2"
            >
                <h2 class="text-xl font-medium">
                    {{ is_edit() ? 'Edit Service' : 'Add Service' }}
                </h2>
                <a
                    icon
                    matRipple
                    [routerLink]="['/services', 'packages']"
                    aria-label="Close form"
                    class="flex h-10 w-10 items-center justify-center rounded-full"
                >
                    <icon>close</icon>
                </a>
            </header>

            <form
                class="mx-auto my-2 flex w-full max-w-[640px] flex-col gap-1 px-4 pb-20"
                [formGroup]="form"
            >
                <label class="text-sm font-medium">Name *</label>
                <mat-form-field appearance="outline" class="w-full">
                    <mat-label>Service name</mat-label>
                    <input
                        matInput
                        formControlName="name"
                        placeholder="Service name"
                    />
                    <mat-error>Name is required</mat-error>
                </mat-form-field>

                <label class="text-sm font-medium">Category *</label>
                <mat-form-field appearance="outline" class="w-full">
                    <mat-label>Select category</mat-label>
                    <mat-select
                        formControlName="category"
                        placeholder="Select category"
                    >
                        <mat-option value="package">
                            Event Package
                        </mat-option>
                        <mat-option value="alacarte">A La Carte</mat-option>
                        <mat-option value="addon">AV Add-on</mat-option>
                        <mat-option value="space">Space / Venue</mat-option>
                    </mat-select>
                    <mat-error>Category is required</mat-error>
                </mat-form-field>

                <label class="text-sm font-medium">Space / Venue</label>
                <mat-form-field appearance="outline" class="w-full">
                    <mat-label>e.g. Auditorium and Lobby</mat-label>
                    <input
                        matInput
                        formControlName="space"
                        placeholder="e.g. Auditorium and Lobby"
                    />
                </mat-form-field>

                <label class="text-sm font-medium">Duration</label>
                <mat-form-field appearance="outline" class="w-full">
                    <mat-label>e.g. Up to 4 hours</mat-label>
                    <input
                        matInput
                        formControlName="duration"
                        placeholder="e.g. Up to 4 hours"
                    />
                </mat-form-field>

                <label class="text-sm font-medium">Description</label>
                <mat-form-field appearance="outline" class="w-full">
                    <mat-label>Service description</mat-label>
                    <textarea
                        matInput
                        formControlName="description"
                        placeholder="Service description"
                        rows="3"
                    ></textarea>
                </mat-form-field>

                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="text-sm font-medium">
                            Internal Price (UCLA) *
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-label>e.g. $719</mat-label>
                            <input
                                matInput
                                formControlName="internal_price"
                                placeholder="e.g. $719"
                            />
                            <mat-error>Price is required</mat-error>
                        </mat-form-field>
                    </div>
                    <div>
                        <label class="text-sm font-medium">
                            External Price *
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-label>e.g. $990.94</mat-label>
                            <input
                                matInput
                                formControlName="external_price"
                                placeholder="e.g. $990.94"
                            />
                            <mat-error>Price is required</mat-error>
                        </mat-form-field>
                    </div>
                </div>

                <label class="text-sm font-medium">
                    Refund Lead Time (days)
                </label>
                <mat-form-field appearance="outline" class="w-full">
                    <mat-label>e.g. 7</mat-label>
                    <input
                        matInput
                        type="number"
                        formControlName="refund_lead_days"
                        placeholder="e.g. 7"
                    />
                    <mat-hint>
                        Days before event date when refund cutoff applies
                    </mat-hint>
                </mat-form-field>

                <label class="text-sm font-medium">Icon</label>
                <mat-form-field appearance="outline" class="w-full">
                    <mat-label>e.g. groups, school, meeting_room</mat-label>
                    <input
                        matInput
                        formControlName="icon"
                        placeholder="e.g. groups, school, meeting_room"
                    />
                    <mat-hint>
                        Use underscores, e.g. meeting_room not meeting room
                    </mat-hint>
                </mat-form-field>
            </form>

            <footer
                class="bg-base-200 fixed bottom-0 left-1/2 z-10 mx-auto my-2 flex w-full max-w-[640px] -translate-x-1/2 items-center justify-end gap-2 rounded px-4 py-2"
            >
                <a
                    matRipple
                    [routerLink]="['/services', 'packages']"
                    class="bg-base-300 hover:bg-base-content/20 rounded px-6 py-2 text-sm font-medium"
                >
                    Cancel
                </a>
                <button
                    matRipple
                    class="bg-primary text-primary-content rounded px-6 py-2 text-sm font-medium"
                    (click)="save()"
                >
                    {{ is_edit() ? 'Update' : 'Create' }}
                </button>
            </footer>
        </div>
    `,
      imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatRippleModule,
        RouterModule,
        IconComponent
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServiceFormComponent, { className: "ServiceFormComponent", filePath: "apps/concierge/src/app/services/service-form.component.ts", lineNumber: 195 });
})();

// apps/concierge/src/app/services/services.module.ts
var routes = [
  {
    path: "",
    component: ServicesComponent,
    children: [
      { path: "packages", component: ServicesPackagesComponent },
      { path: "spaces", component: ServicesSpacesComponent },
      { path: "additional", component: ServicesAdditionalComponent },
      { path: "form", component: ServiceFormComponent },
      { path: "form/:id", component: ServiceFormComponent },
      { path: "**", redirectTo: "packages" }
    ]
  }
];
var _ServicesModule = class _ServicesModule {
};
_ServicesModule.\u0275fac = function ServicesModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ServicesModule)();
};
_ServicesModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ServicesModule });
_ServicesModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  ServicesComponent,
  ServicesPackagesComponent,
  ServicesSpacesComponent,
  ServicesAdditionalComponent,
  ServiceFormComponent,
  RouterModule.forChild(routes)
] });
var ServicesModule = _ServicesModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServicesModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        ServicesComponent,
        ServicesPackagesComponent,
        ServicesSpacesComponent,
        ServicesAdditionalComponent,
        ServiceFormComponent,
        RouterModule.forChild(routes)
      ]
    }]
  }], null, null);
})();
export {
  ServicesModule
};
//# sourceMappingURL=services.module-JDTP6DL7.js.map
