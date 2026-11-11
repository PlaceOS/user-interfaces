import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-ENN6EOZA.js";
import {
  installBindingDebugHooks
} from "./chunk-HQCVTIJ3.js";
import {
  RemoteLoggingService
} from "./chunk-4AJI7VRY.js";
import {
  AsyncHandler,
  HotkeysService,
  SettingsService,
  user_group_names
} from "./chunk-ZJL5WT2S.js";
import {
  IconComponent
} from "./chunk-5IXSADE5.js";
import "./chunk-3H3ELEO6.js";
import "./chunk-XXZPWXOI.js";
import "./chunk-PBTRSNO3.js";
import "./chunk-L56O3VTV.js";
import {
  Component,
  DOCUMENT,
  Injector,
  Input,
  ViewChild,
  computed,
  effect,
  forwardRef,
  inject,
  input,
  setClassMetadata,
  setClassMetadataAsync,
  signal,
  untracked,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefer,
  ɵɵdeferWhen,
  ɵɵdefineComponent,
  ɵɵdomTemplate,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate2,
  ɵɵviewQuerySignal
} from "./chunk-LXAGTE5U.js";
import "./chunk-653SOEEV.js";

// libs/components/src/lib/settings-debug-panel-launcher.component.ts
var SettingsDebugPanelLauncherComponent_Conditional_0_Defer_26_DepsFn = () => [
  /* @ts-ignore */
  import("./settings-debug-panel.component-3Z3K5SFS.js").then((m) => m.SettingsDebugPanelComponent)
];
var SettingsDebugPanelLauncherComponent_Conditional_0_Defer_29_DepsFn = () => [
  /* @ts-ignore */
  import("./binding-debug-panel.component-DXTFQBLK.js").then((m) => m.BindingDebugPanelComponent)
];
var SettingsDebugPanelLauncherComponent_Conditional_0_Defer_32_DepsFn = () => [
  /* @ts-ignore */
  import("./debug-console.component-AW4QVT5Y.js").then((m) => m.DebugConsoleComponent)
];
function SettingsDebugPanelLauncherComponent_Conditional_0_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function SettingsDebugPanelLauncherComponent_Conditional_0_Conditional_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openPanel("settings"));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r2.override_count(), " setting ", ctx_r2.override_count() === 1 ? "override" : "overrides", " active ");
  }
}
function SettingsDebugPanelLauncherComponent_Conditional_0_Defer_25_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-debug-panel", 10);
    \u0275\u0275listener("showChange", function SettingsDebugPanelLauncherComponent_Conditional_0_Defer_25_Conditional_0_Template_settings_debug_panel_showChange_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.panel.set(null));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("show", true)("schema", ctx_r2.schema());
  }
}
function SettingsDebugPanelLauncherComponent_Conditional_0_Defer_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SettingsDebugPanelLauncherComponent_Conditional_0_Defer_25_Conditional_0_Template, 1, 2, "settings-debug-panel", 9);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r2.panel() === "settings" ? 0 : -1);
  }
}
function SettingsDebugPanelLauncherComponent_Conditional_0_Defer_28_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "binding-debug-panel", 12);
    \u0275\u0275listener("showChange", function SettingsDebugPanelLauncherComponent_Conditional_0_Defer_28_Conditional_0_Template_binding_debug_panel_showChange_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.panel.set(null));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("show", true)("hotkeysEnabled", false);
  }
}
function SettingsDebugPanelLauncherComponent_Conditional_0_Defer_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SettingsDebugPanelLauncherComponent_Conditional_0_Defer_28_Conditional_0_Template, 1, 2, "binding-debug-panel", 11);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r2.panel() === "bindings" ? 0 : -1);
  }
}
function SettingsDebugPanelLauncherComponent_Conditional_0_Defer_31_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "debug-console", 12);
    \u0275\u0275listener("showChange", function SettingsDebugPanelLauncherComponent_Conditional_0_Defer_31_Conditional_0_Template_debug_console_showChange_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.panel.set(null));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("show", true)("hotkeysEnabled", false);
  }
}
function SettingsDebugPanelLauncherComponent_Conditional_0_Defer_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SettingsDebugPanelLauncherComponent_Conditional_0_Defer_31_Conditional_0_Template, 1, 2, "debug-console", 11);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r2.panel() === "console" ? 0 : -1);
  }
}
function SettingsDebugPanelLauncherComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2, 0);
    \u0275\u0275listener("contextmenu", function SettingsDebugPanelLauncherComponent_Conditional_0_Template_button_contextmenu_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const menu_trigger_r2 = \u0275\u0275reference(1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openMenu($event, menu_trigger_r2));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-menu", 3, 1)(4, "div", 4);
    \u0275\u0275text(5, " Debugging Panels ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 5);
    \u0275\u0275listener("click", function SettingsDebugPanelLauncherComponent_Conditional_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openPanel("settings"));
    });
    \u0275\u0275elementStart(7, "div", 6)(8, "icon");
    \u0275\u0275text(9, "discover_tune");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div");
    \u0275\u0275text(11, "Settings");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "button", 5);
    \u0275\u0275listener("click", function SettingsDebugPanelLauncherComponent_Conditional_0_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openPanel("bindings"));
    });
    \u0275\u0275elementStart(13, "div", 6)(14, "icon");
    \u0275\u0275text(15, "linked_services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div");
    \u0275\u0275text(17, "Driver bindings");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "button", 5);
    \u0275\u0275listener("click", function SettingsDebugPanelLauncherComponent_Conditional_0_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openPanel("console"));
    });
    \u0275\u0275elementStart(19, "div", 6)(20, "icon");
    \u0275\u0275text(21, "terminal_2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div");
    \u0275\u0275text(23, "Console");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(24, SettingsDebugPanelLauncherComponent_Conditional_0_Conditional_24_Template, 2, 2, "button", 7);
    \u0275\u0275domTemplate(25, SettingsDebugPanelLauncherComponent_Conditional_0_Defer_25_Template, 1, 1);
    \u0275\u0275defer(26, 25, SettingsDebugPanelLauncherComponent_Conditional_0_Defer_26_DepsFn);
    \u0275\u0275domTemplate(28, SettingsDebugPanelLauncherComponent_Conditional_0_Defer_28_Template, 1, 1);
    \u0275\u0275defer(29, 28, SettingsDebugPanelLauncherComponent_Conditional_0_Defer_29_DepsFn);
    \u0275\u0275domTemplate(31, SettingsDebugPanelLauncherComponent_Conditional_0_Defer_31_Template, 1, 1);
    \u0275\u0275defer(32, 31, SettingsDebugPanelLauncherComponent_Conditional_0_Defer_32_DepsFn);
  }
  if (rf & 2) {
    const debug_menu_r8 = \u0275\u0275reference(3);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("matMenuTriggerFor", debug_menu_r8);
    \u0275\u0275advance(24);
    \u0275\u0275conditional(ctx_r2.override_count() ? 24 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275deferWhen(ctx_r2.panel() === "settings");
    \u0275\u0275advance(3);
    \u0275\u0275deferWhen(ctx_r2.panel() === "bindings");
    \u0275\u0275advance(3);
    \u0275\u0275deferWhen(ctx_r2.panel() === "console");
  }
}
var SettingsDebugPanelLauncherComponent = class _SettingsDebugPanelLauncherComponent extends AsyncHandler {
  constructor() {
    super();
    this._hotkey = inject(HotkeysService);
    this._document = inject(DOCUMENT);
    this._injector = inject(Injector);
    this._menu_trigger = viewChild(
      MatMenuTrigger,
      ...ngDevMode ? [{ debugName: "_menu_trigger" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._settings = signal(
      null,
      ...ngDevMode ? [{ debugName: "_settings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loadSchema = input(
      ...ngDevMode ? [void 0, { debugName: "loadSchema" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.schema = signal(
      null,
      ...ngDevMode ? [{ debugName: "schema" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.panel = signal(
      null,
      ...ngDevMode ? [{ debugName: "panel" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.allowed = computed(
      () => {
        const groups = user_group_names();
        return groups.includes("placeos_admin") || groups.includes("placeos_support");
      },
      ...ngDevMode ? [{ debugName: "allowed" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.override_count = computed(
      () => Object.keys(this._settings()?.debug_overrides() ?? {}).length,
      ...ngDevMode ? [{ debugName: "override_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      if (!this.allowed())
        return;
      untracked(() => {
        installBindingDebugHooks();
        this._injector.get(RemoteLoggingService);
        this._settings.set(this._injector.get(SettingsService));
      });
    });
  }
  ngOnInit() {
    const shortcuts = [
      ["settings", ["Control", "Alt", "Shift", "KeyS"]],
      ["bindings", ["Control", "Alt", "Shift", "KeyB"]],
      ["console", ["Control", "Backquote"]]
    ];
    for (const [panel, keys] of shortcuts) {
      this.subscription(panel, this._hotkey.listen(keys, () => {
        if (!this.allowed())
          return;
        if (this.panel() === panel)
          this.panel.set(null);
        else
          this.openPanel(panel);
      }));
    }
  }
  /** Observe the corner without placing a pointer target over app controls. */
  onContextMenu(event) {
    if (!this.allowed())
      return;
    const height = this._document.documentElement.clientHeight;
    if (event.clientX < 0 || event.clientX > 32 || event.clientY < height - 32 || event.clientY > height)
      return;
    const trigger = this._menu_trigger();
    if (trigger)
      this.openMenu(event, trigger);
  }
  openMenu(event, trigger) {
    event.preventDefault();
    trigger.openMenu();
  }
  openPanel(panel) {
    if (!this.allowed())
      return;
    this.panel.set(panel);
    if (panel === "settings") {
      this._schema_request ??= this.loadSettingsSchema();
    }
  }
  async loadSettingsSchema() {
    try {
      this.schema.set(await this.loadSchema()?.() ?? null);
    } catch {
      this.schema.set(null);
    }
  }
  static {
    this.\u0275fac = function SettingsDebugPanelLauncherComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingsDebugPanelLauncherComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsDebugPanelLauncherComponent, selectors: [["settings-debug-panel-launcher"]], viewQuery: function SettingsDebugPanelLauncherComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._menu_trigger, MatMenuTrigger, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, hostBindings: function SettingsDebugPanelLauncherComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("contextmenu", function SettingsDebugPanelLauncherComponent_contextmenu_HostBindingHandler($event) {
          return ctx.onContextMenu($event);
        }, \u0275\u0275resolveDocument);
      }
    }, inputs: { loadSchema: [1, "loadSchema"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [["menu_trigger", "matMenuTrigger"], ["debug_menu", "matMenu"], ["type", "button", "aria-label", "Open debugging tools", 1, "absolute", "bottom-0", "left-0", "z-999", "h-px", "w-px", 3, "contextmenu", "matMenuTriggerFor"], ["yPosition", "above"], [1, "flex", "w-64", "items-center", "justify-center", "pb-2", "text-sm", "opacity-60"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "gap-2"], ["type", "button", 1, "bg-warning", "fixed", "bottom-1", "left-1", "z-999", "rounded-sm", "px-2", "py-0.5", "text-xs", "text-black", "shadow"], ["type", "button", 1, "bg-warning", "fixed", "bottom-1", "left-1", "z-999", "rounded-sm", "px-2", "py-0.5", "text-xs", "text-black", "shadow", 3, "click"], [3, "show", "schema"], [3, "showChange", "show", "schema"], [3, "show", "hotkeysEnabled"], [3, "showChange", "show", "hotkeysEnabled"]], template: function SettingsDebugPanelLauncherComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, SettingsDebugPanelLauncherComponent_Conditional_0_Template, 34, 5);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.allowed() ? 0 : -1);
      }
    }, dependencies: [MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, IconComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadataAsync(SettingsDebugPanelLauncherComponent, () => [
    /* @ts-ignore */
    import("./settings-debug-panel.component-3Z3K5SFS.js").then((m) => m.SettingsDebugPanelComponent),
    /* @ts-ignore */
    import("./binding-debug-panel.component-DXTFQBLK.js").then((m) => m.BindingDebugPanelComponent),
    /* @ts-ignore */
    import("./debug-console.component-AW4QVT5Y.js").then((m) => m.DebugConsoleComponent)
  ], (SettingsDebugPanelComponent, BindingDebugPanelComponent, DebugConsoleComponent) => {
    setClassMetadata(SettingsDebugPanelLauncherComponent, [{
      type: Component,
      args: [{ selector: "settings-debug-panel-launcher", host: { "(document:contextmenu)": "onContextMenu($event)" }, imports: [
        MatMenuModule,
        SettingsDebugPanelComponent,
        BindingDebugPanelComponent,
        DebugConsoleComponent,
        IconComponent
      ], template: `
        @if (allowed()) {
            <button
                type="button"
                class="absolute bottom-0 left-0 z-999 h-px w-px"
                aria-label="Open debugging tools"
                [matMenuTriggerFor]="debug_menu"
                #menu_trigger="matMenuTrigger"
                (contextmenu)="openMenu($event, menu_trigger)"
            ></button>
            <mat-menu #debug_menu="matMenu" yPosition="above">
                <div
                    class="flex w-64 items-center justify-center pb-2 text-sm opacity-60"
                >
                    Debugging Panels
                </div>
                <button mat-menu-item (click)="openPanel('settings')">
                    <div class="flex items-center gap-2">
                        <icon>discover_tune</icon>
                        <div>Settings</div>
                    </div>
                </button>
                <button mat-menu-item (click)="openPanel('bindings')">
                    <div class="flex items-center gap-2">
                        <icon>linked_services</icon>
                        <div>Driver bindings</div>
                    </div>
                </button>
                <button mat-menu-item (click)="openPanel('console')">
                    <div class="flex items-center gap-2">
                        <icon>terminal_2</icon>
                        <div>Console</div>
                    </div>
                </button>
            </mat-menu>
            @if (override_count()) {
                <button
                    type="button"
                    class="bg-warning fixed bottom-1 left-1 z-999 rounded-sm px-2 py-0.5 text-xs text-black shadow"
                    (click)="openPanel('settings')"
                >
                    {{ override_count() }} setting
                    {{ override_count() === 1 ? 'override' : 'overrides' }}
                    active
                </button>
            }
            @defer (when panel() === 'settings') {
                @if (panel() === 'settings') {
                    <settings-debug-panel
                        [show]="true"
                        (showChange)="panel.set(null)"
                        [schema]="schema()"
                    />
                }
            }
            @defer (when panel() === 'bindings') {
                @if (panel() === 'bindings') {
                    <binding-debug-panel
                        [show]="true"
                        (showChange)="panel.set(null)"
                        [hotkeysEnabled]="false"
                    />
                }
            }
            @defer (when panel() === 'console') {
                @if (panel() === 'console') {
                    <debug-console
                        [show]="true"
                        (showChange)="panel.set(null)"
                        [hotkeysEnabled]="false"
                    />
                }
            }
        }
    ` }]
    }], () => [], { _menu_trigger: [{ type: ViewChild, args: [forwardRef(() => MatMenuTrigger), { isSignal: true }] }], loadSchema: [{ type: Input, args: [{ isSignal: true, alias: "loadSchema", required: false }] }] });
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsDebugPanelLauncherComponent, { className: "SettingsDebugPanelLauncherComponent", filePath: "libs/components/src/lib/settings-debug-panel-launcher.component.ts", lineNumber: 117 });
})();
export {
  SettingsDebugPanelLauncherComponent
};
//# debugId=6be85187-c143-5bf3-be1c-92fd11f73650
//# sourceMappingURL=settings-debug-panel-launcher.component-7AG6VKX5.js.map
