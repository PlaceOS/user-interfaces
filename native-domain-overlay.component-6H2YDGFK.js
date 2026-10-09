import {
  MatInput,
  MatInputModule
} from "./chunk-Y5PDDP33.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatPrefix
} from "./chunk-VZJVJCF2.js";
import "./chunk-FZFED6D7.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  getNativeApiKey,
  getNativeDomain,
  getNativeEmail,
  lookupNativeDomainByEmail,
  normaliseNativeDomain,
  setNativeApiKey,
  setNativeDomain,
  setNativeEmail,
  ɵNgNoValidate
} from "./chunk-4RPLQMHU.js";
import "./chunk-PDL6SW7D.js";
import {
  IconComponent
} from "./chunk-DBUTAYQC.js";
import "./chunk-PDC5DY4R.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-CZKEECSS.js";
import "./chunk-4CHWKULB.js";
import {
  Component,
  Input,
  Output,
  effect,
  input,
  output,
  setClassMetadata,
  signal,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-WU2PTGBX.js";
import "./chunk-GOMI4DH3.js";

// libs/components/src/lib/native-domain-overlay.component.ts
function NativeDomainOverlayComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Enter the address of your PlaceOS server to connect this app. ");
  }
}
function NativeDomainOverlayComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Enter your work email to find your PlaceOS server and connect this app. ");
  }
}
function NativeDomainOverlayComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.error(), " ");
  }
}
function NativeDomainOverlayComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Settings provided by your administrator will be applied automatically in ", ctx_r0.auto_accept_in(), "s. ");
  }
}
function NativeDomainOverlayComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "label", 12);
    \u0275\u0275text(2, "Server Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 13)(4, "icon", 14);
    \u0275\u0275text(5, "dns");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function NativeDomainOverlayComponent_Conditional_11_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.server_address, $event) || (ctx_r0.server_address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 8)(8, "label", 16);
    \u0275\u0275text(9, "API Key (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-form-field", 13)(11, "icon", 14);
    \u0275\u0275text(12, "key");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function NativeDomainOverlayComponent_Conditional_11_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.api_key, $event) || (ctx_r0.api_key = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 18);
    \u0275\u0275text(15, " When set, the app authenticates with this key instead of asking you to sign in. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.server_address);
    \u0275\u0275property("disabled", ctx_r0.loading());
    \u0275\u0275control();
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.api_key);
    \u0275\u0275property("disabled", ctx_r0.loading());
    \u0275\u0275control();
  }
}
function NativeDomainOverlayComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "label", 19);
    \u0275\u0275text(2, "Work Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 13)(4, "icon", 14);
    \u0275\u0275text(5, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function NativeDomainOverlayComponent_Conditional_12_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.email, $event) || (ctx_r0.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.email);
    \u0275\u0275property("disabled", ctx_r0.loading());
    \u0275\u0275control();
  }
}
function NativeDomainOverlayComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Find my server using my work email ");
  }
}
function NativeDomainOverlayComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Enter a server address manually ");
  }
}
var AUTO_ACCEPT_SECONDS = 15;
var NativeDomainOverlayComponent = class _NativeDomainOverlayComponent {
  constructor() {
    this.serverError = input(
      "",
      ...ngDevMode ? [{ debugName: "serverError" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.autoAccept = input(
      false,
      ...ngDevMode ? [{ debugName: "autoAccept" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.domainSet = output();
    this.email = signal(
      getNativeEmail() ?? "",
      ...ngDevMode ? [{ debugName: "email" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.server_address = signal(
      getNativeDomain() ?? "",
      ...ngDevMode ? [{ debugName: "server_address" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.api_key = signal(
      getNativeApiKey() ?? "",
      ...ngDevMode ? [{ debugName: "api_key" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.manual_entry = signal(
      !!getNativeDomain(),
      ...ngDevMode ? [{ debugName: "manual_entry" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.error = signal(
      "",
      ...ngDevMode ? [{ debugName: "error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.auto_accept_in = signal(
      0,
      ...ngDevMode ? [{ debugName: "auto_accept_in" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._auto_accept_timer = null;
    effect(() => {
      const msg = this.serverError();
      if (msg) {
        this.error.set(msg);
        untracked(() => this.stopAutoAccept());
      }
    });
    effect(() => {
      if (this.autoAccept() && untracked(this.server_address)) {
        untracked(() => this.startAutoAccept());
      }
    });
  }
  ngOnDestroy() {
    this.stopAutoAccept();
  }
  /** Restart the inactivity countdown — any user activity delays it. */
  resetAutoAccept() {
    if (!this._auto_accept_timer)
      return;
    this.auto_accept_in.set(AUTO_ACCEPT_SECONDS);
  }
  startAutoAccept() {
    this.auto_accept_in.set(AUTO_ACCEPT_SECONDS);
    if (this._auto_accept_timer)
      return;
    this._auto_accept_timer = setInterval(() => {
      const remaining = this.auto_accept_in() - 1;
      this.auto_accept_in.set(remaining);
      if (remaining > 0)
        return;
      this.stopAutoAccept();
      this.submit();
    }, 1e3);
  }
  stopAutoAccept() {
    if (this._auto_accept_timer)
      clearInterval(this._auto_accept_timer);
    this._auto_accept_timer = null;
    this.auto_accept_in.set(0);
  }
  toggleManualEntry() {
    if (this.loading())
      return;
    this.manual_entry.update((manual) => !manual);
    this.error.set("");
  }
  async submit() {
    if (this.loading())
      return;
    this.stopAutoAccept();
    if (this.manual_entry())
      return this.submitManual();
    const raw = this.email().trim();
    if (!raw) {
      this.error.set("A work email is required.");
      return;
    }
    this.loading.set(true);
    this.error.set("");
    try {
      const domain = await lookupNativeDomainByEmail(raw);
      setNativeEmail(raw);
      setNativeDomain(domain);
      setNativeApiKey("");
      this.domainSet.emit(domain);
    } catch {
      this.error.set("Unable to find a server for this email address.");
    } finally {
      this.loading.set(false);
    }
  }
  submitManual() {
    const domain = normaliseNativeDomain(this.server_address());
    if (!domain) {
      this.error.set("A valid server address is required.");
      return;
    }
    this.error.set("");
    setNativeDomain(domain);
    setNativeApiKey(this.api_key());
    this.domainSet.emit(domain);
  }
  static {
    this.\u0275fac = function NativeDomainOverlayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NativeDomainOverlayComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NativeDomainOverlayComponent, selectors: [["native-domain-overlay"]], hostBindings: function NativeDomainOverlayComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("pointerdown", function NativeDomainOverlayComponent_pointerdown_HostBindingHandler() {
          return ctx.resetAutoAccept();
        }, \u0275\u0275resolveWindow)("keydown", function NativeDomainOverlayComponent_keydown_HostBindingHandler() {
          return ctx.resetAutoAccept();
        }, \u0275\u0275resolveWindow);
      }
    }, inputs: { serverError: [1, "serverError"], autoAccept: [1, "autoAccept"] }, outputs: { domainSet: "domainSet" }, decls: 19, vars: 8, consts: [[1, "bg-base-200", "pointer-events-auto", "fixed", "inset-0", "z-9999", "flex", "items-center", "justify-center", "p-4"], [1, "border-base-300", "bg-base-100", "flex", "w-full", "max-w-md", "flex-col", "rounded-sm", "border", "shadow-sm", 3, "ngSubmit"], [1, "bg-base-200", "m-2", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], [1, "flex", "flex-col", "space-y-4", "p-4"], [1, "text-sm", "opacity-60"], [1, "bg-error/10", "text-error", "rounded-sm", "px-3", "py-2", "text-xs"], [1, "bg-info/10", "text-info", "rounded-sm", "px-3", "py-2", "text-xs"], [1, "flex", "w-full", "flex-col"], ["type", "button", 1, "self-start", "text-sm", "underline", "opacity-60", 3, "click", "disabled"], [1, "bg-base-200", "m-2", "flex", "items-center", "justify-center", "space-x-2", "rounded-sm", "border-none", "p-2"], ["btn", "", "matRipple", "", "type", "submit", 1, "flex-1", 3, "disabled"], ["for", "server-address"], ["appearance", "outline", 1, "w-full"], ["matPrefix", ""], ["matInput", "", "name", "server-address", "placeholder", "placeos.company.com", "type", "text", "autocapitalize", "off", "autocomplete", "url", "spellcheck", "false", "required", "", 3, "ngModelChange", "ngModel", "disabled"], ["for", "api-key"], ["matInput", "", "name", "api-key", "placeholder", "Leave empty to sign in", "type", "password", "autocapitalize", "off", "autocomplete", "off", "spellcheck", "false", 3, "ngModelChange", "ngModel", "disabled"], [1, "text-xs", "opacity-60"], ["for", "email"], ["matInput", "", "name", "email", "placeholder", "name@company.com", "type", "email", "autocapitalize", "off", "autocomplete", "email", "spellcheck", "false", "required", "", 3, "ngModelChange", "ngModel", "disabled"]], template: function NativeDomainOverlayComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "form", 1);
        \u0275\u0275listener("ngSubmit", function NativeDomainOverlayComponent_Template_form_ngSubmit_1_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(2, "header", 2)(3, "h2", 3);
        \u0275\u0275text(4, "Connect to Server");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "main", 4)(6, "p", 5);
        \u0275\u0275conditionalCreate(7, NativeDomainOverlayComponent_Conditional_7_Template, 1, 0)(8, NativeDomainOverlayComponent_Conditional_8_Template, 1, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(9, NativeDomainOverlayComponent_Conditional_9_Template, 2, 1, "p", 6);
        \u0275\u0275conditionalCreate(10, NativeDomainOverlayComponent_Conditional_10_Template, 2, 1, "p", 7);
        \u0275\u0275conditionalCreate(11, NativeDomainOverlayComponent_Conditional_11_Template, 16, 4)(12, NativeDomainOverlayComponent_Conditional_12_Template, 7, 2, "div", 8);
        \u0275\u0275elementStart(13, "button", 9);
        \u0275\u0275listener("click", function NativeDomainOverlayComponent_Template_button_click_13_listener() {
          return ctx.toggleManualEntry();
        });
        \u0275\u0275conditionalCreate(14, NativeDomainOverlayComponent_Conditional_14_Template, 1, 0)(15, NativeDomainOverlayComponent_Conditional_15_Template, 1, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "footer", 10)(17, "button", 11);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.manual_entry() ? 7 : 8);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.error() ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.auto_accept_in() > 0 ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.manual_entry() ? 11 : 12);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.manual_entry() ? 14 : 15);
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading() ? "Looking up..." : "Connect", " ");
      }
    }, dependencies: [
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      RequiredValidator,
      NgModel,
      NgForm,
      IconComponent,
      MatFormFieldModule,
      MatFormField,
      MatPrefix,
      MatInputModule,
      MatInput,
      MatRippleModule,
      MatRipple
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NativeDomainOverlayComponent, [{
    type: Component,
    args: [{
      selector: "native-domain-overlay",
      template: `
        <div
            class="bg-base-200 pointer-events-auto fixed inset-0 z-9999 flex items-center justify-center p-4"
        >
            <form
                class="border-base-300 bg-base-100 flex w-full max-w-md flex-col rounded-sm border shadow-sm"
                (ngSubmit)="submit()"
            >
                <header class="bg-base-200 m-2 rounded-sm border-none p-2">
                    <h2 class="px-2 text-xl font-medium">Connect to Server</h2>
                </header>
                <main class="flex flex-col space-y-4 p-4">
                    <p class="text-sm opacity-60">
                        @if (manual_entry()) {
                            Enter the address of your PlaceOS server to connect
                            this app.
                        } @else {
                            Enter your work email to find your PlaceOS server
                            and connect this app.
                        }
                    </p>
                    @if (error()) {
                        <p
                            class="bg-error/10 text-error rounded-sm px-3 py-2 text-xs"
                        >
                            {{ error() }}
                        </p>
                    }
                    @if (auto_accept_in() > 0) {
                        <p
                            class="bg-info/10 text-info rounded-sm px-3 py-2 text-xs"
                        >
                            Settings provided by your administrator will be
                            applied automatically in {{ auto_accept_in() }}s.
                        </p>
                    }
                    @if (manual_entry()) {
                        <div class="flex w-full flex-col">
                            <label for="server-address">Server Address</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <icon matPrefix>dns</icon>
                                <input
                                    matInput
                                    name="server-address"
                                    [(ngModel)]="server_address"
                                    placeholder="placeos.company.com"
                                    type="text"
                                    autocapitalize="off"
                                    autocomplete="url"
                                    spellcheck="false"
                                    required
                                    [disabled]="loading()"
                                />
                            </mat-form-field>
                        </div>
                        <div class="flex w-full flex-col">
                            <label for="api-key">API Key (optional)</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <icon matPrefix>key</icon>
                                <input
                                    matInput
                                    name="api-key"
                                    [(ngModel)]="api_key"
                                    placeholder="Leave empty to sign in"
                                    type="password"
                                    autocapitalize="off"
                                    autocomplete="off"
                                    spellcheck="false"
                                    [disabled]="loading()"
                                />
                            </mat-form-field>
                            <p class="text-xs opacity-60">
                                When set, the app authenticates with this key
                                instead of asking you to sign in.
                            </p>
                        </div>
                    } @else {
                        <div class="flex w-full flex-col">
                            <label for="email">Work Email</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <icon matPrefix>mail</icon>
                                <input
                                    matInput
                                    name="email"
                                    [(ngModel)]="email"
                                    placeholder="name@company.com"
                                    type="email"
                                    autocapitalize="off"
                                    autocomplete="email"
                                    spellcheck="false"
                                    required
                                    [disabled]="loading()"
                                />
                            </mat-form-field>
                        </div>
                    }
                    <button
                        type="button"
                        class="self-start text-sm underline opacity-60"
                        [disabled]="loading()"
                        (click)="toggleManualEntry()"
                    >
                        @if (manual_entry()) {
                            Find my server using my work email
                        } @else {
                            Enter a server address manually
                        }
                    </button>
                </main>
                <footer
                    class="bg-base-200 m-2 flex items-center justify-center space-x-2 rounded-sm border-none p-2"
                >
                    <button
                        btn
                        matRipple
                        type="submit"
                        class="flex-1"
                        [disabled]="loading()"
                    >
                        {{ loading() ? 'Looking up...' : 'Connect' }}
                    </button>
                </footer>
            </form>
        </div>
    `,
      imports: [
        FormsModule,
        IconComponent,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule
      ],
      host: {
        "(window:pointerdown)": "resetAutoAccept()",
        "(window:keydown)": "resetAutoAccept()"
      }
    }]
  }], () => [], { serverError: [{ type: Input, args: [{ isSignal: true, alias: "serverError", required: false }] }], autoAccept: [{ type: Input, args: [{ isSignal: true, alias: "autoAccept", required: false }] }], domainSet: [{ type: Output, args: ["domainSet"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NativeDomainOverlayComponent, { className: "NativeDomainOverlayComponent", filePath: "libs/components/src/lib/native-domain-overlay.component.ts", lineNumber: 169 });
})();
export {
  NativeDomainOverlayComponent
};
//# debugId=ffdd7975-a716-5fc8-a39e-b24f342b9ceb
//# sourceMappingURL=native-domain-overlay.component-6H2YDGFK.js.map
