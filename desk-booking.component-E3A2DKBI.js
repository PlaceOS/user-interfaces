import {
  AsyncHandler,
  Component,
  IconComponent,
  MatRipple,
  MatRippleModule,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  SettingsService,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext
} from "./chunk-EJR6SPGD.js";
import "./chunk-653SOEEV.js";

// apps/map-kiosk/src/app/footer-menu.component.ts
var _c0 = () => ["/desks"];
var _c1 = () => ["/explore"];
var FooterMenuComponent = class _FooterMenuComponent {
  static {
    this.\u0275fac = function FooterMenuComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FooterMenuComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterMenuComponent, selectors: [["footer-menu"]], decls: 13, vars: 4, consts: [[1, "border-base-200", "bg-base-100", "flex", "w-full", "items-center", "divide-x", "border-t", "border-solid"], ["btn", "", "matRipple", "", "routerLinkActive", "bg-primary! text-white!", 1, "h-16", "flex-1", "rounded-none!", 3, "routerLink"], [1, "flex", "flex-col", "items-center", "justify-center"], [1, "text-2xl"], [1, "m-0"]], template: function FooterMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "a", 1)(2, "div", 2)(3, "icon", 3);
        \u0275\u0275text(4, "book");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6, "Book Desk");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "a", 1)(8, "div", 2)(9, "icon", 3);
        \u0275\u0275text(10, "place");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p", 4);
        \u0275\u0275text(12, "Map");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c0));
        \u0275\u0275advance(6);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c1));
      }
    }, dependencies: [MatRippleModule, MatRipple, RouterModule, RouterLink, RouterLinkActive, IconComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterMenuComponent, [{
    type: Component,
    args: [{
      selector: "footer-menu",
      template: `
        <div
            class="border-base-200 bg-base-100 flex w-full items-center divide-x border-t border-solid"
        >
            <a
                btn
                matRipple
                class="h-16 flex-1 rounded-none!"
                [routerLink]="['/desks']"
                routerLinkActive="bg-primary! text-white!"
            >
                <div class="flex flex-col items-center justify-center">
                    <icon class="text-2xl">book</icon>
                    <p class="m-0">Book Desk</p>
                </div>
            </a>
            <a
                btn
                matRipple
                class="h-16 flex-1 rounded-none!"
                [routerLink]="['/explore']"
                routerLinkActive="bg-primary! text-white!"
            >
                <div class="flex flex-col items-center justify-center">
                    <icon class="text-2xl">place</icon>
                    <p class="m-0">Map</p>
                </div>
            </a>
        </div>
    `,
      imports: [MatRippleModule, RouterModule, IconComponent]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterMenuComponent, { className: "FooterMenuComponent", filePath: "apps/map-kiosk/src/app/footer-menu.component.ts", lineNumber: 40 });
})();

// apps/map-kiosk/src/app/desk-booking.component.ts
var DeskBookingComponent = class _DeskBookingComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._settings = inject(SettingsService);
    this._router = inject(Router);
    this.countdown_time = signal(
      5 * 60 * 1e3,
      ...ngDevMode ? [{ debugName: "countdown_time" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    this.countdown_time.set(this._settings.get("app.kiosk_reset_delay") || 5 * 60 * 1e3);
    this.resetCountdown();
  }
  resetCountdown() {
    this.timeout("reset", () => this._router.navigate(["/explore"]), this.countdown_time());
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275DeskBookingComponent_BaseFactory;
      return function DeskBookingComponent_Factory(__ngFactoryType__) {
        return (\u0275DeskBookingComponent_BaseFactory || (\u0275DeskBookingComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DeskBookingComponent)))(__ngFactoryType__ || _DeskBookingComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskBookingComponent, selectors: [["", "desk-booking", ""]], features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 0, template: function DeskBookingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "footer-menu");
      }
    }, dependencies: [FooterMenuComponent], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background: #f0f0f0;\n}\ndesk-flow-listing[_ngcontent-%COMP%] {\n  max-height: calc(100% - 4rem);\n}\n/*# sourceMappingURL=desk-booking.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskBookingComponent, [{
    type: Component,
    args: [{ selector: "[desk-booking]", template: ` <footer-menu /> `, imports: [FooterMenuComponent], styles: ["/* angular:styles/component:css;244c8abbe54d2684acabd05d62942740663f32a34d9e8f3771c94d8f608432ea;/home/runner/work/user-interfaces/user-interfaces/apps/map-kiosk/src/app/desk-booking.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background: #f0f0f0;\n}\ndesk-flow-listing {\n  max-height: calc(100% - 4rem);\n}\n/*# sourceMappingURL=desk-booking.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskBookingComponent, { className: "DeskBookingComponent", filePath: "apps/map-kiosk/src/app/desk-booking.component.ts", lineNumber: 26 });
})();
export {
  DeskBookingComponent
};
//# debugId=feef3514-d420-5a6c-9421-7d90fa12cb44
//# sourceMappingURL=desk-booking.component-E3A2DKBI.js.map
