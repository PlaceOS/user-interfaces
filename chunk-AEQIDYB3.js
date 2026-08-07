import {
  showBooking
} from "./chunk-MQ34EOYW.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-WXVSOSHS.js";
import {
  CommonModule,
  Component,
  DatePipe,
  IconComponent,
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule,
  MatRipple,
  MatRippleModule,
  TranslatePipe,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-FG7LXQD4.js";

// apps/concierge/src/app/ui/booking-history-modal.component.ts
var _c0 = (a0) => ({ name: a0 });
var _c1 = (a0) => ({ source: a0 });
var _forTrack0 = ($index, $item) => $item.time + $item.state;
function BookingHistoryModalComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "mat-spinner", 7);
    \u0275\u0275elementEnd();
  }
}
function BookingHistoryModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.BOOKING_HISTORY_EMPTY"), " ");
  }
}
function BookingHistoryModalComponent_Conditional_10_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "COMMON.TOOLTIP_SOURCE", \u0275\u0275pureFunction1(4, _c1, item_r1.source)), " ");
  }
}
function BookingHistoryModalComponent_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 8)(1, "div", 9)(2, "icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 10)(5, "div", 11);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 12);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, BookingHistoryModalComponent_Conditional_10_For_2_Conditional_11_Template, 3, 6, "div", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.stateIcon(item_r1.state));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 4, ctx_r1.stateLabel(item_r1.state)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 6, item_r1.time * 1e3, "medium"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r1.source ? 11 : -1);
  }
}
function BookingHistoryModalComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ol", 6);
    \u0275\u0275repeaterCreate(1, BookingHistoryModalComponent_Conditional_10_For_2_Template, 12, 9, "li", 8, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.history());
  }
}
var BookingHistoryModalComponent = class _BookingHistoryModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this.booking = signal(
      this._data.booking,
      ...ngDevMode ? [{ debugName: "booking" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.history = signal(
      [],
      ...ngDevMode ? [{ debugName: "history" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = signal(
      true,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loadHistory();
  }
  async loadHistory() {
    this.loading.set(true);
    const booking = await showBooking(this.booking().id).catch(() => this.booking());
    this.booking.set(booking);
    this.history.set([...booking.history || []].sort((a, b) => b.time - a.time));
    this.loading.set(false);
  }
  stateIcon(state) {
    switch (state) {
      case "reserved":
        return "event_available";
      case "checked_in":
        return "login";
      case "checked_out":
        return "logout";
      case "no_show":
        return "person_off";
      case "rejected":
        return "cancel";
      case "cancelled":
        return "event_busy";
      case "ended":
        return "event";
      default:
        return "history";
    }
  }
  stateLabel(state) {
    switch (state) {
      case "reserved":
        return "COMMON.STATUS_RESERVED";
      case "checked_in":
        return "COMMON.CHECKED_IN";
      case "checked_out":
        return "COMMON.CHECKED_OUT";
      case "no_show":
        return "APP.CONCIERGE.BOOKING_HISTORY_STATE_NO_SHOW";
      case "rejected":
        return "APP.CONCIERGE.REPORTS_REJECTED";
      case "cancelled":
        return "COMMON.TYPE_CANCELLED";
      case "ended":
        return "APP.CONCIERGE.BOOKING_STATUS_ENDED";
      default:
        return "COMMON.UNKNOWN";
    }
  }
  static {
    this.\u0275fac = function BookingHistoryModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookingHistoryModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingHistoryModalComponent, selectors: [["booking-history-modal"]], decls: 11, vars: 7, consts: [[1, "bg-base-200", "flex", "h-14", "w-full", "flex-none", "items-center", "justify-between", "p-2"], [1, "truncate", "px-2", "text-xl", "font-medium"], ["icon", "", "default", "", "matRipple", "", "mat-dialog-close", ""], [1, "relative", "min-h-48", "flex-1", "overflow-auto", "p-4"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center"], [1, "flex", "min-h-40", "items-center", "justify-center", "text-sm", "opacity-60"], [1, "flex", "flex-col", "gap-2"], ["diameter", "32"], [1, "border-base-300", "flex", "items-start", "gap-3", "rounded-lg", "border", "p-3"], [1, "bg-base-200", "flex", "h-9", "w-9", "flex-none", "items-center", "justify-center", "rounded-full"], [1, "min-w-0", "flex-1"], [1, "font-medium"], [1, "text-xs", "opacity-60"], [1, "mt-1", "text-xs", "opacity-60"]], template: function BookingHistoryModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 2)(5, "icon");
        \u0275\u0275text(6, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "main", 3);
        \u0275\u0275conditionalCreate(8, BookingHistoryModalComponent_Conditional_8_Template, 2, 0, "div", 4)(9, BookingHistoryModalComponent_Conditional_9_Template, 3, 3, "div", 5)(10, BookingHistoryModalComponent_Conditional_10_Template, 3, 0, "ol", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, "APP.CONCIERGE.BOOKING_HISTORY_HEADER", \u0275\u0275pureFunction1(5, _c0, ctx.booking().user_name || ctx.booking().user_email)), " ");
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.loading() ? 8 : !ctx.history().length ? 9 : 10);
      }
    }, dependencies: [
      CommonModule,
      MatDialogModule,
      MatDialogClose,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRippleModule,
      MatRipple,
      IconComponent,
      DatePipe,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-height: 80vh;\n  overflow: hidden;\n}\n/*# sourceMappingURL=booking-history-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookingHistoryModalComponent, [{
    type: Component,
    args: [{ selector: "booking-history-modal", template: `
        <header
            class="bg-base-200 flex h-14 w-full flex-none items-center justify-between p-2"
        >
            <h2 class="truncate px-2 text-xl font-medium">
                {{
                    'APP.CONCIERGE.BOOKING_HISTORY_HEADER'
                        | translate
                            : {
                                  name:
                                      booking().user_name ||
                                      booking().user_email,
                              }
                }}
            </h2>
            <button icon default matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="relative min-h-48 flex-1 overflow-auto p-4">
            @if (loading()) {
                <div class="absolute inset-0 flex items-center justify-center">
                    <mat-spinner diameter="32" />
                </div>
            } @else if (!history().length) {
                <div
                    class="flex min-h-40 items-center justify-center text-sm opacity-60"
                >
                    {{ 'APP.CONCIERGE.BOOKING_HISTORY_EMPTY' | translate }}
                </div>
            } @else {
                <ol class="flex flex-col gap-2">
                    @for (item of history(); track item.time + item.state) {
                        <li
                            class="border-base-300 flex items-start gap-3 rounded-lg border p-3"
                        >
                            <div
                                class="bg-base-200 flex h-9 w-9 flex-none items-center justify-center rounded-full"
                            >
                                <icon>{{ stateIcon(item.state) }}</icon>
                            </div>
                            <div class="min-w-0 flex-1">
                                <div class="font-medium">
                                    {{ stateLabel(item.state) | translate }}
                                </div>
                                <div class="text-xs opacity-60">
                                    {{ item.time * 1000 | date: 'medium' }}
                                </div>
                                @if (item.source) {
                                    <div class="mt-1 text-xs opacity-60">
                                        {{
                                            'COMMON.TOOLTIP_SOURCE'
                                                | translate
                                                    : { source: item.source }
                                        }}
                                    </div>
                                }
                            </div>
                        </li>
                    }
                </ol>
            }
        </main>
    `, imports: [
      CommonModule,
      MatDialogModule,
      MatProgressSpinnerModule,
      MatRippleModule,
      IconComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;d6de89db0e9ee7531fdc63a6e16a4d3639a1c2d42931bec7b79d3e6f250f4a52;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/ui/booking-history-modal.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-height: 80vh;\n  overflow: hidden;\n}\n/*# sourceMappingURL=booking-history-modal.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingHistoryModalComponent, { className: "BookingHistoryModalComponent", filePath: "apps/concierge/src/app/ui/booking-history-modal.component.ts", lineNumber: 96 });
})();

export {
  BookingHistoryModalComponent
};
//# sourceMappingURL=chunk-AEQIDYB3.js.map
