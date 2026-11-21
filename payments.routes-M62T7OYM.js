import {
  FooterMenuComponent,
  TopbarComponent
} from "./chunk-IARY53RV.js";
import "./chunk-RTWWTA4A.js";
import "./chunk-7RA3BU2S.js";
import "./chunk-2JBFTOJJ.js";
import "./chunk-LIOREXX3.js";
import "./chunk-6DJIFQV2.js";
import "./chunk-2MI7ZYY4.js";
import "./chunk-ST2CLXF2.js";
import "./chunk-BOS5TSUN.js";
import "./chunk-RFWAREUN.js";
import "./chunk-5PIPWT6B.js";
import "./chunk-RC2PBQ7Q.js";
import "./chunk-T6ASMBTD.js";
import "./chunk-I2QDHUGS.js";
import "./chunk-XMHRP67K.js";
import "./chunk-EMYTXYHA.js";
import "./chunk-IU2VY3EB.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel
} from "./chunk-ZSWAPPTT.js";
import "./chunk-QHEVC6F4.js";
import "./chunk-JMYRG4D6.js";
import "./chunk-XACA7FNG.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  PaymentAmountPipe,
  PaymentsService,
  openConfirmModal,
  toMajorUnits,
  toMinorUnits,
  unitKey
} from "./chunk-VQ34K6EC.js";
import {
  TranslatePipe
} from "./chunk-DWBIKYJO.js";
import {
  IconComponent
} from "./chunk-UVVPYG43.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor,
  OrganisationService,
  RequiredValidator
} from "./chunk-G2NHYDWE.js";
import {
  currentUser,
  currentUserLoaded
} from "./chunk-64EVTJ55.js";
import "./chunk-SEBGBNAY.js";
import {
  errorMessage,
  i18n,
  notifyError,
  notifySuccess
} from "./chunk-HJE2QSCA.js";
import "./chunk-OJ5RESTA.js";
import "./chunk-3KHJRBXM.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-AINIX4LN.js";
import {
  Router
} from "./chunk-GHY5Z5DH.js";
import {
  Component,
  DatePipe,
  Input,
  computed,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
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
  ɵɵtwoWayProperty
} from "./chunk-D5QHX5EO.js";
import "./chunk-653SOEEV.js";

