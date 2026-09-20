import {
  AsyncHandler,
  CommonModule,
  Component,
  DomSanitizer,
  ElementRef,
  Injectable,
  Injector,
  Input,
  NgComponentOutlet,
  NgTemplateOutlet,
  Overlay,
  Pipe,
  TemplatePortal,
  TemplateRef,
  Type,
  ViewChild,
  ViewContainerRef,
  computed,
  effect,
  inject,
  input,
  setClassMetadata,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵviewQuerySignal
} from "./chunk-A2OFOUNK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/components/src/lib/sanitise.pipe.ts
var SecurityContext;
(function(SecurityContext2) {
  SecurityContext2[SecurityContext2["NONE"] = 0] = "NONE";
  SecurityContext2[SecurityContext2["HTML"] = 1] = "HTML";
  SecurityContext2[SecurityContext2["STYLE"] = 2] = "STYLE";
  SecurityContext2[SecurityContext2["SCRIPT"] = 3] = "SCRIPT";
  SecurityContext2[SecurityContext2["URL"] = 4] = "URL";
  SecurityContext2[SecurityContext2["RESOURCE_URL"] = 5] = "RESOURCE_URL";
})(SecurityContext || (SecurityContext = {}));
var _SanitizePipe = class _SanitizePipe {
  constructor() {
    this.sanitizer = inject(DomSanitizer);
  }
  transform(value, type = "html") {
    switch (type) {
      case "resource":
        return this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, value);
      case "url":
        return this.sanitizer.sanitize(SecurityContext.URL, value);
      case "script":
        return this.sanitizer.sanitize(SecurityContext.SCRIPT, value);
      case "style":
        return this.sanitizer.sanitize(SecurityContext.STYLE, value);
      default:
        return this.sanitizer.sanitize(SecurityContext.HTML, value);
    }
  }
};
_SanitizePipe.\u0275fac = function SanitizePipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SanitizePipe)();
};
_SanitizePipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "sanitize", type: _SanitizePipe, pure: true });
var SanitizePipe = _SanitizePipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SanitizePipe, [{
    type: Pipe,
    args: [{
      name: "sanitize"
    }]
  }], null, null);
})();

