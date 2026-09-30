import {
  BulkActionsBarComponent
} from "./chunk-FF5LSQHB.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-XVMLEHTH.js";
import {
  TranslatePipe
} from "./chunk-W2AEVKIZ.js";
import {
  Component,
  Input,
  Output,
  input,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-SIEX7A67.js";

// apps/concierge/src/app/ui/booking-approval-bar.component.ts
var BookingApprovalBarComponent = class _BookingApprovalBarComponent {
  constructor() {
    this.count = input(
      0,
      ...ngDevMode ? [{ debugName: "count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.busy = input(
      false,
      ...ngDevMode ? [{ debugName: "busy" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.setApproval = output();
    this.clear = output();
  }
  static {
    this.\u0275fac = function BookingApprovalBarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookingApprovalBarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingApprovalBarComponent, selectors: [["booking-approval-bar"]], inputs: { count: [1, "count"], busy: [1, "busy"] }, outputs: { setApproval: "setApproval", clear: "clear" }, decls: 7, vars: 9, consts: [[3, "clear", "count"], ["btn", "", "matRipple", "", 1, "inverse", 3, "click", "disabled"]], template: function BookingApprovalBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "bulk-actions-bar", 0);
        \u0275\u0275listener("clear", function BookingApprovalBarComponent_Template_bulk_actions_bar_clear_0_listener() {
          return ctx.clear.emit();
        });
        \u0275\u0275elementStart(1, "button", 1);
        \u0275\u0275listener("click", function BookingApprovalBarComponent_Template_button_click_1_listener() {
          return ctx.setApproval.emit(true);
        });
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 1);
        \u0275\u0275listener("click", function BookingApprovalBarComponent_Template_button_click_4_listener() {
          return ctx.setApproval.emit(false);
        });
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("count", ctx.count());
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.busy());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "APP.CONCIERGE.BULK_APPROVE"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.busy());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 7, "APP.CONCIERGE.BULK_REJECT"), " ");
      }
    }, dependencies: [BulkActionsBarComponent, MatRippleModule, MatRipple, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookingApprovalBarComponent, [{
    type: Component,
    args: [{
      selector: "booking-approval-bar",
      template: `
        <bulk-actions-bar [count]="count()" (clear)="clear.emit()">
            <button
                btn
                matRipple
                class="inverse"
                [disabled]="busy()"
                (click)="setApproval.emit(true)"
            >
                {{ 'APP.CONCIERGE.BULK_APPROVE' | translate }}
            </button>
            <button
                btn
                matRipple
                class="inverse"
                [disabled]="busy()"
                (click)="setApproval.emit(false)"
            >
                {{ 'APP.CONCIERGE.BULK_REJECT' | translate }}
            </button>
        </bulk-actions-bar>
    `,
      imports: [BulkActionsBarComponent, MatRippleModule, TranslatePipe]
    }]
  }], null, { count: [{ type: Input, args: [{ isSignal: true, alias: "count", required: false }] }], busy: [{ type: Input, args: [{ isSignal: true, alias: "busy", required: false }] }], setApproval: [{ type: Output, args: ["setApproval"] }], clear: [{ type: Output, args: ["clear"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingApprovalBarComponent, { className: "BookingApprovalBarComponent", filePath: "apps/concierge/src/app/ui/booking-approval-bar.component.ts", lineNumber: 32 });
})();

export {
  BookingApprovalBarComponent
};
//# debugId=0ede3328-34a5-5cc3-9a2b-2625d1742420
//# sourceMappingURL=chunk-EYZZM5I7.js.map
