import {
  CheckoutCancelledError,
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule,
  PaymentEndedError,
  PaymentWindowClosedError,
  openPaymentWindow
} from "./chunk-6PYAOQSJ.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-PXDR2Z3C.js";
import "./chunk-2BIJ6DLE.js";
import {
  AnnounceDirective
} from "./chunk-SN7BSHU3.js";
import {
  TranslatePipe
} from "./chunk-LANAQYXG.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-XDYJDWHO.js";
import {
  IconComponent,
  errorMessage,
  i18n
} from "./chunk-SISTMAY7.js";
import "./chunk-X3O2ONMK.js";
import "./chunk-AJBEQOPT.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-TYJTQNK7.js";
import "./chunk-FKG35J4T.js";
import "./chunk-S6E4ARWM.js";
import {
  Component,
  Pipe,
  ViewChild,
  effect,
  inject,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-4A5Q3BWK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-RQBZITXC.js";

// libs/payments/src/lib/payment-amount.pipe.ts
function currencyDigits(currency) {
  try {
    return new Intl.NumberFormat("en", {
      style: "currency",
      currency
    }).resolvedOptions().maximumFractionDigits ?? 2;
  } catch {
    return 2;
  }
}
function toMajorUnits(amount, currency) {
  return amount / 10 ** currencyDigits(currency);
}
function formatAmount(amount, currency) {
  const code = currency?.toUpperCase() || "USD";
  try {
    return new Intl.NumberFormat(void 0, {
      style: "currency",
      currency: code
    }).format(toMajorUnits(amount || 0, code));
  } catch {
    return `${toMajorUnits(amount || 0, code).toFixed(2)} ${code}`;
  }
}
function unitKey(unit) {
  return `PAYMENTS.UNIT_${(unit || "item").toUpperCase()}`;
}
var PaymentAmountPipe = class _PaymentAmountPipe {
  transform(amount, currency) {
    return formatAmount(amount ?? 0, currency);
  }
  static {
    this.\u0275fac = function PaymentAmountPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaymentAmountPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "amount", type: _PaymentAmountPipe, pure: true });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentAmountPipe, [{
    type: Pipe,
    args: [{ name: "amount" }]
  }], null, null);
})();

