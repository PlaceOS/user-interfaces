import {
  TranslatePipe
} from "./chunk-T2VWHNJH.js";
import {
  Component,
  ElementRef,
  Input,
  Output,
  inject,
  input,
  model,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-BKT2MDTY.js";

// apps/signage-manager/src/app/shared/section-tabs.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function SectionTabsComponent_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 2);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const tab_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275attribute("aria-busy", !!tab_r2.count_loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r2.count_loading ? "?" : tab_r2.count, " ");
  }
}
function SectionTabsComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 1);
    \u0275\u0275domListener("click", function SectionTabsComponent_For_1_Template_button_click_0_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.active.set(tab_r2.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275conditionalCreate(3, SectionTabsComponent_For_1_Conditional_3_Template, 2, 2, "span", 2);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("border-primary", ctx_r2.active() === tab_r2.id)("border-b-2", ctx_r2.active() === tab_r2.id)("text-primary", ctx_r2.active() === tab_r2.id)("opacity-60", ctx_r2.active() !== tab_r2.id);
    \u0275\u0275domProperty("id", ctx_r2.id_prefix() + "-" + tab_r2.id + "-tab");
    \u0275\u0275attribute("aria-selected", ctx_r2.active() === tab_r2.id)("aria-controls", ctx_r2.id_prefix() + "-" + tab_r2.id + "-panel")("tabindex", ctx_r2.active() === tab_r2.id ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 14, tab_r2.label), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(tab_r2.count !== void 0 ? 3 : -1);
  }
}
function tabKeyIndex(key, index, count) {
  if (key === "Home")
    return 0;
  if (key === "End")
    return count - 1;
  if (key === "ArrowLeft")
    return (index - 1 + count) % count;
  if (key === "ArrowRight")
    return (index + 1) % count;
  return null;
}
var SectionTabsComponent = class _SectionTabsComponent {
  constructor() {
    this._element = inject(ElementRef);
    this.tabs = input.required(
      ...ngDevMode ? [{ debugName: "tabs" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active = model.required(
      ...ngDevMode ? [{ debugName: "active" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.id_prefix = input.required(
      ...ngDevMode ? [{ debugName: "id_prefix" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  /** Move to and focus the tab that an arrow, Home or End key points to */
  onKeydown(event) {
    const tabs = this.tabs();
    const next = tabKeyIndex(event.key, tabs.findIndex(({ id }) => id === this.active()), tabs.length);
    if (next === null)
      return;
    event.preventDefault();
    this.active.set(tabs[next].id);
    this._element.nativeElement.querySelectorAll('[role="tab"]')[next]?.focus();
  }
  static {
    this.\u0275fac = function SectionTabsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SectionTabsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SectionTabsComponent, selectors: [["section-tabs"]], hostAttrs: ["role", "tablist"], hostBindings: function SectionTabsComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function SectionTabsComponent_keydown_HostBindingHandler($event) {
          return ctx.onKeydown($event);
        });
      }
    }, inputs: { tabs: [1, "tabs"], active: [1, "active"], id_prefix: [1, "id_prefix"] }, outputs: { active: "activeChange" }, decls: 2, vars: 0, consts: [["type", "button", "role", "tab", 1, "flex", "flex-1", "items-center", "justify-center", "gap-2", "px-4", "py-2.5", "text-sm", "font-medium", "transition-colors", 3, "border-primary", "border-b-2", "text-primary", "opacity-60", "id"], ["type", "button", "role", "tab", 1, "flex", "flex-1", "items-center", "justify-center", "gap-2", "px-4", "py-2.5", "text-sm", "font-medium", "transition-colors", 3, "click", "id"], [1, "bg-base-content/5", "inline-flex", "h-6", "min-w-6", "items-center", "justify-center", "rounded-full", "px-1.5", "text-xs", "tabular-nums"]], template: function SectionTabsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275repeaterCreate(0, SectionTabsComponent_For_1_Template, 4, 16, "button", 0, _forTrack0);
      }
      if (rf & 2) {
        \u0275\u0275repeater(ctx.tabs());
      }
    }, dependencies: [TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SectionTabsComponent, [{
    type: Component,
    args: [{
      selector: "section-tabs",
      imports: [TranslatePipe],
      host: {
        role: "tablist",
        "(keydown)": "onKeydown($event)"
      },
      template: `
        @for (tab of tabs(); track tab.id) {
            <button
                type="button"
                role="tab"
                class="flex flex-1 items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors"
                [class.border-primary]="active() === tab.id"
                [class.border-b-2]="active() === tab.id"
                [class.text-primary]="active() === tab.id"
                [class.opacity-60]="active() !== tab.id"
                [attr.aria-selected]="active() === tab.id"
                [attr.aria-controls]="id_prefix() + '-' + tab.id + '-panel'"
                [attr.tabindex]="active() === tab.id ? 0 : -1"
                [id]="id_prefix() + '-' + tab.id + '-tab'"
                (click)="active.set(tab.id)"
            >
                {{ tab.label | translate }}
                @if (tab.count !== undefined) {
                    <span
                        class="bg-base-content/5 inline-flex h-6 min-w-6 items-center justify-center rounded-full px-1.5 text-xs tabular-nums"
                        [attr.aria-busy]="!!tab.count_loading"
                    >
                        {{ tab.count_loading ? '?' : tab.count }}
                    </span>
                }
            </button>
        }
    `
    }]
  }], null, { tabs: [{ type: Input, args: [{ isSignal: true, alias: "tabs", required: true }] }], active: [{ type: Input, args: [{ isSignal: true, alias: "active", required: true }] }, { type: Output, args: ["activeChange"] }], id_prefix: [{ type: Input, args: [{ isSignal: true, alias: "id_prefix", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SectionTabsComponent, { className: "SectionTabsComponent", filePath: "apps/signage-manager/src/app/shared/section-tabs.component.ts", lineNumber: 72 });
})();

export {
  tabKeyIndex,
  SectionTabsComponent
};
//# debugId=34407421-cca0-53a9-a9e0-f595b8b52b05
//# sourceMappingURL=chunk-MRX332WL.js.map
