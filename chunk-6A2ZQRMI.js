import {
  PaymentDetailsModalComponent
} from "./chunk-YRIDROTR.js";
import {
  PaymentsService
} from "./chunk-QWDE7PI3.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-MQEEHHA6.js";
import {
  MatDialog
} from "./chunk-XXKPMVFX.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-42S2QJDR.js";
import {
  TranslatePipe
} from "./chunk-CYBUGQ5C.js";
import {
  IconComponent
} from "./chunk-OCRUIWUS.js";
import {
  errorMessage,
  i18n,
  notifyError
} from "./chunk-4TMK6UP3.js";
import {
  MatRippleModule
} from "./chunk-CWCNI2O4.js";
import {
  MatRipple
} from "./chunk-DPVBDHKH.js";
import {
  Component,
  Input,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext
} from "./chunk-J4V3B3VF.js";

// libs/payments/src/lib/booking-payment.component.ts
function BookingPaymentComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 2);
  }
}
function BookingPaymentComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon");
    \u0275\u0275text(1, "paid");
    \u0275\u0275elementEnd();
  }
}
function BookingPaymentComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 1);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function BookingPaymentComponent_Conditional_0_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.open();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275conditionalCreate(3, BookingPaymentComponent_Conditional_0_Conditional_3_Template, 1, 0, "mat-spinner", 2)(4, BookingPaymentComponent_Conditional_0_Conditional_4_Template, 2, 0, "icon");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 4, "PAYMENTS.VIEW_PAYMENT"))("disabled", ctx_r1.loading());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 6, "PAYMENTS.VIEW_PAYMENT"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.loading() ? 3 : 4);
  }
}
var BookingPaymentComponent = class _BookingPaymentComponent {
  constructor() {
    this._payments = inject(PaymentsService);
    this._dialog = inject(MatDialog);
    this.payment_id = input(
      "",
      ...ngDevMode ? [{ debugName: "payment_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.reference = input(
      ...ngDevMode ? [void 0, { debugName: "reference" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.resources = input(
      ...ngDevMode ? [void 0, { debugName: "resources" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.enabled = this._payments.is_enabled;
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async open() {
    const id = this.payment_id();
    if (!id || this.loading())
      return;
    this.loading.set(true);
    try {
      const payment = await this._payments.call("get_payment", id);
      this._dialog.open(PaymentDetailsModalComponent, {
        data: {
          payment,
          reference: this.reference(),
          exclude_resource_ids: declinedRooms(payment, this.resources())
        }
      });
    } catch (e) {
      notifyError(i18n("PAYMENTS.LOAD_ERROR", { error: errorMessage(e) || e }));
    } finally {
      this.loading.set(false);
    }
  }
  static {
    this.\u0275fac = function BookingPaymentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookingPaymentComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingPaymentComponent, selectors: [["booking-payment"]], inputs: { payment_id: [1, "payment_id"], reference: [1, "reference"], resources: [1, "resources"] }, decls: 1, vars: 1, consts: [["icon", "", "matRipple", "", "name", "view-payment", 1, "text-success", 3, "matTooltip", "disabled"], ["icon", "", "matRipple", "", "name", "view-payment", 1, "text-success", 3, "click", "matTooltip", "disabled"], ["diameter", "20", "aria-hidden", "true"]], template: function BookingPaymentComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, BookingPaymentComponent_Conditional_0_Template, 5, 8, "button", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.payment_id() && ctx.enabled() ? 0 : -1);
      }
    }, dependencies: [
      IconComponent,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookingPaymentComponent, [{
    type: Component,
    args: [{
      selector: "booking-payment",
      template: `
        @if (payment_id() && enabled()) {
            <button
                icon
                matRipple
                name="view-payment"
                class="text-success"
                [matTooltip]="'PAYMENTS.VIEW_PAYMENT' | translate"
                [attr.aria-label]="'PAYMENTS.VIEW_PAYMENT' | translate"
                [disabled]="loading()"
                (click)="open(); $event.stopPropagation()"
            >
                @if (loading()) {
                    <mat-spinner diameter="20" aria-hidden="true"></mat-spinner>
                } @else {
                    <icon>paid</icon>
                }
            </button>
        }
    `,
      imports: [
        IconComponent,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatTooltipModule,
        TranslatePipe
      ]
    }]
  }], null, { payment_id: [{ type: Input, args: [{ isSignal: true, alias: "payment_id", required: false }] }], reference: [{ type: Input, args: [{ isSignal: true, alias: "reference", required: false }] }], resources: [{ type: Input, args: [{ isSignal: true, alias: "resources", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingPaymentComponent, { className: "BookingPaymentComponent", filePath: "libs/payments/src/lib/booking-payment.component.ts", lineNumber: 55 });
})();
function declinedRooms(payment, resources) {
  if (!resources)
    return [];
  const accepted = new Set(resources.filter((_) => _.response_status !== "declined").map((_) => _.id));
  return payment.items.filter((_) => _.resource_type === "room" && !accepted.has(_.resource_id)).map((_) => _.resource_id);
}

export {
  BookingPaymentComponent
};
//# debugId=0cab24a9-d0ee-56c2-a5a5-82a14a9c318e
//# sourceMappingURL=chunk-6A2ZQRMI.js.map
