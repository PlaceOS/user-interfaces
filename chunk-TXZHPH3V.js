import {
  CustomTooltipComponent
} from "./chunk-3DBDHK6S.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-HLTSGFYE.js";
import {
  IconComponent
} from "./chunk-BSQA34BX.js";
import {
  Component,
  Input,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-EOGESHX7.js";

// apps/concierge/src/app/reports/report-metric-guide.component.ts
var _forTrack0 = ($index, $item) => $item.label;
function ReportMetricGuideComponent_ng_template_4_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 8);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r1.description, " ");
  }
}
function ReportMetricGuideComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "h4", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6);
    \u0275\u0275repeaterCreate(4, ReportMetricGuideComponent_ng_template_4_For_5_Template, 5, 2, "div", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.title());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.items());
  }
}
var ReportMetricGuideComponent = class _ReportMetricGuideComponent {
  constructor() {
    this.inline = input(
      false,
      ...ngDevMode ? [{ debugName: "inline" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.title = input(
      "How metrics are calculated",
      ...ngDevMode ? [{ debugName: "title" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.absolute = input(
      false,
      ...ngDevMode ? [{ debugName: "absolute" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.items = input(
      [],
      ...ngDevMode ? [{ debugName: "items" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function ReportMetricGuideComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReportMetricGuideComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportMetricGuideComponent, selectors: [["placeos-report-metric-guide"]], inputs: { inline: [1, "inline"], title: [1, "title"], absolute: [1, "absolute"], items: [1, "items"] }, decls: 6, vars: 19, consts: [["metric_guide_tooltip", ""], [1, "text-right", "print:hidden"], ["icon", "", "default", "", "type", "button", "customTooltip", "", "matTooltipPosition", "left", 3, "content", "xPosition", "yPosition", "matTooltip"], [1, "text-xl"], [1, "border-base-200", "bg-base-100", "my-2", "w-[min(42rem,calc(100vw-3rem))]", "rounded-sm", "border", "p-4", "text-left", "text-sm", "shadow-xl"], [1, "mb-3", "font-medium"], [1, "grid", "gap-3", "md:grid-cols-2"], [1, "font-medium"], [1, "mt-1", "opacity-70"]], template: function ReportMetricGuideComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "button", 2)(2, "icon", 3);
        \u0275\u0275text(3, "info");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(4, ReportMetricGuideComponent_ng_template_4_Template, 6, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const metric_guide_tooltip_r3 = \u0275\u0275reference(5);
        \u0275\u0275classProp("absolute", ctx.absolute())("top-24", ctx.absolute())("right-0", ctx.absolute())("px-4", !ctx.inline())("py-2", !ctx.inline())("ml-2", ctx.inline());
        \u0275\u0275advance();
        \u0275\u0275classProp("-mr-2", ctx.absolute());
        \u0275\u0275property("content", metric_guide_tooltip_r3)("xPosition", "end")("yPosition", "bottom")("matTooltip", ctx.title());
        \u0275\u0275attribute("aria-label", ctx.title());
      }
    }, dependencies: [CustomTooltipComponent, IconComponent, MatTooltipModule, MatTooltip], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportMetricGuideComponent, [{
    type: Component,
    args: [{
      selector: "placeos-report-metric-guide",
      template: `
        <div
            class="text-right print:hidden"
            [class.absolute]="absolute()"
            [class.top-24]="absolute()"
            [class.right-0]="absolute()"
            [class.px-4]="!inline()"
            [class.py-2]="!inline()"
            [class.ml-2]="inline()"
        >
            <button
                icon
                default
                type="button"
                customTooltip
                [content]="metric_guide_tooltip"
                [xPosition]="'end'"
                [yPosition]="'bottom'"
                [matTooltip]="title()"
                matTooltipPosition="left"
                [attr.aria-label]="title()"
                [class.-mr-2]="absolute()"
            >
                <icon class="text-xl">info</icon>
            </button>
        </div>
        <ng-template #metric_guide_tooltip>
            <div
                class="border-base-200 bg-base-100 my-2 w-[min(42rem,calc(100vw-3rem))] rounded-sm border p-4 text-left text-sm shadow-xl"
            >
                <h4 class="mb-3 font-medium">{{ title() }}</h4>
                <div class="grid gap-3 md:grid-cols-2">
                    @for (item of items(); track item.label) {
                        <div>
                            <div class="font-medium">{{ item.label }}</div>
                            <p class="mt-1 opacity-70">
                                {{ item.description }}
                            </p>
                        </div>
                    }
                </div>
            </div>
        </ng-template>
    `,
      imports: [CustomTooltipComponent, IconComponent, MatTooltipModule]
    }]
  }], null, { inline: [{ type: Input, args: [{ isSignal: true, alias: "inline", required: false }] }], title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false }] }], absolute: [{ type: Input, args: [{ isSignal: true, alias: "absolute", required: false }] }], items: [{ type: Input, args: [{ isSignal: true, alias: "items", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportMetricGuideComponent, { className: "ReportMetricGuideComponent", filePath: "apps/concierge/src/app/reports/report-metric-guide.component.ts", lineNumber: 58 });
})();

export {
  ReportMetricGuideComponent
};
//# debugId=03c3cece-9f41-5707-8dd2-ce83aa59cad9
//# sourceMappingURL=chunk-TXZHPH3V.js.map