// libs/components/src/lib/custom-tooltip.component.ts
var _c0 = ["portal_content"];
var _c1 = ["*"];
function CustomTooltipComponent_ng_template_1_Case_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CustomTooltipComponent_ng_template_1_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CustomTooltipComponent_ng_template_1_Case_1_ng_container_0_Template, 1, 0, "ng-container", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngComponentOutlet", ctx_r0.component())("ngComponentOutletInjector", ctx_r0.injector);
  }
}
function CustomTooltipComponent_ng_template_1_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 2);
    \u0275\u0275pipe(1, "sanitize");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, ctx_r0.html()), \u0275\u0275sanitizeHtml);
  }
}
function CustomTooltipComponent_ng_template_1_Case_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CustomTooltipComponent_ng_template_1_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CustomTooltipComponent_ng_template_1_Case_3_ng_container_0_Template, 1, 0, "ng-container", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.template())("ngTemplateOutletContext", ctx_r0.data());
  }
}
function CustomTooltipComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275conditionalCreate(1, CustomTooltipComponent_ng_template_1_Case_1_Template, 1, 2, "ng-container")(2, CustomTooltipComponent_ng_template_1_Case_2_Template, 2, 3, "div", 2)(3, CustomTooltipComponent_ng_template_1_Case_3_Template, 1, 2, "ng-container");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_2_0 = ctx_r0.type()) === "component" ? 1 : tmp_2_0 === "html" ? 2 : 3);
  }
}
var _CustomTooltipData = class _CustomTooltipData {
};
_CustomTooltipData.\u0275fac = function CustomTooltipData_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CustomTooltipData)();
};
_CustomTooltipData.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CustomTooltipData, factory: _CustomTooltipData.\u0275fac });
var CustomTooltipData = _CustomTooltipData;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomTooltipData, [{
    type: Injectable
  }], null, null);
})();
var _CustomTooltipComponent = class _CustomTooltipComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._element = inject(ElementRef);
    this._overlay = inject(Overlay);
    this._injector = inject(Injector);
    this._view_container_ref = inject(ViewContainerRef);
    this.x_pos = input("end", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "x_pos" } : (
      /* istanbul ignore next */
      {}
    )), { alias: "xPosition" }));
    this.y_pos = input("top", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "y_pos" } : (
      /* istanbul ignore next */
      {}
    )), { alias: "yPosition" }));
    this.content = input(
      void 0,
      ...ngDevMode ? [{ debugName: "content" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.data = input(
      void 0,
      ...ngDevMode ? [{ debugName: "data" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.backdrop = input(
      true,
      ...ngDevMode ? [{ debugName: "backdrop" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hover = input(
      false,
      ...ngDevMode ? [{ debugName: "hover" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.delay = input(
      0,
      ...ngDevMode ? [{ debugName: "delay" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.x_offset = input(0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "x_offset" } : (
      /* istanbul ignore next */
      {}
    )), { alias: "xOffset" }));
    this.y_offset = input(0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "y_offset" } : (
      /* istanbul ignore next */
      {}
    )), { alias: "yOffset" }));
    this.type = computed(
      () => this.content() instanceof TemplateRef ? "template" : this.content() instanceof Type ? "component" : "html",
      ...ngDevMode ? [{ debugName: "type" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.template = computed(
      () => {
        return this.content();
      },
      ...ngDevMode ? [{ debugName: "template" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.html = computed(
      () => {
        return this.content();
      },
      ...ngDevMode ? [{ debugName: "html" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.component = computed(
      () => {
        return this.content();
      },
      ...ngDevMode ? [{ debugName: "component" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._overlay_ref = null;
    this._portal_content = viewChild.required("portal_content", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_portal_content" } : (
      /* istanbul ignore next */
      {}
    )), { read: TemplateRef }));
    this._update_injector = effect(
      () => {
        this.injector = Injector.create({
          providers: [
            {
              provide: CustomTooltipData,
              useValue: { data: this.data(), close: () => this.close() }
            }
          ],
          parent: this._injector
        });
      },
      ...ngDevMode ? [{ debugName: "_update_injector" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    const open = () => !this.hover() ? this.open() : "";
    const hover_open = (event) => this._canOpenHoverTooltip(event) ? this.open() : "";
    const hover_close = (event) => this._canOpenHoverTooltip(event) ? this.close() : "";
    this._element.nativeElement.addEventListener("click", open);
    this._element.nativeElement.addEventListener("touchend", open);
    this._element.nativeElement.addEventListener("pointerenter", hover_open);
    this._element.nativeElement.addEventListener("pointerleave", hover_close);
    this.subscription("click", () => this._element.nativeElement.removeEventListener("click", open));
    this.subscription("touchend", () => this._element.nativeElement.removeEventListener("touchend", open));
    this.subscription("pointerenter", () => this._element.nativeElement.removeEventListener("pointerenter", hover_open));
    this.subscription("pointerleave", () => this._element.nativeElement.removeEventListener("pointerleave", hover_close));
  }
  ngOnChanges(changes) {
    if (this._overlay_ref && (changes.x_pos || changes.y_pos || changes.x_offset || changes.y_offset || changes.content)) {
      this.open();
    }
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this.close();
  }
  open() {
    if (!this.content())
      return;
    this.timeout("open", () => {
      const hover = this.hover();
      const delay = this.delay();
      if (hover && delay) {
        this.timeout("onclose", () => this.close(), delay);
      }
      if (this._overlay_ref)
        this.close();
      const portal = new TemplatePortal(this._portal_content(), this._view_container_ref);
      const default_x = "end";
      const default_y = "top";
      const y_pos = this.y_pos();
      this._overlay_ref = this._overlay.create({
        hasBackdrop: !!this.backdrop() && !hover,
        positionStrategy: this._overlay.position().flexibleConnectedTo(this._element).withDefaultOffsetX(this.x_offset()).withDefaultOffsetY(this.y_offset()).withPositions([
          {
            originX: this.x_pos() || default_x,
            originY: (y_pos === "top" ? "bottom" : y_pos == "bottom" ? "top" : y_pos) || default_y,
            overlayX: this.x_pos() || default_x,
            overlayY: this.y_pos() || default_y
          }
        ])
      });
      this._overlay_ref.attach(portal);
      if (this.backdrop()) {
        this.subscription("backdrop", this._overlay_ref.backdropClick().subscribe(() => this.close()));
      }
    }, 50);
  }
  close() {
    this.clearTimeout("open");
    if (this._overlay_ref) {
      this._overlay_ref.dispose();
      this._overlay_ref = null;
    }
  }
  _canOpenHoverTooltip(event) {
    if (!this.hover())
      return false;
    return !("pointerType" in event) || event.pointerType !== "touch";
  }
};
_CustomTooltipComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275CustomTooltipComponent_BaseFactory;
  return function CustomTooltipComponent_Factory(__ngFactoryType__) {
    return (\u0275CustomTooltipComponent_BaseFactory || (\u0275CustomTooltipComponent_BaseFactory = \u0275\u0275getInheritedFactory(_CustomTooltipComponent)))(__ngFactoryType__ || _CustomTooltipComponent);
  };
})();
_CustomTooltipComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomTooltipComponent, selectors: [["", "customTooltip", ""]], viewQuery: function CustomTooltipComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx._portal_content, _c0, 5, TemplateRef);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, inputs: { x_pos: [1, "xPosition", "x_pos"], y_pos: [1, "yPosition", "y_pos"], content: [1, "content"], data: [1, "data"], backdrop: [1, "backdrop"], hover: [1, "hover"], delay: [1, "delay"], x_offset: [1, "xOffset", "x_offset"], y_offset: [1, "yOffset", "y_offset"] }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], ngContentSelectors: _c1, decls: 3, vars: 0, consts: [["portal_content", ""], ["custom-tooltip", "", 1, "relative", "print:hidden"], [3, "innerHTML"], [4, "ngComponentOutlet", "ngComponentOutletInjector"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function CustomTooltipComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275projection(0);
    \u0275\u0275template(1, CustomTooltipComponent_ng_template_1_Template, 4, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
}, dependencies: [CommonModule, NgComponentOutlet, NgTemplateOutlet, SanitizePipe], styles: ["\n[_nghost-%COMP%] {\n  pointer-events: auto !important;\n}\n/*# sourceMappingURL=custom-tooltip.component.css.map */"] });
var CustomTooltipComponent = _CustomTooltipComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomTooltipComponent, [{
    type: Component,
    args: [{ selector: "[customTooltip]", template: `
        <ng-content />
        <ng-template #portal_content>
            <div custom-tooltip class="relative print:hidden">
                @switch (type()) {
                    @case ('component') {
                        <ng-container
                            *ngComponentOutlet="component(); injector: injector"
                        ></ng-container>
                    }
                    @case ('html') {
                        <div [innerHTML]="html() | sanitize"></div>
                    }
                    @default {
                        <ng-container
                            *ngTemplateOutlet="template(); context: data()"
                        ></ng-container>
                    }
                }
            </div>
        </ng-template>
    `, imports: [CommonModule, SanitizePipe], styles: ["/* angular:styles/component:css;9f88acd9967d2b0ebf3bc5241107eaa7c3672b233611fbb42832362998689b5f;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/custom-tooltip.component.ts */\n:host {\n  pointer-events: auto !important;\n}\n/*# sourceMappingURL=custom-tooltip.component.css.map */\n"] }]
  }], null, { x_pos: [{ type: Input, args: [{ isSignal: true, alias: "xPosition", required: false }] }], y_pos: [{ type: Input, args: [{ isSignal: true, alias: "yPosition", required: false }] }], content: [{ type: Input, args: [{ isSignal: true, alias: "content", required: false }] }], data: [{ type: Input, args: [{ isSignal: true, alias: "data", required: false }] }], backdrop: [{ type: Input, args: [{ isSignal: true, alias: "backdrop", required: false }] }], hover: [{ type: Input, args: [{ isSignal: true, alias: "hover", required: false }] }], delay: [{ type: Input, args: [{ isSignal: true, alias: "delay", required: false }] }], x_offset: [{ type: Input, args: [{ isSignal: true, alias: "xOffset", required: false }] }], y_offset: [{ type: Input, args: [{ isSignal: true, alias: "yOffset", required: false }] }], _portal_content: [{ type: ViewChild, args: ["portal_content", __spreadProps(__spreadValues({}, {
    read: TemplateRef
  }), { isSignal: true })] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomTooltipComponent, { className: "CustomTooltipComponent", filePath: "libs/components/src/lib/custom-tooltip.component.ts", lineNumber: 64 });
})();

export {
  SanitizePipe,
  CustomTooltipData,
  CustomTooltipComponent
};
//# debugId=fa1ced3e-4116-5d6a-a1ff-5da0b86af6a4
//# sourceMappingURL=chunk-7MA4WPD3.js.map
