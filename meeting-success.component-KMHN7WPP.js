import {
  EventFormService,
  SpacePipe
} from "./chunk-HIOIRFP5.js";
import "./chunk-EU2CQZFH.js";
import "./chunk-AIFVZVIL.js";
import "./chunk-ASFY7P2A.js";
import "./chunk-HNTQUXRO.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-SRLVAU2M.js";
import {
  AsyncPipe,
  CommonModule,
  Component,
  DatePipe,
  RouterLink,
  RouterModule,
  computed,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate3
} from "./chunk-LEBJHAXW.js";
import "./chunk-653SOEEV.js";

// apps/outlook-addin/src/app/meetings/meeting-success.component.ts
var _c0 = () => ["/book", "meeting"];
var MeetingBookingSuccessComponent = class _MeetingBookingSuccessComponent {
  constructor() {
    this._service = inject(EventFormService);
    this.last_success = this._service.last_success;
    this.room_email = computed(
      () => this.last_success()?.system?.email || "",
      ...ngDevMode ? [{ debugName: "room_email" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.booking_location = computed(
      () => this.last_success()?.location || "",
      ...ngDevMode ? [{ debugName: "booking_location" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.booking_end = computed(
      () => {
        const booking = this.last_success();
        return booking ? booking.date + booking.duration * 60 * 1e3 : void 0;
      },
      ...ngDevMode ? [{ debugName: "booking_end" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function MeetingBookingSuccessComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MeetingBookingSuccessComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MeetingBookingSuccessComponent, selectors: [["meeting-booking-success"]], decls: 17, vars: 19, consts: [[1, "bg-base-100", "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-4", "p-4", "text-center"], [1, "text-3xl"], ["src", "assets/tick_success.svg"], ["btn", "", "matRipple", "", 1, "w-64", 3, "routerLink"]], template: function MeetingBookingSuccessComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
        \u0275\u0275text(2, "Booking Confirmed!");
        \u0275\u0275elementEnd();
        \u0275\u0275element(3, "img", 2);
        \u0275\u0275declareLet(4);
        \u0275\u0275pipe(5, "space");
        \u0275\u0275pipe(6, "async");
        \u0275\u0275elementStart(7, "p");
        \u0275\u0275text(8, " Your meeting booking for ");
        \u0275\u0275elementStart(9, "i");
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "date");
        \u0275\u0275pipe(13, "date");
        \u0275\u0275pipe(14, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "a", 3);
        \u0275\u0275text(16, " New Booking ");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const booking_r1 = ctx.last_success();
        const room_r2 = \u0275\u0275pipeBind1(6, 7, \u0275\u0275pipeBind1(5, 5, ctx.room_email()));
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.booking_location() || room_r2?.display_name || room_r2?.name);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate3(" has been successfully booked for the ", \u0275\u0275pipeBind2(12, 9, booking_r1?.date, "dd MMMM yyyy"), " at ", \u0275\u0275pipeBind2(13, 12, booking_r1?.date, "shortTime"), " - ", \u0275\u0275pipeBind2(14, 15, ctx.booking_end(), "shortTime"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(18, _c0));
      }
    }, dependencies: [CommonModule, MatRippleModule, MatRipple, RouterModule, RouterLink, AsyncPipe, DatePipe, SpacePipe], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=meeting-success.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MeetingBookingSuccessComponent, [{
    type: Component,
    args: [{ selector: "meeting-booking-success", template: `
        <div
            class="bg-base-100 absolute inset-0 flex flex-col items-center justify-center space-y-4 p-4 text-center"
        >
            @let booking = last_success();
            <h3 class="text-3xl">Booking Confirmed!</h3>
            <img src="assets/tick_success.svg" />
            @let room = room_email() | space | async;
            <p>
                Your meeting booking for
                <i>{{
                    booking_location() || room?.display_name || room?.name
                }}</i>
                has been successfully booked for the
                {{ booking?.date | date: 'dd MMMM yyyy' }}
                at
                {{ booking?.date | date: 'shortTime' }}
                -
                {{ booking_end() | date: 'shortTime' }}
            </p>
            <a btn matRipple [routerLink]="['/book', 'meeting']" class="w-64">
                New Booking
            </a>
        </div>
    `, imports: [CommonModule, SpacePipe, MatRippleModule, RouterModule], styles: ["/* angular:styles/component:css;8f663144e307d97d7c6361d75534b712825c70421a65c587eccbcb19333fd199;/home/runner/work/user-interfaces/user-interfaces/apps/outlook-addin/src/app/meetings/meeting-success.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=meeting-success.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MeetingBookingSuccessComponent, { className: "MeetingBookingSuccessComponent", filePath: "apps/outlook-addin/src/app/meetings/meeting-success.component.ts", lineNumber: 48 });
})();
export {
  MeetingBookingSuccessComponent
};
//# debugId=4a0f4aca-51bc-5a16-8f0e-08695d9b2c58
//# sourceMappingURL=meeting-success.component-KMHN7WPP.js.map
