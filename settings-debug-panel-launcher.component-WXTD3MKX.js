import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-FMJ73MRT.js";
import {
  AsyncHandler,
  HotkeysService,
  IconComponent
} from "./chunk-DBUTAYQC.js";
import "./chunk-VR7ILATT.js";
import "./chunk-CZKEECSS.js";
import "./chunk-4CHWKULB.js";
import {
  Component,
  DOCUMENT,
  Input,
  ViewChild,
  forwardRef,
  inject,
  input,
  setClassMetadata,
  setClassMetadataAsync,
  signal,
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
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵviewQuerySignal
} from "./chunk-WU2PTGBX.js";
import "./chunk-GOMI4DH3.js";

// libs/components/src/lib/settings-debug-panel-launcher.component.ts
var SettingsDebugPanelLauncherComponent_Defer_25_DepsFn = () => [
  /* @ts-ignore */
  import("./settings-debug-panel.component-TQFOWVHA.js").then((m) => m.SettingsDebugPanelComponent)
];
var SettingsDebugPanelLauncherComponent_Defer_28_DepsFn = () => [
  /* @ts-ignore */
  import("./binding-debug-panel.component-4UTLXAHJ.js").then((m) => m.BindingDebugPanelComponent)
];
var SettingsDebugPanelLauncherComponent_Defer_31_DepsFn = () => [
  /* @ts-ignore */
  import("./debug-console.component-5TKDTISO.js").then((m) => m.DebugConsoleComponent)
];
function SettingsDebugPanelLauncherComponent_Defer_24_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-debug-panel", 8);
    \u0275\u0275listener("showChange", function SettingsDebugPanelLauncherComponent_Defer_24_Conditional_0_Template_settings_debug_panel_showChange_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.panel.set(null));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("show", true)("schema", ctx_r3.schema());
  }
}
function SettingsDebugPanelLauncherComponent_Defer_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SettingsDebugPanelLauncherComponent_Defer_24_Conditional_0_Template, 1, 2, "settings-debug-panel", 7);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r3.panel() === "settings" ? 0 : -1);
  }
}
function SettingsDebugPanelLauncherComponent_Defer_27_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "binding-debug-panel", 10);
    \u0275\u0275listener("showChange", function SettingsDebugPanelLauncherComponent_Defer_27_Conditional_0_Template_binding_debug_panel_showChange_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.panel.set(null));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("show", true)("hotkeysEnabled", false);
  }
}
function SettingsDebugPanelLauncherComponent_Defer_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SettingsDebugPanelLauncherComponent_Defer_27_Conditional_0_Template, 1, 2, "binding-debug-panel", 9);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r3.panel() === "bindings" ? 0 : -1);
  }
}
function SettingsDebugPanelLauncherComponent_Defer_30_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "debug-console", 10);
    \u0275\u0275listener("showChange", function SettingsDebugPanelLauncherComponent_Defer_30_Conditional_0_Template_debug_console_showChange_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.panel.set(null));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("show", true)("hotkeysEnabled", false);
  }
}
function SettingsDebugPanelLauncherComponent_Defer_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SettingsDebugPanelLauncherComponent_Defer_30_Conditional_0_Template, 1, 2, "debug-console", 9);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r3.panel() === "console" ? 0 : -1);
  }
}
var SettingsDebugPanelLauncherComponent = class _SettingsDebugPanelLauncherComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._hotkey = inject(HotkeysService);
    this._document = inject(DOCUMENT);
    this._menu_trigger = viewChild.required(
      MatMenuTrigger,
      ...ngDevMode ? [{ debugName: "_menu_trigger" }] : (
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
  }
  ngOnInit() {
    const shortcuts = [
      ["settings", ["Control", "Alt", "Shift", "KeyS"]],
      ["bindings", ["Control", "Alt", "Shift", "KeyB"]],
      ["console", ["Control", "Backquote"]]
    ];
    for (const [panel, keys] of shortcuts) {
      this.subscription(panel, this._hotkey.listen(keys, () => {
        if (this.panel() === panel)
          this.panel.set(null);
        else
          this.openPanel(panel);
      }));
    }
  }
  /** Observe the corner without placing a pointer target over app controls. */
  onContextMenu(event) {
    const height = this._document.documentElement.clientHeight;
    if (event.clientX < 0 || event.clientX > 32 || event.clientY < height - 32 || event.clientY > height)
      return;
    this.openMenu(event, this._menu_trigger());
  }
  openMenu(event, trigger) {
    event.preventDefault();
    trigger.openMenu();
  }
  openPanel(panel) {
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
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275SettingsDebugPanelLauncherComponent_BaseFactory;
      return function SettingsDebugPanelLauncherComponent_Factory(__ngFactoryType__) {
        return (\u0275SettingsDebugPanelLauncherComponent_BaseFactory || (\u0275SettingsDebugPanelLauncherComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SettingsDebugPanelLauncherComponent)))(__ngFactoryType__ || _SettingsDebugPanelLauncherComponent);
      };
    })();
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
    }, inputs: { loadSchema: [1, "loadSchema"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 33, vars: 4, consts: [["menu_trigger", "matMenuTrigger"], ["debug_menu", "matMenu"], ["type", "button", "aria-label", "Open debugging tools", 1, "absolute", "bottom-0", "left-0", "z-999", "h-px", "w-px", 3, "contextmenu", "matMenuTriggerFor"], ["yPosition", "above"], [1, "flex", "w-64", "items-center", "justify-center", "pb-2", "text-sm", "opacity-60"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "gap-2"], [3, "show", "schema"], [3, "showChange", "show", "schema"], [3, "show", "hotkeysEnabled"], [3, "showChange", "show", "hotkeysEnabled"]], template: function SettingsDebugPanelLauncherComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "button", 2, 0);
        \u0275\u0275listener("contextmenu", function SettingsDebugPanelLauncherComponent_Template_button_contextmenu_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          const menu_trigger_r2 = \u0275\u0275reference(1);
          return \u0275\u0275resetView(ctx.openMenu($event, menu_trigger_r2));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "mat-menu", 3, 1)(4, "div", 4);
        \u0275\u0275text(5, " Debugging Panels ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "button", 5);
        \u0275\u0275listener("click", function SettingsDebugPanelLauncherComponent_Template_button_click_6_listener() {
          return ctx.openPanel("settings");
        });
        \u0275\u0275elementStart(7, "div", 6)(8, "icon");
        \u0275\u0275text(9, "discover_tune");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div");
        \u0275\u0275text(11, "Settings");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "button", 5);
        \u0275\u0275listener("click", function SettingsDebugPanelLauncherComponent_Template_button_click_12_listener() {
          return ctx.openPanel("bindings");
        });
        \u0275\u0275elementStart(13, "div", 6)(14, "icon");
        \u0275\u0275text(15, "linked_services");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div");
        \u0275\u0275text(17, "Driver bindings");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 5);
        \u0275\u0275listener("click", function SettingsDebugPanelLauncherComponent_Template_button_click_18_listener() {
          return ctx.openPanel("console");
        });
        \u0275\u0275elementStart(19, "div", 6)(20, "icon");
        \u0275\u0275text(21, "terminal_2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div");
        \u0275\u0275text(23, "Console");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275domTemplate(24, SettingsDebugPanelLauncherComponent_Defer_24_Template, 1, 1);
        \u0275\u0275defer(25, 24, SettingsDebugPanelLauncherComponent_Defer_25_DepsFn);
        \u0275\u0275domTemplate(27, SettingsDebugPanelLauncherComponent_Defer_27_Template, 1, 1);
        \u0275\u0275defer(28, 27, SettingsDebugPanelLauncherComponent_Defer_28_DepsFn);
        \u0275\u0275domTemplate(30, SettingsDebugPanelLauncherComponent_Defer_30_Template, 1, 1);
        \u0275\u0275defer(31, 30, SettingsDebugPanelLauncherComponent_Defer_31_DepsFn);
      }
      if (rf & 2) {
        const debug_menu_r7 = \u0275\u0275reference(3);
        \u0275\u0275property("matMenuTriggerFor", debug_menu_r7);
        \u0275\u0275advance(25);
        \u0275\u0275deferWhen(ctx.panel() === "settings");
        \u0275\u0275advance(3);
        \u0275\u0275deferWhen(ctx.panel() === "bindings");
        \u0275\u0275advance(3);
        \u0275\u0275deferWhen(ctx.panel() === "console");
      }
    }, dependencies: [MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, IconComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadataAsync(SettingsDebugPanelLauncherComponent, () => [
    /* @ts-ignore */
    import("./settings-debug-panel.component-TQFOWVHA.js").then((m) => m.SettingsDebugPanelComponent),
    /* @ts-ignore */
    import("./binding-debug-panel.component-4UTLXAHJ.js").then((m) => m.BindingDebugPanelComponent),
    /* @ts-ignore */
    import("./debug-console.component-5TKDTISO.js").then((m) => m.DebugConsoleComponent)
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
        <button
            type="button"
            class="absolute bottom-0 left-0 z-999 h-px w-px"
            aria-label="Open debugging tools"
            [matMenuTriggerFor]="debug_menu"
            #menu_trigger="matMenuTrigger"
            (contextmenu)="openMenu($event, menu_trigger)"
        >
        </button>
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
    ` }]
    }], null, { _menu_trigger: [{ type: ViewChild, args: [forwardRef(() => MatMenuTrigger), { isSignal: true }] }], loadSchema: [{ type: Input, args: [{ isSignal: true, alias: "loadSchema", required: false }] }] });
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsDebugPanelLauncherComponent, { className: "SettingsDebugPanelLauncherComponent", filePath: "libs/components/src/lib/settings-debug-panel-launcher.component.ts", lineNumber: 97 });
})();
export {
  SettingsDebugPanelLauncherComponent
};
//# debugId=ba2557dd-b577-5936-a8ca-d59c5c4bbc12
//# sourceMappingURL=settings-debug-panel-launcher.component-WXTD3MKX.js.map
