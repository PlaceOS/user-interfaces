import {
  GroupBreadcrumbsComponent
} from "./chunk-RXU47VID.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-5INXWBHO.js";
import {
  TranslatePipe
} from "./chunk-T2VWHNJH.js";
import {
  IconComponent
} from "./chunk-7MADQ4JT.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-SZ34I7U6.js";
import {
  Component,
  Input,
  Output,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreadContextLet,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-BKT2MDTY.js";

// apps/signage-manager/src/app/shared/section-header.component.ts
var _c0 = (a0) => ({ count: a0 });
function SectionHeaderComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const total_r1 = \u0275\u0275readContextLet(6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, "COMMON.ITEM_COUNT", \u0275\u0275pureFunction1(5, _c0, total_r1), total_r1), " ");
  }
}
function SectionHeaderComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function SectionHeaderComponent_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.add.emit());
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, ctx_r2.add_tooltip()));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 4, ctx_r2.add_label()));
  }
}
var SectionHeaderComponent = class _SectionHeaderComponent {
  constructor() {
    this.heading = input.required(
      ...ngDevMode ? [{ debugName: "heading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.count = input.required(
      ...ngDevMode ? [{ debugName: "count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_add = input(
      false,
      ...ngDevMode ? [{ debugName: "can_add" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.add_label = input.required(
      ...ngDevMode ? [{ debugName: "add_label" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.add_tooltip = input.required(
      ...ngDevMode ? [{ debugName: "add_tooltip" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.add = output();
  }
  static {
    this.\u0275fac = function SectionHeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SectionHeaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SectionHeaderComponent, selectors: [["section-header"]], inputs: { heading: [1, "heading"], count: [1, "count"], can_add: [1, "can_add"], add_label: [1, "add_label"], add_tooltip: [1, "add_tooltip"] }, outputs: { add: "add" }, decls: 11, vars: 6, consts: [[1, "bg-base-100", "border-base-300", "sticky", "top-0", "flex", "flex-wrap", "items-center", "gap-2", "border-b", "px-4", "py-2", "shadow", "sm:flex-nowrap"], [1, "py-2"], [1, "text-2xl", "font-medium"], [1, "flex", "flex-wrap", "items-center", "gap-2"], [1, "text-sm", "opacity-60"], [1, "w-px", "flex-1"], ["icon", "", "default", "", "type", "button", "matRipple", "", 1, "text-xl", 3, "matTooltip"], ["icon", "", "default", "", "type", "button", "matRipple", "", 1, "text-xl", 3, "click", "matTooltip"]], template: function SectionHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3);
        \u0275\u0275declareLet(6);
        \u0275\u0275conditionalCreate(7, SectionHeaderComponent_Conditional_7_Template, 3, 7, "div", 4);
        \u0275\u0275element(8, "group-breadcrumbs");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(9, "div", 5);
        \u0275\u0275conditionalCreate(10, SectionHeaderComponent_Conditional_10_Template, 5, 6, "button", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, ctx.heading()), " ");
        \u0275\u0275advance(3);
        const total_r4 = \u0275\u0275storeLet(ctx.count());
        \u0275\u0275advance();
        \u0275\u0275conditional(total_r4 !== null ? 7 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.can_add() ? 10 : -1);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      IconComponent,
      GroupBreadcrumbsComponent,
      MatTooltipModule,
      MatTooltip,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SectionHeaderComponent, [{
    type: Component,
    args: [{
      selector: "section-header",
      template: `
        <div
            class="bg-base-100 border-base-300 sticky top-0 flex flex-wrap items-center gap-2 border-b px-4 py-2 shadow sm:flex-nowrap"
        >
            <div class="py-2">
                <h3 class="text-2xl font-medium">
                    {{ heading() | translate }}
                </h3>
                <div class="flex flex-wrap items-center gap-2">
                    @let total = count();
                    @if (total !== null) {
                        <div class="text-sm opacity-60">
                            {{
                                'COMMON.ITEM_COUNT'
                                    | translate: { count: total } : total
                            }}
                        </div>
                    }
                    <group-breadcrumbs />
                </div>
            </div>
            <div class="w-px flex-1"></div>
            @if (can_add()) {
                <button
                    icon
                    default
                    type="button"
                    matRipple
                    class="text-xl"
                    (click)="add.emit()"
                    [attr.aria-label]="add_label() | translate"
                    [matTooltip]="add_tooltip() | translate"
                >
                    <icon>add</icon>
                </button>
            }
        </div>
    `,
      imports: [
        MatRippleModule,
        IconComponent,
        TranslatePipe,
        GroupBreadcrumbsComponent,
        MatTooltipModule
      ]
    }]
  }], null, { heading: [{ type: Input, args: [{ isSignal: true, alias: "heading", required: true }] }], count: [{ type: Input, args: [{ isSignal: true, alias: "count", required: true }] }], can_add: [{ type: Input, args: [{ isSignal: true, alias: "can_add", required: false }] }], add_label: [{ type: Input, args: [{ isSignal: true, alias: "add_label", required: true }] }], add_tooltip: [{ type: Input, args: [{ isSignal: true, alias: "add_tooltip", required: true }] }], add: [{ type: Output, args: ["add"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SectionHeaderComponent, { className: "SectionHeaderComponent", filePath: "apps/signage-manager/src/app/shared/section-header.component.ts", lineNumber: 59 });
})();

export {
  SectionHeaderComponent
};
//# debugId=7159940c-8528-5a20-b9c9-ed671a03f9c5
//# sourceMappingURL=chunk-SQ7LLUFH.js.map