// libs/payments/src/lib/payment-status.component.ts
var STATUS_CLASSES = {
  pending: "bg-base-200",
  requires_action: "bg-warning text-warning-content",
  authorized: "bg-info text-info-content",
  succeeded: "bg-success text-success-content",
  partially_refunded: "bg-warning text-warning-content",
  refunded: "bg-base-300",
  cancelled: "bg-base-300",
  failed: "bg-error text-error-content",
  requested: "bg-warning text-warning-content",
  draft: "bg-base-200",
  open: "bg-info text-info-content",
  paid: "bg-success text-success-content",
  void: "bg-base-300"
};
var PaymentStatusComponent = class _PaymentStatusComponent {
  constructor() {
    this.status = input.required(
      ...ngDevMode ? [{ debugName: "status" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.label = computed(
      () => `PAYMENTS.STATUS_${this.status().toUpperCase()}`,
      ...ngDevMode ? [{ debugName: "label" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.classes = computed(
      () => STATUS_CLASSES[this.status()] || "bg-base-200",
      ...ngDevMode ? [{ debugName: "classes" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function PaymentStatusComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaymentStatusComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentStatusComponent, selectors: [["payment-status"]], inputs: { status: [1, "status"] }, decls: 3, vars: 5, consts: [[1, "inline-block", "rounded-full", "px-2", "py-0.5", "text-xs", "whitespace-nowrap"]], template: function PaymentStatusComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "span", 0);
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.classes());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, ctx.label()), " ");
      }
    }, dependencies: [TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentStatusComponent, [{
    type: Component,
    args: [{
      selector: "payment-status",
      template: `
        <span
            class="inline-block rounded-full px-2 py-0.5 text-xs whitespace-nowrap"
            [class]="classes()"
        >
            {{ label() | translate }}
        </span>
    `,
      imports: [TranslatePipe]
    }]
  }], null, { status: [{ type: Input, args: [{ isSignal: true, alias: "status", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentStatusComponent, { className: "PaymentStatusComponent", filePath: "libs/payments/src/lib/payment-status.component.ts", lineNumber: 35 });
})();

// libs/payments/src/lib/payment-details-modal.component.ts
var _c0 = (a0) => ({ amount: a0 });
function PaymentDetailsModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 4);
    \u0275\u0275element(1, "mat-spinner", 5);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.loading());
  }
}
function PaymentDetailsModalComponent_Conditional_10_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 6)(1, "p", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 8)(5, "mat-label");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 9);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentDetailsModalComponent_Conditional_10_Case_0_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.billing_name, $event) || (ctx_r0.billing_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-form-field", 8)(10, "mat-label");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentDetailsModalComponent_Conditional_10_Case_0_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.billing_email, $event) || (ctx_r0.billing_email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-form-field", 8)(15, "mat-label");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentDetailsModalComponent_Conditional_10_Case_0_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.billing_company, $event) || (ctx_r0.billing_company = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-form-field", 8)(20, "mat-label");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentDetailsModalComponent_Conditional_10_Case_0_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.billing_tax_id, $event) || (ctx_r0.billing_tax_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-form-field", 8)(25, "mat-label");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "textarea", 12);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentDetailsModalComponent_Conditional_10_Case_0_Template_textarea_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.billing_address, $event) || (ctx_r0.billing_address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "footer", 13)(30, "button", 14);
    \u0275\u0275listener("click", function PaymentDetailsModalComponent_Conditional_10_Case_0_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.view.set("details"));
    });
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 15);
    \u0275\u0275listener("click", function PaymentDetailsModalComponent_Conditional_10_Case_0_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.requestInvoice());
    });
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 14, "PAYMENTS.INVOICE_DETAILS_INFO"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 16, "FORM.NAME"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.billing_name);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 18, "FORM.EMAIL"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.billing_email);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 20, "PAYMENTS.COMPANY"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.billing_company);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 22, "PAYMENTS.TAX_ID"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.billing_tax_id);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 24, "PAYMENTS.BILLING_ADDRESS"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.billing_address);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 26, "COMMON.BACK"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r0.billing_name() || !ctx_r0.billing_email());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 28, ctx_r0.privileged() ? "PAYMENTS.SEND_INVOICE" : "PAYMENTS.REQUEST_INVOICE"), " ");
  }
}
function PaymentDetailsModalComponent_Conditional_10_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 6)(1, "p", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "amount");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-form-field", 8)(6, "mat-label");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentDetailsModalComponent_Conditional_10_Case_1_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.refund_amount, $event) || (ctx_r0.refund_amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-form-field", 8)(11, "mat-label");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentDetailsModalComponent_Conditional_10_Case_1_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.refund_reason, $event) || (ctx_r0.refund_reason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "footer", 13)(16, "button", 14);
    \u0275\u0275listener("click", function PaymentDetailsModalComponent_Conditional_10_Case_1_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.view.set("details"));
    });
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 17);
    \u0275\u0275listener("click", function PaymentDetailsModalComponent_Conditional_10_Case_1_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.refund());
    });
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 12, "PAYMENTS.REFUND_INFO", \u0275\u0275pureFunction1(23, _c0, \u0275\u0275pipeBind2(3, 9, ctx_r0.refundable(), ctx_r0.payment().currency))), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 15, "PAYMENTS.REFUND_AMOUNT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("max", ctx_r0.refundable_major());
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.refund_amount);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 17, "PAYMENTS.REFUND_REASON"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.refund_reason);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 19, "COMMON.BACK"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r0.valid_refund());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 21, "PAYMENTS.REFUND"), " ");
  }
}
function PaymentDetailsModalComponent_Conditional_10_Case_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "dt", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "amount");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "PAYMENTS.REFUNDED"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 4, ctx_r0.payment().amount_refunded, ctx_r0.payment().currency), " ");
  }
}
function PaymentDetailsModalComponent_Conditional_10_Case_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "dt", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "span", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "PAYMENTS.USER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.payment().user_name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.payment().user_email);
  }
}
function PaymentDetailsModalComponent_Conditional_10_Case_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "dt", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const method_r4 = ctx;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "PAYMENTS.METHOD"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", method_r4.brand || method_r4.type, " \u2022\u2022\u2022\u2022 ", method_r4.last4, " ");
  }
}
function PaymentDetailsModalComponent_Conditional_10_Case_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "dt", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd", 22);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ref_r5 = ctx;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "PAYMENTS.REFERENCE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ref_r5.type, " ", ref_r5.id, " ");
  }
}
function PaymentDetailsModalComponent_Conditional_10_Case_2_Conditional_22_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 33)(1, "div", 34)(2, "div", 31);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35);
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
    const item_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r6.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", item_r6.quantity, " \xD7 ", \u0275\u0275pipeBind2(6, 5, item_r6.unit_amount, ctx_r0.payment().currency), " ", \u0275\u0275pipeBind1(7, 8, ctx_r0.unit_key(item_r6.unit)), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 10, item_r6.amount, ctx_r0.payment().currency), " ");
  }
}
function PaymentDetailsModalComponent_Conditional_10_Case_2_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 23);
    \u0275\u0275repeaterCreate(1, PaymentDetailsModalComponent_Conditional_10_Case_2_Conditional_22_For_2_Template, 11, 13, "li", 33, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.payment().items);
  }
}
function PaymentDetailsModalComponent_Conditional_10_Case_2_Conditional_23_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 37);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "open_in_new");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const inv_r7 = \u0275\u0275nextContext();
    \u0275\u0275property("href", inv_r7.pdf_url || inv_r7.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "PAYMENTS.VIEW_INVOICE"));
  }
}
function PaymentDetailsModalComponent_Conditional_10_Case_2_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "icon", 36);
    \u0275\u0275text(2, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 34)(4, "div", 21);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 35);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(10, "payment-status", 2);
    \u0275\u0275conditionalCreate(11, PaymentDetailsModalComponent_Conditional_10_Case_2_Conditional_23_Conditional_11_Template, 4, 4, "a", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const inv_r7 = ctx;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(6, 5, "PAYMENTS.INVOICE"), " ", inv_r7.number, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 7, inv_r7.created_at * 1e3, "mediumDate"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("status", inv_r7.status);
    \u0275\u0275advance();
    \u0275\u0275conditional(inv_r7.pdf_url || inv_r7.url ? 11 : -1);
  }
}
function PaymentDetailsModalComponent_Conditional_10_Case_2_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function PaymentDetailsModalComponent_Conditional_10_Case_2_Conditional_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.complete());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PAYMENTS.COMPLETE_PAYMENT"), " ");
  }
}
function PaymentDetailsModalComponent_Conditional_10_Case_2_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("href", ctx_r0.payment().receipt_url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "PAYMENTS.VIEW_RECEIPT"), " ");
  }
}
function PaymentDetailsModalComponent_Conditional_10_Case_2_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function PaymentDetailsModalComponent_Conditional_10_Case_2_Conditional_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.sendInvoice());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PAYMENTS.SEND_INVOICE"), " ");
  }
}
function PaymentDetailsModalComponent_Conditional_10_Case_2_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function PaymentDetailsModalComponent_Conditional_10_Case_2_Conditional_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.view.set("invoice"));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.privileged() ? "PAYMENTS.SEND_INVOICE" : "PAYMENTS.REQUEST_INVOICE"), " ");
  }
}
function PaymentDetailsModalComponent_Conditional_10_Case_2_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function PaymentDetailsModalComponent_Conditional_10_Case_2_Conditional_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.view.set("refund"));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PAYMENTS.REFUND"), " ");
  }
}
function PaymentDetailsModalComponent_Conditional_10_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 18)(1, "dl", 19)(2, "dt", 20);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "dd", 21);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "amount");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, PaymentDetailsModalComponent_Conditional_10_Case_2_Conditional_8_Template, 6, 7);
    \u0275\u0275elementStart(9, "dt", 20);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "dd");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, PaymentDetailsModalComponent_Conditional_10_Case_2_Conditional_15_Template, 7, 5);
    \u0275\u0275conditionalCreate(16, PaymentDetailsModalComponent_Conditional_10_Case_2_Conditional_16_Template, 5, 5);
    \u0275\u0275conditionalCreate(17, PaymentDetailsModalComponent_Conditional_10_Case_2_Conditional_17_Template, 5, 5);
    \u0275\u0275elementStart(18, "dt", 20);
    \u0275\u0275text(19, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "dd", 22);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(22, PaymentDetailsModalComponent_Conditional_10_Case_2_Conditional_22_Template, 3, 0, "ul", 23);
    \u0275\u0275conditionalCreate(23, PaymentDetailsModalComponent_Conditional_10_Case_2_Conditional_23_Template, 12, 10, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "footer", 25);
    \u0275\u0275conditionalCreate(25, PaymentDetailsModalComponent_Conditional_10_Case_2_Conditional_25_Template, 3, 3, "button", 26);
    \u0275\u0275conditionalCreate(26, PaymentDetailsModalComponent_Conditional_10_Case_2_Conditional_26_Template, 3, 4, "a", 27);
    \u0275\u0275conditionalCreate(27, PaymentDetailsModalComponent_Conditional_10_Case_2_Conditional_27_Template, 3, 3, "button", 28)(28, PaymentDetailsModalComponent_Conditional_10_Case_2_Conditional_28_Template, 3, 3, "button", 29);
    \u0275\u0275conditionalCreate(29, PaymentDetailsModalComponent_Conditional_10_Case_2_Conditional_29_Template, 3, 3, "button", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_9_0;
    let tmp_12_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 15, "PAYMENTS.AMOUNT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 17, ctx_r0.payment().amount, ctx_r0.payment().currency), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.payment().amount_refunded > 0 ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 20, "PAYMENTS.DATE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 22, ctx_r0.payment().created_at * 1e3, "medium"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.privileged() ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_8_0 = ctx_r0.payment().payment_method) ? 16 : -1, tmp_8_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_9_0 = ctx_r0.payment().reference) ? 17 : -1, tmp_9_0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.payment().id, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.payment().items.length ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_12_0 = ctx_r0.invoice()) ? 23 : -1, tmp_12_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.can_complete() ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.payment().receipt_url ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.can_send_invoice() ? 27 : ctx_r0.can_request_invoice() ? 28 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.can_refund() ? 29 : -1);
  }
}
function PaymentDetailsModalComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PaymentDetailsModalComponent_Conditional_10_Case_0_Template, 36, 30)(1, PaymentDetailsModalComponent_Conditional_10_Case_1_Template, 22, 25)(2, PaymentDetailsModalComponent_Conditional_10_Case_2_Template, 30, 25);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = ctx_r0.view()) === "invoice" ? 0 : tmp_1_0 === "refund" ? 1 : 2);
  }
}
var PaymentDetailsModalComponent = class _PaymentDetailsModalComponent {
  constructor() {
    this._payments = inject(PaymentsService);
    this._ref = inject(MatDialogRef);
    this._data = inject(MAT_DIALOG_DATA);
    this.unit_key = unitKey;
    this.payment = signal(
      this._data.payment,
      ...ngDevMode ? [{ debugName: "payment" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.invoice = signal(
      null,
      ...ngDevMode ? [{ debugName: "invoice" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.view = signal(
      "details",
      ...ngDevMode ? [{ debugName: "view" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.privileged = this._payments.privileged;
    this.billing_name = signal(
      "",
      ...ngDevMode ? [{ debugName: "billing_name" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.billing_email = signal(
      "",
      ...ngDevMode ? [{ debugName: "billing_email" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.billing_company = signal(
      "",
      ...ngDevMode ? [{ debugName: "billing_company" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.billing_tax_id = signal(
      "",
      ...ngDevMode ? [{ debugName: "billing_tax_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.billing_address = signal(
      "",
      ...ngDevMode ? [{ debugName: "billing_address" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.refund_amount = signal(
      null,
      ...ngDevMode ? [{ debugName: "refund_amount" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.refund_reason = signal(
      "",
      ...ngDevMode ? [{ debugName: "refund_reason" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.refundable = computed(
      () => this.payment().amount - this.payment().amount_refunded,
      ...ngDevMode ? [{ debugName: "refundable" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.refundable_major = computed(
      () => toMajorUnits(this.refundable(), this.payment().currency),
      ...ngDevMode ? [{ debugName: "refundable_major" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.valid_refund = computed(
      () => {
        const amount = this.refund_amount();
        return amount === null || amount > 0 && amount <= this.refundable_major();
      },
      ...ngDevMode ? [{ debugName: "valid_refund" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_request_invoice = computed(
      () => this._payments.hasCapability("invoices") && !this.invoice() && ["succeeded", "partially_refunded"].includes(this.payment().status),
      ...ngDevMode ? [{ debugName: "can_request_invoice" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_send_invoice = computed(
      () => {
        const status = this.invoice()?.status;
        return this.privileged() && (status === "requested" || status === "draft");
      },
      ...ngDevMode ? [{ debugName: "can_send_invoice" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_complete = computed(
      () => {
        const payment = this.payment();
        return payment.user_email === currentUser()?.email && !!payment.reference && (payment.status === "pending" || payment.status === "requires_action");
      },
      ...ngDevMode ? [{ debugName: "can_complete" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_refund = computed(
      () => this.privileged() && this._payments.hasCapability("refunds") && this.refundable() > 0 && ["succeeded", "partially_refunded"].includes(this.payment().status),
      ...ngDevMode ? [{ debugName: "can_refund" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async ngOnInit() {
    const payment = this.payment();
    const is_self = payment.user_email === currentUser()?.email;
    this.billing_name.set(is_self ? currentUser().name : payment.user_name);
    this.billing_email.set(payment.user_email);
    if (!this._payments.hasCapability("invoices"))
      return;
    const page = await this._payments.call("list_invoices", { payment_id: payment.id, limit: 1 }).catch(() => null);
    if (!this.invoice())
      this.invoice.set(page?.items[0] ?? null);
  }
  /** Request an invoice. Privileged users also send it */
  async requestInvoice() {
    const billing = {
      name: this.billing_name(),
      email: this.billing_email(),
      company: this.billing_company() || void 0,
      tax_id: this.billing_tax_id() || void 0,
      address: this.billing_address() || void 0
    };
    await this._run("PAYMENTS.REQUESTING_INVOICE", async () => {
      let invoice = await this._payments.call("request_invoice", this.payment().id, billing);
      this.invoice.set(invoice);
      this.view.set("details");
      const unsent = invoice.status === "requested" || invoice.status === "draft";
      if (this.privileged() && unsent) {
        invoice = await this._payments.call("send_invoice", invoice.id, billing.email);
        this.invoice.set(invoice);
      }
      notifySuccess(i18n(this.privileged() ? "PAYMENTS.INVOICE_SENT" : "PAYMENTS.INVOICE_REQUESTED"));
    });
  }
  async sendInvoice() {
    const invoice = this.invoice();
    if (!invoice)
      return;
    await this._run("PAYMENTS.SENDING_INVOICE", async () => {
      this.invoice.set(
        // `null` keeps the recipient that the invoice has
        await this._payments.call("send_invoice", invoice.id, null)
      );
      notifySuccess(i18n("PAYMENTS.INVOICE_SENT"));
    });
  }
  /** Pay an open payment on a new link to the hosted page */
  async complete() {
    const window_ref = this._payments.openWindow();
    await this._run("PAYMENTS.COMPLETING_PAYMENT", async () => {
      this.payment.set(await this._payments.completePayment(this.payment(), window_ref));
    });
  }
  async refund() {
    if (!this.valid_refund())
      return;
    const amount = this.refund_amount();
    await this._run("PAYMENTS.REFUNDING", async () => {
      this.payment.set(await this._payments.call("refund_payment", this.payment().id, amount === null ? null : toMinorUnits(amount, this.payment().currency), this.refund_reason()));
      notifySuccess(i18n("PAYMENTS.REFUND_SUCCESS"));
    });
  }
  /** Run an action with a loading message, then go back to the details */
  async _run(message, action) {
    this.loading.set(i18n(message));
    this._ref.disableClose = true;
    try {
      await action();
      this.view.set("details");
    } catch (e) {
      notifyError(errorMessage(e) || i18n("PAYMENTS.ACTION_FAILED"));
    } finally {
      this.loading.set("");
      this._ref.disableClose = false;
    }
  }
  static {
    this.\u0275fac = function PaymentDetailsModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaymentDetailsModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentDetailsModalComponent, selectors: [["payment-details-modal"]], decls: 11, vars: 8, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "flex", "h-14", "w-[calc(100%-1rem)]", "min-w-[20rem]", "items-center", "gap-2", "rounded-sm", "p-2"], ["mat-dialog-title", "", 1, "flex-1", "truncate", "px-2", "text-xl", "font-medium"], [3, "status"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "h-48", "w-md", "max-w-[85vw]", "flex-col", "items-center", "justify-center", "space-y-4"], ["diameter", "32", "aria-hidden", "true"], [1, "w-md", "max-w-[85vw]", "space-y-2", "p-4"], [1, "text-sm"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "required", "", 3, "ngModelChange", "ngModel"], ["matInput", "", "required", "", "type", "email", 3, "ngModelChange", "ngModel"], ["matInput", "", 3, "ngModelChange", "ngModel"], ["matInput", "", "rows", "3", 3, "ngModelChange", "ngModel"], [1, "bg-base-200", "sticky", "bottom-0", "m-2", "flex", "gap-2", "rounded-sm", "p-2"], ["btn", "", "matRipple", "", 1, "inverse", "bg-base-100", "flex-1", 3, "click"], ["btn", "", "matRipple", "", "name", "submit-invoice", 1, "flex-1", 3, "click", "disabled"], ["matInput", "", "type", "number", "min", "0", 3, "ngModelChange", "max", "ngModel"], ["btn", "", "matRipple", "", "name", "submit-refund", 1, "error", "flex-1", 3, "click", "disabled"], [1, "w-md", "max-w-[85vw]", "space-y-4", "p-4", "text-sm"], [1, "grid", "grid-cols-[auto_1fr]", "gap-x-4", "gap-y-1"], [1, "opacity-70"], [1, "font-medium"], [1, "truncate", "font-mono", "text-xs"], [1, "border-base-200", "divide-base-200", "divide-y", "border-y"], [1, "bg-base-200", "flex", "items-center", "gap-2", "rounded-sm", "p-2"], [1, "bg-base-200", "sticky", "bottom-0", "m-2", "flex", "flex-wrap", "gap-2", "rounded-sm", "p-2"], ["btn", "", "matRipple", "", "name", "complete-payment", 1, "flex-1"], ["btn", "", "matRipple", "", "target", "_blank", "rel", "noopener", 1, "inverse", "bg-base-100", "flex-1", 3, "href"], ["btn", "", "matRipple", "", "name", "send-invoice", 1, "flex-1"], ["btn", "", "matRipple", "", "name", "request-invoice", 1, "flex-1"], ["btn", "", "matRipple", "", "name", "refund", 1, "error", "flex-1"], [1, "truncate"], [1, "capitalize"], [1, "flex", "gap-2", "py-2"], [1, "min-w-0", "flex-1"], [1, "text-xs", "opacity-70"], [1, "text-2xl"], ["icon", "", "matRipple", "", "target", "_blank", "rel", "noopener", 3, "href"], ["btn", "", "matRipple", "", "name", "complete-payment", 1, "flex-1", 3, "click"], ["btn", "", "matRipple", "", "name", "send-invoice", 1, "flex-1", 3, "click"], ["btn", "", "matRipple", "", "name", "request-invoice", 1, "flex-1", 3, "click"], ["btn", "", "matRipple", "", "name", "refund", 1, "error", "flex-1", 3, "click"]], template: function PaymentDetailsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "payment-status", 2);
        \u0275\u0275elementStart(5, "button", 3);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementStart(7, "icon");
        \u0275\u0275text(8, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(9, PaymentDetailsModalComponent_Conditional_9_Template, 4, 1, "main", 4)(10, PaymentDetailsModalComponent_Conditional_10_Template, 3, 1);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.payment().description || \u0275\u0275pipeBind1(3, 4, "PAYMENTS.PAYMENT"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("status", ctx.payment().status);
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 6, "COMMON.CLOSE"));
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.loading() ? 9 : 10);
      }
    }, dependencies: [
      FormsModule,
      DefaultValueAccessor,
      NumberValueAccessor,
      NgControlStatus,
      RequiredValidator,
      MinValidator,
      MaxValidator,
      NgModel,
      IconComponent,
      MatDialogModule,
      MatDialogClose,
      MatDialogTitle,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatInputModule,
      MatInput,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRippleModule,
      MatRipple,
      PaymentStatusComponent,
      DatePipe,
      PaymentAmountPipe,
      TranslatePipe
    ], styles: ["\nh2[mat-dialog-title][_ngcontent-%COMP%] {\n  color: inherit;\n  font-family: inherit;\n  letter-spacing: inherit;\n  margin: 0;\n  padding: 0;\n}\nh2[mat-dialog-title][_ngcontent-%COMP%]::before {\n  display: none;\n}\n/*# sourceMappingURL=payment-details-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentDetailsModalComponent, [{
    type: Component,
    args: [{ selector: "payment-details-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 flex h-14 w-[calc(100%-1rem)] min-w-[20rem] items-center gap-2 rounded-sm p-2"
        >
            <h2
                mat-dialog-title
                class="flex-1 truncate px-2 text-xl font-medium"
            >
                {{ payment().description || ('PAYMENTS.PAYMENT' | translate) }}
            </h2>
            <payment-status [status]="payment().status" />
            <button
                icon
                matRipple
                mat-dialog-close
                [attr.aria-label]="'COMMON.CLOSE' | translate"
            >
                <icon>close</icon>
            </button>
        </header>
        @if (loading()) {
            <main
                class="flex h-48 w-md max-w-[85vw] flex-col items-center justify-center space-y-4"
            >
                <mat-spinner diameter="32" aria-hidden="true"></mat-spinner>
                <p>{{ loading() }}</p>
            </main>
        } @else {
            @switch (view()) {
                @case ('invoice') {
                    <main class="w-md max-w-[85vw] space-y-2 p-4">
                        <p class="text-sm">
                            {{ 'PAYMENTS.INVOICE_DETAILS_INFO' | translate }}
                        </p>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-label>{{ 'FORM.NAME' | translate }}</mat-label>
                            <input
                                matInput
                                required
                                [(ngModel)]="billing_name"
                            />
                        </mat-form-field>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-label>{{
                                'FORM.EMAIL' | translate
                            }}</mat-label>
                            <input
                                matInput
                                required
                                type="email"
                                [(ngModel)]="billing_email"
                            />
                        </mat-form-field>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-label>{{
                                'PAYMENTS.COMPANY' | translate
                            }}</mat-label>
                            <input matInput [(ngModel)]="billing_company" />
                        </mat-form-field>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-label>{{
                                'PAYMENTS.TAX_ID' | translate
                            }}</mat-label>
                            <input matInput [(ngModel)]="billing_tax_id" />
                        </mat-form-field>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-label>{{
                                'PAYMENTS.BILLING_ADDRESS' | translate
                            }}</mat-label>
                            <textarea
                                matInput
                                rows="3"
                                [(ngModel)]="billing_address"
                            ></textarea>
                        </mat-form-field>
                    </main>
                    <footer
                        class="bg-base-200 sticky bottom-0 m-2 flex gap-2 rounded-sm p-2"
                    >
                        <button
                            btn
                            matRipple
                            class="inverse bg-base-100 flex-1"
                            (click)="view.set('details')"
                        >
                            {{ 'COMMON.BACK' | translate }}
                        </button>
                        <button
                            btn
                            matRipple
                            name="submit-invoice"
                            class="flex-1"
                            [disabled]="!billing_name() || !billing_email()"
                            (click)="requestInvoice()"
                        >
                            {{
                                (privileged()
                                    ? 'PAYMENTS.SEND_INVOICE'
                                    : 'PAYMENTS.REQUEST_INVOICE'
                                ) | translate
                            }}
                        </button>
                    </footer>
                }
                @case ('refund') {
                    <main class="w-md max-w-[85vw] space-y-2 p-4">
                        <p class="text-sm">
                            {{
                                'PAYMENTS.REFUND_INFO'
                                    | translate
                                        : {
                                              amount:
                                                  refundable()
                                                  | amount: payment().currency,
                                          }
                            }}
                        </p>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-label>{{
                                'PAYMENTS.REFUND_AMOUNT' | translate
                            }}</mat-label>
                            <input
                                matInput
                                type="number"
                                min="0"
                                [max]="refundable_major()"
                                [(ngModel)]="refund_amount"
                            />
                        </mat-form-field>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-label>{{
                                'PAYMENTS.REFUND_REASON' | translate
                            }}</mat-label>
                            <input matInput [(ngModel)]="refund_reason" />
                        </mat-form-field>
                    </main>
                    <footer
                        class="bg-base-200 sticky bottom-0 m-2 flex gap-2 rounded-sm p-2"
                    >
                        <button
                            btn
                            matRipple
                            class="inverse bg-base-100 flex-1"
                            (click)="view.set('details')"
                        >
                            {{ 'COMMON.BACK' | translate }}
                        </button>
                        <button
                            btn
                            matRipple
                            name="submit-refund"
                            class="error flex-1"
                            [disabled]="!valid_refund()"
                            (click)="refund()"
                        >
                            {{ 'PAYMENTS.REFUND' | translate }}
                        </button>
                    </footer>
                }
                @default {
                    <main class="w-md max-w-[85vw] space-y-4 p-4 text-sm">
                        <dl class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
                            <dt class="opacity-70">
                                {{ 'PAYMENTS.AMOUNT' | translate }}
                            </dt>
                            <dd class="font-medium">
                                {{
                                    payment().amount
                                        | amount: payment().currency
                                }}
                            </dd>
                            @if (payment().amount_refunded > 0) {
                                <dt class="opacity-70">
                                    {{ 'PAYMENTS.REFUNDED' | translate }}
                                </dt>
                                <dd>
                                    {{
                                        payment().amount_refunded
                                            | amount: payment().currency
                                    }}
                                </dd>
                            }
                            <dt class="opacity-70">
                                {{ 'PAYMENTS.DATE' | translate }}
                            </dt>
                            <dd>
                                {{
                                    payment().created_at * 1000 | date: 'medium'
                                }}
                            </dd>
                            @if (privileged()) {
                                <dt class="opacity-70">
                                    {{ 'PAYMENTS.USER' | translate }}
                                </dt>
                                <dd class="truncate">
                                    {{ payment().user_name }}
                                    <span class="opacity-70">{{
                                        payment().user_email
                                    }}</span>
                                </dd>
                            }
                            @if (payment().payment_method; as method) {
                                <dt class="opacity-70">
                                    {{ 'PAYMENTS.METHOD' | translate }}
                                </dt>
                                <dd class="capitalize">
                                    {{ method.brand || method.type }} \u2022\u2022\u2022\u2022
                                    {{ method.last4 }}
                                </dd>
                            }
                            @if (payment().reference; as ref) {
                                <dt class="opacity-70">
                                    {{ 'PAYMENTS.REFERENCE' | translate }}
                                </dt>
                                <dd class="truncate font-mono text-xs">
                                    {{ ref.type }} {{ ref.id }}
                                </dd>
                            }
                            <dt class="opacity-70">ID</dt>
                            <dd class="truncate font-mono text-xs">
                                {{ payment().id }}
                            </dd>
                        </dl>
                        @if (payment().items.length) {
                            <ul
                                class="border-base-200 divide-base-200 divide-y border-y"
                            >
                                @for (item of payment().items; track $index) {
                                    <li class="flex gap-2 py-2">
                                        <div class="min-w-0 flex-1">
                                            <div class="truncate">
                                                {{ item.name }}
                                            </div>
                                            <div class="text-xs opacity-70">
                                                {{ item.quantity }} \xD7
                                                {{
                                                    item.unit_amount
                                                        | amount
                                                            : payment().currency
                                                }}
                                                {{
                                                    unit_key(item.unit)
                                                        | translate
                                                }}
                                            </div>
                                        </div>
                                        <div>
                                            {{
                                                item.amount
                                                    | amount: payment().currency
                                            }}
                                        </div>
                                    </li>
                                }
                            </ul>
                        }
                        @if (invoice(); as inv) {
                            <div
                                class="bg-base-200 flex items-center gap-2 rounded-sm p-2"
                            >
                                <icon class="text-2xl">receipt_long</icon>
                                <div class="min-w-0 flex-1">
                                    <div class="font-medium">
                                        {{ 'PAYMENTS.INVOICE' | translate }}
                                        {{ inv.number }}
                                    </div>
                                    <div class="text-xs opacity-70">
                                        {{
                                            inv.created_at * 1000
                                                | date: 'mediumDate'
                                        }}
                                    </div>
                                </div>
                                <payment-status [status]="inv.status" />
                                @if (inv.pdf_url || inv.url) {
                                    <a
                                        icon
                                        matRipple
                                        target="_blank"
                                        rel="noopener"
                                        [href]="inv.pdf_url || inv.url"
                                        [attr.aria-label]="
                                            'PAYMENTS.VIEW_INVOICE' | translate
                                        "
                                    >
                                        <icon>open_in_new</icon>
                                    </a>
                                }
                            </div>
                        }
                    </main>
                    <footer
                        class="bg-base-200 sticky bottom-0 m-2 flex flex-wrap gap-2 rounded-sm p-2"
                    >
                        @if (can_complete()) {
                            <button
                                btn
                                matRipple
                                name="complete-payment"
                                class="flex-1"
                                (click)="complete()"
                            >
                                {{ 'PAYMENTS.COMPLETE_PAYMENT' | translate }}
                            </button>
                        }
                        @if (payment().receipt_url) {
                            <a
                                btn
                                matRipple
                                class="inverse bg-base-100 flex-1"
                                target="_blank"
                                rel="noopener"
                                [href]="payment().receipt_url"
                            >
                                {{ 'PAYMENTS.VIEW_RECEIPT' | translate }}
                            </a>
                        }
                        @if (can_send_invoice()) {
                            <button
                                btn
                                matRipple
                                name="send-invoice"
                                class="flex-1"
                                (click)="sendInvoice()"
                            >
                                {{ 'PAYMENTS.SEND_INVOICE' | translate }}
                            </button>
                        } @else if (can_request_invoice()) {
                            <button
                                btn
                                matRipple
                                name="request-invoice"
                                class="flex-1"
                                (click)="view.set('invoice')"
                            >
                                {{
                                    (privileged()
                                        ? 'PAYMENTS.SEND_INVOICE'
                                        : 'PAYMENTS.REQUEST_INVOICE'
                                    ) | translate
                                }}
                            </button>
                        }
                        @if (can_refund()) {
                            <button
                                btn
                                matRipple
                                name="refund"
                                class="error flex-1"
                                (click)="view.set('refund')"
                            >
                                {{ 'PAYMENTS.REFUND' | translate }}
                            </button>
                        }
                    </footer>
                }
            }
        }
    `, imports: [
      DatePipe,
      FormsModule,
      IconComponent,
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatRippleModule,
      PaymentAmountPipe,
      PaymentStatusComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;667dd6e87a0f8ee70b196ba72e30636efb97b1c4a6897353c2c25bfa7854dc6c;/home/runner/work/user-interfaces/user-interfaces/libs/payments/src/lib/payment-details-modal.component.ts */\nh2[mat-dialog-title] {\n  color: inherit;\n  font-family: inherit;\n  letter-spacing: inherit;\n  margin: 0;\n  padding: 0;\n}\nh2[mat-dialog-title]::before {\n  display: none;\n}\n/*# sourceMappingURL=payment-details-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentDetailsModalComponent, { className: "PaymentDetailsModalComponent", filePath: "libs/payments/src/lib/payment-details-modal.component.ts", lineNumber: 421 });
})();

// apps/workplace/src/app/payments/payments.component.ts
var _c02 = (a0) => ({ date: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function PaymentsComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function PaymentsComponent_For_9_Template_button_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setTab(item_r2.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-secondary", ctx_r2.tab() === item_r2.id)("text-secondary-content", ctx_r2.tab() === item_r2.id);
    \u0275\u0275property("name", "tab-" + item_r2.id);
    \u0275\u0275attribute("aria-pressed", ctx_r2.tab() === item_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 7, item_r2.name), " ");
  }
}
function PaymentsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 8);
    \u0275\u0275listener("click", function PaymentsComponent_Conditional_10_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.load());
    });
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.error());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "COMMON.RETRY"), " ");
  }
}
function PaymentsComponent_Conditional_11_Case_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "button", 12);
    \u0275\u0275listener("click", function PaymentsComponent_Conditional_11_Case_0_For_2_Template_button_click_1_listener() {
      const item_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.view(item_r6));
    });
    \u0275\u0275elementStart(2, "icon", 13);
    \u0275\u0275text(3, "receipt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14)(5, "div", 15);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 16);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 17)(12, "div", 18);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "amount");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "payment-status", 19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", item_r6.description || \u0275\u0275pipeBind1(7, 4, "PAYMENTS.PAYMENT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 6, item_r6.created_at * 1e3, "mediumDate"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 9, item_r6.amount, item_r6.currency), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("status", item_r6.status);
  }
}
function PaymentsComponent_Conditional_11_Case_0_ForEmpty_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PAYMENTS.EMPTY_PAYMENTS"), " ");
  }
}
function PaymentsComponent_Conditional_11_Case_0_ForEmpty_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PaymentsComponent_Conditional_11_Case_0_ForEmpty_3_Conditional_0_Template, 3, 3, "li", 20);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(!ctx_r2.loading() ? 0 : -1);
  }
}
function PaymentsComponent_Conditional_11_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 9);
    \u0275\u0275repeaterCreate(1, PaymentsComponent_Conditional_11_Case_0_For_2_Template, 16, 12, "li", null, _forTrack0, false, PaymentsComponent_Conditional_11_Case_0_ForEmpty_3_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.payments());
  }
}
function PaymentsComponent_Conditional_11_Case_1_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 22);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "open_in_new");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", item_r7.pdf_url || item_r7.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "PAYMENTS.VIEW_INVOICE"));
  }
}
function PaymentsComponent_Conditional_11_Case_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 21)(1, "icon", 13);
    \u0275\u0275text(2, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14)(4, "div", 15);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 16);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275pipe(10, "amount");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "payment-status", 19);
    \u0275\u0275conditionalCreate(12, PaymentsComponent_Conditional_11_Case_1_For_2_Conditional_12_Template, 4, 4, "a", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", item_r7.number || \u0275\u0275pipeBind1(6, 5, "PAYMENTS.INVOICE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(9, 7, item_r7.created_at * 1e3, "mediumDate"), " \xB7 ", \u0275\u0275pipeBind2(10, 10, item_r7.amount, item_r7.currency), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("status", item_r7.status);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r7.pdf_url || item_r7.url ? 12 : -1);
  }
}
function PaymentsComponent_Conditional_11_Case_1_ForEmpty_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PAYMENTS.EMPTY_INVOICES"), " ");
  }
}
function PaymentsComponent_Conditional_11_Case_1_ForEmpty_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PaymentsComponent_Conditional_11_Case_1_ForEmpty_3_Conditional_0_Template, 3, 3, "li", 20);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(!ctx_r2.loading() ? 0 : -1);
  }
}
function PaymentsComponent_Conditional_11_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 9);
    \u0275\u0275repeaterCreate(1, PaymentsComponent_Conditional_11_Case_1_For_2_Template, 13, 13, "li", 21, _forTrack0, false, PaymentsComponent_Conditional_11_Case_1_ForEmpty_3_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.invoices());
  }
}
function PaymentsComponent_Conditional_11_Case_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 21)(1, "icon", 13);
    \u0275\u0275text(2, "credit_card");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14)(4, "div", 18)(5, "span", 25);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 16);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 26);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275listener("click", function PaymentsComponent_Conditional_11_Case_2_For_2_Template_button_click_11_listener() {
      const item_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeMethod(item_r10));
    });
    \u0275\u0275elementStart(13, "icon", 27);
    \u0275\u0275text(14, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(item_r10.brand || item_r10.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2022\u2022\u2022\u2022 ", item_r10.last4, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 4, "PAYMENTS.EXPIRES", \u0275\u0275pureFunction1(9, _c02, item_r10.exp_month + "/" + item_r10.exp_year)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(12, 7, "PAYMENTS.REMOVE_METHOD"));
  }
}
function PaymentsComponent_Conditional_11_Case_2_ForEmpty_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PAYMENTS.EMPTY_METHODS"), " ");
  }
}
function PaymentsComponent_Conditional_11_Case_2_ForEmpty_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PaymentsComponent_Conditional_11_Case_2_ForEmpty_3_Conditional_0_Template, 3, 3, "li", 20);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(!ctx_r2.loading() ? 0 : -1);
  }
}
function PaymentsComponent_Conditional_11_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ul", 9);
    \u0275\u0275repeaterCreate(1, PaymentsComponent_Conditional_11_Case_2_For_2_Template, 15, 11, "li", 21, _forTrack0, false, PaymentsComponent_Conditional_11_Case_2_ForEmpty_3_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 23);
    \u0275\u0275listener("click", function PaymentsComponent_Conditional_11_Case_2_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addMethod());
    });
    \u0275\u0275elementStart(5, "icon", 24);
    \u0275\u0275text(6, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.methods());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 2, "PAYMENTS.ADD_METHOD"), " ");
  }
}
function PaymentsComponent_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "mat-spinner", 28);
    \u0275\u0275elementEnd();
  }
}
function PaymentsComponent_Conditional_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function PaymentsComponent_Conditional_11_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.load(true));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PAYMENTS.LOAD_MORE"), " ");
  }
}
function PaymentsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PaymentsComponent_Conditional_11_Case_0_Template, 4, 1, "ul", 9)(1, PaymentsComponent_Conditional_11_Case_1_Template, 4, 1, "ul", 9)(2, PaymentsComponent_Conditional_11_Case_2_Template, 9, 4);
    \u0275\u0275conditionalCreate(3, PaymentsComponent_Conditional_11_Conditional_3_Template, 2, 0, "div", 10)(4, PaymentsComponent_Conditional_11_Conditional_4_Template, 3, 3, "button", 11);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_1_0 = ctx_r2.tab()) === "payments" ? 0 : tmp_1_0 === "invoices" ? 1 : tmp_1_0 === "methods" ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.loading() ? 3 : ctx_r2.cursor() ? 4 : -1);
  }
}
var PAGE_SIZE = 20;
var PaymentsComponent = class _PaymentsComponent {
  constructor() {
    this._payments = inject(PaymentsService);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._router = inject(Router);
    this.tab = signal(
      "payments",
      ...ngDevMode ? [{ debugName: "tab" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.payments = signal(
      [],
      ...ngDevMode ? [{ debugName: "payments" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.invoices = signal(
      [],
      ...ngDevMode ? [{ debugName: "invoices" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.methods = signal(
      [],
      ...ngDevMode ? [{ debugName: "methods" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.cursor = signal(
      void 0,
      ...ngDevMode ? [{ debugName: "cursor" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
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
    this.tabs = computed(
      () => [
        { id: "payments", name: "PAYMENTS.TAB_PAYMENTS" },
        ...this._payments.hasCapability("invoices") ? [{ id: "invoices", name: "PAYMENTS.TAB_INVOICES" }] : [],
        ...this._payments.hasCapability("saved_methods") ? [{ id: "methods", name: "PAYMENTS.TAB_METHODS" }] : []
      ],
      ...ngDevMode ? [{ debugName: "tabs" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async ngOnInit() {
    await this._org.waitUntilInitialised();
    if (!this._payments.enabled) {
      this._router.navigate(["/"]);
      return;
    }
    await currentUserLoaded();
    await this.load();
  }
  setTab(tab) {
    this.tab.set(tab);
    this.load();
  }
  /** Load the first page of the active tab, or the next page with `more` */
  async load(more = false) {
    const tab = this.tab();
    const cursor = more ? this.cursor() : void 0;
    const user_email = currentUser().email;
    this.loading.set(true);
    this.error.set("");
    const query = { user_email, limit: PAGE_SIZE, cursor };
    const append = (list, items) => more ? [...list, ...items] : items;
    try {
      if (tab === "payments") {
        const page = await this._payments.call("list_payments", query);
        if (this.tab() !== tab)
          return;
        this.payments.update((list) => append(list, page.items));
        this.cursor.set(page.next_cursor);
      } else if (tab === "invoices") {
        const page = await this._payments.call("list_invoices", query);
        if (this.tab() !== tab)
          return;
        this.invoices.update((list) => append(list, page.items));
        this.cursor.set(page.next_cursor);
      } else {
        const methods = await this._payments.call("list_payment_methods");
        if (this.tab() !== tab)
          return;
        this.methods.set(methods);
        this.cursor.set(void 0);
      }
    } catch (e) {
      if (this.tab() !== tab)
        return;
      this.error.set(i18n("PAYMENTS.LOAD_ERROR", { error: errorMessage(e) || e }));
    } finally {
      if (this.tab() === tab)
        this.loading.set(false);
    }
  }
  view(payment) {
    this._dialog.open(PaymentDetailsModalComponent, { data: { payment } }).afterClosed().subscribe(() => this.load());
  }
  async addMethod() {
    const window_ref = this._payments.openWindow();
    await this._payments.addPaymentMethod(window_ref).catch((e) => notifyError(errorMessage(e) || e));
    await this.load();
  }
  async removeMethod(method) {
    const result = await openConfirmModal({
      title: i18n("PAYMENTS.REMOVE_METHOD"),
      content: i18n("PAYMENTS.REMOVE_METHOD_CONFIRM", {
        method: `${method.brand || method.type} \u2022\u2022\u2022\u2022 ${method.last4}`
      }),
      icon: { content: "delete" },
      confirm_text: i18n("COMMON.REMOVE")
    }, this._dialog);
    if (result.reason !== "done")
      return;
    result.loading(i18n("PAYMENTS.REMOVING_METHOD"));
    await this._payments.call("remove_payment_method", method.id).catch((e) => notifyError(errorMessage(e) || e));
    result.close();
    await this.load();
  }
  static {
    this.\u0275fac = function PaymentsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaymentsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentsComponent, selectors: [["workplace-payments"]], decls: 13, vars: 4, consts: [[1, "absolute", "inset-0", "flex", "flex-col", "overflow-hidden"], [1, "bg-base-200", "flex", "h-1/2", "flex-1", "flex-col", "overflow-auto"], [1, "mx-auto", "w-160", "max-w-full", "space-y-4", "p-4"], [1, "text-2xl", "font-medium"], [1, "bg-base-100", "flex", "rounded-lg", "p-1"], ["matRipple", "", 1, "flex-1", "rounded-md", "px-3", "py-2", "text-sm", 3, "name", "bg-secondary", "text-secondary-content"], [1, "bg-base-100", "flex", "flex-col", "items-center", "gap-2", "rounded-lg", "p-8", "text-center"], ["matRipple", "", 1, "flex-1", "rounded-md", "px-3", "py-2", "text-sm", 3, "click", "name"], ["btn", "", "matRipple", "", 3, "click"], [1, "space-y-2"], [1, "flex", "justify-center", "p-4"], ["btn", "", "matRipple", "", 1, "inverse", "w-full"], ["matRipple", "", 1, "bg-base-100", "flex", "w-full", "items-center", "gap-4", "rounded-lg", "p-4", "text-left", "shadow-sm", 3, "click"], [1, "text-3xl", "opacity-60"], [1, "min-w-0", "flex-1"], [1, "truncate", "font-medium"], [1, "text-sm", "opacity-70"], [1, "flex", "flex-col", "items-end", "gap-1"], [1, "font-medium"], [3, "status"], [1, "bg-base-100", "rounded-lg", "p-8", "text-center", "opacity-70"], [1, "bg-base-100", "flex", "items-center", "gap-4", "rounded-lg", "p-4", "shadow-sm"], ["icon", "", "matRipple", "", "target", "_blank", "rel", "noopener", 3, "href"], ["btn", "", "matRipple", "", "name", "add-method", 1, "w-full", 3, "click"], [1, "mr-2", "text-xl"], [1, "capitalize"], ["icon", "", "matRipple", "", 3, "click"], [1, "text-error"], ["diameter", "32"], ["btn", "", "matRipple", "", 1, "inverse", "w-full", 3, "click"]], template: function PaymentsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "topbar");
        \u0275\u0275elementStart(2, "main", 1)(3, "div", 2)(4, "h1", 3);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "nav", 4);
        \u0275\u0275repeaterCreate(8, PaymentsComponent_For_9_Template, 3, 9, "button", 5, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(10, PaymentsComponent_Conditional_10_Template, 6, 4, "div", 6)(11, PaymentsComponent_Conditional_11_Template, 5, 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(12, "footer-menu");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "PAYMENTS.HEADER"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.tabs());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.error() ? 10 : 11);
      }
    }, dependencies: [
      FooterMenuComponent,
      IconComponent,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRippleModule,
      MatRipple,
      PaymentStatusComponent,
      TopbarComponent,
      DatePipe,
      PaymentAmountPipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentsComponent, [{
    type: Component,
    args: [{
      selector: "workplace-payments",
      template: `
        <div class="absolute inset-0 flex flex-col overflow-hidden">
            <topbar />
            <main class="bg-base-200 flex h-1/2 flex-1 flex-col overflow-auto">
                <div class="mx-auto w-160 max-w-full space-y-4 p-4">
                    <h1 class="text-2xl font-medium">
                        {{ 'PAYMENTS.HEADER' | translate }}
                    </h1>
                    <nav class="bg-base-100 flex rounded-lg p-1">
                        @for (item of tabs(); track item.id) {
                            <button
                                matRipple
                                class="flex-1 rounded-md px-3 py-2 text-sm"
                                [name]="'tab-' + item.id"
                                [attr.aria-pressed]="tab() === item.id"
                                [class.bg-secondary]="tab() === item.id"
                                [class.text-secondary-content]="
                                    tab() === item.id
                                "
                                (click)="setTab(item.id)"
                            >
                                {{ item.name | translate }}
                            </button>
                        }
                    </nav>
                    @if (error()) {
                        <div
                            class="bg-base-100 flex flex-col items-center gap-2 rounded-lg p-8 text-center"
                        >
                            <p>{{ error() }}</p>
                            <button btn matRipple (click)="load()">
                                {{ 'COMMON.RETRY' | translate }}
                            </button>
                        </div>
                    } @else {
                        @switch (tab()) {
                            @case ('payments') {
                                <ul class="space-y-2">
                                    @for (item of payments(); track item.id) {
                                        <li>
                                            <button
                                                matRipple
                                                class="bg-base-100 flex w-full items-center gap-4 rounded-lg p-4 text-left shadow-sm"
                                                (click)="view(item)"
                                            >
                                                <icon
                                                    class="text-3xl opacity-60"
                                                    >receipt</icon
                                                >
                                                <div class="min-w-0 flex-1">
                                                    <div
                                                        class="truncate font-medium"
                                                    >
                                                        {{
                                                            item.description ||
                                                                ('PAYMENTS.PAYMENT'
                                                                    | translate)
                                                        }}
                                                    </div>
                                                    <div
                                                        class="text-sm opacity-70"
                                                    >
                                                        {{
                                                            item.created_at *
                                                                1000
                                                                | date
                                                                    : 'mediumDate'
                                                        }}
                                                    </div>
                                                </div>
                                                <div
                                                    class="flex flex-col items-end gap-1"
                                                >
                                                    <div class="font-medium">
                                                        {{
                                                            item.amount
                                                                | amount
                                                                    : item.currency
                                                        }}
                                                    </div>
                                                    <payment-status
                                                        [status]="item.status"
                                                    />
                                                </div>
                                            </button>
                                        </li>
                                    } @empty {
                                        @if (!loading()) {
                                            <li
                                                class="bg-base-100 rounded-lg p-8 text-center opacity-70"
                                            >
                                                {{
                                                    'PAYMENTS.EMPTY_PAYMENTS'
                                                        | translate
                                                }}
                                            </li>
                                        }
                                    }
                                </ul>
                            }
                            @case ('invoices') {
                                <ul class="space-y-2">
                                    @for (item of invoices(); track item.id) {
                                        <li
                                            class="bg-base-100 flex items-center gap-4 rounded-lg p-4 shadow-sm"
                                        >
                                            <icon class="text-3xl opacity-60"
                                                >receipt_long</icon
                                            >
                                            <div class="min-w-0 flex-1">
                                                <div
                                                    class="truncate font-medium"
                                                >
                                                    {{
                                                        item.number ||
                                                            ('PAYMENTS.INVOICE'
                                                                | translate)
                                                    }}
                                                </div>
                                                <div class="text-sm opacity-70">
                                                    {{
                                                        item.created_at * 1000
                                                            | date: 'mediumDate'
                                                    }}
                                                    \xB7
                                                    {{
                                                        item.amount
                                                            | amount
                                                                : item.currency
                                                    }}
                                                </div>
                                            </div>
                                            <payment-status
                                                [status]="item.status"
                                            />
                                            @if (item.pdf_url || item.url) {
                                                <a
                                                    icon
                                                    matRipple
                                                    target="_blank"
                                                    rel="noopener"
                                                    [href]="
                                                        item.pdf_url || item.url
                                                    "
                                                    [attr.aria-label]="
                                                        'PAYMENTS.VIEW_INVOICE'
                                                            | translate
                                                    "
                                                >
                                                    <icon>open_in_new</icon>
                                                </a>
                                            }
                                        </li>
                                    } @empty {
                                        @if (!loading()) {
                                            <li
                                                class="bg-base-100 rounded-lg p-8 text-center opacity-70"
                                            >
                                                {{
                                                    'PAYMENTS.EMPTY_INVOICES'
                                                        | translate
                                                }}
                                            </li>
                                        }
                                    }
                                </ul>
                            }
                            @case ('methods') {
                                <ul class="space-y-2">
                                    @for (item of methods(); track item.id) {
                                        <li
                                            class="bg-base-100 flex items-center gap-4 rounded-lg p-4 shadow-sm"
                                        >
                                            <icon class="text-3xl opacity-60"
                                                >credit_card</icon
                                            >
                                            <div class="min-w-0 flex-1">
                                                <div class="font-medium">
                                                    <span class="capitalize">{{
                                                        item.brand || item.type
                                                    }}</span>
                                                    \u2022\u2022\u2022\u2022 {{ item.last4 }}
                                                </div>
                                                <div class="text-sm opacity-70">
                                                    {{
                                                        'PAYMENTS.EXPIRES'
                                                            | translate
                                                                : {
                                                                      date:
                                                                          item.exp_month +
                                                                          '/' +
                                                                          item.exp_year,
                                                                  }
                                                    }}
                                                </div>
                                            </div>
                                            <button
                                                icon
                                                matRipple
                                                [attr.aria-label]="
                                                    'PAYMENTS.REMOVE_METHOD'
                                                        | translate
                                                "
                                                (click)="removeMethod(item)"
                                            >
                                                <icon class="text-error"
                                                    >delete</icon
                                                >
                                            </button>
                                        </li>
                                    } @empty {
                                        @if (!loading()) {
                                            <li
                                                class="bg-base-100 rounded-lg p-8 text-center opacity-70"
                                            >
                                                {{
                                                    'PAYMENTS.EMPTY_METHODS'
                                                        | translate
                                                }}
                                            </li>
                                        }
                                    }
                                </ul>
                                <button
                                    btn
                                    matRipple
                                    name="add-method"
                                    class="w-full"
                                    (click)="addMethod()"
                                >
                                    <icon class="mr-2 text-xl">add</icon>
                                    {{ 'PAYMENTS.ADD_METHOD' | translate }}
                                </button>
                            }
                        }
                        @if (loading()) {
                            <div class="flex justify-center p-4">
                                <mat-spinner diameter="32"></mat-spinner>
                            </div>
                        } @else if (cursor()) {
                            <button
                                btn
                                matRipple
                                class="inverse w-full"
                                (click)="load(true)"
                            >
                                {{ 'PAYMENTS.LOAD_MORE' | translate }}
                            </button>
                        }
                    }
                </div>
            </main>
            <footer-menu />
        </div>
    `,
      imports: [
        DatePipe,
        FooterMenuComponent,
        IconComponent,
        MatProgressSpinnerModule,
        MatRippleModule,
        PaymentAmountPipe,
        PaymentStatusComponent,
        TopbarComponent,
        TranslatePipe
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentsComponent, { className: "PaymentsComponent", filePath: "apps/workplace/src/app/payments/payments.component.ts", lineNumber: 310 });
})();

// apps/workplace/src/app/payments/payments.routes.ts
var ROUTES = [
  { path: "", component: PaymentsComponent, title: "Payments" }
];
export {
  ROUTES
};
//# debugId=5c333f8c-8246-52fb-a43a-1a7c6999f6d4
//# sourceMappingURL=payments.routes-M62T7OYM.js.map
