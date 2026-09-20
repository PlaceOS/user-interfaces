import {
  BookingFormService
} from "./chunk-TEQYFNYA.js";
import "./chunk-KSFCVDM3.js";
import "./chunk-NG7T2J5Y.js";
import "./chunk-4UVAJ5RV.js";
import "./chunk-IYOQFCOW.js";
import "./chunk-PQUQF4DF.js";
import "./chunk-RR6PPXEZ.js";
import "./chunk-HNTQUXRO.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-KFIDHLSL.js";
import {
  CommonModule,
  Component,
  DatePipe,
  RouterLink,
  RouterModule,
  computed,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate3
} from "./chunk-LEBJHAXW.js";
import "./chunk-653SOEEV.js";

// apps/outlook-addin/src/app/desks/desk-success.component.ts
var _c0 = () => ["/book", "desks"];
function DeskBookingSuccessComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, " Please allow for some time for your booking to be approved. ");
    \u0275\u0275elementEnd();
  }
}
var DeskBookingSuccessComponent = class _DeskBookingSuccessComponent {
  constructor() {
    this._service = inject(BookingFormService);
    this.last_success = signal(
      this._service.last_success,
      ...ngDevMode ? [{ debugName: "last_success" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.end_time = computed(
      () => {
        const booking = this.last_success();
        return booking?.date + booking?.duration * 60 * 1e3;
      },
      ...ngDevMode ? [{ debugName: "end_time" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function DeskBookingSuccessComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskBookingSuccessComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskBookingSuccessComponent, selectors: [["desk-booking-success"]], decls: 15, vars: 16, consts: [[1, "bg-base-100", "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-4", "p-4", "text-center"], [1, "text-3xl"], ["src", "assets/tick_success.svg"], ["btn", "", "matRipple", "", 1, "w-64", 3, "routerLink"]], template: function DeskBookingSuccessComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
        \u0275\u0275text(2, "Booking Confirmed!");
        \u0275\u0275elementEnd();
        \u0275\u0275element(3, "img", 2);
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5, " Your desk booking for ");
        \u0275\u0275elementStart(6, "i");
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "date");
        \u0275\u0275pipe(10, "date");
        \u0275\u0275pipe(11, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(12, DeskBookingSuccessComponent_Conditional_12_Template, 2, 0, "p");
        \u0275\u0275elementStart(13, "a", 3);
        \u0275\u0275text(14, " New Booking ");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.last_success()?.asset_name || ctx.last_success()?.asset_id);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate3(" has been successfully booked for the ", \u0275\u0275pipeBind2(9, 6, ctx.last_success()?.date, "dd MMMM yyyy"), " at ", \u0275\u0275pipeBind2(10, 9, ctx.last_success()?.date, "shortTime"), " - ", \u0275\u0275pipeBind2(11, 12, ctx.end_time(), "shortTime"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(true ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(15, _c0));
      }
    }, dependencies: [MatRippleModule, MatRipple, RouterModule, RouterLink, CommonModule, DatePipe], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=desk-success.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskBookingSuccessComponent, [{
    type: Component,
    args: [{ selector: "desk-booking-success", template: `
        <div
            class="bg-base-100 absolute inset-0 flex flex-col items-center justify-center space-y-4 p-4 text-center"
        >
            <h3 class="text-3xl">Booking Confirmed!</h3>
            <img src="assets/tick_success.svg" />
            <p>
                Your desk booking for
                <i>{{
                    last_success()?.asset_name || last_success()?.asset_id
                }}</i>
                has been successfully booked for the
                {{ last_success()?.date | date: 'dd MMMM yyyy' }}
                at
                {{ last_success()?.date | date: 'shortTime' }}
                -
                {{ end_time() | date: 'shortTime' }}
            </p>
            @if (true) {
                <p>
                    Please allow for some time for your booking to be approved.
                </p>
            }
            <a btn matRipple [routerLink]="['/book', 'desks']" class="w-64">
                New Booking
            </a>
        </div>
    `, imports: [MatRippleModule, RouterModule, CommonModule], styles: ["/* angular:styles/component:css;8f663144e307d97d7c6361d75534b712825c70421a65c587eccbcb19333fd199;/home/runner/work/user-interfaces/user-interfaces/apps/outlook-addin/src/app/desks/desk-success.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=desk-success.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskBookingSuccessComponent, { className: "DeskBookingSuccessComponent", filePath: "apps/outlook-addin/src/app/desks/desk-success.component.ts", lineNumber: 52 });
})();
export {
  DeskBookingSuccessComponent
};
//# debugId=a7f33020-92c9-55bf-acf2-535b84d16abc
//# sourceMappingURL=desk-success.component-H4JS7UY3.js.map
