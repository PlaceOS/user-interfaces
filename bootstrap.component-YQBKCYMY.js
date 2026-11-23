import {
  generateQRCode
} from "./chunk-U4IEQFFG.js";
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger,
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-V7ZB2DHD.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel,
  MatSuffix
} from "./chunk-LD3NN2QZ.js";
import {
  MatOption
} from "./chunk-XPXIQO3T.js";
import {
  BOOKING_STORE_KEY,
  EVENT_KEY,
  RemoteSetupService
} from "./chunk-DOBETA3P.js";
import {
  AnnounceDirective
} from "./chunk-YURYNXGC.js";
import {
  TranslatePipe
} from "./chunk-RALLFUQW.js";
import "./chunk-PGER6XBG.js";
import {
  OrganisationService
} from "./chunk-JEQDCZX2.js";
import {
  Ra,
  Space,
  VERSION
} from "./chunk-D2BSAKWQ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-JNAOAAEL.js";
import {
  getNativeSystemId,
  syncNativeManagedConfig
} from "./chunk-S7SHZHBQ.js";
import "./chunk-4GF4OVTV.js";
import "./chunk-LQVY4RND.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-SUHUWEAC.js";
import "./chunk-BRJMZ2D4.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-QMDBR532.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DestroyRef,
  Input,
  Output,
  RuntimeError,
  assertInInjectionContext,
  assertNotInReactiveContext,
  computed,
  debounced,
  effect,
  inject,
  input,
  output,
  resource,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
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
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-HD2DJ5EX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-MRTC5IFT.js";

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
/**
 * @license Angular v22.1.5
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
function toSignal(source, options) {
  var _a;
  typeof ngDevMode !== "undefined" && ngDevMode && assertNotInReactiveContext(toSignal, "Invoking `toSignal` causes new subscriptions every time. Consider moving `toSignal` outside of the reactive context and read the signal value where needed.");
  const requiresCleanup = !(options == null ? void 0 : options.manualCleanup);
  if (ngDevMode && requiresCleanup && !(options == null ? void 0 : options.injector)) {
    assertInInjectionContext(toSignal);
  }
  const cleanupRef = requiresCleanup ? ((_a = options == null ? void 0 : options.injector) == null ? void 0 : _a.get(DestroyRef)) ?? inject(DestroyRef) : null;
  const equal = makeToSignalEqual(options == null ? void 0 : options.equal);
  let state;
  if (options == null ? void 0 : options.requireSync) {
    state = signal({
      kind: 0
    }, __spreadValues({
      equal
    }, ngDevMode ? createDebugNameObject(options == null ? void 0 : options.debugName, "state") : void 0));
  } else {
    state = signal({
      kind: 1,
      value: options == null ? void 0 : options.initialValue
    }, __spreadValues({
      equal
    }, ngDevMode ? createDebugNameObject(options == null ? void 0 : options.debugName, "state") : void 0));
  }
  let destroyUnregisterFn;
  const sub = source.subscribe({
    next: (value) => state.set({
      kind: 1,
      value
    }),
    error: (error) => {
      state.set({
        kind: 2,
        error
      });
      destroyUnregisterFn == null ? void 0 : destroyUnregisterFn();
    },
    complete: () => {
      destroyUnregisterFn == null ? void 0 : destroyUnregisterFn();
    }
  });
  if ((options == null ? void 0 : options.requireSync) && state().kind === 0) {
    throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
  }
  destroyUnregisterFn = cleanupRef == null ? void 0 : cleanupRef.onDestroy(sub.unsubscribe.bind(sub));
  return computed(() => {
    const current = state();
    switch (current.kind) {
      case 1:
        return current.value;
      case 2:
        throw current.error;
      case 0:
        throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
    }
  }, __spreadValues({
    equal: options == null ? void 0 : options.equal
  }, ngDevMode ? createDebugNameObject(options == null ? void 0 : options.debugName, "source") : void 0));
}
function makeToSignalEqual(userEquality = Object.is) {
  return (a, b) => a.kind === 1 && b.kind === 1 && userEquality(a.value, b.value);
}
function createDebugNameObject(toSignalDebugName, internalSignalDebugName) {
  return {
    debugName: `toSignal${toSignalDebugName ? "#" + toSignalDebugName : ""}.${internalSignalDebugName}`
  };
}

// libs/components/src/lib/remote-setup-qr.component.ts
function RemoteSetupQrComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 0);
    \u0275\u0275domElement(1, "img", 1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275domElementStart(3, "div", 2)(4, "h2", 3);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "p", 4);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "p", 5);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275domElementStart(13, "span", 6);
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275domProperty("src", ctx, \u0275\u0275sanitizeUrl)("alt", \u0275\u0275pipeBind1(2, 6, "COMMON.REMOTE_SETUP_QR_ALT"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 8, "COMMON.REMOTE_SETUP_TITLE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 10, "COMMON.REMOTE_SETUP_SCAN"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 12, "COMMON.REMOTE_SETUP_DEVICE_ID"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.device_id);
  }
}
var _RemoteSetupQrComponent = class _RemoteSetupQrComponent {
  constructor() {
    this._setup = inject(RemoteSetupService);
    this.device_id = this._setup.device_id;
    this.qr_code = computed(
      () => this._setup.available() ? generateQRCode(this._setup.setup_url(), "#fff", "#000") : "",
      ...ngDevMode ? [{ debugName: "qr_code" }] : (
        /* istanbul ignore next */
        []
      )
    );
    inject(DestroyRef).onDestroy(this._setup.showSetupScreen());
  }
};
_RemoteSetupQrComponent.\u0275fac = function RemoteSetupQrComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RemoteSetupQrComponent)();
};
_RemoteSetupQrComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RemoteSetupQrComponent, selectors: [["remote-setup-qr"]], decls: 1, vars: 1, consts: [[1, "bg-base-100", "border-base-300", "flex", "flex-col", "items-center", "gap-4", "rounded-sm", "border", "p-4", "text-center", "shadow-md", "portrait:w-120", "portrait:max-w-[calc(100vw-2rem)]", "portrait:sm:flex-row", "portrait:sm:text-left", "landscape:w-64"], [1, "size-40", "shrink-0", "rounded-sm", "bg-white", "p-1", 3, "src", "alt"], [1, "flex", "min-w-0", "flex-col", "gap-2"], [1, "font-medium"], [1, "text-sm", "opacity-70"], [1, "text-sm"], ["device-id", "", 1, "bg-base-200", "rounded-sm", "px-2", "py-1", "font-mono", "select-all"]], template: function RemoteSetupQrComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, RemoteSetupQrComponent_Conditional_0_Template, 15, 14, "section", 0);
  }
  if (rf & 2) {
    let tmp_0_0;
    \u0275\u0275conditional((tmp_0_0 = ctx.qr_code()) ? 0 : -1, tmp_0_0);
  }
}, dependencies: [TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: contents;\n}\n/*# sourceMappingURL=remote-setup-qr.component.css.map */"] });
var RemoteSetupQrComponent = _RemoteSetupQrComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RemoteSetupQrComponent, [{
    type: Component,
    args: [{ selector: "remote-setup-qr", template: `
        @if (qr_code(); as code) {
            <section
                class="bg-base-100 border-base-300 flex flex-col items-center gap-4 rounded-sm border p-4 text-center shadow-md portrait:w-120 portrait:max-w-[calc(100vw-2rem)] portrait:sm:flex-row portrait:sm:text-left landscape:w-64"
            >
                <img
                    class="size-40 shrink-0 rounded-sm bg-white p-1"
                    [src]="code"
                    [alt]="'COMMON.REMOTE_SETUP_QR_ALT' | translate"
                />
                <div class="flex min-w-0 flex-col gap-2">
                    <h2 class="font-medium">
                        {{ 'COMMON.REMOTE_SETUP_TITLE' | translate }}
                    </h2>
                    <p class="text-sm opacity-70">
                        {{ 'COMMON.REMOTE_SETUP_SCAN' | translate }}
                    </p>
                    <p class="text-sm">
                        {{ 'COMMON.REMOTE_SETUP_DEVICE_ID' | translate }}:
                        <span
                            device-id
                            class="bg-base-200 rounded-sm px-2 py-1 font-mono select-all"
                            >{{ device_id }}</span
                        >
                    </p>
                </div>
            </section>
        }
    `, imports: [TranslatePipe], styles: ["/* angular:styles/component:css;c56154a65d2f25aeb30f9e3d4fddc8d29a75b1cfe211ec52ebd65b8c2849fb61;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/remote-setup-qr.component.ts */\n:host {\n  display: contents;\n}\n/*# sourceMappingURL=remote-setup-qr.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RemoteSetupQrComponent, { className: "RemoteSetupQrComponent", filePath: "libs/components/src/lib/remote-setup-qr.component.ts", lineNumber: 61 });
})();

// libs/components/src/lib/system-bootstrap.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function SystemBootstrapComponent_Conditional_11_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 13);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 32);
  }
}
function SystemBootstrapComponent_Conditional_11_For_13_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r3.name, " ");
  }
}
function SystemBootstrapComponent_Conditional_11_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14)(1, "div", 17)(2, "div", 18)(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, SystemBootstrapComponent_Conditional_11_For_13_Conditional_5_Template, 2, 1, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 19);
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
function SystemBootstrapComponent_Conditional_11_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx === "error" ? "COMMON.LOAD_ERROR" : "COMMON.SEARCH_EMPTY"), " ");
  }
}
function SystemBootstrapComponent_Conditional_11_Conditional_15_Template(rf, ctx) {
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
function SystemBootstrapComponent_Conditional_11_Template(rf, ctx) {
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
    \u0275\u0275twoWayListener("ngModelChange", function SystemBootstrapComponent_Conditional_11_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.system_id, $event) || (ctx_r1.system_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(9, SystemBootstrapComponent_Conditional_11_Conditional_9_Template, 1, 1, "mat-spinner", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-autocomplete", null, 0);
    \u0275\u0275repeaterCreate(12, SystemBootstrapComponent_Conditional_11_For_13_Template, 8, 4, "mat-option", 14, _forTrack0);
    \u0275\u0275conditionalCreate(14, SystemBootstrapComponent_Conditional_11_Conditional_14_Template, 3, 3, "mat-option", 15);
    \u0275\u0275conditionalCreate(15, SystemBootstrapComponent_Conditional_11_Conditional_15_Template, 3, 3, "mat-option", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 16);
    \u0275\u0275listener("click", function SystemBootstrapComponent_Conditional_11_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.bootstrap());
    });
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    const auto_r4 = \u0275\u0275reference(11);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 10, ctx_r1.description()), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 12, "COMMON.BOOTSTRAP_LABEL"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.system_id);
    \u0275\u0275property("matAutocomplete", auto_r4)("placeholder", \u0275\u0275pipeBind1(8, 14, "COMMON.BOOTSTRAP_LABEL"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.loading() === "search" ? 9 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.space_list());
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_10_0 = ctx_r1.search_state()) ? 14 : -1, tmp_10_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.system_id().length < 2 && !ctx_r1.space_list().length ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.system_id());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 16, ctx_r1.submit_label()), " ");
  }
}
function SystemBootstrapComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "mat-spinner", 20);
    \u0275\u0275elementStart(2, "div", 21);
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
function SystemBootstrapComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "remote-setup-qr");
  }
}
var _SystemBootstrapComponent = class _SystemBootstrapComponent {
  constructor() {
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._org = inject(OrganisationService);
    this._query_params = toSignal(this._route.queryParamMap, {
      initialValue: this._route.snapshot.queryParamMap
    });
    this.store_key = input.required(
      ...ngDevMode ? [{ debugName: "store_key" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.heading = input.required(
      ...ngDevMode ? [{ debugName: "heading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.description = input(
      "COMMON.BOOTSTRAP_DESCRIPTION",
      ...ngDevMode ? [{ debugName: "description" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.submit_label = input(
      "COMMON.BOOTSTRAP_SUBMIT",
      ...ngDevMode ? [{ debugName: "submit_label" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.system_route = input.required(
      ...ngDevMode ? [{ debugName: "system_route" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.configured = output();
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
    this._debounced_search = debounced(this.system_id, 300);
    this._space_list = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_space_list" } : (
      /* istanbul ignore next */
      {}
    )), {
      // Wait for the organisation so the search is scoped to its zone
      params: () => this._org.initialised() ? this._debounced_search.value() : "",
      loader: async ({ params: search }) => {
        var _a;
        if (search.length < 2)
          return [];
        this.loading.set("search");
        try {
          const { data } = await Ra({
            q: search,
            limit: 20,
            fields: ["id", "name", "display_name", "email"].join(","),
            zone_id: (_a = this._org.organisation) == null ? void 0 : _a.id
          });
          return data.map(({ id, name, display_name, email }) => new Space({ id, name, display_name, email }));
        } finally {
          this.loading.set("");
        }
      }
    }));
    this.space_list = computed(
      () => this._space_list.hasValue() ? this._space_list.value() : [],
      ...ngDevMode ? [{ debugName: "space_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.search_state = computed(
      () => {
        if (!this._org.initialised())
          return "";
        if (this._debounced_search.value().length < 2)
          return "";
        if (this._space_list.error())
          return "error";
        if (this._space_list.isLoading() || this.space_list().length)
          return "";
        return "empty";
      },
      ...ngDevMode ? [{ debugName: "search_state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.bootstrap = () => this.configure(this.system_id());
    effect(() => {
      const params = this._query_params();
      if (params.has("clear") && !!params.get("clear")) {
        localStorage.removeItem(this.store_key());
      }
      const system_id = params.get("system_id") || params.get("sys_id");
      if (system_id) {
        this.system_id.set(system_id);
        this.configure(system_id);
      }
    });
  }
  ngOnInit() {
    this.checkBootstrapped();
  }
  /**
   * Go to the saved system, or to the MDM managed system if it differs
   */
  async checkBootstrapped() {
    if (this.system_id())
      return;
    this.loading.set("Checks");
    await syncNativeManagedConfig();
    if (this.system_id())
      return;
    const system_id = localStorage.getItem(this.store_key());
    const mdm_system_id = getNativeSystemId();
    if (mdm_system_id && mdm_system_id !== system_id) {
      this.system_id.set(mdm_system_id);
      return this.configure(mdm_system_id);
    }
    if (system_id) {
      this._router.navigate(this.system_route()(system_id), {
        queryParamsHandling: "preserve"
      });
      return;
    }
    this.loading.set("");
  }
  /** Save the system ID as a trusted fixed device and open its route */
  configure(system_id) {
    localStorage.setItem(this.store_key(), system_id);
    localStorage.setItem("trust", "true");
    localStorage.setItem("fixed_device", "true");
    this.configured.emit(system_id);
    this._router.navigate(this.system_route()(system_id), {
      queryParamsHandling: "preserve"
    });
  }
};
_SystemBootstrapComponent.\u0275fac = function SystemBootstrapComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SystemBootstrapComponent)();
};
_SystemBootstrapComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemBootstrapComponent, selectors: [["system-bootstrap"]], inputs: { store_key: [1, "store_key"], heading: [1, "heading"], description: [1, "description"], submit_label: [1, "submit_label"], system_route: [1, "system_route"] }, outputs: { configured: "configured" }, decls: 22, vars: 20, consts: [["auto", "matAutocomplete"], [1, "bg-base-200", "absolute", "inset-0", "flex", "flex-col", "items-center", "gap-3", "overflow-y-auto", "p-3", "landscape:flex-row", "landscape:flex-wrap", "landscape:items-start", "landscape:justify-center"], ["form", "", 1, "bg-base-100", "border-base-300", "flex", "w-120", "max-w-[calc(100vw-2rem)]", "flex-col", "items-center", "overflow-hidden", "rounded-sm", "border", "shadow-md"], [1, "bg-secondary", "text-secondary-content", "flex", "w-full", "items-center", "justify-between", "px-4", "py-3", "text-xl", "font-medium"], [1, "relative", "overflow-hidden", "rounded-sm", "px-2", "py-1"], [1, "bg-base-100", "absolute", "inset-0", "z-0", "opacity-10"], [1, "relative", "z-10", "font-mono", "text-sm", "uppercase"], ["load", "", 1, "my-16", "flex", "flex-col", "items-center"], [1, "absolute", "right-0", "bottom-0", "z-10", "p-2", "text-right"], [1, "text-xs", "opacity-70"], [1, "description", "py-4"], ["appearance", "outline"], ["matInput", "", 3, "ngModelChange", "ngModel", "matAutocomplete", "placeholder"], ["matSuffix", "", "aria-hidden", "true", 3, "diameter"], [3, "value"], ["disabled", "", 1, "pointer-events-none", "opacity-60"], ["btn", "", "matRipple", "", 3, "click", "disabled"], [1, "flex", "w-full", "items-center", "space-x-4", "leading-tight"], [1, "flex", "flex-1", "flex-col"], [1, "bg-base-200", "rounded-sm", "px-2", "py-1", "font-mono", "text-[0.625rem]"], ["aria-hidden", "true", 3, "diameter"], ["announce", "", 1, "m-4"]], template: function SystemBootstrapComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "header", 3)(3, "h1");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 4);
    \u0275\u0275element(7, "div", 5);
    \u0275\u0275elementStart(8, "div", 6);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(11, SystemBootstrapComponent_Conditional_11_Template, 19, 18)(12, SystemBootstrapComponent_Conditional_12_Template, 5, 4, "div", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, SystemBootstrapComponent_Conditional_13_Template, 1, 0, "remote-setup-qr");
    \u0275\u0275elementStart(14, "div", 8)(15, "div", 9);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 9);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "date");
    \u0275\u0275pipe(21, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 8, ctx.heading()));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 10, "COMMON.BOOTSTRAP_SETUP"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading() || ctx.loading() === "search" ? 11 : 12);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.loading() || ctx.loading() === "search" ? 13 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(17, 12, "COMMON.CONTROLS_VERSION"), ": ", ctx.version.hash, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(20, 14, ctx.version.time, "longDate"), " (", \u0275\u0275pipeBind2(21, 17, ctx.version.time, "shortTime"), ") ");
  }
}, dependencies: [
  CommonModule,
  AnnounceDirective,
  RemoteSetupQrComponent,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  MatRippleModule,
  MatRipple,
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
], styles: ["\nmat-form-field[_ngcontent-%COMP%] {\n  width: calc(100% - 2rem);\n}\nbutton[_ngcontent-%COMP%] {\n  width: 8rem;\n  margin: 0.5rem;\n  margin-top: 0;\n}\n/*# sourceMappingURL=system-bootstrap.component.css.map */"] });
var SystemBootstrapComponent = _SystemBootstrapComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemBootstrapComponent, [{
    type: Component,
    args: [{ selector: "system-bootstrap", template: `
        <div
            class="bg-base-200 absolute inset-0 flex flex-col items-center gap-3 overflow-y-auto p-3 landscape:flex-row landscape:flex-wrap landscape:items-start landscape:justify-center"
        >
            <div
                form
                class="bg-base-100 border-base-300 flex w-120 max-w-[calc(100vw-2rem)] flex-col items-center overflow-hidden rounded-sm border shadow-md"
            >
                <header
                    class="bg-secondary text-secondary-content flex w-full items-center justify-between px-4 py-3 text-xl font-medium"
                >
                    <h1>{{ heading() | translate }}</h1>
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
                        {{ description() | translate }}
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
                                aria-hidden="true"
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
                                            <div class="text-xs opacity-70">
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
                        @if (search_state(); as state) {
                            <mat-option
                                disabled
                                class="pointer-events-none opacity-60"
                            >
                                {{
                                    (state === 'error'
                                        ? 'COMMON.LOAD_ERROR'
                                        : 'COMMON.SEARCH_EMPTY'
                                    ) | translate
                                }}
                            </mat-option>
                        }
                        @if (system_id().length < 2 && !space_list().length) {
                            <mat-option
                                disabled
                                class="pointer-events-none opacity-60"
                            >
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
                        {{ submit_label() | translate }}
                    </button>
                } @else {
                    <div load class="my-16 flex flex-col items-center">
                        <mat-spinner
                            [diameter]="32"
                            aria-hidden="true"
                        ></mat-spinner>
                        <div class="m-4" announce>
                            {{ 'COMMON.BOOTSTRAP_LOADING' | translate }}
                        </div>
                    </div>
                }
            </div>
            @if (!loading() || loading() === 'search') {
                <remote-setup-qr />
            }
            <div class="absolute right-0 bottom-0 z-10 p-2 text-right">
                <div class="text-xs opacity-70">
                    {{ 'COMMON.CONTROLS_VERSION' | translate }}:
                    {{ version.hash }}
                </div>
                <div class="text-xs opacity-70">
                    {{ version.time | date: 'longDate' }}
                    ({{ version.time | date: 'shortTime' }})
                </div>
            </div>
        </div>
    `, imports: [
      CommonModule,
      TranslatePipe,
      AnnounceDirective,
      RemoteSetupQrComponent,
      MatProgressSpinnerModule,
      MatRippleModule,
      MatAutocompleteModule,
      MatFormFieldModule,
      MatInputModule,
      FormsModule
    ], styles: ["/* angular:styles/component:css;83ba1259b43fec112b8e24077d6edd40b53136cb09baf5aece8e24aaf6d4c48a;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/system-bootstrap.component.ts */\nmat-form-field {\n  width: calc(100% - 2rem);\n}\nbutton {\n  width: 8rem;\n  margin: 0.5rem;\n  margin-top: 0;\n}\n/*# sourceMappingURL=system-bootstrap.component.css.map */\n"] }]
  }], () => [], { store_key: [{ type: Input, args: [{ isSignal: true, alias: "store_key", required: true }] }], heading: [{ type: Input, args: [{ isSignal: true, alias: "heading", required: true }] }], description: [{ type: Input, args: [{ isSignal: true, alias: "description", required: false }] }], submit_label: [{ type: Input, args: [{ isSignal: true, alias: "submit_label", required: false }] }], system_route: [{ type: Input, args: [{ isSignal: true, alias: "system_route", required: true }] }], configured: [{ type: Output, args: ["configured"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemBootstrapComponent, { className: "SystemBootstrapComponent", filePath: "libs/components/src/lib/system-bootstrap.component.ts", lineNumber: 217 });
})();

// apps/booking-panel/src/app/bootstrap.component.ts
var _BootstrapComponent = class _BootstrapComponent {
  constructor() {
    this._route = inject(ActivatedRoute);
    this.store_key = BOOKING_STORE_KEY;
    this.systemRoute = (system_id) => [
      this.isEventPanel() ? "events" : "panel",
      system_id
    ];
  }
  /** Keep the events view for later loads when it is in use */
  saveEventFlag() {
    if (this.isEventPanel())
      localStorage.setItem(EVENT_KEY, "true");
  }
  isEventPanel() {
    return this._route.snapshot.queryParamMap.has("event") || localStorage.getItem(EVENT_KEY) === "true";
  }
};
_BootstrapComponent.\u0275fac = function BootstrapComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BootstrapComponent)();
};
_BootstrapComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BootstrapComponent, selectors: [["", "app-bootstrap", ""]], decls: 1, vars: 2, consts: [["heading", "APP.BOOKING_PANEL.BOOTSTRAP_TITLE", 3, "configured", "store_key", "system_route"]], template: function BootstrapComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "system-bootstrap", 0);
    \u0275\u0275listener("configured", function BootstrapComponent_Template_system_bootstrap_configured_0_listener() {
      return ctx.saveEventFlag();
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("store_key", ctx.store_key)("system_route", ctx.systemRoute);
  }
}, dependencies: [SystemBootstrapComponent], encapsulation: 2 });
var BootstrapComponent = _BootstrapComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BootstrapComponent, [{
    type: Component,
    args: [{
      selector: "[app-bootstrap]",
      template: `
        <system-bootstrap
            [store_key]="store_key"
            heading="APP.BOOKING_PANEL.BOOTSTRAP_TITLE"
            [system_route]="systemRoute"
            (configured)="saveEventFlag()"
        />
    `,
      imports: [SystemBootstrapComponent]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BootstrapComponent, { className: "BootstrapComponent", filePath: "apps/booking-panel/src/app/bootstrap.component.ts", lineNumber: 23 });
})();
export {
  BootstrapComponent
};
//# debugId=2aaa0654-2819-5977-9c30-6cb57edc995c
//# sourceMappingURL=bootstrap.component-YQBKCYMY.js.map
