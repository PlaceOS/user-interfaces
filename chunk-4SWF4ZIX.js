import {
  generateCalendarFileLink,
  generateGoogleCalendarLink,
  generateMicrosoftCalendarLink
} from "./chunk-5Y2Z4AJA.js";
import {
  SanitizePipe
} from "./chunk-H2GPFJZZ.js";
import {
  TranslatePipe
} from "./chunk-7MHPJXXT.js";
import {
  IconComponent,
  SafePipe
} from "./chunk-ABUJTHF5.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-JJMLMF3T.js";
import {
  Component,
  Input,
  computed,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-UL33YUHR.js";

// apps/workplace/src/app/book/booking-calendar-links.component.ts
var BookingCalendarLinksComponent = class _BookingCalendarLinksComponent {
  constructor() {
    this.event = input.required(
      ...ngDevMode ? [{ debugName: "event" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.prefix = input.required(
      ...ngDevMode ? [{ debugName: "prefix" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.outlook_link = computed(
      () => {
        const event = this.event();
        return event ? generateMicrosoftCalendarLink(event) : "";
      },
      ...ngDevMode ? [{ debugName: "outlook_link" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.google_link = computed(
      () => {
        const event = this.event();
        return event ? generateGoogleCalendarLink(event) : "";
      },
      ...ngDevMode ? [{ debugName: "google_link" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.ical_link = computed(
      () => {
        const event = this.event();
        return event ? generateCalendarFileLink(event) : "";
      },
      ...ngDevMode ? [{ debugName: "ical_link" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function BookingCalendarLinksComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookingCalendarLinksComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingCalendarLinksComponent, selectors: [["booking-calendar-links"]], hostAttrs: [1, "relative", "flex", "flex-col", "items-center", "space-y-4", "p-4"], inputs: { event: [1, "event"], prefix: [1, "prefix"] }, decls: 19, vars: 24, consts: [["btn", "", "matRipple", "", "target", "_blank", "rel", "noopener noreferrer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded-sm", "p-2", "pr-4", 3, "name", "href"], ["src", "assets/icons/outlook.svg", 1, "w-6"], ["src", "assets/icons/gcal.svg", 1, "w-6"], [1, "text-xl"]], template: function BookingCalendarLinksComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "a", 0);
        \u0275\u0275pipe(1, "sanitize");
        \u0275\u0275element(2, "img", 1);
        \u0275\u0275elementStart(3, "span");
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "a", 0);
        \u0275\u0275pipe(7, "sanitize");
        \u0275\u0275element(8, "img", 2);
        \u0275\u0275elementStart(9, "span");
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "a", 0);
        \u0275\u0275pipe(13, "safe");
        \u0275\u0275elementStart(14, "icon", 3);
        \u0275\u0275text(15, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "span");
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("name", ctx.prefix() + "-outlook-link")("href", \u0275\u0275pipeBind2(1, 9, ctx.outlook_link(), "url"), \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 12, "BOOKINGS.LINK_OUTLOOK"));
        \u0275\u0275advance(2);
        \u0275\u0275property("name", ctx.prefix() + "-google-link")("href", \u0275\u0275pipeBind2(7, 14, ctx.google_link(), "url"), \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 17, "BOOKINGS.LINK_GOOGLE"));
        \u0275\u0275advance(2);
        \u0275\u0275property("name", ctx.prefix() + "-ical-link")("href", \u0275\u0275pipeBind2(13, 19, ctx.ical_link(), "url"), \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 22, "BOOKINGS.LINK_ICAL"));
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      IconComponent,
      TranslatePipe,
      SafePipe,
      SanitizePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookingCalendarLinksComponent, [{
    type: Component,
    args: [{
      selector: "booking-calendar-links",
      host: { class: "relative flex flex-col items-center space-y-4 p-4" },
      template: `
        <a
            btn
            matRipple
            [name]="prefix() + '-outlook-link'"
            class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
            [href]="outlook_link() | sanitize: 'url'"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src="assets/icons/outlook.svg" class="w-6" />
            <span>{{ 'BOOKINGS.LINK_OUTLOOK' | translate }}</span>
        </a>
        <a
            btn
            matRipple
            [name]="prefix() + '-google-link'"
            class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
            [href]="google_link() | sanitize: 'url'"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src="assets/icons/gcal.svg" class="w-6" />
            <span>{{ 'BOOKINGS.LINK_GOOGLE' | translate }}</span>
        </a>
        <a
            btn
            matRipple
            [name]="prefix() + '-ical-link'"
            class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
            [href]="ical_link() | safe: 'url'"
            target="_blank"
            rel="noopener noreferrer"
        >
            <icon class="text-xl">download</icon>
            <span>{{ 'BOOKINGS.LINK_ICAL' | translate }}</span>
        </a>
    `,
      imports: [
        MatRippleModule,
        IconComponent,
        TranslatePipe,
        SafePipe,
        SanitizePipe
      ]
    }]
  }], null, { event: [{ type: Input, args: [{ isSignal: true, alias: "event", required: true }] }], prefix: [{ type: Input, args: [{ isSignal: true, alias: "prefix", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingCalendarLinksComponent, { className: "BookingCalendarLinksComponent", filePath: "apps/workplace/src/app/book/booking-calendar-links.component.ts", lineNumber: 70 });
})();

export {
  BookingCalendarLinksComponent
};
//# debugId=9d1cab93-d6f6-559c-8854-f90d80f38d74
//# sourceMappingURL=chunk-4SWF4ZIX.js.map
