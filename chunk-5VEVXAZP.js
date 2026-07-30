import {
  AsyncHandler,
  CdkPortal,
  CommonModule,
  Component,
  Input,
  NgTemplateOutlet,
  Overlay,
  PortalModule,
  ViewChild,
  forwardRef,
  inject,
  input,
  setClassMetadata,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵtemplate,
  ɵɵviewQuerySignal
} from "./chunk-UZ4AUCKX.js";

// libs/components/src/lib/printable.component.ts
function PrintableComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function PrintableComponent_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function PrintableComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275template(1, PrintableComponent_ng_template_2_ng_container_1_Template, 1, 0, "ng-container", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.content());
  }
}
var PrintableComponent = class _PrintableComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._overlay = inject(Overlay);
    this._overlay_ref = null;
    this._portal = viewChild(
      CdkPortal,
      ...ngDevMode ? [{ debugName: "_portal" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.content = input(
      void 0,
      ...ngDevMode ? [{ debugName: "content" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    this.open();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this.close();
  }
  open() {
    this.timeout("open", () => {
      if (this._overlay_ref)
        this.close();
      const _portal = this._portal();
      if (!_portal)
        return;
      this._overlay_ref = this._overlay.create({
        hasBackdrop: false,
        positionStrategy: this._overlay.position().global().left("0").top("0")
      });
      this._overlay_ref.attach(_portal);
    }, 50);
  }
  close() {
    this.clearTimeout("open");
    if (this._overlay_ref) {
      this._overlay_ref.dispose();
      this._overlay_ref = null;
    }
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275PrintableComponent_BaseFactory;
      return function PrintableComponent_Factory(__ngFactoryType__) {
        return (\u0275PrintableComponent_BaseFactory || (\u0275PrintableComponent_BaseFactory = \u0275\u0275getInheritedFactory(_PrintableComponent)))(__ngFactoryType__ || _PrintableComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrintableComponent, selectors: [["", "printable", ""]], viewQuery: function PrintableComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._portal, CdkPortal, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, inputs: { content: [1, "content"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 1, consts: [[1, "printable-screen-view"], [4, "ngTemplateOutlet"], ["cdkPortal", ""], ["printable-view", "", 1, "pointer-events-none", "hidden", "print:block"]], template: function PrintableComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, PrintableComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275template(2, PrintableComponent_ng_template_2_Template, 2, 1, "ng-template", 2);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.content());
      }
    }, dependencies: [CommonModule, NgTemplateOutlet, PortalModule, CdkPortal], styles: ["\n@media print {\n  .printable-screen-view[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=printable.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrintableComponent, [{
    type: Component,
    args: [{ selector: "[printable]", template: `
        <div class="printable-screen-view">
            <ng-container *ngTemplateOutlet="content()"></ng-container>
        </div>

        <ng-template cdkPortal>
            <div printable-view class="pointer-events-none hidden print:block">
                <ng-container *ngTemplateOutlet="content()"></ng-container>
            </div>
        </ng-template>
    `, imports: [CommonModule, PortalModule], styles: ["/* angular:styles/component:css;623b9fbb3dca3121a83f2287e20723619d96d2cc73b59d36bbafebc1a713b409;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/printable.component.ts */\n@media print {\n  .printable-screen-view {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=printable.component.css.map */\n"] }]
  }], null, { _portal: [{ type: ViewChild, args: [forwardRef(() => CdkPortal), { isSignal: true }] }], content: [{ type: Input, args: [{ isSignal: true, alias: "content", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrintableComponent, { className: "PrintableComponent", filePath: "libs/components/src/lib/printable.component.ts", lineNumber: 40 });
})();

export {
  PrintableComponent
};
//# sourceMappingURL=chunk-5VEVXAZP.js.map
