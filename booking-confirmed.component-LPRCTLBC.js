import {
  EventFormService
} from "./chunk-7LE5GWA5.js";
import "./chunk-YSOT7AXW.js";
import "./chunk-BSIC25KF.js";
import "./chunk-GGWN2GHB.js";
import "./chunk-7RFEFXNS.js";
import "./chunk-BYY76PWS.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-F2KCMQDL.js";
import {
  CommonModule,
  Component,
  DatePipe,
  Router,
  computed,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵtext,
  ɵɵtextInterpolate4
} from "./chunk-E52RJLI7.js";
import "./chunk-653SOEEV.js";

// apps/outlook-addin/src/app/rooms/booking-confirmed.component.ts
var BookingConfirmedComponent = class _BookingConfirmedComponent {
  constructor() {
    this._state = inject(EventFormService);
    this._router = inject(Router);
    this.form = this._state.form;
    this.booking = computed(
      () => this._state.last_success(),
      ...ngDevMode ? [{ debugName: "booking" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.location = computed(
      () => {
        const booking = this.booking();
        return booking?.location;
      },
      ...ngDevMode ? [{ debugName: "location" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.date = computed(
      () => {
        const booking = this.booking();
        return booking?.date;
      },
      ...ngDevMode ? [{ debugName: "date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.duration = computed(
      () => {
        const booking = this.booking();
        return booking?.duration;
      },
      ...ngDevMode ? [{ debugName: "duration" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.start_time = computed(
      () => {
        const booking = this.booking();
        return this.format_time(booking?.date);
      },
      ...ngDevMode ? [{ debugName: "start_time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.end_time = computed(
      () => {
        const booking = this.booking();
        return this.format_time(booking?.date + this.duration() * 60 * 1e3);
      },
      ...ngDevMode ? [{ debugName: "end_time" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  format_time(time) {
    return new Date(time).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true
    });
  }
  newBooking() {
    this._router.navigate(["book/spaces"]);
  }
  static {
    this.\u0275fac = function BookingConfirmedComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookingConfirmedComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingConfirmedComponent, selectors: [["booking-confirmed"]], decls: 16, vars: 7, consts: [[1, "bg-base-200", "z-0", "flex", "h-full", "flex-1", "flex-col", "overflow-y-auto"], [1, "justify-content", "border-base-200", "flex", "h-full", "items-center", "border-b", "py-5"], [1, "mx-auto", "flex", "w-[calc(100%-2rem)]", "max-w-[375px]", "flex-col", "items-center"], [1, "mb-3"], [1, "mr-auto", "text-3xl", "font-bold", "text-gray-700"], ["src", "assets/tick_success.svg"], [1, "mx-3", "flex", "items-center", "justify-center"], [1, "flex", "text-justify"], [1, "mt-3", "flex", "items-center"], ["btn", "", "matRipple", "", 1, "border-secondary", "bg-base-100", "text-secondary", "my-2", "text-sm", 3, "click"], [1, "text-sm"]], template: function BookingConfirmedComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
        \u0275\u0275text(5, " Booking Confirmed!");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div");
        \u0275\u0275element(7, "img", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 6)(9, "span", 7);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 8)(13, "button", 9);
        \u0275\u0275listener("click", function BookingConfirmedComponent_Template_button_click_13_listener() {
          return ctx.newBooking();
        });
        \u0275\u0275elementStart(14, "span", 10);
        \u0275\u0275text(15, "New Booking");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate4("Your room booking for ", ctx.location(), " has been successfully booked for the ", \u0275\u0275pipeBind2(11, 4, ctx.date(), "dd MMMM yyyy"), " at ", ctx.start_time(), " - ", ctx.end_time(), " ");
      }
    }, dependencies: [CommonModule, MatRippleModule, MatRipple, DatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookingConfirmedComponent, [{
    type: Component,
    args: [{ selector: "booking-confirmed", template: `
        <div
            class="bg-base-200 z-0 flex h-full flex-1 flex-col overflow-y-auto"
        >
            <section
                class="justify-content border-base-200 flex h-full items-center border-b py-5"
            >
                <div
                    class="mx-auto flex w-[calc(100%-2rem)] max-w-[375px] flex-col items-center"
                >
                    <div class="mb-3">
                        <span class="mr-auto text-3xl font-bold text-gray-700">
                            Booking Confirmed!</span
                        >
                    </div>
                    <div>
                        <img src="assets/tick_success.svg" />
                    </div>

                    <div class="mx-3 flex items-center justify-center">
                        <span class="flex text-justify"
                            >Your room booking for
                            {{ location() }}
                            has been successfully booked for the
                            {{ date() | date: 'dd MMMM yyyy' }} at
                            {{ start_time() }} -
                            {{ end_time() }}
                        </span>
                    </div>
                    <div class="mt-3 flex items-center">
                        <button
                            btn
                            matRipple
                            (click)="newBooking()"
                            class="border-secondary bg-base-100 text-secondary my-2 text-sm"
                        >
                            <span class="text-sm">New Booking</span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    `, imports: [CommonModule, MatRippleModule] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingConfirmedComponent, { className: "BookingConfirmedComponent", filePath: "apps/outlook-addin/src/app/rooms/booking-confirmed.component.ts", lineNumber: 60 });
})();
export {
  BookingConfirmedComponent
};
//# debugId=0aa4ab20-6165-5e73-9071-09997ed39674
//# sourceMappingURL=booking-confirmed.component-LPRCTLBC.js.map
