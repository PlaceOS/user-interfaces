import {
  SettingsService
} from "./chunk-ACYV7NM4.js";
import {
  AsyncHandler,
  SafePipe
} from "./chunk-JYQPCPCB.js";
import {
  ActivatedRoute
} from "./chunk-N4RTV55R.js";
import {
  Component,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomProperty,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵsanitizeResourceUrl
} from "./chunk-QAVCSYNX.js";
import "./chunk-653SOEEV.js";

// apps/concierge/src/app/reports/custom-report.component.ts
function CustomReportComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "iframe", 0);
    \u0275\u0275pipe(1, "safe");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("src", \u0275\u0275pipeBind2(1, 1, ctx_r0.report_url(), "resource"), \u0275\u0275sanitizeResourceUrl);
  }
}
var EMPTY = {};
var CustomReportComponent = class _CustomReportComponent extends AsyncHandler {
  constructor() {
    super();
    this._settings = inject(SettingsService);
    this._route = inject(ActivatedRoute);
    this._params = signal(
      this._route.snapshot.paramMap,
      ...ngDevMode ? [{ debugName: "_params" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.id = computed(
      () => this._params().get("id") || "",
      ...ngDevMode ? [{ debugName: "id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.report_url = computed(
      () => {
        const report = (this._settings.get("app.custom_reports") || []).find((_) => _.id === this.id()) || EMPTY;
        if (!report.url)
          return "";
        const url = report.url + (report.url.includes("?") ? "&" : "?") + `kiosk=tv`;
        return url + (report.api_key ? `&key=${encodeURIComponent(report.api_key)}` : "");
      },
      ...ngDevMode ? [{ debugName: "report_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.subscription("route.params", this._route.paramMap.subscribe((params) => this._params.set(params)));
  }
  static {
    this.\u0275fac = function CustomReportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CustomReportComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomReportComponent, selectors: [["custom-report"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[1, "h-full", "w-full", 3, "src"]], template: function CustomReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, CustomReportComponent_Conditional_0_Template, 2, 4, "iframe", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.id() ? 0 : -1);
      }
    }, dependencies: [SafePipe], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=custom-report.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomReportComponent, [{
    type: Component,
    args: [{ selector: "custom-report", template: `
        @if (id()) {
            <iframe
                class="h-full w-full"
                [src]="report_url() | safe: 'resource'"
            ></iframe>
        }
    `, imports: [SafePipe], styles: ["/* angular:styles/component:css;8f663144e307d97d7c6361d75534b712825c70421a65c587eccbcb19333fd199;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/custom-report.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=custom-report.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomReportComponent, { className: "CustomReportComponent", filePath: "apps/concierge/src/app/reports/custom-report.component.ts", lineNumber: 28 });
})();
export {
  CustomReportComponent
};
//# debugId=be1a06ea-86a5-5e85-9fdf-175eca081a35
//# sourceMappingURL=custom-report.component-XA536U5B.js.map
