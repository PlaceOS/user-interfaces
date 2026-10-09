import {
  Component,
  DomSanitizer,
  Input,
  Pipe,
  computed,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-ZL76SY4J.js";

// libs/components/src/lib/safe.pipe.ts
var _SafePipe = class _SafePipe {
  constructor() {
    this.sanitizer = inject(DomSanitizer);
  }
  /**
   * Sanitizes the string allowing it to be injected into a template
   * @param value String to sanitize
   * @param type Type of value to sanitise. `resource`, `url`, `script`, `style` or `html`
   */
  transform(value, type = "html") {
    switch (type) {
      case "resource":
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
      case "url":
        return this.sanitizer.bypassSecurityTrustUrl(value);
      case "script":
        return this.sanitizer.bypassSecurityTrustScript(value);
      case "style":
        return this.sanitizer.bypassSecurityTrustStyle(value);
      default:
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
  }
};
_SafePipe.\u0275fac = function SafePipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SafePipe)();
};
_SafePipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "safe", type: _SafePipe, pure: true });
var SafePipe = _SafePipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SafePipe, [{
    type: Pipe,
    args: [{
      name: "safe"
    }]
  }], null, null);
})();

// libs/components/src/lib/icon.component.ts
var _c0 = ["*"];
function IconComponent_Conditional_1_Template(rf, ctx) {
  var _a;
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "i");
    \u0275\u0275text(1);
    \u0275\u0275projection(2);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.class_ref());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (_a = ctx_r0.icon()) == null ? void 0 : _a.content, " ");
  }
}
function IconComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 2);
    \u0275\u0275pipe(1, "safe");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("src", \u0275\u0275pipeBind2(1, 1, ctx_r0.icon().src, "resource"), \u0275\u0275sanitizeUrl);
  }
}
var CLASS_MAP = {
  rounded: "material-symbols-rounded",
  outlined: "material-symbols-outlined",
  sharp: "material-symbols-sharp"
};
var _IconComponent = class _IconComponent {
  constructor() {
    this.className = input(
      "material-symbols-rounded",
      ...ngDevMode ? [{ debugName: "className" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.icon = input(
      void 0,
      ...ngDevMode ? [{ debugName: "icon" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.class_ref = computed(
      () => {
        var _a;
        return CLASS_MAP[(_a = this.icon()) == null ? void 0 : _a.class] || CLASS_MAP[this.className()] || this.className();
      },
      ...ngDevMode ? [{ debugName: "class_ref" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
};
_IconComponent.\u0275fac = function IconComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IconComponent)();
};
_IconComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IconComponent, selectors: [["icon"], ["i", "icon", ""]], inputs: { className: [1, "className"], icon: [1, "icon"] }, ngContentSelectors: _c0, decls: 3, vars: 2, consts: [[1, "flex", "h-[1.25em]", "max-h-[1.25em]", "w-[1.25em]", "max-w-[1.25em]", "items-center", "justify-center", "overflow-hidden"], [3, "class"], [1, "h-[1em]", "w-[1em]", 3, "src"]], template: function IconComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275domElementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, IconComponent_Conditional_1_Template, 3, 3, "i", 1);
    \u0275\u0275conditionalCreate(2, IconComponent_Conditional_2_Template, 2, 4, "img", 2);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.icon() || ctx.icon().type !== "img" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.icon() && ctx.icon().type === "img" ? 2 : -1);
  }
}, dependencies: [SafePipe], styles: ["\ni[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n/*# sourceMappingURL=icon.component.css.map */"] });
var IconComponent = _IconComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconComponent, [{
    type: Component,
    args: [{ selector: "icon,i[icon]", template: `
        <div
            class="flex h-[1.25em] max-h-[1.25em] w-[1.25em] max-w-[1.25em] items-center justify-center overflow-hidden"
        >
            @if (!icon() || icon().type !== 'img') {
                <i [class]="class_ref()">
                    {{ icon()?.content }}
                    <ng-content></ng-content>
                </i>
            }
            @if (icon() && icon().type === 'img') {
                <img
                    class="h-[1em] w-[1em]"
                    [src]="icon().src | safe: 'resource'"
                />
            }
        </div>
    `, imports: [SafePipe], styles: ["/* angular:styles/component:css;9dcb326dcc2b3d8b68e7d89ef488eb28abc701fb0e2ab3f372b27f7bf732088c;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/icon.component.ts */\ni {\n  font-size: 1em;\n}\n/*# sourceMappingURL=icon.component.css.map */\n"] }]
  }], null, { className: [{ type: Input, args: [{ isSignal: true, alias: "className", required: false }] }], icon: [{ type: Input, args: [{ isSignal: true, alias: "icon", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IconComponent, { className: "IconComponent", filePath: "libs/components/src/lib/icon.component.ts", lineNumber: 40 });
})();

export {
  SafePipe,
  IconComponent
};
//# debugId=f5cb2b84-05bf-56a1-a50c-9e92833c9317
//# sourceMappingURL=chunk-7J4AT2TZ.js.map
