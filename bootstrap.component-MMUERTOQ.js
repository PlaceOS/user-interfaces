import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger,
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-WT4BWV7J.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel,
  MatSuffix
} from "./chunk-D3FLHK5D.js";
import {
  MatOption
} from "./chunk-G2XWN7US.js";
import "./chunk-F6TIV3U5.js";
import {
  TranslatePipe
} from "./chunk-2ACANVNU.js";
import {
  OrganisationService,
  Space,
  VERSION
} from "./chunk-V35SNJ6C.js";
import {
  AsyncHandler,
  Sa
} from "./chunk-NZWA6BRH.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-INGPUCP7.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  getNativeSystemId,
  syncNativeManagedConfig
} from "./chunk-FKHN7L5A.js";
import "./chunk-JOAYWECQ.js";
import "./chunk-MF56HOWP.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-MQ5HRBFJ.js";
import "./chunk-P3JO7KVP.js";
import "./chunk-HIXE6JIY.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  DatePipe,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-JQIZG7UA.js";
import "./chunk-SZBWVRCN.js";

// apps/booking-panel/src/app/bootstrap.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function BootstrapComponent_Conditional_11_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 13);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 32);
  }
}
function BootstrapComponent_Conditional_11_For_13_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r3.name, " ");
  }
}
function BootstrapComponent_Conditional_11_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14)(1, "div", 17)(2, "div", 18)(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, BootstrapComponent_Conditional_11_For_13_Conditional_5_Template, 2, 1, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 20);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    \u0275\u0275property("value", option_r3.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", option_r3.display_name || option_r3.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(option_r3.display_name && option_r3.display_name !== option_r3.name ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", option_r3.id, " ");
  }
}
function BootstrapComponent_Conditional_11_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.BOOTSTRAP_INPUT_PLACEHOLDER"), " ");
  }
}
function BootstrapComponent_Conditional_11_Template(rf, ctx) {
  var _a, _b;
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 11)(4, "mat-label");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 12);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function BootstrapComponent_Conditional_11_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.system_id, $event) || (ctx_r1.system_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(9, BootstrapComponent_Conditional_11_Conditional_9_Template, 1, 1, "mat-spinner", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-autocomplete", null, 0);
    \u0275\u0275repeaterCreate(12, BootstrapComponent_Conditional_11_For_13_Template, 8, 4, "mat-option", 14, _forTrack0);
    \u0275\u0275conditionalCreate(14, BootstrapComponent_Conditional_11_Conditional_14_Template, 3, 3, "mat-option", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 16);
    \u0275\u0275listener("click", function BootstrapComponent_Conditional_11_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.bootstrap());
    });
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const auto_r4 = \u0275\u0275reference(11);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 9, "COMMON.BOOTSTRAP_DESCRIPTION"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 11, "COMMON.BOOTSTRAP_LABEL"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.system_id);
    \u0275\u0275property("matAutocomplete", auto_r4)("placeholder", \u0275\u0275pipeBind1(8, 13, "COMMON.BOOTSTRAP_LABEL"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.loading() === "search" ? 9 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.space_list());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((_a = ctx_r1.system_id()) == null ? void 0 : _a.length) < 2 && !((_b = ctx_r1.space_list()) == null ? void 0 : _b.length) ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.system_id());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 15, "COMMON.BOOTSTRAP_SUBMIT"), " ");
  }
}
function BootstrapComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "mat-spinner", 21);
    \u0275\u0275elementStart(2, "div", 22);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "COMMON.BOOTSTRAP_LOADING"), " ");
  }
}
var _BootstrapComponent = class _BootstrapComponent extends AsyncHandler {
  constructor() {
    super();
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._org = inject(OrganisationService);
    this.version = VERSION;
    this.loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.system_id = signal(
      "",
      ...ngDevMode ? [{ debugName: "system_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.space_list = signal(
      [],
      ...ngDevMode ? [{ debugName: "space_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._event = false;
    this._search_id = 0;
    this.bootstrap = () => this.configure(this.system_id());
    this.clearBootstrap = () => localStorage.removeItem("PLACEOS.BOOKINGS.system");
    effect(() => {
      const search = this.system_id();
      if (!this._org.initialised())
        return;
      const search_id = ++this._search_id;
      this.timeout("system-search", async () => {
        this.loading.set("search");
        const results = search.length < 2 ? { data: [] } : await Sa({
          q: search,
          limit: 20,
          fields: [
            "id",
            "name",
            "display_name",
            "email"
          ].join(","),
          zone_id: this._org.organisation.id
        });
        if (search_id !== this._search_id)
          return;
        this.space_list.set(results.data.map((item) => new Space(item)));
        this.loading.set("");
      }, 300);
    });
  }
  async ngOnInit() {
    const params = this._route.snapshot.queryParamMap;
    if (params.has("clear") && !!params.get("clear")) {
      this.clearBootstrap();
    }
    if (params.has("event"))
      this._event = true;
    if (params.has("system_id") || params.has("sys_id")) {
      this.system_id.set(params.get("system_id") || params.get("sys_id"));
      this.bootstrap();
    }
    this.checkBootstrapped();
  }
  /**
   * Check if the application has previously been bootstrapped
   */
  async checkBootstrapped() {
    this.loading.set("Checking");
    await syncNativeManagedConfig();
    if (localStorage) {
      const system_id = localStorage.getItem("PLACEOS.BOOKINGS.system");
      this._event = this._event || localStorage.getItem("PLACEOS.Bookings.event") === "true";
      const mdm_system_id = getNativeSystemId();
      if (mdm_system_id && mdm_system_id !== system_id) {
        this.system_id.set(mdm_system_id);
        return this.configure(mdm_system_id);
      }
      if (system_id) {
        this._router.navigate([this._event ? "events" : "panel", system_id], {
          queryParamsHandling: "preserve"
        });
        return;
      }
    }
    this.loading.set("");
  }
  /**
   * Save the bootstrapped ID and redirect to the panel for that ID
   * @param system_id System to bootstrap
   */
  configure(system_id) {
    this.loading.set("Setup");
    if (localStorage) {
      localStorage.setItem("PLACEOS.BOOKINGS.system", system_id);
      localStorage.setItem("trust", "true");
      localStorage.setItem("fixed_device", "true");
      if (this._event) {
        localStorage.setItem("PLACEOS.Bookings.event", "true");
      }
    }
    this._router.navigate([this._event ? "events" : "panel", system_id], {
      queryParamsHandling: "preserve"
    });
    this.loading.set("");
  }
};
_BootstrapComponent.\u0275fac = function BootstrapComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BootstrapComponent)();
};
_BootstrapComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BootstrapComponent, selectors: [["", "app-bootstrap", ""]], features: [\u0275\u0275InheritDefinitionFeature], decls: 22, vars: 19, consts: [["auto", "matAutocomplete"], [1, "bg-base-200", "absolute", "inset-0", "flex", "flex-col", "items-center", "p-3"], ["form", "", 1, "bg-base-100", "border-base-300", "flex", "w-120", "max-w-[calc(100vw-2rem)]", "flex-col", "items-center", "overflow-hidden", "rounded-sm", "border", "shadow-md"], [1, "bg-secondary", "text-secondary-content", "flex", "w-full", "items-center", "justify-between", "px-4", "py-3", "text-xl", "font-medium"], [1, "relative", "overflow-hidden", "rounded-sm", "px-2", "py-1"], [1, "bg-base-100", "absolute", "inset-0", "z-0", "opacity-10"], [1, "relative", "z-10", "font-mono", "text-sm", "uppercase"], ["load", "", 1, "my-16", "flex", "flex-col", "items-center"], [1, "absolute", "right-0", "bottom-0", "z-10", "p-2", "text-right"], [1, "text-xs", "opacity-40"], [1, "description", "py-4"], ["appearance", "outline"], ["matInput", "", 3, "ngModelChange", "ngModel", "matAutocomplete", "placeholder"], ["matSuffix", "", 3, "diameter"], [3, "value"], [1, "pointer-events-none", "opacity-60"], ["btn", "", "matRipple", "", 3, "click", "disabled"], [1, "flex", "w-full", "items-center", "space-x-4", "leading-tight"], [1, "flex", "flex-1", "flex-col"], [1, "text-xs", "opacity-30"], [1, "bg-base-200", "rounded-sm", "px-2", "py-1", "font-mono", "text-[0.625rem]"], [3, "diameter"], [1, "m-4"]], template: function BootstrapComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "header", 3)(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 4);
    \u0275\u0275element(7, "div", 5);
    \u0275\u0275elementStart(8, "div", 6);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(11, BootstrapComponent_Conditional_11_Template, 18, 17)(12, BootstrapComponent_Conditional_12_Template, 5, 4, "div", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 8)(14, "div", 9);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 9);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275pipe(20, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(21, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 7, "APP.BOOKING_PANEL.BOOTSTRAP_TITLE"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 9, "COMMON.BOOTSTRAP_SETUP"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading() || ctx.loading() === "search" ? 11 : 12);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(16, 11, "COMMON.CONTROLS_VERSION"), ": ", ctx.version.hash, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(19, 13, ctx.version.time, "longDate"), " (", \u0275\u0275pipeBind2(20, 16, ctx.version.time, "shortTime"), ") ");
  }
}, dependencies: [
  CommonModule,
  MatRippleModule,
  MatRipple,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  MatAutocompleteModule,
  MatAutocomplete,
  MatOption,
  MatAutocompleteTrigger,
  MatFormFieldModule,
  MatFormField,
  MatLabel,
  MatSuffix,
  MatInputModule,
  MatInput,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  DatePipe,
  TranslatePipe
], styles: ["\nmat-form-field[_ngcontent-%COMP%] {\n  width: calc(100% - 2rem);\n}\nbutton[_ngcontent-%COMP%] {\n  width: 8rem;\n  margin: 0.5rem;\n  margin-top: 0;\n}\n/*# sourceMappingURL=bootstrap.component.css.map */"], changeDetection: 1 });
var BootstrapComponent = _BootstrapComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BootstrapComponent, [{
    type: Component,
    args: [{ selector: "[app-bootstrap]", template: `
        <div
            class="bg-base-200 absolute inset-0 flex flex-col items-center p-3"
        >
            <div
                form
                class="bg-base-100 border-base-300 flex w-120 max-w-[calc(100vw-2rem)] flex-col items-center overflow-hidden rounded-sm border shadow-md"
            >
                <header
                    class="bg-secondary text-secondary-content flex w-full items-center justify-between px-4 py-3 text-xl font-medium"
                >
                    <div>
                        {{ 'APP.BOOKING_PANEL.BOOTSTRAP_TITLE' | translate }}
                    </div>
                    <div class="relative overflow-hidden rounded-sm px-2 py-1">
                        <div
                            class="bg-base-100 absolute inset-0 z-0 opacity-10"
                        ></div>
                        <div class="relative z-10 font-mono text-sm uppercase">
                            {{ 'COMMON.BOOTSTRAP_SETUP' | translate }}
                        </div>
                    </div>
                </header>
                @if (!loading() || loading() === 'search') {
                    <p class="description py-4">
                        {{ 'COMMON.BOOTSTRAP_DESCRIPTION' | translate }}
                    </p>
                    <mat-form-field appearance="outline">
                        <mat-label>{{
                            'COMMON.BOOTSTRAP_LABEL' | translate
                        }}</mat-label>
                        <input
                            matInput
                            [(ngModel)]="system_id"
                            [matAutocomplete]="auto"
                            [placeholder]="'COMMON.BOOTSTRAP_LABEL' | translate"
                        />
                        @if (loading() === 'search') {
                            <mat-spinner
                                [diameter]="32"
                                matSuffix
                            ></mat-spinner>
                        }
                    </mat-form-field>
                    <mat-autocomplete #auto="matAutocomplete">
                        @for (option of space_list(); track option.id) {
                            <mat-option [value]="option.id">
                                <div
                                    class="flex w-full items-center space-x-4 leading-tight"
                                >
                                    <div class="flex flex-1 flex-col">
                                        <div>
                                            {{
                                                option.display_name ||
                                                    option.name
                                            }}
                                        </div>
                                        @if (
                                            option.display_name &&
                                            option.display_name !== option.name
                                        ) {
                                            <div class="text-xs opacity-30">
                                                {{ option.name }}
                                            </div>
                                        }
                                    </div>
                                    <div
                                        class="bg-base-200 rounded-sm px-2 py-1 font-mono text-[0.625rem]"
                                    >
                                        {{ option.id }}
                                    </div>
                                </div>
                            </mat-option>
                        }
                        @if (system_id()?.length < 2 && !space_list()?.length) {
                            <mat-option class="pointer-events-none opacity-60">
                                {{
                                    'COMMON.BOOTSTRAP_INPUT_PLACEHOLDER'
                                        | translate
                                }}
                            </mat-option>
                        }
                    </mat-autocomplete>
                    <button
                        btn
                        matRipple
                        [disabled]="!system_id()"
                        (click)="bootstrap()"
                    >
                        {{ 'COMMON.BOOTSTRAP_SUBMIT' | translate }}
                    </button>
                } @else {
                    <div load class="my-16 flex flex-col items-center">
                        <mat-spinner [diameter]="32"></mat-spinner>
                        <div class="m-4">
                            {{ 'COMMON.BOOTSTRAP_LOADING' | translate }}
                        </div>
                    </div>
                }
            </div>
            <div class="absolute right-0 bottom-0 z-10 p-2 text-right">
                <div class="text-xs opacity-40">
                    {{ 'COMMON.CONTROLS_VERSION' | translate }}:
                    {{ version.hash }}
                </div>
                <div class="text-xs opacity-40">
                    {{ version.time | date: 'longDate' }}
                    ({{ version.time | date: 'shortTime' }})
                </div>
            </div>
            <div></div>
        </div>
    `, changeDetection: ChangeDetectionStrategy.Eager, imports: [
      CommonModule,
      MatRippleModule,
      TranslatePipe,
      MatProgressSpinnerModule,
      MatAutocompleteModule,
      MatFormFieldModule,
      MatInputModule,
      FormsModule
    ], styles: ["/* angular:styles/component:css;83ba1259b43fec112b8e24077d6edd40b53136cb09baf5aece8e24aaf6d4c48a;/home/runner/work/user-interfaces/user-interfaces/apps/booking-panel/src/app/bootstrap.component.ts */\nmat-form-field {\n  width: calc(100% - 2rem);\n}\nbutton {\n  width: 8rem;\n  margin: 0.5rem;\n  margin-top: 0;\n}\n/*# sourceMappingURL=bootstrap.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BootstrapComponent, { className: "BootstrapComponent", filePath: "apps/booking-panel/src/app/bootstrap.component.ts", lineNumber: 170 });
})();
export {
  BootstrapComponent
};
//# debugId=207e1cc1-0a86-58b5-9160-037b1ea73ddb
//# sourceMappingURL=bootstrap.component-MMUERTOQ.js.map
