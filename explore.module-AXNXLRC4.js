import {
  LandingStateService
} from "./chunk-DAYVQTQW.js";
import {
  ExploreMapViewComponent,
  FooterMenuComponent,
  TopbarComponent
} from "./chunk-ZLUBY3U3.js";
import {
  AsyncHandler,
  Component,
  DesksService,
  ExploreStateService,
  IconComponent,
  LevelPipe,
  MAP_FEATURE_DATA,
  MatTooltip,
  MatTooltipModule,
  NgModule,
  OrganisationService,
  RouterModule,
  TranslatePipe,
  computed,
  differenceInMinutes,
  inject,
  setClassMetadata,
  signal,
  toSignal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-S4NKVKWG.js";

// apps/workplace/src/app/explore/event-pin.component.ts
var EventPinComponent = class _EventPinComponent {
  constructor() {
    this._data = inject(MAP_FEATURE_DATA);
  }
  get fill() {
    return this._data.fill || "var(--secondary)";
  }
  get stroke() {
    return this._data.stroke || "var(--secondary-focus)";
  }
  get icon_color() {
    return this._data.icon_color || "var(--secondary-content)";
  }
  static {
    this.\u0275fac = function EventPinComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EventPinComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventPinComponent, selectors: [["event-map-pin"]], decls: 10, vars: 4, consts: [[1, "pointer-events-auto", "absolute", "bottom-0", "left-1/2", "-translate-x-1/2"], ["width", "48", "height", "64", "viewBox", "0 0 48 64", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["id", "event-pin-shadow", "x", "-4", "y", "0", "width", "56", "height", "72", "filterUnits", "userSpaceOnUse", "color-interpolation-filters", "sRGB"], ["dx", "0", "dy", "2", "stdDeviation", "2", "flood-opacity", "0.3"], ["filter", "url(#event-pin-shadow)"], ["d", "M24 4\n                           C26 4 28 5 30 7\n                           L42 19\n                           C44 21 45 23 45 25\n                           C45 27 44 29 42 31\n                           L28 45\n                           C26 47 25 49 24 52\n                           C23 49 22 47 20 45\n                           L6 31\n                           C4 29 3 27 3 25\n                           C3 23 4 21 6 19\n                           L18 7\n                           C20 5 22 4 24 4\n                           Z", "stroke-width", "2"], [1, "absolute", "left-0", "top-0", "flex", "h-[52px]", "w-full", "items-center", "justify-center"], [1, "text-2xl"]], template: function EventPinComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(1, "svg", 1)(2, "defs")(3, "filter", 2);
        \u0275\u0275element(4, "feDropShadow", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "g", 4);
        \u0275\u0275element(6, "path", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(7, "div", 6)(8, "icon", 7);
        \u0275\u0275text(9, " calendar_month ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275attribute("fill", ctx.fill)("stroke", ctx.stroke);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("color", ctx.icon_color);
      }
    }, dependencies: [IconComponent], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=event-pin.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventPinComponent, [{
    type: Component,
    args: [{ selector: `event-map-pin`, template: `
        <div
            class="pointer-events-auto absolute bottom-0 left-1/2 -translate-x-1/2"
        >
            <svg
                width="48"
                height="64"
                viewBox="0 0 48 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <filter
                        id="event-pin-shadow"
                        x="-4"
                        y="0"
                        width="56"
                        height="72"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feDropShadow
                            dx="0"
                            dy="2"
                            stdDeviation="2"
                            flood-opacity="0.3"
                        />
                    </filter>
                </defs>
                <!-- Diamond shape: rounded top/left/right corners, pointed bottom -->
                <g filter="url(#event-pin-shadow)">
                    <path
                        d="M24 4
                           C26 4 28 5 30 7
                           L42 19
                           C44 21 45 23 45 25
                           C45 27 44 29 42 31
                           L28 45
                           C26 47 25 49 24 52
                           C23 49 22 47 20 45
                           L6 31
                           C4 29 3 27 3 25
                           C3 23 4 21 6 19
                           L18 7
                           C20 5 22 4 24 4
                           Z"
                        [attr.fill]="fill"
                        [attr.stroke]="stroke"
                        stroke-width="2"
                    />
                </g>
            </svg>
            <div
                class="absolute left-0 top-0 flex h-[52px] w-full items-center justify-center"
            >
                <icon class="text-2xl" [style.color]="icon_color">
                    calendar_month
                </icon>
            </div>
        </div>
    `, imports: [IconComponent], styles: ["/* angular:styles/component:css;aca37b045377af9e61ae87ec9ceba230614f528def48741d3190431076d12a3b;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/explore/event-pin.component.ts */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=event-pin.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventPinComponent, { className: "EventPinComponent", filePath: "apps/workplace/src/app/explore/event-pin.component.ts", lineNumber: 77 });
})();

// apps/workplace/src/app/explore/explore.component.ts
var _c0 = (a0) => ({ minutes: a0 });
function ExploreComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "topbar");
  }
}
function ExploreComponent_Conditional_4_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(1, 1, "COMMON.BEGINS_IN", \u0275\u0275pureFunction1(5, _c0, ctx_r1.begins_in()), ctx_r1.begins_in()), " ");
  }
}
function ExploreComponent_Conditional_4_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(1, 1, "COMMON.ENDS_IN", \u0275\u0275pureFunction1(5, _c0, ctx_r1.ends_in()), ctx_r1.ends_in()), " ");
  }
}
function ExploreComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5);
    \u0275\u0275declareLet(5);
    \u0275\u0275pipe(6, "level");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 6);
    \u0275\u0275conditionalCreate(9, ExploreComponent_Conditional_4_Conditional_9_Template, 2, 7)(10, ExploreComponent_Conditional_4_Conditional_10_Template, 2, 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 7);
    \u0275\u0275listener("click", function ExploreComponent_Conditional_4_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pinEvent());
    });
    \u0275\u0275elementStart(12, "icon");
    \u0275\u0275text(13, "place");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.next_event().title);
    const lvl_r3 = \u0275\u0275pipeBind1(6, 3, ((tmp_2_0 = ctx_r1.next_event().system) == null ? null : tmp_2_0.zones) || ctx_r1.next_event().zones);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (lvl_r3 == null ? null : lvl_r3.display_name) || (lvl_r3 == null ? null : lvl_r3.name), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.begins_in() ? 9 : 10);
  }
}
function ExploreComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "footer-menu");
  }
}
var ExploreComponent = class _ExploreComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._desks = inject(DesksService);
    this._landing = inject(LandingStateService);
    this._explore = inject(ExploreStateService);
    this._org = inject(OrganisationService);
    this._upcoming = toSignal(this._landing.upcoming_events);
    this._time = signal(Date.now(), ...ngDevMode ? [{ debugName: "_time" }] : (
      /* istanbul ignore next */
      []
    ));
    this.next_event = computed(() => {
      const upcoming = this._upcoming()?.[0];
      if (!upcoming)
        return null;
      if (upcoming.type === "desk" || upcoming.system) {
        return upcoming;
      }
      return null;
    }, ...ngDevMode ? [{ debugName: "next_event" }] : (
      /* istanbul ignore next */
      []
    ));
    this.begins_in = computed(() => {
      const event = this.next_event();
      if (!event)
        return 0;
      return Math.max(0, differenceInMinutes(event.date, this._time()));
    }, ...ngDevMode ? [{ debugName: "begins_in" }] : (
      /* istanbul ignore next */
      []
    ));
    this.ends_in = computed(() => {
      const event = this.next_event();
      if (!event)
        return 0;
      return Math.max(0, differenceInMinutes(event.date_end, this._time()));
    }, ...ngDevMode ? [{ debugName: "ends_in" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  get hide_nav() {
    return localStorage.getItem("PlaceOS.hide_nav") === "true";
  }
  ngOnInit() {
    this._desks.error_on_host = false;
    this.interval("time", () => this._time.set(Date.now()));
  }
  pinEvent() {
    const event = this.next_event();
    if (!event)
      return;
    const lvl = this._org.levelWithID(event.system?.zones || event.zones);
    const id = event.system?.map_id || event.extension_data.map_id;
    this._explore.setLevel(lvl.id);
    this.subscription("upcoming", () => this._explore.setFeatures("_upcoming_", []));
    this._explore.setFeatures("_upcoming_", [
      {
        location: id,
        content: EventPinComponent,
        data: { event }
      }
    ]);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275ExploreComponent_BaseFactory;
      return function ExploreComponent_Factory(__ngFactoryType__) {
        return (\u0275ExploreComponent_BaseFactory || (\u0275ExploreComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ExploreComponent)))(__ngFactoryType__ || _ExploreComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreComponent, selectors: [["app-explore"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 3, consts: [[1, "bg-base-200", "flex", "h-1/2", "flex-1", "flex-col-reverse", "sm:flex-row"], [1, "relative", "z-0", "flex", "h-1/2", "flex-1", "flex-col", "overflow-hidden", "sm:h-auto"], [1, "border-base-300", "bg-base-100", "absolute", "top-2", "right-2", "flex", "items-center", "space-x-2", "rounded-full", "border", "p-1"], [1, "max-w-[40vw]", "flex-1", "px-4", "leading-tight"], [1, "truncate"], [1, "truncate", "text-xs", "opacity-60"], [1, "bg-base-200", "rounded", "px-2", "py-1", "text-xs"], ["icon", "", "matRipple", "", "matTooltip", "Pin my booking", 1, "border-base-200", "bg-secondary", "text-secondary-content", "border", 3, "click"]], template: function ExploreComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ExploreComponent_Conditional_0_Template, 1, 0, "topbar");
        \u0275\u0275elementStart(1, "div", 0)(2, "main", 1);
        \u0275\u0275element(3, "explore-map-view");
        \u0275\u0275conditionalCreate(4, ExploreComponent_Conditional_4_Template, 14, 5, "div", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(5, ExploreComponent_Conditional_5_Template, 1, 0, "footer-menu");
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx.hide_nav ? 0 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.next_event() ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.hide_nav ? 5 : -1);
      }
    }, dependencies: [
      TopbarComponent,
      FooterMenuComponent,
      ExploreMapViewComponent,
      IconComponent,
      MatTooltipModule,
      MatTooltip,
      TranslatePipe,
      LevelPipe
    ], styles: ["\n[_nghost-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=explore.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreComponent, [{
    type: Component,
    args: [{ selector: "app-explore", template: `
        @if (!hide_nav) {
            <topbar />
        }
        <div class="bg-base-200 flex h-1/2 flex-1 flex-col-reverse sm:flex-row">
            <main
                class="relative z-0 flex h-1/2 flex-1 flex-col overflow-hidden sm:h-auto"
            >
                <explore-map-view></explore-map-view>
                @if (next_event()) {
                    <div
                        class="border-base-300 bg-base-100 absolute top-2 right-2 flex items-center space-x-2 rounded-full border p-1"
                    >
                        <div class="max-w-[40vw] flex-1 px-4 leading-tight">
                            <div class="truncate">{{ next_event().title }}</div>
                            <div class="truncate text-xs opacity-60">
                                @let lvl =
                                    next_event().system?.zones ||
                                        next_event().zones | level;
                                {{ lvl?.display_name || lvl?.name }}
                            </div>
                        </div>
                        <div class="bg-base-200 rounded px-2 py-1 text-xs">
                            @if (begins_in()) {
                                {{
                                    'COMMON.BEGINS_IN'
                                        | translate
                                            : { minutes: begins_in() }
                                            : begins_in()
                                }}
                            } @else {
                                {{
                                    'COMMON.ENDS_IN'
                                        | translate
                                            : { minutes: ends_in() }
                                            : ends_in()
                                }}
                            }
                        </div>
                        <button
                            icon
                            matRipple
                            matTooltip="Pin my booking"
                            class="border-base-200 bg-secondary text-secondary-content border"
                            (click)="pinEvent()"
                        >
                            <icon>place</icon>
                        </button>
                    </div>
                }
            </main>
        </div>

        @if (!hide_nav) {
            <footer-menu />
        }
    `, imports: [
      TopbarComponent,
      FooterMenuComponent,
      ExploreMapViewComponent,
      IconComponent,
      TranslatePipe,
      LevelPipe,
      MatTooltipModule
    ], styles: ["/* angular:styles/component:css;272d43022913da8b6c60debddc182b5c3d8e2877b2c9bac0eacbbdf7c40c19c6;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/explore/explore.component.ts */\n:host {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=explore.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreComponent, { className: "ExploreComponent", filePath: "apps/workplace/src/app/explore/explore.component.ts", lineNumber: 97 });
})();

// apps/workplace/src/app/explore/explore.module.ts
var ROUTES = [
  { path: "", component: ExploreComponent, title: "Explore" },
  {
    path: ":search_type",
    component: ExploreComponent,
    title: "Explore"
  }
];
var ExploreModule = class _ExploreModule {
  static {
    this.\u0275fac = function ExploreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ExploreModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [{ provide: MAP_FEATURE_DATA, useValue: {} }], imports: [ExploreComponent, RouterModule.forChild(ROUTES)] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [ExploreComponent, RouterModule.forChild(ROUTES)],
      providers: [{ provide: MAP_FEATURE_DATA, useValue: {} }]
    }]
  }], null, null);
})();
export {
  ExploreModule
};
//# sourceMappingURL=explore.module-AXNXLRC4.js.map
