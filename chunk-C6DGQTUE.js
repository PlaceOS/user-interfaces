import {
  UserPipe
} from "./chunk-EGW53QGF.js";
import {
  MAP_FEATURE_DATA,
  SettingsService,
  settingSignal
} from "./chunk-AM5MUWVH.js";
import {
  AsyncPipe,
  Component,
  ElementRef,
  TranslatePipe,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-NUJFPPHE.js";

// libs/explore/src/lib/explore-parking-info.component.ts
function ExploreParkingInfoComponent_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "user");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, \u0275\u0275pipeBind1(2, 1, ctx_r0.user()))?.name || ctx_r0.user(), " ");
  }
}
function ExploreParkingInfoComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(3, ExploreParkingInfoComponent_Conditional_6_Conditional_3_Template, 4, 5, "div", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.status() === "not-bookable" ? \u0275\u0275pipeBind1(2, 2, "COMMON.STATUS_NOT_BOOKABLE") : ctx_r0.status(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.show_parking_users() && ctx_r0.user() ? 3 : -1);
  }
}
function ExploreParkingInfoComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 5)(1, "div", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "div", 9);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "EXPLORE.PARKING_PLATE_NUMBER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.plate_number() || "PLATE NO 1", " ");
  }
}
var ExploreParkingInfoComponent = class _ExploreParkingInfoComponent {
  constructor() {
    this._data = inject(MAP_FEATURE_DATA);
    this._element = inject(ElementRef);
    this._settings = inject(SettingsService);
    this.status = computed(
      () => this._data.assigned_to === this._data.user && this._data.user ? "reserved" : this._data.status,
      ...ngDevMode ? [{ debugName: "status" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.user = signal(
      this._data.user,
      ...ngDevMode ? [{ debugName: "user" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.name = signal(
      this._data.name || this._data.identifier,
      ...ngDevMode ? [{ debugName: "name" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.map_id = signal(
      this._data.map_id,
      ...ngDevMode ? [{ debugName: "map_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.plate_number = signal(
      this._data.plate_number,
      ...ngDevMode ? [{ debugName: "plate_number" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_parking_users = settingSignal("parking.show_users", false);
    this.show_status_details = settingSignal("parking.show_status_details", true);
    this.is_concierge = computed(
      () => this._settings.app_name.toLowerCase().includes("concierge"),
      ...ngDevMode ? [{ debugName: "is_concierge" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function ExploreParkingInfoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreParkingInfoComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreParkingInfoComponent, selectors: [["explore-parking-info"]], decls: 8, vars: 19, consts: [[1, "bg-base-300", "absolute", "top-1/2", "left-1/2", "rounded-lg", "rounded-tl-none!", "p-2", "text-left", "shadow-sm"], [1, "triangle", "absolute", "top-0.5", "left-0.5"], [1, "flex", "space-x-2"], [1, "flex", "min-w-24", "flex-col", "pl-1", "leading-tight"], [1, "whitespace-nowrap"], [1, "bg-base-100", "text-base-content", "relative", "flex", "h-full", "flex-col", "rounded-sm", "px-2", "leading-tight", "shadow-sm"], [1, "text-sm", "font-medium", "capitalize"], [1, "text-sm"], [1, "w-full", "pt-1", "text-center", "text-[0.625rem]", "font-medium", "whitespace-nowrap"], [1, "w-full", "pb-1", "text-center", "font-mono", "uppercase"]], template: function ExploreParkingInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0);
        \u0275\u0275domElement(1, "div", 1);
        \u0275\u0275domElementStart(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275text(5);
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(6, ExploreParkingInfoComponent_Conditional_6_Template, 4, 4);
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(7, ExploreParkingInfoComponent_Conditional_7_Template, 6, 4, "div", 5);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("bg-error!", ctx.show_status_details() && ctx.status() === "busy")("text-error-content!", ctx.show_status_details() && ctx.status() === "busy")("bg-warning!", ctx.show_status_details() && ctx.status() === "reserved")("text-warning-content!", ctx.show_status_details() && ctx.status() === "reserved")("bg-success!", ctx.show_status_details() && ctx.status() === "free")("text-success-content!", ctx.show_status_details() && ctx.status() === "free")("bg-neutral!", ctx.show_status_details() && ctx.status() === "not-bookable")("text-neutral-content!", ctx.show_status_details() && ctx.status() === "not-bookable");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.name());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.show_status_details() ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.show_status_details() && ctx.is_concierge() && ctx.plate_number() ? 7 : -1);
      }
    }, dependencies: [AsyncPipe, TranslatePipe, UserPipe], styles: ["\n.triangle[_ngcontent-%COMP%] {\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  border-width: 0.5rem 0.5rem 0 0;\n  border-color: currentColor transparent transparent transparent;\n  transform: rotate(0deg);\n}\n/*# sourceMappingURL=explore-parking-info.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreParkingInfoComponent, [{
    type: Component,
    args: [{ selector: "explore-parking-info", template: `
        <div
            class="bg-base-300 absolute top-1/2 left-1/2 rounded-lg rounded-tl-none! p-2 text-left shadow-sm"
            [class.bg-error!]="show_status_details() && status() === 'busy'"
            [class.text-error-content!]="
                show_status_details() && status() === 'busy'
            "
            [class.bg-warning!]="
                show_status_details() && status() === 'reserved'
            "
            [class.text-warning-content!]="
                show_status_details() && status() === 'reserved'
            "
            [class.bg-success!]="show_status_details() && status() === 'free'"
            [class.text-success-content!]="
                show_status_details() && status() === 'free'
            "
            [class.bg-neutral!]="
                show_status_details() && status() === 'not-bookable'
            "
            [class.text-neutral-content!]="
                show_status_details() && status() === 'not-bookable'
            "
        >
            <div class="triangle absolute top-0.5 left-0.5"></div>
            <div class="flex space-x-2">
                <div class="flex min-w-24 flex-col pl-1 leading-tight">
                    <div class="whitespace-nowrap">{{ name() }}</div>
                    @if (show_status_details()) {
                        <div class="text-sm font-medium capitalize">
                            {{
                                status() === 'not-bookable'
                                    ? ('COMMON.STATUS_NOT_BOOKABLE' | translate)
                                    : status()
                            }}
                        </div>
                        @if (show_parking_users() && user()) {
                            <div class="text-sm">
                                {{ (user() | user | async)?.name || user() }}
                            </div>
                        }
                    }
                </div>
                @if (
                    show_status_details() && is_concierge() && plate_number()
                ) {
                    <div
                        class="bg-base-100 text-base-content relative flex h-full flex-col rounded-sm px-2 leading-tight shadow-sm"
                    >
                        <div
                            class="w-full pt-1 text-center text-[0.625rem] font-medium whitespace-nowrap"
                        >
                            {{ 'EXPLORE.PARKING_PLATE_NUMBER' | translate }}
                        </div>
                        <div
                            class="w-full pb-1 text-center font-mono uppercase"
                        >
                            {{ plate_number() || 'PLATE NO 1' }}
                        </div>
                    </div>
                }
            </div>
        </div>
    `, imports: [AsyncPipe, TranslatePipe, UserPipe], styles: ["/* angular:styles/component:css;186a95b4c185bcd2753f7ef9d30513d06855e35c348eb8e66dff829f779ea78f;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-parking-info.component.ts */\n.triangle {\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  border-width: 0.5rem 0.5rem 0 0;\n  border-color: currentColor transparent transparent transparent;\n  transform: rotate(0deg);\n}\n/*# sourceMappingURL=explore-parking-info.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreParkingInfoComponent, { className: "ExploreParkingInfoComponent", filePath: "libs/explore/src/lib/explore-parking-info.component.ts", lineNumber: 95 });
})();

export {
  ExploreParkingInfoComponent
};
//# sourceMappingURL=chunk-C6DGQTUE.js.map
