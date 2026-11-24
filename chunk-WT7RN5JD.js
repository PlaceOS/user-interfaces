import {
  Pipe,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-J4V3B3VF.js";

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
function toMinorUnits(amount, currency) {
  return Math.round(amount * 10 ** currencyDigits(currency));
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

export {
  toMajorUnits,
  toMinorUnits,
  unitKey,
  PaymentAmountPipe
};
//# debugId=24e9c7d4-9ece-5ce8-b36e-869f712775c0
//# sourceMappingURL=chunk-WT7RN5JD.js.map