// libs/payments/src/lib/payment-checkout-modal.component.ts
var _c0 = ["pay_button"];
var _c1 = ["reopen_button"];
var _c2 = ["stop_button"];
var _c3 = (a0) => ({ amount: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function PaymentCheckoutModalComponent_Conditional_4_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 9)(1, "div", 18)(2, "div", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 20);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "amount");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "amount");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r2.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", item_r2.quantity, " \xD7 ", \u0275\u0275pipeBind2(6, 5, item_r2.unit_amount, ctx_r2.data.quote.currency), " ", \u0275\u0275pipeBind1(7, 8, ctx_r2.unit_key(item_r2.unit)), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 10, item_r2.amount, ctx_r2.data.quote.currency), " ");
  }
}
function PaymentCheckoutModalComponent_Conditional_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "dt");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dd");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "amount");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 21)(8, "dt");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "dd");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "amount");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "PAYMENTS.SUBTOTAL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 6, ctx_r2.data.quote.subtotal, ctx_r2.data.quote.currency), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 9, "PAYMENTS.TAX"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(13, 11, ctx_r2.data.quote.tax, ctx_r2.data.quote.currency), " ");
  }
}
function PaymentCheckoutModalComponent_Conditional_4_Conditional_15_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-button", 24)(1, "span", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "span", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const method_r5 = ctx.$implicit;
    \u0275\u0275property("value", method_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(method_r5.brand || method_r5.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2022\u2022\u2022\u2022 ", method_r5.last4, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", method_r5.exp_month, "/", method_r5.exp_year, " ");
  }
}
function PaymentCheckoutModalComponent_Conditional_4_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "fieldset")(1, "legend", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-radio-group", 23);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentCheckoutModalComponent_Conditional_4_Conditional_15_Template_mat_radio_group_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.method_id, $event) || (ctx_r2.method_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(5, PaymentCheckoutModalComponent_Conditional_4_Conditional_15_For_6_Template, 6, 5, "mat-radio-button", 24, _forTrack0);
    \u0275\u0275elementStart(7, "mat-radio-button", 24);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "PAYMENTS.PAY_WITH"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.method_id);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.data.methods);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r2.new_method);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 6, "PAYMENTS.NEW_METHOD"), " ");
  }
}
function PaymentCheckoutModalComponent_Conditional_4_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 26);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentCheckoutModalComponent_Conditional_4_Conditional_16_Template_mat_checkbox_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.save_method, $event) || (ctx_r2.save_method = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.save_method);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "PAYMENTS.SAVE_METHOD"), " ");
  }
}
function PaymentCheckoutModalComponent_Conditional_4_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.error(), " ");
  }
}
function PaymentCheckoutModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 6)(1, "p", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 8);
    \u0275\u0275repeaterCreate(4, PaymentCheckoutModalComponent_Conditional_4_For_5_Template, 11, 13, "li", 9, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "dl", 10);
    \u0275\u0275conditionalCreate(7, PaymentCheckoutModalComponent_Conditional_4_Conditional_7_Template, 14, 14);
    \u0275\u0275elementStart(8, "div", 11)(9, "dt");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "dd", 12);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "amount");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(15, PaymentCheckoutModalComponent_Conditional_4_Conditional_15_Template, 10, 8, "fieldset");
    \u0275\u0275conditionalCreate(16, PaymentCheckoutModalComponent_Conditional_4_Conditional_16_Template, 3, 4, "mat-checkbox", 13);
    \u0275\u0275conditionalCreate(17, PaymentCheckoutModalComponent_Conditional_4_Conditional_17_Template, 2, 1, "p", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "footer", 15)(19, "button", 16);
    \u0275\u0275listener("click", function PaymentCheckoutModalComponent_Conditional_4_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 17, 0);
    \u0275\u0275listener("click", function PaymentCheckoutModalComponent_Conditional_4_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.pay());
    });
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "amount");
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.data.description);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.data.quote.items);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.data.quote.tax > 0 ? 7 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "PAYMENTS.TOTAL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 11, ctx_r2.data.quote.total, ctx_r2.data.quote.currency), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.data.methods.length ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.data.can_save_method && ctx_r2.method_id() === ctx_r2.new_method ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.error() ? 17 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 14, "COMMON.CANCEL"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(26, 19, "PAYMENTS.PAY_AMOUNT", \u0275\u0275pureFunction1(22, _c3, \u0275\u0275pipeBind2(25, 16, ctx_r2.data.quote.total, ctx_r2.data.quote.currency))), " ");
  }
}
function PaymentCheckoutModalComponent_Conditional_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.error(), " ");
  }
}
function PaymentCheckoutModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 5)(1, "icon", 27);
    \u0275\u0275text(2, "tab_close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 28);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, PaymentCheckoutModalComponent_Conditional_5_Conditional_6_Template, 2, 1, "p", 14);
    \u0275\u0275elementStart(7, "button", 29, 1);
    \u0275\u0275listener("click", function PaymentCheckoutModalComponent_Conditional_5_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.reopen());
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementStart(11, "icon", 30);
    \u0275\u0275text(12, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 31);
    \u0275\u0275listener("click", function PaymentCheckoutModalComponent_Conditional_5_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancelPayment());
    });
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 10, "PAYMENTS.WINDOW_CLOSED"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.error() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-50", ctx_r2.cancelling());
    \u0275\u0275attribute("aria-disabled", ctx_r2.cancelling());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 12, "PAYMENTS.REOPEN_PAYMENT_PAGE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("opacity-50", ctx_r2.cancelling());
    \u0275\u0275attribute("aria-disabled", ctx_r2.cancelling());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 14, "PAYMENTS.CANCEL_PAYMENT"), " ");
  }
}
function PaymentCheckoutModalComponent_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 34);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "icon", 30);
    \u0275\u0275text(7, "open_in_new");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "PAYMENTS.COMPLETE_IN_WINDOW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("href", ctx_r2.hosted_url(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 5, "PAYMENTS.OPEN_PAYMENT_PAGE"), " ");
  }
}
function PaymentCheckoutModalComponent_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "PAYMENTS.PROCESSING"));
  }
}
function PaymentCheckoutModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 5);
    \u0275\u0275element(1, "mat-spinner", 32);
    \u0275\u0275conditionalCreate(2, PaymentCheckoutModalComponent_Conditional_6_Conditional_2_Template, 8, 7)(3, PaymentCheckoutModalComponent_Conditional_6_Conditional_3_Template, 3, 3, "p", 28);
    \u0275\u0275elementStart(4, "button", 33, 2);
    \u0275\u0275listener("click", function PaymentCheckoutModalComponent_Conditional_6_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.stop());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.hosted_url() ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 2, "PAYMENTS.CANCEL_PAYMENT"), " ");
  }
}
var NEW_METHOD = "";
var PaymentCheckoutModalComponent = class _PaymentCheckoutModalComponent {
  constructor() {
    this._ref = inject(MatDialogRef);
    this._open_payment_id = "";
    this.data = inject(MAT_DIALOG_DATA);
    this.new_method = NEW_METHOD;
    this.unit_key = unitKey;
    this.method_id = signal(
      this.data.methods.find((_) => _.is_default)?.id ?? this.data.methods[0]?.id ?? NEW_METHOD,
      ...ngDevMode ? [{ debugName: "method_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.save_method = signal(
      false,
      ...ngDevMode ? [{ debugName: "save_method" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.view = signal(
      "review",
      ...ngDevMode ? [{ debugName: "view" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hosted_url = signal(
      "",
      ...ngDevMode ? [{ debugName: "hosted_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.error = signal(
      "",
      ...ngDevMode ? [{ debugName: "error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.cancelling = signal(
      false,
      ...ngDevMode ? [{ debugName: "cancelling" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._pay_button = viewChild(
      "pay_button",
      ...ngDevMode ? [{ debugName: "_pay_button" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._reopen_button = viewChild(
      "reopen_button",
      ...ngDevMode ? [{ debugName: "_reopen_button" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._stop_button = viewChild(
      "stop_button",
      ...ngDevMode ? [{ debugName: "_stop_button" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => this._pay_button()?.nativeElement.focus());
    effect(() => this._reopen_button()?.nativeElement.focus());
    effect(() => this._stop_button()?.nativeElement.focus());
  }
  async pay() {
    const method_id = this.method_id() || void 0;
    const window_ref = method_id ? null : openPaymentWindow();
    if (!method_id && !window_ref)
      return this._popupBlocked();
    await this._run(window_ref, (options) => this.data.pay(__spreadProps(__spreadValues({}, options), {
      method_id,
      save_method: !method_id && this.save_method()
    })));
  }
  /** Open the hosted page again with a new link from the driver */
  async reopen() {
    const id = this._open_payment_id;
    if (!id || this.cancelling())
      return;
    const window_ref = openPaymentWindow();
    if (!window_ref)
      return this._popupBlocked();
    await this._run(window_ref, (options) => this.data.resume(id, options));
  }
  /**
   * Cancel the open payment and go back to the review. Stays on the open
   * payment when the cancel fails, so the user cannot pay twice.
   */
  async cancelPayment() {
    const id = this._open_payment_id;
    if (!id || this.cancelling())
      return;
    this.cancelling.set(true);
    this.error.set("");
    try {
      await this.data.cancel(id);
      this._open_payment_id = "";
      this.view.set("review");
    } catch (e) {
      this.error.set(errorMessage(e) || i18n("PAYMENTS.PAYMENT_FAILED"));
    } finally {
      this.cancelling.set(false);
    }
  }
  /** Stop waiting for the hosted page. The service cancels the payment */
  stop() {
    this._abort?.abort();
  }
  close() {
    this._ref.close();
  }
  ngOnDestroy() {
    if (this.view() === "processing")
      return this._abort?.abort();
    if (this._open_payment_id && !this.cancelling()) {
      this.data.cancel(this._open_payment_id).catch(() => null);
    }
  }
  /** Wait for a payment, then close with it or show what went wrong */
  async _run(window_ref, action) {
    this._abort = new AbortController();
    this.error.set("");
    this.hosted_url.set("");
    this.view.set("processing");
    try {
      const payment = await action({
        window: window_ref,
        signal: this._abort.signal,
        on_url: (url) => this.hosted_url.set(url)
      });
      this._open_payment_id = "";
      this._ref.close(payment);
    } catch (e) {
      window_ref?.close();
      if (e instanceof PaymentWindowClosedError) {
        this._open_payment_id = e.payment_id;
        this.view.set("closed");
        this.error.set(e.reason);
        return;
      }
      if (this._open_payment_id && !(e instanceof CheckoutCancelledError) && !(e instanceof PaymentEndedError)) {
        this.view.set("closed");
        this.error.set(errorMessage(e) || i18n("PAYMENTS.PAYMENT_FAILED"));
        return;
      }
      this._open_payment_id = "";
      this.view.set("review");
      if (!(e instanceof CheckoutCancelledError)) {
        this.error.set(errorMessage(e) || i18n("PAYMENTS.PAYMENT_FAILED"));
      }
    }
  }
  _popupBlocked() {
    this.error.set(i18n("PAYMENTS.POPUP_BLOCKED"));
  }
  static {
    this.\u0275fac = function PaymentCheckoutModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaymentCheckoutModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentCheckoutModalComponent, selectors: [["payment-checkout-modal"]], viewQuery: function PaymentCheckoutModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._pay_button, _c0, 5)(ctx._reopen_button, _c1, 5)(ctx._stop_button, _c2, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(3);
      }
    }, decls: 7, vars: 4, consts: [["pay_button", ""], ["reopen_button", ""], ["stop_button", ""], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "flex", "h-14", "w-[calc(100%-1rem)]", "min-w-[20rem]", "items-center", "rounded-sm", "p-2"], ["mat-dialog-title", "", 1, "px-2", "text-xl", "font-medium"], [1, "flex", "w-md", "max-w-[85vw]", "flex-col", "items-center", "space-y-4", "p-8", "text-center"], [1, "w-md", "max-w-[85vw]", "space-y-4", "p-4"], [1, "text-sm", "opacity-70"], [1, "divide-base-200", "divide-y", "text-sm"], [1, "flex", "items-center", "gap-2", "py-2"], [1, "border-base-200", "space-y-1", "border-t", "pt-2", "text-sm"], [1, "flex", "justify-between", "text-base", "font-medium"], ["total", ""], [3, "ngModel"], ["announce", "", 1, "bg-error/10", "text-error", "rounded-sm", "p-2", "text-sm"], [1, "bg-base-200", "sticky", "bottom-0", "m-2", "flex", "items-center", "gap-2", "rounded-sm", "p-2"], ["btn", "", "matRipple", "", 1, "inverse", "bg-base-100", "flex-1", 3, "click"], ["btn", "", "matRipple", "", "name", "pay", 1, "flex-1", 3, "click"], [1, "min-w-0", "flex-1"], [1, "truncate", "font-medium"], [1, "text-xs", "opacity-70"], [1, "flex", "justify-between"], [1, "mb-1", "text-sm", "font-medium"], [1, "flex", "flex-col", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "capitalize"], [3, "ngModelChange", "ngModel"], [1, "text-5xl", "opacity-60"], ["announce", ""], ["btn", "", "matRipple", "", "name", "reopen", 3, "click"], [1, "ml-2", "text-xl"], ["btn", "", "matRipple", "", "name", "cancel-payment", 1, "clear", 3, "click"], ["diameter", "32", "aria-hidden", "true"], ["btn", "", "matRipple", "", 1, "clear", 3, "click"], ["btn", "", "matRipple", "", "target", "_blank", "rel", "noopener", 1, "inverse", 3, "href"]], template: function PaymentCheckoutModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 3)(1, "h2", 4);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(4, PaymentCheckoutModalComponent_Conditional_4_Template, 27, 24)(5, PaymentCheckoutModalComponent_Conditional_5_Template, 16, 16, "main", 5)(6, PaymentCheckoutModalComponent_Conditional_6_Template, 8, 4, "main", 5);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "PAYMENTS.CHECKOUT_TITLE"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.view() === "review" ? 4 : ctx.view() === "closed" ? 5 : 6);
      }
    }, dependencies: [
      AnnounceDirective,
      FormsModule,
      NgControlStatus,
      NgModel,
      IconComponent,
      MatCheckboxModule,
      MatCheckbox,
      MatDialogModule,
      MatDialogTitle,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRadioModule,
      MatRadioGroup,
      MatRadioButton,
      MatRippleModule,
      MatRipple,
      PaymentAmountPipe,
      TranslatePipe
    ], styles: ["\nh2[mat-dialog-title][_ngcontent-%COMP%] {\n  color: inherit;\n  font-family: inherit;\n  letter-spacing: inherit;\n  margin: 0;\n  padding: 0;\n}\nh2[mat-dialog-title][_ngcontent-%COMP%]::before {\n  display: none;\n}\n/*# sourceMappingURL=payment-checkout-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentCheckoutModalComponent, [{
    type: Component,
    args: [{ selector: "payment-checkout-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 flex h-14 w-[calc(100%-1rem)] min-w-[20rem] items-center rounded-sm p-2"
        >
            <h2 mat-dialog-title class="px-2 text-xl font-medium">
                {{ 'PAYMENTS.CHECKOUT_TITLE' | translate }}
            </h2>
        </header>
        @if (view() === 'review') {
            <main class="w-md max-w-[85vw] space-y-4 p-4">
                <p class="text-sm opacity-70">{{ data.description }}</p>
                <ul class="divide-base-200 divide-y text-sm">
                    @for (item of data.quote.items; track $index) {
                        <li class="flex items-center gap-2 py-2">
                            <div class="min-w-0 flex-1">
                                <div class="truncate font-medium">
                                    {{ item.name }}
                                </div>
                                <div class="text-xs opacity-70">
                                    {{ item.quantity }} \xD7
                                    {{
                                        item.unit_amount
                                            | amount: data.quote.currency
                                    }}
                                    {{ unit_key(item.unit) | translate }}
                                </div>
                            </div>
                            <div>
                                {{ item.amount | amount: data.quote.currency }}
                            </div>
                        </li>
                    }
                </ul>
                <dl class="border-base-200 space-y-1 border-t pt-2 text-sm">
                    @if (data.quote.tax > 0) {
                        <div class="flex justify-between">
                            <dt>{{ 'PAYMENTS.SUBTOTAL' | translate }}</dt>
                            <dd>
                                {{
                                    data.quote.subtotal
                                        | amount: data.quote.currency
                                }}
                            </dd>
                        </div>
                        <div class="flex justify-between">
                            <dt>{{ 'PAYMENTS.TAX' | translate }}</dt>
                            <dd>
                                {{
                                    data.quote.tax | amount: data.quote.currency
                                }}
                            </dd>
                        </div>
                    }
                    <div class="flex justify-between text-base font-medium">
                        <dt>{{ 'PAYMENTS.TOTAL' | translate }}</dt>
                        <dd total>
                            {{ data.quote.total | amount: data.quote.currency }}
                        </dd>
                    </div>
                </dl>
                @if (data.methods.length) {
                    <fieldset>
                        <legend class="mb-1 text-sm font-medium">
                            {{ 'PAYMENTS.PAY_WITH' | translate }}
                        </legend>
                        <mat-radio-group
                            class="flex flex-col"
                            [(ngModel)]="method_id"
                        >
                            @for (method of data.methods; track method.id) {
                                <mat-radio-button [value]="method.id">
                                    <span class="capitalize">{{
                                        method.brand || method.type
                                    }}</span>
                                    \u2022\u2022\u2022\u2022 {{ method.last4 }}
                                    <span class="text-xs opacity-70">
                                        {{ method.exp_month }}/{{
                                            method.exp_year
                                        }}
                                    </span>
                                </mat-radio-button>
                            }
                            <mat-radio-button [value]="new_method">
                                {{ 'PAYMENTS.NEW_METHOD' | translate }}
                            </mat-radio-button>
                        </mat-radio-group>
                    </fieldset>
                }
                @if (data.can_save_method && method_id() === new_method) {
                    <mat-checkbox [(ngModel)]="save_method">
                        {{ 'PAYMENTS.SAVE_METHOD' | translate }}
                    </mat-checkbox>
                }
                @if (error()) {
                    <p
                        announce
                        class="bg-error/10 text-error rounded-sm p-2 text-sm"
                    >
                        {{ error() }}
                    </p>
                }
            </main>
            <footer
                class="bg-base-200 sticky bottom-0 m-2 flex items-center gap-2 rounded-sm p-2"
            >
                <button
                    btn
                    matRipple
                    class="inverse bg-base-100 flex-1"
                    (click)="close()"
                >
                    {{ 'COMMON.CANCEL' | translate }}
                </button>
                <button
                    #pay_button
                    btn
                    matRipple
                    name="pay"
                    class="flex-1"
                    (click)="pay()"
                >
                    {{
                        'PAYMENTS.PAY_AMOUNT'
                            | translate
                                : {
                                      amount:
                                          data.quote.total
                                          | amount: data.quote.currency,
                                  }
                    }}
                </button>
            </footer>
        } @else if (view() === 'closed') {
            <main
                class="flex w-md max-w-[85vw] flex-col items-center space-y-4 p-8 text-center"
            >
                <icon class="text-5xl opacity-60">tab_close</icon>
                <p announce>{{ 'PAYMENTS.WINDOW_CLOSED' | translate }}</p>
                @if (error()) {
                    <p
                        announce
                        class="bg-error/10 text-error rounded-sm p-2 text-sm"
                    >
                        {{ error() }}
                    </p>
                }
                <button
                    #reopen_button
                    btn
                    matRipple
                    name="reopen"
                    [class.opacity-50]="cancelling()"
                    [attr.aria-disabled]="cancelling()"
                    (click)="reopen()"
                >
                    {{ 'PAYMENTS.REOPEN_PAYMENT_PAGE' | translate }}
                    <icon class="ml-2 text-xl">open_in_new</icon>
                </button>
                <button
                    btn
                    matRipple
                    name="cancel-payment"
                    class="clear"
                    [class.opacity-50]="cancelling()"
                    [attr.aria-disabled]="cancelling()"
                    (click)="cancelPayment()"
                >
                    {{ 'PAYMENTS.CANCEL_PAYMENT' | translate }}
                </button>
            </main>
        } @else {
            <main
                class="flex w-md max-w-[85vw] flex-col items-center space-y-4 p-8 text-center"
            >
                <mat-spinner diameter="32" aria-hidden="true"></mat-spinner>
                @if (hosted_url()) {
                    <p announce>
                        {{ 'PAYMENTS.COMPLETE_IN_WINDOW' | translate }}
                    </p>
                    <a
                        btn
                        matRipple
                        class="inverse"
                        target="_blank"
                        rel="noopener"
                        [href]="hosted_url()"
                    >
                        {{ 'PAYMENTS.OPEN_PAYMENT_PAGE' | translate }}
                        <icon class="ml-2 text-xl">open_in_new</icon>
                    </a>
                } @else {
                    <p announce>{{ 'PAYMENTS.PROCESSING' | translate }}</p>
                }
                <button
                    #stop_button
                    btn
                    matRipple
                    class="clear"
                    (click)="stop()"
                >
                    {{ 'PAYMENTS.CANCEL_PAYMENT' | translate }}
                </button>
            </main>
        }
    `, imports: [
      AnnounceDirective,
      FormsModule,
      IconComponent,
      MatCheckboxModule,
      MatDialogModule,
      MatProgressSpinnerModule,
      MatRadioModule,
      MatRippleModule,
      PaymentAmountPipe,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;667dd6e87a0f8ee70b196ba72e30636efb97b1c4a6897353c2c25bfa7854dc6c;/home/runner/work/user-interfaces/user-interfaces/libs/payments/src/lib/payment-checkout-modal.component.ts */\nh2[mat-dialog-title] {\n  color: inherit;\n  font-family: inherit;\n  letter-spacing: inherit;\n  margin: 0;\n  padding: 0;\n}\nh2[mat-dialog-title]::before {\n  display: none;\n}\n/*# sourceMappingURL=payment-checkout-modal.component.css.map */\n"] }]
  }], () => [], { _pay_button: [{ type: ViewChild, args: ["pay_button", { isSignal: true }] }], _reopen_button: [{ type: ViewChild, args: ["reopen_button", { isSignal: true }] }], _stop_button: [{ type: ViewChild, args: ["stop_button", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentCheckoutModalComponent, { className: "PaymentCheckoutModalComponent", filePath: "libs/payments/src/lib/payment-checkout-modal.component.ts", lineNumber: 267 });
})();
export {
  PaymentCheckoutModalComponent
};
//# debugId=6fce30e6-45bf-547c-8a33-fc367e160e33
//# sourceMappingURL=payment-checkout-modal.component-Q6FI4NFS.js.map
