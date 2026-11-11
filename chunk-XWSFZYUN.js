import {
  generateCalendarFileLink,
  generateGoogleCalendarLink,
  generateMicrosoftCalendarLink
} from "./chunk-ZF47YLLW.js";
import {
  TranslatePipe
} from "./chunk-4C74AXN2.js";
import {
  IconComponent,
  SafePipe
} from "./chunk-5YOUSSU7.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-JVDB3H4W.js";
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingCalendarLinksComponent, selectors: [["booking-calendar-links"]], hostAttrs: [1, "relative", "flex", "flex-col", "items-center", "space-y-4", "p-4"], inputs: { event: [1, "event"], prefix: [1, "prefix"] }, decls: 17, vars: 18, consts: [["btn", "", "matRipple", "", "target", "_blank", "rel", "noopener noreferrer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded-sm", "p-2", "pr-4", 3, "name", "href"], ["src", "assets/icons/outlook.svg", 1, "w-6"], ["src", "assets/icons/gcal.svg", 1, "w-6"], [1, "text-xl"]], template: function BookingCalendarLinksComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "a", 0);
        \u0275\u0275element(1, "img", 1);
        \u0275\u0275elementStart(2, "span");
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "a", 0);
        \u0275\u0275element(6, "img", 2);
        \u0275\u0275elementStart(7, "span");
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "a", 0);
        \u0275\u0275pipe(11, "safe");
        \u0275\u0275elementStart(12, "icon", 3);
        \u0275\u0275text(13, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span");
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("name", ctx.prefix() + "-outlook-link")("href", ctx.outlook_link(), \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 9, "BOOKINGS.LINK_OUTLOOK"));
        \u0275\u0275advance(2);
        \u0275\u0275property("name", ctx.prefix() + "-google-link")("href", ctx.google_link(), \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 11, "BOOKINGS.LINK_GOOGLE"));
        \u0275\u0275advance(2);
        \u0275\u0275property("name", ctx.prefix() + "-ical-link")("href", \u0275\u0275pipeBind2(11, 13, ctx.ical_link(), "url"), \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 16, "BOOKINGS.LINK_ICAL"));
      }
    }, dependencies: [MatRippleModule, MatRipple, IconComponent, TranslatePipe, SafePipe], encapsulation: 2 });
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
            [href]="outlook_link()"
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
            [href]="google_link()"
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
      imports: [MatRippleModule, IconComponent, TranslatePipe, SafePipe]
    }]
  }], null, { event: [{ type: Input, args: [{ isSignal: true, alias: "event", required: true }] }], prefix: [{ type: Input, args: [{ isSignal: true, alias: "prefix", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingCalendarLinksComponent, { className: "BookingCalendarLinksComponent", filePath: "apps/workplace/src/app/book/booking-calendar-links.component.ts", lineNumber: 59 });
})();

export {
  BookingCalendarLinksComponent
};
//# debugId=ea2dd1dc-78ec-594a-88df-70f12de357ea
//# sourceMappingURL=chunk-XWSFZYUN.js.map
